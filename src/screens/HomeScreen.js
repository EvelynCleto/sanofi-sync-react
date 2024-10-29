import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const API_URL = "http://localhost:3000/api"; // URL do backend

const Toast = ({ message, onClose }) => (
  <View style={styles.toast}>
    <Text style={{ color: 'white' }}>{message}</Text>
    <TouchableOpacity onPress={onClose} style={styles.toastCloseButton}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>X</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [time, setTime] = useState(new Date());
  const [ultimoPonto, setUltimoPonto] = useState('Nenhum ponto registrado');
  const [historicoPontos, setHistoricoPontos] = useState([]);
  const [novoCurso, setNovoCurso] = useState('');
  const [cursosDisponiveis, setCursosDisponiveis] = useState([]);
  const [cursosConcluidos, setCursosConcluidos] = useState([]);
  const [totalPontos, setTotalPontos] = useState(0);
  const [totalTreinamentos, setTotalTreinamentos] = useState(0);
  const [toastMessage, setToastMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    loadCourses();
    return () => clearInterval(timer);
  }, []);

  const showMessage = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const loadCourses = async () => {
    try {
      const response = await fetch(`${API_URL}/courses`);
      const data = await response.json();
      setCursosDisponiveis(data.availableCourses || []);
      setCursosConcluidos(data.completedCourses || []);
      showMessage("Cursos carregados com sucesso!");
    } catch (error) {
      console.error("Erro ao carregar cursos:", error);
      showMessage("Erro ao carregar cursos.");
    }
  };

  const registrarPonto = async () => {
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString();
    const pontosDeHoje = historicoPontos.filter(ponto => ponto.date === currentDay);

    if (pontosDeHoje.length >= 4) {
      showMessage('Você já registrou 4 pontos hoje.');
      return;
    }

    const currentTime = currentDate.toLocaleTimeString();
    const newPonto = { date: currentDay, time: currentTime };

    try {
      const response = await fetch(`${API_URL}/pontos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPonto),
      });

      if (!response.ok) {
        const errorData = await response.json();
        showMessage(`Erro ao registrar ponto: ${errorData.message || 'Tente novamente mais tarde'}`);
        return;
      }

      setUltimoPonto(currentTime);
      setHistoricoPontos([...historicoPontos, newPonto]);
      setTotalPontos(totalPontos + 1);
      showMessage('Ponto registrado com sucesso!');
    } catch (error) {
      showMessage("Erro ao conectar-se ao servidor. Verifique sua conexão.");
    }
  };

  const adicionarCurso = async () => {
    if (novoCurso.trim() === '' || cursosDisponiveis.includes(novoCurso)) {
      showMessage('Curso inválido ou já existente.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ curso: novoCurso }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        showMessage(`Erro ao adicionar curso: ${errorData.message || 'Tente novamente mais tarde'}`);
        return;
      }

      setCursosDisponiveis([...cursosDisponiveis, novoCurso]);
      setNovoCurso('');
      showMessage('Curso adicionado com sucesso!');
    } catch (error) {
      showMessage("Erro ao conectar-se ao servidor. Verifique sua conexão.");
    }
  };

  const concluirCurso = async (curso) => {
    try {
      const response = await fetch(`${API_URL}/concluirCurso`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ curso }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        showMessage(`Erro ao concluir curso: ${errorData.message || 'Tente novamente mais tarde'}`);
        return;
      }

      setCursosConcluidos([...cursosConcluidos, curso]);
      setCursosDisponiveis(cursosDisponiveis.filter(c => c !== curso));
      setTotalTreinamentos(totalTreinamentos + 1);
      showMessage('Curso concluído com sucesso!');
    } catch (error) {
      showMessage("Erro ao conectar-se ao servidor. Verifique sua conexão.");
    }
  };

  const enviarFormulario = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      showMessage('Preencha todos os campos do formulário.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/contato`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        showMessage(`Erro ao enviar formulário: ${errorData.error || 'Tente novamente mais tarde'}`);
        return;
      }

      showMessage("Formulário enviado com sucesso!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      showMessage("Erro ao conectar-se ao servidor. Verifique sua conexão.");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Bem-vindo ao Portal de Funcionários</Text>
            <Text>Escolha uma das seções abaixo para explorar as funcionalidades.</Text>
          </View>
        );
      case 'formulario':
        return (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Formulário de Contato</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Nome"
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Email"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Mensagem"
              value={formData.message}
              onChangeText={(text) => setFormData({ ...formData, message: text })}
              multiline
            />
            <TouchableOpacity style={styles.button} onPress={enviarFormulario}>
              <Text style={styles.buttonText}>Enviar Formulário</Text>
            </TouchableOpacity>
          </View>
        );
      case 'ponto':
        return (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Registrar Ponto</Text>
            <Text>Último ponto registrado: {ultimoPonto}</Text>
            <TouchableOpacity style={styles.button} onPress={registrarPonto}>
              <Text style={styles.buttonText}>Registrar Ponto Agora</Text>
            </TouchableOpacity>
          </View>
        );
      case 'treinamentos':
        return (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Treinamentos</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Nome do novo curso"
              value={novoCurso}
              onChangeText={(text) => setNovoCurso(text)}
            />
            <TouchableOpacity style={styles.button} onPress={adicionarCurso}>
              <Text style={styles.buttonText}>Adicionar Curso</Text>
            </TouchableOpacity>
            <View style={styles.listContainer}>
              <Text style={styles.subTitle}>Cursos Disponíveis</Text>
              {cursosDisponiveis.map((curso, index) => (
                <View key={index} style={styles.courseItem}>
                  <Text>{curso}</Text>
                  <TouchableOpacity onPress={() => concluirCurso(curso)} style={styles.button}>
                    <Text style={styles.buttonText}>Concluir</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <View style={styles.listContainer}>
              <Text style={styles.subTitle}>Cursos Concluídos</Text>
              {cursosConcluidos.map((curso, index) => (
                <Text key={index}>{curso}</Text>
              ))}
            </View>
          </View>
        );
      case 'dashboard':
        return (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Resumo e Estatísticas</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statCard}>
                <Text style={styles.subTitle}>Total de Pontos Registrados</Text>
                <Text>{totalPontos}</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.subTitle}>Total de Treinamentos Concluídos</Text>
                <Text>{totalTreinamentos}</Text>
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sanofi - Portal de Funcionários</Text>
        <Text style={styles.clock}>{time.toLocaleTimeString()}</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton(activeTab === 'home')} onPress={() => setActiveTab('home')}>
          <Text style={styles.tabButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton(activeTab === 'formulario')} onPress={() => setActiveTab('formulario')}>
          <Text style={styles.tabButtonText}>Formulário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton(activeTab === 'ponto')} onPress={() => setActiveTab('ponto')}>
          <Text style={styles.tabButtonText}>Ponto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton(activeTab === 'treinamentos')} onPress={() => setActiveTab('treinamentos')}>
          <Text style={styles.tabButtonText}>Treinamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton(activeTab === 'dashboard')} onPress={() => setActiveTab('dashboard')}>
          <Text style={styles.tabButtonText}>Dashboard</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }}>{renderContent()}</ScrollView>
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage('')} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fb' },
  header: { backgroundColor: '#004080', padding: 20, alignItems: 'center' },
  headerText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  clock: { color: 'white', marginTop: 5 },
  tabContainer: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#c2cfe0' },
  tabButton: (isActive) => ({ padding: 15, backgroundColor: isActive ? '#004080' : '#c2cfe0' }),
  tabButtonText: { color: 'white' },
  sectionContainer: { padding: 20, backgroundColor: 'white', margin: 10, borderRadius: 5, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#004080' },
  inputField: { backgroundColor: '#f0f0f0', borderRadius: 5, padding: 10, marginBottom: 10 },
  button: { backgroundColor: '#004080', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: 'white' },
  toast: { position: 'absolute', bottom: 30, left: 20, backgroundColor: '#004080', padding: 10, borderRadius: 5, flexDirection: 'row', alignItems: 'center' },
  toastCloseButton: { marginLeft: 10 },
  listContainer: { marginTop: 20 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  statCard: { backgroundColor: '#f0f0f0', padding: 20, borderRadius: 5, alignItems: 'center', width: '45%' },
});

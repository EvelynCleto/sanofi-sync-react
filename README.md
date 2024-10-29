# Sanofi Sync React

### Conversão do Site para Aplicativo Mobile com React Native

## Descrição do Projeto
O **Sanofi Sync React** é uma aplicação móvel desenvolvida em React Native, baseada no site da Sanofi, adaptada para uma experiência mobile. O projeto inclui funcionalidades para registro de ponto, gerenciamento de cursos de treinamento, e envio de mensagens de contato, com interface intuitiva e responsiva.

## Tecnologias Utilizadas
- **Frontend**: React Native, JavaScript
- **Backend**: Node.js, Express.js
- **Banco de Dados**: Armazenamento em memória para testes

## Funcionalidades
- **Navegação**: Navegação entre cinco telas principais: Home, Formulário de Contato, Registro de Ponto, Treinamentos e Dashboard.
- **Registro de Ponto**: Possibilidade de registrar até 4 pontos por dia.
- **Gerenciamento de Cursos**: Adição e conclusão de cursos de treinamento.
- **Formulário de Contato**: Envio de mensagens com validação de campos e feedback visual.
  
## Estrutura das Rotas da API
| Rota               | Método | Descrição                                    |
|--------------------|--------|----------------------------------------------|
| `/api/courses`     | GET    | Retorna a lista de cursos disponíveis.       |
| `/api/courses`     | POST   | Adiciona um novo curso.                      |
| `/api/pontos`      | POST   | Registra um novo ponto com data e hora.      |
| `/api/pontos`      | GET    | Lista todos os pontos registrados.           |
| `/api/contato`     | POST   | Envia uma mensagem de contato.               |
| `/api/contato`     | GET    | Lista todas as mensagens de contato.         |

## Instruções de Instalação e Configuração

### Pré-requisitos
- **Node.js** (>= versão 14)
- **npm** ou **Yarn**

### Passo 1: Clonar o Repositório
Primeiro, clone o repositório do GitHub e entre na pasta do projeto:
```bash
git clone https://github.com/EvelynCleto/sanofi-sync-react.git
cd sanofi-sync-react
```

### Passo 2: Instalar Dependências
Para instalar todas as dependências necessárias para o frontend e o backend:
```bash
npm install
```

### Passo 3: Configurar o Backend
Para iniciar o servidor backend:
1. **Navegue para o diretório do backend**:
   ```bash
   cd backend
   ```
2. **Inicie o servidor**:
   ```bash
   node server.js
   ```
   O backend estará disponível em `http://localhost:3000`.

### Passo 4: Configurar o Frontend
Para iniciar o app React Native:
1. **Volte ao diretório principal** e inicie o aplicativo:
   ```bash
   cd ../
   npm start
   ```
2. **Abrir o app no emulador** ou escaneie o QR code no aplicativo Expo Go.

---

## Como Usar o Projeto

- **Home**: A tela inicial com instruções básicas de uso.
- **Formulário de Contato**: Permite enviar uma mensagem preenchendo nome, email e mensagem.
- **Registro de Ponto**: Interface para registrar pontos, com limite de até 4 pontos por dia.
- **Treinamentos**: Possibilidade de adicionar novos cursos e concluir após o treinamento.
- **Dashboard**: Resumo dos pontos registrados e cursos concluídos.

---

## Como Acessar Cada Rota no Backend

Para acessar as rotas no backend, acesse as URLs conforme os exemplos abaixo:

- **Listar cursos disponíveis**: `http://localhost:3000/api/courses` (GET)
- **Adicionar novo curso**: `http://localhost:3000/api/courses` (POST)
- **Registrar ponto**: `http://localhost:3000/api/pontos` (POST)
- **Listar todos os pontos**: `http://localhost:3000/api/pontos` (GET)
- **Enviar mensagem de contato**: `http://localhost:3000/api/contato` (POST)
- **Listar todas as mensagens de contato**: `http://localhost:3000/api/contato` (GET)

Essas rotas podem ser acessadas diretamente no navegador ou com ferramentas como o Postman.

---

## Estrutura de Arquivos do Projeto

```markdown
sanofi-sync-react/
├── backend/               # Código do backend (Node.js, Express)
│   ├── server.js          # Arquivo principal do servidor
│   ├── . . .
├── assets/                # Arquivos de mídia e imagens
├── src/                   # Código do frontend (React Native)
│   ├── screens/           # Telas principais do aplicativo
│   ├── components/        # Componentes reutilizáveis
│   ├── App.js             # Componente raiz da aplicação
│   └── . . .
├── README.md              # Documentação do projeto
├── package.json           # Dependências e scripts
└── . . .
```


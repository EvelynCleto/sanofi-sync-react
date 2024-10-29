# Sanofi Sync React


### Projeto de Conversão de Site para Aplicativo Mobile com React Native

## Descrição do Projeto
O **Sanofi Sync React** é uma aplicação móvel desenvolvida em React Native, convertendo as funcionalidades do site Sanofi para uma experiência mobile. O projeto permite registro de ponto, gerenciamento de cursos e envio de mensagens de contato, oferecendo uma interface intuitiva e responsiva.

## Tecnologias Utilizadas
- **Frontend**: React Native, JavaScript
- **Backend**: Node.js, Express.js
- **Banco de Dados**: Armazenamento em memória (para testes)

## Funcionalidades
1. **Navegação entre Telas**: Home, Formulário de Contato, Registro de Ponto, Treinamentos e Dashboard.
2. **Registro de Ponto**: Registro de até 4 pontos por dia, com data e hora.
3. **Gerenciamento de Cursos**: Adição e conclusão de cursos.
4. **Formulário de Contato**: Envio de mensagens com validação e feedback visual.

---

## Estrutura das Rotas da API
| Rota               | Método | Descrição                                    |
|--------------------|--------|----------------------------------------------|
| `/api/courses`     | GET    | Retorna a lista de cursos disponíveis.       |
| `/api/courses`     | POST   | Adiciona um novo curso.                      |
| `/api/pontos`      | POST   | Registra um novo ponto com data e hora.      |
| `/api/pontos`      | GET    | Lista todos os pontos registrados.           |
| `/api/contato`     | POST   | Envia uma mensagem de contato.               |
| `/api/contato`     | GET    | Lista todas as mensagens de contato.         |

---

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
Instale todas as dependências necessárias para o backend e frontend, executando o comando no diretório do projeto:
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

### Passo 4: Configurar o Frontend para Web
Se preferir rodar o frontend no navegador, você pode usar o ambiente web:
1. **Volte ao diretório principal do projeto**:
   ```bash
   cd ../
   ```
2. **Inicie o aplicativo em modo web**:
   ```bash
   npm run web
   ```
   Isso iniciará o ambiente web no endereço `http://localhost:8080`. Esse modo permite verificar a interface e funcionalidades diretamente no navegador.

### Passo 5: Configurar o Frontend para Mobile
Para rodar o app no emulador ou em dispositivo mobile:
1. **No diretório principal do projeto**, execute o comando:
   ```bash
   npm start
   ```
2. **Emulador ou dispositivo**: No Expo, escaneie o QR code com o Expo Go App ou utilize um emulador de sua escolha.

---

## Como Usar o Projeto

1. **Home**: Tela inicial com instruções básicas sobre o uso do aplicativo.
2. **Formulário de Contato**: Permite o envio de uma mensagem preenchendo nome, email e mensagem. As mensagens são exibidas ao administrador para análise.
3. **Registro de Ponto**: Interface que permite registrar até 4 pontos por dia, mostrando data e hora do registro.
4. **Treinamentos**: Interface para gerenciar cursos. Usuários podem adicionar novos cursos e marcá-los como concluídos ao final do treinamento.
5. **Dashboard**: Mostra o resumo dos pontos registrados e cursos concluídos pelo usuário.

---

## Como Acessar Cada Rota no Backend

Para acessar as rotas do backend, utilize as URLs e métodos conforme o exemplo:

- **Listar cursos disponíveis**: `http://localhost:3000/api/courses` (GET)
- **Adicionar novo curso**: `http://localhost:3000/api/courses` (POST)
- **Registrar ponto**: `http://localhost:3000/api/pontos` (POST)
- **Listar todos os pontos**: `http://localhost:3000/api/pontos` (GET)
- **Enviar mensagem de contato**: `http://localhost:3000/api/contato` (POST)
- **Listar todas as mensagens de contato**: `http://localhost:3000/api/contato` (GET)

Essas rotas podem ser testadas diretamente no navegador ou em ferramentas como Postman.

---

## Estrutura de Arquivos do Projeto

```markdown
sanofi-sync-react/
├── backend/               # Código do backend (Node.js, Express)
│   ├── server.js          # Arquivo principal do servidor
│   └── . . .
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

## Integrantes do Grupo

- **Evelyn Cleto da Silva** - RM: 93026
- **Eduardo Kenji Pellichero Fujie** - RM: 92869
- **Roberto Claudio Castro dos Santos** - RM: 96162


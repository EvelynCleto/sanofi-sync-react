# Sanofi Sync React

![Sanofi Sync React](assets/images/logo.png) <!-- Substitua com o link ou imagem do logotipo se necessário -->

### Projeto de Conversão de Site para Aplicativo Mobile com React Native

## Descrição do Projeto
O **Sanofi Sync React** é uma aplicação móvel desenvolvida em React Native com o objetivo de converter as funcionalidades e a interface do site Sanofi para uma experiência mobile responsiva. Este projeto inclui navegação entre telas, um formulário de contato interativo, registros de ponto e gerenciamento de cursos para treinamento de funcionários.

## Tecnologias Utilizadas
- **Frontend**: React Native, JavaScript
- **Backend**: Node.js, Express.js
- **Banco de Dados**: Armazenamento em memória para dados de teste

## Funcionalidades
- Navegação entre cinco telas principais: Home, Formulário de Contato, Registro de Ponto, Treinamentos e Dashboard.
- Sistema de registro de ponto com limite de marcações diárias.
- Adição e conclusão de cursos para funcionários, com interface intuitiva.
- Envio de mensagens de contato com validação de campos e feedback visual.

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
- Node.js (>= versão 14)
- npm ou Yarn

### Passo 1: Clonar o Repositório
```bash
git clone https://github.com/EvelynCleto/sanofi-sync-react.git
cd sanofi-sync-react

# 🚀 Challenge-Jobber Frontend

Este repositório contém a parte frontend do projeto Challenge-Jobber, que é uma aplicação de gerenciamento de jobs desenvolvida com React. O projeto tem como objetivo criar um sistema CRUD (Create, Read, Update, Delete) para gerenciar jobs e integrá-lo com o backend desenvolvido em Django.

## Tecnologias Utilizadas

- **React** ⚛️
- **Docker** 🐳


### Objetivo

O objetivo deste repositório é fornecer a interface gráfica da aplicação, que se comunica com o backend via APIs para realizar operações CRUD sobre jobs.

### Telas

1. **Tela de Listagem de Jobs:**

   - Exibe uma tabela com:
     - Título do job.
     - Data de criação.
     - Botões para adicionar um novo job, editar e deletar jobs existentes.

2. **Tela de Adicionar/Editar Job:**
   - Permite adicionar um novo job ou editar um job existente.
   - Inclui campos para título, descrição e imagem..


## Como Rodar o Projeto

Você pode rodar o projeto localmente usando Docker ou configurando manualmente em sua máquina.

### Rodando com Docker

1. **Clone o repositório:**

   ```bash
   git clone git@github.com:naiaraxavier/challenge-jobber-frontend.git
   ```

2. **Navegue até o diretório raiz do projeto:**

   ```bash
   cd challenge-jobber-frontend
   ```


3. **Configure as variáveis de Ambiente:**

- Copie o arquivo .env_example e renomeie para .env.
- Preencha as variáveis de ambiente no arquivo .env com as informações adequadas


4. **Suba o container com Docker Compose:**

   ```bash
   docker-compose up --build
   ```

5. **Acesse o frontend no navegador:**

   [http://localhost:3000](http://localhost:3000)


### Rodando Localmente (sem Docker)


1. **Navegue até a pasta raiz do projeto**


2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

3. **Rode o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse o frontend no navegador:**

   [http://localhost:3000](http://localhost:3000)

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
1. **Construa a imagem Docker:**
Navegue até a pasta raiz do projeto e execute o seguinte comando para construir a imagem Docker:

   ```bash
   docker build -t my-frontend-app .
   ```

2. **Execute o container Docker:**
Após a construção da imagem, você pode executar o container com o seguinte comando:

   ```bash
   docker run -p 3000:3000 my-frontend-app
   ```

Isso irá mapear a porta 3000 do container para a porta 3000 do seu host, permitindo que você acesse o frontend no navegador.

3. **Acesse o frontend no navegador:**

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

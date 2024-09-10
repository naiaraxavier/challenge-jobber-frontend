# Use a imagem base do Node.js
FROM node:16-alpine

# Define o diretório de trabalho
WORKDIR /app-frontend

# Copia o package.json e package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Executa o build da aplicação
RUN npm run build

# Expõe a porta que o Vite usará
EXPOSE 4173

# Define o comando para rodar a aplicação
CMD ["npm", "run", "preview"]


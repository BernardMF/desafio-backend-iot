FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . .

ENV NODE_PATH=./build

RUN npm run build

EXPOSE 8080
EXPOSE 27017
EXPOSE 8888

CMD ["npm", "start"]


FROM node:18.12
WORKDIR /usr/src/app

COPY . .

COPY package.json ./
RUN npm install 

EXPOSE 4000
CMD [ "node", "index.js" ]
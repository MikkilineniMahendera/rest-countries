FROM node:18-alpine
WORKDIR /react-docker-project/
COPY public/ /react-docker-project/public
COPY src/ /react-docker-project/src
COPY package.json /react-docker-project/
RUN npm install
CMD ["npm","start"]

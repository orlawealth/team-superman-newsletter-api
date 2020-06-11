FROM node:latest

COPY . /src

WORKDIR /src

RUN npm install --production

EXPOSE 7000

CMD npm start
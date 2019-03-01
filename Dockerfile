FROM node:8.15.0-alpine

WORKDIR /app

COPY . .

RUN rm -Rf node_modules

RUN npm install

EXPOSE 8000

CMD ["node", "index.js"]

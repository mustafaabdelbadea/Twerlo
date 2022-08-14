FROM node:16.15.0

# RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

RUN npm i -g @angular/cli

COPY . ./

EXPOSE 4200

CMD npm start


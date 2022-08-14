FROM node:16.15.0

# RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . ./

EXPOSE 8080

CMD npm run dev

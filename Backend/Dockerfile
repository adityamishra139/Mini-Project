FROM node:20

WORKDIR /Backend
COPY package*.json ./

RUN npm install
RUN npm i -g typescript nodemon

COPY . .
RUN npx prisma generate

RUN tsc -b


EXPOSE 3000

CMD [ "nodemon" , "dist/app.js"]



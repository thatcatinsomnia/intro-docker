FROM node:alpine3.19

ENV PORT=1333

ENV DB_CONNECTION_STRING=mongodb://db:27017

USER node

WORKDIR /app

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["npm", "run", "start"]

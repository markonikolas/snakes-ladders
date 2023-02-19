FROM node:lts-alpine as base

RUN apk add curl

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./

COPY --chown=node:node . .

FROM base as dev

ENV NODE_ENV=development

RUN pnpm install

VOLUME [ "/usr/src/app/node_modules" ]

EXPOSE ${APP_DEV_PORT}

USER node

CMD [ "pnpm", "run", "dev", "--host=0.0.0.0", "--port=8080" ]

FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD ./service/package.json /usr/src/app/package.json

RUN npm install --quiet --production --no-progress --registry=${registry:-https://registry.npmjs.org} && npm cache clean --force

ADD ./service /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]
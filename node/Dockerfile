FROM node:16

WORKDIR /app/src
RUN apt-get update && apt-get install -y wget

COPY package.json .

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz


RUN npm install --quiet
RUN npm install pg
COPY . .

EXPOSE 3000

# CMD [ "node","index.js" ]
# # ENTRYPOINT [ "node", "index.js"]

# FROM node:7.7.2-alpine
# WORKDIR /usr/app
# COPY package.json .
# RUN npm install --quiet
# COPY . .

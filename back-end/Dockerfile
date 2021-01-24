FROM node:12-alpine

ENV PORT=8080
# ENV NODE_ENV=production

WORKDIR /api-server
# ADD . ./api-server

# COPY package*.json ./
COPY . /api-server
RUN npm install


CMD ["npm","start"]

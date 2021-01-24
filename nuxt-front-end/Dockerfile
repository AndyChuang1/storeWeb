FROM node:12-alpine

# ENV NODE_ENV=production
ENV HOST 0.0.0.0

WORKDIR /nuxt-server
COPY . /nuxt-server
EXPOSE 3000

RUN npm install
RUN npm run build
CMD ["npm","start"]
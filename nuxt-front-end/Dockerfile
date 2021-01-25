FROM node:12-alpine

# ENV NODE_ENV=production
ENV HOST 0.0.0.0

WORKDIR /nuxt-server
# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files from host computer to the container
COPY . .
EXPOSE 3000
# Build the app
RUN npm run build
CMD ["npm","start"]
# Dockerfile for React frontend
FROM node:18.19.1-alpine

# Set working directory
WORKDIR /usr/src/app

# Install nodemon globally
RUN npm install -g nodemon

# Install dependencies
COPY package.json package-lock.json nodemon.json .eslintrc ./
RUN npm install

# Copy local code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to start nodemon which will use the nodemon.json configuration
CMD npm run lint && npm run fix && npm run start

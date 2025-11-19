# Use Node.js for dev
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose Vite default port
EXPOSE 4321

# Default command to run Vite dev server
CMD ["npm", "run", "dev"]

# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Default command
CMD ["npm", "run", "start:prod"]

# Use Node.js as base image
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Use Nginx to serve the application
FROM nginx:alpine

# Copy the build output
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config to serve the React app
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8414
EXPOSE 8414

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

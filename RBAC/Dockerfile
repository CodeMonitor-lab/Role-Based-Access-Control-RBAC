# Use Node.js base image
FROM node:22.14.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json, then install dependencies
COPY package*.json ./

RUN npm ci 

# Copy all remaining application files
COPY . .

# Expose the port Vite uses
EXPOSE 5173

# Run the Vite development server and allow external access
CMD ["npm", "run", "dev", "--", "--host"]

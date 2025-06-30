FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/tbc-back

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Install dependencies
RUN npm install

# Start the application
CMD ["npm", "start"]
Clone and Setup

Follow these steps to clone and run the project locally.
Prerequisites

Make sure you have the following installed:

    Node.js
    npm (Node Package Manager)
Clone the Repository

git clone https://github.com/MOHAMMAD-ALSUBAIE/Darb
#Client Setup
# Navigate to the client directory
cd DARB

# Install dependencies
npm install

# Start the client
npm run dev

#Server Setup

# Navigate to the server directory
cd Backend

# Install dependencies
npm install

# Create a .env file based on .env.example and configure your environment variables



# Create an Environment File:

# Duplicate the .env.example file and rename it to .env.
# Review and update the environment variables in the newly created .env file. 

# Run command
npx prisma db push

# Start the server
nodemon src/index.ts

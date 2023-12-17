## **Darb-AI**

This repository contains the front-end and back-end implementations for **[DarbAI-API-Endpoint](https://github.com/MohammmedAb/DarbAI-API-Endpoint)**, managed by **[MohammmedAb](https://github.com/MohammmedAb/)**. Darb-AI website has a seamless and friendly user interface implemented using **React** and **Tailwind CSS**

### **Prerequisites**

**Node.js via Installer**

Download the installer directly through Node.js website: **[Node.js](https://nodejs.org/en/download)**

**nodemon via npm**

`npm install -g nodemon`

**ts-node via npm**

`npm install -g ts-node`

**typescript via npm**

`npm install -g typescript`

### **Setup**

**clone the repository**

`git clone https://github.com/MOHAMMAD-ALSUBAIE/Darb-AI.git`

#### **client setup:**

**navigate to repository**

`cd Darb-AI`

**install dependencies**

`npm install`

**start client**

`npm run dev`

#### **server setup:**

**navigate to repository**

`cd Darb-AI`

then

`cd backend`

**install dependencies**

`npm install`

**create `.env` file similar to `.env.example`.**

**the `.env` file must contain two variables: `DATABASE_URL` and `secretKey`.**

**you can accomplish this by either creating a new `PlanetScale` account, setting up a database, and filling in these variables, or by using the pre-made account variables provided to you.**

**after successfully setting up the `.env` file, run the following command to push the state of the Prisma schema file to the database.**

`npx prisma db push`

**start the server**

`nodemon src/index.ts`

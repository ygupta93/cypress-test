# Dockerfile for production environment
FROM node:18

WORKDIR /src

# Set environment variables with default values in the Dockerfile
ENV NEXT_PUBLIC_API_BASE_URL=https://api.zeus.fidelissd.com
ENV NEXTAUTH_URL=https://dev.zeus.fidelissd.com
ENV NEXTAUTH_SECRET=somesecret
ENV NEXT_PUBLIC_GOOGLE_CLIENT_ID=333107910861-d47980et5v48302f52g3n5palljbt387.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=3hsQ2FwhFnaKla4CkE9dOMiz
ENV NEXTAUTH_URL_INTERNAL=https://dev.zeus.fidelissd.com

COPY package.json ./
COPY package-lock.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
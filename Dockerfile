FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# RUN cp .env.example .env To use when feature/register is merged.
EXPOSE 3000
CMD ["npm", "start"]

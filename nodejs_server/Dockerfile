from node:8-alpine

WORKDIR /opt/server
COPY . .
RUN npm install --silent

EXPOSE 8080

CMD ["npm", "start"]
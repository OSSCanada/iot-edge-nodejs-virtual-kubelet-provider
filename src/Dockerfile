FROM node:8.11.1-alpine

WORKDIR /iotedgenodejsprovider
COPY . .

RUN ["npm", "install"]

EXPOSE 3000

CMD ["npm", "start"]
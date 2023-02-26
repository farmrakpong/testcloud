FROM node:14-alpine

# Create app directory
# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package*.json ./
# RUN npm install -g nodemon
RUN npm install

COPY . .

# Exports port ภายใน ต้องตรงกันกับ หน้าindex
EXPOSE 4001

CMD ["node" , "index.js"]

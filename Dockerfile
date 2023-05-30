FROM node:18
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .
RUN yarn add
RUN yarn run build
EXPOSE 8000
CMD [ "node", "dist/main.js" ]
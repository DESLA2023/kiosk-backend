FROM node:18
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .
RUN yarn
RUN yarn run build
EXPOSE 18000
CMD [ "node", "dist/main.js" ]
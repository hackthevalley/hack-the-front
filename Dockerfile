FROM node:14 as base
WORKDIR /usr/src/app
COPY package*.json .

FROM base as dev
RUN npm ci
COPY . .

EXPOSE 8000
CMD ["npm", "start"]

FROM base as prod-build
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM scratch as prod
COPY --from=prod-build /usr/src/app/public .
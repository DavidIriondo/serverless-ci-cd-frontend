###FIRST STEP --> BUILD
FROM node:24.12.0-alpine AS build
WORKDIR /app/build

# ADD FILES
COPY . .

#INSTALL DEPENDENCIES
RUN npm install
RUN npm run build


#INSTALL NODE TO INSTALL SERVER
FROM node:24-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/build/dist /app/dist
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "80"]

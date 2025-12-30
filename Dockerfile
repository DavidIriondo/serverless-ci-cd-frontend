###FIRST STEP --> BUILD
FROM node:24.12.0-alpine AS build
WORKDIR /app/build

# ADD FILES
COPY . .

#INSTALL DEPENDENCIES
RUN npm install
RUN npm run build

###SECOND STEP --> FINAL
FROM nginx:stable-alpine AS final
WORKDIR /app

#COPY THE BUILDED APPLICATION TO THIS STAGE
COPY --from=build /app/build/dist/ /usr/share/nginx/html/

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

#EXPOSE PORT 80 FRO HTTP
EXPOSE 80

#RUN APPLICATION
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

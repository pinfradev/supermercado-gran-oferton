# 1. Usar una imagen base de Node.js para construir la aplicación
FROM node:16 AS build

# 2. Configurar el directorio de trabajo
WORKDIR /app

# 3. Copiar los archivos de configuración (package.json y package-lock.json)
COPY package*.json ./

# 4. Instalar las dependencias necesarias
RUN npm install

# 5. Copiar el resto del código fuente
COPY . .

# 6. Construir la aplicación para producción
RUN npm run build --prod

# 7. Usar una imagen base de NGINX para servir la aplicación Angular
FROM nginx:alpine

# 8. Copiar los archivos generados en la carpeta "dist" al servidor NGINX
COPY --from=build /app/dist/supermercado-gran-oferton /usr/share/nginx/html

# 9. Exponer el puerto en el contenedor
EXPOSE 3000

# 10. Comando predeterminado para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]

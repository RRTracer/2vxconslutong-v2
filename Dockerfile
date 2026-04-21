# --- Build React app ---
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .
RUN npm run build

# --- Serve with Nginx ---
FROM nginx:alpine

# Copy build
COPY --from=build /app/build /usr/share/nginx/html

# Add custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

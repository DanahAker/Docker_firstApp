# FROM node
# COPY . /app
# WORKDIR /app
# RUN npm install
# CMD node app.js
# EXPOSE 80


FROM node
COPY . /app
WORKDIR /app
RUN npm install
CMD node app.js



# FROM postgres
# RUN apt-get update && apt-get install -y \
#     nodejs \
#     npm
# COPY . /app
# WORKDIR /app
# RUN npm install
# # CMD node app.js
# # EXPOSE 5431




# FROM postgres
# ENV POSTGRES_DB mydb
# ENV POSTGRES_USER danah1
# ENV POSTGRES_PASSWORD 1234
# COPY init.sql /docker-entrypoint-initdb.d/
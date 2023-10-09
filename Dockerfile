FROM node:18.18.0-alpine
ARG USER
USER $USER
WORKDIR /app
COPY --chown=$USER package.json yarn.lock ./
RUN yarn install
COPY --chown=$USER . /app
EXPOSE 3000
CMD ["yarn", "start"]

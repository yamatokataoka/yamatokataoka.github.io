FROM node:14.17.6-alpine
ARG USER
USER $USER
WORKDIR /blog
COPY --chown=$USER package.json yarn.lock ./
RUN yarn install
COPY --chown=$USER . /blog
EXPOSE 8080
ENTRYPOINT ["yarn", "start"]
#!/usr/bin/env bash
set -ex

export USER=$(id -u):$(id -g)

docker-compose --file compose-dev.yaml $*

#!/bin/bash

IMAGE=$1
VITE_TOQUI_JIRA_REPORT_API=$2
REGISTRY_USERNAME=$3
REGISTRY_PASSWORD_RO=$4

docker_file_path=/home/ubuntu/docker-compose.yml

cat << EOF > $docker_file_path
version: '3.4'

services:
  web-app:
    container_name: web-app
    image: $IMAGE
    ports:
      - 80:80
    environment:
      - VITE_TOQUI_JIRA_REPORT_API=${VITE_TOQUI_JIRA_REPORT_API}
EOF

echo "$REGISTRY_PASSWORD_RO" | docker login -u "$REGISTRY_USERNAME" --password-stdin
docker system prune -af
docker compose up -d
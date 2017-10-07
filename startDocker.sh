#!/bin/bash
export UID
touch .bash_history
docker-compose run --rm --service-ports front

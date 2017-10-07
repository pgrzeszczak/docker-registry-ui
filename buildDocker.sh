#!/bin/bash
docker-compose build front
docker images --quiet --filter=dangling=true | xargs --no-run-if-empty docker rmi

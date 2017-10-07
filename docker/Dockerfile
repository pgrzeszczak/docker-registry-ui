FROM node:8

LABEL maintainer="Przemysław Grzeszczak <przemyslaw.grzeszczak@gmail.com>"

RUN userdel -r node

RUN apt-get update && \
    apt-get install apt-transport-https nano && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN gpg --keyserver ha.pool.sks-keyservers.net --recv-keys B42F6819007F00F88E364FD4036A9C25BF357DD4 && \
    curl -o /usr/local/bin/gosu -SL "https://github.com/tianon/gosu/releases/download/1.10/gosu-$(dpkg --print-architecture)" && \
    curl -o /usr/local/bin/gosu.asc -SL "https://github.com/tianon/gosu/releases/download/1.10/gosu-$(dpkg --print-architecture).asc" && \
    gpg --verify /usr/local/bin/gosu.asc && \
    rm /usr/local/bin/gosu.asc && \
    chmod +x /usr/local/bin/gosu

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

WORKDIR /project
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["bash"]

#!/bin/bash

USER_ID=${LOCAL_USER_ID:-9001}

echo "Starting with UID : $USER_ID"
useradd --shell /bin/bash -u $USER_ID -o -c "" -m user
echo "user ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

echo "alias ll=\"ls -al\"" >> /home/user/.bashrc
su - user -c "git config --global push.default simple"
ln -s /.host_ssh /home/user/.ssh
ln -s /.bash_history /home/user/.bash_history

export HOME=/home/user

exec /usr/local/bin/gosu user "$@"

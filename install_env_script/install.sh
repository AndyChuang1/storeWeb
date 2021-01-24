#!/bin/bash
echo "Install curl"
sudo apt install curl
echo "Install Node.js"
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
echo "Install Git"
sudo apt-get update
sudo apt-get install git
echo "Install Dcoker"
sudo apt-get update
sudo apt-get remove docker docker-engine docker.io
sudo apt install docker.io
sudo gpasswd -a $USER docker
sudo systemctl start docker
sudo systemctl enable docker
echo "Install Docker-compose"
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

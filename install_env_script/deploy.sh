#!/bin/bash
echo Stop Running
cd ..
sudo docker-compose down

echo Remove container and Image 
sudo docker rmi -f bboy81905/storeweb_api-server
sudo docker rmi -f bboy81905/bboy81905/storeweb_nuxt-server

echo Start pulling and running
sudo docker-compose up -d

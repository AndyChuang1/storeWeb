#!/bin/bash
echo Stop Running
sudo docker-compose down

echo Remove container and Image 
sudo docker rmi -f bboy81905/storeweb_api-server
sudo docker rmi -f bboy81905/storeweb_nuxt-server



#!/bin/bash
echo Stop Running
sudo docker-compose down

echo Remove container and Image 
sudo docker rmi -f bboy81905/storeweb_api-server
sudo docker rmi -f bboy81905/storeweb_nuxt-server

echo Start pulling and running
sudo prodUrl=ec2-13-229-86-87.ap-southeast-1.compute.amazonaws.com docker-compose up -d

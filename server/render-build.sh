#!/bin/bash

# Install client and build
cd ../client
echo "Preparing prod client build "
npm install
npm run build

cd ../server;

# Move build to server
echo "Removing current build";
rm -rf ./dist
echo "Moving dist from client to server";
mv ../client/dist ./

# Install server deps
echo "installing server dependecies";
cd ../server
npm install

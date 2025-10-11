#!/bin/bash

echo "Navigating to client";
cd ../client;
npm install;
echo "Running Prod build";
npm run build;
echo "Prod build is successful!!!";

# cd ../server
echo "Removing prev dist dir from server";
rm -r ../server/dist;

echo "Moving the prod build dist folder from client to server";
mv dist ../server/;
cd ../server;
npm install;
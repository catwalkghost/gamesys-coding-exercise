# GameSys Coding Exercise

A coding exercise done to brief/spec

## Installation

Clone repository and run: 
```bash
yarn install
```
to intall all dependencies for the project.

To start Dev server run: 
```bash
yarn start:dev
```
To start Prod server run:
```bash
yarn start:prod
```

## Bundle
The bundle has been configured. Due to time restraints Post CSS and autoprefixer have not been added. It is recommended to add them

## JSON File
JSON file will be located in the assets folder after build. 
In the code I am using import to access JSON data. However, in real life situation, promises/fetch or libarries like axios or webbs can be used to fetch JSON data from the server. I have added sample code to demonstrate how this scenario can be handled.

## File structure
I am using separate file for constants. This is a good practice to keep code clean, and potenitally use .env file to set up and separate testing and prod environment.

Misc.jsx contains components like responsive background or normal images. className and/or cls can be passed as props.

utils.jsx contains basic checks utilities

## Styling
I have used slected bits from Stylific (no longer maintained) and Stylebox libraries.
Components are styled using atomic-styles. There are useful due to re-usability and clean code structure
These are imported directly into SCSS


## Potential Improvements
Unit testing has not been included. Timer can use less expensive check for time. 

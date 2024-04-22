# loadb
Loadb is a tool that helps to automates with the process of testing your application for loads.

Load balancing refers to efficiently distributing incoming network traffic across a group of backend servers, also known as a server farm or server pool. **(But we are not performing Load balancing here but load testing)**

Modern high‑traffic websites must serve hundreds of thousands, if not millions, of concurrent requests from users or clients and return the correct text, images, video, or application data, all in a fast and reliable manner. 

For your application to stand the test of time it is of importance for the application to be able to carry most of the loads coming in from requests. 

This simple tool is basically for testing your nodejs apps while developing to help reduce the stress of testing for load and also reducing the curve of leaning about load testing tools. 

## Features
- Load testing
- Get detailed test report
- Print report our in CSV format
- Get your report in GNUPLOT file 

## Basic Usage

- create a file and name it loadbtest.js
- write the following code in the file 
```node
   var loadb = require('loadb');

   var options  = {
    n: 10,
    c: 5,
    u: 'http://127.0.0.1:7000/'
  }
  loadb.basic(options);
```
- add a **loadb** command to script section in your package.json file
  ``` "loadb": "node loadbtest.js"```
- npm run loadb 

## Parameters explanation
- **c**: number of concurrency
- **n**: number of requests
- **u**: url to test
- **T**: request type e.g application/json
- **e**: print a csv file with the percentage request in time pier seconds
- **p**: send a post request with a file that has the request data

## Print a csv file
```node
   var loadb = require('loadb');

   var options  = {
    n: 10,
    c: 5,
    u: 'http://127.0.0.1:7000/'
  }
  loadb.pxls(options);
```

## Sending a Post request
```node
   var loadb = require('loadb');

   var options  = {
    n: 10,
    c: 5,
    u: 'http://127.0.0.1:7000/',
    file: 'file.txt`,
    T: 'application/json'
  }
  loadb.pTest(options);
```

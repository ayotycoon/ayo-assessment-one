# Sunmola Ayokunle assessment 
docker-image-url https://hub.docker.com/repository/docker/ayotycoon/ayo-assessment-one \
github-page https://github.com/ayotycoon/ayo-assessment-one \
clone  `git clone https://github.com/ayotycoon/ayo-assessment-one.git` \
local-url: http://localhost:8089/api/v1 \
live-url: http://ayo-assessment-one.herokuapp.com/api/v1 \
I will be assuming the live-url in this README \
application-port = 8089


# HOW TO USE:
Make a POST request to the url with the body contain 'serverType' and 'virtualMachines' property.
serverType is an object contain the CPU, RAM AND HDD 
virtualMachines is an array of object, containing the virtual machine CPU, RAM AND HDD 
# Local Commands
-docker \
build docker image ``` npm run docker:build ``` \
run docker container ``` npm run docker:test ``` \
stop docker container ``` npm run docker:stop ``` \
-node \
run production mode  ``` npm start ``` \
run development mode ``` nodemon ``` \
compile to js ``` npm run build ``` 
# Enhancements
Apart from returning the total results, this service returns both the accepted and rejected virtual machines. the rejected virtual machines come with a reason why they were not accepted.
# Testing
 
``` npm run test ``` \
The test script only tests for the '`result`' property .


## EXAMPLE
Using javascript fetch
```javascript
const data = {
    "serverType": {
        "CPU": 2,
        "RAM": 32,
        "HDD": 100
    },
    "virtualMachines": [
        {
            "CPU": 1,
            "RAM": 16,
            "HDD": 10
        },
        {
            "CPU": 1,
            "RAM": 16,
            "HDD": 10
        },
        {
            "CPU": 2,
            "RAM": 32,
            "HDD": 100
        }
    ]
};

fetch('http://ayo-assessment-one.herokuapp.com/api/v1',

 {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
 
  body: JSON.stringify(data)
 })
  .then(response => response.json())
  .then(jsonRes => console.log(jsonRes));

```

Using curl

```CURL

curl --location --request POST 'http://ayo-assessment-one.herokuapp.com/api/v1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "serverType": {
        "CPU": 2,
        "RAM": 32,
        "HDD": 100
    },
    "virtualMachines": [
        {
            "CPU": 1,
            "RAM": 16,
            "HDD": 10
        },
        {
            "CPU": 1,
            "RAM": 16,
            "HDD": 10
        },
        {
            "CPU": 2,
            "RAM": 32,
            "HDD": 100
        }
    ]
}'

```
# NOTE
The function that solves the question  is in the Main.controller class ' `server_src/controllers/Main.controller.ts` '


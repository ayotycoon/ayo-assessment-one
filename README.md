## Sunmola Ayokunle assessment 
local-url: http://localhost:8089/api/v1 \
live-url: http://ayo-assessment-one.herokuapp.com/api/v1 \
 I will be assuming the live-url in this README\
 application-port = 8089

# HOW TO USE:
Make a POST request to the url with the body contain 'serverType' and 'virtualMachines' property.
serverType is an object contain the CPU, RAM AND HDD 
virtualMachines is an array of object, containing the virtual machine CPU, RAM AND HDD 
# Testing
``` npm run test ```

## EXAMPLE
Using javascript fetch
```javascript
const data = {
    "serverType": {
        "CPU": 2,
        "RAM": 32,
        "HDD": 100//docker push ayotycoon/ayo-assessment-one:tagname
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
  .then(jsonRes => console.log(jsonRes.result));

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

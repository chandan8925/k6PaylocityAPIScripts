import http from 'k6/http';
import {check,sleep} from 'k6';

// Common things
const API_URL = "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees";
const API_TOKEN = "VGVzdFVzZXIzNTY6Ml1aWE03I3pMNnM+";

// Test setup with 10 Virtual User for a duration of 60 s
export let options = {
vus: 10,
duration: '60s',
// displaying avg, min, med ,max 90 percentile, 95 percentile ,99 & 99.99 percentile
summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(90)','p(95)', 'p(99)', 'p(99.99)',]
};

export default function(){
// Authorization and content type for the payload
const params = { headers: { "Authorization": `Basic ${API_TOKEN}` ,'Content-Type': 'application/json'} };

// Payload for post call
const payload= JSON.stringify({

    "firstName": "New",
    "lastName": "Employee",
    "dependants": 3
});


let response = http.post(
`${API_URL}`,payload,
params
);

// Validate the status code, and the response for first name last name and dependent is same as the payload
check(response, {
'Post status is 200': (r) => response.status === 200,
'Post Content-Type header': (r) => response.headers['Content-Type'] === 'application/json; charset=utf-8',
'Post response firstName': (r) => response.status === 200 && response.json().firstName === "New",
'Post response lastName': (r) => response.status === 200 && response.json().lastName === "Employee",
'Post response dependents': (r) => response.status === 200 && response.json().dependants === 3,
});
// Sleep time is 2s. Total iteration time is sleep + time to finish request.
sleep(2);
}

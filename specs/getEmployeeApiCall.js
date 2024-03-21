import http from 'k6/http';
import {check,sleep} from 'k6';

// Common Data for the api
const API_URL = "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees";
const API_TOKEN = "VGVzdFVzZXIzNTY6Ml1aWE03I3pMNnM+";

// Test setup with 10 Virtual User for a duration of 60 s
// Also informing in dashboard to display "avg","min","max", "med", p(90),p(95), p(99), p(99.99) calls for the call
export let options = {
vus: 10,
duration: '60s',
summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(90)','p(95)', 'p(99)', 'p(99.99)',]
};

export default function(){
const params = { headers: { "Authorization": `Basic ${API_TOKEN}` } };
let response = http.get(
    `${API_URL}`,
    params
);

// Validate every response is 200 if not we should see in req_failed for any iteration we encounter in duration of 60s
check(
    response,
    { "Check that response status code is 200": (r) => r.status == 200 }
);
sleep(0.5);
}

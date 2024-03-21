**Performance Testing Challenge: Multiple API Endpoints**

The performance-testing scenario included two APIs, although the challenge specified only one. The tool used for this testing was k6, a popular open-source load testing framework.

Test Configuration:
Virtual Users: 10 virtual users were simulated for each test.
Duration: Each test ran for 60 seconds (1 minute).
Dashboard Metrics: The dashboard was configured to display comprehensive performance metrics for each API call, including:
Average (avg) response time
Minimum (min) response time
Maximum (max) response time
Median (med) response time
Percentiles (p):
90th percentile (p(90))
95th percentile (p(95))
99th percentile (p(99))
99.99th percentile (p(99.99))

Tested APIs:
1) Get API Performance for all the employees 
2) Post API Performance by posting an employee

   
Running the Test Case:
Here's a step-by-step guide on how to run the performance test case:

1)Download the Performance Testing Repo: Begin by obtaining the performance testing code repository.

2)Navigate to the Test Script Folder: Use your terminal to navigate to the specs folder within the downloaded project directory where the test scripts are located.

3)Run the Test with k6: Execute the test using the following k6 command, replacing filename.js with the actual name of your test script:In the terminal of the folder where the script is located write in the terminal as -> k6 run “filename.js”. Example - k6 run getEmployeeApiCall.js

4)Performance Results: After running the test, k6 will generate a report containing the performance metrics for both APIs.

Additional Considerations:
Ensure you have k6 installed and configured on your system before running the test. Refer to the k6 documentation for installation instructions: https://grafana.com/docs/grafana-cloud/k6/get-started/
The specific API endpoints and their expected responses should be incorporated into the test script itself.
Customize the test configuration (virtual users, duration) based on your specific testing requirements.


1) Get API Performance for all the employees
   
Summary:-

The test was completed successfully with a 100% pass rate (811 checks passed, 0 failed).
A total of 811 API calls were made at an average rate of 13.36 per second
 There were some slow response times observed:
Average request duration: 235 ms (with some outliers reaching up to 5.5 seconds    as based on p(99.99)
Waiting time for responses: 217 ms on average (with some outliers reaching up to 5.46 seconds)
Data Transfer:
Received data: 75 MB total (average rate of 1.2 MB/s).
Sent data: 215 kB total (average rate of 3.5 kB/s).
Request Rate: 13.36 requests per second.
Iteration Times:
Each test iteration took an average of 745 ms (ranging from 630 ms to over 6 seconds).
Virtual Users: The test ran with 10 concurrent virtual users.
The test has been running for 1 minute and 7 seconds.

Note - Simulated high user load by creating new users with continuous POST requests for 60 seconds. Following this, a GET request was made to assess the application's ability to handle this sustained load. The response time of the GET request is expected to be faster when the number of users is lower.


The screenshot for performance metrics is attached for reference for get API employee 
![image](https://github.com/chandan8925/k6PaylocityAPIScripts/assets/14102123/c9861000-56c8-440e-874b-595f2579053d)

2) Post api performance for all the employees.
 
Scenario: One payload was run with a maximum of 10 virtual users (VUs) for 1 minute and 30 seconds (including a graceful stop of 30 seconds).
Running payload:
{
    "firstName": "New",
    "lastName": "Employee",
    "dependants": 3
}

Summary:-

The test passed successfully (for all 1325 checks).
265 requests were made at an average rate of 4.26 per second.
All responses received a 200 status code (success) with no failed requests
The test verified the existence of specific data points in the response body, such as "firstName," "lastName," and "dependents."
The test verified the presence of specific headers in the response, including Content-Type.
Average request duration: 283 milliseconds (ms)
Fastest request: 96 ms
Slowest request: 5.54 seconds (only 0.01% of requests took this long)
90% of requests completed within 166 ms
95% of requests completed within 197 ms
Data received: 250 kilobytes (kB) at an average rate of 4.0 kB/s.
Data sent: 40 kB at an average rate of 642 B/s.
Virtual Users: The test ran with 10 concurrent virtual users.


The screenshot for performance metrics is attached for reference for post API employee

![image](https://github.com/chandan8925/k6PaylocityAPIScripts/assets/14102123/6a5456a5-26b6-4291-add9-cbf9b70e6e9d)


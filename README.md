# Unhandled Promise Rejection in Express.js

This repository demonstrates a common but easily overlooked error in Express.js applications: unhandled promise rejections.

The `bug.js` file contains code that simulates an asynchronous operation that might throw an error.  The error handling is incomplete, leading to an unhandled promise rejection.  This can cause unexpected behavior and make your application less stable.

The `bugSolution.js` file provides a corrected version with proper error handling using a central error handler for all routes and a promise rejection handler.
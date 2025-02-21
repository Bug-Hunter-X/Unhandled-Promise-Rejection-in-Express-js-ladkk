const express = require('express');
const app = express();
const port = 3000;

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.get('/', (req, res) => {
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(next); // Pass the error to the error handler
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
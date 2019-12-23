const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({strict: false}));

app.get('/', (request, response) =>  response.send(`hello!`));

app.listen(3000, () => console.info('Application running on port 3000'));

app.post('/api/data', (request, response) => {
  var postBody = request.body;
  response.send("data Received");
  console.log(postBody);
  });

  app.post('/api/order', (request, response) => {
    var postBody = request.body;
    response.send("data received");
    postBody.order.details.accept = 0
    var json = postBody;
    documents[postBody.order.details.id] = json;
    console.log(documents);
    io.emit("Orders", Object.values(documents));
    });

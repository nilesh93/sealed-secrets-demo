const express = require('express');
var app = express();
app.get('/', (req, res) => {

    res.send(`Hello Kubernetes SL! - My secret is - ${process.env.foo}`)
})
app.listen(8000, () => {
    console.log("app works on http://localhost:8000");
});
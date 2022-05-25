const server = require('./src/server');
const port = process.env.PORT || 8080;

server.listen(port, err => {
    if(err) 
        console.error(err);

    console.log('Server running on port: ' + port);
});
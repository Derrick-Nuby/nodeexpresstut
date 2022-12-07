const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('hello Node JS');
        
    }

    if (req.url === '/about'){
        res.end('hello is our about');
    }
    res.end(
       ` <h1> Hello ERRORS</h1>
        <p>we can't seem to find the page you are looking for</p>
        <a href = "/">Bach home</a>`
    )
})

server.listen(5000);
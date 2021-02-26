const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.createReadStream(__dirname + '/form.html').pipe(res);
       
      
        // res.write('<html>');
        // res.write('<head><title>Enter message</title></head>')
        // res.write('<body> <form action="/message" method="POST" ><input type="text" name="message"><button type="submit">Send</button></form></body>')
        // res.write('</html>');
        // return res.end();
    }

    if (url === '/message' && method === 'POST') {
        //         fs.writeFileSync('message.txt', 'fff')
        //         res.statusCode = 302;
        //         res.setHeader('Location', '/d');
        //         console.log('here');
        //        return res.end();


        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    

}



module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText : 'some hard text;'

// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard txt';

// exports.handler = requestHandler;
// exports.someText = 'some hard txt';


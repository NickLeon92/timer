const express = require("express");
const fs = require('fs')
const app = express();
const port = 3001;

app.use(express.static(__dirname + '/public'));
app.get("/", function (req, res) {

    var data = JSON.parse(fs.readFileSync(__dirname + '/timestamp.json', 'utf8'))
    console.log(data)
    const timestamp = data.time
    console.log(timestamp);

    let initTime = 0

    if (timestamp) {

        console.log('found timestamp')
        const timeDifference = (Date.parse(new Date())) - timestamp
        initTime = timeDifference / 1000

    } else {

        console.log('no timestamp found')
        const unixStamp = Date.parse(new Date())

        const timestampJSON = {"time" : unixStamp}

        fs.writeFileSync(__dirname + '/timestamp.json', JSON.stringify(timestampJSON), function writeJSON(err) {
            if (err) return console.log(err);
            console.log(JSON.stringify(file));
            console.log('writing to ' + fileName);
        })

    }

    const payload = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body style="background-color: black; color: red;">
                        <div style="text-align: center">
                            <h1>Jayde,</h1>
                            <h1>These are the all the seconds I've loved you since the second you agreed to be my girlfriend :)</h1>
                            <h1 id="counter">
                        
                            </h1>
                            <h1 style="color: turquoise;"> - Nick </h1>
                        </div>
                        <script>
                            console.log('adf')
                            setInterval(flashText, 1000);
                            const timer = document.getElementById('counter')
                    
                            let i = ${initTime}
                    
                            function flashText(){
                                timer.innerText = i + 1
                                i = i + 1
                            }
                        </script>
                    </body>
                    </html>`
    res.send(payload);
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
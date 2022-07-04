const requests = require('request');

// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

const urls = require('../config/urls.config');

exports.run = (req, res) => {
    if(!req.body.report_code){
        res.status(400).send({
            message: "No code"
        })
        return;
    }

    const options = {
        url : urls.report_runner.run,
        headers:{
            "Content-type": 'application/json'
        },
        json: {
            report_code: req.body.report_code
        }
    };

    function callback(err, response, body){
        if(!err && response.statusCode == 200){
            res.send(body);
        } else {
            res.status(500).send({
                message: "Error running report"
            });
        }
    }

    requests.post(options, callback);
}
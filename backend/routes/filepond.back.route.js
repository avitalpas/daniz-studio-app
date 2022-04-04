const router = require('express').Router()
const formidable = require('formidable');


router.route('/').post((req, res) => {
    // console.log('filepond post start')
    const form = formidable({ multiples: false });

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        let theFile = files.filepond.path;
        console.log("theFile: " + theFile);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // res.end(theFile);
    });
})

module.exports = router
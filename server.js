const express = require('express');
const fs = require('fs');
const path = require('path');
const id = require('id');

const app = express();
    res.sendFile(path.join(__dirname, 'Develop/public/assets/js/index.js'));

const port = 3001;

// app.get('/', (req, res) => {
//   res.send('Welcome to my server!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

//edit ^^

const readThenAdd = (content, file) => {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parseData = JSON.parse(data);
            parseData.push(content);
            writeToFile(file, parseData);
        }
    });
};

const writeOnFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.err(err) : console.info(`\nData written to ${destination}`)
    );

app.post('api/notes', (req, res) =>
    const { title, text } = req.body;
    if (title && text) {
        const addNote = {
            title: title,
            text: text,
            id: id(),
        };

        readThenAdd(addNote, 'db/db.json');

        const response = {
            status: 'success',
            body: addNote,
        };

        res.json(response);
        } else {
            res.json('Adding new note error')
        }
    );


const express = require('express');
 // importing the express and assiging to the constant express.
const bodyParser = require('body-parser');
// importing the body parser and assigned to constant named as bodyparser
const cors = require('cors');
// similarly imported and assined the corse (cross origin resorese sharing) to acces the data from the diffrent domines 

const app = express();
// called the express
app.use(bodyParser.json());
//used to process the data sent in the http request 
app.use(cors());
// cross origin platform is used to acces the data from the diffrent domines and called it here

let inventory = []; 
// created an array to store the data

app.post('/books', (req, res) => {
     // post method is used to send the data 
    const book = req.body;
    book.id = Math.random().toString(36).substring(7);
    // math . random will generate the random numbers and
    // it is converted to string then later to a sub string with 36 and 7
    inventory.push(book);
    //push is an inbuilt js method to push the data in an array
    res.json(inventory);
    // the data is sent to front end here the data is array
});

app.delete('/books/:id', (req, res) => { // used to delet the data
    const bookId = req.params.id;
    // extracting the id from the request
    inventory = inventory.filter((book) => book.id !== bookId);
    //    requested id removed from the array of data by using the filter method
    res.json(inventory);
    // sending the data to front end back.
});

app.get('/books', (req, res) => {
    res.json(inventory);
});

const port = 5000;// assigining the port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});//runnig the app on port and printing the op if it runs sucessfully.
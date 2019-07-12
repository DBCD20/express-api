const express = require('express')
const app = express();
const ejs = require('ejs');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => res.render('index'))

app.get('/api/employees', (req, res) => {
    const list = {"employees": ["JB", "Jonathan", "Leo"]};
    res.status(200).json(list)
});

app.post('/api/employees/new', (req, res) => {
    console.log(req.body)
    res.status(201).json({
        message: "SUCCESSFULLY CREATED"
    })

});




app.listen(3000, () => console.log("SERVER CONNECTED"))

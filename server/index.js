
const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/crud');

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.get("/users", (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById(id) 
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id; 
    UserModel.findByIdAndUpdate(id, { 
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }, { new: true })
        .then(users => res.json(users))
        .catch(err => res.json(err));
});


app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id; 
    UserModel.findByIdAndDelete(id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json({ message: "User deleted successfully" });
        })
        .catch(err => res.status(500).json({ message: "Internal server error" }));
});

app.listen(5000, () => {
    console.log('server is running on port 5000');
});

require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
const PORT = process.env.PORT || 5000;
const server = express();

server.use(cors());
server.use(bodyParser.json());

server.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});
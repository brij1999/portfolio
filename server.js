const path = require('path'),
    express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8000;
//==========================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
//==========================================================================
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
app.listen(port, () => console.log(`Server Online on port ${port}...`));

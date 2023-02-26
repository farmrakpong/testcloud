const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4001;

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.raw());
app.use(cors())

app.get('/', async (req, res) => {
            // 

    return res.json({"text":"hellow kuy"})
})

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
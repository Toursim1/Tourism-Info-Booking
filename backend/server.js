const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('TIB Server is Live - © ÖZCAN ALMAIS 2026');
});

app.get('/api/bookings', (req, res) => {
    res.json([{ id: 1, hotel: "Rixos Antalya", status: "Confirmed" }]);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

const express = require('express');
const app = express();

// تحديد البورت (Port)
// عند رفع المشروع على سيرفر حقيقي، سيعطيك الـ IP الخاص به
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Tourism Info Booking API!');
});

// مسار تجريبي لجلب الحجوزات (سيستخدمه تطبيق الأندرويد لاحقاً)
app.get('/api/bookings', (req, res) => {
    const sampleBookings = [
        { id: 1, hotel: "Grand Hotel", status: "Confirmed" },
        { id: 2, hotel: "Sea View Resort", status: "Pending" }
    ];
    res.json(sampleBookings);
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

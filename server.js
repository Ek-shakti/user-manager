const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(express.json());

// Import and use router
const userRouter = require('./routes/userRouter');
app.use('/api/users', userRouter);

// Serve static files (like index.html, css, js, images)
app.use(express.static(path.join(__dirname, 'public',`index.html`)));

//  Fallback for any other route (important for SPA or 404 handling)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});

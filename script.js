const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/send-message', (req, res) => {
  const { message } = req.body;

  // Handle the message (e.g., send it to the recipient(s) using a suitable method)
  
  // Respond with a success message
  res.json({ message: 'Message sent successfully' });
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

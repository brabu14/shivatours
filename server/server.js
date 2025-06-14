const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();
const { sendOwnerNotification, sendWelcomeEmail } = require('./mailer');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));

app.post('/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  try {
    await sendOwnerNotification({ name, email, phone, subject, message });
    await sendWelcomeEmail({ name, email });
    res.json({ success: true });
  } catch (err) {
    console.error(err); // Add this line for debugging
    res.status(500).json({ success: false, error: 'Email sending failed.' });
  }
});

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

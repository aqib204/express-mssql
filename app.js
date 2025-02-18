const express = require('express')
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

const app = express()
const port = 3000

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/users', userRoutes);

// Error Handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on: http://localhost:${port}`)
})

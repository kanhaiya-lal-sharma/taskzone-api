
const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 5000;


sequelize
  .sync({ alter: true }) 
  .then(() => {
    console.log('MySQL DB connected & models synced');

    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });

import app from './app.js';
import { sequelize } from './database/connection.js';

const PORT = 3000;

async function main() {
  try {
      // Handle DB.
      await sequelize.sync( /*{force: true}*/ );

      // Server.
      app.listen(PORT);
      console.log(`Server running at http://localhost:${PORT}`);

  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
}

main();
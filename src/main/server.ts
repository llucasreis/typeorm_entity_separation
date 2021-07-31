import { createConnection } from 'typeorm';

import envConfig from '@main/config/env';

createConnection().then(async () => {
  const app = (await import('./config/app')).default;

  app.listen(envConfig.port, () => {
    console.log("Server and database connected.");
  })
});
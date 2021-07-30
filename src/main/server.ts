import envConfig from './config/env';

import app from './config/app';

app.listen(envConfig.port, () => {
  console.log("Listening");
});
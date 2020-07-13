import { config } from './config';
import app from './app';

const {
  APP: { PORT },
} = config;

(() => {
  app.listen(PORT);
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
})();

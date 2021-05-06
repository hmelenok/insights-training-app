import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import preloadAll from 'jest-next-dynamic';

beforeAll(async () => {
  await preloadAll();
});

process.env.STATIC_URL = 'https://static.shelf.io';
process.env.SHELF_DOMAIN = 'gsstaging.net';
process.env.API_HOST = 'api.gsstaging.net';
process.env.ENVIRONMENT = 'dev';

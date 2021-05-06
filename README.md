# Shelf Awesome App xxx

### Development

#### 1. Update `package.json` with correct app name, author, git repo, etc.

#### 2. Update Environments

There are default existing env you are probably gonna to use

```
  {
    SHELF_DOMAIN, // gsstaging.net | shelf.io
    ENVIRONMENT, // dev | staging | prod
    API_HOST, // api.gsstaging.net | api.shelf.io - based on your SHELF_DOMAIM
    STATIC_URL, // for static resources
    DATADOG_CLIENT_TOKEN // token to setup logs
  };

```

To change environment variables, edit `environment.config.js`

#### 3. Configure your Redux \*(if needed)

Go to `store` directory and create your awesome actions / reducers

#### 4. Localization \*(if needed)

Open `i18next/index.ts` and edit the next line with correct resource path

```
import {resources} from '@shelf/i18n/lib/bundles/xxx-resource';
```

#### 5. Create your awesome application

- run `yarn dev` to start local server
- open `pages/index.tsx` and create some awesome stuff

#### 6. Logging

- Open `src/helper/logger.tsx` and replace `xxx` with correct app name

```
  datadogLogs.addLoggerGlobalContext('service', 'xxx');
```

#### 7. Deploy your awesome application

- update `.circleci/config.yml` with correct `s3` bucket url created by your awesome backend guys
- create PR and after merge it will be automatically deployed to provided s3 bucket

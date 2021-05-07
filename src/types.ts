import React from 'react';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      ENVIRONMENT: 'dev' | 'staging' | 'prod';
      SHELF_DOMAIN: 'shelf.io' | 'gsstaging.net';
      API_HOST: `api.shelf.io` | `api.gsstaging.net`;
      STATIC_URL: string;
      GRAPHQL_API_KEY: string;
    }
  }
}
export interface AwesomeSearchInputProps {
  text: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onCrossClick?(event: React.MouseEvent<HTMLDivElement>): void;
}

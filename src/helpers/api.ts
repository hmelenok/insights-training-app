import {Api} from '@shelf/sdk';

export const initAPI = () => {
  Api.API_HOST = process.env.API_HOST as string;
};

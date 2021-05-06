import './index.scss';
import * as React from 'react';
import App from 'next/app';
import {I18nextProvider} from 'react-i18next';
import Head from 'next/head';
import {wrapper} from '../src/store';
import i18next from '../src/i18next';
import {initLogger} from '../src/helpers/logger';
import {initAPI} from '../src/helpers/api';

initAPI();

class MyApp extends App {
  componentDidMount() {
    initLogger();
  }

  render() {
    const {Component} = this.props;

    return (
      <>
        <Head>
          <title>Awesome App Name</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="icon"
            href="https://static.shelf.io/images/favicon/favicon.ico"
            type="image/x-icon"
          />
          <link
            href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
          />
        </Head>
        <I18nextProvider i18n={i18next}>
          <Component />
        </I18nextProvider>
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);

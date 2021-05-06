import {HandlerType, datadogLogs} from '@datadog/browser-logs';

export const initLogger = () => {
  datadogLogs.init({
    clientToken: process.env.DATADOG_CLIENT_TOKEN as string,
    forwardErrorsToLogs: true,
    silentMultipleInit: true
  });
  datadogLogs.addLoggerGlobalContext('env', process.env.ENVIRONMENT);
  datadogLogs.addLoggerGlobalContext('service', 'xxx');

  if (process.env.ENVIRONMENT === 'dev') {
    datadogLogs.logger.setHandler(HandlerType.console);
  }
};

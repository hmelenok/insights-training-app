import './main.scss';
import * as React from 'react';
import {ChangeEvent, FC, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../src/store/types';
import AwesomeSearchInput from '../src/components/AwesomeSearchInput/AwesomeSearchInput';
import {ActionTypes, createAction} from '../src/store/actionTypes';
import {validateAuth} from '../src/helpers/routing';

const stateSelector = ({appName}: AppState) => appName;

const AwesomePage: FC = () => {
  const appName = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    validateAuth();
  }, []);

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      dispatch(createAction(ActionTypes.SET_APP_NAME, event.target.value)),
    [dispatch]
  );
  const handleCrossClick = useCallback(() => dispatch(createAction(ActionTypes.RESET_APP_NAME)), [
    dispatch,
  ]);

  return (
    <div className={'Page'}>
      <header className={'Page__header'}>
        <h1>
          Let`s create new <a href={'https://nextjs.org/'}>nextjs</a> {appName}{' '}
          <span onClick={handleCrossClick}>x</span>
        </h1>
      </header>

      <main className={'Page__main'}>
        <AwesomeSearchInput text={appName} onChange={handleSearchChange} />
      </main>
    </div>
  );
};

AwesomePage.displayName = 'AwesomePage';
export default AwesomePage;

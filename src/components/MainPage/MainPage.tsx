import './MainPage.scss';
import * as React from 'react';
import {ChangeEvent, FC, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useSWR from 'swr';
import {validateAuth, validateUnauthorizedError} from '../../helpers/routing';
import {ActionTypes, createAction} from '../../store/actionTypes';
import {fetchUser} from '../../helpers/api';
import AwesomeSearchInput from '../AwesomeSearchInput/AwesomeSearchInput';
import {AppState} from '../../store/types';

const stateSelector = ({appName}: AppState) => appName;

const MainPage: FC = () => {
  const appName = useSelector(stateSelector);
  const dispatch = useDispatch();
  const {data: {user} = {}, isValidating} = useSWR('get-user', fetchUser, {
    onError: validateUnauthorizedError,
  });

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
        {user && !isValidating && <h2> Hello, {user.profileInfo.fullName}.</h2>}
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

MainPage.displayName = 'MainPage';

export default MainPage;

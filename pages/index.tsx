import './main.scss';
import * as React from 'react';
import {ChangeEvent, FC, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {b, createBlock} from '@shelf/bem';
import dynamic from 'next/dynamic';
import {ColoredIconProps} from '@shelf/icons/lib/icons/src/ColoredIcon';
import {AppState} from '../src/store/types';
import AwesomeSearchInput from '../src/components/AwesomeSearchInput/AwesomeSearchInput';
import {ActionTypes, createAction} from '../src/store/actionTypes';

const block = createBlock('Page');
const ColoredIcon = dynamic<ColoredIconProps>(
  () => import('@shelf/icons').then(mod => mod.ColoredIcon),
  {
    ssr: false
  }
);
const stateSelector = ({appName}: AppState) => appName;

const AwesomePage: FC = () => {
  const appName = useSelector(stateSelector);
  const dispatch = useDispatch();

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      dispatch(createAction(ActionTypes.SET_APP_NAME, event.target.value)),
    [dispatch]
  );
  const handleCrossClick = useCallback(() => dispatch(createAction(ActionTypes.RESET_APP_NAME)), [
    dispatch
  ]);

  return (
    <div className={b(block)}>
      <header className={b(block, 'header')}>
        <h1>
          Let`s create new <a href={'https://nextjs.org/'}>nextjs</a> {appName}{' '}
          <ColoredIcon icon={'favourite'} color={'#61dafb'} onClick={handleCrossClick} />
        </h1>
      </header>

      <main className={b(block, 'main')}>
        <AwesomeSearchInput text={appName} onChange={handleSearchChange} />
      </main>
    </div>
  );
};

AwesomePage.displayName = 'AwesomePage';
export default AwesomePage;

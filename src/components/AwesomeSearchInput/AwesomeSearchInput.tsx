import './AwesomeSearchInput.scss';
import React, {FC} from 'react';
import {AwesomeSearchInputProps} from '../../types';

const AwesomeSearchInput: FC<AwesomeSearchInputProps> = ({text, onChange}) => {
  return (
    <div className={'AwesomeSearchInput'}>
      <input
        type="text"
        value={text}
        onChange={onChange}
        placeholder={'Your awesome application name!'}
      />
    </div>
  );
};
AwesomeSearchInput.displayName = 'AwesomeSearchInput';
export default AwesomeSearchInput;

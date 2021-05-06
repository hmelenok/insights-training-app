import './AwesomeSearchInput.scss';
import React, {FC} from 'react';
import {b, createBlock} from '@shelf/bem';
import dynamic from 'next/dynamic';
import {AwesomeSearchInputProps} from '../../types';

const Input = dynamic(() => import('@shelf/react-basic-components').then(mod => mod.Input), {
  ssr: false
});

const block = createBlock('AwesomeSearchInput');

const AwesomeSearchInput: FC<AwesomeSearchInputProps> = ({text, onChange}) => {
  return (
    <div className={b(block)}>
      <Input
        type={'text'}
        value={text}
        onChange={onChange}
        placeholder={'Your awesome application name!'}
      />
    </div>
  );
};
AwesomeSearchInput.displayName = 'AwesomeSearchInput';
export default AwesomeSearchInput;

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react';
import AwesomeSearchInput from './AwesomeSearchInput';

describe('awesomeSearchInput', () => {
  it('should display input with placeholder', () => {
    const r = render(<AwesomeSearchInput text={''} />);

    expect(r.getByPlaceholderText('Your awesome application name!')).toBeInTheDocument();
  });

  it('should display provided text in input', () => {
    const r = render(<AwesomeSearchInput text={'some-text'} />);

    expect(r.getByDisplayValue('some-text')).toBeInTheDocument();
  });

  it('should call onChangeCallback on input change', () => {
    const onChange = jest.fn();
    const r = render(<AwesomeSearchInput text={'some-text'} onChange={onChange} />);

    fireEvent.change(r.getByDisplayValue('some-text'), {target: {value: 'new'}});

    expect(onChange).toHaveBeenCalledWith(expect.anything());
  });
});

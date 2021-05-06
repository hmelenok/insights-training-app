import React from 'react';

export interface AwesomeSearchInputProps {
  text: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onCrossClick?(event: React.MouseEvent<HTMLDivElement>): void;
}

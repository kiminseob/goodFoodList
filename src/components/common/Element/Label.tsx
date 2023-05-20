import * as React from 'react';
import Typograpy from './Typograpy';

function Label(
  props: React.LabelHTMLAttributes<HTMLLabelElement> & {
    type?: 'h1' | 'h2' | 'p1' | 'p2';
    value: string;
  }
) {
  const { type = 'p1', value, ...rest } = props;

  return (
    <label className="label" {...rest}>
      <Typograpy type={type} value={value} />
    </label>
  );
}

export default Label;

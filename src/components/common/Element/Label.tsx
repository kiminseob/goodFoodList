import * as React from 'react';
import Typograpy from './Typograpy';

function Label(
  props: React.LabelHTMLAttributes<HTMLLabelElement> & { value: string }
) {
  const { value, ...rest } = props;

  return (
    <label className="label" {...rest}>
      <Typograpy type="p1" value={value} />
    </label>
  );
}

export default Label;

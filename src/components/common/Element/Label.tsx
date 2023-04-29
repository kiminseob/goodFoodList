import * as React from 'react';

function Label(
  props: React.LabelHTMLAttributes<HTMLLabelElement> & { value: string }
) {
  const { value, ...rest } = props;

  return <label {...rest}>{value}</label>;
}

export default Label;

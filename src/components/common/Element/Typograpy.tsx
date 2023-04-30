import * as React from 'react';
type elementProps = {
  children: string | number;
};
const element = {
  h1: ({ children }: elementProps) => <h1 className="h1">{children}</h1>,
  h2: ({ children }: elementProps) => <h2 className="h2">{children}</h2>,
  p1: ({ children }: elementProps) => <p className="p1">{children}</p>,
  p2: ({ children }: elementProps) => <p className="p2">{children}</p>,
};

function Typograpy(props: {
  type: 'h1' | 'h2' | 'p1' | 'p2';
  value: string | number;
}) {
  const { type, value } = props;
  const Element = element[type];

  return <Element>{value}</Element>;
}

export default Typograpy;

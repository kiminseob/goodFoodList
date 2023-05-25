import * as React from 'react';
type elementProps = {
  children: string | number;
  style?: React.CSSProperties;
};

const element = {
  h1: ({ children, style }: elementProps) => (
    <h1 className="h1" style={style}>
      {children}
    </h1>
  ),
  h2: ({ children, style }: elementProps) => (
    <h2 className="h2" style={style}>
      {children}
    </h2>
  ),
  p1: ({ children, style }: elementProps) => (
    <p className="p1" style={style}>
      {children}
    </p>
  ),
  p2: ({ children, style }: elementProps) => (
    <p className="p2" style={style}>
      {children}
    </p>
  ),
  pre: ({ children, style }: elementProps) => (
    <pre className="pre" style={style}>
      {children}
    </pre>
  ),
};

function Typograpy(props: {
  type: 'h1' | 'h2' | 'p1' | 'p2' | 'pre';
  value: string | number;
  style?: React.CSSProperties;
}) {
  const { type, value, style } = props;
  const Element = element[type];

  return <Element style={{ ...style }}>{value}</Element>;
}

export default Typograpy;

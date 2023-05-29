import React, { useState, useEffect } from 'react';
import _ from 'lodash';

function useResizeEvent() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = _.throttle(() => {
    setWidth(window.innerWidth);
  }, 200);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

export default useResizeEvent;

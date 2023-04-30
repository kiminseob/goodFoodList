import React, { useRef, useCallback, useEffect } from 'react';

function useInfiniteScroll(
  playList: Record<string, any>[],
  data: Record<string, any>,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  page: number
) {
  const loader = useRef(null);

  const handleObserver = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const { isIntersecting } = entries[0];

    if (data?.result?.place?.totalCount <= page * 5) observer.disconnect();

    if (isIntersecting) setPage((prev: number) => prev + 1);
  };

  useEffect(() => {
    const option = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '1px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);

    if (loader.current) observer.observe(loader.current);

    return () => observer.disconnect();
  }, [playList]);

  return { loader };
}

export default useInfiniteScroll;

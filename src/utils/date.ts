const currentDate = () =>
  new Date()
    .toLocaleDateString()
    .replace(/\./g, '')
    .split(' ')
    .map((v: string, i) => (i > 0 && v.length < 2 ? '0' + v : v))
    .join('-');

const currentTime = () =>
  new Date().toLocaleTimeString('ko-KR', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

export { currentDate, currentTime };

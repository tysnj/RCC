import { useState, useEffect } from 'react';

export const useStickyState = (defaultValue, key) => { // func to utilize local storage
  const [value, setValue] = useState(() => { // gets local storage
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => { // sets local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
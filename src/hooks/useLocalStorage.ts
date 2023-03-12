import { useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    if (!window) return;

    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item && JSON.parse(item));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue] as const;
};

export default useLocalStorage;

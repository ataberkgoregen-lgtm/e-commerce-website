import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [stored, setStored] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
}

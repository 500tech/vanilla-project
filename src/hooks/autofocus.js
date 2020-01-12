import { useRef, useEffect } from "react";

export function useAutofocus() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  return ref;
}

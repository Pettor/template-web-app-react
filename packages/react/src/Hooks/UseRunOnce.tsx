import { useEffect, useRef } from "react";

interface Props {
  func(): void;
  sessionKey?: string;
}

export function useRunOnce({ func, sessionKey }: Props): void {
  const triggered = useRef<boolean>(false);

  useEffect(() => {
    const hasBeenTriggered = sessionKey ? sessionStorage.getItem(sessionKey) : triggered.current;

    if (hasBeenTriggered) {
      return;
    }

    func();
    triggered.current = true;

    if (sessionKey) {
      sessionStorage.setItem(sessionKey, "true");
    }
  }, [func, sessionKey]);
}

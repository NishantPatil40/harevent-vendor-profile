import { useCallback, useSyncExternalStore } from "react";

/**
 * Reads a media query through the store API, so the first paint already knows
 * the answer and no setState-in-effect flash is needed.
 *
 * Server snapshot is `false`: nothing that depends on it renders differently
 * before hydration on the client.
 */
export default function useMediaQuery(query) {
  const subscribe = useCallback(
    (onStoreChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onStoreChange);
      return () => media.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

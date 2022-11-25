import { useEffect } from "react";

export default function useTitle(myTitle) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = myTitle;
    return () => {
      document.title = prevTitle;
    };
  }, [myTitle]);
}
import { useMediaQuery } from "react-responsive";

export const useMediaReq = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1920px)",
  });

  return { isDesktop };
};

export const preloaderAC = (status: boolean) =>
  ({
    type: "PRELOADER",
    status,
  } as const);

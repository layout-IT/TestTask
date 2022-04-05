export const changingTheArchiveSwitchAC = (switching: boolean) =>
  ({
    type: "CHANGING-THE-ARCHIVE-SWITCH",
    switching,
  } as const);

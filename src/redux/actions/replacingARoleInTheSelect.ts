export const replacingARoleInTheSelectAC = (role: string) =>
  ({
    type: "REPLACING-A-ROLE-IN-THE-SELECT",
    role,
  } as const);

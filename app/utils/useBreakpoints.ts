"use client";

import { useMediaQuery, useTheme } from "@mui/material";

export type Breakpoint = "lg" | "md" | "sm" | "xl" | "xs";

export interface BreakpointResults {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
  breakpoint: Breakpoint;
}

export function useBreakpoints(): BreakpointResults {
  const theme = useTheme();

  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  const xl = useMediaQuery(theme.breakpoints.only("xl"));

  const breakpoint = xl ? "xl" : lg ? "lg" : md ? "md" : sm ? "sm" : "xs";

  if (desktop)
    return { mobile: false, tablet: false, desktop: true, breakpoint };
  if (tablet)
    return { mobile: false, tablet: true, desktop: false, breakpoint };
  return { mobile: true, tablet: false, desktop: false, breakpoint };
}

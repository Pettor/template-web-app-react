import { useMediaQuery } from "usehooks-ts";

type Size = "sm" | "md" | "lg" | "xl" | "2xl";

function getMinWidth(size: Size): string {
  switch (size) {
    case "sm":
      return "(min-width: 640px)";
    case "md":
      return "(min-width: 768px)";
    case "lg":
      return "(min-width: 1024px)";
    case "xl":
      return "(min-width: 1280px)";
    case "2xl":
      return "(min-width: 1536px)";
  }
}

export function UseMediaQuery(size: Size): {
  matches: boolean;
} {
  const matches = useMediaQuery(getMinWidth(size));

  return {
    matches,
  };
}

// Theme presets. `primary` and `accent` are only used to render the swatch
// previews in the picker; the real colors live in globals.css under each
// [data-theme] block.

export type Theme = {
  id: string;
  label: string;
  primary: string;
  accent: string;
};

export const themes: Theme[] = [
  { id: "steel", label: "Steel", primary: "#2b4257", accent: "#f5a524" },
  { id: "pine", label: "Pine", primary: "#1f4d3a", accent: "#f0a202" },
  { id: "clay", label: "Clay", primary: "#6d4329", accent: "#2a9d8f" },
  { id: "midnight", label: "Midnight", primary: "#23282b", accent: "#e6b54a" },
  { id: "dusk", label: "Dusk", primary: "#5f2940", accent: "#e0a43b" },
];

export const defaultTheme = "steel";
export const THEME_STORAGE_KEY = "mmg-theme";

interface Versions {
  node: () => string;
  chrome: () => string;
  electron: () => string;
  env: () => string;
}

declare interface Window {
  versions: Versions;
}

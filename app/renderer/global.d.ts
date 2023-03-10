declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.png' {
  const png: string;
  export default png;
}

declare module '*.svg';

declare interface Window {
  pdk: string;
}

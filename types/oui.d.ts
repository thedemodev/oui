// Necessary until ReactOUIIcons exports a types file
declare module 'react-oui-icons' {
  const x: any;
  export = x;
}

// See this issue: https://github.com/react-dnd/react-dnd/issues/1560
// Redux is not used in OUI
declare module 'redux';

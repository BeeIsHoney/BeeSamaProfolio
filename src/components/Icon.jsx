import React from 'react';

export default function Icon({ type, size = 22 }) {
  const paths = {
    mail: <><rect x="2" y="5" width="20" height="14" /><path d="m2 5 10 8L22 5" /></>,
    github: <path d="M8 21v-4c-4 1-4-2-6-2M16 21v-4c0-2-1-3-1-3 4 0 6-2 6-5 0-2-1-3-1-3 0-1 0-3-1-4-2 0-4 2-4 2H9S7 2 5 2C4 3 4 5 4 6c0 0-1 1-1 3 0 3 2 5 6 5 0 0-1 1-1 3" />,
    telegram: <path d="M2 11 22 3l-5 18-6-6-4 3v-6l11-6-7 9" />,
    window: <><rect x="2" y="3" width="20" height="18" /><path d="M2 8h20M5 5h1M8 5h1M7 12l-3 3 3 3M17 12l3 3-3 3M13 11l-2 8" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">{paths[type] || paths.window}</svg>;
}

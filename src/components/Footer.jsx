import React from 'react';
import { profile } from '../data/portfolio';

export default function Footer() {
  return <footer><span>© {new Date().getFullYear()} {profile.name}</span><a href="#home">Back to top</a></footer>;
}

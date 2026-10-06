import React from 'react';
import { profile } from '../data/portfolio';
import Icon from './Icon';

function normalizeProfileUrl(value, service) {
  if (!value) return '#';
  if (/^https?:\/\//i.test(value)) return value;
  const username = value.replace(/^@/, '');
  if (service === 'github') return `https://github.com/${username}`;
  if (service === 'telegram') return `https://t.me/${username}`;
  return value;
}

export default function Footer({ isProjectPage = false }) {
  const topHref = isProjectPage ? '/' : '#home';

  return (
   <></>)
}

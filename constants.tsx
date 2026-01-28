
import React from 'react';
import { WasteType, WasteConfig } from './types';

export const WASTE_TYPES: Record<WasteType, WasteConfig> = {
  'Paper': { name: 'Papier', emoji: '🗑️', color: '#3b82f6', tailwindColor: 'bg-blue-500' },
  'Bio': { name: 'Déchets organiques', emoji: '♻️', color: '#22c55e', tailwindColor: 'bg-green-500' },
  'Glass': { name: 'Verre', emoji: '🍾', color: '#92400e', tailwindColor: 'bg-amber-800' },
  'Normal Trash': { name: 'Déchets ménagers', emoji: '🚮', color: '#334155', tailwindColor: 'bg-slate-700' },
  'Valorlux': { name: 'Valorlux (PMC)', emoji: '🧴', color: '#0ea5e9', tailwindColor: 'bg-sky-500' }
};

export const RAW_CSV_DATA = `Month,Day,Day of Week,Paper (Blue),Bio (Green),Glass (Brown),Normal Trash (Black),Valorlux (PMC)
January,1,Thursday,,,,,
January,2,Friday,,B,B,,
January,3,Saturday,,,,B,
January,4,Sunday,,,,,
January,5,Monday,,,,A,
January,6,Tuesday,A,A,,,
January,7,Wednesday,,,,,B
January,8,Thursday,B,B,,,
January,9,Friday,,,,B,
January,10,Saturday,,,,,
January,11,Sunday,,,,,
January,12,Monday,,,,A,
January,13,Tuesday,,A,A,,
January,14,Wednesday,,,,,A
January,15,Thursday,,B,B,,
January,16,Friday,,,,B,
January,17,Saturday,,,,,
January,18,Sunday,,,,,
January,19,Monday,,,,A,
January,20,Tuesday,A,A,,,
January,21,Wednesday,,,,,B
January,22,Thursday,B,B,,,
January,23,Friday,,,,B,
January,24,Saturday,,,,,
January,25,Sunday,,,,,
January,26,Monday,,,,A,
January,27,Tuesday,,A,A,,
January,28,Wednesday,,,,,A
January,29,Thursday,,B,B,,
January,30,Friday,,,,B,
January,31,Saturday,,,,,
February,1,Sunday,,,,,
February,2,Monday,,,,A,
February,3,Tuesday,A,A,,,
February,4,Wednesday,,,,,B
February,5,Thursday,B,B,,,
February,6,Friday,,,,B,
February,7,Saturday,,,,,
February,8,Sunday,,,,,
February,9,Monday,,,,A,
February,10,Tuesday,,A,A,,
February,11,Wednesday,,,,,A
February,12,Thursday,,B,B,,
February,13,Friday,,,,B,
February,14,Saturday,,,,,
February,15,Sunday,,,,,
February,16,Monday,,,,A,
February,17,Tuesday,A,A,,,
February,18,Wednesday,,,,,B
February,19,Thursday,B,B,,,
February,20,Friday,,,,B,
February,21,Saturday,,,,,
February,22,Sunday,,,,,
February,23,Monday,,,,A,
February,24,Tuesday,,A,A,,
February,25,Wednesday,,,,,A
February,26,Thursday,,B,B,,
February,27,Friday,,,,B,
February,28,Saturday,,,,,
March,1,Sunday,,,,,
March,2,Monday,,,,A,
March,3,Tuesday,A,A,,,
March,4,Wednesday,,,,,B
March,5,Thursday,B,B,,,
March,6,Friday,,,,B,
March,7,Saturday,,,,,
March,8,Sunday,,,,,
March,9,Monday,,,,A,
March,10,Tuesday,,A,A,,
March,11,Wednesday,,,,,A
March,12,Thursday,,B,B,,
March,13,Friday,,,,B,
March,14,Saturday,,,,,
March,15,Sunday,,,,,
March,16,Monday,,,,A,
March,17,Tuesday,A,A,,,
March,18,Wednesday,,,,,B
March,19,Thursday,B,B,,,
March,20,Friday,,,,B,
March,21,Saturday,,,,,
March,22,Sunday,,,,,
March,23,Monday,,,,A,
March,24,Tuesday,,A,A,,
March,25,Wednesday,,,,,A
March,26,Thursday,,B,B,,
March,27,Friday,,,,B,
March,28,Saturday,,,,,
March,29,Sunday,,,,,
March,30,Monday,,,,A,
March,31,Tuesday,A,A,,,
April,1,Wednesday,,,,,B
April,2,Thursday,B,B,,,
April,3,Friday,,,,B,
April,4,Saturday,,,,,
April,5,Sunday,,,,,
April,6,Monday,,,,,
April,7,Tuesday,,,,A,
April,8,Wednesday,,A,A,,
April,9,Thursday,,,,,A
April,10,Friday,,B,B,,
April,11,Saturday,,,,B,
April,12,Sunday,,,,,
April,13,Monday,,,,A,
April,14,Tuesday,A,A,,,
April,15,Wednesday,,,,,B
April,16,Thursday,B,B,,,
April,17,Friday,,,,B,
April,18,Saturday,,,,,
April,19,Sunday,,,,,
April,20,Monday,,,,A,
April,21,Tuesday,,A,A,,
April,22,Wednesday,,,,,A
April,23,Thursday,,B,B,,
April,24,Friday,,,,B,
April,25,Saturday,,,,,
April,26,Sunday,,,,,
April,27,Monday,,,,A,
April,28,Tuesday,A,A,,,
April,29,Wednesday,,,,,B
April,30,Thursday,B,B,,,
May,1,Friday,,,,,
May,2,Saturday,,,,B,
May,3,Sunday,,,,,
May,4,Monday,,,,A,
May,5,Tuesday,,A,A,,
May,6,Wednesday,,,,,A
May,7,Thursday,,B,B,,
May,8,Friday,,,,B,
May,9,Saturday,,,,,
May,10,Sunday,,,,,
May,11,Monday,,,,A,
May,12,Tuesday,A,A,,,
May,13,Wednesday,,,,,B
May,14,Thursday,,,,,
May,15,Friday,B,B,,,
May,16,Saturday,,,,B,
May,17,Sunday,,,,,
May,18,Monday,,,,A,
May,19,Tuesday,,A,A,,
May,20,Wednesday,,,,,A
May,21,Thursday,,B,B,,
May,22,Friday,,,,B,
May,23,Saturday,,,,,
May,24,Sunday,,,,,
May,25,Monday,,,,,
May,26,Tuesday,,,,A,
May,27,Wednesday,A,A,,,
May,28,Thursday,,,,,B
May,29,Friday,B,B,,,
May,30,Saturday,,,,B,
May,31,Sunday,,,,,
June,1,Monday,,,,A,
June,2,Tuesday,,A,A,,
June,3,Wednesday,,,,,A
June,4,Thursday,,B,B,,
June,5,Friday,,,,B,
June,6,Saturday,,,,,
June,7,Sunday,,,,,
June,8,Monday,,,,A,
June,9,Tuesday,A,A,,,
June,10,Wednesday,,,,,B
June,11,Thursday,B,B,,,
June,12,Friday,,,,B,
June,13,Saturday,,,,,
June,14,Sunday,,,,,
June,15,Monday,,,,A,
June,16,Tuesday,,A,A,,
June,17,Wednesday,,,,,A
June,18,Thursday,,B,B,,
June,19,Friday,,,,B,
June,20,Saturday,,,,,
June,21,Sunday,,,,,
June,22,Monday,,,,A,
June,23,Tuesday,,,,,
June,24,Wednesday,A,A,,,
June,25,Thursday,,,,,B
June,26,Friday,B,B,,,
June,27,Saturday,,,,B,
June,28,Sunday,,,,,
June,29,Monday,,,,A,
June,30,Tuesday,,A,A,,
July,1,Wednesday,,,,,A
July,2,Thursday,,B,B,,
July,3,Friday,,,,B,
July,4,Saturday,,,,,
July,5,Sunday,,,,,
July,6,Monday,,,,A,
July,7,Tuesday,A,A,,,
July,8,Wednesday,,,,,B
July,9,Thursday,B,B,,,
July,10,Friday,,,,B,
July,11,Saturday,,,,,
July,12,Sunday,,,,,
July,13,Monday,,,,A,
July,14,Tuesday,,A,A,,
July,15,Wednesday,,,,,A
July,16,Thursday,,B,B,,
July,17,Friday,,,,B,
July,18,Saturday,,,,,
July,19,Sunday,,,,,
July,20,Monday,,,,A,
July,21,Tuesday,A,A,,,
July,22,Wednesday,,,,,B
July,23,Thursday,B,B,,,
July,24,Friday,,,,B,
July,25,Saturday,,,,,
July,26,Sunday,,,,,
July,27,Monday,,,,A,
July,28,Tuesday,,A,A,,
July,29,Wednesday,,,,,A
July,30,Thursday,,B,B,,
July,31,Friday,,,,B,
August,1,Saturday,,,,,
August,2,Sunday,,,,,
August,3,Monday,,,,A,
August,4,Tuesday,A,A,,,
August,5,Wednesday,,,,,B
August,6,Thursday,B,B,,,
August,7,Friday,,,,B,
August,8,Saturday,,,,,
August,9,Sunday,,,,,
August,10,Monday,,,,A,
August,11,Tuesday,,A,A,,
August,12,Wednesday,,,,,A
August,13,Thursday,,B,B,,
August,14,Friday,,,,B,
August,15,Saturday,,,,,
August,16,Sunday,,,,,
August,17,Monday,,,,A,
August,18,Tuesday,A,A,,,
August,19,Wednesday,,,,,B
August,20,Thursday,B,B,,,
August,21,Friday,,,,B,
August,22,Saturday,,,,,
August,23,Sunday,,,,,
August,24,Monday,,,,A,
August,25,Tuesday,,A,A,,
August,26,Wednesday,,,,,A
August,27,Thursday,,B,B,,
August,28,Friday,,,,B,
August,29,Saturday,,,,,
August,30,Sunday,,,,,
August,31,Monday,,,,A,
September,1,Tuesday,A,A,,,
September,2,Wednesday,,,,,B
September,3,Thursday,B,B,,,
September,4,Friday,,,,B,
September,5,Saturday,,,,,
September,6,Sunday,,,,,
September,7,Monday,,,,A,
September,8,Tuesday,,A,A,,
September,9,Wednesday,,,,,A
September,10,Thursday,,B,B,,
September,11,Friday,,,,B,
September,12,Saturday,,,,,
September,13,Sunday,,,,,
September,14,Monday,,,,A,
September,15,Tuesday,A,A,,,
September,16,Wednesday,,,,,B
September,17,Thursday,B,B,,,
September,18,Friday,,,,B,
September,19,Saturday,,,,,
September,20,Sunday,,,,,
September,21,Monday,,,,A,
September,22,Tuesday,,A,A,,
September,23,Wednesday,,,,,A
September,24,Thursday,,B,B,,
September,25,Friday,,,,B,
September,26,Saturday,,,,,
September,27,Sunday,,,,,
September,28,Monday,,,,A,
September,29,Tuesday,A,A,,,
September,30,Wednesday,,,,,B
October,1,Thursday,B,B,,,
October,2,Friday,,,,B,
October,3,Saturday,,,,,
October,4,Sunday,,,,,
October,5,Monday,,,,A,
October,6,Tuesday,,A,A,,
October,7,Wednesday,,,,,A
October,8,Thursday,,B,B,,
October,9,Friday,,,,B,
October,10,Saturday,,,,,
October,11,Sunday,,,,,
October,12,Monday,,,,A,
October,13,Tuesday,A,A,,,
October,14,Wednesday,,,,,B
October,15,Thursday,B,B,,,
October,16,Friday,,,,B,
October,17,Saturday,,,,,
October,18,Sunday,,,,,
October,19,Monday,,,,A,
October,20,Tuesday,,A,A,,
October,21,Wednesday,,,,,A
October,22,Thursday,,B,B,,
October,23,Friday,,,,B,
October,24,Saturday,,,,,
October,25,Sunday,,,,,
October,26,Monday,,,,A,
October,27,Tuesday,A,A,,,
October,28,Wednesday,,,,,B
October,29,Thursday,B,B,,,
October,30,Friday,,,,B,
October,31,Saturday,,,,,
November,1,Sunday,,,,,
November,2,Monday,,,,A,
November,3,Tuesday,,A,A,,
November,4,Wednesday,,,,,A
November,5,Thursday,,B,B,,
November,6,Friday,,,,B,
November,7,Saturday,,,,,
November,8,Sunday,,,,,
November,9,Monday,,,,A,
November,10,Tuesday,A,A,,,
November,11,Wednesday,,,,,B
November,12,Thursday,B,B,,,
November,13,Friday,,,,B,
November,14,Saturday,,,,,
November,15,Sunday,,,,,
November,16,Monday,,,,A,
November,17,Tuesday,,A,A,,
November,18,Wednesday,,,,,A
November,19,Thursday,,B,B,,
November,20,Friday,,,,B,
November,21,Saturday,,,,,
November,22,Sunday,,,,,
November,23,Monday,,,,A,
November,24,Tuesday,A,A,,,
November,25,Wednesday,,,,,B
November,26,Thursday,B,B,,,
November,27,Friday,,,,B,
November,28,Saturday,,,,,
November,29,Sunday,,,,,
November,30,Monday,,,,A,
December,1,Tuesday,,A,A,,
December,2,Wednesday,,,,,A
December,3,Thursday,,B,B,,
December,4,Friday,,,,B,
December,5,Saturday,,,,,
December,6,Sunday,,,,,
December,7,Monday,,,,A,
December,8,Tuesday,A,A,,,
December,9,Wednesday,,,,,B
December,10,Thursday,B,B,,,
December,11,Friday,,,,B,
December,12,Saturday,,,,,
December,13,Sunday,,,,,
December,14,Monday,,,,A,
December,15,Tuesday,,A,A,,
December,16,Wednesday,,,,,A
December,17,Thursday,,B,B,,
December,18,Friday,,,,B,
December,19,Saturday,,,,,
December,20,Sunday,,,,,
December,21,Monday,,,,A,
December,22,Tuesday,A,A,,,
December,23,Wednesday,B,B,,,
December,24,Thursday,,,,B,B
December,25,Friday,,,,,
December,26,Saturday,,,,,
December,27,Sunday,,,,,
December,28,Monday,,,,A,
December,29,Tuesday,,A,A,,
December,30,Wednesday,,,,,A
December,31,Thursday,,B,B,,`;

export const TrashyLogo = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]">
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="glossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="2" floodOpacity="0.1"/>
        </filter>
      </defs>
      
      {/* Sleek Bin Body */}
      <rect x="55" y="65" width="90" height="105" rx="20" fill="url(#bodyGrad)" />
      
      {/* Lid with High Gloss */}
      <rect x="45" y="45" width="110" height="25" rx="12" fill="url(#bodyGrad)" />
      <rect x="45" y="45" width="110" height="12" rx="12" fill="url(#glossGrad)" />
      <rect x="85" y="32" width="30" height="12" rx="6" fill="#94a3b8" />

      {/* Modern Expressive Eyes */}
      <g filter="url(#shadow)">
        <circle cx="80" cy="105" r="9" fill="#0f172a" />
        <circle cx="83" cy="102" r="3" fill="white" />
        
        <circle cx="120" cy="105" r="9" fill="#0f172a" />
        <circle cx="123" cy="102" r="3" fill="white" />
      </g>

      {/* Friendly Smile */}
      <path d="M 85 135 Q 100 152 115 135" fill="none" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
      
      {/* Dynamic Detail Lines */}
      <rect x="75" y="160" width="4" height="6" rx="2" fill="#94a3b8" opacity="0.4" />
      <rect x="100" y="160" width="4" height="6" rx="2" fill="#94a3b8" opacity="0.4" />
      <rect x="125" y="160" width="4" height="6" rx="2" fill="#94a3b8" opacity="0.4" />
    </svg>
  </div>
);

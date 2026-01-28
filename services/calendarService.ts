
import { CollectionDay, Zone, WasteType } from '../types';
import { WASTE_TYPES } from '../constants';

const monthToNum: Record<string, number> = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
};

export const generateICS = (collections: CollectionDay[], zone: Zone, rangeLabel: string) => {
  let icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Trashy//Waste Calendar//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH'
  ].join('\r\n');

  collections.forEach(day => {
    const year = 2026;
    const monthIndex = monthToNum[day.month];
    
    // Format start date: YYYYMMDD
    const startObj = new Date(year, monthIndex, day.day);
    const dateStr = `${year}${String(monthIndex + 1).padStart(2, '0')}${String(day.day).padStart(2, '0')}`;
    
    // Format end date (next day for all-day events)
    const endObj = new Date(startObj);
    endObj.setDate(startObj.getDate() + 1);
    const endDateStr = `${endObj.getFullYear()}${String(endObj.getMonth() + 1).padStart(2, '0')}${String(endObj.getDate()).padStart(2, '0')}`;
    
    // Check each waste type
    const possibleTypes: {key: keyof CollectionDay, label: string}[] = [
      { key: 'paper', label: 'Papier' },
      { key: 'bio', label: 'Déchets organiques' },
      { key: 'glass', label: 'Verre' },
      { key: 'normalTrash', label: 'Déchets ménagers' },
      { key: 'valorlux', label: 'Valorlux (PMC)' }
    ];

    possibleTypes.forEach(type => {
      if (day[type.key] === zone) {
        // SUMMARY format: “[Waste Type] Collection – Zone [A/B]”
        // TRIGGER: -PT15H (15 hours before 00:00 of the collection day = 09:00 of the previous day)
        icsContent += '\r\n' + [
          'BEGIN:VEVENT',
          `DTSTART;VALUE=DATE:${dateStr}`,
          `DTEND;VALUE=DATE:${endDateStr}`,
          `SUMMARY:${type.label} Collection – Zone ${zone}`,
          `DESCRIPTION:Collecte de ${type.label} pour la Zone ${zone}. Sortez votre bac la veille !`,
          'TRANSP:TRANSPARENT',
          'BEGIN:VALARM',
          'ACTION:DISPLAY',
          'DESCRIPTION:Rappel Trashy',
          'TRIGGER:-PT15H', 
          'END:VALARM',
          'END:VEVENT'
        ].join('\r\n');
      }
    });
  });

  icsContent += '\r\nEND:VCALENDAR';

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `Trashy_Zone_${zone}_${rangeLabel}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const detectDevice = () => {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  if (/android/i.test(ua)) return 'Android';
  if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) return 'iOS';
  return 'Desktop';
};

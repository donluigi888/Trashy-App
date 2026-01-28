
import { CollectionDay, Zone } from '../types';
import { RAW_CSV_DATA as csvString } from '../constants';

export const parseWasteData = (): CollectionDay[] => {
  const lines = csvString.split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).filter(l => l.trim()).map(line => {
    const values = line.split(',');
    return {
      month: values[0],
      day: parseInt(values[1], 10),
      weekday: values[2],
      paper: values[3] as Zone || undefined,
      bio: values[4] as Zone || undefined,
      glass: values[5] as Zone || undefined,
      normalTrash: values[6] as Zone || undefined,
      valorlux: values[7] as Zone || undefined,
    };
  });
};

const monthToNum: Record<string, number> = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
};

export const getCollectionsForZone = (data: CollectionDay[], zone: Zone): CollectionDay[] => {
  return data.filter(d => 
    d.paper === zone || d.bio === zone || d.glass === zone || d.normalTrash === zone || d.valorlux === zone
  );
};

export const getCurrentWeekCollections = (data: CollectionDay[], zone: Zone): CollectionDay[] => {
  const now = new Date();
  const year = 2026; // Our data is specifically for 2026
  
  // Find start of current week (Monday)
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 is Sunday
  const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  const startOfWeek = new Date(today.setDate(diff));
  startOfWeek.setHours(0, 0, 0, 0);
  
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  return data.filter(d => {
    const dDate = new Date(year, monthToNum[d.month], d.day);
    return dDate >= startOfWeek && dDate <= endOfWeek;
  });
};
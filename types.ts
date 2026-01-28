
export type Zone = 'A' | 'B';

export type WasteType = 
  | 'Paper' 
  | 'Bio' 
  | 'Glass' 
  | 'Normal Trash' 
  | 'Valorlux';

export interface CollectionDay {
  month: string;
  day: number;
  weekday: string;
  paper?: Zone;
  bio?: Zone;
  glass?: Zone;
  normalTrash?: Zone;
  valorlux?: Zone;
}

export enum AppStep {
  WELCOME = 'welcome',
  CHOOSE_ZONE = 'choose_zone',
  CONFIRM_ZONE = 'confirm_zone',
  PLANNING = 'planning',
  WEEKLY_VIEW = 'weekly_view',
  CONFIRMATION = 'confirmation'
}

export interface WasteConfig {
  name: string;
  emoji: string;
  color: string;
  tailwindColor: string;
}

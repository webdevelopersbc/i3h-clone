import { CustomKit } from './custom-kit';

export interface Club {
  clubId: number;
  name: string;
  regionId: number;
  teamId: number;
  customKit: CustomKit;
}

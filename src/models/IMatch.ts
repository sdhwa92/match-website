import { IPlayer } from './IPlayer';
import { ITeam } from './ITeam';
import { IVenue } from './IVenue';

export interface IMatch {
  id: number;
  title: string;
  venue: IVenue;
  capacity: number;
  datetime: string;
  teams: ITeam[];
  players: IPlayer[];
  thumnail?: string;
  message?: string;
}
export interface Player {
  id: string;
  name: string;
  avatar: string;
  team: string;
  stats: {
    wins: number;
    losses: number;
    winRate: number;
  };
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  players: Player[];
  ranking: number;
}

export interface Match {
  id: string;
  team1: Team;
  team2: Team;
  score1: number;
  score2: number;
  status: 'upcoming' | 'live' | 'completed';
  startTime: string;
}

export interface Tournament {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  prizePool: number;
  matches: Match[];
  teams: Team[];
  status: 'registration' | 'ongoing' | 'completed';
}
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import type { Tournament } from '@/types/tournament';
import { formatDate } from '@/utils/date';

interface TournamentCardProps {
  tournament: Tournament;
}

export function TournamentCard({ tournament }: TournamentCardProps) {
  return (
    <Card className="group">
      <div className="space-y-4">
        <div className="relative h-48 rounded-lg overflow-hidden">
          <img
            src={`https://source.unsplash.com/800x400/?gaming,esports&${tournament.id}`}
            alt={tournament.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              tournament.status === 'registration' ? 'bg-green-500' :
              tournament.status === 'ongoing' ? 'bg-yellow-500' :
              'bg-red-500'
            }`}>
              {tournament.status.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold">{tournament.name}</h3>
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(tournament.startDate)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{tournament.teams.length} Teams</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              <span>${tournament.prizePool.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm">View Details</Button>
          {tournament.status === 'registration' && (
            <Button size="sm">Register Now</Button>
          )}
        </div>
      </div>
    </Card>
  );
}
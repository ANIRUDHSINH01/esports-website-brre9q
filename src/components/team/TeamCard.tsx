import { motion } from 'framer-motion';
import { Trophy, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { Team } from '@/types/tournament';

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <Card className="group">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            src={team.logo}
            alt={team.name}
            className="w-16 h-16 rounded-full border-2 border-cyan-500/50"
          />
          <div>
            <h3 className="text-xl font-bold">{team.name}</h3>
            <p className="text-gray-400">Rank #{team.ranking}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {team.players.slice(0, 4).map((player) => (
            <div key={player.id} className="flex items-center gap-2">
              <img
                src={player.avatar}
                alt={player.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm truncate">{player.name}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span>Win Rate: {team.players[0].stats.winRate}%</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{team.players.length} Players</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
import { Match } from '@/types/tournament';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

interface TournamentBracketProps {
  matches: Match[];
}

export function TournamentBracket({ matches }: TournamentBracketProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] p-8 grid grid-cols-3 gap-8">
        {matches.map((match) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            <Card className="relative">
              <div className="absolute top-2 right-2">
                {match.status === 'live' && (
                  <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full animate-pulse">
                    LIVE
                  </span>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={match.team1.logo}
                      alt={match.team1.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-semibold">{match.team1.name}</span>
                  </div>
                  <span className="text-xl font-bold">{match.score1}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={match.team2.logo}
                      alt={match.team2.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-semibold">{match.team2.name}</span>
                  </div>
                  <span className="text-xl font-bold">{match.score2}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
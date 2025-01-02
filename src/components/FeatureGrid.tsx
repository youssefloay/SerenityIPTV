import React from 'react';
import { Monitor, Film, Trophy, Smartphone, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Live TV Channels',
    description: 'Access to 10000+ live channels including premium sports, news, and entertainment',
  },
  {
    icon: Film,
    title: 'VOD Content',
    description: 'Extensive library of movies and TV series updated regularly',
  },
  {
    icon: Trophy,
    title: 'Sports Coverage',
    description: 'Watch Premier League, Champions League, NFL, NBA, and more',
  },
  {
    icon: Smartphone,
    title: 'Multi-device Support',
    description: 'Compatible with Smart TVs, Android, iOS, MAG, and more',
  },
  {
    icon: Clock,
    title: 'Instant Activation',
    description: 'Start watching within minutes of your purchase',
  },
  {
    icon: Shield,
    title: 'Anti-freeze Technology',
    description: 'Stable streaming with advanced buffering prevention',
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div key={feature.title} className="flex items-start p-6 bg-white rounded-lg shadow-sm">
          <feature.icon className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
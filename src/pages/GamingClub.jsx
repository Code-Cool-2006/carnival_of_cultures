import React from 'react';
import { Gamepad2 } from 'lucide-react';
import ClubLayout from '../components/ClubLayout';

const GamingClub = () => {
  const club = {
    id: 'gaming',
    name: 'E-Gaming Club',
    Icon: Gamepad2,
    gradient: 'linear-gradient(135deg, #10B981 0%, #000000 100%)',
    shortDescription: 'Level up your game.',
    fullDescription: 'The E-Gaming Club brings together gamers of all genres. From competitive Valorant and CS:GO tournaments to casual FIFA nights and retro gaming sessions, we have it all.',
    events: [
      { id: 1, title: 'Valorant Championship', date: '2025-02-20', location: 'Computer Lab 1' },
      { id: 2, title: 'FIFA 25 Tournament', date: '2025-03-05', location: 'Student Lounge' }
    ],
    members: [
      { id: 1, name: 'Gaming Lead 1', role: 'Captain', image: '', email: 'gaming.lead1@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Gaming Lead 2', role: 'Strategist', image: '', email: 'gaming.lead2@example.com', phone: '+91 98765 43211' }
    ],
    gallery: []
  };

  return <ClubLayout club={club} />;
};

export default GamingClub;

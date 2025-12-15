import React from 'react';
import { Palette } from 'lucide-react';
import ClubLayout from '../components/ClubLayout';

const ArtClub = () => {
  const club = {
    id: 'art',
    name: 'Fine Arts Club of GIT',
    Icon: Palette,
    gradient: 'linear-gradient(135deg, #84CC16 0%, #15803D 100%)',
    shortDescription: 'Filling the canvas with colors of India.',
    fullDescription: 'From Mandala workshops and Madhubani painting to digital art and modern sketching. Rang is a sanctuary for those who think in colors. We organize the annual "Kala Utsav" exhibition.',
    events: [
      { id: 1, title: 'Rangoli Competition', date: '2023-11-20', location: 'College Foyer' },
      { id: 2, title: 'Madhubani Workshop', date: '2023-12-08', location: 'Art Studio' }
    ],
    members: [
      { id: 1, name: 'Ishaan Gupta', role: 'President', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=200', email: 'ishaan@example.com', phone: '+91 98765 43210' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460661618165-55008d307f97?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800'
    ]
  };

  return <ClubLayout club={club} />;
};

export default ArtClub;

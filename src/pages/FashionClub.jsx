import React from 'react';
import { Scissors } from 'lucide-react';
import ClubLayout from '../components/ClubLayout';

const FashionClub = () => {
  const club = {
    id: 'fashion',
    name: 'Fashion Club',
    Icon: Scissors,
    gradient: 'linear-gradient(135deg, #EC4899 0%, #FBBF24 100%)',
    shortDescription: 'Strut your style on the runway of life.',
    fullDescription: 'The Fashion Club is a platform for aspiring designers, models, and stylists. We organize fashion shows, styling workshops, and design competitions to showcase the latest trends and creativity.',
    events: [
      { id: 1, title: 'Annual Fashion Show', date: '2025-03-15', location: 'Open Air Theatre' },
      { id: 2, title: 'Sustainable Style Workshop', date: '2025-04-10', location: 'Design Studio' }
    ],
    members: [
      { id: 1, name: 'Fashion Lead 1', role: 'President', image: '', email: 'fashion.lead1@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Fashion Lead 2', role: 'Coordinator', image: '', email: 'fashion.lead2@example.com', phone: '+91 98765 43211' }
    ],
    gallery: []
  };

  return <ClubLayout club={club} />;
};

export default FashionClub;

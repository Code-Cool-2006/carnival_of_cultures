import React from 'react';
import { Camera } from 'lucide-react';
import ClubLayout from '../components/ClubLayout';

const PhotographyClub = () => {
  const club = {
    id: 'photography',
    name: 'Photography Club of GIT',
    Icon: Camera,
    gradient: 'linear-gradient(135deg, #D946EF 0%, #9333EA 100%)',
    shortDescription: 'Capturing the Incredible India around us.',
    fullDescription: 'Drishti is about seeing the extraordinary in the ordinary. We organize photo walks in the old city, heritage tours, and workshops on editing and composition.',
    events: [
      { id: 1, title: 'Heritage Photo Walk', date: '2023-11-18', location: 'Old City Gates' },
      { id: 2, title: 'Portrait Workshop', date: '2023-12-12', location: 'Studio B' }
    ],
    members: [
      { id: 1, name: 'Rohan Mehta', role: 'Lead Photographer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', email: 'rohan@example.com', phone: '+91 98765 43210' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551048632-1b1e944b58e8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800'
    ]
  };

  return <ClubLayout club={club} />;
};

export default PhotographyClub;

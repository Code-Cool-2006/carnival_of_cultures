import React from 'react';
import { Star } from 'lucide-react';
import ClubLayout from '../components/ClubLayout';

const SpecialsClub = () => {
  const club = {
    id: 'specials',
    name: 'Specials Club',
    Icon: Star,
    gradient: 'linear-gradient(135deg, #ffb300ff 50%)',
    shortDescription: 'Celebrating uniqueness and inclusivity.',
    fullDescription: 'The Specials Club is a safe space for everyone to express themselves. We focus on inclusive events, talent shows for differently-abled students, and awareness campaigns.',
    events: [
      { id: 1, title: 'Inclusivity Walk', date: '2025-01-15', location: 'Main Avenue' },
      { id: 2, title: 'Talent Unlimited', date: '2025-02-10', location: 'Auditorium' }
    ],
    members: [
      { id: 1, name: 'Specials Lead 1', role: 'President', image: '', email: 'specials.lead1@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Specials Lead 2', role: 'Coordinator', image: '', email: 'specials.lead2@example.com', phone: '+91 98765 43211' }
    ],
    gallery: []
  };

  return <ClubLayout club={club} />;
};

export default SpecialsClub;

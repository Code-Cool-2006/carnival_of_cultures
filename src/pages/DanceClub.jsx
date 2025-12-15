import React from 'react';
import { Move } from 'lucide-react';
import ClubLayout from '../components/ClubLayout';
import clubLogo from '../assets/Dance_club_logo.jpg';

const DanceClub = () => {
  const club = {
    id: 'dance',
    name: 'Nrityom the Dance Club of GIT',
    Icon: Move,
    aboutImage: clubLogo,
    gradient: 'linear-gradient(135deg, #00A3FF 0%, #4D00FF 100%)',
    shortDescription: 'The rhythm of India, the moves of the world.',
    fullDescription: 'From the grace of Bharatanatyam and Kathak to the high energy of Bhangra and Street Hip-Hop. Taal is where tradition meets modernity. Join us for Garba nights, flash mobs, and our annual showcase "Nritya".',
    events: [
      { id: 1, title: 'Inter-College Dance Off', date: '2023-11-25', location: 'Grand Hall' },
      { id: 2, title: 'Bhangra Workshop', date: '2023-12-10', location: 'Dance Studio A' }
    ],
    members: [
      { id: 1, name: 'Bhavana Kolaki', role: 'Council Member', image: '', email: 'bhavana@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Madhura Gogi', role: 'Council Member', image: '', email: 'madhura.g@example.com', phone: '+91 98765 43211' },
      { id: 3, name: 'Madhura Hangirgekar', role: 'Council Member', image: '', email: 'madhura.h@example.com', phone: '+91 98765 43212' },
      { id: 4, name: 'Sanjana Sugandhi', role: 'Council Member', image: '', email: 'sanjana@example.com', phone: '+91 98765 43213' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1543050688-662584d41fa3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=800'
    ]
  };

  return <ClubLayout club={club} />;
};

export default DanceClub;

import React from 'react';
import { Music } from 'lucide-react';
import ClubLayout from '../components/ClubLayout';
import clubLogo from '../assets/Music_club_logo.png';

const MusicClub = () => {
  const club = {
    id: 'music',
    name: 'Music Club of GIT',
    Icon: Music,
    aboutImage: clubLogo,
    gradient: 'linear-gradient(135deg, #FF0066 0%, #E60000 100%)',
    shortDescription: 'From Classical Raagas to Bollywood Beats.',
    fullDescription: 'Sargam is the heartbeat of our campus. We celebrate the rich heritage of Hindustani and Carnatic classical music while also jamming to the latest Bollywood and Indie pop hits. Whether you play the Tabla, Sitar, Guitar, or just love to sing Arijit Singh songs, this is your gharana.',
    events: [
      { id: 1, title: 'Mehfil-e-Sangeet', date: '2023-11-15', location: 'Open Air Theatre' },
      { id: 2, title: 'Bollywood Antakshari', date: '2023-12-05', location: 'Student Lounge' },
      { id: 3, title: 'Battle of Bands: Fusion', date: '2024-01-20', location: 'Main Auditorium' }
    ],
    members: [
      { id: 1, name: 'Ananya Sharma', role: 'President', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', email: 'ananya@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Rahul Verma', role: 'Tabla Lead', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200', email: 'rahul@example.com', phone: '+91 98765 43211' },
      { id: 3, name: 'Priya Iyer', role: 'Classical Vocalist', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200', email: 'priya@example.com', phone: '+91 98765 43212' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1465847899078-b413929f7120?auto=format&fit=crop&q=80&w=800', 
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'
    ]
  };

  return <ClubLayout club={club} />;
};

export default MusicClub;

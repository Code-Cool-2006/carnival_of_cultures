import React from 'react';
import { BookOpen } from 'lucide-react';
import ClubLayout from '../components/ClubLayout';
import clubLogo from '../assets/Lit_club_logo.jpg';

const LiteratureClub = () => {
  const club = {
    id: 'literature',
    name: 'Literary Club of GIT',
    Icon: BookOpen,
    aboutImage: clubLogo,
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #4F46E5 100%)',
    shortDescription: 'Shayeri, Stories, and Debates.',
    fullDescription: 'Celebrating literature in English, Hindi, and regional languages. Join us for Mushairas, slam poetry, book reviews, and intense debates on current affairs.',
    events: [
      { id: 1, title: 'Shaam-e-Shayeri', date: '2023-12-01', location: 'Coffee House' },
      { id: 2, title: 'Lit Fest: Author Talk', date: '2024-02-05', location: 'Library Hall' }
    ],
    members: [
      { id: 1, name: 'Aditya Goudar', role: 'Council members', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200', email: 'aditya@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Kritika Tekriwal', role: 'Council members', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200', email: 'kritika@example.com', phone: '+91 98765 43211' },
      { id: 3, name: 'Ramya Kulkarni', role: 'Coordinators', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200', email: 'ramya@example.com', phone: '+91 98765 43212' },
      { id: 4, name: 'Arhaan Mulani', role: 'Coordinators', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200', email: 'arhaan@example.com', phone: '+91 98765 43213' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800'
    ]
  };

  return <ClubLayout club={club} />;
};

export default LiteratureClub;

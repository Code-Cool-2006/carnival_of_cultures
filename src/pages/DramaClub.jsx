import React from 'react';
import { Drama, Trophy, Award, Star, Mail, Phone } from 'lucide-react';
import ClubLayout from '../components/ClubLayout';
import clubLogo from '../assets/Drama_club_logo.jpg';

const DramaClub = () => {
  const club = {
    id: 'drama',
    name: 'Tathva the Drama Club of GIT',
    Icon: Drama,
    aboutImage: clubLogo,
    gradient: 'linear-gradient(135deg, #FF9900 0%, #FF5500 100%)',
    shortDescription: 'All the world is a stage, especially ours.',
    fullDescription: 'Whether it is Nukkad Natak (Street Play) highlighting social issues or grand stage productions of Ramayana and contemporary theatre, Nautanki is for the storytellers. We focus on method acting, scriptwriting, and keeping the theatre culture alive.',
    eventsTitle: 'Past Events',
    events: [
      { id: 1, title: 'Echoes of Murder', date: '2025-06-08', location: 'Campus Quad' },
      { id: 2, title: 'Improv Comedy Night', date: '2025-06-15', location: 'Auditorium' }
    ],
    achievements: [
      { id: 1, title: 'Waves 2024', description: '🥇 1st Place at BITS Goa', Icon: Trophy },
      { id: 2, title: 'Incident 2024', description: '🥈 2nd Place at NITK', Icon: Award },
      { id: 3, title: 'Inbloom 2025', description: '🥇 1st Place at Christ University', Icon: Trophy },
      { id: 4, title: 'Symbhav 2025', description: '🥇 1st Place at Symbiosis Pune', Icon: Trophy },
      { id: 5, title: 'Insignia 2025', description: '🥈 2nd Place at SDM Dharwad', Icon: Award },
      { id: 6, title: 'Yukti 2025', description: '🥇 1st Place at VTU', Icon: Trophy },
      { id: 7, title: 'Invento 2024', description: '🥇 1st Place at KLE Sheshgiri', Icon: Trophy },
      { id: 8, title: 'Festivista 2024', description: '🥇 1st Place at Lingaraj Literary', Icon: Trophy },
      { id: 9, title: 'Toastmasters 2024', description: '🥇 1st Place at KLS IMER', Icon: Trophy }
    ],
    members: [
      { id: 1, name: 'Gaurikh Khoda', role: 'Student Council', image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=200', email: 'gaurikh@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Bhartesh Mareppagol', role: 'Student Council', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', email: 'bhartesh@example.com', phone: '+91 98765 43211' },
      { id: 3, name: 'Kumudini Balobal', role: 'Student Coordinator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', email: 'kumudini@example.com', phone: '+91 98765 43212' },
      { id: 4, name: 'Manoj Gugade', role: 'Student Coordinator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', email: 'manoj@example.com', phone: '+91 98765 43213' },
    ],
    gallery: [
      'src/assets/Photos_assests/Nukkad_drama.png',
      'src/assets/Photos_assests/Echoes_drama.png'
    ]
  };

  return <ClubLayout club={club} />;
};

export default DramaClub;

import React from 'react';
import { Brain } from 'lucide-react';
import ClubLayout from '../components/ClubLayout';
import clubLogo from '../assets/Quiz_club_logo.jpg';

const QuizClub = () => {
  const club = {
    id: 'quiz',
    name: 'Quiz Club of KLS GIT',
    Icon: Brain,
    aboutImage: clubLogo,
    gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    shortDescription: 'Test your knowledge, challenge your wits.',
    fullDescription: 'The Quiz Club of KLS GIT is a battleground for the intellectually curious. From tech trivia and business quizzes to general knowledge and pop culture, we cover it all. Join us to sharpen your mind and compete for glory.',
    events: [
      { id: 1, title: 'Brainiacs Open Quiz', date: '2024-03-10', location: 'Silver Jubilee Auditorium' },
      { id: 2, title: 'Tech Trivia Night', date: '2024-03-25', location: 'CS Seminar Hall' }
    ],
    members: [
      { id: 1, name: 'Aditya Kulkarni', role: 'Quiz Master', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', email: 'aditya.k@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Snehal Deshpande', role: 'Event Coordinator', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200', email: 'snehal@example.com', phone: '+91 98765 43211' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
    ]
  };

  return <ClubLayout club={club} />;
};

export default QuizClub;

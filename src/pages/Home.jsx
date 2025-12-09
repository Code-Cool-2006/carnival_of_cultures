import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Move, Drama, Palette, BookOpen, Camera, Brain, ArrowRight, Circle, Scissors, Gamepad2, Star } from 'lucide-react';
import heroImg from '../assets/hero_illustration.png';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FadeInSection = ({ children }) => {
  const [domRef, isVisible] = useScrollAnimation();
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

const iconMap = {
  Music,
  Move,
  Drama,
  Palette,
  BookOpen,
  Camera,
  Camera,
  Brain,
  Scissors,
  Gamepad2,
  Star
};

const clubs = [
  {
    id: 'music',
    name: 'Music Club of GIT',
    icon: 'Music',
    gradient: 'linear-gradient(135deg, #FF0066 0%, #E60000 100%)',
    shortDescription: 'From Classical Raagas to Bollywood Beats.'
  },
  {
    id: 'dance',
    name: 'Nrityom the Dance Club of GIT',
    icon: 'Move',
    gradient: 'linear-gradient(135deg, #00A3FF 0%, #4D00FF 100%)',
    shortDescription: 'The rhythm of India, the moves of the world.'
  },
  {
    id: 'drama',
    name: 'Tathva the Drama Club of GIT',
    icon: 'Drama',
    gradient: 'linear-gradient(135deg, #FF9900 0%, #FF5500 100%)',
    shortDescription: 'All the world is a stage, especially ours.'
  },
  {
    id: 'art',
    name: 'Fine Arts Club of GIT',
    icon: 'Palette',
    gradient: 'linear-gradient(135deg, #84CC16 0%, #15803D 100%)',
    shortDescription: 'Filling the canvas with colors of India.'
  },
  {
    id: 'literature',
    name: 'Literary Club of GIT',
    icon: 'BookOpen',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #4F46E5 100%)',
    shortDescription: 'Shayeri, Stories, and Debates.'
  },
  {
    id: 'photography',
    name: 'Photography Club of GIT',
    icon: 'Camera',
    gradient: 'linear-gradient(135deg, #D946EF 0%, #9333EA 100%)',
    shortDescription: 'Capturing the Incredible India around us.'
  },
  {
    id: 'quiz',
    name: 'Quiz Club of KLS GIT',
    icon: 'Brain',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    shortDescription: 'Test your knowledge, challenge your wits.'
  },
  {
    id: 'fashion',
    name: 'Fashion Club',
    icon: 'Scissors',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #FBBF24 100%)',
    shortDescription: 'Strut your style on the runway of life.'
  },
  {
    id: 'gaming',
    name: 'E-Gaming Club',
    icon: 'Gamepad2',
    gradient: 'linear-gradient(135deg, #10B981 0%, #000000 100%)',
    shortDescription: 'Level up your game.'
  },
  {
    id: 'specials',
    name: 'Specials Club',
    icon: 'Star',
    gradient: 'linear-gradient(135deg, #FF0000 0%, #FFFF00 25%, #00FF00 50%, #00FFFF 75%, #0000FF 100%)',
    shortDescription: 'Celebrating uniqueness and inclusivity.'
  }
];


const Home = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Blobs */}
      <div className="bg-pattern"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Hero Section */}
      <section style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        padding: '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'center', gap: 'clamp(2rem, 5vw, 4rem)', textAlign: 'left' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h1 className="animate-slide-up delay-1" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '0.5rem', background: 'linear-gradient(to right, #db2777, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800, lineHeight: 1.1 }}>
              Carnival of Cultures
            </h1>
            <h3 className="animate-slide-up delay-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
              KLS Gogte Institute of Technology
            </h3>
            <p className="animate-slide-up delay-2" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '540px', lineHeight: 1.6 }}>
              Where diversity creates harmony. Explore a world of art, music, and expression in our vibrant community.
            </p>
            <a href="#clubs" className="animate-slide-up delay-3" style={{ 
              padding: '1rem 3rem', 
              background: 'linear-gradient(to right, #db2777, #f97316)', 
              color: '#fff', 
              borderRadius: '50px', 
              fontWeight: 700,
              fontSize: '1.1rem',
              display: 'inline-block',
              boxShadow: '0 10px 30px -10px rgba(219, 39, 119, 0.5)',
              transform: 'translateY(0)',
              transition: 'all 0.3s'
            }}>
              Join a Community
            </a>
          </div>  

          <div className="animate-slide-up" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <img src={heroImg} alt="Carnival of Cultures" style={{ width: '100%', maxWidth: '600px', height: 'auto', filter: 'drop-shadow(0 0 50px rgba(244, 63, 94, 0.3))' }} />
          </div>

        </div>
      </section>

      {/* Clubs Grid */}
      <section id="clubs" style={{ padding: 'clamp(3rem, 8vw, 6rem) 1.5rem', position: 'relative', zIndex: 1, background: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(20px)' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '4rem', color: 'var(--text-primary)' }}>Our Communities</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {clubs.map((club) => {
            const Icon = iconMap[club.icon] || Circle; // Fallback
            return (
              <FadeInSection key={club.id}>
              <Link to={`/${club.id}`} className="club-card hover-scale" style={{ 
                background: 'var(--bg-secondary)', 
                borderRadius: '24px', 
                overflow: 'hidden',
                textDecoration: 'none',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                border: '1px solid rgba(0,0,0,0.05)',
                position: 'relative',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '6px', 
                  background: club.gradient 
                }}></div>
                
                <div style={{ padding: '2.5rem', flex: 1 }}>
                  <div style={{ 
                    width: '70px', 
                    height: '70px', 
                    borderRadius: '20px', 
                    background: club.gradient,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: '#fff', 
                    boxShadow: '0 10px 20px -5px rgba(0,0,0,0.1)'
                  }}>
                    <Icon size={36} />
                  </div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>{club.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.1rem' }}>{club.shortDescription}</p>
                </div>
                <div style={{ 
                  padding: '1.5rem 2.5rem', 
                  borderTop: '1px solid rgba(0,0,0,0.05)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  gap: '0.5rem', 
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  background: 'rgba(0,0,0,0.02)'
                }}>
                  View Details <div style={{ background: 'var(--text-primary)', color: '#fff', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowRight size={16} /></div>
                </div>
              </Link>
              </FadeInSection>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;

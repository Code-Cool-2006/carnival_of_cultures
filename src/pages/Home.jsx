import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Move, Drama, Palette, BookOpen, Camera, Brain, ArrowRight, Circle, Scissors, Gamepad2, Star } from 'lucide-react';
import heroImg from '../assets/hero_illustration.png';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Home.css';

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
    <div className="home-container">
      <div className="bg-pattern"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <section className="home-hero">
        <div className="hero-content">
          
          <div className="hero-text-container">
            <h1 className="hero-title animate-slide-up delay-1">
              Carnival of Cultures
            </h1>
            <h3 className="hero-subtitle animate-slide-up delay-1">
              KLS Gogte Institute of Technology
            </h3>
            <p className="hero-description animate-slide-up delay-2">
              Where diversity creates harmony. Explore a world of art, music, and expression in our vibrant community.
            </p>
            <a href="#clubs" className="join-button animate-slide-up delay-3">
              Join a Community
            </a>
          </div>  

          <div className="hero-image-container animate-slide-up">
            <img src={heroImg} alt="Carnival of Cultures" className="hero-image" />
          </div>

        </div>
      </section>

      <section className="home-about-section">
        <div className="home-about-container">
          <h2 className="home-about-title">About the Carnival</h2>
          <div className="home-about-text">
            <p>
              The Carnival of Cultures at KLS GIT is more than just a festival; it's a celebration of the vibrant tapestry that makes our institute unique. We bring together diverse talents, traditions, and innovative spirits to create a platform for expression and connection.
            </p>
            <p>
              From the rhythmic beats of Nrityom to the intellectual challenges of the Quiz Club, every society contributes to the holistic development of our students, fostering creativity, leadership, and camaraderie.
            </p>
          </div>
        </div>
      </section>

      <section id="clubs" className="clubs-section">
        <h2 className="clubs-title">Our Communities</h2>
        <div className="clubs-grid">
          {clubs.map((club) => {
            const Icon = iconMap[club.icon] || Circle;
            return (
              <FadeInSection key={club.id}>
              <Link to={`/${club.id}`} className="club-card">
                <div className="club-card-top-border" style={{ background: club.gradient }}></div>
                
                <div className="club-card-content">
                  <div className="club-icon-box" style={{ background: club.gradient }}>
                    <Icon size={36} />
                  </div>
                  <h3 className="club-name">{club.name}</h3>
                  <p className="club-description">{club.shortDescription}</p>
                </div>
                <div className="club-card-footer">
                  View Details 
                  <div className="arrow-icon-circle">
                    <ArrowRight size={16} />
                  </div>
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

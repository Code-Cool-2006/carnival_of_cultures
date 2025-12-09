import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Move, Drama, Palette, BookOpen, Camera, Calendar, MapPin, Circle, Mail, Phone } from 'lucide-react';
import clubLogo from '../assets/Dance_club_logo.jpg';
import Carousel from '../components/Carousel';

const iconMap = {
  Music,
  Move,
  Drama,
  Palette,
  BookOpen,
  Camera
};

const DanceClub = () => {
  const club = {
    id: 'dance',
    name: 'Nrityom the Dance Club of GIT',
    icon: 'Move',
    gradient: 'linear-gradient(135deg, #00A3FF 0%, #4D00FF 100%)', // Blue to Indigo
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

  const Icon = iconMap[club.icon] || Circle;

  return (
    <div style={{ paddingBottom: '4rem', background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* Hero Banner */}
      <div style={{ 
        height: '50vh', 
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), ${club.gradient}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'clamp(1.5rem, 5vw, 3rem)',
        position: 'relative',
        marginBottom: '4rem'
      }}>
        <Link to="/" style={{ position: 'absolute', top: '2rem', left: '2rem', background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '50px', color: '#fff', textDecoration: 'none', backdropFilter: 'blur(5px)' }}>
          ← Back
        </Link>
        <div className="animate-slide-up">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Icon size={48} color="#fff" />
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', margin: 0 }}>{club.name}</h1>
          </div>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px' }}>{club.shortDescription}</p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* About Section */}
        <section style={{ display: 'flex', gap: '4rem', marginBottom: '6rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <h2 style={{ marginBottom: '3rem', paddingLeft: '1rem', borderLeft: `6px solid`, borderImage: `${club.gradient} 1`, fontSize: '2.5rem' }}>Upcoming Events</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {club.events.map(event => (
              <div key={event.id} className="event-card" style={{ 
                background: 'var(--card-bg)', 
                padding: '2rem', 
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease'
               }}>
                <div style={{ marginBottom: '1rem', background: club.gradient, width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Calendar size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{event.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                   <span>{event.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                   <MapPin size={16} />
                   <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Members Section */}
        <section style={{ marginBottom: '6rem' }}>
           <h2 style={{ marginBottom: '3rem', paddingLeft: '1rem', borderLeft: `6px solid`, borderImage: `${club.gradient} 1`, fontSize: '2.5rem' }}>Team Leaders</h2>
           <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
             {club.members.map(member => (
               <div key={member.id} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--card-bg)', padding: '1rem 2rem 1rem 1rem', borderRadius: '100px', border: '1px solid var(--border-color)' }}>
                 <img src={member.image} alt={member.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                 <div>
                   <h4 style={{ fontSize: '1.2rem', margin: 0 }}>{member.name}</h4>
                   <p style={{ margin: 0, color: 'var(--accent-primary)', fontSize: '0.9rem' }}>{member.role}</p>
                   <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                     {member.email && <a href={`mailto:${member.email}`} style={{ color: 'var(--text-secondary)' }} title={member.email}><Mail size={16} /></a>}
                     {member.phone && <a href={`tel:${member.phone}`} style={{ color: 'var(--text-secondary)' }} title={member.phone}><Phone size={16} /></a>}
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* Gallery Section */}
        {club.gallery && club.gallery.length > 0 && (
          <section>
            <h2 style={{ marginBottom: '3rem', paddingLeft: '1rem', borderLeft: `6px solid`, borderImage: `${club.gradient} 1`, fontSize: '2.5rem' }}>Gallery</h2>
            <Carousel items={club.gallery} />
          </section>
        )}

      </div>
    </div>
  );
};

export default DanceClub;

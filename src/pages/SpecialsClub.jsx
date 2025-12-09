import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, MapPin, Circle, Mail, Phone } from 'lucide-react';
import Carousel from '../components/Carousel';

const SpecialsClub = () => {
  const club = {
    id: 'specials',
    name: 'Specials Club',
    icon: 'Star',
    gradient: 'linear-gradient(135deg, #FF0000 0%, #FFFF00 25%, #00FF00 50%, #00FFFF 75%, #0000FF 100%)', // Rainbow-ish
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
            <Star size={48} color="#fff" />
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', margin: 0 }}>{club.name}</h1>
          </div>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px' }}>{club.shortDescription}</p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* About Section */}
        <section style={{ display: 'flex', gap: '4rem', marginBottom: '6rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
             <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', background: club.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>About Us</h2>
             <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              {club.fullDescription}
             </p>
          </div>
          <div style={{ flex: 1, minWidth: '280px', height: '300px', background: 'var(--bg-secondary)', borderRadius: '30px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <Star size={150} style={{ opacity: 0.1, color: '#000' }} />
          </div>
        </section>

        {/* Events Section */}
        <section style={{ marginBottom: '6rem' }}>
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
        {club.members.length > 0 && (
        <section style={{ marginBottom: '6rem' }}>
           <h2 style={{ marginBottom: '3rem', paddingLeft: '1rem', borderLeft: `6px solid`, borderImage: `${club.gradient} 1`, fontSize: '2.5rem' }}>Team Leaders</h2>
           <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
             {club.members.map(member => (
               <div key={member.id} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--card-bg)', padding: '1rem 2rem 1rem 1rem', borderRadius: '100px', border: '1px solid var(--border-color)' }}>
                 <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: club.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                   <Star size={32} />
                 </div>
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
        )}

      </div>
    </div>
  );
};

export default SpecialsClub;

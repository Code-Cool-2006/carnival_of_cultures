import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Award, ExternalLink } from 'lucide-react';

const ExClubs = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleClub = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const extraClubs = [
    {
      id: 1,
      name: 'Rotaract Club of GIT',
      category: 'Social Service',
      description: 'Dedicated to community service and professional development. We organize blood donation camps, literacy drives, and leadership workshops.',
      council: [
        { role: 'President', name: 'Amit Patil' },
        { role: 'Secretary', name: 'Nidhi Desai' },
        { role: 'Treasurer', name: 'Rohan Kulkarni' }
      ]
    },
    {
      id: 2,
      name: 'IEEE Student Branch',
      category: 'Technical',
      description: 'The world\'s largest technical professional organization. We conduct hackathons, tech talks, and industrial visits to foster technological innovation.',
      council: [
        { role: 'Chair', name: 'Priya Sharma' },
        { role: 'Vice Chair', name: 'Vikram Singh' },
        { role: 'Webmaster', name: 'Aniket Rao' }
      ]
    },
    {
      id: 3,
      name: 'ACM Student Chapter',
      category: 'Technical',
      description: 'Advancing computing as a science and profession. Join us for coding competitions, algorithm workshops, and guest lectures from industry experts.',
      council: [
        { role: 'Chair', name: 'Sneha Gupta' },
        { role: 'Secretary', name: 'Rahul Nair' }
      ]
    },
    {
      id: 4,
      name: 'Red Cross Wing',
      category: 'Social Service',
      description: 'A humanitarian movement committed to saving lives. We focus on first-aid training, disaster relief awareness, and health camps.',
      council: [
        { role: 'Coordinator', name: 'Dr. S. K. Kulkarni' },
        { role: 'Student Lead', name: 'Meerya John' }
      ]
    },
    {
      id: 5,
      name: 'Debating Society',
      category: 'Literary',
      description: 'For those who love to argue... constructively. We host parliamentary debates, MUNs, and public speaking sessions.',
      council: [
        { role: 'President', name: 'Arjun Deshpande' }
      ]
    }
  ];

  return (
    <div style={{ paddingBottom: '4rem', background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)', paddingTop: '100px' }}>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>More Clubs at GIT</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Discover the diverse range of technical and social clubs contributing to our vibrant campus life.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {extraClubs.map((club) => (
            <div key={club.id} style={{ 
              background: 'var(--card-bg)', 
              borderRadius: '20px', 
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              border: '1px solid var(--border-color)',
              transition: 'all 0.3s ease'
            }}>
              <div 
                onClick={() => toggleClub(club.id)}
                style={{ 
                  padding: '2rem', 
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: expandedId === club.id ? 'var(--bg-secondary)' : 'transparent'
                }}
              >
                <div>
                  <span style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: 600, 
                    color: 'var(--accent-primary)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.5px',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>{club.category}</span>
                  <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{club.name}</h3>
                </div>
                {expandedId === club.id ? <ChevronUp size={24} color="var(--accent-primary)" /> : <ChevronDown size={24} color="var(--text-secondary)" />}
              </div>

              {expandedId === club.id && (
                <div style={{ padding: '0 2rem 2rem 2rem', borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', marginTop: '2rem' }}>
                    {club.description}
                  </p>
                  
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                      <Users size={20} color="var(--accent-primary)" />
                      Council Members
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                      {club.council.map((member, index) => (
                        <div key={index} style={{ 
                          background: 'var(--card-bg)', 
                          padding: '1rem', 
                          borderRadius: '12px',
                          border: '1px solid var(--border-color)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem'
                        }}>
                          <div style={{ width: '40px', height: '40px', background: 'var(--bg-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Award size={20} color="var(--accent-secondary)" />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '1rem' }}>{member.name}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{member.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExClubs;

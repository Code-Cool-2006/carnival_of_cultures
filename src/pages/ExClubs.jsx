import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Award, ExternalLink } from 'lucide-react';
import './ExClubs.css';

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
    <div className="exclubs-container">
      
      <div className="exclubs-wrapper">
        <div className="exclubs-header">
          <h1 className="exclubs-title">More Clubs at GIT</h1>
          <p className="exclubs-subtitle">Discover the diverse range of technical and social clubs contributing to our vibrant campus life.</p>
        </div>

        <div className="exclubs-about-card">
          <h2 className="exclubs-about-title">About Student Societies</h2>
          <p className="exclubs-about-text">
            Beyond our cultural flagships, GIT is home to numerous student chapters and societies that bridge the gap between academic learning and professional world. These bodies provide opportunities for technical skill-building, networking, and social responsibility. Whether you are interested in coding, debating, or community service, there is a place for you to grow.
          </p>
        </div>

        <div className="clubs-list">
          {extraClubs.map((club) => (
            <div key={club.id} className="club-accordion-item">
              <div 
                onClick={() => toggleClub(club.id)}
                className={`club-accordion-header ${expandedId === club.id ? 'expanded' : ''}`}
              >
                <div>
                  <span className="club-category-tag">{club.category}</span>
                  <h3 className="club-accordion-title">{club.name}</h3>
                </div>
                {expandedId === club.id ? <ChevronUp size={24} color="var(--accent-primary)" /> : <ChevronDown size={24} color="var(--text-secondary)" />}
              </div>

              {expandedId === club.id && (
                <div className="club-accordion-content">
                  <p className="club-description-text">
                    {club.description}
                  </p>
                  
                  <div>
                    <h4 className="council-section-title">
                      <Users size={20} color="var(--accent-primary)" />
                      Council Members
                    </h4>
                    <div className="council-grid">
                      {club.council.map((member, index) => (
                        <div key={index} className="council-card">
                          <div className="council-icon-circle">
                            <Award size={20} color="var(--accent-secondary)" />
                          </div>
                          <div>
                            <div className="council-member-name">{member.name}</div>
                            <div className="council-member-role">{member.role}</div>
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

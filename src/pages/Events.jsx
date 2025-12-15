import React from 'react';
import { Calendar, MapPin, Clock, Music, Move, Drama, Palette, BookOpen, Camera, Brain, Scissors, Gamepad2, Star, Circle } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Events.css';

const FadeInSection = ({ children, delay = 0 }) => {
  const [domRef, isVisible] = useScrollAnimation();
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

const iconMap = {
  Music, Move, Drama, Palette, BookOpen, Camera, Brain, Scissors, Gamepad2, Star
};

const eventsData = [
  {
    id: 1,
    title: "Battle of Bands",
    date: "Dec 20, 2025",
    time: "6:00 PM",
    location: "Main Auditorium",
    club: "Music Club of GIT",
    icon: "Music",
    description: "Witness the ultimate musical showdown as college bands compete for the title of 'Rockstars of GIT'.",
    type: "Competition"
  },
  {
    id: 2,
    title: "Neon Dance Workshop",
    date: "Dec 22, 2025",
    time: "4:30 PM",
    location: "Dance Studio",
    club: "Nrityom",
    icon: "Move",
    description: "Learn cool hip-hop moves under UV lights. Wear white for the best effect!",
    type: "Workshop"
  },
  {
    id: 3,
    title: "Street Play: Social Media",
    date: "Dec 24, 2025",
    time: "1:00 PM",
    location: "College Canteen Area",
    club: "Tathva Drama Club",
    icon: "Drama",
    description: "A thought-provoking performace on the impact of social media on modern relationships.",
    type: "Performance"
  },
  {
    id: 4,
    title: "Sketching the Sunset",
    date: "Dec 28, 2025",
    time: "5:00 PM",
    location: "Library Terrace",
    club: "Fine Arts Club",
    icon: "Palette",
    description: "A relaxed evening of live sketching session at the terrace. Materials provided.",
    type: "Workshop"
  },
  {
    id: 5,
    title: "New Year's Open Mic",
    date: "Jan 05, 2026",
    time: "5:30 PM",
    location: "Amphitheatre",
    club: "Literary Club",
    icon: "BookOpen",
    description: "Start the year with your stories, poems, and songs. Open for all students.",
    type: "Open Mic"
  }
];

const Events = () => {
  return (
    <div className="events-container">
       <div className="bg-pattern"></div>
       <div className="blob blob-3" style={{ top: '10%', right: '0%' }}></div>
       <div className="blob blob-1" style={{ top: '60%', left: '-20%' }}></div>

      <section className="events-hero">
        <h1 className="events-title">Upcoming Events</h1>
        <p className="events-subtitle">
          Mark your calendars! Join us for workshops, competitions, and performances happening around the campus.
        </p>
      </section>

      <section className="timeline-section">
        <div className="timeline-line"></div>

        {eventsData.map((event, index) => {
          const Icon = iconMap[event.icon] || Circle;
          return (
            <div key={event.id} className="event-card-wrapper">
              <div className="event-connector"></div>
              <FadeInSection delay={index * 0.1}>
                <div className="event-card">
                  <span className="event-date-badge">{event.type}</span>
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-club">
                    <Icon size={16} />
                    {event.club}
                  </div>
                  <p className="event-description">{event.description}</p>
                  
                  <div className="event-meta">
                    <div className="meta-item">
                      <Calendar size={14} /> {event.date}
                    </div>
                    <div className="meta-item">
                      <Clock size={14} /> {event.time}
                    </div>
                    <div className="meta-item">
                      <MapPin size={14} /> {event.location}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Events;

import { useState } from "react";

import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
  Clock,
  Code2,
  Ticket,
  Sparkles,
  Cloud,
  Laptop,
  MessageCircle,
} from "lucide-react";

import "./App.css";

/* ---------------- DATA ---------------- */

const eventStats = [
  { number: "250+", label: "Previous attendees" },
  { number: "09", label: "Talks in 2024" },
  { number: "02", label: "Community activities" },
  { number: "10+", label: "Industry professionals" },
];

const schedule = [
  {
    time: "11:00 AM – 12:00 PM",
    type: "OPENING",
    title: "Welcome & Opening Session",
    speakers: ["AWS Cloud Club Team"],
    level: "All levels",
    description:
      "Begin your Community Day journey with an introduction to AWS Cloud Club, the day's activities, and opportunities available to student learners.",
    takeaway:
      "Understand the event structure and discover how to get involved with the student community.",
    format: "Interactive introduction and community briefing",
    whatYouDo:
      "Get introduced to the event, meet the organizing team, and understand what to expect throughout the day.",
    whoItsFor: "Every attendee, including first-time participants.",
    whatYouLearn:
      "Learn about AWS Cloud Club, the day's sessions, and ways to participate in the community.",
  },
  {
    time: "12:00 PM – 1:00 PM",
    type: "EXPERT SESSION",
    title: "Exploring AWS & Cloud Careers",
    speakers: ["Jen Looper", "Aditi Sawhney"],
    level: "Beginner friendly",
    description:
      "Explore cloud computing fundamentals, real-world AWS applications, and different career paths available in the cloud industry.",
    takeaway:
      "Discover important cloud skills, career possibilities, and ways to begin your learning journey.",
    format: "Expert talk and audience Q&A",
    whatYouDo:
      "Listen to industry perspectives and ask questions about learning cloud technologies and starting a career.",
    whoItsFor: "Students curious about cloud computing and technology careers.",
    whatYouLearn:
      "Understand possible cloud career paths, useful skills, and how to start building your knowledge.",
  },
  {
    time: "1:00 PM – 2:00 PM",
    type: "COMMUNITY BREAK",
    title: "Lunch & Networking",
    speakers: ["AWS Cloud Club Community Team"],
    level: "Everyone",
    description:
      "Take a break and connect with fellow students, speakers, and community members. Share interests, ask questions, and exchange project ideas.",
    takeaway:
      "Build connections and find other students interested in technology and cloud computing.",
    format: "Networking and refreshments",
    whatYouDo:
      "Meet other attendees, exchange ideas, and have informal conversations with speakers and peers.",
    whoItsFor: "Everyone attending Community Day.",
    whatYouLearn:
      "Discover shared interests, possible collaborators, and ways to stay connected with the community.",
  },
  {
    time: "2:00 PM – 4:00 PM",
    type: "HANDS-ON",
    title: "Build with AWS",
    speakers: ["Dipali", "Varsha Verma"],
    level: "Beginner friendly",
    description:
      "Participate in a guided practical workshop that introduces AWS services and demonstrates how cloud technologies can be used to create a simple project.",
    takeaway:
      "Understand a basic cloud workflow and gain practical exposure to building with AWS.",
    format: "Guided hands-on workshop",
    whatYouDo:
      "Follow a guided activity, explore AWS services, and work through the steps of a beginner-friendly project.",
    whoItsFor: "Beginners and students with basic technical knowledge.",
    whatYouLearn:
      "Understand a basic AWS workflow and see how cloud services can support a practical project.",
  },
  {
    time: "4:00 PM – 5:00 PM",
    type: "CLOSING",
    title: "Closing Session & Community Connect",
    speakers: ["Gargee Bhatnagar", "Kristine Howard"],
    level: "All levels",
    description:
      "Reflect on the day's learning, discuss key takeaways, and discover future workshops, activities, and ways to stay connected with the community.",
    takeaway:
      "Know how to continue learning and participate in upcoming community activities.",
    format: "Reflection, announcements, and open discussion",
    whatYouDo:
      "Reflect on your learning, share thoughts, and discover opportunities to remain involved after the event.",
    whoItsFor:
      "All attendees who want to continue learning with the community.",
    whatYouLearn:
      "Discover next steps, future activities, and ways to continue your cloud learning journey.",
  },
];

const speakers = [
  {
    name: "Jen Looper",
    role: "Head of Academic Advocacy, AWS",
    topic: "Career pathways in cloud",
  },
  {
    name: "Aditi Sawhney",
    role: "Senior Digital Marketing Manager, AWS",
    topic: "Career pathways in cloud",
  },
  {
    name: "Dipali",
    role: "VP of Data Engineering, NatWest · AWS Hero",
    topic: "CI/CD pipelines with AWS",
  },
  {
    name: "Varsha Verma",
    role: "Senior Cloud Ops Engineer, Accenture",
    topic: "Cloud basics",
  },
  {
    name: "Kristine Howard",
    role: "AWS Developer Relations & Advocacy",
    topic: "Generative AI",
  },
  {
    name: "Gargee Bhatnagar",
    role: "Consultant, Capgemini · AWS Community Builder",
    topic: "AWS security & IAM",
  },
];

const upcomingEvents = [
  {
    title: "Cloud Fundamentals Workshop",
    date: "08 Nov 2026",
    time: "11:00 AM – 1:00 PM",
    venue: "Online",
    mode: "Online",
    level: "Beginner",
    price: "Free",
    accent: "blue",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    description:
      "Understand cloud computing fundamentals and explore the core concepts of AWS.",
    learn: [
      "Cloud computing basics",
      "Introduction to AWS services",
      "Real-world cloud use cases",
    ],
  },
  {
    title: "Build with AWS",
    date: "20 Dec 2026",
    time: "10:00 AM – 4:00 PM",
    venue: "New Delhi",
    mode: "Offline",
    level: "Beginner Friendly",
    price: "Free",
    accent: "yellow",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    description:
      "A practical workshop where students explore AWS services through guided activities.",
    learn: [
      "Working with AWS services",
      "Building a basic cloud project",
      "Learning through hands-on activities",
    ],
  },
  {
    title: "Student Tech Meetup",
    date: "February 2027",
    time: "Time to be announced",
    venue: "IGTuw Auditorium",
    mode: "Offline",
    level: "All Levels",
    price: "Free",
    accent: "navy",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    description:
      "Connect with fellow students, exchange ideas and discover opportunities in technology.",
    learn: [
      "Student networking",
      "Community discussions",
      "Technology and career insights",
    ],
  },
];

/* ---------------- MAIN APP ---------------- */

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar activePage={activePage} navigateTo={navigateTo} />

      {activePage === "Home" && (
        <main>
          <Hero navigateTo={navigateTo} />

          <section className="event-stats">
            <div className="stats-intro">
              <span>THE 2024 EDITION</span>

              <strong>
                Built by students.
                <br />
                Powered by community.
              </strong>
            </div>

            {eventStats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </section>

          <section className="event-details-section">
            <div className="section-label">01 / THE MAIN EVENT</div>

            <div className="details-layout">
              <div className="details-heading">
                <h2>
                  One day.
                  <br />
                  <span>Many possibilities.</span>
                </h2>
              </div>

              <div className="details-copy">
                <p>
                  AWS Student Community Day brings students together to learn
                  about AWS, explore cloud technology, and connect with people
                  building in the technology space.
                </p>

                <p>
                  Expect expert sessions, practical learning, networking, and an
                  opportunity to discover your next step in cloud.
                </p>
              </div>
            </div>

            <div className="event-dossier">
              <div className="dossier-main">
                <div className="dossier-topline">
                  <span>FEATURED EVENT</span>
                  <span className="dossier-status">2026 EDITION</span>
                </div>

                <h3>
                  AWS Student
                  <br />
                  Community Day
                </h3>

                <p>
                  Learn from experts, explore AWS technologies, and build
                  connections with fellow student developers.
                </p>

                <button
                  className="yellow-button"
                  onClick={() => navigateTo("Community Day")}
                >
                  Explore the schedule
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="dossier-information">
                <InfoRow
                  icon={<CalendarDays />}
                  label="DATE"
                  value="15 October 2026"
                />

                <InfoRow
                  icon={<Clock />}
                  label="TIME"
                  value="11:00 AM – 5:00 PM"
                />

                <InfoRow
                  icon={<MapPin />}
                  label="VENUE"
                  value="IGDTUW Auditorium, New Delhi"
                />

                <InfoRow
                  icon={<Users />}
                  label="WHO CAN ATTEND"
                  value="Students & cloud learners"
                />

                <InfoRow
                  icon={<Code2 />}
                  label="FORMAT"
                  value="Expert sessions + hands-on workshop"
                />
              </div>
            </div>
          </section>

          <ScheduleSection />

          <section className="audience-section">
            <div className="audience-visual">
              <span className="visual-label">THE CLOUD CLUB MINDSET</span>

              <div className="visual-letter">AWS</div>

              <div className="visual-bottom">LEARN / BUILD / CONNECT</div>
            </div>

            <div className="audience-copy">
              <div className="section-label">03 / WHO IS IT FOR?</div>

              <h2>
                No matter where you
                <span> start.</span>
              </h2>

              <p>
                You don't need to be an AWS expert. Community Day is designed
                for students who want to understand cloud, ask questions, and
                explore new possibilities.
              </p>

              <div className="audience-list">
                <div>
                  <strong>01</strong>
                  <span>Curious beginners</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Student developers</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Cloud enthusiasts</span>
                </div>
              </div>
            </div>
          </section>

          <section className="upcoming-section">
            <div className="section-label">04 / KEEP EXPLORING</div>

            <div className="upcoming-heading">
              <h2>
                More ways to
                <br />
                <span>learn together.</span>
              </h2>

              <button
                className="outline-button"
                onClick={() => navigateTo("Events")}
              >
                View all events
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="upcoming-grid">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.title}
                  event={event}
                  onViewDetails={() => {
                    setSelectedEvent(event);
                    navigateTo("Event Details");
                  }}
                />
              ))}
            </div>
          </section>
        </main>
      )}

      {activePage === "Community Day" && (
        <CommunityDayPage navigateTo={navigateTo} />
      )}

      {activePage === "Events" && (
        <PageLayout
          label="EVENT DIRECTORY"
          title="Find your next learning experience."
          description="Explore workshops, talks, and student community events."
        >
          <div className="directory-feature">
            <div>
              <span>FEATURED EXPERIENCE</span>

              <h2>AWS Student Community Day 2026</h2>

              <p>15 October 2026 · 11 AM–5 PM · IGDTUW Auditorium</p>
            </div>

            <button
              className="yellow-button"
              onClick={() => navigateTo("Community Day")}
            >
              View event
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="upcoming-grid">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.title}
                event={event}
                onViewDetails={() => {
                  setSelectedEvent(event);
                  navigateTo("Event Details");
                }}
              />
            ))}
          </div>
        </PageLayout>
      )}

      {activePage === "Event Details" && selectedEvent && (
        <EventDetailsPage event={selectedEvent} navigateTo={navigateTo} />
      )}

      {activePage === "About" && (
        <PageLayout
          label="THE COMMUNITY"
          title="More than a learning space. A community of builders."
          description="AWS Cloud Club at IGDTUW brings students together to explore cloud technology, learn practical skills, and build meaningful connections."
        >
          {/* ABOUT THE COMMUNITY */}

          <section className="about-top-section">
            <div className="about-top-heading">
              <span className="community-eyebrow">ABOUT THE COMMUNITY</span>

              <h2>
                A space to
                <br />
                <span>learn and belong.</span>
              </h2>
            </div>

            <div className="about-top-description">
              <p>
                AWS Cloud Club at IGDTUW is a student-focused community where
                learners explore cloud technology, develop practical skills, and
                connect with others who share their interests.
              </p>

              <p>
                From beginner-friendly sessions to hands-on workshops, the
                community encourages students to learn at their own pace and
                discover new possibilities in technology.
              </p>
            </div>
          </section>

          <section className="about-feature-grid">
            <div className="about-feature-main">
              <span>OUR COMMUNITY</span>

              <h3>
                Curiosity is where
                <br />
                every journey begins.
              </h3>

              <p>
                You do not need to be an AWS expert to participate. Bring your
                questions, ideas, and willingness to learn.
              </p>
            </div>

            <div className="about-feature-side">
              <div>
                <Cloud size={25} />
                <h3>Explore</h3>
                <p>Discover cloud concepts and AWS technologies.</p>
              </div>

              <div>
                <Users size={25} />
                <h3>Connect</h3>
                <p>Meet students and fellow technology enthusiasts.</p>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <div className="section-label">WHY JOIN US?</div>

            <div className="benefits-heading">
              <h2>
                More than an <span>event.</span>
              </h2>

              <p>
                Become part of a student-led community where you can learn new
                technologies, build projects and connect with other learners.
              </p>
            </div>

            <div className="benefits-grid">
              <article className="benefit-card">
                <span>01</span>
                <h3>Learn from practitioners</h3>
                <p>
                  Explore cloud concepts and practical insights through sessions
                  led by industry professionals and community members.
                </p>
              </article>

              <article className="benefit-card">
                <span>02</span>
                <h3>Build practical skills</h3>
                <p>
                  Move beyond theory through hands-on activities, workshops and
                  project-based learning.
                </p>
              </article>

              <article className="benefit-card">
                <span>03</span>
                <h3>Grow your network</h3>
                <p>
                  Meet students, speakers and learners who share an interest in
                  technology and cloud computing.
                </p>
              </article>

              <article className="benefit-card">
                <span>04</span>
                <h3>Keep exploring</h3>
                <p>
                  Discover future events, learning opportunities and ways to
                  contribute to the community.
                </p>
              </article>
            </div>
          </section>

          {/* COMMUNITY JOURNEY */}

          <div className="community-section-heading">
            <span className="community-eyebrow">THE CLOUD CLUB JOURNEY</span>

            <h2>
              Discover.
              <br />
              <span>Experiment.</span>
              <br />
              Connect.
            </h2>
          </div>

          <div className="community-journey">
            <div className="journey-step">
              <strong>01</strong>

              <div>
                <h3>Learn</h3>
                <p>
                  Understand cloud concepts through sessions, discussions, and
                  beginner-friendly learning experiences.
                </p>
              </div>
            </div>

            <div className="journey-step">
              <strong>02</strong>

              <div>
                <h3>Build</h3>
                <p>
                  Turn concepts into practical projects through workshops and
                  hands-on activities.
                </p>
              </div>
            </div>

            <div className="journey-step">
              <strong>03</strong>

              <div>
                <h3>Connect</h3>
                <p>
                  Meet students, speakers, and people with similar interests in
                  technology.
                </p>
              </div>
            </div>

            <div className="journey-step">
              <strong>04</strong>

              <div>
                <h3>Continue</h3>
                <p>
                  Explore future events, activities, and opportunities to
                  continue your learning journey.
                </p>
              </div>
            </div>
          </div>

          {/* HOW TO PARTICIPATE */}

          <div className="community-section-heading">
            <span className="community-eyebrow">HOW YOU CAN PARTICIPATE</span>

            <h2>
              Find your way
              <br />
              <span>into the community.</span>
            </h2>
          </div>

          <div className="community-panels redesigned-community-panels">
            <div>
              <span>01 / LEARN</span>
              <h2>Understand the cloud.</h2>

              <p>
                Attend expert sessions, explore AWS services, ask questions, and
                build a strong foundation in cloud computing.
              </p>

              <strong>Sessions · Talks · Discussions</strong>
            </div>

            <div>
              <span>02 / BUILD</span>
              <h2>Experiment with ideas.</h2>

              <p>
                Participate in hands-on workshops and discover how cloud
                technologies can support your projects.
              </p>

              <strong>Workshops · Projects · Practice</strong>
            </div>

            <div>
              <span>03 / CONNECT</span>
              <h2>Find your people.</h2>

              <p>
                Meet fellow students, speakers, community builders, and
                potential collaborators.
              </p>

              <strong>Networking · Collaboration · Mentorship</strong>
            </div>

            <div>
              <span>04 / CONTINUE</span>
              <h2>Keep growing after the event.</h2>

              <p>
                Discover future workshops, community activities, and new
                opportunities to continue your cloud learning journey.
              </p>

              <strong>Events · Opportunities · Growth</strong>
            </div>
          </div>

          {/* FINAL CTA */}

          <div className="community-bottom-banner">
            <div>
              <span className="community-eyebrow">YOUR NEXT STEP</span>

              <h2>
                Start with curiosity.
                <br />
                <span>Grow with community.</span>
              </h2>
            </div>

            <button
              className="yellow-button"
              onClick={() => navigateTo("Events")}
            >
              Explore events
              <ArrowRight size={17} />
            </button>
          </div>
        </PageLayout>
      )}

      <footer>
        <div>
          <strong>AWS Student Community</strong>
          <p>Learn. Build. Connect.</p>
        </div>

        <span>AWS Cloud Club · IGDTUW</span>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/aws_studentbuildergroup_igdtuw/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/aws-student-builder-group-igdtuw/home/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://x.com/AWSClubIGDTUW?t=Mv5rpAyBkvI8AGfDC6ayoQ&s=09"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
        </div>
      </footer>
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */

function Navbar({ activePage, navigateTo }) {
  return (
    <nav className="navbar">
      <button
        className="brand"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png"
          alt="AWS Logo"
          className="aws-logo-img"
        />
        <div className="brand-name">
          <strong>Student Community</strong>
          <small>Cloud learning & connection</small>
        </div>
      </button>

      <div className="nav-links">
        {["Home", "Events", "Community Day", "About"].map((page) => (
          <button
            key={page}
            className={activePage === page ? "active" : ""}
            onClick={() => navigateTo(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button className="nav-cta" onClick={() => navigateTo("Events")}>
        Explore events
        <ArrowRight size={16} />
      </button>
    </nav>
  );
}

/* ---------------- HERO ---------------- */

function Hero({ navigateTo }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-kicker">
          <Sparkles size={14} />
          AWS STUDENT COMMUNITY DAY
        </div>

        <h1>
          One day.
          <br />
          <span>Endless</span>
          <br />
          possibilities.
        </h1>

        <p>
          Explore AWS cloud technology, learn from industry speakers,
          participate in hands-on sessions, and connect with fellow student
          builders.
        </p>

        <div className="hero-buttons">
          <button
            className="yellow-button"
            onClick={() => navigateTo("Community Day")}
          >
            Explore Community Day
            <ArrowRight size={17} />
          </button>

          <button
            className="outline-button"
            onClick={() => navigateTo("About")}
          >
            Meet the community
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="orbit orbit-three"></div>

        <div className="community-card">
          <div className="aws-wordmark">aws</div>

          <div className="card-heading">
            COMMUNITY
            <br />
            DAY
          </div>

          <div className="card-line"></div>

          <small>LEARN · BUILD · CONNECT</small>
        </div>

        <div className="floating-card floating-top">
          <CalendarDays size={19} />

          <div>
            <small>DATE</small>
            <strong>15 OCT 2026</strong>
          </div>
        </div>

        <div className="floating-card floating-bottom">
          <Users size={19} />

          <div>
            <small>FOR</small>
            <strong>STUDENTS & BUILDERS</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOMEPAGE SCHEDULE ---------------- */

function ScheduleSection() {
  return (
    <section className="schedule-section">
      <div className="section-label">02 / YOUR EVENT AT A GLANCE</div>

      <div className="schedule-heading">
        <h2>
          A day designed
          <br />
          <span>around learning.</span>
        </h2>

        <p>
          Move from inspiration to practical exploration, with time to meet the
          community in between.
        </p>
      </div>

      <div className="schedule-list">
        {schedule.map((item, index) => (
          <article className="schedule-item" key={item.time}>
            <div className="schedule-time">{item.time}</div>

            <div className="schedule-icon">
              <CalendarDays size={22} />
            </div>

            <div className="schedule-content">
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <div className="schedule-index">0{index + 1}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- EVENT COMPONENTS ---------------- */

function InfoRow({ icon, label, value }) {
  return (
    <div className="info-row">
      <div className="info-icon">{icon}</div>

      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function EventCard({ event, onViewDetails }) {
  return (
    <article className={`event-card ${event.accent || ""}`}>
      <div
        className="event-card-visual"
        style={{
          backgroundImage: `linear-gradient(#111b2e55, #111b2ecc), url(${event.image})`,
        }}
      >
        <span>{event.mode}</span>
        <div>AWS</div>
      </div>

      <div className="event-card-content">
        <h3>{event.title}</h3>

        <p>{event.description}</p>

        <div className="event-card-meta">
          <span>{event.date}</span>
          <span>{event.mode}</span>
          <span>{event.level}</span>
        </div>

        <button className="card-button" onClick={onViewDetails}>
          View details
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}

function EventDetailsPage({ event, navigateTo }) {
  const eventContent = {
    "Cloud Fundamentals Workshop": {
      tag: "START YOUR CLOUD JOURNEY",
      headline: "Your first step into the cloud.",
      intro:
        "A beginner-friendly workshop designed to help you understand cloud computing and explore the foundations of AWS.",
      accentText: "START SMALL. THINK BIG.",
      highlights: [
        {
          number: "01",
          title: "Understand cloud",
          text: "Learn what cloud computing means and why businesses use it.",
        },
        {
          number: "02",
          title: "Explore AWS",
          text: "Discover core AWS services and real-world applications.",
        },
        {
          number: "03",
          title: "Ask questions",
          text: "Interact with mentors and clarify your cloud concepts.",
        },
      ],
      agenda: [
        ["11:00 AM", "Welcome & Cloud Introduction"],
        ["11:20 AM", "Understanding Cloud Computing"],
        ["12:00 PM", "Exploring Core AWS Services"],
        ["12:40 PM", "Real-world Use Cases"],
        ["1:00 PM", "Interactive Q&A & Closing"],
      ],
      audience:
        "Students who are new to cloud computing, AWS, or technology careers.",
      requirements: [
        "No previous AWS experience required",
        "A stable internet connection",
        "A laptop or computer",
        "Curiosity and questions",
      ],
      cta: "Reserve your place",
    },

    "Build with AWS": {
      tag: "FROM CONCEPT TO CREATION",
      headline: "Turn your ideas into cloud projects.",
      intro:
        "A practical, guided workshop where students explore AWS services and work through the foundations of building a cloud-based project.",
      accentText: "LEARN BY BUILDING.",
      highlights: [
        {
          number: "01",
          title: "Explore services",
          text: "Understand how different AWS services support applications.",
        },
        {
          number: "02",
          title: "Build practically",
          text: "Follow a guided activity and experiment with cloud workflows.",
        },
        {
          number: "03",
          title: "Think like a builder",
          text: "Learn how cloud tools can support your own ideas.",
        },
      ],
      agenda: [
        ["10:00 AM", "Introduction & Workshop Briefing"],
        ["10:30 AM", "AWS Services Overview"],
        ["11:30 AM", "Guided Hands-on Activity"],
        ["1:00 PM", "Break & Community Networking"],
        ["2:00 PM", "Continue Building"],
        ["3:30 PM", "Project Showcase & Discussion"],
        ["4:00 PM", "Closing & Next Steps"],
      ],
      audience:
        "Beginners, student developers, and learners interested in practical cloud projects.",
      requirements: [
        "Basic computer knowledge",
        "A laptop and charger",
        "An AWS learning account if required",
        "Willingness to experiment",
      ],
      cta: "Register for workshop",
    },

    "Student Tech Meetup": {
      tag: "MEET. SHARE. DISCOVER.",
      headline: "Your community is bigger than your classroom.",
      intro:
        "A student-focused technology meetup where learners connect, exchange ideas, discuss emerging technologies, and discover new opportunities.",
      accentText: "BRING YOUR CURIOSITY.",
      highlights: [
        {
          number: "01",
          title: "Meet peers",
          text: "Connect with students who share your interests in technology.",
        },
        {
          number: "02",
          title: "Exchange ideas",
          text: "Discuss projects, learning experiences, and new possibilities.",
        },
        {
          number: "03",
          title: "Discover opportunities",
          text: "Explore communities, activities, and future learning events.",
        },
      ],
      agenda: [
        ["TBA", "Welcome & Introductions"],
        ["TBA", "Student Community Conversations"],
        ["TBA", "Technology Discussions"],
        ["TBA", "Networking & Idea Exchange"],
        ["TBA", "Community Announcements"],
      ],
      audience:
        "Students from all experience levels who want to meet, learn, and exchange ideas.",
      requirements: [
        "An interest in technology",
        "A willingness to meet new people",
        "Questions or ideas to share",
        "Your student ID if required",
      ],
      cta: "Register your interest",
    },
  };

  const content =
    eventContent[event.title] || eventContent["Cloud Fundamentals Workshop"];

  return (
    <main className={`individual-event-page ${event.accent || "blue"}`}>
      {/* HERO */}

      <section className="individual-event-hero">
        <div className="individual-event-hero-content">
          <button className="back-link" onClick={() => navigateTo("Events")}>
            ← Back to events
          </button>

          <div className="event-page-tag">{content.tag}</div>

          <h1>{content.headline}</h1>

          <p>{content.intro}</p>

          <div className="individual-event-meta">
            <span>
              <CalendarDays size={15} /> {event.date}
            </span>
            <span>
              <Clock size={15} /> {event.time}
            </span>
            <span>
              <MapPin size={15} /> {event.venue}
            </span>
          </div>

          <button
            className="yellow-button"
            onClick={() => {
              if (event.title === "AWS Student Community Day") {
                navigateTo("Community Day");
              } else {
                alert(`Registration for ${event.title} will open soon!`);
              }
            }}
          >
            {content.cta}
            <ArrowRight size={17} />
          </button>
        </div>

        <div className="individual-event-visual">
          <div className="event-visual-small">AWS / STUDENT EVENT</div>
          <div className="event-visual-large">AWS</div>
          <div className="event-visual-bottom">{content.accentText}</div>
        </div>
      </section>

      {/* QUICK INFORMATION */}

      <section className="event-quick-info">
        <div>
          <span>FORMAT</span>
          <strong>{event.mode}</strong>
        </div>

        <div>
          <span>LEVEL</span>
          <strong>{event.level}</strong>
        </div>

        <div>
          <span>ENTRY</span>
          <strong>{event.price}</strong>
        </div>

        <div>
          <span>LOCATION</span>
          <strong>{event.venue}</strong>
        </div>
      </section>

      {/* LEARNING OUTCOMES */}

      <section className="event-highlights-section">
        <div className="section-label">01 / THE EXPERIENCE</div>

        <div className="event-section-heading">
          <h2>
            More than an event.
            <br />
            <span>A learning experience.</span>
          </h2>

          <p>
            Every session is designed to help you gain knowledge, interact with
            others, and leave with something useful.
          </p>
        </div>

        <div className="event-highlights-grid">
          {content.highlights.map((highlight) => (
            <article className="event-highlight-card" key={highlight.number}>
              <span>{highlight.number}</span>
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* AGENDA */}

      <section className="event-agenda-section">
        <div className="section-label">02 / EVENT FLOW</div>

        <h2>
          Know what
          <br />
          <span>to expect.</span>
        </h2>

        <p className="event-section-intro">
          Explore the planned flow of the event. The final schedule may be
          updated by the organizing team.
        </p>

        <div className="event-agenda">
          {content.agenda.map(([time, title], index) => (
            <div className="event-agenda-row" key={`${time}-${title}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{time}</strong>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO SHOULD ATTEND */}

      <section className="event-audience-section">
        <div className="event-audience-main">
          <div className="section-label">03 / IS THIS FOR YOU?</div>

          <h2>
            Come as you are.
            <br />
            <span>Leave with new ideas.</span>
          </h2>

          <p>{content.audience}</p>
        </div>

        <div className="event-requirements">
          <h3>What you should bring</h3>

          {content.requirements.map((requirement, index) => (
            <div key={requirement}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <span>{requirement}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="individual-event-cta">
        <div>
          <div className="section-label">04 / YOUR NEXT STEP</div>

          <h2>
            Ready to explore
            <br />
            <span>what comes next?</span>
          </h2>

          <p>
            Join fellow learners, explore AWS, and take the next step in your
            learning journey.
          </p>
        </div>

        <div className="individual-event-cta-actions">
          <button
            className="outline-button"
            onClick={() => navigateTo("Events")}
          >
            Explore other events
          </button>

          <button
            className="yellow-button"
            onClick={() => navigateTo("Community Day")}
          >
            {content.cta}
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </main>
  );
}

function PageLayout({ label, title, description, children }) {
  return (
    <main className="page-layout">
      <div className="section-label">{label}</div>

      <h1>{title}</h1>

      <p className="page-description">{description}</p>

      {children}
    </main>
  );
}

/* ---------------- COMMUNITY DAY PAGE ---------------- */

function CommunityDayPage({ navigateTo }) {
  const [openSession, setOpenSession] = useState(null);
  const [activeGlanceCard, setActiveGlanceCard] = useState(0);
  const [registrationStep, setRegistrationStep] = useState("form");

  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    college: "",
    level: "",
  });

  const glanceCards = [
    {
      number: "01",
      icon: <Cloud size={23} />,
      title: "Explore cloud concepts",
      description:
        "Understand cloud foundations and discover how AWS technologies are used.",
    },
    {
      number: "02",
      icon: <Users size={23} />,
      title: "Learn from professionals",
      description:
        "Hear practical insights from industry speakers and ask meaningful questions.",
    },
    {
      number: "03",
      icon: <Laptop size={23} />,
      title: "Build something practical",
      description:
        "Participate in a guided activity and explore how cloud services work.",
    },
    {
      number: "04",
      icon: <MessageCircle size={23} />,
      title: "Connect with the community",
      description:
        "Meet students, speakers, and fellow builders with similar interests.",
    },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setRegistrationData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setRegistrationStep("review");
  };

  const confirmRegistration = () => {
    setRegistrationStep("success");
  };

  return (
    <main className="community-day-page">
      {/* DETAILS HERO */}

      <section className="details-hero">
        <div>
          <div className="section-label">AWS STUDENT COMMUNITY DAY · 2026</div>

          <h1>
            Learn.
            <br />
            <span>Build.</span>
            <br />
            Connect.
          </h1>

          <p>
            A full-day student experience featuring AWS sessions, expert
            conversations, practical learning, and community networking.
          </p>

          <div className="details-hero-meta">
            <span>15 OCTOBER 2026</span>
            <span>11 AM – 5 PM</span>
            <span>IGDTUW AUDITORIUM</span>
          </div>
        </div>

        <div className="glance-stack">
          <div className="glance-heading">
            <span>YOUR DAY AT A GLANCE</span>
            <small>SELECT A CARD</small>
          </div>

          <div className="glance-cards">
            {glanceCards.map((card, index) => (
              <button
                key={card.number}
                className={`glance-card ${
                  activeGlanceCard === index ? "active" : ""
                }`}
                onClick={() => setActiveGlanceCard(index)}
              >
                <div className="glance-card-top">
                  <span>{card.icon}</span>
                  <strong>{card.number}</strong>
                </div>

                <h3>{card.title}</h3>

                {activeGlanceCard === index && <p>{card.description}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT OVERVIEW */}

      <section className="event-overview">
        <div className="section-label">01 / ABOUT THE EVENT</div>

        <div className="overview-heading">
          <h2>
            Designed for curious
            <br />
            <span>student builders.</span>
          </h2>

          <p>
            Whether you are completely new to cloud computing or already
            experimenting with AWS, Community Day gives you space to learn, ask
            questions, and explore new possibilities.
          </p>
        </div>

        <div className="overview-grid">
          <article className="overview-card">
            <span>WHO CAN ATTEND?</span>
            <h3>Every learning level</h3>

            <p>
              Students, beginners, aspiring developers, cloud enthusiasts, and
              anyone curious about AWS.
            </p>
          </article>

          <article className="overview-card blue-card">
            <span>WHAT YOU WILL LEARN</span>
            <h3>Cloud concepts and careers</h3>

            <p>
              Understand cloud fundamentals, explore AWS services, and learn
              about possible career paths in technology.
            </p>
          </article>

          <article className="overview-card yellow-card">
            <span>WHAT TO BRING</span>
            <h3>Your laptop and curiosity</h3>

            <p>
              Bring your student ID, laptop for the workshop, and questions you
              would like to discuss with the community.
            </p>
          </article>

          <article className="overview-card dark-card">
            <span>EVENT FORMAT</span>
            <h3>Learn, interact, and build</h3>

            <p>
              The day combines expert sessions, networking, interactive
              discussions, and a guided hands-on workshop.
            </p>
          </article>
        </div>
      </section>

      {/* DETAILED SCHEDULE */}

      <section className="full-schedule-section">
        <div className="section-label">02 / EVENT SCHEDULE</div>

        <h2>
          Follow the
          <br />
          <span>day's rhythm.</span>
        </h2>

        <p className="schedule-intro">
          Open each session to explore its focus, speakers, expected learning,
          and format.
        </p>

        <div className="detail-schedule-list">
          {schedule.map((item, index) => {
            const isOpen = openSession === index;

            return (
              <article
                className={`detail-session ${isOpen ? "expanded" : ""}`}
                key={item.time}
              >
                <button
                  className="session-toggle"
                  onClick={() => setOpenSession(isOpen ? null : index)}
                >
                  <span className="session-time">{item.time}</span>

                  <span className="session-main">
                    <small>{item.type}</small>
                    <strong>{item.title}</strong>
                  </span>

                  <span className="session-plus">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div className="session-description">
                    <div className="session-meta">
                      <span>🎤 {item.speakers.join(" · ")}</span>
                      <span>◉ {item.level}</span>
                    </div>

                    <p>{item.description}</p>

                    <div className="session-detail-grid">
                      <div>
                        <span>WHAT YOU'LL DO</span>
                        <p>{item.whatYouDo}</p>
                      </div>

                      <div>
                        <span>WHO IT'S FOR</span>
                        <p>{item.whoItsFor}</p>
                      </div>

                      <div>
                        <span>WHAT YOU'LL LEARN</span>
                        <p>{item.whatYouLearn}</p>
                      </div>
                    </div>

                    <div className="session-extra">
                      <span>FORMAT</span>
                      <strong>{item.format}</strong>
                    </div>

                    <div className="session-takeaway">
                      <span>WHAT YOU'LL TAKE AWAY</span>
                      <p>{item.takeaway}</p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* SPEAKERS */}

      <section className="details-speakers-section">
        <div className="section-label">03 / MEET THE SPEAKERS</div>

        <div className="overview-heading">
          <h2>
            Learn from people
            <br />
            <span>who build in cloud.</span>
          </h2>

          <p>
            Explore speakers and topics connected to the learning experience.
          </p>
        </div>

        <div className="speaker-grid">
          {speakers.map((speaker) => (
            <article className="speaker-card" key={speaker.name}>
              <div className="speaker-number">AWS / SPEAKER</div>

              <h3>{speaker.name}</h3>

              <p className="speaker-role">{speaker.role}</p>

              <span>{speaker.topic}</span>
            </article>
          ))}
        </div>
      </section>

      {/* REGISTRATION */}

      <section className="details-cta">
        {registrationStep === "form" && (
          <>
            <div className="registration-intro">
              <div className="section-label">04 / JOIN THE EXPERIENCE</div>

              <h2>
                Your next cloud
                <br />
                <span>chapter starts here.</span>
              </h2>

              <p>
                Register your interest to attend Community Day and receive
                event-related updates through the registration process.
              </p>
            </div>

            <form className="registration-form" onSubmit={handleFormSubmit}>
              <div className="form-field">
                <label htmlFor="name">FULL NAME</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={registrationData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">EMAIL ADDRESS</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={registrationData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="college">COLLEGE / UNIVERSITY</label>

                <input
                  id="college"
                  name="college"
                  type="text"
                  placeholder="Enter your college"
                  value={registrationData.college}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="level">EXPERIENCE LEVEL</label>

                <select
                  id="level"
                  name="level"
                  value={registrationData.level}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select your level
                  </option>

                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <button className="yellow-button" type="submit">
                Review registration
                <ArrowRight size={17} />
              </button>
            </form>
          </>
        )}

        {registrationStep === "review" && (
          <div className="registration-success">
            <div className="section-label">04 / REVIEW DETAILS</div>

            <h2>
              Check your
              <br />
              <span>registration details.</span>
            </h2>

            <div className="registration-review">
              <div>
                <span>FULL NAME</span>
                <strong>{registrationData.name}</strong>
              </div>

              <div>
                <span>EMAIL</span>
                <strong>{registrationData.email}</strong>
              </div>

              <div>
                <span>COLLEGE</span>
                <strong>{registrationData.college}</strong>
              </div>

              <div>
                <span>EXPERIENCE LEVEL</span>
                <strong>{registrationData.level}</strong>
              </div>
            </div>

            <p>
              Review your details before confirming your registration interest.
            </p>

            <div className="registration-actions">
              <button
                className="outline-button"
                onClick={() => setRegistrationStep("form")}
              >
                Edit details
              </button>

              <button className="yellow-button" onClick={confirmRegistration}>
                Confirm registration
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        )}

        {registrationStep === "success" && (
          <div className="registration-success">
            <span className="success-icon">✓</span>

            <div className="section-label">REGISTRATION CONFIRMATION</div>

            <h2>
              You're ready to
              <br />
              <span>join the experience.</span>
            </h2>

            <p>
              Your registration details have been recorded. Here is what you
              should do next.
            </p>

            <div className="next-steps">
              <h3>What happens next?</h3>

              <div>
                <strong>01</strong>
                <p>Check your email for future event updates.</p>
              </div>

              <div>
                <strong>02</strong>
                <p>Save 15 October 2026 on your calendar.</p>
              </div>

              <div>
                <strong>03</strong>
                <p>Arrive 15 minutes early for event check-in.</p>
              </div>

              <div>
                <strong>04</strong>
                <p>Bring your student ID and laptop for the workshop.</p>
              </div>
            </div>

            <button
              className="yellow-button"
              onClick={() => navigateTo("Home")}
            >
              Back to Home
              <ArrowRight size={17} />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;

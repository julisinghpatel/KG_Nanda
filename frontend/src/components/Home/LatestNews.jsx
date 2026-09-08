import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, Newspaper, Sparkles, Clock } from "lucide-react";
import "./LatestNews.css";

const newsData = [
  {
    id: 1,
    title: "New Emergency Wing Inaugurated",
    date: "June 05, 2026",
    readTime: "3 min read",
    desc: "K. G. Nanda Hospital launches a state-of-the-art emergency wing equipped with advanced life support systems.",
    image: "Media/M1.png",
    tag: "Inauguration"
  },
  {
    id: 2,
    title: "Free Health Checkup Camp",
    date: "May 28, 2026",
    readTime: "5 min read",
    desc: "A free mega health camp organized for the community with expert doctors and modern diagnostic facilities.",
    image: "Media/M2.png",
    tag: "Community"
  },
  {
    id: 3,
    title: "24/7 Trauma Care Service",
    date: "May 15, 2026",
    readTime: "4 min read",
    desc: "Our trauma care department now operates 24/7 with specialized surgeons and rapid response teams.",
    image: "Media/M4.png",
    tag: "Emergency"
  }
];

export default function LatestNews() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const goToNews = () => navigate("/news");

  return (
    <section
      ref={sectionRef}
      className={`latest-news-section bg-[#f6f5ee] ${visible ? "is-visible" : ""}`}
    >
      <div className="news-max-container">
        
        {/* PREMIUM HEADER ELEMENT */}
        <div className="news-header-block">
          <div className="premium-badge-tag">
            <Sparkles size={14} className="text-[#dd5200] animate-pulse" />
            <span>Updates & Announcements</span>
          </div>
          <h2 className="news-main-heading text-[#003a70]">
            Latest Medical <span>News & Insights</span>
          </h2>
          <div className="heading-decorative-line bg-[#dd5200]"></div>
        </div>

        {/* STAGGERED NEWS GRID */}
        <div className="news-cards-grid">
          {newsData.map((item, index) => (
            <div
              className="premium-news-card"
              key={item.id}
              style={{ "--card-index": index }}
              onClick={goToNews}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && goToNews()}
            >
              {/* Image Frame with Badges */}
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} className="card-hero-img" />
                <div className="image-overlay-gradient"></div>
                <span className="news-category-tag bg-[#003a70] text-[#ffffff]">
                  {item.tag}
                </span>
              </div>

              {/* Information Base */}
              <div className="card-body-content bg-[#ffffff]">
                {/* Meta Row */}
                <div className="news-metadata-row text-gray-400">
                  <div className="meta-item">
                    <Calendar size={13} className="text-[#35b6b4]" />
                    <span>{item.date}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={13} className="text-[#35b6b4]" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* Typography Deck */}
                <h3 className="news-card-title text-[#003a70]">{item.title}</h3>
                <p className="news-card-description text-gray-500">{item.desc}</p>

                {/* Animated Inline Micro Button */}
                <div className="card-action-footer">
                  <span className="action-link-text text-[#35b6b4]">
                    Read Full Report
                  </span>
                  <div className="arrow-circle bg-[#f6f5ee] text-[#003a70]">
                    <ArrowRight size={16} className="arrow-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MASTER ARCHITECTURE ACTION CALL */}
        <div className="center-action-deck">
          <button
            type="button"
            className="premium-read-more-btn bg-[#003a70] text-[#ffffff]"
            onClick={goToNews}
          >
            <Newspaper size={16} className="text-[#dd5200]" />
            <span>Explore All Updates</span>
            <ArrowRight size={16} className="btn-moving-arrow" />
          </button>
        </div>

      </div>
    </section>
  );
}
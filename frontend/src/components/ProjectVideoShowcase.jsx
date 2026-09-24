import React, { useRef, useState, useEffect } from 'react';
import { 
  BsLaptop, 
  BsPhone, 
  BsPlayFill, 
  BsPauseFill, 
  BsFullscreen,
  BsShieldCheck
} from 'react-icons/bs';

/**
 * Utility to normalize local public video URLs
 * Converts 'frontend/public/projects/...' or 'public/projects/...' to '/projects/...'
 */
export function normalizeVideoSrc(src) {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:') || src.startsWith('blob:')) {
    return src;
  }
  const clean = src.replace(/^(\.\/|\/)?(frontend\/)?(public\/)?/, '');
  return `/${clean}`;
}

/**
 * Reusable Laptop Video Player with authentic device frame
 */
export function LaptopVideo({ videoSrc, posterSrc, projectTitle }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const resolvedVideoSrc = normalizeVideoSrc(videoSrc);
  const resolvedPosterSrc = normalizeVideoSrc(posterSrc);

  const handlePlayToggle = (e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch((err) => {
          console.warn('Playback notice:', err);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="showcase-card laptop-showcase">
      {/* Header Label */}
      <div className="showcase-header">
        <div className="showcase-label-wrap">
          <span className="showcase-index">01</span>
          <div>
            <span className="badge-pill badge-amber showcase-badge">
              <BsLaptop /> LAPTOP EXPERIENCE
            </span>
            <h3 className="showcase-category-title">Laptop / Desktop View</h3>
          </div>
        </div>
        <div className="showcase-live-tag">
          <span className="pulse-dot pulse-dot-amber"></span>
          <span>16:9 HD Display</span>
        </div>
      </div>

      <p className="showcase-desc">
        Demonstrating the full-screen desktop dashboard experience, navigation flow, and comprehensive multi-column layout for {projectTitle}.
      </p>

      {/* Laptop Device Container */}
      <div className="laptop-device-wrapper">
        {/* Laptop Screen Bezel */}
        <div className="laptop-screen-bezel">
          {/* Top Bar with Camera Notch */}
          <div className="laptop-top-bar">
            <div className="laptop-camera-notch">
              <span className="laptop-camera-lens"></span>
              <span className="laptop-mic-dot"></span>
            </div>
          </div>

          {/* Video Screen */}
          <div className="laptop-screen-inner" style={{ position: 'relative' }}>
            <video
              ref={videoRef}
              src={resolvedVideoSrc}
              poster={resolvedPosterSrc}
              preload="metadata"
              controls
              playsInline
              className="device-video-element"
              onPlay={() => {
                setIsPlaying(true);
                setHasStarted(true);
              }}
              onPause={() => setIsPlaying(false)}
              onEnded={() => {
                setIsPlaying(false);
                setHasStarted(false);
              }}
            >
              Your browser does not support HTML5 video.
            </video>

            {/* Custom Initial Play Overlay when paused or before first play */}
            {!isPlaying && !hasStarted && (
              <div 
                className="video-play-overlay"
                onClick={handlePlayToggle}
              >
                <button
                  type="button"
                  className="device-play-btn laptop-play-btn"
                  onClick={handlePlayToggle}
                  aria-label="Play Laptop Video"
                >
                  <BsPlayFill />
                </button>
                <span className="play-overlay-text">Click to Play Desktop Walkthrough</span>
              </div>
            )}
          </div>
        </div>

        {/* Laptop Base & Keyboard Plate */}
        <div className="laptop-base-stand">
          <div className="laptop-notch-lip"></div>
        </div>
        <div className="laptop-base-bottom"></div>
      </div>
    </div>
  );
}

/**
 * Reusable Mobile Video Player with authentic smartphone frame
 */
export function MobileVideo({ videoSrc, posterSrc, projectTitle }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const resolvedVideoSrc = normalizeVideoSrc(videoSrc);
  const resolvedPosterSrc = normalizeVideoSrc(posterSrc);

  const handlePlayToggle = (e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch((err) => {
          console.warn('Playback notice:', err);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="showcase-card mobile-showcase">
      {/* Header Label */}
      <div className="showcase-header">
        <div className="showcase-label-wrap">
          <span className="showcase-index">02</span>
          <div>
            <span className="badge-pill badge-emerald showcase-badge">
              <BsPhone /> MOBILE EXPERIENCE
            </span>
            <h3 className="showcase-category-title">Mobile Responsive View</h3>
          </div>
        </div>
        <div className="showcase-live-tag">
          <span className="pulse-dot pulse-dot-emerald"></span>
          <span>9:19 Touch UI</span>
        </div>
      </div>

      <p className="showcase-desc">
        Demonstrating rapid mobile interactions, touch-optimized menus, and frictionless handheld workflows for {projectTitle}.
      </p>

      {/* Smartphone Device Container */}
      <div className="mobile-device-outer">
        {/* Phone Body with dynamic island, buttons, screen */}
        <div className="mobile-device-body">
          {/* Side Buttons Visual Accents */}
          <span className="mobile-btn-vol-up"></span>
          <span className="mobile-btn-vol-down"></span>
          <span className="mobile-btn-power"></span>

          {/* Dynamic Island / Speaker */}
          <div className="mobile-dynamic-island">
            <span className="island-camera"></span>
            <span className="island-sensor"></span>
          </div>

          {/* Screen Inner */}
          <div className="mobile-screen-inner" style={{ position: 'relative' }}>
            <video
              ref={videoRef}
              src={resolvedVideoSrc}
              poster={resolvedPosterSrc}
              preload="metadata"
              controls
              playsInline
              className="device-video-element mobile-video-element"
              onPlay={() => {
                setIsPlaying(true);
                setHasStarted(true);
              }}
              onPause={() => setIsPlaying(false)}
              onEnded={() => {
                setIsPlaying(false);
                setHasStarted(false);
              }}
            >
              Your browser does not support HTML5 video.
            </video>

            {/* Custom Initial Play Overlay when paused or before first play */}
            {!isPlaying && !hasStarted && (
              <div 
                className="video-play-overlay"
                onClick={handlePlayToggle}
              >
                <button
                  type="button"
                  className="device-play-btn mobile-play-btn"
                  onClick={handlePlayToggle}
                  aria-label="Play Mobile Video"
                >
                  <BsPlayFill />
                </button>
                <span className="play-overlay-text">Play Mobile UI</span>
              </div>
            )}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="mobile-home-bar"></div>
        </div>
      </div>
    </div>
  );
}

/**
 * Main Video Showcase Component
 */
export default function ProjectVideoShowcase({ project }) {
  if (!project || !project.videos) {
    return null;
  }

  const { videos, title } = project;

  return (
    <section className="project-video-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '780px', marginBottom: '3rem' }}>
          <span className="section-subtitle" style={{ color: 'var(--primary)' }}>
            Interactive Demonstrations
          </span>
          <h2 className="section-title">
            See the Project in <span className="gradient-text-amber">Action</span>
          </h2>
          <p className="section-description">
            Experience how <strong>{title}</strong> operates across both large desktop displays and handheld mobile interfaces with fluid responsiveness.
          </p>
        </div>

        {/* Video Showcase Layout: Laptop on left, Mobile on right (stacks vertically on smaller screens) */}
        <div className="project-video-grid">
          {/* 01 - Laptop View */}
          <LaptopVideo
            videoSrc={videos.laptop}
            posterSrc={videos.laptopPoster || project.image}
            projectTitle={title}
          />

          {/* 02 - Mobile View */}
          <MobileVideo
            videoSrc={videos.mobile}
            posterSrc={videos.mobilePoster || project.image}
            projectTitle={title}
          />
        </div>
      </div>
    </section>
  );
}

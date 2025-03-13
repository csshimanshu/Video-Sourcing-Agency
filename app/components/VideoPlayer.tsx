'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
  videoId: string;
  thumbnailUrl?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export default function VideoPlayer({ 
  videoId, 
  thumbnailUrl, 
  onPlay, 
  onPause,
  onNext,
  onPrev,
  hasNext,
  hasPrev 
}: VideoPlayerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  // Load YouTube API
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    return () => {
      // Cleanup
      const youtubeScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      youtubeScript?.remove();
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
    document.body.style.overflow = 'auto';
    onPause?.();
  };

  const handleClick = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
      handlePlayClick();
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
    onPlay?.();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
    onNext?.();
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
    onPrev?.();
  };

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (playerRef.current && !playerRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  // Reset player state when video ID changes
  useEffect(() => {
    setIsPlaying(false);
  }, [videoId]);

  return (
    <>
      {/* Thumbnail with play button */}
      <div 
        className={styles.thumbnail}
        onClick={handleClick}
        style={{ 
          backgroundImage: `url(${thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`})` 
        }}
      >
        <button className={styles.playButton}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className={styles.playIcon}
          >
            <path 
              d="M8 5v14l11-7z" 
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal} ref={playerRef}>
            <button className={styles.closeButton} onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" className={styles.closeIcon}>
                <path 
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" 
                  fill="currentColor"
                />
              </svg>
            </button>
            {/* Navigation buttons */}
            {hasPrev && (
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={handlePrev}
                aria-label="Previous video"
              >
                <svg viewBox="0 0 24 24" fill="none" className={styles.navIcon}>
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
                </svg>
              </button>
            )}
            {hasNext && (
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={handleNext}
                aria-label="Next video"
              >
                <svg viewBox="0 0 24 24" fill="none" className={styles.navIcon}>
                  <path d="M10.59 6L12 7.41 7.83 12l4.17 4.59L10.59 18l-6-6z" fill="currentColor"/>
                </svg>
              </button>
            )}
            <div className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                onLoad={() => setIsPlaying(true)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoFrame}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

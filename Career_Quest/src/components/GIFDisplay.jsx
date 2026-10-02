/**
 * GIFDisplay Component
 * 
 * Displays GIF animations with lazy loading, error handling, and fallback support.
 * Includes loading spinner and fade-in animation.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gifLoader } from '../services/GIFLoader.js';
import './GIFDisplay.css';

const GIFDisplay = ({ 
  gifId, 
  category, 
  fallback, 
  className = '', 
  onLoad, 
  onError 
}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadImage = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const url = await gifLoader.load(gifId);
        if (mounted) {
          setImageUrl(url);
          setIsLoading(false);
          onLoad?.();
        }
      } catch (error) {
        if (mounted) {
          setHasError(true);
          setIsLoading(false);
          onError?.(error);
          
          // Use fallback
          setImageUrl(fallback || gifLoader.getFallback(gifId));
        }
      }
    };

    loadImage();

    return () => {
      mounted = false;
    };
  }, [gifId, fallback, onLoad, onError]);

  if (isLoading) {
    return (
      <div className={`gif-display gif-loading ${className}`}>
        <div className="gif-spinner" />
      </div>
    );
  }

  return (
    <motion.div
      className={`gif-display ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={imageUrl}
        alt={category || 'Animation'}
        className="gif-image"
        loading="lazy"
      />
      {hasError && (
        <div className="gif-error-badge">
          Fallback Image
        </div>
      )}
    </motion.div>
  );
};

export default GIFDisplay;

"use client";
import { useEffect } from 'react';
import { setupScrollTracking } from './GoogleAnalytics';

export default function ScrollTracker() {
  useEffect(() => {
    // Setup scroll tracking when component mounts
    const cleanup = setupScrollTracking();
    
    // Cleanup function
    return cleanup;
  }, []);

  // This component doesn't render anything
  return null;
}

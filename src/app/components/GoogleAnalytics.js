"use client";
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Inner component that uses useSearchParams
function GoogleAnalyticsInner({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return null;
}

// Main component wrapped in Suspense
export function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
    </Suspense>
  );
}

// Track events function
export function trackEvent(action, category, label, value) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Track conversions (form submissions, phone calls, etc.)
export function trackConversion(conversionName) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionName,
    });
  }
}

// Specific tracking functions for business actions

// Track phone number clicks
export function trackPhoneClick() {
  trackEvent('click', 'contact', 'phone_number');
  console.log('GA: Phone click tracked');
}

// Track email clicks  
export function trackEmailClick() {
  trackEvent('click', 'contact', 'email');
  console.log('GA: Email click tracked');
}

// Track contact form submissions
export function trackContactForm(formType = 'general') {
  trackEvent('submit', 'form', `contact_form_${formType}`);
  console.log(`GA: Contact form submission tracked: ${formType}`);
}

// Track service page visits
export function trackServiceView(serviceName) {
  trackEvent('view', 'services', serviceName);
  console.log(`GA: Service view tracked: ${serviceName}`);
}

// Track gallery interactions
export function trackGalleryInteraction(action, imageTitle) {
  trackEvent(action, 'gallery', imageTitle);
  console.log(`GA: Gallery ${action} tracked: ${imageTitle}`);
}

// Track quote requests
export function trackQuoteRequest(serviceType) {
  trackEvent('click', 'quote_request', serviceType);
  console.log(`GA: Quote request tracked: ${serviceType}`);
}

// Track Instagram clicks
export function trackInstagramClick() {
  trackEvent('click', 'social_media', 'instagram');
  console.log('GA: Instagram click tracked');
}

// Track scroll depth
export function trackScrollDepth(percentage) {
  trackEvent('scroll', 'engagement', `${percentage}%`);
}

// Setup scroll tracking
export function setupScrollTracking() {
  if (typeof window === 'undefined') return;
  
  let scrollTracked = {
    25: false,
    50: false,
    75: false,
    90: false
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.floor((scrollTop / docHeight) * 100);

    Object.keys(scrollTracked).forEach(threshold => {
      if (scrollPercent >= threshold && !scrollTracked[threshold]) {
        scrollTracked[threshold] = true;
        trackScrollDepth(threshold);
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}

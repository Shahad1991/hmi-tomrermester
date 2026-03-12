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
}

// Track email clicks  
export function trackEmailClick() {
  trackEvent('click', 'contact', 'email');
}

// Track contact form submissions
export function trackContactForm(formType = 'general') {
  trackEvent('submit', 'form', `contact_form_${formType}`);
}

// Track service page visits
export function trackServiceView(serviceName) {
  trackEvent('view', 'services', serviceName);
}

// Track gallery interactions
export function trackGalleryInteraction(action, imageTitle) {
  trackEvent(action, 'gallery', imageTitle);
}

// Track quote requests
export function trackQuoteRequest(serviceType) {
  trackEvent('click', 'quote_request', serviceType);
}

// Track Instagram clicks
export function trackInstagramClick() {
  trackEvent('click', 'social_media', 'instagram');
}
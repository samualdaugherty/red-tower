/**
 * Analytics utilities using Plausible
 * Disabled in development by default
 */

import Plausible from 'plausible-tracker';

const isDev = process.env.NODE_ENV === 'development';
const disableAnalytics = process.env.NEXT_PUBLIC_DISABLE_ANALYTICS === 'true';

export const plausible = Plausible({
  domain: process.env.PLAUSIBLE_DOMAIN || 'redtowerdigital.com',
  trackLocalhost: false,
});

/**
 * Track a page view
 * Automatically called by Next.js navigation (use in layout/middleware if needed)
 */
export function trackPageView() {
  if (isDev || disableAnalytics) return;
  plausible.trackPageview();
}

/**
 * Track a custom event
 * @param eventName - Name of the event
 * @param props - Optional event properties
 */
export function trackEvent(eventName: string, props?: Record<string, any>) {
  if (isDev || disableAnalytics) {
    console.log('[Analytics - Dev]', eventName, props);
    return;
  }
  plausible.trackEvent(eventName, { props });
}

// TODO: Add Plausible script tag to layout when ready for production
// See: https://plausible.io/docs/plausible-script


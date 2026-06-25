import { useEffect } from 'react';
import { travelConfig } from '../data/travelConfig';

interface SEOProps {
  pageTitle: string;
  description?: string;
  path?: string;
}

export default function SEO({ pageTitle, description, path = "" }: SEOProps) {
  const currentTitle = `${pageTitle} | ${travelConfig.name} - Official Website`;
  const defaultDesc = `${travelConfig.tagline}. Specialized in private family holidays, luxury honeymoons, taxi services, and deluxe houseboat booking in Srinagar, Gulmarg, Pahalgam, and Sonamarg. Contact local experts today!`;
  const metaDescription = description || defaultDesc;
  const canonicalUrl = `https://kashmirhorizontours.com/${path}`;

  useEffect(() => {
    // 1. Update Title
    document.title = currentTitle;

    // 2. Update Meta Description
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (!metaDescEl) {
      metaDescEl = document.createElement('meta');
      metaDescEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescEl);
    }
    metaDescEl.setAttribute('content', metaDescription);

    // 3. Update Canonical URL
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // 4. Update OpenGraph Tags
    const ogTags = {
      'og:title': currentTitle,
      'og:description': metaDescription,
      'og:type': 'website',
      'og:url': canonicalUrl,
      'og:image': 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=1200',
      'og:site_name': travelConfig.name,
      'twitter:card': 'summary_large_image',
      'twitter:title': currentTitle,
      'twitter:description': metaDescription,
      'twitter:image': 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=1200',
    };

    Object.entries(ogTags).forEach(([key, value]) => {
      let ogEl = document.querySelector(`meta[property="${key}"]`) || document.querySelector(`meta[name="${key}"]`);
      if (!ogEl) {
        ogEl = document.createElement('meta');
        ogEl.setAttribute(key.startsWith('og:') ? 'property' : 'name', key);
        document.head.appendChild(ogEl);
      }
      ogEl.setAttribute('content', value);
    });

    // 5. Inject Structured JSON-LD Data for LocalBusiness & TravelAgency
    let schemaEl = document.getElementById('seo-jsonld-schema');
    if (schemaEl) {
      schemaEl.remove();
    }

    schemaEl = document.createElement('script');
    schemaEl.setAttribute('id', 'seo-jsonld-schema');
    schemaEl.setAttribute('type', 'application/ld+json');

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TravelAgency",
          "@id": "https://kashmirhorizontours.com/#agency",
          "name": travelConfig.name,
          "alternateName": "Kashmir Horizon",
          "description": defaultDesc,
          "url": "https://kashmirhorizontours.com",
          "logo": "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=200",
          "telephone": travelConfig.phoneRaw,
          "email": travelConfig.email,
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": " Boulevard Road, Opposite Ghat No. 7, Dal Lake",
            "addressLocality": "Srinagar",
            "addressRegion": "Jammu & Kashmir",
            "postalCode": "190001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "34.0837",
            "longitude": "74.7973"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
          },
          "sameAs": [
            travelConfig.socials.facebook,
            travelConfig.socials.instagram,
            travelConfig.socials.twitter,
            travelConfig.socials.youtube
          ].filter(Boolean)
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://kashmirhorizontours.com/#localbusiness",
          "name": travelConfig.name,
          "image": "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=800",
          "telephone": travelConfig.phoneRaw,
          "email": travelConfig.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": travelConfig.address,
            "addressLocality": "Srinagar",
            "addressRegion": "Jammu & Kashmir",
            "postalCode": "190001",
            "addressCountry": "IN"
          }
        }
      ]
    };

    schemaEl.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(schemaEl);

  }, [currentTitle, metaDescription, canonicalUrl]);

  return null;
}

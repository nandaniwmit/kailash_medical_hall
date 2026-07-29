import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: string;
  schema?: object[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '/',
  type = 'website',
  schema = []
}) => {
  const siteUrl = 'https://kailashmedicalhall.com'; // Canonical baseline
  const fullTitle = `${title} | Kailash Medical Hall Gaya`;
  const fullUrl = `${siteUrl}${canonicalPath}`;

  useEffect(() => {
    // Document Title
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Open Graph
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: fullUrl },
      { property: 'og:site_name', content: 'Kailash Medical Hall' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description }
    ];

    ogTags.forEach(tag => {
      let element = tag.property 
        ? document.querySelector(`meta[property="${tag.property}"]`)
        : document.querySelector(`meta[name="${tag.name}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (tag.property) element.setAttribute('property', tag.property);
        if (tag.name) element.setAttribute('name', tag.name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Inject JSON-LD Schema
    const defaultLocalSchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": "Kailash Medical Hall",
      "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80",
      "telephone": "+919386944232",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chand Chaura Chowk",
        "addressLocality": "Gaya",
        "addressRegion": "Bihar",
        "postalCode": "823001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.7914,
        "longitude": 85.0002
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "08:00",
          "closes": "14:00"
        }
      ],
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, UPI, Credit Card, Debit Card"
    };

    const schemaData = [defaultLocalSchema, ...schema];

    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schemaData);

  }, [title, description, canonicalPath, fullTitle, fullUrl, type, schema]);

  return null;
};

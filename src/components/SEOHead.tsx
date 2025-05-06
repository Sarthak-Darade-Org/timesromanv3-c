import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterImage?: string;
  articleMeta?: {
    publishedTime?: string;
    author?: string;
    category?: string;
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Times Roman - AI-Powered News',
  description = 'Next-generation AI-powered news platform delivering fresh, unbiased perspectives on global events.',
  ogTitle,
  ogDescription,
  ogImage = 'https://i.ibb.co/Z6ffRH7K/Timesromancir-logo.png',
  ogType = 'website',
  canonical,
  twitterCard = 'summary_large_image',
  twitterSite = '@timesroman',
  twitterImage,
  articleMeta
}) => {
  const siteName = 'Times Roman';
  
  // Use window.location.href safely
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const canonicalUrl = canonical || currentUrl;

  // Use custom OG title/description if provided, fallback to regular title/description
  const effectiveOgTitle = ogTitle || title;
  const effectiveOgDescription = ogDescription || description;
  const effectiveTwitterImage = twitterImage || ogImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={effectiveOgTitle} />
      <meta property="og:description" content={effectiveOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={effectiveOgTitle} />
      <meta name="twitter:description" content={effectiveOgDescription} />
      <meta name="twitter:image" content={effectiveTwitterImage} />

      {/* Article Specific Meta Tags */}
      {articleMeta && ogType === 'article' && (
        <>
          {articleMeta.publishedTime && (
            <meta property="article:published_time" content={articleMeta.publishedTime} />
          )}
          {articleMeta.author && (
            <meta property="article:author" content={articleMeta.author} />
          )}
          {articleMeta.category && (
            <meta property="article:section" content={articleMeta.category} />
          )}
        </>
      )}
    </Helmet>
  );
};

export default SEOHead;

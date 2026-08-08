import { memo } from 'react';
interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  schema?: Record<string, any>;
}
export const SEO = memo(function SEO({ title, description, image, url, schema }: SEOProps) {
  const siteTitle = 'Hi Store';
  const fullTitle = `${title} | ${siteTitle}`;
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="twitter:card" content="summary_large_image" />
      {url && <meta property="twitter:url" content={url} />}
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
    {image && <meta property="twitter:image" content={image} />}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
});

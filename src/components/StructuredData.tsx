import Script from 'next/script';

interface StructuredDataProps {
  type: 'website' | 'marketplace' | 'service' | 'organization';
  data?: any;
}

export default function StructuredData({ type, data = {} }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "EngineerMarketplace",
          "url": "https://engineermarketplace.com",
          "description": "Professional engineering services marketplace connecting clients with verified engineers",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://engineermarketplace.com/marketplace?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EngineerMarketplace",
          "url": "https://engineermarketplace.com",
          "logo": "https://engineermarketplace.com/logo.png",
          "description": "Leading marketplace for professional engineering services",
          "foundingDate": "2024",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-800-ENGINEER",
            "contactType": "Customer Service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://twitter.com/engineermarketplace",
            "https://linkedin.com/company/engineermarketplace",
            "https://github.com/engineermarketplace"
          ],
          "areaServed": "Worldwide",
          "serviceType": [
            "Structural Engineering",
            "Mechanical Engineering", 
            "Electrical Engineering",
            "Civil Engineering",
            "Software Engineering",
            "Engineering Consulting"
          ]
        };

      case 'marketplace':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Engineering Services Marketplace",
          "provider": {
            "@type": "Organization",
            "name": "EngineerMarketplace"
          },
          "areaServed": "Worldwide",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://engineermarketplace.com/marketplace",
            "serviceSmsNumber": "+1-800-ENGINEER"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          ...data
        };

      default:
        return {};
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}
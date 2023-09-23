import React, { useEffect } from 'react';
declare global {
  interface Window {
    adsbygoogle: any;
  }
}

interface Props {
  adClient: string;
  adSlot: string;
}

const AdSenseBanner: React.FC<Props> = ({ adClient, adSlot }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={"ca-pub-3896969974372537"}
      data-ad-slot={"9721369009"}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdSenseBanner;

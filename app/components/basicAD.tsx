'use client';

import React, { useEffect, useRef } from 'react';

const AdDisplay = () => {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            if (typeof window !== 'undefined' && adRef.current) {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            }
        } catch (error) {
            console.error('AdSense error:', error);
        }
    }, []);

    return (
        <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1757813105299185"
            data-ad-slot="5149825913"
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    );
};

export default AdDisplay;
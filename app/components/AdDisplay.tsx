'use client';

import React, { useEffect, useRef } from 'react';

type AdFormat = 'banner' | 'square' | 'responsive';

interface AdDisplayProps {
    format?: AdFormat;
}

const AdDisplay: React.FC<AdDisplayProps> = ({ format = 'responsive' }) => {
    const adRef = useRef<HTMLModElement>(null);

    const adStyles = {
        banner: {
            display: 'block',
            width: '100%',
            height: '90px',
            minWidth: '200px',
            minHeight: '90px'
        },
        square: {
            display: 'block',
            width: '300px',
            height: '250px',
            minWidth: '300px',
            minHeight: '250px'
        },
        responsive: {
            display: 'block',
            width: '100%',
            height: '100%',
            minWidth: '250px',
            minHeight: '250px'
        }
    };

    useEffect(() => {
        // Wait for the container to be properly sized
        const timer = setTimeout(() => {
            try {
                if (typeof window !== 'undefined' && adRef.current) {
                    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
                }
            } catch (error) {
                console.error('AdSense error:', error);
            }
        }, 100); // Small delay to ensure container is sized

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-700/30 flex items-center justify-center"
            style={{ minHeight: adStyles[format].minHeight }}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={adStyles[format]}
                data-ad-client="ca-pub-1757813105299185"
                data-ad-slot="5149825913"
                data-ad-format={format === 'responsive' ? 'auto' : format}
                data-full-width-responsive={format === 'responsive' ? 'true' : 'false'}
            />
        </div>
    );
};

export default AdDisplay;
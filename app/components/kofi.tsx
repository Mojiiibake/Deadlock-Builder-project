'use client';

import React, { useEffect } from 'react';

declare global {
    interface Window {
        kofiWidgetOverlay?: {
            draw: (username: string, options: any) => void;
        };
    }
}

const KofiWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
        script.async = true;
        script.onload = () => {
            if (window.kofiWidgetOverlay) {
                window.kofiWidgetOverlay.draw('komphi', {
                    'type': 'floating-chat',
                    'floating-chat.donateButton.text': 'pay up 🔫',
                    'floating-chat.donateButton.background-color': '#00b9fe',
                    'floating-chat.donateButton.text-color': '#fff'
                });
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
            const widget = document.getElementById('ko-fi-overlay-iframe');
            if (widget) {
                widget.remove();
            }
        };
    }, []);

    return null;
};

export default KofiWidget;
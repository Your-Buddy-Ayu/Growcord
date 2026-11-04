"use client";

import { useEffect, useState } from 'react';
import { scriptsAPI } from '@/lib/api';

const ScriptsInjector = () => {
    const [scripts, setScripts] = useState({
        headerScripts: '',
        bodyScripts: '',
        googleAnalytics: '',
        facebookPixel: ''
    });

    useEffect(() => {
        const loadScripts = async () => {
            try {
                const config = await scriptsAPI.getConfig();
                if (config) {
                    setScripts({
                        headerScripts: config.headerScripts || '',
                        bodyScripts: config.bodyScripts || '',
                        googleAnalytics: config.googleAnalytics || '',
                        facebookPixel: config.facebookPixel || ''
                    });
                }
            } catch (error) {
                console.error('Error loading scripts config:', error);
            }
        };

        loadScripts();
    }, []);

    // Inject Google Analytics
    useEffect(() => {
        if (scripts.googleAnalytics) {
            const gaId = scripts.googleAnalytics.trim();
            // Remove existing GA scripts
            const existingScripts = document.querySelectorAll('[data-ga-script]');
            existingScripts.forEach(script => script.remove());

            // Google Analytics 4 (G-XXXXXXXXXX)
            if (gaId.startsWith('G-')) {
                // Add gtag.js script
                const gtagScript = document.createElement('script');
                gtagScript.async = true;
                gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
                gtagScript.setAttribute('data-ga-script', 'true');
                document.head.appendChild(gtagScript);

                // Add gtag config
                const gtagConfig = document.createElement('script');
                gtagConfig.setAttribute('data-ga-script', 'true');
                gtagConfig.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){window.dataLayer.push(arguments);}
          window.gtag('js', new Date());
          window.gtag('config', '${gaId}');
        `;
                document.head.appendChild(gtagConfig);
            }
            // Universal Analytics (UA-XXXXXXXXX-X) - Legacy support
            else if (gaId.startsWith('UA-')) {
                const gaScript = document.createElement('script');
                gaScript.async = true;
                gaScript.src = `https://www.google-analytics.com/analytics.js`;
                gaScript.setAttribute('data-ga-script', 'true');
                document.head.appendChild(gaScript);

                const gaConfig = document.createElement('script');
                gaConfig.setAttribute('data-ga-script', 'true');
                gaConfig.innerHTML = `
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', '${gaId}', 'auto');
          ga('send', 'pageview');
        `;
                document.head.appendChild(gaConfig);
            }

            return () => {
                const scriptsToRemove = document.querySelectorAll('[data-ga-script]');
                scriptsToRemove.forEach(script => script.remove());
            };
        }
    }, [scripts.googleAnalytics]);

    // Inject header scripts
    useEffect(() => {
        if (scripts.headerScripts) {
            const scriptId = 'custom-header-scripts';
            // Remove existing script if any
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                existingScript.remove();
            }

            try {
                // Strip <script> tags if mistakenly included in the admin input
                const cleanScript = scripts.headerScripts.replace(/<script[^>]*>|<\/script>/gi, '');

                if (cleanScript.trim()) {
                    // Create and inject new script
                    const script = document.createElement('script');
                    script.id = scriptId;
                    script.type = 'text/javascript';
                    script.text = cleanScript; // Use .text instead of .innerHTML for safety
                    document.head.appendChild(script);
                }
            } catch (error) {
                console.error('Error injecting header scripts:', error);
            }

            return () => {
                const scriptToRemove = document.getElementById(scriptId);
                if (scriptToRemove) {
                    scriptToRemove.remove();
                }
            };
        }
    }, [scripts.headerScripts]);

    // Inject body scripts
    useEffect(() => {
        if (scripts.bodyScripts) {
            const scriptId = 'custom-body-scripts';
            // Remove existing script if any
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                existingScript.remove();
            }

            try {
                // Strip <script> tags if mistakenly included
                const cleanScript = scripts.bodyScripts.replace(/<script[^>]*>|<\/script>/gi, '');

                if (cleanScript.trim()) {
                    // Create and inject new script
                    const script = document.createElement('script');
                    script.id = scriptId;
                    script.type = 'text/javascript';
                    script.text = cleanScript; // Use .text instead of .innerHTML
                    document.body.appendChild(script);
                }
            } catch (error) {
                console.error('Error injecting body scripts:', error);
            }

            return () => {
                const scriptToRemove = document.getElementById(scriptId);
                if (scriptToRemove) {
                    scriptToRemove.remove();
                }
            };
        }
    }, [scripts.bodyScripts]);

    return null;
};

export default ScriptsInjector;

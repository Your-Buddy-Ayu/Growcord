"use client";

import { useEffect, useState } from 'react';
import { scriptsAPI } from '@/lib/api';
import clarity from "@microsoft/clarity";

// Helper function to track custom events
export const trackClarityEvent = (eventName, eventData = {}) => {
    if (window.clarity) {
        // Clarity expects a string action and optional value/label
        // We'll flatten the data into a string format if complex, or just pass the event name
        // Clarity 'event' API: clarity("event", "action_name", { key: "value" })
        window.clarity("event", eventName, eventData);
    }
};

const MicrosoftClarity = () => {
    const [clarityId, setClarityId] = useState(null);

    useEffect(() => {
        const loadConfig = async () => {
            try {
                const config = await scriptsAPI.getConfig();
                if (config.microsoftClarity) {
                    setClarityId(config.microsoftClarity);
                }
            } catch (error) {
                console.error('Error loading Clarity config:', error);
            }
        };

        loadConfig();
    }, []);

    useEffect(() => {
        if (clarityId) {
            try {
                if (window.clarity) {
                    // already initialized
                } else {
                    clarity.init(clarityId);
                    console.log("Microsoft Clarity initialized with ID:", clarityId);
                }
            } catch (error) {
                console.error("Failed to initialize Microsoft Clarity:", error);
            }
        }
    }, [clarityId]);

    return null;
};

export default MicrosoftClarity;

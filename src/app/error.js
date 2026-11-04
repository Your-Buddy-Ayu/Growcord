"use client";

import ErrorLayout from "@/components/ErrorLayout";
import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Recoverable Error (500):', error);
    }, [error]);

    return (
        <div className="flex flex-col items-center">
            <ErrorLayout
                statusCode="500"
                title="Something Went Wrong"
                description="We apologize for the inconvenience. Our team has been notified and is working to fix the issue."
            />
            <button
                onClick={() => reset()}
                className="mt-4 px-6 py-2 bg-orange-100 text-orange-700 rounded-lg font-bold hover:bg-orange-200 transition-colors text-sm"
            >
                Try Again
            </button>
        </div>
    );
}

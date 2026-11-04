import { pageConfigAPI } from "@/lib/api";
import RealEstateClient from "./RealEstateClient";
import Script from "next/script";


// Force dynamic rendering since we fetch fresh config
export const dynamic = 'force-dynamic';

async function getPageConfig() {
    try {
        // In a server component, we can access the API directly
        // Ensure API_BASE_URL is reachable from the server container/environment
        const config = await pageConfigAPI.get('real-estate');
        return config || null;
    } catch (error) {
        console.error("Error fetching page config for SEO:", error);
        return null;
    }
}

export async function generateMetadata() {
    const config = await getPageConfig();
    const seo = config?.seo || {};

    return {
        title: seo.title || "Real Estate Landing | Growcord",
        description: seo.description || "High-conversion landing pages for real estate projects.",
        keywords: seo.keywords || "real estate, landing page, lead generation",
        alternates: { canonical: "https://growcord.in/real-estate" },
        openGraph: {
            title: seo.title,
            description: seo.description,
            images: seo.ogImage ? [{ url: seo.ogImage }] : [],
        },
    };
}

export default async function RealEstatePage() {
    const config = await getPageConfig();
    const jsonLd = config?.seo?.jsonLd;

    return (
        <>
            {jsonLd && (
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: jsonLd }}
                />
            )}
            <RealEstateClient initialConfig={config} />
        </>
    );
}


import ErrorLayout from "@/components/ErrorLayout";

export default function NotFound() {
    return (
        <ErrorLayout
            statusCode="404"
            title="Page Not Found"
            description="Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        />
    );
}

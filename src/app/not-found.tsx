import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
            <div className="text-center p-6">
                <h1 className="text-9xl font-bold text-blue-500">404</h1>
                <h2 className="mt-4 text-4xl font-semibold text-white-200">Page Not Found</h2>
                <p className="mt-2 text-lg text-gray-500">Sorry, the page you are looking for does not exist or has been moved.</p>
                <Link href="/"
                    className="inline-block mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-200 text-white font-medium rounded-md shadow-md transition-colors">
                    Return Home
                </Link>
            </div>
        </div>
    );
}

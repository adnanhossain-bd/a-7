import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-9xl font-bold text-[#264D3E]">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page not found.</h2>
      <p className="text-gray-500 mt-2 mb-8 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="bg-[#264D3E] text-white px-8 py-3 rounded-lg font-medium">
        Back to Home
      </Link>
    </div>
  );
}
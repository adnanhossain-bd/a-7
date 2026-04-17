import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        {/* Decorative Background Text */}
        <div className="relative">
          <h1 className="text-[12rem] font-black text-gray-100 leading-none select-none">
            404
          </h1>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-10">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl tracking-tight">
              Page Not Found
            </h2>
            <p className="mt-4 text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#264D3E] text-white font-semibold rounded-xl shadow-lg hover:bg-[#1b3a2f] transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            Back to Home
          </Link>
          
         
        </div>

        <p className="mt-16 text-sm text-gray-400">
          Error Code: <span className="font-mono">ERR_PAGE_NOT_FOUND</span>
        </p>
      </div>
    </div>
  );
}
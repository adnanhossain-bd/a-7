import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#264D3E] text-white py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">KeenKeeper</h2>
        
        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-200 mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

     
        <div className="mb-10">
          <h3 className="text-lg font-medium mb-4">Social Links</h3>
          <div className="flex justify-center gap-4">
            
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-2 rounded-full transition-transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#264D3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            
          
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-2 rounded-full transition-transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#264D3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            
          
            <a 
              href="https://twitter.com"
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-2 rounded-full transition-transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#264D3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.464-2.464L20 4"/></svg>
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-600/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-300 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
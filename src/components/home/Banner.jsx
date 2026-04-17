const Banner = () => {
  return (
    <section className="text-center py-16 px-4 bg-[#F8FAFC]">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e35] mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-gray-500 max-w-xl mx-auto mb-8 text-sm md:text-base">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>
      <button className="bg-[#264D3E] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 mx-auto hover:bg-[#1b3a2e] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        Add a Friend
      </button>
    </section>
  );
};

export default Banner;
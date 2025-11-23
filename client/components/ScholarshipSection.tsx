export default function ScholarshipSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-[-190px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[-28deg]" />
      
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-medium mb-4">
              <span className="text-apex-orange">SCHOLARSHIP</span>{" "}
              <span className="text-apex-orange font-bold">PROGRAM</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#5D5D5D] leading-relaxed">
              Discover the range of scholarships, providing financial support and access to quality education.
            </p>
          </div>

          <div className="bg-apex-maroon p-6 sm:p-7 lg:p-8 flex flex-col h-auto sm:h-[305px] lg:h-[305px] justify-between rounded cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 transform group">
            <div>
              <h3 className="text-white text-2xl sm:text-3xl lg:text-[35px] font-medium mb-4 group-hover:text-yellow-300 transition-colors duration-200">
                Merit Scholarship
              </h3>
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed">
                Assess your eligibility for Apex's Merit-Based scholarships
              </p>
            </div>
            <div className="flex items-center gap-2 text-white text-lg sm:text-xl lg:text-2xl font-medium group-hover:gap-3 transition-all duration-200">
              Read More
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" className="group-hover:translate-x-2 transition-transform duration-300">
                <path fillRule="evenodd" clipRule="evenodd" d="M23 11.5L11.3238 23H0L12.3808 11.5L0.000271849 0L11.3238 7.46695e-09L23 11.5Z" fill="white" />
              </svg>
            </div>
          </div>

          <div className="bg-apex-gray p-6 sm:p-7 lg:p-8 flex flex-col h-auto sm:h-[305px] lg:h-[305px] justify-between rounded cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 transform group">
            <div>
              <h3 className="text-white text-2xl sm:text-3xl lg:text-[35px] font-medium mb-4 group-hover:text-yellow-300 transition-colors duration-200">
                Apex Career Services
              </h3>
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed">
                Tailored career assistance at every stage, partnering with industries for placements and internships.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white text-lg sm:text-xl lg:text-2xl font-medium group-hover:gap-3 transition-all duration-200">
              Read More
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" className="group-hover:translate-x-2 transition-transform duration-300">
                <path fillRule="evenodd" clipRule="evenodd" d="M23 11.5L11.3238 23H0L12.3808 11.5L0.000271849 0L11.3238 7.46695e-09L23 11.5Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

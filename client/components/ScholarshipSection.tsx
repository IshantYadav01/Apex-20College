export default function ScholarshipSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-[-190px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[-28deg]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div>
            <h2 className="text-[35px] font-medium mb-4">
              <span className="text-apex-orange">SCHOLARSHIP</span>{" "}
              <span className="text-apex-orange font-bold">PROGRAM</span>
            </h2>
            <p className="text-2xl text-[#5D5D5D]">
              Discover the range of scholarships, providing financial support
              and access to quality education.
            </p>
          </div>

          <div className="bg-apex-maroon p-8 flex flex-col h-[305px]">
            <h3 className="text-white text-[35px] font-medium mb-4">
              Merit Scholarship
            </h3>
            <p className="text-white text-2xl font-medium mb-auto">
              Assess your eligibility for Apex's Merit-Based scholarships
            </p>
            <div className="flex items-center gap-2 text-white text-2xl font-medium">
              Read More
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 11.5L11.3238 23H0L12.3808 11.5L0.000271849 0L11.3238 7.46695e-09L23 11.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div className="bg-apex-gray p-8 flex flex-col h-[305px]">
            <h3 className="text-white text-[35px] font-medium mb-4 text-center">
              Apex Career Services
            </h3>
            <p className="text-white text-2xl font-medium mb-auto">
              Tailored career assistance at every stage, partnering with
              industries for placements and internships.
            </p>
            <div className="flex items-center gap-2 text-white text-2xl font-medium">
              Read More
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 11.5L11.3238 23H0L12.3808 11.5L0.000271849 0L11.3238 7.46695e-09L23 11.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

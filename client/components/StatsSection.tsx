export default function StatsSection() {
  const stats = [
    {
      number: "6",
      title: "Academic Programs",
      subtitle: "Comprehensive undergraduate degree",
    },
    {
      number: "10",
      title: "Student Clubs",
      subtitle: "Comprehensive undergraduate degree",
    },
    {
      number: "18",
      title: "Centers & Labs",
      subtitle: "State-of-the-art facilities",
    },
    {
      number: "1,707",
      title: "Students On Campus",
      subtitle: "Active Learning Community",
    },
    {
      number: "150",
      title: "Faculty Members",
      subtitle: "Experience educators and researchers",
    },
    {
      number: "96%",
      title: "Success Rate",
      subtitle: "Be industry ready with skills",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-[-186px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[29deg]" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-[35px] font-medium mb-4">
          <span className="text-apex-orange">APEX IN</span>{" "}
          <span className="text-apex-orange font-bold">NUMBERS</span>
        </h2>
        <p className="text-center text-lg sm:text-xl lg:text-[25px] text-[#5D5D5D] max-w-[931px] mx-auto mb-12 sm:mb-16 lg:mb-20 leading-relaxed">
          From diverse student-led clubs to dedicated faculty, explore what
          makes Apex an ideal place for growth and success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-apex-maroon text-white p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center h-auto sm:h-[305px] lg:h-[305px] justify-center gap-4 sm:gap-5 rounded cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
            >
              <div className="w-[47px] h-[47px] rounded-full bg-[#EEE] flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <div className="w-[24px] h-[24px] flex items-center justify-center text-black font-bold text-lg">
                  ★
                </div>
              </div>
              <p className="text-[32px] sm:text-[36px] lg:text-[40px] font-medium animate-pulse-slow">
                {stat.number}
              </p>
              <h3 className="text-[24px] sm:text-[28px] lg:text-[30px] font-medium">
                {stat.title}
              </h3>
              <p className="text-base sm:text-lg lg:text-xl font-medium">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-[-186px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[29deg]" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <h2 className="text-center text-[35px] font-medium mb-4">
          <span className="text-apex-orange">APEX IN</span>{" "}
          <span className="text-apex-orange font-bold">NUMBERS</span>
        </h2>
        <p className="text-center text-[25px] text-[#5D5D5D] max-w-[931px] mx-auto mb-20 leading-relaxed">
          From diverse student-led clubs to dedicated faculty, explore what
          makes Apex an ideal place for growth and success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-apex-maroon text-white p-10 flex flex-col items-center text-center h-[305px] justify-center gap-5"
            >
              <div className="w-[47px] h-[47px] rounded-full bg-[#EEE] flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <p className="text-[40px] font-medium">{stat.number}</p>
              <h3 className="text-[30px] font-medium">{stat.title}</h3>
              <p className="text-xl font-medium">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

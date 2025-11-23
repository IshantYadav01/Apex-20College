export default function AdventureSection() {
  const cards = [
    {
      bg: "bg-apex-gray",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4e650d72bdcf05b4c55756f62a8a6c75fab7219b?width=1910",
      title: "Centers & Labs",
      description: "Study at well-equipped labs and learn from experts.",
    },
    {
      bg: "bg-apex-maroon",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7ee58f44dd13e1244e54ac99021d4e2819649d6a?width=1336",
      title: "International student Exchange Program",
      description: "Experience diverse culture with International student exchange program",
    },
    {
      bg: "bg-apex-gray",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3bd24244bdcb1589a90c648f6d6234d9cdb0a0da?width=1914",
      title: "Student Clubs",
      description: "Witness the impact of student-led clubs at Apex, where students organize events & develop invaluable leadership skills.",
    },
    {
      bg: "bg-apex-maroon",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/865cc3d718981b2d4b3d723292a291453c80c0e5?width=1824",
      title: "Events & Activities",
      description: "Enjoy various fun events organized by students.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-[-160px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[29deg]" />
      
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-[35px] font-medium mb-12 sm:mb-16 lg:mb-20">
          <span className="text-apex-orange">YOUR APEX</span>{" "}
          <span className="text-apex-orange font-bold">ADVENTURE</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bg} overflow-hidden border border-gray-300 h-auto sm:h-[450px] lg:h-[537px] flex flex-col rounded cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:scale-105 transform`}
            >
              <div className="h-[200px] sm:h-[280px] lg:h-[305px] overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col h-auto sm:h-[170px] lg:h-[232px] justify-between">
                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium group-hover:text-yellow-300 transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-white text-base sm:text-lg lg:text-lg font-medium">
                  {card.description}
                </p>
                <div className="flex items-center gap-2 text-white text-base sm:text-lg lg:text-xl font-medium cursor-pointer group-hover:gap-3 transition-all duration-200 mt-2 sm:mt-3 lg:mt-4">
                  Read More
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" className="group-hover:translate-x-2 transition-transform duration-300">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23 11.5L11.3238 23H0L12.3808 11.5L0.000271849 0L11.3238 7.46695e-09L23 11.5Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

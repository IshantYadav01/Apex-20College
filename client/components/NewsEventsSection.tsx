export default function NewsEventsSection() {
  const events = [
    {
      bg: "bg-apex-maroon",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b04b991c5337ee0f54f78f1c4732ad11915929ec?width=1424",
      date: "August 29, 2025",
      title: "Autumn Intake Registration Open",
      description: "Registration for autumn intake 2025 is now open for all interested students.",
    },
    {
      bg: "bg-apex-gray",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/be5892dae70c10a23a5e7ab47c9d77a202c78d41?width=1500",
      date: "June 26, 2025",
      title: "Infrastructure Upgrade",
      description: "Registration for autumn intake 2025 is now open for all interested students.",
    },
    {
      bg: "bg-apex-maroon",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0834f9acb6e47dcac37ad9a19ab212ffeb1eee23?width=1818",
      date: "May 15, 2025",
      title: "Apex Cultural Exchange Program",
      description: "Registration for autumn intake 2025 is now open for all interested students.",
    },
    {
      bg: "bg-apex-gray",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/be6d41ade294ccc6d810c51e28d0d200a8ef68e1?width=1336",
      date: "May 06, 2025",
      title: "Apex College MBA Success In Fall 2024",
      description: "Registration for autumn intake 2025 is now open for all interested students.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-[35px] font-medium mb-4">
          <span className="text-apex-orange">LATEST</span>{" "}
          <span className="text-apex-orange font-bold">NEWS AND EVENTS</span>
        </h2>
        <p className="text-center text-lg sm:text-xl lg:text-2xl text-[#5D5D5D] mb-12 sm:mb-16 lg:mb-20 leading-relaxed">
          Revisit your moments from our events
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={`${event.bg} overflow-hidden border border-gray-300 h-auto sm:h-[450px] lg:h-[570px] rounded cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:scale-105 transform`}
            >
              <div className="h-[30px] sm:h-[34px] bg-apex-light-gray group-hover:bg-apex-orange transition-colors duration-300" />
              <div className="h-[180px] sm:h-[240px] lg:h-[265px] overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-3 sm:p-4 lg:p-4 flex flex-col h-auto sm:h-[180px] lg:h-[215px] justify-between">
                <div className="flex items-center gap-2 text-white mb-2 sm:mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <path
                      d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z"
                      fill="#FFF6F6"
                    />
                  </svg>
                  <span className="text-base sm:text-lg lg:text-xl font-medium group-hover:text-yellow-300 transition-colors duration-200">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium mb-2 sm:mb-4 group-hover:text-yellow-300 transition-colors duration-200 line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-white text-sm sm:text-base lg:text-base font-medium mb-2 sm:mb-3 line-clamp-2">
                  {event.description}
                </p>
                <a
                  href="#"
                  className="text-white text-sm sm:text-base lg:text-base font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200 group-hover:text-yellow-300 hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  View More
                  <svg width="20" height="20" viewBox="0 0 23 23" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23 11.5L11.3238 23H0L12.3808 11.5L0.000271849 0L11.3238 7.46695e-09L23 11.5Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#979797] text-white px-8 sm:px-10 py-3 rounded text-base font-medium hover:bg-[#888888] active:bg-[#777777] transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105 cursor-pointer">
            View All News & Events
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
              <path
                d="M6.42249 4.8734L12.8963 11.5526M12.8963 11.5526L6.21714 18.0265M12.8963 11.5526L-0.256718 11.3473"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

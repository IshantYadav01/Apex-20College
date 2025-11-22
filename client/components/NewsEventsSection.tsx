export default function NewsEventsSection() {
  const events = [
    {
      bg: "bg-apex-maroon",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b04b991c5337ee0f54f78f1c4732ad11915929ec?width=712",
      date: "August 29, 2025",
      title: "Autumn Intake Registration Open",
      description:
        "Registration for autumn intake 2025 is now open for all interested students.",
    },
    {
      bg: "bg-apex-gray",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/be5892dae70c10a23a5e7ab47c9d77a202c78d41?width=750",
      date: "June 26, 2025",
      title: "Infrastructure Upgrade",
      description:
        "Registration for autumn intake 2025 is now open for all interested students.",
    },
    {
      bg: "bg-apex-maroon",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0834f9acb6e47dcac37ad9a19ab212ffeb1eee23?width=909",
      date: "May 15, 2025",
      title: "Apex Cultural Exchange Program",
      description:
        "Registration for autumn intake 2025 is now open for all interested students.",
    },
    {
      bg: "bg-apex-gray",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/be6d41ade294ccc6d810c51e28d0d200a8ef68e1?width=668",
      date: "May 06, 2025",
      title: "Apex College MBA Success In Fall 2024",
      description:
        "Registration for autumn intake 2025 is now open for all interested students.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[35px] font-medium mb-4">
          <span className="text-apex-orange">LATEST</span>{" "}
          <span className="text-apex-orange font-bold">NEWS AND EVENTS</span>
        </h2>
        <p className="text-center text-2xl text-[#5D5D5D] mb-16">
          Revisit your moments from our events
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={`${event.bg} overflow-hidden border border-apex-gray h-[570px]`}
            >
              <div className="h-[34px] bg-apex-light-gray" />
              <div className="h-[265px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col">
                <div className="flex items-center gap-2 text-white mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z"
                      fill="#FFF6F6"
                    />
                  </svg>
                  <span className="text-xl font-medium">{event.date}</span>
                </div>
                <h3 className="text-white text-xl font-medium mb-4">
                  {event.title}
                </h3>
                <p className="text-white text-base font-medium">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#979797] text-white px-10 py-3 rounded-md text-base font-medium hover:bg-opacity-90 transition-opacity flex items-center gap-2">
            View All News & Events
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
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

export default function AdventureSection() {
  const cards = [
    {
      bg: "bg-apex-gray",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4e650d72bdcf05b4c55756f62a8a6c75fab7219b?width=955",
      title: "Centers & Labs",
      description: "Study at well-equipped labs and learn from experts.",
    },
    {
      bg: "bg-apex-maroon",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7ee58f44dd13e1244e54ac99021d4e2819649d6a?width=668",
      title: "International student Exchange Program",
      description: "Experience diverse culture with International student exchange program",
    },
    {
      bg: "bg-apex-gray",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3bd24244bdcb1589a90c648f6d6234d9cdb0a0da?width=957",
      title: "Student Clubs",
      description: "Witness the impact of student-led clubs at Apex, where students organize events & develop invaluable leadership skills.",
    },
    {
      bg: "bg-apex-maroon",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/865cc3d718981b2d4b3d723292a291453c80c0e5?width=912",
      title: "Events & Activities",
      description: "Enjoy various fun events organized by students.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-[-160px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[29deg]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-[35px] font-medium mb-16">
          <span className="text-apex-orange">YOUR APEX</span>{" "}
          <span className="text-apex-orange font-bold">ADVENTURE</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className={`${card.bg} overflow-hidden border border-apex-gray h-[537px]`}>
              <div className="h-[305px] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col h-[232px]">
                <h3 className="text-white text-2xl font-medium mb-4">{card.title}</h3>
                <p className="text-white text-lg font-medium mb-auto">{card.description}</p>
                <div className="flex items-center gap-2 text-white text-xl font-medium mt-4">
                  Read More
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23 11.5L11.3238 23H0L12.3808 11.5L0.000271849 0L11.3238 7.46695e-09L23 11.5Z" fill="white"/>
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

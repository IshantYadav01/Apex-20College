import { Link } from "react-router-dom";

export default function AcademicPrograms() {
  const programs = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ac59b97085ee6438e3eed73094141a7509ef52c6?width=1321",
      title: "Business Administration",
      subtitle: "Bachelor in",
      description: "Secure your future with Apex's BBA program. Our expert faculty and comprehensive curriculum equip you with the skills to thrive in today's fast-paced business world.",
      isFeatured: true,
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/10d5cef435c73acc1a3d410f8a7257b890083799?width=1060",
      title: "Program 2",
      isFeatured: false,
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4833c3bdb07d1626f7a65926d705077034aae0ef?width=1060",
      title: "Program 3",
      isFeatured: false,
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/5de439b9f4c7eb83cf8075f5e7506854de28ea35?width=1056",
      title: "Program 4",
      isFeatured: false,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-[-186px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[-28deg]" />
      
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-[35px] font-medium mb-4">
          <span className="text-apex-orange">ACADEMIC</span>{" "}
          <span className="text-apex-orange font-bold">PROGRAMS</span>
        </h2>
        <p className="text-center text-lg sm:text-xl lg:text-[25px] text-[#5D5D5D] max-w-[931px] mx-auto mb-12 sm:mb-16 lg:mb-20 leading-relaxed">
          Our programs provide a harmonious blend of theory, hands-on experience, and observation-based learning, fostering interactive environments that transcend conventional classrooms.
        </p>

        <div className="flex gap-0 justify-center mb-12 lg:mb-16 flex-col sm:flex-row">
          <button className="bg-apex-maroon text-white px-0 py-3 w-full sm:w-[267px] h-[58px] text-[24px] sm:text-[30px] font-medium hover:bg-red-700 active:bg-red-800 transition-all duration-200 transform hover:scale-105">
            Undergraduate
          </button>
          <button className="bg-[#E4E4E4] text-black px-0 py-3 w-full sm:w-[267px] h-[58px] text-[24px] sm:text-[30px] font-medium border border-[#918E8E] hover:bg-gray-300 active:bg-gray-400 transition-all duration-200 transform hover:scale-105">
            Postgraduate
          </button>
        </div>

        {/* Grid with proper responsive layout - all 4 cards in one row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`${
                program.isFeatured ? "lg:col-span-1" : "lg:col-span-1"
              } bg-white shadow-md hover:shadow-xl overflow-hidden group cursor-pointer transition-all duration-300 rounded`}
            >
              <div className={`${program.isFeatured ? "h-[300px] sm:h-[400px] lg:h-[480px]" : "h-[300px] sm:h-[400px] lg:h-[480px]"} overflow-hidden relative`}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {program.isFeatured && (
                <div className="bg-apex-bg-gray p-4 sm:p-5 lg:p-6 h-auto sm:h-[300px] lg:h-[362px] flex flex-col">
                  <p className="text-xl sm:text-2xl lg:text-[30px] font-medium text-black opacity-60 mb-2">
                    {program.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-[35px] font-medium text-black opacity-60 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-black opacity-70 mb-auto leading-relaxed">
                    {program.description}
                  </p>
                  <Link
                    to="/"
                    className="text-lg sm:text-xl lg:text-xl font-medium text-black flex items-center gap-2 group/link mt-4 hover:gap-3 transition-all duration-200"
                  >
                    Read more
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      className="group-hover/link:translate-x-1 transition-transform duration-200"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23 11.5L11.3238 23H0L12.3808 11.5L0.000271849 0L11.3238 7.46695e-09L23 11.5Z"
                        fill="#8A181A"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

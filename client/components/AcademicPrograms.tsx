import { Link } from "react-router-dom";

export default function AcademicPrograms() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-[-186px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[-28deg]" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <h2 className="text-center text-[35px] font-medium mb-4">
          <span className="text-apex-orange">ACADEMIC</span>{" "}
          <span className="text-apex-orange font-bold">PROGRAMS</span>
        </h2>
        <p className="text-center text-[25px] text-[#5D5D5D] max-w-[931px] mx-auto mb-20 leading-relaxed">
          Our programs provide a harmonious blend of theory, hands-on
          experience, and observation-based learning, fostering interactive
          environments that transcend conventional classrooms.
        </p>

        <div className="flex gap-0 justify-center mb-16">
          <button className="bg-apex-maroon text-white px-0 py-3 w-[267px] h-[58px] text-[30px] font-medium hover:opacity-90 transition-opacity">
            Undergraduate
          </button>
          <button className="bg-[#E4E4E4] text-black px-0 py-3 w-[267px] h-[58px] text-[30px] font-medium border border-[#918E8E] hover:opacity-80 transition-opacity">
            Postgraduate
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* BBA Card - 2 column span */}
          <div className="lg:col-span-2 bg-white shadow-md overflow-hidden group cursor-pointer h-full">
            <div className="h-[480px] overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ac59b97085ee6438e3eed73094141a7509ef52c6?width=1321"
                alt="BBA Program"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-apex-bg-gray p-6 h-[362px] flex flex-col">
              <p className="text-[30px] font-medium text-black opacity-60 mb-2">
                Bachelor in
              </p>
              <h3 className="text-[35px] font-medium text-black opacity-60 mb-4">
                Business Administration
              </h3>
              <p className="text-xl text-black opacity-70 mb-auto leading-relaxed">
                Secure your future with Apex's BBA program. Our expert faculty
                and comprehensive curriculum equip you with the skills to thrive
                in today's fast-paced business world.
              </p>
              <Link
                to="/"
                className="text-xl font-medium text-black flex items-center gap-2 group/link mt-4"
              >
                Read more
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  className="group-hover/link:translate-x-1 transition-transform"
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
          </div>

          {/* Other Program Cards */}
          <div className="bg-white shadow-md overflow-hidden group cursor-pointer">
            <div className="h-[480px] overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/10d5cef435c73acc1a3d410f8a7257b890083799?width=530"
                alt="Program"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="bg-white shadow-md overflow-hidden group cursor-pointer">
            <div className="h-[480px] overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4833c3bdb07d1626f7a65926d705077034aae0ef?width=530"
                alt="Program"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="bg-white shadow-md overflow-hidden group cursor-pointer">
            <div className="h-[480px] overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5de439b9f4c7eb83cf8075f5e7506854de28ea35?width=528"
                alt="Program"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

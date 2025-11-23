export default function ApexOverview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-[-171px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[29deg]" />
      <div className="absolute bottom-20 left-[-178px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[-30deg]" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-[35px] font-medium mb-4">
          <span className="text-apex-orange">THE APEX</span>
        </h2>
        <h3 className="text-center text-2xl sm:text-3xl lg:text-[35px] font-bold text-apex-orange mb-12 sm:mb-16 lg:mb-20">
          OVERVIEW
        </h3>

        <div className="h-[30px] bg-apex-maroon w-full mb-8 sm:mb-10 lg:mb-12" />

        {/* Gallery Grid - Exact Layout from Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {/* First row - 2 images */}
          <div className="lg:col-span-1 h-[200px] sm:h-[240px] lg:h-[266px] overflow-hidden bg-apex-light-gray rounded group hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/713e38904cbaccbd8eeb7b93b33990bc73a806f2?width=1984"
              alt="Apex Overview Gallery 1"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="lg:col-span-1 h-[200px] sm:h-[240px] lg:h-[266px] overflow-hidden bg-apex-light-gray rounded group hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fc369134d2043c47afe9e6181216b838d6751604?width=1980"
              alt="Apex Overview Gallery 2"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Second row - 2 images */}
          <div className="lg:col-span-1 h-[200px] sm:h-[240px] lg:h-[264px] overflow-hidden bg-apex-light-gray rounded group hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a501799bc320e0296dd081019b6950ed51839958?width=1876"
              alt="Apex Overview Gallery 3"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="lg:col-span-1 h-[200px] sm:h-[240px] lg:h-[264px] overflow-hidden bg-apex-light-gray rounded group hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f05a2445aac1dde7708c9fa2d25c76d5b726451c?width=1364"
              alt="Apex Overview Gallery 4"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Third row - 1 tall image spans remaining space */}
          <div className="lg:col-span-2 h-[200px] sm:h-[240px] lg:h-[264px] overflow-hidden bg-apex-light-gray rounded group hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/42e5f8b1d27f5efdc3eb9cf5a3e96b61cec29d95?width=1584"
              alt="Apex Overview Gallery 5"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Tall image on right */}
          <div className="lg:col-span-2 h-[200px] sm:h-[240px] lg:h-[550px] overflow-hidden bg-apex-light-gray rounded group hover:shadow-lg transition-shadow duration-300 row-span-2 lg:row-span-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b5f3f867c0c63cc7f81e9866d4b14e7e39f3d659?width=1396"
              alt="Apex Overview Gallery 6"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="h-[30px] bg-apex-maroon w-full mb-12 sm:mb-16 lg:mb-20" />

        <h2 className="text-center text-2xl sm:text-3xl lg:text-[35px] font-medium mb-12 sm:mb-16 lg:mb-20">
          <span className="text-apex-orange">OUR</span>{" "}
          <span className="text-apex-orange font-bold">ALUMNI</span>
        </h2>

        {/* Interactive YouTube Videos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&modestbranding=1"
                title="Apex College Alumni Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=0&controls=1&modestbranding=1"
                title="Apex College Alumni Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Full width gallery section */}
        <div className="mb-8 sm:mb-10">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3e00e2d4246d576994163c3f27e904d48ac8d388?width=2572"
            alt="Alumni Group Photo"
            className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4b2dcfbf8a1e1b3d2a405697343987049dab5424?width=2560"
            alt="Alumni Gallery"
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

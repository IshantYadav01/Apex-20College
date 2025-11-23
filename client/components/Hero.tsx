export default function Hero() {
  return (
    <section className="relative w-full h-screen mt-[57px] overflow-hidden bg-black flex items-center justify-center">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="https://api.builder.io/api/v1/image/assets/TEMP/8c3e0fe599a809d504a4806bc648228647c737c5?width=1440"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8c3e0fe599a809d504a4806bc648228647c737c5?width=2886"
          alt="Apex College Students"
          className="absolute inset-0 w-full h-full object-cover object-center"
          decoding="async"
          loading="eager"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/15" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-[1440px] mx-auto">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/698c8194c2f76ac36004020579e1a57bf6af22fb?width=718"
          alt="Apex College Logo"
          className="w-[200px] sm:w-[280px] lg:w-[359px] h-auto mb-12 sm:mb-16 lg:mb-20 drop-shadow-lg"
          loading="eager"
          decoding="async"
        />

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-8 sm:mt-12 w-full sm:w-auto justify-center">
          <button className="bg-apex-maroon text-white px-8 sm:px-12 py-3 rounded text-base font-medium hover:bg-red-700 active:bg-red-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore Programs
          </button>
          <button className="bg-apex-gray text-white px-8 sm:px-12 py-3 rounded text-base font-medium hover:bg-gray-700 active:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

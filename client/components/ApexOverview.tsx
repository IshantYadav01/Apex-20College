export default function ApexOverview() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-[-171px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[29deg]" />
      <div className="absolute bottom-20 left-[-178px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[-30deg]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-[35px] font-medium mb-4">
          <span className="text-apex-orange">THE APEX</span>
        </h2>
        <h3 className="text-center text-[35px] font-bold text-apex-orange mb-16">
          OVERVIEW
        </h3>

        <div className="h-[30px] bg-apex-maroon w-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mb-8">
          <div className="lg:col-span-2 h-[266px] overflow-hidden bg-apex-light-gray">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/713e38904cbaccbd8eeb7b93b33990bc73a806f2?width=992"
              alt="Overview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-3 h-[266px] overflow-hidden bg-apex-light-gray">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fc369134d2043c47afe9e6181216b838d6751604?width=990"
              alt="Overview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-2 h-[550px] overflow-hidden bg-apex-light-gray row-span-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b5f3f867c0c63cc7f81e9866d4b14e7e39f3d659?width=698"
              alt="Overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="h-[264px] overflow-hidden bg-apex-light-gray">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a501799bc320e0296dd081019b6950ed51839958?width=938"
              alt="Overview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[264px] overflow-hidden bg-apex-light-gray">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f05a2445aac1dde7708c9fa2d25c76d5b726451c?width=682"
              alt="Overview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[264px] overflow-hidden bg-apex-light-gray">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/42e5f8b1d27f5efdc3eb9cf5a3e96b61cec29d95?width=792"
              alt="Overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="h-[30px] bg-apex-maroon w-full mb-12" />

        <h2 className="text-center text-[35px] font-medium mb-16">
          <span className="text-apex-orange">OUR</span>{" "}
          <span className="text-apex-orange font-bold">ALUMNI</span>
        </h2>

        <div className="mb-8">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3e00e2d4246d576994163c3f27e904d48ac8d388?width=2572"
            alt="Alumni"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4b2dcfbf8a1e1b3d2a405697343987049dab5424?width=2560"
            alt="Alumni Gallery"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

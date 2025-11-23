export default function LearningPartners() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-[-171px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[29deg]" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-[35px] font-medium mb-12 sm:mb-16 lg:mb-20">
          <span className="text-apex-orange">OUR</span>{" "}
          <span className="text-apex-orange font-bold">LEARNING PARTNERS</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20 lg:mb-28">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-[35px] font-medium mb-4 sm:mb-6">
              <span className="text-apex-orange">TECHNOLOGY</span>{" "}
              <span className="text-apex-orange font-bold">PARTNER</span>
            </h3>
            <div className="mb-4 sm:mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5755fa15bd98070ae50523fbdfd59162fa9b3ab5?width=1440"
                alt="Technology Partner"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#5D5D5D] font-medium leading-relaxed">
              mySecondTeacher is a multiple award-winning academic platform
              developed in Nepal and used globally by students, parents and
              educators. It helps enhance academic experiences by delivering
              online lessons and resources, and managing assignments. It also
              provides real-time insights into students' learning behaviour,
              allowing teachers and parents to identify areas of improvement and
              address them promptly. This facilitates personalised attention and
              timely interventions, leading to better academic outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-[35px] font-medium mb-4 sm:mb-6">
              <span className="text-apex-orange">HAPPENINGNESS</span>{" "}
              <span className="text-apex-orange font-bold">PARTNER</span>
            </h3>
            <div className="mb-4 sm:mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/021d4b79a9e069327a4d24f44fc6e39620d0dc86?width=1332"
                alt="Happeningness Partner"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#5D5D5D] font-medium leading-relaxed">
              ING Skill Academy is renowned for its transformative programmes
              and cutting-edge resources. Through workshops, webinars, and
              practical training, it addresses a wide range of educational
              needs, from skill enhancement to career initiation. Serving over
              40,000 students from more than 200 schools, it nurtures a vibrant
              learning environment complemented by on-site amenities and a
              strong community spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

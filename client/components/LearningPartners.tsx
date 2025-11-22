export default function LearningPartners() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-[-171px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[29deg]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-[35px] font-medium mb-16">
          <span className="text-apex-orange">OUR</span>{" "}
          <span className="text-apex-orange font-bold">LEARNING PARTNERS</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-[35px] font-medium mb-6">
              <span className="text-apex-orange">TECHNOLOGY</span>{" "}
              <span className="text-apex-orange font-bold">PARTNER</span>
            </h3>
            <div className="mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5755fa15bd98070ae50523fbdfd59162fa9b3ab5?width=720"
                alt="Technology Partner"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-2xl text-[#5D5D5D] font-medium">
              mySecondTeacher is a multiple award-winning academic platform developed in Nepal and used globally by students, parents and educators. It helps enhance academic experiences by delivering online lessons and resources, and managing assignments. It also provides real-time insights into students' learning behaviour, allowing teachers and parents to identify areas of improvement and address them promptly. This facilitates personalised attention and timely interventions, leading to better academic outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-[35px] font-medium mb-6">
              <span className="text-apex-orange">HAPPENINGNESS</span>{" "}
              <span className="text-apex-orange font-bold">PARTNER</span>
            </h3>
            <div className="mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/021d4b79a9e069327a4d24f44fc6e39620d0dc86?width=666"
                alt="Happeningness Partner"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-2xl text-[#5D5D5D] font-medium">
              ING Skill Academy is renowned for its transformative programmes and cutting-edge resources. Through workshops, webinars, and practical training, it addresses a wide range of educational needs, from skill enhancement to career initiation. Serving over 40,000 students from more than 200 schools, it nurtures a vibrant learning environment complemented by on-site amenities and a strong community spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen mt-[57px] overflow-hidden bg-black">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8c3e0fe599a809d504a4806bc648228647c737c5?width=2886"
        alt="Apex College Students"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/698c8194c2f76ac36004020579e1a57bf6af22fb?width=718"
          alt="Apex College Logo"
          className="w-[359px] h-[73px] mb-20"
        />
        
        <div className="flex gap-6 mt-12">
          <button className="bg-apex-maroon text-white px-12 py-3 rounded text-base font-medium hover:bg-opacity-90 transition-opacity">
            Explore Programs
          </button>
          <button className="bg-apex-gray text-white px-12 py-3 rounded text-base font-medium hover:bg-opacity-90 transition-opacity">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

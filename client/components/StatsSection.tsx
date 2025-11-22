export default function StatsSection() {
  const stats = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 0L0 6.25169L12 14.5871L17.7155 10.617L12.3537 8.33966C12.2433 8.41322 12.1225 8.45159 12 8.45196C11.7819 8.45196 11.5728 8.33162 11.4186 8.1174C11.2644 7.90319 11.1778 7.61265 11.1778 7.30971C11.1778 7.00676 11.2644 6.71623 11.4186 6.50201C11.5728 6.2878 11.7819 6.16745 12 6.16745L11.864 6.78156L12.8166 7.1887L12.817 7.1927L14.2227 7.78988L22.2264 11.2109V12.078C22.1157 12.1826 22.025 12.3232 21.9623 12.4876C21.8997 12.6519 21.8668 12.835 21.8666 13.021C21.8668 13.2113 21.9012 13.3985 21.9666 13.5657C22.0321 13.7328 22.1265 13.8746 22.2414 13.9781C21.8672 15.9431 21.8666 20.4016 21.8666 22.159C22.6889 22.9011 22.6889 22.9282 23.5111 22.159C23.5111 20.4018 23.5107 15.9442 23.1365 13.9788C23.2514 13.8751 23.3459 13.7332 23.4113 13.5659C23.4767 13.3987 23.511 13.2113 23.5111 13.021C23.5111 12.8348 23.4783 12.6514 23.4156 12.4868C23.3529 12.3222 23.2622 12.1814 23.1514 12.0767V10.2619L20.1028 8.95884L24 6.25169L12 0ZM4.99175 11.379L4.31738 17.0003C5.66248 17.2447 7.27151 18.3308 8.75069 19.6151C9.59192 20.3456 10.3799 21.1474 11.0198 21.9253C11.411 22.4008 11.7381 22.857 12 23.3058C12.2619 22.8569 12.589 22.4008 12.9802 21.9253C13.6201 21.1474 14.408 20.3456 15.2493 19.6151C16.7285 18.3308 18.3375 17.2447 19.6826 17.0003L19.0081 11.379H18.687L12 16.0239L5.31293 11.379H4.99175Z" fill="black"/>
        </svg>
      ),
      number: "6",
      title: "Academic Programs",
      subtitle: "Comprehensive undergraduate degree",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 13.3521C20 12.7282 20.2107 12.13 20.5858 11.6889C20.9609 11.2478 21.4696 11 22 11H32C32.5304 11 33.0391 11.2478 33.4142 11.6889C33.7893 12.13 34 12.7282 34 13.3521V19.2322C34 21.4155 33.2625 23.5094 31.9497 25.0532C30.637 26.597 28.8565 27.4644 27 27.4644C25.1435 27.4644 23.363 26.597 22.0503 25.0532C20.7375 23.5094 20 21.4155 20 19.2322V13.3521ZM24 34.5205H30L27 28.6404L24 34.5205Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      number: "10",
      title: "Student Clubs",
      subtitle: "Comprehensive undergraduate degree",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M0 21.1685V18.8164H22V21.1685H0ZM3 17.6404C2.45 17.6404 1.97933 17.4103 1.588 16.9501C1.19667 16.4898 1.00067 15.9359 1 15.2883V2.35205C1 1.70524 1.196 1.15172 1.588 0.691503C1.98 0.231285 2.45067 0.000784017 3 0H19C19.55 0 20.021 0.230501 20.413 0.691503C20.805 1.15251 21.0007 1.70602 21 2.35205V15.2883C21 15.9352 20.8043 16.4891 20.413 16.9501C20.0217 17.4111 19.5507 17.6412 19 17.6404H3ZM3 15.2883H19V2.35205H3V15.2883Z" fill="black"/>
        </svg>
      ),
      number: "18",
      title: "Centers & Labs",
      subtitle: "State-of-the-art facilities",
    },
    {
      icon: (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path d="M9.76605 10.9137C10.4042 10.9887 10.9953 11.3322 11.4252 11.8778C11.855 12.4234 12.093 13.1323 12.0931 13.8673C12.0931 15.3936 11.2811 16.6566 10.1893 17.4901C9.09229 18.3294 7.62384 18.8164 6.04655 18.8164C4.46927 18.8164 3.00082 18.3294 1.9038 17.4901C0.810238 16.6586 0 15.3936 0 13.8673C0 13.0798 0.27302 12.3245 0.758998 11.7676C1.24498 11.2107 1.9041 10.8979 2.59138 10.8979H9.50173L9.76605 10.9137Z" fill="black"/>
        </svg>
      ),
      number: "1,707",
      title: "Students On Campus",
      subtitle: "Active Learning Community",
    },
    {
      icon: (
        <svg width="17" height="24" viewBox="0 0 17 24" fill="none">
          <path d="M11.8888 18.0313L12.0619 21.7071L8.50988 19.1233L4.93792 21.7095L5.11121 18.0313H3.61106L3.3525 23.5205H5.07052L8.50791 21.0318L11.9294 23.5205H13.6475L13.3889 18.0313H11.8888Z" fill="black"/>
        </svg>
      ),
      number: "150",
      title: "Faculty Members",
      subtitle: "Experience educators and researchers",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 13.3521C20 12.7282 20.2107 12.13 20.5858 11.6889C20.9609 11.2478 21.4696 11 22 11H32C32.5304 11 33.0391 11.2478 33.4142 11.6889C33.7893 12.13 34 12.7282 34 13.3521V19.2322C34 21.4155 33.2625 23.5094 31.9497 25.0532C30.637 26.597 28.8565 27.4644 27 27.4644C25.1435 27.4644 23.363 26.597 22.0503 25.0532C20.7375 23.5094 20 21.4155 20 19.2322V13.3521ZM24 34.5205H30L27 28.6404L24 34.5205Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      number: "96%",
      title: "Success Rate",
      subtitle: "Be industry ready with skills",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-[-186px] w-[1878px] h-[305px] bg-apex-light-gray opacity-70 rotate-[29deg]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-[35px] font-medium mb-4">
          <span className="text-apex-orange">APEX IN</span>{" "}
          <span className="text-apex-orange font-bold">NUMBERS</span>
        </h2>
        <p className="text-center text-2xl text-[#5D5D5D] max-w-4xl mx-auto mb-16">
          From diverse student-led clubs to dedicated faculty, explore what makes Apex an ideal place for growth and success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-apex-maroon text-white p-10 flex flex-col items-center text-center h-[305px] justify-center gap-5"
            >
              <div className="w-[47px] h-[47px] rounded-full bg-[#EEE] flex items-center justify-center shadow-lg">
                {stat.icon}
              </div>
              <p className="text-[40px] font-medium">{stat.number}</p>
              <h3 className="text-[30px] font-medium">{stat.title}</h3>
              <p className="text-xl font-medium">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

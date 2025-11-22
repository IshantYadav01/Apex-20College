import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-apex-gray text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          <div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/38afe9df0f8147a9d11b8dbc99973bae2bc484bb?width=514"
              alt="Apex College Logo"
              className="w-[257px] h-[90px] mb-8"
            />
            <div className="space-y-2 text-xl mb-8">
              <p>P.O. Box No.: 19691</p>
              <p>1261 Devkota Sadak</p>
              <p>Mid-Baneshwor, Kathmandu</p>
            </div>
            <button className="bg-apex-maroon text-white px-8 py-3 text-xl font-medium hover:bg-opacity-90 transition-opacity">
              Contact Us
            </button>
            <div className="mt-6 space-y-1 text-xl font-medium">
              <a
                href="tel:+977-4578841"
                className="block underline hover:text-apex-orange"
              >
                +977-4578841
              </a>
              <a
                href="tel:9851079266"
                className="block underline hover:text-apex-orange"
              >
                9851079266
              </a>
              <a
                href="tel:9801299922"
                className="block underline hover:text-apex-orange"
              >
                9801299922
              </a>
              <a
                href="mailto:admissions@apexcollege.edu.np"
                className="block underline hover:text-apex-orange"
              >
                admissions@apexcollege.edu.np
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xl underline">
              <li>
                <Link to="/" className="hover:text-apex-orange">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-apex-orange">
                  University Partner
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-apex-orange">
                  PU Notice
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-apex-orange">
                  About ING
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-xl underline mt-12">
              <li>
                <Link to="/" className="hover:text-apex-orange">
                  Admission
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-apex-orange">
                  News and Updates
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-apex-orange">
                  Career at Apex
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-apex-orange">
                  International Scholarship
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">FOLLOW US</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-apex-orange transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M3.35782 1.77108C3.3576 2.24057 3.1805 2.69073 2.86548 3.02254C2.55047 3.35435 2.12334 3.54063 1.67807 3.54039C1.2328 3.54016 0.805847 3.35343 0.491147 3.02129C0.176448 2.68915 -0.000222427 2.2388 2.10167e-07 1.76931C0.000222847 1.29983 0.177321 0.849663 0.492335 0.517853C0.807349 0.186042 1.23447 -0.000234521 1.67975 2.21594e-07C2.12502 0.000234964 2.55197 0.186962 2.86667 0.519104C3.18137 0.851246 3.35804 1.3016 3.35782 1.77108ZM3.40819 4.85122H0.0503674V15.9326H3.40819V4.85122ZM8.71354 4.85122H5.37251V15.9326H8.67996V10.1176C8.67996 6.8781 12.6842 6.57716 12.6842 10.1176V15.9326H16V8.91382C16 3.45277 10.0735 3.65634 8.67996 6.33819L8.71354 4.85122Z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-apex-orange transition-colors"
                aria-label="Facebook"
              >
                <svg
                  width="11"
                  height="18"
                  viewBox="0 0 11 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path
                    d="M9.00004 2H7.44448C5.50004 2 4.33337 3.30698 4.33337 5.48527V15.9411"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 8.97363H7.44444"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-apex-orange transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 8.08118C1 4.74329 1 3.0739 2.04178 2.03739C3.08356 1.00089 4.75911 1 8.11111 1H9.88889C13.2409 1 14.9173 1 15.9582 2.03739C16.9991 3.07478 17 4.74329 17 8.08118V9.85147C17 13.1894 17 14.8587 15.9582 15.8953C14.9164 16.9318 13.2409 16.9326 9.88889 16.9326H8.11111C4.75911 16.9326 3.08267 16.9326 2.04178 15.8953C1.00089 14.8579 1 13.1894 1 9.85147V8.08118Z" />
                  <circle cx="9" cy="9" r="2.67" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-apex-orange transition-colors"
                aria-label="YouTube"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 0C10.855 0 11.732 0.0219075 12.582 0.0577559L13.586 0.105554L14.547 0.162314L15.447 0.223057L16.269 0.286788C17.1612 0.354393 18.0008 0.733334 18.64 1.35687C19.2791 1.9804 19.6768 2.80852 19.763 3.69538L19.803 4.11859L19.878 5.02476C19.948 5.96379 20 6.98746 20 7.96632C20 8.94519 19.948 9.96886 19.878 10.9079L19.803 11.8141L19.763 12.2373C19.6768 13.1243 19.2789 13.9525 18.6396 14.5761C18.0002 15.1996 17.1604 15.5785 16.268 15.6459L15.448 15.7086L14.548 15.7703L13.586 15.8271L12.582 15.8749C11.7218 15.912 10.861 15.9313 10 15.9326C9.13902 15.9313 8.27817 15.912 7.418 15.8749L6.414 15.8271L5.453 15.7703L4.553 15.7086L3.731 15.6459C2.83881 15.5783 1.9992 15.1993 1.36004 14.5758C0.720888 13.9522 0.323191 13.1241 0.237 12.2373L0.197 11.8141L0.122 10.9079C0.0458327 9.92915 0.00513964 8.94799 0 7.96632C0 6.98746 0.052 5.96379 0.122 5.02476L0.197 4.11859L0.237 3.69538C0.323157 2.80868 0.720712 1.98068 1.35966 1.35717C1.99861 0.733657 2.83799 0.354617 3.73 0.286788L4.551 0.223057L5.451 0.162314L6.413 0.105554L7.417 0.0577559C8.2775 0.0206399 9.13869 0.00138373 10 0ZM10 1.99158C9.175 1.99158 8.326 2.01349 7.5 2.04735L6.522 2.09415L5.583 2.14892L4.701 2.20866L3.893 2.2714C3.46819 2.30101 3.06769 2.47964 2.76266 2.77555C2.45763 3.07146 2.26784 3.46547 2.227 3.88757C2.11 5.09148 2 6.59014 2 7.96632C2 9.34251 2.11 10.8412 2.227 12.0451C2.312 12.9134 3.004 13.5886 3.893 13.6612L4.701 13.723L5.583 13.7827L6.522 13.8385L7.5 13.8853C8.326 13.9192 9.175 13.9411 10 13.9411C10.825 13.9411 11.674 13.9192 12.5 13.8853L13.478 13.8385L14.417 13.7837L15.299 13.724L16.107 13.6612C16.5318 13.6316 16.9323 13.453 17.2373 13.1571C17.5424 12.8612 17.7322 12.4672 17.773 12.0451C17.89 10.8412 18 9.34251 18 7.96632C18 6.59014 17.89 5.09148 17.773 3.88757C17.7322 3.46547 17.5424 3.07146 17.2373 2.77555C16.9323 2.47964 16.5318 2.30101 16.107 2.2714L15.299 2.20966L14.417 2.14991L13.478 2.09415L12.5 2.04735C11.6671 2.01175 10.8336 1.99316 10 1.99158ZM8 5.55153C7.99994 5.45421 8.02375 5.35834 8.06937 5.27227C8.11498 5.18619 8.18103 5.11252 8.26175 5.05765C8.34248 5.00279 8.43544 4.96839 8.53256 4.95745C8.62968 4.94651 8.72801 4.95936 8.819 4.99488L8.9 5.03472L13.1 7.44851C13.1836 7.49657 13.2544 7.56401 13.3063 7.64512C13.3581 7.72623 13.3896 7.8186 13.3979 7.91439C13.4062 8.01018 13.3912 8.10657 13.3542 8.19536C13.3171 8.28414 13.2591 8.36271 13.185 8.42439L13.1 8.48414L8.9 10.8989C8.81536 10.9477 8.72003 10.9752 8.62229 10.9789C8.52456 10.9826 8.4274 10.9625 8.33926 10.9203C8.25112 10.8781 8.17468 10.8151 8.1166 10.7367C8.05851 10.6584 8.02054 10.567 8.006 10.4707L8 10.3811V5.55153Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#7C7575] py-4 text-center">
        <p className="text-xl text-[#7C7575]">
          Copyright ©2025 All rights reserved
        </p>
      </div>
    </footer>
  );
}

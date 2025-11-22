import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AcademicPrograms from "@/components/AcademicPrograms";
import StatsSection from "@/components/StatsSection";
import ScholarshipSection from "@/components/ScholarshipSection";
import AdventureSection from "@/components/AdventureSection";
import UniversityPartner from "@/components/UniversityPartner";
import NewsEventsSection from "@/components/NewsEventsSection";
import LearningPartners from "@/components/LearningPartners";
import ApexOverview from "@/components/ApexOverview";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AcademicPrograms />
      <StatsSection />
      <ScholarshipSection />
      <AdventureSection />
      <UniversityPartner />
      <NewsEventsSection />
      <LearningPartners />
      <ApexOverview />
      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Testimonials } from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <Testimonials />
      </div>
    </div>
  );
};

export default Index;
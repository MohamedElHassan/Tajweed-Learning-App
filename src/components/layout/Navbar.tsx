import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-primary cursor-pointer" onClick={() => navigate("/")}>
              Tajweed
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/lessons")}>
              Lessons
            </Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>
              About
            </Button>
            <Button variant="default" onClick={() => navigate("/login")}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
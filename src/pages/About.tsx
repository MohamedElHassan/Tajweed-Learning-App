import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">About Tajweed Journey</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Embark on a transformative journey to master Tajweed with our innovative learning platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-3 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To make Tajweed learning accessible and engaging for Muslims worldwide through interactive technology and expert guidance.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-3 text-primary">Learning Approach</h3>
              <p className="text-muted-foreground">
                Combining traditional Tajweed principles with modern learning techniques, supported by audio examples and visual aids.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-3 text-primary">Community</h3>
              <p className="text-muted-foreground">
                Join a global community of learners, share experiences, and support each other in the journey of Quranic recitation.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Start Your Journey Today</h2>
          <p className="text-muted-foreground mb-8">
            Whether you're a beginner or looking to perfect your recitation, our platform adapts to your level and learning pace.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Key Features</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Interactive lessons with audio examples</li>
              <li>• Personalized learning paths</li>
              <li>• Progress tracking and achievements</li>
              <li>• Expert-verified content</li>
              <li>• Practice exercises and quizzes</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
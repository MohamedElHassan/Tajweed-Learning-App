import { BookOpen, Award, Users, Clock, Headphones, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Interactive Lessons",
    description: "Learn Tajweed rules through engaging, interactive content with visual aids",
    icon: BookOpen,
  },
  {
    name: "Expert Guidance",
    description: "Learn from certified Quran teachers and follow authentic recitation",
    icon: Award,
  },
  {
    name: "Community Support",
    description: "Join a global community of learners and share your progress",
    icon: Users,
  },
  {
    name: "Flexible Learning",
    description: "Study at your own pace with personalized learning paths",
    icon: Clock,
  },
  {
    name: "Audio Examples",
    description: "Listen to professional reciters and practice pronunciation",
    icon: Headphones,
  },
  {
    name: "Progress Tracking",
    description: "Monitor your improvement with detailed progress analytics",
    icon: Star,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Features = () => {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Master Tajweed with Confidence
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Our comprehensive platform makes learning Tajweed engaging and effective
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="pt-6"
              >
                <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
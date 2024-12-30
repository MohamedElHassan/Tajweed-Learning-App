import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Student",
    content: "This app has transformed my Tajweed learning journey. The interactive lessons and instant feedback make it so much easier to understand and practice.",
    rating: 5
  },
  {
    id: 2,
    name: "Omar Khan",
    role: "Teacher",
    content: "As a Quran teacher, I recommend this app to all my students. The progression system and visual aids are excellent for building strong foundations.",
    rating: 5
  },
  {
    id: 3,
    name: "Fatima Ali",
    role: "Beginner",
    content: "I started from zero knowledge, and now I can confidently apply basic Tajweed rules. The app's step-by-step approach really works!",
    rating: 5
  }
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

export const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Join thousands of students who have improved their Tajweed with our app
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="relative p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="flex-grow">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    "{testimonial.content}"
                  </p>
                </blockquote>
                <div className="mt-6">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
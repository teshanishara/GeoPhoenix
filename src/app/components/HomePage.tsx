import { ImageWithFallback } from './figma/ImageWithFallback';
import { Globe, TrendingUp, MapPin, Database, Layers, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { TerrainHero } from './TerrainHero';
import { AnimatedBackground } from './AnimatedBackground';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Geospatial Analysis',
      description: 'Advanced spatial data analysis and mapping solutions for complex geographical challenges.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights with our comprehensive analytical tools.',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'GIS Consultation',
      description: 'Expert guidance on implementing and optimizing Geographic Information Systems.',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Location Intelligence',
      description: 'Leverage location data to make smarter business decisions and strategies.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Predictive Modeling',
      description: 'Forecast trends and patterns using advanced spatial-temporal analysis.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Dedicated support available around the clock to assist your projects.',
    },
  ];

  const stats = [
    { value: '110+', label: 'Projects Completed' },
    { value: '20+', label: 'Countries Served' },
    { value: '4.9/5', label: 'Client Rating' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section with Terrain Animation */}
      <TerrainHero
        imageUrl="https://images.unsplash.com/photo-1536430291604-5e07b05f0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9zcGF0aWFsJTIwbWFwcGluZyUyMHNhdGVsbGl0ZXxlbnwxfHx8fDE3Njc0NTUxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      >
        <div className="h-[600px] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Transforming Data Into Spatial Intelligence
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              GEOPHOENIX delivers cutting-edge geospatial analysis and GIS consultation services 
              to clients worldwide. Turn location data into strategic advantages.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                onClick={() => onNavigate('services')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
              <motion.button
                onClick={() => onNavigate('contact')}
                className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </TerrainHero>

      {/* Stats Section with Animation */}
      <section className="bg-gray-900 py-12 border-b border-gray-800 relative overflow-hidden">
        <AnimatedBackground variant="subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="text-4xl font-bold text-orange-500 mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedBackground>
      </section>

      {/* Features Section with 3D Animation */}
      <AnimatedBackground variant="section">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white mb-4">Our Expertise</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive geospatial and data analysis solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all"
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* CTA Section with Parallax */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-teal-600 py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            background:
              'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join clients worldwide. Choose a package that fits your needs.
          </motion.p>
          <motion.button
            onClick={() => onNavigate('services')}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Packages
          </motion.button>
        </div>
      </section>
    </div>
  );
}
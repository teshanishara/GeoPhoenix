import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Award, Users, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedBackground } from './AnimatedBackground';
import { TerrainHero } from './TerrainHero';
import ceoPhoto from 'figma:asset/3f498a0edc5c6625a2305a11c0b0cd5945362b3c.png';

export function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision',
      description: 'Delivering accurate, reliable geospatial insights that drive informed decisions.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to the highest standards in data analysis and GIS solutions.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Dedication',
      description: 'Working closely with clients to understand and exceed their expectations.',
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Serving clients across 20+ countries with 24/7 support availability.',
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section with Terrain Animation */}
      <TerrainHero
        imageUrl="https://images.unsplash.com/photo-1762558978967-709b17a00415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzQ1NTEwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      >
        <div className="h-[400px] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About GEOPHOENIX
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Expert geospatial intelligence and data analysis with 5+ years of experience
            </motion.p>
          </div>
        </div>
      </TerrainHero>

      {/* Mission Section with Animation */}
      <AnimatedBackground variant="section">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-white mb-6">My Mission</h2>
                <p className="text-gray-400 mb-4">
                  At GEOPHOENIX, I'm dedicated to transforming complex geospatial data into clear, 
                  actionable insights that empower organizations to make better decisions.
                </p>
                <p className="text-gray-400 mb-4">
                  With over 5 years of experience as a GIS expert and data scientist, I combine cutting-edge 
                  technology with deep domain expertise to deliver solutions that drive real business value.
                </p>
                <p className="text-gray-400">
                  Based in Sri Lanka, I serve clients across 20+ countries worldwide, from urban planning 
                  and environmental management to logistics and market analysis, helping them harness the 
                  power of location intelligence.
                </p>
              </motion.div>
              <motion.div
                className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1625428354222-ce52b4227b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHSVMlMjBtYXBwaW5nfGVufDF8fHx8MTc2NzQ1NTExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="GIS Mapping"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* Values Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-4">Core Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything I do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-black border border-gray-800 p-6 rounded-xl text-center hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section with Photo */}
      <AnimatedBackground variant="hero">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white mb-4">Teshan Ishara - Founder & CEO</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
                Geospatial Analysis Expert | GIS Consultant | Data Scientist
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.div
                    className="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-orange-500 shadow-2xl shadow-orange-500/50"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src={ceoPhoto}
                      alt="Teshan Ishara - CEO & Founder"
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                  <div className="flex-grow text-center md:text-left">
                    <motion.h3
                      className="text-white text-2xl mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      5+ Years of Experience
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      Specialized in geospatial analysis, GIS systems development, and advanced data analytics. 
                      Successfully delivered 110+ projects across 20+ countries with a consistent 4.9/5 client rating.
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap gap-3 justify-center md:justify-start"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      {['ArcGIS Expert', 'QGIS Professional', 'Python & R', 'Remote Sensing'].map((skill, i) => (
                        <motion.span
                          key={skill}
                          className="px-4 py-2 bg-black border border-orange-500 text-orange-500 rounded-full text-sm"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          whileHover={{ scale: 1.1, borderColor: '#14b8a6' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* Stats Section with Animation */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-teal-600 py-16 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '110+', label: 'Projects Delivered' },
              { value: '20+', label: 'Countries Served' },
              { value: '4.9/5', label: 'Client Rating' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-4xl font-bold text-white mb-2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-orange-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
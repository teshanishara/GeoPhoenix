import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, MapPin, TrendingUp, Building2, Trees, Ship } from 'lucide-react';
import { motion } from 'motion/react';
import { TerrainHero } from './TerrainHero';
import { AnimatedBackground } from './AnimatedBackground';

export function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Urban Development Analysis',
      client: 'City Planning Department',
      category: 'Urban Planning',
      description: 'Comprehensive spatial analysis for metropolitan growth planning, including population density mapping, infrastructure assessment, and zoning optimization.',
      icon: <Building2 className="w-6 h-6" />,
      results: [
        '25% improvement in resource allocation',
        'Identified 15 optimal development zones',
        'Reduced planning time by 40%',
      ],
      technologies: ['ArcGIS', 'Python', 'PostgreSQL', 'QGIS'],
      imageUrl: 'https://images.unsplash.com/photo-1625428354222-ce52b4227b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHSVMlMjBtYXBwaW5nfGVufDF8fHx8MTc2NzQ1NTExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      title: 'Supply Chain Optimization',
      client: 'Global Logistics Corporation',
      category: 'Logistics',
      description: 'Location intelligence analysis for warehouse placement and delivery route optimization across multiple continents.',
      icon: <MapPin className="w-6 h-6" />,
      results: [
        '30% reduction in delivery times',
        '$2M annual cost savings',
        'Optimized 50+ distribution centers',
      ],
      technologies: ['Mapbox', 'R', 'Tableau', 'PostGIS'],
      imageUrl: 'https://images.unsplash.com/photo-1536430291604-5e07b05f0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9zcGF0aWFsJTIwbWFwcGluZyUyMHNhdGVsbGl0ZXxlbnwxfHx8fDE3Njc0NTUxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: 'Environmental Impact Study',
      client: 'Environmental Protection Agency',
      category: 'Environmental',
      description: 'Geospatial analysis of deforestation patterns, wildlife habitats, and ecosystem changes using satellite imagery and field data.',
      icon: <Trees className="w-6 h-6" />,
      results: [
        'Monitored 10,000 sq km area',
        'Identified critical conservation zones',
        'Real-time change detection system',
      ],
      technologies: ['Google Earth Engine', 'Python', 'Remote Sensing', 'GDAL'],
      imageUrl: 'https://images.unsplash.com/photo-1762558978967-709b17a00415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzQ1NTEwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      title: 'Market Expansion Strategy',
      client: 'Retail Chain International',
      category: 'Business Intelligence',
      description: 'Demographic and competitor analysis to identify optimal locations for new store openings across 15 countries.',
      icon: <TrendingUp className="w-6 h-6" />,
      results: [
        'Identified 100+ viable locations',
        '95% success rate for new stores',
        'Increased market share by 18%',
      ],
      technologies: ['Power BI', 'ArcGIS', 'Python', 'SQL'],
      imageUrl: 'https://images.unsplash.com/photo-1625428354222-ce52b4227b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHSVMlMjBtYXBwaW5nfGVufDF8fHx8MTc2NzQ1NTExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 5,
      title: 'Maritime Route Analysis',
      client: 'Shipping Alliance',
      category: 'Maritime',
      description: 'Analysis of shipping routes, port efficiency, and maritime traffic patterns to optimize vessel deployment.',
      icon: <Ship className="w-6 h-6" />,
      results: [
        '20% fuel cost reduction',
        'Improved on-time delivery by 35%',
        'Analyzed 500+ maritime routes',
      ],
      technologies: ['AIS Data', 'Python', 'Leaflet', 'MongoDB'],
      imageUrl: 'https://images.unsplash.com/photo-1536430291604-5e07b05f0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9zcGF0aWFsJTIwbWFwcGluZyUyMHNhdGVsbGl0ZXxlbnwxfHx8fDE3Njc0NTUxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 6,
      title: 'Agricultural Land Assessment',
      client: 'AgriTech Solutions',
      category: 'Agriculture',
      description: 'Precision agriculture analysis using drone imagery and soil data to optimize crop yields and irrigation.',
      icon: <Trees className="w-6 h-6" />,
      results: [
        '40% water usage reduction',
        '25% yield improvement',
        'Analyzed 5,000 hectares',
      ],
      technologies: ['Drone Mapping', 'NDVI Analysis', 'GeoServer', 'R'],
      imageUrl: 'https://images.unsplash.com/photo-1762558978967-709b17a00415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzQ1NTEwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const categories = ['All', 'Urban Planning', 'Logistics', 'Environmental', 'Business Intelligence', 'Maritime', 'Agriculture'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-black">
      {/* Hero Section with Terrain */}
      <TerrainHero>
        <div className="h-[400px] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore successful geospatial analysis projects across diverse industries worldwide
            </motion.p>
          </div>
        </div>
      </TerrainHero>

      {/* Filter Section */}
      <section className="bg-gray-900 border-b border-gray-800 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid with 3D Animation */}
      <AnimatedBackground variant="section">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all group"
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    rotateY: 2,
                    transition: { duration: 0.3 },
                  }}
                  style={{ perspective: 1000 }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <motion.div
                      className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-500"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-sm font-semibold text-orange-500">{project.category}</span>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-400">{project.client}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{project.description}</p>

                    {/* Results */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <span className="text-teal-400 mt-0.5">✓</span>
                            {result}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * idx }}
                            whileHover={{ scale: 1.1, borderColor: '#f97316' }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* Stats Section with Animation */}
      <section className="bg-gray-900 py-16 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '110+', label: 'Projects Completed' },
              { value: '20+', label: 'Countries Served' },
              { value: '4.9/5', label: 'Client Rating' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl font-bold text-orange-500 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-4">What Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jennifer Davis',
                role: 'Director, City Planning',
                text: 'GEOPHOENIX transformed our urban planning process. The analysis was thorough, accurate, and delivered ahead of schedule.',
                initials: 'JD',
              },
              {
                name: 'Michael Rodriguez',
                role: 'VP Operations',
                text: 'The ROI from their logistics analysis exceeded our expectations. Highly professional with deep expertise.',
                initials: 'MR',
              },
              {
                name: 'Sarah Chen',
                role: 'Environmental Scientist',
                text: 'Outstanding work on our environmental study. The remote sensing expertise helped us make critical conservation decisions.',
                initials: 'SC',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-orange-400"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-400 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
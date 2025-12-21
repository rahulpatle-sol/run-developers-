'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';

const team = [
  {
    name: 'Dr. Emily Peterson',
    title: 'Senior General Dentist',
    specialties: ['Cavity Treatment', 'Endodontics', 'Tooth Restoration'],
    description:
      'Over 10 years of experience. Focuses on individualized care, prevention, and oral hygiene.',
    image: '/images/emily.png',
  },
  {
    name: 'Dr. Rajeev Sharma',
    title: 'Orthodontist',
    specialties: ['Braces', 'Smile Design', 'Jaw Alignment'],
    description:
      'Crafts confident smiles with precision and care. 15+ years of transforming lives.',
    image: '/images/rajeev.png',
  },
];

const RunDeveloperAbout = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div className="bg-[#fefefe] text-black font-sans">
      {/* About Us Section */}
      <section ref={aboutRef} className="py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-6"
        >
          About Run Developer
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8 leading-relaxed">
          Run Developer is not just a real estate company — it's a movement. <br />
          <span className="text-yellow-700 font-semibold">हम कॉलोनी बनाते नहीं, हम सपनों को आकार देते हैं।</span> <br />
          From premium plots to fully developed colonies, we craft spaces where families thrive, communities grow, and pride lives on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {['Colony Development', 'Property Sales', 'Sustainable Planning', 'Community-first Approach'].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-xl rounded-xl p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-[#ffffff]">
        <h2 className="text-4xl font-bold text-center mb-10">Meet Our Team</h2>
        <Swiper spaceBetween={30} slidesPerView={1} loop>
          {team.map((member, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto">
                <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <p className="text-center text-gray-600">{member.title}</p>
                <div className="flex justify-center gap-2 mt-2 flex-wrap">
                  {member.specialties.map((spec, idx) => (
                    <span key={idx} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                      {spec}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-gray-700 text-sm text-center">{member.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default RunDeveloperAbout;

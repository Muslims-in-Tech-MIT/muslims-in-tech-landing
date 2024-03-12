import React from 'react';

const HeroSection = () => {
  return (
    <section className="px-6 py-12 md:flex md:items-center md:justify-between bg-brand">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Muslims In Tech
        </h1>
        <p className="text-lg text-gray-600">
            Community to bring together and empower fellow muslims in tech        \
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="bg-transparent text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
            Learn More
          </button> */}
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
  <img 
    src="/images/Hero/ai-image.webp" 
    alt="Community Image" 
    className="w-35 h-35 md:w-25 md:h-25 object-cover rounded-full shadow-xl" // Adjust w and h classes if neccessary
  />
</div>

    </section>
  );
};

export default HeroSection;

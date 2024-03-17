import React from 'react';

const HeroSection = () => {
  return (
    <section className="px-6 py-12 md:flex md:items-center md:justify-between bg-brand">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">Muslims In Tech</h1>
        <p className="text-lg text-gray-600">
          Community to bring together and empower fellow Muslims in tech
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-tertiary transition-colors">
            Get Started
          </button>
          <button className="bg-transparent text-secondary font-semibold py-3 px-6 rounded-lg border border-secondary hover:bg-tertiary hover:text-white transition-colors">
            Learn More
          </button>
          <button className="bg-transparent text-secondary font-semibold py-3 px-6 rounded-lg border border-secondary hover:bg-tertiary hover:text-white transition-colors">
            Discord
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
        <div className="w-15 h-15 md:w-15 md:h-15 rounded-full shadow-l overflow-hidden">
          <img
            src="/images/Hero/ai-image.webp"
            alt="Community Image"
            className="object-cover w-full h-full" // Adjust the size of the image here
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

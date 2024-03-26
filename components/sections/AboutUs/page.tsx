import React, { FC } from 'react';

const AboutUsSection: FC = (): React.ReactElement => {
  return (
    <section className= "bg-brand px-4 py-8 flex flex-col">
      <div className = "text-center">
        <p className="text-5xl font-bold text-gray-800">About Us</p>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className = "py-5 flex justify-center md:w-1/2">
          <img src="/images/AboutUs/aboutUs.png" alt="AboutUs picture" className="rounded-xl"/>
        </div>
        <div className="md:w-1/2 text-center px-10 py-20 font-bold text-gray-800">
          <div className="max-w-xl mx-auto">
            <p className="text-xl font-normal">Salam! We are Muslims In Tech. We are a community that is devoted to connecting Muslim tech professionals, showcasing Muslim contributions, providing exceptional resources, and supporting career growth.
            With a field as diverse as tech, the presence of a community is more important now than ever before. You can find our most recent projects, testimonials from top figures, and a wealth of resources right at your fingertips. Contact us to find out how you can contribute today!</p>
          </div>
        </div>
        {/* <div className="flex flex-col px-10 py-10 space-y-5 content-center">
          <button className="bg-secondary w-60 py-3 px-6 rounded-xl font-bold text-white hover:bg-tertiary hover:italic transition-colors">Projects</button>
          <button className="bg-secondary w-60 py-3 px-6 rounded-xl font-bold text-white hover:bg-tertiary hover:italic transition-colors">Testimonials</button>
          <button className="bg-secondary w-60 py-3 px-6 rounded-xl font-bold text-white hover:bg-tertiary hover:italic transition-colors">Resources</button>
          <button className="bg-secondary w-60 py-3 px-6 rounded-xl font-bold text-white hover:bg-tertiary hover:italic transition-colors">Contact Us</button>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUsSection;
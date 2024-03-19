import React from 'react';
import Image from 'next/image';

// components
import LinkBase from "@/components/ui/link" 

// constants
const LOGO_PATH = '/images/Hero/communityimage1.png';

const NavbarSection = () => {

  return (
    // Define the navigation bar with flexbox for layout, ensuring it is at the top
    <nav className='flex justify-between items-center py-4 px-8 bg-secondary w-full'>
      <LinkBase href="/" className='!p-0'>
        <Image src={LOGO_PATH} width={52} height={60} alt="Logo" />
      </LinkBase>
      <div>
        <LinkBase href="#testimonials" className='text-white'>Testimonials</LinkBase>
        <LinkBase href="#contact" className='text-white'>Contact</LinkBase>
        <LinkBase href="#about-us" className='text-white'>About Us</LinkBase>
      </div>
    </nav>
  );
};

export default NavbarSection;

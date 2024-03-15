import React from 'react';
import Image from 'next/image';

// components
import LinkBase from "@/components/ui/link" 

// constants
const LOGO_PATH = '/images/Hero/communityimage1.png';

const NavbarSection = () => {

  return (
    // Define the navigation bar with flexbox for layout, ensuring it is at the top
    <nav className='flex justify-between items-center py-4 px-8 bg-[#D3D3D3] w-full'>
      <LinkBase href="/" className='!p-0'>
        <Image src={LOGO_PATH} width={52} height={60} alt="Logo" className='rounded-full'/>
      </LinkBase>
      <div>
        <LinkBase href="#testimonials">Testimonials</LinkBase>
        <LinkBase href="#contact">Contact</LinkBase>
        <LinkBase href="#about-us">About Us</LinkBase>
      </div>
    </nav>
  );
};

export default NavbarSection;

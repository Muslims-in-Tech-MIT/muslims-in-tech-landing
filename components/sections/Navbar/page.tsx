import React from 'react';

const NavbarSection = () => {

  // Path used to locate the logo 
  const logoPath = '/images/Hero/communityimage1.png';

  return (

    // Define the navigation bar with flexbox for layout, ensuring it is at the top
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between', // Space between the logo and navigation links
      alignItems: 'center', // Align items vertically in the center
      padding: '1rem 2rem', // Provide padding around the navigation bar
      backgroundColor: '#D3D3D3	', // Set the background color 
      width: '100%', // Navbar spans the full width of the page 
      
    }}>

      <a href="/" style={{ textDecoration: 'none' }}>
        <img src={logoPath} alt="Logo" style={{ height: '60px',borderRadius: '50%' }} />
      </a>

      <div>
        
        <a href="#testimonials" style={{ textDecoration: 'none', color: 'black', padding: '0 1rem'}}>Testimonials</a>
        <a href="#contact" style={{ textDecoration: 'none', color: 'black', padding: '0 1rem' }}>Contact</a>
        <a href="#about-us" style={{ textDecoration: 'none', color: 'black', padding: '0 1rem' }}>About Us</a>
      </div>
    </nav>
  );
};

export default NavbarSection;

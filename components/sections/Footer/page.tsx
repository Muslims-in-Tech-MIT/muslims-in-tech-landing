import React from 'react'; // Ensure React is imported
import './footer.css';

const FooterSection = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Services</h4>
            <a href="/campaings">
              <p>Campaigns</p>
            </a>
            <a href="/branding">
              <p>Branding</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Partners</h4>
            <a href="/Partners">
              <p>Coming Soon...</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Company</h4>
            <a href="/story">
              <p>Our Story</p>
            </a>
            <a href="/career">
              <p>Careers</p>
            </a>
            <a href="/team">
              <p>Team</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Coming Soon On...</h4>
            <div className="socialmedia">
              <p><img src="/images/Hero/Twitter-Logo.png" alt="Twitter logo" /></p>
              <p><img src="/images/Hero/insta-logo.png" alt="Instagram logo" /></p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} Muslims In Tech. All rights reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
          </div>
        </div>

      </div>
    </div>
  )

};

export default FooterSection;

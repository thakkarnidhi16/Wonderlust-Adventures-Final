import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Discover the wonders of Canada with Wanderlust Adventures.</p>
      <div className="subscribe">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <p>© 2023 Wanderlust Adventures. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
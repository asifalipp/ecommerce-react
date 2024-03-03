import * as Route from '@/constants/routes';
import fullLogo from '@/images/logo_full.svg';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <ul>
          <li className='address'>
            <div>Frezco Spices</div>
            <div>Mysuru-Bengaluru Highway</div>
            <div>Coorg, Karnataka</div>
          </li>
          <li className='mobile-no'>
            <div><span></span> +91 - 9901 899 175</div>
          </li>
        </ul>
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-2">
       sdsds
      </div>
      <div className="footer-col-3">
        lll
      </div>
    </footer>
  );
};

export default Footer;

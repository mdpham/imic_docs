import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import FooterContactInfoContent from './ContactInfo';

import { IMiCLogoWide } from '../../../images';

const links = {
  firstCol: [
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
  secondCol: [
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={FooterContactInfoContent} Logo={IMiCLogoWide} />;

export default CustomFooter;

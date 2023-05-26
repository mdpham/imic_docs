import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Git (Portal)',
    href: 'https://www.milcresearch.com/imic.html',
  },
  {
    title: 'IMiC (Consortium)',
    href: 'https://www.milcresearch.com/imic.html',
  },
  {
    title: 'Development Team (UHN)',
    href: 'https://uhndata.io/',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;

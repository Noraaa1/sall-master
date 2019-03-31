import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {FooterDataSource} from './footerData'

const Footer = () => {
  return (
    <div {...FooterDataSource.wrapper}>
      <OverPack {...FooterDataSource.OverPack}>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="footer"
          {...FooterDataSource.copyright}
        >
          {FooterDataSource.copyright.children}
        </TweenOne>
      </OverPack>
    </div>
  )
}

export default Footer;


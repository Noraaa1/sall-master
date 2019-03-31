import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import router from 'umi/router';
import {HeaderData} from './headerData';

const Item = Menu.Item;

const Header = ({pathname}) =>  {
  const navData = HeaderData.Menu.children;
  const navChildren = navData.map((item) => (
    <Item key={item.name}>
      {item.a.children}
    </Item>
  ));

  return (
    <TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...HeaderData.wrapper}
    >
      <div
        {...HeaderData.page}
        className={`${HeaderData.page.className}`}
      >
        <TweenOne
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          {...HeaderData.logo}
        >
          <img width="100%" src={HeaderData.logo.children} alt="img" />
        </TweenOne>
        <TweenOne
          {...HeaderData.Menu}
          animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
        >
          <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            onClick={({key}) => router.push(key)}
          >
            {navChildren}
          </Menu>
        </TweenOne>
      </div>
    </TweenOne>
  );
}

export default Header;

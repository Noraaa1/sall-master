// import {Random} from 'mockjs';
import styles from './footer.less';

export const FooterDataSource = {
  wrapper: { className: `home-page-wrapper ${styles['footer-wrapper']}` },
  OverPack: { className: 'home-page ' + styles['footer'], playScale: 0.05 },
  copyright: {
    className: styles['copyright'],
    children: (
      <span>
        ©2019 <a href="/">this SALT</a> All Rights
        Reserved
      </span>
    ),
  },
};

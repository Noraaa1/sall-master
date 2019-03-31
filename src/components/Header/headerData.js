import {Random} from 'mockjs';
import styles from './header.less';
const logo = Random.image('150x64', '#333', '#fff', 'SALT');

export const HeaderData = {
  wrapper: { className: `${styles.header} home-page-wrapper`},
  page: { className: styles['home-page'] },
  logo: {
    className: styles['header-logo'],
    children: logo
  },
  Menu: {
    className: styles['header-menu'],
    children: [
      {
        name: '/',
        a: { children: '首页', href: '' },
      },
      {
        name: '/project',
        a: {
          children: '学术成果',
          href: '',
        },
      },
      { name: '/academic', a: { children: '科研项目', href: '' } },
      { name: '/technology', a: { children: '关键技术', href: '' } },
      { name: '/team', a: { children: '科研团队', href: '' } },
      { name: '/search', a: { children: '语音搜索', href: '' } },
    ],
  },
};

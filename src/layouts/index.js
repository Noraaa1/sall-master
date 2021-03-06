// import styles from './index.less';
// import {Layout} from 'antd';
// import Header from '../components/Header'
// // import Footer from '../components/Footer'

// const {Content} = Layout;
// const BasicLayout = (props) => {
//   return (
//     <Layout className={styles.layout}>
//       <Header pathname={props.location.pathname} />
//       <Content className={styles.content}>
//         { props.children }
//       </Content>
//     </Layout>
//   );
// }

// export default BasicLayout;

/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav0 from '../Home/Nav0';
import Footer0 from '../Home/Footer0';

import {
  Nav00DataSource,
  Footer00DataSource,
} from '../Home/data.source';
import './index.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        <Nav0
          id="Nav0_0"
          key="Nav0_0"
          dataSource={Nav00DataSource}
          isMobile={this.state.isMobile}
          pathname={this.props.location.pathname}
        />
        {this.state.show && this.props.children}
        <Footer0
          id="Footer0_0"
          key="Footer0_0"
          dataSource={Footer00DataSource}
          isMobile={this.state.isMobile}
        />
      </div>
    );
  }
}



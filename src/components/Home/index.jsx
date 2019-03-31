import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Banner from '../Banner';
import Content_1 from './Content_1';
import {ContentDataSource} from '../../../mock/data.source'
import bgImg from '../../assets/header-bg.jpg';
import styles from './home.less';

class Home extends Component {

  render() {
    return (
      <div className={styles.home_page}>
        <Banner
          height={600}
          bgImg={bgImg}
          title="语音习得， 智能技术"
          introduce="实现计算机辅助二语学习者学习汉语发音的功能"
        />
        <Content_1 dataSource={ContentDataSource} />
      </div>
    )
  }
}

export default Home;

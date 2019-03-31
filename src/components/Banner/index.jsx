import React from 'react';
// import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
import './banner.less';

const Banner = ({height, bgImg, title, introduce}) => {
  return (
    <div style={{
      height,
      backgroundImage: `url(${bgImg})`
      }}
    className="banner">
      <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          className="content"
        >
          <div key="title" className="title" >
            {title}
          </div>
          <div key="content" className="introduce">
            {introduce}
          </div>
        </QueueAnim>
    </div>
  )
}

export default Banner;

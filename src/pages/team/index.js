import React from 'react';
import {Random} from 'mockjs';
import Banner from '../../components/Banner';
const bgImg = Random.image('1280x300', '#444', '#444', 'hah')
const TeamPage = () => {

  return (
    <div style={{height: '100%'}}>
      <Banner
        height={400}
        bgImg={bgImg}
        title="科研团队"
        introduce="实现计算机辅助二语学习者学习汉语发音的功能"
      />
    </div>
  )
}

export default TeamPage;

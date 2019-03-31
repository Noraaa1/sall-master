import React from 'react';
import {Random} from 'mockjs';
import QueueAnim from 'rc-queue-anim';
import styles from './home.less';

const title = Random.cparagraph(2);
const describe = Random.cparagraph(4);
const Content_1 = () => {
  return (
    <div className={styles.content_wrapper}>
      <QueueAnim
        key="QueueAnim"
        type={['top', 'bottom']}
        delay={200}
      >
        <h2>{title}</h2>
        <p>{describe}</p>
      </QueueAnim>
    </div>
  )
}

export default Content_1;

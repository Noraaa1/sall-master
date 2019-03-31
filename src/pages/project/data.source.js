import React from 'react';
import {Random} from 'mockjs';

export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>学术成果</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: Random.cparagraph(2, 2),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: Random.cparagraph(1, 1),
        className: 'title-content',
      },
    ],
  },
};
export const Content21DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: Random.image('540x540', '#444', '#444'),
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: { className: 'content2-title', children: Random.cword(3, 5) },
  content: {
    className: 'content2-content',
    children: Random.cparagraph(4, 5),
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: Random.image('540x540', '#444', '#444'),
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: Random.cword(3, 5) },
  content: {
    className: 'content1-content',
    children: Random.cparagraph(4, 5),
  },
};
export const Content20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: Random.image('540x540', '#444', '#444'),
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: { className: 'content2-title', children: Random.cword(3, 5) },
  content: {
    className: 'content2-content',
    children: Random.cparagraph(4, 5)
  },
};

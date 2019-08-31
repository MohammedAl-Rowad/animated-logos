import React, { Component } from 'react';
import anime from 'animejs';
import './App.scss';

export default class App extends Component {
  private clouds: Array<number> = [];

  componentDidMount(): void {
    const staggerVisualizerEl = document.querySelector(
      '.stagger-visualizer'
    ) || { appendChild: () => void 1 };

    const fragment = document.createDocumentFragment();
    const grid = [20, 17];
    const waterGrids = [
      ...this.getRange(13, 325, 2),
      ...this.getRange(11, 309, 3),
      ...this.getRange(9, 293, 4),
      ...this.getRange(7, 277, 5),
      ...this.getRange(5, 261, 6),
      ...this.getRange(3, 245, 7),
      ...this.getRange(1, 229, 8)
    ];
    this.clouds = [
      ...this.clouds,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      176,
      177,
      178,
      179,
      180
    ].filter(
      n =>
        ![
          206,
          289,
          272,
          255,
          238,
          221,
          222,
          239,
          223,
          305,
          288,
          271,
          254,
          237,
          253,
          236,
          235
        ].includes(n)
    );
    const [col, row] = grid;
    const numberOfElements = col * row;
    for (let i = 0; i < numberOfElements; i++) {
      const div = document.createElement('div');
      // div.addEventListener('click', () => alert(i));
      let cla: string = '';
      if (this.clouds.includes(i)) {
        cla = 'clouds';
      } else if (waterGrids.includes(i)) {
        cla = 'water';
      } else {
        cla = 'logo-bg';
      }
      div.classList.add(cla);
      fragment.appendChild(div);
    }
    staggerVisualizerEl.appendChild(fragment);
    const staggersAnimation = anime
      .timeline({
        targets: '.stagger-visualizer div',
        // scale: [
        //   { value: 0.1, easing: 'easeOutSine', duration: 500 },
        //   { value: 1, easing: 'easeInOutQuad', duration: 1200 }
        // ],
        easing: 'easeInOutSine',
        delay: anime.stagger(50),
        loop: true,
        autoplay: false
        // delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
        // loop: true
      })
      // .add({
      //   scale: anime.stagger([2.5, 1], { from: 'center', grid: [9, 9] }),
      //   translateX: anime.stagger([-100, 100]),
      //   rotate: anime.stagger([-45, 45]),
      //   easing: 'easeInOutCirc',
      //   delay: anime.stagger(10, { from: 'center' })
      // })
      // .add({
      //   scale: anime.stagger([2.5, 1], {
      //     from: 'center',
      //     easing: 'easeInOutCirc'
      //   }),
      //   translateX: anime.stagger([-200, 200]),
      //   translateY: anime.stagger([-200, 200]),
      //   rotate: 0,
      //   delay: anime.stagger(1, { from: 'last' })
      // })
      .add({
        rotate: anime.stagger(2, {
          from: 'center',
          direction: 'reverse',
          easing: 'easeInSine'
        }),
        translateX: 0,
        translateY: 0,
        delay: anime.stagger(10, { from: 'center' })
      })
      .add({
        scale: anime.stagger([2, 1], { grid: [9, 9], axis: 'y' }),
        translateY: anime.stagger([-100, 200], { grid: [9, 9], axis: 'y' }),
        rotate: 0,
        delay: anime.stagger(1, { from: 'last' })
      })
      .add({
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-100, 100),
        scale: anime.stagger([1.5, 0.5], { from: 'center' }),
        rotate: anime.stagger([10, -10], { from: 'last' }),
        delay: anime.stagger(50, { from: 'center', grid: [9, 9] })
      })
      .add({
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-100, 100),
        rotate: anime.stagger([-10, 10], { from: 'last' }),
        scale: 1,
        delay: anime.stagger(50, { from: 'center', grid: [9, 9] })
      })
      .add({
        translateX: 0,
        translateY: anime.stagger(6, { from: 'center', direction: 'reverse' }),
        rotate: 0,
        delay: anime.stagger(50, { from: 'center', grid: [9, 9] })
      })
      .add({
        translateX: anime.stagger('1rem', {
          grid: [9, 9],
          from: 'center',
          axis: 'x'
        }),
        //translateY: anime.stagger('1rem', {grid: [9, 9], from: 'center', axis: 'y'}),
        delay: anime.stagger(200, {
          grid: [9, 9],
          from: 'center',
          direction: 'reverse'
        })
      })
      .add({
        translateX: anime.stagger([25, -25], { from: 'first' }),
        translateY: 0,
        rotate: anime.stagger([40, -40], { from: 'first' }),
        delay: anime.stagger(10, { from: 'first' })
      })
      .add({
        translateY: anime.stagger([-240, 240]),
        rotate: () => anime.random(-100, 100),
        scale: anime.stagger([1, 3], { from: 'center' }),
        delay: anime.stagger(10, { from: 0 })
      })
      .add({
        translateX: 0,
        translateY: 0,
        scale: 1,
        rotate: 360,
        duration: 2000,
        delay: 0
      });
    staggersAnimation.play();
  }

  private getRange(
    length: number,
    start: number,
    cloudsNumber: number
  ): Array<number> {
    const newStart = start - cloudsNumber;
    const newLength = length + cloudsNumber * 2;
    let arr = Array.from<number>({ length: newLength }).map(
      (n: number = newStart, i: number) => (i === 0 ? n : n + i)
    );
    this.clouds = [
      ...this.clouds,
      ...arr.slice(0, cloudsNumber),
      ...arr.slice(arr.length - cloudsNumber, arr.length)
    ];

    arr = arr.slice(cloudsNumber, length + cloudsNumber);
    return arr;
  }

  render() {
    return <div className="stagger-visualizer"></div>;
  }
}

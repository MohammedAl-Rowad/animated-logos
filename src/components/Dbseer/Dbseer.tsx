import React, { Component } from 'react';
import anime from 'animejs';

export default class Dbseer extends Component {
  componentDidMount() {
    const grid = [10 ,12];
    const staggersAnimation = anime
      .timeline({
        targets: document.querySelectorAll("g:not(.not-me)"),
        easing: 'easeInOutSine',
        delay: anime.stagger(50),
        loop: true,
        autoplay: false
      }) 
      .add({
        translateX: [
          {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
          {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
        ],
        translateY: [
          {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
          {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
        ],
        duration: 1000,
        scale: .5,
        delay: anime.stagger(100, {grid: grid, from: 'center'})
      })
      .add({
        translateX: () => anime.random(-10, 10),
        translateY: () => anime.random(-10, 10),
        delay: anime.stagger(1, {from: 'center'})
      })
      .add({
        translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
        translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
        rotate: 0,
        scaleX: .22,
        scaleY: 2,
        delay: anime.stagger(1, {from: 'center'})
      })
      // .add({
      //   rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
      //   delay: anime.stagger(50, {grid: grid, from: 'center'})
      // })
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
        translateX: 0,
        translateY: 0,
        scale: .5,
        scaleX: 1,
        rotate: 0,
        duration: 1000,
        delay: anime.stagger(100, {grid: grid, from: 'last'})
      })
      .add({
        scaleY: 1,
        scale: 1,
        delay: anime.stagger(20, {grid: grid, from: 'center'})
      })

    staggersAnimation.play();
  }

  render() {
    const width = window.innerWidth,
      height = window.innerHeight;
    const retViewPort = () => `${1} ${1} ${width < 1024 ?  width * 2 : width} ${height}`;
    return (
      <section className="stagger-visualizer-container">
        <svg
          width={width < 1024 ?  width * 2 : width}
          height={height}
          viewBox={retViewPort()}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g  className="not-me" style={{
            transform: `translate(${ width > 1024 ?  width / 4 : 50}px , ${50}px)`
          }}>
          <g filter="url(#filter0_i)">
<path d="M0 216C0 213.239 2.23858 211 5 211H71C73.7614 211 76 213.239 76 216V258C76 260.761 73.7614 263 71 263H5C2.23858 263 0 260.761 0 258V216Z" fill="#F29441"/>
</g>
<g filter="url(#filter1_i)">
<rect x="76" y="263" width="89" height="66" rx="5" fill="#F29441"/>
</g>
<g filter="url(#filter2_i)">
<rect x="473" y="86" width="97" height="66" rx="5" fill="#F29441"/>
</g>
<g filter="url(#filter3_i)">
<rect x="322" y="272" width="101" height="73" rx="5" fill="#F29441"/>
</g>
<g filter="url(#filter4_i)">
<rect x="165" y="173" width="130" height="99" rx="5" fill="#F29441"/>
</g>
<g filter="url(#filter5_i)">
<rect x="423" y="329" width="120" height="82" rx="5" fill="#F29441"/>
</g>
<g filter="url(#filter6_i)">
<rect x="543" y="237" width="126" height="95" rx="5" fill="#F29441"/>
</g>
<g filter="url(#filter7_i)">
<rect x="322" y="149" width="151" height="114" rx="5" fill="#F29441"/>
</g>
<g filter="url(#filter8_i)">
<path d="M146 14C146 11.2386 148.239 9 151 9H317C319.761 9 322 11.2386 322 14V147C322 149.761 319.761 152 317 152H151C148.239 152 146 149.761 146 147V14Z" fill="#F29441"/>
</g>
<defs>
<filter id="filter0_i" x="0" y="211" width="76" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter1_i" x="76" y="263" width="89" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter2_i" x="473" y="86" width="97" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter3_i" x="322" y="272" width="101" height="77" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter4_i" x="165" y="173" width="130" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter5_i" x="423" y="329" width="120" height="86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter6_i" x="543" y="237" width="126" height="99" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter7_i" x="322" y="149" width="151" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter8_i" x="146" y="9" width="176" height="147" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
</defs>
          </g>
        </svg>
      </section>
    );
  }
}

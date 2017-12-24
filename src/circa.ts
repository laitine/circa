import * as $ from 'jquery';
import { TimelineMax } from 'gsap';

$(() => {
  const tl = new TimelineMax({onComplete: () => {
    this.restart()
  }});
  const logo = $('#logo');
  const circa1 = $('#circa1');
  const circa2 = $('#circa2');
  const circa3 = $('#circa3');
  const circa4 = $('#circa4');
  const circa5 = $('#circa5');
  const circa6 = $('#circa6');
  const circa7 = $('#circa7');
  const circa8 = $('#circa8');
  const circa9 = $('#circa9');
  const circa10 = $('#circa10');
  const circa11 = $('#circa11');
  const circa12 = $('#circa12');
  const circa13 = $('#circa13');
  const circa14 = $('#circa14');
  const circa15 = $('#circa15');
  const circa16 = $('#circa16');
  const circa17 = $('#circa17');
  const circa18 = $('#circa18');
  const circa19 = $('#circa19');
  const circa20 = $('#circa20');
  const circa21 = $('#circa21');
  const circa22 = $('#circa22');
  const circa23 = $('#circa23');
  const circa24 = $('#circa24');
  const circa25 = $('#circa25');
  const circa26 = $('#circa26');
  const circa27 = $('#circa27');
  const circa28 = $('#circa28');
  const circa29 = $('#circa29');
  const circa30 = $('#circa30');
  const circa31 = $('#circa31');
  const circa32 = $('#circa32');
  const circa33 = $('#circa33');
  const circa34 = $('#circa34');
  const circa35 = $('#circa35');
  const circa36 = $('#circa36');
  const circa37 = $('#circa37');
  const circa38 = $('#circa38');
  const circa39 = $('#circa39');
  const circa40 = $('#circa40');

  // Phase 1
  tl.to(circa1, 20, { attr:{r:160} }, 0)
    .to(circa2, 20, { attr:{r:140} }, 0)
    .to(circa3, 20, { attr:{r:120} }, 0)
    .to(circa4, 20, { attr:{r:100} }, 0)
    .to(circa5, 20, { attr:{r:80} }, 0)
    .to(circa6, 20, { attr:{r:60} }, 0)
    .to(circa7, 20, { attr:{r:40} }, 0)
    .to(circa8, 20, { attr:{r:20} }, 0)
    .to(circa9, 20, { attr:{r:10} }, 0)
    .to(circa10, 20, { attr:{r:2} }, 0)
    //Phase 2
    .add('end1', 10)
    .to(circa1, 2.25, { attr:{r:555} }, 'end1')
    .to(circa2, 4.5, { attr:{r:555} }, 'end1')
    .to(circa3, 6.75, { attr:{r:555} }, 'end1')
    .to(circa4, 9, { attr:{r:555} }, 'end1')
    .to(circa5, 11.25, { attr:{r:555} }, 'end1')
    .to(circa6, 13.5, { attr:{r:555} }, 'end1')
    .to(circa7, 15.75, { attr:{r:555} }, 'end1')
    .to(circa8, 18, { attr:{r:555} }, 'end1')
    .to(circa9, 20.25, { attr:{r:555} }, 'end1')
    .to(circa10, 22.5, { attr:{r:555} }, 'end1')
    .to(circa11, 24.75, { attr:{r:555} }, 'end1')
    .to(circa12, 27, { attr:{r:555} }, 'end1')
    .to(circa13, 29.25, { attr:{r:555} }, 'end1')
    .to(circa14, 31.5, { attr:{r:555} }, 'end1')
    .to(circa15, 33.75, { attr:{r:555} }, 'end1')
    .to(circa16, 36, { attr:{r:555} }, 'end1')
    .to(circa17, 38.25, { attr:{r:555} }, 'end1')
    .to(circa18, 40.5, { attr:{r:555} }, 'end1')
    .to(circa19, 42.75, { attr:{r:555} }, 'end1')
    .to(circa20, 45, { attr:{r:555} }, 'end1')
    .to(circa21, 47.25, { attr:{r:555} }, 'end1')
    .to(circa22, 49.5, { attr:{r:555} }, 'end1')
    .to(circa23, 51.75, { attr:{r:555} }, 'end1')
    .to(circa24, 54, { attr:{r:555} }, 'end1')
    .to(circa25, 56.25, { attr:{r:555} }, 'end1')
    .to(circa26, 58.5, { attr:{r:555} }, 'end1')
    .to(circa27, 60.75, { attr:{r:555} }, 'end1')
    .to(circa28, 63, { attr:{r:555} }, 'end1')
    .to(circa29, 65.25, { attr:{r:555} }, 'end1')
    .to(circa30, 67.5, { attr:{r:555} }, 'end1')
    .to(circa31, 69.75, { attr:{r:555} }, 'end1')
    .to(circa32, 72, { attr:{r:555} }, 'end1')
    .to(circa33, 74.25, { attr:{r:555} }, 'end1')
    .to(circa34, 76.5, { attr:{r:555} }, 'end1')
    .to(circa35, 78.75, { attr:{r:555} }, 'end1')
    .to(circa36, 81, { attr:{r:555} }, 'end1')
    .to(circa37, 83.25, { attr:{r:555} }, 'end1')
    .to(circa38, 85.5, { attr:{r:555} }, 'end1')
    .to(circa39, 87.75, { attr:{r:555} }, 'end1')
    .to(circa40, 90, { attr:{r:555} }, 'end1')
    .to(logo, 10, { opacity: 1 }, 'end1')
    .to(logo, 89, { scale:1.4, transformOrigin:'50% 50%' }, 'end1')
    .to(logo, 1, { opacity: 0 })
    // Phase 3
    .to(circa1, 1, { attr:{cx:'40%', cy:'-5%', r:120} })
    .to(circa2, 1, { attr:{cx:'35%', cy:'0%', r:120} })
    .to(circa3, 1, { attr:{cx:'30%', cy:'5%', r:120} })
    .to(circa4, 1, { attr:{cx:'25%', cy:'10%', r:120} })
    .to(circa5, 1, { attr:{cx:'20%', cy:'15%', r:120} })
    .to(circa6, 1, { attr:{cx:'15%', cy:'20%', r:120} })
    .to(circa7, 1, { attr:{cx:'10%', cy:'25%', r:120} })
    .to(circa8, 1, { attr:{cx:'5%', cy:'30%', r:120} })
    .to(circa9, 1, { attr:{cx:'0%', cy:'35%', r:120} })
    .to(circa10, 1, { attr:{cx:'-5%', cy:'40%', r:120} })
    // Phase 4
    .to(circa11, 1, { attr:{cx:'0%', cy:'100%', r:120} })
    .to(circa12, 1, { attr:{cx:'5%', cy:'95%', r:120} })
    .to(circa13, 1, { attr:{cx:'10%', cy:'90%', r:120} })
    .to(circa14, 1, { attr:{cx:'15%', cy:'85%', r:120} })
    .to(circa15, 1, { attr:{cx:'20%', cy:'80%', r:120} })
    .to(circa16, 1, { attr:{cx:'25%', cy:'75%', r:120} })
    .to(circa17, 1, { attr:{cx:'30%', cy:'70%', r:120} })
    .to(circa18, 1, { attr:{cx:'35%', cy:'65%', r:120} })
    .to(circa19, 1, { attr:{cx:'40%', cy:'60%', r:120} })
    .to(circa20, 1, { attr:{cx:'45%', cy:'55%', r:120} })
    .to(circa21, 1, { attr:{cx:'50%', cy:'50%', r:120} })
    .to(circa22, 1, { attr:{cx:'55%', cy:'45%', r:120} })
    .to(circa23, 1, { attr:{cx:'60%', cy:'40%', r:120} })
    .to(circa24, 1, { attr:{cx:'65%', cy:'35%', r:120} })
    .to(circa25, 1, { attr:{cx:'70%', cy:'30%', r:120} })
    .to(circa26, 1, { attr:{cx:'75%', cy:'25%', r:120} })
    .to(circa27, 1, { attr:{cx:'80%', cy:'20%', r:120} })
    .to(circa28, 1, { attr:{cx:'85%', cy:'15%', r:120} })
    .to(circa29, 1, { attr:{cx:'90%', cy:'10%', r:120} })
    .to(circa30, 1, { attr:{cx:'95%', cy:'5%', r:120} })
    // Phase 5
    .to(circa31, 1, { attr:{cx:'105%', cy:'60%', r:120} })
    .to(circa32, 1, { attr:{cx:'100%', cy:'65%', r:120} })
    .to(circa33, 1, { attr:{cx:'95%', cy:'70%', r:120} })
    .to(circa34, 1, { attr:{cx:'90%', cy:'75%', r:120} })
    .to(circa35, 1, { attr:{cx:'85%', cy:'80%', r:120} })
    .to(circa36, 1, { attr:{cx:'80%', cy:'85%', r:120} })
    .to(circa37, 1, { attr:{cx:'75%', cy:'90%', r:120} })
    .to(circa38, 1, { attr:{cx:'70%', cy:'95%', r:120} })
    .to(circa39, 1, { attr:{cx:'65%', cy:'100%', r:120} })
    .to(circa40, 1, { attr:{cx:'60%', cy:'105%', r:120} })
    // Phase 6
    tl.to(circa1, .5, { fill: '#00A7E0' })
    .to(circa1, 0, { fill: 'transparent' })
    .to(circa2, .5, { fill: '#00A7E0' })
    .to(circa2, 0, { fill: 'transparent' })
    .to(circa3, .5, { fill: '#00A7E0' })
    .to(circa3, 0, { fill: 'transparent' })
    .to(circa4, .5, { fill: '#00A7E0' })
    .to(circa4, 0, { fill: 'transparent' })
    .to(circa5, .5, { fill: '#00A7E0' })
    .to(circa5, 0, { fill: 'transparent' })
    .to(circa6, .5, { fill: '#00A7E0' })
    .to(circa6, 0, { fill: 'transparent' })
    .to(circa7, .5, { fill: '#00A7E0' })
    .to(circa7, 0, { fill: 'transparent' })
    .to(circa8, .5, { fill: '#00A7E0' })
    .to(circa8, 0, { fill: 'transparent' })
    .to(circa9, .5, { fill: '#00A7E0' })
    .to(circa9, 0, { fill: 'transparent' })
    .to(circa10, .5, { fill: '#00A7E0' })
    .to(circa10, 0, { fill: 'transparent'}, '+=0.5')
    .to(circa11, .5, { fill: '#00A7E0' })
    .to(circa11, 0, { fill: 'transparent' })
    .to(circa12, .5, { fill: '#00A7E0' })
    .to(circa12, 0, { fill: 'transparent' })
    .to(circa13, .5, { fill: '#00A7E0' })
    .to(circa13, 0, { fill: 'transparent' })
    .to(circa14, .5, { fill: '#00A7E0' })
    .to(circa14, 0, { fill: 'transparent' })
    .to(circa15, .5, { fill: '#00A7E0' })
    .to(circa15, 0, { fill: 'transparent' })
    .to(circa16, .5, { fill: '#00A7E0' })
    .to(circa16, 0, { fill: 'transparent' })
    .to(circa17, .5, { fill: '#00A7E0' })
    .to(circa17, 0, { fill: 'transparent' })
    .to(circa18, .5, { fill: '#00A7E0' })
    .to(circa18, 0, { fill: 'transparent' })
    .to(circa19, .5, { fill: '#00A7E0' })
    .to(circa19, 0, { fill: 'transparent' })
    .to(circa20, .5, { fill: '#00A7E0' })
    .to(circa20, 0, { fill: 'transparent' })
    .to(circa21, .5, { fill: '#00A7E0' })
    .to(circa21, 0, { fill: 'transparent' })
    .to(circa22, .5, { fill: '#00A7E0' })
    .to(circa22, 0, { fill: 'transparent' })
    .to(circa23, .5, { fill: '#00A7E0' })
    .to(circa23, 0, { fill: 'transparent' })
    .to(circa24, .5, { fill: '#00A7E0' })
    .to(circa24, 0, { fill: 'transparent' })
    .to(circa25, .5, { fill: '#00A7E0' })
    .to(circa25, 0, { fill: 'transparent' })
    .to(circa26, .5, { fill: '#00A7E0' })
    .to(circa26, 0, { fill: 'transparent' })
    .to(circa27, .5, { fill: '#00A7E0' })
    .to(circa27, 0, { fill: 'transparent' })
    .to(circa28, .5, { fill: '#00A7E0' })
    .to(circa28, 0, { fill: 'transparent' })
    .to(circa29, .5, { fill: '#00A7E0' })
    .to(circa29, 0, { fill: 'transparent' })
    .to(circa30, .5, { fill: '#00A7E0' })
    .to(circa30, 0, { fill: 'transparent' }, '+=0.5')
    .to(circa31, .5, { fill: '#00A7E0' })
    .to(circa31, 0, { fill: 'transparent' })
    .to(circa32, .5, { fill: '#00A7E0' })
    .to(circa32, 0, { fill: 'transparent' })
    .to(circa33, .5, { fill: '#00A7E0' })
    .to(circa33, 0, { fill: 'transparent' })
    .to(circa34, .5, { fill: '#00A7E0' })
    .to(circa34, 0, { fill: 'transparent' })
    .to(circa35, .5, { fill: '#00A7E0' })
    .to(circa35, 0, { fill: 'transparent' })
    .to(circa36, .5, { fill: '#00A7E0' })
    .to(circa36, 0, { fill: 'transparent' })
    .to(circa37, .5, { fill: '#00A7E0' })
    .to(circa37, 0, { fill: 'transparent' })
    .to(circa38, .5, { fill: '#00A7E0' })
    .to(circa38, 0, { fill: 'transparent' })
    .to(circa39, .5, { fill: '#00A7E0' })
    .to(circa39, 0, { fill: 'transparent' })
    .to(circa40, .5, { fill: '#00A7E0' })
    .to(circa40, 0, { fill: 'transparent' })
    // Phase 7
    .to(circa1, .5, { attr:{cx:'25%', cy:'-5%'} })
    .to(circa2, .5, { attr:{cx:'25%', cy:'0%'} })
    .to(circa3, .5, { attr:{cx:'25%', cy:'5%'} })
    .to(circa4, .5, { attr:{cx:'25%', cy:'10%'} })
    .to(circa5, .5, { attr:{cx:'25%', cy:'15%'} })
    .to(circa6, .5, { attr:{cx:'25%', cy:'20%'} })
    .to(circa7, .5, { attr:{cx:'25%', cy:'25%'} })
    .to(circa8, .5, { attr:{cx:'25%', cy:'30%'} })
    .to(circa9, .5, { attr:{cx:'25%', cy:'35%'} })
    .to(circa10, .5, { attr:{cx:'25%', cy:'40%'} })
    // Phase 8
    .to(circa11, .5, { attr:{cx:'50%', cy:'-5%'} })
    .to(circa12, .5, { attr:{cx:'50%', cy:'0%'} })
    .to(circa13, .5, { attr:{cx:'50%', cy:'5%'} })
    .to(circa14, .5, { attr:{cx:'50%', cy:'10%'} })
    .to(circa15, .5, { attr:{cx:'50%', cy:'15%'} })
    .to(circa16, .5, { attr:{cx:'50%', cy:'20%'} })
    .to(circa17, .5, { attr:{cx:'50%', cy:'25%'} })
    .to(circa18, .5, { attr:{cx:'50%', cy:'30%'} })
    .to(circa19, .5, { attr:{cx:'50%', cy:'35%'} })
    .to(circa20, .5, { attr:{cx:'50%', cy:'40%'} })
    .to(circa21, .5, { attr:{cx:'50%', cy:'45%'} })
    .to(circa22, .5, { attr:{cx:'50%', cy:'50%'} })
    .to(circa23, .5, { attr:{cx:'50%', cy:'55%'} })
    .to(circa24, .5, { attr:{cx:'50%', cy:'60%'} })
    .to(circa25, .5, { attr:{cx:'50%', cy:'65%'} })
    .to(circa26, .5, { attr:{cx:'50%', cy:'70%'} })
    .to(circa27, .5, { attr:{cx:'50%', cy:'75%'} })
    .to(circa28, .5, { attr:{cx:'50%', cy:'80%'} })
    .to(circa29, .5, { attr:{cx:'50%', cy:'85%'} })
    .to(circa30, .5, { attr:{cx:'50%', cy:'90%'} })
    // Phase 9
    .to(circa40, .5, { attr:{cx:'75%', cy:'105%'} })
    .to(circa39, .5, { attr:{cx:'75%', cy:'100%'} })
    .to(circa38, .5, { attr:{cx:'75%', cy:'95%'} })
    .to(circa37, .5, { attr:{cx:'75%', cy:'90%'} })
    .to(circa36, .5, { attr:{cx:'75%', cy:'85%'} })
    .to(circa35, .5, { attr:{cx:'75%', cy:'80%'} })
    .to(circa34, .5, { attr:{cx:'75%', cy:'75%'} })
    .to(circa33, .5, { attr:{cx:'75%', cy:'70%'} })
    .to(circa32, .5, { attr:{cx:'75%', cy:'65%'} })
    .to(circa31, .5, { attr:{cx:'75%', cy:'60%'} })
    // Phase 10
    .to(circa10, .5, { attr:{cx:'25%', cy:'-25%'} })
    .to(circa9, .5, { attr:{cx:'25%', cy:'-25%'} })
    .to(circa8, .5, { attr:{cx:'25%', cy:'-25%'} })
    .to(circa7, .5, { attr:{cx:'25%', cy:'-25%'} })
    .to(circa6, .5, { attr:{cx:'25%', cy:'-30%'} })
    .to(circa5, .5, { attr:{cx:'25%', cy:'-35%'} })
    .to(circa4, .5, { attr:{cx:'25%', cy:'-40%'} })
    .to(circa3, .5, { attr:{cx:'25%', cy:'-45%'} })
    .to(circa2, .5, { attr:{cx:'25%', cy:'-50%'} })
    .to(circa1, .5, { attr:{cx:'25%', cy:'-55%'} })
    .to(circa10, 0, { attr:{cx:'50%'} })
    .to(circa10, .5, { attr:{cy:'-10%' } })
    .to(circa9, 0, { attr:{cx:'50%'} })
    .to(circa9, .5, { attr:{cy:'-15%' } })
    .to(circa8, 0, { attr:{cx:'50%'} })
    .to(circa8, .5, { attr:{cy:'-20%' } })
    .to(circa7, 0, { attr:{cx:'50%'} })
    .to(circa6, 0, { attr:{cx:'50%'} })
    .to(circa5, 0, { attr:{cx:'50%'} })
    .to(circa4, 0, { attr:{cx:'50%'} })
    .to(circa3, 0, { attr:{cx:'50%'} })
    .to(circa2, 0, { attr:{cx:'50%'} })
    .to(circa1, 0, { attr:{cx:'50%'} })
    // Phase 11
    .to(circa31, .5, { attr:{cx:'75%', cy:'125%'} })
    .to(circa32, .5, { attr:{cx:'75%', cy:'125%'} })
    .to(circa33, .5, { attr:{cx:'75%', cy:'125%'} })
    .to(circa34, .5, { attr:{cx:'75%', cy:'125%'} })
    .to(circa35, .5, { attr:{cx:'75%', cy:'125%'} })
    .to(circa36, .5, { attr:{cx:'75%', cy:'125%'} })
    .to(circa37, .5, { attr:{cx:'75%', cy:'130%'} })
    .to(circa38, .5, { attr:{cx:'75%', cy:'135%'} })
    .to(circa39, .5, { attr:{cx:'75%', cy:'140%'} })
    .to(circa40, .5, { attr:{cx:'75%', cy:'145%'} })
    .to(circa31, 0, { attr:{cx:'50%'} })
    .to(circa31, .5, { attr:{cy:'95%' } })
    .to(circa32, 0, { attr:{cx:'50%'} })
    .to(circa32, .5, { attr:{cy:'100%' } })
    .to(circa33, 0, { attr:{cx:'50%'} })
    .to(circa33, .5, { attr:{cy:'105%' } })
    .to(circa34, 0, { attr:{cx:'50%'} })
    .to(circa34, .5, { attr:{cy:'110%' } })
    .to(circa35, 0, { attr:{cx:'50%'} })
    .to(circa35, .5, { attr:{cy:'115%' } })
    .to(circa36, 0, { attr:{cx:'50%'} })
    .to(circa36, .5, { attr:{cy:'120%' } })
    .to(circa37, 0, { attr:{cx:'50%'} })
    .to(circa38, 0, { attr:{cx:'50%'} })
    .to(circa39, 0, { attr:{cx:'50%'} })
    .to(circa40, 0, { attr:{cx:'50%'} })
    // Phase 12

    // Turn horizontal
  
    // Combine as one circle

    // Creata a circle from circles?

    // Send circles off to random direction

});

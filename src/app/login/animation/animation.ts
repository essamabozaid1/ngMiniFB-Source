import { trigger, transition, state, style, animate, group, query, keyframes } from '@angular/animations';


export let dropbox=  trigger('dropbox', [
  state('*', style({
    top: '32.5%',
    left: '32.5%',
    marginTop: '-20px',
    width: '35%',
    height: '37%',
    //backgroundColor: 'blue',
    borderRadius: '20px',
  })),

  transition('void => *', [
    group([
      animate(3000, keyframes([
        style({
          top: '-80px',
          left: '40%',
          marginTop: '0px',
          width: '20%',
          height: '20px',
          borderRadius: '0px',
          //backgroundColor: 'red',
          offset:0.0
        }),
        style({
          top: '50%',
          left: '40%',
          marginTop: '-20px',
          width: '20%',
          height: '20px',
        //backgroundColor: 'yellow',
          borderRadius: '0px',
          offset:.4,
        }),
        style({
          top: '32.5%',
          left: '32.5%',
        //marginTop: '-17.5%',
          width: '35%',
          height: '37%',
        //backgroundColor: 'blue',
          borderRadius: '20px',
          offset:1.0
        })
      ])),
      query('div.inner',[style({opacity:0})])
    ]),
    query('div.inner',[
      style({opacity:0, }),
      animate(2000,style({opacity:1,}))
    ]),
  ]),
]);

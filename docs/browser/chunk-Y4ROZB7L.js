import{a as W,b as I,f as O}from"./chunk-SO4NQFJM.js";import{$ as x,Aa as s,Fa as w,Ha as p,Ia as C,Ja as k,Ka as P,La as S,Ma as i,Na as r,Oa as u,Pa as T,Qa as h,Ra as f,T as _,Va as o,Wa as d,Xa as M,Ya as g,Za as E,_ as y,aa as b,ba as v,ra as l}from"./chunk-2MJBYEVZ.js";var F=(t,c,e)=>({"border-5 border-primary":t,"border-5 border-danger":c,"rounded-circle":e}),X=t=>({color:t});function G(t,c){if(t&1){let e=T();i(0,"div",15),h("click",function(){let n=y(e).$index,m=f();return x(m.makeMove(n))}),i(1,"h4",16),o(2),r()()}if(t&2){let e=c.$implicit;p("ngClass",E(3,F,e==="O",e==="X",e)),l(),p("ngStyle",g(7,X,e==="X"?"red":"#09c")),l(),d(" ",e," ")}}function D(t,c){if(t&1&&(i(0,"h3",13),o(1),u(2,"img",17),r()),t&2){let e=f();p("ngStyle",g(2,X,e.winnerPlayer()==="X"?"red":"#09c")),l(),d(" ",e.winnerPlayer()," : Winner ")}}function L(t,c){t&1&&(i(0,"h3",18),o(1," Draw "),u(2,"img",19),r())}var $=(()=>{class t{constructor(){this.board=s(Array(9).fill(null)),this.currentPlayer=s("X"),this.winnerPlayer=s(null),this.xWin=s(0),this.oWin=s(0)}makeMove(e){if(!this.board()[e]&&!this.winnerPlayer()){let a=[...this.board()];a[e]=this.currentPlayer(),this.board.set(a),this.checkWinner()?(this.winnerPlayer.set(this.currentPlayer()),this.updateCountPlayer(this.currentPlayer())):this.currentPlayer.set(this.currentPlayer()==="X"?"O":"X")}}checkWinner(){let e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let a of e){let[n,m,j]=a;if(this.board()[n]&&this.board()[n]===this.board()[m]&&this.board()[n]===this.board()[j])return!0}return!1}drawGame(){return this.board().every(e=>e!==null)}updateCountPlayer(e){e==="X"?this.xWin.set(this.xWin()+1):this.oWin.set(this.oWin()+1)}resetGame(){this.board.set(Array(9).fill(null)),this.currentPlayer.set("X"),this.winnerPlayer.set(null)}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=_({type:t,selectors:[["app-tiktactoe"]],standalone:!0,features:[M],decls:23,vars:3,consts:[[1,"bg-black","text-white"],[1,"container","position-relative"],["routerLink","/home",1,"exit","btn","btn-outline-danger","d-flex","align-items-center","justify-content-center","px-2","position-absolute","z-3"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-arrow-bar-left"],["fill-rule","evenodd","d","M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"],[1,"vh-100","d-flex","justify-content-center","align-items-center","animate__animated","animate__backInDown"],[1,"text-center"],[1,"d-flex","justify-content-center","align-items-center","gap-5","mt-3","mb-2"],[1,"text-danger"],[1,"borderColor"],[1,"board"],[1,"square","d-flex","justify-content-center","align-items-center","fs-2","rounded-1",3,"ngClass"],[1,"my-3"],[1,"animate__animated","animate__tada","d-flex","justify-content-center","align-items-center","gap-3",3,"ngStyle"],[1,"btn","btn-outline-primary",3,"click"],[1,"square","d-flex","justify-content-center","align-items-center","fs-2","rounded-1",3,"click","ngClass"],[3,"ngStyle"],["src","./assets/images/tiktactoeImage/1103-confetti.gif",1,"winImage"],[1,"animate__animated","animate__shakeY"],["src","./assets/images/tiktactoeImage/1.jpg","alt","",1,"opsImg","w-25"]],template:function(a,n){a&1&&(i(0,"section",0)(1,"div",1)(2,"button",2),b(),i(3,"svg",3),u(4,"path",4),r(),o(5," Exit "),r(),v(),i(6,"div",5)(7,"div",6)(8,"h1"),o(9,"Tic Tac Toe"),r(),i(10,"div",7)(11,"h3",8),o(12),r(),i(13,"h3",9),o(14),r()(),i(15,"div",10),P(16,G,3,9,"div",11,k),r(),i(18,"div",12),w(19,D,3,4,"h3",13)(20,L,3,0),r(),i(21,"button",14),h("click",function(){return n.resetGame()}),o(22,"Reset"),r()()()()()),a&2&&(l(12),d(" X : ",n.xWin()," "),l(2),d(" O : ",n.oWin()," "),l(2),S(n.board()),l(3),C(19,n.winnerPlayer()?19:!n.winnerPlayer()&&n.drawGame()?20:-1))},dependencies:[W,I,O],styles:["*[_ngcontent-%COMP%]{transition:all .5s;font-family:Playwrite DE Grund,cursive}.board[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,100px);grid-template-rows:repeat(3,100px);gap:5px;place-content:center}.square[_ngcontent-%COMP%]{width:100px;height:100px;border:1px solid gray;cursor:pointer}h3[_ngcontent-%COMP%]{font-size:25px;font-weight:900}h4[_ngcontent-%COMP%]{font-family:Permanent Marker,cursive;font-size:50px}.borderColor[_ngcontent-%COMP%]{color:#09c}.winImage[_ngcontent-%COMP%]{width:80px}.exit[_ngcontent-%COMP%]{top:20px}"]})}}return t})();export{$ as a};

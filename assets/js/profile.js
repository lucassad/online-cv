'use strict';
let printState=[];
window.addEventListener('beforeprint',()=>{
  printState=[...document.querySelectorAll('details.career')].map(node=>({node,open:node.open}));
  printState.forEach(({node})=>node.open=true);
});
window.addEventListener('afterprint',()=>{printState.forEach(({node,open})=>node.open=open);printState=[];});

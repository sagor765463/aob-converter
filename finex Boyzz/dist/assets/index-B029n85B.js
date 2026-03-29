(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=([e,s,t])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(s).forEach(n=>{o.setAttribute(n,String(s[n]))}),t!=null&&t.length&&t.forEach(n=>{const i=M(n);o.appendChild(i)}),o};/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=e=>Array.from(e.attributes).reduce((s,t)=>(s[t.name]=t.value,s),{}),C=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",I=e=>e.flatMap(C).map(t=>t.trim()).filter(Boolean).filter((t,o,n)=>n.indexOf(t)===o).join(" "),S=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(s,t,o)=>t.toUpperCase()+o.toLowerCase()),f=(e,{nameAttr:s,icons:t,attrs:o})=>{var y;const n=e.getAttribute(s);if(n==null)return;const i=S(n),a=t[i];if(!a)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const c=A(e),r={...L,"data-lucide":n,...o,...c},u=I(["lucide",`lucide-${n}`,c,o]);u&&Object.assign(r,{class:u});const E=M(["svg",r,a]);return(y=e.parentNode)==null?void 0:y.replaceChild(E,e)};/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["polygon",{points:"6 3 20 12 6 21 6 3"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];/**
 * @license lucide v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=({icons:e={},nameAttr:s="data-lucide",attrs:t={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${s}]`);if(Array.from(o).forEach(n=>f(n,{nameAttr:s,icons:e,attrs:t})),s==="data-lucide"){const n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(i=>f(i,{nameAttr:"icon-name",icons:e,attrs:t})))}};tt({icons:{Github:q,Linkedin:R,Twitter:F,Terminal:Y,Cpu:P,Activity:z,Layers:H,ArrowUpRight:B,Wifi:_,Heart:j,Code2:O,Database:N,Globe:T,Monitor:X,Zap:Q,Star:W,Play:G,Pause:D,SkipForward:U,SkipBack:V,Volume2:Z,VolumeX:K,X:J,Crosshair:k,Eye:$}});document.body.classList.add("custom-cursor");class g{constructor(){this.canvas=document.getElementById("bg-particles"),this.ctx=this.canvas.getContext("2d"),this.particles=[],this.count=window.innerWidth<768?40:80,this.mouse={x:null,y:null,radius:200},this.init(),this.animate(),this.handleResize(),this.handleMouseMove()}init(){this.resize(),this.particles=[];for(let s=0;s<this.count;s++){const t=Math.random()>.7;this.particles.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,size:Math.random()*2.5+1,shape:t?"square":"circle",pulse:Math.random()*Math.PI*2,pulseSpeed:.02+Math.random()*.03,glow:Math.random()>.8})}}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}handleResize(){window.addEventListener("resize",()=>{this.resize(),this.init()})}handleMouseMove(){window.addEventListener("mousemove",s=>{this.mouse.x=s.clientX,this.mouse.y=s.clientY})}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let s=0;s<this.particles.length;s++){const t=this.particles[s];t.pulse+=t.pulseSpeed;const o=.15+Math.sin(t.pulse)*.1,n=t.size+Math.sin(t.pulse)*.5;if(t.x+=t.vx,t.y+=t.vy,t.x<0&&(t.x=this.canvas.width),t.x>this.canvas.width&&(t.x=0),t.y<0&&(t.y=this.canvas.height),t.y>this.canvas.height&&(t.y=0),this.mouse.x!=null){const i=t.x-this.mouse.x,a=t.y-this.mouse.y,c=Math.sqrt(i*i+a*a);if(c<this.mouse.radius){const r=(this.mouse.radius-c)/this.mouse.radius;t.x+=i*r*.04,t.y+=a*r*.04}}this.ctx.beginPath(),this.ctx.fillStyle=`rgba(0, 240, 255, ${o})`,t.shape==="circle"?this.ctx.arc(t.x,t.y,n,0,Math.PI*2):this.ctx.rect(t.x-n,t.y-n,n*2,n*2),t.glow&&(this.ctx.shadowBlur=15*(.5+Math.sin(t.pulse)*.5),this.ctx.shadowColor="rgba(0, 240, 255, 0.4)"),this.ctx.fill(),this.ctx.shadowBlur=0;for(let i=s+1;i<this.particles.length;i++){const a=this.particles[i],c=t.x-a.x,r=t.y-a.y,u=Math.sqrt(c*c+r*r);u<120&&(this.ctx.beginPath(),this.ctx.strokeStyle=`rgba(0, 240, 255, ${(1-u/120)*.1})`,this.ctx.lineWidth=.5,this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(a.x,a.y),this.ctx.stroke())}}}animate(){this.draw(),requestAnimationFrame(()=>this.animate())}}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>new g):new g;const l=document.getElementById("cur");window.addEventListener("mousemove",e=>{l&&(l.style.left=`${e.clientX}px`,l.style.top=`${e.clientY}px`);const s=e.target;s&&s.closest&&(s.closest(".magic-hover")!==null||s.closest("a")!==null||s.closest("button")!==null||s.closest(".pill")!==null||s.closest(".ac")!==null||s.closest(".mts-cell")!==null)?l&&l.classList.add("big"):l&&l.classList.remove("big")});document.querySelectorAll(".magic-hover, .pill, .ac, .cw-item, .game-item, .mts-cell, .mal-btn").forEach(e=>{e.addEventListener("mousemove",s=>{const t=e.getBoundingClientRect(),o=s.clientX-t.left-t.width/2,n=s.clientY-t.top-t.height/2;e.style.transform=`translate(${o*.15}px, ${n*.15}px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="translate(0px, 0px)"})});const et=document.querySelectorAll(".fade-up"),st={threshold:.15,rootMargin:"0px 0px -50px 0px"},nt=new IntersectionObserver((e,s)=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),s.unobserve(t.target))})},st);et.forEach(e=>nt.observe(e));const x=document.getElementById("bgm-toggle"),p=document.getElementById("bgm-audio"),w=document.getElementById("bgm-status-text"),v=document.getElementById("bgm-icon"),m=document.getElementById("bgm-visualizer");let h=!1;const d=document.getElementById("music-player");function b(e){e?(w.textContent="BGM PLAYING",v.textContent="🔊",m.classList.add("playing"),d==null||d.classList.add("is-playing")):(w.textContent="BGM STOPPED",v.textContent="🔇",m.classList.remove("playing"),d==null||d.classList.remove("is-playing"))}function ot(){h?p.pause():p.play().catch(e=>console.error("Audio playback failed:",e)),h=!h,b(h)}if(x&&p&&m){x.addEventListener("click",t=>{t.stopPropagation(),ot()});const e=()=>{h||p.play().then(()=>{h=!0,b(!0),s()}).catch(()=>{})},s=()=>{window.removeEventListener("click",e),window.removeEventListener("keydown",e),window.removeEventListener("scroll",e),window.removeEventListener("touchstart",e)};window.addEventListener("click",e),window.addEventListener("keydown",e),window.addEventListener("scroll",e),window.addEventListener("touchstart",e),e()}async function it(){const e="finex-boyzz-portfolio",s="visits";try{const o=await(await fetch(`https://api.counterapi.dev/v1/${e}/${s}/up`)).json(),n=document.getElementById("v-count");n&&o.count&&(n.textContent=o.count.toString().padStart(6,"0"))}catch(t){console.error("Counter HUD Error:",t);const o=document.getElementById("v-count");o&&(o.textContent="000142")}}it();

import{s as S,n as _,c as q}from"../chunks/scheduler.C8EG53lV.js";import{S as x,i as k,e as d,p as f,s as y,d as g,n as h,q as v,k as u,b as C,h as m,o as $,r as E}from"../chunks/index.PlCZb00Z.js";import{s as H}from"../chunks/entry.B9u_4l94.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=d("h1"),o=f(r),n=y(),i=d("p"),l=f(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(u),n=C(e),i=g(e,"P",{});var p=h(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:_,o:_,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return q(s,j,n=>r(0,o=n)),[o]}let F=class extends x{constructor(t){super(),k(this,t,z,w,S,{})}};export{F as component};

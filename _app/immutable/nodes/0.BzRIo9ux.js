import{s as O,z as V,e as R,a as C,b as k,j as T,c as I,d as p,f as h,i as y,l as L,A as j,B as A,C as z,D as oe,E as x,F as $,g as ne,n as B}from"../chunks/scheduler.B_FHZ3tw.js";import{S as F,i as q,a as v,g as J,t as D,c as K,b as Q,d as U,m as X,e as Y}from"../chunks/index.d3mMNrMr.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.Dm475B3W.js";const re=!0,Ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:re},Symbol.toStringTag,{value:"Module"})),fe=s=>({}),ee=s=>({}),ue=s=>({}),le=s=>({}),ce=s=>({}),te=s=>({});function ae(s){let e,l,i;const n=s[22].lead,a=V(n,s,s[21],te);return{c(){e=R("div"),a&&a.c(),this.h()},l(t){e=k(t,"DIV",{class:!0});var o=T(e);a&&a.l(o),o.forEach(p),this.h()},h(){h(e,"class",l="app-bar-slot-lead "+s[4])},m(t,o){y(t,e,o),a&&a.m(e,null),i=!0},p(t,o){a&&a.p&&(!i||o&2097152)&&j(a,n,t,t[21],i?z(n,t[21],o,ce):A(t[21]),te),(!i||o&16&&l!==(l="app-bar-slot-lead "+t[4]))&&h(e,"class",l)},i(t){i||(v(a,t),i=!0)},o(t){D(a,t),i=!1},d(t){t&&p(e),a&&a.d(t)}}}function se(s){let e,l,i;const n=s[22].trail,a=V(n,s,s[21],le);return{c(){e=R("div"),a&&a.c(),this.h()},l(t){e=k(t,"DIV",{class:!0});var o=T(e);a&&a.l(o),o.forEach(p),this.h()},h(){h(e,"class",l="app-bar-slot-trail "+s[2])},m(t,o){y(t,e,o),a&&a.m(e,null),i=!0},p(t,o){a&&a.p&&(!i||o&2097152)&&j(a,n,t,t[21],i?z(n,t[21],o,ue):A(t[21]),le),(!i||o&4&&l!==(l="app-bar-slot-trail "+t[2]))&&h(e,"class",l)},i(t){i||(v(a,t),i=!0)},o(t){D(a,t),i=!1},d(t){t&&p(e),a&&a.d(t)}}}function ie(s){let e,l,i;const n=s[22].headline,a=V(n,s,s[21],ee);return{c(){e=R("div"),a&&a.c(),this.h()},l(t){e=k(t,"DIV",{class:!0});var o=T(e);a&&a.l(o),o.forEach(p),this.h()},h(){h(e,"class",l="app-bar-row-headline "+s[5])},m(t,o){y(t,e,o),a&&a.m(e,null),i=!0},p(t,o){a&&a.p&&(!i||o&2097152)&&j(a,n,t,t[21],i?z(n,t[21],o,fe):A(t[21]),ee),(!i||o&32&&l!==(l="app-bar-row-headline "+t[5]))&&h(e,"class",l)},i(t){i||(v(a,t),i=!0)},o(t){D(a,t),i=!1},d(t){t&&p(e),a&&a.d(t)}}}function de(s){let e,l,i,n,a,t,o,E,b,r,f=s[8].lead&&ae(s);const H=s[22].default,g=V(H,s,s[21],null);let d=s[8].trail&&se(s),m=s[8].headline&&ie(s);return{c(){e=R("div"),l=R("div"),f&&f.c(),i=C(),n=R("div"),g&&g.c(),t=C(),d&&d.c(),E=C(),m&&m.c(),this.h()},l(u){e=k(u,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var _=T(e);l=k(_,"DIV",{class:!0});var M=T(l);f&&f.l(M),i=I(M),n=k(M,"DIV",{class:!0});var S=T(n);g&&g.l(S),S.forEach(p),t=I(M),d&&d.l(M),M.forEach(p),E=I(_),m&&m.l(_),_.forEach(p),this.h()},h(){h(n,"class",a="app-bar-slot-default "+s[3]),h(l,"class",o="app-bar-row-main "+s[6]),h(e,"class",b="app-bar "+s[7]),h(e,"data-testid","app-bar"),h(e,"role","toolbar"),h(e,"aria-label",s[0]),h(e,"aria-labelledby",s[1])},m(u,_){y(u,e,_),L(e,l),f&&f.m(l,null),L(l,i),L(l,n),g&&g.m(n,null),L(l,t),d&&d.m(l,null),L(e,E),m&&m.m(e,null),r=!0},p(u,[_]){u[8].lead?f?(f.p(u,_),_&256&&v(f,1)):(f=ae(u),f.c(),v(f,1),f.m(l,i)):f&&(J(),D(f,1,1,()=>{f=null}),K()),g&&g.p&&(!r||_&2097152)&&j(g,H,u,u[21],r?z(H,u[21],_,null):A(u[21]),null),(!r||_&8&&a!==(a="app-bar-slot-default "+u[3]))&&h(n,"class",a),u[8].trail?d?(d.p(u,_),_&256&&v(d,1)):(d=se(u),d.c(),v(d,1),d.m(l,null)):d&&(J(),D(d,1,1,()=>{d=null}),K()),(!r||_&64&&o!==(o="app-bar-row-main "+u[6]))&&h(l,"class",o),u[8].headline?m?(m.p(u,_),_&256&&v(m,1)):(m=ie(u),m.c(),v(m,1),m.m(e,null)):m&&(J(),D(m,1,1,()=>{m=null}),K()),(!r||_&128&&b!==(b="app-bar "+u[7]))&&h(e,"class",b),(!r||_&1)&&h(e,"aria-label",u[0]),(!r||_&2)&&h(e,"aria-labelledby",u[1])},i(u){r||(v(f),v(g,u),v(d),v(m),r=!0)},o(u){D(f),D(g,u),D(d),D(m),r=!1},d(u){u&&p(e),f&&f.d(),g&&g.d(u),d&&d.d(),m&&m.d()}}}const me="flex flex-col",_e="grid items-center",he="",be="flex-none flex justify-between items-center",ge="flex-auto",ve="flex-none flex items-center space-x-4";function pe(s,e,l){let i,n,a,t,o,E,{$$slots:b={},$$scope:r}=e;const f=oe(b);let{background:H="bg-surface-100-800-token"}=e,{border:g=""}=e,{padding:d="p-4"}=e,{shadow:m=""}=e,{spacing:u="space-y-4"}=e,{gridColumns:_="grid-cols-[auto_1fr_auto]"}=e,{gap:M="gap-4"}=e,{regionRowMain:S=""}=e,{regionRowHeadline:N=""}=e,{slotLead:G=""}=e,{slotDefault:P=""}=e,{slotTrail:W=""}=e,{label:Z=""}=e,{labelledby:w=""}=e;return s.$$set=c=>{l(23,e=x(x({},e),$(c))),"background"in c&&l(9,H=c.background),"border"in c&&l(10,g=c.border),"padding"in c&&l(11,d=c.padding),"shadow"in c&&l(12,m=c.shadow),"spacing"in c&&l(13,u=c.spacing),"gridColumns"in c&&l(14,_=c.gridColumns),"gap"in c&&l(15,M=c.gap),"regionRowMain"in c&&l(16,S=c.regionRowMain),"regionRowHeadline"in c&&l(17,N=c.regionRowHeadline),"slotLead"in c&&l(18,G=c.slotLead),"slotDefault"in c&&l(19,P=c.slotDefault),"slotTrail"in c&&l(20,W=c.slotTrail),"label"in c&&l(0,Z=c.label),"labelledby"in c&&l(1,w=c.labelledby),"$$scope"in c&&l(21,r=c.$$scope)},s.$$.update=()=>{l(7,i=`${me} ${H} ${g} ${u} ${d} ${m} ${e.class??""}`),s.$$.dirty&114688&&l(6,n=`${_e} ${_} ${M} ${S}`),s.$$.dirty&131072&&l(5,a=`${he} ${N}`),s.$$.dirty&262144&&l(4,t=`${be} ${G}`),s.$$.dirty&524288&&l(3,o=`${ge} ${P}`),s.$$.dirty&1048576&&l(2,E=`${ve} ${W}`)},e=$(e),[Z,w,E,o,t,a,n,i,f,H,g,d,m,u,_,M,S,N,G,P,W,r,b]}class De extends F{constructor(e){super(),q(this,e,pe,de,O,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}function Re(s){let e,l='<a class="text-base px-4 btn btn-sm variant-filled-secondary" href="/">Home</a> <a class="text-base px-4 btn btn-sm variant-filled-secondary" href="/works">Works</a>';return{c(){e=R("nav"),e.innerHTML=l,this.h()},l(i){e=k(i,"NAV",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-1u5zqy4"&&(e.innerHTML=l),this.h()},h(){h(e,"class","flex gap-5")},m(i,n){y(i,e,n)},p:B,d(i){i&&p(e)}}}function ke(s){let e,l,i;return l=new De({props:{gridColumns:"grid-cols-1",slotDefault:"place-self-center",$$slots:{default:[Re]},$$scope:{ctx:s}}}),{c(){e=R("header"),Q(l.$$.fragment)},l(n){e=k(n,"HEADER",{});var a=T(e);U(l.$$.fragment,a),a.forEach(p)},m(n,a){y(n,e,a),X(l,e,null),i=!0},p(n,[a]){const t={};a&1&&(t.$$scope={dirty:a,ctx:n}),l.$set(t)},i(n){i||(v(l.$$.fragment,n),i=!0)},o(n){D(l.$$.fragment,n),i=!1},d(n){n&&p(e),Y(l)}}}class Ee extends F{constructor(e){super(),q(this,e,null,ke,O,{})}}function He(s){let e,l="<hr/> <p>Gianluca Rubino</p>";return{c(){e=R("footer"),e.innerHTML=l,this.h()},l(i){e=k(i,"FOOTER",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-j3zisn"&&(e.innerHTML=l),this.h()},h(){h(e,"class","container mx-auto p-8 space-y-4")},m(i,n){y(i,e,n)},p:B,i:B,o:B,d(i){i&&p(e)}}}class Me extends F{constructor(e){super(),q(this,e,null,He,O,{})}}function Te(s){let e,l,i,n,a,t,o;l=new Ee({});const E=s[1].default,b=V(E,s,s[0],null);return t=new Me({}),{c(){e=R("div"),Q(l.$$.fragment),i=C(),n=R("main"),b&&b.c(),a=C(),Q(t.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var f=T(e);U(l.$$.fragment,f),i=I(f),n=k(f,"MAIN",{class:!0});var H=T(n);b&&b.l(H),H.forEach(p),a=I(f),U(t.$$.fragment,f),f.forEach(p),this.h()},h(){h(n,"class","container mx-auto p-8 space-y-8"),h(e,"class","app")},m(r,f){y(r,e,f),X(l,e,null),L(e,i),L(e,n),b&&b.m(n,null),L(e,a),X(t,e,null),o=!0},p(r,[f]){b&&b.p&&(!o||f&1)&&j(b,E,r,r[0],o?z(E,r[0],f,null):A(r[0]),null)},i(r){o||(v(l.$$.fragment,r),v(b,r),v(t.$$.fragment,r),o=!0)},o(r){D(l.$$.fragment,r),D(b,r),D(t.$$.fragment,r),o=!1},d(r){r&&p(e),Y(l),b&&b.d(r),Y(t)}}}function Le(s,e,l){let{$$slots:i={},$$scope:n}=e;return s.$$set=a=>{"$$scope"in a&&l(0,n=a.$$scope)},[n,i]}class Ve extends F{constructor(e){super(),q(this,e,Le,Te,O,{})}}export{Ve as component,Ie as universal};
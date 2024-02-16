import{bG as mt,g as p,F as ut,bX as It,bY as Et,bZ as vt,x as xt,k as nt,i as Tt,n as $,aZ as Y,l as lt,t as Wt,bS as ot,S as pt,v as J,b9 as Rt,a as G,b_ as Lt,A as gt,c as st,b$ as Mt,I as dt,w as wt,bK as At,al as T,y as Dt,E as ft,z as yt,U as Ft,K as Pt,e as at,a6 as Ot,f as rt,N as k,bW as jt,X as Ct}from"./proj4-75e1e0c4.js";const Xt=.5,bt=10,ht=.25;class Nt{constructor(t,s,i,n,e,h){this.sourceProj_=t,this.targetProj_=s;let l={};const c=mt(this.targetProj_,this.sourceProj_);this.transformInv_=function(r){const u=r[0]+"/"+r[1];return l[u]||(l[u]=c(r)),l[u]},this.maxSourceExtent_=n,this.errorThresholdSquared_=e*e,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!n&&!!this.sourceProj_.getExtent()&&p(n)>=p(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?p(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?p(this.targetProj_.getExtent()):null;const g=ut(i),v=It(i),x=Et(i),W=vt(i),a=this.transformInv_(g),m=this.transformInv_(v),I=this.transformInv_(x),d=this.transformInv_(W),f=bt+(h?Math.max(0,Math.ceil(Math.log2(xt(i)/(h*h*256*256)))):0);if(this.addQuad_(g,v,x,W,a,m,I,d,f),this.wrapsXInSource_){let r=1/0;this.triangles_.forEach(function(u,E,_){r=Math.min(r,u.source[0][0],u.source[1][0],u.source[2][0])}),this.triangles_.forEach(u=>{if(Math.max(u.source[0][0],u.source[1][0],u.source[2][0])-r>this.sourceWorldWidth_/2){const E=[[u.source[0][0],u.source[0][1]],[u.source[1][0],u.source[1][1]],[u.source[2][0],u.source[2][1]]];E[0][0]-r>this.sourceWorldWidth_/2&&(E[0][0]-=this.sourceWorldWidth_),E[1][0]-r>this.sourceWorldWidth_/2&&(E[1][0]-=this.sourceWorldWidth_),E[2][0]-r>this.sourceWorldWidth_/2&&(E[2][0]-=this.sourceWorldWidth_);const _=Math.min(E[0][0],E[1][0],E[2][0]);Math.max(E[0][0],E[1][0],E[2][0])-_<this.sourceWorldWidth_/2&&(u.source=E)}})}l={}}addTriangle_(t,s,i,n,e,h){this.triangles_.push({source:[n,e,h],target:[t,s,i]})}addQuad_(t,s,i,n,e,h,l,c,g){const v=nt([e,h,l,c]),x=this.sourceWorldWidth_?p(v)/this.sourceWorldWidth_:null,W=this.sourceWorldWidth_,a=this.sourceProj_.canWrapX()&&x>.5&&x<1;let m=!1;if(g>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const d=nt([t,s,i,n]);m=p(d)/this.targetWorldWidth_>ht||m}!a&&this.sourceProj_.isGlobal()&&x&&(m=x>ht||m)}if(!m&&this.maxSourceExtent_&&isFinite(v[0])&&isFinite(v[1])&&isFinite(v[2])&&isFinite(v[3])&&!Tt(v,this.maxSourceExtent_))return;let I=0;if(!m&&(!isFinite(e[0])||!isFinite(e[1])||!isFinite(h[0])||!isFinite(h[1])||!isFinite(l[0])||!isFinite(l[1])||!isFinite(c[0])||!isFinite(c[1]))){if(g>0)m=!0;else if(I=(!isFinite(e[0])||!isFinite(e[1])?8:0)+(!isFinite(h[0])||!isFinite(h[1])?4:0)+(!isFinite(l[0])||!isFinite(l[1])?2:0)+(!isFinite(c[0])||!isFinite(c[1])?1:0),I!=1&&I!=2&&I!=4&&I!=8)return}if(g>0){if(!m){const d=[(t[0]+i[0])/2,(t[1]+i[1])/2],f=this.transformInv_(d);let r;a?r=($(e[0],W)+$(l[0],W))/2-$(f[0],W):r=(e[0]+l[0])/2-f[0];const u=(e[1]+l[1])/2-f[1];m=r*r+u*u>this.errorThresholdSquared_}if(m){if(Math.abs(t[0]-i[0])<=Math.abs(t[1]-i[1])){const d=[(s[0]+i[0])/2,(s[1]+i[1])/2],f=this.transformInv_(d),r=[(n[0]+t[0])/2,(n[1]+t[1])/2],u=this.transformInv_(r);this.addQuad_(t,s,d,r,e,h,f,u,g-1),this.addQuad_(r,d,i,n,u,f,l,c,g-1)}else{const d=[(t[0]+s[0])/2,(t[1]+s[1])/2],f=this.transformInv_(d),r=[(i[0]+n[0])/2,(i[1]+n[1])/2],u=this.transformInv_(r);this.addQuad_(t,d,r,n,e,f,u,c,g-1),this.addQuad_(d,s,i,r,f,h,l,u,g-1)}return}}if(a){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}I&11||this.addTriangle_(t,i,n,e,l,c),I&14||this.addTriangle_(t,i,s,e,l,h),I&&(I&13||this.addTriangle_(s,n,t,h,c,e),I&7||this.addTriangle_(s,n,i,h,c,l))}calculateSourceExtent(){const t=lt();return this.triangles_.forEach(function(s,i,n){const e=s.source;Y(t,e[0]),Y(t,e[1]),Y(t,e[2])}),t}getTriangles(){return this.triangles_}}const Gt=Nt;let z;const S=[];function ct(o,t,s,i,n){o.beginPath(),o.moveTo(0,0),o.lineTo(t,s),o.lineTo(i,n),o.closePath(),o.save(),o.clip(),o.fillRect(0,0,Math.max(t,i)+1,Math.max(s,n)),o.restore()}function V(o,t){return Math.abs(o[t*4]-210)>2||Math.abs(o[t*4+3]-.75*255)>2}function St(){if(z===void 0){const o=J(6,6,S);o.globalCompositeOperation="lighter",o.fillStyle="rgba(210, 0, 0, 0.75)",ct(o,4,5,4,0),ct(o,4,5,0,5);const t=o.getImageData(0,0,3,3).data;z=V(t,0)||V(t,4)||V(t,8),gt(o),S.push(o.canvas)}return z}function tt(o,t,s,i){const n=Wt(s,t,o);let e=ot(t,i,s);const h=t.getMetersPerUnit();h!==void 0&&(e*=h);const l=o.getMetersPerUnit();l!==void 0&&(e/=l);const c=o.getExtent();if(!c||pt(c,n)){const g=ot(o,e,n)/e;isFinite(g)&&g>0&&(e/=g)}return e}function $t(o,t,s,i){const n=st(s);let e=tt(o,t,n,i);return(!isFinite(e)||e<=0)&&Mt(s,function(h){return e=tt(o,t,h,i),isFinite(e)&&e>0}),e}function kt(o,t,s,i,n,e,h,l,c,g,v,x,W){const a=J(Math.round(s*o),Math.round(s*t),S);if(x||(a.imageSmoothingEnabled=!1),c.length===0)return a.canvas;a.scale(s,s);function m(r){return Math.round(r*s)/s}a.globalCompositeOperation="lighter";const I=lt();c.forEach(function(r,u,E){Rt(I,r.extent)});let d;if(!W||c.length!==1||g!==0){const r=p(I),u=G(I);d=J(Math.round(s*r/i),Math.round(s*u/i),S),x||(d.imageSmoothingEnabled=!1);const E=s/i;c.forEach(function(_,R,O){const y=_.extent[0]-I[0],M=-(_.extent[3]-I[3]),w=p(_.extent),A=G(_.extent);_.image.width>0&&_.image.height>0&&d.drawImage(_.image,g,g,_.image.width-2*g,_.image.height-2*g,y*E,M*E,w*E,A*E)})}const f=ut(h);return l.getTriangles().forEach(function(r,u,E){const _=r.source,R=r.target;let O=_[0][0],y=_[0][1],M=_[1][0],w=_[1][1],A=_[2][0],B=_[2][1];const j=m((R[0][0]-f[0])/e),C=m(-(R[0][1]-f[1])/e),F=m((R[1][0]-f[0])/e),P=m(-(R[1][1]-f[1])/e),H=m((R[2][0]-f[0])/e),Q=m(-(R[2][1]-f[1])/e),U=O,K=y;O=0,y=0,M-=U,w-=K,A-=U,B-=K;const _t=[[M,w,0,0,F-j],[A,B,0,0,H-j],[0,0,M,w,P-C],[0,0,A,B,Q-C]],X=Lt(_t);if(!X)return;if(a.save(),a.beginPath(),St()||!x){a.moveTo(F,P);const L=4,N=j-F,it=C-P;for(let D=0;D<L;D++)a.lineTo(F+m((D+1)*N/L),P+m(D*it/(L-1))),D!=L-1&&a.lineTo(F+m((D+1)*N/L),P+m((D+1)*it/(L-1)));a.lineTo(H,Q)}else a.moveTo(F,P),a.lineTo(j,C),a.lineTo(H,Q);a.clip(),a.transform(X[0],X[2],X[1],X[3],j,C),a.translate(I[0]-U,I[3]-K);let b;if(d)b=d.canvas,a.scale(i/s,-i/s);else{const L=c[0],N=L.extent;b=L.image,a.scale(p(N)/b.width,-G(N)/b.height)}a.drawImage(b,0,0),a.restore()}),d&&(gt(d),S.push(d.canvas)),v&&(a.save(),a.globalCompositeOperation="source-over",a.strokeStyle="black",a.lineWidth=1,l.getTriangles().forEach(function(r,u,E){const _=r.target,R=(_[0][0]-f[0])/e,O=-(_[0][1]-f[1])/e,y=(_[1][0]-f[0])/e,M=-(_[1][1]-f[1])/e,w=(_[2][0]-f[0])/e,A=-(_[2][1]-f[1])/e;a.beginPath(),a.moveTo(y,M),a.lineTo(R,O),a.lineTo(w,A),a.closePath(),a.stroke()}),a.restore()),a.canvas}function et(o){return Array.isArray(o)?Math.min(...o):o}class qt extends dt{constructor(t,s,i,n,e,h,l){let c=t.getExtent();c&&t.canWrapX()&&(c=c.slice(),c[0]=-1/0,c[2]=1/0);let g=s.getExtent();g&&s.canWrapX()&&(g=g.slice(),g[0]=-1/0,g[2]=1/0);const v=g?wt(i,g):i,x=st(v),W=tt(t,s,x,n),a=Xt,m=new Gt(t,s,v,c,W*a,n),I=m.calculateSourceExtent(),d=At(I)?null:h(I,W,e),f=d?T.IDLE:T.EMPTY,r=d?d.getPixelRatio():1;super(i,n,r,f),this.targetProj_=s,this.maxSourceExtent_=c,this.triangulation_=m,this.targetResolution_=n,this.targetExtent_=i,this.sourceImage_=d,this.sourcePixelRatio_=r,this.interpolate_=l,this.canvas_=null,this.sourceListenerKey_=null}disposeInternal(){this.state==T.LOADING&&this.unlistenSource_(),super.disposeInternal()}getImage(){return this.canvas_}getProjection(){return this.targetProj_}reproject_(){const t=this.sourceImage_.getState();if(t==T.LOADED){const s=p(this.targetExtent_)/this.targetResolution_,i=G(this.targetExtent_)/this.targetResolution_;this.canvas_=kt(s,i,this.sourcePixelRatio_,et(this.sourceImage_.getResolution()),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_,!0)}this.state=t,this.changed()}load(){if(this.state==T.IDLE){this.state=T.LOADING,this.changed();const t=this.sourceImage_.getState();t==T.LOADED||t==T.ERROR?this.reproject_():(this.sourceListenerKey_=Dt(this.sourceImage_,ft.CHANGE,function(s){const i=this.sourceImage_.getState();(i==T.LOADED||i==T.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}}unlistenSource_(){yt(this.sourceListenerKey_),this.sourceListenerKey_=null}}const Bt=qt,q=4,Z={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"};class Ht extends Ct{constructor(t,s){super(t),this.image=s}}class Qt extends Ft{constructor(t){super({attributions:t.attributions,projection:t.projection,state:t.state,interpolate:t.interpolate!==void 0?t.interpolate:!0}),this.on,this.once,this.un,this.loader=t.loader||null,this.resolutions_=t.resolutions!==void 0?t.resolutions:null,this.reprojectedImage_=null,this.reprojectedRevision_=0,this.image=null,this.wantedExtent_,this.wantedResolution_,this.static_=t.loader?t.loader.length===0:!1,this.wantedProjection_=null}getResolutions(){return this.resolutions_}setResolutions(t){this.resolutions_=t}findNearestResolution(t){const s=this.getResolutions();if(s){const i=Pt(s,t,0);t=s[i]}return t}getImage(t,s,i,n){const e=this.getProjection();if(!e||!n||at(e,n))return e&&(n=e),this.getImageInternal(t,s,i,n);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&at(this.reprojectedImage_.getProjection(),n)&&this.reprojectedImage_.getResolution()==s&&Ot(this.reprojectedImage_.getExtent(),t))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new Bt(e,n,t,s,i,(h,l,c)=>this.getImageInternal(h,l,c,e),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_}getImageInternal(t,s,i,n){if(this.loader){const e=Ut(t,s,i,1),h=this.findNearestResolution(s);if(this.image&&(this.static_||this.wantedProjection_===n&&(this.wantedExtent_&&rt(this.wantedExtent_,e)||rt(this.image.getExtent(),e))&&(this.wantedResolution_&&et(this.wantedResolution_)===h||et(this.image.getResolution())===h)))return this.image;this.wantedProjection_=n,this.wantedExtent_=e,this.wantedResolution_=h,this.image=new dt(e,h,i,this.loader),this.image.addEventListener(ft.CHANGE,this.handleImageChange.bind(this))}return this.image}handleImageChange(t){const s=t.target;let i;switch(s.getState()){case T.LOADING:this.loading=!0,i=Z.IMAGELOADSTART;break;case T.LOADED:this.loading=!1,i=Z.IMAGELOADEND;break;case T.ERROR:this.loading=!1,i=Z.IMAGELOADERROR;break;default:return}this.hasListener(i)&&this.dispatchEvent(new Ht(i,s))}}function Yt(o,t){o.getImage().src=t}function Ut(o,t,s,i){const n=t/s,e=st(o),h=k(p(o)/n,q),l=k(G(o)/n,q),c=k((i-1)*h/2,q),g=h+2*c,v=k((i-1)*l/2,q),x=l+2*v;return jt(e,n,0,[g,x])}const zt=Qt;export{q as D,Xt as E,zt as I,Gt as T,S as a,$t as b,tt as c,Yt as d,Ut as g,kt as r};
//# sourceMappingURL=Image-dc01ef9b.js.map

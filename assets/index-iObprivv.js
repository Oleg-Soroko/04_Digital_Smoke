(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ka="182",uc=0,co=1,dc=2,Or=1,hc=2,Yi=3,kn=0,Bt=1,yn=2,En=0,Ci=1,uo=2,ho=3,fo=4,fc=5,Jn=100,pc=101,mc=102,gc=103,vc=104,_c=200,xc=201,Sc=202,Mc=203,$s=204,Ys=205,yc=206,Ec=207,bc=208,Tc=209,Ac=210,wc=211,Cc=212,Rc=213,Pc=214,qs=0,Ks=1,Zs=2,Pi=3,js=4,Js=5,Qs=6,ea=7,Sl=0,Dc=1,Lc=2,un=0,Ml=1,yl=2,El=3,Ga=4,bl=5,Tl=6,Al=7,wl=300,ii=301,Di=302,ta=303,na=304,Kr=306,ia=1e3,Ut=1001,ra=1002,pt=1003,Uc=1004,mr=1005,vt=1006,as=1007,ti=1008,Xt=1009,Cl=1010,Rl=1011,Qi=1012,Ha=1013,fn=1014,ln=1015,pn=1016,Wa=1017,Xa=1018,er=1020,Pl=35902,Dl=35899,Ll=1021,Ul=1022,jt=1023,An=1026,ni=1027,Il=1028,$a=1029,Li=1030,Ya=1031,qa=1033,Br=33776,Vr=33777,zr=33778,kr=33779,sa=35840,aa=35841,oa=35842,la=35843,ca=36196,ua=37492,da=37496,ha=37488,fa=37489,pa=37490,ma=37491,ga=37808,va=37809,_a=37810,xa=37811,Sa=37812,Ma=37813,ya=37814,Ea=37815,ba=37816,Ta=37817,Aa=37818,wa=37819,Ca=37820,Ra=37821,Pa=36492,Da=36494,La=36495,Ua=36283,Ia=36284,Fa=36285,Na=36286,Ic=3200,Fc=0,Nc=1,On="",Nt="srgb",Ui="srgb-linear",Hr="linear",at="srgb",ui=7680,po=519,Oc=512,Bc=513,Vc=514,Ka=515,zc=516,kc=517,Za=518,Gc=519,mo=35044,go="300 es",cn=2e3,Wr=2001;function Fl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hc(){const i=tr("canvas");return i.style.display="block",i}const vo={};function _o(...i){const e="THREE."+i.shift();console.log(e,...i)}function Be(...i){const e="THREE."+i.shift();console.warn(e,...i)}function tt(...i){const e="THREE."+i.shift();console.error(e,...i)}function nr(...i){const e=i.join(" ");e in vo||(vo[e]=!0,Be(...i))}function Wc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xo=1234567;const Ki=Math.PI/180,ir=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function ja(i,e){return(i%e+e)%e}function Xc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function $c(i,e,t){return i!==e?(t-i)/(e-i):0}function Zi(i,e,t){return(1-t)*i+t*e}function Yc(i,e,t,n){return Zi(i,e,1-Math.exp(-t*n))}function qc(i,e=1){return e-Math.abs(ja(i,e*2)-e)}function Kc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Jc(i,e){return i+Math.random()*(e-i)}function Qc(i){return i*(.5-Math.random())}function eu(i){i!==void 0&&(xo=i);let e=xo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tu(i){return i*Ki}function nu(i){return i*ir}function iu(i){return(i&i-1)===0&&i!==0}function ru(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function su(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function au(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),d=a((e+n)/2),h=s((e-n)/2),p=a((e-n)/2),f=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*d,l*h,l*p,o*c);break;case"YZY":i.set(l*p,o*d,l*h,o*c);break;case"ZXZ":i.set(l*h,l*p,o*d,o*c);break;case"XZX":i.set(o*d,l*v,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*v,o*c);break;case"ZYZ":i.set(l*v,l*f,o*d,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ot={DEG2RAD:Ki,RAD2DEG:ir,generateUUID:Oi,clamp:qe,euclideanModulo:ja,mapLinear:Xc,inverseLerp:$c,lerp:Zi,damp:Yc,pingpong:qc,smoothstep:Kc,smootherstep:Zc,randInt:jc,randFloat:Jc,randFloatSpread:Qc,seededRandom:eu,degToRad:tu,radToDeg:nu,isPowerOfTwo:iu,ceilPowerOfTwo:ru,floorPowerOfTwo:su,setQuaternionFromProperEuler:au,normalize:Dt,denormalize:wi};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],h=n[r+3],p=s[a+0],f=s[a+1],v=s[a+2],S=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o>=1){e[t+0]=p,e[t+1]=f,e[t+2]=v,e[t+3]=S;return}if(h!==S||l!==p||c!==f||d!==v){let m=l*p+c*f+d*v+h*S;m<0&&(p=-p,f=-f,v=-v,S=-S,m=-m);let u=1-o;if(m<.9995){const E=Math.acos(m),M=Math.sin(E);u=Math.sin(u*E)/M,o=Math.sin(o*E)/M,l=l*u+p*o,c=c*u+f*o,d=d*u+v*o,h=h*u+S*o}else{l=l*u+p*o,c=c*u+f*o,d=d*u+v*o,h=h*u+S*o;const E=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=E,c*=E,d*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],h=s[a],p=s[a+1],f=s[a+2],v=s[a+3];return e[t]=o*v+d*h+l*f-c*p,e[t+1]=l*v+d*p+c*h-o*f,e[t+2]=c*v+d*f+o*p-l*h,e[t+3]=d*v-o*h-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),h=o(s/2),p=l(n/2),f=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=p*d*h+c*f*v,this._y=c*f*h-p*d*v,this._z=c*d*v+p*f*h,this._w=c*d*h-p*f*v;break;case"YXZ":this._x=p*d*h+c*f*v,this._y=c*f*h-p*d*v,this._z=c*d*v-p*f*h,this._w=c*d*h+p*f*v;break;case"ZXY":this._x=p*d*h-c*f*v,this._y=c*f*h+p*d*v,this._z=c*d*v+p*f*h,this._w=c*d*h-p*f*v;break;case"ZYX":this._x=p*d*h-c*f*v,this._y=c*f*h+p*d*v,this._z=c*d*v-p*f*h,this._w=c*d*h+p*f*v;break;case"YZX":this._x=p*d*h+c*f*v,this._y=c*f*h+p*d*v,this._z=c*d*v-p*f*h,this._w=c*d*h-p*f*v;break;case"XZY":this._x=p*d*h-c*f*v,this._y=c*f*h-p*d*v,this._z=c*d*v+p*f*h,this._w=c*d*h+p*f*v;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],p=n+o+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(So.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(So.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),d=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return os.copy(this).projectOnVector(e),this.sub(os)}reflect(e){return this.sub(os.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const os=new k,So=new lr;class Ge{constructor(e,t,n,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],p=n[2],f=n[5],v=n[8],S=r[0],m=r[3],u=r[6],E=r[1],M=r[4],T=r[7],A=r[2],R=r[5],P=r[8];return s[0]=a*S+o*E+l*A,s[3]=a*m+o*M+l*R,s[6]=a*u+o*T+l*P,s[1]=c*S+d*E+h*A,s[4]=c*m+d*M+h*R,s[7]=c*u+d*T+h*P,s[2]=p*S+f*E+v*A,s[5]=p*m+f*M+v*R,s[8]=p*u+f*T+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,p=o*l-d*s,f=c*s-a*l,v=t*h+n*p+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=h*S,e[1]=(r*c-d*n)*S,e[2]=(o*n-r*a)*S,e[3]=p*S,e[4]=(d*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=f*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ls.makeScale(e,t)),this}rotate(e){return this.premultiply(ls.makeRotation(-e)),this}translate(e,t){return this.premultiply(ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ls=new Ge,Mo=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yo=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ou(){const i={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=bn(r.r),r.g=bn(r.g),r.b=bn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===On?Hr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ui]:{primaries:e,whitePoint:n,transfer:Hr,toXYZ:Mo,fromXYZ:yo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Mo,fromXYZ:yo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const Je=ou();function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class lu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{di===void 0&&(di=tr("canvas")),di.width=e.width,di.height=e.height;const r=di.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bn(t[n]/255)*255):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cu=0;class Ja{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(cs(r[a].image)):s.push(cs(r[a]))}else s=cs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function cs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let uu=0;const us=new k;class wt extends Ni{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Ut,r=Ut,s=vt,a=ti,o=jt,l=Xt,c=wt.DEFAULT_ANISOTROPY,d=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Oi(),this.name="",this.source=new Ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(us).x}get height(){return this.source.getSize(us).y}get depth(){return this.source.getSize(us).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=wl;wt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],f=l[5],v=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(f+1)/2,A=(u+1)/2,R=(d+p)/4,P=(h+S)/4,N=(v+m)/4;return M>T&&M>A?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=R/n,s=P/n):T>A?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=R/r,s=N/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=P/s,r=N/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-v)*(m-v)+(h-S)*(h-S)+(p-d)*(p-d));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(h-S)/E,this.z=(p-d)/E,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class du extends Ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new wt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ja(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends du{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nl extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hu extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),vr.subVectors(this.max,ki),hi.subVectors(e.a,ki),fi.subVectors(e.b,ki),pi.subVectors(e.c,ki),Dn.subVectors(fi,hi),Ln.subVectors(pi,fi),Xn.subVectors(hi,pi);let t=[0,-Dn.z,Dn.y,0,-Ln.z,Ln.y,0,-Xn.z,Xn.y,Dn.z,0,-Dn.x,Ln.z,0,-Ln.x,Xn.z,0,-Xn.x,-Dn.y,Dn.x,0,-Ln.y,Ln.x,0,-Xn.y,Xn.x,0];return!ds(t,hi,fi,pi,vr)||(t=[1,0,0,0,1,0,0,0,1],!ds(t,hi,fi,pi,vr))?!1:(_r.crossVectors(Dn,Ln),t=[_r.x,_r.y,_r.z],ds(t,hi,fi,pi,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gn=[new k,new k,new k,new k,new k,new k,new k,new k],Qt=new k,gr=new cr,hi=new k,fi=new k,pi=new k,Dn=new k,Ln=new k,Xn=new k,ki=new k,vr=new k,_r=new k,$n=new k;function ds(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){$n.fromArray(i,s);const o=r.x*Math.abs($n.x)+r.y*Math.abs($n.y)+r.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),d=n.dot($n);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const fu=new cr,Gi=new k,hs=new k;class Qa{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(hs)),this.expandByPoint(Gi.copy(e.center).sub(hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vn=new k,fs=new k,xr=new k,Un=new k,ps=new k,Sr=new k,ms=new k;class pu{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fs.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(fs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=Un.dot(this.direction),l=-Un.dot(xr),c=Un.lengthSq(),d=Math.abs(1-a*a);let h,p,f,v;if(d>0)if(h=a*l-o,p=a*o-l,v=s*d,h>=0)if(p>=-v)if(p<=v){const S=1/d;h*=S,p*=S,f=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p<=-v?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+p*(p+2*l)+c):p<=v?(h=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+p*(p+2*l)+c);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fs).addScaledVector(xr,p),f}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),r=vn.dot(vn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,r,s){ps.subVectors(t,e),Sr.subVectors(n,e),ms.crossVectors(ps,Sr);let a=this.direction.dot(ms),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,e);const l=o*this.direction.dot(Sr.crossVectors(Un,Sr));if(l<0)return null;const c=o*this.direction.dot(ps.cross(Un));if(c<0||l+c>a)return null;const d=-o*Un.dot(ms);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,r,s,a,o,l,c,d,h,p,f,v,S,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,d,h,p,f,v,S,m)}set(e,t,n,r,s,a,o,l,c,d,h,p,f,v,S,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=f,u[7]=v,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*d,f=a*h,v=o*d,S=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+v*c,t[5]=p-S*c,t[9]=-o*l,t[2]=S-p*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*d,f=l*h,v=c*d,S=c*h;t[0]=p+S*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-v,t[6]=S+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*d,f=l*h,v=c*d,S=c*h;t[0]=p-S*o,t[4]=-a*h,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*d,t[9]=S-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*d,f=a*h,v=o*d,S=o*h;t[0]=l*d,t[4]=v*c-f,t[8]=p*c+S,t[1]=l*h,t[5]=S*c+p,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,f=a*c,v=o*l,S=o*c;t[0]=l*d,t[4]=S-p*h,t[8]=v*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+v,t[10]=p-S*h}else if(e.order==="XZY"){const p=a*l,f=a*c,v=o*l,S=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=p*h+S,t[5]=a*d,t[9]=f*h-v,t[2]=v*h-f,t[6]=o*d,t[10]=S*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mu,e,gu)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),In.crossVectors(n,Gt),In.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),In.crossVectors(n,Gt)),In.normalize(),Mr.crossVectors(Gt,In),r[0]=In.x,r[4]=Mr.x,r[8]=Gt.x,r[1]=In.y,r[5]=Mr.y,r[9]=Gt.y,r[2]=In.z,r[6]=Mr.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],p=n[9],f=n[13],v=n[2],S=n[6],m=n[10],u=n[14],E=n[3],M=n[7],T=n[11],A=n[15],R=r[0],P=r[4],N=r[8],x=r[12],y=r[1],w=r[5],O=r[9],B=r[13],q=r[2],X=r[6],$=r[10],z=r[14],K=r[3],ae=r[7],ne=r[11],he=r[15];return s[0]=a*R+o*y+l*q+c*K,s[4]=a*P+o*w+l*X+c*ae,s[8]=a*N+o*O+l*$+c*ne,s[12]=a*x+o*B+l*z+c*he,s[1]=d*R+h*y+p*q+f*K,s[5]=d*P+h*w+p*X+f*ae,s[9]=d*N+h*O+p*$+f*ne,s[13]=d*x+h*B+p*z+f*he,s[2]=v*R+S*y+m*q+u*K,s[6]=v*P+S*w+m*X+u*ae,s[10]=v*N+S*O+m*$+u*ne,s[14]=v*x+S*B+m*z+u*he,s[3]=E*R+M*y+T*q+A*K,s[7]=E*P+M*w+T*X+A*ae,s[11]=E*N+M*O+T*$+A*ne,s[15]=E*x+M*B+T*z+A*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],p=e[10],f=e[14],v=e[3],S=e[7],m=e[11],u=e[15],E=l*f-c*p,M=o*f-c*h,T=o*p-l*h,A=a*f-c*d,R=a*p-l*d,P=a*h-o*d;return t*(S*E-m*M+u*T)-n*(v*E-m*A+u*R)+r*(v*M-S*A+u*P)-s*(v*T-S*R+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],p=e[10],f=e[11],v=e[12],S=e[13],m=e[14],u=e[15],E=h*m*c-S*p*c+S*l*f-o*m*f-h*l*u+o*p*u,M=v*p*c-d*m*c-v*l*f+a*m*f+d*l*u-a*p*u,T=d*S*c-v*h*c+v*o*f-a*S*f-d*o*u+a*h*u,A=v*h*l-d*S*l-v*o*p+a*S*p+d*o*m-a*h*m,R=t*E+n*M+r*T+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=E*P,e[1]=(S*p*s-h*m*s-S*r*f+n*m*f+h*r*u-n*p*u)*P,e[2]=(o*m*s-S*l*s+S*r*c-n*m*c-o*r*u+n*l*u)*P,e[3]=(h*l*s-o*p*s-h*r*c+n*p*c+o*r*f-n*l*f)*P,e[4]=M*P,e[5]=(d*m*s-v*p*s+v*r*f-t*m*f-d*r*u+t*p*u)*P,e[6]=(v*l*s-a*m*s-v*r*c+t*m*c+a*r*u-t*l*u)*P,e[7]=(a*p*s-d*l*s+d*r*c-t*p*c-a*r*f+t*l*f)*P,e[8]=T*P,e[9]=(v*h*s-d*S*s-v*n*f+t*S*f+d*n*u-t*h*u)*P,e[10]=(a*S*s-v*o*s+v*n*c-t*S*c-a*n*u+t*o*u)*P,e[11]=(d*o*s-a*h*s-d*n*c+t*h*c+a*n*f-t*o*f)*P,e[12]=A*P,e[13]=(d*S*r-v*h*r+v*n*p-t*S*p-d*n*m+t*h*m)*P,e[14]=(v*o*r-a*S*r-v*n*l+t*S*l+a*n*m-t*o*m)*P,e[15]=(a*h*r-d*o*r+d*n*l-t*h*l-a*n*p+t*o*p)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,h=o+o,p=s*c,f=s*d,v=s*h,S=a*d,m=a*h,u=o*h,E=l*c,M=l*d,T=l*h,A=n.x,R=n.y,P=n.z;return r[0]=(1-(S+u))*A,r[1]=(f+T)*A,r[2]=(v-M)*A,r[3]=0,r[4]=(f-T)*R,r[5]=(1-(p+u))*R,r[6]=(m+E)*R,r[7]=0,r[8]=(v+M)*P,r[9]=(m-E)*P,r[10]=(1-(p+S))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=mi.set(r[0],r[1],r[2]).length();const a=mi.set(r[4],r[5],r[6]).length(),o=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),en.copy(this);const c=1/s,d=1/a,h=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=d,en.elements[5]*=d,en.elements[6]*=d,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=cn,l=!1){const c=this.elements,d=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r);let v,S;if(l)v=s/(a-s),S=a*s/(a-s);else if(o===cn)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Wr)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=cn,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-r),p=-(t+e)/(t-e),f=-(n+r)/(n-r);let v,S;if(l)v=1/(a-s),S=a/(a-s);else if(o===cn)v=-2/(a-s),S=-(a+s)/(a-s);else if(o===Wr)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new k,en=new Et,mu=new k(0,0,0),gu=new k(1,1,1),In=new k,Mr=new k,Gt=new k,Eo=new Et,bo=new lr;class wn{constructor(e=0,t=0,n=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bo.setFromEuler(this),this.setFromQuaternion(bo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vu=0;const To=new k,gi=new lr,_n=new Et,yr=new k,Hi=new k,_u=new k,xu=new lr,Ao=new k(1,0,0),wo=new k(0,1,0),Co=new k(0,0,1),Ro={type:"added"},Su={type:"removed"},vi={type:"childadded",child:null},gs={type:"childremoved",child:null};class $t extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new k,t=new wn,n=new lr,r=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ge}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Ao,e)}rotateY(e){return this.rotateOnAxis(wo,e)}rotateZ(e){return this.rotateOnAxis(Co,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ao,e)}translateY(e){return this.translateOnAxis(wo,e)}translateZ(e){return this.translateOnAxis(Co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yr.copy(e):yr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Hi,yr,this.up):_n.lookAt(yr,Hi,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(_n),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ro),vi.child=e,this.dispatchEvent(vi),vi.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Su),gs.child=e,this.dispatchEvent(gs),gs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ro),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,_u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),p=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}$t.DEFAULT_UP=new k(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new k,xn=new k,vs=new k,Sn=new k,_i=new k,xi=new k,Po=new k,_s=new k,xs=new k,Ss=new k,Ms=new it,ys=new it,Es=new it;class nn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){tn.subVectors(r,t),xn.subVectors(n,t),vs.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(xn),l=tn.dot(vs),c=xn.dot(xn),d=xn.dot(vs),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,f=(c*l-o*d)*p,v=(a*d-o*l)*p;return s.set(1-f-v,v,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ms.setScalar(0),ys.setScalar(0),Es.setScalar(0),Ms.fromBufferAttribute(e,t),ys.fromBufferAttribute(e,n),Es.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ms,s.x),a.addScaledVector(ys,s.y),a.addScaledVector(Es,s.z),a}static isFrontFacing(e,t,n,r){return tn.subVectors(n,t),xn.subVectors(e,t),tn.cross(xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;_i.subVectors(r,n),xi.subVectors(s,n),_s.subVectors(e,n);const l=_i.dot(_s),c=xi.dot(_s);if(l<=0&&c<=0)return t.copy(n);xs.subVectors(e,r);const d=_i.dot(xs),h=xi.dot(xs);if(d>=0&&h<=d)return t.copy(r);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(_i,a);Ss.subVectors(e,s);const f=_i.dot(Ss),v=xi.dot(Ss);if(v>=0&&f<=v)return t.copy(s);const S=f*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(xi,o);const m=d*v-f*h;if(m<=0&&h-d>=0&&f-v>=0)return Po.subVectors(s,r),o=(h-d)/(h-d+(f-v)),t.copy(r).addScaledVector(Po,o);const u=1/(m+S+p);return a=S*u,o=p*u,t.copy(n).addScaledVector(_i,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function bs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=ja(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=bs(a,s,e+1/3),this.g=bs(a,s,e),this.b=bs(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Bl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Je.workingToColorSpace(Rt.copy(this),e),Math.round(qe(Rt.r*255,0,255))*65536+Math.round(qe(Rt.g*255,0,255))*256+Math.round(qe(Rt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Rt.copy(this),t);const n=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Nt){Je.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,r=Rt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Er);const n=Zi(Fn.h,Er.h,t),r=Zi(Fn.s,Er.s,t),s=Zi(Fn.l,Er.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new lt;lt.NAMES=Bl;let Mu=0;class Zr extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Ci,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$s,this.blendDst=Ys,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$s&&(n.blendSrc=this.blendSrc),this.blendDst!==Ys&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class eo extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new k,br=new Ce;let yu=0;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mo,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),e}}class Vl extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zl extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tn extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Eu=0;const Kt=new Et,Ts=new $t,Si=new k,Ht=new cr,Wi=new cr,At=new k;class Pn extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fl(e)?zl:Vl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Ts.lookAt(e),Ts.updateMatrix(),this.applyMatrix4(Ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Ht.min,Wi.min),Ht.expandByPoint(At),At.addVectors(Ht.max,Wi.max),Ht.expandByPoint(At)):(Ht.expandByPoint(Wi.min),Ht.expandByPoint(Wi.max))}Ht.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(At));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)At.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),At.add(Si)),r=Math.max(r,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new k,l[N]=new k;const c=new k,d=new k,h=new k,p=new Ce,f=new Ce,v=new Ce,S=new k,m=new k;function u(N,x,y){c.fromBufferAttribute(n,N),d.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),p.fromBufferAttribute(s,N),f.fromBufferAttribute(s,x),v.fromBufferAttribute(s,y),d.sub(c),h.sub(c),f.sub(p),v.sub(p);const w=1/(f.x*v.y-v.x*f.y);isFinite(w)&&(S.copy(d).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(w),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-v.x).multiplyScalar(w),o[N].add(S),o[x].add(S),o[y].add(S),l[N].add(m),l[x].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,x=E.length;N<x;++N){const y=E[N],w=y.start,O=y.count;for(let B=w,q=w+O;B<q;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new k,T=new k,A=new k,R=new k;function P(N){A.fromBufferAttribute(r,N),R.copy(A);const x=o[N];M.copy(x),M.sub(A.multiplyScalar(A.dot(x))).normalize(),T.crossVectors(R,x);const w=T.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,w)}for(let N=0,x=E.length;N<x;++N){const y=E[N],w=y.start,O=y.count;for(let B=w,q=w+O;B<q;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,d=new k,h=new k;if(e)for(let p=0,f=e.count;p<f;p+=3){const v=e.getX(p+0),S=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,p=new c.constructor(l.length*d);let f=0,v=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*d;for(let u=0;u<d;u++)p[v++]=c[f++]}return new dn(p,d,h)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const p=c[d],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let p=0,f=h.length;p<f;p++)d.push(h[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new Et,Yn=new pu,Tr=new Qa,Lo=new k,Ar=new k,wr=new k,Cr=new k,As=new k,Rr=new k,Uo=new k,Pr=new k;class sn extends $t{constructor(e=new Pn,t=new eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Rr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(As.fromBufferAttribute(h,e),a?Rr.addScaledVector(As,d):Rr.addScaledVector(As.sub(t),d))}t.add(Rr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Yn.copy(e.ray).recast(e.near),!(Tr.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Tr,Lo)===null||Yn.origin.distanceToSquared(Lo)>(e.far-e.near)**2))&&(Do.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(Do),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const m=p[v],u=a[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let T=E,A=M;T<A;T+=3){const R=o.getX(T),P=o.getX(T+1),N=o.getX(T+2);r=Dr(this,u,e,n,c,d,h,R,P,N),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=v,u=S;m<u;m+=3){const E=o.getX(m),M=o.getX(m+1),T=o.getX(m+2);r=Dr(this,a,e,n,c,d,h,E,M,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const m=p[v],u=a[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let T=E,A=M;T<A;T+=3){const R=T,P=T+1,N=T+2;r=Dr(this,u,e,n,c,d,h,R,P,N),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=v,u=S;m<u;m+=3){const E=m,M=m+1,T=m+2;r=Dr(this,a,e,n,c,d,h,E,M,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function bu(i,e,t,n,r,s,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===kn,o),l===null)return null;Pr.copy(o),Pr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pr);return c<t.near||c>t.far?null:{distance:c,point:Pr.clone(),object:i}}function Dr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ar),i.getVertexPosition(l,wr),i.getVertexPosition(c,Cr);const d=bu(i,e,t,n,Ar,wr,Cr,Uo);if(d){const h=new k;nn.getBarycoord(Uo,Ar,wr,Cr,h),r&&(d.uv=nn.getInterpolatedAttribute(r,o,l,c,h,new Ce)),s&&(d.uv1=nn.getInterpolatedAttribute(s,o,l,c,h,new Ce)),a&&(d.normal=nn.getInterpolatedAttribute(a,o,l,c,h,new k),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new k,materialIndex:0};nn.getNormal(Ar,wr,Cr,p.normal),d.face=p,d.barycoord=h}return d}class ur extends Pn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let p=0,f=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(d,3)),this.setAttribute("uv",new Tn(h,2));function v(S,m,u,E,M,T,A,R,P,N,x){const y=T/P,w=A/N,O=T/2,B=A/2,q=R/2,X=P+1,$=N+1;let z=0,K=0;const ae=new k;for(let ne=0;ne<$;ne++){const he=ne*w-B;for(let Ae=0;Ae<X;Ae++){const De=Ae*y-O;ae[S]=De*E,ae[m]=he*M,ae[u]=q,c.push(ae.x,ae.y,ae.z),ae[S]=0,ae[m]=0,ae[u]=R>0?1:-1,d.push(ae.x,ae.y,ae.z),h.push(Ae/P),h.push(1-ne/N),z+=1}}for(let ne=0;ne<N;ne++)for(let he=0;he<P;he++){const Ae=p+he+X*ne,De=p+he+X*(ne+1),ke=p+(he+1)+X*(ne+1),Le=p+(he+1)+X*ne;l.push(Ae,De,Le),l.push(De,ke,Le),K+=6}o.addGroup(f,K,x),f+=K,p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Ii(i[t]);for(const r in n)e[r]=n[r]}return e}function Tu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Au={clone:Ii,merge:Lt};var wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gt extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Tu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gl extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new k,Io=new Ce,Fo=new Ce;class Zt extends Gl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,Io,Fo),t.subVectors(Fo,Io)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mi=-90,yi=1;class Ru extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Mi,yi,e,t);r.layers=this.layers,this.add(r);const s=new Zt(Mi,yi,e,t);s.layers=this.layers,this.add(s);const a=new Zt(Mi,yi,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Mi,yi,e,t);o.layers=this.layers,this.add(o);const l=new Zt(Mi,yi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Mi,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(h,p,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Hl extends wt{constructor(e=[],t=ii,n,r,s,a,o,l,c,d){super(e,t,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wl extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Hl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ur(5,5,5),s=new gt({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:En});s.uniforms.tEquirect.value=t;const a=new sn(r,s),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=vt),new Ru(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Lr extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pu={type:"move"};class ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),f=.02,v=.005;c.inputState.pinching&&p>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Lr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Xl extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Du extends wt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=pt,d=pt,h,p){super(null,a,o,l,c,d,r,s,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cs=new k,Lu=new k,Uu=new Ge;class jn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Cs.subVectors(n,t).cross(Lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Cs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uu.getNormalMatrix(e),r=this.coplanarPoint(Cs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new Qa,Iu=new Ce(.5,.5),Ur=new k;class $l{constructor(e=new jn,t=new jn,n=new jn,r=new jn,s=new jn,a=new jn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],p=s[6],f=s[7],v=s[8],S=s[9],m=s[10],u=s[11],E=s[12],M=s[13],T=s[14],A=s[15];if(r[0].setComponents(c-a,f-d,u-v,A-E).normalize(),r[1].setComponents(c+a,f+d,u+v,A+E).normalize(),r[2].setComponents(c+o,f+h,u+S,A+M).normalize(),r[3].setComponents(c-o,f-h,u-S,A-M).normalize(),n)r[4].setComponents(l,p,m,T).normalize(),r[5].setComponents(c-l,f-p,u-m,A-T).normalize();else if(r[4].setComponents(c-l,f-p,u-m,A-T).normalize(),t===cn)r[5].setComponents(c+l,f+p,u+m,A+T).normalize();else if(t===Wr)r[5].setComponents(l,p,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){qn.center.set(0,0,0);const t=Iu.distanceTo(e.center);return qn.radius=.7071067811865476+t,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ur.x=r.normal.x>0?e.max.x:e.min.x,Ur.y=r.normal.y>0?e.max.y:e.min.y,Ur.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fu extends wt{constructor(e,t,n,r,s=vt,a=vt,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const d=this;function h(){d.needsUpdate=!0,d._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Nu extends wt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rr extends wt{constructor(e,t,n=fn,r,s,a,o=pt,l=pt,c,d=An,h=1){if(d!==An&&d!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ja(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ou extends rr{constructor(e,t=fn,n=ii,r,s,a=pt,o=pt,l,c=An){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yl extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fi extends Pn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,h=e/o,p=t/l,f=[],v=[],S=[],m=[];for(let u=0;u<d;u++){const E=u*p-a;for(let M=0;M<c;M++){const T=M*h-s;v.push(T,-E,0),S.push(0,0,1),m.push(M/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){const M=E+c*u,T=E+c*(u+1),A=E+1+c*(u+1),R=E+1+c*u;f.push(M,T,R),f.push(T,A,R)}this.setIndex(f),this.setAttribute("position",new Tn(v,3)),this.setAttribute("normal",new Tn(S,3)),this.setAttribute("uv",new Tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bu extends gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vu extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zu extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ku{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,p=c.length;h<p;h+=2){const f=c[h],v=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Gu=new ku;class to{constructor(e){this.manager=e!==void 0?e:Gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}to.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei=new WeakMap;class Hu extends to{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Rs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Ei.get(a);h===void 0&&(h=[],Ei.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=tr("img");function l(){d(),t&&t(this);const h=Ei.get(this)||[];for(let p=0;p<h.length;p++){const f=h[p];f.onLoad&&f.onLoad(this)}Ei.delete(this),s.manager.itemEnd(e)}function c(h){d(),r&&r(h),Rs.remove(`image:${e}`);const p=Ei.get(this)||[];for(let f=0;f<p.length;f++){const v=p[f];v.onError&&v.onError(h)}Ei.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Rs.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Wu extends to{constructor(e){super(e)}load(e,t,n,r){const s=new wt,a=new Hu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class no extends Gl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xu extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $u{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function No(i,e,t,n){const r=Yu(n);switch(t){case Ll:return i*e;case Il:return i*e/r.components*r.byteLength;case $a:return i*e/r.components*r.byteLength;case Li:return i*e*2/r.components*r.byteLength;case Ya:return i*e*2/r.components*r.byteLength;case Ul:return i*e*3/r.components*r.byteLength;case jt:return i*e*4/r.components*r.byteLength;case qa:return i*e*4/r.components*r.byteLength;case Br:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:case la:return Math.max(i,16)*Math.max(e,8)/4;case sa:case oa:return Math.max(i,8)*Math.max(e,8)/2;case ca:case ua:case ha:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case pa:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pa:case Da:case La:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ua:case Ia:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fa:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yu(i){switch(i){case Xt:case Cl:return{byteLength:1,components:1};case Qi:case Rl:case pn:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case fn:case Ha:case ln:return{byteLength:4,components:1};case Pl:case Dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);function ql(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function qu(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,v)=>f.start-v.start);let p=0;for(let f=1;f<h.length;f++){const v=h[p],S=h[f];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++p,h[p]=S)}h.length=p+1;for(let f=0,v=h.length;f<v;f++){const S=h[f];i.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ld=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_d=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Td="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,th=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ih=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ah=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ch=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_h=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Th=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ah=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ch=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ph=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ih=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_f=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Ku,alphahash_pars_fragment:Zu,alphamap_fragment:ju,alphamap_pars_fragment:Ju,alphatest_fragment:Qu,alphatest_pars_fragment:ed,aomap_fragment:td,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:rd,begin_vertex:sd,beginnormal_vertex:ad,bsdfs:od,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:hd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:vd,common:_d,cube_uv_reflection_fragment:xd,defaultnormal_vertex:Sd,displacementmap_pars_vertex:Md,displacementmap_vertex:yd,emissivemap_fragment:Ed,emissivemap_pars_fragment:bd,colorspace_fragment:Td,colorspace_pars_fragment:Ad,envmap_fragment:wd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Rd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:kd,envmap_vertex:Dd,fog_vertex:Ld,fog_pars_vertex:Ud,fog_fragment:Id,fog_pars_fragment:Fd,gradientmap_pars_fragment:Nd,lightmap_pars_fragment:Od,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:Vd,lights_pars_begin:zd,lights_toon_fragment:Gd,lights_toon_pars_fragment:Hd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:$d,lights_physical_pars_fragment:Yd,lights_fragment_begin:qd,lights_fragment_maps:Kd,lights_fragment_end:Zd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:Jd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:eh,map_fragment:th,map_pars_fragment:nh,map_particle_fragment:ih,map_particle_pars_fragment:rh,metalnessmap_fragment:sh,metalnessmap_pars_fragment:ah,morphinstance_vertex:oh,morphcolor_vertex:lh,morphnormal_vertex:ch,morphtarget_pars_vertex:uh,morphtarget_vertex:dh,normal_fragment_begin:hh,normal_fragment_maps:fh,normal_pars_fragment:ph,normal_pars_vertex:mh,normal_vertex:gh,normalmap_pars_fragment:vh,clearcoat_normal_fragment_begin:_h,clearcoat_normal_fragment_maps:xh,clearcoat_pars_fragment:Sh,iridescence_pars_fragment:Mh,opaque_fragment:yh,packing:Eh,premultiplied_alpha_fragment:bh,project_vertex:Th,dithering_fragment:Ah,dithering_pars_fragment:wh,roughnessmap_fragment:Ch,roughnessmap_pars_fragment:Rh,shadowmap_pars_fragment:Ph,shadowmap_pars_vertex:Dh,shadowmap_vertex:Lh,shadowmask_pars_fragment:Uh,skinbase_vertex:Ih,skinning_pars_vertex:Fh,skinning_vertex:Nh,skinnormal_vertex:Oh,specularmap_fragment:Bh,specularmap_pars_fragment:Vh,tonemapping_fragment:zh,tonemapping_pars_fragment:kh,transmission_fragment:Gh,transmission_pars_fragment:Hh,uv_pars_fragment:Wh,uv_pars_vertex:Xh,uv_vertex:$h,worldpos_vertex:Yh,background_vert:qh,background_frag:Kh,backgroundCube_vert:Zh,backgroundCube_frag:jh,cube_vert:Jh,cube_frag:Qh,depth_vert:ef,depth_frag:tf,distance_vert:nf,distance_frag:rf,equirect_vert:sf,equirect_frag:af,linedashed_vert:of,linedashed_frag:lf,meshbasic_vert:cf,meshbasic_frag:uf,meshlambert_vert:df,meshlambert_frag:hf,meshmatcap_vert:ff,meshmatcap_frag:pf,meshnormal_vert:mf,meshnormal_frag:gf,meshphong_vert:vf,meshphong_frag:_f,meshphysical_vert:xf,meshphysical_frag:Sf,meshtoon_vert:Mf,meshtoon_frag:yf,points_vert:Ef,points_frag:bf,shadow_vert:Tf,shadow_frag:Af,sprite_vert:wf,sprite_frag:Cf},fe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},on={basic:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new lt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Lt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Lt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new lt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Lt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Lt([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Lt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Lt([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Lt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Lt([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Lt([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Lt([fe.lights,fe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};on.physical={uniforms:Lt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ir={r:0,b:0,g:0},Kn=new wn,Rf=new Et;function Pf(i,e,t,n,r,s,a){const o=new lt(0);let l=s===!0?0:1,c,d,h=null,p=0,f=null;function v(M){let T=M.isScene===!0?M.background:null;return T&&T.isTexture&&(T=(M.backgroundBlurriness>0?t:e).get(T)),T}function S(M){let T=!1;const A=v(M);A===null?u(o,l):A&&A.isColor&&(u(A,1),T=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,T){const A=v(T);A&&(A.isCubeTexture||A.mapping===Kr)?(d===void 0&&(d=new sn(new ur(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:Ii(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Kn.copy(T.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Rf.makeRotationFromEuler(Kn)),d.material.toneMapped=Je.getTransfer(A.colorSpace)!==at,(h!==A||p!==A.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,h=A,p=A.version,f=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new sn(new Fi(2,2),new gt({name:"BackgroundMaterial",uniforms:Ii(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Je.getTransfer(A.colorSpace)!==at,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||p!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,p=A.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function u(M,T){M.getRGB(Ir,kl(i)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,T,a)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),l=T,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,u(o,l)},render:S,addToRenderList:m,dispose:E}}function Df(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(y,w,O,B,q){let X=!1;const $=h(B,O,w);s!==$&&(s=$,c(s.object)),X=f(y,B,O,q),X&&v(y,B,O,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,T(y,w,O,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function h(y,w,O){const B=O.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let X=q[w.id];X===void 0&&(X={},q[w.id]=X);let $=X[B];return $===void 0&&($=p(l()),X[B]=$),$}function p(y){const w=[],O=[],B=[];for(let q=0;q<t;q++)w[q]=0,O[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:B,object:y,attributes:{},index:null}}function f(y,w,O,B){const q=s.attributes,X=w.attributes;let $=0;const z=O.getAttributes();for(const K in z)if(z[K].location>=0){const ne=q[K];let he=X[K];if(he===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;$++}return s.attributesNum!==$||s.index!==B}function v(y,w,O,B){const q={},X=w.attributes;let $=0;const z=O.getAttributes();for(const K in z)if(z[K].location>=0){let ne=X[K];ne===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor));const he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),q[K]=he,$++}s.attributes=q,s.attributesNum=$,s.index=B}function S(){const y=s.newAttributes;for(let w=0,O=y.length;w<O;w++)y[w]=0}function m(y){u(y,0)}function u(y,w){const O=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;O[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),q[y]!==w&&(i.vertexAttribDivisor(y,w),q[y]=w)}function E(){const y=s.newAttributes,w=s.enabledAttributes;for(let O=0,B=w.length;O<B;O++)w[O]!==y[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function M(y,w,O,B,q,X,$){$===!0?i.vertexAttribIPointer(y,w,O,q,X):i.vertexAttribPointer(y,w,O,B,q,X)}function T(y,w,O,B){S();const q=B.attributes,X=O.getAttributes(),$=w.defaultAttributeValues;for(const z in X){const K=X[z];if(K.location>=0){let ae=q[z];if(ae===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){const ne=ae.normalized,he=ae.itemSize,Ae=e.get(ae);if(Ae===void 0)continue;const De=Ae.buffer,ke=Ae.type,Le=Ae.bytesPerElement,W=ke===i.INT||ke===i.UNSIGNED_INT||ae.gpuType===Ha;if(ae.isInterleavedBufferAttribute){const Q=ae.data,ve=Q.stride,Oe=ae.offset;if(Q.isInstancedInterleavedBuffer){for(let se=0;se<K.locationSize;se++)u(K.location+se,Q.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let se=0;se<K.locationSize;se++)m(K.location+se);i.bindBuffer(i.ARRAY_BUFFER,De);for(let se=0;se<K.locationSize;se++)M(K.location+se,he/K.locationSize,ke,ne,ve*Le,(Oe+he/K.locationSize*se)*Le,W)}else{if(ae.isInstancedBufferAttribute){for(let Q=0;Q<K.locationSize;Q++)u(K.location+Q,ae.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Q=0;Q<K.locationSize;Q++)m(K.location+Q);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Q=0;Q<K.locationSize;Q++)M(K.location+Q,he/K.locationSize,ke,ne,he*Le,he/K.locationSize*Q*Le,W)}}else if($!==void 0){const ne=$[z];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(K.location,ne);break;case 3:i.vertexAttrib3fv(K.location,ne);break;case 4:i.vertexAttrib4fv(K.location,ne);break;default:i.vertexAttrib1fv(K.location,ne)}}}}E()}function A(){N();for(const y in n){const w=n[y];for(const O in w){const B=w[O];for(const q in B)d(B[q].object),delete B[q];delete w[O]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const w=n[y.id];for(const O in w){const B=w[O];for(const q in B)d(B[q].object),delete B[q];delete w[O]}delete n[y.id]}function P(y){for(const w in n){const O=n[w];if(O[y.id]===void 0)continue;const B=O[y.id];for(const q in B)d(B[q].object),delete B[q];delete O[y.id]}}function N(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function Lf(i,e,t){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let v=0;v<h;v++)f+=d[v];t.update(f,n,1)}function l(c,d,h,p){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],d[v],p[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,h);let v=0;for(let S=0;S<h;S++)v+=d[S]*p[S];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Uf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==jt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const N=P===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Xt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ln&&!N)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Be("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:T,maxSamples:A,samples:R}}function If(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new jn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||r;return r=p,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=d(h,p,0)},this.setState=function(h,p,f){const v=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!r||v===null||v.length===0||s&&!m)s?d(null):c();else{const E=s?0:n,M=E*4;let T=u.clippingState||null;l.value=T,T=d(v,p,M,f);for(let A=0;A!==M;++A)T[A]=t[A];u.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,p,f,v){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const u=f+S*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,T=f;M!==S;++M,T+=4)a.copy(h[M]).applyMatrix4(E,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Ff(i){let e=new WeakMap;function t(a,o){return o===ta?a.mapping=ii:o===na&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ta||o===na)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wl(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const zn=4,Oo=[.125,.215,.35,.446,.526,.582],Qn=20,Nf=256,Xi=new no,Bo=new lt;let Ps=null,Ds=0,Ls=0,Us=!1;const Of=new k;class Vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Of}=s;Ps=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Ls=this._renderer.getActiveMipmapLevel(),Us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ps,Ds,Ls),this._renderer.xr.enabled=Us,e.scissorTest=!1,bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ps=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Ls=this._renderer.getActiveMipmapLevel(),Us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:pn,format:jt,colorSpace:Ui,depthBuffer:!1},r=zo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bf(s)),this._blurMaterial=zf(s,e,t),this._ggxMaterial=Vf(s,e,t)}return r}_compileMaterial(e){const t=new sn(new Pn,e);this._renderer.compile(t,Xi)}_sceneToCubeUV(e,t,n,r,s){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(Bo),h.toneMapping=un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sn(new ur,new eo({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let u=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,u=!0):(m.color.copy(Bo),u=!0);for(let M=0;M<6;M++){const T=M%3;T===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):T===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));const A=this._cubeSize;bi(r,T*A,M>2?A:0,A,A),h.setRenderTarget(r),u&&h.render(S,l),h.render(e,l)}h.toneMapping=f,h.autoClear=p,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ii||e.mapping===Di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ko());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;bi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Xi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),p=0+c*1.25,f=h*p,{_lodMax:v}=this,S=this._sizeLods[n],m=3*S*(n>v-zn?n-v+zn:0),u=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=v-t,bi(s,m,u,3*S,2*S),r.setRenderTarget(s),r.render(o,Xi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,bi(e,m,u,3*S,2*S),r.setRenderTarget(e),r.render(o,Xi)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const p=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Qn-1),S=s/v,m=isFinite(s)?1+Math.floor(d*S):Qn;m>Qn&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const u=[];let E=0;for(let P=0;P<Qn;++P){const N=P/S,x=Math.exp(-N*N/2);u.push(x),P===0?E+=x:P<m&&(E+=2*x)}for(let P=0;P<u.length;P++)u[P]=u[P]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:M}=this;p.dTheta.value=v,p.mipInt.value=M-n;const T=this._sizeLods[r],A=3*T*(r>M-zn?r-M+zn:0),R=4*(this._cubeSize-T);bi(t,A,R,3*T,2*T),l.setRenderTarget(t),l.render(h,Xi)}}function Bf(i){const e=[],t=[],n=[];let r=i;const s=i-zn+1+Oo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-zn?l=Oo[a-i+zn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,v=6,S=3,m=2,u=1,E=new Float32Array(S*v*f),M=new Float32Array(m*v*f),T=new Float32Array(u*v*f);for(let R=0;R<f;R++){const P=R%3*2/3-1,N=R>2?0:-1,x=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];E.set(x,S*v*R),M.set(p,m*v*R);const y=[R,R,R,R,R,R];T.set(y,u*v*R)}const A=new Pn;A.setAttribute("position",new dn(E,S)),A.setAttribute("uv",new dn(M,m)),A.setAttribute("faceIndex",new dn(T,u)),n.push(new sn(A,null)),r>zn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function zo(i,e,t){const n=new rn(i,e,t);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Vf(i,e,t){return new gt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function zf(i,e,t){const n=new Float32Array(Qn),r=new k(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ko(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Go(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function jr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ta||l===na,d=l===ii||l===Di;if(c||d){let h=e.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Vo(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&r(f)?(t===null&&(t=new Vo(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Gf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&nr("WebGLRenderer: "+n+" extension not supported."),r}}}function Hf(i,e,t,n){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete r[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const f in p)e.update(p[f],i.ARRAY_BUFFER)}function c(h){const p=[],f=h.index,v=h.attributes.position;let S=0;if(f!==null){const E=f.array;S=f.version;for(let M=0,T=E.length;M<T;M+=3){const A=E[M+0],R=E[M+1],P=E[M+2];p.push(A,R,R,P,P,A)}}else if(v!==void 0){const E=v.array;S=v.version;for(let M=0,T=E.length/3-1;M<T;M+=3){const A=M+0,R=M+1,P=M+2;p.push(A,R,R,P,P,A)}}else return;const m=new(Fl(p)?zl:Vl)(p,1);m.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const p=s.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Wf(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,s,p*a),t.update(f,n,1)}function c(p,f,v){v!==0&&(i.drawElementsInstanced(n,f,s,p*a,v),t.update(f,n,v))}function d(p,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,v);let m=0;for(let u=0;u<v;u++)m+=f[u];t.update(m,n,1)}function h(p,f,v,S){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/a,f[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,S,0,v);let u=0;for(let E=0;E<v;E++)u+=f[E]*S[E];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Xf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function $f(i,e,t){const n=new WeakMap,r=new it;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let y=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;v===!0&&(T=1),S===!0&&(T=2),m===!0&&(T=3);let A=o.attributes.position.count*T,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*R*4*h),N=new Nl(P,A,R,h);N.type=ln,N.needsUpdate=!0;const x=T*4;for(let w=0;w<h;w++){const O=u[w],B=E[w],q=M[w],X=A*R*4*w;for(let $=0;$<O.count;$++){const z=$*x;v===!0&&(r.fromBufferAttribute(O,$),P[X+z+0]=r.x,P[X+z+1]=r.y,P[X+z+2]=r.z,P[X+z+3]=0),S===!0&&(r.fromBufferAttribute(B,$),P[X+z+4]=r.x,P[X+z+5]=r.y,P[X+z+6]=r.z,P[X+z+7]=0),m===!0&&(r.fromBufferAttribute(q,$),P[X+z+8]=r.x,P[X+z+9]=r.y,P[X+z+10]=r.z,P[X+z+11]=q.itemSize===4?r.w:1)}}p={count:h,texture:N,size:new Ce(A,R)},n.set(o,p),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const S=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Yf(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const qf={[Ml]:"LINEAR_TONE_MAPPING",[yl]:"REINHARD_TONE_MAPPING",[El]:"CINEON_TONE_MAPPING",[Ga]:"ACES_FILMIC_TONE_MAPPING",[Tl]:"AGX_TONE_MAPPING",[Al]:"NEUTRAL_TONE_MAPPING",[bl]:"CUSTOM_TONE_MAPPING"};function Kf(i,e,t,n,r){const s=new rn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new rn(e,t,{type:pn,depthBuffer:!1,stencilBuffer:!1}),o=new Pn;o.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Tn([0,2,0,0,2,0],2));const l=new Bu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new sn(o,l),d=new no(-1,1,1,-1,0,1);let h=null,p=null,f=!1,v,S=null,m=[],u=!1;this.setSize=function(E,M){s.setSize(E,M),a.setSize(E,M);for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(E,M)}},this.setEffects=function(E){m=E,u=m.length>0&&m[0].isRenderPass===!0;const M=s.width,T=s.height;for(let A=0;A<m.length;A++){const R=m[A];R.setSize&&R.setSize(M,T)}},this.begin=function(E,M){if(f||E.toneMapping===un&&m.length===0)return!1;if(S=M,M!==null){const T=M.width,A=M.height;(s.width!==T||s.height!==A)&&this.setSize(T,A)}return u===!1&&E.setRenderTarget(s),v=E.toneMapping,E.toneMapping=un,!0},this.hasRenderPass=function(){return u},this.end=function(E,M){E.toneMapping=v,f=!0;let T=s,A=a;for(let R=0;R<m.length;R++){const P=m[R];if(P.enabled!==!1&&(P.render(E,A,T,M),P.needsSwap!==!1)){const N=T;T=A,A=N}}if(h!==E.outputColorSpace||p!==E.toneMapping){h=E.outputColorSpace,p=E.toneMapping,l.defines={},Je.getTransfer(h)===at&&(l.defines.SRGB_TRANSFER="");const R=qf[p];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,E.setRenderTarget(S),E.render(c,d),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Kl=new wt,Oa=new rr(1,1),Zl=new Nl,jl=new hu,Jl=new Hl,Ho=[],Wo=[],Xo=new Float32Array(16),$o=new Float32Array(9),Yo=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ho[r];if(s===void 0&&(s=new Float32Array(r),Ho[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jr(i,e){let t=Wo[e];t===void 0&&(t=new Int32Array(e),Wo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Yo.set(n),i.uniformMatrix2fv(this.addr,!1,Yo),Tt(t,n)}}function tp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;$o.set(n),i.uniformMatrix3fv(this.addr,!1,$o),Tt(t,n)}}function np(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Xo.set(n),i.uniformMatrix4fv(this.addr,!1,Xo),Tt(t,n)}}function ip(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function op(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function dp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Oa.compareFunction=t.isReversedDepthBuffer()?Za:Ka,s=Oa):s=Kl,t.setTexture2D(e||s,r)}function hp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||jl,r)}function fp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Jl,r)}function pp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zl,r)}function mp(i){switch(i){case 5126:return Zf;case 35664:return jf;case 35665:return Jf;case 35666:return Qf;case 35674:return ep;case 35675:return tp;case 35676:return np;case 5124:case 35670:return ip;case 35667:case 35671:return rp;case 35668:case 35672:return sp;case 35669:case 35673:return ap;case 5125:return op;case 36294:return lp;case 36295:return cp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return pp}}function gp(i,e){i.uniform1fv(this.addr,e)}function vp(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function _p(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function xp(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function Sp(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mp(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yp(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ep(i,e){i.uniform1iv(this.addr,e)}function bp(i,e){i.uniform2iv(this.addr,e)}function Tp(i,e){i.uniform3iv(this.addr,e)}function Ap(i,e){i.uniform4iv(this.addr,e)}function wp(i,e){i.uniform1uiv(this.addr,e)}function Cp(i,e){i.uniform2uiv(this.addr,e)}function Rp(i,e){i.uniform3uiv(this.addr,e)}function Pp(i,e){i.uniform4uiv(this.addr,e)}function Dp(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Oa:a=Kl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Lp(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||jl,s[a])}function Up(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Jl,s[a])}function Ip(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Zl,s[a])}function Fp(i){switch(i){case 5126:return gp;case 35664:return vp;case 35665:return _p;case 35666:return xp;case 35674:return Sp;case 35675:return Mp;case 35676:return yp;case 5124:case 35670:return Ep;case 35667:case 35671:return bp;case 35668:case 35672:return Tp;case 35669:case 35673:return Ap;case 5125:return wp;case 36294:return Cp;case 36295:return Rp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Lp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Ip}}class Np{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mp(t.type)}}class Op{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fp(t.type)}}class Bp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function qo(i,e){i.seq.push(e),i.map[e.id]=e}function Vp(i,e,t){const n=i.name,r=n.length;for(Is.lastIndex=0;;){const s=Is.exec(n),a=Is.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){qo(t,c===void 0?new Np(o,i,e):new Op(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Bp(o),qo(t,h)),t=h}}}class Gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Vp(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ko(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zp=37297;let kp=0;function Gp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zo=new Ge;function Hp(i){Je._getMatrix(Zo,Je.workingColorSpace,i);const e=`mat3( ${Zo.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Hr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Gp(i.getShaderSource(e),o)}else return s}function Wp(i,e){const t=Hp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Xp={[Ml]:"Linear",[yl]:"Reinhard",[El]:"Cineon",[Ga]:"ACESFilmic",[Tl]:"AgX",[Al]:"Neutral",[bl]:"Custom"};function $p(i,e){const t=Xp[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fr=new k;function Yp(){Je.getLuminanceCoefficients(Fr);const i=Fr.x.toFixed(4),e=Fr.y.toFixed(4),t=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function Kp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qi(i){return i!==""}function Jo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(jp,Qp)}const Jp=new Map;function Qp(i,e){let t=He[e];if(t===void 0){const n=Jp.get(e);if(n!==void 0)t=He[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ba(t)}const em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(i){return i.replace(em,tm)}function tm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nm={[Or]:"SHADOWMAP_TYPE_PCF",[Yi]:"SHADOWMAP_TYPE_VSM"};function im(i){return nm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rm={[ii]:"ENVMAP_TYPE_CUBE",[Di]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function sm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":rm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const am={[Di]:"ENVMAP_MODE_REFRACTION"};function om(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":am[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lm={[Sl]:"ENVMAP_BLENDING_MULTIPLY",[Dc]:"ENVMAP_BLENDING_MIX",[Lc]:"ENVMAP_BLENDING_ADD"};function cm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":lm[i.combine]||"ENVMAP_BLENDING_NONE"}function um(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=im(t),c=sm(t),d=om(t),h=cm(t),p=um(t),f=qp(t),v=Kp(s),S=r.createProgram();let m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qi).join(`
`),u.length>0&&(u+=`
`)):(m=[tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),u=[tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?He.tonemapping_pars_fragment:"",t.toneMapping!==un?$p("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Wp("linearToOutputTexel",t.outputColorSpace),Yp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),a=Ba(a),a=Jo(a,t),a=Qo(a,t),o=Ba(o),o=Jo(o,t),o=Qo(o,t),a=el(a),o=el(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=E+m+a,T=E+u+o,A=Ko(r,r.VERTEX_SHADER,M),R=Ko(r,r.FRAGMENT_SHADER,T);r.attachShader(S,A),r.attachShader(S,R),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function P(w){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(S)||"",B=r.getShaderInfoLog(A)||"",q=r.getShaderInfoLog(R)||"",X=O.trim(),$=B.trim(),z=q.trim();let K=!0,ae=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,A,R);else{const ne=jo(r,A,"vertex"),he=jo(r,R,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+X+`
`+ne+`
`+he)}else X!==""?Be("WebGLProgram: Program Info Log:",X):($===""||z==="")&&(ae=!1);ae&&(w.diagnostics={runnable:K,programLog:X,vertexShader:{log:$,prefix:m},fragmentShader:{log:z,prefix:u}})}r.deleteShader(A),r.deleteShader(R),N=new Gr(r,S),x=Zp(r,S)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,zp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=R,this}let hm=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pm(e),t.set(e,n)),n}}class pm{constructor(e){this.id=hm++,this.code=e,this.usedTimes=0}}function mm(i,e,t,n,r,s,a){const o=new Ol,l=new fm,c=new Set,d=[],h=new Map,p=r.logarithmicDepthBuffer;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,w,O,B){const q=O.fog,X=B.geometry,$=x.isMeshStandardMaterial?O.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),K=z&&z.mapping===Kr?z.image.height:null,ae=v[x.type];x.precision!==null&&(f=r.getMaxPrecision(x.precision),f!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ne=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,he=ne!==void 0?ne.length:0;let Ae=0;X.morphAttributes.position!==void 0&&(Ae=1),X.morphAttributes.normal!==void 0&&(Ae=2),X.morphAttributes.color!==void 0&&(Ae=3);let De,ke,Le,W;if(ae){const Ye=on[ae];De=Ye.vertexShader,ke=Ye.fragmentShader}else De=x.vertexShader,ke=x.fragmentShader,l.update(x),Le=l.getVertexShaderID(x),W=l.getFragmentShaderID(x);const Q=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Oe=B.isInstancedMesh===!0,se=B.isBatchedMesh===!0,Xe=!!x.map,mt=!!x.matcap,$e=!!z,Ze=!!x.aoMap,rt=!!x.lightMap,Ve=!!x.bumpMap,je=!!x.normalMap,C=!!x.displacementMap,_t=!!x.emissiveMap,Qe=!!x.metalnessMap,nt=!!x.roughnessMap,be=x.anisotropy>0,b=x.clearcoat>0,g=x.dispersion>0,U=x.iridescence>0,Y=x.sheen>0,j=x.transmission>0,H=be&&!!x.anisotropyMap,Te=b&&!!x.clearcoatMap,oe=b&&!!x.clearcoatNormalMap,ye=b&&!!x.clearcoatRoughnessMap,Ue=U&&!!x.iridescenceMap,te=U&&!!x.iridescenceThicknessMap,ue=Y&&!!x.sheenColorMap,_e=Y&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,le=!!x.specularColorMap,ze=!!x.specularIntensityMap,L=j&&!!x.transmissionMap,pe=j&&!!x.thicknessMap,ie=!!x.gradientMap,ge=!!x.alphaMap,ee=x.alphaTest>0,Z=!!x.alphaHash,ce=!!x.extensions;let Ne=un;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const ct={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:ke,defines:x.defines,customVertexShaderID:Le,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:se,batchingColor:se&&B._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ui,alphaToCoverage:!!x.alphaToCoverage,map:Xe,matcap:mt,envMap:$e,envMapMode:$e&&z.mapping,envMapCubeUVHeight:K,aoMap:Ze,lightMap:rt,bumpMap:Ve,normalMap:je,displacementMap:C,emissiveMap:_t,normalMapObjectSpace:je&&x.normalMapType===Nc,normalMapTangentSpace:je&&x.normalMapType===Fc,metalnessMap:Qe,roughnessMap:nt,anisotropy:be,anisotropyMap:H,clearcoat:b,clearcoatMap:Te,clearcoatNormalMap:oe,clearcoatRoughnessMap:ye,dispersion:g,iridescence:U,iridescenceMap:Ue,iridescenceThicknessMap:te,sheen:Y,sheenColorMap:ue,sheenRoughnessMap:_e,specularMap:Ee,specularColorMap:le,specularIntensityMap:ze,transmission:j,transmissionMap:L,thicknessMap:pe,gradientMap:ie,opaque:x.transparent===!1&&x.blending===Ci&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:Z,combine:x.combine,mapUv:Xe&&S(x.map.channel),aoMapUv:Ze&&S(x.aoMap.channel),lightMapUv:rt&&S(x.lightMap.channel),bumpMapUv:Ve&&S(x.bumpMap.channel),normalMapUv:je&&S(x.normalMap.channel),displacementMapUv:C&&S(x.displacementMap.channel),emissiveMapUv:_t&&S(x.emissiveMap.channel),metalnessMapUv:Qe&&S(x.metalnessMap.channel),roughnessMapUv:nt&&S(x.roughnessMap.channel),anisotropyMapUv:H&&S(x.anisotropyMap.channel),clearcoatMapUv:Te&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&S(x.sheenRoughnessMap.channel),specularMapUv:Ee&&S(x.specularMap.channel),specularColorMapUv:le&&S(x.specularColorMap.channel),specularIntensityMapUv:ze&&S(x.specularIntensityMap.channel),transmissionMapUv:L&&S(x.transmissionMap.channel),thicknessMapUv:pe&&S(x.thicknessMap.channel),alphaMapUv:ge&&S(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(je||be),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Xe||ge),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:_t&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yn,flipSided:x.side===Bt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function u(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const w in x.defines)y.push(w),y.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(E(y,x),M(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function E(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function T(x){const y=v[x.type];let w;if(y){const O=on[y];w=Au.clone(O.uniforms)}else w=x.uniforms;return w}function A(x,y){let w=h.get(y);return w!==void 0?++w.usedTimes:(w=new dm(i,y,x,s),d.push(w),h.set(y,w)),w}function R(x){if(--x.usedTimes===0){const y=d.indexOf(x);d[y]=d[d.length-1],d.pop(),h.delete(x.cacheKey),x.destroy()}}function P(x){l.remove(x)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:T,acquireProgram:A,releaseProgram:R,releaseShaderCache:P,programs:d,dispose:N}}function gm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function vm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function il(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,p,f,v,S,m){let u=i[e];return u===void 0?(u={id:h.id,object:h,geometry:p,material:f,groupOrder:v,renderOrder:h.renderOrder,z:S,group:m},i[e]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=f,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=S,u.group=m),e++,u}function o(h,p,f,v,S,m){const u=a(h,p,f,v,S,m);f.transmission>0?n.push(u):f.transparent===!0?r.push(u):t.push(u)}function l(h,p,f,v,S,m){const u=a(h,p,f,v,S,m);f.transmission>0?n.unshift(u):f.transparent===!0?r.unshift(u):t.unshift(u)}function c(h,p){t.length>1&&t.sort(h||vm),n.length>1&&n.sort(p||nl),r.length>1&&r.sort(p||nl)}function d(){for(let h=e,p=i.length;h<p;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function _m(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new il,i.set(n,[a])):r>=s.length?(a=new il,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function xm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new lt};break;case"SpotLight":t={position:new k,direction:new k,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Sm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Mm=0;function ym(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Em(i){const e=new xm,t=Sm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const r=new k,s=new Et,a=new Et;function o(c){let d=0,h=0,p=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,v=0,S=0,m=0,u=0,E=0,M=0,T=0,A=0,R=0,P=0;c.sort(ym);for(let x=0,y=c.length;x<y;x++){const w=c[x],O=w.color,B=w.intensity,q=w.distance;let X=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Li?X=w.shadow.map.texture:X=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)d+=O.r*B,h+=O.g*B,p+=O.b*B;else if(w.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(w.sh.coefficients[$],B);P++}else if(w.isDirectionalLight){const $=e.get(w);if($.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const z=w.shadow,K=t.get(w);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=w.shadow.matrix,E++}n.directional[f]=$,f++}else if(w.isSpotLight){const $=e.get(w);$.position.setFromMatrixPosition(w.matrixWorld),$.color.copy(O).multiplyScalar(B),$.distance=q,$.coneCos=Math.cos(w.angle),$.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),$.decay=w.decay,n.spot[S]=$;const z=w.shadow;if(w.map&&(n.spotLightMap[A]=w.map,A++,z.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[S]=z.matrix,w.castShadow){const K=t.get(w);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,n.spotShadow[S]=K,n.spotShadowMap[S]=X,T++}S++}else if(w.isRectAreaLight){const $=e.get(w);$.color.copy(O).multiplyScalar(B),$.halfWidth.set(w.width*.5,0,0),$.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=$,m++}else if(w.isPointLight){const $=e.get(w);if($.color.copy(w.color).multiplyScalar(w.intensity),$.distance=w.distance,$.decay=w.decay,w.castShadow){const z=w.shadow,K=t.get(w);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,n.pointShadow[v]=K,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=w.shadow.matrix,M++}n.point[v]=$,v++}else if(w.isHemisphereLight){const $=e.get(w);$.skyColor.copy(w.color).multiplyScalar(B),$.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[u]=$,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==f||N.pointLength!==v||N.spotLength!==S||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==E||N.numPointShadows!==M||N.numSpotShadows!==T||N.numSpotMaps!==A||N.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=S,n.rectArea.length=m,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,N.directionalLength=f,N.pointLength=v,N.spotLength=S,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=E,N.numPointShadows=M,N.numSpotShadows=T,N.numSpotMaps=A,N.numLightProbes=P,n.version=Mm++)}function l(c,d){let h=0,p=0,f=0,v=0,S=0;const m=d.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){const M=c[u];if(M.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),h++}else if(M.isSpotLight){const T=n.spot[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const T=n.hemi[S];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:n}}function rl(i){const e=new Em(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function bm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new rl(i),e.set(r,[o])):s>=a.length?(o=new rl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wm=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Cm=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],sl=new Et,$i=new k,Fs=new k;function Rm(i,e,t){let n=new $l;const r=new Ce,s=new Ce,a=new it,o=new Vu,l=new zu,c={},d=t.maxTextureSize,h={[kn]:Bt,[Bt]:kn,[yn]:yn},p=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Tm,fragmentShader:Am}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const v=new Pn;v.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new sn(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Or;let u=this.type;this.render=function(R,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===hc&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Or);const x=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(En),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=u!==this.type;B&&P.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(X=>X.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,X=R.length;q<X;q++){const $=R[q],z=$.shadow;if(z===void 0){Be("WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const K=z.getFrameExtents();if(r.multiply(K),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,z.mapSize.y=s.y)),z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Yi){if($.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new rn(r.x,r.y,{format:Li,type:pn,minFilter:vt,magFilter:vt,generateMipmaps:!1}),z.map.texture.name=$.name+".shadowMap",z.map.depthTexture=new rr(r.x,r.y,ln),z.map.depthTexture.name=$.name+".shadowMapDepth",z.map.depthTexture.format=An,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=pt,z.map.depthTexture.magFilter=pt}else{$.isPointLight?(z.map=new Wl(r.x),z.map.depthTexture=new Ou(r.x,fn)):(z.map=new rn(r.x,r.y),z.map.depthTexture=new rr(r.x,r.y,fn)),z.map.depthTexture.name=$.name+".shadowMap",z.map.depthTexture.format=An;const ne=i.state.buffers.depth.getReversed();this.type===Or?(z.map.depthTexture.compareFunction=ne?Za:Ka,z.map.depthTexture.minFilter=vt,z.map.depthTexture.magFilter=vt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=pt,z.map.depthTexture.magFilter=pt)}z.camera.updateProjectionMatrix()}const ae=z.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<ae;ne++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(z.map),i.clear());const he=z.getViewport(ne);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),O.viewport(a)}if($.isPointLight){const he=z.camera,Ae=z.matrix,De=$.distance||he.far;De!==he.far&&(he.far=De,he.updateProjectionMatrix()),$i.setFromMatrixPosition($.matrixWorld),he.position.copy($i),Fs.copy(he.position),Fs.add(wm[ne]),he.up.copy(Cm[ne]),he.lookAt(Fs),he.updateMatrixWorld(),Ae.makeTranslation(-$i.x,-$i.y,-$i.z),sl.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),z._frustum.setFromProjectionMatrix(sl,he.coordinateSystem,he.reversedDepth)}else z.updateMatrices($);n=z.getFrustum(),T(P,N,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===Yi&&E(z,N),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(x,y,w)};function E(R,P){const N=e.update(S);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new rn(r.x,r.y,{format:Li,type:pn})),p.uniforms.shadow_pass.value=R.map.depthTexture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,N,p,S,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,N,f,S,null)}function M(R,P,N,x){let y=null;const w=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)y=w;else if(y=N.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=y.uuid,B=P.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let X=q[B];X===void 0&&(X=y.clone(),q[B]=X,P.addEventListener("dispose",A)),y=X}if(y.visible=P.visible,y.wireframe=P.wireframe,x===Yi?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=N}return y}function T(R,P,N,x,y){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Yi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const B=e.update(R),q=R.material;if(Array.isArray(q)){const X=B.groups;for(let $=0,z=X.length;$<z;$++){const K=X[$],ae=q[K.materialIndex];if(ae&&ae.visible){const ne=M(R,ae,x,y);R.onBeforeShadow(i,R,P,N,B,ne,K),i.renderBufferDirect(N,null,B,ne,R,K),R.onAfterShadow(i,R,P,N,B,ne,K)}}}else if(q.visible){const X=M(R,q,x,y);R.onBeforeShadow(i,R,P,N,B,X,null),i.renderBufferDirect(N,null,B,X,R,null),R.onAfterShadow(i,R,P,N,B,X,null)}}const O=R.children;for(let B=0,q=O.length;B<q;B++)T(O[B],P,N,x,y)}function A(R){R.target.removeEventListener("dispose",A);for(const N in c){const x=c[N],y=R.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const Pm={[qs]:Ks,[Zs]:Qs,[js]:ea,[Pi]:Js,[Ks]:qs,[Qs]:Zs,[ea]:js,[Js]:Pi};function Dm(i,e){function t(){let L=!1;const pe=new it;let ie=null;const ge=new it(0,0,0,0);return{setMask:function(ee){ie!==ee&&!L&&(i.colorMask(ee,ee,ee,ee),ie=ee)},setLocked:function(ee){L=ee},setClear:function(ee,Z,ce,Ne,ct){ct===!0&&(ee*=Ne,Z*=Ne,ce*=Ne),pe.set(ee,Z,ce,Ne),ge.equals(pe)===!1&&(i.clearColor(ee,Z,ce,Ne),ge.copy(pe))},reset:function(){L=!1,ie=null,ge.set(-1,0,0,0)}}}function n(){let L=!1,pe=!1,ie=null,ge=null,ee=null;return{setReversed:function(Z){if(pe!==Z){const ce=e.get("EXT_clip_control");Z?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),pe=Z;const Ne=ee;ee=null,this.setClear(Ne)}},getReversed:function(){return pe},setTest:function(Z){Z?Q(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(Z){ie!==Z&&!L&&(i.depthMask(Z),ie=Z)},setFunc:function(Z){if(pe&&(Z=Pm[Z]),ge!==Z){switch(Z){case qs:i.depthFunc(i.NEVER);break;case Ks:i.depthFunc(i.ALWAYS);break;case Zs:i.depthFunc(i.LESS);break;case Pi:i.depthFunc(i.LEQUAL);break;case js:i.depthFunc(i.EQUAL);break;case Js:i.depthFunc(i.GEQUAL);break;case Qs:i.depthFunc(i.GREATER);break;case ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Z}},setLocked:function(Z){L=Z},setClear:function(Z){ee!==Z&&(pe&&(Z=1-Z),i.clearDepth(Z),ee=Z)},reset:function(){L=!1,ie=null,ge=null,ee=null,pe=!1}}}function r(){let L=!1,pe=null,ie=null,ge=null,ee=null,Z=null,ce=null,Ne=null,ct=null;return{setTest:function(Ye){L||(Ye?Q(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Ye){pe!==Ye&&!L&&(i.stencilMask(Ye),pe=Ye)},setFunc:function(Ye,D,J){(ie!==Ye||ge!==D||ee!==J)&&(i.stencilFunc(Ye,D,J),ie=Ye,ge=D,ee=J)},setOp:function(Ye,D,J){(Z!==Ye||ce!==D||Ne!==J)&&(i.stencilOp(Ye,D,J),Z=Ye,ce=D,Ne=J)},setLocked:function(Ye){L=Ye},setClear:function(Ye){ct!==Ye&&(i.clearStencil(Ye),ct=Ye)},reset:function(){L=!1,pe=null,ie=null,ge=null,ee=null,Z=null,ce=null,Ne=null,ct=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},p=new WeakMap,f=[],v=null,S=!1,m=null,u=null,E=null,M=null,T=null,A=null,R=null,P=new lt(0,0,0),N=0,x=!1,y=null,w=null,O=null,B=null,q=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,z=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=z>=2);let ae=null,ne={};const he=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),De=new it().fromArray(he),ke=new it().fromArray(Ae);function Le(L,pe,ie,ge){const ee=new Uint8Array(4),Z=i.createTexture();i.bindTexture(L,Z),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<ie;ce++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(pe+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return Z}const W={};W[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Pi),Ve(!1),je(co),Q(i.CULL_FACE),Ze(En);function Q(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function ve(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Oe(L,pe){return h[L]!==pe?(i.bindFramebuffer(L,pe),h[L]=pe,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function se(L,pe){let ie=f,ge=!1;if(L){ie=p.get(pe),ie===void 0&&(ie=[],p.set(pe,ie));const ee=L.textures;if(ie.length!==ee.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ce=ee.length;Z<ce;Z++)ie[Z]=i.COLOR_ATTACHMENT0+Z;ie.length=ee.length,ge=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ie)}function Xe(L){return v!==L?(i.useProgram(L),v=L,!0):!1}const mt={[Jn]:i.FUNC_ADD,[pc]:i.FUNC_SUBTRACT,[mc]:i.FUNC_REVERSE_SUBTRACT};mt[gc]=i.MIN,mt[vc]=i.MAX;const $e={[_c]:i.ZERO,[xc]:i.ONE,[Sc]:i.SRC_COLOR,[$s]:i.SRC_ALPHA,[Ac]:i.SRC_ALPHA_SATURATE,[bc]:i.DST_COLOR,[yc]:i.DST_ALPHA,[Mc]:i.ONE_MINUS_SRC_COLOR,[Ys]:i.ONE_MINUS_SRC_ALPHA,[Tc]:i.ONE_MINUS_DST_COLOR,[Ec]:i.ONE_MINUS_DST_ALPHA,[wc]:i.CONSTANT_COLOR,[Cc]:i.ONE_MINUS_CONSTANT_COLOR,[Rc]:i.CONSTANT_ALPHA,[Pc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(L,pe,ie,ge,ee,Z,ce,Ne,ct,Ye){if(L===En){S===!0&&(ve(i.BLEND),S=!1);return}if(S===!1&&(Q(i.BLEND),S=!0),L!==fc){if(L!==m||Ye!==x){if((u!==Jn||T!==Jn)&&(i.blendEquation(i.FUNC_ADD),u=Jn,T=Jn),Ye)switch(L){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.ONE,i.ONE);break;case ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ho:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fo:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",L);break}E=null,M=null,A=null,R=null,P.set(0,0,0),N=0,m=L,x=Ye}return}ee=ee||pe,Z=Z||ie,ce=ce||ge,(pe!==u||ee!==T)&&(i.blendEquationSeparate(mt[pe],mt[ee]),u=pe,T=ee),(ie!==E||ge!==M||Z!==A||ce!==R)&&(i.blendFuncSeparate($e[ie],$e[ge],$e[Z],$e[ce]),E=ie,M=ge,A=Z,R=ce),(Ne.equals(P)===!1||ct!==N)&&(i.blendColor(Ne.r,Ne.g,Ne.b,ct),P.copy(Ne),N=ct),m=L,x=!1}function rt(L,pe){L.side===yn?ve(i.CULL_FACE):Q(i.CULL_FACE);let ie=L.side===Bt;pe&&(ie=!ie),Ve(ie),L.blending===Ci&&L.transparent===!1?Ze(En):Ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ge=L.stencilWrite;o.setTest(ge),ge&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function je(L){L!==uc?(Q(i.CULL_FACE),L!==w&&(L===co?i.cullFace(i.BACK):L===dc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),w=L}function C(L){L!==O&&($&&i.lineWidth(L),O=L)}function _t(L,pe,ie){L?(Q(i.POLYGON_OFFSET_FILL),(B!==pe||q!==ie)&&(i.polygonOffset(pe,ie),B=pe,q=ie)):ve(i.POLYGON_OFFSET_FILL)}function Qe(L){L?Q(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function nt(L){L===void 0&&(L=i.TEXTURE0+X-1),ae!==L&&(i.activeTexture(L),ae=L)}function be(L,pe,ie){ie===void 0&&(ae===null?ie=i.TEXTURE0+X-1:ie=ae);let ge=ne[ie];ge===void 0&&(ge={type:void 0,texture:void 0},ne[ie]=ge),(ge.type!==L||ge.texture!==pe)&&(ae!==ie&&(i.activeTexture(ie),ae=ie),i.bindTexture(L,pe||W[L]),ge.type=L,ge.texture=pe)}function b(){const L=ne[ae];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function j(){try{i.texSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function oe(){try{i.texStorage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function ye(){try{i.texStorage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function Ue(){try{i.texImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function te(){try{i.texImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function ue(L){De.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),De.copy(L))}function _e(L){ke.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ke.copy(L))}function Ee(L,pe){let ie=c.get(pe);ie===void 0&&(ie=new WeakMap,c.set(pe,ie));let ge=ie.get(L);ge===void 0&&(ge=i.getUniformBlockIndex(pe,L.name),ie.set(L,ge))}function le(L,pe){const ge=c.get(pe).get(L);l.get(pe)!==ge&&(i.uniformBlockBinding(pe,ge,L.__bindingPointIndex),l.set(pe,ge))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ae=null,ne={},h={},p=new WeakMap,f=[],v=null,S=!1,m=null,u=null,E=null,M=null,T=null,A=null,R=null,P=new lt(0,0,0),N=0,x=!1,y=null,w=null,O=null,B=null,q=null,De.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:ve,bindFramebuffer:Oe,drawBuffers:se,useProgram:Xe,setBlending:Ze,setMaterial:rt,setFlipSided:Ve,setCullFace:je,setLineWidth:C,setPolygonOffset:_t,setScissorTest:Qe,activeTexture:nt,bindTexture:be,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:Ue,texImage3D:te,updateUBOMapping:Ee,uniformBlockBinding:le,texStorage2D:oe,texStorage3D:ye,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:H,compressedTexSubImage3D:Te,scissor:ue,viewport:_e,reset:ze}}function Lm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,d=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,g){return f?new OffscreenCanvas(b,g):tr("canvas")}function S(b,g,U){let Y=1;const j=be(b);if((j.width>U||j.height>U)&&(Y=U/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const H=Math.floor(Y*j.width),Te=Math.floor(Y*j.height);h===void 0&&(h=v(H,Te));const oe=g?v(H,Te):h;return oe.width=H,oe.height=Te,oe.getContext("2d").drawImage(b,0,0,H,Te),Be("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+H+"x"+Te+")."),oe}else return"data"in b&&Be("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function u(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(b,g,U,Y,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let H=g;if(g===i.RED&&(U===i.FLOAT&&(H=i.R32F),U===i.HALF_FLOAT&&(H=i.R16F),U===i.UNSIGNED_BYTE&&(H=i.R8)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.R8UI),U===i.UNSIGNED_SHORT&&(H=i.R16UI),U===i.UNSIGNED_INT&&(H=i.R32UI),U===i.BYTE&&(H=i.R8I),U===i.SHORT&&(H=i.R16I),U===i.INT&&(H=i.R32I)),g===i.RG&&(U===i.FLOAT&&(H=i.RG32F),U===i.HALF_FLOAT&&(H=i.RG16F),U===i.UNSIGNED_BYTE&&(H=i.RG8)),g===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.RG8UI),U===i.UNSIGNED_SHORT&&(H=i.RG16UI),U===i.UNSIGNED_INT&&(H=i.RG32UI),U===i.BYTE&&(H=i.RG8I),U===i.SHORT&&(H=i.RG16I),U===i.INT&&(H=i.RG32I)),g===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.RGB8UI),U===i.UNSIGNED_SHORT&&(H=i.RGB16UI),U===i.UNSIGNED_INT&&(H=i.RGB32UI),U===i.BYTE&&(H=i.RGB8I),U===i.SHORT&&(H=i.RGB16I),U===i.INT&&(H=i.RGB32I)),g===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),U===i.UNSIGNED_INT&&(H=i.RGBA32UI),U===i.BYTE&&(H=i.RGBA8I),U===i.SHORT&&(H=i.RGBA16I),U===i.INT&&(H=i.RGBA32I)),g===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(H=i.R11F_G11F_B10F)),g===i.RGBA){const Te=j?Hr:Je.getTransfer(Y);U===i.FLOAT&&(H=i.RGBA32F),U===i.HALF_FLOAT&&(H=i.RGBA16F),U===i.UNSIGNED_BYTE&&(H=Te===at?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function T(b,g){let U;return b?g===null||g===fn||g===er?U=i.DEPTH24_STENCIL8:g===ln?U=i.DEPTH32F_STENCIL8:g===Qi&&(U=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===fn||g===er?U=i.DEPTH_COMPONENT24:g===ln?U=i.DEPTH_COMPONENT32F:g===Qi&&(U=i.DEPTH_COMPONENT16),U}function A(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==pt&&b.minFilter!==vt?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function R(b){const g=b.target;g.removeEventListener("dispose",R),N(g),g.isVideoTexture&&d.delete(g)}function P(b){const g=b.target;g.removeEventListener("dispose",P),y(g)}function N(b){const g=n.get(b);if(g.__webglInit===void 0)return;const U=b.source,Y=p.get(U);if(Y){const j=Y[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(b),Object.keys(Y).length===0&&p.delete(U)}n.remove(b)}function x(b){const g=n.get(b);i.deleteTexture(g.__webglTexture);const U=b.source,Y=p.get(U);delete Y[g.__cacheKey],a.memory.textures--}function y(b){const g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let j=0;j<g.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[Y]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=b.textures;for(let Y=0,j=U.length;Y<j;Y++){const H=n.get(U[Y]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(U[Y])}n.remove(b)}let w=0;function O(){w=0}function B(){const b=w;return b>=r.maxTextures&&Be("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),w+=1,b}function q(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function X(b,g){const U=n.get(b);if(b.isVideoTexture&&Qe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){const Y=b.image;if(Y===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{W(U,b,g);return}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function $(b,g){const U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){W(U,b,g);return}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function z(b,g){const U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){W(U,b,g);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function K(b,g){const U=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&U.__version!==b.version){Q(U,b,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}const ae={[ia]:i.REPEAT,[Ut]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},ne={[pt]:i.NEAREST,[Uc]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[as]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},he={[Oc]:i.NEVER,[Gc]:i.ALWAYS,[Bc]:i.LESS,[Ka]:i.LEQUAL,[Vc]:i.EQUAL,[Za]:i.GEQUAL,[zc]:i.GREATER,[kc]:i.NOTEQUAL};function Ae(b,g){if(g.type===ln&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===vt||g.magFilter===as||g.magFilter===mr||g.magFilter===ti||g.minFilter===vt||g.minFilter===as||g.minFilter===mr||g.minFilter===ti)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ae[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ae[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ae[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ne[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ne[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,he[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===pt||g.minFilter!==mr&&g.minFilter!==ti||g.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function De(b,g){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",R));const Y=g.source;let j=p.get(Y);j===void 0&&(j={},p.set(Y,j));const H=q(g);if(H!==b.__cacheKey){j[H]===void 0&&(j[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),j[H].usedTimes++;const Te=j[b.__cacheKey];Te!==void 0&&(j[b.__cacheKey].usedTimes--,Te.usedTimes===0&&x(g)),b.__cacheKey=H,b.__webglTexture=j[H].texture}return U}function ke(b,g,U){return Math.floor(Math.floor(b/U)/g)}function Le(b,g,U,Y){const H=b.updateRanges;if(H.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,U,Y,g.data);else{H.sort((te,ue)=>te.start-ue.start);let Te=0;for(let te=1;te<H.length;te++){const ue=H[Te],_e=H[te],Ee=ue.start+ue.count,le=ke(_e.start,g.width,4),ze=ke(ue.start,g.width,4);_e.start<=Ee+1&&le===ze&&ke(_e.start+_e.count-1,g.width,4)===le?ue.count=Math.max(ue.count,_e.start+_e.count-ue.start):(++Te,H[Te]=_e)}H.length=Te+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),ye=i.getParameter(i.UNPACK_SKIP_PIXELS),Ue=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let te=0,ue=H.length;te<ue;te++){const _e=H[te],Ee=Math.floor(_e.start/4),le=Math.ceil(_e.count/4),ze=Ee%g.width,L=Math.floor(Ee/g.width),pe=le,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,ze,L,pe,ie,U,Y,g.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ue)}}function W(b,g,U){let Y=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=i.TEXTURE_3D);const j=De(b,g),H=g.source;t.bindTexture(Y,b.__webglTexture,i.TEXTURE0+U);const Te=n.get(H);if(H.version!==Te.__version||j===!0){t.activeTexture(i.TEXTURE0+U);const oe=Je.getPrimaries(Je.workingColorSpace),ye=g.colorSpace===On?null:Je.getPrimaries(g.colorSpace),Ue=g.colorSpace===On||oe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let te=S(g.image,!1,r.maxTextureSize);te=nt(g,te);const ue=s.convert(g.format,g.colorSpace),_e=s.convert(g.type);let Ee=M(g.internalFormat,ue,_e,g.colorSpace,g.isVideoTexture);Ae(Y,g);let le;const ze=g.mipmaps,L=g.isVideoTexture!==!0,pe=Te.__version===void 0||j===!0,ie=H.dataReady,ge=A(g,te);if(g.isDepthTexture)Ee=T(g.format===ni,g.type),pe&&(L?t.texStorage2D(i.TEXTURE_2D,1,Ee,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ee,te.width,te.height,0,ue,_e,null));else if(g.isDataTexture)if(ze.length>0){L&&pe&&t.texStorage2D(i.TEXTURE_2D,ge,Ee,ze[0].width,ze[0].height);for(let ee=0,Z=ze.length;ee<Z;ee++)le=ze[ee],L?ie&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,ue,_e,le.data):t.texImage2D(i.TEXTURE_2D,ee,Ee,le.width,le.height,0,ue,_e,le.data);g.generateMipmaps=!1}else L?(pe&&t.texStorage2D(i.TEXTURE_2D,ge,Ee,te.width,te.height),ie&&Le(g,te,ue,_e)):t.texImage2D(i.TEXTURE_2D,0,Ee,te.width,te.height,0,ue,_e,te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ee,ze[0].width,ze[0].height,te.depth);for(let ee=0,Z=ze.length;ee<Z;ee++)if(le=ze[ee],g.format!==jt)if(ue!==null)if(L){if(ie)if(g.layerUpdates.size>0){const ce=No(le.width,le.height,g.format,g.type);for(const Ne of g.layerUpdates){const ct=le.data.subarray(Ne*ce/le.data.BYTES_PER_ELEMENT,(Ne+1)*ce/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Ne,le.width,le.height,1,ue,ct)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,ue,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ee,le.width,le.height,te.depth,0,le.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,ue,_e,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ee,le.width,le.height,te.depth,0,ue,_e,le.data)}else{L&&pe&&t.texStorage2D(i.TEXTURE_2D,ge,Ee,ze[0].width,ze[0].height);for(let ee=0,Z=ze.length;ee<Z;ee++)le=ze[ee],g.format!==jt?ue!==null?L?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ee,le.width,le.height,0,le.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,ue,_e,le.data):t.texImage2D(i.TEXTURE_2D,ee,Ee,le.width,le.height,0,ue,_e,le.data)}else if(g.isDataArrayTexture)if(L){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ee,te.width,te.height,te.depth),ie)if(g.layerUpdates.size>0){const ee=No(te.width,te.height,g.format,g.type);for(const Z of g.layerUpdates){const ce=te.data.subarray(Z*ee/te.data.BYTES_PER_ELEMENT,(Z+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,ue,_e,ce)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,_e,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,ue,_e,te.data);else if(g.isData3DTexture)L?(pe&&t.texStorage3D(i.TEXTURE_3D,ge,Ee,te.width,te.height,te.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,_e,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,ue,_e,te.data);else if(g.isFramebufferTexture){if(pe)if(L)t.texStorage2D(i.TEXTURE_2D,ge,Ee,te.width,te.height);else{let ee=te.width,Z=te.height;for(let ce=0;ce<ge;ce++)t.texImage2D(i.TEXTURE_2D,ce,Ee,ee,Z,0,ue,_e,null),ee>>=1,Z>>=1}}else if(ze.length>0){if(L&&pe){const ee=be(ze[0]);t.texStorage2D(i.TEXTURE_2D,ge,Ee,ee.width,ee.height)}for(let ee=0,Z=ze.length;ee<Z;ee++)le=ze[ee],L?ie&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue,_e,le):t.texImage2D(i.TEXTURE_2D,ee,Ee,ue,_e,le);g.generateMipmaps=!1}else if(L){if(pe){const ee=be(te);t.texStorage2D(i.TEXTURE_2D,ge,Ee,ee.width,ee.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,_e,te)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ue,_e,te);m(g)&&u(Y),Te.__version=H.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Q(b,g,U){if(g.image.length!==6)return;const Y=De(b,g),j=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+U);const H=n.get(j);if(j.version!==H.__version||Y===!0){t.activeTexture(i.TEXTURE0+U);const Te=Je.getPrimaries(Je.workingColorSpace),oe=g.colorSpace===On?null:Je.getPrimaries(g.colorSpace),ye=g.colorSpace===On||Te===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ue=g.isCompressedTexture||g.image[0].isCompressedTexture,te=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!Ue&&!te?ue[Z]=S(g.image[Z],!0,r.maxCubemapSize):ue[Z]=te?g.image[Z].image:g.image[Z],ue[Z]=nt(g,ue[Z]);const _e=ue[0],Ee=s.convert(g.format,g.colorSpace),le=s.convert(g.type),ze=M(g.internalFormat,Ee,le,g.colorSpace),L=g.isVideoTexture!==!0,pe=H.__version===void 0||Y===!0,ie=j.dataReady;let ge=A(g,_e);Ae(i.TEXTURE_CUBE_MAP,g);let ee;if(Ue){L&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ze,_e.width,_e.height);for(let Z=0;Z<6;Z++){ee=ue[Z].mipmaps;for(let ce=0;ce<ee.length;ce++){const Ne=ee[ce];g.format!==jt?Ee!==null?L?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,Ne.width,Ne.height,Ee,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,ze,Ne.width,Ne.height,0,Ne.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,Ne.width,Ne.height,Ee,le,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,ze,Ne.width,Ne.height,0,Ee,le,Ne.data)}}}else{if(ee=g.mipmaps,L&&pe){ee.length>0&&ge++;const Z=be(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,Ee,le,ue[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,ue[Z].width,ue[Z].height,0,Ee,le,ue[Z].data);for(let ce=0;ce<ee.length;ce++){const ct=ee[ce].image[Z].image;L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,ct.width,ct.height,Ee,le,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,ze,ct.width,ct.height,0,Ee,le,ct.data)}}else{L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,le,ue[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,Ee,le,ue[Z]);for(let ce=0;ce<ee.length;ce++){const Ne=ee[ce];L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Ee,le,Ne.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,ze,Ee,le,Ne.image[Z])}}}m(g)&&u(i.TEXTURE_CUBE_MAP),H.__version=j.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ve(b,g,U,Y,j,H){const Te=s.convert(U.format,U.colorSpace),oe=s.convert(U.type),ye=M(U.internalFormat,Te,oe,U.colorSpace),Ue=n.get(g),te=n.get(U);if(te.__renderTarget=g,!Ue.__hasExternalTextures){const ue=Math.max(1,g.width>>H),_e=Math.max(1,g.height>>H);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,H,ye,ue,_e,g.depth,0,Te,oe,null):t.texImage2D(j,H,ye,ue,_e,0,Te,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,te.__webglTexture,0,C(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,te.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(b,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){const Y=g.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,H=T(g.stencilBuffer,j),Te=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),H,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),H,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,H,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,b)}else{const Y=g.textures;for(let j=0;j<Y.length;j++){const H=Y[j],Te=s.convert(H.format,H.colorSpace),oe=s.convert(H.type),ye=M(H.internalFormat,Te,oe,H.colorSpace);_t(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),ye,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),ye,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ye,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(b,g,U){const Y=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(g.depthTexture);if(j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,g.depthTexture);const Ue=s.convert(g.depthTexture.format),te=s.convert(g.depthTexture.type);let ue;g.depthTexture.format===An?ue=i.DEPTH_COMPONENT24:g.depthTexture.format===ni&&(ue=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,g.width,g.height,0,Ue,te,null)}}else X(g.depthTexture,0);const H=j.__webglTexture,Te=C(g),oe=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,ye=g.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===An)_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,oe,H,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,ye,oe,H,0);else if(g.depthTexture.format===ni)_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,oe,H,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,ye,oe,H,0);else throw new Error("Unknown depthTexture format")}function Xe(b){const g=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=Y}if(b.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let Y=0;Y<6;Y++)se(g.__webglFramebuffer[Y],b,Y);else{const Y=b.texture.mipmaps;Y&&Y.length>0?se(g.__webglFramebuffer[0],b,0):se(g.__webglFramebuffer,b,0)}else if(U){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=i.createRenderbuffer(),Oe(g.__webglDepthbuffer[Y],b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,H)}}else{const Y=b.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Oe(g.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,H)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(b,g,U){const Y=n.get(b);g!==void 0&&ve(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Xe(b)}function $e(b){const g=b.texture,U=n.get(b),Y=n.get(g);b.addEventListener("dispose",P);const j=b.textures,H=b.isWebGLCubeRenderTarget===!0,Te=j.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=g.version,a.memory.textures++),H){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let ye=0;ye<g.mipmaps.length;ye++)U.__webglFramebuffer[oe][ye]=i.createFramebuffer()}else U.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)U.__webglFramebuffer[oe]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Te)for(let oe=0,ye=j.length;oe<ye;oe++){const Ue=n.get(j[oe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&_t(b)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){const ye=j[oe];U.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[oe]);const Ue=s.convert(ye.format,ye.colorSpace),te=s.convert(ye.type),ue=M(ye.internalFormat,Ue,te,ye.colorSpace,b.isXRRenderTarget===!0),_e=C(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ue,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,U.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)ve(U.__webglFramebuffer[oe][ye],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye);else ve(U.__webglFramebuffer[oe],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let oe=0,ye=j.length;oe<ye;oe++){const Ue=j[oe],te=n.get(Ue);let ue=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),Ae(ue,Ue),ve(U.__webglFramebuffer,b,Ue,i.COLOR_ATTACHMENT0+oe,ue,0),m(Ue)&&u(ue)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),Ae(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)ve(U.__webglFramebuffer[ye],b,g,i.COLOR_ATTACHMENT0,oe,ye);else ve(U.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,oe,0);m(g)&&u(oe),t.unbindTexture()}b.depthBuffer&&Xe(b)}function Ze(b){const g=b.textures;for(let U=0,Y=g.length;U<Y;U++){const j=g[U];if(m(j)){const H=E(b),Te=n.get(j).__webglTexture;t.bindTexture(H,Te),u(H),t.unbindTexture()}}}const rt=[],Ve=[];function je(b){if(b.samples>0){if(_t(b)===!1){const g=b.textures,U=b.width,Y=b.height;let j=i.COLOR_BUFFER_BIT;const H=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(b),oe=g.length>1;if(oe)for(let Ue=0;Ue<g.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const ye=b.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ue=0;Ue<g.length;Ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]);const te=n.get(g[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,U,Y,0,0,U,Y,j,i.NEAREST),l===!0&&(rt.length=0,Ve.length=0,rt.push(i.COLOR_ATTACHMENT0+Ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(rt.push(H),Ve.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Ue=0;Ue<g.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]);const te=n.get(g[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function C(b){return Math.min(r.maxSamples,b.samples)}function _t(b){const g=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Qe(b){const g=a.render.frame;d.get(b)!==g&&(d.set(b,g),b.update())}function nt(b,g){const U=b.colorSpace,Y=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==Ui&&U!==On&&(Je.getTransfer(U)===at?(Y!==jt||j!==Xt)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",U)),g}function be(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=mt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Um(i,e){function t(n,r=On){let s;const a=Je.getTransfer(r);if(n===Xt)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cl)return i.BYTE;if(n===Rl)return i.SHORT;if(n===Qi)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===fn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Ul)return i.RGB;if(n===jt)return i.RGBA;if(n===An)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===Li)return i.RG;if(n===Ya)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===Br||n===Vr||n===zr||n===kr)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===aa||n===oa||n===la)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===ua||n===da||n===ha||n===fa||n===pa||n===ma)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ca||n===ua)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===da)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ha)return s.COMPRESSED_R11_EAC;if(n===fa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===pa)return s.COMPRESSED_RG11_EAC;if(n===ma)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ga||n===va||n===_a||n===xa||n===Sa||n===Ma||n===ya||n===Ea||n===ba||n===Ta||n===Aa||n===wa||n===Ca||n===Ra)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ga)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ya)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ea)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===Da||n===La)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Pa)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ua||n===Ia||n===Fa||n===Na)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ua)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Yl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gt({vertexShader:Im,fragmentShader:Fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sn(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Om extends Ni{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,p=null,f=null,v=null;const S=typeof XRWebGLBinding<"u",m=new Nm,u={},E=t.getContextAttributes();let M=null,T=null;const A=[],R=[],P=new Ce;let N=null;const x=new Zt;x.viewport=new it;const y=new Zt;y.viewport=new it;const w=[x,y],O=new Xu;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=A[W];return Q===void 0&&(Q=new ws,A[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=A[W];return Q===void 0&&(Q=new ws,A[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=A[W];return Q===void 0&&(Q=new ws,A[W]=Q),Q.getHandSpace()};function X(W){const Q=R.indexOf(W.inputSource);if(Q===-1)return;const ve=A[Q];ve!==void 0&&(ve.update(W.inputSource,W.frame,c||a),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",z);for(let W=0;W<A.length;W++){const Q=R[W];Q!==null&&(R[W]=null,A[W].disconnect(Q))}B=null,q=null,m.reset();for(const W in u)delete u[W];e.setRenderTarget(M),f=null,p=null,h=null,r=null,T=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",$),r.addEventListener("inputsourceschange",z),E.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Oe=null,se=null;E.depth&&(se=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=E.stencil?ni:An,Oe=E.stencil?er:fn);const Xe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=this.getBinding(),p=h.createProjectionLayer(Xe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new rn(p.textureWidth,p.textureHeight,{format:jt,type:Xt,depthTexture:new rr(p.textureWidth,p.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ve={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new rn(f.framebufferWidth,f.framebufferHeight,{format:jt,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(W){for(let Q=0;Q<W.removed.length;Q++){const ve=W.removed[Q],Oe=R.indexOf(ve);Oe>=0&&(R[Oe]=null,A[Oe].disconnect(ve))}for(let Q=0;Q<W.added.length;Q++){const ve=W.added[Q];let Oe=R.indexOf(ve);if(Oe===-1){for(let Xe=0;Xe<A.length;Xe++)if(Xe>=R.length){R.push(ve),Oe=Xe;break}else if(R[Xe]===null){R[Xe]=ve,Oe=Xe;break}if(Oe===-1)break}const se=A[Oe];se&&se.connect(ve)}}const K=new k,ae=new k;function ne(W,Q,ve){K.setFromMatrixPosition(Q.matrixWorld),ae.setFromMatrixPosition(ve.matrixWorld);const Oe=K.distanceTo(ae),se=Q.projectionMatrix.elements,Xe=ve.projectionMatrix.elements,mt=se[14]/(se[10]-1),$e=se[14]/(se[10]+1),Ze=(se[9]+1)/se[5],rt=(se[9]-1)/se[5],Ve=(se[8]-1)/se[0],je=(Xe[8]+1)/Xe[0],C=mt*Ve,_t=mt*je,Qe=Oe/(-Ve+je),nt=Qe*-Ve;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(nt),W.translateZ(Qe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),se[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const be=mt+Qe,b=$e+Qe,g=C-nt,U=_t+(Oe-nt),Y=Ze*$e/b*be,j=rt*$e/b*be;W.projectionMatrix.makePerspective(g,U,Y,j,be,b),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function he(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Q=W.near,ve=W.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),O.near=y.near=x.near=Q,O.far=y.far=x.far=ve,(B!==O.near||q!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,q=O.far),O.layers.mask=W.layers.mask|6,x.layers.mask=O.layers.mask&3,y.layers.mask=O.layers.mask&5;const Oe=W.parent,se=O.cameras;he(O,Oe);for(let Xe=0;Xe<se.length;Xe++)he(se[Xe],Oe);se.length===2?ne(O,x,y):O.projectionMatrix.copy(x.projectionMatrix),Ae(W,O,Oe)};function Ae(W,Q,ve){ve===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ir*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(W){return u[W]};let De=null;function ke(W,Q){if(d=Q.getViewerPose(c||a),v=Q,d!==null){const ve=d.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let Oe=!1;ve.length!==O.cameras.length&&(O.cameras.length=0,Oe=!0);for(let $e=0;$e<ve.length;$e++){const Ze=ve[$e];let rt=null;if(f!==null)rt=f.getViewport(Ze);else{const je=h.getViewSubImage(p,Ze);rt=je.viewport,$e===0&&(e.setRenderTargetTextures(T,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(T))}let Ve=w[$e];Ve===void 0&&(Ve=new Zt,Ve.layers.enable($e),Ve.viewport=new it,w[$e]=Ve),Ve.matrix.fromArray(Ze.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ze.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(rt.x,rt.y,rt.width,rt.height),$e===0&&(O.matrix.copy(Ve.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Oe===!0&&O.cameras.push(Ve)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=n.getBinding();const $e=h.getDepthInformation(ve[0]);$e&&$e.isValid&&$e.texture&&m.init($e,r.renderState)}if(se&&se.includes("camera-access")&&S){e.state.unbindTexture(),h=n.getBinding();for(let $e=0;$e<ve.length;$e++){const Ze=ve[$e].camera;if(Ze){let rt=u[Ze];rt||(rt=new Yl,u[Ze]=rt);const Ve=h.getCameraImage(Ze);rt.sourceTexture=Ve}}}}for(let ve=0;ve<A.length;ve++){const Oe=R[ve],se=A[ve];Oe!==null&&se!==void 0&&se.update(Oe,Q,c||a)}De&&De(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}const Le=new ql;Le.setAnimationLoop(ke),this.setAnimationLoop=function(W){De=W},this.dispose=function(){}}}const Zn=new wn,Bm=new Et;function Vm(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,kl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,E,M,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,T)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),S(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,E,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Bt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Bt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=e.get(u),M=E.envMap,T=E.envMapRotation;M&&(m.envMap.value=M,Zn.copy(T),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Zn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,E,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=M*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Bt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function zm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const T=M.program;n.uniformBlockBinding(E,T)}function c(E,M){let T=r[E.id];T===void 0&&(v(E),T=d(E),r[E.id]=T,E.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(E,A);const R=e.render.frame;s[E.id]!==R&&(p(E),s[E.id]=R)}function d(E){const M=h();E.__bindingPointIndex=M;const T=i.createBuffer(),A=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const M=r[E.id],T=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,P=T.length;R<P;R++){const N=Array.isArray(T[R])?T[R]:[T[R]];for(let x=0,y=N.length;x<y;x++){const w=N[x];if(f(w,R,x,A)===!0){const O=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let q=0;for(let X=0;X<B.length;X++){const $=B[X],z=S($);typeof $=="number"||typeof $=="boolean"?(w.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,O+q,w.__data)):$.isMatrix3?(w.__data[0]=$.elements[0],w.__data[1]=$.elements[1],w.__data[2]=$.elements[2],w.__data[3]=0,w.__data[4]=$.elements[3],w.__data[5]=$.elements[4],w.__data[6]=$.elements[5],w.__data[7]=0,w.__data[8]=$.elements[6],w.__data[9]=$.elements[7],w.__data[10]=$.elements[8],w.__data[11]=0):($.toArray(w.__data,q),q+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,M,T,A){const R=E.value,P=M+"_"+T;if(A[P]===void 0)return typeof R=="number"||typeof R=="boolean"?A[P]=R:A[P]=R.clone(),!0;{const N=A[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return A[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function v(E){const M=E.uniforms;let T=0;const A=16;for(let P=0,N=M.length;P<N;P++){const x=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,w=x.length;y<w;y++){const O=x[y],B=Array.isArray(O.value)?O.value:[O.value];for(let q=0,X=B.length;q<X;q++){const $=B[q],z=S($),K=T%A,ae=K%z.boundary,ne=K+ae;T+=ae,ne!==0&&A-ne<z.storage&&(T+=A-ne),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=z.storage}}}const R=T%A;return R>0&&(T+=A-R),E.__size=T,E.__cache={},this}function S(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function u(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const km=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let an=null;function Gm(){return an===null&&(an=new Du(km,16,16,Li,pn),an.name="DFG_LUT",an.minFilter=vt,an.magFilter=vt,an.wrapS=Ut,an.wrapT=Ut,an.generateMipmaps=!1,an.needsUpdate=!0),an}class Hm{constructor(e={}){const{canvas:t=Hc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1,outputBufferType:f=Xt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const S=f,m=new Set([qa,Ya,$a]),u=new Set([Xt,fn,Qi,er,Wa,Xa]),E=new Uint32Array(4),M=new Int32Array(4);let T=null,A=null;const R=[],P=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=Nt;let w=0,O=0,B=null,q=-1,X=null;const $=new it,z=new it;let K=null;const ae=new lt(0);let ne=0,he=t.width,Ae=t.height,De=1,ke=null,Le=null;const W=new it(0,0,he,Ae),Q=new it(0,0,he,Ae);let ve=!1;const Oe=new $l;let se=!1,Xe=!1;const mt=new Et,$e=new k,Ze=new it,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function je(){return B===null?De:1}let C=n;function _t(_,I){return t.getContext(_,I)}try{const _={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),C===null){const I="webgl2";if(C=_t(I,_),C===null)throw _t(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw tt("WebGLRenderer: "+_.message),_}let Qe,nt,be,b,g,U,Y,j,H,Te,oe,ye,Ue,te,ue,_e,Ee,le,ze,L,pe,ie,ge,ee;function Z(){Qe=new Gf(C),Qe.init(),ie=new Um(C,Qe),nt=new Uf(C,Qe,e,ie),be=new Dm(C,Qe),nt.reversedDepthBuffer&&p&&be.buffers.depth.setReversed(!0),b=new Xf(C),g=new gm,U=new Lm(C,Qe,be,g,nt,ie,b),Y=new Ff(x),j=new kf(x),H=new qu(C),ge=new Df(C,H),Te=new Hf(C,H,b,ge),oe=new Yf(C,Te,H,b),ze=new $f(C,nt,U),_e=new If(g),ye=new mm(x,Y,j,Qe,nt,ge,_e),Ue=new Vm(x,g),te=new _m,ue=new bm(Qe),le=new Pf(x,Y,j,be,oe,v,l),Ee=new Rm(x,oe,nt),ee=new zm(C,b,nt,be),L=new Lf(C,Qe,b),pe=new Wf(C,Qe,b),b.programs=ye.programs,x.capabilities=nt,x.extensions=Qe,x.properties=g,x.renderLists=te,x.shadowMap=Ee,x.state=be,x.info=b}Z(),S!==Xt&&(N=new Kf(S,t.width,t.height,r,s));const ce=new Om(x,C);this.xr=ce,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const _=Qe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Qe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(_){_!==void 0&&(De=_,this.setSize(he,Ae,!1))},this.getSize=function(_){return _.set(he,Ae)},this.setSize=function(_,I,G=!0){if(ce.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}he=_,Ae=I,t.width=Math.floor(_*De),t.height=Math.floor(I*De),G===!0&&(t.style.width=_+"px",t.style.height=I+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(he*De,Ae*De).floor()},this.setDrawingBufferSize=function(_,I,G){he=_,Ae=I,De=G,t.width=Math.floor(_*G),t.height=Math.floor(I*G),this.setViewport(0,0,_,I)},this.setEffects=function(_){if(S===Xt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let I=0;I<_.length;I++)if(_[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy($)},this.getViewport=function(_){return _.copy(W)},this.setViewport=function(_,I,G,V){_.isVector4?W.set(_.x,_.y,_.z,_.w):W.set(_,I,G,V),be.viewport($.copy(W).multiplyScalar(De).round())},this.getScissor=function(_){return _.copy(Q)},this.setScissor=function(_,I,G,V){_.isVector4?Q.set(_.x,_.y,_.z,_.w):Q.set(_,I,G,V),be.scissor(z.copy(Q).multiplyScalar(De).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(_){be.setScissorTest(ve=_)},this.setOpaqueSort=function(_){ke=_},this.setTransparentSort=function(_){Le=_},this.getClearColor=function(_){return _.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(_=!0,I=!0,G=!0){let V=0;if(_){let F=!1;if(B!==null){const de=B.texture.format;F=m.has(de)}if(F){const de=B.texture.type,xe=u.has(de),me=le.getClearColor(),Me=le.getClearAlpha(),we=me.r,Fe=me.g,Re=me.b;xe?(E[0]=we,E[1]=Fe,E[2]=Re,E[3]=Me,C.clearBufferuiv(C.COLOR,0,E)):(M[0]=we,M[1]=Fe,M[2]=Re,M[3]=Me,C.clearBufferiv(C.COLOR,0,M))}else V|=C.COLOR_BUFFER_BIT}I&&(V|=C.DEPTH_BUFFER_BIT),G&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),le.dispose(),te.dispose(),ue.dispose(),g.dispose(),Y.dispose(),j.dispose(),oe.dispose(),ge.dispose(),ee.dispose(),ye.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ri),ce.removeEventListener("sessionend",Gn),Yt.stop()};function Ne(_){_.preventDefault(),_o("WebGLRenderer: Context Lost."),y=!0}function ct(){_o("WebGLRenderer: Context Restored."),y=!1;const _=b.autoReset,I=Ee.enabled,G=Ee.autoUpdate,V=Ee.needsUpdate,F=Ee.type;Z(),b.autoReset=_,Ee.enabled=I,Ee.autoUpdate=G,Ee.needsUpdate=V,Ee.type=F}function Ye(_){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function D(_){const I=_.target;I.removeEventListener("dispose",D),J(I)}function J(_){re(_),g.remove(_)}function re(_){const I=g.get(_).programs;I!==void 0&&(I.forEach(function(G){ye.releaseProgram(G)}),_.isShaderMaterial&&ye.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,G,V,F,de){I===null&&(I=rt);const xe=F.isMesh&&F.matrixWorld.determinant()<0,me=ts(_,I,G,V,F);be.setMaterial(V,xe);let Me=G.index,we=1;if(V.wireframe===!0){if(Me=Te.getWireframeAttribute(G),Me===void 0)return;we=2}const Fe=G.drawRange,Re=G.attributes.position;let We=Fe.start*we,ut=(Fe.start+Fe.count)*we;de!==null&&(We=Math.max(We,de.start*we),ut=Math.min(ut,(de.start+de.count)*we)),Me!==null?(We=Math.max(We,0),ut=Math.min(ut,Me.count)):Re!=null&&(We=Math.max(We,0),ut=Math.min(ut,Re.count));const xt=ut-We;if(xt<0||xt===1/0)return;ge.setup(F,V,me,G,Me);let St,dt=L;if(Me!==null&&(St=H.get(Me),dt=pe,dt.setIndex(St)),F.isMesh)V.wireframe===!0?(be.setLineWidth(V.wireframeLinewidth*je()),dt.setMode(C.LINES)):dt.setMode(C.TRIANGLES);else if(F.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),be.setLineWidth(Pe*je()),F.isLineSegments?dt.setMode(C.LINES):F.isLineLoop?dt.setMode(C.LINE_LOOP):dt.setMode(C.LINE_STRIP)}else F.isPoints?dt.setMode(C.POINTS):F.isSprite&&dt.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)nr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))dt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,st=F._multiDrawCounts,et=F._multiDrawCount,zt=Me?H.get(Me).bytesPerElement:1,ci=g.get(V).currentProgram.getUniforms();for(let kt=0;kt<et;kt++)ci.setValue(C,"_gl_DrawID",kt),dt.render(Pe[kt]/zt,st[kt])}else if(F.isInstancedMesh)dt.renderInstances(We,xt,F.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,st=Math.min(G.instanceCount,Pe);dt.renderInstances(We,xt,st)}else dt.render(We,xt)};function Se(_,I,G){_.transparent===!0&&_.side===yn&&_.forceSinglePass===!1?(_.side=Bt,_.needsUpdate=!0,oi(_,I,G),_.side=kn,_.needsUpdate=!0,oi(_,I,G),_.side=yn):oi(_,I,G)}this.compile=function(_,I,G=null){G===null&&(G=_),A=ue.get(G),A.init(I),P.push(A),G.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),_!==G&&_.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),A.setupLights();const V=new Set;return _.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const de=F.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){const me=de[xe];Se(me,G,F),V.add(me)}else Se(de,G,F),V.add(de)}),A=P.pop(),V},this.compileAsync=function(_,I,G=null){const V=this.compile(_,I,G);return new Promise(F=>{function de(){if(V.forEach(function(xe){g.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){F(_);return}setTimeout(de,10)}Qe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ke=null;function Vt(_){Ke&&Ke(_)}function ri(){Yt.stop()}function Gn(){Yt.start()}const Yt=new ql;Yt.setAnimationLoop(Vt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(_){Ke=_,ce.setAnimationLoop(_),_===null?Yt.stop():Yt.start()},ce.addEventListener("sessionstart",ri),ce.addEventListener("sessionend",Gn),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const G=ce.enabled===!0&&ce.isPresenting===!0,V=N!==null&&(B===null||G)&&N.begin(x,B);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(I),I=ce.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,I,B),A=ue.get(_,P.length),A.init(I),P.push(A),mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Oe.setFromProjectionMatrix(mt,cn,I.reversedDepth),Xe=this.localClippingEnabled,se=_e.init(this.clippingPlanes,Xe),T=te.get(_,R.length),T.init(),R.push(T),ce.enabled===!0&&ce.isPresenting===!0){const xe=x.xr.getDepthSensingMesh();xe!==null&&mn(xe,I,-1/0,x.sortObjects)}mn(_,I,0,x.sortObjects),T.finish(),x.sortObjects===!0&&T.sort(ke,Le),Ve=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ve&&le.addToRenderList(T,_),this.info.render.frame++,se===!0&&_e.beginShadows();const F=A.state.shadowsArray;if(Ee.render(F,_,I),se===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&N.hasRenderPass())===!1){const xe=T.opaque,me=T.transmissive;if(A.setupLights(),I.isArrayCamera){const Me=I.cameras;if(me.length>0)for(let we=0,Fe=Me.length;we<Fe;we++){const Re=Me[we];dr(xe,me,_,Re)}Ve&&le.render(_);for(let we=0,Fe=Me.length;we<Fe;we++){const Re=Me[we];si(T,_,Re,Re.viewport)}}else me.length>0&&dr(xe,me,_,I),Ve&&le.render(_),si(T,_,I)}B!==null&&O===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),V&&N.end(x),_.isScene===!0&&_.onAfterRender(x,_,I),ge.resetDefaultState(),q=-1,X=null,P.pop(),P.length>0?(A=P[P.length-1],se===!0&&_e.setGlobalState(x.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?T=R[R.length-1]:T=null};function mn(_,I,G,V){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)G=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLight)A.pushLight(_),_.castShadow&&A.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Oe.intersectsSprite(_)){V&&Ze.setFromMatrixPosition(_.matrixWorld).applyMatrix4(mt);const xe=oe.update(_),me=_.material;me.visible&&T.push(_,xe,me,G,Ze.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Oe.intersectsObject(_))){const xe=oe.update(_),me=_.material;if(V&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ze.copy(_.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ze.copy(xe.boundingSphere.center)),Ze.applyMatrix4(_.matrixWorld).applyMatrix4(mt)),Array.isArray(me)){const Me=xe.groups;for(let we=0,Fe=Me.length;we<Fe;we++){const Re=Me[we],We=me[Re.materialIndex];We&&We.visible&&T.push(_,xe,We,G,Ze.z,Re)}}else me.visible&&T.push(_,xe,me,G,Ze.z,null)}}const de=_.children;for(let xe=0,me=de.length;xe<me;xe++)mn(de[xe],I,G,V)}function si(_,I,G,V){const{opaque:F,transmissive:de,transparent:xe}=_;A.setupLightsView(G),se===!0&&_e.setGlobalState(x.clippingPlanes,G),V&&be.viewport($.copy(V)),F.length>0&&ai(F,I,G),de.length>0&&ai(de,I,G),xe.length>0&&ai(xe,I,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function dr(_,I,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){const We=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new rn(1,1,{generateMipmaps:!0,type:We?pn:Xt,minFilter:ti,samples:nt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const de=A.state.transmissionRenderTarget[V.id],xe=V.viewport||$;de.setSize(xe.z*x.transmissionResolutionScale,xe.w*x.transmissionResolutionScale);const me=x.getRenderTarget(),Me=x.getActiveCubeFace(),we=x.getActiveMipmapLevel();x.setRenderTarget(de),x.getClearColor(ae),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&le.render(G);const Fe=x.toneMapping;x.toneMapping=un;const Re=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),se===!0&&_e.setGlobalState(x.clippingPlanes,V),ai(_,G,V),U.updateMultisampleRenderTarget(de),U.updateRenderTargetMipmap(de),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ut=0,xt=I.length;ut<xt;ut++){const St=I[ut],{object:dt,geometry:Pe,material:st,group:et}=St;if(st.side===yn&&dt.layers.test(V.layers)){const zt=st.side;st.side=Bt,st.needsUpdate=!0,hr(dt,G,V,Pe,st,et),st.side=zt,st.needsUpdate=!0,We=!0}}We===!0&&(U.updateMultisampleRenderTarget(de),U.updateRenderTargetMipmap(de))}x.setRenderTarget(me,Me,we),x.setClearColor(ae,ne),Re!==void 0&&(V.viewport=Re),x.toneMapping=Fe}function ai(_,I,G){const V=I.isScene===!0?I.overrideMaterial:null;for(let F=0,de=_.length;F<de;F++){const xe=_[F],{object:me,geometry:Me,group:we}=xe;let Fe=xe.material;Fe.allowOverride===!0&&V!==null&&(Fe=V),me.layers.test(G.layers)&&hr(me,I,G,Me,Fe,we)}}function hr(_,I,G,V,F,de){_.onBeforeRender(x,I,G,V,F,de),_.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),F.onBeforeRender(x,I,G,V,_,de),F.transparent===!0&&F.side===yn&&F.forceSinglePass===!1?(F.side=Bt,F.needsUpdate=!0,x.renderBufferDirect(G,I,V,F,_,de),F.side=kn,F.needsUpdate=!0,x.renderBufferDirect(G,I,V,F,_,de),F.side=yn):x.renderBufferDirect(G,I,V,F,_,de),_.onAfterRender(x,I,G,V,F,de)}function oi(_,I,G){I.isScene!==!0&&(I=rt);const V=g.get(_),F=A.state.lights,de=A.state.shadowsArray,xe=F.state.version,me=ye.getParameters(_,F.state,de,I,G),Me=ye.getProgramCacheKey(me);let we=V.programs;V.environment=_.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(_.isMeshStandardMaterial?j:Y).get(_.envMap||V.environment),V.envMapRotation=V.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,we===void 0&&(_.addEventListener("dispose",D),we=new Map,V.programs=we);let Fe=we.get(Me);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===xe)return pr(_,me),Fe}else me.uniforms=ye.getUniforms(_),_.onBeforeCompile(me,x),Fe=ye.acquireProgram(me,Me),we.set(Me,Fe),V.uniforms=me.uniforms;const Re=V.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Re.clippingPlanes=_e.uniform),pr(_,me),V.needsLights=Hn(_),V.lightsStateVersion=xe,V.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Fe,V.uniformsList=null,Fe}function fr(_){if(_.uniformsList===null){const I=_.currentProgram.getUniforms();_.uniformsList=Gr.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function pr(_,I){const G=g.get(_);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function ts(_,I,G,V,F){I.isScene!==!0&&(I=rt),U.resetTextureUnits();const de=I.fog,xe=V.isMeshStandardMaterial?I.environment:null,me=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ui,Me=(V.isMeshStandardMaterial?j:Y).get(V.envMap||xe),we=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!G.morphAttributes.position,We=!!G.morphAttributes.normal,ut=!!G.morphAttributes.color;let xt=un;V.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(xt=x.toneMapping);const St=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=St!==void 0?St.length:0,Pe=g.get(V),st=A.state.lights;if(se===!0&&(Xe===!0||_!==X)){const Pt=_===X&&V.id===q;_e.setState(V,_,Pt)}let et=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==st.state.version||Pe.outputColorSpace!==me||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Me||V.fog===!0&&Pe.fog!==de||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==_e.numPlanes||Pe.numIntersection!==_e.numIntersection)||Pe.vertexAlphas!==we||Pe.vertexTangents!==Fe||Pe.morphTargets!==Re||Pe.morphNormals!==We||Pe.morphColors!==ut||Pe.toneMapping!==xt||Pe.morphTargetsCount!==dt)&&(et=!0):(et=!0,Pe.__version=V.version);let zt=Pe.currentProgram;et===!0&&(zt=oi(V,I,F));let ci=!1,kt=!1,zi=!1;const ft=zt.getUniforms(),It=Pe.uniforms;if(be.useProgram(zt.program)&&(ci=!0,kt=!0,zi=!0),V.id!==q&&(q=V.id,kt=!0),ci||X!==_){be.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ft.setValue(C,"projectionMatrix",_.projectionMatrix),ft.setValue(C,"viewMatrix",_.matrixWorldInverse);const Ft=ft.map.cameraPosition;Ft!==void 0&&Ft.setValue(C,$e.setFromMatrixPosition(_.matrixWorld)),nt.logarithmicDepthBuffer&&ft.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ft.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),X!==_&&(X=_,kt=!0,zi=!0)}if(Pe.needsLights&&(st.state.directionalShadowMap.length>0&&ft.setValue(C,"directionalShadowMap",st.state.directionalShadowMap,U),st.state.spotShadowMap.length>0&&ft.setValue(C,"spotShadowMap",st.state.spotShadowMap,U),st.state.pointShadowMap.length>0&&ft.setValue(C,"pointShadowMap",st.state.pointShadowMap,U)),F.isSkinnedMesh){ft.setOptional(C,F,"bindMatrix"),ft.setOptional(C,F,"bindMatrixInverse");const Pt=F.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ft.setValue(C,"boneTexture",Pt.boneTexture,U))}F.isBatchedMesh&&(ft.setOptional(C,F,"batchingTexture"),ft.setValue(C,"batchingTexture",F._matricesTexture,U),ft.setOptional(C,F,"batchingIdTexture"),ft.setValue(C,"batchingIdTexture",F._indirectTexture,U),ft.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&ft.setValue(C,"batchingColorTexture",F._colorsTexture,U));const qt=G.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&ze.update(F,G,zt),(kt||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,ft.setValue(C,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(It.envMap.value=Me,It.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(It.envMapIntensity.value=I.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Gm()),kt&&(ft.setValue(C,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&ns(It,zi),de&&V.fog===!0&&Ue.refreshFogUniforms(It,de),Ue.refreshMaterialUniforms(It,V,De,Ae,A.state.transmissionRenderTarget[_.id]),Gr.upload(C,fr(Pe),It,U)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gr.upload(C,fr(Pe),It,U),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ft.setValue(C,"center",F.center),ft.setValue(C,"modelViewMatrix",F.modelViewMatrix),ft.setValue(C,"normalMatrix",F.normalMatrix),ft.setValue(C,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Pt=V.uniformsGroups;for(let Ft=0,ss=Pt.length;Ft<ss;Ft++){const Wn=Pt[Ft];ee.update(Wn,zt),ee.bind(Wn,zt)}}return zt}function ns(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function Hn(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(_,I,G){const V=g.get(_);V.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),g.get(_.texture).__webglTexture=I,g.get(_.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,I){const G=g.get(_);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0};const li=C.createFramebuffer();this.setRenderTarget=function(_,I=0,G=0){B=_,w=I,O=G;let V=null,F=!1,de=!1;if(_){const me=g.get(_);if(me.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(C.FRAMEBUFFER,me.__webglFramebuffer),$.copy(_.viewport),z.copy(_.scissor),K=_.scissorTest,be.viewport($),be.scissor(z),be.setScissorTest(K),q=-1;return}else if(me.__webglFramebuffer===void 0)U.setupRenderTarget(_);else if(me.__hasExternalTextures)U.rebindTextures(_,g.get(_.texture).__webglTexture,g.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Fe=_.depthTexture;if(me.__boundDepthTexture!==Fe){if(Fe!==null&&g.has(Fe)&&(_.width!==Fe.image.width||_.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(_)}}const Me=_.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(de=!0);const we=g.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(we[I])?V=we[I][G]:V=we[I],F=!0):_.samples>0&&U.useMultisampledRTT(_)===!1?V=g.get(_).__webglMultisampledFramebuffer:Array.isArray(we)?V=we[G]:V=we,$.copy(_.viewport),z.copy(_.scissor),K=_.scissorTest}else $.copy(W).multiplyScalar(De).floor(),z.copy(Q).multiplyScalar(De).floor(),K=ve;if(G!==0&&(V=li),be.bindFramebuffer(C.FRAMEBUFFER,V)&&be.drawBuffers(_,V),be.viewport($),be.scissor(z),be.setScissorTest(K),F){const me=g.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,G)}else if(de){const me=I;for(let Me=0;Me<_.textures.length;Me++){const we=g.get(_.textures[Me]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Me,we.__webglTexture,G,me)}}else if(_!==null&&G!==0){const me=g.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,me.__webglTexture,G)}q=-1},this.readRenderTargetPixels=function(_,I,G,V,F,de,xe,me=0){if(!(_&&_.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=g.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){be.bindFramebuffer(C.FRAMEBUFFER,Me);try{const we=_.textures[me],Fe=we.format,Re=we.type;if(!nt.textureFormatReadable(Fe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Re)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-V&&G>=0&&G<=_.height-F&&(_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(I,G,V,F,ie.convert(Fe),ie.convert(Re),de))}finally{const we=B!==null?g.get(B).__webglFramebuffer:null;be.bindFramebuffer(C.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(_,I,G,V,F,de,xe,me=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=g.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(I>=0&&I<=_.width-V&&G>=0&&G<=_.height-F){be.bindFramebuffer(C.FRAMEBUFFER,Me);const we=_.textures[me],Fe=we.format,Re=we.type;if(!nt.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.bufferData(C.PIXEL_PACK_BUFFER,de.byteLength,C.STREAM_READ),_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(I,G,V,F,ie.convert(Fe),ie.convert(Re),0);const ut=B!==null?g.get(B).__webglFramebuffer:null;be.bindFramebuffer(C.FRAMEBUFFER,ut);const xt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Wc(C,xt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,de),C.deleteBuffer(We),C.deleteSync(xt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,I=null,G=0){const V=Math.pow(2,-G),F=Math.floor(_.image.width*V),de=Math.floor(_.image.height*V),xe=I!==null?I.x:0,me=I!==null?I.y:0;U.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,xe,me,F,de),be.unbindTexture()};const is=C.createFramebuffer(),rs=C.createFramebuffer();this.copyTextureToTexture=function(_,I,G=null,V=null,F=0,de=null){de===null&&(F!==0?(nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=F,F=0):de=0);let xe,me,Me,we,Fe,Re,We,ut,xt;const St=_.isCompressedTexture?_.mipmaps[de]:_.image;if(G!==null)xe=G.max.x-G.min.x,me=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,Fe=G.min.y,Re=G.isBox3?G.min.z:0;else{const qt=Math.pow(2,-F);xe=Math.floor(St.width*qt),me=Math.floor(St.height*qt),_.isDataArrayTexture?Me=St.depth:_.isData3DTexture?Me=Math.floor(St.depth*qt):Me=1,we=0,Fe=0,Re=0}V!==null?(We=V.x,ut=V.y,xt=V.z):(We=0,ut=0,xt=0);const dt=ie.convert(I.format),Pe=ie.convert(I.type);let st;I.isData3DTexture?(U.setTexture3D(I,0),st=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(U.setTexture2DArray(I,0),st=C.TEXTURE_2D_ARRAY):(U.setTexture2D(I,0),st=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const et=C.getParameter(C.UNPACK_ROW_LENGTH),zt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ci=C.getParameter(C.UNPACK_SKIP_PIXELS),kt=C.getParameter(C.UNPACK_SKIP_ROWS),zi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,St.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,St.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,we),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Re);const ft=_.isDataArrayTexture||_.isData3DTexture,It=I.isDataArrayTexture||I.isData3DTexture;if(_.isDepthTexture){const qt=g.get(_),Pt=g.get(I),Ft=g.get(qt.__renderTarget),ss=g.get(Pt.__renderTarget);be.bindFramebuffer(C.READ_FRAMEBUFFER,Ft.__webglFramebuffer),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let Wn=0;Wn<Me;Wn++)ft&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(_).__webglTexture,F,Re+Wn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(I).__webglTexture,de,xt+Wn)),C.blitFramebuffer(we,Fe,xe,me,We,ut,xe,me,C.DEPTH_BUFFER_BIT,C.NEAREST);be.bindFramebuffer(C.READ_FRAMEBUFFER,null),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||_.isRenderTargetTexture||g.has(_)){const qt=g.get(_),Pt=g.get(I);be.bindFramebuffer(C.READ_FRAMEBUFFER,is),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,rs);for(let Ft=0;Ft<Me;Ft++)ft?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qt.__webglTexture,F,Re+Ft):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qt.__webglTexture,F),It?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,de,xt+Ft):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pt.__webglTexture,de),F!==0?C.blitFramebuffer(we,Fe,xe,me,We,ut,xe,me,C.COLOR_BUFFER_BIT,C.NEAREST):It?C.copyTexSubImage3D(st,de,We,ut,xt+Ft,we,Fe,xe,me):C.copyTexSubImage2D(st,de,We,ut,we,Fe,xe,me);be.bindFramebuffer(C.READ_FRAMEBUFFER,null),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else It?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(st,de,We,ut,xt,xe,me,Me,dt,Pe,St.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(st,de,We,ut,xt,xe,me,Me,dt,St.data):C.texSubImage3D(st,de,We,ut,xt,xe,me,Me,dt,Pe,St):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,de,We,ut,xe,me,dt,Pe,St.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,de,We,ut,St.width,St.height,dt,St.data):C.texSubImage2D(C.TEXTURE_2D,de,We,ut,xe,me,dt,Pe,St);C.pixelStorei(C.UNPACK_ROW_LENGTH,et),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,zt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ci),C.pixelStorei(C.UNPACK_SKIP_ROWS,kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zi),de===0&&I.generateMipmaps&&C.generateMipmap(st),be.unbindTexture()},this.initRenderTarget=function(_){g.get(_).__webglFramebuffer===void 0&&U.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?U.setTextureCube(_,0):_.isData3DTexture?U.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?U.setTexture2DArray(_,0):U.setTexture2D(_,0),be.unbindTexture()},this.resetState=function(){w=0,O=0,B=null,be.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function Wm(i){const e=new Hm({antialias:!0,alpha:!1,powerPreference:"high-performance"}),t=Math.max(i.clientWidth,1),n=Math.max(i.clientHeight,1);return e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(t,n,!1),e.outputColorSpace=Nt,e.toneMapping=Ga,e.toneMappingExposure=1,e.setClearColor(0,1),i.appendChild(e.domElement),e}const Xm=4294967296;function Xr(i){if(!Number.isFinite(i))return 1;const e=Math.abs(Math.floor(i))>>>0;return e===0?1:e}class $m{state;constructor(e){this.state=Xr(e)}setSeed(e){this.state=Xr(e)}next(){let e=this.state+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/Xm}signed(){return this.next()*2-1}range(e,t){return e+(t-e)*this.next()}}const sr={simResolution:{min:64,max:448,step:32},emitRate:{min:0,max:1.2,step:.01},seedInfluence:{min:0,max:8,step:.05},seedContrast:{min:.2,max:1.3,step:.01},seedHue:{min:-1,max:1,step:.01},seedColorFilter:{min:-1,max:1,step:.01},seedParallax:{min:0,max:.12,step:5e-4},seedPulseShift:{min:0,max:.08,step:5e-4},seedPulseSpeed:{min:.1,max:6,step:.01},seedPointBrightness:{min:.2,max:3.2,step:.01},seedPointSize:{min:.5,max:1.5,step:.01},seedPointContrast:{min:.3,max:3.5,step:.01},seedPointerInfluence:{min:0,max:4,step:.01},planeTilt:{min:0,max:.45,step:.005},planeTiltEase:{min:1,max:25,step:.1},sourceRadius:{min:.001,max:.019,step:5e-4},densityDissipation:{min:.984,max:1,step:2e-4},velocityDissipation:{min:.924,max:1,step:.001},buoyancy:{min:0,max:5.4,step:.01},vorticity:{min:3,max:100,step:.5},pressureIterations:{min:4,max:40,step:1},noiseScale:{min:0,max:6,step:.01},turbulence:{min:0,max:6,step:.01},advection:{min:.36,max:2,step:.01},drag:{min:0,max:.28,step:.002},opacity:{min:.88,max:1,step:.005},contrast:{min:.4,max:4,step:.01},persistence:{min:1,max:100,step:1},detailBoost:{min:.14,max:3,step:.01},shadowBoost:{min:0,max:2,step:.01},highlightBoost:{min:.46,max:3.5,step:.01},depthAmount:{min:0,max:2.5,step:.01},depthLayers:{min:1,max:12,step:1},lightStrength:{min:0,max:2,step:.01},rimStrength:{min:0,max:2,step:.01},asciiScale:{min:1,max:7,step:1},asciiLayers:{min:1,max:11,step:1},asciiBlend:{min:0,max:2,step:.01},asciiMix:{min:0,max:2,step:.01},asciiJitter:{min:0,max:4,step:.01},asciiSpacingX:{min:.35,max:2.8,step:.01},asciiSpacingY:{min:.35,max:2.8,step:.01},asciiThreshold:{min:0,max:1,step:.01},asciiFlowDistort:{min:0,max:12,step:.05},asciiStyle:{min:0,max:4,step:1},pointerDarkness:{min:0,max:.62,step:.01},pointerForce:{min:.8,max:8,step:.1},pointerRadius:{min:.001,max:.018,step:5e-4},pointerTrail:{min:.2,max:4,step:.01}},io={simResolution:256,emitRate:.2,seedInfluence:3.2,seedContrast:.7,seedHue:0,seedColorFilter:.98,seedParallax:.02,seedPulseShift:.01,seedPulseSpeed:1.2,seedPointBrightness:1.5,seedPointSize:1,seedPointContrast:.66,seedPointerInfluence:1,planeTilt:.145,planeTiltEase:8.5,sourceRadius:.01,densityDissipation:.992,velocityDissipation:.962,buoyancy:2.7,vorticity:51.5,pressureIterations:22,noiseScale:3,turbulence:3,advection:1.18,drag:.05,opacity:.94,contrast:2.2,persistence:100,detailBoost:1.57,shadowBoost:1,highlightBoost:1.98,depthAmount:0,depthLayers:1,lightStrength:0,rimStrength:0,asciiScale:4,asciiLayers:6,asciiBlend:1,asciiMix:1.9,asciiJitter:2,asciiSpacingX:1,asciiSpacingY:1,asciiThreshold:.38,asciiFlowDistort:9.95,asciiStyle:2,pointerDarkness:.31,pointerForce:4.4,pointerRadius:.0095,pointerTrail:1},al=.05,ol=.2,ll=.08,cl=["seed-default.png","seed-default.jpg","seed-default.jpeg","seed.png","seed.jpg","seed.jpeg"],ul=["seed-default_03.mp4","seed-default_03.webm","seed.mp4","seed.webm"],dl=["seed-default_02.png","seed-default_02.jpg","seed-default_02.jpeg"];function hl(i){const e=sr.persistence,t=Math.max(e.max-e.min,1e-6);return ot.clamp((i-e.min)/t,0,1)}function Ie(i,e){const t=sr[i];return Math.min(t.max,Math.max(t.min,e))}function fl(i){const e=Math.round(Ie("asciiStyle",i.asciiStyle)),t=Math.round(Ie("asciiLayers",i.asciiLayers)),n=Math.round(Ie("depthLayers",i.depthLayers));return{simResolution:Math.round(Ie("simResolution",i.simResolution)/32)*32,emitRate:Ie("emitRate",i.emitRate),seedInfluence:Ie("seedInfluence",i.seedInfluence),seedContrast:Ie("seedContrast",i.seedContrast),seedHue:Ie("seedHue",i.seedHue),seedColorFilter:Ie("seedColorFilter",i.seedColorFilter),seedParallax:Ie("seedParallax",i.seedParallax),seedPulseShift:Ie("seedPulseShift",i.seedPulseShift),seedPulseSpeed:Ie("seedPulseSpeed",i.seedPulseSpeed),seedPointBrightness:Ie("seedPointBrightness",i.seedPointBrightness),seedPointSize:Ie("seedPointSize",i.seedPointSize),seedPointContrast:Ie("seedPointContrast",i.seedPointContrast),seedPointerInfluence:Ie("seedPointerInfluence",i.seedPointerInfluence),planeTilt:Ie("planeTilt",i.planeTilt),planeTiltEase:Ie("planeTiltEase",i.planeTiltEase),sourceRadius:Ie("sourceRadius",i.sourceRadius),densityDissipation:Ie("densityDissipation",i.densityDissipation),velocityDissipation:Ie("velocityDissipation",i.velocityDissipation),buoyancy:Ie("buoyancy",i.buoyancy),vorticity:Ie("vorticity",i.vorticity),pressureIterations:Math.round(Ie("pressureIterations",i.pressureIterations)),noiseScale:Ie("noiseScale",i.noiseScale),turbulence:Ie("turbulence",i.turbulence),advection:Ie("advection",i.advection),drag:Ie("drag",i.drag),opacity:Ie("opacity",i.opacity),contrast:Ie("contrast",i.contrast),persistence:Ie("persistence",i.persistence),detailBoost:Ie("detailBoost",i.detailBoost),shadowBoost:Ie("shadowBoost",i.shadowBoost),highlightBoost:Ie("highlightBoost",i.highlightBoost),depthAmount:Ie("depthAmount",i.depthAmount),depthLayers:n,lightStrength:Ie("lightStrength",i.lightStrength),rimStrength:Ie("rimStrength",i.rimStrength),asciiScale:Math.round(Ie("asciiScale",i.asciiScale)),asciiLayers:t,asciiBlend:Ie("asciiBlend",i.asciiBlend),asciiMix:Ie("asciiMix",i.asciiMix),asciiJitter:Ie("asciiJitter",i.asciiJitter),asciiSpacingX:Ie("asciiSpacingX",i.asciiSpacingX),asciiSpacingY:Ie("asciiSpacingY",i.asciiSpacingY),asciiThreshold:Ie("asciiThreshold",i.asciiThreshold),asciiFlowDistort:Ie("asciiFlowDistort",i.asciiFlowDistort),asciiStyle:e,pointerDarkness:Ie("pointerDarkness",i.pointerDarkness),pointerForce:Ie("pointerForce",i.pointerForce),pointerRadius:Ie("pointerRadius",i.pointerRadius),pointerTrail:Ie("pointerTrail",i.pointerTrail)}}function Mn(i){const e=i.read;i.read=i.write,i.write=e}function Wt(){return`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`}function Ym(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uSource;
uniform sampler2D uVelocity;
uniform vec2 uTexel;
uniform float uDt;
uniform float uDissipation;
uniform float uVelocityScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

vec4 encodeVelocity(vec2 v) {
  return vec4(v * 0.5 + 0.5, 0.0, 1.0);
}

void main() {
  vec2 vel = decodeVelocity(texture2D(uVelocity, vUv));
  vec2 coord = clamp(vUv - vel * uDt * uVelocityScale, vec2(0.0), vec2(1.0));
  vec2 advected = decodeVelocity(texture2D(uSource, coord));

  advected *= uDissipation;

  if (vUv.x < uTexel.x || vUv.x > 1.0 - uTexel.x) {
    advected.x = 0.0;
  }
  if (vUv.y < uTexel.y || vUv.y > 1.0 - uTexel.y) {
    advected.y = 0.0;
  }

  gl_FragColor = encodeVelocity(advected);
}
`}function qm(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uSource;
uniform sampler2D uVelocity;
uniform float uDt;
uniform float uDissipation;
uniform float uVelocityScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

void main() {
  vec2 vel = decodeVelocity(texture2D(uVelocity, vUv));
  vec2 coord = clamp(vUv - vel * uDt * uVelocityScale, vec2(0.0), vec2(1.0));
  float density = texture2D(uSource, coord).r;
  density *= uDissipation;

  gl_FragColor = vec4(clamp(density, 0.0, 1.0), 0.0, 0.0, 1.0);
}
`}function Km(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform sampler2D uDensity;
uniform sampler2D uSeedImage;
uniform sampler2D uSeedImageMorph;
uniform vec2 uTexel;
uniform vec2 uResolution;
uniform vec2 uSeedSize;
uniform vec2 uSeedMorphSize;
uniform float uSeedMorph;
uniform float uDt;
uniform float uBuoyancy;
uniform float uDrag;
uniform float uNoiseScale;
uniform float uTurbulence;
uniform float uSeedInfluence;
uniform float uSeedContrast;
uniform float uTime;
uniform vec2 uSeed;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

vec4 encodeVelocity(vec2 v) {
  return vec4(v * 0.5 + 0.5, 0.0, 1.0);
}

float hash21(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise2(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec2 toSeedUvContain(vec2 uv, vec2 seedSize) {
  if (seedSize.x < 1.0 || seedSize.y < 1.0) {
    return vec2(-1.0);
  }

  float viewAspect = uResolution.x / max(uResolution.y, 1.0);
  float seedAspect = seedSize.x / max(seedSize.y, 1.0);
  vec2 suv = uv;

  if (viewAspect > seedAspect) {
    float fit = seedAspect / viewAspect;
    suv.x = (uv.x - 0.5) / max(fit, 1e-6) + 0.5;
  } else {
    float fit = viewAspect / seedAspect;
    suv.y = (uv.y - 0.5) / max(fit, 1e-6) + 0.5;
  }

  if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) {
    return vec2(-1.0);
  }

  return suv;
}

float sampleSeedA(vec2 uv) {
  vec2 suv = toSeedUvContain(uv, uSeedSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return 0.0;
  }

  vec3 seedRgb = texture2D(uSeedImage, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedB(vec2 uv, float fallback) {
  vec2 suv = toSeedUvContain(uv, uSeedMorphSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return fallback;
  }

  vec3 seedRgb = texture2D(uSeedImageMorph, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedContain(vec2 uv) {
  float seedA = sampleSeedA(uv);
  float seedB = sampleSeedB(uv, seedA);
  float seedLuma = mix(seedA, seedB, clamp(uSeedMorph, 0.0, 1.0));
  return clamp((seedLuma - 0.5) * uSeedContrast + 0.5, 0.0, 1.0);
}

void main() {
  vec2 velocity = decodeVelocity(texture2D(uVelocity, vUv));
  float density = texture2D(uDensity, vUv).r;
  float smokeMask = smoothstep(0.001, 0.32, density);
  float seedRaw = sampleSeedContain(vUv);
  float seedMask = smoothstep(0.14, 0.92, pow(clamp(seedRaw, 0.0, 1.0), 0.9));

  vec2 nUv = vUv * (3.0 + uNoiseScale * 2.5) + uSeed + vec2(0.0, uTime * 0.15);
  float n1 = noise2(nUv);
  float n2 = noise2(nUv + vec2(7.1, -3.4));
  vec2 noiseForce = vec2(n1 - 0.5, n2 - 0.5);
  noiseForce *= (0.02 + density * 0.46) * uNoiseScale * uTurbulence * smokeMask;
  float seedNoise = noise2(nUv * 1.85 + vec2(4.7, -2.3));
  vec2 seedForce = vec2(seedNoise - 0.5, 1.0 + abs(n1 - 0.5) * 1.35);
  seedForce *= seedMask * uSeedInfluence * (0.8 + uTurbulence * 0.22);

  velocity += noiseForce * uDt;
  velocity += seedForce * uDt * 1.5;
  velocity.y += density * 1.25 * uBuoyancy * uDt;
  velocity *= max(0.0, 1.0 - uDrag * uDt);

  if (vUv.x < uTexel.x || vUv.x > 1.0 - uTexel.x) {
    velocity.x = 0.0;
  }
  if (vUv.y < uTexel.y || vUv.y > 1.0 - uTexel.y) {
    velocity.y = 0.0;
  }

  gl_FragColor = encodeVelocity(clamp(velocity, vec2(-2.0), vec2(2.0)));
}
`}function Zm(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform vec2 uTexel;
uniform float uCurlScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

float encodeSigned(float v, float scale) {
  return clamp(v * scale + 0.5, 0.0, 1.0);
}

void main() {
  vec2 velL = decodeVelocity(texture2D(uVelocity, clamp(vUv - vec2(uTexel.x, 0.0), vec2(0.0), vec2(1.0))));
  vec2 velR = decodeVelocity(texture2D(uVelocity, clamp(vUv + vec2(uTexel.x, 0.0), vec2(0.0), vec2(1.0))));
  vec2 velB = decodeVelocity(texture2D(uVelocity, clamp(vUv - vec2(0.0, uTexel.y), vec2(0.0), vec2(1.0))));
  vec2 velT = decodeVelocity(texture2D(uVelocity, clamp(vUv + vec2(0.0, uTexel.y), vec2(0.0), vec2(1.0))));

  float curl = 0.5 * ((velR.y - velL.y) - (velT.x - velB.x));
  gl_FragColor = vec4(encodeSigned(curl, uCurlScale), 0.0, 0.0, 1.0);
}
`}function jm(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform vec2 uTexel;
uniform float uDt;
uniform float uVorticity;
uniform float uCurlScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

float decodeSigned(float c, float scale) {
  return (c - 0.5) / max(scale, 1e-6);
}

vec4 encodeVelocity(vec2 v) {
  return vec4(v * 0.5 + 0.5, 0.0, 1.0);
}

void main() {
  vec2 velocity = decodeVelocity(texture2D(uVelocity, vUv));

  float curlL = decodeSigned(texture2D(uCurl, clamp(vUv - vec2(uTexel.x, 0.0), vec2(0.0), vec2(1.0))).r, uCurlScale);
  float curlR = decodeSigned(texture2D(uCurl, clamp(vUv + vec2(uTexel.x, 0.0), vec2(0.0), vec2(1.0))).r, uCurlScale);
  float curlB = decodeSigned(texture2D(uCurl, clamp(vUv - vec2(0.0, uTexel.y), vec2(0.0), vec2(1.0))).r, uCurlScale);
  float curlT = decodeSigned(texture2D(uCurl, clamp(vUv + vec2(0.0, uTexel.y), vec2(0.0), vec2(1.0))).r, uCurlScale);
  float curlC = decodeSigned(texture2D(uCurl, vUv).r, uCurlScale);

  vec2 grad = vec2(abs(curlT) - abs(curlB), abs(curlR) - abs(curlL));
  float lengthGrad = max(length(grad), 1e-5);
  vec2 force = grad / lengthGrad;
  force *= curlC * uVorticity;

  velocity += force * uDt;
  gl_FragColor = encodeVelocity(clamp(velocity, vec2(-2.0), vec2(2.0)));
}
`}function Jm(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform vec2 uPoint;
uniform vec2 uAdd;
uniform float uRadius;
uniform float uGain;
uniform vec2 uTexel;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

vec4 encodeVelocity(vec2 v) {
  return vec4(v * 0.5 + 0.5, 0.0, 1.0);
}

float gaussian(vec2 uv, vec2 center, float radius) {
  vec2 q = (uv - center) / max(radius, 1e-5);
  return exp(-dot(q, q));
}

void main() {
  vec2 velocity = decodeVelocity(texture2D(uVelocity, vUv));
  float g = gaussian(vUv, uPoint, uRadius);

  velocity += uAdd * g * uGain;

  if (vUv.x < uTexel.x || vUv.x > 1.0 - uTexel.x) {
    velocity.x = 0.0;
  }
  if (vUv.y < uTexel.y || vUv.y > 1.0 - uTexel.y) {
    velocity.y = 0.0;
  }

  gl_FragColor = encodeVelocity(clamp(velocity, vec2(-2.0), vec2(2.0)));
}
`}function Qm(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uDensity;
uniform vec2 uPoint;
uniform float uRadius;
uniform float uValue;

float gaussian(vec2 uv, vec2 center, float radius) {
  vec2 q = (uv - center) / max(radius, 1e-5);
  return exp(-dot(q, q));
}

void main() {
  float density = texture2D(uDensity, vUv).r;
  float add = gaussian(vUv, uPoint, uRadius) * uValue;

  density = clamp(density + add, 0.0, 1.0);
  gl_FragColor = vec4(density, 0.0, 0.0, 1.0);
}
`}function eg(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform vec2 uTexel;
uniform float uDivergenceScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

float encodeSigned(float v, float scale) {
  return clamp(v * scale + 0.5, 0.0, 1.0);
}

vec2 sampleVelocity(vec2 uv) {
  return decodeVelocity(texture2D(uVelocity, clamp(uv, vec2(0.0), vec2(1.0))));
}

void main() {
  vec2 velC = sampleVelocity(vUv);

  vec2 velL = vUv.x <= uTexel.x ? vec2(-velC.x, velC.y) : sampleVelocity(vUv - vec2(uTexel.x, 0.0));
  vec2 velR = vUv.x >= 1.0 - uTexel.x ? vec2(-velC.x, velC.y) : sampleVelocity(vUv + vec2(uTexel.x, 0.0));
  vec2 velB = vUv.y <= uTexel.y ? vec2(velC.x, -velC.y) : sampleVelocity(vUv - vec2(0.0, uTexel.y));
  vec2 velT = vUv.y >= 1.0 - uTexel.y ? vec2(velC.x, -velC.y) : sampleVelocity(vUv + vec2(0.0, uTexel.y));

  float divergence = 0.5 * ((velR.x - velL.x) + (velT.y - velB.y));
  gl_FragColor = vec4(encodeSigned(divergence, uDivergenceScale), 0.0, 0.0, 1.0);
}
`}function tg(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uPressure;
uniform sampler2D uDivergence;
uniform vec2 uTexel;
uniform float uPressureScale;
uniform float uDivergenceScale;

float decodeSigned(float c, float scale) {
  return (c - 0.5) / max(scale, 1e-6);
}

float encodeSigned(float v, float scale) {
  return clamp(v * scale + 0.5, 0.0, 1.0);
}

void main() {
  float pC = decodeSigned(texture2D(uPressure, vUv).r, uPressureScale);

  float pL = vUv.x <= uTexel.x
    ? pC
    : decodeSigned(texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).r, uPressureScale);
  float pR = vUv.x >= 1.0 - uTexel.x
    ? pC
    : decodeSigned(texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).r, uPressureScale);
  float pB = vUv.y <= uTexel.y
    ? pC
    : decodeSigned(texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).r, uPressureScale);
  float pT = vUv.y >= 1.0 - uTexel.y
    ? pC
    : decodeSigned(texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).r, uPressureScale);

  float div = decodeSigned(texture2D(uDivergence, vUv).r, uDivergenceScale);
  float nextPressure = (pL + pR + pB + pT - div) * 0.25;

  gl_FragColor = vec4(encodeSigned(nextPressure, uPressureScale), 0.0, 0.0, 1.0);
}
`}function ng(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform sampler2D uPressure;
uniform vec2 uTexel;
uniform float uPressureScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

vec4 encodeVelocity(vec2 v) {
  return vec4(v * 0.5 + 0.5, 0.0, 1.0);
}

float decodeSigned(float c, float scale) {
  return (c - 0.5) / max(scale, 1e-6);
}

void main() {
  vec2 velocity = decodeVelocity(texture2D(uVelocity, vUv));

  float pC = decodeSigned(texture2D(uPressure, vUv).r, uPressureScale);

  float pL = vUv.x <= uTexel.x
    ? pC
    : decodeSigned(texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).r, uPressureScale);
  float pR = vUv.x >= 1.0 - uTexel.x
    ? pC
    : decodeSigned(texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).r, uPressureScale);
  float pB = vUv.y <= uTexel.y
    ? pC
    : decodeSigned(texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).r, uPressureScale);
  float pT = vUv.y >= 1.0 - uTexel.y
    ? pC
    : decodeSigned(texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).r, uPressureScale);

  velocity -= vec2(pR - pL, pT - pB) * 0.5;

  if (vUv.x < uTexel.x || vUv.x > 1.0 - uTexel.x) {
    velocity.x = 0.0;
  }
  if (vUv.y < uTexel.y || vUv.y > 1.0 - uTexel.y) {
    velocity.y = 0.0;
  }

  gl_FragColor = encodeVelocity(clamp(velocity, vec2(-2.0), vec2(2.0)));
}
`}function ig(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uDensity;
uniform sampler2D uAsciiAtlas;
uniform sampler2D uVelocity;
uniform sampler2D uSeedImage;
uniform sampler2D uSeedImageMorph;
uniform vec2 uTexel;
uniform vec2 uResolution;
uniform vec2 uSeedSize;
uniform vec2 uSeedMorphSize;
uniform vec2 uPointerUv;
uniform float uTime;
uniform float uOpacity;
uniform float uContrast;
uniform float uPersistence;
uniform float uDetailBoost;
uniform float uShadowBoost;
uniform float uHighlightBoost;
uniform float uAsciiScale;
uniform float uAsciiLayers;
uniform float uAsciiBlend;
uniform float uAsciiMix;
uniform float uAsciiJitter;
uniform float uAsciiSpacingX;
uniform float uAsciiSpacingY;
uniform float uAsciiThreshold;
uniform float uAsciiFlowDistort;
uniform float uAsciiStyle;
uniform float uSeedInfluence;
uniform float uSeedContrast;
uniform float uSeedHue;
uniform float uSeedColorFilter;
uniform float uSeedParallax;
uniform float uSeedPulseShift;
uniform float uSeedPulseSpeed;
uniform float uSeedPointBrightness;
uniform float uSeedPointSize;
uniform float uSeedPointContrast;
uniform float uSeedPointerInfluence;
uniform float uSeedVisible;
uniform float uSeedMorph;
uniform float uSeedBgOpacity;
uniform float uPointerRadius;
uniform float uPointerActive;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 hueToRgb(float hue) {
  vec3 rgb = clamp(abs(mod(hue * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return rgb * rgb * (3.0 - 2.0 * rgb);
}

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

vec2 toSeedUvContain(vec2 uv, vec2 seedSize) {
  if (uSeedVisible < 0.5 || seedSize.x < 1.0 || seedSize.y < 1.0) {
    return vec2(-1.0);
  }

  float viewAspect = uResolution.x / max(uResolution.y, 1.0);
  float seedAspect = seedSize.x / max(seedSize.y, 1.0);
  vec2 suv = uv;

  if (viewAspect > seedAspect) {
    float fit = seedAspect / viewAspect;
    suv.x = (uv.x - 0.5) / max(fit, 1e-6) + 0.5;
  } else {
    float fit = viewAspect / seedAspect;
    suv.y = (uv.y - 0.5) / max(fit, 1e-6) + 0.5;
  }

  if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) {
    return vec2(-1.0);
  }

  return suv;
}

float sampleSeedA(vec2 uv) {
  vec2 suv = toSeedUvContain(uv, uSeedSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return 0.0;
  }

  vec3 seedRgb = texture2D(uSeedImage, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedB(vec2 uv, float fallback) {
  vec2 suv = toSeedUvContain(uv, uSeedMorphSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return fallback;
  }

  vec3 seedRgb = texture2D(uSeedImageMorph, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedContain(vec2 uv) {
  float seedA = sampleSeedA(uv);
  float seedB = sampleSeedB(uv, seedA);
  float seedLuma = mix(seedA, seedB, clamp(uSeedMorph, 0.0, 1.0));
  return clamp((seedLuma - 0.5) * uSeedContrast + 0.5, 0.0, 1.0);
}

float pointLayer(vec2 fragCoord, vec2 baseUv, float cellSize, float jitter, float densityCtrl, float seed) {
  float cell = max(1.0, cellSize);
  vec2 cellVec = vec2(
    cell * max(0.35, uAsciiSpacingX),
    cell * max(0.35, uAsciiSpacingY)
  );
  vec2 velAtPixel = decodeVelocity(texture2D(uVelocity, baseUv));
  float distort = 1.0 + uAsciiFlowDistort * (2.2 + densityCtrl * 1.5);
  float flowSpeed = 0.010 + densityCtrl * 0.018 + jitter * 0.006;
  vec2 flowCoord = fragCoord - velAtPixel * uResolution * flowSpeed * distort * (0.7 + seed * 0.06);
  float localDensity = texture2D(uDensity, baseUv).r;
  flowCoord += velAtPixel * uResolution * (0.002 + uAsciiFlowDistort * 0.011) * (0.22 + localDensity * 0.95);
  vec2 grid = floor(flowCoord / cellVec);
  vec2 local = fract(flowCoord / cellVec) - 0.5;

  vec2 jitterVec = vec2(
    hash21(grid + vec2(seed, 11.17)),
    hash21(grid + vec2(7.13, seed + 3.71))
  ) - 0.5;
  vec2 warpedGrid = grid + 0.5 + jitterVec * jitter * (1.2 + uAsciiFlowDistort * 1.4);
  vec2 sampleUv = clamp((warpedGrid * cellVec) / max(uResolution, vec2(1.0)), vec2(0.0), vec2(1.0));
  vec2 velAtCell = decodeVelocity(texture2D(uVelocity, sampleUv));
  sampleUv = clamp(
    sampleUv - velAtCell * (0.04 + densityCtrl * 0.09) * (1.0 + uAsciiFlowDistort * 3.0),
    vec2(0.0),
    vec2(1.0)
  );
  float density = texture2D(uDensity, sampleUv).r;

  float rnd = hash21(grid + vec2(seed * 1.37, seed * 2.41));
  float threshold = mix(0.92, 0.18, densityCtrl);
  float occupancy = smoothstep(threshold - 0.16, threshold + 0.16, density + (rnd - 0.5) * 0.22);
  float radius = length(local * (1.0 + (rnd - 0.5) * 0.4));
  float disc = 1.0 - smoothstep(0.06, 0.56, radius);
  float brightness = smoothstep(0.04, 0.96, density);

  return occupancy * disc * brightness;
}

float asciiLayer(vec2 fragCoord, vec2 baseUv, float cellSize, float jitter, float styleShift, float seed) {
  float cell = max(3.0, cellSize);
  vec2 cellVec = vec2(
    cell * max(0.35, uAsciiSpacingX),
    cell * max(0.35, uAsciiSpacingY)
  );
  vec2 velAtPixel = decodeVelocity(texture2D(uVelocity, baseUv));
  float flowDistort = 1.0 + uAsciiFlowDistort * 2.8;
  vec2 flowCoord = fragCoord - velAtPixel * uResolution * (0.007 + jitter * 0.003 + seed * 0.0012) * flowDistort;
  vec2 grid = floor(flowCoord / cellVec);
  vec2 local = fract(flowCoord / cellVec);

  vec2 jitterVec = vec2(
    hash21(grid + vec2(13.7 + seed, 2.3)),
    hash21(grid + vec2(3.1, 17.9 + seed))
  ) - 0.5;

  vec2 center = (grid + 0.5 + jitterVec * jitter * (0.55 + uAsciiFlowDistort * 0.95)) * cellVec;
  vec2 sampleUv = clamp(center / max(uResolution, vec2(1.0)), vec2(0.0), vec2(1.0));
  vec2 velAtCell = decodeVelocity(texture2D(uVelocity, sampleUv));
  sampleUv = clamp(sampleUv - velAtCell * (0.03 + jitter * 0.018) * (1.0 + uAsciiFlowDistort * 2.8), vec2(0.0), vec2(1.0));

  float density = texture2D(uDensity, sampleUv).r;
  float glyphIndex = floor(clamp(density * 15.999 + styleShift, 0.0, 15.0));
  float gx = mod(glyphIndex, 4.0);
  float gy = floor(glyphIndex / 4.0);
  vec2 atlasUv = (vec2(gx, gy) + vec2(local.x, 1.0 - local.y)) / 4.0;
  float glyph = texture2D(uAsciiAtlas, atlasUv).r;
  float glyphThreshold = clamp(uAsciiThreshold, 0.0, 1.0);
  glyph = smoothstep(glyphThreshold - 0.14, glyphThreshold + 0.14, glyph);
  float mask = smoothstep(0.04, 0.92, density);

  return glyph * mask;
}

float seedPointCloudLayer(vec2 fragCoord, vec2 baseUv) {
  if (uSeedVisible < 0.5 || uSeedSize.x < 1.0 || uSeedSize.y < 1.0) {
    return 0.0;
  }

  vec2 parallaxOffset = (vec2(0.5, 0.5) - uPointerUv) * uSeedParallax;
  vec2 parallaxPx = parallaxOffset * uResolution;

  float pulseSpeed = max(0.1, uSeedPulseSpeed);
  float breathSigned = sin(uTime * (0.45 + pulseSpeed * 0.85));
  float pulseStrength = clamp(uSeedPulseShift * 28.0, 0.0, 2.0);
  float pulse = max(0.55, 1.0 + breathSigned * 0.22 * pulseStrength);
  float pulseGain = max(0.2, 1.0 + abs(breathSigned) * 0.18 * pulseStrength);

  float pointSize = max(0.2, uSeedPointSize);
  float cell = max(1.5, uAsciiScale * 0.9 * pointSize);
  vec2 cellVec = vec2(
    cell * max(0.18, uAsciiSpacingX * 0.42),
    cell * max(0.18, uAsciiSpacingY * 0.42)
  );

  float seedAtBase = smoothstep(0.14, 0.94, sampleSeedContain(baseUv));
  vec2 chestCenter = vec2(0.5, 0.57);
  vec2 chestVec = baseUv - chestCenter;
  float chestMask = smoothstep(0.82, 0.08, length(chestVec * vec2(1.22, 0.78))) * seedAtBase;
  vec2 chestDir = normalize(chestVec + vec2(1e-5, 2e-5));
  float breathMotion = (0.0012 + 0.0065 * pulseStrength) * chestMask;
  vec2 breathOffsetUv = chestDir * breathSigned * breathMotion;
  breathOffsetUv.y -= breathSigned * breathMotion * 0.34;
  vec2 movedUv = clamp(baseUv + breathOffsetUv, vec2(0.0), vec2(1.0));

  vec2 vel = decodeVelocity(texture2D(uVelocity, movedUv));
  float density = texture2D(uDensity, movedUv).r;
  float localFlow = length(vel);
  float pointerRadius = max(0.004, uPointerRadius * 4.0);
  vec2 pointerDelta = movedUv - uPointerUv;
  float pointerDist = length(pointerDelta);
  float pointerFalloff = exp(-pow(pointerDist / pointerRadius, 2.0)) * uPointerActive;
  float pointerBoost = 1.0 + pointerFalloff * uSeedPointerInfluence * 1.6;
  float flowScale = 0.007 * (1.0 + uSeedInfluence * 0.25);
  vec2 flowCoord = (fragCoord - parallaxPx) - vel * uResolution * flowScale * (0.55 + density * 2.2);
  flowCoord += vec2(vel.y, -vel.x) * uResolution * (0.001 + density * 0.005) * (1.0 + uSeedInfluence * 0.35);
  flowCoord += vec2(-vel.y, vel.x) * uResolution * localFlow * 0.0028 * pointerBoost;
  flowCoord -= vel * uResolution * pointerFalloff * uSeedPointerInfluence * 0.018;
  flowCoord += breathOffsetUv * uResolution * (1.8 + pulseStrength * 0.5);
  vec2 grid = floor(flowCoord / cellVec);
  vec2 local = fract(flowCoord / cellVec) - 0.5;

  vec2 anchorGrid = floor((fragCoord - parallaxPx) / cellVec);
  vec2 jitterFlow = vec2(
    hash21(grid + vec2(19.17, 3.91)),
    hash21(grid + vec2(7.41, 13.73))
  ) - 0.5;
  vec2 jitterAnchor = vec2(
    hash21(anchorGrid + vec2(19.17, 3.91)),
    hash21(anchorGrid + vec2(7.41, 13.73))
  ) - 0.5;
  float densityFlowInfluence = smoothstep(0.02, 0.38, density);
  float pointerFlowInfluence = clamp(pointerFalloff * (0.3 + uSeedPointerInfluence * 0.45), 0.0, 1.0);
  float flowInfluence = clamp(max(densityFlowInfluence, pointerFlowInfluence), 0.0, 1.0);
  vec2 jitterVec = mix(jitterAnchor, jitterFlow, flowInfluence);
  vec2 flowWarped = grid + 0.5 + jitterVec * (0.42 + uAsciiJitter * 0.22);
  vec2 flowUv = clamp((flowWarped * cellVec) / max(uResolution, vec2(1.0)), vec2(0.0), vec2(1.0));
  vec2 flowVel = decodeVelocity(texture2D(uVelocity, flowUv));
  flowUv = clamp(flowUv - flowVel * (0.018 + density * 0.08), vec2(0.0), vec2(1.0));
  vec2 anchorWarped = anchorGrid + 0.5 + jitterAnchor * (0.42 + uAsciiJitter * 0.22);
  vec2 anchorUv = clamp((anchorWarped * cellVec) / max(uResolution, vec2(1.0)), vec2(0.0), vec2(1.0));

  float seedSampleAnchor = sampleSeedContain(anchorUv);
  float seedSampleFlow = sampleSeedContain(flowUv);
  float seedSample = mix(seedSampleAnchor, seedSampleFlow, flowInfluence);
  seedSample = clamp((seedSample - 0.5) * uSeedPointContrast + 0.5, 0.0, 1.0);
  float seedMask = smoothstep(0.18, 0.9, seedSample);

  float flowStretch = 1.0 + density * (0.55 + uSeedPointerInfluence * 0.15);
  float dotMask = 1.0 - smoothstep(
    0.10,
    0.58,
    length((local / (pulse * pointSize * flowStretch)) * (1.0 + jitterVec * 0.55))
  );
  float pointKeep = step(0.58, hash21(mix(anchorGrid, grid, flowInfluence) + vec2(29.1, 47.3)));
  return seedMask * dotMask * pointKeep * pulseGain * (1.0 + pointerFalloff * uSeedPointerInfluence * 0.6);
}

void main() {
  vec2 planeCoord = vUv * uResolution;
  float dC = texture2D(uDensity, vUv).r;
  float dL = texture2D(uDensity, vUv - vec2(uTexel.x, 0.0)).r;
  float dR = texture2D(uDensity, vUv + vec2(uTexel.x, 0.0)).r;
  float dB = texture2D(uDensity, vUv - vec2(0.0, uTexel.y)).r;
  float dT = texture2D(uDensity, vUv + vec2(0.0, uTexel.y)).r;

  float smoothD = mix(dC, (dL + dR + dB + dT) * 0.25, 0.42);
  vec2 grad = vec2(dR - dL, dT - dB);
  float edge = length(grad);
  float detail = edge * (1.0 + uDetailBoost * 2.2);

  float softKnee = smoothD / (smoothD + max(0.22, 0.40 - uHighlightBoost * 0.08));
  float contrastT = clamp((uContrast - 0.6) / 1.6, 0.0, 1.0);
  float gamma = max(0.35, mix(1.8, 0.68, contrastT) - uDetailBoost * 0.25);
  float body = pow(clamp(softKnee, 0.0, 1.0), gamma);
  float highlight = smoothstep(0.32 - uHighlightBoost * 0.12, 1.0, softKnee + detail * (0.20 + uHighlightBoost * 0.2));
  float shadow = smoothstep(0.02, 0.4, 1.0 - softKnee) * uShadowBoost * 0.45;
  float smoke = body * (0.66 + uHighlightBoost * 0.08) + highlight * (0.34 + uHighlightBoost * 0.46) - detail * (0.06 + uShadowBoost * 0.1) - shadow;
  smoke = clamp(smoke, 0.0, 1.0);

  float baseCell = max(1.0, uAsciiScale);
  float layers = clamp(floor(uAsciiLayers + 0.5), 1.0, 6.0);
  float densityCtrl = clamp(uAsciiBlend, 0.0, 2.0);
  float densityCtrlN = clamp(densityCtrl * 0.5, 0.0, 1.0);
  float pointJitter = uAsciiJitter;

  float pointField = 0.0;
  float pointWeight = 0.0;
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    if (fi >= layers) {
      break;
    }

    float layerT = fi / max(layers - 1.0, 1.0);
    float cell = baseCell * mix(0.58, 1.75, layerT);
    vec2 layerDrift = vec2(
      sin(uTime * 0.9 + fi * 2.1),
      cos(uTime * 0.73 + fi * 1.7)
    ) * pointJitter * (1.2 + fi * 0.8);
    vec2 layerUv = clamp(vUv + layerDrift * uTexel * (0.35 + fi * 0.08), vec2(0.0), vec2(1.0));

    float layer = pointLayer(
      planeCoord + layerDrift * cell,
      layerUv,
      cell,
      pointJitter * (0.6 + fi * 0.2),
      densityCtrlN,
      fi * 17.31 + 1.0
    );

    float w = exp(-fi * 0.45);
    pointField += layer * w;
    pointWeight += w;
  }
  pointField /= max(pointWeight, 1e-5);

  float pointSmoke = pointField * (0.26 + smoke * (1.2 + detail * 2.8));
  pointSmoke += detail * 0.08 * densityCtrlN;
  pointSmoke = clamp(pointSmoke, 0.0, 1.0);

  float asciiMixStrength = clamp(uAsciiMix, 0.0, 2.0);
  float asciiMix = clamp(asciiMixStrength * 0.5, 0.0, 1.0);
  float asciiInk = 0.0;
  if (asciiMix > 0.001) {
    float asciiLayers = clamp(min(layers, 4.0), 1.0, 4.0);
    float asciiWeight = 0.0;
    float style = clamp(uAsciiStyle, 0.0, 4.0);

    for (int i = 0; i < 4; i++) {
      float fi = float(i);
      if (fi >= asciiLayers) {
        break;
      }

      float layerT = fi / max(asciiLayers - 1.0, 1.0);
      float cell = max(3.0, baseCell * mix(2.1, 4.2, layerT));
      vec2 layerDrift = vec2(
        sin(uTime * 0.52 + fi * 1.31),
        cos(uTime * 0.47 + fi * 1.79)
      ) * pointJitter * (0.9 + fi * 0.5);
      vec2 layerUv = clamp(vUv + layerDrift * uTexel * (0.4 + fi * 0.08), vec2(0.0), vec2(1.0));

      float layer = asciiLayer(
        planeCoord + layerDrift * cell,
        layerUv,
        cell,
        pointJitter * (0.5 + fi * 0.16),
        style * 0.75 - fi * 0.38,
        2.0 + fi * 11.23
      );

      float w = exp(-fi * 0.55);
      asciiInk += layer * w;
      asciiWeight += w;
    }

    asciiInk /= max(asciiWeight, 1e-5);
    asciiInk *= (0.22 + smoke * (0.92 + detail * 1.7)) * (0.75 + asciiMixStrength * 0.55);
  }

  float bottomGate = smoothstep(0.0, 0.03, vUv.y);
  float topStart = mix(0.84, 0.995, uPersistence);
  float topFade = 1.0 - smoothstep(topStart, 1.0, vUv.y);
  float persistenceLift = mix(topFade * 0.9 + 0.1, 1.0, uPersistence * 0.8);
  float gate = bottomGate * persistenceLift;
  pointSmoke *= gate;
  asciiInk *= gate;
  float mixedSmoke = mix(pointSmoke, max(pointSmoke * 0.18, asciiInk), asciiMix);

  float style = clamp(uAsciiStyle, 0.0, 4.0);
  float styleBlend = smoothstep(1.0, 4.0, style);
  float scan = 0.5 + 0.5 * sin(planeCoord.y * 0.33 + uTime * 8.0);
  mixedSmoke *= 1.0 - styleBlend * 0.14 * scan;

  vec3 color = vec3(mixedSmoke);

  if (style > 1.5) {
    vec2 chromaShift = uTexel * (1.2 + uAsciiJitter * 6.0 + detail * 18.0);
    float rDensity = texture2D(uDensity, clamp(vUv + chromaShift, vec2(0.0), vec2(1.0))).r;
    float bDensity = texture2D(uDensity, clamp(vUv - chromaShift, vec2(0.0), vec2(1.0))).r;
    float chroma = (style - 1.5) * 0.35;

    color.r += rDensity * chroma * 0.18;
    color.b += bDensity * chroma * 0.14;
  }

  if (style > 2.5) {
    float glitchLine = step(0.993, hash21(vec2(floor(planeCoord.y * 0.25), floor(uTime * 30.0))));
    color += vec3(glitchLine * 0.35);
  }

  float filterAmount = clamp(abs(uSeedColorFilter), 0.0, 1.0);
  vec3 warmFilter = vec3(1.28, 0.86, 0.62);
  vec3 coolFilter = vec3(0.58, 0.88, 1.32);
  vec3 filterTarget = uSeedColorFilter >= 0.0 ? warmFilter : coolFilter;
  float globalFilterStrength = filterAmount * 0.68;
  float hueAmount = clamp(abs(uSeedHue), 0.0, 1.0);
  float hueWheel = fract(uSeedHue * 0.5 + 0.5);
  vec3 hueFilterTarget = mix(vec3(1.0), hueToRgb(hueWheel), 0.92);
  float hueStrength = hueAmount * 0.9;
  vec3 globalFilter = mix(vec3(1.0), filterTarget, globalFilterStrength);
  globalFilter = mix(globalFilter, globalFilter * hueFilterTarget, hueStrength);
  color *= globalFilter;

  float seedCloud = seedPointCloudLayer(planeCoord, vUv);
  float localFlow = length(decodeVelocity(texture2D(uVelocity, vUv)));
  float seedGlow = seedCloud * (0.58 + smoke * 0.42 + detail * 0.18 + localFlow * 0.16);
  float pointFilterStrength = min(1.0, globalFilterStrength + filterAmount * 0.24 + hueStrength * 0.26);
  vec3 pointFilter = mix(vec3(1.0), filterTarget, pointFilterStrength);
  pointFilter = mix(pointFilter, pointFilter * hueFilterTarget, hueStrength);
  float pointLum = dot(pointFilter, vec3(0.299, 0.587, 0.114));
  pointFilter = mix(vec3(pointLum), pointFilter, 1.18);
  vec3 seedColor = vec3(clamp(seedGlow * uSeedPointBrightness, 0.0, 1.0)) * uSeedBgOpacity * pointFilter;
  color = max(color, seedColor);

  float edgeDist = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
  float edgeFade = smoothstep(0.02, 0.14, edgeDist);
  color *= edgeFade;

  color = clamp(color * uOpacity, 0.0, 1.0);
  gl_FragColor = vec4(color, 1.0);
}
`}function rg(){return`
precision highp float;

uniform vec4 uValue;

void main() {
  gl_FragColor = uValue;
}
`}function sg(){return`
precision highp float;

varying vec2 vUv;

uniform sampler2D uDensity;
uniform sampler2D uSeed;
uniform sampler2D uSeedMorphTex;
uniform float uAmount;
uniform float uSoftness;
uniform float uSeedContrast;
uniform float uSeedMorph;
uniform vec2 uViewport;
uniform vec2 uSeedSize;
uniform vec2 uSeedMorphSize;

vec2 toSeedUvContain(vec2 uv, vec2 seedSize) {
  if (seedSize.x < 1.0 || seedSize.y < 1.0) {
    return vec2(-1.0);
  }

  float viewAspect = uViewport.x / max(uViewport.y, 1.0);
  float seedAspect = seedSize.x / max(seedSize.y, 1.0);
  vec2 suv = uv;

  if (viewAspect > seedAspect) {
    float fit = seedAspect / viewAspect;
    suv.x = (uv.x - 0.5) / max(fit, 1e-6) + 0.5;
  } else {
    float fit = viewAspect / seedAspect;
    suv.y = (uv.y - 0.5) / max(fit, 1e-6) + 0.5;
  }

  if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) {
    return vec2(-1.0);
  }

  return suv;
}

float sampleSeedA(vec2 uv) {
  vec2 suv = toSeedUvContain(uv, uSeedSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return 0.0;
  }

  vec3 seedRgb = texture2D(uSeed, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedB(vec2 uv, float fallback) {
  vec2 suv = toSeedUvContain(uv, uSeedMorphSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return fallback;
  }

  vec3 seedRgb = texture2D(uSeedMorphTex, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedContain(vec2 uv) {
  float seedA = sampleSeedA(uv);
  float seedB = sampleSeedB(uv, seedA);
  float seedLuma = mix(seedA, seedB, clamp(uSeedMorph, 0.0, 1.0));
  return clamp((seedLuma - 0.5) * uSeedContrast + 0.5, 0.0, 1.0);
}

void main() {
  float seed = sampleSeedContain(vUv);
  seed = pow(clamp(seed, 0.0, 1.0), 0.85);
  float lo = max(0.0, 0.06 - uSoftness);
  float hi = min(1.0, 0.95 + uSoftness * 0.35);
  seed = smoothstep(lo, hi, seed);

  float density = texture2D(uDensity, vUv).r;
  density = max(density, seed * uAmount);
  gl_FragColor = vec4(clamp(density, 0.0, 1.0), 0.0, 0.0, 1.0);
}
`}function ag(i){return i.capabilities.isWebGL2?pn:Xt}function $r(i,e,t,n){const r=n===pt?pt:vt;return new rn(e,t,{type:ag(i),format:jt,minFilter:n,magFilter:r,depthBuffer:!1,stencilBuffer:!1,wrapS:Ut,wrapT:Ut})}function Ns(i,e,t,n){return{read:$r(i,e,t,n),write:$r(i,e,t,n)}}function Ti(i){i&&(i.read.dispose(),i.write.dispose())}function Nr(i){i&&i.dispose()}function og(i){return i===4?" .,';:|/+xX#%8@MW":i===2?" .,:;irsXA253hMH":i===3?" `.^-~+*x#%@MW&8":" .:-=+*#%@MW8B&$"}function pl(i){const e=og(i),t=4,n=4,r=64,s=document.createElement("canvas");s.width=t*r,s.height=n*r;const a=s.getContext("2d");if(!a)throw new Error("Failed to create 2D context for ASCII atlas.");a.fillStyle="#000000",a.fillRect(0,0,s.width,s.height);const o=i===4?900:i===2?700:500,l=i===4?54:i===3?44:50;a.font=`${o} ${l}px monospace`,a.fillStyle="#ffffff",a.textAlign="center",a.textBaseline="middle";for(let d=0;d<16;d+=1){const h=d%t,p=Math.floor(d/t),f=e.charAt(d)||" ",v=h*r+r*.5,S=p*r+r*.54;i===4&&(a.fillText(f,v-1,S),a.fillText(f,v+1,S),a.fillText(f,v,S-1),a.fillText(f,v,S+1)),a.fillText(f,v,S)}const c=new Nu(s);return c.minFilter=pt,c.magFilter=pt,c.generateMipmaps=!1,c.wrapS=Ut,c.wrapT=Ut,c.needsUpdate=!0,c}function lg(i,e,t,n,r,s){const a=fl({...io,...t}),o=new Xl,l=new no(-1,1,1,-1,.1,10);l.position.z=1;const c=new Fi(2,2),d=new sn(c,new eo);d.frustumCulled=!1,o.add(d);const h=new Fi(2,2);let p=pl(a.asciiStyle);const f=new gt({uniforms:{uDensity:{value:null},uAsciiAtlas:{value:p},uVelocity:{value:null},uSeedImage:{value:null},uSeedImageMorph:{value:null},uTexel:{value:new Ce(1/512,1/512)},uResolution:{value:new Ce(Math.max(r,1),Math.max(s,1))},uSeedSize:{value:new Ce(1,1)},uSeedMorphSize:{value:new Ce(1,1)},uPointerUv:{value:new Ce(.5,.5)},uTime:{value:0},uOpacity:{value:a.opacity},uContrast:{value:a.contrast},uPersistence:{value:Math.pow(hl(a.persistence),.85)},uDetailBoost:{value:a.detailBoost},uShadowBoost:{value:a.shadowBoost},uHighlightBoost:{value:a.highlightBoost},uDepthAmount:{value:a.depthAmount},uDepthLayers:{value:a.depthLayers},uLightStrength:{value:a.lightStrength},uRimStrength:{value:a.rimStrength},uAsciiScale:{value:a.asciiScale},uAsciiLayers:{value:a.asciiLayers},uAsciiBlend:{value:a.asciiBlend},uAsciiMix:{value:a.asciiMix},uAsciiJitter:{value:a.asciiJitter},uAsciiSpacingX:{value:a.asciiSpacingX},uAsciiSpacingY:{value:a.asciiSpacingY},uAsciiThreshold:{value:a.asciiThreshold},uAsciiFlowDistort:{value:a.asciiFlowDistort},uAsciiStyle:{value:a.asciiStyle},uSeedInfluence:{value:a.seedInfluence},uSeedContrast:{value:a.seedContrast},uSeedHue:{value:a.seedHue},uSeedColorFilter:{value:a.seedColorFilter},uSeedParallax:{value:a.seedParallax},uSeedPulseShift:{value:a.seedPulseShift},uSeedPulseSpeed:{value:a.seedPulseSpeed},uSeedPointBrightness:{value:a.seedPointBrightness},uSeedPointSize:{value:a.seedPointSize},uSeedPointContrast:{value:a.seedPointContrast},uSeedPointerInfluence:{value:a.seedPointerInfluence},uSeedVisible:{value:0},uSeedMorph:{value:0},uSeedBgOpacity:{value:1},uPointerRadius:{value:a.pointerRadius},uPointerActive:{value:0}},vertexShader:Wt(),fragmentShader:ig(),depthWrite:!1,depthTest:!1,toneMapped:!1}),v=new sn(h,f);v.frustumCulled=!1,e.add(v);const S=new gt({uniforms:{uValue:{value:new it(0,0,0,1)}},vertexShader:Wt(),fragmentShader:rg(),depthWrite:!1,depthTest:!1,toneMapped:!1}),m=new gt({uniforms:{uDensity:{value:null},uSeed:{value:null},uSeedMorphTex:{value:null},uAmount:{value:.82},uSoftness:{value:0},uSeedContrast:{value:a.seedContrast},uSeedMorph:{value:0},uViewport:{value:new Ce(1,1)},uSeedSize:{value:new Ce(1,1)},uSeedMorphSize:{value:new Ce(1,1)}},vertexShader:Wt(),fragmentShader:sg(),depthWrite:!1,depthTest:!1,toneMapped:!1}),u=new gt({uniforms:{uSource:{value:null},uVelocity:{value:null},uTexel:{value:new Ce(1/512,1/512)},uDt:{value:.016},uDissipation:{value:a.velocityDissipation},uVelocityScale:{value:a.advection}},vertexShader:Wt(),fragmentShader:Ym(),depthWrite:!1,depthTest:!1,toneMapped:!1}),E=new gt({uniforms:{uSource:{value:null},uVelocity:{value:null},uDt:{value:.016},uDissipation:{value:a.densityDissipation},uVelocityScale:{value:a.advection}},vertexShader:Wt(),fragmentShader:qm(),depthWrite:!1,depthTest:!1,toneMapped:!1}),M=new gt({uniforms:{uVelocity:{value:null},uDensity:{value:null},uSeedImage:{value:null},uSeedImageMorph:{value:null},uTexel:{value:new Ce(1/512,1/512)},uResolution:{value:new Ce(1,1)},uSeedSize:{value:new Ce(0,0)},uSeedMorphSize:{value:new Ce(0,0)},uSeedMorph:{value:0},uDt:{value:.016},uBuoyancy:{value:a.buoyancy},uDrag:{value:a.drag},uNoiseScale:{value:a.noiseScale},uTurbulence:{value:a.turbulence},uSeedInfluence:{value:a.seedInfluence},uSeedContrast:{value:a.seedContrast},uTime:{value:0},uSeed:{value:new Ce(.37,.91)}},vertexShader:Wt(),fragmentShader:Km(),depthWrite:!1,depthTest:!1,toneMapped:!1}),T=new gt({uniforms:{uVelocity:{value:null},uTexel:{value:new Ce(1/512,1/512)},uCurlScale:{value:ll}},vertexShader:Wt(),fragmentShader:Zm(),depthWrite:!1,depthTest:!1,toneMapped:!1}),A=new gt({uniforms:{uVelocity:{value:null},uCurl:{value:null},uTexel:{value:new Ce(1/512,1/512)},uDt:{value:.016},uVorticity:{value:a.vorticity},uCurlScale:{value:ll}},vertexShader:Wt(),fragmentShader:jm(),depthWrite:!1,depthTest:!1,toneMapped:!1}),R=new gt({uniforms:{uVelocity:{value:null},uPoint:{value:new Ce(.5,.14)},uAdd:{value:new Ce(0,1)},uRadius:{value:a.sourceRadius},uGain:{value:1},uTexel:{value:new Ce(1/512,1/512)}},vertexShader:Wt(),fragmentShader:Jm(),depthWrite:!1,depthTest:!1,toneMapped:!1}),P=new gt({uniforms:{uDensity:{value:null},uPoint:{value:new Ce(.5,.14)},uRadius:{value:a.sourceRadius},uValue:{value:.08}},vertexShader:Wt(),fragmentShader:Qm(),depthWrite:!1,depthTest:!1,toneMapped:!1}),N=new gt({uniforms:{uVelocity:{value:null},uTexel:{value:new Ce(1/512,1/512)},uDivergenceScale:{value:ol}},vertexShader:Wt(),fragmentShader:eg(),depthWrite:!1,depthTest:!1,toneMapped:!1}),x=new gt({uniforms:{uPressure:{value:null},uDivergence:{value:null},uTexel:{value:new Ce(1/512,1/512)},uPressureScale:{value:al},uDivergenceScale:{value:ol}},vertexShader:Wt(),fragmentShader:tg(),depthWrite:!1,depthTest:!1,toneMapped:!1}),y=new gt({uniforms:{uVelocity:{value:null},uPressure:{value:null},uTexel:{value:new Ce(1/512,1/512)},uPressureScale:{value:al}},vertexShader:Wt(),fragmentShader:ng(),depthWrite:!1,depthTest:!1,toneMapped:!1});let w=null,O=null,B=null,q=null,X=null,$=Math.max(1,Math.floor(r)),z=Math.max(1,Math.floor(s)),K=1,ae=1,ne=!1,he=Xr(n),Ae=null,De=null,ke=null,Le=null,W=null,Q=1,ve=0;const Oe=new $m(he),se={active:!1,x:.5,y:.5,dx:0,dy:0,ink:1},Xe=new Ce,mt=new Ce,$e=new Ce(.5,.5),Ze=new Ce(.5,.5),rt=new it;function Ve(D){const J=ot.clamp(D,0,1);$e.lerp(Ze,J),f.uniforms.uPointerUv.value.copy($e),f.uniforms.uPointerActive.value=se.active?1:0}function je(D,J){d.material=D,i.setRenderTarget(J),i.render(o,l)}function C(D,J){rt.copy(J),S.uniforms.uValue.value.copy(rt),je(S,D)}function _t(){const D=$/Math.max(z,1),J=Math.max(128,Math.min(2048,Math.floor(a.simResolution)));return{width:Math.max(128,Math.min(4096,Math.floor(J*D))),height:J}}function Qe(){const D=1/K,J=1/ae,re=Math.max(i.getPixelRatio(),1),Se=Math.max(1,$*re),Ke=Math.max(1,z*re);f.uniforms.uTexel.value.set(D,J),f.uniforms.uResolution.value.set(Se,Ke),u.uniforms.uTexel.value.set(D,J),M.uniforms.uTexel.value.set(D,J),T.uniforms.uTexel.value.set(D,J),A.uniforms.uTexel.value.set(D,J),R.uniforms.uTexel.value.set(D,J),N.uniforms.uTexel.value.set(D,J),x.uniforms.uTexel.value.set(D,J),y.uniforms.uTexel.value.set(D,J),m.uniforms.uViewport.value.set(K,ae),M.uniforms.uResolution.value.set(K,ae)}function nt(){const D=_t();D.width===K&&D.height===ae&&w&&O&&B&&q&&X||(Ti(w),Ti(O),Ti(B),Nr(q),Nr(X),K=D.width,ae=D.height,w=Ns(i,K,ae,vt),O=Ns(i,K,ae,vt),B=Ns(i,K,ae,pt),q=$r(i,K,ae,pt),X=$r(i,K,ae,pt),Qe())}function be(){!w||!O||!B||!q||!X||(C(w.read,new it(.5,.5,0,1)),C(w.write,new it(.5,.5,0,1)),C(O.read,new it(0,0,0,1)),C(O.write,new it(0,0,0,1)),C(B.read,new it(.5,0,0,1)),C(B.write,new it(.5,0,0,1)),C(q,new it(.5,0,0,1)),C(X,new it(.5,0,0,1)),i.setRenderTarget(null))}function b(D,J){!O||!Ae||(m.uniforms.uDensity.value=O.read.texture,m.uniforms.uSeed.value=Ae,m.uniforms.uAmount.value=D,m.uniforms.uSoftness.value=J,m.uniforms.uSeedContrast.value=a.seedContrast,je(m,O.write),Mn(O))}function g(){Ae&&Ae!==ke&&Ae.dispose(),Ae=null,De&&De!==ke&&De.dispose(),De=null,ke&&(ke.dispose(),ke=null),Le&&(Le.pause(),Le.removeAttribute("src"),Le.load(),Le=null),W&&(URL.revokeObjectURL(W),W=null),f.uniforms.uSeedImage.value=null,f.uniforms.uSeedImageMorph.value=null,f.uniforms.uSeedVisible.value=0,f.uniforms.uSeedSize.value.set(1,1),f.uniforms.uSeedMorphSize.value.set(1,1),m.uniforms.uSeed.value=null,m.uniforms.uSeedMorphTex.value=null,m.uniforms.uSeedSize.value.set(1,1),m.uniforms.uSeedMorphSize.value.set(1,1),M.uniforms.uSeedImage.value=null,M.uniforms.uSeedImageMorph.value=null,M.uniforms.uSeedSize.value.set(0,0),M.uniforms.uSeedMorphSize.value.set(0,0),ve=0,f.uniforms.uSeedMorph.value=0,m.uniforms.uSeedMorph.value=0,M.uniforms.uSeedMorph.value=0}function U(D){const J=D.image,re=Math.max(1,Number(J.videoWidth??J.width??1)),Se=Math.max(1,Number(J.videoHeight??J.height??1));return{width:re,height:Se}}function Y(D){D.colorSpace=Nt,D.minFilter=vt,D.magFilter=vt,D.wrapS=Ut,D.wrapT=Ut,D.generateMipmaps=!1,D.needsUpdate=!0}function j(){if(!Ae||De)return;const D=U(Ae);f.uniforms.uSeedImageMorph.value=Ae,f.uniforms.uSeedMorphSize.value.set(D.width,D.height),m.uniforms.uSeedMorphTex.value=Ae,m.uniforms.uSeedMorphSize.value.set(D.width,D.height),M.uniforms.uSeedImageMorph.value=Ae,M.uniforms.uSeedMorphSize.value.set(D.width,D.height)}function H(D){ve=ot.clamp(D,0,1),f.uniforms.uSeedMorph.value=ve,m.uniforms.uSeedMorph.value=ve,M.uniforms.uSeedMorph.value=ve}function Te(D,J){if(ne){D.dispose();return}Y(D);const re=U(D);ke&&(ke.dispose(),ke=null),Le&&(Le.pause(),Le.removeAttribute("src"),Le.load(),Le=null),W&&(URL.revokeObjectURL(W),W=null),Ae&&Ae.dispose(),Ae=D,f.uniforms.uSeedImage.value=D,f.uniforms.uSeedVisible.value=1,f.uniforms.uSeedSize.value.set(re.width,re.height),m.uniforms.uSeed.value=D,m.uniforms.uSeedSize.value.set(re.width,re.height),M.uniforms.uSeedImage.value=D,M.uniforms.uSeedSize.value.set(re.width,re.height),j(),Ye(he),console.info(`[DigitalSmoke] Loaded seed image: ${J}`)}function oe(D,J,re,Se){if(ne){J.dispose(),D.pause(),D.removeAttribute("src"),D.load();return}Y(J);const Ke=U(J);Ae&&Ae!==ke&&Ae.dispose(),ke&&ke.dispose(),Le&&(Le.pause(),Le.removeAttribute("src"),Le.load()),W&&(URL.revokeObjectURL(W),W=null),Le=D,ke=J,W=Se??null,Ae=J,f.uniforms.uSeedImage.value=J,f.uniforms.uSeedVisible.value=1,f.uniforms.uSeedSize.value.set(Ke.width,Ke.height),m.uniforms.uSeed.value=J,m.uniforms.uSeedSize.value.set(Ke.width,Ke.height),M.uniforms.uSeedImage.value=J,M.uniforms.uSeedSize.value.set(Ke.width,Ke.height),j(),Ye(he),console.info(`[DigitalSmoke] Loaded seed video: ${re}`)}function ye(D,J){if(ne){D.dispose();return}Y(D);const re=U(D);De&&De.dispose(),De=D,f.uniforms.uSeedImageMorph.value=D,f.uniforms.uSeedMorphSize.value.set(re.width,re.height),m.uniforms.uSeedMorphTex.value=D,m.uniforms.uSeedMorphSize.value.set(re.width,re.height),M.uniforms.uSeedImageMorph.value=D,M.uniforms.uSeedMorphSize.value.set(re.width,re.height),console.info(`[DigitalSmoke] Loaded morph seed image: ${J}`)}function Ue(){const J="./".endsWith("/")?"./":".//",re=new Set;for(const Se of cl)re.add(`${J}${Se}`),re.add(`./${Se}`),re.add(`/${Se}`),re.add(Se);return Array.from(re)}function te(){const J="./".endsWith("/")?"./":".//",re=new Set;for(const Se of dl)re.add(`${J}${Se}`),re.add(`./${Se}`),re.add(`/${Se}`),re.add(Se);return Array.from(re)}function ue(){const J="./".endsWith("/")?"./":".//",re=new Set;for(const Se of ul)re.add(`${J}${Se}`),re.add(`./${Se}`),re.add(`/${Se}`),re.add(Se);return Array.from(re)}function _e(D){return new Promise((J,re)=>{new Wu().load(D,Ke=>J(Ke),void 0,Ke=>re(Ke))})}function Ee(D){return new Promise((J,re)=>{const Se=document.createElement("video");let Ke=!1;const Vt=()=>{Se.removeEventListener("loadeddata",Yt),Se.removeEventListener("error",Gn)},ri=mn=>{Ke||(Ke=!0,Vt(),Se.pause(),Se.removeAttribute("src"),Se.load(),re(mn))},Gn=()=>{ri(new Error(`Failed to load video: ${D}`))},Yt=()=>{if(Ke)return;Ke=!0,Vt(),Se.pause(),Se.currentTime=0;const mn=new Fu(Se);J({video:Se,texture:mn})};Se.muted=!0,Se.loop=!0,Se.playsInline=!0,Se.autoplay=!1,Se.preload="auto",Se.crossOrigin="anonymous",Se.addEventListener("loadeddata",Yt),Se.addEventListener("error",Gn),Se.src=D,Se.load()})}function le(){const D=Ue(),J=re=>{if(re>=D.length){g(),console.warn(`[DigitalSmoke] Seed image not found. Place one in public as ${cl.join(", ")}`);return}_e(D[re]).then(Se=>{Te(Se,D[re])}).catch(()=>{J(re+1)})};J(0)}function ze(){const D=te(),J=re=>{if(re>=D.length){j(),console.warn(`[DigitalSmoke] Morph seed image not found. Place one in public as ${dl.join(", ")}`);return}_e(D[re]).then(Se=>{ye(Se,D[re])}).catch(()=>{J(re+1)})};J(0)}function L(){const D=ue(),J=re=>{if(re>=D.length){console.warn(`[DigitalSmoke] Seed video not found. Place one in public as ${ul.join(", ")}`);return}Ee(D[re]).then(({video:Se,texture:Ke})=>{oe(Se,Ke,D[re])}).catch(()=>{J(re+1)})};J(0)}function pe(D){if(!D||!D.type.startsWith("image/"))return Promise.reject(new Error("Please choose an image file."));const J=URL.createObjectURL(D);return _e(J).then(re=>{URL.revokeObjectURL(J),Te(re,D.name)}).catch(re=>{throw URL.revokeObjectURL(J),re})}function ie(D){if(!D||!D.type.startsWith("video/"))return Promise.reject(new Error("Please choose a video file."));const J=URL.createObjectURL(D);return Ee(J).then(({video:re,texture:Se})=>{oe(re,Se,D.name,J)}).catch(re=>{throw URL.revokeObjectURL(J),re})}function ge(D){if(!Le||!ke)return;const J=Le.duration;if(!Number.isFinite(J)||J<=0)return;const re=ot.clamp(Q,0,4);if(re<=1e-5)return;const Se=D*re;let Ke=Le.currentTime+Se;Ke>=J&&(Ke%=J),Le.currentTime=Ke,ke.needsUpdate=!0}function ee(D,J,re,Se){w&&(R.uniforms.uVelocity.value=w.read.texture,R.uniforms.uPoint.value.copy(D),R.uniforms.uAdd.value.copy(J),R.uniforms.uRadius.value=re,R.uniforms.uGain.value=Se,je(R,w.write),Mn(w))}function Z(D,J,re){O&&(P.uniforms.uDensity.value=O.read.texture,P.uniforms.uPoint.value.copy(D),P.uniforms.uRadius.value=J,P.uniforms.uValue.value=re,je(P,O.write),Mn(O))}function ce(D){if(!(!B||!q)){x.uniforms.uDivergence.value=q.texture;for(let J=0;J<D;J+=1)x.uniforms.uPressure.value=B.read.texture,je(x,B.write),Mn(B)}}function Ne(D,J){if(!w||!O||!B||!q||!X)return;const re=hl(a.persistence),Se=Math.pow(re,.85);u.uniforms.uDt.value=D,u.uniforms.uDissipation.value=a.velocityDissipation,u.uniforms.uVelocityScale.value=a.advection,u.uniforms.uSource.value=w.read.texture,u.uniforms.uVelocity.value=w.read.texture,je(u,w.write),Mn(w),M.uniforms.uDt.value=D,M.uniforms.uTime.value=J;const Ke=a.buoyancy*ot.lerp(1,.48,re);M.uniforms.uBuoyancy.value=Ke,M.uniforms.uDrag.value=a.drag,M.uniforms.uNoiseScale.value=a.noiseScale,M.uniforms.uTurbulence.value=a.turbulence,M.uniforms.uSeedInfluence.value=a.seedInfluence,M.uniforms.uSeedContrast.value=a.seedContrast,M.uniforms.uVelocity.value=w.read.texture,M.uniforms.uDensity.value=O.read.texture,je(M,w.write),Mn(w),T.uniforms.uVelocity.value=w.read.texture,je(T,X),A.uniforms.uDt.value=D,A.uniforms.uVorticity.value=a.vorticity,A.uniforms.uVelocity.value=w.read.texture,A.uniforms.uCurl.value=X.texture,je(A,w.write),Mn(w);const Vt=Math.hypot(se.dx,se.dy),ri=Vt>1e-6;if(se.active&&ri){const Hn=se.ink>=0?1:-1;mt.set(se.x,se.y),Xe.set(se.dx,se.dy).multiplyScalar(a.pointerForce*42),Hn<0&&(Xe.multiplyScalar(-.75),Xe.y-=a.pointerForce*.9),ee(mt,Xe,a.pointerRadius,1)}N.uniforms.uVelocity.value=w.read.texture,je(N,q),ce(a.pressureIterations),y.uniforms.uVelocity.value=w.read.texture,y.uniforms.uPressure.value=B.read.texture,je(y,w.write),Mn(w),E.uniforms.uDt.value=D;const Gn=ot.lerp(1.2,120,Math.pow(re,1.18)),Yt=Math.pow(.5,1/Math.max(Gn*120,1)),mn=Math.max(a.densityDissipation,Yt);E.uniforms.uDissipation.value=mn,E.uniforms.uVelocityScale.value=a.advection,E.uniforms.uSource.value=O.read.texture,E.uniforms.uVelocity.value=w.read.texture,je(E,O.write),Mn(O);const si=sr.sourceRadius,dr=Math.max(si.max-si.min,1e-6),ai=ot.clamp((a.sourceRadius-si.min)/dr,0,1),hr=ot.lerp(0,.32,ai),oi=ot.clamp(a.seedInfluence/8,0,1),fr=ot.lerp(.14,.38,re)*ot.lerp(.85,1.9,oi),pr=ot.clamp(a.emitRate*D*(95+a.seedInfluence*18),0,1.1),ts=ot.clamp(fr+pr,0,1.35);if(b(ts,hr),se.active){mt.set(se.x,se.y);const Hn=se.ink>=0?1:-1,li=a.pointerTrail,is=a.pointerForce*D*.35*li,rs=Math.min(.24*li,Vt*a.pointerForce*2.8*li),_=is+rs,I=Hn>0?1:a.pointerDarkness,G=Math.min(.35*li,_)*I*Hn;Z(mt,a.pointerRadius*(Hn>0?1.3:1.55),G)}Ze.set(se.x,se.y);const ns=1-Math.exp(-D*(a.planeTiltEase*1.35));Ve(ns),f.uniforms.uDensity.value=O.read.texture,f.uniforms.uVelocity.value=w.read.texture,f.uniforms.uTime.value=J,f.uniforms.uOpacity.value=a.opacity,f.uniforms.uContrast.value=a.contrast,f.uniforms.uPersistence.value=Se,f.uniforms.uDetailBoost.value=a.detailBoost,f.uniforms.uShadowBoost.value=a.shadowBoost,f.uniforms.uHighlightBoost.value=a.highlightBoost,f.uniforms.uDepthAmount.value=a.depthAmount,f.uniforms.uDepthLayers.value=a.depthLayers,f.uniforms.uLightStrength.value=a.lightStrength,f.uniforms.uRimStrength.value=a.rimStrength,f.uniforms.uAsciiScale.value=a.asciiScale,f.uniforms.uAsciiLayers.value=a.asciiLayers,f.uniforms.uAsciiBlend.value=a.asciiBlend,f.uniforms.uAsciiMix.value=a.asciiMix,f.uniforms.uAsciiJitter.value=a.asciiJitter,f.uniforms.uAsciiSpacingX.value=a.asciiSpacingX,f.uniforms.uAsciiSpacingY.value=a.asciiSpacingY,f.uniforms.uAsciiThreshold.value=a.asciiThreshold,f.uniforms.uAsciiFlowDistort.value=a.asciiFlowDistort,f.uniforms.uAsciiStyle.value=a.asciiStyle,f.uniforms.uSeedInfluence.value=a.seedInfluence,f.uniforms.uSeedContrast.value=a.seedContrast,f.uniforms.uSeedHue.value=a.seedHue,f.uniforms.uSeedColorFilter.value=a.seedColorFilter,f.uniforms.uSeedParallax.value=a.seedParallax,f.uniforms.uSeedPulseShift.value=a.seedPulseShift,f.uniforms.uSeedPulseSpeed.value=a.seedPulseSpeed,f.uniforms.uSeedPointBrightness.value=a.seedPointBrightness,f.uniforms.uSeedPointSize.value=a.seedPointSize,f.uniforms.uSeedPointContrast.value=a.seedPointContrast,f.uniforms.uSeedPointerInfluence.value=a.seedPointerInfluence,f.uniforms.uPointerRadius.value=a.pointerRadius,i.setRenderTarget(null)}function ct(){Oe.setSeed(he),M.uniforms.uSeed.value.set(Oe.range(.1,5),Oe.range(.1,5))}function Ye(D){typeof D=="number"&&Number.isFinite(D)&&(he=Xr(D)),nt(),be(),ct();const J=sr.sourceRadius,re=Math.max(J.max-J.min,1e-6),Se=ot.clamp((a.sourceRadius-J.min)/re,0,1),Ke=ot.lerp(0,.32,Se),Vt=ot.clamp(.45+a.emitRate*1.2+a.seedInfluence*.08,0,1.4);b(Vt,Ke)}return nt(),Ye(he),le(),ze(),{update(D,J){if(ne)return;const re=Math.min(Math.max(D,0),.05);if(re<=0)return;ge(re);const Se=2,Ke=re/Se;for(let Vt=0;Vt<Se;Vt+=1)Ne(Ke,J+Vt*Ke)},setParams(D){if(ne)return;const J=fl({simResolution:D.simResolution??a.simResolution,emitRate:D.emitRate??a.emitRate,seedInfluence:D.seedInfluence??a.seedInfluence,seedContrast:D.seedContrast??a.seedContrast,seedHue:D.seedHue??a.seedHue,seedColorFilter:D.seedColorFilter??a.seedColorFilter,seedParallax:D.seedParallax??a.seedParallax,seedPulseShift:D.seedPulseShift??a.seedPulseShift,seedPulseSpeed:D.seedPulseSpeed??a.seedPulseSpeed,seedPointBrightness:D.seedPointBrightness??a.seedPointBrightness,seedPointSize:D.seedPointSize??a.seedPointSize,seedPointContrast:D.seedPointContrast??a.seedPointContrast,seedPointerInfluence:D.seedPointerInfluence??a.seedPointerInfluence,planeTilt:D.planeTilt??a.planeTilt,planeTiltEase:D.planeTiltEase??a.planeTiltEase,sourceRadius:D.sourceRadius??a.sourceRadius,densityDissipation:D.densityDissipation??a.densityDissipation,velocityDissipation:D.velocityDissipation??a.velocityDissipation,buoyancy:D.buoyancy??a.buoyancy,vorticity:D.vorticity??a.vorticity,pressureIterations:D.pressureIterations??a.pressureIterations,noiseScale:D.noiseScale??a.noiseScale,turbulence:D.turbulence??a.turbulence,advection:D.advection??a.advection,drag:D.drag??a.drag,opacity:D.opacity??a.opacity,contrast:D.contrast??a.contrast,persistence:D.persistence??a.persistence,detailBoost:D.detailBoost??a.detailBoost,shadowBoost:D.shadowBoost??a.shadowBoost,highlightBoost:D.highlightBoost??a.highlightBoost,depthAmount:D.depthAmount??a.depthAmount,depthLayers:D.depthLayers??a.depthLayers,lightStrength:D.lightStrength??a.lightStrength,rimStrength:D.rimStrength??a.rimStrength,asciiScale:D.asciiScale??a.asciiScale,asciiLayers:D.asciiLayers??a.asciiLayers,asciiBlend:D.asciiBlend??a.asciiBlend,asciiMix:D.asciiMix??a.asciiMix,asciiJitter:D.asciiJitter??a.asciiJitter,asciiSpacingX:D.asciiSpacingX??a.asciiSpacingX,asciiSpacingY:D.asciiSpacingY??a.asciiSpacingY,asciiThreshold:D.asciiThreshold??a.asciiThreshold,asciiFlowDistort:D.asciiFlowDistort??a.asciiFlowDistort,asciiStyle:D.asciiStyle??a.asciiStyle,pointerDarkness:D.pointerDarkness??a.pointerDarkness,pointerForce:D.pointerForce??a.pointerForce,pointerRadius:D.pointerRadius??a.pointerRadius,pointerTrail:D.pointerTrail??a.pointerTrail}),re=J.simResolution!==a.simResolution,Se=J.asciiStyle!==a.asciiStyle;Object.assign(a,J),Se&&(p.dispose(),p=pl(a.asciiStyle),f.uniforms.uAsciiAtlas.value=p),re&&(nt(),Ye())},setPointer(D){se.active=!!D.active,se.x=Math.min(1,Math.max(0,D.x)),se.y=Math.min(1,Math.max(0,D.y)),se.dx=Math.min(1,Math.max(-1,D.dx)),se.dy=Math.min(1,Math.max(-1,D.dy)),se.ink=Math.min(1,Math.max(-1,D.ink)),Ze.set(se.x,se.y),Ve(.35)},setSeedMorph(D){ne||H(D)},setSeedImageFromFile(D){return ne?Promise.resolve():pe(D)},setSeedVideoFromFile(D){return ne?Promise.resolve():ie(D)},setSeedVideoMotion(D){ne||(Q=ot.clamp(Number.isFinite(D)?D:1,0,4))},useDefaultSeedImage(){ne||(le(),ze(),H(0))},useDefaultSeedVideo(){ne||(L(),H(0))},reset(D){ne||Ye(D)},resize(D,J){ne||($=Math.max(1,Math.floor(D)),z=Math.max(1,Math.floor(J)),nt(),Ye())},dispose(){ne||(ne=!0,e.remove(v),h.dispose(),c.dispose(),p.dispose(),Ae&&(Ae.dispose(),Ae=null),De&&(De.dispose(),De=null),ke&&(ke.dispose(),ke=null),Le&&(Le.pause(),Le.removeAttribute("src"),Le.load(),Le=null),W&&(URL.revokeObjectURL(W),W=null),f.dispose(),S.dispose(),m.dispose(),u.dispose(),E.dispose(),M.dispose(),T.dispose(),A.dispose(),R.dispose(),P.dispose(),N.dispose(),x.dispose(),y.dispose(),Ti(w),Ti(O),Ti(B),Nr(q),Nr(X))}}}class hn{constructor(e,t,n,r,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),hn.nextNameID=hn.nextNameID||0,this.$name.id=`lil-gui-name-${++hn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class cg extends hn{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Va(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const ug={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Va,toHexString:Va},ar={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},dg={isPrimitive:!1,match:i=>Array.isArray(i)||ArrayBuffer.isView(i),fromHexString(i,e,t=1){const n=ar.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return ar.toHexString(r)}},hg={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=ar.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return ar.toHexString(r)}},fg=[ug,ar,dg,hg];function pg(i){return fg.find(e=>e.match(i))}class mg extends hn{constructor(e,t,n,r){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=pg(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Va(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Os extends hn{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class gg extends hn{constructor(e,t,n,r,s,a){super(e,t,n,"lil-number"),this._initInput(),this.min(r),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let E=parseFloat(this.$input.value);isNaN(E)||(this._stepExplicit&&(E=this._snap(E)),this.setValue(this._clamp(E)))},n=E=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+E),this.$input.value=this.getValue())},r=E=>{E.key==="Enter"&&this.$input.blur(),E.code==="ArrowUp"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E))),E.code==="ArrowDown"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E)*-1))},s=E=>{this._inputFocused&&(E.preventDefault(),n(this._step*this._normalizeMouseWheel(E)))};let a=!1,o,l,c,d,h;const p=5,f=E=>{o=E.clientX,l=c=E.clientY,a=!0,d=this.getValue(),h=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",S)},v=E=>{if(a){const M=E.clientX-o,T=E.clientY-l;Math.abs(T)>p?(E.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>p&&S()}if(!a){const M=E.clientY-c;h-=M*this._step*this._arrowKeyMultiplier(E),d+h>this._max?h=this._max-d:d+h<this._min&&(h=this._min-d),this._snapClampSetValue(d+h)}c=E.clientY},S=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",S)},m=()=>{this._inputFocused=!0},u=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",u)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(u,E,M,T,A)=>(u-E)/(M-E)*(A-T)+T,t=u=>{const E=this.$slider.getBoundingClientRect();let M=e(u,E.left,E.right,this._min,this._max);this._snapClampSetValue(M)},n=u=>{this._setDraggingStyle(!0),t(u.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=u=>{t(u.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=u=>{u.preventDefault(),this._setDraggingStyle(!0),t(u.touches[0].clientX),a=!1},d=u=>{u.touches.length>1||(this._hasScrollBar?(o=u.touches[0].clientX,l=u.touches[0].clientY,a=!0):c(u),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",p))},h=u=>{if(a){const E=u.touches[0].clientX-o,M=u.touches[0].clientY-l;Math.abs(E)>Math.abs(M)?c(u):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",p))}else u.preventDefault(),t(u.touches[0].clientX)},p=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",p)},f=this._callOnFinishChange.bind(this),v=400;let S;const m=u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const M=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(S),S=setTimeout(f,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class vg extends hn{constructor(e,t,n,r){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class _g extends hn{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var xg=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function Sg(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let ml=!1;class ro{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!ml&&o&&(Sg(xg),ml=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(e,t,n,r,s){if(Object(n)===n)return new vg(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new gg(this,e,t,n,r,s);case"boolean":return new cg(this,e,t);case"string":return new _g(this,e,t);case"function":return new Os(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new mg(this,e,t,n)}addFolder(e){const t=new ro({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Os||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Os)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const gl=2147483646,Mg={uiScale:1.05,panelOpacity:.37,panelBlurPx:3,panelBorderAlpha:0,widgetAlpha:0,titleAlpha:0,textColor:"#808080",textAlpha:.92,numberColor:"#808080",numberAlpha:.95,sliderTrackColor:"#808080",sliderTrackAlpha:.34,sliderFillColor:"#808080",sliderFillAlpha:.98,sliderKnobColor:"#808080",sliderKnobAlpha:1,sliderKnobBorderColor:"#808080",sliderKnobBorderAlpha:0,sliderKnobChamfer:1.5,sliderKnobBevelAlpha:.3,sliderThickness:1,sliderKnobSize:8.75};function Ai(i){const e=i.trim().replace(/^#/,""),t=e.length===3?e.split("").map(o=>`${o}${o}`).join(""):e;if(!/^[0-9a-fA-F]{6}$/.test(t))return"255, 255, 255";const n=Number.parseInt(t,16),r=n>>16&255,s=n>>8&255,a=n&255;return`${r}, ${s}, ${a}`}function yg(i){const e=document.documentElement;e.style.setProperty("--ui-scale",i.uiScale.toFixed(3)),e.style.setProperty("--ui-panel-opacity",i.panelOpacity.toFixed(3)),e.style.setProperty("--ui-panel-blur",`${i.panelBlurPx.toFixed(1)}px`),e.style.setProperty("--ui-panel-border-alpha",i.panelBorderAlpha.toFixed(3)),e.style.setProperty("--ui-widget-alpha",i.widgetAlpha.toFixed(3)),e.style.setProperty("--ui-title-alpha",i.titleAlpha.toFixed(3)),e.style.setProperty("--ui-text-rgb",Ai(i.textColor)),e.style.setProperty("--ui-text-alpha",i.textAlpha.toFixed(3)),e.style.setProperty("--ui-number-rgb",Ai(i.numberColor)),e.style.setProperty("--ui-number-alpha",i.numberAlpha.toFixed(3)),e.style.setProperty("--ui-slider-track-rgb",Ai(i.sliderTrackColor)),e.style.setProperty("--ui-slider-track-alpha",i.sliderTrackAlpha.toFixed(3)),e.style.setProperty("--ui-slider-fill-rgb",Ai(i.sliderFillColor)),e.style.setProperty("--ui-slider-fill-alpha",i.sliderFillAlpha.toFixed(3)),e.style.setProperty("--ui-slider-knob-rgb",Ai(i.sliderKnobColor)),e.style.setProperty("--ui-slider-knob-alpha",i.sliderKnobAlpha.toFixed(3)),e.style.setProperty("--ui-slider-knob-border-rgb",Ai(i.sliderKnobBorderColor)),e.style.setProperty("--ui-slider-knob-border-alpha",i.sliderKnobBorderAlpha.toFixed(3)),e.style.setProperty("--ui-slider-knob-chamfer",`${i.sliderKnobChamfer.toFixed(2)}px`),e.style.setProperty("--ui-slider-knob-bevel-alpha",i.sliderKnobBevelAlpha.toFixed(3)),e.style.setProperty("--ui-slider-thickness",`${i.sliderThickness.toFixed(2)}px`),e.style.setProperty("--ui-slider-knob-size",`${i.sliderKnobSize.toFixed(2)}px`)}function Eg(i,e,t,n=!1){const r={...io},s={...i,paused:!1,seed:Math.max(1,Math.floor(e)),tiltLegacy:!!n,seedMorph:0},a=new ro({title:"Digital Smoke",width:330}),o=[];yg(Mg);function l(M,T,A){const R=sr[T],P=M.add(s,T,R.min,R.max,R.step).name(A);P.onChange(N=>{const x=T==="simResolution"?Math.round(N/32)*32:T==="pressureIterations"||T==="asciiScale"||T==="asciiStyle"||T==="asciiLayers"||T==="depthLayers"?Math.round(N):N;s[T]=x,t.onParamsChange({[T]:x})}),o.push(P)}const c=a.addFolder("Input Output"),d={loadImage:()=>{t.onPickSeedImage()},loadVideo:()=>{t.onPickSeedVideo(),s.seedMorph=0,t.onSeedMorphChange(0)},useDefaultImage:()=>{t.onUseDefaultSeedImage(),s.seedMorph=0,t.onSeedMorphChange(0)},exportPng:()=>{t.onScreenshot()}};c.add(d,"loadImage").name("Load Image..."),c.add(d,"loadVideo").name("Load Video..."),c.add(d,"useDefaultImage").name("Use Default"),c.add(d,"exportPng").name("Export PNG");const h=a.addFolder("Look");l(h,"seedInfluence","Seed Distortion"),l(h,"seedContrast","Image Contrast"),l(h,"seedHue","Hue"),l(h,"seedColorFilter","Temperature"),l(h,"detailBoost","Detail Boost"),l(h,"shadowBoost","Shadow Boost"),l(h,"highlightBoost","Highlight Boost"),l(h,"pointerForce","Pointer Force"),l(h,"pointerRadius","Pointer Scale"),l(h,"pointerTrail","Pointer Trail");const p=h.add(s,"asciiStyle",{Dust:1,Glitch:2}).name("Point Style");p.onChange(M=>{const A=Number(M)>=1.5?2:1;s.asciiStyle=A,t.onParamsChange({asciiStyle:A})}),o.push(p);const f=a.addFolder("Points + ASCII");l(f,"seedPointBrightness","Point Bright"),l(f,"seedPointSize","Point Size"),l(f,"seedPointContrast","Point Contrast"),l(f,"seedPointerInfluence","Pointer Influence"),l(f,"asciiScale","Point Size"),l(f,"asciiLayers","Point Layers"),l(f,"asciiBlend","Point Density"),l(f,"asciiMix","ASCII Mix"),l(f,"asciiJitter","Point Jitter"),l(f,"asciiSpacingX","Spacing X"),l(f,"asciiSpacingY","Spacing Y"),l(f,"asciiThreshold","Glyph Threshold"),l(f,"asciiFlowDistort","Flow Distort");const v=a.addFolder("Simulation");l(v,"simResolution","Sim Resolution"),l(v,"emitRate","Emission"),l(v,"sourceRadius","Source Radius"),l(v,"densityDissipation","Density Keep"),l(v,"velocityDissipation","Velocity Keep"),l(v,"buoyancy","Buoyancy"),l(v,"vorticity","Vorticity"),l(v,"pressureIterations","Pressure Iter."),l(v,"noiseScale","Noise Scale"),l(v,"turbulence","Turbulence"),l(v,"advection","Advection"),l(v,"drag","Drag"),l(v,"persistence","Persistence");const S=a.addFolder("Interaction");l(S,"planeTilt","Plane Tilt"),l(S,"planeTiltEase","Tilt Follow"),S.add(s,"tiltLegacy").name("Legacy Tilt").onChange(M=>{t.onTiltLegacyChange(!!M)}),l(S,"seedParallax","Parallax"),l(S,"seedPulseShift","Pulse Shift"),l(S,"seedPulseSpeed","Pulse Speed");const u=a.addFolder("Reset"),E={resetParams:()=>{Object.assign(s,r);for(const M of o)M.updateDisplay();s.paused=!1,s.seedMorph=0,t.onSeedMorphChange(0),t.onResetParams({...r}),t.onPauseChange(!1)},randomSeed:()=>{s.seed=Math.floor(Math.random()*gl)+1,t.onResetSeed(s.seed)}};return u.add(E,"resetParams").name("Reset Params"),u.add(E,"randomSeed").name("Random Seed"),{dispose(){a.destroy()},setPaused(M){s.paused=M},setSeed(M){s.seed=Math.max(1,Math.min(gl,Math.floor(M)))}}}function bg(i){const e=new Date().toISOString().replace(/[:.]/g,"-");return`${i}_${e}.png`}function vl(i,e){const t=document.createElement("a");t.href=i,t.download=e,t.rel="noopener",t.style.display="none",document.body.appendChild(t),t.click(),t.remove()}function Tg(i,e){const t=i.domElement,n=bg(e);return i.getContext().finish(),new Promise(s=>{t.toBlob(a=>{if(a){const o=URL.createObjectURL(a);vl(o,n),window.setTimeout(()=>{URL.revokeObjectURL(o)},1500),s();return}vl(t.toDataURL("image/png"),n),s()},"image/png",1)})}const Vi=document.querySelector("#app");if(!Vi)throw new Error("Missing #app container.");const Jt=document.createElement("div");Jt.className="viewport";Vi.appendChild(Jt);const so=document.createElement("div");so.className="controls-hint";so.textContent="LMB white smoke | RMB black smoke | Space pause | R reset seed | P screenshot";Vi.appendChild(so);const Qr=new Xl;Qr.background=new lt(0);const Bn=new Zt(38,1,.01,20);Bn.position.z=3.1;const Mt=Wm(Jt);Jt.style.transformOrigin="50% 50%";Jt.style.willChange="transform";Jt.style.transformStyle="preserve-3d";let Vn={...io},ei=781237,ji=!1,or=0,Ji=!1,ao=0,Bs=0;const oo=.1,Ag=.3;let za=oo,Vs=oo;const Ot=lg(Mt,Qr,Vn,ei,Jt.clientWidth,Jt.clientHeight),Cn=document.createElement("input");Cn.type="file";Cn.accept="image/png,image/jpeg,image/webp,image/bmp,image/gif";Cn.style.display="none";Vi.appendChild(Cn);const Rn=document.createElement("input");Rn.type="file";Rn.accept="video/mp4,video/webm,video/ogg";Rn.style.display="none";Vi.appendChild(Rn);async function wg(){const i=Cn.files?.[0];if(Cn.value="",!!i)try{await Ot.setSeedImageFromFile(i)}catch(e){console.error("[DigitalSmoke] Failed to load selected image.",e)}}Cn.addEventListener("change",()=>{wg()});async function Cg(){const i=Rn.files?.[0];if(Rn.value="",!!i)try{await Ot.setSeedVideoFromFile(i),ao=0}catch(e){console.error("[DigitalSmoke] Failed to load selected video.",e)}}Rn.addEventListener("change",()=>{Cg()});const ht={active:!1,x:.5,y:.5,dx:0,dy:0,ink:1};let es=!1,Yr;function Ql(){Mt.render(Qr,Bn),Tg(Mt,"digital_smoke")}Yr=Eg(Vn,ei,{onParamsChange(i){Vn={...Vn,...i},Ot.setParams(i)},onPauseChange(i){ji=i},onResetSeed(i){ei=Math.max(1,Math.floor(i)),or=0,Ot.reset(ei),Yr.setSeed(ei)},onResetParams(i){Vn={...i},Ot.setParams(Vn),or=0,Ot.reset(ei)},onTiltLegacyChange(i){Ji=i},onSeedMorphChange(i){ao=Math.min(1,Math.max(0,i))},onPickSeedImage(){Cn.click()},onPickSeedVideo(){Rn.click()},onUseDefaultSeedImage(){Ot.useDefaultSeedImage()},onUseDefaultSeedVideo(){Ot.useDefaultSeedVideo()},onScreenshot(){Ql()}},Ji);function lo(){const i=Math.max(Jt.clientWidth,1),e=Math.max(Jt.clientHeight,1);Mt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Mt.setSize(i,e,!1),Bn.aspect=i/Math.max(e,1);const t=ot.degToRad(Bn.fov),n=1/Math.tan(t*.5),r=1/(Math.tan(t*.5)*Math.max(Bn.aspect,1e-6));Bn.position.z=Math.max(n,r)*1.08,Bn.updateProjectionMatrix(),Ot.resize(i,e)}window.addEventListener("resize",lo);lo();const Rg=new $u;let ec=0,_l=!1;function xl(i){return Math.min(1,Math.max(0,i))}function tc(i){const e=Vi.getBoundingClientRect(),t=xl((i.clientX-e.left)/Math.max(e.width,1)),n=xl(1-(i.clientY-e.top)/Math.max(e.height,1));return{x:t,y:n}}let zs=0,ks=0,Gs=0,Hs=0,Ws=0,Xs=1;function Pg(i){const e=Vn.planeTilt;let t=0,n=0,r=0,s=0,a=0;if(e>1e-4){const h=(ht.x-.5)*2,p=(ht.y-.5)*2,f=.02,v=E=>{const M=Math.sign(E),T=Math.abs(E);if(T<=f)return 0;const A=(T-f)/(1-f);return M*Math.pow(A,.8)},S=v(h),m=v(p),u=e*52;t=(Ji?-m:m)*u*.88,n=S*u,r=(Ji?1:-1)*S*m*u*.15,s=-S*e*54,a=(Ji?1:-1)*m*e*42}const o=1-Math.exp(-i*Math.max(.5,Vn.planeTiltEase)*2.2);zs=ot.lerp(zs,t,o),ks=ot.lerp(ks,n,o),Gs=ot.lerp(Gs,r,o*.9),Hs=ot.lerp(Hs,s,o),Ws=ot.lerp(Ws,a,o);const l=1-e*.06,c=1-Math.exp(-i*9);Vs=ot.lerp(Vs,za,c);const d=ot.clamp(l+Vs,.95,1.45);Xs=ot.lerp(Xs,d,c),Jt.style.transform=`perspective(1300px) translate3d(${Hs.toFixed(2)}px, ${Ws.toFixed(2)}px, 0px) rotateX(${zs.toFixed(3)}deg) rotateY(${ks.toFixed(3)}deg) rotateZ(${Gs.toFixed(3)}deg) scale(${Xs.toFixed(4)})`}function nc(i){i.preventDefault();const e=ot.clamp(-i.deltaY*55e-5,-.03,.03);za=ot.clamp(za+e,oo,Ag)}function ic(i){es=!0;const e=i.button===2,t=tc(i);ht.x=t.x,ht.y=t.y,ht.dx=0,ht.dy=0,ht.active=!0,ht.ink=e?-1:1,Mt.domElement.setPointerCapture(i.pointerId)}function rc(i){const e=tc(i),t=e.x-ht.x,n=e.y-ht.y;if(ht.x=e.x,ht.y=e.y,es){const r=(i.buttons&2)!==0;ht.active=!0,ht.ink=r?-1:1,ht.dx+=t,ht.dy+=n}}function qr(i){es=!1,ht.active=!1,ht.dx=0,ht.dy=0,ht.ink=1,Mt.domElement.hasPointerCapture(i.pointerId)&&Mt.domElement.releasePointerCapture(i.pointerId)}function sc(){es||(ht.active=!1,ht.dx=0,ht.dy=0,ht.ink=1)}function ac(i){i.preventDefault()}function oc(){ec=window.requestAnimationFrame(oc);const i=Math.min(Rg.getDelta(),.05);Pg(i);const e=1-Math.exp(-i*4);Bs=ot.lerp(Bs,ao,e),Ot.setSeedMorph(Bs),Ot.setPointer(ht),ji||(or+=i,Ot.update(i,or)),ht.dx=0,ht.dy=0,Mt.render(Qr,Bn)}function lc(i){if(i.repeat)return;const e=i.target;if(!(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable))){if(i.code==="Space"){i.preventDefault(),ji=!ji,Yr.setPaused(ji);return}if(i.code==="KeyR"){or=0,Ot.reset(ei);return}i.code==="KeyP"&&Ql()}}window.addEventListener("keydown",lc);Mt.domElement.addEventListener("pointerdown",ic);window.addEventListener("pointermove",rc);window.addEventListener("pointerup",qr);window.addEventListener("pointercancel",qr);Mt.domElement.addEventListener("pointerleave",sc);Mt.domElement.addEventListener("contextmenu",ac);Mt.domElement.addEventListener("wheel",nc,{passive:!1});oc();function cc(){_l||(_l=!0,window.cancelAnimationFrame(ec),window.removeEventListener("resize",lo),window.removeEventListener("keydown",lc),window.removeEventListener("pointermove",rc),window.removeEventListener("pointerup",qr),window.removeEventListener("pointercancel",qr),window.removeEventListener("beforeunload",cc),Mt.domElement.removeEventListener("pointerdown",ic),Mt.domElement.removeEventListener("pointerleave",sc),Mt.domElement.removeEventListener("contextmenu",ac),Mt.domElement.removeEventListener("wheel",nc),Cn.remove(),Rn.remove(),Yr.dispose(),Ot.dispose(),Mt.dispose(),Jt.style.transform="none",Mt.domElement.parentElement&&Mt.domElement.parentElement.removeChild(Mt.domElement))}window.addEventListener("beforeunload",cc);

!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return l.Date.now()};function m(e,t,o){var i,r,u,a,f,c,l=0,s=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError(n);function j(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,f=setTimeout(h,t),s?j(e):a}function T(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-l>=u}function h(){var e=g();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return m?v(n,u-(e-l)):n}(e))}function w(e){return f=void 0,b&&i?j(e):(i=r=void 0,a)}function O(){var e=g(),n=T(e);if(i=arguments,r=this,c=e,n){if(void 0===f)return S(c);if(m)return f=setTimeout(h,t),j(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=y(t)||0,p(o)&&(s=!!o.leading,u=(m="maxWait"in o)?d(y(o.maxWait)||0,t):u,b="trailing"in o?!!o.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=r=f=void 0},O.flush=function(){return void 0===f?a:w(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,o){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return p(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),m(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),j=document.querySelector("input"),S=document.querySelector("textarea"),T="feedback-form-state";b.addEventListener("input",t((function(e){h[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(h))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log("email ",j.value),console.log("message",S.value),e.currentTarget.reset(),localStorage.removeItem(T)})),function(){const e=JSON.parse(localStorage.getItem(T));if(e){const t=e.email;j.value=t;const n=e.message;S.value=n}}();const h={}}();
//# sourceMappingURL=03-feedback.9bb8339d.js.map

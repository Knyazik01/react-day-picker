"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2411],{3413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=n(9142),a=n(8239),i=(n(7640),n(710)),o=["components"],c={id:"isMatch",title:"Function: isMatch",sidebar_label:"isMatch",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/functions/isMatch",id:"api/functions/isMatch",title:"Function: isMatch",description:"\u25b8 isMatch(day, matchers): boolean",source:"@site/docs/api/functions/isMatch.md",sourceDirName:"api/functions",slug:"/api/functions/isMatch",permalink:"/api/functions/isMatch",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"isMatch",title:"Function: isMatch",sidebar_label:"isMatch",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"isDayPickerSingle",permalink:"/api/functions/isDayPickerSingle"},next:{title:"useActiveModifiers",permalink:"/api/functions/useActiveModifiers"}},p={},u=[{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isMatch"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"day"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"matchers"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Returns whether a day matches against at least one of the given Matchers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const day = new Date(2022, 5, 19);\nconst matcher1: DateRange = {\n   from: new Date(2021, 12, 21),\n   to: new Date(2021, 12, 30)\n}\nconst matcher2: DateRange = {\n   from: new Date(2022, 5, 1),\n   to: new Date(2022, 5, 23)\n}\n\nconst isMatch(day, [matcher1, matcher2]); // true, since day is in the matcher1 range.\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"day")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matchers")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/api/types/Matcher"},(0,i.kt)("inlineCode",{parentName:"a"},"Matcher")),"[]")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/01b8e91/src/contexts/Modifiers/utils/isMatch.ts#L41"},"src/contexts/Modifiers/utils/isMatch.ts:41")))}f.isMDXComponent=!0},710:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7640);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=e98fd9f4.aca99f2a.js.map
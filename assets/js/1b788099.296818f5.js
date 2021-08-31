(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[473],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,o(o({ref:e},s),{},{components:r})):n.createElement(g,o({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3394:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={id:"FeatureComparison",title:"Feature Comparison"},p="FEATURE COMPARISON",c={unversionedId:"FeatureComparison",id:"FeatureComparison",isDocsHomePage:!1,title:"Feature Comparison",description:"This section compares the latest stable version of Tremor with other alternative products.",source:"@site/docs/FeatureComparison.md",sourceDirName:".",slug:"/FeatureComparison",permalink:"/tremor-new-website/docs/FeatureComparison",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/FeatureComparison.md",version:"current",frontMatter:{id:"FeatureComparison",title:"Feature Comparison"},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/tremor-new-website/docs/Development/testing"},next:{title:"Glossary",permalink:"/tremor-new-website/docs/Glossary"}},s=[{value:"Logstash",id:"logstash",children:[]},{value:"Hindsight",id:"hindsight",children:[]}],m={toc:s};function u(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"feature-comparison"},"FEATURE COMPARISON"),(0,i.kt)("p",null,"This section compares the latest stable version of Tremor with other alternative products."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Tremor"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Hindsight"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Logstash"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pipeline Architecture"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Additional Runtime"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Not required"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Not required"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Requires Java runtime")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Configurable via a script file"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Open Source"),(0,i.kt)("td",{parentName:"tr",align:"center"},"N"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Grok support"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"center"},"N"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JSON Codec"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Windows support"),(0,i.kt)("td",{parentName:"tr",align:"center"},"N"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h2",{id:"logstash"},"Logstash"),(0,i.kt)("p",null,"Logstash is an open source data collection engine with real time pipelining capabilities written by Elasticsearch.  We compare Tremor with the Logstash 7.0 which is the latest stable version at the time of writing."),(0,i.kt)("h2",{id:"hindsight"},"Hindsight"),(0,i.kt)("p",null,"Hindsight is a C based data processing infrastructure based on the Lua sandbox."))}u.isMDXComponent=!0}}]);
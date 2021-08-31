(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2325],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7212:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={},l="Transform",p={unversionedId:"Workshop/examples/postgres_timescaledb/README",id:"Workshop/examples/postgres_timescaledb/README",isDocsHomePage:!1,title:"Transform",description:"This example demonstrates extracting data from a Postgres database and inserting",source:"@site/docs/Workshop/examples/12_postgres_timescaledb/README.md",sourceDirName:"Workshop/examples/12_postgres_timescaledb",slug:"/Workshop/examples/postgres_timescaledb/README",permalink:"/tremor-new-website/docs/Workshop/examples/postgres_timescaledb/README",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Workshop/examples/12_postgres_timescaledb/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transform",permalink:"/tremor-new-website/docs/Workshop/examples/influx/README"},next:{title:"Transform",permalink:"/tremor-new-website/docs/Workshop/examples/grafana/README"}},c=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[{value:"Discussion",id:"discussion",children:[]}]}],m={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transform"},"Transform"),(0,i.kt)("p",null,"This example demonstrates extracting data from a Postgres database and inserting\ndata to TimescaleDB."),(0,i.kt)("p",null,"The demo starts up said PostgreSQL, TimescaleDB, Tremor and ",(0,i.kt)("inlineCode",{parentName:"p"},"pgweb"),"."),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{target:"_blank",href:n(144).Z},(0,i.kt)("code",null,"00_ramps.yaml"))," we pass in a\nconfiguration for an onramp of type ",(0,i.kt)("inlineCode",{parentName:"p"},"postgres")," along with typical connection\nstring requirements."),(0,i.kt)("p",null,"Additionally, we are required to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"interval_ms")," which stands for\nfrequency of polling that Tremor is performing on Postgres database with the\ngiven ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),". Query will be passed two parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$1")," is the ",(0,i.kt)("inlineCode",{parentName:"li"},"TIMESTAMPTZ")," that indicates the start time and date for the\nrange"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$2")," is the ",(0,i.kt)("inlineCode",{parentName:"li"},"TIMESTAMPTZ")," that indicates the ending time and date for the\nrange")),(0,i.kt)("p",null,"The initial range is formed by taking ",(0,i.kt)("inlineCode",{parentName:"p"},"consume_from")," configuration setting and\nthe current time and date. This will effectivelly backfill data. From then on,\nTremor will poll in regular ",(0,i.kt)("inlineCode",{parentName:"p"},"interval_ms"),"."),(0,i.kt)("p",null,"In addition to a ",(0,i.kt)("inlineCode",{parentName:"p"},"postgres")," onramp, we also utilize a ",(0,i.kt)("inlineCode",{parentName:"p"},"crononome")," onramp. The\nintention is to demonstrate intermediate record format which is accepted by\n",(0,i.kt)("inlineCode",{parentName:"p"},"postgres")," offramp."),(0,i.kt)("h2",{id:"business-logic"},"Business Logic"),(0,i.kt)("p",null,"We have two pipelines."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:n(956).Z},(0,i.kt)("code",null,"postgres.trickle"))," for data coming from a PostgreSQL database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:n(8716).Z},(0,i.kt)("code",null,"crononome.trickle"))," for events coming from the ",(0,i.kt)("inlineCode",{parentName:"li"},"crononome")," onramp at a regular interval of ",(0,i.kt)("inlineCode",{parentName:"li"},"5s"),".")),(0,i.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up\n  ... lots of logs ...\n")),(0,i.kt)("p",null,"Open the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8081"},"pgweb")," to browse through received rows in\nTimescaleDB."),(0,i.kt)("h3",{id:"discussion"},"Discussion"))}d.isMDXComponent=!0},144:function(e,t,n){"use strict";t.Z=n.p+"assets/files/00_ramps-c5f0d574f0fc74dfa0a7f9fe360f49cc.yaml"},8716:function(e,t,n){"use strict";t.Z=n.p+"assets/files/crononome-4a67da5b67f44d0defe99bb0630f8f31.trickle"},956:function(e,t,n){"use strict";t.Z=n.p+"assets/files/postgres-9317f3359d6ae14e610ea840f0633d9e.trickle"}}]);
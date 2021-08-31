(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[1247],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7350:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={},l="Transform",c={unversionedId:"Workshop/examples/validate/README",id:"Workshop/examples/validate/README",isDocsHomePage:!1,title:"Transform",description:"The validate example adds the concept of scripts to the trickle file. In this script we validate the schema of the input json against some requirements and only let events through that do satisfy them. Other events are dropped. Those changes are entirely inside the example.trickle.",source:"@site/docs/Workshop/examples/03_validate/README.md",sourceDirName:"Workshop/examples/03_validate",slug:"/Workshop/examples/validate/README",permalink:"/tremor-new-website/docs/Workshop/examples/validate/README",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Workshop/examples/03_validate/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transform",permalink:"/tremor-new-website/docs/Workshop/examples/transform/README"},next:{title:"Transform",permalink:"/tremor-new-website/docs/Workshop/examples/logstash/README"}},p=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[{value:"Discussion",id:"discussion",children:[]}]}],d={toc:p};function u(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transform"},"Transform"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," example adds the concept of scripts to the trickle file. In this script we validate the schema of the input json against some requirements and only let events through that do satisfy them. Other events are dropped. Those changes are entirely inside the ",(0,i.kt)("a",{target:"_blank",href:n(9130).Z},(0,i.kt)("code",null,"example.trickle")),"."),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{target:"_blank",href:n(9130).Z},(0,i.kt)("code",null,"example.trickle"))," we define a script that validates the schema that the field ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," is a string and the field ",(0,i.kt)("inlineCode",{parentName:"p"},"selected")," is a boolean. If both conditions are true we pass it on, otherwise it'll drop."),(0,i.kt)("p",null,"All other configuration is the same as per the previous example, and is elided here for brevity."),(0,i.kt)("h2",{id:"business-logic"},"Business Logic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},"define script validate                                                          # define the script\nscript\n  match event of\n    case %{ present hello, present selected }                                   # Record pattern, validating field presence\n        when type::is_string(event.hello) and type::is_bool(event.selected)     # guards\n            => emit event                                                       # propagate if valid\n    default => drop                                                             # discard or reroute\n  end\nend;\n")),(0,i.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,i.kt)("p",null,"Run a the query against a sample input.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ tremor run -i input.json example.trickle\n>> {"hello": "world"}\n')),(0,i.kt)("p",null,"Deploy the solution into a docker environment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker-compose up\n>> {"hello": "again", "selected": true}\n')),(0,i.kt)("p",null,"Inject test messages via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat")),(0,i.kt)("p",null,"!!! note\nCan be installed via ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo install websocat")," for the lazy/impatient amongst us"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat inputs.txt | websocat ws://localhost:4242\n...\n")),(0,i.kt)("p",null,"Injecting bad messages to verify validation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat invalids.txt | websocat ws://localhost:4242\n...\n")),(0,i.kt)("h3",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"We introduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"declare script")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"create script")," query language features. ",(0,i.kt)("inlineCode",{parentName:"p"},"delcare script")," lets declare a template for a script to be run while ",(0,i.kt)("inlineCode",{parentName:"p"},"create script")," instanciates it as a part of the graph. ",(0,i.kt)("inlineCode",{parentName:"p"},"create script")," takes an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"as <name>")," argument if it is omitted the operator will have the same name as the declaration."),(0,i.kt)("p",null,"!!! tip\nScripts themselves can not connect to elements inside the graph, a ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," statement is needed to glue scripts and other logic together."))}u.isMDXComponent=!0},9130:function(e,t,n){"use strict";t.Z=n.p+"assets/files/example-6823b48f5bf4299ac64a456bfb415ad4.trickle"}}]);
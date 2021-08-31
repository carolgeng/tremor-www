(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9299],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return g}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return n?t.createElement(d,l(l({ref:r},c),{},{components:n})):t.createElement(d,l({ref:r},c))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9314:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var t=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],i={},p="Profiling Tremor",s={unversionedId:"Development/profiling",id:"Development/profiling",isDocsHomePage:!1,title:"Profiling Tremor",description:"This is a short canned synopsis of profiling tremor.",source:"@site/docs/Development/profiling.md",sourceDirName:"Development",slug:"/Development/profiling",permalink:"/tremor-new-website/docs/Development/profiling",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Development/profiling.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"security-bugs",permalink:"/tremor-new-website/docs/Development/process/security-bugs"},next:{title:"Usage Guide",permalink:"/tremor-new-website/docs/Development/quick-start"}},c=[{value:"Valgrind",id:"valgrind",children:[{value:"Setup on Mac OS X",id:"setup-on-mac-os-x",children:[]},{value:"Dependent utilities",id:"dependent-utilities",children:[]},{value:"Basic profiling via tremor",id:"basic-profiling-via-tremor",children:[]}]},{value:"Flamegraphs",id:"flamegraphs",children:[]}],u={toc:c};function m(e){var r=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"profiling-tremor"},"Profiling Tremor"),(0,o.kt)("p",null,"This is a short canned synopsis of profiling tremor."),(0,o.kt)("h2",{id:"valgrind"},"Valgrind"),(0,o.kt)("p",null,"We use valgrind, specifically callgrind, to drive call graph optimizations in tremor."),(0,o.kt)("h3",{id:"setup-on-mac-os-x"},"Setup on Mac OS X"),(0,o.kt)("p",null,"Install valgrind via homebrew"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install valgrind\n")),(0,o.kt)("h3",{id:"dependent-utilities"},"Dependent utilities"),(0,o.kt)("p",null,"The Google Performance Toolkit, gprof2dot, qcachegrind are also required / useful."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install gprof2dot\nbrew install gperftools\nbrew install qcachegrind\n")),(0,o.kt)("h3",{id:"basic-profiling-via-tremor"},"Basic profiling via tremor"),(0,o.kt)("p",null,"This is good enough for initial high-level exploration."),(0,o.kt)("p",null,"For example, run a tremor pipeline against recorded data in data.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"valgrind --tool=callgrind target/debug/tremor run tests/configs/ut.combine3-op.yaml data.json\n")),(0,o.kt)("p",null,"Analysing results via google perf toolkit and graphviz for static call flow diagrams"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gprof2dot -f callgrind callgrind.out.93972 > pipe.dot\ndot -Tpng pipe.dot -o pipe.png && open pipe.png\n")),(0,o.kt)("p",null,"Interactive analysis via QCachegrind / KCachegrind"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"qcachegrind callgrind.out.93972\n")),(0,o.kt)("p",null,"The profiling ( sampling ) frequency is tunable and ",(0,o.kt)("em",{parentName:"p"},"SHOULD")," be tuned for each run, eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"RUST_BACKTRACE=1 PROFILEFREQUENCY=1000 valgrind --tool=callgrind \\\n    target/release/tremor run examples/config-spike5.tremor data.json\n")),(0,o.kt)("p",null,"!!! note\nWhen using a ",(0,o.kt)("strong",{parentName:"p"},"release")," build make sure debug symbols are configured in Cargo.toml and enable link time optimisations ( LTO )."),(0,o.kt)("h2",{id:"flamegraphs"},"Flamegraphs"),(0,o.kt)("p",null,"Install rust ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flamegraph-rs/flamegraph#systems-performance-work-guided-by-flamegraphs"},"flamegraph")," support:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install flamegraph\n")),(0,o.kt)("p",null,"Perform a benchmark run with flamegraph support ( on Mac OS X ):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flamegraph target/release/tremor server run -f bench/real-workflow-througput-json.yaml bench/link.yaml\n")),(0,o.kt)("p",null,"This generates a ",(0,o.kt)("inlineCode",{parentName:"p"},"flamegraph.svg")," file which can be opened from a browser."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"open flamegraph.svg\n")))}m.isMDXComponent=!0}}]);
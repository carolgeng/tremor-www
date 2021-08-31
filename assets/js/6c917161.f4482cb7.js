(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[6430],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2359:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={},s="CNCF OpenTelemetry Jaeger Interworking",p={unversionedId:"Workshop/examples/otel_jaeger/README",id:"Workshop/examples/otel_jaeger/README",isDocsHomePage:!1,title:"CNCF OpenTelemetry Jaeger Interworking",description:"!! note",source:"@site/docs/Workshop/examples/42_otel_jaeger/README.md",sourceDirName:"Workshop/examples/42_otel_jaeger",slug:"/Workshop/examples/otel_jaeger/README",permalink:"/tremor-new-website/docs/Workshop/examples/otel_jaeger/README",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Workshop/examples/42_otel_jaeger/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CNCF OpenTelemetry Zipkin Interorking",permalink:"/tremor-new-website/docs/Workshop/examples/otel_zipkin/README"},next:{title:"CNCF OpenTelemetry Prometheus Interworking",permalink:"/tremor-new-website/docs/Workshop/examples/otel_prometheus/README"}},c=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Jaeger client",id:"jaeger-client",children:[]}],m={toc:c};function u(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cncf-opentelemetry-jaeger-interworking"},"CNCF OpenTelemetry Jaeger Interworking"),(0,a.kt)("p",null,"!! note\nAll the application code here is available from the docs ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/42_otel_jaeger"},"git repository"),"."),(0,a.kt)("p",null,"This example builds on the simple passthrough CNCF OpenTelemetry\nconfiguration but configures Jaeger as a receiver and exporter in the\nOpenTelemetry Collector."),(0,a.kt)("p",null,"It shows how legacy observability frameworks such as Jaeger can be\ningested into OpenTelemetry based services directly, or via the\nOpenTelemetry collector into tremor for specialized processing."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jaeger service"),(0,a.kt)("li",{parentName:"ul"},"CNCF OpenTelemetry Collector service"),(0,a.kt)("li",{parentName:"ul"},"CNCF OpenTelemetry Onramp deployed into tremor"),(0,a.kt)("li",{parentName:"ul"},"Deployment configuration file")),(0,a.kt)("p",null,"External OpenTelemetry clients can use port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," to send OpenTelemetry logs, traces and metrics\nthrough tremor. Tremor prints the json mapping to standard out and forwards the events to the\nOpenTelemetry collector."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{target:"_blank",href:n(5313).Z},"onramp")," we use is the ",(0,a.kt)("inlineCode",{parentName:"p"},"otel")," CNCF OpenTelemetry onramp listening on a non-standard CNCF OpenTelemetry port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316"),", it receives protocol buffer messages over gRPC on this port. The log, metric and trace events received are converted to tremor's value system and passed through a passthrough pipeline to the CNCF OpenTelemetry sink. The sink will try to connect to a downstream CNCF\nOpenTelemetry endpoint. In this workshop we will use the well known OpenTelemetry port of ",(0,a.kt)("inlineCode",{parentName:"p"},"4317")," for our sink and run the standard OpenTelemetry collector on this port using its a simple ",(0,a.kt)("a",{target:"_blank",href:n(1256).Z},"collector configuration"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: otlp\n    type: otel # Use the OpenTelemetry gRPC listener source\n    codec: json # Json is the only supported value\n    config:\n      port: 4316 # The TCP port to listen on\n      host: "0.0.0.0" # The IP address to bind on ( all interfaces in this case )\n')),(0,a.kt)("p",null,"It connects to a simple passthrough pipeline. This pipeline forwards any received\nobservability events downstream unchanged."),(0,a.kt)("p",null,"We connect the passthrough output events into a standard output sink.\nThe ",(0,a.kt)("a",{target:"_blank",href:n(6630).Z},"binding")," expresses these relations and gives deployment connectivity graph."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"binding:\n  - id: example\n    links:\n      '/onramp/otlp/{instance}/out':\n       - '/pipeline/example/{instance}/in'\n      '/pipeline/example/{instance}/out':\n       - '/offramp/stdout/{instance}/in'\n")),(0,a.kt)("p",null,"Finally the ",(0,a.kt)("a",{target:"_blank",href:n(2580).Z},"mapping")," instanciates the binding with the given name and instance variable to activate the elements of the binding."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mapping:\n  /binding/example/passthrough:\n    instance: "passthrough"\n')),(0,a.kt)("h2",{id:"business-logic"},"Business Logic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out\n")),(0,a.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,a.kt)("p",null,"Use any compliant OpenTelemetry instrumented application and configure the\nserver to our source on port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," instead of the default ",(0,a.kt)("inlineCode",{parentName:"p"},"4317"),"."),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"For convenience, use the provided ",(0,a.kt)("a",{target:"_blank",href:n(4773).Z},"docker-compose.yaml")," to\nstart and stop tremor and the OpenTelemetry collector as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Start\n$ docker compose up\n\n# Stop\n$ docker compose down\n")),(0,a.kt)("h2",{id:"jaeger-client"},"Jaeger client"),(0,a.kt)("p",null,"We use an existing Jaeger client for demonstration purposes. Fetch the standard C++ Jaeger\nclient as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the git repo\n$ git clone https://github.com/jaegertracing/jaeger-client-cpp\n# Change directory into the repo root\n$ cd jaeger-client-cpp\n# Build ( make a cup of tea, this takes a while! )\n$ mkdir build\n$ cd build\n$ cmake ..\n$ make\n")),(0,a.kt)("p",null,"Configure the example jaeger application to point at our dockerized service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"disabled: false\nreporter:\n  logSpans: true\n  endpoint: http://localhost:14268/api/traces\nsampler:\n  type: const\n  param: 1\n")),(0,a.kt)("p",null,"Run the jeager client to generate trace spans"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# From the `build` directory\n$ ./app ../examples/config.yml\nINFO: Initializing logging reporter\nINFO: Reporting span f05fbb51006ac531:f062508e8013067f:f05fbb51006ac531:1\nINFO: Reporting span f05fbb51006ac531:f05fbb51006ac531:0000000000000000:1\n")),(0,a.kt)("p",null,"Verify our spans reached the Jaeger UI deployed in docker via pointing our browser to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:16686")," by searching for traces:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot.png",src:n(8481).Z})),(0,a.kt)("p",null,"Verify that the OpenTelemetry Collector and tremor have processed our trace spans.\nIn this configuration we use the OpenTelemetry Collector to forward to Jaeger and to\nforward to tremor."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot.png",src:n(639).Z})))}u.isMDXComponent=!0},4773:function(e,t,n){"use strict";t.Z=n.p+"assets/files/docker-compose-e3eb8b16a67a558d58ea39c0297e1331.yaml"},1256:function(e,t,n){"use strict";t.Z=n.p+"assets/files/collector-471c475023f5454091e05ac3c612df1e.yaml"},5313:function(e,t,n){"use strict";t.Z=n.p+"assets/files/00_ramps-5ce8352c9157a33bbe01a370ae1488f1.yaml"},6630:function(e,t,n){"use strict";t.Z=n.p+"assets/files/01_binding-2aa18844f0acf1b23539352449e0641d.yaml"},2580:function(e,t,n){"use strict";t.Z=n.p+"assets/files/02_mapping-9c81a0870131ab67e86b0f001460a101.yaml"},639:function(e,t,n){"use strict";t.Z=n.p+"assets/images/docker-snap-2f5952bac9e2dec89776f0a093b70989.png"},8481:function(e,t,n){"use strict";t.Z=n.p+"assets/images/jaeger-ui-4c1e8b2b8e7336480d02f24db249140a.png"}}]);
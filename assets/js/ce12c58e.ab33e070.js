(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2633],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1721:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),i=["components"],a={},p="HTTP -> Websocket Bridge",l={unversionedId:"Workshop/examples/bridges_lt_http_ws/README",id:"Workshop/examples/bridges_lt_http_ws/README",isDocsHomePage:!1,title:"HTTP -> Websocket Bridge",description:"Example HTTP -> Websocket bridge application built on top of Tremor and meant to be a demonstration of linked transports.",source:"@site/docs/Workshop/examples/34_bridges_lt_http_ws/README.md",sourceDirName:"Workshop/examples/34_bridges_lt_http_ws",slug:"/Workshop/examples/bridges_lt_http_ws/README",permalink:"/tremor-new-website/docs/Workshop/examples/bridges_lt_http_ws/README",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Workshop/examples/34_bridges_lt_http_ws/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Websocket Proxy",permalink:"/tremor-new-website/docs/Workshop/examples/proxies_lt_ws/README"},next:{title:"Reverse proxy with Load Balancing",permalink:"/tremor-new-website/docs/Workshop/examples/reverse_proxy_load_balancing/README"}},c=[{value:"Setup",id:"setup",children:[{value:"Sources and sinks",id:"sources-and-sinks",children:[]},{value:"Request flow",id:"request-flow",children:[]},{value:"Processing logic",id:"processing-logic",children:[]}]},{value:"Testing",id:"testing",children:[]}],u={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"http---websocket-bridge"},"HTTP -> Websocket Bridge"),(0,s.kt)("p",null,"Example HTTP -> Websocket bridge application built on top of Tremor and meant to be a demonstration of ",(0,s.kt)("a",{parentName:"p",href:"../../../operations/linked-transports.md"},"linked transports"),"."),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("p",null,"!!! tip\nAll the code here is available in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/34_bridges_lt_http_ws"},"git repository")," as well."),(0,s.kt)("h3",{id:"sources-and-sinks"},"Sources and sinks"),(0,s.kt)("p",null,"We configure a rest onramp listening on port 9139, that is meant to be a bridge for our ",(0,s.kt)("a",{parentName:"p",href:"/tremor-new-website/docs/Workshop/examples/servers_lt_ws/README"},"example websocket server")," (configured as en endpoint in the websocket offramp here)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: http\n    type: rest\n    linked: true\n    codec: string\n    config:\n      host: 0.0.0.0\n      port: 9139\n\nofframp:\n  - id: ws\n    type: ws\n    linked: true\n    codec: string\n    postprocessors:\n      - lines\n    config:\n      url: "ws://tremor-server:8139"\n')),(0,s.kt)("h3",{id:"request-flow"},"Request flow"),(0,s.kt)("p",null,"Incoming HTTP requests from clients are forwarded to the ",(0,s.kt)("inlineCode",{parentName:"p"},"request_processing")," pipeline, from where it goes to the websocket server. The resulting websocket message reply is then sent back as HTTP response to the client which initiated the request (after some needed processing from the ",(0,s.kt)("inlineCode",{parentName:"p"},"response_processing")," pipeline)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'binding:\n  - id: main\n    links:\n      # send incoming requests for processing\n      "/onramp/http/{instance}/out":\n        ["/pipeline/request_processing/{instance}/in"]\n\n      # process incoming requests and relay it to ws offramp\n      "/pipeline/request_processing/{instance}/out":\n        ["/offramp/ws/{instance}/in"]\n\n      # send the response from ws offramp to the passthrough pipeline\n      # this works well as long as the passthrough pipeline is not used\n      # by anything else (which is the case for this example)\n      "/offramp/ws/{instance}/out":\n        ["/pipeline/response_processing/{instance}/in"]\n\n      # send the ws repsonse back as a response to incoming\n      "/pipeline/response_processing/{instance}/out":\n        ["/onramp/http/{instance}/in"]\n')),(0,s.kt)("h3",{id:"processing-logic"},"Processing logic"),(0,s.kt)("p",null,"Implementation for the ",(0,s.kt)("inlineCode",{parentName:"p"},"request_processing")," pipeline:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-trickle"},'define script process\nscript\n  match $request.url.path of\n    # only pass requests to /bridge\n    case "/bridge" =>\n      null\n    default =>\n      # can send this to a different port than the default err port too\n      emit {\n        "error": "Unsupported url path: {$request.url.path}",\n        "event": event\n      } => "err"\n  end;\n  event;\nend;\n\ncreate script process;\n\n# main request processing\nselect event from in into process;\nselect event from process into out;\n\n# tremor runtime errors from the processing script\nselect event from process/err into err;\n')),(0,s.kt)("p",null,"Implementation for the ",(0,s.kt)("inlineCode",{parentName:"p"},"response_processing")," pipeline:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-trickle"},'define script process\nscript\n  # defaults for the server response\n  let $response = {\n    "status": 200,\n    "headers": {\n      "x-powered-by": "Tremor",\n    }\n  };\n  event;\nend;\n\ncreate script process;\n\n# main request processing\nselect event from in into process;\nselect event from process into out;\n\n# tremor runtime errors from the processing script\nselect event from process/err into err;\n')),(0,s.kt)("h2",{id:"testing"},"Testing"),(0,s.kt)("p",null,"Assuming you have all the code from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/34_bridges_lt_http_ws"},"git repository"),", run the following to start our application (along with the ",(0,s.kt)("a",{parentName:"p",href:"/tremor-new-website/docs/Workshop/examples/servers_lt_ws/README"},"tremor websocket server example")," that our application is bridging to):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose up\n")),(0,s.kt)("p",null,"Now let's try to test the echo capabilities of the websocket server example, via the HTTP bridge:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'# via the HTTP bridge\n$ curl -i http://localhost:9139/bridge -d "hello"\nHTTP/1.1 200 OK\ncontent-length: 5\ndate: Thu, 15 Oct 2020 05:24:23 GMT\ncontent-type: text/plain\nx-powered-by: Tremor\n\nhello\n\n\n# just the websocket server\n$ echo "hello" | websocat -n1 ws://localhost:8139\nhello\n')),(0,s.kt)("p",null,"Our special snot-handling works as well:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -i http://localhost:9139/bridge -d "snot"\nbadger\n')),(0,s.kt)("p",null,"Only the ",(0,s.kt)("inlineCode",{parentName:"p"},"/bridge")," path (as setup from the pipeline) works for the bridging:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://localhost:9139/some_path -d "snot"\n{"error":"Oh no, we ran into something unexpected :(\\n Unsupported url path: /some_path","event":"snot"}\n')),(0,s.kt)("p",null,"And if there's an internal tremor error while processing both the incoming HTTP request and the websocket reply to it (eg: codec or pre/post-processor failure), or if the websocket server is just down, an error will be bubbled up to the client. Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'# stop the websocket server\n$ docker stop 34_bridges_lt_http_ws_tremor-server_1\n\n# websocket server connection now gets closed from the bridge\n$ curl -i http://localhost:9139/bridge -d "hello"\nHTTP/1.1 500 Internal Server Error\ncontent-length: 198\ndate: Fri, 16 Oct 2020 04:12:11 GMT\ncontent-type: application/json\n\n{"error":"Oh no, we ran into something unexpected :(\\n Error receiving reply from server ws://localhost:8139: WebSocket protocol error: Connection reset without closing handshake","event_id":"1:0:3"}\n\nInternally the websocket offramp is trying to re-establish the connection continuously.\n\nRestarting the docker websocket server will heal the offramp:\n\n```sh\n# restart the websocket server\n$ docker start 34_bridges_lt_http_ws_tremor-server_1\n\n$ curl http://localhost:9139/bridge -d "hello"\nhello\n')))}h.isMDXComponent=!0}}]);
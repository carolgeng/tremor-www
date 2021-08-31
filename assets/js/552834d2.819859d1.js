(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7479],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5666:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),s=["components"],i={},p="Reverse proxy with Load Balancing",l={unversionedId:"Workshop/examples/reverse_proxy_load_balancing/README",id:"Workshop/examples/reverse_proxy_load_balancing/README",isDocsHomePage:!1,title:"Reverse proxy with Load Balancing",description:"This example shows how to setup tremor as a reverse proxy for HTTP/1.1 that",source:"@site/docs/Workshop/examples/35_reverse_proxy_load_balancing/README.md",sourceDirName:"Workshop/examples/35_reverse_proxy_load_balancing",slug:"/Workshop/examples/reverse_proxy_load_balancing/README",permalink:"/tremor-new-website/docs/Workshop/examples/reverse_proxy_load_balancing/README",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Workshop/examples/35_reverse_proxy_load_balancing/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP -> Websocket Bridge",permalink:"/tremor-new-website/docs/Workshop/examples/bridges_lt_http_ws/README"},next:{title:"Quota Service",permalink:"/tremor-new-website/docs/Workshop/examples/quota_service/README"}},c=[{value:"Setting up multiple web-servers for testing purposes",id:"setting-up-multiple-web-servers-for-testing-purposes",children:[]},{value:"Setting up Tremor as a reverse proxy",id:"setting-up-tremor-as-a-reverse-proxy",children:[]},{value:"Start the Reverse Proxy and test it",id:"start-the-reverse-proxy-and-test-it",children:[]}],d={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reverse-proxy-with-load-balancing"},"Reverse proxy with Load Balancing"),(0,a.kt)("p",null,"This example shows how to setup tremor as a reverse proxy for HTTP/1.1 that\nload balances between multiple upstream servers in a round-robin fashion."),(0,a.kt)("p",null,"We are going to make use of the new ",(0,a.kt)("a",{parentName:"p",href:"../../../operations/linked-transports.md"},"linked transport")," and ",(0,a.kt)("em",{parentName:"p"},"Quality of Service")," features in tremor ",(0,a.kt)("em",{parentName:"p"},"0.9"),"."),(0,a.kt)("h2",{id:"setting-up-multiple-web-servers-for-testing-purposes"},"Setting up multiple web-servers for testing purposes"),(0,a.kt)("p",null,"We use the server behind ",(0,a.kt)("inlineCode",{parentName:"p"},"https://httpbin.org")," to have three endpoints ready to proxy to and to inspect what we sent vs. what the upstream servers received."),(0,a.kt)("p",null,"Three httpbin servers are set up in the accompagnying ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"."),(0,a.kt)("h2",{id:"setting-up-tremor-as-a-reverse-proxy"},"Setting up Tremor as a reverse proxy"),(0,a.kt)("p",null,"!!! tip\nAll the code here is available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/35_reverse_proxy_load_balancing"},"git repository")," as well."),(0,a.kt)("p",null,"To issue incoming HTTP requests to an upstream HTTP server\na ",(0,a.kt)("a",{parentName:"p",href:"../../../artefacts/onramps.md#rest"},"REST onramp")," needs to be configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," to listen on a port of our choice:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"onramp:\n    - id: http_in\n      type: rest\n      linked: true # with this (new) setting, this onramp will be able to receive and send out responses to each request\n      codec: json\n      config:\n        host: 0.0.0.0\n        port: 65535\n")),(0,a.kt)("p",null,"To forward received requests to the httpbin upstream servers a ",(0,a.kt)("a",{parentName:"p",href:"../../../artefacts/offramps.md#rest"},"REST offramp")," needs to be configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," to point at each of it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'offramp:\n    - id: upstream01\n      type: rest\n      linked: true\n      codec: json\n      config:\n        endpoint:\n          host: webserver01\n        concurrency: 9 # allo max 9 concurrent in-flight requests\n    - id: upstream02\n      type: rest\n      linked: true\n      codec: json\n      config:\n        endpoint:\n          host: webserver02\n        method: POST # set a default method if no $request.method is set\n    - id: upstream03\n      type: rest\n      linked: true\n      codec: json\n      config:\n        endpoint:\n          host: webserver03\n        headers: # add some headers\n          "X-Upstream": "upstream03"\n')),(0,a.kt)("p",null,"Then we need to do the actual proxying in a pipeline that receives requests from the ",(0,a.kt)("inlineCode",{parentName:"p"},"http_in")," onramp, inspects it, manipulates it and forwards it to one of the configured offramps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'define script request_handling\nscript\n    let host = match $request.headers of\n      case %{ present host } => $request.headers.host[0]\n      default => "UNDEFINED"\n    end;\n    let forwarded = "by=localhost:65535;host={host};proto=http";\n    let $request.headers["Forwarded"] = forwarded;\n\n    # fiddle with the event\n    let event = patch event of\n      insert "forwarded" => forwarded\n    end;\n\n    # set request url parts for forwarding it to the rest offramp\n    # stripping out the host and port, as they will be set by the offramp\n    let $endpoint = patch $request.url of\n      erase "host",\n      erase "port"\n    end;\n\n    event;\nend;\n\n# ensure we distribute the load evenly\ndefine qos::roundrobin operator rr\nwith\n  outputs = ["ws01", "ws02", "ws03"]\nend;\ncreate operator rr;\n\n# apply backpressure if a server cannot keep up\n# or is not reachable\ndefine qos::backpressure operator bp\nwith\n  timeout = 10000, # max timeout before triggering this operator - 10s\n  steps = [100, 500, 1000, 10000] # backoff steps in ms\nend;\ncreate operator bp01 from bp;\ncreate operator bp02 from bp;\ncreate operator bp03 from bp;\n\ncreate script request_handling;\n\n# wire everything together\nselect event from in into request_handling;\nselect event from request_handling into rr;\n# connect each upstream throught the round-robin operator and a distinct backpressure operator\nselect event from rr/ws01 into bp01;\nselect event from rr/ws02 into bp02;\nselect event from rr/ws03 into bp03;\n# create three outputs - one for each upstream server\nselect event from bp01 into out/ws01;\nselect event from bp02 into out/ws02;\nselect event from bp03 into out/ws03;\nselect event from request_handling/err into err; # report error to its own port\n')),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"qos::roundrobin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"qos::backpressure")," we distribute the load evenly and\nback off if a server is overloaded or events continue to fail (result in HTTP status coded >= 400 or are unable to establish a connection etc.)."),(0,a.kt)("p",null,"But this is only half a proxy without response handling getting back from the offramp, which is only now possible with the dawn of ",(0,a.kt)("a",{parentName:"p",href:"../../../operations/linked-transports.md"},"linked transports"),". Handling the responses coming back from the upstreams is implemented in the following pipeline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'define script response_handling\nscript\n    use std::array;\n    use tremor::system;\n    # see: https://tools.ietf.org/html/rfc7230#section-5.7.1\n    let via_value = "1.1 #{system::hostname()}/tremor";\n    match $response.headers of\n        case %{ present via } =>\n            let $response.headers.via = array::push($response.headers.via, via_value)\n\n        default =>\n            let $response.headers.via = via_value\n    end;\n    event;\nend;\ncreate script response_handling;\n\nselect event from in into response_handling;\nselect event from response_handling into out;\nselect event from response_handling/err into err;\n')),(0,a.kt)("p",null,"Here we only set the ",(0,a.kt)("inlineCode",{parentName:"p"},"Via")," response header."),(0,a.kt)("p",null,"Now the single bits need to be connected in order to complete the flow back and forth between client and upstream. When linking ",(0,a.kt)("a",{parentName:"p",href:"../../../artefacts/offramps.md#rest"},"REST offramps")," and ",(0,a.kt)("a",{parentName:"p",href:"../../../artefacts/onramps.md#rest"},"onramps")," together it is important to take care that any error that might happen on the way is reported back to the REST onramp ",(0,a.kt)("inlineCode",{parentName:"p"},"http_in")," as otherwise clients would not receive any response. Luckily with Linked Transports we can connect all error outputs easily in our binding and thus will receive proper error messages as HTTP responses.\nAgain, we do it in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'binding:\n    - id: main\n      links:\n        "/onramp/http_in/{instance}/out": ["/pipeline/request_handling/{instance}/in"]\n        # connect the three pipeline outputs to the offramps to our upstream servers\n        "/pipeline/request_handling/{instance}/ws01": ["/offramp/upstream01/{instance}/in"]\n        "/pipeline/request_handling/{instance}/ws02": ["/offramp/upstream02/{instance}/in"]\n        "/pipeline/request_handling/{instance}/ws03": ["/offramp/upstream03/{instance}/in"]\n        # send responses from upstreams through the response handling pipeline\n        "/offramp/upstream01/{instance}/out": ["/pipeline/response_handling/{instance}/in"]\n        "/offramp/upstream02/{instance}/out": ["/pipeline/response_handling/{instance}/in"]\n        "/offramp/upstream03/{instance}/out": ["/pipeline/response_handling/{instance}/in"]\n        # send responses back to the http_in onramp\n        "/pipeline/response_handling/{instance}/out": ["/onramp/http_in/{instance}/in"]\n        # error handling - send errors back to the http_in onramp\n        "/pipeline/request_handling/{instance}/err": ["/onramp/http_in/{instance}/in"]\n        "/pipeline/response_handling/{instance}/err": ["/onramp/http_in/{instance}/in"]\n        "/offramp/upstream01/{instance}/err": ["/pipeline/internal_error_processing/{instance}/in"]\n        "/offramp/upstream02/{instance}/err": ["/pipeline/internal_error_processing/{instance}/in"]\n        "/offramp/upstream03/{instance}/err": ["/pipeline/internal_error_processing/{instance}/in"]\n        "/pipeline/internal_error_processing/{instance}/out": ["onramp/http_in/{instance}/in"]\n        "/pipeline/internal_error_processing/{instance}/err": ["onramp/http_in/{instance}/in"]\nmapping:\n  /binding/main/01:\n    instance: "01"\n')),(0,a.kt)("h2",{id:"start-the-reverse-proxy-and-test-it"},"Start the Reverse Proxy and test it"),(0,a.kt)("p",null,"We set up 3 upstream servers and tremor itself in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),".\nStarting them is straight-forward:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker compose up\n")),(0,a.kt)("p",null,"In another shell, we fire up curl and send requests through our reverse proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v -XGET http://localhost:65535/anything  -H\'Content-Type: application/json\' -d \'{"snot": "badger"}\'\n*   Trying ::1...\n* TCP_NODELAY set\n* Connected to localhost (::1) port 65535 (#0)\n> GET /anything HTTP/1.1\n> Host: localhost:65535\n> User-Agent: curl/7.64.1\n> Accept: */*\n> Content-Type: application/json\n> Content-Length: 18\n>\n* upload completely sent off: 18 out of 18 bytes\n< HTTP/1.1 200 OK\n< content-length: 549\n< access-control-allow-origin: *\n< content-type: application/json\n< connection: keep-alive\n< server: gunicorn/19.9.0\n< date: Tue, 06 Oct 2020 15:05:22 GMT\n< access-control-allow-credentials: true\n< via: 1.1 789e85f38adc/tremor\n<\n* Connection #0 to host localhost left intact\n{"args":{},"data":"{\\"snot\\":\\"badger\\",\\"forwarded\\":\\"by=localhost:65535;host=localhost:65535;proto=http\\"}","files":{},"form":{},"headers":{"Accept":"*/*","Accept-Encoding":"deflate, gzip","Content-Length":"82","Content-Type":"application/json","Expect":"100-continue","Forwarded":"by=localhost:65535;host=localhost:65535;proto=http","Host":"webserver01","User-Agent":"curl/7.64.1"},"json":{"forwarded":"by=localhost:65535;host=localhost:65535;proto=http","snot":"badger"},"method":"GET","origin":"172.19.0.5","url":"http://webserver01/anything"}\n')),(0,a.kt)("p",null,"The tremor reverse-proxy added the ",(0,a.kt)("inlineCode",{parentName:"p"},"forwarded")," field and header to the request (See the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," amd ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," fields of the response body) and passed through the response body from the upstream."),(0,a.kt)("p",null,"In the case of an upstream failing, the ",(0,a.kt)("inlineCode",{parentName:"p"},"qos::backpressure")," operators will kick in and discard events for the failed upstream."),(0,a.kt)("p",null,"Here is an example response for the case an upstream is not reachable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"error":"ConnectFailed: failed to connect to the server","event_id":"1:0:4"}\n')))}u.isMDXComponent=!0}}]);
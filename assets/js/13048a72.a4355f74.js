(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[4692],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7323:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={},p="CNCF OpenTelemetry Zipkin Interorking",l={unversionedId:"Workshop/examples/otel_zipkin/README",id:"Workshop/examples/otel_zipkin/README",isDocsHomePage:!1,title:"CNCF OpenTelemetry Zipkin Interorking",description:"This example builds on the simple passthrough CNCF OpenTelemetry",source:"@site/docs/Workshop/examples/41_otel_zipkin/README.md",sourceDirName:"Workshop/examples/41_otel_zipkin",slug:"/Workshop/examples/otel_zipkin/README",permalink:"/tremor-new-website/docs/Workshop/examples/otel_zipkin/README",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Workshop/examples/41_otel_zipkin/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CNCF OpenTelemetry Passthrough",permalink:"/tremor-new-website/docs/Workshop/examples/otel_passthrough/README"},next:{title:"CNCF OpenTelemetry Jaeger Interworking",permalink:"/tremor-new-website/docs/Workshop/examples/otel_jaeger/README"}},c=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Zipkin client",id:"zipkin-client",children:[]},{value:"Advanced",id:"advanced",children:[]}],u={toc:c};function m(e){var n=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cncf-opentelemetry-zipkin-interorking"},"CNCF OpenTelemetry Zipkin Interorking"),(0,a.kt)("p",null,"This example builds on the simple passthrough CNCF OpenTelemetry\nconfiguration but configures Zipkin as a receiver and exporter in the\nOpenTelemetry Collector."),(0,a.kt)("p",null,"It shows how legacy observability frameworks such as Zipkin can be\ningested into OpenTelemetry based services directly, or via the\nOpenTelemetry collector into tremor for specialized processing."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zipkin service"),(0,a.kt)("li",{parentName:"ul"},"CNCF OpenTelemetry Collector service"),(0,a.kt)("li",{parentName:"ul"},"CNCF OpenTelemetry Onramp deployed into tremor"),(0,a.kt)("li",{parentName:"ul"},"Deployment configuration file")),(0,a.kt)("p",null,"External open telemetry clients can use port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," to send OpenTelemetry logs, traces and metrics\nthrough tremor. Tremor prints the json mapping to standard out and forwards the events to the\nOpenTelemetry collector."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{target:"_blank",href:t(3664).Z},"onramp")," we use is the ",(0,a.kt)("inlineCode",{parentName:"p"},"otel")," CNCF OpenTelemetry onramp listening on a non-standard CNCF OpenTelemetry port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316"),", it receives protocol buffer messages over gRPC on this port. The log, metric and trace events received are converted to tremor's value system and passed through a passthrough pipeline to the CNCF OpenTelemetry sink. The sink will try to connect to a downstream CNCF\nOpenTelemetry endpoint. In this workshop we will use the well known OpenTelemetry port of ",(0,a.kt)("inlineCode",{parentName:"p"},"4317")," for our sink and run the standard OpenTelemetry collector on this port using its a simple ",(0,a.kt)("a",{target:"_blank",href:t(720).Z},"collector configuration"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: otlp\n    type: otel # Use the OpenTelemetry gRPC listener source\n    codec: json # Json is the only supported value\n    config:\n      port: 4316 # The TCP port to listen on\n      host: "0.0.0.0" # The IP address to bind on ( all interfaces in this case )\n')),(0,a.kt)("p",null,"It connects to a simple passthrough pipeline. This pipeline forwards any received\nobservability events downstream unchanged."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out;\n")),(0,a.kt)("p",null,"We connect the passthrough output events into a standard output sink.\nThe ",(0,a.kt)("a",{target:"_blank",href:t(9769).Z},"binding")," expresses these relations and gives deployment connectivity graph."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"binding:\n  - id: example\n    links:\n      '/onramp/otlp/{instance}/out':\n       - '/pipeline/example/{instance}/in'\n      '/pipeline/example/{instance}/out':\n       - '/offramp/stdout/{instance}/in'\n")),(0,a.kt)("p",null,"Finally the ",(0,a.kt)("a",{target:"_blank",href:t(5243).Z},"mapping")," instanciates the binding with the given name and instance variable to activate the elements of the binding."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mapping:\n  /binding/example/passthrough:\n    instance: "passthrough"\n')),(0,a.kt)("h2",{id:"business-logic"},"Business Logic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out\n")),(0,a.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,a.kt)("p",null,"Use any compliant OpenTelemetry instrumented application and configure the\nserver to our source on port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," instead of the default ",(0,a.kt)("inlineCode",{parentName:"p"},"4317"),"."),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"For convenience, use the provided ",(0,a.kt)("a",{target:"_blank",href:t(3706).Z},"docker-compose.yaml")," to\nstart and stop tremor and the opentelemetry collector as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Start\n$ docker compose up\n\n# Stop\n$ docker compose down\n")),(0,a.kt)("h2",{id:"zipkin-client"},"Zipkin client"),(0,a.kt)("p",null,"We use an existing Zipkin client for demonstration purposes. Fetch the standard zipkin php\nclient as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the git repo\n$ git clone https://github.com/openzipkin/zipkin-php-example\n# Cd into the repo root\n$ cd zipkin-php-example\n# Install dependent php libraries\n$ composer install\n")),(0,a.kt)("p",null,"And, assuming you have PHP composer, run the front and backend in two separate terminal windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Spin up the PHP backend on `locahost:9000`\ncomposer -run run-frontend\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Spin up the PHP frontend on `localhost:8081`\ncomposer -run run-backend\n")),(0,a.kt)("p",null,"Hit the frontend via curl ( in another terminal )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate trace spand via curl\ncurl -o - http://locahost:8081/\n")),(0,a.kt)("p",null,"Verify that our frontend has issued some spans in its terminal output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Output from our frontend composer terminal\n> php -S 'localhost:8081' frontend.php\n[Tue Apr  6 18:53:56 2021] PHP 7.4.10 Development Server (http://localhost:8081) started\n[Tue Apr  6 18:54:03 2021] [::1]:50812 Accepted\n[Tue Apr  6 18:54:03 2021] [::1]:50812 Closing\n")),(0,a.kt)("p",null,"Verify that our PHP backend has issued some spans in its terminal output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Output from our backend composer terminal\n> php -S 'localhost:9000' backend.php\n[Tue Apr  6 18:50:34 2021] PHP 7.4.10 Development Server (http://localhost:9000) started\n[Tue Apr  6 18:54:03 2021] [::1]:50813 Accepted\n[Tue Apr  6 18:54:03 2021] [::1]:50813 Closing\n")),(0,a.kt)("p",null,"Verify our spans reached the Zipkin UI deployed in docker via pointing our browser to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9412")," by searching for traces:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot.png",src:t(5348).Z})),(0,a.kt)("p",null,"Note that we expose the Zipkin UI on a non-standard port via docker so that our Zipkin traffic actually gets routed via the ",(0,a.kt)("inlineCode",{parentName:"p"},"opentelemetry collector")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"tremor")," and to the Zipkin service and ui. In this way the ",(0,a.kt)("inlineCode",{parentName:"p"},"opentelemetry collector")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tremor"),"."),(0,a.kt)("p",null,"From the perspective of the Zipkin PHP client - this is a plain vanilla Zipkin service.\nIn practice, this is the ",(0,a.kt)("inlineCode",{parentName:"p"},"opentelemetry-collector")," which is forwarding to both tremor and to the zipkin-ui in this demo."),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"Rather than run multiple sidecars, tremor could be configured to transform Zipkin\ntraffic directly to the OpenTelemetry format. Given transformation logic as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},'### Transform zipkin b3 ( http/json ) to otel\n\nuse cncf::otel;\nuse tremor::system;\nuse std::record;\n\nfn transform_span(span) with\n\n  # A simple transient event counter\n  let count = match state of\n    case null => let state = 0\n    default => let state = state + 1\n  end;\n\n  match span of\n    case %{\n      present id,           # span id\n      # present parentId,   # span parent id\n      present traceId,      # trace id\n      present annotations,\n      present name,         # name\n      #present kind,        # CLIENT\n      # present remoteEndpoint,\n      present timestamp,\n      present tags,\n      present duration,\n      present localEndpoint,\n    } =>\n        {\n          "resource": {\n            "attributes": merge span.tags of\n               { "tremor.ingest_ns": system::ingest_ns() }\n             end,\n            "dropped_attributes_count": 0,\n          },\n          "instrumentation_library_spans": [\n            {\n              "instrumentation_library": {\n                "name": "tremor",\n                "version": system::version(),\n              },\n              "spans": [\n                {\n                  "start_time_unix_nano": (span.timestamp * 1000),\n                  "end_time_unix_nano": (span.timestamp * 1000) + (span.duration * 1000),\n                  "name": "#{span.name} - #{count}",\n                  "attributes": record::from_array(for span.annotations of\n                    case(i,e) => [ "zipkin.annotation.#{e.value}", e.timestamp * 1000  ] # convert ts micros -> nanos\n                  end),\n                  "dropped_attributes_count": 0,\n                  "kind": match span of\n                     case %{ present kind } =>\n                       match span.kind of\n                        case "CLIENT" => otel::trace::spankind::client\n                        case "SERVER" => otel::trace::spankind::server\n                        case "PRODUCER" => otel::trace::spankind::server\n                        case "CONSUMER" => otel::trace::spankind::server\n                        default => otel::trace::spankind::client\n                      end\n                     default => otel::trace::spankind::client\n                  end,\n                  "trace_state": "",\n                  "parent_span_id": match span of\n                    case %{ present parentId, } => span.parentId\n                    default => "" # no parent span\n                  end,\n                  "span_id": span.id,\n                  "trace_id": span.traceId,\n                  "status": otel::trace::status::ok(),\n                  "events": [],\n                  "links": [],\n                  "dropped_events_count": 0,\n                  "dropped_links_count": 0,\n                }\n              ]\n            }\n          ]\n        }\n    default => { "drop": span }\n  end\nend;\n')),(0,a.kt)("p",null,"And a simple tremor query as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'#\n# Process zipkin b3 [span] to [otel resource span]\n#\ndefine script to_zipkin\nscript\n  use zipkin_to_otel;\n  for event.trace of\n    case (i,span) =>\n      merge zipkin_to_otel::transform_span(span) of\n        {\n          "resource": {\n            "attributes": {\n              "http.url.path": event.request.url.path,\n              "http.url.host": event.request.url.host,\n              "http.url.port": event.request.url.port,\n              "http.url.scheme": event.request.url.scheme,\n              "http.headers.user-agent": event.request.headers.user-agent[0],\n              "http.headers.b3": event.request.headers.b3[0],\n              "http.method": event.request.method,\n            }\n          }\n        }\n      end\n  end\nend;\ncreate script to_zipkin;\n\n# Push zipkin-b3/http [trace] into transformer capturing http request metadata\nselect { "request": $request, "trace": event } from in into to_zipkin;\n\n# Wrap resource spans as a trace event compatible with tremor otel sink\nselect { "trace": event } from to_zipkin into out;\n')),(0,a.kt)("p",null,"Removing the ",(0,a.kt)("inlineCode",{parentName:"p"},"zipkin-all-in-one")," container from this walkthrough's ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," and removing the ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenTelemetry collector")," configuration and container should be sufficient to produce a basic working environment based solely on tremor, and the\nZipkin PHP clients with minor adjustments to the script and query files above."),(0,a.kt)("p",null,"However, the CNCF OpenTelemetry Collector has excellent support for legacy observability\nframeworks and formats. Tremor does not. The Zipkin UI will be familiar to users who\nhave experience of observability through the Zipkin project. Tremor does not have a UI at all. We provide the example to illustrate a more complete example of how tremor is typically configured in production environments and to illustrate how existing trace and span information can relatively easily be adapted to ",(0,a.kt)("inlineCode",{parentName:"p"},"CNCF OpenTelemetry")," using tremor's scripting and query language support."))}m.isMDXComponent=!0},3706:function(e,n,t){"use strict";n.Z=t.p+"assets/files/docker-compose-465377b0d6c13f257ef5397ce8051ec0.yaml"},720:function(e,n,t){"use strict";n.Z=t.p+"assets/files/collector-716836fddef3036f82c3973ed80c3cda.yaml"},3664:function(e,n,t){"use strict";n.Z=t.p+"assets/files/00_ramps-55074d511b0774f2dc006b776f21f8c9.yaml"},9769:function(e,n,t){"use strict";n.Z=t.p+"assets/files/01_binding-f47d5ccaad9a4f1dcd46ce7f49351c46.yaml"},5243:function(e,n,t){"use strict";n.Z=t.p+"assets/files/02_mapping-9c81a0870131ab67e86b0f001460a101.yaml"},5348:function(e,n,t){"use strict";n.Z=t.p+"assets/images/zipkin-ui-05a2c533ec3e588002334f955e1ebb93.png"}}]);
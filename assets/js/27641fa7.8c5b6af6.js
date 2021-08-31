(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[6491],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},h),{},{components:n})):r.createElement(d,s({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8006:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],i={title:"To async or Not to async",author:"The Tremor Team",author_image_url:"https://avatars.githubusercontent.com/u/60009416?s=200&v=4",tags:["dev","rust"],draft:!1,image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fraw.githubusercontent.com%2Fwill-wow%2Fresult-async%2FHEAD%2Fassets%2Fimages%2Flogo.png&imgrefurl=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fresult-async&tbnid=YNViaemYW6WxgM&vet=10CA0QxiAoBWoXChMI-Pibqsup8gIVAAAAAB0AAAAAEAw..i&docid=avW8MHRaIq6BMM&w=1000&h=1000&itg=1&q=to%20async%20or%20not%20to%20async&client=firefox-b-d&ved=0CA0QxiAoBWoXChMI-Pibqsup8gIVAAAAAB0AAAAAEAw",hide_table_of_contents:!1,description:"Moving from threads to async tasks."},l=void 0,c={permalink:"/tremor-new-website/blog/2020/08/06/to-async-or-not-to-async",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/blog/2020-08-06-to-async-or-not-to-async.md",source:"@site/blog/2020-08-06-to-async-or-not-to-async.md",title:"To async or Not to async",description:"Moving from threads to async tasks.",date:"2020-08-06T00:00:00.000Z",formattedDate:"August 6, 2020",tags:[{label:"dev",permalink:"/tremor-new-website/blog/tags/dev"},{label:"rust",permalink:"/tremor-new-website/blog/tags/rust"}],readingTime:5.525,truncated:!0,prevItem:{title:"Releasing Tremor v0.9!",permalink:"/tremor-new-website/blog/2020/10/16/v09-release"},nextItem:{title:"Rust & Tell Berlin- March 2020",permalink:"/tremor-new-website/blog/2020/03/31/rust-and-tell"}},h=[{value:"The Tremor That Was (threads)",id:"the-tremor-that-was-threads",children:[]},{value:"Async/Futures",id:"asyncfutures",children:[]},{value:"Behavioural Improvements",id:"behavioural-improvements",children:[]},{value:"Initial Results",id:"initial-results",children:[]}],p={toc:h};function u(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With the upcoming Tremor release, 0.9.0, we're moving from threads as a basis for ramps and pipelines to async tasks."),(0,o.kt)("p",null,"Let's talk about why this is significant, what is changing, and how the architecture is changing."),(0,o.kt)("p",null,"Note that this is not a comprehensive treatise on threads or async tasks."),(0,o.kt)("h2",{id:"the-tremor-that-was-threads"},"The Tremor That Was (threads)"),(0,o.kt)("p",null,"Threads are a basic building block of programs that execute multiple pieces of code concurrently.\nThe operating system is responsible for coordinating across competing resource demands."),(0,o.kt)("p",null,"The OS can preempt, pause, and resume threads. We can leverage infinite or tight loops without the risk of completely blocking execution. These guarantees make concurrent code more accessible, with tools like",(0,o.kt)("inlineCode",{parentName:"p"},"crossbeam-channels")," to build upon."),(0,o.kt)("p",null,"Threads work especially well in use cases where the system and logical concurrency models are well aligned; or, we can easily map application threads to logical cores on the system being used. Each thread can happily work away on its part of the logic and pass the result on to the next. The one thread per core model is what tremor 0.8 and earlier used. We had a thread for the onramp, a thread for the pipeline, and a thread for the offramp. As the computational cost of decoding, processing, and encoding was often in the same ballpark, this worked exceptionally well. We managed to push up to 400MB/s of JSON through the system this way (including parsing, tremor-script logic, and serialization)."),(0,o.kt)("p",null,"This design can degenerate badly if there are more ramps and pipelines than cores on the system in use. Throughput degrades rapidly (as in up to 2 orders of magnitude worse at 30:1 ratio). At the time of writing this, the deployment model was one pipeline/ramp group on a four-core system, so it worked well in practice."),(0,o.kt)("p",null,"However, this places a burden on operators having to think about concurrency and parallelism to tune tremor for optimal performance and capacity."),(0,o.kt)("p",null,"In SMP systems, we observe other undesireable effects: The moment two communicating threads don't share the same underlying cache, performance plummets. This scenario exists when threads reside on two different CPUs or CCXs (",(0,o.kt)("a",{parentName:"p",href:"https://blog.licenser.net/2020/01/multithreaded-rust-on-threadripper/"},"thank you AMD for making me learn so much about CPU caches"),"). As long as two communicating threads share the same cache, data shared between them can avoid trips to main memory and cache coherency protocol overheads. When two threads communicate across different caches, reads/writes may catastrophically collide and introduce overheads that drastically reduce overall performance."),(0,o.kt)("h2",{id:"asyncfutures"},"Async/Futures"),(0,o.kt)("p",null,"Futures, and in rust ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await")," (short async from here on), work differently than threads. With threads, the operating system has ultimate control over which thread is scheduled to work when. With async we can more flexibly manage scheduling in application code. This has many advantages in systems software."),(0,o.kt)("p",null,"Instead of the operating system preempting a thread, tasks require coordination within the application. The advantage is that since we can control where we take a pause, we can provide soft guarantees that the thread of control yields to the task schedulers in a way that better fits the application. A good example is async-io, where we allow another task to work whenever we have to wait for some IO."),(0,o.kt)("p",null,"In Tremor, we use channels extensively to coordinate event flows. They connect sources, sinks, and pipelines. Every time a channel is empty or full, we have to wait for a event that fills or drains a now blocked channel: This is a good juncture to let other tasks get ahead with their work. In tremor, these opportunities are fairly common."),(0,o.kt)("p",null,"The cooperative model is not without issues: If we select the wrong time to let other tasks work, we can hurt performance or even break the system. Giving up control in the right moment is especially tricky since it is sometimes happening implicitly. A task that loops without yielding forever is an extreme example. In OS managed threads, the OS can preempt a thread of control, so this is a non-issue. In user-managed tasks, however, this is an issue that needs to be protected against."),(0,o.kt)("p",null,"In rust, calling ",(0,o.kt)("inlineCode",{parentName:"p"},".await")," is effectively, not a guarantee. We cannot know if an async function ever yields. We can ensure that we yield control via yield_now. However, this comes at a cost: namely, that we might yield in situations where it is not strictly necessary."),(0,o.kt)("p",null,"With regards to performance, tasks are typically cheaper from a context switching perspective, and we have finer grained control. On the other hand, we lose control over where a task runs, while we can pin threads to cores to schedule affinity on SMP systems, tasks may migrate across cores or executers move freely."),(0,o.kt)("p",null,"In Tremor, we have adopted the ",(0,o.kt)("inlineCode",{parentName:"p"},"smol")," small and fast async runtime. When two tasks can run consecutively on the same executor, ",(0,o.kt)("inlineCode",{parentName:"p"},"smol")," will schedule them in different executors. A significant improvement over the thread-based tremor runtime is that ",(0,o.kt)("inlineCode",{parentName:"p"},"smol")," does not aggressively steal work from other schedulers if they are not overloaded. This avoids the runtime trashing CPU caches based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/async-rs/async-std/issues/848"},"micro-benchmarking results"),"."),(0,o.kt)("h2",{id:"behavioural-improvements"},"Behavioural Improvements"),(0,o.kt)("p",null,"In previous releases of Tremor, the runtime focused on situations where applications had a limited and bounded number of stable long-lived concurrent pipelines in each instance. While multiple running artefacts were supported, in practice, tremor was deployed on systems with up to 4 logical cores."),(0,o.kt)("p",null,"This works exceptionally well with plain old threads. Starting with v0.9, Tremor is expanding to support an arbitrary number of running artefacts in a typical running instance, with a different logical core topology than production deployments to date."),(0,o.kt)("p",null,"Deploying a higher number of pipelines per instance changes our needs of the underlying concurrency mechanisms considerably. The plain old threads design will no longer scale to meet these changing requirements and the move to task-based scheduling with executors favours emerging workloads whilst incurring a negligible overhead to classic tremor workloads."),(0,o.kt)("h2",{id:"initial-results"},"Initial Results"),(0,o.kt)("p",null,"Ab initio, the switch has some practical implications, mainly an improvement in performance."),(0,o.kt)("p",null,"In Tremor v0.8.0, colocating pipelines required careful capacity planning and tuning by experienced operators. In tremor v0.9.0, this constraint has been lifted and the capacity planning burden drastically simplified. Improvements in ",(0,o.kt)("inlineCode",{parentName:"p"},"smol")," itself over the last few versions means that we have broken the 500MB/s throughput barrier for the first time with the new task-based runtime, which is quite a nice bonus."),(0,o.kt)("p",null,"Let's end with some pretty graphs. After all, a picture says more than a thousand words."),(0,o.kt)("p",null,"As a short explanation, this uses the json-throughput benchmark we have developed for Tremor running with deployments of one onramp, one pipeline, and one offramp to 64 onramps, 64 pipelines, and one offramp."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3 core performance",src:n(304).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"48 core performance",src:n(1801).Z})))}u.isMDXComponent=!0},304:function(e,t,n){"use strict";t.Z=n.p+"assets/images/async-3-cores-afcbd1a0052cfec4bd1e0810535a910c.png"},1801:function(e,t,n){"use strict";t.Z=n.p+"assets/images/async-48-cores-cb4557c688e68d35251683aba21454f8.png"}}]);
(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{187:function(e,t,n){},188:function(e,t,n){},206:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(1),o=n.n(r),s=n(56),i=n.n(s),c=(n(187),n(9)),l=n(13),u=n(11),h=n(10),d=(n(188),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1,showButton:"show details"},e.showDetails=function(){!0===e.state.show?e.setState({show:!1,showButton:"show details"}):e.setState({show:!0,showButton:"hide details"})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsx)("div",{className:"summary",children:Object(a.jsx)("h1",{children:e.summary})}),Object(a.jsxs)("div",{className:"eventInfo_collapsed",children:[Object(a.jsxs)("span",{className:"startDateTime",children:[e.start.dateTime," (",e.start.timeZone," Standard Time)"]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"location",children:["@",e.summary," | ",e.location]})]}),this.state.show&&Object(a.jsxs)("div",{className:"detailInfo",children:[Object(a.jsx)("h2",{children:"About event:"}),Object(a.jsx)("div",{className:"description",children:e.description}),Object(a.jsx)("a",{className:"eventLink",target:"_blank",rel:"noreferrer",href:e.htmlLink,children:"See details on Google Calender"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"showDetails",onClick:this.showDetails,children:this.state.showButton})})]})}}]),n}(r.Component)),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("ul",{className:"EventList",children:this.props.events.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(d,{event:e})},e.id)}))})}}]),n}(r.Component),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a.className=null,a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),className:this.className,children:this.props.text})})}}]),n}(r.Component),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a.className="info",a}return n}(m),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontWeight:"600"}},a.color="red",a.className="error",a}return n}(m),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontWeight:"600",fontSize:"180px"}},a.color="orange",a.className="warning",a}return n}(m),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={locations:e.props.locations,query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){e.setState({showSuggestions:!0});var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:"",warningText:""});e.setState({query:n,warningText:"",infoText:"We can not find the city you are looking for. Please try another city"}),(n.includes("fuck")||n.includes("shit"))&&e.setState({query:n,warningText:"What??!! \ud83e\udd2c\ud83e\udd2c\ud83e\udd2c",infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:"",warningText:""}),e.props.updateEvents(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)(p,{className:"info",text:this.state.infoText}),Object(a.jsx)(b,{className:"warning",text:this.state.warningText}),Object(a.jsx)("label",{children:"Name of city: "}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{label:"City name",type:"text",className:"citySearchInput",value:this.state.query,onChange:this.handleInputChanged}),Object(a.jsxs)("ul",{className:this.state.showSuggestions?"suggestions showSuggestions":"display-none",children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{className:"suggestionCity",onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})})]})]})]})}}]),n}(r.Component),j=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.submitNumber=function(t){var n=t.target.value;n>32||n<1||""===n?e.setState({infoText:"Please enter number between 1 ~ 32",warningText:"",numberOfEvents:n}):isNaN(n)?(e.setState({infoText:"Please enter number",numberOfEvents:n,warningText:""}),(n.includes("fuck")||n.includes("shit"))&&e.setState({numberOfEvents:n,warningText:"What??!! \ud83e\udd2c\ud83e\udd2c\ud83e\udd2c",infoText:""})):(e.props.updateEvents(null,n),e.setState({numberOfEvents:n,infoText:"",warningText:""}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"numberOfEvents",children:[Object(a.jsx)(v,{text:this.state.infoText}),Object(a.jsx)(b,{text:this.state.warningText}),Object(a.jsx)("label",{children:"Number of Events: "}),Object(a.jsx)("input",{type:"text",className:"numberInput",value:this.state.numberOfEvents,onChange:this.submitNumber})]})}}]),n}(r.Component),w=n(18),O=n.n(w),x=n(41),y=n(155),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],S=n(85),T=n.n(S),N=n(42),E=n.n(N);console.log("getEvents token: ");var C=function(e){var t=e.map((function(e){return e.location})),n=Object(y.a)(new Set(t));return console.log(n),n},Z=function(){var e=Object(x.a)(O.a.mark((function e(){var t,n,a,r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",{events:k,locations:C(k)});case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),E.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:C(JSON.parse(t).events)});case 8:return e.next=10,W();case 10:if(n=e.sent,console.log("getEvents token: ",n),!n){e.next=21;break}return A(),a="https://30bf329ybh.execute-api.us-west-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=17,T.a.get(a);case 17:return(r=e.sent).data&&(o=C(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),E.a.done(),e.abrupt("return",{events:r.data.events,locations:o});case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(x.a)(O.a.mark((function e(){var t,n,a,r,o,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,console.log("getaccesstoken"),t&&n){e.next=22;break}return e.next=11,localStorage.removeItem("access_token");case 11:return a=new URLSearchParams(window.location.search),e.next=14,a.get("code");case 14:if(r=e.sent){e.next=21;break}return e.next=18,T.a.get("https://30bf329ybh.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url");case 18:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 21:return e.abrupt("return",r&&D(r));case 22:return e.abrupt("return",t);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(x.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),n=encodeURIComponent(t),e.next=4,fetch("https://30bf329ybh.execute-api.us-west-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=(n(206),n(22)),B=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:32},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?Z().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,o);return e.setState({events:a,currentLocation:t,locations:n.locations})})):Z().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);return e.setState({events:a,numberOfEvents:n,locations:t.locations})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,Z().then((function(t){e.mounted&&e.setState({events:t.events,locations:t.locations})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(g,{updateEvents:this.updateEvents,locations:this.state.locations}),Object(a.jsx)(j,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(a.jsx)(q.b,{height:400,children:Object(a.jsxs)(q.d,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(a.jsx)(q.a,{}),Object(a.jsx)(q.f,{type:"category",dataKey:"city",name:"City"}),Object(a.jsx)(q.g,{type:"number",dataKey:"number",name:"Number of events",allowDecimals:!1}),Object(a.jsx)(q.e,{cursor:{strokeDasharray:"3 3"}}),Object(a.jsx)(q.c,{data:this.getData(),fill:"#8884d8"})]})}),Object(a.jsx)(f,{events:this.state.events})]})}}]),n}(r.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=n(154);i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/watspoppin",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/watspoppin","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):J(t,e)}))}}(),M.config("82e6a2eb55024e3b9d19bfc892ba2c18").install()}},[[386,1,2]]]);
//# sourceMappingURL=main.1301c5f8.chunk.js.map
(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),o=n(21),c=n.n(o),i=(n(29),n(2)),u=n(6),l=n(4),h=n(3),d=(n(30),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={show:!1,showButton:"show details"},e.showDetails=function(){!0===e.state.show?e.setState({show:!1,showButton:"show details"}):e.setState({show:!0,showButton:"hide details"})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsx)("div",{className:"summary",children:Object(a.jsx)("h1",{children:e.summary})}),Object(a.jsxs)("div",{className:"eventInfo_collapsed",children:[Object(a.jsxs)("span",{className:"startDateTime",children:[e.start.dateTime," (",e.start.timeZone," Standard Time)"]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"location",children:["@",e.summary," | ",e.location]})]}),this.state.show&&Object(a.jsxs)("div",{className:"detailInfo",children:[Object(a.jsx)("h2",{children:"About event:"}),Object(a.jsx)("div",{className:"description",children:e.description}),Object(a.jsx)("a",{className:"eventLink",target:"_blank",rel:"noreferrer",href:e.htmlLink,children:"See details on Google Calender"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"showDetails",onClick:this.showDetails,children:this.state.showButton})})]})}}]),n}(r.Component)),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("ul",{className:"EventList",children:this.props.events.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(d,{event:e})},e.id)}))})}}]),n}(r.Component),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(m),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontWeight:"600"}},a.color="red",a}return n}(m),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={locations:e.props.locations,query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){e.setState({showSuggestions:!0});var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)(p,{text:this.state.infoText}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{label:"City name",type:"text",className:"citySearchInput",value:this.state.query,onChange:this.handleInputChanged}),Object(a.jsxs)("ul",{className:this.state.showSuggestions?"suggestions showSuggestions":"display-none",children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{className:"suggestionCity",onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})})]})]})]})}}]),n}(r.Component),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.submitNumber=function(t){var n=t.target.value;n>32||n<0?e.setState({text:"Please enter number between 0 ~ 32",numberOfEvents:n}):isNaN(n)?e.setState({text:"Please enter number",numberOfEvents:n}):(e.props.updateEvents(null,n),e.setState({numberOfEvents:n,text:""}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"numberOfEvents",children:[Object(a.jsx)(b,{text:this.state.text}),Object(a.jsx)("label",{children:"Number of Events: "}),Object(a.jsx)("input",{type:"text",className:"numberInput",value:this.state.numberOfEvents,onChange:this.submitNumber})]})}}]),n}(r.Component),g=n(7),w=n.n(g),O=n(8),y=n(23),x=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],k=n(10),S=n.n(k),T=n(9),C=n.n(T),E=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},N=function(){var e=Object(O.a)(w.a.mark((function e(){var t,n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",{events:x,locations:E(x)});case 4:return e.next=6,Z();case 6:if(!(t=e.sent)){e.next=16;break}return B(),n="https://30bf329ybh.execute-api.us-west-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=12,S.a.get(n);case 12:return(a=e.sent).data&&(r=E(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),C.a.done(),e.abrupt("return",{events:a.data.events,locations:r});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(O.a)(w.a.mark((function e(){var t,n,a,r,s,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,S.a.get("https://30bf329ybh.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&q(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://30bf329ybh.execute-api.us-west-1.amazonaws.com/dev/api/token/".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(O.a)(w.a.mark((function e(t){var n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://30bf329ybh.execute-api.us-west-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=(n(48),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:32},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,s=a.numberOfEvents;t?N().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,s);return e.setState({events:a,currentLocation:t,locations:n.locations})})):N().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);return e.setState({events:a,numberOfEvents:n,locations:t.locations})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,N().then((function(t){e.mounted&&e.setState({events:t.events,locations:t.locations})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(a.jsx)(v,{updateEvents:this.updateEvents,locations:this.state.locations}),Object(a.jsx)(f,{events:this.state.events})]})}}]),n}(r.Component)),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))},M=n(22);c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root")),L(),M.config("82e6a2eb55024e3b9d19bfc892ba2c18").install()}},[[50,1,2]]]);
//# sourceMappingURL=main.20976c67.chunk.js.map
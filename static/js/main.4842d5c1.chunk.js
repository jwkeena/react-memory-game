(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(2),i=a.n(c),s=(a(13),a(3)),l=a(4),r=a(6),g=a(5),d=a(7),m={fontWeight:"bold"};var p=function(e){return n.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg bg-warning",style:m},n.a.createElement("a",{className:"navbar-brand",href:"#!"},"MEMORY GAME"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse mr-auto"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"#!",onClick:e.resetGameState},"RESET")),n.a.createElement("li",null,n.a.createElement("a",{className:"nav-link",href:"#!","data-toggle":"popover",title:"How to play","data-content":"Click any logo to begin. Each logo may only be clicked once. Each unique click earns a point. Go for a high score!","data-placement":"bottom"},"RULES"))),n.a.createElement("div",{className:"navbar-text ml-auto text-secondary"},"SCORE: ",n.a.createElement("span",{id:"score"},e.score)," | HI SCORE: ",n.a.createElement("span",{id:"top-score"},e.topScore))))};a(14);var u=function(){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4"},"\xa0"),n.a.createElement("p",{className:"lead"},"\xa0")))};a(15);var h=function(e){return n.a.createElement("img",{className:"logo",alt:"logo",src:e.src,onClick:e.clickHandler})},k=(a(16),function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={score:0,topScore:0,logoLinks:[{id:1,src:"https://jwkeena.github.io/images/logo-html.png",clicked:!1},{id:2,src:"https://jwkeena.github.io/images/logo-postman.png",clicked:!1},{id:3,src:"https://jwkeena.github.io/images/logo-firebase.png",clicked:!1},{id:4,src:"https://jwkeena.github.io/images/logo-materialize.png",clicked:!1},{id:5,src:"https://jwkeena.github.io/images/logo-js.png",clicked:!1},{id:6,src:"https://jwkeena.github.io/images/logo-mongodb.png",clicked:!1},{id:7,src:"https://jwkeena.github.io/images/logo-node.png",clicked:!1},{id:8,src:"https://jwkeena.github.io/images/logo-css.png",clicked:!1},{id:9,src:"https://jwkeena.github.io/images/logo-sequelize.png",clicked:!1},{id:10,src:"https://jwkeena.github.io/images/logo-jquery.png",clicked:!1},{id:11,src:"https://jwkeena.github.io/images/logo-react.png",clicked:!1},{id:12,src:"https://jwkeena.github.io/images/logo-bootstrap.png",clicked:!1},{id:13,src:"https://jwkeena.github.io/images/logo-bash.png",clicked:!1},{id:14,src:"https://jwkeena.github.io/images/logo-mysql.png",clicked:!1},{id:15,src:"https://jwkeena.github.io/images/logo-xml.png",clicked:!1}]},a.resetGameState=function(){console.log("clicked"),a.setState({score:0,topScore:0})},a.shuffle=function(){for(var e,t,o=a.state.logoLinks,n=o.length;--n>0;)t=o[e=Math.floor(Math.random()*(n+1))],o[e]=o[n],o[n]=t;a.setState({logoLinks:o})},a.lose=function(){for(var e=a.state.logoLinks,t=0;t<15;t++)!0===e[t].clicked&&(e[t].clicked=!e[t].clicked);a.setState({score:0,logoLinks:e})},a.updateTopScore=function(){a.state.score>=a.state.topScore&&a.setState({topScore:a.state.score})},a.clickHandler=function(e){var t=a.state.logoLinks;!0===t[e].clicked?(a.lose(),console.log("this logo has been clicked already!")):(t[e].clicked=!t[e].clicked,a.setState({logoLinks:t,score:a.state.score+1},function(){a.updateTopScore()})),a.shuffle()},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(p,{resetGameState:this.resetGameState,score:this.state.score,topScore:this.state.topScore}),n.a.createElement(u,null),n.a.createElement("div",{className:"container"},this.state.logoLinks.map(function(t,a){return n.a.createElement(h,{src:t.src,key:t.id,shuffle:e.shuffle,logoLinks:e.state.logoLinks,clickHandler:function(){return e.clickHandler(a)}})})))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.4842d5c1.chunk.js.map
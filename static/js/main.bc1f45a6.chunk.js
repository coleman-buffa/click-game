(this["webpackJsonpclick-game"]=this["webpackJsonpclick-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Quartz","image":"/assets/quartz.jpg"},{"id":2,"name":"Calcite","image":"/assets/calcite.jpg"},{"id":3,"name":"Pyrite","image":"/assets/pyrite.jpg"},{"id":4,"name":"Cinnebar","image":"/assets/cinnebar.jpg"},{"id":5,"name":"Azurite","image":"/assets/azurite.jpg"},{"id":6,"name":"Beryl","image":"/assets/beryl.jpg"},{"id":7,"name":"Labradorite","image":"/assets/labradorite.jpg"},{"id":8,"name":"Corundum","image":"/assets/corundum.jpg"},{"id":9,"name":"Halite","image":"/assets/halite.jpg"},{"id":10,"name":"Lawsonite","image":"/assets/lawsonite.jpg"},{"id":11,"name":"Magnetite","image":"/assets/magnetite.jpg"},{"id":12,"name":"Rutile","image":"/assets/rutile.jpg"},{"id":13,"name":"Albite","image":"/assets/albite.jpg"},{"id":14,"name":"Mica","image":"/assets/mica.jpg"},{"id":15,"name":"Rutile","image":"/assets/garnet.jpg"}]')},,,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(1),n=t(3),r=t.n(n),i=t(4),c=t(5),m=t(8),l=t(7),o=(t(13),t(0));var d=function(e){return Object(o.jsx)("div",{className:"wrapper",children:e.children})};t(15);var u=function(e){return Object(o.jsx)("nav",{className:"navbar sticky-top",children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"brand",children:Object(o.jsx)("a",{href:"/",children:"Mineral Mania"})}),Object(o.jsx)("li",{className:"nav-item nav-bar-li",children:e.answerResult}),Object(o.jsxs)("li",{className:"nav-item nav-bar-li",children:["Score: ",e.currentScore," | Top Score: ",e.maxScore]})]})})})};t(16);var j=function(){return Object(o.jsxs)("div",{className:"jumbotron mb-0 mt-5 bg-secondary text-light",children:[Object(o.jsx)("h1",{className:"text-center",children:"Clicking Memory Game"}),Object(o.jsx)("h3",{className:"text-center",children:"Click on a mineral, but don't click on any more than once!"})]})};t(17);var b=function(e){return Object(o.jsx)("div",{className:"card animate__animated ".concat(e.animate),onClick:function(){return e.selectCard(e.id)},children:Object(o.jsx)("img",{alt:e.name,src:e.image})})};t(18);var g=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("div",{className:"bottom",children:"Clicky Game!"})})},h=t(6),f=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={minerals:h,selectedCards:[],currentScore:0,maxScore:0,answerResult:"Click an image to begin",animate:""},e.shuffleCards=function(){var a=e.state.minerals.sort((function(){return Math.random()-.5}));e.setState({minerals:a})},e.selectCard=function(a){e.state.selectedCards.indexOf(a)>-1?e.setState({currentScore:0,selectedCards:[],animate:"animate__shakeX",answerResult:"You lost"}):(e.setState({animate:"",currentScore:e.state.currentScore+1,answerResult:"Correct"}),e.state.selectedCards.push(a),e.state.currentScore>=e.state.maxScore&&e.setState({maxScore:e.state.currentScore+1})),e.shuffleCards()},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.shuffleCards()}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{answerResult:this.state.answerResult,currentScore:this.state.currentScore,maxScore:this.state.maxScore}),Object(o.jsx)(j,{}),Object(o.jsx)(d,{children:this.state.minerals.map((function(a){return Object(o.jsx)(b,{selectCard:e.selectCard,id:a.id,name:a.name,image:a.image,animate:e.state.animate},a.id)}))}),Object(o.jsx)(g,{})]})}}]),t}(s.Component);r.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.bc1f45a6.chunk.js.map
(this.webpackJsonpflags_cnn=this.webpackJsonpflags_cnn||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){t.exports=n(34)},,,,,function(t,e,n){},,function(t,e,n){},,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),i=n(9),s=n.n(i),c=(n(20),n(6)),l=n.n(c),r=n(10),h=n(11),u=n(12),d=n(14),f=n(13),v=(n(22),n(35)),m=["australia","canada","china","cuba","japan","malaysia","monaco","peru","poland","singapore","usa","vietnam"],g=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(h.a)(this,n),(t=e.call(this)).pickColor=function(e){var n=t.ctx2.getImageData(e.offsetX,e.offsetY,1,1).data;t.x="rgba(".concat(n[0],",").concat(n[1],",").concat(n[2],",255)")},t.handleClick=function(e){if(2==e.button&&(t.old=t.x,t.x="rgba(255,255,255,255)"),e.shiftKey&&2!=e.button){var n=t.ctx.getImageData(e.offsetX,e.offsetY,1,1).data;t.x="rgba(".concat(n[0],",").concat(n[1],",").concat(n[2],",255)")}else t.bool=!0},t.handleRelease=function(e){2==e.button&&(t.x=t.old),t.bool=!1;if(null!=t.model){var n=new Image(t.canvas.toDataURL("image/png"));t.ctx.drawImage(n,0,0);var a=t.ctx.getImageData(0,0,t.w,t.h);n=(n=v.browser.fromPixels(a).resizeBilinear([23,13])).reshape([1,13,23,3]);var o=t.model.predict(n).dataSync().reduce((function(t,e,n,a){return e>a[t]?n:t}),0);console.log(m[o]),t.setState({guess:m[o]})}},t.draw=function(e){t.bool&&(t.ctx.fillStyle=t.x,t.ctx.fillRect(Math.floor(e.offsetX/t.boxSize)*t.boxSize,Math.floor(e.offsetY/t.boxSize)*t.boxSize,t.boxSize,t.boxSize))},t.state={guess:"Start drawing a flag and I'll try to guess it!"},t}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){}},{key:"componentDidMount",value:function(){this.load_model(),this.old="",this.bool=!1,this.canvas=!1,this.ctx=!1,this.flag=!1,this.prevX=0,this.currX=0,this.prevY=0,this.currY=0,this.dot_flag=!1,this.boxSize=40,this.x="white",this.y=2,this.model=null,this.weights=null,this.canvas=document.getElementById("can"),this.ctx=this.canvas.getContext("2d"),this.canvas2=document.getElementById("can2"),this.ctx2=this.canvas2.getContext("2d"),this.w=this.canvas.width,this.h=this.canvas.height,this.ctx.fillStyle="rgba(255,255,255,255)",this.ctx.fillRect(0,0,this.w,this.h),this.ctx2.fillStyle="rgba(255,255,255,255)",this.ctx2.fillRect(0,0,this.w,this.h),this.canvas.addEventListener("mousedown",this.handleClick),this.canvas.addEventListener("mouseup",this.handleRelease),this.canvas.addEventListener("mousemove",this.draw),this.canvas.addEventListener("mouseout",this.handleRelease),this.canvas2.addEventListener("mouseup",this.pickColor),this.canvas2.addEventListener("mousedown",this.pickColor);for(var t=this.canvas2.width/2,e=this.canvas2.height/2,n=0;n<=360;n+=1){var a=(n-2)*Math.PI/180,o=n*Math.PI/180;this.ctx2.beginPath(),this.ctx2.moveTo(t,e),this.ctx2.arc(t,e,32,a,o,!1),this.ctx2.closePath(),this.ctx2.fillStyle="hsl("+n+", 100%, 50%)",this.ctx2.fill()}}},{key:"load_model",value:function(){var t=Object(r.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/flag_cnn/resources/model/model.json",t.next=3,v.loadLayersModel("/flag_cnn/resources/model/model.json");case 3:this.model=t.sent;case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"App",onLoad:this.load},o.a.createElement("canvas",{id:"can",width:"920",height:"520",onContextMenu:function(t){return t.preventDefault()},style:{position:"absolute",top:"8%",left:"10%",border:"2px solid"}}),o.a.createElement("div",null,this.state.guess),o.a.createElement("canvas",{id:"can2",width:"64",height:"64",onContextMenu:function(t){return t.preventDefault()},style:{position:"absolute",top:"8%",left:"90%",border:"2px solid"}}),o.a.createElement("div",{style:{position:"absolute",top:"15%",left:"83%"}},"Choose Color, Right click to erase.",o.a.createElement("p",null,"Shift-click on a color on the canvas to color pick it, or just click on the color wheel!")))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.20f27620.chunk.js.map
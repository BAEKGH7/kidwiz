(function(){"use strict";var t={6248:function(t,e,n){var l=n(3751),o=n(641);function r(t,e,n,l,r,u){const a=(0,o.g2)("MenuPage"),i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(a),(0,o.bF)(i)],64)}const u={class:"nav"};function a(t,e,n,l,r,a){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("header",null,[(0,o.Lk)("nav",u,[(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/testVue"},{default:(0,o.k6)((()=>[(0,o.eW)("테스트뷰")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/listTest"},{default:(0,o.k6)((()=>[(0,o.eW)("DB테스트")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/BoardList"},{default:(0,o.k6)((()=>[(0,o.eW)("박선우")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/insertTest"},{default:(0,o.k6)((()=>[(0,o.eW)("insert 테스트")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/regRev"},{default:(0,o.k6)((()=>[(0,o.eW)("박시호")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/GroupList"},{default:(0,o.k6)((()=>[(0,o.eW)("박선우 집단")])),_:1})])])])}var i={name:"MenuPage"},s=n(6262);const d=(0,s.A)(i,[["render",a]]);var p=d,c={name:"App",components:{MenuPage:p}};const b=(0,s.A)(c,[["render",r]]);var h=b,m=n(5220);const f=(0,o.Lk)("h1",null,"테스트에요!",-1),k=(0,o.Lk)("h1",null,"테스트에요!",-1),v=(0,o.Lk)("h1",null,"테스트에요!",-1),L=[f,k,v];function y(t,e,n,l,r,u){return(0,o.uX)(),(0,o.CE)("div",null,L)}var g={name:"TestVue"};const B=(0,s.A)(g,[["render",y]]);var w=B,_=n(33);const C=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"번호"),(0,o.Lk)("th",null,"제목")])],-1);function W(t,e,n,l,r,u){return(0,o.uX)(),(0,o.CE)("table",null,[C,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.list,(t=>((0,o.uX)(),(0,o.CE)("tr",{key:t.no},[(0,o.Lk)("td",null,(0,_.v_)(t.no),1),(0,o.Lk)("td",null,(0,_.v_)(t.name),1)])))),128))])])}var A=n(1250),q={name:"listTest",data(){return{list:[]}},mounted(){A.A.get("http://localhost:3000/test").then((t=>{this.list=t.data.list})).catch((t=>{alert("문제 발생"+t)}))}};const D=(0,s.A)(q,[["render",W]]);var E=D;function T(t,e,n,r,u,a){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.eW)(" 제목 : "),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>u.title=t)},null,512),[[l.Jo,u.title]]),(0,o.eW)(" 내용 : "),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>u.content=t)},null,512),[[l.Jo,u.content]]),(0,o.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>a.write&&a.write(...t))},"글쓰기")])}n(4114);var j={name:"BoardWrite",data(){return{title:null,content:null}},methods:{write(){let t={};t.title=this.title,t.content=this.content,t.writer="tjsdn112",A.A.post("/api/boardWrite",JSON.stringify(t),{headers:{"Content-Type":"application/json"}}).then((t=>{1==t.data?this.$router.push({path:"./boardList"}):alert("입력 실패")})).catch((t=>{alert("에러 발생 : "+t)}))}}};const U=(0,s.A)(j,[["render",T]]);var O=U;const V=(0,o.Lk)("h1",null,"test now",-1),x=(0,o.Lk)("label",null,"이름",-1),F=(0,o.Lk)("label",null,"나이",-1),J=(0,o.Lk)("br",null,null,-1),$=(0,o.Lk)("label",null,"학번",-1),P=(0,o.Lk)("label",null,"전공",-1),X=(0,o.Lk)("br",null,null,-1),R=(0,o.Lk)("label",null,"교수",-1),N=(0,o.Lk)("br",null,null,-1),S=(0,o.Lk)("br",null,null,-1),M=(0,o.Lk)("button",null,"submit",-1);function z(t,e,n,r,u,a){return(0,o.uX)(),(0,o.CE)("div",null,[V,(0,o.Lk)("form",{onSubmit:e[5]||(e[5]=(0,l.D$)(((...t)=>a.postTest&&a.postTest(...t)),["prevent"])),id:"test"},[x,(0,o.bo)((0,o.Lk)("input",{type:"text",name:"name","onUpdate:modelValue":e[0]||(e[0]=t=>u.test.name=t)},null,512),[[l.Jo,u.test.name]]),F,(0,o.bo)((0,o.Lk)("input",{type:"text",name:"age","onUpdate:modelValue":e[1]||(e[1]=t=>u.test.age=t)},null,512),[[l.Jo,u.test.age]]),J,$,(0,o.bo)((0,o.Lk)("input",{type:"text",name:"stuNum","onUpdate:modelValue":e[2]||(e[2]=t=>u.test.stuNum=t)},null,512),[[l.Jo,u.test.stuNum]]),P,(0,o.bo)((0,o.Lk)("input",{type:"text",name:"major","onUpdate:modelValue":e[3]||(e[3]=t=>u.test.major=t)},null,512),[[l.Jo,u.test.major]]),X,R,(0,o.bo)((0,o.Lk)("input",{type:"text",name:"tName","onUpdate:modelValue":e[4]||(e[4]=t=>u.test.teacher=t)},null,512),[[l.Jo,u.test.teacher]]),N,S,M],32)])}var G={data(){return{test:{name:"",age:"",major:"",teacher:"",stuNum:""}}},methods:{postTest(){console.log("실행"),console.log(this.test),A.A.post("http://localhost:3000/testPost",this.test).then((t=>{console.log(t)}))}}};const K=(0,s.A)(G,[["render",z]]);var I=K;const H=(0,o.Lk)("br",null,null,-1),Q=(0,o.Lk)("br",null,null,-1),Y=(0,o.Lk)("br",null,null,-1),Z=(0,o.Lk)("br",null,null,-1),tt=(0,o.Lk)("br",null,null,-1),et=(0,o.Lk)("br",null,null,-1);function nt(t,e,n,l,r,u){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("div",null,[(0,o.eW)(" 제목 : "+(0,_.v_)(r.detail.btitle)+" ",1),(0,o.Lk)("button",{onClick:e[0]||(e[0]=t=>u.del(r.requestBody.bno))},"삭제"),(0,o.Lk)("button",{onClick:e[1]||(e[1]=t=>u.update())},"수정"),H,(0,o.eW)(" 글쓴이 : "+(0,_.v_)(r.detail.writer),1)]),(0,o.Lk)("div",null,[(0,o.eW)(" 내용 : "+(0,_.v_)(r.detail.bcontent),1),Q,(0,o.eW)(" 기본키 :"+(0,_.v_)(r.detail.bno),1),Y,(0,o.eW)(" 상위 :"+(0,_.v_)(r.detail.up_bno),1),Z,(0,o.eW)(" 뎁스 :"+(0,_.v_)(r.detail.depth),1),tt,(0,o.eW)(" 순서 : "+(0,_.v_)(r.detail.ordernum),1),et]),(0,o.Lk)("button",{onClick:e[2]||(e[2]=t=>u.reply())},"답변글")])}var lt={name:"BoardDetail",data(){return{requestBody:this.$route.query,detail:{bno:null,btitle:null,bcontent:null,writer:null,bdate:null,up_bno:null,depth:null,ordernum:null}}},mounted(){this.boardDetail()},methods:{boardDetail(){A.A.get("/api/boardDetail?bno="+this.requestBody.bno).then((t=>{this.detail=t.data.list})).catch((t=>{alert("에러 발생 : "+t)}))},del(t){confirm("삭제하시겠습니까 ?")&&(0,A.A)({url:"/api/boardDel",method:"post",params:{bno:t}}).then((t=>{1==t.data.result?this.$router.push({path:"./BoardList",query:this.requestBody}):alert("입력실패")})).catch((t=>{alert("에러 발생 : "+t)}))},update(){this.$router.push({path:"./BoardUpdate",query:this.requestBody})},reply(){this.$router.push({path:"./BoardReply",query:this.requestBody})}}};const ot=(0,s.A)(lt,[["render",nt]]);var rt=ot;const ut=(0,o.Lk)("br",null,null,-1),at=(0,o.Lk)("br",null,null,-1),it=(0,o.Lk)("br",null,null,-1);function st(t,e,n,r,u,a){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.eW)(" 제목:"),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>u.upDate.btitle=t)},null,512),[[l.Jo,u.upDate.btitle]]),ut,(0,o.eW)(" 글쓴이:"+(0,_.v_)(u.upDate.writer),1),at,(0,o.eW)(" 내용:"),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>u.upDate.bcontent=t)},null,512),[[l.Jo,u.upDate.bcontent]]),it,(0,o.Lk)("button",{onClick:e[2]||(e[2]=t=>a.update())},"수정하기"),(0,o.Lk)("button",{onClick:e[3]||(e[3]=e=>t.recomment())},"덧글쓰기")])}var dt={name:"BoardUpdate",data(){return{requestBody:this.$route.query,upDate:{bno:this.$route.query.bno,title:null,content:null,writer:null}}},mounted(){this.boardDetail()},methods:{boardDetail(){A.A.get("/api/boardDetail?bno="+this.requestBody.bno).then((t=>{this.upDate=t.data.list})).catch((t=>{alert("에러 발생 : "+t)}))},update(){confirm("수정하시겠습니까?")&&A.A.post("/api/boardUpdate",this.upDate).then((t=>{1==t.data.result?this.$router.push({path:"./boardDetail",query:this.requestBody}):alert("에러")})).catch((t=>{alert(t)}))}}};const pt=(0,s.A)(dt,[["render",st]]);var ct=pt;const bt=(0,o.Lk)("br",null,null,-1),ht=(0,o.Lk)("br",null,null,-1),mt=(0,o.Lk)("br",null,null,-1);function ft(t,e,n,r,u,a){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.eW)(" 제목 : "),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>u.reply.btitle=t)},null,512),[[l.Jo,u.reply.btitle]]),bt,(0,o.eW)(" 글쓴이 : "+(0,_.v_)(u.reply.writer),1),ht,(0,o.eW)(" 내용 : "),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>u.reply.bcontent=t)},null,512),[[l.Jo,u.reply.bcontent]]),mt,(0,o.Lk)("button",{onClick:e[2]||(e[2]=t=>a.boardReply())},"답글 달기")])}var kt={name:"BoardReply",data(){return{requestBody:this.$route.query,reply:{bno:this.$route.query.bno,btitle:null,bcontent:null,writer:"상담자",up_bno:null,depth:null,ordernum:null}}},mounted(){A.A.get("/api/getPath?bno="+this.requestBody.bno).then((t=>{null!=t?(this.reply.up_bno=t.data.list.up_bno,this.reply.depth=t.data.list.depth,this.reply.ordernum=t.data.list.ordernum):alert("에러입니다.")})).catch((t=>{alert(t)}))},methods:{boardReply(){A.A.post("/api/boardReply",this.reply).then((t=>{1==t.data.result&&this.$router.push({path:"/boardList"})})).catch((t=>{alert(t)}))}}};const vt=(0,s.A)(kt,[["render",ft]]);var Lt=vt;const yt=[{path:"/testVue",name:"testVue",component:w},{path:"/listTest",name:"listTest",component:E},{path:"/BoardList",name:"BoardList",component:()=>n.e(848).then(n.bind(n,9848))},{path:"/BoardWrite",name:"BoardWrite",component:O},{path:"/insertTest",name:"insertTest",component:I},{path:"/boardDetail",name:"boardDetail",component:rt},{path:"/boardUpdate",name:"boardUpdate",component:ct},{path:"/BoardReply",name:"BoardReply",component:Lt},{path:"/regRev",name:"regRev",component:()=>n.e(208).then(n.bind(n,8208))},{path:"/GroupList",name:"groupList",component:()=>n.e(748).then(n.bind(n,8748))}],gt=(0,m.aE)({history:(0,m.Bt)("/"),routes:yt});var Bt=gt,wt=n(5957);const _t=(0,l.Ef)(h);_t.use(wt.Ay),_t.use(Bt).mount("#app")}},e={};function n(l){var o=e[l];if(void 0!==o)return o.exports;var r=e[l]={exports:{}};return t[l].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,l,o,r){if(!l){var u=1/0;for(d=0;d<t.length;d++){l=t[d][0],o=t[d][1],r=t[d][2];for(var a=!0,i=0;i<l.length;i++)(!1&r||u>=r)&&Object.keys(n.O).every((function(t){return n.O[t](l[i])}))?l.splice(i--,1):(a=!1,r<u&&(u=r));if(a){t.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[l,o,r]}}(),function(){n.d=function(t,e){for(var l in e)n.o(e,l)&&!n.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,l){return n.f[l](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{208:"efa53cc7",748:"f13c45c5",848:"ba42a28e"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue_wizian:";n.l=function(l,o,r,u){if(t[l])t[l].push(o);else{var a,i;if(void 0!==r)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var p=s[d];if(p.getAttribute("src")==l||p.getAttribute("data-webpack")==e+r){a=p;break}}a||(i=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+r),a.src=l),t[l]=[o];var c=function(e,n){a.onerror=a.onload=null,clearTimeout(b);var o=t[l];if(delete t[l],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},b=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),i&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={524:0};n.f.j=function(e,l){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)l.push(o[2]);else{var r=new Promise((function(n,l){o=t[e]=[n,l]}));l.push(o[2]=r);var u=n.p+n.u(e),a=new Error,i=function(l){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var r=l&&("load"===l.type?"missing":l.type),u=l&&l.target&&l.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",a.name="ChunkLoadError",a.type=r,a.request=u,o[1](a)}};n.l(u,i,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,l){var o,r,u=l[0],a=l[1],i=l[2],s=0;if(u.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(i)var d=i(n)}for(e&&e(l);s<u.length;s++)r=u[s],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(d)},l=self["webpackChunkvue_wizian"]=self["webpackChunkvue_wizian"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=n.O(void 0,[504],(function(){return n(6248)}));l=n.O(l)})();
//# sourceMappingURL=app.083d8e98.js.map
(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{40:function(e,t,a){e.exports=a(96)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),l=a.n(s),c=(a(45),a(46),a(21)),o=a(2),i=a(8),u=a(9),m=a(14),h=a(11),d=a(10),p=(a(47),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleUsernameChange=function(e){n.setState({username:e.target.value})},n.state={username:"",nameError:"",nameError2:""},n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(e,t){e.preventDefault(),this.setState({nameError:"",nameError2:""}),this.state.username.length>2&&/^[A-Z]/.test(this.state.username)?(localStorage.setItem("userName",this.state.username),this.props.history.push("/cards")):/^[A-Z]/.test(this.state.username)||this.setState({nameError:"!!! First letter should be UPPERCASE !!!"}),this.state.username.length<=2&&this.setState({nameError2:"!!! Min 3 characters !!!"})}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{style:{color:"red",fontSize:20}},this.state.nameError),r.a.createElement("div",{style:{color:"red",fontSize:20}},this.state.nameError2),r.a.createElement("div",null,r.a.createElement("label",{className:"user-name"},"Username:"),r.a.createElement("input",{className:"todo-input",type:"text",placeholder:"username",value:this.state.username,onChange:this.handleUsernameChange})),r.a.createElement("button",{type:"submit"},"Submit"))}}]),a}(n.Component)),v=Object(o.f)(p),f=a(15),g=a.n(f),E=(a(70),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"convertToString",value:function(e){return e.join(", ")}},{key:"getImgUrl",value:function(e){return e||"https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=126210&type=card"}},{key:"render",value:function(){var e=this.props.card;return r.a.createElement("div",{className:"card-preview width80 mobile-section ",key:e.id},r.a.createElement("img",{className:"image",src:this.getImgUrl(e.imageUrl)}),r.a.createElement("div",{className:"card-text width80text"},r.a.createElement("div",{className:"name"},"Name: ",e.name),r.a.createElement("div",{className:"set-name"},r.a.createElement("b",null,"Set Name:")," ",e.setName),r.a.createElement("div",{className:"type"},r.a.createElement("b",null,"Type:")," ",this.convertToString(e.types)),r.a.createElement("div",{className:"color"},r.a.createElement("b",null,"Colors:")," ",this.convertToString(e.colors)),r.a.createElement("div",{className:"color"},r.a.createElement("b",null,"Text:")," ",e.text)))}}]),a}(n.Component)),b=(a(71),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cards,a=e.errorMsg;return r.a.createElement("div",{className:"list-cards"},t.length?t.map((function(e){return r.a.createElement(E,{key:e.id,card:e})})):null,a?r.a.createElement("div",null,a):null)}}]),a}(n.Component)),y=a(39),C=a(17),S=(a(72),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){n.setState({search:e.target.value})},n.onFilter=function(){var e={search:n.state.search,colors:n.state.selectedColors,types:n.state.selectedTypes,sortBy:n.state.selectedSort};n.props.onFilter(e)},n.handleColorChange=function(e){n.setState({selectedColors:e})},n.handleTypeChange=function(e){n.setState({selectedTypes:e})},n.handleSortByChange=function(e){n.setState({selectedSort:e})},n.state={colorsOptions:[{value:"white",label:"White"},{value:"blue",label:"Blue"},{value:"black",label:"Black"},{value:"red",label:"Red"},{value:"green",label:"Green"}],search:"",selectedColors:[],typesOptions:[],selectedTypes:[],sortByOptions:[{value:"asc",label:"Ascending"},{value:"desc",label:"Descending"}],selectedSort:"asc"},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.magicthegathering.io/v1/types").then((function(t){var a=t.data.types.reduce((function(e,t){return[].concat(Object(y.a)(e),[{value:t,label:t}])}),[]);e.setState({typesOptions:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"cards-filter"},r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Search by name or text",value:this.state.search,onChange:this.handleInputChange})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"colors"},r.a.createElement(C.a,{closeMenuOnSelect:!1,placeholder:"COLORS",isMulti:!0,options:this.state.colorsOptions,onChange:this.handleColorChange})),r.a.createElement("div",{className:"types"},r.a.createElement(C.a,{closeMenuOnSelect:!1,placeholder:"TYPES",isMulti:!0,options:this.state.typesOptions,onChange:this.handleTypeChange})),r.a.createElement("div",{className:"sort-by"},r.a.createElement(C.a,{closeMenuOnSelect:!0,placeholder:"order",options:this.state.sortByOptions,onChange:this.handleSortByChange}))),r.a.createElement("div",null,r.a.createElement("button",{value:"Filter",onClick:this.onFilter},"FILTER")))}}]),a}(n.Component)),O=(a(73),a(16)),j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={cards:null,filteredCards:null,errorMsg:null,userName:localStorage.getItem("userName")},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(O.trackPromise)(g.a.get("https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English").then((function(t){e.setState({cards:t.data.cards,filteredCards:t.data.cards})})).catch((function(t){console.log(t),e.setState({errorMsg:"Error retreiving data"})})))}},{key:"filterCards",value:function(e){console.log("Tes",e);var t=this.state.cards.filter((function(t){var a=null;e.colors&&e.colors.length?e.colors.forEach((function(e){t.colors.includes(e.label)&&(a=t)})):a=t;var n=null;e.types&&e.types.length?e.types.forEach((function(e){t.types.includes(e.label)&&(n=t)})):n=t;var r=null;if(""!==e.search){var s=e.search.toLowerCase(),l=t.name.toLowerCase(),c=t.text?t.text.toLowerCase():"";(l.includes(s)||c.includes(s))&&(r=t)}else r=t;if(a&&n&&r)return a}));t.sort(this.compareValues("name",e.sortBy.value)),this.setState({filteredCards:t})}},{key:"compareValues",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(a,n){if(!a.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var r="string"===typeof a[e]?a[e].toUpperCase():a[e],s="string"===typeof n[e]?n[e].toUpperCase():n[e],l=0;return r>s?l=1:r<s&&(l=-1),"desc"===t?-1*l:l}}},{key:"render",value:function(){var e=this,t=this.state.errorMsg,a=this.state.filteredCards;return r.a.createElement("div",{className:"cards-page"},r.a.createElement("div",{className:"welcome-message"},r.a.createElement("h1",null,"Hello, ",this.state.userName)),r.a.createElement(S,{onFilter:function(t){return e.filterCards(t)}}),(a||t)&&r.a.createElement(b,{cards:a,errorMsg:t}))}}]),a}(n.Component);var N=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/cards"},r.a.createElement(j,null)),r.a.createElement(o.a,{path:"/"},r.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(38),w=a.n(k),T=function(e){return Object(O.usePromiseTracker)().promiseInProgress&&r.a.createElement("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(w.a,{type:"ThreeDots",color:"#2BAD60",height:"100",width:"100"}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null),r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.ba49a6a7.chunk.js.map
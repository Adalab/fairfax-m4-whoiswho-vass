(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(38)},28:function(e,a,t){},29:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),n=t(20),r=t.n(n),c=(t(28),t(14)),i=t(6),o=t(7),m=t(9),u=t(8),h=t(2),d=t(10),p=(t(29),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.handleInputEmail,t=e.handleInputPassword,s=e.onSubmit,n=e.handleEyePassword,r=e.eyePassword,c=e.isErrorVisible;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"login__header"},l.a.createElement("a",{className:"login__title",href:"https://www.vass.es/"},l.a.createElement("h1",{className:"login__title"},"VASS"))),l.a.createElement("form",{className:"login__container",onSubmit:s},l.a.createElement("div",{className:"inputs__container"},l.a.createElement("label",{htmlFor:"input__user",className:"label__item label__user"},"Usuario"),l.a.createElement("input",{type:"text",id:"input__user",className:"input__item input__user ".concat(!0===c?"red":""),onChange:a}),l.a.createElement("label",{htmlFor:"input__password",className:"label__item label__password"},"Contrase\xf1a"),l.a.createElement("div",{className:"password__container"},l.a.createElement("input",{type:r,id:"input__password",className:"input__item input__password ".concat(!0===c?"red":""),onChange:t}),l.a.createElement("i",{className:"eye fas fa-eye".concat("password"===r?"":"-slash"),onClick:n})),c?l.a.createElement("p",{className:"error__message"}," ",l.a.createElement("i",{className:"fas fa-exclamation-circle"})," El nombre de usuario o la contrase\xf1a son incorrectos."):null,l.a.createElement("input",{type:"submit",value:"Entrar",className:"input__submit".concat(c?"-pad":"")}))),l.a.createElement("div",{className:"who__container"},l.a.createElement("h2",{className:"who__title"},l.a.createElement("span",{className:"who__span"},"Who")," ",l.a.createElement("span",{className:"is__span"},"is")," ",l.a.createElement("span",{className:"who__span"},"Who"))),l.a.createElement("footer",{className:"login__footer"},"VASS - Copyright \xa9 2019 Todos los derechos reservados"))}}]),a}(l.a.Component)),_=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.detailArr;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"employee__detail"},l.a.createElement("div",{className:"city"},l.a.createElement("p",{className:"employee__detail--company"},"Empresa:"," ",l.a.createElement("span",{className:"employee__detail--company-span employee__detail-marg"},e.company)),l.a.createElement("p",{className:"employee__detail--region"},"Regi\xf3n:"," ",l.a.createElement("span",{className:"employee__detail--region-span employee__detail-marg"},e.physicalDeliveryOfficeName))),l.a.createElement("div",{className:"contact"},l.a.createElement("p",{className:"employee__detail--email"},"Email:"," ",l.a.createElement("a",{className:"employee__detail--email-link",href:"mailto:".concat(e.mail)},e.mail)),l.a.createElement("p",{className:"employee__detail--phone"},"Tlf:"," ",l.a.createElement("a",{className:"employee__detail--phone-link",href:"tel:".concat(e.telephoneNumber)},e.telephoneNumber)))))}}]),a}(l.a.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.user,t=e.filterName,s=e.nameArr,n=e.handleFilter,r=e.collapsibleId,c=e.handleCollapsible,i=e.detailArr,o=e.isErrorVisibleSearch,m=e.handleLogout;return""===t?l.a.createElement("div",{className:"main__container"},l.a.createElement("header",{className:"list__header"},l.a.createElement("h1",{className:"list__tittle"},"VASS"),l.a.createElement("div",{className:"container__all"},l.a.createElement("div",{className:"user__container"},l.a.createElement("i",{className:"far fa-user"}),l.a.createElement("p",{className:"user__text"},"Hola, ".concat(a.email))),l.a.createElement("div",{className:"logout__container"},l.a.createElement("p",{className:"logout",onClick:m},"Salir"),l.a.createElement("i",{className:"fas fa-sign-out-alt logout__arrow",onClick:m})))),l.a.createElement("div",{className:"input__container"},l.a.createElement("label",{className:"label__input",htmlFor:"filterEmployee"},"Campo de b\xfasqueda"),l.a.createElement("div",{className:"search"},l.a.createElement("input",{onChange:n,className:"input__search",name:"filterEmployee",id:"filterEmployee",type:"text",value:t}),l.a.createElement("i",{className:"fas fa-search"}))),l.a.createElement("div",{className:"who__container--search"},l.a.createElement("h2",{className:"who__title--search"},l.a.createElement("span",{className:"who__span--search"},"Who")," ",l.a.createElement("span",{className:"is__span--search"},"is")," ",l.a.createElement("span",{className:"who__span--search"},"Who"))),l.a.createElement("footer",{className:"login__footer--search"},"VASS - Copyright \xa9 2019 Todos los derechos reservados")):l.a.createElement("div",{className:"main__container"},l.a.createElement("header",{className:"list__header"},l.a.createElement("h1",{className:"list__tittle"},"VASS"),l.a.createElement("div",{className:"user__container"},l.a.createElement("i",{className:"far fa-user"}),l.a.createElement("p",{className:"user__text"},"Hola, ".concat(a.email))),l.a.createElement("div",{className:"logout__container"},l.a.createElement("p",{className:"logout",onClick:m},"Salir"),l.a.createElement("i",{className:"fas fa-sign-out-alt logout__arrow",onClick:m}))),l.a.createElement("div",{className:"input__container"},l.a.createElement("p",{className:"logout",onClick:m},"SALIR"),l.a.createElement("label",{className:"label__input",htmlFor:"filterEmployee"},"Campo de b\xfasqueda"),l.a.createElement("div",{className:"search"},l.a.createElement("input",{onChange:n,className:"input__search",name:"filterEmployee",id:"filterEmployee",type:"text",value:t}),l.a.createElement("i",{className:"fas fa-search"})),o?l.a.createElement("p",{className:"error__message--search"}," ",l.a.createElement("i",{className:"fas fa-exclamation-circle"})," No hay ning\xfan resultado que coincida con la b\xfasqueda."):null),l.a.createElement("div",{className:"list__container ".concat(0===s.length?"hidden":"")},l.a.createElement("ul",{className:"employee__list"},s.map(function(e){return l.a.createElement("li",{key:e.sAMAccountName,className:"employee__list--item"},l.a.createElement("div",{className:"item__container",onClick:c,id:e.sAMAccountName},l.a.createElement("h2",{className:"item__name"},e.givenName," ",e.sn),l.a.createElement("i",{className:"fas fa-chevron-down ".concat(r===e.sAMAccountName?"upside-down":null)})),r===e.sAMAccountName?l.a.createElement(_,{collapsibleId:r,detailArr:i}):null)}))),l.a.createElement("div",{className:"who__container--search"},l.a.createElement("h2",{className:"who__title--search"},l.a.createElement("span",{className:"who__span--search"},"Who")," ",l.a.createElement("span",{className:"is__span--search"},"is")," ",l.a.createElement("span",{className:"who__span--search"},"Who"))),l.a.createElement("footer",{className:"login__footer--search"},"VASS - Copyright \xa9 2019 Todos los derechos reservados"))}}]),a}(l.a.Component),N=t(11),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).onSubmit=function(e){e.preventDefault(),fetch("https://whoiswho.vass.es/api/users/login",{method:"POST",body:JSON.stringify(t.state),headers:{"content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var a=e.user.token;""!==a&&(t.setState({isAuthenticated:!0,token:a}),localStorage.setItem("token",JSON.stringify(a)))}).catch(function(e){return t.setState({isErrorVisible:!0})})},t.state={user:{email:"",password:""},nameArr:[],detailArr:[],filterName:"",collapsibleId:null,eyePassword:"password",token:JSON.parse(localStorage.getItem("token"))||"",isAuthenticated:!1,isErrorVisible:!1,isErrorVisibleSearch:!1},t.valueInputEmail="",t.valueInputPassword="",t.handleFilter=t.handleFilter.bind(Object(h.a)(t)),t.handleCollapsible=t.handleCollapsible.bind(Object(h.a)(t)),t.handleEyePassword=t.handleEyePassword.bind(Object(h.a)(t)),t.handleInputEmail=t.handleInputEmail.bind(Object(h.a)(t)),t.handleInputPassword=t.handleInputPassword.bind(Object(h.a)(t)),t.onSubmit=t.onSubmit.bind(Object(h.a)(t)),t.getUsers=t.getUsers.bind(Object(h.a)(t)),t.getUserDetail=t.getUserDetail.bind(Object(h.a)(t)),t.handleLogout=t.handleLogout.bind(Object(h.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handleFilter",value:function(e){var a=e.currentTarget.value;this.setState({filterName:a,collapsibleId:null}),a.length>=3&&this.getUsers(a)}},{key:"handleCollapsible",value:function(e){var a=e.currentTarget.id;this.setState(function(e){return a===e.collapsibleId?{collapsibleId:null}:{collapsibleId:a}}),this.getUserDetail(a)}},{key:"handleEyePassword",value:function(){this.setState(function(e){return{eyePassword:"password"===e.eyePassword?"text":"password"}})}},{key:"handleInputEmail",value:function(e){this.valueInputEmail=e.currentTarget.value,this.setState({user:{email:this.valueInputEmail,password:this.valueInputPassword}})}},{key:"handleInputPassword",value:function(e){this.valueInputPassword=e.currentTarget.value,this.setState({user:{email:this.valueInputEmail,password:this.valueInputPassword}})}},{key:"getUsers",value:function(e){var a=this;fetch("https://whoiswho.vass.es/api/employees?cn=".concat(e),{method:"GET",headers:{Authorization:"Token ".concat(this.state.token),"content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return a.setState({nameArr:e,isErrorVisibleSearch:!1})}).catch(function(e){return a.setState({isErrorVisibleSearch:!0,nameArr:[]})})}},{key:"handleLogout",value:function(){this.setState({user:{email:"",password:""},nameArr:[],detailArr:[],filterName:"",collapsibleId:null,eyePassword:"password",token:"",isAuthenticated:!1,isErrorVisible:!1,isErrorVisibleSearch:!1}),localStorage.removeItem("token")}},{key:"getUserDetail",value:function(e){var a=this;fetch("https://whoiswho.vass.es/api/employees/".concat(e),{method:"GET",headers:{Authorization:"Token ".concat(this.state.token)}}).then(function(e){return e.json()}).then(function(e){return a.setState({detailArr:e})})}},{key:"render",value:function(){var e=this,a=this.state,t=a.user,s=a.nameArr,n=a.filterName,r=a.eyePassword,c=a.collapsibleId,i=a.detailArr,o=a.isErrorVisible,m=a.isErrorVisibleSearch;return l.a.createElement(N.d,null,l.a.createElement(N.b,{exact:!0,path:"/",render:function(){return!0===e.state.isAuthenticated?l.a.createElement(N.a,{from:"/",to:"/search"}):l.a.createElement(p,{handleEyePassword:e.handleEyePassword,eyePassword:r,handleInputEmail:e.handleInputEmail,handleInputPassword:e.handleInputPassword,onSubmit:e.onSubmit,isErrorVisible:o})}}),l.a.createElement(N.b,{path:"/search",render:function(){return""===e.state.token?l.a.createElement(N.a,{from:"/search",to:"/"}):l.a.createElement(E,{user:t,filterName:n,nameArr:s,handleFilter:e.handleFilter,handleCollapsible:e.handleCollapsible,collapsibleId:c,detailArr:i,isErrorVisibleSearch:m,handleLogout:e.handleLogout})}}))}}]),a}(l.a.Component);r.a.render(l.a.createElement(c.a,null," ",l.a.createElement(b,null)," "),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.d83ee1ea.chunk.js.map
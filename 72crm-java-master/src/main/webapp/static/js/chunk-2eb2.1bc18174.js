(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2eb2"],{"+Nk1":function(e,t,n){"use strict";var r=n("O9k1");n.n(r).a},O9k1:function(e,t,n){},ntYl:function(e,t,n){"use strict";n.r(t);var r=n("bS4n"),o=n.n(r);var i=n("8t5x"),a=(n("vgcj"),{name:"Login",data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(e,t,n){0==t.length?n(new Error("请输入账号")):n()}}],password:[{required:!0,trigger:"blur",validator:function(e,t,n){t.length<5?n(new Error("密码不能小于5位")):n()}}]},loading:!1,redirect:void 0,remember:!1}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},computed:o()({},Object(i.b)(["logo","name"])),mounted:function(){},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return!1;e.loading=!0,e.$store.dispatch("Login",e.loginForm).then(function(t){e.loading=!1,e.$store.dispatch("SystemLogoAndName"),e.$router.push({path:e.redirect||"/workbench/index"})}).catch(function(){e.loading=!1})})}}}),s=(n("+Nk1"),n("ZrdR")),l=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[e._m(0),e._v(" "),n("div",{staticClass:"right"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title"},[e._v(e._s(e.name))]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{ref:"name",attrs:{autofocus:"autofocus",name:"username",type:"text","auto-complete":"on",placeholder:"请输入用户名"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",name:"password","auto-complete":"on",placeholder:"请输入密码"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),n("el-form-item",[n("el-button",{staticClass:"submit-btn",attrs:{loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("\n          登录\n        ")])],1)],1),e._v(" "),e._m(1)],1),e._v(" "),n("img",{staticClass:"logo",attrs:{src:e.logo}})])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"left"},[t("div",{staticClass:"left-pic"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright"},[this._v("\n      悟空CRM受国家计算机软件著作权保护，未经授权不得进行商业行为，违者必究。"),t("br"),this._v("\n      ©2019 悟空软件"),t("a",{attrs:{target:"_blank",href:"http://www.5kcrm.com"}},[this._v("www.5kcrm.com")])])}],!1,null,"4b951e22",null);l.options.__file="index.vue";t.default=l.exports}}]);
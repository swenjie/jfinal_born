(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-733a"],{"LP+l":function(t,e,i){"use strict";var s=i("MxsN");i.n(s).a},MxsN:function(t,e,i){},kFvY:function(t,e,i){"use strict";i.r(e);var s,a=i("/umX"),n=i.n(a),o=i("f0Pt"),l=i.n(o),r=i("KTTK"),c=i("7Qib"),m=i("ViDN"),d=i("utuE"),u=i("1RnH"),h={components:{CreateView:m.a,membersDep:d.a,relatedBusiness:u.a},computed:{crmFileSaveUrl:function(){return r.f},httpHeader:function(){return{"Admin-Token":l.a.defaults.headers["Admin-Token"]}}},data:function(){return{activeName:"1",tabsData:[{label:"日报",key:"1"},{label:"周报",key:"2"},{label:"月报",key:"3"}],formList:[],dateList:[{label:"今日工作内容",model:"content"},{label:"明日工作内容",model:"tomorrow"},{label:"遇到的问题",model:"question"}],weekList:[{label:"本周工作内容",model:"content"},{label:"下周工作内容",model:"tomorrow"},{label:"遇到的问题",model:"question"}],monthList:[{label:"本月工作内容",model:"content"},{label:"下月工作内容",model:"tomorrow"},{label:"遇到的问题",model:"question"}],batchId:Object(c.h)(),imageFileList:[],fileList:[],dialogVisible:!1,relevanceAll:{},allData:{}}},props:{formData:{type:Object,default:function(){return{}}},dialogTitle:{type:String,default:"写日志"},accessoryFileList:{type:Array,default:function(){return[]}},imgFileList:{type:Array,default:function(){return[]}},newLoading:Boolean},mounted:function(){if(document.body.appendChild(this.$el),this.formList=this.dateList,this.formData.categoryId)switch(this.formData.categoryId){case 1:this.tabsData=[{label:"日报",key:"1"}],this.formList=this.dateList;break;case 2:this.tabsData=[{label:"周报",key:"1"}],this.formList=this.weekList;break;case 3:this.tabsData=[{label:"月报",key:"1"}],this.formList=this.monthList}"写日志"!=this.dialogTitle&&this.formData.batchId&&(this.batchId=this.formData.batchId);var t={};t.business=this.formData.businessList?this.formData.businessList:[],t.contacts=this.formData.contactsList?this.formData.contactsList:[],t.contract=this.formData.contractList?this.formData.contractList:[],t.customer=this.formData.customerList?this.formData.customerList:[],this.allData=t;var e={};e.businessIds=this.formData.businessList?this.formData.businessList.map(function(t,e,i){return t.businessId}):[],e.contactsIds=this.formData.contactsList?this.formData.contactsList.map(function(t,e,i){return t.contactsId}):[],e.contractIds=this.formData.contractList?this.formData.contractList.map(function(t,e,i){return t.contractId}):[],e.customerIds=this.formData.customerList?this.formData.customerList.map(function(t,e,i){return t.customerId}):[],this.relevanceAll=e,this.imageFileList=this.imgFileList.map(function(t,e,i){return t.url=t.filePath,t}),this.fileList=this.accessoryFileList.map(function(t,e,i){return t.url=t.filePath,t})},methods:(s={close:function(){1==this.$route.query.routerKey?this.$router.go(-1):this.$emit("close")},tabClick:function(){switch(this.activeName){case"1":this.formList=this.dateList;break;case"2":this.formList=this.weekList;break;case"3":this.formList=this.monthList}},submitBtn:function(){this.formData.content||this.formData.tomorrow||this.formData.question?this.$emit("submitBtn",this.activeName,this.batchId,this.relevanceAll):this.$message.error("内容至少填写一项")},beforeRemove:function(){return this.$confirm("此操作将永久删除该图片, 是否继续？")},imgFileUploadSuccess:function(t,e,i){this.imageFileList=i},handleFilePreview:function(t){if(t.response||t.fileId){var e=void 0;e=t.response?t.response:{url:t.filePath,name:t.name},this.$bus.emit("preview-image-bus",{index:0,data:[e]})}}},n()(s,"beforeRemove",function(t,e){var i=this;if(t.response||t.fileId){var s=void 0;return s=t.response?t.response.fileId:t.fileId,this.$confirm("您确定要删除该文件吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.c)({id:s}).then(function(t){i.$message.success("操作成功");var e=i.getFileIndex(i.$refs.imageUpload.uploadFiles,s);-1!=e&&i.$refs.imageUpload.uploadFiles.splice(e,1),-1!=(e=i.getFileIndex(i.imgFileList,s))&&i.imgFileList.splice(e,1)}).catch(function(){})}).catch(function(){i.$message({type:"info",message:"已取消操作"})}),!1}return!0}),n()(s,"getFileIndex",function(t,e){for(var i=-1,s=0;s<t.length;s++){var a=t[s];if((a.response?a.response.fileId:a.fileId)==e){i=s;break}}return i}),n()(s,"fileUploadSuccess",function(t,e,i){this.fileList=i}),n()(s,"handleFileRemove",function(t,e){var i=this;if(t.response||t.fileId){var s=void 0;return s=t.response?t.response.fileId:t.fileId,this.$confirm("您确定要删除该文件吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.c)({id:s}).then(function(t){i.$message.success("操作成功");var e=i.getFileIndex(i.$refs.fileUpload.uploadFiles,s);-1!=e&&i.$refs.fileUpload.uploadFiles.splice(e,1),-1!=(e=i.getFileIndex(i.fileList,s))&&i.fileList.splice(e,1)}).catch(function(){})}).catch(function(){i.$message({type:"info",message:"已取消操作"})}),!1}return!0}),n()(s,"popoverSubmit",function(t,e){this.$set(this.formData,"sentWhoList",t),this.$set(this.formData,"depData",e)}),n()(s,"handleClose",function(){this.dialogVisible=!1}),n()(s,"checkInfos",function(t){this.relevanceAll=t}),s),destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},f=(i("LP+l"),i("ZrdR")),p=Object(f.a)(h,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("create-view",{attrs:{"body-style":{height:"100%"}}},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.newLoading,expression:"newLoading"}],staticClass:"new-journal"},[s("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"text"},[t._v(t._s(t.dialogTitle))]),t._v(" "),s("img",{staticClass:"el-icon-close rt",attrs:{src:i("cjwK"),alt:""},on:{click:t.close}})]),t._v(" "),s("div",{staticClass:"content"},[s("el-tabs",{on:{"tab-click":t.tabClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabsData,function(t,e){return s("el-tab-pane",{key:e,attrs:{label:t.label,name:t.key}})})),t._v(" "),s("div",{staticClass:"form"},[t._l(t.formList,function(e,i){return s("div",{key:i,staticClass:"row-list"},[s("label",{staticClass:"item-label"},[t._v(t._s(e.label)+"：")]),t._v(" "),s("el-input",{attrs:{type:"textarea",autosize:{minRows:4},placeholder:"请输入内容",resize:"none"},model:{value:t.formData[e.model],callback:function(i){t.$set(t.formData,e.model,i)},expression:"formData[item.model]"}})],1)}),t._v(" "),s("div",{staticClass:"img-accessory"},[s("div",{staticClass:"img-box"},[s("el-upload",{ref:"imageUpload",attrs:{action:t.crmFileSaveUrl,headers:t.httpHeader,name:"file",data:{type:"img",batchId:t.batchId},multiple:"",accept:"image/*","list-type":"picture-card","on-preview":t.handleFilePreview,"before-remove":t.beforeRemove,"on-success":t.imgFileUploadSuccess,"file-list":t.imageFileList}},[s("p",{staticClass:"add-img"},[s("span",{staticClass:"el-icon-picture"}),t._v(" "),s("span",[t._v("添加图片")])]),t._v(" "),s("i",{staticClass:"el-icon-plus"})])],1),t._v(" "),s("p",{staticClass:"add-accessory"},[s("el-upload",{ref:"fileUpload",attrs:{action:t.crmFileSaveUrl,headers:t.httpHeader,name:"file",data:{type:"file",batchId:t.batchId},multiple:"",accept:"*.*","on-preview":t.handleFilePreview,"before-remove":t.handleFileRemove,"on-success":t.fileUploadSuccess,"file-list":t.fileList}},[s("p",[s("img",{attrs:{src:i("6KEE"),alt:""}}),t._v("\n                添加附件\n              ")])])],1)]),t._v(" "),s("div",{staticClass:"sent-who"},[s("span",{staticClass:"label"},[t._v("发送给谁:")]),t._v(" "),t._l(t.formData.sentWhoList,function(e,i){return s("div",{directives:[{name:"photo",rawName:"v-photo",value:e,expression:"k"},{name:"lazy",rawName:"v-lazy:background-image",value:t.$options.filters.filterUserLazyImg(e.img),expression:"$options.filters.filterUserLazyImg(k.img)",arg:"background-image"}],key:i,staticClass:"div-photo k-img header-circle"})}),t._v(" "),s("span",t._l(t.formData.depData,function(e,i){return s("span",{key:i,staticClass:"item-name"},[t._v(t._s(e.name))])})),t._v(" "),s("members-dep",{attrs:{userCheckedData:t.formData.sentWhoList,depCheckedData:t.formData.depData,contentBlock:!1},on:{popoverSubmit:t.popoverSubmit}},[s("img",{staticClass:"sent-img",attrs:{slot:"membersDep",src:i("xVxq")},slot:"membersDep"})])],2),t._v(" "),s("related-business",{attrs:{marginLeft:"0",allData:t.allData},on:{checkInfos:t.checkInfos}})],2)],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-button",{attrs:{type:"primary"},on:{click:t.submitBtn}},[t._v("提交")]),t._v(" "),s("el-button",{on:{click:t.close}},[t._v("取消")])],1)])])},[],!1,null,"5500e332",null);p.options.__file="newDialog.vue";e.default=p.exports},xVxq:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVCMjlGNEZDRTE2RDExRThBQkZGQkQwOUMwNEMwMzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVCMjlGNEZERTE2RDExRThBQkZGQkQwOUMwNEMwMzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUIyOUY0RkFFMTZEMTFFOEFCRkZCRDA5QzA0QzAzNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUIyOUY0RkJFMTZEMTFFOEFCRkZCRDA5QzA0QzAzNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4W+9KDAAACUklEQVR42ryXv0sbYRjHL2eapWKaPyBL05RKhoCxhbbGLjWRirhI7NKpmyDqUOiYrnawpUi7OLVD6yQoaas4+SNDomMEm0qh7SAETFAQLMV+H/kevA05L29y3gMfDu7H88nlee7e53zFYtFoIq6ANBgAt8F1cI3HqmAfFMAq+Ar+OCU0HY5L8iz4BZ6B39zGQReJc596Tlb5Ydrix6AEwuA+eABmwCY4AKfkgPte8px7vKbEHA3D32BfB3gDBsEI/0KdKIOnLMkn0A8mwN+L7likC6Ab3GlBqkaBOWLM2XGR+BXoZCNVjPajwoa8Cl7bicd40ihr51acMudDOv4TSwfOgifgyHA/jpl71up2SzwFPrdZ02ZqnqPL8OEFEsD2Jx+ZskaidW6TGtfc4KMXlscpBXY1pRJ9Ldx1ma6USXHO8C7ElRZxD9jyUJwXp4hvgm8eivdAVMRBcNhEI53VYUX9/nWHXOIKmpdwR75mTpKuroEQVxm7aPTInOmIlBBXzWR9ox7W+LynRLwN7nooFteOiFfAkIfiR+K0xDG+znRig68/nRDHLZnLTC5bc+C5ZpJkC69NcbwTp18ZAGRG6gXFS/qLEyxpt7osyog6Dd5zAnE7JOcHOqr1E4gMZmucjwIuSgPMKbk/2s1ck+AELLp0553MdcLctsOejKAZ8IMTQ6LNmhaYK+M03lrycfACLIN5ENEQRnjNMnOM10vtBnorpB5f2BB5Tg5LXLu/KytaiDL5ghhm177ltmq7kmh+tKWUj7aQssxZH20rxHE8/ifAAOMxjvbvK+TbAAAAAElFTkSuQmCC"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2ce5c57","chunk-2ce5","chunk-2ce5c","chunk-2ce5c5","chunk-a8c9"],{"7ccD":function(e,t,a){},"7z+D":function(e,t,a){"use strict";var i=a("ExMk"),l=a("Ew9n"),s=a("EP+0"),n=a("3biH"),c=a("Er7M"),r=a("O1Uw"),o=a("7Qib"),d=(a("a/LZ"),{name:"examine-detail",components:{SlideView:l.a,CreateSections:s.a,ExamineInfo:n.a,RelatedBusinessCell:c.a,CRMFullScreenDetail:function(){return a.e("chunk-a8c9").then(a.bind(null,"uMjE"))},FileCell:r.a},props:{id:[String,Number],noListenerClass:{type:Array,default:function(){return["list-box"]}}},watch:{id:function(e){this.getDetial()}},data:function(){return{loading:!1,categoryId:"",detail:{examineRecordId:""},list:[],categoryName:"",fileList:[],imgList:[],travelList:[],travelField:[{prop:"vehicle",label:"交通工具"},{prop:"trip",label:"单程往返"},{prop:"startAddress",label:"出发城市"},{prop:"endAddress",label:"目的城市"},{prop:"startTime",label:"开始时间"},{prop:"endTime",label:"结束时间"},{prop:"duration",label:"时长（天）"},{prop:"description",label:"备注"}],expensesField:[{prop:"startAddress",label:"出发城市"},{prop:"endAddress",label:"目的城市"},{prop:"startTime",label:"开始时间"},{prop:"endTime",label:"结束时间"},{prop:"traffic",label:"交通费（元）"},{prop:"stay",label:"住宿费（元）"},{prop:"diet",label:"餐饮费（元）"},{prop:"other",label:"其他费用（元）"},{prop:"description",label:"费用明细描述"}],relatedID:"",relatedCRMType:"",showRelatedDetail:!1}},computed:{relatedListData:function(){return{contacts:this.detail.contactsList||[],customer:this.detail.customerList||[],business:this.detail.businessList||[],contract:this.detail.contractList||[]}}},mounted:function(){this.getDetial()},methods:{getBaseInfo:function(){var e=this;this.loading=!0,Object(i.a)({examineId:this.id}).then(function(t){e.list=t.data,e.loading=!1}).catch(function(){e.loading=!1})},getDetial:function(){var e=this;this.loading=!0,Object(i.j)({examineId:this.id}).then(function(t){e.loading=!1,e.categoryId=t.data.categoryId,e.getBaseInfo(),e.detail=t.data,e.categoryName=e.detail.category,e.fileList=e.detail.file,e.imgList=e.detail.img,e.travelList=e.detail.examineTravelList}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")},checkRelatedDetail:function(e,t){this.relatedID=t[e+"Id"],this.relatedCRMType=e,this.showRelatedDetail=!0},handleFile:function(e,t,a){if("preview"===e){if(t&&t.length>0){var i=t.map(function(e){return e.url=e.filePath,e});this.$bus.emit("preview-image-bus",{index:a,data:i})}}else"download"===e&&Object(o.a)({path:t.filePath,name:t.name})},imgZoom:function(e,t){this.$bus.emit("preview-image-bus",{index:t,data:e.map(function(e,t,a){return{url:e.filePath,name:e.name}})})},downloadFile:function(e){Object(o.a)({path:e.filePath,name:e.name})},examineHandle:function(e){this.$emit("on-examine-handle",e)}}}),u=(a("NxN7"),a("ZrdR")),p=Object(u.a)(d,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("slide-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-view",attrs:{listenerIDs:["workbench-main-container"],noListenerClass:e.noListenerClass,"body-style":{padding:"10px 30px",height:"100%"}},on:{"side-close":e.hideView}},[i("flexbox",{staticStyle:{height:"100%"},attrs:{orient:"vertical"}},[i("flexbox",{staticClass:"detail-header"},[i("div",{staticClass:"header-name"},[e._v(e._s(e.categoryName))]),e._v(" "),i("img",{staticClass:"header-close",attrs:{src:a("cjwK")},on:{click:e.hideView}})]),e._v(" "),i("div",{staticClass:"detail-body"},[i("flexbox",{attrs:{gutter:0,align:"stretch",wrap:"wrap"}},e._l(e.list,function(t,l){return"examine_cause"!==t.formType&&"business_cause"!==t.formType?i("flexbox-item",{key:l,staticClass:"b-cell",attrs:{span:.5}},["user"===t.formType?i("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},[i("flexbox",{staticStyle:{padding:"0px 10px 10px 0px"},attrs:{gutter:0,wrap:"wrap"}},e._l(t.value,function(t,a){return i("div",{key:a},[e._v("\n                  "+e._s(t.realname)+"  \n                ")])}))],1)]):"structure"===t.formType?i("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},[i("flexbox",{staticStyle:{padding:"0px 10px 10px 0px"},attrs:{gutter:0,wrap:"wrap"}},e._l(t.value,function(t,a){return i("div",{key:a},[e._v("\n                  "+e._s(t.name)+"  \n                ")])}))],1)]):"checkbox"===t.formType?i("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},[i("flexbox",{staticStyle:{padding:"0px 10px 10px 0px"},attrs:{gutter:0,wrap:"wrap"}},e._l(t.value,function(t,a){return i("div",{key:a},[e._v("\n                  "+e._s(t)+"  \n                ")])}))],1)]):"file"===t.formType?i("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},e._l(t.value,function(l,s){return i("flexbox",{key:s,staticClass:"f-item"},[i("img",{staticClass:"f-img",attrs:{src:a("6KEE")}}),e._v(" "),i("div",{staticClass:"f-name"},[e._v(e._s(l.name.length>15?l.name.substring(0,15)+"...":l.name+"("+l.size+")"))]),e._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(a){e.handleFile("preview",t.value,s)}}},[e._v("预览")]),e._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(t){e.handleFile("download",l,s)}}},[e._v("下载")])],1)}))]):i("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},[e._v(e._s(t.value))])])],1):e._e()})),e._v(" "),e.fileList.length>0||e.imgList.length>0?i("div",{staticClass:"accessory"},[i("div",{staticClass:"upload-img-box"},e._l(e.imgList,function(t,a){return i("div",{key:a,staticClass:"img-list",on:{click:function(t){e.imgZoom(e.imgList,a)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.filePath,expression:"imgItem.filePath"}],key:t.filePath})])})),e._v(" "),i("div",{staticClass:"accessory-box"},e._l(e.fileList,function(e,t){return i("file-cell",{key:t,attrs:{data:e,cellIndex:t}})}))]):e._e(),e._v(" "),e.categoryId&&3==e.categoryId&&e.travelList&&e.travelList.length>0?i("create-sections",{staticClass:"create-sections",attrs:{title:"行程"}},[i("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:e.travelList,align:"center","header-align":"center",stripe:""}},e._l(e.travelField,function(t,a){return i("el-table-column",{key:a,attrs:{"show-overflow-tooltip":"",prop:t.prop,label:t.label},scopedSlots:e._u([{key:"header",fn:function(t){return[i("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}))],1):e._e(),e._v(" "),e.categoryId&&5==e.categoryId&&e.travelList&&e.travelList.length>0?i("create-sections",{staticClass:"create-sections",attrs:{title:"报销"}},[i("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:e.travelList,align:"center","header-align":"center",stripe:""}},[e._l(e.expensesField,function(t,a){return i("el-table-column",{key:a,attrs:{"show-overflow-tooltip":"",prop:t.prop,label:t.label},scopedSlots:e._u([{key:"header",fn:function(t){return[i("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}),e._v(" "),i("el-table-column",{attrs:{label:"发票",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("flexbox",{attrs:{justify:"center"}},[i("el-button",{attrs:{type:"text"},nativeOn:{click:function(a){e.handleFile("preview",t.row.img,0)}}},[e._v(e._s(t.row.img.length)+"张")])],1)]}}])})],2)],1):e._e(),e._v(" "),e.relatedListData.contacts.length>0||e.relatedListData.customer.length>0||e.relatedListData.business.length>0||e.relatedListData.contract.length>0?i("create-sections",{staticClass:"create-sections",attrs:{title:"关联业务"}},[i("div",{staticClass:"related-business create-sections-content"},e._l(e.relatedListData,function(t,a){return i("div",{key:a},e._l(t,function(t,l){return i("related-business-cell",{key:l,attrs:{data:t,cellIndex:l,type:a,showFoot:!1},nativeOn:{click:function(i){e.checkRelatedDetail(a,t)}}})}))}))]):e._e(),e._v(" "),i("create-sections",{staticClass:"create-sections",attrs:{title:"审核信息"}},[i("examine-info",{staticClass:"create-sections-content",attrs:{id:e.id,examineType:"oa_examine",recordId:e.detail.examineRecordId},on:{"on-handle":e.examineHandle}})],1)],1)],1),e._v(" "),i("c-r-m-full-screen-detail",{attrs:{visible:e.showRelatedDetail,crmType:e.relatedCRMType,id:e.relatedID},on:{"update:visible":function(t){e.showRelatedDetail=t}}})],1)},[],!1,null,"7c87fbb5",null);p.options.__file="examineDetail.vue";t.a=p.exports},NxN7:function(e,t,a){"use strict";var i=a("a3e5");a.n(i).a},VU1q:function(e,t,a){"use strict";var i=a("7ccD");a.n(i).a},a3e5:function(e,t,a){},uMjE:function(e,t,a){"use strict";a.r(t);var i=a("7Qib"),l=a("mqlf"),s=a("ppJE"),n=a("PS1M"),c=a("n1dw"),r=a("xfX+"),o=a("8gwX"),d=a("K6D0"),u=a("7z+D"),p={name:"c-r-m-full-screen-detail",components:{ClueDetail:l.a,CustomerDetail:s.a,ContactsDetail:n.a,BusinessDetail:c.a,ContractDetail:r.a,ProductDetail:o.a,MoneyDetail:d.a,ExamineDetail:u.a},watch:{visible:function(e){this.showDetail=e,e&&(document.body.appendChild(this.$el),this.$el.addEventListener("click",this.handleDocumentClick,!1),this.$el.style.zIndex=Object(i.g)())},showDetail:function(e){var t=this;e||setTimeout(function(){t.$emit("update:visible",!1)},350)}},computed:{tabName:function(){return"leads"==this.crmType?"clue-detail":"customer"==this.crmType?"customer-detail":"contacts"==this.crmType?"contacts-detail":"business"==this.crmType?"business-detail":"contract"==this.crmType?"contract-detail":"product"==this.crmType?"product-detail":"receivables"==this.crmType?"money-detail":"examine"==this.crmType?"examine-detail":""}},data:function(){return{showDetail:!1}},props:{id:[String,Number],crmType:{type:String,default:""},visible:{type:Boolean,default:!1}},mounted:function(){this.visible&&(document.body.appendChild(this.$el),this.$el.addEventListener("click",this.handleDocumentClick,!1),this.$el.style.zIndex=Object(i.g)())},methods:{hiddenView:function(){this.showDetail=!1},handleDocumentClick:function(e){e.stopPropagation(),this.$el==e.target&&(this.showDetail=!1)}},beforeDestroy:function(){this.$el&&this.$el.parentNode&&(this.$el.parentNode.removeChild(this.$el),this.$el.removeEventListener("click",this.handleDocumentClick,!1))}},m=(a("VU1q"),a("ZrdR")),h=Object(m.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"full-container"},[e.id&&e.showDetail?a(e.tabName,{tag:"component",staticClass:"d-view",attrs:{crmType:e.crmType,id:e.id},on:{"hide-view":e.hiddenView}}):e._e()],1)},[],!1,null,"2cff152a",null);h.options.__file="CRMFullScreenDetail.vue";t.default=h.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{"/ZLo":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-tabs",{staticClass:"row",attrs:{color:"tertiary",animated:"",align:"justify"},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},[a("q-tab",{attrs:{slot:"title",default:"",name:"allEvents",label:"All Events"},slot:"title"}),e._l(e.events,function(e){return a("div",{key:e[".key"],attrs:{slot:"title"},slot:"title"},[a("q-tab",{attrs:{name:e[".key"],label:e.eventName}})],1)}),a("q-tab-pane",{attrs:{name:"allEvents"}},[a("all-events")],1),a("q-tab-pane",{attrs:{name:e.selectedTab}},["allEvents"!==e.selectedTab?a("by-events",{attrs:{eventKey:e.selectedTab,eventName:e.getEventName}}):e._e()],1)],2)],1)},s=[],l=(a("dRSK"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-table",{ref:"table",attrs:{data:e.mappedModels,columns:e.columns,filter:e.filter,"row-key":"name",pagination:e.pagination,loading:e.loading},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[a("span",{staticClass:"q-title"},[e._v("All Events")])]}},{key:"top-right",fn:function(t){return[a("div",{staticClass:"q-px-md"},[a("p",[e._v("Full Paid Models: "+e._s(e.mappedModels.length))]),a("p",[e._v("Total Payments: P "+e._s(e.getTotalPayments))])]),a("q-search",{attrs:{"hide-underline":""},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("q-btn",{attrs:{label:"print",icon:"print"},on:{click:function(t){e.print()}}})]}}])})],1)}),o=[],r=(a("a1Th"),a("pIFo"),a("RIqP")),i=a.n(r),d=a("5JmO"),c=a("TruH");d.vfs=c.pdfMake.vfs;var u="",m=new XMLHttpRequest;m.open("GET","assets/mma.png",!0),m.responseType="blob",m.onload=function(e){var t=new FileReader;t.onload=function(e){u=e.target.result};var a=this.response;t.readAsDataURL(a)},m.send();var h={created:function(){if(this.$q.localStorage.has("user")){var e=this.$q.localStorage.get.item("user");this.$bindAsArray("userLoggedIn",this.$database.ref("users").orderByKey().equalTo(e)),console.log("user2",e)}},mounted:function(){this.$bindAsArray("contractSigned",this.$database.ref("contractSigned").orderByChild("paymentTerms").equalTo("full")),this.$bindAsArray("schedules",this.$database.ref("event_schedules")),this.$bindAsArray("paymentRecords",this.$database.ref("payment_transactions"))},computed:{mappedModels:function(){var e=this,t=this.$lodash.map(this.contractSigned,function(t){return t.fullName="".concat(t.lastName,", ").concat(t.firstName),t.seasonAndBatch=e.getSeasonAndBatch(t.seasonName,t.batchKey),t.seasonRate=e.getSeasonRate(t.batchKey),t.datePaid=e.getDatePaid(t[".key"]),t.totalPaid=e.getTotalPaid(t[".key"]),t.paymentTerms=e.$lodash.capitalize(t.paymentTerms),t});return console.log("mapmodels",t),t},getFullPaidModels:function(){var e=this.$lodash.filter(this.mappedModels,function(e){return"Full"===e.paymentTerms});return e},getInstallmentModels:function(){var e=this.$lodash.filter(this.mappedModels,function(e){return"Installment"===e.paymentTerms});return e},getNotPaidModels:function(){var e=i()(this.mappedModels),t=this.$lodash.map(e,function(e){return e.paymentTerms2=e.paymentTerms?e.paymentTerms:"Not Paid",e}),a=this.$lodash.filter(t,function(e){return"Not Paid"===e.paymentTerms2});return console.log("getNotPaidModels",a),a},getTotalPayments:function(){var e=i()(this.mappedModels),t=this.$lodash.sumBy(e,function(e){return parseFloat(e.totalPaid.replace(/,/g,""))});return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},data:function(){return{userLoggedIn:[],paymentRecords:[],schedules:[],contractSigned:[],selectOptions:[],loading:!1,filter:"",serverData:[],columns:[{name:"datePaid",align:"left",label:"Date Paid",field:"datePaid",sortable:!0},{name:"fullName",align:"left",label:"Full Name",field:"fullName",sortable:!0},{name:"event",align:"left",label:"Event",field:"eventName"},{name:"seasonBatch",align:"left",label:"Season & Batch",field:"seasonAndBatch"},{name:"seasonRate",align:"left",label:"Season Rate",field:"seasonRate"}],pagination:{sortBy:null,descending:!1,page:1,rowsPerPage:0}}},methods:{getSeasonAndBatch:function(e,t){var a=this.$lodash.find(this.schedules,function(e){return e[".key"]===t});return"".concat(e,"_Batch(").concat(a.batchNumber,")")},getSeasonRate:function(e){var t=this.$lodash.find(this.schedules,function(t){return t[".key"]===e});return t.totalAmount},getDatePaid:function(e){try{var t=this.$lodash.find(this.paymentRecords,function(t){return t.modelKey===e});return this.$moment(t.create_time).format("ll")}catch(e){return"Not Paid"}},getTotalPaid:function(e){var t=this.$lodash.filter(this.paymentRecords,function(t){return t.modelKey===e}),a=this.$lodash.sumBy(t,function(e){return parseFloat(e.transaction_amount)}),n=parseInt(a)||0;return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},print:function(){var e=this.$lodash.map(this.columns,function(e){return{text:e.label}});console.log("columns",e);for(var t=[],a=i()(this.mappedModels),n=0;n<a.length;n++){a[n].paymentTerms&&a[n].paymentTerms;var s=[a[n].datePaid,a[n].fullName,a[n].eventName,a[n].seasonAndBatch,a[n].seasonRate];t.push(s)}var l=this;console.log("mappedModels",this.mappedModels.length.toString());for(var o={pageMargins:[40,40,40,60],footer:function(e,t){return{table:{widths:"*",body:[[{text:"Date prepared: ".concat(l.$moment(new Date).format("lll")),margin:[40,0,0,0]},{text:"",alignment:"left",style:"normalText",aligment:"right"}],[{text:"Prepared By: ".concat(l.userLoggedIn[0].lastName,", ").concat(l.userLoggedIn[0].firstName),margin:[40,0,0,0]},{text:"",alignment:"left",style:"normalText",aligment:"right"}],[{text:"Approved By: ",margin:[40,0,0,0]},{text:"Page "+e.toString()+" of "+t,alignment:"right",style:"normalText",aligment:"right",margin:[0,0,40,0]}]]},layout:"noBorders"}},content:[{image:u,width:100,height:70,alignment:"center"},{text:"3rd Floor Forab Building Kamuning Quezon City",alignment:"center",margin:[5,5,5,5]},{text:"Payment Records: Full Payment - All Events ",alignment:"left",margin:[5,5,5,5]},{style:"tableExample",table:{headerRows:1,body:[e]},layout:{hLineWidth:function(e,t){return 0===e||e===t.table.body.length?2:1},vLineWidth:function(e,t){return 0===e||e===t.table.widths.length?2:1},hLineColor:function(e,t){return 0===e||e===t.table.body.length?"black":"gray"},vLineColor:function(e,t){return 0===e||e===t.table.widths.length?"black":"gray"}}},{text:"Full Paid Models: ".concat(this.mappedModels.length),alignment:"left",margin:[1,1,1,1]},{text:"Total Payments: P ".concat(this.getTotalPayments),alignment:"left",margin:[1,1,1,1]}],styles:{header:{fontSize:18,bold:!0,margin:[0,0,0,10]},tableExample:{fontSize:8,margin:[30,1,30,10]}}},r=0;r<t.length;r++)o.content[3].table.body.push(t[r]);console.log("dd",o),d.createPdf(o).download("PaymentReports_Full_AllEvents")},test:function(){console.log("startp\t",this.userLoggedIn)}}},f=h,g=a("KHd+"),p=Object(g["a"])(f,l,o,!1,null,null,null),y=p.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-table",{ref:"table",attrs:{data:e.mappedModels,columns:e.columns,filter:e.filter,"row-key":"name","no-data-label":"No Full Paid Models",pagination:e.pagination,loading:e.loading},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[a("p",{staticClass:"q-title"},[e._v(e._s(e.eventName)+" - ")]),a("br"),a("p",[a("q-select",{attrs:{options:e.seasonOpt},model:{value:e.selectedSeason,callback:function(t){e.selectedSeason=t},expression:"selectedSeason"}})],1)]}},{key:"top-right",fn:function(t){return[a("div",{staticClass:"q-px-md"},[a("p",[e._v("Full Paid Models: "+e._s(e.mappedModels.length))]),a("p",[e._v("Total Payments: P "+e._s(e.getTotalPayments))])]),a("q-search",{attrs:{"hide-underline":""},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("q-btn",{attrs:{label:"print",icon:"print"},on:{click:function(t){e.print()}}})]}}])})],1)},v=[],P=a("5JmO"),$=a("TruH");P.vfs=$.pdfMake.vfs;var T="",S=new XMLHttpRequest;S.open("GET","assets/mma.png",!0),S.responseType="blob",S.onload=function(e){var t=new FileReader;t.onload=function(e){T=e.target.result};var a=this.response;t.readAsDataURL(a)},S.send();var N={created:function(){if(this.$q.localStorage.has("user")){var e=this.$q.localStorage.get.item("user");this.$bindAsArray("userLoggedIn",this.$database.ref("users").orderByKey().equalTo(e)),this.loadSelectSeason()}},mounted:function(){this.$bindAsArray("contractSigned",this.$database.ref("contractSigned").orderByChild("paymentTerms").equalTo("full")),this.$bindAsArray("schedules",this.$database.ref("event_schedules")),this.$bindAsArray("paymentRecords",this.$database.ref("payment_transactions")),this.$bindAsArray("events",this.$database.ref("events"))},props:{eventKey:String,eventName:String},watch:{seasonOpt:{handler:function(){this.loadSelectSeason()},deep:!0}},computed:{mappedModels:function(){var e=this,t=this.$lodash.filter(this.contractSigned,function(t){return t.eventKey===e.eventKey&&t.seasonName===e.selectedSeason}),a=this.$lodash.map(t,function(t){return t.fullName="".concat(t.lastName,", ").concat(t.firstName),t.seasonAndBatch=e.getSeasonAndBatch(t.seasonName,t.batchKey),t.seasonRate=e.getSeasonRate(t.batchKey),t.datePaid=e.getDatePaid(t[".key"]),t.totalPaid=e.getTotalPaid(t[".key"]),t.paymentTerms=e.$lodash.capitalize(t.paymentTerms),t});return this.$lodash.orderBy(a,"fullName","asc")},getFullPaidModels:function(){var e=this.$lodash.filter(this.mappedModels,function(e){return"Full"===e.paymentTerms});return e},getInstallmentModels:function(){var e=this.$lodash.filter(this.mappedModels,function(e){return"Installment"===e.paymentTerms});return e},getNotPaidModels:function(){var e=i()(this.mappedModels),t=this.$lodash.map(e,function(e){return e.paymentTerms2=e.paymentTerms?e.paymentTerms:"Not Paid",e}),a=this.$lodash.filter(t,function(e){return"Not Paid"===e.paymentTerms2});return a},getTotalPayments:function(){var e=i()(this.mappedModels),t=this.$lodash.sumBy(e,function(e){return parseFloat(e.totalPaid.replace(/,/g,""))});return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getEvent:function(){var e=this,t=this.$lodash.find(this.events,function(t){return t[".key"]===e.eventKey});return t},seasonOpt:function(){try{var e=this.getEvent.seasons,t=this.$lodash.map(e,function(e){return{label:"Season ".concat(e.seasonNumber),value:e.seasonName}});return this.$lodash.orderBy(t,"label","desc")}catch(e){return[]}}},data:function(){return{selectedSeason:"",selectOptions:[{label:"Season 1",value:"season1"}],events:[],userLoggedIn:[],paymentRecords:[],schedules:[],contractSigned:[],loading:!1,filter:"",serverData:[],columns:[{name:"datePaid",align:"left",label:"Date Paid",field:"datePaid",sortable:!0},{name:"fullName",align:"left",label:"Full Name",field:"fullName",sortable:!0},{name:"event",align:"left",label:"Event",field:"eventName"},{name:"seasonBatch",align:"left",label:"Season & Batch",field:"seasonAndBatch"},{name:"seasonRate",align:"left",label:"Season Rate",field:"seasonRate"}],pagination:{sortBy:null,descending:!1,page:1,rowsPerPage:0}}},methods:{loadSelectSeason:function(){try{this.selectedSeason=this.seasonOpt[0].value}catch(e){return 0}},getSeasonAndBatch:function(e,t){var a=this.$lodash.find(this.schedules,function(e){return e[".key"]===t});return"".concat(e,"_Batch(").concat(a.batchNumber,")")},getSeasonRate:function(e){var t=this.$lodash.find(this.schedules,function(t){return t[".key"]===e});return t.totalAmount},getDatePaid:function(e){try{var t=this.$lodash.find(this.paymentRecords,function(t){return t.modelKey===e});return this.$moment(t.create_time).format("ll")}catch(e){return"Not Paid"}},getTotalPaid:function(e){var t=this.$lodash.filter(this.paymentRecords,function(t){return t.modelKey===e}),a=this.$lodash.sumBy(t,function(e){return parseFloat(e.transaction_amount)}),n=parseInt(a)||0;return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},print:function(){var e=this.$lodash.map(this.columns,function(e){return{text:e.label,style:"header"}});console.log("columns",e);for(var t=[],a=i()(this.mappedModels),n=0;n<a.length;n++){var s=[a[n].datePaid,a[n].fullName,a[n].eventName,a[n].seasonAndBatch,a[n].seasonRate];t.push(s)}var l=this;console.log("toBody",t);for(var o={pageMargins:[40,40,40,60],footer:function(e,t){return{table:{widths:"*",body:[[{text:"Date prepared: ".concat(l.$moment(new Date).format("lll")),margin:[40,0,0,0]},{text:"",alignment:"left",style:"normalText",aligment:"right"}],[{text:"Prepared By: ".concat(l.userLoggedIn[0].lastName,", ").concat(l.userLoggedIn[0].firstName),margin:[40,0,0,0]},{text:"",alignment:"left",style:"normalText",aligment:"right"}],[{text:"Approved By: ",margin:[40,0,0,0]},{text:"Page "+e.toString()+" of "+t,alignment:"right",style:"normalText",aligment:"right",margin:[0,0,40,0]}]]},layout:"noBorders"}},content:[{image:T,width:100,height:70,alignment:"center"},{text:"3rd Floor Forab Building Kamuning Quezon City",alignment:"center",margin:[5,5,5,5]},{text:"Payment Records: Full Payment - ".concat(this.eventName," - ").concat(this.selectedSeason),alignment:"left",margin:[5,5,5,5]},{style:"tableExample",table:{headerRows:1,body:[e]},layout:{hLineWidth:function(e,t){return 0===e||e===t.table.body.length?2:1},vLineWidth:function(e,t){return 0===e||e===t.table.widths.length?2:1},hLineColor:function(e,t){return 0===e||e===t.table.body.length?"black":"gray"},vLineColor:function(e,t){return 0===e||e===t.table.widths.length?"black":"gray"}}},{text:"Full Paid Models: ".concat(this.mappedModels.length),alignment:"left",margin:[1,1,1,1]},{text:"Total Payments: P ".concat(this.getTotalPayments),alignment:"left",margin:[1,1,1,1]}],styles:{header:{fontSize:12,bold:!0,margin:[0,0,0,10]},tableExample:{fontSize:8,margin:[30,1,30,10]}}},r=0;r<t.length;r++)o.content[3].table.body.push(t[r]);console.log("dd",o),P.createPdf(o).download("PaymentReports_FullPaid_".concat(this.eventName,"_").concat(this.selectedSeason))},test:function(){console.log("events",this.mappedModels)}}},B=N,x=Object(g["a"])(B,b,v,!1,null,null,null),A=x.exports,M={components:{AllEvents:y,ByEvents:A},watch:{selectedTab:function(){}},mounted:function(){this.$bindAsArray("events",this.$database.ref("events"))},computed:{getEventName:function(){var e=this;try{var t=this.$lodash.find(this.events,function(t){return t[".key"]===e.selectedTab});return t.eventName}catch(e){return""}}},data:function(){return{selectedTab:"",events:[]}}},R=M,_=Object(g["a"])(R,n,s,!1,null,null,null);t["default"]=_.exports}}]);
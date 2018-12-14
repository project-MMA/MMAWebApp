(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{UsON:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-tabs",{staticClass:"row",attrs:{color:"tertiary",animated:"",align:"justify"},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},[a("q-tab",{attrs:{slot:"title",default:"",name:"allEvents",label:"All Events"},slot:"title"}),e._l(e.events,function(e){return a("div",{key:e[".key"],attrs:{slot:"title"},slot:"title"},[a("q-tab",{attrs:{name:e[".key"],label:e.eventName}})],1)}),a("q-tab-pane",{attrs:{name:"allEvents"}},[a("all-events")],1),a("q-tab-pane",{attrs:{name:e.selectedTab}},["allEvents"!==e.selectedTab?a("by-events",{attrs:{eventKey:e.selectedTab,eventName:e.getEventName}}):e._e()],1)],2)],1)},l=[],s=(a("dRSK"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-table",{ref:"table",attrs:{data:e.mappedModels,columns:e.columns,filter:e.filter,"row-key":"name",pagination:e.pagination,loading:e.loading},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[a("span",{staticClass:"q-title"},[e._v("All Events")])]}},{key:"top-right",fn:function(t){return[a("div",{staticClass:"q-px-md"},[a("p",[e._v("Not Paid Models: "+e._s(e.mappedModels.length))])]),a("q-search",{attrs:{"hide-underline":""},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("q-btn",{attrs:{label:"print",icon:"print"},on:{click:function(t){e.print()}}})]}}])})],1)}),o=[],r=(a("a1Th"),a("pIFo"),a("RIqP")),i=a.n(r),d=a("5JmO"),c=a("TruH");d.vfs=c.pdfMake.vfs;var m="",u=new XMLHttpRequest;u.open("GET","assets/mma.png",!0),u.responseType="blob",u.onload=function(e){var t=new FileReader;t.onload=function(e){m=e.target.result};var a=this.response;t.readAsDataURL(a)},u.send();var h={created:function(){if(this.$q.localStorage.has("user")){var e=this.$q.localStorage.get.item("user");this.$bindAsArray("userLoggedIn",this.$database.ref("users").orderByKey().equalTo(e)),console.log("user2",e)}},mounted:function(){this.$bindAsArray("contractSigned",this.$database.ref("contractSigned")),this.$bindAsArray("schedules",this.$database.ref("event_schedules")),this.$bindAsArray("paymentRecords",this.$database.ref("payment_transactions"))},computed:{mappedModels:function(){var e=this,t=this.$lodash.map(this.contractSigned,function(t){return t.fullName="".concat(t.lastName,", ").concat(t.firstName),t.seasonAndBatch=e.getSeasonAndBatch(t.seasonName,t.batchKey),t.seasonRate=e.getSeasonRate(t.batchKey),t.lastPaidDate=e.getLastPaidDate(t[".key"]),t.totalPaid=e.getTotalPaid(t[".key"]),t.dateSigned=e.$moment(t.dateSigned).format("ll"),t.paymentTerms=e.$lodash.capitalize(t.paymentTerms),t}),a=this.$lodash.filter(t,function(e){return"Not Paid"===e.lastPaidDate});return this.$lodash.orderBy(a,"fullName","asc")},getFullPaidModels:function(){var e=this.$lodash.filter(this.mappedModels,function(e){return"Full"===e.paymentTerms});return e},getInstallmentModels:function(){var e=this.$lodash.filter(this.mappedModels,function(e){return"Installment"===e.paymentTerms});return e},getNotPaidModels:function(){var e=i()(this.mappedModels),t=this.$lodash.map(e,function(e){return e.paymentTerms2=e.paymentTerms?e.paymentTerms:"Not Paid",e}),a=this.$lodash.filter(t,function(e){return"Not Paid"===e.paymentTerms2});return console.log("getNotPaidModels",a),a},getTotalPayments:function(){var e=i()(this.mappedModels),t=this.$lodash.sumBy(e,function(e){return parseFloat(e.totalPaid.replace(/,/g,""))});return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},data:function(){return{userLoggedIn:[],paymentRecords:[],schedules:[],contractSigned:[],selectOptions:[],loading:!1,filter:"",serverData:[],columns:[{name:"dateSigned",align:"left",label:"Date Signed",field:"dateSigned",sortable:!0},{name:"fullName",align:"left",label:"Full Name",field:"fullName",sortable:!0},{name:"event",align:"left",label:"Event Name",field:"eventName",sortable:!0},{name:"seasonBatch",align:"left",label:"Season & Batch",field:"seasonAndBatch"},{name:"seasonRate",align:"left",label:"Season Rate",field:"seasonRate"},{name:"mobileNumber",align:"left",label:"Mobile Number",field:"mobileNumber",sortable:!0},{name:"email",align:"left",label:"Email",sortable:!0,field:"email"}],pagination:{sortBy:null,descending:!1,page:1,rowsPerPage:0}}},methods:{getSeasonAndBatch:function(e,t){var a=this.$lodash.find(this.schedules,function(e){return e[".key"]===t});return"".concat(e,"_Batch(").concat(a.batchNumber,")")},getSeasonRate:function(e){var t=this.$lodash.find(this.schedules,function(t){return t[".key"]===e});return t.totalAmount},getLastPaidDate:function(e){try{var t=this.$lodash.filter(this.paymentRecords,function(t){return t.modelKey===e}),a=this.$lodash.orderBy(t,function(e){return new Date(e.create_time)},"desc");return a[0].create_time?this.$moment(a[0].create_time).format("ll"):"Not Paid"}catch(e){return"Not Paid"}},getTotalPaid:function(e){var t=this.$lodash.filter(this.paymentRecords,function(t){return t.modelKey===e}),a=this.$lodash.sumBy(t,function(e){return parseFloat(e.transaction_amount)}),n=parseInt(a)||0;return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},print:function(){var e=this.$lodash.map(this.columns,function(e){return{text:e.label}});console.log("columns",e);for(var t=[],a=i()(this.mappedModels),n=0;n<a.length;n++){a[n].paymentTerms&&a[n].paymentTerms;var l=[a[n].dateSigned,a[n].fullName,a[n].eventName,a[n].seasonAndBatch,a[n].seasonRate,a[n].mobileNumber,a[n].email];t.push(l)}var s=this;console.log("mappedModels",this.mappedModels.length.toString());for(var o={pageMargins:[40,40,40,60],footer:function(e,t){return{table:{widths:"*",body:[[{text:"Date prepared: ".concat(s.$moment(new Date).format("lll")),margin:[40,0,0,0]},{text:"",alignment:"left",style:"normalText",aligment:"right"}],[{text:"Prepared By: ".concat(s.userLoggedIn[0].lastName,", ").concat(s.userLoggedIn[0].firstName),margin:[40,0,0,0]},{text:"",alignment:"left",style:"normalText",aligment:"right"}],[{text:"Approved By: ",margin:[40,0,0,0]},{text:"Page "+e.toString()+" of "+t,alignment:"right",style:"normalText",aligment:"right",margin:[0,0,40,0]}]]},layout:"noBorders"}},content:[{image:m,width:100,height:70,alignment:"center"},{text:"3rd Floor Forab Building Kamuning Quezon City",alignment:"center",margin:[5,5,5,5]},{text:"Payment Records: Not Paid",alignment:"left",margin:[5,5,5,5]},{style:"tableExample",table:{headerRows:1,body:[e]},layout:{hLineWidth:function(e,t){return 0===e||e===t.table.body.length?2:1},vLineWidth:function(e,t){return 0===e||e===t.table.widths.length?2:1},hLineColor:function(e,t){return 0===e||e===t.table.body.length?"black":"gray"},vLineColor:function(e,t){return 0===e||e===t.table.widths.length?"black":"gray"}}},{text:"Not Paid: ".concat(this.mappedModels.length),alignment:"left",margin:[1,1,1,1]}],styles:{header:{fontSize:18,bold:!0,margin:[0,0,0,10]},tableExample:{fontSize:8,margin:[30,1,30,10]}}},r=0;r<t.length;r++)o.content[3].table.body.push(t[r]);console.log("dd",o),d.createPdf(o).download("PaymentReports_NotPaid")},test:function(){console.log("startp\t",this.userLoggedIn)}}},g=h,f=a("KHd+"),p=Object(f["a"])(g,s,o,!1,null,null,null),b=p.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-table",{ref:"table",attrs:{data:e.mappedModels,columns:e.columns,filter:e.filter,"row-key":"name","no-data-label":"No Models Yet",pagination:e.pagination,loading:e.loading},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[a("span",{staticClass:"q-title"},[e._v(e._s(e.eventName))])]}},{key:"top-right",fn:function(t){return[a("div",{staticClass:"q-px-md"},[a("p",[e._v("Not Paid: "+e._s(e.mappedModels.length))])]),a("q-search",{attrs:{"hide-underline":""},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("q-btn",{attrs:{label:"print",icon:"print"},on:{click:function(t){e.print()}}})]}}])})],1)},v=[],N=a("5JmO"),$=a("TruH");N.vfs=$.pdfMake.vfs;var P="",S=new XMLHttpRequest;S.open("GET","assets/mma.png",!0),S.responseType="blob",S.onload=function(e){var t=new FileReader;t.onload=function(e){P=e.target.result};var a=this.response;t.readAsDataURL(a)},S.send();var T={created:function(){if(this.$q.localStorage.has("user")){var e=this.$q.localStorage.get.item("user");this.$bindAsArray("userLoggedIn",this.$database.ref("users").orderByKey().equalTo(e))}},mounted:function(){this.$bindAsArray("contractSigned",this.$database.ref("contractSigned")),this.$bindAsArray("schedules",this.$database.ref("event_schedules")),this.$bindAsArray("paymentRecords",this.$database.ref("payment_transactions")),this.$bindAsArray("events",this.$database.ref("events"))},props:{eventKey:String,eventName:String},computed:{mappedModels:function(){var e=this,t=this.$lodash.map(this.contractSigned,function(t){return t.fullName="".concat(t.lastName,", ").concat(t.firstName),t.seasonAndBatch=e.getSeasonAndBatch(t.seasonName,t.batchKey),t.seasonRate=e.getSeasonRate(t.batchKey),t.lastPaidDate=e.getLastPaidDate(t[".key"]),t.totalPaid=e.getTotalPaid(t[".key"]),t.dateSigned=e.$moment(t.dateSigned).format("ll"),t.paymentTerms=e.$lodash.capitalize(t.paymentTerms),t}),a=this.$lodash.filter(t,function(t){return"Not Paid"===t.lastPaidDate&&t.eventKey===e.eventKey});return this.$lodash.orderBy(a,"fullName","asc")},getFullPaidModels:function(){var e=this.$lodash.filter(this.mappedModels,function(e){return"Full"===e.paymentTerms});return e},getInstallmentModels:function(){var e=this.$lodash.filter(this.mappedModels,function(e){return"Installment"===e.paymentTerms});return e},getNotPaidModels:function(){var e=i()(this.mappedModels),t=this.$lodash.map(e,function(e){return e.paymentTerms2=e.paymentTerms?e.paymentTerms:"Not Paid",e}),a=this.$lodash.filter(t,function(e){return"Not Paid"===e.paymentTerms2});return a},getTotalPayments:function(){var e=i()(this.mappedModels),t=this.$lodash.sumBy(e,function(e){return parseFloat(e.totalPaid.replace(/,/g,""))});return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},data:function(){return{events:[],userLoggedIn:[],paymentRecords:[],schedules:[],contractSigned:[],selectOptions:[],loading:!1,filter:"",serverData:[],columns:[{name:"dateSigned",align:"left",label:"Date Signed",field:"dateSigned",sortable:!0},{name:"fullName",align:"left",label:"Full Name",field:"fullName",sortable:!0},{name:"event",align:"left",label:"Event Name",field:"eventName",sortable:!0},{name:"seasonBatch",align:"left",label:"Season & Batch",field:"seasonAndBatch"},{name:"seasonRate",align:"left",label:"Season Rate",field:"seasonRate"},{name:"mobileNumber",align:"left",label:"Mobile Number",field:"mobileNumber",sortable:!0},{name:"email",align:"left",label:"Email",sortable:!0,field:"email"}],pagination:{sortBy:null,descending:!1,page:1,rowsPerPage:0}}},methods:{getSeasonAndBatch:function(e,t){var a=this.$lodash.find(this.schedules,function(e){return e[".key"]===t});return"".concat(e,"_Batch(").concat(a.batchNumber,")")},getSeasonRate:function(e){var t=this.$lodash.find(this.schedules,function(t){return t[".key"]===e});return t.totalAmount},getLastPaidDate:function(e){try{var t=this.$lodash.filter(this.paymentRecords,function(t){return t.modelKey===e}),a=this.$lodash.orderBy(t,function(e){return new Date(e.create_time)},"desc");return a[0].create_time?this.$moment(a[0].create_time).format("ll"):"Not Paid"}catch(e){return"Not Paid"}},getTotalPaid:function(e){var t=this.$lodash.filter(this.paymentRecords,function(t){return t.modelKey===e}),a=this.$lodash.sumBy(t,function(e){return parseFloat(e.transaction_amount)}),n=parseInt(a)||0;return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},print:function(){var e=this.$lodash.map(this.columns,function(e){return{text:e.label}}),t=this.eventName;console.log("columns",e);for(var a=[],n=i()(this.mappedModels),l=0;l<n.length;l++){n[l].paymentTerms&&n[l].paymentTerms;var s=[n[l].dateSigned,n[l].fullName,n[l].eventName,n[l].seasonAndBatch,n[l].seasonRate,n[l].mobileNumber,n[l].email];a.push(s)}var o=this;console.log("mappedModels",this.mappedModels.length.toString());for(var r={pageMargins:[40,40,40,60],footer:function(e,t){return{table:{widths:"*",body:[[{text:"Date prepared: ".concat(o.$moment(new Date).format("lll")),margin:[40,0,0,0]},{text:"",alignment:"left",style:"normalText",aligment:"right"}],[{text:"Prepared By: ".concat(o.userLoggedIn[0].lastName,", ").concat(o.userLoggedIn[0].firstName),margin:[40,0,0,0]},{text:"",alignment:"left",style:"normalText",aligment:"right"}],[{text:"Approved By: ",margin:[40,0,0,0]},{text:"Page "+e.toString()+" of "+t,alignment:"right",style:"normalText",aligment:"right",margin:[0,0,40,0]}]]},layout:"noBorders"}},content:[{image:P,width:100,height:70,alignment:"center"},{text:"3rd Floor Forab Building Kamuning Quezon City",alignment:"center",margin:[5,5,5,5]},{text:"Payment Records: Not Paid - ".concat(t),alignment:"left",margin:[5,5,5,5]},{style:"tableExample",table:{headerRows:1,body:[e]},layout:{hLineWidth:function(e,t){return 0===e||e===t.table.body.length?2:1},vLineWidth:function(e,t){return 0===e||e===t.table.widths.length?2:1},hLineColor:function(e,t){return 0===e||e===t.table.body.length?"black":"gray"},vLineColor:function(e,t){return 0===e||e===t.table.widths.length?"black":"gray"}}},{text:"Not Paid Models: ".concat(this.mappedModels.length),alignment:"left",margin:[1,1,1,1]}],styles:{header:{fontSize:18,bold:!0,margin:[0,0,0,10]},tableExample:{fontSize:8,margin:[30,1,30,10]}}},d=0;d<a.length;d++)r.content[3].table.body.push(a[d]);console.log("dd",r),N.createPdf(r).download("PaymentReports_NotPaid_".concat(t))},test:function(){console.log("startp\t",this.eventName)}}},B=T,M=Object(f["a"])(B,y,v,!1,null,null,null),A=M.exports,x={components:{AllEvents:b,ByEvents:A},watch:{selectedTab:function(){}},mounted:function(){this.$bindAsArray("events",this.$database.ref("events"))},computed:{getEventName:function(){var e=this;try{var t=this.$lodash.find(this.events,function(t){return t[".key"]===e.selectedTab});return t.eventName}catch(e){return""}}},data:function(){return{selectedTab:"",events:[]}}},R=x,_=Object(f["a"])(R,n,l,!1,null,null,null);t["default"]=_.exports}}]);
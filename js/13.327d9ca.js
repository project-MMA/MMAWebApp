(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"62MV":function(e,t,o){"use strict";var s=o("wL6q"),a=o.n(s);a.a},CHgV:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{},[s("div",{staticClass:"col-12 inhouseModelsFonts"},[s("q-table",{attrs:{grid:"","hide-header":"","rows-per-page-options":[8,12,20,32,40],pagination:e.pagination,columns:e.columns,data:e.getInhouseSorted,filter:e.filter,selection:e.selection,selected:e.selected,"row-key":"modelKey"},on:{"update:pagination":function(t){e.pagination=t},"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"top-right",fn:function(t){return[s("q-btn",{staticClass:"animate-pop q-mr-sm hide-mobile",attrs:{rounded:"",color:"secondary",icon:"check_box"},on:{click:e.openModelSelectedModal}},[s("span",{staticClass:"q-ml-sm",staticStyle:{"font-size":"9px"}},[e._v("Selected Models")]),e.getSelectedRowCount?s("q-chip",{attrs:{floating:"",color:"red"}},[e._v(e._s(e.getSelectedRowCount))]):e._e()],1),s("q-search",{attrs:{"hide-underline":"",inverted:"",color:"dark"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]}},{key:"top-left",fn:function(t){return[s("q-select",{staticClass:"text-white",staticStyle:{"min-width":"200px"},attrs:{inverted:"",color:"dark",options:e.options,"stack-label":"Sort Options",clearable:"","clear-value":""},model:{value:e.porfolioSorter,callback:function(t){e.porfolioSorter=t},expression:"porfolioSorter"}})]}},{key:"item",fn:function(t){return s("div",{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 transition-generic q-my-sm",staticStyle:{"min-width":"200px","min-height":"220px","max-height":"auto","max-width":"350px"},style:t.selected?"transform: scale(0.95);":""},[s("q-card",{staticClass:"transition-generic cursor-pointer q-ma-sm",class:t.selected?"bg-teal":"",staticStyle:{"border-radius":"15px","min-width":"200px","min-height":"220px","max-height":"auto","max-width":"350px"},attrs:{color:"dark"},nativeOn:{click:function(e){t.selected=!t.selected}}},[s("q-card-media",{staticStyle:{"min-width":"200px","min-height":"220px","max-height":"220px","max-width":"350px"},style:"background-position: center;background-image: url("+t.row.photo+");background-repeat: no-repeat;background-size: cover;",attrs:{"overlay-position":"bottom"}},[s("q-card-title",{attrs:{slot:"overlay"},slot:"overlay"},[s("q-checkbox",{attrs:{color:"white"},model:{value:t.selected,callback:function(o){e.$set(t,"selected",o)},expression:"props.selected"}}),s("span",{staticClass:"capitalize"},[e._v(e._s(t.row.firstName)+" "+e._s(t.row.lastName))]),s("q-btn",{staticClass:"text-dark float-right",staticStyle:{"z-index":"1000"},attrs:{round:"",color:"white",size:"sm",icon:"account_box"},on:{click:function(o){e.showPorfolio(t.row)}}})],1)],1),s("q-card-actions",[s("div",{staticClass:"container row q-caption text-white q-my-sm"},[s("div",{staticClass:"col-8 q-pa-sm "},[e._v("\n            Height"),s("span",{staticClass:"float-right"},[e._v(e._s(t.row.height))]),s("br"),e._v("\n            Vital Stats"),s("span",{staticClass:"float-right"},[e._v(e._s(t.row.chest)+" - "+e._s(t.row.waist)+" - "+e._s(t.row.hips))]),s("br"),e._v("\n            Complexion"),s("span",{staticClass:"float-right"},[e._v(e._s(t.row.complexion))])]),s("div",{staticClass:"col-4 q-pa-sm"},[e._v("\n            Age"),s("span",{staticClass:"float-right"},[e._v(e._s(t.row.age))]),s("br"),e._v("\n            Shoe Size"),s("span",{staticClass:"float-right"},[e._v(e._s(t.row.shoeSize))]),s("br"),e._v("\n            Shirt Size"),s("span",{staticClass:"float-right"},[e._v(e._s(t.row.shirtSize))])])])])],1)],1)}}])})],1),s("q-modal",{staticClass:"inhouseModelsFonts",attrs:{"content-css":{minWidth:"100vw",minHeight:"100vh"}},model:{value:e.setCardModal,callback:function(t){e.setCardModal=t},expression:"setCardModal"}},[s("q-modal-layout",{staticClass:"text-center bg-light"},[s("q-toolbar",{staticClass:"hide-desktop",attrs:{color:"dark"}},[s("q-toolbar-title",{staticClass:"absolute-center"},[s("img",{attrs:{id:"logo_memp",alt:"Maleficent Models Academy",src:o("oLLi")}})]),s("q-btn",{staticClass:"float-right vertical-middle",attrs:{flat:"",round:"",dense:"",icon:"clear"},on:{click:function(t){e.setCardModal=!1}}})],1),s("q-toolbar",{staticClass:"hide-mobile",staticStyle:{height:"60px",opacity:".8"},attrs:{color:"black","text-color":"faded"}},[s("div",{staticClass:"container row full-width"},[s("div",{staticClass:"col-6"},[s("q-toolbar-title",[s("q-btn",{staticClass:" q-ml-xl float-left",staticStyle:{color:"#FFFFFF","text-align":"center"},attrs:{flat:""},on:{click:function(t){e.$router.push("/")}}},[s("img",{staticClass:" vertical-middle",attrs:{id:"logo_memp",alt:"Maleficent Models Academy",src:o("oLLi")}})])],1)],1),s("div",{staticClass:"col-6 row",staticStyle:{height:"100%"}},[s("div",{staticClass:"col-3 q-pt-sm"}),s("div",{staticClass:"col-3 q-pt-sm"}),s("div",{staticClass:"col-3 q-pt-sm"}),s("div",{staticClass:"col-3 q-pt-sm"},[s("q-btn",{staticClass:"float-right vertical-middle",attrs:{flat:"",round:"",dense:"",icon:"clear"},on:{click:function(t){e.setCardModal=!1}}})],1)])])]),s("div",{staticClass:"absolute-center text-center hide-desktop"},[s("div",{staticClass:" container row q-ma-sm",staticStyle:{"background-color":"rgba(255, 255, 255,0.8)","margin-top":"70px","border-radius":"25px",height:"auto",width:"90vw"}},[s("div",{staticClass:"col-12"},[s("h3",{staticClass:"q-ma-lg"},[e._v(e._s(e.getPhotoGallerySelected.firstName)+" "+e._s(e.getPhotoGallerySelected.lastName)+", "+e._s(e.getPhotoGallerySelected.age))]),s("q-carousel",{staticClass:"text-white",attrs:{color:"white","quick-nav":"",arrows:""}},e._l(e.getPhotoGallery,function(t,o){return null!==e.getPhotoGallerySelected?s("q-carousel-slide",{key:o,staticStyle:{width:"150px",height:"350px"},style:"background-position: center;background-image: url("+t.photo+");background-repeat: no-repeat;background-size: cover;"}):e._e()}))],1),s("div",{staticClass:"col-12 full-width text-left"},[s("div",{staticClass:"q-title q-my-md q-mx-xl"},[e._v("\n            Height"),s("span",{staticClass:"float-right"},[e._v(e._s(e.getPhotoGallerySelected.height))]),s("br"),e._v("\n            Vital Stats"),s("span",{staticClass:"float-right"},[e._v(e._s(e.getPhotoGallerySelected.chest)+" - "+e._s(e.getPhotoGallerySelected.waist)+" - "+e._s(e.getPhotoGallerySelected.hips))]),s("br"),e._v("\n            Complexion"),s("span",{staticClass:"float-right"},[e._v(e._s(e.getPhotoGallerySelected.complexion))]),s("br"),e._v("\n            Shoe Size"),s("span",{staticClass:"float-right"},[e._v(e._s(e.getPhotoGallerySelected.shoeSize))]),s("br"),e._v("\n            Shirt Size"),s("span",{staticClass:"float-right"},[e._v(e._s(e.getPhotoGallerySelected.shirtSize))])])])])]),s("div",{staticClass:"absolute-center row modal_size text-center q-ma-md hide-mobile q-mt-lg"},[s("div",{staticClass:" container row q-ma-md ",staticStyle:{"background-color":"rgba(255, 255, 255,0.8)","border-radius":"25px",height:"85vh",width:"70vw"}},[s("div",{staticClass:"col-7 q-pa-md"},[s("q-carousel",{staticClass:"text-white",staticStyle:{"border-radius":"15px"},attrs:{color:"white",infinite:"",autoplay:""}},[e.getSelectedGallery!==[]?s("q-carousel-slide",{staticStyle:{width:"300px",height:"380px"},style:"background-position: center;background-image: url("+e.getSelectedGallery+");background-repeat: no-repeat;background-size: cover;"}):e._e()],1),s("h3",{staticClass:"q-ma-lg"},[e._v(e._s(e.getPhotoGallerySelected.firstName)+" "+e._s(e.getPhotoGallerySelected.lastName)+", "+e._s(e.getPhotoGallerySelected.age))])],1),s("div",{staticClass:"col-5 q-pa-md bg-white row",staticStyle:{"border-radius":"25px"}},[s("div",{staticClass:"col-12"},[s("q-table",{attrs:{grid:"","hide-header":"","rows-per-page-options":[4],columns:e.galleryColumns,data:e.getPhotoGallery,pagination:e.Modelpagination,filter:e.filter,selection:e.selectionGallery,selected:e.selectedGallery,"row-key":"name"},on:{"update:pagination":function(t){e.Modelpagination=t},"update:selected":function(t){e.selectedGallery=t}},scopedSlots:e._u([{key:"item",fn:function(e){return s("div",{staticClass:"q-pa-xs col-xs-6  transition-generic",style:e.selected?"transform: scale(0.90);":""},[s("q-card",{staticClass:"transition-generic cursor-pointer",class:e.selected?"bg-grey-2 shadow-12":"",staticStyle:{"border-radius":"10px"},nativeOn:{click:function(t){e.selected=!e.selected}}},[s("q-card-media",{staticStyle:{"min-width":"100px","min-height":"150px","max-height":"100px"},style:"background-position: center;background-image: url("+e.row.photo+");background-repeat: no-repeat;background-size: cover;",attrs:{"overlay-position":"bottom"}})],1)],1)}},{key:"bottom",fn:function(e){return s("div",{staticClass:"row flex-center fit"},[s("q-btn",{staticClass:"q-mr-md",attrs:{round:"",dense:"",icon:"chevron_left",color:"dark",disable:e.isFirstPage},on:{click:e.prevPage}}),s("q-btn",{attrs:{round:"",dense:"",icon:"chevron_right",color:"dark",disable:e.isLastPage},on:{click:e.nextPage}})],1)}}])})],1),s("div",{staticClass:"col-12 full-width text-left"},[s("div",{staticClass:"q-mx-xl"},[e._v("\n            Height"),s("span",{staticClass:"float-right"},[e._v(e._s(e.getPhotoGallerySelected.height))]),s("br"),e._v("\n            Vital Stats"),s("span",{staticClass:"float-right"},[e._v(e._s(e.getPhotoGallerySelected.chest)+" - "+e._s(e.getPhotoGallerySelected.waist)+" - "+e._s(e.getPhotoGallerySelected.hips))]),s("br"),e._v("\n            Complexion"),s("span",{staticClass:"float-right"},[e._v(e._s(e.getPhotoGallerySelected.complexion))]),s("br"),e._v("\n            Shoe Size"),s("span",{staticClass:"float-right"},[e._v(e._s(e.getPhotoGallerySelected.shoeSize))]),s("br"),e._v("\n            Shirt Size"),s("span",{staticClass:"float-right"},[e._v(e._s(e.getPhotoGallerySelected.shirtSize))])])])])])])],1)],1),e.selectedModelsModal?s("q-modal",{attrs:{"content-css":{minWidth:"35vw",minHeight:"95vh"}},model:{value:e.selectedModelsModal,callback:function(t){e.selectedModelsModal=t},expression:"selectedModelsModal"}},[s("q-modal-layout",[s("q-toolbar",{staticClass:"bg-dark full-width"},[s("q-toolbar-title",[e._v("\n                Model Porfolio/s to Send\n            ")]),s("q-btn",{staticClass:"float-right vertical-middle",attrs:{flat:"",round:"",dense:"",icon:"clear"},on:{click:function(t){e.selectedModelsModal=!1}}})],1),s("q-field",{staticClass:"q-mx-lg q-mt-md",attrs:{icon:"dashboard",label:"Selected Models","label-width":"12"}},[s("q-search",{staticClass:"text-white",attrs:{icon:"search",inverted:"",color:"faded",clearable:"",placeholder:"Search name"},model:{value:e.selectSearch,callback:function(t){e.selectSearch=t},expression:"selectSearch"}}),s("q-scroll-area",{staticStyle:{width:"100%",height:"85vh"}},[e._l(e.filteredSelect,function(t){return s("q-list",{key:t[".key"],attrs:{link:"",dense:""}},[s("q-item",[s("q-item-side",{attrs:{icon:"label",color:"faded"}}),s("q-item-main",{staticClass:"capitalize q-body-1"},[e._v(e._s(t.firstName)+" "+e._s(t.middleInitial)+". "+e._s(t.lastName))]),s("q-item-side",[s("q-btn",{attrs:{icon:"close",outline:"",color:"red",push:"",rounded:"",size:"sm"},on:{click:function(o){e.UnSelect(t)}}})],1)],1)],1)}),0===e.getSelectedRowCount?s("div",{staticClass:"text-center text-faded q-display-1 q-my-lg"},[e._v("No Models Listed")]):e._e()],2)],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("q-btn",{staticClass:"full-width",attrs:{label:"Confirm Selected Models ("+e.getSelectedRowCount+")",color:"teal",size:"lg",loading:e.loading},on:{click:e.confirmPortfolio}})],1)],1)],1):e._e()],1)},a=[],l=(o("dRSK"),o("MVZn")),i=o.n(l),r=(o("INYr"),o("rGqo"),o("yt8O"),o("lSNA")),n=o.n(r),c=(o("a1Th"),o("SRfc"),o("Oyvg"),{name:"InhouseModels",mounted:function(){this.$bindAsArray("contractSigned",this.$database.ref("contractSigned")),this.$bindAsArray("schedules",this.$database.ref("event_schedules")),this.$bindAsArray("paymentRecords",this.$database.ref("payment_transactions")),this.$bindAsArray("attendance",this.$database.ref("attendance")),this.$bindAsArray("inHouseModels",this.$database.ref("inhouseModels")),this.$bindAsArray("schedules",this.$database.ref("event_schedules")),this.$bindAsArray("showcasing",this.$database.ref("showcasing"))},created:function(){this.codeShowcase=this.$route.params.id},computed:{filteredSelect:function(){var e=this;return this.selected.filter(function(t){var o=new RegExp(e.selectSearch,"i"),s=t.firstName+" "+t.lastName;return s.match(o)})},getModelInfo:function(){try{var e=this.$lodash.filter(this.contractsigned,function(e){return e.accountNumber===model.accountNumber});return e[0]}catch(e){return[]}},getModelFromShowcasing:function(){var e=this;console.log("showcasing",this.showcasing);var t=[];this.$lodash.filter(this.showcasing,function(o){return o.id===e.codeShowcase&&t.push(o.models),o});return console.log("this.models",t[0]),t[0]},getToday:function(){var e=this.$moment(new Date).format("MMM-DD-YYYY");return console.log("getToday",e.toString()),e.toString()},getInhouseSorted:function(){try{var e=this.$lodash.map(this.getModelFromShowcasing,function(e){return e.shoeSizeSearch=e.shoeSize+" shoe size",e.shirtSizeSearch=e.shirtSize+" shirt size",e.vitalStats=e.chest+"-"+e.waist+"-"+e.hips,e.runwaySearch=e.ratings.runway+" runway",e.commercialSearch=e.ratings.commercial+" commercial",e.photoshootSearch=e.ratings.photoshoot+" photoshoot",e});if(null===this.porfolioSorter)return e;if("height_asc"===this.porfolioSorter||"height_desc"===this.porfolioSorter){var t=this.returnSortedHeight(e);return t}if("age_asc"===this.porfolioSorter||"age_desc"===this.porfolioSorter){var o=this.returnSortedAge(e);return o}if("runway_top"===this.porfolioSorter||"commercial_top"===this.porfolioSorter||"photoshoot_top"===this.porfolioSorter){var s=this.returnSortedRatings(e);return s}return e}catch(e){return[]}},getModelInfo2:function(){try{var e=this.$lodash.filter(this.contractSigned,function(e){return e.name=e.firstName,e});return console.log(e),e}catch(e){return 0}},modelActivityAttended:function(){var e=this,t=new Array;this.$lodash.map(this.attendance,function(o){e.$lodash.map(o,function(e,s,a){if(".key"!==s){var l,i=(l={},n()(l,".key",s),n()(l,"models",o[s].present),l);t.push(i)}})});for(var o=this.model[".key"],s=new Array,a=0;a<t.length;a++)for(var l=this.$lodash.keys(t[a].models),i=0;i<l.length;i++)o===l[i]&&s.push(t[a]);var r=this.$lodash.map(s,function(t){return t.startDate=e.getActSchedule(t[".key"]).startDate,t}),c=this.$lodash.orderBy(r,function(e){return new Date(e.startDate)},"asc");return c},isAlreadyInhouse:function(){var e=this,t=this.$lodash.findIndex(this.inHouseModels,function(t){return t[".key"]===e.model[".key"]});return!(t<=-1)},getAttendancePresents:function(){for(var e=this.attendance,t=new Array,o=0;o<e.length;o++)for(var s=this.$lodash.keys(e[o]),a=0;a<s.length;a++)t.push(e[o][s[a]].present);return this.$lodash.compact(t)},getSelectedRowCount:function(){return console.log("selectedL",this.selected.length),console.log("selectedL",this.selected),console.log("gallery",this.selectedGallery),this.selected.length},get1st:function(){try{var e=this.$lodash.filter(this.getModelFromShowcasing,function(e){return e.name=e.firstName,e});return console.log(e),e[0][".key"]}catch(e){return 0}},getModelBatch:function(){var e=this;try{var t=this.$lodash.filter(this.schedules,function(t){return t[".key"]===e.model.batchKey})[0];return t.batchNumber}catch(e){return""}},getPhotoGallerySelected:function(){try{var e=this.selectedModel;console.log("model",this.selectedModel);var t=this.$lodash.filter(this.getModelFromShowcasing,function(t){return t.modelKey===e.modelKey}),o=[];return this.$lodash.forEach(t[0].photoGallery,function(e){o.push(e)}),console.log("s",t),t[0]}catch(e){return[]}},getPhotoGallery:function(){try{var e=this.selectedModel;console.log("model",this.selectedModel);var t=this.$lodash.filter(this.getModelFromShowcasing,function(t){return t.modelKey===e.modelKey}),o=[];return this.$lodash.forEach(t[0].photoGallery,function(e){o.push(e)}),console.log("s",t),o}catch(e){return[]}},getSelectedGallery:function(){try{return this.selectedGallery===[]?"assets/gallerydefault.png":this.selectedGallery[0].photo}catch(e){return"assets/gallerydefault.png"}}},data:function(){var e;return e={codeShowcase:"",showcasing:[],loading:!1,selectSearch:"",selectedModelsModal:!1,selectedGallery:[],Modelpagination:{sortBy:null,descending:!1,page:1,rowsPerPage:4},newShowcasing:{clientName:"",dateExpires:"",link:"",models:[],selected:[],id:""},selection:"multiple",selectionGallery:"single",selected:[],schedules:[],inHouseModels:[],attendance:[],paymentRecords:[],isEdit:!1,setCardModal:!1,selectedModel:{},model:{ratings:{commercial:0,photoshoot:0,runway:0}},viewModelModal:!1},n()(e,"schedules",[]),n()(e,"contractSigned",[]),n()(e,"filter",""),n()(e,"tableLoading",!1),n()(e,"galleryColumns",[{name:"name",required:!0,label:"Name",align:"left",field:"name",sortable:!0},{name:"photo",required:!0,label:"photo",align:"left",field:"photo"}]),n()(e,"columns",[{name:"lastName",required:!0,label:"Last Name",align:"left",field:"lastName",sortable:!0},{name:"firstName",required:!0,label:"First Name",align:"left",field:"firstName",sortable:!0},{name:"event",required:!0,label:"Event",align:"left",field:"age",sortable:!0},{name:"season",required:!0,label:"Season",align:"left",field:"shirtSizeSearch",sortable:!0},{name:"batch",required:!0,label:"Batch",align:"left",field:"vitalStats",sortable:!0},{name:"gender",required:!0,label:"Gender",align:"left",field:"height",sortable:!0},{name:"fbEmail",required:!0,label:"Facebook Email",align:"left",field:"complexion",sortable:!0},{name:"fbEmqwail",required:!0,label:"Faceboqwok Email",align:"left",field:"shoeSizeSearch",sortable:!0},{name:"runwaySearch",required:!0,label:"runwaySearch Email",align:"left",field:"runwaySearch",sortable:!0},{name:"commercialSearch",required:!0,label:"commercialSearch Email",align:"left",field:"commercialSearch",sortable:!0},{name:"photoshootSearch",required:!0,label:"photoshootSearch Email",align:"left",field:"photoshootSearch",sortable:!0},{name:"actions",label:"Actions",align:"center",sortable:!1}]),n()(e,"pagination",{sortBy:null,descending:!1,page:1,rowsPerPage:8}),n()(e,"porfolioSorter",""),n()(e,"options",[{label:"Height (ASC)",value:"height_asc"},{label:"Height (DESC)",value:"height_desc"},{label:"Age (ASC)",value:"age_asc"},{label:"Age (DESC)",value:"age_desc"},{label:"Highest to Lowest (Runway)",value:"runway_top"},{label:"Highest to Lowest (Commercial)",value:"commercial_top"},{label:"Highest to Lowest (Photoshoot)",value:"photoshoot_top"}]),e},methods:{rowClick:function(e){this.model=e,console.log("p",this.model),this.viewModelModal=!this.viewModelModal},getBatchNumber:function(e){try{var t=e.row.batchKey,o=this.$lodash.filter(this.schedules,function(e){return e[".key"]===t})[0];return o.batchNumber}catch(e){return""}},saveChange:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you want to save change?",ok:"Save",cancel:"Cancel"}).then(function(){var t=i()({},e.model),o=t[".key"];delete t[".key"],e.$database.ref("contractSigned").child(o).update(t).then(function(){e.$q.notify({message:"Model Successfully change",type:"positive"}),e.isEdit=!1}).catch(function(t){e.$q.notify({message:"An error found, ".concat(t),type:"negative"}),e.isEdit=!1})}).catch(function(){})},copyToInhouse:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you want to copy in Inhouse models?",ok:"Save",cancel:"Cancel"}).then(function(){var t=i()({},e.model),o=t[".key"];delete t[".key"],e.$database.ref("inhouseModels").child(o).set(t).then(function(){e.$q.notify({message:"Model Successfully copy to inhouse",type:"positive"})}).catch(function(t){e.$q.notify({message:"An error occur"+t,type:"negative"})})}).catch(function(){})},getActSchedule:function(e){for(var t=0;t<this.schedules.length;t++)for(var o=0;o<this.schedules[t].activities.length;o++)if(this.schedules[t].activities[o].id===e)return this.schedules[t].activities[o]},test:function(){try{var e=this.selectedModel;console.log("model",this.selectedModel);var t=this.$lodash.filter(this.inHouseModels,function(t){return t[".key"]===e[".key"]}),o=[];return this.$lodash.forEach(t[0].photoGallery,function(e){o.push(e)}),console.log("s",t),t}catch(e){return[]}},getModelsPaymentTransactions:function(e){try{var t=e,o=this.$lodash.filter(this.paymentRecords,function(e){return e.modelKey===t[".key"]});return console.log("modelpayments",o),o}catch(e){return console.log("error",e),[]}},showPorfolio:function(e){this.setCardModal=!0,this.selectedModel=e,this.selectedGallery=[this.getPhotoGallery[0]],console.log("this.selectedModel",this.selectedModel)},returnSortedHeight:function(e){try{if("height_asc"===this.porfolioSorter){var t=this.$lodash.orderBy(e,"height","asc");return console.log("height_asc",t),t}var o=this.$lodash.orderBy(e,"height","desc");return console.log("height_desc",o),o}catch(e){return[]}},returnSortedAge:function(e){try{if("age_asc"===this.porfolioSorter){var t=this.$lodash.orderBy(e,"age","asc");return console.log("age_asc",t),t}var o=this.$lodash.orderBy(e,"age","desc");return console.log("age_desc",o),o}catch(e){return[]}},returnSortedRatings:function(e){try{if("runway_top"===this.porfolioSorter){var t=this.$lodash.orderBy(e,"ratings.runway","desc");return console.log("runway_top",t),t}if("commercial_top"===this.porfolioSorter){var o=this.$lodash.orderBy(e,"ratings.commercial","desc");return console.log("commercial_top",o),o}var s=this.$lodash.orderBy(e,"ratings.photoshoot","desc");return console.log("photoshoot_top",s),s}catch(e){return[]}},openModelSelectedModal:function(){this.selectedModelsModal=!0,this.newShowcasing.link="https://maleficentfrontpage.000webhostapp.com/#/porfolio/"+id},UnSelect:function(e){var t=e,o=this.$lodash.filter(this.selected,function(e){if(e[".key"]!==t[".key"])return e});this.selected=o},confirmPortfolio:function(){var e=this;try{if(this.loading=!0,0===this.selected.length)this.$q.notify({message:"No Model Selected",type:"negative",color:"negative",textColor:"white",icon:"warning"});else{var t=this.$lodash.find(this.showcasing,function(e){return e[".key"]}),o=this.$lodash.map(this.selected,function(e){return e}),s=t[".key"];console.log("skey",s),console.log("porfolio",o),this.$database.ref("showcasing/"+s+"/selected/").set(o).then(function(){e.$q.notify({message:"Showcasing Details Saved",type:"positive",color:"positive",textColor:"white",icon:"info"}),e.loading=!1,e.selected=[]}).catch(function(t){console.log(t),e.$q.notify({message:"Showcasing Details Error on Saving",type:"negative",color:"negative",textColor:"white",icon:"warning"}),e.loading=!1})}}catch(e){console.log(e),this.$q.notify({message:"Error Occured ".concat(e),type:"negative",color:"negative",textColor:"white",icon:"warning"}),this.loading=!1}}}}),d=c,h=(o("62MV"),o("KHd+")),u=Object(h["a"])(d,s,a,!1,null,null,null);t["default"]=u.exports},oLLi:function(e,t,o){e.exports=o.p+"img/memp.f834c14.png"},wL6q:function(e,t,o){}}]);
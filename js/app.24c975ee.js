(function(e){function o(o){for(var n,a,s=o[0],c=o[1],l=o[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(o);while(f.length)f.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,o=0;o<i.length;o++){for(var t=i[o],n=!0,s=1;s<t.length;s++){var c=t[s];0!==r[c]&&(n=!1)}n&&(i.splice(o--,1),e=a(a.s=t[0]))}return e}var n={},r={app:0},i=[];function a(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,o,t){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)a.d(t,n,function(o){return e[o]}.bind(null,n));return t},a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="/TennisArixi/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=o,s=s.slice();for(var l=0;l<s.length;l++)o(s[l]);var u=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"05b0":function(e,o,t){},"1f96":function(e,o,t){"use strict";t("05b0")},2416:function(e,o,t){},"47a3":function(e,o,t){},"56d7":function(e,o,t){"use strict";t.r(o),t.d(o,"vue",(function(){return oe}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-row",{staticClass:"shrink my-4",attrs:{justify:"center",align:"center"}},[n("v-img",{attrs:{alt:"Vue logo",contain:"",src:t("cf05"),width:"128",height:"128","aspect-ratio":"1"}})],1),n("Home")],1)],1)},i=[],a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.message))]),t("v-row",{staticClass:"mt-2 shrink",attrs:{justify:"center",align:"center"}},[t("v-spacer"),e._l(e.campi,(function(o,n){return t("div",{key:n},[t("v-col",{attrs:{"align-self":o.align}},[t("v-btn",{attrs:{color:o.colore,depressed:"",outlined:o.show,rounded:""},on:{click:function(o){return e.selCampo(n)}}},[e._v(" "+e._s(o.text)+" ")])],1)],1)})),t("v-spacer")],2),t("v-row",{staticClass:"mt-6",attrs:{justify:"center",align:"center"}},[t("v-spacer"),t("seleziona-giorno",{directives:[{name:"show",rawName:"v-show",value:0===e.campoSelezionato,expression:"campoSelezionato===0"}],on:{selezionato:e.datiGiornoSelezionato0}}),t("seleziona-giorno",{directives:[{name:"show",rawName:"v-show",value:1===e.campoSelezionato,expression:"campoSelezionato===1"}],on:{selezionato:e.datiGiornoSelezionato1}}),t("v-spacer")],1),t("v-row",{staticClass:"mt-8",attrs:{justify:"center"}},[t("v-spacer"),t("v-col",{attrs:{align:"center"}},e._l(e.prenotazioni,(function(o,n,r){return t("v-row",{directives:[{name:"show",rawName:"v-show",value:e.riepilogoCampi[n],expression:"riepilogoCampi[proprieta]"}],key:n,attrs:{justify:"center"}},[t("prenotazione",{attrs:{proprieta:e.campi[r],campo:o}})],1)})),1),t("v-col",{attrs:{"align-self":"center"}},[t("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.mostraBtnPrenotazione,expression:"mostraBtnPrenotazione"}],attrs:{color:"success"},on:{click:e.prenotaClick}},[e._v(" Prenota ")])],1),t("v-spacer")],1)],1)},s=[],c=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("v-container",{staticClass:"mx-2 overflow-y-auto"},[t("v-row",{staticClass:"mx-2",attrs:{justify:"center",align:"center"}},e._l(e.giorni,(function(o,n){return t("v-col",{key:n,attrs:{align:"center","max-width":"64"}},[t("v-card",{staticClass:"px-1",attrs:{color:o.colore,"max-width":"64","min-width":"64"},on:{click:function(o){return e.seleziona(n)}}},[t("v-card-text",[t("v-row",{attrs:{justify:"center"}},[e._v(" "+e._s(e.weekday[o.sett])+" ")]),t("v-row",{attrs:{justify:"center"}},[t("strong",[e._v(" "+e._s(o.giorno)+" ")])]),t("v-row",{attrs:{justify:"center"}},[e._v(" "+e._s(e.mese[o.mese])+" ")])],1)],1)],1)})),1)],1),t("seleziona-ora",{directives:[{name:"show",rawName:"v-show",value:e.giornoSelezionato,expression:"giornoSelezionato"}],attrs:{selezionato:e.selezionato,maxGiorno:e.maxGiorni},on:{orarioSelezionato:e.orarioSelezionato}})],1)},l=[],u=t("2f62");n["a"].use(u["a"]);var p=new u["a"].Store({state:{prenotazioni:{1:{},2:{}},datiGiorni:{},mese:["GEN","FEB","MAR","APR","MAG","GIU","LUG","AGO","SET","OTT","NOV","DIC"],weekday:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],orari:["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"]},mutations:{addPrenotazione:function(e,o){var t=e.prenotazioni[o.campo];if(t){var r=o.giorno.giorno;t[r]||n["a"].set(t,r,o.orari),t[r]=o.orari,e.datiGiorni[r]=o.giorno}}},actions:{},modules:{},getters:{prenotazioni:function(e){return e.prenotazioni},weekday:function(e){return e.weekday},mese:function(e){return e.mese},orari:function(e){return e.orari},datiGiorni:function(e){return function(o){return e.datiGiorni[o]}}}}),f=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"pa-4"},[t("v-chip-group",{attrs:{"active-class":"primary--text",column:"",multiple:""},model:{value:e.selezionati[e.selezionato],callback:function(o){e.$set(e.selezionati,e.selezionato,o)},expression:"selezionati[selezionato]"}},e._l(e.orari,(function(o){return t("v-chip",{key:o},[e._v(" "+e._s(o)+" ")])})),1)],1)},d=[],m=t("2909"),v=(t("a9e3"),t("4e827"),{name:"selezionaGiorno",props:{selezionato:Number,maxGiorni:Number},data:function(){return{selezionati:[],orari:p.getters.orari}},watch:{selezionati:function(){var e=Object(m["a"])(this.selezionati[this.selezionato]).sort();this.$emit("orarioSelezionato",e)}},mounted:function(){this.calcolaGiorni()},methods:{calcolaGiorni:function(){var e=new Date;e.setDate(e.getDate()-1);for(var o=0;o<this.maxGiorni;o++){e.setDate(e.getDate()+1);var t={mese:e.getMonth(),sett:e.getDay(),giorno:e.getDate(),colore:"white"};this.giorni.push(t),this.selezionati.push([])}}}}),h=v,g=(t("b60a"),t("2877")),w=t("6544"),z=t.n(w),b=t("cc20"),y=t("ef9a"),x=Object(g["a"])(h,f,d,!1,null,"06beb355",null),_=x.exports;z()(x,{VChip:b["a"],VChipGroup:y["a"]});var C={name:"selezionaGiorno",data:function(){return{giorni:[],maxGiorni:10,mese:p.getters.mese,weekday:p.getters.weekday,selezionato:0,giornoSelezionato:!1}},components:{"seleziona-ora":_},mounted:function(){this.calcolaGiorni()},methods:{calcolaGiorni:function(){var e=new Date;e.setDate(e.getDate()-1);for(var o=0;o<this.maxGiorni;o++){e.setDate(e.getDate()+1);var t={mese:e.getMonth(),sett:e.getDay(),giorno:e.getDate(),colore:"white"};this.giorni.push(t)}},seleziona:function(e){this.giorni[this.selezionato].colore=void 0,this.selezionato=e,this.giorni[this.selezionato].colore="blue lighten-2",this.giornoSelezionato=!0},orarioSelezionato:function(e){this.$emit("selezionato",{giorno:this.giorni[this.selezionato],orari:e})}}},k=C,S=(t("a8cb"),t("b0af")),j=t("99d9"),G=t("62ad"),O=t("a523"),V=t("0fd9"),P=Object(g["a"])(k,c,l,!1,null,"dcdd29ee",null),D=P.exports;z()(P,{VCard:S["a"],VCardText:j["a"],VCol:G["a"],VContainer:O["a"],VRow:V["a"]});var N=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-card",{staticClass:"mb-2",attrs:{width:"100%",color:e.proprieta.colorCard,dark:""}},[t("v-card-title",[e._v(e._s(e.proprieta.text)+" "+e._s("campo"))]),t("v-card-text",e._l(e.testo,(function(o,n){return t("v-row",{key:n,staticClass:"px-2"},[e._v(" "+e._s(o)+" ")])})),1)],1)},A=[],T=t("b85c"),M={name:"daPrenotare",props:{proprieta:Object,campo:Object},data:function(){return{mese:p.getters.mese,weekday:p.getters.weekday,orari:p.getters.orari}},computed:{testo:function(){var e=[];for(var o in this.campo){var t,n=p.getters.datiGiorni(o),r=this.weekday[n.sett],i=this.mese[n.mese],a=r+" "+o+" "+i.toLowerCase(),s=Object(T["a"])(this.campo[o]);try{for(s.s();!(t=s.n()).done;){var c=t.value;console.log(c),e.push(a+" dalle "+this.orari[c]+" alle "+this.orari[c+1])}}catch(l){s.e(l)}finally{s.f()}}return e}},methods:{}},B=M,E=(t("1f96"),Object(g["a"])(B,N,A,!1,null,"5d445828",null)),$=E.exports;z()(E,{VCard:S["a"],VCardText:j["a"],VCardTitle:j["b"],VRow:V["a"]});var R={name:"HelloWorld",data:function(){return{message:"Prenota il campo",campi:[{text:"Vecchio",colore:"primary",show:!0,colorCard:"green"},{text:"Nuovo",colore:"primary",show:!0,colorCard:"#1F7087"}],campoSelezionato:null,riepilogoCampi:{},mostraBtnPrenotazione:!1}},components:{"seleziona-giorno":D,prenotazione:$},watch:{prenotazioni:{deep:!0,handler:function(){for(var e in this.mostraBtnPrenotazione=!1,this.prenotazioni){for(var o in this.riepilogoCampi[e]=!1,this.prenotazioni[e]){var t=this.prenotazioni[e][o];if(t&&t.length>0){this.riepilogoCampi[e]=!0;break}}this.mostraBtnPrenotazione=this.mostraBtnPrenotazione||this.riepilogoCampi[e]}}}},computed:{prenotazioni:function(){return p.getters.prenotazioni}},methods:{selCampo:function(e){null!==this.campoSelezionato&&(this.campi[this.campoSelezionato].show=!0),this.campoSelezionato=e,this.campi[this.campoSelezionato].show=!1},datiGiornoSelezionato0:function(e){e.campo=1,p.commit("addPrenotazione",e)},datiGiornoSelezionato1:function(e){e.campo=2,p.commit("addPrenotazione",e)},prenotaClick:function(){console.log("Prenotato")}}},F=R,H=(t("92de"),t("8336")),I=t("2fa4"),L=Object(g["a"])(F,a,s,!1,null,"2c1fb0e7",null),J=L.exports;z()(L,{VBtn:H["a"],VCol:G["a"],VRow:V["a"],VSpacer:I["a"]});var U={name:"App",components:{Home:J}},q=U,W=(t("5c0b"),t("7496")),K=t("adda"),Q=Object(g["a"])(q,r,i,!1,null,null,null),X=Q.exports;z()(Q,{VApp:W["a"],VImg:K["a"],VRow:V["a"]});var Y=t("9483");Object(Y["a"])("".concat("/TennisArixi/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Z=t("f309");n["a"].use(Z["a"]);var ee=new Z["a"]({});n["a"].config.productionTip=!1;var oe=new n["a"]({store:p,vuetify:ee,render:function(e){return e(X)}}).$mount("#app")},"5c0b":function(e,o,t){"use strict";t("9c0c")},"92de":function(e,o,t){"use strict";t("935b")},"935b":function(e,o,t){},"9c0c":function(e,o,t){},a8cb:function(e,o,t){"use strict";t("2416")},b60a:function(e,o,t){"use strict";t("47a3")},cf05:function(e,o,t){e.exports=t.p+"img/logo.06f93e69.png"}});
//# sourceMappingURL=app.24c975ee.js.map
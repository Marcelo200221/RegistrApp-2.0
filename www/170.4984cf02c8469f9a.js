"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[170],{2957:(h,r,i)=>{i.d(r,{G:()=>s});const s={FRONT:"front",BACK:"back"}},170:(h,r,i)=>{i.r(r),i.d(r,{LectorQRPageModule:()=>S});var l=i(6814),d=i(95),s=i(3582),u=i(3044),f=i(5861),g=i(8162),v=i(2726);i(2957);const p=(0,v.fo)("BarcodeScanner",{web:()=>i.e(7606).then(i.bind(i,7606)).then(n=>new n.BarcodeScannerWeb)});var t=i(6689),_=i(189),E=i(6406);const T=["verVista"],A=["videoElement"],R=function(n){return{"hide-result":n}};function P(n,C){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",10)(2,"ion-button",11),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.scanQRCode())}),t._uU(3,"Escanea el codigo de tu clase"),t.qZA(),t.TgZ(4,"div",12),t._UZ(5,"video",13,14),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngClass",t.VKq(1,R,e.isScanning))}}function Q(n,C){if(1&n&&t._UZ(0,"ion-img",16),2&n){const e=t.oxw(2);t.Q6J("src",e.cameraImage)}}function D(n,C){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"ion-card")(2,"ion-card-content"),t.YNc(3,Q,1,1,"ion-img",15),t.TgZ(4,"ion-button",11),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.takePicture())}),t._uU(5,"Abrir c\xe1mara"),t.qZA()()()()}if(2&n){const e=t.oxw();t.Udp("display",e.isVisible?"block":"none"),t.xp6(3),t.Q6J("ngIf",e.cameraImage)}}const I=[{path:"",component:(()=>{class n{constructor(e,o,a){this.storage=e,this.route=o,this.navCtrl=a,this.qrResult="",this.selectedTab="",this.isScanning=!1,this.nombre="",this.isVisible=!0,this.isVisible=!1,this.route.queryParams.subscribe(c=>{this.nombre=c.username})}ngOnInit(){console.log(this.nombre)}takePicture(){var e=this;return(0,f.Z)(function*(){const o=yield g.V1.getPhoto({quality:100,allowEditing:!0,resultType:g.dk.Uri,direction:g.GW.Front});e.cameraImage=o.webPath,e.navCtrl.navigateForward("/clase",{queryParams:{photo:e.cameraImage}}),console.log("Imagen capturada:",o.webPath),e.navCtrl.navigateForward("/clase")})()}segmentChanged(e){this.selectedTab=e.detail.value}scanQRCode(){var e=this;return(0,f.Z)(function*(){const o=yield p.startScan();if(o.hasContent){console.log("Contenido del c\xf3digo QR:",o.content),e.qrResult=o.content;const a=e.qrResult.split(",");e.storage.setvalue("Profesor",a),a&&(e.isVisible=!0)}else console.log("No se detect\xf3 ning\xfan c\xf3digo QR")})()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(_.V),t.Y36(u.gz),t.Y36(E.SH))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-lector-qr"]],viewQuery:function(o,a){if(1&o&&(t.Gf(T,5),t.Gf(A,7)),2&o){let c;t.iGM(c=t.CRH())&&(a.verVista=c.first),t.iGM(c=t.CRH())&&(a.videoElement=c.first)}},decls:19,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"qr"],["value","default",3,"ngModel","ionChange","ngModelChange"],["value","lectorQr"],["value","selfie"],[4,"ngIf"],[3,"display",4,"ngIf"],["id","container",1,"ion-padding"],["expand","full",3,"click"],["id","videoContainer",3,"ngClass"],["autoplay","true"],["videoElement",""],[3,"src",4,"ngIf"],[3,"src"]],template:function(o,a){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Ingresa a tu clase"),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t._uU(8,"Ingresa a tu clase"),t.qZA()()(),t.TgZ(9,"ion-content",4)(10,"ion-segment",5),t.NdJ("ionChange",function(m){return a.segmentChanged(m)})("ngModelChange",function(m){return a.selectedTab=m}),t.TgZ(11,"ion-segment-button",6)(12,"ion-label"),t._uU(13,"Lector QR"),t.qZA()(),t.TgZ(14,"ion-segment-button",7)(15,"ion-label"),t._uU(16,"Selfie"),t.qZA()()(),t.YNc(17,P,7,3,"div",8),t.YNc(18,D,6,3,"div",9),t.qZA()()),2&o&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(6),t.Q6J("ngModel",a.selectedTab),t.xp6(7),t.Q6J("ngIf","lectorQr"==a.selectedTab),t.xp6(1),t.Q6J("ngIf","selfie"==a.selectedTab))},dependencies:[l.mk,l.O5,d.JJ,d.On,s.YG,s.PM,s.FN,s.W2,s.Gu,s.Xz,s.Q$,s.cJ,s.GO,s.wd,s.sr,s.QI],styles:[".ion-padding[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:60%;transform:translateY(-50%)}"]})}return n})()}];let O=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(I),u.Bz]})}return n})(),S=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[l.ez,d.u5,s.Pc,O]})}return n})()}}]);
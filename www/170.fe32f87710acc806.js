"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[170],{2957:(m,c,e)=>{e.d(c,{G:()=>a});const a={FRONT:"front",BACK:"back"}},170:(m,c,e)=>{e.r(c),e.d(c,{LectorQRPageModule:()=>D});var r=e(6814),g=e(95),a=e(3582),l=e(3044),C=e(5861),u=e(8162),E=e(2726);e(2957);const f=(0,E.fo)("BarcodeScanner",{web:()=>e.e(7606).then(e.bind(e,7606)).then(n=>new n.BarcodeScannerWeb)});var t=e(6689),h=e(6406);const A=["videoElement"],R=function(n){return{"hide-result":n}},p=[{path:"",component:(()=>{class n{constructor(s,o){this.route=s,this.navCtrl=o,this.qrResult="",this.isScanning=!1,this.nombre="",this.route.queryParams.subscribe(i=>{this.nombre=i.username})}ngOnInit(){console.log(this.nombre)}takePicture(){return(0,C.Z)(function*(){const s=yield u.V1.getPhoto({quality:100,allowEditing:!0,resultType:u.dk.Uri,direction:u.GW.Front});console.log("Imagen capturada:",s.webPath)})()}scanQRCode(){var s=this;return(0,C.Z)(function*(){const o=yield f.startScan();if(o.hasContent){console.log("Contenido del c\xf3digo QR:",o.content),s.qrResult=o.content;const i=s.qrResult.split(",");localStorage.setItem("Profesor",JSON.stringify(i)),s.navCtrl.navigateForward("/clase"),s.takePicture()}else console.log("No se detect\xf3 ning\xfan c\xf3digo QR")})()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(l.gz),t.Y36(h.SH))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-lector-qr"]],viewQuery:function(o,i){if(1&o&&t.Gf(A,7),2&o){let d;t.iGM(d=t.CRH())&&(i.videoElement=d.first)}},decls:16,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"qr"],["id","container",1,"ion-padding"],["expand","full",3,"click"],["id","videoContainer",3,"ngClass"],["autoplay","true"],["videoElement",""]],template:function(o,i){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Ingresa a tu clase"),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t._uU(8,"Ingresa a tu clase"),t.qZA()()(),t.TgZ(9,"ion-content",4)(10,"div",5)(11,"ion-button",6),t.NdJ("click",function(){return i.scanQRCode()}),t._uU(12,"Escanea el codigo de tu clase"),t.qZA(),t.TgZ(13,"div",7),t._UZ(14,"video",8,9),t.qZA()()()()),2&o&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(9),t.Q6J("ngClass",t.VKq(3,R,i.isScanning)))},dependencies:[r.mk,a.YG,a.W2,a.Gu,a.wd,a.sr],styles:[".ion-padding[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:60%;transform:translateY(-50%)}"]})}return n})()}];let P=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(p),l.Bz]})}return n})(),D=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[r.ez,g.u5,a.Pc,P]})}return n})()}}]);
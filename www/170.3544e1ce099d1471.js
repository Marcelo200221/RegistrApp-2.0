"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[170],{2957:(C,c,s)=>{s.d(c,{G:()=>i});const i={FRONT:"front",BACK:"back"}},170:(C,c,s)=>{s.r(c),s.d(c,{LectorQRPageModule:()=>D});var l=s(6814),d=s(95),i=s(6728),u=s(3044),g=s(5861),h=s(2726);s(2957);const v=(0,h.fo)("BarcodeScanner",{web:()=>s.e(7606).then(s.bind(s,7606)).then(o=>new o.BarcodeScannerWeb)});var t=s(6689),f=s(189),m=s(4414);const E=["verVista"],A=["videoElement"],R=function(o){return{"hide-result":o}},p=[{path:"",component:(()=>{class o{constructor(n,e,a){this.storage=n,this.route=e,this.navCtrl=a,this.loggedInUser=null,this.registerUser=null,this.qrResult="",this.selectedTab="",this.isScanning=!1,this.nombre="",this.isVisible=!0,this.route.queryParams.subscribe(r=>{this.nombre=r.username})}ngOnInit(){var n=this;return(0,g.Z)(function*(){yield n.storage.getvalue("Sesion de usuario"),yield n.storage.getvalue("Nuevo usuario"),console.log(n.nombre);const e=yield n.storage.getvalue("Nuevo usuario"),a=yield n.storage.getvalue("Sesion de usuario");console.log(a),a&&a.Usuario==e.Nombre_Usuario&&a.Contrase\u00f1a==e.Clave?n.loggedInUser=a:n.navCtrl.navigateForward("/daccess")})()}scanQRCode(){var n=this;return(0,g.Z)(function*(){try{n.isScanning=!0;const e=yield v.startScan();if(e.hasContent){console.log("Contenido del c\xf3digo QR:",e.content),v.stopScan(),n.qrResult=e.content;const a=n.qrResult.split(",");n.storage.setvalue("Profesor",a),n.navCtrl.navigateForward("/clase")}else console.log("No se detect\xf3 ning\xfan c\xf3digo QR")}catch(e){console.error("No se pudo iniciar el escaner",e)}})()}volver(){this.navCtrl.navigateBack("/login")}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(f.V),t.Y36(u.gz),t.Y36(m.SH))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-lector-qr"]],viewQuery:function(e,a){if(1&e&&(t.Gf(E,5),t.Gf(A,7)),2&e){let r;t.iGM(r=t.CRH())&&(a.verVista=r.first),t.iGM(r=t.CRH())&&(a.videoElement=r.first)}},decls:19,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"click"],[1,"qr"],["id","container",1,"ion-padding"],["expand","full",3,"click"],["id","videoContainer",3,"ngClass"],["autoplay","true"],["videoElement",""]],template:function(e,a){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Ingresa a tu clase"),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t._uU(8,"Ingresa a tu clase"),t.qZA()()(),t.TgZ(9,"ion-item")(10,"ion-button",4),t.NdJ("click",function(){return a.volver()}),t._uU(11,"Volver"),t.qZA()(),t.TgZ(12,"ion-content",5)(13,"div",6)(14,"ion-button",7),t.NdJ("click",function(){return a.scanQRCode()}),t._uU(15,"Escanea el codigo de tu clase"),t.qZA(),t.TgZ(16,"div",8),t._UZ(17,"video",9,10),t.qZA()()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(12),t.Q6J("ngClass",t.VKq(3,R,a.isScanning)))},dependencies:[l.mk,i.YG,i.W2,i.Gu,i.Ie,i.wd,i.sr],styles:[".ion-padding[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:60%;transform:translateY(-50%)}"]})}return o})()}];let S=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(p),u.Bz]})}return o})(),D=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[l.ez,d.u5,i.Pc,S]})}return o})()}}]);
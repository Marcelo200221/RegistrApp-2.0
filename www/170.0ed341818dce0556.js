"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[170],{2957:(C,c,a)=>{a.d(c,{G:()=>r});const r={FRONT:"front",BACK:"back"}},170:(C,c,a)=>{a.r(c),a.d(c,{LectorQRPageModule:()=>S});var l=a(6814),g=a(95),r=a(3582),u=a(3044),v=a(5861),h=a(2726);a(2957);const d=(0,h.fo)("BarcodeScanner",{web:()=>a.e(7606).then(a.bind(a,7606)).then(o=>new o.BarcodeScannerWeb)});var t=a(6689),f=a(189),m=a(6406);const E=["verVista"],A=["videoElement"],R=function(o){return{"hide-result":o}},p=[{path:"",component:(()=>{class o{constructor(e,n,s){this.storage=e,this.route=n,this.navCtrl=s,this.loggedInUser=null,this.registerUser=null,this.qrResult="",this.selectedTab="",this.isScanning=!1,this.nombre="",this.isVisible=!0,this.route.queryParams.subscribe(i=>{this.nombre=i.username})}ngOnInit(){var e=this;return(0,v.Z)(function*(){yield e.storage.getvalue("Sesion de usuario"),yield e.storage.getvalue("Nuevo usuario"),console.log(e.nombre);const n=yield e.storage.getvalue("Nuevo usuario"),s=yield e.storage.getvalue("Sesion de usuario");console.log(s),s&&s.Usuario==n.Nombre_Usuario&&s.Contrase\u00f1a==n.Clave?e.loggedInUser=s:e.navCtrl.navigateForward("/daccess")})()}scanQRCode(){var e=this;return(0,v.Z)(function*(){try{if((yield d.checkPermission()).granted){const s=yield d.startScan();if(s.hasContent){console.log("Contenido del c\xf3digo QR:",s.content),d.stopScan(),e.qrResult=s.content;const i=e.qrResult.split(",");e.storage.setvalue("Profesor",i),e.navCtrl.navigateForward("/clase")}else console.log("No se detect\xf3 ning\xfan c\xf3digo QR")}}catch(n){console.error("No se pudo iniciar el escaner",n)}})()}volver(){this.navCtrl.navigateBack("/login")}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(f.V),t.Y36(u.gz),t.Y36(m.SH))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-lector-qr"]],viewQuery:function(n,s){if(1&n&&(t.Gf(E,5),t.Gf(A,7)),2&n){let i;t.iGM(i=t.CRH())&&(s.verVista=i.first),t.iGM(i=t.CRH())&&(s.videoElement=i.first)}},decls:19,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"click"],[1,"qr"],["id","container",1,"ion-padding"],["expand","full",3,"click"],["id","videoContainer",3,"ngClass"],["autoplay","true"],["videoElement",""]],template:function(n,s){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Ingresa a tu clase"),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t._uU(8,"Ingresa a tu clase"),t.qZA()()(),t.TgZ(9,"ion-item")(10,"ion-button",4),t.NdJ("click",function(){return s.volver()}),t._uU(11,"Volver"),t.qZA()(),t.TgZ(12,"ion-content",5)(13,"div",6)(14,"ion-button",7),t.NdJ("click",function(){return s.scanQRCode()}),t._uU(15,"Escanea el codigo de tu clase"),t.qZA(),t.TgZ(16,"div",8),t._UZ(17,"video",9,10),t.qZA()()()()),2&n&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(12),t.Q6J("ngClass",t.VKq(3,R,s.isScanning)))},dependencies:[l.mk,r.YG,r.W2,r.Gu,r.Ie,r.wd,r.sr],styles:[".ion-padding[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:60%;transform:translateY(-50%)}"]})}return o})()}];let D=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(p),u.Bz]})}return o})(),S=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[l.ez,g.u5,r.Pc,D]})}return o})()}}]);
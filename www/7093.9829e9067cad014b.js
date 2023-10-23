"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7093],{7093:(T,u,s)=>{s.r(u),s.d(u,{ClasePageModule:()=>C});var d=s(6814),m=s(95),r=s(3582),l=s(3044),g=s(5861),t=s(6689),c=s(8162),h=s(6406);const p=(0,s(2726).fo)("Geolocation",{web:()=>s.e(579).then(s.bind(s,579)).then(o=>new o.GeolocationWeb)});let P=(()=>{class o{constructor(){this.coordenadas={coords:{latitude:0,longitude:0,altitude:null,accuracy:0,altitudeAccuracy:null,heading:null,speed:null},timestamp:0}}ngOnInit(){this.printCurrentPosition()}printCurrentPosition(){var a=this;return(0,g.Z)(function*(){const e=yield p.getCurrentPosition();a.coordenadas=e,console.log("Current position:",a.coordenadas)})()}static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-geolocalizacion"]],decls:3,vars:2,template:function(e,i){1&e&&(t.TgZ(0,"ion-item")(1,"ion-label"),t._uU(2),t.qZA()()),2&e&&(t.xp6(2),t.AsE("Localizaci\xf3n: Latitud: ",i.coordenadas.coords.latitude,", Longitud: ",i.coordenadas.coords.longitude," "))},dependencies:[r.Ie,r.Q$]})}return o})();function y(o,b){if(1&o&&t._UZ(0,"ion-img",6),2&o){const a=t.oxw();t.Q6J("src",a.cameraImage)}}const Z=[{path:"",component:(()=>{class o{constructor(a,e){this.route=a,this.animationCtrl=e,this.formatedtime="",this.nombre="",this.apellido="",this.rut="",this.Profe="",this.hora="",this.sala="",this.dia="",this.isVisible=!0;const i=Date.now(),n=new Date(i);this.formatedtime=n.toLocaleDateString(),this.isVisible=!1,this.route.queryParams.subscribe(v=>{this.foto=v.photo})}ngOnInit(){console.log(this.foto);let a=localStorage.getItem("Profesor"),e=localStorage.getItem("Nuevo usuario");if(a)try{this.registroProfeParseado=JSON.parse(a),Array.isArray(this.registroProfeParseado)?(console.log("Es un arreglo: ",this.registroProfeParseado),this.Profe=this.registroProfeParseado[0],this.hora=this.registroProfeParseado[1],this.sala=this.registroProfeParseado[2],this.dia=this.registroProfeParseado[3]):console.log("No es un arreglo JSON v\xe1lido:",this.registroProfeParseado)}catch(i){console.error("Error al analizar el valor del LocalStorage:",i)}if(e)try{this.registroRecupParseado=JSON.parse(e),Array.isArray(this.registroRecupParseado)?(console.log("Es un arreglo:",this.registroRecupParseado),this.nombre=this.registroRecupParseado[0],this.apellido=this.registroRecupParseado[1],this.rut=this.registroRecupParseado[2],console.log(this.nombre)):console.log("No es un arreglo JSON v\xe1lido:",this.registroRecupParseado)}catch(i){console.error("Error al analizar el valor del LocalStorage:",i)}}takePicture(){var a=this;return(0,g.Z)(function*(){const e=yield c.V1.getPhoto({quality:100,allowEditing:!0,resultType:c.dk.Uri,source:c.oK.Camera});a.cameraImage=e.webPath,e.dataUrl=a.cameraImage,a.cameraImage&&(a.isVisible=!0),console.log("Imagen capturada:",e.dataUrl)})()}ngAfterViewInit(){const a=this.animationCtrl.create().addElement(this.cardElements.first.nativeElement).keyframes([{offset:0,transform:"scale(1)",opacity:"1"},{offset:.5,transform:"scale(1.5)",opacity:"0.3"},{offset:1,transform:"scale(1)",opacity:"1"}]),e=this.animationCtrl.create().addElement(this.cardElements.last.nativeElement).keyframes([{offset:0,transform:"scale(1)",opacity:"1"},{offset:.5,transform:"scale(1.5)",opacity:"0.3"},{offset:1,transform:"scale(1)",opacity:"1"}]);this.animation=this.animationCtrl.create().duration(2e3).iterations(1).addAnimation([a,e])}play(){this.animation.play()}ionViewDidEnter(){this.play()}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(l.gz),t.Y36(h.vB))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-clase"]],viewQuery:function(e,i){if(1&e&&t.Gf(r.PM,5,t.SBq),2&e){let n;t.iGM(n=t.CRH())&&(i.cardElements=n)}},decls:45,vars:14,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"src",4,"ngIf"],["expand","full",3,"click"],[3,"src"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Clase Registrada"),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t._uU(8,"Su clase est\xe1 registrada"),t.qZA()()(),t.TgZ(9,"ion-item")(10,"ion-card")(11,"ion-card-content"),t.YNc(12,y,1,1,"ion-img",4),t.TgZ(13,"ion-button",5),t.NdJ("click",function(){return i.takePicture()}),t._uU(14,"Abrir c\xe1mara"),t.qZA()()()(),t.TgZ(15,"div")(16,"ion-item")(17,"ion-card")(18,"ion-card-content")(19,"ion-title"),t._uU(20,"Datos Profesor"),t.qZA(),t.TgZ(21,"ion-label"),t._uU(22),t.qZA(),t.TgZ(23,"ion-label"),t._uU(24),t.qZA(),t.TgZ(25,"ion-label"),t._uU(26),t.qZA(),t.TgZ(27,"ion-label"),t._uU(28),t.qZA()()()(),t.TgZ(29,"ion-item")(30,"ion-card")(31,"ion-card-content")(32,"ion-title"),t._uU(33,"Datos Alumnos "),t.qZA(),t.TgZ(34,"ion-label"),t._uU(35),t.qZA(),t.TgZ(36,"ion-label"),t._uU(37),t.qZA(),t.TgZ(38,"ion-label"),t._uU(39),t.qZA(),t.TgZ(40,"ion-label"),t._uU(41),t.qZA(),t.TgZ(42,"strong"),t._uU(43),t.qZA(),t._UZ(44,"app-geolocalizacion"),t.qZA()()()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(8),t.Q6J("ngIf",i.cameraImage),t.xp6(3),t.Udp("display",i.isVisible?"block":"none"),t.xp6(7),t.Oqu(i.Profe),t.xp6(2),t.Oqu(i.hora),t.xp6(2),t.Oqu(i.sala),t.xp6(2),t.Oqu(i.dia),t.xp6(7),t.hij("Foto: ",i.foto,""),t.xp6(2),t.hij("Nombre: ",i.nombre,""),t.xp6(2),t.hij("Apellido: ",i.apellido,""),t.xp6(2),t.hij("Rut: ",i.rut,""),t.xp6(2),t.hij("Timestamp: ",i.formatedtime,""))},dependencies:[d.O5,r.YG,r.PM,r.FN,r.W2,r.Gu,r.Xz,r.Ie,r.Q$,r.wd,r.sr,P]})}return o})()}];let A=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(Z),l.Bz]})}return o})(),C=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[d.ez,m.u5,r.Pc,A]})}return o})()}}]);
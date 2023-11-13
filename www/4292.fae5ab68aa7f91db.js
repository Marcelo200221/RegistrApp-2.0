"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4292],{189:(C,_,s)=>{s.d(_,{V:()=>v});var p=s(5861),d=s(6689),a=s(2014);let v=(()=>{class m{constructor(l){this.storage=l,this.storage.create()}setvalue(l,c){var h=this;return(0,p.Z)(function*(){const g=yield h.storage.set(l,c);console.log(g)})()}getvalue(l){var c=this;return(0,p.Z)(function*(){return yield c.storage.get(l)})()}pushValue(l,c){var h=this;return(0,p.Z)(function*(){let g=yield h.getvalue(l);g?Array.isArray(g)?g.push(c):g=[g,c]:g=[c],yield h.storage.set(l,g)})()}static#e=this.\u0275fac=function(c){return new(c||m)(d.LFG(a.K))};static#n=this.\u0275prov=d.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()},4292:(C,_,s)=>{s.r(_),s.d(_,{RegisterPageModule:()=>M});var p=s(6814),d=s(95),a=s(3582),v=s(3044),m=s(5861),e=s(6689),l=s(189),c=s(6406),h=s(9862);let g=(()=>{class i{constructor(n){this.http=n,this.apiUrl="https://dev.matiivilla.cl/duoc/location/region",this.apiUrl2="https://dev.matiivilla.cl/duoc/location/comuna/"}obtenerDatosRegionales(){return this.http.get(this.apiUrl)}obtenerComunasPorRegion(n){return this.http.get(`${this.apiUrl2}${n}`)}static#e=this.\u0275fac=function(o){return new(o||i)(e.LFG(h.eN))};static#n=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function b(i,f){if(1&i&&(e.TgZ(0,"ion-select-option",2),e._uU(1),e.qZA()),2&i){const n=f.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.nombre)}}function Z(i,f){if(1&i&&(e.TgZ(0,"ion-select-option",2),e._uU(1),e.qZA()),2&i){const n=f.$implicit;e.Q6J("value",n.nombre),e.xp6(1),e.Oqu(n.nombre)}}let S=(()=>{class i{constructor(n,o){this.storage=n,this.datosRegionalesService=o,this.regionSeleccionada1=new e.vpe,this.comunaSeleccionada1=new e.vpe,this.regiones=[],this.comunaSeleccionada="",this.comunas=[],this.isVisible=!0,this.isVisible=!1}habilitarComuna(){this.isVisible=!0,this.datosRegionalesService.obtenerComunasPorRegion(this.regionSeleccionada).subscribe(o=>{this.comunas=o.data,console.log(this.comunas)},o=>{console.error("Error al obtener las comunas: ",o)})}guardarInfo(n){console.log(this.regionSeleccionada)}ngOnInit(){this.obtenerRegiones()}obtenerRegiones(){this.datosRegionalesService.obtenerDatosRegionales().subscribe(n=>{this.regiones=n.data,console.log(this.regiones)},n=>{console.error("Error al obtener las regiones: ",n)})}seleccionarRegion(n){this.regionSeleccionada1.emit(n.detail.value),this.habilitarComuna()}seleccionarComuna(n){this.comunaSeleccionada1.emit(n.detail.value)}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(l.V),e.Y36(g))};static#n=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-region-comuna"]],outputs:{regionSeleccionada1:"regionSeleccionada1",comunaSeleccionada1:"comunaSeleccionada1"},decls:14,vars:6,consts:[[3,"ngModel","ionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2,"Region de residencia"),e.qZA(),e.TgZ(3,"ion-card")(4,"ion-card-content")(5,"ion-select",0),e.NdJ("ionChange",function(r){return t.seleccionarRegion(r)})("ngModelChange",function(r){return t.regionSeleccionada=r}),e.YNc(6,b,2,2,"ion-select-option",1),e.qZA()()()(),e.TgZ(7,"ion-item")(8,"ion-label"),e._uU(9,"Comuna de residencia"),e.qZA(),e.TgZ(10,"ion-card")(11,"ion-card-content")(12,"ion-select",0),e.NdJ("ionChange",function(r){return t.seleccionarComuna(r)})("ngModelChange",function(r){return t.comunaSeleccionada=r}),e.YNc(13,Z,2,2,"ion-select-option",1),e.qZA()()()()),2&o&&(e.xp6(5),e.Q6J("ngModel",t.regionSeleccionada),e.xp6(1),e.Q6J("ngForOf",t.regiones),e.xp6(1),e.Udp("display",t.isVisible?"block":"none"),e.xp6(5),e.Q6J("ngModel",t.comunaSeleccionada),e.xp6(1),e.Q6J("ngForOf",t.comunas))},dependencies:[p.sg,d.JJ,d.On,a.PM,a.FN,a.Ie,a.Q$,a.t9,a.n0,a.QI]})}return i})();const R=[{path:"",component:(()=>{class i{constructor(n,o,t){this.storage=n,this.navctrl=o,this.alertController=t,this.nombre="",this.nombreValido=!0,this.apellido="",this.apellidoValido=!0,this.rut="",this.rutValido=!0,this.carrera="",this.carreraValida=!0,this.usuario="",this.clave=""}ngOnInit(){}registroValido(){this.nombreValido=!(this.nombre.length<3),this.apellidoValido=!(this.apellido.length<3),this.rutValido=!(this.rut.length<3)}registrar(){var n=this;return(0,m.Z)(function*(){if(""!=n.nombre&&""!=n.apellido&&""!=n.rut&&""!=n.carrera){let o=[];n.clave=n.rut.slice(0,4),n.usuario=n.nombre.slice(0,3)+n.apellido.slice(-3),yield(yield n.alertController.create({header:"Bienvenido",message:"Su usuario es: "+n.usuario+" y su contrase\xf1a es: "+n.clave,buttons:["OK"]})).present(),o.push(n.nombre,n.apellido,n.rut,n.carrera,n.usuario,n.clave);const u={nombre:n.nombre+" "+n.apellido,Rut:n.rut,Carrera:n.carrera,Nombre_Usuario:n.usuario,Clave:n.clave,Region:n.regionSeleccionada,Comuna:n.comunaSeleccionada};let r=JSON.stringify(o);n.storage.setvalue("Nuevo usuario",u),localStorage.setItem("Nuevo usuario",r);const A=new Event("datosActualizados");window.dispatchEvent(A),n.navctrl.navigateForward("/login")}})()}recibirRegionSeleccionada(n){this.regionSeleccionada=n}recibirComunaSeleccionada(n){this.comunaSeleccionada=n}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(l.V),e.Y36(c.SH),e.Y36(c.Br))};static#n=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-register"]],inputs:{regionSeleccionada:"regionSeleccionada",comunaSeleccionada:"comunaSeleccionada"},decls:53,vars:14,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["minlength","3",3,"ngModel","ngModelChange"],[1,"error_mensaje"],["maxlength","10",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["value","1"],["value","2"],["value","3"],["value","4"],[3,"regionSeleccionada1","comunaSeleccionada1"],[3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Register"),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e._uU(8,"Register"),e.qZA()()(),e.TgZ(9,"ion-item")(10,"ion-title"),e._uU(11," Registro "),e.qZA()(),e.TgZ(12,"ion-item")(13,"ion-card")(14,"ion-card-content")(15,"ion-input",4),e.NdJ("ngModelChange",function(r){return t.nombre=r}),e._uU(16,"Nombre:"),e.qZA(),e.TgZ(17,"ion-label",5),e._uU(18,"El nombre debe poseer 3 digitos como minimo"),e.qZA()()()(),e.TgZ(19,"ion-item")(20,"ion-card")(21,"ion-card-content")(22,"ion-input",4),e.NdJ("ngModelChange",function(r){return t.apellido=r}),e._uU(23,"Apellido:"),e.qZA(),e.TgZ(24,"ion-label",5),e._uU(25,"El apellido debe poseer 3 digitos como minimo"),e.qZA()()()(),e.TgZ(26,"ion-item")(27,"ion-card")(28,"ion-card-content")(29,"ion-input",6),e.NdJ("ngModelChange",function(r){return t.rut=r}),e._uU(30,"RUT(Sin puntos y con guion):"),e.qZA(),e.TgZ(31,"ion-label",5),e._uU(32,"El rut debe poseer 12 digitos"),e.qZA()()()(),e.TgZ(33,"ion-item")(34,"ion-label"),e._uU(35,"Carrera"),e.qZA(),e.TgZ(36,"ion-card")(37,"ion-card-content")(38,"ion-select",7),e.NdJ("ngModelChange",function(r){return t.carrera=r}),e.TgZ(39,"ion-select-option",8),e._uU(40,"Ingenier\xeda en informatica"),e.qZA(),e.TgZ(41,"ion-select-option",9),e._uU(42,"Tecnico en programaci\xf3n"),e.qZA(),e.TgZ(43,"ion-select-option",10),e._uU(44,"Informatica Biomedica"),e.qZA(),e.TgZ(45,"ion-select-option",11),e._uU(46,"Mecanica"),e.qZA()()()(),e.TgZ(47,"ion-label",5),e._uU(48,"El nombre debe poseer 3 digitos como minimo"),e.qZA()(),e.TgZ(49,"app-region-comuna",12),e.NdJ("regionSeleccionada1",function(r){return t.regionSeleccionada=r})("comunaSeleccionada1",function(r){return t.comunaSeleccionada=r}),e.qZA(),e.TgZ(50,"ion-item")(51,"ion-button",13),e.NdJ("click",function(){return t.registrar()}),e._uU(52,"Registrar"),e.qZA()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(11),e.Q6J("ngModel",t.nombre),e.xp6(2),e.ekj("visible",t.nombreValido),e.xp6(5),e.Q6J("ngModel",t.apellido),e.xp6(2),e.ekj("visible",t.apellidoValido),e.xp6(5),e.Q6J("ngModel",t.rut),e.xp6(2),e.ekj("visible",t.rutValido),e.xp6(7),e.Q6J("ngModel",t.carrera),e.xp6(9),e.ekj("visible",t.carreraValida))},dependencies:[d.JJ,d.wO,d.nD,d.On,a.YG,a.PM,a.FN,a.W2,a.Gu,a.pK,a.Ie,a.Q$,a.t9,a.n0,a.wd,a.sr,a.QI,a.j9,S],styles:[".error_mensaje[_ngcontent-%COMP%]{color:red;display:none}"]})}return i})()}];let T=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#n=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({imports:[v.Bz.forChild(R),v.Bz]})}return i})(),M=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#n=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({imports:[p.ez,d.u5,a.Pc,T]})}return i})()}}]);
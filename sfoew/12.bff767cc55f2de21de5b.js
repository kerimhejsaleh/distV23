(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{VnT2:function(t,c,e){"use strict";e.r(c),e.d(c,"PatientFormsModule",(function(){return M}));var a=e("ofXK"),o=e("tyNb"),i=e("mrSG"),n=e("fXoL"),r=e("4/Mx"),s=e("DTUD"),d=e("DJUr"),b=e("0+vP"),l=e("oOf3"),m=e("sYmb");function p(t,c){1&t&&(n.bc(0,"div",14),n.bc(1,"div",15),n.bc(2,"span",16),n.Oc(3,"Loading..."),n.ac(),n.ac(),n.ac())}function h(t,c){if(1&t){const t=n.cc();n.bc(0,"tbody",32),n.bc(1,"tr"),n.bc(2,"td",33),n.ic("click",(function(){n.Dc(t);const e=c.$implicit,a=n.mc().$implicit;return n.mc().openFormDetails(e.form._id,a)})),n.Oc(3),n.ac(),n.bc(4,"td",17),n.Oc(5),n.ac(),n.ac(),n.ac()}if(2&t){const t=c.$implicit;n.Jb(3),n.Pc(t.form.title),n.Jb(2),n.Pc(t.form.description)}}function f(t,c){if(1&t){const t=n.cc();n.bc(0,"tbody",34),n.ic("click",(function(){n.Dc(t);const e=c.$implicit;return n.mc(2).previewForm(e)})),n.bc(1,"tr"),n.bc(2,"td",35),n.Oc(3),n.ac(),n.bc(4,"td",17),n.Oc(5),n.ac(),n.ac(),n.ac()}if(2&t){const t=c.$implicit;n.Jb(3),n.Pc(t.form.title),n.Jb(2),n.Pc(t.form.description)}}function u(t,c){if(1&t){const t=n.cc();n.bc(0,"tr"),n.bc(1,"td",17),n.Oc(2),n.ac(),n.bc(3,"td",17),n.Oc(4),n.ac(),n.bc(5,"td",17),n.Oc(6),n.ac(),n.bc(7,"td",17),n.Oc(8),n.ac(),n.bc(9,"td"),n.bc(10,"i",18),n.ic("click",(function(){n.Dc(t);const e=c.$implicit;return n.mc().GetForms(e.doctors._id)})),n.ac(),n.bc(11,"i",19),n.ic("click",(function(){n.Dc(t);const e=c.$implicit;return n.mc().GetForms(e.doctors._id)})),n.ac(),n.ac(),n.bc(12,"div",20),n.bc(13,"div",21),n.bc(14,"div",22),n.bc(15,"div",23),n.bc(16,"button",24),n.bc(17,"span",25),n.Oc(18,"\xd7"),n.ac(),n.ac(),n.bc(19,"h5",26),n.Oc(20),n.nc(21,"translate"),n.ac(),n.bc(22,"div",27),n.bc(23,"div",5),n.bc(24,"table",6),n.bc(25,"thead"),n.bc(26,"tr"),n.bc(27,"th",8),n.Oc(28),n.nc(29,"translate"),n.ac(),n.bc(30,"th",8),n.Oc(31),n.nc(32,"translate"),n.ac(),n.ac(),n.ac(),n.Mc(33,h,6,2,"tbody",28),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.bc(34,"div",29),n.bc(35,"div",21),n.bc(36,"div",22),n.bc(37,"div",23),n.bc(38,"button",24),n.bc(39,"span",25),n.Oc(40,"\xd7"),n.ac(),n.ac(),n.bc(41,"h5",26),n.Oc(42),n.nc(43,"translate"),n.ac(),n.bc(44,"div",27),n.bc(45,"div",5),n.bc(46,"table",6),n.bc(47,"thead"),n.bc(48,"tr"),n.bc(49,"th",8),n.Oc(50),n.nc(51,"translate"),n.ac(),n.bc(52,"th",8),n.Oc(53),n.nc(54,"translate"),n.ac(),n.ac(),n.ac(),n.Mc(55,f,6,2,"tbody",30),n.ac(),n.ac(),n.ac(),n.ac(),n.Wb(56,"div",31),n.ac(),n.ac(),n.ac(),n.ac()}if(2&t){const t=c.$implicit,e=n.mc();n.Jb(2),n.Rc("",t.doctors.name," ",t.doctors.lastname,""),n.Jb(2),n.Pc(t.doctors.adresse),n.Jb(2),n.Pc(t.doctors.email),n.Jb(2),n.Qc("",t.doctors.tel," "),n.Jb(12),n.Rc("",n.oc(21,15,"AFFECTFORMS.AFFECTBY")," ",t.doctors.lastname,""),n.Jb(8),n.Pc(n.oc(29,17,"AFFECTFORMS.TITLE")),n.Jb(3),n.Pc(n.oc(32,19,"AFFECTFORMS.DESC")),n.Jb(2),n.sc("ngForOf",e.forms),n.Jb(9),n.Rc("",n.oc(43,21,"AFFECTFORMS.FORMSREM")," ",t.doctors.lastname,""),n.Jb(8),n.Pc(n.oc(51,23,"AFFECTFORMS.TITLE")),n.Jb(3),n.Pc(n.oc(54,25,"AFFECTFORMS.DESC")),n.Jb(2),n.sc("ngForOf",e.formsCompleted)}}function g(t,c){1&t&&(n.bc(0,"div",36),n.bc(1,"h1",37),n.Oc(2,"A"),n.ac(),n.bc(3,"h1",38),n.Oc(4),n.nc(5,"translate"),n.ac(),n.ac()),2&t&&(n.Jb(4),n.Qc("",n.oc(5,1,"AFFECTFORMS.AUCUNN")," "))}const O=function(t){return{itemsPerPage:6,currentPage:t}},F=[{path:"",component:(()=>{class t{constructor(t,c,e,a,o){this.router=t,this.data=c,this.doctorsService=e,this.authPat=a,this.PatForms=o,this.ProfId="",this.mesgEmpty=!1,this.mesgEmpty=!1,this.id=this.authPat.geid(),this.doctorsService.myContactsDoctor(this.id).subscribe(t=>{this.profs=t,this.filtredprofs=t,this.mesgEmpty=!0})}ngOnInit(){this.data.currentMessage.subscribe(t=>this.idForm=t),this.data.currentindex.subscribe(t=>this.index=t)}DoctorId(t){this.ProfId=t}filterItem(t){this.profs=this.filtredprofs.filter(c=>c.doctors.name.toLowerCase().includes(t.toLowerCase())||c.doctors.lastname.toLowerCase().includes(t.toLowerCase()))}GetForms(t){this.idDocter=t,this.PatForms.getForms(this.id,t).subscribe(t=>{this.forms=t.incompleted,this.formsCompleted=t.completed})}openFormDetails(t,c){this.idForm=t,this.router.navigate(["patient/forms-details",t,this.idDocter,this.id]),this.data.GetId(t)}previewForm(t){return Object(i.a)(this,void 0,void 0,(function*(){yield this.router.navigate(["patient/preview-details",t.form._id,this.idDocter,this.id]),window.location.reload()}))}}return t.\u0275fac=function(c){return new(c||t)(n.Vb(o.f),n.Vb(r.a),n.Vb(s.a),n.Vb(d.a),n.Vb(b.a))},t.\u0275cmp=n.Pb({type:t,selectors:[["app-patient-forms"]],decls:40,vars:35,consts:[[1,"container","rounded","mt-5","bg-white","p-md-5"],[1,"form-group"],[1,"h2","font-weight-bold"],[1,"container"],["type","text",1,"form-control",3,"placeholder","input"],[1,"table-responsive"],[1,"table"],["class","text-center",4,"ngIf"],["scope","col"],["id","spacing-row"],[4,"ngFor","ngForOf"],[1,"parent"],[1,"child",3,"previousLabel","nextLabel","pageChange"],["class","text-center mt-5","style","width: 100%;height: 100%;padding-bottom: 15%;",4,"ngIf"],[1,"text-center"],["role","status",1,"spinner-border","text-secondary"],[1,"sr-only"],[1,"pt-3"],["aria-hidden","true","data-toggle","modal","data-target","#exampleModal",1,"fa-sharp","fa-solid","fa-check-to-slot",2,"padding-right","10px","cursor","pointer",3,"click"],["aria-hidden","true","data-toggle","modal","data-target","#exampleModalCompleted",1,"fas","fa-file-medical",2,"cursor","pointer",3,"click"],["id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-body"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],["id","exampleModalLabel",1,"modal-title"],[1,"container","rounded","mt-2","bg-white","p-md-2"],["style","cursor: pointer;",4,"ngFor","ngForOf"],["id","exampleModalCompleted","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"modal-footer"],[2,"cursor","pointer"],["data-dismiss","modal",1,"pt-3",3,"click"],[2,"cursor","pointer",3,"click"],["data-dismiss","modal",1,"pt-3"],[1,"text-center","mt-5",2,"width","100%","height","100%","padding-bottom","15%"],[1,"header-title",2,"color","transparent","padding-bottom","15%","font-size","0px"],[1,"header-title",2,"color","red","padding-bottom","15%"]],template:function(t,c){1&t&&(n.bc(0,"div",0),n.bc(1,"div",1),n.bc(2,"div",2),n.Oc(3),n.nc(4,"translate"),n.ac(),n.ac(),n.bc(5,"div",3),n.bc(6,"div",3),n.bc(7,"div",1),n.bc(8,"input",4),n.ic("input",(function(t){return c.filterItem(t.target.value)})),n.nc(9,"translate"),n.ac(),n.ac(),n.ac(),n.ac(),n.bc(10,"div",5),n.bc(11,"table",6),n.Mc(12,p,4,0,"div",7),n.bc(13,"thead"),n.bc(14,"tr"),n.bc(15,"th",8),n.Oc(16),n.nc(17,"translate"),n.ac(),n.bc(18,"th",8),n.Oc(19),n.nc(20,"translate"),n.ac(),n.bc(21,"th",8),n.Oc(22),n.nc(23,"translate"),n.ac(),n.bc(24,"th",8),n.Oc(25),n.nc(26,"translate"),n.ac(),n.bc(27,"th",8),n.Oc(28),n.nc(29,"translate"),n.ac(),n.ac(),n.ac(),n.bc(30,"tbody"),n.bc(31,"tr",9),n.Wb(32,"td"),n.ac(),n.Mc(33,u,57,27,"tr",10),n.nc(34,"paginate"),n.ac(),n.ac(),n.ac(),n.ac(),n.bc(35,"div",11),n.bc(36,"pagination-controls",12),n.ic("pageChange",(function(t){return c.p=t})),n.nc(37,"translate"),n.nc(38,"translate"),n.ac(),n.ac(),n.Mc(39,g,6,3,"div",13)),2&t&&(n.Jb(3),n.Pc(n.oc(4,12,"LISTCONTACT.LISTPATIENT")),n.Jb(5),n.uc("placeholder","",n.oc(9,14,"LISTCONTACT.SEARCH"),"..."),n.Jb(4),n.sc("ngIf",!c.profs),n.Jb(4),n.Pc(n.oc(17,16,"PROFILE.NAME")),n.Jb(3),n.Pc(n.oc(20,18,"PROFILE.ADRESS")),n.Jb(3),n.Pc(n.oc(23,20,"PROFILE.EMAIL")),n.Jb(3),n.Pc(n.oc(26,22,"PROFILE.TELE")),n.Jb(3),n.Pc(n.oc(29,24,"LISTCONTACT.STATUSFORMS")),n.Jb(5),n.sc("ngForOf",n.pc(34,26,c.profs,n.wc(33,O,c.p))),n.Jb(3),n.tc("previousLabel",n.oc(37,29,"PAGINATION.PR")),n.tc("nextLabel",n.oc(38,31,"PAGINATION.NEXT")),n.Jb(3),n.sc("ngIf",0==c.profs))},directives:[a.m,a.l,l.c],pipes:[m.c,l.b],styles:["table[_ngcontent-%COMP%]{color:#414040}.modal-dialog[_ngcontent-%COMP%]{max-width:900px;height:500px}table.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover   th[_ngcontent-%COMP%]{background-color:#fff!important}img[_ngcontent-%COMP%]{width:40px;height:40px}img.details[_ngcontent-%COMP%]{width:30%;height:30%}.parent[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}i[_ngcontent-%COMP%]:hover{cursor:pointer;color:#ff4500}"]}),t})()}];let P=(()=>{class t{}return t.\u0275mod=n.Tb({type:t}),t.\u0275inj=n.Sb({factory:function(c){return new(c||t)},imports:[[o.i.forChild(F)],o.i]}),t})();var v=e("3Pt+"),C=e("cZdB");let M=(()=>{class t{}return t.\u0275mod=n.Tb({type:t}),t.\u0275inj=n.Sb({factory:function(c){return new(c||t)},imports:[[a.c,P,v.j,C.a,l.a,m.b]]}),t})()}}]);
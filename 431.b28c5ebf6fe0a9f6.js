"use strict";(self.webpackChunkLetsgoPwa=self.webpackChunkLetsgoPwa||[]).push([[431],{5431:(d,i,s)=>{s.r(i),s.d(i,{SignupComponent:()=>o});var t=s(433),l=s(8729),e=s(1571),p=s(3071),m=s(4465);class o{constructor(r,n,u){this.userService=r,this.router=n,this.toastService=u,this.userRequest={name:"",email:"",secret:""}}ngOnInit(){}signupUser(){this.userService.signupUser(this.userRequest).subscribe({next:r=>{console.log(`user ${this.userRequest.name} Added successfully.`),this.toastService.showSuccessToast("Registration successfull.",`${this.userRequest.name}, please login to plan and manage your trips.`),this.router.navigate(["/login"])}})}}o.\u0275fac=function(r){return new(r||o)(e.Y36(p.K),e.Y36(l.F0),e.Y36(m.k))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-signup"]],standalone:!0,features:[e.jDz],decls:23,vars:3,consts:[[1,"mb-3"],[3,"ngSubmit"],["form","ngForm"],["for","nameInput",1,"form-label"],["type","text","id","nameInput","name","name",1,"form-control",3,"ngModel","ngModelChange"],["for","emailInput",1,"form-label"],["type","email","id","emailInput","aria-describedby","emailHelp","name","emai",1,"form-control",3,"ngModel","ngModelChange"],["id","emailHelp",1,"form-text"],["for","passwordInput",1,"form-label"],["type","password","id","passwordInput","aria-describedby","passwordHelp","name","secret",1,"form-control",3,"ngModel","ngModelChange"],["id","passwordHelp",1,"form-text"],[1,"col","text-center"],["type","submit",1,"btn","btn-primary","text-center"]],template:function(r,n){1&r&&(e.TgZ(0,"h4",0),e._uU(1,"Register"),e.qZA(),e.TgZ(2,"form",1,2),e.NdJ("ngSubmit",function(){return n.signupUser()}),e.TgZ(4,"div",0)(5,"label",3),e._uU(6,"Name"),e.qZA(),e.TgZ(7,"input",4),e.NdJ("ngModelChange",function(a){return n.userRequest.name=a}),e.qZA()(),e.TgZ(8,"div",0)(9,"label",5),e._uU(10,"Email address"),e.qZA(),e.TgZ(11,"input",6),e.NdJ("ngModelChange",function(a){return n.userRequest.email=a}),e.qZA(),e.TgZ(12,"div",7),e._uU(13,"We'll never share your email with anyone else."),e.qZA()(),e.TgZ(14,"div",0)(15,"label",8),e._uU(16,"Password"),e.qZA(),e.TgZ(17,"input",9),e.NdJ("ngModelChange",function(a){return n.userRequest.secret=a}),e.qZA(),e.TgZ(18,"div",10),e._uU(19," Your password must be minimum 5 characters long. "),e.qZA()(),e.TgZ(20,"div",11)(21,"button",12),e._uU(22,"Go"),e.qZA()()()),2&r&&(e.xp6(7),e.Q6J("ngModel",n.userRequest.name),e.xp6(4),e.Q6J("ngModel",n.userRequest.email),e.xp6(6),e.Q6J("ngModel",n.userRequest.secret))},dependencies:[t.u5,t._Y,t.Fj,t.JJ,t.JL,t.On,t.F,l.Bz]})}}]);
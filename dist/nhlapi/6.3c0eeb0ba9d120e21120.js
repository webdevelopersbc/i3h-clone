(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(t,r,e){"use strict";e.r(r),e.d(r,"AuthModule",(function(){return O}));var a=e("ofXK"),n=e("3Pt+"),o=e("bTqV"),i=e("Wp6s"),s=e("kmnG"),c=e("NFeN"),l=e("qFsG"),b=e("dNgK"),m=e("tyNb"),d=e("769X"),u=e("gn+R"),g=e("fXoL");let h=(()=>{class t{constructor(){}ngOnInit(){}prepareRoute(t){return t&&t.activatedRouteData&&t.activatedRouteData.animation}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=g.Fb({type:t,selectors:[["app-auth"]],decls:3,vars:1,consts:[["outlet","outlet"]],template:function(t,r){if(1&t&&(g.Rb(0,"div"),g.Mb(1,"router-outlet",null,0),g.Qb()),2&t){const t=g.nc(2);g.hc("@routeAnimations",r.prepareRoute(t))}},directives:[m.d],styles:[""],data:{animation:[u.a]}}),t})();var p=e("EY2u"),f=e("JIr8"),w=e("Cf2o"),x=e("tk/3"),R=e("QNcV");function Q(t,r){1&t&&(g.Rb(0,"mat-error"),g.xc(1," Please enter a valid email address "),g.Qb())}function v(t,r){1&t&&(g.Rb(0,"mat-error"),g.xc(1," Email is "),g.Rb(2,"strong"),g.xc(3,"required"),g.Qb(),g.Qb())}function E(t,r){1&t&&(g.Rb(0,"mat-error"),g.xc(1," Password is "),g.Rb(2,"strong"),g.xc(3,"required"),g.Qb(),g.Qb())}const y=function(){return["../register"]};function C(t,r){1&t&&(g.Rb(0,"mat-error"),g.xc(1," Please enter a valid email address "),g.Qb())}function k(t,r){1&t&&(g.Rb(0,"mat-error"),g.xc(1," Email is "),g.Rb(2,"strong"),g.xc(3,"required"),g.Qb(),g.Qb())}function M(t,r){1&t&&(g.Rb(0,"mat-error"),g.xc(1," Minimum length is 3 characters "),g.Qb())}function F(t,r){1&t&&(g.Rb(0,"mat-error"),g.xc(1," Name is "),g.Rb(2,"strong"),g.xc(3,"required"),g.Qb(),g.Qb())}function I(t,r){1&t&&(g.Rb(0,"mat-error"),g.xc(1," Minimum length is 6 characters "),g.Qb())}function A(t,r){1&t&&(g.Rb(0,"mat-error"),g.xc(1," Max length is 20 characters "),g.Qb())}function q(t,r){1&t&&(g.Rb(0,"mat-error"),g.xc(1," Password is "),g.Rb(2,"strong"),g.xc(3,"required"),g.Qb(),g.Qb())}const L=function(){return["../login"]},S=[{path:"",component:h,canActivate:[d.a],children:[{path:"",canActivateChild:[d.a],children:[{path:"login",component:(()=>{class t{constructor(t,r,e,a){this.http=t,this.snackbar=r,this.authService=e,this.router=a,this.matcher=new w.a,this.loginForm=new n.d({email:new n.b("",[n.l.required,n.l.email]),password:new n.b("",[n.l.required])})}ngOnInit(){}onSubmit(){this.loginForm.markAllAsTouched(),this.loginForm.invalid||this.http.post("http://127.0.0.1:3000/api/auth/login",this.loginForm.value).pipe(Object(f.a)(t=>(this.snackbar.open("There was an error signing you in. Check your credentials or await admin validation.","",{duration:5e3}),p.a))).subscribe(t=>{this.authService.signIn(t),this.router.navigateByUrl("/dashboard")})}}return t.\u0275fac=function(r){return new(r||t)(g.Lb(x.b),g.Lb(b.a),g.Lb(R.a),g.Lb(m.a))},t.\u0275cmp=g.Fb({type:t,selectors:[["app-login"]],decls:26,vars:6,consts:[[1,"card","mat-elevation-z8"],["mat-card-image","","src","/assets/i3hl-logo.png","alt","i3HL logo",1,"logo"],[1,"content-container",3,"formGroup"],["appearance","fill"],["matInput","","formControlName","email"],[4,"ngIf"],["matInput","","type","password","formControlName","password"],[1,"actions-container"],["mat-raised-button","","color","accent",3,"routerLink"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,r){1&t&&(g.Rb(0,"mat-card",0),g.Rb(1,"mat-card-header"),g.Rb(2,"mat-card-title"),g.xc(3,"Log In"),g.Qb(),g.Rb(4,"mat-card-subtitle"),g.xc(5,"Enter your credentials to log into the i3HL API dashboard"),g.Qb(),g.Qb(),g.Mb(6,"img",1),g.Rb(7,"mat-card-content"),g.Rb(8,"form",2),g.Rb(9,"mat-form-field",3),g.Rb(10,"mat-label"),g.xc(11,"Email"),g.Qb(),g.Mb(12,"input",4),g.wc(13,Q,2,0,"mat-error",5),g.wc(14,v,4,0,"mat-error",5),g.Qb(),g.Rb(15,"mat-form-field",3),g.Rb(16,"mat-label"),g.xc(17,"Password"),g.Qb(),g.Mb(18,"input",6),g.wc(19,E,4,0,"mat-error",5),g.Qb(),g.Qb(),g.Qb(),g.Rb(20,"mat-card-actions"),g.Rb(21,"div",7),g.Rb(22,"button",8),g.xc(23,"Register An Account"),g.Qb(),g.Rb(24,"button",9),g.Yb("click",(function(){return r.onSubmit()})),g.xc(25,"Log In"),g.Qb(),g.Qb(),g.Qb(),g.Qb()),2&t&&(g.Ab(8),g.hc("formGroup",r.loginForm),g.Ab(5),g.hc("ngIf",r.loginForm.get("email").hasError("email")&&!r.loginForm.get("email").hasError("required")),g.Ab(1),g.hc("ngIf",r.loginForm.get("email").hasError("required")),g.Ab(5),g.hc("ngIf",r.loginForm.get("password").hasError("required")),g.Ab(3),g.hc("routerLink",g.jc(5,y)))},directives:[i.a,i.e,i.i,i.h,i.f,i.d,n.m,n.i,n.e,s.c,s.f,l.a,n.a,n.h,n.c,a.l,i.b,o.a,m.b,s.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;background-color:#000;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E\")}.card[_ngcontent-%COMP%]{flex:0 1 auto;width:100%;max-width:450px}.logo[_ngcontent-%COMP%]{background-color:#d3d3d3}.content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.actions-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),t})(),data:{animation:"login"}},{path:"register",component:(()=>{class t{constructor(t,r,e){this.http=t,this.router=r,this.snackbar=e,this.matcher=new w.a,this.registrationForm=new n.d({email:new n.b("",[n.l.required,n.l.email]),name:new n.b("",[n.l.required,n.l.minLength(3)]),password:new n.b("",[n.l.required,n.l.minLength(6),n.l.maxLength(20)])})}ngOnInit(){}onSubmit(){this.registrationForm.markAllAsTouched(),this.registrationForm.invalid||this.http.post("http://127.0.0.1:3000/api/auth/register",this.registrationForm.value).pipe(Object(f.a)(t=>{let r="There was an error registering your account. Try again later or contact administration.";return 409===t.status&&(r="This email is already associated with an existing account."),this.snackbar.open(r,"",{duration:5e3}),p.a})).subscribe(t=>{this.snackbar.open("Successfully Registered. Note: You will not be able to access this system until an admin has validated your account.","",{duration:5e3}),this.router.navigateByUrl("/auth/login")})}}return t.\u0275fac=function(r){return new(r||t)(g.Lb(x.b),g.Lb(m.a),g.Lb(b.a))},t.\u0275cmp=g.Fb({type:t,selectors:[["app-register"]],decls:36,vars:10,consts:[[1,"card","mat-elevation-z8"],["mat-card-avatar","",1,"logo-image"],[1,"content-container",3,"formGroup"],["appearance","fill"],["matInput","","formControlName","email"],[4,"ngIf"],["matInput","","formControlName","name"],["matInput","","type","password","formControlName","password"],[1,"actions-container"],["mat-raised-button","","color","accent",3,"routerLink"],["aria-hidden","false","aria-label","Go back icon"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,r){1&t&&(g.Rb(0,"mat-card",0),g.Rb(1,"mat-card-header"),g.Mb(2,"div",1),g.Rb(3,"mat-card-title"),g.xc(4,"Register"),g.Qb(),g.Rb(5,"mat-card-subtitle"),g.xc(6," Enter your registration details. Note: you will not be able to log in until an administrator grants you access. "),g.Qb(),g.Qb(),g.Rb(7,"mat-card-content"),g.Rb(8,"form",2),g.Rb(9,"mat-form-field",3),g.Rb(10,"mat-label"),g.xc(11,"Email"),g.Qb(),g.Mb(12,"input",4),g.wc(13,C,2,0,"mat-error",5),g.wc(14,k,4,0,"mat-error",5),g.Qb(),g.Rb(15,"mat-form-field",3),g.Rb(16,"mat-label"),g.xc(17,"Name"),g.Qb(),g.Mb(18,"input",6),g.wc(19,M,2,0,"mat-error",5),g.wc(20,F,4,0,"mat-error",5),g.Qb(),g.Rb(21,"mat-form-field",3),g.Rb(22,"mat-label"),g.xc(23,"Password"),g.Qb(),g.Mb(24,"input",7),g.wc(25,I,2,0,"mat-error",5),g.wc(26,A,2,0,"mat-error",5),g.wc(27,q,4,0,"mat-error",5),g.Qb(),g.Qb(),g.Qb(),g.Rb(28,"mat-card-actions"),g.Rb(29,"div",8),g.Rb(30,"button",9),g.Rb(31,"mat-icon",10),g.xc(32,"arrow_back"),g.Qb(),g.xc(33," Back to Log In "),g.Qb(),g.Rb(34,"button",11),g.Yb("click",(function(){return r.onSubmit()})),g.xc(35,"Register"),g.Qb(),g.Qb(),g.Qb(),g.Qb()),2&t&&(g.Ab(8),g.hc("formGroup",r.registrationForm),g.Ab(5),g.hc("ngIf",r.registrationForm.get("email").hasError("email")&&!r.registrationForm.get("email").hasError("required")),g.Ab(1),g.hc("ngIf",r.registrationForm.get("email").hasError("required")),g.Ab(5),g.hc("ngIf",r.registrationForm.get("name").hasError("minlength")&&!r.registrationForm.get("name").hasError("required")),g.Ab(1),g.hc("ngIf",r.registrationForm.get("name").hasError("required")),g.Ab(5),g.hc("ngIf",r.registrationForm.get("password").hasError("minlength")&&!r.registrationForm.get("password").hasError("required")),g.Ab(1),g.hc("ngIf",r.registrationForm.get("password").hasError("maxlength")&&!r.registrationForm.get("password").hasError("required")),g.Ab(1),g.hc("ngIf",r.registrationForm.get("password").hasError("required")),g.Ab(3),g.hc("routerLink",g.jc(9,L)))},directives:[i.a,i.e,i.c,i.i,i.h,i.d,n.m,n.i,n.e,s.c,s.f,l.a,n.a,n.h,n.c,a.l,i.b,o.a,m.b,c.a,s.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;background-color:#000;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E\")}.card[_ngcontent-%COMP%]{flex:0 1 auto;width:100%;max-width:450px}.logo-image[_ngcontent-%COMP%]{background-image:url(/assets/i3hl-logo.png);background-size:cover}.content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.actions-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),t})(),data:{animation:"register"}},{path:"",pathMatch:"full",redirectTo:"login"}]}]}];let P=(()=>{class t{}return t.\u0275mod=g.Jb({type:t}),t.\u0275inj=g.Ib({factory:function(r){return new(r||t)},imports:[[m.c.forChild(S)],m.c]}),t})(),O=(()=>{class t{}return t.\u0275mod=g.Jb({type:t}),t.\u0275inj=g.Ib({factory:function(r){return new(r||t)},imports:[[a.c,m.c,n.k,i.g,o.b,s.e,l.b,c.b,b.b,P]]}),t})()}}]);
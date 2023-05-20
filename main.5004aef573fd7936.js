(self["webpackChunkLetsgoPwa"] = self["webpackChunkLetsgoPwa"] || []).push([["main"],{

/***/ 7983:
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app_routes": () => (/* binding */ app_routes)
/* harmony export */ });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_trips_trips_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/trips/trips.component */ 4024);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.guard */ 8063);




const app_routes = [{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  children: [{
    path: 'login',
    component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
  }, {
    path: '',
    component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
  }]
}, {
  path: 'signup',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  children: [{
    path: '',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_signup_signup_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/signup/signup.component */ 5431)).then(m => m.SignupComponent)
  }]
}, {
  path: 'forgot',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  children: [{
    path: '',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_forgot_forgot_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/forgot/forgot.component */ 9895)).then(m => m.ForgotComponent)
  }]
}, {
  path: 'trip',
  canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  children: [{
    path: '',
    component: _components_trips_trips_component__WEBPACK_IMPORTED_MODULE_2__.TripsComponent
  }]
}, {
  path: '**',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_common_pagenotfound_pagenotfound_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/common/pagenotfound/pagenotfound.component */ 9393)).then(m => m.PagenotfoundComponent)
}
// {
//   path: '',
//   pathMatch: 'full',
//   redirectTo: 'home'
// }
];

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 4173);
/* harmony import */ var _components_common_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/toaster/toaster.component */ 2635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ 3769);







class AppComponent {
  constructor(swUpdate) {
    this.swUpdate = swUpdate;
    this.title = 'Lets Go';
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(event => {
        if (confirm('A new version is available. Load it?')) {
          window.location.reload();
        }
      });
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__.SwUpdate));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-toaster")(4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _components_common_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_1__.ToasterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3289:
/*!**********************************************************************!*\
  !*** ./src/app/components/common/breadcrump/breadcrump.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumpComponent": () => (/* binding */ BreadcrumpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);




function BreadcrumpComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3)(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreadcrumpComponent_li_2_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onClicked(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", item_r1 === ctx_r0.selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", item_r1 === ctx_r0.selection ? "page" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
  }
}
class BreadcrumpComponent {
  constructor() {
    this.onSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onClicked(index) {
    this.onSelection.emit(index);
  }
}
BreadcrumpComponent.ɵfac = function BreadcrumpComponent_Factory(t) {
  return new (t || BreadcrumpComponent)();
};
BreadcrumpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BreadcrumpComponent,
  selectors: [["app-breadcrump"]],
  inputs: {
    items: "items",
    selection: "selection"
  },
  outputs: {
    onSelection: "onSelection"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 1,
  consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["class", "breadcrumb-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], ["href", "javascript:void(0)", 3, "click"]],
  template: function BreadcrumpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ol", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumpComponent_li_2_Template, 3, 4, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".breadcrumb[_ngcontent-%COMP%] {\n  color: #333;\n  margin-left: 10px;\n}\n\n\n.breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: hsl(246deg, 77%, 50%);\n  font-weight: bolder;\n  font-size: large;\n  border-bottom: 2px;\n}\n\n\n.breadcrumb[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vYnJlYWRjcnVtcC9icmVhZGNydW1wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRSx5Q0FBQTtBQUNBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRSwyQ0FBQTtBQUNBO0VBQ0UsZUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYnJlYWRjcnVtYiBjb2xvciAqL1xyXG4uYnJlYWRjcnVtYiB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBPdmVycmlkZSB0aGUgYWN0aXZlIGJyZWFkY3J1bWIgY29sb3IgKi9cclxuICAuYnJlYWRjcnVtYiAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiBoc2woMjQ2LCA3NyUsIDUwJSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLyogT3ZlcnJpZGUgdGhlIGJyZWFkY3J1bWIgc2VwYXJhdG9yIGljb24gKi9cclxuICAuYnJlYWRjcnVtYiAuc2VwYXJhdG9yIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5211:
/*!******************************************************************!*\
  !*** ./src/app/components/common/carousel/carousel.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class CarouselComponent {
  constructor() {}
  ngOnInit() {}
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
  return new (t || CarouselComponent)();
};
CarouselComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CarouselComponent,
  selectors: [["app-carousel"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 27,
  vars: 0,
  consts: [["id", "carouselCaptions", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselCaptions", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselCaptions", "data-bs-slide-to", "1", "aria-label", "Slide 2"], [1, "carousel-inner", 2, "width", "100%", "height", "400px !important"], [1, "carousel-item", "active"], ["src", "assets/Planning.jpg", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block", 2, "top", "0", "bottom", "auto"], [1, "carousel-item"], ["src", "assets/Prepare.jpg", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], ["type", "button", "data-bs-target", "#carouselCaptions", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselCaptions", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]],
  template: function CarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Plan your travel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Plan by capturing where, when, with whom.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Prepare your travel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Checklist to track the booking and packing.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
  styles: [".carousel-caption[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  z-index: 10;\r\n  top: 0px;\r\n  bottom: auto;\r\n  color: rgb(228, 8, 8);\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: x-large;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFFBQVE7RUFDUixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDIwcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdG9wOiAwcHg7XHJcbiAgYm90dG9tOiBhdXRvO1xyXG4gIGNvbG9yOiByZ2IoMjI4LCA4LCA4KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 259:
/*!**************************************************************!*\
  !*** ./src/app/components/common/delete/delete.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteComponent": () => (/* binding */ DeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





class DeleteComponent {
  constructor() {
    this.isCollapsed = true;
    this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  delete() {
    this.onDelete.emit();
    this.isCollapsed = true;
  }
  cancel() {
    this.isCollapsed = true;
  }
}
DeleteComponent.ɵfac = function DeleteComponent_Factory(t) {
  return new (t || DeleteComponent)();
};
DeleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DeleteComponent,
  selectors: [["app-delete"]],
  inputs: {
    message: "message"
  },
  outputs: {
    onDelete: "onDelete"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 14,
  vars: 4,
  consts: [["type", "button", "aria-controls", "toggleLabelLink", 1, "btn", "btn-link", "ps-0", 3, "click"], [1, "row", 3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "text-danger"], [1, "row", "mt-2"], [1, "col", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "text-center", "btn-sm", "me-2", 3, "disabled", "click"], ["type", "submit", "autofocus", "false", 1, "btn", "btn-primary", "text-center", "btn-sm", "ms-2", 3, "click"]],
  template: function DeleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteComponent_Template_button_click_1_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function DeleteComponent_Template_div_ngbCollapseChange_4_listener($event) {
        return ctx.isCollapsed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteComponent_Template_button_click_10_listener() {
        return ctx.delete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Proceed");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteComponent_Template_button_click_12_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isCollapsed);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCollapse],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6900:
/*!******************************************************************!*\
  !*** ./src/app/components/common/feedback/feedback.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackComponent": () => (/* binding */ FeedbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../componentBase */ 1749);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/trip.action */ 8859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);









function FeedbackComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please enter message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function FeedbackComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 13)(2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeedbackComponent_div_13_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeedbackComponent_div_13_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.formValid);
  }
}
class FeedbackComponent extends _componentBase__WEBPACK_IMPORTED_MODULE_0__.componentBase {
  constructor(store, fb, toastService) {
    super(store);
    this.fb = fb;
    this.toastService = toastService;
    this.formValid = false;
    this.formDirty = false;
    this.reactiveForm = this.fb.group({
      message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
  }
  ngOnInit() {
    this.formSubscription = this.reactiveForm.valueChanges.subscribe(data => {
      this.setFormState();
    });
  }
  setFormState() {
    this.formValid = this.reactiveForm.valid;
    this.formDirty = this.reactiveForm.dirty;
  }
  save() {
    if (this.formValid && this.formDirty) {
      const {
        message
      } = this.reactiveForm.value;
      this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_1__.postFeedback({
        message
      }));
      this.toastService.showWarningToast("Feedback submitted", "Thanks for being a feedback superhero. We appreciate you!");
      this.reactiveForm.markAsPristine();
      this.reset();
    }
  }
  reset() {
    this.reactiveForm.reset({
      comments: null
    });
    this.setFormState();
  }
  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) {
  return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
};
FeedbackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FeedbackComponent,
  selectors: [["app-feedback"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 14,
  vars: 3,
  consts: [[1, "container"], [1, "feedback-container"], [1, "form-group", 3, "formGroup"], ["for", "placesInput", 1, "form-label", "ms-2"], [1, "mb-3", "form-floating", "justify-content-center"], [1, "row"], [1, "col-1"], [1, "col-10"], ["placeholder", "Message", "id", "floatingTextareaComments", "formControlName", "message", 1, "form-control"], ["class", "showValidation justify-content-center", 4, "ngIf"], [1, "col", "text-center", "mt-2", "mb-2"], ["class", "row", 4, "ngIf"], [1, "showValidation", "justify-content-center"], ["col-sm-6", "", "mb-2", "", "text-center", ""], ["type", "submit", 1, "btn", "btn-primary", "text-center", "btn-sm", "me-2", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-primary", "text-center", "btn-sm", "ms-2", 3, "click"]],
  template: function FeedbackComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Feedback - Improvements/Suggestions/Issues");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "textarea", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, FeedbackComponent_div_10_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, FeedbackComponent_div_13_Template, 6, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.reactiveForm.get("message").valid && ctx.reactiveForm.get("message").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formDirty);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: [".feedback-container[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background-color: rgb(249, 245, 245);\n}\n.feedback-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bold;\n}\n.feedback-container[_ngcontent-%COMP%]   .showValidation[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQU07RUFDRSxVQUFBO0FBRVIiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVlZGJhY2stY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5IDI0NSAyNDUpO1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgLnNob3dWYWxpZGF0aW9uIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1823:
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 0,
  consts: [[1, "container"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "footer")(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \u00A9 2023 LetsGo. All rights reserved.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
  styles: ["footer[_ngcontent-%COMP%] {\n  padding-top: 2px;\n  color: #333;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6403:
/*!**************************************************************************!*\
  !*** ./src/app/components/common/inputformtag/inputformtag.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputformtagComponent": () => (/* binding */ InputformtagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);







function InputformtagComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div", 4)(3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function InputformtagComponent_div_2_Template_span_dblclick_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const tag_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.removeTag(tag_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InputformtagComponent_div_2_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const tag_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.removeTag(tag_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r1);
  }
}
class InputformtagComponent {
  constructor() {
    this.userInput = '';
    this.tags = [];
    this.onChange = tags => {};
    this.onTouched = () => {};
    this.touched = false;
    this.disabled = false;
  }
  writeValue(inputTags) {
    this.tags = inputTags;
  }
  registerOnChange(onChangeFn) {
    this.onChange = onChangeFn;
  }
  registerOnTouched(onTouchedFn) {
    this.onTouched = onTouchedFn;
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate(control) {
    return this.tags?.length === 0 ? {
      tagsAreEmpty: true
    } : null;
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
  ngOnInit() {}
  addtoTags() {
    this.markAsTouched();
    if (!this.disabled && this.userInput.length > 0) {
      let formatedInput = this.userInput.replace(/\w+/g, lodash__WEBPACK_IMPORTED_MODULE_0__.startCase);
      if (this.tags?.indexOf(formatedInput) < 0) {
        this.tags = [...this.tags, formatedInput];
        this.onChange(this.tags);
      }
    }
    this.userInput = "";
  }
  removeTag(value) {
    this.markAsTouched();
    this.tags = this.tags.filter(s => s != value);
    this.onChange(this.tags);
  }
}
InputformtagComponent.ɵfac = function InputformtagComponent_Factory(t) {
  return new (t || InputformtagComponent)();
};
InputformtagComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: InputformtagComponent,
  selectors: [["app-inputformtag"]],
  inputs: {
    placeholderText: "placeholderText"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => InputformtagComponent)
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
    multi: true,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => InputformtagComponent)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 3,
  consts: [[1, "itag-container"], ["type", "text", "id", "nameInput", "name", "name", 1, "form-control", "itag-input", 3, "placeholder", "ngModel", "ngModelChange", "focusout", "keydown.enter"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col"], [1, "itag-tag", 3, "dblclick"], [1, "close", 3, "click"]],
  template: function InputformtagComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InputformtagComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.userInput = $event;
      })("focusout", function InputformtagComponent_Template_input_focusout_1_listener() {
        return ctx.addtoTags();
      })("keydown.enter", function InputformtagComponent_Template_input_keydown_enter_1_listener() {
        return ctx.addtoTags();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InputformtagComponent_div_2_Template, 7, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholderText);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".itag-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.itag-tag[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 3px;\n  border: 1px solid rgb(190, 185, 185);\n  border-radius: 5px;\n  line-height: 35px;\n  cursor: pointer;\n  word-break: break-all;\n  color: blue;\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: 0.55rem;\n  color: rgb(80, 78, 78);\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaW5wdXRmb3JtdGFnL2lucHV0Zm9ybXRhZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFLQSxXQUFBO0FBSEY7QUFERTtFQUNBLG9CQUFBO0VBQ0Usc0JBQUE7QUFHSjtBQUFFO0VBQ0UsaUJBQUE7QUFFSjtBQURJO0VBQ0UsVUFBQTtBQUdOIiwic291cmNlc0NvbnRlbnQiOlsiLml0YWctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDp3cmFwO1xyXG59XHJcblxyXG4uaXRhZy10YWcge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBwYWRkaW5nOjNweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLCAxODUsIDE4NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OjM1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAuY2xvc2Uge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC41NXJlbTtcclxuICAgIGNvbG9yOiByZ2IoODAsIDc4LCA3OCk7XHJcblx0fVxyXG4gIGNvbG9yOiBibHVlO1xyXG4gIC5jbG9zZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4173:
/*!**************************************************************!*\
  !*** ./src/app/components/common/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);






function NavbarComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10)(1, "a", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function NavbarComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12)(1, "a", 13)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 14)(5, "li")(6, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_li_9_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.logOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.authService.user.displayName);
  }
}
class NavbarComponent {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {}
  logOut() {
    this.authService.SignOut();
  }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 10,
  vars: 2,
  consts: [[1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["src", "assets/Logo.svg", "alt", "", "width", "70", "height", "30"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-item dropdown", 4, "ngIf"], [1, "nav-item"], ["routerLink", "login", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "data-bs-target", "#navbardropdownmenu", "aria-controls", "navbardropdownmenu", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", "id", "navbardropdownmenu", "data-bs-popper", "", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["routerLink", "login", 1, "dropdown-item", 3, "click"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_li_8_Template, 4, 0, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavbarComponent_li_9_Template, 11, 1, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.user);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: [".navbar[_ngcontent-%COMP%] {\r\nbackground-color: white\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 507:
/*!****************************************************************************!*\
  !*** ./src/app/components/common/selectformtag/selectformtag.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectformtagComponent": () => (/* binding */ SelectformtagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








const _c0 = ["checkInput"];
function SelectformtagComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectformtagComponent_div_7_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onSelectAllChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SelectformtagComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngValue", function SelectformtagComponent_option_11_Template_option_ngValue_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const item_r8 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](item_r8.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.text);
  }
}
function SelectformtagComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 18)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectformtagComponent_div_12_div_1_Template_span_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const tag_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.openDetails(tag_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectformtagComponent_div_12_div_1_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const tag_r12 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.removeTag(tag_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const tag_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r12);
  }
}
function SelectformtagComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectformtagComponent_div_12_div_1_Template, 7, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.tags);
  }
}
function SelectformtagComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 18)(3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function SelectformtagComponent_div_13_div_1_Template_span_dblclick_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const tag_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.removeTag(tag_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectformtagComponent_div_13_div_1_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const tag_r17 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.removeTag(tag_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const tag_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r17);
  }
}
function SelectformtagComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectformtagComponent_div_13_div_1_Template, 7, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.tags);
  }
}
class SelectformtagComponent {
  constructor() {
    this.showDetails = true;
    this.showSelectAll = false;
    this.allowEmptyTags = false;
    this.singleSelection = false;
    this.isCollapsed = true;
    this.value = "-1";
    this.isSelectAll = false;
    this.onTagClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.touched = false;
    this.disabled = false;
    this.onChange = tags => {};
    this.onTouched = () => {};
  }
  ngOnChanges() {
    if (this.items && this.checkInput?.nativeElement?.checked) {
      this.checkInput.nativeElement.checked = false;
    }
  }
  onOptionsSelected(event) {
    this.value = event.target.value;
    this.addtoTags();
    event.target.value = "-1";
    this.isCollapsed = true;
  }
  onSelectAllChange(event) {
    if (event.target.checked) {
      this.tags = [];
      this.tags = this.items.map(s => s.text);
    } else {
      this.tags = [];
    }
    this.onChange(this.tags);
    this.isCollapsed = true;
  }
  addtoTags() {
    this.markAsTouched();
    if (this.value !== "-1" && !this.tags.includes(this.value)) {
      if (this.singleSelection) {
        this.tags = [this.value];
      } else {
        this.tags = [...this.tags, this.value];
      }
      this.onChange(this.tags);
    }
  }
  removeTag(value) {
    this.markAsTouched();
    this.tags = this.tags?.filter(s => s != value);
    this.resetSelectAll();
    this.onChange(this.tags);
  }
  openDetails(tag) {
    // const offCancaseRef = this.offCanvasService.open(OffcanvasComponent, { position: 'end' });
    // offCancaseRef.componentInstance.tagName = tag;
    this.onTagClick.emit(tag);
  }
  writeValue(inputTags) {
    this.tags = inputTags ?? [];
    this.resetSelectAll();
  }
  resetSelectAll() {
    if (this.tags.length === 0 && this.checkInput?.nativeElement?.checked) {
      this.checkInput.nativeElement.checked = false;
    }
  }
  registerOnChange(onChangeFn) {
    this.onChange = onChangeFn;
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  validate(control) {
    return !this.allowEmptyTags && this.tags?.length === 0 ? {
      tagsAreEmpty: true
    } : null;
  }
  registerOnValidatorChange(fn) {
    //throw new Error('Method not implemented.');
  }
  registerOnTouched(onTouchedFn) {
    this.onTouched = onTouchedFn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
}
SelectformtagComponent.ɵfac = function SelectformtagComponent_Factory(t) {
  return new (t || SelectformtagComponent)();
};
SelectformtagComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SelectformtagComponent,
  selectors: [["app-selectformtag"]],
  viewQuery: function SelectformtagComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.checkInput = _t.first);
    }
  },
  inputs: {
    toggleLabel: "toggleLabel",
    items: "items",
    showDetails: "showDetails",
    showSelectAll: "showSelectAll",
    allowEmptyTags: "allowEmptyTags",
    singleSelection: "singleSelection"
  },
  outputs: {
    onTagClick: "onTagClick"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SelectformtagComponent)
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
    multi: true,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SelectformtagComponent)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 14,
  vars: 8,
  consts: [["for", "placesInput", 1, "form-label"], ["type", "button", "aria-controls", "toggleLabelLink", 1, "btn", "btn-link", 3, "click"], [1, "bi", "bi-chevron-down"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], ["class", "form-control form-check form-switch", 4, "ngIf"], ["aria-label", ".form-select example", 1, "form-control", "form-select", 3, "ngModel", "ngModelChange", "change"], ["value", "-1"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "itag-container", 4, "ngIf"], [1, "form-control", "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input", 3, "change"], ["checkInput", ""], ["for", "flexSwitchCheckDefault", 1, "form-check-label"], [3, "ngValue"], [1, "itag-container"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col"], [1, "itag-tag", "clickable", 3, "click"], [1, "close", 3, "click"], [1, "itag-tag", 3, "dblclick"]],
  template: function SelectformtagComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectformtagComponent_Template_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function SelectformtagComponent_Template_div_ngbCollapseChange_5_listener($event) {
        return ctx.isCollapsed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SelectformtagComponent_div_7_Template, 5, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectformtagComponent_Template_select_ngModelChange_8_listener($event) {
        return ctx.value = $event;
      })("change", function SelectformtagComponent_Template_select_change_8_listener($event) {
        return ctx.onOptionsSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Choose");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SelectformtagComponent_option_11_Template, 2, 1, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SelectformtagComponent_div_12_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SelectformtagComponent_div_13_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toggleLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSelectAll);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDetails);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapse],
  styles: [".btn[_ngcontent-%COMP%] {\n  --bs-btn-padding-x: 0px;\n  --bs-btn-padding-y: 0px;\n  font-size: xx-large;\n  font-weight: bolder;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  text-decoration: none;\n}\n\n.itag-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.itag-container[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%] {\n  background-color: #eaeefd;\n}\n\n.itag-tag[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 3px;\n  border: 1px solid rgb(190, 185, 185);\n  border-radius: 5px;\n  line-height: 35px;\n  cursor: pointer;\n  word-break: break-all;\n  color: blue;\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: 0.55rem;\n  color: rgb(80, 78, 78);\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc2VsZWN0Zm9ybXRhZy9zZWxlY3Rmb3JtdGFnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBRUo7QUFESTtFQUNJLHlCQUFBO0FBR1I7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFLQSxXQUFBO0FBRko7QUFGSTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7QUFJUjtBQURJO0VBQ0ksaUJBQUE7QUFHUjtBQUZRO0VBQ0EsVUFBQTtBQUlSIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICAtLWJzLWJ0bi1wYWRkaW5nLXg6IDBweDtcclxuICAgIC0tYnMtYnRuLXBhZGRpbmcteTogMHB4O1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5pdGFnLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbiAgICAuY2xpY2thYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlZWZkO1xyXG4gICAgfVxyXG4gfVxyXG4gIFxyXG4uaXRhZy10YWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzozcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLCAxODUsIDE4NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDozNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLjU1cmVtO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoODAsIDc4LCA3OCk7XHJcbiAgICB9XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7381:
/*!**********************************************************!*\
  !*** ./src/app/components/common/tags/tags.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsComponent": () => (/* binding */ TagsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);





function TagsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_div_4_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const tag_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.openDetails(tag_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_div_4_Template_i_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const tag_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.openDetails(tag_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1.name);
  }
}
const _c0 = function () {
  return {
    "vertical-align": "middle"
  };
};
class TagsComponent {
  constructor() {
    this.onTagClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.touched = false;
    this.disabled = false;
    this.onChange = tags => {};
    this.onTouched = () => {};
  }
  ngOnChanges(changes) {
    let tagChanges = changes['tags'];
    if (tagChanges && tagChanges.previousValue && tagChanges.currentValue && tagChanges.previousValue !== tagChanges.currentValue) {
      this.tags = tagChanges.currentValue;
    }
  }
  openDetails(tag) {
    this.onTagClick.emit(tag);
  }
  writeValue(inputTags) {
    this.tags = inputTags ?? [];
  }
  registerOnChange(onChangeFn) {
    this.onChange = onChangeFn;
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  validate(control) {
    //return (!this.allowEmptyTags && this.tags?.length === 0) ? { tagsAreEmpty: true } : null;
    return null;
  }
  registerOnValidatorChange(fn) {
    //throw new Error('Method not implemented.');
  }
  registerOnTouched(onTouchedFn) {
    this.onTouched = onTouchedFn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) {
  return new (t || TagsComponent)();
};
TagsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TagsComponent,
  selectors: [["app-tags"]],
  inputs: {
    caption: "caption",
    tags: "tags"
  },
  outputs: {
    onTagClick: "onTagClick"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TagsComponent)
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
    multi: true,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TagsComponent)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 4,
  consts: [[1, "form-label", "mb-0"], [1, "itag-container"], [4, "ngFor", "ngForOf"], [1, "bi", "bi-plus-square", "text-primary", 3, "ngStyle", "click"], [1, "itag-tag", 3, "click"], [1, "bi", "bi-pencil", "text-primary", 3, "click"]],
  template: function TagsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TagsComponent_div_4_Template, 4, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_Template_i_click_5_listener() {
        return ctx.openDetails(null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.caption);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule],
  styles: [".itag-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.itag-tag[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 1px 2px 0px 3px;\n  border: 2px solid rgb(190, 185, 185);\n  border-color: #6aa8f5;\n  border-radius: 5px;\n  line-height: 35px;\n  cursor: pointer;\n  word-break: break-all;\n  color: blue;\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: 0.55rem;\n  color: rgb(80, 78, 78);\n}\n.itag-tag[_ngcontent-%COMP%]   .bi-pencil[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUtBLFdBQUE7QUFISjtBQURJO0VBQ1Esb0JBQUE7RUFDSixzQkFBQTtBQUdSO0FBQUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFFUiIsInNvdXJjZXNDb250ZW50IjpbIi5pdGFnLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbn1cclxuICBcclxuLml0YWctdGFnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmc6MXB4IDJweCAwcHggM3B4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE5MCwgMTg1LCAxODUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNmFhOGY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MzVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNTVyZW07XHJcbiAgICAgICAgY29sb3I6IHJnYig4MCwgNzgsIDc4KTtcclxuICAgICAgICB9XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIC5iaS1wZW5jaWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 5987:
/*!************************************************************!*\
  !*** ./src/app/components/common/toast/toast.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastComponent": () => (/* binding */ ToastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_models_event_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/event-types.enum */ 5356);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ 2782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9295);







const _c0 = ["toastElement"];
class ToastComponent {
  constructor() {
    this.disposeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {
    this.show();
  }
  show() {
    this.toast = new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Toast(this.toastEl.nativeElement, this.type === src_app_models_event_types_enum__WEBPACK_IMPORTED_MODULE_0__.EventTypes.Error ? {
      autohide: false
    } : {
      delay: 5000
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.toastEl.nativeElement, 'hidden.bs.toast').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(() => this.hide());
    this.toast.show();
  }
  hide() {
    this.toast.dispose();
    this.disposeEvent.emit();
  }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) {
  return new (t || ToastComponent)();
};
ToastComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ToastComponent,
  selectors: [["app-toast"]],
  viewQuery: function ToastComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.toastEl = _t.first);
    }
  },
  inputs: {
    type: "type",
    title: "title",
    message: "message"
  },
  outputs: {
    disposeEvent: "disposeEvent"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 8,
  vars: 3,
  consts: [["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "fade", "toast-width", "mt-2", 3, "ngClass"], ["toastElement", ""], [1, "toast-header"], [1, "me-auto"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "toast-body"]],
  template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2)(3, "strong", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToastComponent_Template_button_click_5_listener() {
        return ctx.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.message);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
  styles: [".success[_ngcontent-%COMP%] {\r\n  background-color: #198754;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  background-color: #0d6efd;\r\n}\r\n\r\n.warning[_ngcontent-%COMP%] {\r\n  background-color: #ffbf00;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n  background-color: #dc3545;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk4NzU0O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkNmVmZDtcclxufVxyXG5cclxuLndhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMDA7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2635:
/*!****************************************************************!*\
  !*** ./src/app/components/common/toaster/toaster.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToasterComponent": () => (/* binding */ ToasterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toast/toast.component */ 5987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);





function ToasterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "app-toast", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("disposeEvent", function ToasterComponent_div_1_Template_app_toast_disposeEvent_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.dispose(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", toast_r1.type)("title", toast_r1.title)("message", toast_r1.message);
  }
}
class ToasterComponent {
  constructor(toastService, cdr) {
    this.toastService = toastService;
    this.cdr = cdr;
    this.currentToasts = [];
  }
  ngOnInit() {
    this.subscribeToToasts();
  }
  subscribeToToasts() {
    this.toastService.toastEvents.subscribe(toasts => {
      const currentToast = {
        type: toasts.type,
        title: toasts.title,
        message: toasts.message
      };
      this.currentToasts.push(currentToast);
      this.cdr.detectChanges();
    });
  }
  dispose(index) {
    this.currentToasts.splice(index, 1);
    this.cdr.detectChanges();
  }
}
ToasterComponent.ɵfac = function ToasterComponent_Factory(t) {
  return new (t || ToasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};
ToasterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ToasterComponent,
  selectors: [["app-toaster"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "toaster", "position-fixed", "top-0", "end-0", "px-3", "py-2", "m-16"], [4, "ngFor", "ngForOf"], [3, "type", "title", "message", "disposeEvent"]],
  template: function ToasterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ToasterComponent_div_1_Template, 2, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currentToasts);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _toast_toast_component__WEBPACK_IMPORTED_MODULE_0__.ToastComponent],
  styles: [".toaster[_ngcontent-%COMP%] {\r\n  z-index: 2000;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vdG9hc3Rlci90b2FzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIudG9hc3RlciB7XHJcbiAgei1pbmRleDogMjAwMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1749:
/*!*********************************************!*\
  !*** ./src/app/components/componentBase.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentBase": () => (/* binding */ componentBase)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_store_trip_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/trip.selectors */ 1363);


class componentBase {
  constructor(store, authService) {
    this.store = store;
    this.authService = authService;
    this.isLoading$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.select)(src_app_store_trip_selectors__WEBPACK_IMPORTED_MODULE_0__.selectIsLoading));
    this.error$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.select)(src_app_store_trip_selectors__WEBPACK_IMPORTED_MODULE_0__.selectError));
  }
}

/***/ }),

/***/ 3125:
/*!***********************************************************************!*\
  !*** ./src/app/components/expensesummary/expensesummary.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensesummaryComponent": () => (/* binding */ ExpensesummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



function ExpensesummaryComponent_div_9_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dbt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dbt_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-weight", dbt_r3.value > 0 ? "bold" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dbt_r3.value.toFixed(2), " ");
  }
}
function ExpensesummaryComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "div", 11)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "div", 12)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total Spent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13)(13, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Amount give to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExpensesummaryComponent_div_9_div_17_Template, 5, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.spent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.debt);
  }
}
class ExpensesummaryComponent {}
ExpensesummaryComponent.ɵfac = function ExpensesummaryComponent_Factory(t) {
  return new (t || ExpensesummaryComponent)();
};
ExpensesummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ExpensesummaryComponent,
  selectors: [["app-expensesummary"]],
  inputs: {
    data: "data"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 10,
  vars: 1,
  consts: [[1, "bg-light", "pb-3", "container-fluid"], ["id", "minimal-statistics"], [1, "row"], [1, "col-12", "mt-3", "mb-1"], [1, "text"], ["class", "col-xl-3 col-sm-6 col-12", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-sm-6", "col-12"], [1, "card"], [1, "card-content"], [1, "card-body", "cleartfix"], [1, "media", "align-items-stretch"], [1, "media-body"], [1, "col"], [1, "col", "text-end"], [1, "align-self-center"], ["class", "row", 4, "ngFor", "ngForOf"]],
  template: function ExpensesummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Expense Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Individual spents and payments to be done");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExpensesummaryComponent_div_9_Template, 18, 3, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6248:
/*!***************************************************!*\
  !*** ./src/app/components/flow/flow.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlowComponent": () => (/* binding */ FlowComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class FlowComponent {
  constructor() {}
  ngOnInit() {}
}
FlowComponent.ɵfac = function FlowComponent_Factory(t) {
  return new (t || FlowComponent)();
};
FlowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FlowComponent,
  selectors: [["app-flow"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 37,
  vars: 0,
  consts: [[1, "text-center"], [1, "container", "mt-3"], [1, "row", "g-0", "b-1"], [1, "col-lg-4"], [1, "card", "text-black", "bg-plan", "rounded-0"], [1, "card-body"], [1, "card-text", "text-start"], [1, "card", "text-black", "bg-prepare", "rounded-0"], [1, "card", "text-black", "bg-tripon", "rounded-0"]],
  template: function FlowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Travel Plan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6)(9, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Capture where, when and with whom travelling");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Capture visiting places, transport, activities, stay and expenses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3)(14, "div", 7)(15, "div", 5)(16, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Prepare");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 6)(19, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Track your preparation check list");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Track your bag items using checklist");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Track your preparation status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3)(26, "div", 8)(27, "div", 5)(28, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 6)(31, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Trip summary showed as a dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Shared expense report");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Share trips with others");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
  styles: [".container[_ngcontent-%COMP%]   .bg-plan[_ngcontent-%COMP%] {\n  background-color: rgb(99, 155, 228);\n}\n.container[_ngcontent-%COMP%]   .bg-prepare[_ngcontent-%COMP%] {\n  background-color: rgb(235, 233, 126);\n}\n.container[_ngcontent-%COMP%]   .bg-tripon[_ngcontent-%COMP%] {\n  background-color: rgb(173, 221, 159);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mbG93L2Zsb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQ0FBQTtBQUFKO0FBRUU7RUFDRSxvQ0FBQTtBQUFKO0FBRUU7RUFDRSxvQ0FBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgLmJnLXBsYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAxNTUsIDIyOCk7XHJcbiAgfVxyXG4gIC5iZy1wcmVwYXJlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzMywgMTI2KTtcclxuICB9XHJcbiAgLmJnLXRyaXBvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAyMjEsIDE1OSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/carousel/carousel.component */ 5211);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





class HomeComponent {
  constructor() {}
  ngOnInit() {}
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 0,
  consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-md-4", "pull-md-left"], [1, "col-md-8", "pull-md-right"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-carousel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_0__.CarouselComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);








function LoginComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please enter the Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class LoginComponent {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.reactiveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
    });
  }
  login() {
    if (this.reactiveForm.valid) {
      this.authService.SignIn(this.reactiveForm.value.email, this.reactiveForm.value.password);
    }
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 24,
  vars: 4,
  consts: [[1, "mb-3"], [3, "formGroup", "ngSubmit"], ["for", "emailInput", 1, "form-label"], ["type", "email", "id", "emailInput", "formControlName", "email", 1, "form-control"], ["class", "showValidation", 4, "ngIf"], ["for", "passwordInput", 1, "form-label"], ["type", "password", "id", "passwordInput", "formControlName", "password", 1, "form-control"], [1, "col", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "text-center", "mt-4", 3, "disabled"], [1, "text-center", "mt-3"], ["routerLink", "/signup", 1, "button"], ["routerLink", "/forgot", 1, "button"], [1, "showValidation"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0)(4, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0)(9, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Go");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "a", 10)(18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "a", 11)(22, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reactiveForm.get("email").valid && ctx.reactiveForm.get("email").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reactiveForm.get("password").valid && ctx.reactiveForm.get("password").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.reactiveForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: red 1px solid;\n}\n\n.showValidation[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiByZWQgMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uc2hvd1ZhbGlkYXRpb24ge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4618:
/*!***********************************************************!*\
  !*** ./src/app/components/new-trip/new-trip.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTripComponent": () => (/* binding */ NewTripComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _common_inputformtag_inputformtag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/inputformtag/inputformtag.component */ 6403);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentBase */ 1749);
/* harmony import */ var src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/trip.action */ 8859);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_delete_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/delete/delete.component */ 259);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/event.service */ 9426);

















const _c0 = ["dpTravel"];
function NewTripComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Please add places");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function NewTripComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mouseenter", function NewTripComponent_ng_template_13_Template_span_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const date_r13 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.hoveredDate = date_r13);
    })("mouseleave", function NewTripComponent_ng_template_13_Template_span_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r17.hoveredDate = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r13 = ctx.$implicit;
    const focused_r14 = ctx.focused;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disable", ctx_r3.isDisabled(date_r13))("focused", focused_r14)("range", ctx_r3.isRange(date_r13))("faded", ctx_r3.isHovered(date_r13) || ctx_r3.isInside(date_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", date_r13.day, " ");
  }
}
function NewTripComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Please select Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function NewTripComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Please select End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function NewTripComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Please add people");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function NewTripComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "app-delete", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onDelete", function NewTripComponent_div_22_Template_app_delete_onDelete_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function NewTripComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "You are removing places ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, ". All related data also will be deleted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r8.getDeletedPlaces());
  }
}
function NewTripComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewTripComponent_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.saveTrip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r9.formValid && ctx_r9.formDirty);
  }
}
function NewTripComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewTripComponent_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r22.cancelChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function NewTripComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewTripComponent_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.createTrip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r11.formValid);
  }
}
function NewTripComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewTripComponent_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.onNext());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]("Next >");
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    year: a0,
    month: a1,
    day: a2
  };
};
class NewTripComponent extends _componentBase__WEBPACK_IMPORTED_MODULE_1__.componentBase {
  constructor(store, authService, fb, toastService, eventService) {
    super(store, authService);
    this.fb = fb;
    this.toastService = toastService;
    this.eventService = eventService;
    this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.formValid = false;
    this.formDirty = false;
    this.isPastTrip = false;
    this.deletePlaces = [];
    // Datepicker
    this.hoveredDate = null;
    this.current = new Date();
    this.minDate = {
      year: this.current.getFullYear(),
      month: this.current.getMonth() + 1,
      day: this.current.getDate()
    };
    this.isDisabled = date => {
      if (this.isPastTrip) {
        return false;
      }
      //below code for min and max date range working good.
      const jsDate = new Date(date.year, date.month - 1, date.day);
      let setDisable = jsDate < new Date(this.minDate.year, this.minDate.month - 1, this.minDate.day);
      return setDisable;
    };
  }
  ngOnInit() {
    if (this.trip) {
      let places = this.trip.places.map(obj => obj.name);
      let people = this.trip.people.map(obj => obj.name);
      let startAt = new Date(this.trip.start_at);
      let endAt = new Date(this.trip.end_at);
      if (endAt < new Date()) {
        this.isPastTrip = true;
      }
      this.reactiveForm = this.fb.group({
        places: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(places, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
        people: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(people, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
        fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDate(startAt.getFullYear(), startAt.getMonth() + 1, startAt.getDate()), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
        toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDate(endAt.getFullYear(), endAt.getMonth() + 1, endAt.getDate()), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required)
      });
    } else {
      this.reactiveForm = this.fb.group({
        places: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl([], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
        people: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl([], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
        fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
        toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required)
      });
    }
    this.formSubscription = this.reactiveForm.valueChanges.subscribe(data => {
      this.deletePlaces = this.trip?.places.filter(s => !data.places.includes(s.name));
      this.setFormState();
    });
  }
  getDeletedPlaces() {
    return this.deletePlaces.map(s => s.name).join(', ');
  }
  setFormState() {
    this.formValid = this.reactiveForm.valid;
    this.formDirty = this.reactiveForm.dirty;
  }
  ngAfterViewInit() {
    if (this.trip) {
      this.datepicker.navigateTo({
        year: this.reactiveForm.value.fromDate.year,
        month: this.reactiveForm.value.fromDate.month
      });
    }
  }
  // Date picker
  onDateSelection(date) {
    if (!this.reactiveForm.value.fromDate && !this.reactiveForm.value.toDate) {
      this.reactiveForm.patchValue({
        fromDate: date
      });
    } else if (this.reactiveForm.value.fromDate && !this.reactiveForm.value.toDate && (date.equals(this.reactiveForm.value.fromDate) || date.after(this.reactiveForm.value.fromDate))) {
      this.reactiveForm.patchValue({
        toDate: date
      });
    } else {
      this.reactiveForm.patchValue({
        toDate: null
      });
      this.reactiveForm.patchValue({
        fromDate: date
      });
    }
    this.reactiveForm.get('fromDate').markAsDirty();
    this.reactiveForm.get('toDate').markAsDirty();
  }
  isHovered(date) {
    return this.reactiveForm.value.fromDate && !this.reactiveForm.value.toDate && this.hoveredDate && date.after(this.reactiveForm.value.fromDate) && date.before(this.hoveredDate);
  }
  isInside(date) {
    return this.reactiveForm.value.toDate && date.after(this.reactiveForm.value.fromDate) && date.before(this.reactiveForm.value.toDate);
  }
  isRange(date) {
    return date.equals(this.reactiveForm.value.fromDate) || this.reactiveForm.value.toDate && date.equals(this.reactiveForm.value.toDate) || this.isInside(date) || this.isHovered(date);
  }
  // getDateString(obj: any) {
  //   let s = moment.utc(`${obj.year}-${obj.month}-${obj.day}`, 'YYYY-MM-DD');
  //   return `${s.format('dddd')}, ${s.format('DD')}-${s.format('MMM')}-${s.format('yyyy')}`;
  // }
  saveTrip() {
    if (this.reactiveForm.valid) {
      if (this.reactiveForm.dirty) {
        const {
          places,
          fromDate,
          toDate,
          people
        } = this.reactiveForm.value;
        const newPlaces = this.trip.places.filter(s => places.includes(s.name));
        const newPlacesNames = newPlaces.map(s => s.name);
        places.forEach(element => {
          if (!newPlacesNames.includes(element)) {
            newPlaces.push({
              name: element
            });
          }
        });
        const newPeople = this.trip.people.filter(s => people.includes(s.name));
        const newPeopleNames = newPeople.map(s => s.name);
        people.forEach(element => {
          if (!newPeopleNames.includes(element)) {
            newPeople.push({
              name: element
            });
          }
        });
        let trip = {
          places: newPlaces,
          start_at: moment__WEBPACK_IMPORTED_MODULE_3__.utc(`${fromDate.year}-${fromDate.month}-${fromDate.day}`, 'YYYY-M-D').toISOString(),
          end_at: moment__WEBPACK_IMPORTED_MODULE_3__.utc(`${toDate.year}-${toDate.month}-${toDate.day}`, 'YYYY-M-D').toISOString(),
          people: newPeople,
          userId: this.trip.userId,
          id: this.trip.id
        };
        this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__.updateTrip({
          trip: {
            ...trip
          }
        }));
        this.reactiveForm.markAsPristine();
        this.deletePlaces = [];
        this.setFormState();
      }
    }
  }
  createTrip() {
    if (this.reactiveForm.valid && this.reactiveForm.dirty) {
      this.formDirty = false;
      const {
        places,
        fromDate,
        toDate,
        people
      } = this.reactiveForm.value;
      let trip = {
        places: places.map(str => ({
          name: str
        })),
        start_at: moment__WEBPACK_IMPORTED_MODULE_3__.utc(`${fromDate.year}-${fromDate.month}-${fromDate.day}`, 'YYYY-M-D').toISOString(),
        end_at: moment__WEBPACK_IMPORTED_MODULE_3__.utc(`${toDate.year}-${toDate.month}-${toDate.day}`, 'YYYY-M-D').toISOString(),
        people: people.map(str => ({
          name: str
        })),
        userId: this.authService.user.uid,
        id: null
      };
      this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__.newTrip({
        trip: {
          ...trip
        }
      }));
      if (!!this.error$) {
        this.toastService.showWarningToast("New trip created.", "Capture information for each places in next screens");
        this.reactiveForm.markAsPristine();
        this.setFormState();
      } else {
        this.toastService.showErrorToast("Failed to Save", "Something went Wrong. Please report using feedback feature.");
        console.log(this.error$);
      }
    }
  }
  delete() {
    this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__.deleteTrip({
      id: this.trip.id
    }));
    this.eventService.onTripDelete(true);
  }
  onNext() {
    this.onNavigate.emit(true);
  }
  cancelChanges() {
    const places = this.trip.places.map(obj => obj.name);
    const people = this.trip.people.map(obj => obj.name);
    const startAt = new Date(this.trip.start_at);
    const endAt = new Date(this.trip.end_at);
    this.reactiveForm.reset({
      places,
      people,
      fromDate: new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDate(startAt.getFullYear(), startAt.getMonth() + 1, startAt.getDate()),
      toDate: new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDate(endAt.getFullYear(), endAt.getMonth() + 1, endAt.getDate())
    });
  }
  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }
}
NewTripComponent.ɵfac = function NewTripComponent_Factory(t) {
  return new (t || NewTripComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__.EventService));
};
NewTripComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: NewTripComponent,
  selectors: [["app-new-trip"]],
  viewQuery: function NewTripComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.datepicker = _t.first);
    }
  },
  inputs: {
    trip: "trip"
  },
  outputs: {
    onNavigate: "onNavigate"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
  decls: 30,
  vars: 19,
  consts: [[1, "container"], [1, "form-group", 3, "formGroup"], [1, "mb-2"], ["for", "placesInput", 1, "form-label"], ["id", "placesInput", "placeholderText", "Ex: Queenstown", "formControlName", "places"], ["class", "showValidation", 4, "ngIf"], ["for", "travelDatesInput", 1, "form-label"], ["id", "dpTravel", "outsideDays", "hidden", 1, "ngb-dp", 3, "displayMonths", "dayTemplate", "minDate", "markDisabled", "dateSelect"], ["dpTravel", ""], ["t", ""], ["for", "peopleInput", 1, "form-label"], ["id", "peopleInput", "placeholderText", "Ex: John or John's family", "formControlName", "people"], ["class", "mb-2", 4, "ngIf"], [1, "row", "mt-4"], [1, "col-sm", "text-center"], ["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-sm me-3", "autofocus", "false", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-sm ms-3", "autofocus", "false", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-sm", "autofocus", "false", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-sm", "autofocus", "false", 3, "click", 4, "ngIf"], [1, "showValidation"], [1, "custom-day", 3, "mouseenter", "mouseleave"], ["message", "Are you sure to delete this trip?", 3, "onDelete"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", "data-bs-dismiss", "alert", 1, "btn-close"], ["type", "button", "autofocus", "false", 1, "btn", "btn-primary", "btn-sm", "me-3", 3, "disabled", "click"], ["type", "button", "autofocus", "false", 1, "btn", "btn-primary", "btn-sm", "ms-3", 3, "click"], ["type", "button", "autofocus", "false", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["type", "button", "autofocus", "false", 1, "btn", "btn-primary", "btn-sm", 3, "click"]],
  template: function NewTripComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Travel places");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-inputformtag", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, NewTripComponent_div_6_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 2)(8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Travel Start - End Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ngb-datepicker", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dateSelect", function NewTripComponent_Template_ngb_datepicker_dateSelect_11_listener($event) {
        return ctx.onDateSelection($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, NewTripComponent_ng_template_13_Template, 2, 9, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, NewTripComponent_div_15_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, NewTripComponent_div_16_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 2)(18, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "People");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "app-inputformtag", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, NewTripComponent_div_21_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, NewTripComponent_div_22_Template, 2, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 13)(24, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, NewTripComponent_div_25_Template, 8, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, NewTripComponent_button_26_Template, 2, 1, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, NewTripComponent_button_27_Template, 2, 0, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, NewTripComponent_button_28_Template, 2, 1, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, NewTripComponent_button_29_Template, 2, 1, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.reactiveForm.get("places").valid && ctx.reactiveForm.get("places").touched && ctx.reactiveForm.get("places").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayMonths", 1)("dayTemplate", _r2)("minDate", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](15, _c1, ctx.minDate.year, ctx.minDate.month, ctx.minDate.day))("markDisabled", ctx.isDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.reactiveForm.get("fromDate").valid && ctx.reactiveForm.get("fromDate").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.reactiveForm.get("toDate").valid && ctx.reactiveForm.get("toDate").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.reactiveForm.get("people").valid && ctx.reactiveForm.get("people").touched && ctx.reactiveForm.get("people").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.trip);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.deletePlaces == null ? null : ctx.deletePlaces.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.trip !== undefined && ctx.formDirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.trip !== undefined && ctx.formDirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.trip === undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.trip !== undefined && !ctx.formDirty);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDatepickerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDatepicker, _common_inputformtag_inputformtag_component__WEBPACK_IMPORTED_MODULE_0__.InputformtagComponent, _common_delete_delete_component__WEBPACK_IMPORTED_MODULE_4__.DeleteComponent],
  styles: ["label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\napp-inputformtag.ng-invalid.ng-touched.ng-dirty[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border: red 1px solid;\n}\n\n.showValidation[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%]   .disable[_ngcontent-%COMP%] {\n  background-color: rgba(229, 233, 236, 0.5);\n  text-decoration: line-through;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.range[_ngcontent-%COMP%], .ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.disable[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  pointer-events: none;\n  text-decoration: line-through;\n  background-color: rgb(233, 233, 233);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uZXctdHJpcC9uZXctdHJpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0UsMENBQUE7RUFDQSw2QkFBQTtBQUNOO0FBRUU7RUFDRSx5QkFBQTtBQUFKO0FBRUU7O0VBRUUsa0NBQUE7RUFDQSxZQUFBO0FBQUo7QUFFRTtFQUNFLHdDQUFBO0FBQUo7QUFFRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5hcHAtaW5wdXRmb3JtdGFnLm5nLWludmFsaWQubmctdG91Y2hlZC5uZy1kaXJ0eSA+IGRpdiA+IGlucHV0IHtcclxuICAgIGJvcmRlcjogcmVkIDFweCBzb2xpZDtcclxufVxyXG5cclxuLnNob3dWYWxpZGF0aW9uIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubmdiLWRwIHtcclxuICAuY3VzdG9tLWRheSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICAuZGlzYWJsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMzMsIDIzNiwgMC41KTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkucmFuZ2UsXHJcbiAgLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkuZGlzYWJsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 661:
/*!*******************************************************************!*\
  !*** ./src/app/components/offcanvasbag/offcanvasbag.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffcanvasbagComponent": () => (/* binding */ OffcanvasbagComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../componentBase */ 1749);
/* harmony import */ var src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/trip.action */ 8859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);








function OffcanvasbagComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function OffcanvasbagComponent_div_9_Template_input_change_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onCheckedChange(item_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 17)(7, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffcanvasbagComponent_div_9_Template_i_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.removefromCheckList(item_r3.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", item_r3.checked);
  }
}
function OffcanvasbagComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffcanvasbagComponent_ng_container_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffcanvasbagComponent_ng_container_12_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.cancelChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function OffcanvasbagComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffcanvasbagComponent_ng_container_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.closeOffCanvas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "show": a0
  };
};
class OffcanvasbagComponent extends _componentBase__WEBPACK_IMPORTED_MODULE_0__.componentBase {
  constructor(store) {
    super(store);
    this.isOpen = false;
    this.userInput = '';
    this.bagItems = [];
    this.isChanged = false;
  }
  ngOnInit() {
    if (this.trip) {
      this.bagItems = this.trip.bag ?? [];
    }
  }
  get sortedItems() {
    return [...this.bagItems].sort((a, b) => {
      if (a.checked && !b.checked) {
        return 1;
      } else if (!a.checked && b.checked) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  addtoCheckList() {
    if (this.userInput.length > 0 && !this.bagItems.find(item => item.name === this.userInput)) {
      this.bagItems = [...this.bagItems, {
        name: this.userInput,
        checked: false
      }];
    }
    this.userInput = "";
    this.markasChanged();
  }
  markasChanged() {
    if (!this.isChanged) {
      this.isChanged = true;
    }
  }
  removefromCheckList(value) {
    this.bagItems = this.bagItems.filter(s => s.name != value);
    this.markasChanged();
  }
  onCheckedChange(item, event) {
    const updatedItem = {
      ...item,
      checked: event.target.checked
    };
    const index = this.bagItems.indexOf(item);
    this.bagItems = [...this.bagItems.slice(0, index), updatedItem, ...this.bagItems.slice(index + 1)];
    this.markasChanged();
  }
  toggleOffcanvas() {
    this.isOpen = !this.isOpen;
  }
  showOffCanvas() {
    this.isOpen = true;
  }
  closeOffCanvas() {
    this.isOpen = false;
  }
  onHidden() {
    // this.reactiveForm.reset();
    // this.setFormState();
  }
  save() {
    this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_1__.updateBag({
      bag: this.bagItems
    }));
    this.isChanged = false;
  }
  cancelChanges() {
    this.bagItems = this.trip.bag ?? [];
    this.isChanged = false;
  }
}
OffcanvasbagComponent.ɵfac = function OffcanvasbagComponent_Factory(t) {
  return new (t || OffcanvasbagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};
OffcanvasbagComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: OffcanvasbagComponent,
  selectors: [["app-offcanvasbag"]],
  inputs: {
    trip: "trip"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 14,
  vars: 7,
  consts: [["tabindex", "-1", "id", "myOffcanvas", "aria-labelledby", "offcanvasLabel", 1, "offcanvas", "offcanvas-end", 3, "ngClass", "hidden"], [1, "offcanvas-header"], [1, "offcanvas-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "text-reset", 3, "click"], [1, "offcanvas-body"], ["type", "text", "placeholder", "Ex: Mobile Charger", "id", "bagitemInput", 1, "form-control", "itag-input", "mb-3", 3, "ngModel", "ngModelChange", "keydown.enter", "focusout"], [1, "container"], [1, "content"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-center", "mt-3"], [1, "col", "text-center"], [4, "ngIf"], [1, "row", "mb-2"], [1, "col"], [1, "form-check", "form-switch"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "change"], [1, "col", "d-flex", "justify-content-end"], [1, "bi", "bi-trash", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "ms-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "text-center", 3, "click"]],
  template: function OffcanvasbagComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("hidden", function OffcanvasbagComponent_Template_div_hidden_0_listener() {
        return ctx.onHidden();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Bag Checklist");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffcanvasbagComponent_Template_button_click_4_listener() {
        return ctx.closeOffCanvas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OffcanvasbagComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.userInput = $event;
      })("keydown.enter", function OffcanvasbagComponent_Template_input_keydown_enter_6_listener() {
        return ctx.addtoCheckList();
      })("focusout", function OffcanvasbagComponent_Template_input_focusout_6_listener() {
        return ctx.addtoCheckList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OffcanvasbagComponent_div_9_Template, 8, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, OffcanvasbagComponent_ng_container_12_Template, 5, 0, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OffcanvasbagComponent_ng_container_13_Template, 3, 0, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sortedItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isChanged);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isChanged);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: auto;\n  overflow-x: hidden;\n}\n\n.offcanvas-end[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(100%);\n  border-left: 0px;\n}\n\n.offcanvas.show[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.showValidation[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.offcanvas-backdrop[_ngcontent-%COMP%] {\n  opacity: 0.5; \n  background-color: black; \n}\n\n.offcanvas[_ngcontent-%COMP%] {\n  border-color: rgb(21, 22, 22);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vZmZjYW52YXNiYWcvb2ZmY2FudmFzYmFnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFNRTtFQUNFLHdCQUFBO0FBSEo7O0FBTUU7RUFDRSxVQUFBO0FBSEo7O0FBTUU7RUFDRSxZQUFBLEVBQUEsNEJBQUE7RUFDQSx1QkFBQSxFQUFBLHVDQUFBO0FBSEo7O0FBS0U7RUFDRSw2QkFBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy9oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7IC8qIHN1YnRyYWN0IGZvb3RlciBoZWlnaHQgKi9cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4ub2ZmY2FudmFzLWVuZCB7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgICAvL21heC13aWR0aDogODAlO1xyXG4gICAgLy8gdG9wOiAyJTsgLyogQWRkIHRoaXMgdG8gdmVydGljYWxseSBhbGlnbiB0aGUgb2ZmY2FudmFzIHRvIGNlbnRlciAqL1xyXG4gICAgLy8gYm90dG9tOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLm9mZmNhbnZhcy5zaG93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcblxyXG4gIC5zaG93VmFsaWRhdGlvbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgLm9mZmNhbnZhcy1iYWNrZHJvcCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7IC8qIHNldHMgdGhlIG9wYWNpdHkgdG8gNTAlICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgLyogc2V0cyB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBibGFjayAqL1xyXG4gIH1cclxuICAub2ZmY2FudmFzIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxLCAyMiwgMjIpO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4202:
/*!*******************************************************************!*\
  !*** ./src/app/components/offcanvastag/offcanvastag.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffcanvastagComponent": () => (/* binding */ OffcanvastagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var _common_selectformtag_selectformtag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/selectformtag/selectformtag.component */ 507);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/delete/delete.component */ 259);










function OffcanvastagComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Name required or Already exists");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function OffcanvastagComponent_ng_container_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Number required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function OffcanvastagComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6)(2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, OffcanvastagComponent_ng_container_12_div_5_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-selectformtag", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-selectformtag", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.reactiveForm.get("cost").valid && ctx_r1.reactiveForm.get("cost").touched && ctx_r1.reactiveForm.get("cost").dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("singleSelection", true)("allowEmptyTags", true)("items", ctx_r1.data == null ? null : ctx_r1.data.people)("showDetails", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("allowEmptyTags", true)("items", ctx_r1.data == null ? null : ctx_r1.data.people)("showDetails", false)("showSelectAll", true);
  }
}
function OffcanvastagComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "app-delete", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onDelete", function OffcanvastagComponent_div_17_Template_app_delete_onDelete_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("message", "Are you sure to delete this ", ctx_r2.title.split(" ")[1], "?");
  }
}
function OffcanvastagComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OffcanvastagComponent_div_19_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OffcanvastagComponent_div_19_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r3.formValid);
  }
}
const _c0 = function (a0) {
  return {
    "show": a0
  };
};
class OffcanvastagComponent {
  constructor(fb) {
    this.fb = fb;
    this.isOpen = false;
    this.data = {};
    this.showExpense = true;
    this.title = '';
    this.placeholderValue = '';
    this.formValid = false;
    this.formDirty = false;
    this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.initialValue = {};
    const numberRegExp = /^\d+(\.\d+)?$/;
    this.reactiveForm = this.fb.group({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(numberRegExp)]),
      paidBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      sharedWith: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl([])
    });
    this.nameSubscription = this.reactiveForm.get('name').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200)).subscribe(changes => {
      if (changes) {
        let formatedChanges = changes.replace(/\w+/g, lodash__WEBPACK_IMPORTED_MODULE_1__.startCase);
        this.data = {
          ...this.data,
          tag: {
            ...this.data.tag,
            name: formatedChanges
          }
        };
        this.setFormState();
      }
    });
    this.commentsSubscription = this.reactiveForm.get('comments').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(500)).subscribe(changes => {
      if (changes) {
        this.data = {
          ...this.data,
          tag: {
            ...this.data.tag,
            comments: changes
          }
        };
        this.setFormState();
      }
    });
    this.costSubscription = this.reactiveForm.get('cost').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(500)).subscribe(changes => {
      if (changes) {
        this.data = {
          ...this.data,
          tag: {
            ...this.data.tag,
            expense: {
              ...this.data.tag.expense,
              cost: changes
            }
          }
        };
        this.setFormState();
      }
    });
    this.paidBySubscription = this.reactiveForm.get('paidBy').valueChanges.subscribe(changes => {
      if (changes) {
        const newitems = changes?.filter(value => !this.data.tag.expense?.paidBy?.find(obj => obj === value)) ?? [];
        const removeItems = this.data.tag.expense?.paidBy?.filter(name => changes.includes(name)) ?? [];
        this.data = {
          ...this.data,
          tag: {
            ...this.data.tag,
            expense: {
              ...this.data.tag.expense,
              paidBy: removeItems.concat(newitems)
            }
          }
        };
        this.setFormState();
      }
    });
    this.sharedWithSubscription = this.reactiveForm.get('sharedWith').valueChanges.subscribe(changes => {
      if (changes) {
        const newitems = changes?.filter(value => !this.data.tag.expense?.sharedWith?.find(obj => obj === value)) ?? [];
        const removeItems = this.data.tag.expense?.sharedWith?.filter(name => changes.includes(name)) ?? [];
        this.data = {
          ...this.data,
          tag: {
            ...this.data.tag,
            expense: {
              ...this.data.tag.expense,
              sharedWith: removeItems.concat(newitems)
            }
          }
        };
        this.setFormState();
      }
    });
  }
  ngOnChanges() {
    if (this.data) {
      this.initialValue = {
        ...this.initialValue,
        id: this.data.tag?.id ?? null,
        name: this.data.tag?.name ?? null,
        comments: this.data.tag?.comments ?? null,
        expense: this.data.tag?.expense ?? null
      };
      this.reactiveForm.patchValue({
        id: this.data.tag?.id ?? null,
        name: this.data.tag?.name ?? null,
        comments: this.data.tag?.comments ?? null,
        cost: this.data.tag?.expense?.cost ?? null,
        paidBy: this.data.tag?.expense?.paidBy ?? null,
        sharedWith: this.data?.tag?.expense?.sharedWith ?? null
      }, {
        emitEvent: false
      });
    }
  }
  setFormState() {
    this.formValid = this.reactiveForm.valid;
    this.formDirty = this.reactiveForm.dirty;
  }
  toggleOffcanvas() {
    this.isOpen = !this.isOpen;
  }
  showOffCanvas() {
    this.isOpen = true;
  }
  closeOffCanvas() {
    this.isOpen = false;
    this.reactiveForm.reset();
    this.setFormState();
  }
  onHidden() {}
  save() {
    if (this.formValid && this.formDirty) {
      this.onSave.emit(this.data);
      this.reactiveForm.markAsPristine();
      this.setFormState();
    }
  }
  delete() {
    this.data = {
      ...this.data,
      isDelete: true
    };
    this.onSave.emit(this.data);
    this.reactiveForm.markAsPristine();
    this.setFormState();
  }
  cancel() {
    this.reactiveForm.reset({
      name: this.initialValue?.name,
      comments: this.initialValue?.comments,
      cost: this.initialValue?.expense?.cost,
      paidBy: this.initialValue?.expense?.paidBy,
      sharedWith: this.initialValue?.expense?.sharedWith
    });
    this.setFormState();
  }
  ngOnDestroy() {
    if (this.nameSubscription) {
      this.nameSubscription.unsubscribe();
    }
    if (this.commentsSubscription) {
      this.commentsSubscription.unsubscribe();
    }
    if (this.costSubscription) {
      this.costSubscription.unsubscribe();
    }
    if (this.paidBySubscription) {
      this.paidBySubscription.unsubscribe();
    }
    if (this.sharedWithSubscription) {
      this.sharedWithSubscription.unsubscribe();
    }
  }
}
OffcanvastagComponent.ɵfac = function OffcanvastagComponent_Factory(t) {
  return new (t || OffcanvastagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
};
OffcanvastagComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: OffcanvastagComponent,
  selectors: [["app-offcanvastag"]],
  inputs: {
    data: "data",
    showExpense: "showExpense",
    title: "title",
    placeholderValue: "placeholderValue"
  },
  outputs: {
    onSave: "onSave"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 22,
  vars: 10,
  consts: [["tabindex", "-1", "id", "myOffcanvas", "aria-labelledby", "offcanvasLabel", 1, "offcanvas", "offcanvas-end", 3, "ngClass", "hidden"], [1, "offcanvas-header"], ["id", "offcanvasLabel", 1, "offcanvas-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "text-reset", "d-flex", "justify-content-end", 3, "click"], [1, "offcanvas-body"], [1, "form-group", 3, "formGroup"], [1, "mb-3"], ["for", "nameInput", 1, "form-label"], ["type", "text", "id", "nameInput", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "showValidation", 4, "ngIf"], [4, "ngIf"], ["for", "commentsInput", 1, "form-label"], ["id", "floatingTextareaComments", "formControlName", "comments", 1, "form-control"], ["class", "col mt-7 mb-5", 4, "ngIf"], [1, "col", "text-center", "mt-5"], ["class", "row mb-3", 4, "ngIf"], ["type", "submit", "autofocus", "false", 1, "btn", "btn-primary", "btn-sm", "text-center", 3, "click"], [1, "showValidation"], ["for", "costInput", 1, "form-label"], ["type", "text", "placeholder", "0.00", "aria-placeholder", "0.00", "id", "floatingInputCost", "name", "name", "formControlName", "cost", 1, "form-control"], ["id", "paidBySelect", "toggleLabel", "Paid By", "formControlName", "paidBy", 3, "singleSelection", "allowEmptyTags", "items", "showDetails"], ["id", "sharedWithSelect", "toggleLabel", "Split expense equally among", "formControlName", "sharedWith", 3, "allowEmptyTags", "items", "showDetails", "showSelectAll"], [1, "col", "mt-7", "mb-5"], [3, "message", "onDelete"], [1, "row", "mb-3"], ["col-sm-6", "", "text-center", ""], ["type", "submit", "autofocus", "false", 1, "btn", "btn-primary", "text-center", "btn-sm", "me-2", 3, "disabled", "click"], ["type", "submit", "autofocus", "false", 1, "btn", "btn-primary", "text-center", "btn-sm", "ms-2", 3, "click"]],
  template: function OffcanvastagComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("hidden", function OffcanvastagComponent_Template_div_hidden_0_listener() {
        return ctx.onHidden();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OffcanvastagComponent_Template_button_click_4_listener() {
        return ctx.closeOffCanvas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "form", 5)(7, "div", 6)(8, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, OffcanvastagComponent_div_11_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, OffcanvastagComponent_ng_container_12_Template, 10, 9, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "textarea", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, OffcanvastagComponent_div_17_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, OffcanvastagComponent_div_19_Template, 6, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OffcanvastagComponent_Template_button_click_20_listener() {
        return ctx.closeOffCanvas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholderValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.reactiveForm.get("name").valid && ctx.reactiveForm.get("name").touched && ctx.reactiveForm.get("name").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showExpense);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.title.includes("Edit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formDirty);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _common_selectformtag_selectformtag_component__WEBPACK_IMPORTED_MODULE_0__.SelectformtagComponent, _common_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__.DeleteComponent],
  styles: [".showValidation[_ngcontent-%COMP%] {\n  color: red;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vZmZjYW52YXN0YWcvb2ZmY2FudmFzdGFnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd1ZhbGlkYXRpb24ge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 6786:
/*!*****************************************************!*\
  !*** ./src/app/components/place/place.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceComponent": () => (/* binding */ PlaceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../componentBase */ 1749);
/* harmony import */ var src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/trip.action */ 8859);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_tags_tags_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/tags/tags.component */ 7381);
/* harmony import */ var _offcanvastag_offcanvastag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../offcanvastag/offcanvastag.component */ 4202);
/* harmony import */ var src_app_models_placeholder_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/placeholder.enum */ 2149);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nanoid */ 8170);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);
















function PlaceComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function PlaceComponent_ng_template_11_Template_span_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const date_r8 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.hoveredDate = date_r8);
    })("mouseleave", function PlaceComponent_ng_template_11_Template_span_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.hoveredDate = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r8 = ctx.$implicit;
    const focused_r9 = ctx.focused;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disable", ctx_r2.isDisabled(date_r8))("focused", focused_r9)("range", ctx_r2.isRange(date_r8))("faded", ctx_r2.isHovered(date_r8) || ctx_r2.isInside(date_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", date_r8.day, " ");
  }
}
function PlaceComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_27_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.onPrevious());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r3.formDirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("< Previous");
  }
}
function PlaceComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_28_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.onPrevious());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.formDirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("< Previous");
  }
}
function PlaceComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_29_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.saveTrip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_29_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.cancelChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function PlaceComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_30_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.saveTrip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_30_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.cancelChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function PlaceComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_31_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.onNext());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r7.formDirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("Next >");
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    year: a0,
    month: a1,
    day: a2
  };
};
class PlaceComponent extends _componentBase__WEBPACK_IMPORTED_MODULE_0__.componentBase {
  constructor(fb, calendar, store) {
    super(store);
    this.fb = fb;
    this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.formValid = false;
    this.formDirty = false;
    this.nextSlideExists = false;
    this.offCanvasData = {};
    this.isPastTrip = false;
    this.placeholders = src_app_models_placeholder_enum__WEBPACK_IMPORTED_MODULE_5__.Placeholders;
    // Datepicker
    this.hoveredDate = null;
    this.current = new Date();
    this.minDate = {
      year: this.current.getFullYear(),
      month: this.current.getMonth() + 1,
      day: this.current.getDate()
    };
    this.maxDate = this.minDate;
    this.isDisabled = date => {
      const jsDate = new Date(date.year, date.month - 1, date.day);
      return jsDate < new Date(this.minDate.year, this.minDate.month - 1, this.minDate.day) || jsDate > new Date(this.maxDate.year, this.maxDate.month - 1, this.maxDate.day);
    };
  }
  ngOnInit() {
    if (this.trip) {
      this.setupReactiveForm();
    }
  }
  setupReactiveForm(isReset = false) {
    let currentPlace = this.trip.places[this.slideIndex];
    currentPlace = {
      ...currentPlace,
      transports: currentPlace.transports ?? [],
      stays: currentPlace.stays ?? [],
      activities: currentPlace.activities ?? [],
      food: currentPlace.food ?? [],
      shopping: currentPlace.shopping ?? [],
      notes: currentPlace.notes ?? []
    };
    this.nextSlideExists = !!this.trip.places[this.slideIndex + 1];
    let tripStartAt = new Date(this.trip.start_at);
    let tripEndAt = new Date(this.trip.end_at);
    if (tripEndAt < new Date()) {
      this.isPastTrip = true;
    }
    this.minDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(tripStartAt.getFullYear(), tripStartAt.getMonth() + 1, tripStartAt.getDate());
    this.maxDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(tripEndAt.getFullYear(), tripEndAt.getMonth() + 1, tripEndAt.getDate());
    const {
      name,
      start_at,
      end_at
    } = currentPlace;
    let startAt = start_at ? new Date(start_at) : null;
    let endAt = end_at ? new Date(end_at) : null;
    if (isReset) {
      this.reactiveForm.reset({
        name: name,
        fromDate: startAt ? new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(startAt.getFullYear(), startAt.getMonth() + 1, startAt.getDate()) : null,
        toDate: endAt ? new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(endAt.getFullYear(), endAt.getMonth() + 1, endAt.getDate()) : null,
        transports: currentPlace.transports,
        stays: currentPlace.stays,
        activities: currentPlace.activities,
        food: currentPlace.food,
        shopping: currentPlace.shopping,
        notes: currentPlace.notes
      });
    } else {
      this.reactiveForm = this.fb.group({
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(name),
        fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(startAt ? new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(startAt.getFullYear(), startAt.getMonth() + 1, startAt.getDate()) : null),
        toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(endAt ? new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(endAt.getFullYear(), endAt.getMonth() + 1, endAt.getDate()) : null),
        transports: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(currentPlace.transports),
        stays: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(currentPlace.stays),
        activities: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(currentPlace.activities),
        food: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(currentPlace.food),
        shopping: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(currentPlace.shopping),
        notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(currentPlace.notes)
      });
    }
  }
  setFormState() {
    this.formValid = this.reactiveForm.valid;
    this.formDirty = this.reactiveForm.dirty;
  }
  ngOnChanges(changes) {
    let tripIdChanges = changes['trip'];
    if (tripIdChanges && tripIdChanges.previousValue && tripIdChanges.currentValue && tripIdChanges.previousValue !== tripIdChanges.currentValue) {
      if (tripIdChanges.previousValue.name !== tripIdChanges.currentValue.name) {
        this.reactiveForm.patchValue({
          name: tripIdChanges.currentValue.name
        });
      }
      if (tripIdChanges.previousValue.start_at !== tripIdChanges.currentValue.start_at) {
        const startAt = new Date(tripIdChanges.currentValue.start_at);
        this.minDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(startAt.getFullYear(), startAt.getMonth() + 1, startAt.getDate());
        this.reactiveForm.patchValue({
          fromDate: this.minDate
        });
      }
      if (tripIdChanges.previousValue.end_at !== tripIdChanges.currentValue.end_at) {
        const endAt = new Date(tripIdChanges.currentValue.end_at);
        this.maxDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(endAt.getFullYear(), endAt.getMonth() + 1, endAt.getDate());
        this.reactiveForm.patchValue({
          toDate: this.maxDate
        });
      }
      if (tripIdChanges.previousValue.places.length !== tripIdChanges.currentValue.places.length) {
        this.nextSlideExists = !!this.trip.places[this.slideIndex + 1];
      }
    }
  }
  ngAfterViewInit() {
    // //const datePickerRef = this.datePicker.nativeElement;
    // if (this.trip) {
    //   this.datePicker.nativeElement.navigateTo({year: this.reactiveForm.value.fromDate.year, month: this.reactiveForm.value.fromDate.month});
    // }
  }
  ngOnDestroy() {}
  tagClicked(type, title, tag, showExpense = true) {
    let tagData = {};
    tagData.type = type;
    tagData.tag = tag ? this.reactiveForm.get(type).value?.find(s => s.id === tag.id) : null;
    tagData.people = this.trip.people.map(s => {
      return {
        text: s.name,
        value: s.name
      };
    });
    this.offCanvasData = tagData;
    this.offcanvastagComponent.showExpense = showExpense;
    this.offcanvastagComponent.title = tag ? `Edit ${title}` : `Add ${title}`;
    this.offcanvastagComponent.placeholderValue = this.placeholders[type];
    this.offcanvastagComponent.showOffCanvas();
  }
  saveTagData(changes) {
    if (changes.isDelete) {
      const updatedItems = this.reactiveForm.get(changes.type).value.filter(s => s.id !== changes.tag.id);
      this.reactiveForm.patchValue({
        [changes.type]: updatedItems
      });
    } else {
      if (!changes.tag.id) {
        //Add
        const updatedTag = [...this.reactiveForm.get(changes.type).value, {
          id: (0,nanoid__WEBPACK_IMPORTED_MODULE_9__.nanoid)(6),
          name: changes.tag.name,
          comments: changes.tag.comments ?? null,
          expense: changes.tag.expense ?? null
        }];
        this.reactiveForm.patchValue({
          [changes.type]: updatedTag
        });
      } else {
        //Edit
        const indexTag = this.reactiveForm.get(changes.type).value.findIndex(s => s.id === changes.tag.id);
        const changedTag = {
          ...this.reactiveForm.get(changes.type).value[indexTag],
          id: changes.tag.id,
          name: changes.tag.name,
          comments: changes.tag.comments ?? null,
          expense: changes.tag.expense ?? null
        };
        const updatedTag = [...this.reactiveForm.get(changes.type).value.slice(0, indexTag), changedTag, ...this.reactiveForm.get(changes.type).value.slice(indexTag + 1)];
        this.reactiveForm.patchValue({
          [changes.type]: updatedTag
        });
      }
    }
    this.saveTrip();
  }
  onNext() {
    this.onNavigate.emit(true);
  }
  onPrevious() {
    this.onNavigate.emit(false);
  }
  saveTrip() {
    if (this.reactiveForm.valid) {
      const {
        name,
        fromDate,
        toDate,
        transports,
        stays,
        activities,
        food,
        shopping,
        notes
      } = this.reactiveForm.value;
      let place = {
        name: name,
        start_at: fromDate ? moment__WEBPACK_IMPORTED_MODULE_2__.utc(`${fromDate.year}-${fromDate.month}-${fromDate.day}`, 'YYYY-M-D').toISOString() : null,
        end_at: toDate ? moment__WEBPACK_IMPORTED_MODULE_2__.utc(`${toDate.year}-${toDate.month}-${toDate.day}`, 'YYYY-M-D').toISOString() : null,
        transports: transports ?? null,
        stays: stays ?? null,
        activities: activities ?? null,
        food: food ?? null,
        shopping: shopping ?? null,
        notes: notes ?? null
      };
      this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_1__.updatePlace({
        place: {
          ...place
        }
      }));
      this.reactiveForm.markAsPristine();
      this.offcanvastagComponent.closeOffCanvas();
      this.setFormState();
    }
  }
  cancelChanges() {
    this.setupReactiveForm(true);
    this.setFormState();
  }
  // Date picker
  onDateSelection(date) {
    if (!this.reactiveForm.value.fromDate && !this.reactiveForm.value.toDate) {
      this.reactiveForm.patchValue({
        fromDate: date
      });
      this.reactiveForm.get('fromDate').markAsDirty();
    } else if (this.reactiveForm.value.fromDate && !this.reactiveForm.value.toDate && (date.equals(this.reactiveForm.value.fromDate) || date.after(this.reactiveForm.value.fromDate))) {
      this.reactiveForm.patchValue({
        toDate: date
      });
      this.reactiveForm.get('toDate').markAsDirty();
    } else {
      this.reactiveForm.patchValue({
        toDate: null
      });
      this.reactiveForm.patchValue({
        fromDate: date
      });
      this.reactiveForm.get('fromDate').markAsDirty();
      this.reactiveForm.get('toDate').markAsDirty();
    }
    this.setFormState();
  }
  isHovered(date) {
    return this.reactiveForm.value.fromDate && !this.reactiveForm.value.toDate && this.hoveredDate && date.after(this.reactiveForm.value.fromDate) && date.before(this.hoveredDate);
  }
  isInside(date) {
    return this.reactiveForm.value.toDate && date.after(this.reactiveForm.value.fromDate) && date.before(this.reactiveForm.value.toDate);
  }
  isRange(date) {
    return date.equals(this.reactiveForm.value.fromDate) || this.reactiveForm.value.toDate && date.equals(this.reactiveForm.value.toDate) || this.isInside(date) || this.isHovered(date);
  }
}
PlaceComponent.ɵfac = function PlaceComponent_Factory(t) {
  return new (t || PlaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store));
};
PlaceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PlaceComponent,
  selectors: [["app-place"]],
  viewQuery: function PlaceComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDatepicker, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_offcanvastag_offcanvastag_component__WEBPACK_IMPORTED_MODULE_4__.OffcanvastagComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.datePicker = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.offcanvastagComponent = _t.first);
    }
  },
  inputs: {
    slideIndex: "slideIndex",
    trip: "trip"
  },
  outputs: {
    onNavigate: "onNavigate"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
  decls: 32,
  vars: 23,
  consts: [[1, "container"], [3, "data", "onSave"], [1, "form-group", 3, "formGroup"], [1, "mb-3"], ["for", "placeDatesInput", 1, "form-label"], ["outsideDays", "hidden", 1, "ngb-dp", 3, "id", "displayMonths", "dayTemplate", "minDate", "markDisabled", "dateSelect"], ["dpPlace{{slideIndex}}", ""], ["t", ""], [1, "mb-2"], ["caption", "Transports", 3, "tags", "onTagClick"], ["caption", "Stays", 3, "tags", "onTagClick"], ["caption", "Activities", 3, "tags", "onTagClick"], ["caption", "Food", 3, "tags", "onTagClick"], ["caption", "Shopping", 3, "tags", "onTagClick"], ["caption", "Notes", 3, "tags", "onTagClick"], [1, "row", "justify-content-center", "mt-4"], [1, "col", "text-center"], [4, "ngIf"], [1, "custom-day", 3, "mouseenter", "mouseleave"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "me-3", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "ms-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "ms-3", 3, "disabled", "click"]],
  template: function PlaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "app-offcanvastag", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSave", function PlaceComponent_Template_app_offcanvastag_onSave_1_listener($event) {
        return ctx.saveTagData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 2)(3, "div", 3)(4, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Start & End Dates ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ngb-datepicker", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateSelect", function PlaceComponent_Template_ngb_datepicker_dateSelect_9_listener($event) {
        return ctx.onDateSelection($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PlaceComponent_ng_template_11_Template, 2, 9, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 8)(14, "app-tags", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTagClick", function PlaceComponent_Template_app_tags_onTagClick_14_listener($event) {
        return ctx.tagClicked("transports", "Transport", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 8)(16, "app-tags", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTagClick", function PlaceComponent_Template_app_tags_onTagClick_16_listener($event) {
        return ctx.tagClicked("stays", "Stay", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 8)(18, "app-tags", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTagClick", function PlaceComponent_Template_app_tags_onTagClick_18_listener($event) {
        return ctx.tagClicked("activities", "Activity", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 8)(20, "app-tags", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTagClick", function PlaceComponent_Template_app_tags_onTagClick_20_listener($event) {
        return ctx.tagClicked("food", "Food", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 8)(22, "app-tags", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTagClick", function PlaceComponent_Template_app_tags_onTagClick_22_listener($event) {
        return ctx.tagClicked("shopping", "Shopping", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 8)(24, "app-tags", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTagClick", function PlaceComponent_Template_app_tags_onTagClick_24_listener($event) {
        return ctx.tagClicked("notes", "Note", $event, false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 15)(26, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, PlaceComponent_ng_container_27_Template, 3, 2, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, PlaceComponent_ng_container_28_Template, 3, 2, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, PlaceComponent_ng_container_29_Template, 5, 0, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, PlaceComponent_ng_container_30_Template, 5, 0, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, PlaceComponent_ng_container_31_Template, 3, 2, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.offCanvasData);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("at ", ctx.trip.places[ctx.slideIndex].name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "dpPlace", ctx.slideIndex, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayMonths", 1)("dayTemplate", _r1)("minDate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](19, _c0, ctx.minDate.year, ctx.minDate.month, ctx.minDate.day))("markDisabled", ctx.isDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tags", ctx.reactiveForm.get("transports").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tags", ctx.reactiveForm.get("stays").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tags", ctx.reactiveForm.get("activities").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tags", ctx.reactiveForm.get("food").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tags", ctx.reactiveForm.get("shopping").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tags", ctx.reactiveForm.get("notes").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.nextSlideExists && !ctx.formDirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.nextSlideExists && !ctx.formDirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formDirty && ctx.nextSlideExists);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formValid && ctx.formDirty && !ctx.nextSlideExists);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.nextSlideExists && !ctx.formDirty);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDatepickerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDatepicker, _common_tags_tags_component__WEBPACK_IMPORTED_MODULE_3__.TagsComponent, _offcanvastag_offcanvastag_component__WEBPACK_IMPORTED_MODULE_4__.OffcanvastagComponent],
  styles: [".ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%]   .disable[_ngcontent-%COMP%] {\n  background-color: rgba(229, 233, 236, 0.5);\n  text-decoration: line-through;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.range[_ngcontent-%COMP%], .ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.disable[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  pointer-events: none;\n  text-decoration: line-through;\n  background-color: rgb(233, 233, 233);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wbGFjZS9wbGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7QUFDSTtFQUNFLDBDQUFBO0VBQ0EsNkJBQUE7QUFDTjtBQUVFO0VBQ0UseUJBQUE7QUFBSjtBQUVFOztFQUVFLGtDQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUU7RUFDRSx3Q0FBQTtBQUFKO0FBRUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIubmdiLWRwIHtcclxuICAuY3VzdG9tLWRheSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICAuZGlzYWJsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMzMsIDIzNiwgMC41KTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkucmFuZ2UsXHJcbiAgLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkuZGlzYWJsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 729:
/*!***********************************************************!*\
  !*** ./src/app/components/planning/planning.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanningComponent": () => (/* binding */ PlanningComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _place_place_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../place/place.component */ 6786);
/* harmony import */ var _new_trip_new_trip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../new-trip/new-trip.component */ 4618);
/* harmony import */ var _common_breadcrump_breadcrump_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/breadcrump/breadcrump.component */ 3289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








const _c0 = ["ngcarousel"];
function PlanningComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "fieldset", 6)(2, "div", 7)(3, "app-new-trip", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNavigate", function PlanningComponent_ng_template_3_Template_app_new_trip_onNavigate_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.navigate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("trip", ctx_r1.trip);
  }
}
function PlanningComponent_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "fieldset", 6)(2, "div", 11)(3, "app-breadcrump", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSelection", function PlanningComponent_4_ng_template_0_Template_app_breadcrump_onSelection_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.navigateToSlide($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7)(5, "app-place", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onNavigate", function PlanningComponent_4_ng_template_0_Template_app_place_onNavigate_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.navigate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const place_r6 = ctx_r12.$implicit;
    const placeIndex_r7 = ctx_r12.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r8.places)("selection", place_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("trip", ctx_r8.trip)("slideIndex", placeIndex_r7);
  }
}
function PlanningComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PlanningComponent_4_ng_template_0_Template, 6, 4, "ng-template", 10);
  }
  if (rf & 2) {
    const placeIndex_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "slide-", placeIndex_r7, "");
  }
}
class PlanningComponent {
  constructor() {
    this.places = [];
  }
  ngOnInit() {
    if (this.trip) {
      this.places = this.trip.places.map(place => place.name);
    }
  }
  ngOnChanges(changes) {
    let tripChanges = changes['trip'];
    if (tripChanges && tripChanges.currentValue && tripChanges.previousValue?.places !== tripChanges.currentValue?.places) {
      this.places = tripChanges.currentValue?.places.map(place => place.name);
    }
  }
  // Move to specific slide
  navigateToSlide(item) {
    this.ngCarousel.select('slide-' + item);
  }
  // Move to next/previous slide
  navigate(isNext) {
    if (isNext) {
      this.ngCarousel.next();
    } else {
      this.ngCarousel.prev();
    }
  }
}
PlanningComponent.ɵfac = function PlanningComponent_Factory(t) {
  return new (t || PlanningComponent)();
};
PlanningComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PlanningComponent,
  selectors: [["app-planning"]],
  viewQuery: function PlanningComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ngCarousel = _t.first);
    }
  },
  inputs: {
    trip: "trip"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 5,
  consts: [[1, "container"], [3, "showNavigationArrows", "showNavigationIndicators", "interval", "keyboard"], ["ngcarousel", ""], ["ngbSlide", "", "id", "slide-main"], [4, "ngFor", "ngForOf"], [1, "picsum-img-wrapper"], ["id", "step-1"], [1, "panel-body"], [3, "trip", "onNavigate"], ["newtrip", ""], ["ngbSlide", "", 3, "id"], [1, "place-heading", "mb-3"], [3, "items", "selection", "onSelection"], [3, "trip", "slideIndex", "onNavigate"]],
  template: function PlanningComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "ngb-carousel", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PlanningComponent_ng_template_3_Template, 5, 1, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PlanningComponent_4_Template, 1, 1, null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showNavigationArrows", false)("showNavigationIndicators", false)("interval", 0)("keyboard", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.places);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbSlide, _place_place_component__WEBPACK_IMPORTED_MODULE_0__.PlaceComponent, _new_trip_new_trip_component__WEBPACK_IMPORTED_MODULE_1__.NewTripComponent, _common_breadcrump_breadcrump_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumpComponent],
  styles: ["label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wbGFubmluZy9wbGFubmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFBQTs7RUFFRSxrQ0FBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLHdDQUFBO0FBSUYiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmN1c3RvbS1kYXkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxufVxyXG4uY3VzdG9tLWRheS5yYW5nZSxcclxuLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jdXN0b20tZGF5LmZhZGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xyXG59XHJcbiAgXHJcbiAgXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 1821:
/*!*********************************************************!*\
  !*** ./src/app/components/prepare/prepare.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrepareComponent": () => (/* binding */ PrepareComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _offcanvasbag_offcanvasbag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../offcanvasbag/offcanvasbag.component */ 661);
/* harmony import */ var src_app_models_preparelist_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/preparelist.const */ 3986);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentBase */ 1749);
/* harmony import */ var src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/trip.action */ 8859);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);










function PrepareComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PrepareComponent_div_5_Template_input_change_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onCheckedChange(item_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 15)(7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrepareComponent_div_5_Template_i_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.removefromCheckList(item_r2.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", item_r2.checked);
  }
}
function PrepareComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrepareComponent_ng_container_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrepareComponent_ng_container_12_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.cancelChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
class PrepareComponent extends _componentBase__WEBPACK_IMPORTED_MODULE_2__.componentBase {
  constructor(store) {
    super(store);
    this.isChanged = false;
    this.preparecheckInput = '';
    this.prepareList = src_app_models_preparelist_const__WEBPACK_IMPORTED_MODULE_1__.PrepareList;
  }
  openBagCheckList() {
    this.offcanvasbagComponent.toggleOffcanvas();
  }
  ngOnInit() {
    if (this.trip && this.trip.prepareCheck) {
      this.prepareList = this.trip.prepareCheck;
    }
  }
  // mergePrepareList(firstArray: CheckList[], secondArray: CheckList[]): CheckList[] {
  //   return firstArray.map((firstObj) => {
  //     const matchingObj = secondArray.find(
  //       (secondObj) => secondObj.name === firstObj.name
  //     );
  //     if (matchingObj) {
  //       return { ...firstObj, ...matchingObj };
  //     }
  //     return firstObj;
  //   });
  // }
  get sortedPrepareCheckItems() {
    return [...this.prepareList].sort((a, b) => {
      if (a.checked && !b.checked) {
        return 1;
      } else if (!a.checked && b.checked) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  addtoCheckList() {
    if (this.preparecheckInput.length > 0 && !this.prepareList.find(item => item.name === this.preparecheckInput)) {
      this.prepareList = [...this.prepareList, {
        name: this.preparecheckInput,
        checked: false
      }];
    }
    this.preparecheckInput = "";
    this.markasChanged();
  }
  removefromCheckList(value) {
    this.prepareList = this.prepareList.filter(s => s.name != value);
    this.markasChanged();
  }
  onCheckedChange(item, event) {
    const updatedItem = {
      ...item,
      checked: event.target.checked
    };
    const index = this.prepareList.indexOf(item);
    this.prepareList = [...this.prepareList.slice(0, index), updatedItem, ...this.prepareList.slice(index + 1)];
    this.markasChanged();
  }
  markasChanged() {
    if (!this.isChanged) {
      this.isChanged = true;
    }
  }
  save() {
    this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_3__.updatePrepareList({
      prepareCheck: this.prepareList
    }));
    this.isChanged = false;
  }
  cancelChanges() {
    this.prepareList = this.trip.prepareCheck ?? src_app_models_preparelist_const__WEBPACK_IMPORTED_MODULE_1__.PrepareList;
    this.isChanged = false;
  }
}
PrepareComponent.ɵfac = function PrepareComponent_Factory(t) {
  return new (t || PrepareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
};
PrepareComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PrepareComponent,
  selectors: [["app-prepare"]],
  viewQuery: function PrepareComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_offcanvasbag_offcanvasbag_component__WEBPACK_IMPORTED_MODULE_0__.OffcanvasbagComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.offcanvasbagComponent = _t.first);
    }
  },
  inputs: {
    trip: "trip"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 14,
  vars: 4,
  consts: [[1, "container"], [1, "mb-3", "ms-4", "me-4"], ["type", "text", "placeholder", "Ex: International Roaming Enabled?", "id", "prepareCheckItemInput", 1, "form-control", "itag-input", "mb-3", 3, "ngModel", "ngModelChange", "keydown.enter", "focusout"], [1, "content"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], ["role", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "row", "justify-content-center", "mt-3"], [1, "col", "text-center"], [4, "ngIf"], [3, "trip"], [1, "row", "mb-2"], [1, "col-10"], [1, "form-check", "form-switch"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "change"], [1, "col-2", "d-flex", "justify-content-end"], [1, "bi", "bi-trash", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "ms-3", 3, "click"]],
  template: function PrepareComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PrepareComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.preparecheckInput = $event;
      })("keydown.enter", function PrepareComponent_Template_input_keydown_enter_2_listener() {
        return ctx.addtoCheckList();
      })("focusout", function PrepareComponent_Template_input_focusout_2_listener() {
        return ctx.addtoCheckList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, PrepareComponent_div_5_Template, 8, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 1)(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrepareComponent_Template_div_click_7_listener() {
        return ctx.openBagCheckList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Bag Checklist");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PrepareComponent_ng_container_12_Template, 5, 0, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "app-offcanvasbag", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.preparecheckInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sortedPrepareCheckItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isChanged);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("trip", ctx.trip);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _offcanvasbag_offcanvasbag_component__WEBPACK_IMPORTED_MODULE_0__.OffcanvasbagComponent],
  styles: [".container[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmVwYXJlL3ByZXBhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6685:
/*!*********************************************************!*\
  !*** ./src/app/components/summary/summary.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _tagsummary_tagsummary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tagsummary/tagsummary.component */ 4026);
/* harmony import */ var _expensesummary_expensesummary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expensesummary/expensesummary.component */ 3125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





function SummaryComponent_div_0_ng_container_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const place_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 2, place_r3.start_at, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 5, place_r3.end_at, "mediumDate"));
  }
}
function SummaryComponent_div_0_ng_container_24_app_tagsummary_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-tagsummary", 18);
  }
  if (rf & 2) {
    const place_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tags", place_r3.transports);
  }
}
function SummaryComponent_div_0_ng_container_24_app_tagsummary_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-tagsummary", 19);
  }
  if (rf & 2) {
    const place_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tags", place_r3.stays);
  }
}
function SummaryComponent_div_0_ng_container_24_app_tagsummary_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-tagsummary", 20);
  }
  if (rf & 2) {
    const place_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tags", place_r3.activities);
  }
}
function SummaryComponent_div_0_ng_container_24_app_tagsummary_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-tagsummary", 21);
  }
  if (rf & 2) {
    const place_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tags", place_r3.food);
  }
}
function SummaryComponent_div_0_ng_container_24_app_tagsummary_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-tagsummary", 22);
  }
  if (rf & 2) {
    const place_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tags", place_r3.shopping);
  }
}
function SummaryComponent_div_0_ng_container_24_app_tagsummary_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-tagsummary", 23);
  }
  if (rf & 2) {
    const place_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tags", place_r3.notes);
  }
}
const _c0 = function () {
  return {
    "margin-top": "-12px"
  };
};
function SummaryComponent_div_0_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9)(2, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SummaryComponent_div_0_ng_container_24_div_4_Template, 9, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 4)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SummaryComponent_div_0_ng_container_24_app_tagsummary_14_Template, 1, 1, "app-tagsummary", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SummaryComponent_div_0_ng_container_24_app_tagsummary_15_Template, 1, 1, "app-tagsummary", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SummaryComponent_div_0_ng_container_24_app_tagsummary_16_Template, 1, 1, "app-tagsummary", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SummaryComponent_div_0_ng_container_24_app_tagsummary_17_Template, 1, 1, "app-tagsummary", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SummaryComponent_div_0_ng_container_24_app_tagsummary_18_Template, 1, 1, "app-tagsummary", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SummaryComponent_div_0_ng_container_24_app_tagsummary_19_Template, 1, 1, "app-tagsummary", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const place_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](place_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", place_r3.start_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 11, place_r3.start_at, "EEEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 14, place_r3.end_at, "EEEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (place_r3.transports == null ? null : place_r3.transports.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (place_r3.stays == null ? null : place_r3.stays.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (place_r3.activities == null ? null : place_r3.activities.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (place_r3.food == null ? null : place_r3.food.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (place_r3.shopping == null ? null : place_r3.shopping.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (place_r3.notes == null ? null : place_r3.notes.length) > 0);
  }
}
function SummaryComponent_div_0_app_expensesummary_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-expensesummary", 24);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r2.expenseSummary);
  }
}
function SummaryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4)(12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5)(16, "div", 4)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4)(21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SummaryComponent_div_0_ng_container_24_Template, 20, 18, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SummaryComponent_div_0_app_expensesummary_25_Template, 1, 1, "app-expensesummary", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getPlaces());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getPeople());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 9, ctx_r0.trip.start_at, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](14, 12, ctx_r0.trip.end_at, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 15, ctx_r0.trip.start_at, "EEEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](23, 18, ctx_r0.trip.end_at, "EEEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.trip.places);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.expenseSummary == null ? null : ctx_r0.expenseSummary.length) > 0);
  }
}
class SummaryComponent {
  getPlaces() {
    return this.trip?.places?.map(s => s.name).join(', ');
  }
  getPeople() {
    return this.trip?.people?.map(s => s.name).join(', ');
  }
  ngOnChanges(changes) {
    this.calculateExpense();
  }
  calculateExpense() {
    this.expenseSummary = this.trip?.people.map(s => {
      return {
        name: s.name,
        spent: 0,
        debt: this.trip?.people.filter(p => p.name !== s.name).map(i => {
          return {
            name: i.name,
            value: 0
          };
        })
      };
    });
    this.trip?.places.forEach(place => {
      this.updateExpense(place.transports);
      this.updateExpense(place.stays);
      this.updateExpense(place.activities);
      this.updateExpense(place.food);
      this.updateExpense(place.shopping);
    });
  }
  updateExpense(tags) {
    tags?.forEach(tag => {
      if (tag.expense?.paidBy) {
        const indexSpent = this.expenseSummary.findIndex(s => s.name === tag.expense.paidBy[0]);
        let personSpent = this.expenseSummary[indexSpent];
        personSpent.spent = personSpent.spent + parseFloat(tag.expense?.cost);
        this.expenseSummary = [...this.expenseSummary.slice(0, indexSpent), personSpent, ...this.expenseSummary.slice(indexSpent + 1)];
        const split = parseFloat(tag.expense?.cost) / tag.expense?.sharedWith?.length;
        tag.expense?.sharedWith?.forEach(person => {
          if (person !== tag.expense.paidBy[0]) {
            const indexDebt = this.expenseSummary.findIndex(s => s.name === person);
            let personDebt = this.expenseSummary[indexDebt];
            const indexDp = personDebt.debt.findIndex(s => s.name === tag.expense.paidBy[0]);
            let personDp = personDebt.debt[indexDp];
            let debtValue = personDp.value + split;
            const indexDebttoThisPerson = personSpent.debt.findIndex(s => s.name === person);
            let debttoThisPerson = personSpent.debt[indexDebttoThisPerson];
            if (debttoThisPerson.value > debtValue) {
              debttoThisPerson.value = debttoThisPerson.value - debtValue;
              personDp.value = 0;
            } else {
              personDp.value = debtValue - debttoThisPerson.value;
              debttoThisPerson.value = 0;
            }
            personSpent.debt = [...personSpent.debt.slice(0, indexDebttoThisPerson), debttoThisPerson, ...personSpent.debt.slice(indexDebttoThisPerson + 1)];
            this.expenseSummary = [...this.expenseSummary.slice(0, indexSpent), personSpent, ...this.expenseSummary.slice(indexSpent + 1)];
            personDebt.debt = [...personDebt.debt.slice(0, indexDp), personDp, ...personDebt.debt.slice(indexDp + 1)];
            this.expenseSummary = [...this.expenseSummary.slice(0, indexDebt), personDebt, ...this.expenseSummary.slice(indexDebt + 1)];
          }
        });
      }
    });
  }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) {
  return new (t || SummaryComponent)();
};
SummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SummaryComponent,
  selectors: [["app-summary"]],
  inputs: {
    trip: "trip"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "container", "bg-light", "pt-3"], [1, "row"], [1, "col", "text-center"], [1, "row", 3, "ngStyle"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [3, "data", 4, "ngIf"], [1, "mb-2"], [1, "mt-2", "text-center"], ["for", "lblPlace", 1, "form-label"], ["class", "row", 4, "ngIf"], ["title", "Transports", 3, "tags", 4, "ngIf"], ["title", "Stays", 3, "tags", 4, "ngIf"], ["title", "Activities", 3, "tags", 4, "ngIf"], ["title", "Food", 3, "tags", 4, "ngIf"], ["title", "Shopping", 3, "tags", 4, "ngIf"], ["title", "Notes", 3, "tags", 4, "ngIf"], ["title", "Transports", 3, "tags"], ["title", "Stays", 3, "tags"], ["title", "Activities", 3, "tags"], ["title", "Food", 3, "tags"], ["title", "Shopping", 3, "tags"], ["title", "Notes", 3, "tags"], [3, "data"]],
  template: function SummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SummaryComponent_div_0_Template, 26, 22, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.trip);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _tagsummary_tagsummary_component__WEBPACK_IMPORTED_MODULE_0__.TagsummaryComponent, _expensesummary_expensesummary_component__WEBPACK_IMPORTED_MODULE_1__.ExpensesummaryComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4026:
/*!***************************************************************!*\
  !*** ./src/app/components/tagsummary/tagsummary.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsummaryComponent": () => (/* binding */ TagsummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



function TagsummaryComponent_div_0_div_4_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cost:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r3 == null ? null : tag_r3.expense == null ? null : tag_r3.expense.cost, "");
  }
}
function TagsummaryComponent_div_0_div_4_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Paid By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r3 == null ? null : tag_r3.expense == null ? null : tag_r3.expense.paidBy, "");
  }
}
function TagsummaryComponent_div_0_div_4_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Split expense equally among:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r3 == null ? null : tag_r3.expense == null ? null : tag_r3.expense.sharedWith.join(", "), "");
  }
}
function TagsummaryComponent_div_0_div_4_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r3 == null ? null : tag_r3.comments, "");
  }
}
function TagsummaryComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TagsummaryComponent_div_0_div_4_li_5_Template, 5, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TagsummaryComponent_div_0_div_4_li_6_Template, 5, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TagsummaryComponent_div_0_div_4_li_7_Template, 5, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TagsummaryComponent_div_0_div_4_li_8_Template, 5, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tag_r3 == null ? null : tag_r3.expense == null ? null : tag_r3.expense.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tag_r3 == null ? null : tag_r3.expense == null ? null : tag_r3.expense.paidBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tag_r3 == null ? null : tag_r3.expense == null ? null : tag_r3.expense.sharedWith);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tag_r3 == null ? null : tag_r3.comments);
  }
}
function TagsummaryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "b", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TagsummaryComponent_div_0_div_4_Template, 9, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tags);
  }
}
function TagsummaryComponent_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r13.name);
  }
}
function TagsummaryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "b", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 10)(5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TagsummaryComponent_div_1_div_6_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tags);
  }
}
class TagsummaryComponent {
  constructor() {
    this.title = "";
  }
}
TagsummaryComponent.ɵfac = function TagsummaryComponent_Factory(t) {
  return new (t || TagsummaryComponent)();
};
TagsummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TagsummaryComponent,
  selectors: [["app-tagsummary"]],
  inputs: {
    tags: "tags",
    title: "title"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "mt-2"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "widget", "lazur-bg", "p-xl"], [1, "tagName"], [1, "list-unstyled", "m-t-md"], [4, "ngIf"], [1, "col-sm-4", "content-card"], [1, "card-big-shadow"], ["class", "card card-just-text", "data-background", "color", "data-color", "blue", "data-radius", "none", 4, "ngFor", "ngForOf"], ["data-background", "color", "data-color", "blue", "data-radius", "none", 1, "card", "card-just-text"], [1, "content"], [1, "description"]],
  template: function TagsummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TagsummaryComponent_div_0_Template, 5, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagsummaryComponent_div_1_Template, 7, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title !== "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "Notes");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".p-xl[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.lazur-bg[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n.widget[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 5px 20px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);\n}\n.widget[_ngcontent-%COMP%]   .tagName[_ngcontent-%COMP%] {\n  color: blue;\n  font-size: large;\n}\n\n.widget[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.m-t-md[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.card-big-shadow[_ngcontent-%COMP%] {\n  max-width: 320px;\n  position: relative;\n}\n\n.coloured-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.card[data-radius=none][_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);\n  background-color: #FFFFFF;\n  color: #252422;\n  margin-bottom: 20px;\n  position: relative;\n  z-index: 1;\n}\n\n.card[data-background=image][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .card[data-background=image][_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%], .card[data-background=image][_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .card[data-background=image][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .card[data-background=image][_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .card[data-background=image][_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%], .card[data-background=image][_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .card[data-background=image][_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .card[data-background=color][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .card[data-background=color][_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%], .card[data-background=color][_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .card[data-background=color][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .card[data-background=color][_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .card[data-background=color][_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%], .card[data-background=color][_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .card[data-background=color][_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.card.card-just-text[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 50px 65px;\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 15px 15px 5px 15px;\n}\n\n.card[data-color=blue][_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: #7a9e9f;\n}\n\n.card[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.card-big-shadow[_ngcontent-%COMP%]:before {\n  background-image: url(\"http://static.tumblr.com/i21wc39/coTmrkw40/shadow.png\");\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  bottom: -12%;\n  content: \"\";\n  display: block;\n  left: -12%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 0;\n}\n\nh4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: 600;\n  line-height: 1.2em;\n}\n\nh6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #66615b;\n}\n\n.content-card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\n\n.card[data-color=blue][_ngcontent-%COMP%] {\n  background: #dbedf0;\n}\n\n.card[data-color=blue][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.card[data-color=green][_ngcontent-%COMP%] {\n  background: #d5e5a3;\n}\n\n.card[data-color=green][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #60773d;\n}\n\n.card[data-color=green][_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: #92ac56;\n}\n\n.card[data-color=yellow][_ngcontent-%COMP%] {\n  background: #ffe28c;\n}\n\n.card[data-color=yellow][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #b25825;\n}\n\n.card[data-color=yellow][_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: #d88715;\n}\n\n.card[data-color=brown][_ngcontent-%COMP%] {\n  background: #d6c1ab;\n}\n\n.card[data-color=brown][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #75442e;\n}\n\n.card[data-color=brown][_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: #a47e65;\n}\n\n.card[data-color=purple][_ngcontent-%COMP%] {\n  background: #baa9ba;\n}\n\n.card[data-color=purple][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #3a283d;\n}\n\n.card[data-color=purple][_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: #5a283d;\n}\n\n.card[data-color=orange][_ngcontent-%COMP%] {\n  background: #ff8f5e;\n}\n\n.card[data-color=orange][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #772510;\n}\n\n.card[data-color=orange][_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: #e95e37;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YWdzdW1tYXJ5L3RhZ3N1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMFRBO0VBQ0UsYUFBQTtBQXpURjs7QUE0VEE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUF6VEY7O0FBNFRBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5RUFBQTtBQXpURjtBQTBURTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQXhUSjs7QUE0VEE7RUFDSSxXQUFBO0FBelRKOztBQTRUQTtFQUNFLGdCQUFBO0FBelRGOztBQTZUQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUExVEY7O0FBNlRBO0VBQ0UsZ0JBQUE7QUExVEY7O0FBNlRBO0VBQ0Usa0JBQUE7QUExVEY7O0FBNFRBO0VBQ0Usa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBelRGOztBQTZUQTtFQUNFLGNBQUE7QUExVEY7O0FBNFRBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQXpURjs7QUEyVEE7RUFDRSwyQkFBQTtBQXhURjs7QUEwVEE7RUFDRSxjQUFBO0FBdlRGOztBQTBUQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQXZURjs7QUF5VEE7RUFDRSw4RUFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQXRURjs7QUF3VEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFyVEY7O0FBdVRBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBcFRGOztBQXNUQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBblRGOztBQXFUQTtFQUNFLGdCQUFBO0FBbFRGOztBQW9UQTtFQUNFLHFCQUFBO0FBalRGOztBQW9UQSw4QkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUFqVEY7O0FBbVRBO0VBQ0UsWUFBQTtBQWhURjs7QUFtVEE7RUFDRSxtQkFBQTtBQWhURjs7QUFrVEE7RUFDRSxjQUFBO0FBL1NGOztBQWlUQTtFQUNFLGNBQUE7QUE5U0Y7O0FBaVRBO0VBQ0UsbUJBQUE7QUE5U0Y7O0FBZ1RBO0VBQ0UsY0FBQTtBQTdTRjs7QUErU0E7RUFDRSxjQUFBO0FBNVNGOztBQStTQTtFQUNFLG1CQUFBO0FBNVNGOztBQThTQTtFQUNFLGNBQUE7QUEzU0Y7O0FBNlNBO0VBQ0UsY0FBQTtBQTFTRjs7QUE2U0E7RUFDRSxtQkFBQTtBQTFTRjs7QUE0U0E7RUFDRSxjQUFBO0FBelNGOztBQTJTQTtFQUNFLGNBQUE7QUF4U0Y7O0FBMlNBO0VBQ0UsbUJBQUE7QUF4U0Y7O0FBMFNBO0VBQ0UsY0FBQTtBQXZTRjs7QUF5U0E7RUFDRSxjQUFBO0FBdFNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYm9keXtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNGNEY3RkQ7XHJcbi8vICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5jYXJkLW1hcmdpbiB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcclxuLy8gfVxyXG5cclxuLy8gLmNhcmQge1xyXG4vLyAgICAgYm9yZGVyOiAwO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDgyLCA2MywgMTA1LCAwLjEpO1xyXG4vLyAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoODIsIDYzLCAxMDUsIDAuMSk7XHJcbi8vICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSg4MiwgNjMsIDEwNSwgMC4xKTtcclxuLy8gICAgIC1tcy1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoODIsIDYzLCAxMDUsIDAuMSk7XHJcbi8vIH1cclxuLy8gLmNhcmQge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBtaW4td2lkdGg6IDA7XHJcbi8vICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTRlOTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuLy8gfVxyXG5cclxuLy8gLmNhcmQgLmNhcmQtaGVhZGVyLm5vLWJvcmRlciB7XHJcbi8vICAgICBib3JkZXI6IDA7XHJcbi8vIH1cclxuLy8gLmNhcmQgLmNhcmQtaGVhZGVyIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbi8vICAgICBwYWRkaW5nOiAwIDAuOTM3NXJlbTtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbi8vIH1cclxuLy8gLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IGNhbGMoOHB4IC0gMXB4KSBjYWxjKDhweCAtIDFweCkgMCAwO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtcHJpbWFyeSB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmYztcclxuLy8gICB3aWR0aDogNHJlbTtcclxuLy8gICBoZWlnaHQ6IDRyZW07XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtcHJpbWFyeSAud2lkZ2V0LTQ5LWRhdGUtZGF5IHtcclxuLy8gICBjb2xvcjogIzRlNzNlNTtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtcHJpbWFyeSAud2lkZ2V0LTQ5LWRhdGUtbW9udGgge1xyXG4vLyAgIGNvbG9yOiAjNGU3M2U1O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyAgIGZvbnQtc2l6ZTogMXJlbTtcclxuLy8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtc2Vjb25kYXJ5IHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZkO1xyXG4vLyAgIHdpZHRoOiA0cmVtO1xyXG4vLyAgIGhlaWdodDogNHJlbTtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vIH1cclxuXHJcbi8vIC53aWRnZXQtNDkgLndpZGdldC00OS10aXRsZS13cmFwcGVyIC53aWRnZXQtNDktZGF0ZS1zZWNvbmRhcnkgLndpZGdldC00OS1kYXRlLWRheSB7XHJcbi8vICAgY29sb3I6ICNkZGUxZTk7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICBmb250LXNpemU6IDEuNXJlbTtcclxuLy8gICBsaW5lLWhlaWdodDogMTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1kYXRlLXNlY29uZGFyeSAud2lkZ2V0LTQ5LWRhdGUtbW9udGgge1xyXG4vLyAgIGNvbG9yOiAjZGRlMWU5O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyAgIGZvbnQtc2l6ZTogMXJlbTtcclxuLy8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtc3VjY2VzcyB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmFmODtcclxuLy8gICB3aWR0aDogNHJlbTtcclxuLy8gICBoZWlnaHQ6IDRyZW07XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtc3VjY2VzcyAud2lkZ2V0LTQ5LWRhdGUtZGF5IHtcclxuLy8gICBjb2xvcjogIzE3ZDFiZDtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtc3VjY2VzcyAud2lkZ2V0LTQ5LWRhdGUtbW9udGgge1xyXG4vLyAgIGNvbG9yOiAjMTdkMWJkO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyAgIGZvbnQtc2l6ZTogMXJlbTtcclxuLy8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtaW5mbyB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjdmZjtcclxuLy8gICB3aWR0aDogNHJlbTtcclxuLy8gICBoZWlnaHQ6IDRyZW07XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtaW5mbyAud2lkZ2V0LTQ5LWRhdGUtZGF5IHtcclxuLy8gICBjb2xvcjogIzM2YWZmZjtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtaW5mbyAud2lkZ2V0LTQ5LWRhdGUtbW9udGgge1xyXG4vLyAgIGNvbG9yOiAjMzZhZmZmO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyAgIGZvbnQtc2l6ZTogMXJlbTtcclxuLy8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtd2FybmluZyB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogZmxvcmFsd2hpdGU7XHJcbi8vICAgd2lkdGg6IDRyZW07XHJcbi8vICAgaGVpZ2h0OiA0cmVtO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1kYXRlLXdhcm5pbmcgLndpZGdldC00OS1kYXRlLWRheSB7XHJcbi8vICAgY29sb3I6ICNGRkM4Njg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICBmb250LXNpemU6IDEuNXJlbTtcclxuLy8gICBsaW5lLWhlaWdodDogMTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1kYXRlLXdhcm5pbmcgLndpZGdldC00OS1kYXRlLW1vbnRoIHtcclxuLy8gICBjb2xvcjogI0ZGQzg2ODtcclxuLy8gICBsaW5lLWhlaWdodDogMTtcclxuLy8gICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1kYXRlLWRhbmdlciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWVlZjtcclxuLy8gICB3aWR0aDogNHJlbTtcclxuLy8gICBoZWlnaHQ6IDRyZW07XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtZGFuZ2VyIC53aWRnZXQtNDktZGF0ZS1kYXkge1xyXG4vLyAgIGNvbG9yOiAjRjk1MDYyO1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgZm9udC1zaXplOiAxLjVyZW07XHJcbi8vICAgbGluZS1oZWlnaHQ6IDE7XHJcbi8vIH1cclxuXHJcbi8vIC53aWRnZXQtNDkgLndpZGdldC00OS10aXRsZS13cmFwcGVyIC53aWRnZXQtNDktZGF0ZS1kYW5nZXIgLndpZGdldC00OS1kYXRlLW1vbnRoIHtcclxuLy8gICBjb2xvcjogI0Y5NTA2MjtcclxuLy8gICBsaW5lLWhlaWdodDogMTtcclxuLy8gICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1kYXRlLWxpZ2h0IHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZmO1xyXG4vLyAgIHdpZHRoOiA0cmVtO1xyXG4vLyAgIGhlaWdodDogNHJlbTtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vIH1cclxuXHJcbi8vIC53aWRnZXQtNDkgLndpZGdldC00OS10aXRsZS13cmFwcGVyIC53aWRnZXQtNDktZGF0ZS1saWdodCAud2lkZ2V0LTQ5LWRhdGUtZGF5IHtcclxuLy8gICBjb2xvcjogI2Y3ZjlmYTtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyB9XHJcblxyXG4vLyAud2lkZ2V0LTQ5IC53aWRnZXQtNDktdGl0bGUtd3JhcHBlciAud2lkZ2V0LTQ5LWRhdGUtbGlnaHQgLndpZGdldC00OS1kYXRlLW1vbnRoIHtcclxuLy8gICBjb2xvcjogI2Y3ZjlmYTtcclxuLy8gICBsaW5lLWhlaWdodDogMTtcclxuLy8gICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1kYXRlLWRhcmsge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNlYmVkZWU7XHJcbi8vICAgd2lkdGg6IDRyZW07XHJcbi8vICAgaGVpZ2h0OiA0cmVtO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1kYXRlLWRhcmsgLndpZGdldC00OS1kYXRlLWRheSB7XHJcbi8vICAgY29sb3I6ICMzOTQ4NTY7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICBmb250LXNpemU6IDEuNXJlbTtcclxuLy8gICBsaW5lLWhlaWdodDogMTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1kYXRlLWRhcmsgLndpZGdldC00OS1kYXRlLW1vbnRoIHtcclxuLy8gICBjb2xvcjogIzM5NDg1NjtcclxuLy8gICBsaW5lLWhlaWdodDogMTtcclxuLy8gICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1kYXRlLWJhc2Uge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmMGZhZmI7XHJcbi8vICAgd2lkdGg6IDRyZW07XHJcbi8vICAgaGVpZ2h0OiA0cmVtO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1kYXRlLWJhc2UgLndpZGdldC00OS1kYXRlLWRheSB7XHJcbi8vICAgY29sb3I6ICM2OENCRDc7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICBmb250LXNpemU6IDEuNXJlbTtcclxuLy8gICBsaW5lLWhlaWdodDogMTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1kYXRlLWJhc2UgLndpZGdldC00OS1kYXRlLW1vbnRoIHtcclxuLy8gICBjb2xvcjogIzY4Q0JENztcclxuLy8gICBsaW5lLWhlaWdodDogMTtcclxuLy8gICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1tZWV0aW5nLWluZm8ge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICBtYXJnaW4tbGVmdDogMXJlbTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1tZWV0aW5nLWluZm8gLndpZGdldC00OS1wcm8tdGl0bGUge1xyXG4vLyAgIGNvbG9yOiAjM2M0MTQyO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LXRpdGxlLXdyYXBwZXIgLndpZGdldC00OS1tZWV0aW5nLWluZm8gLndpZGdldC00OS1tZWV0aW5nLXRpbWUge1xyXG4vLyAgIGNvbG9yOiAjQjFCQUM1O1xyXG4vLyAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LW1lZXRpbmctcG9pbnRzIHtcclxuLy8gICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuLy8gfVxyXG5cclxuLy8gLndpZGdldC00OSAud2lkZ2V0LTQ5LW1lZXRpbmctcG9pbnRzIC53aWRnZXQtNDktbWVldGluZy1pdGVtIHtcclxuLy8gICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbi8vICAgY29sb3I6ICM3Mjc2ODY7XHJcbi8vIH1cclxuXHJcbi8vIC53aWRnZXQtNDkgLndpZGdldC00OS1tZWV0aW5nLXBvaW50cyAud2lkZ2V0LTQ5LW1lZXRpbmctaXRlbSBzcGFuIHtcclxuLy8gICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbi8vIH1cclxuXHJcbi8vIC53aWRnZXQtNDkgLndpZGdldC00OS1tZWV0aW5nLWFjdGlvbiB7XHJcbi8vICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vIH1cclxuXHJcbi8vIC53aWRnZXQtNDkgLndpZGdldC00OS1tZWV0aW5nLWFjdGlvbiBhIHtcclxuLy8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4vLyB9XHJcblxyXG4vLyBib2R5e21hcmdpbi10b3A6NXB4O31cclxuXHJcbi5wLXhsIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubGF6dXItYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLndpZGdldCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIC50YWdOYW1lIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcbn1cclxuXHJcbi53aWRnZXQgc3BhbiB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLm0tdC1tZCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLy8gTm90ZXNcclxuLmNhcmQtYmlnLXNoYWRvdyB7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb2xvdXJlZC1jYXJkcyAuY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmNhcmRbZGF0YS1yYWRpdXM9XCJub25lXCJdIHtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgyMDQsIDE5NywgMTg1LCAwLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgY29sb3I6ICMyNTI0MjI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbi5jYXJkW2RhdGEtYmFja2dyb3VuZD1cImltYWdlXCJdIC50aXRsZSwgLmNhcmRbZGF0YS1iYWNrZ3JvdW5kPVwiaW1hZ2VcIl0gLnN0YXRzLCAuY2FyZFtkYXRhLWJhY2tncm91bmQ9XCJpbWFnZVwiXSAuY2F0ZWdvcnksIC5jYXJkW2RhdGEtYmFja2dyb3VuZD1cImltYWdlXCJdIC5kZXNjcmlwdGlvbiwgLmNhcmRbZGF0YS1iYWNrZ3JvdW5kPVwiaW1hZ2VcIl0gLmNvbnRlbnQsIC5jYXJkW2RhdGEtYmFja2dyb3VuZD1cImltYWdlXCJdIC5jYXJkLWZvb3RlciwgLmNhcmRbZGF0YS1iYWNrZ3JvdW5kPVwiaW1hZ2VcIl0gc21hbGwsIC5jYXJkW2RhdGEtYmFja2dyb3VuZD1cImltYWdlXCJdIC5jb250ZW50IGEsIC5jYXJkW2RhdGEtYmFja2dyb3VuZD1cImNvbG9yXCJdIC50aXRsZSwgLmNhcmRbZGF0YS1iYWNrZ3JvdW5kPVwiY29sb3JcIl0gLnN0YXRzLCAuY2FyZFtkYXRhLWJhY2tncm91bmQ9XCJjb2xvclwiXSAuY2F0ZWdvcnksIC5jYXJkW2RhdGEtYmFja2dyb3VuZD1cImNvbG9yXCJdIC5kZXNjcmlwdGlvbiwgLmNhcmRbZGF0YS1iYWNrZ3JvdW5kPVwiY29sb3JcIl0gLmNvbnRlbnQsIC5jYXJkW2RhdGEtYmFja2dyb3VuZD1cImNvbG9yXCJdIC5jYXJkLWZvb3RlciwgLmNhcmRbZGF0YS1iYWNrZ3JvdW5kPVwiY29sb3JcIl0gc21hbGwsIC5jYXJkW2RhdGEtYmFja2dyb3VuZD1cImNvbG9yXCJdIC5jb250ZW50IGEge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5jYXJkLmNhcmQtanVzdC10ZXh0IC5jb250ZW50IHtcclxuICBwYWRkaW5nOiA1MHB4IDY1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYXJkIC5jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4IDE1cHg7XHJcbn1cclxuLmNhcmRbZGF0YS1jb2xvcj1cImJsdWVcIl0gLmNhdGVnb3J5IHtcclxuICBjb2xvcjogIzdhOWU5ZjtcclxufVxyXG5cclxuLmNhcmQgLmNhdGVnb3J5LCAuY2FyZCAubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmNhcmQtYmlnLXNoYWRvdzpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly9zdGF0aWMudHVtYmxyLmNvbS9pMjF3YzM5L2NvVG1ya3c0MC9zaGFkb3cucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBib3R0b206IC0xMiU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAtMTIlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5oNCwgLmg0IHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG59XHJcbmg2LCAuaDYge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5jYXJkIC5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNjY2MTViO1xyXG59XHJcbi5jb250ZW50LWNhcmR7XHJcbiAgbWFyZ2luLXRvcDoxMHB4OyAgICBcclxufVxyXG5hOmhvdmVyLCBhOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qPT09PT09PT0gQ09MT1JTID09PT09PT09PT09Ki9cclxuLmNhcmRbZGF0YS1jb2xvcj1cImJsdWVcIl0ge1xyXG4gIGJhY2tncm91bmQ6ICNkYmVkZjA7XHJcbn1cclxuLmNhcmRbZGF0YS1jb2xvcj1cImJsdWVcIl0gLmRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkW2RhdGEtY29sb3I9XCJncmVlblwiXSB7XHJcbiAgYmFja2dyb3VuZDogI2Q1ZTVhMztcclxufVxyXG4uY2FyZFtkYXRhLWNvbG9yPVwiZ3JlZW5cIl0gLmRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogIzYwNzczZDtcclxufVxyXG4uY2FyZFtkYXRhLWNvbG9yPVwiZ3JlZW5cIl0gLmNhdGVnb3J5IHtcclxuICBjb2xvcjogIzkyYWM1NjtcclxufVxyXG5cclxuLmNhcmRbZGF0YS1jb2xvcj1cInllbGxvd1wiXSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZTI4YztcclxufVxyXG4uY2FyZFtkYXRhLWNvbG9yPVwieWVsbG93XCJdIC5kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICNiMjU4MjU7XHJcbn1cclxuLmNhcmRbZGF0YS1jb2xvcj1cInllbGxvd1wiXSAuY2F0ZWdvcnkge1xyXG4gIGNvbG9yOiAjZDg4NzE1O1xyXG59XHJcblxyXG4uY2FyZFtkYXRhLWNvbG9yPVwiYnJvd25cIl0ge1xyXG4gIGJhY2tncm91bmQ6ICNkNmMxYWI7XHJcbn1cclxuLmNhcmRbZGF0YS1jb2xvcj1cImJyb3duXCJdIC5kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICM3NTQ0MmU7XHJcbn1cclxuLmNhcmRbZGF0YS1jb2xvcj1cImJyb3duXCJdIC5jYXRlZ29yeSB7XHJcbiAgY29sb3I6ICNhNDdlNjU7XHJcbn1cclxuXHJcbi5jYXJkW2RhdGEtY29sb3I9XCJwdXJwbGVcIl0ge1xyXG4gIGJhY2tncm91bmQ6ICNiYWE5YmE7XHJcbn1cclxuLmNhcmRbZGF0YS1jb2xvcj1cInB1cnBsZVwiXSAuZGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiAjM2EyODNkO1xyXG59XHJcbi5jYXJkW2RhdGEtY29sb3I9XCJwdXJwbGVcIl0gLmNhdGVnb3J5IHtcclxuICBjb2xvcjogIzVhMjgzZDtcclxufVxyXG5cclxuLmNhcmRbZGF0YS1jb2xvcj1cIm9yYW5nZVwiXSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmOGY1ZTtcclxufVxyXG4uY2FyZFtkYXRhLWNvbG9yPVwib3JhbmdlXCJdIC5kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICM3NzI1MTA7XHJcbn1cclxuLmNhcmRbZGF0YS1jb2xvcj1cIm9yYW5nZVwiXSAuY2F0ZWdvcnkge1xyXG4gIGNvbG9yOiAjZTk1ZTM3O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5053:
/*!*************************************************************!*\
  !*** ./src/app/components/trip-tabs/trip-tabs.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripTabsComponent": () => (/* binding */ TripTabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _triplist_triplist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../triplist/triplist.component */ 8738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





function TripTabsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-triplist");
  }
}
function TripTabsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-triplist", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isPast", true);
  }
}
class TripTabsComponent {}
TripTabsComponent.ɵfac = function TripTabsComponent_Factory(t) {
  return new (t || TripTabsComponent)();
};
TripTabsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TripTabsComponent,
  selectors: [["app-trip-tabs"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 15,
  vars: 4,
  consts: [[1, "container", "mt-3", "mb-2"], ["ngbNav", "", 1, "nav-tabs", "justify-content-center", "nav-justified", 3, "activeId"], ["nav", "ngbNav"], [1, "col-lg-4", "text-center", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [3, "isPast"]],
  template: function TripTabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "ul", 1, 2)(4, "li", 3)(5, "a", 4)(6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Trips");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TripTabsComponent_ng_template_8_Template, 1, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 3)(10, "a", 4)(11, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Past Trips");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TripTabsComponent_ng_template_13_Template, 1, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavOutlet, _triplist_triplist_component__WEBPACK_IMPORTED_MODULE_0__.TriplistComponent],
  styles: [".nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: rgb(122, 141, 187);\n  border-width: 0 0 2px 0;\n  border-color: green;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: rgb(44, 28, 190);\n  border-width: 2px 2px 0 2px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  border-width: 0 2px 2px 2px;\n  border-color: green;\n  border-style: solid;\n  margin-top: -1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmlwLXRhYnMvdHJpcC10YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUVBLDJCQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiByZ2IoMTIyLCAxNDEsIDE4Nyk7XHJcbiAgXHJcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XHJcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcclxuICBjb2xvcjogcmdiKDQ0LCAyOCwgMTkwKTtcclxuXHJcbiAgYm9yZGVyLXdpZHRoOiAycHggMnB4IDAgMnB4O1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDJweDtcclxuICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxufVxyXG5cclxuLy8gLnRhYi1jb250ZW50IC50YWItcGFuZSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuLy8gICBjb2xvcjogIzAwODBGRjtcclxuLy8gICBtaW4taGVpZ2h0OiAyMDBweDtcclxuLy8gICBoZWlnaHQ6IGF1dG87XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 8251:
/*!***************************************************************!*\
  !*** ./src/app/components/tripdetail/tripdetail.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripdetailComponent": () => (/* binding */ TripdetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _planning_planning_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../planning/planning.component */ 729);
/* harmony import */ var _prepare_prepare_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prepare/prepare.component */ 1821);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentBase */ 1749);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_store_trip_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/trip.selectors */ 1363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../summary/summary.component */ 6685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);












function TripdetailComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Your Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TripdetailComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-planning", 8);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("trip", ctx_r2.trip);
  }
}
function TripdetailComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Preparation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TripdetailComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-prepare", 8);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("trip", ctx_r4.trip);
  }
}
function TripdetailComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Summary and Expense Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TripdetailComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-summary", 8);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("trip", ctx_r6.trip);
  }
}
class TripdetailComponent extends _componentBase__WEBPACK_IMPORTED_MODULE_2__.componentBase {
  constructor(store) {
    super(store);
    this.activePanel = 'plan-panel';
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(src_app_store_trip_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCurrentSelectedTrip), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(data => {
      if (data) {
        this.trip = data;
      }
    })).subscribe();
  }
  ngOnInit() {}
}
TripdetailComponent.ɵfac = function TripdetailComponent_Factory(t) {
  return new (t || TripdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};
TripdetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: TripdetailComponent,
  selectors: [["app-tripdetail"]],
  inputs: {
    activePanel: "activePanel"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 13,
  vars: 5,
  consts: [[1, "container"], [3, "activeIds", "destroyOnHide", "closeOthers"], ["acc", "ngbAccordion"], ["id", "plan-panel"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["id", "preparation-panel", 3, "disabled"], ["id", "summary-panel", 3, "disabled"], [3, "trip"]],
  template: function TripdetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "ngb-accordion", 1, 2)(4, "ngb-panel", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TripdetailComponent_ng_template_5_Template, 2, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TripdetailComponent_ng_template_6_Template, 1, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ngb-panel", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TripdetailComponent_ng_template_8_Template, 2, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, TripdetailComponent_ng_template_9_Template, 1, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ngb-panel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, TripdetailComponent_ng_template_11_Template, 2, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, TripdetailComponent_ng_template_12_Template, 1, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("activeIds", ctx.activePanel)("destroyOnHide", false)("closeOthers", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.trip);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.trip);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPanelContent, _planning_planning_component__WEBPACK_IMPORTED_MODULE_0__.PlanningComponent, _prepare_prepare_component__WEBPACK_IMPORTED_MODULE_1__.PrepareComponent, _summary_summary_component__WEBPACK_IMPORTED_MODULE_4__.SummaryComponent],
  styles: [".collapsible[_ngcontent-%COMP%] {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n}\n\n.accordion[_ngcontent-%COMP%] {\n  --bs-accordion-bg: rgb(255, 253, 253);\n  --bs-accordion-btn-padding-y: 8px;\n  --bs-accordion-body-padding-x: 2px;\n  --bs-accordion-body-padding-x: 8px;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.collapse[_ngcontent-%COMP%]:not(.show) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UscUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7QUFHRjs7QUEwQkU7RUFDRSxhQUFBO0FBdkJKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxhcHNpYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5hY2NvcmRpb24ge1xyXG4gIC0tYnMtYWNjb3JkaW9uLWJnOiByZ2IoMjU1LCAyNTMsIDI1Myk7XHJcbiAgLS1icy1hY2NvcmRpb24tYnRuLXBhZGRpbmcteTogOHB4O1xyXG4gIC0tYnMtYWNjb3JkaW9uLWJvZHktcGFkZGluZy14OiAycHg7XHJcbiAgLS1icy1hY2NvcmRpb24tYm9keS1wYWRkaW5nLXg6IDhweDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi8vIC8qIEFkZCBhIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGJ1dHRvbiBpZiBpdCBpcyBjbGlja2VkIG9uIChhZGQgdGhlIC5hY3RpdmUgY2xhc3Mgd2l0aCBKUyksIGFuZCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIGl0IChob3ZlcikgKi9cclxuLy8gLmFjdGl2ZSwgLmNvbGxhcHNpYmxlOmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBTdHlsZSB0aGUgY29sbGFwc2libGUgY29udGVudC4gTm90ZTogaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuLy8gLmNvbnRlbnQge1xyXG4vLyAgIHBhZGRpbmc6IDAgMThweDtcclxuLy8gICBkaXNwbGF5OiBub25lO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuLy8gfVxyXG5cclxuLy8gLmNvbGxhcHNpYmxlOmFmdGVyIHtcclxuLy8gICBjb250ZW50OiAnXFwwMjc5NSc7IC8qIFVuaWNvZGUgY2hhcmFjdGVyIGZvciBcInBsdXNcIiBzaWduICgrKSAqL1xyXG4vLyAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5hY3RpdmU6YWZ0ZXIge1xyXG4vLyAgIGNvbnRlbnQ6IFwiXFwyNzk2XCI7IC8qIFVuaWNvZGUgY2hhcmFjdGVyIGZvciBcIm1pbnVzXCIgc2lnbiAoLSkgKi9cclxuLy8gfVxyXG5cclxuLmNvbGxhcHNlIHtcclxuICAmOm5vdCguc2hvdykge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5600:
/*!***********************************************************!*\
  !*** ./src/app/components/tripitem/tripitem.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripitemComponent": () => (/* binding */ TripitemComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



function TripitemComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.tagStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.tagText);
  }
}
class TripitemComponent {
  constructor() {
    this.tagRequired = true;
  }
  ngOnInit() {
    if (this.trip) {
      this.title = this.trip.places.map(s => s.name).join(", ");
      if (this.tagRequired) {
        if (new Date(this.trip.start_at) >= new Date()) {
          this.tagText = 'Upcoming';
          this.tagStyle = 'upcoming';
        } else {
          this.tagText = 'In Progress';
          this.tagStyle = 'inprogress';
        }
      }
    }
  }
}
TripitemComponent.ɵfac = function TripitemComponent_Factory(t) {
  return new (t || TripitemComponent)();
};
TripitemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TripitemComponent,
  selectors: [["app-tripitem"]],
  inputs: {
    trip: "trip",
    tagRequired: "tagRequired"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 8,
  vars: 10,
  consts: [[1, "container"], [1, "fw-bold"], ["class", "badge", 3, "ngClass", 4, "ngIf"], [1, "badge", 3, "ngClass"]],
  template: function TripitemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TripitemComponent_span_3_Template, 2, 2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tagText);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, ctx.trip.start_at, "fullDate"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 7, ctx.trip.end_at, "fullDate"), ")");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
  styles: [".upcoming[_ngcontent-%COMP%] {\n  background-color: #ebf7b8; \n  color: #000000;\n}\n\n.inprogress[_ngcontent-%COMP%] {\n  background-color: #5cd366; \n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmlwaXRlbS90cmlwaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBLEVBQUEsK0NBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQSxFQUFBLCtDQUFBO0VBQ0EsY0FBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnVwY29taW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmY3Yjg7IC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGRlc2lyZWQgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5pbnByb2dyZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2QzNjY7IC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGRlc2lyZWQgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 8738:
/*!***********************************************************!*\
  !*** ./src/app/components/triplist/triplist.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TriplistComponent": () => (/* binding */ TriplistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _tripdetail_tripdetail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tripdetail/tripdetail.component */ 8251);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_store_trip_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/trip.selectors */ 1363);
/* harmony import */ var src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/trip.action */ 8859);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentBase */ 1749);
/* harmony import */ var _tripitem_tripitem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tripitem/tripitem.component */ 5600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/event.service */ 9426);












const _c0 = ["modelControl"];
function TriplistComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TriplistComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TriplistComponent_button_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const trip_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.showTripDetails({
        tripId: trip_r5.id
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-tripitem", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trip_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("trip", trip_r5)("tagRequired", !ctx_r1.isPast);
  }
}
function TriplistComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TriplistComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.showTripDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div")(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "New Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function TriplistComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TriplistComponent_ng_template_8_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const modal_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r10.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-tripdetail");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 17)(7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TriplistComponent_ng_template_8_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const modal_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r10.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.title);
  }
}
class TriplistComponent extends _componentBase__WEBPACK_IMPORTED_MODULE_3__.componentBase {
  constructor(store, ngbModelconfig, modalService, eventService) {
    super(store);
    this.ngbModelconfig = ngbModelconfig;
    this.modalService = modalService;
    this.eventService = eventService;
    this.isPast = false;
    this.trips$ = store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_store_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTrips));
    ngbModelconfig.backdrop = 'static';
    ngbModelconfig.keyboard = false;
    this.eventService.isTripDeleted$.subscribe(isDelete => {
      if (isDelete) {
        this.modalRef.close();
        this.eventService.reset();
      }
    });
  }
  ngOnInit() {
    if (!this.isPast) {
      this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__.getTrips());
    } else {
      this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__.getPastTrips());
    }
  }
  showTripDetails($event) {
    this.title = $event?.tripId ? "Trip Details" : "New Trip";
    if ($event?.tripId) {
      this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__.selectTrip({
        tripId: $event.tripId
      }));
    }
    this.modalRef = this.modalService.open(this.modelControl, {
      scrollable: true,
      size: 'xl'
    });
    this.modalRef.result.then(result => {
      //this.updateDb();
      this.clearSelection();
    }, reason => {
      //this.updateDb();
      this.clearSelection();
    });
  }
  // updateDb() {
  //   this.store.pipe(select(selectTripsChanged), first()).subscribe(value => {
  //     if (!!value) {
  //       this.store.dispatch(tripActions.updateTripDb());
  //     }
  //   });
  //   this.store.dispatch(tripActions.clearTripSelection());
  // }
  clearSelection() {
    this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__.clearTripSelection());
  }
}
TriplistComponent.ɵfac = function TriplistComponent_Factory(t) {
  return new (t || TriplistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__.EventService));
};
TriplistComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TriplistComponent,
  selectors: [["app-triplist"]],
  viewQuery: function TriplistComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modelControl = _t.first);
    }
  },
  inputs: {
    isPast: "isPast"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
  decls: 10,
  vars: 7,
  consts: [[1, "container"], [1, "pt-3"], ["class", "text-center", 4, "ngIf"], [1, "list-group", "list-group-light", "ms-1", "me-1"], ["type", "button", "class", "btn list-group-item list-group-item-action d-flex justify-content-between align-items-center px-3 border-2 rounded-2 mt-1 mb-3 list-group-item-primary", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "list-group-item list-group-item-action px-3 text-center justify-content-between align-items-center border-2 rounded-3 mb-3 list-group-item-success", 3, "click", 4, "ngIf"], ["modelControl", ""], [1, "text-center"], ["src", "assets/loading.gif", "alt", "Loading..."], ["type", "button", 1, "btn", "list-group-item", "list-group-item-action", "d-flex", "justify-content-between", "align-items-center", "px-3", "border-2", "rounded-2", "mt-1", "mb-3", "list-group-item-primary", 3, "click"], [3, "trip", "tagRequired"], ["type", "button", 1, "list-group-item", "list-group-item-action", "px-3", "text-center", "justify-content-between", "align-items-center", "border-2", "rounded-3", "mb-3", "list-group-item-success", 3, "click"], [1, "fw-bold"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"]],
  template: function TriplistComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TriplistComponent_div_2_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TriplistComponent_button_5_Template, 2, 2, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, TriplistComponent_button_7_Template, 6, 0, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TriplistComponent_ng_template_8_Template, 9, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, ctx.isLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 5, ctx.trips$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isPast);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _tripdetail_tripdetail_component__WEBPACK_IMPORTED_MODULE_0__.TripdetailComponent, _tripitem_tripitem_component__WEBPACK_IMPORTED_MODULE_4__.TripitemComponent],
  styles: [".accordion-button.collapsed[_ngcontent-%COMP%] {\n  background: rgb(243, 245, 247);\n}\n\n  .modal-dialog {\n  --bs-modal-margin: 0px; \n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 7px 15px 7px 10px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 5px 10px 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmlwbGlzdC90cmlwbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxzQkFBQSxFQUFBLGlDQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSSwwQkFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7QUFLSiIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvcmRpb24tYnV0dG9uLmNvbGxhcHNlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDUsIDI0NylcclxufVxyXG46Om5nLWRlZXAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAtLWJzLW1vZGFsLW1hcmdpbjogMHB4OyAvKiBTZXQgdGhlIGRlc2lyZWQgbWFyZ2luIHZhbHVlICovXHJcbn1cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogN3B4IDE1cHggN3B4IDEwcHg7XHJcbn1cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 4024:
/*!*****************************************************!*\
  !*** ./src/app/components/trips/trips.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripsComponent": () => (/* binding */ TripsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _flow_flow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flow/flow.component */ 6248);
/* harmony import */ var _trip_tabs_trip_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trip-tabs/trip-tabs.component */ 5053);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/footer/footer.component */ 1823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class TripsComponent {}
TripsComponent.ɵfac = function TripsComponent_Factory(t) {
  return new (t || TripsComponent)();
};
TripsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TripsComponent,
  selectors: [["app-trips"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 0,
  template: function TripsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-flow")(1, "app-trip-tabs")(2, "app-feedback")(3, "app-footer");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _flow_flow_component__WEBPACK_IMPORTED_MODULE_0__.FlowComponent, _trip_tabs_trip_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TripTabsComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__.FeedbackComponent, _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5356:
/*!********************************************!*\
  !*** ./src/app/models/event-types.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTypes": () => (/* binding */ EventTypes)
/* harmony export */ });
var EventTypes;
(function (EventTypes) {
  EventTypes["Success"] = "success";
  EventTypes["Info"] = "info";
  EventTypes["Warning"] = "warning";
  EventTypes["Error"] = "error";
  EventTypes["Feedback"] = "feedback";
})(EventTypes || (EventTypes = {}));

/***/ }),

/***/ 2149:
/*!********************************************!*\
  !*** ./src/app/models/placeholder.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Placeholders": () => (/* binding */ Placeholders)
/* harmony export */ });
var Placeholders;
(function (Placeholders) {
  Placeholders["transports"] = "Ex: Driving, Hiring, Flight";
  Placeholders["stays"] = "Ex: The Plaza Hotel";
  Placeholders["activities"] = "Ex: Skydiving";
  Placeholders["food"] = "Ex: Breakfast at BurgerKing";
  Placeholders["shopping"] = "Ex: Shopping from local market";
  Placeholders["notes"] = "Ex: The dinner at ForknBrew was awesome !";
})(Placeholders || (Placeholders = {}));

/***/ }),

/***/ 3986:
/*!*********************************************!*\
  !*** ./src/app/models/preparelist.const.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrepareList": () => (/* binding */ PrepareList)
/* harmony export */ });
const PrepareList = [{
  name: "Leave requested at Office",
  checked: false
}, {
  name: "Transport booked",
  checked: false
}, {
  name: "Stay booked",
  checked: false
}, {
  name: "Activities booked",
  checked: false
}, {
  name: "Bag packed",
  checked: false
}];

/***/ }),

/***/ 6475:
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _models_event_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/event-types.enum */ 5356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7556);




class AppService {
  constructor(firestore, authService) {
    this.firestore = firestore;
    this.authService = authService;
    this.firestoreCollectionError = firestore.collection('errors');
    this.firestoreCollectionFeedback = firestore.collection('feedbacks');
  }
  addError(message) {
    let errorObj = {
      type: _models_event_types_enum__WEBPACK_IMPORTED_MODULE_0__.EventTypes.Error,
      message,
      received_at: new Date().toISOString(),
      userId: this.authService.user.uid
    };
    return this.firestoreCollectionError.add(errorObj);
  }
  addFeedback(message) {
    let errorObj = {
      type: _models_event_types_enum__WEBPACK_IMPORTED_MODULE_0__.EventTypes.Feedback,
      message,
      received_at: new Date().toISOString(),
      userId: this.authService.user.uid
    };
    return this.firestoreCollectionFeedback.add(errorObj);
  }
}
AppService.ɵfac = function AppService_Factory(t) {
  return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
AppService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AppService,
  factory: AppService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8063:
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.authService.user === null || this.authService.user === undefined) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_RATHEESH_MyProjects_LetsGo_LetsgoPwa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 6818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage.service */ 7675);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.service */ 4465);







class AuthService {
  constructor(afAuth, localStoreageService, ngZone, router, toastService) {
    this.afAuth = afAuth;
    this.localStoreageService = localStoreageService;
    this.ngZone = ngZone;
    this.router = router;
    this.toastService = toastService;
    this.user = this.localStoreageService.getUserLoggedIn();
    this.afAuth.authState.subscribe(user => {
      if (user && user.emailVerified) {
        this.user = user;
        this.localStoreageService.setUserLoggedIn(this.user);
        this.ngZone.run(() => {
          this.router.navigate(['trip']);
        });
      } else {
        this.user = null;
        this.localStoreageService.clearUser();
        this.ngZone.run(() => {
          this.router.navigate(['login']);
        });
      }
    });
  }
  SignIn(email, password) {
    var _this = this;
    return (0,C_RATHEESH_MyProjects_LetsGo_LetsgoPwa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
        if (result.user && !result.user.emailVerified) {
          _this.SignOut();
          _this.toastService.showWarningToast("Login failed", "Email not verified. Please find the email in your inbox/junk/spam and do verify by click on the link.");
        }
      }, err => {
        switch (err.code) {
          case firebase_auth__WEBPACK_IMPORTED_MODULE_1__.AuthErrorCodes.INVALID_PASSWORD:
            {
              _this.toastService.showWarningToast("Login failed", "Invalid Password.");
              break;
            }
          case firebase_auth__WEBPACK_IMPORTED_MODULE_1__.AuthErrorCodes.INVALID_EMAIL:
            {
              _this.toastService.showWarningToast("Login failed", "Invalid Email.");
              break;
            }
          case firebase_auth__WEBPACK_IMPORTED_MODULE_1__.AuthErrorCodes.INVALID_IDP_RESPONSE:
            {
              _this.toastService.showWarningToast("Login failed", "Invalid Email or Password.");
              break;
            }
          case firebase_auth__WEBPACK_IMPORTED_MODULE_1__.AuthErrorCodes.USER_MISMATCH:
            {
              _this.toastService.showWarningToast("Login failed", "User not found.");
              break;
            }
          case firebase_auth__WEBPACK_IMPORTED_MODULE_1__.AuthErrorCodes.USER_DELETED:
            {
              _this.toastService.showWarningToast("Login failed", "User not found.");
              break;
            }
          case firebase_auth__WEBPACK_IMPORTED_MODULE_1__.AuthErrorCodes.USER_DISABLED:
            {
              _this.toastService.showWarningToast("Login failed", "The user account has been disabled by an administrator.");
              break;
            }
          case firebase_auth__WEBPACK_IMPORTED_MODULE_1__.AuthErrorCodes.UNVERIFIED_EMAIL:
            {
              _this.toastService.showWarningToast("Login failed", "Email not verified. Please find the email in your inbox/junk/spam and do verify by click on the link.");
              break;
            }
        }
      }).catch(err => {
        console.log(err.message);
        _this.toastService.showWarningToast("Login failed", "Something went Wrong. Please report using feedback feature.");
      });
    })();
  }
  SignUp(email, password, displayName) {
    var _this2 = this;
    return (0,C_RATHEESH_MyProjects_LetsGo_LetsgoPwa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.afAuth.createUserWithEmailAndPassword(email, password).then(result => {
        if (result.user) {
          result.user.updateProfile({
            displayName: displayName
          }).then(() => {
            return result.user?.sendEmailVerification().then(() => {
              _this2.toastService.showWarningToast("Email verification sent!", `Check out your Mailbox to verify the mail, If you did not find the email, check the junk folder, Spam.`);
              _this2.SignOut();
            });
          });
        }
      }, err => {
        switch (err.code) {
          case firebase_auth__WEBPACK_IMPORTED_MODULE_1__.AuthErrorCodes.EMAIL_EXISTS:
            {
              _this2.toastService.showWarningToast("Registration failed", "Email already exists.");
              break;
            }
          case firebase_auth__WEBPACK_IMPORTED_MODULE_1__.AuthErrorCodes.WEAK_PASSWORD:
            {
              _this2.toastService.showWarningToast("Registration failed", "Weak Password (Should be at least 6 characters long).");
              break;
            }
        }
      }).catch(err => {
        console.log(err.message);
        _this2.toastService.showWarningToast("Registration failed", "Something went Wrong. Please report using feedback feature.");
      });
    })();
  }
  ForgotPassword(email) {
    var _this3 = this;
    return (0,C_RATHEESH_MyProjects_LetsGo_LetsgoPwa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.afAuth.sendPasswordResetEmail(email).then(() => {
        _this3.toastService.showWarningToast("Password reset", "Password reset email sent. Please check your mailbox.");
        _this3.ngZone.run(() => {
          _this3.router.navigate(['login']);
        });
      }, err => {
        switch (err.code) {
          case firebase_auth__WEBPACK_IMPORTED_MODULE_1__.AuthErrorCodes.USER_DELETED:
            {
              _this3.toastService.showWarningToast("Password reset", "Email not found.");
              break;
            }
        }
      });
    })();
  }
  SignOut() {
    var _this4 = this;
    return (0,C_RATHEESH_MyProjects_LetsGo_LetsgoPwa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this4.afAuth.signOut();
    })();
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_2__.LocalstorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9426:
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class EventService {
  constructor() {
    this.eventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isTripDeleted$ = this.eventSubject.asObservable();
  }
  onTripDelete(isDelete) {
    this.isDeleted = isDelete;
    this.eventSubject.next(isDelete);
  }
  reset() {
    this.isDeleted = false;
  }
}
EventService.ɵfac = function EventService_Factory(t) {
  return new (t || EventService)();
};
EventService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: EventService,
  factory: EventService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7675:
/*!**************************************************!*\
  !*** ./src/app/services/localstorage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalstorageService": () => (/* binding */ LocalstorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LocalstorageService {
  constructor() {}
  setUserLoggedIn(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUserLoggedIn() {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  }
  clearUser() {
    localStorage.removeItem('user');
  }
}
LocalstorageService.ɵfac = function LocalstorageService_Factory(t) {
  return new (t || LocalstorageService)();
};
LocalstorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LocalstorageService,
  factory: LocalstorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4465:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _models_event_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/event-types.enum */ 5356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class ToastService {
  constructor() {
    this._toastEvents = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.toastEvents = this._toastEvents.asObservable();
  }
  /**
   * Show success toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showSuccessToast(title, message) {
    this._toastEvents.next({
      message,
      title,
      type: _models_event_types_enum__WEBPACK_IMPORTED_MODULE_0__.EventTypes.Success
    });
  }
  /**
   * Show info toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showInfoToast(title, message) {
    this._toastEvents.next({
      message,
      title,
      type: _models_event_types_enum__WEBPACK_IMPORTED_MODULE_0__.EventTypes.Info
    });
  }
  /**
   * Show warning toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showWarningToast(title, message) {
    this._toastEvents.next({
      message,
      title,
      type: _models_event_types_enum__WEBPACK_IMPORTED_MODULE_0__.EventTypes.Warning
    });
  }
  /**
   * Show error toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showErrorToast(title, message) {
    this._toastEvents.next({
      message,
      title,
      type: _models_event_types_enum__WEBPACK_IMPORTED_MODULE_0__.EventTypes.Error
    });
  }
}
ToastService.ɵfac = function ToastService_Factory(t) {
  return new (t || ToastService)();
};
ToastService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ToastService,
  factory: ToastService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7446:
/*!******************************************!*\
  !*** ./src/app/services/trip.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripService": () => (/* binding */ TripService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);



class TripService {
  constructor(firestore, authService) {
    this.firestore = firestore;
    this.authService = authService;
    this.firestoreCollection = firestore.collection('trips');
  }
  getTrips() {
    const today = new Date().toISOString();
    return this.firestore.collection('trips', ref => ref.where('userId', '==', this.authService.user.uid).where('end_at', '>', today).orderBy('end_at')).valueChanges({
      idField: 'id'
    });
  }
  getPastTrips() {
    const today = new Date().toISOString();
    return this.firestore.collection('trips', ref => ref.where('userId', '==', this.authService.user.uid).where('end_at', '<', today).orderBy('end_at', 'desc')).valueChanges({
      idField: 'id'
    });
  }
  addNewTrip(trip) {
    return this.firestoreCollection.add(trip);
  }
  updateTrip(trip) {
    return this.firestoreCollection.doc(trip.id).update({
      ...trip
    });
  }
  updatePlace(trip) {
    return this.firestoreCollection.doc(trip.id).set({
      places: trip.places
    }, {
      merge: true
    });
  }
  updateBag(trip) {
    return this.firestoreCollection.doc(trip.id).set({
      bag: trip.bag
    }, {
      merge: true
    });
  }
  updatePrepareCheck(trip) {
    return this.firestoreCollection.doc(trip.id).set({
      prepareCheck: trip.prepareCheck
    }, {
      merge: true
    });
  }
  deleteTrip(id) {
    return this.firestoreCollection.doc(id).delete();
  }
}
TripService.ɵfac = function TripService_Factory(t) {
  return new (t || TripService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
TripService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TripService,
  factory: TripService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8859:
/*!**************************************!*\
  !*** ./src/app/store/trip.action.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTripSelection": () => (/* binding */ clearTripSelection),
/* harmony export */   "deleteTrip": () => (/* binding */ deleteTrip),
/* harmony export */   "deleteTripSuccessResponse": () => (/* binding */ deleteTripSuccessResponse),
/* harmony export */   "getFailureResponse": () => (/* binding */ getFailureResponse),
/* harmony export */   "getPastTrips": () => (/* binding */ getPastTrips),
/* harmony export */   "getTrips": () => (/* binding */ getTrips),
/* harmony export */   "getTripsSuccessResponse": () => (/* binding */ getTripsSuccessResponse),
/* harmony export */   "newTrip": () => (/* binding */ newTrip),
/* harmony export */   "newTripSuccessResponse": () => (/* binding */ newTripSuccessResponse),
/* harmony export */   "postFeedback": () => (/* binding */ postFeedback),
/* harmony export */   "selectTrip": () => (/* binding */ selectTrip),
/* harmony export */   "updateBag": () => (/* binding */ updateBag),
/* harmony export */   "updatePlace": () => (/* binding */ updatePlace),
/* harmony export */   "updatePrepareList": () => (/* binding */ updatePrepareList),
/* harmony export */   "updateTrip": () => (/* binding */ updateTrip),
/* harmony export */   "updateTripSuccessResponse": () => (/* binding */ updateTripSuccessResponse)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const getTrips = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip/API] Get Trips');
const getPastTrips = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip/API] Get Past Trips');
const getTripsSuccessResponse = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip] Get Trips Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const newTrip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip/API] New Trip', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const newTripSuccessResponse = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip] New Trip Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteTrip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip/API] Delete Trip', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteTripSuccessResponse = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip] Delete Trip Success');
const updateTrip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip/API] Update Trip', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePlace = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip/API] Update Place', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateBag = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip/API] Update Bag', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePrepareList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip/API] Update PrepareCheck', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// export const updateTripDb = createAction(
//     '[Trip/API] Update Trip at DB'
// );
const updateTripSuccessResponse = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip] Update Trip Success');
const getFailureResponse = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip] Get Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectTrip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip] Selected Trip', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearTripSelection = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip] Clear Trip Selection');
const postFeedback = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Trip/API] Post Feedback', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 4339:
/*!***************************************!*\
  !*** ./src/app/store/trip.effects.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripsEffects": () => (/* binding */ TripsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 538);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _trip_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip.action */ 8859);
/* harmony import */ var _trip_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip.selectors */ 1363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/trip.service */ 7446);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ 6475);










class TripsEffects {
  constructor(actions$, tripService, appService, store) {
    this.actions$ = actions$;
    this.tripService = tripService;
    this.appService = appService;
    this.store = store;
    this.getTrips$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getTrips), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTripsChanged)), this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTrips))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([action, tripsChanged, trips]) => {
      // If tripsChanged is True then only API call needed, else can return the current trips
      if (tripsChanged === true) {
        return this.tripService.getTrips().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getTripsSuccessResponse({
          trips: response,
          tripsChanged: false
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
          error: error.message
        }))));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getTripsSuccessResponse({
          trips,
          tripsChanged
        }));
      }
    })));
    this.getPastTrips$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getPastTrips), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTripsChanged)), this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTrips))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([action, tripsChanged, trips]) => {
      // If tripsChanged is True then only API call needed, else can return the current trips
      if (tripsChanged === true) {
        return this.tripService.getPastTrips().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getTripsSuccessResponse({
          trips: response,
          tripsChanged: false
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
          error: error.message
        }))));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getTripsSuccessResponse({
          trips,
          tripsChanged
        }));
      }
    })));
    this.newTrip$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.newTrip), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(payload => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(this.tripService.addNewTrip(payload.trip)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.newTripSuccessResponse({
      trip: payload.trip,
      id: response.id
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
      error: error.message
    })))))));
    this.deleteTrip$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.deleteTrip), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(this.tripService.deleteTrip(action.id)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.deleteTripSuccessResponse()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
      error: error.message
    })))))), {
      dispatch: false
    } // set dispatch to false to indicate that this effect does not emit any actions
    );

    this.updateTrip$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTrip), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentSelectedTrip))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([action, trip]) => this.tripService.updateTrip(trip).then(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTripSuccessResponse()).catch(error => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
      error: error.message
    })))));
    this.updatePlace$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updatePlace), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentSelectedTrip))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([action, trip]) => this.tripService.updatePlace(trip).then(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTripSuccessResponse()).catch(error => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
      error: error.message
    })))));
    this.updateBag$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updateBag), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentSelectedTrip))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([action, trip]) => this.tripService.updateBag(trip).then(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTripSuccessResponse()).catch(error => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
      error: error.message
    })))));
    this.updatePrepareCheck$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updatePrepareList), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentSelectedTrip))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([action, trip]) => this.tripService.updatePrepareCheck(trip).then(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTripSuccessResponse()).catch(error => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
      error: error.message
    })))));
    this.postError$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(this.appService.addError(action.error)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(() => undefined),
    // return a void observable if API call succeeds
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
      console.error(error); // log the error to the console
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(undefined); // return a void observable to signal that the effect is complete
    })))), {
      dispatch: false
    } // set dispatch to false to indicate that this effect does not emit any actions
    );

    this.postFeedback$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.postFeedback), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(this.appService.addFeedback(action.message)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(() => undefined),
    // return a void observable if API call succeeds
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
      console.error(error); // log the error to the console
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(undefined); // return a void observable to signal that the effect is complete
    })))), {
      dispatch: false
    } // set dispatch to false to indicate that this effect does not emit any actions
    );
  }
}

TripsEffects.ɵfac = function TripsEffects_Factory(t) {
  return new (t || TripsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_trip_service__WEBPACK_IMPORTED_MODULE_2__.TripService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};
TripsEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
  token: TripsEffects,
  factory: TripsEffects.ɵfac
});

/***/ }),

/***/ 8009:
/*!***************************************!*\
  !*** ./src/app/store/trip.reducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "tripReducer": () => (/* binding */ tripReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _trip_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip.action */ 8859);


const initialState = {
  isLoading: false,
  trips: [],
  error: null,
  selectedTripId: null,
  tripsChanged: false
};
const tripReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getTrips, state => {
  return {
    ...state,
    tripsChanged: true,
    isLoading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getPastTrips, state => {
  return {
    ...state,
    trips: [],
    tripsChanged: true,
    isLoading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getTripsSuccessResponse, (state, action) => {
  return {
    ...state,
    isLoading: false,
    trips: action.trips,
    tripsChanged: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.newTrip, state => {
  return {
    ...state,
    isLoading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.newTripSuccessResponse, (state, {
  trip,
  id
}) => {
  let trips = [...state.trips];
  let newTrip = {
    ...trip,
    id
  };
  trips.unshift(newTrip);
  return {
    ...state,
    isLoading: false,
    trips,
    selectedTripId: id
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse, (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.error
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTrip, (state, changes) => ({
  ...state,
  trips: state.trips.map(trip => {
    if (trip.id === state.selectedTripId) {
      return {
        ...trip,
        ...changes.trip
      };
    }
    return trip;
  }),
  tripsChanged: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updatePlace, (state, changes) => ({
  ...state,
  trips: state.trips.map(trip => {
    if (trip.id === state.selectedTripId) {
      const index = trip.places.findIndex(s => s.name === changes.place.name);
      return {
        ...trip,
        places: [...trip.places.slice(0, index), changes.place, ...trip.places.slice(index + 1)]
      };
    }
    return trip;
  }),
  tripsChanged: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updateBag, (state, changes) => ({
  ...state,
  trips: state.trips.map(trip => {
    if (trip.id === state.selectedTripId) {
      return {
        ...trip,
        bag: changes.bag
      };
    }
    return trip;
  })
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updatePrepareList, (state, changes) => ({
  ...state,
  trips: state.trips.map(trip => {
    if (trip.id === state.selectedTripId) {
      return {
        ...trip,
        prepareCheck: changes.prepareCheck
      };
    }
    return trip;
  })
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTripSuccessResponse, state => {
  return state;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.selectTrip, (state, {
  tripId
}) => {
  return {
    ...state,
    selectedTripId: tripId
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.clearTripSelection, state => {
  return !!state.selectedTripId ? {
    ...state,
    selectedTripId: null
  } : state;
}));

/***/ }),

/***/ 1363:
/*!*****************************************!*\
  !*** ./src/app/store/trip.selectors.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectCurrentSelectedTrip": () => (/* binding */ selectCurrentSelectedTrip),
/* harmony export */   "selectError": () => (/* binding */ selectError),
/* harmony export */   "selectIsLoading": () => (/* binding */ selectIsLoading),
/* harmony export */   "selectTrip": () => (/* binding */ selectTrip),
/* harmony export */   "selectTripId": () => (/* binding */ selectTripId),
/* harmony export */   "selectTrips": () => (/* binding */ selectTrips),
/* harmony export */   "selectTripsChanged": () => (/* binding */ selectTripsChanged),
/* harmony export */   "tripFeatureState": () => (/* binding */ tripFeatureState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const tripFeatureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('trips');
const selectIsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(tripFeatureState, state => state.isLoading);
const selectTrips = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(tripFeatureState, state => state.trips);
const selectError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(tripFeatureState, state => state.error);
const selectTripId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(tripFeatureState, state => state.selectedTripId);
const selectTripsChanged = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(tripFeatureState, state => state.tripsChanged);
const selectTrip = id => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(tripFeatureState, state => state.trips.find(trip => trip.id === id));
const selectCurrentSelectedTrip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(tripFeatureState, state => state.trips.find(trip => trip.id === state.selectedTripId));

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  baseApiUrl: 'https://rkrgithub.github.io/letsgoapp',
  firebase: {
    apiKey: "AIzaSyD28bx9WSPcz2LfXJ_IIqL9HKh4Czfd4jU",
    authDomain: "letsgo-2023.firebaseapp.com",
    projectId: "letsgo-2023",
    storageBucket: "letsgo-2023.appspot.com",
    messagingSenderId: "440416180307",
    appId: "1:440416180307:web:9fd89f262562afe8488ea6",
    measurementId: "G-3C9VKW051Z"
  }
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _app_store_trip_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/store/trip.effects */ 4339);
/* harmony import */ var _app_store_trip_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/store/trip.reducer */ 8009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _app_app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app-routing */ 7983);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.component */ 5041);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);

















if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, {
  providers: [(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.provideStore)({
    trips: _app_store_trip_reducer__WEBPACK_IMPORTED_MODULE_1__.tripReducer
  }), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.provideEffects)([_app_store_trip_effects__WEBPACK_IMPORTED_MODULE_0__.TripsEffects]), (0,_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__.provideStoreDevtools)({
    maxAge: 25,
    logOnly: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.isDevMode)(),
    autoPause: true,
    trace: false,
    traceLimit: 75 // maximum stack trace frames to be stored (in case trace option was provided as true)
  }), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.isDevMode)(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(_app_app_routing__WEBPACK_IMPORTED_MODULE_2__.app_routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase), _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__.AngularFirestoreModule.enablePersistence())]
});

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 6189,
	"./ka.js": 6189,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6344), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.5004aef573fd7936.js.map
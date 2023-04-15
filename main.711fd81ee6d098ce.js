"use strict";
(self["webpackChunkLetsgoPwa"] = self["webpackChunkLetsgoPwa"] || []).push([["main"],{

/***/ 7983:
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 4173);
/* harmony import */ var _components_common_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/toaster/toaster.component */ 2635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class AppComponent {
  constructor() {
    this.title = 'Lets Go';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_common_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_1__.ToasterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3289:
/*!**********************************************************************!*\
  !*** ./src/app/components/common/breadcrump/breadcrump.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  styles: [".breadcrumb[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n\n.breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: hsl(246deg, 77%, 50%);\n  font-weight: bolder;\n  font-size: large;\n  border-bottom: 2px;\n}\n\n\n.breadcrumb[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vYnJlYWRjcnVtcC9icmVhZGNydW1wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUFBO0FBQ0E7RUFDSSxXQUFBO0FBQ0o7O0FBRUUseUNBQUE7QUFDQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUUsMkNBQUE7QUFDQTtFQUNFLGVBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJyZWFkY3J1bWIgY29sb3IgKi9cclxuLmJyZWFkY3J1bWIge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE92ZXJyaWRlIHRoZSBhY3RpdmUgYnJlYWRjcnVtYiBjb2xvciAqL1xyXG4gIC5icmVhZGNydW1iIC5hY3RpdmUge1xyXG4gICAgY29sb3I6IGhzbCgyNDYsIDc3JSwgNTAlKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4O1xyXG4gIH1cclxuICBcclxuICAvKiBPdmVycmlkZSB0aGUgYnJlYWRjcnVtYiBzZXBhcmF0b3IgaWNvbiAqL1xyXG4gIC5icmVhZGNydW1iIC5zZXBhcmF0b3Ige1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5211:
/*!******************************************************************!*\
  !*** ./src/app/components/common/carousel/carousel.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 6403:
/*!**************************************************************************!*\
  !*** ./src/app/components/common/inputformtag/inputformtag.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  styles: [".itag-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.itag-tag[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 6px;\n  border: 1px solid rgb(190, 185, 185);\n  border-radius: 5px;\n  line-height: 50px;\n  cursor: pointer;\n  word-break: break-all;\n  color: blue;\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: 0.55rem;\n  color: rgb(80, 78, 78);\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaW5wdXRmb3JtdGFnL2lucHV0Zm9ybXRhZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFLQSxXQUFBO0FBSEY7QUFERTtFQUNBLG9CQUFBO0VBQ0Usc0JBQUE7QUFHSjtBQUFFO0VBQ0UsaUJBQUE7QUFFSjtBQURJO0VBQ0UsVUFBQTtBQUdOIiwic291cmNlc0NvbnRlbnQiOlsiLml0YWctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDp3cmFwO1xyXG59XHJcblxyXG4uaXRhZy10YWcge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBwYWRkaW5nOjZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLCAxODUsIDE4NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OjUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAuY2xvc2Uge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC41NXJlbTtcclxuICAgIGNvbG9yOiByZ2IoODAsIDc4LCA3OCk7XHJcblx0fVxyXG4gIGNvbG9yOiBibHVlO1xyXG4gIC5jbG9zZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4173:
/*!**************************************************************!*\
  !*** ./src/app/components/common/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Logout");
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

/***/ 1523:
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/offcanvasdetails/offcanvasdetails.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffcanvasdetailsComponent": () => (/* binding */ OffcanvasdetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _selectformtag_selectformtag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selectformtag/selectformtag.component */ 507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);







function OffcanvasdetailsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Number required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function OffcanvasdetailsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffcanvasdetailsComponent_div_21_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Set");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffcanvasdetailsComponent_div_21_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.formValid);
  }
}
function OffcanvasdetailsComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffcanvasdetailsComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.closeOffCanvas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "show": a0
  };
};
class OffcanvasdetailsComponent {
  constructor(fb) {
    this.fb = fb;
    this.isOpen = false;
    this.data = {};
    this.formValid = false;
    this.formDirty = false;
    this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.title = '';
    const numberRegExp = /^\d+(\.\d+)?$/;
    this.reactiveForm = this.fb.group({
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(numberRegExp)]),
      paidBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      sharedWith: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl([])
    });
    this.initialValue = {
      name: this.data.tag?.name ?? null
    };
    this.commentsSubscription = this.reactiveForm.get('comments').valueChanges.subscribe(changes => {
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
    this.costSubscription = this.reactiveForm.get('cost').valueChanges.subscribe(changes => {
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
        name: this.data.tag?.name ?? null,
        comments: this.data.tag?.comments ?? null,
        expense: this.data.tag?.expense ?? null
      };
      this.reactiveForm.patchValue({
        comments: this.data.tag?.comments ?? null,
        cost: this.data.tag?.expense?.cost ?? null,
        paidBy: this.data.tag?.expense?.paidBy ?? null,
        sharedWith: this.data?.tag?.expense?.sharedWith ?? null
      });
      this.title = `${this.data?.tag?.name}`;
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
  }
  onHidden() {
    this.reactiveForm.reset();
    this.setFormState();
  }
  save() {
    if (this.formValid && this.formDirty) {
      this.onSave.emit(this.data);
      this.reactiveForm.markAsPristine();
      this.setFormState();
    }
  }
  cancel() {
    this.reactiveForm.reset({
      comments: this.initialValue?.comments,
      cost: this.initialValue?.expense?.cost,
      paidBy: this.initialValue?.expense?.paidBy,
      sharedWith: this.initialValue?.expense?.sharedWith
    });
    this.setFormState();
  }
  ngOnDestroy() {
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
OffcanvasdetailsComponent.ɵfac = function OffcanvasdetailsComponent_Factory(t) {
  return new (t || OffcanvasdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
OffcanvasdetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: OffcanvasdetailsComponent,
  selectors: [["app-offcanvasdetails"]],
  inputs: {
    data: "data"
  },
  outputs: {
    onSave: "onSave"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 23,
  vars: 15,
  consts: [["tabindex", "-1", "id", "myOffcanvas", "aria-labelledby", "offcanvasLabel", 1, "offcanvas", "offcanvas-end", 3, "ngClass", "hidden"], [1, "offcanvas-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", "text-reset", 3, "click"], ["id", "offcanvasLabel", 1, "offcanvas-title"], [1, "offcanvas-body"], [1, "form-group", 3, "formGroup"], [1, "mb-3", "form-floating"], ["placeholder", "Comments", "id", "floatingTextareaComments", "formControlName", "comments", 1, "form-control"], ["for", "floatingTextareaComments"], ["type", "text", "placeholder", "Cost", "id", "floatingInputCost", "name", "name", "formControlName", "cost", 1, "form-control"], ["for", "floatingInputCost"], ["class", "showValidation", 4, "ngIf"], [1, "mb-3"], ["id", "paidBySelect", "toggleLabel", "Paid By", "formControlName", "paidBy", 3, "allowEmptyTags", "items", "showDetails"], ["id", "sharedWithSelect", "toggleLabel", "Share expense with", "formControlName", "sharedWith", 3, "allowEmptyTags", "items", "showDetails", "showSelectAll"], [1, "col", "text-center", "mt-5"], ["class", "row", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary btn-sm text-center", 3, "click", 4, "ngIf"], [1, "showValidation"], [1, "row"], ["col-sm-6", "", "text-center", ""], ["type", "submit", 1, "btn", "btn-primary", "text-center", "btn-sm", "me-2", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-primary", "text-center", "btn-sm", "ms-2", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "text-center", 3, "click"]],
  template: function OffcanvasdetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hidden", function OffcanvasdetailsComponent_Template_div_hidden_0_listener() {
        return ctx.onHidden();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffcanvasdetailsComponent_Template_button_click_2_listener() {
        return ctx.closeOffCanvas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "form", 5)(7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "textarea", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cost (xxx.xx)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OffcanvasdetailsComponent_div_15_Template, 3, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-selectformtag", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-selectformtag", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OffcanvasdetailsComponent_div_21_Template, 6, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, OffcanvasdetailsComponent_button_22_Template, 2, 0, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.title, " Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reactiveForm.get("cost").valid && ctx.reactiveForm.get("cost").touched && ctx.reactiveForm.get("cost").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("allowEmptyTags", true)("items", ctx.data == null ? null : ctx.data.people)("showDetails", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("allowEmptyTags", true)("items", ctx.data == null ? null : ctx.data.people)("showDetails", false)("showSelectAll", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formDirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.formDirty && ctx.formValid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _selectformtag_selectformtag_component__WEBPACK_IMPORTED_MODULE_0__.SelectformtagComponent],
  styles: [".offcanvas-end[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(100%);\n  max-width: 80%;\n  top: 2%; \n  bottom: 2%;\n}\n\n.offcanvas.show[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.showValidation[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.offcanvas-backdrop[_ngcontent-%COMP%] {\n  opacity: 0.5; \n  background-color: black; \n}\n\n.offcanvas[_ngcontent-%COMP%] {\n  border-color: rgb(21, 22, 22);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vb2ZmY2FudmFzZGV0YWlscy9vZmZjYW52YXNkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUEsRUFBQSx5REFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTtFQUNFLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBLEVBQUEsNEJBQUE7RUFDQSx1QkFBQSxFQUFBLHVDQUFBO0FBQ0o7O0FBQ0U7RUFDRSw2QkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZmNhbnZhcy1lbmQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIHRvcDogMiU7IC8qIEFkZCB0aGlzIHRvIHZlcnRpY2FsbHkgYWxpZ24gdGhlIG9mZmNhbnZhcyB0byBjZW50ZXIgKi9cclxuICAgIGJvdHRvbTogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vZmZjYW52YXMuc2hvdyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG5cclxuICAuc2hvd1ZhbGlkYXRpb24ge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5vZmZjYW52YXMtYmFja2Ryb3Age1xyXG4gICAgb3BhY2l0eTogMC41OyAvKiBzZXRzIHRoZSBvcGFjaXR5IHRvIDUwJSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IC8qIHNldHMgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmxhY2sgKi9cclxuICB9XHJcbiAgLm9mZmNhbnZhcyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMSwgMjIsIDIyKTtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 507:
/*!****************************************************************************!*\
  !*** ./src/app/components/common/selectformtag/selectformtag.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectformtagComponent": () => (/* binding */ SelectformtagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








const _c0 = ["checkInput"];
function SelectformtagComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectformtagComponent_div_6_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onSelectAllChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SelectformtagComponent_option_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngValue", function SelectformtagComponent_option_10_Template_option_ngValue_0_listener() {
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
function SelectformtagComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 15)(2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectformtagComponent_div_11_div_1_Template_span_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const tag_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.openDetails(tag_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectformtagComponent_div_11_div_1_Template_span_click_5_listener() {
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
function SelectformtagComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectformtagComponent_div_11_div_1_Template, 7, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.tags);
  }
}
function SelectformtagComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 15)(2, "div", 16)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function SelectformtagComponent_div_12_div_1_Template_span_dblclick_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const tag_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.removeTag(tag_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectformtagComponent_div_12_div_1_Template_span_click_5_listener() {
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
function SelectformtagComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectformtagComponent_div_12_div_1_Template, 7, 1, "div", 14);
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
      this.tags = [...this.tags, this.value];
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
    allowEmptyTags: "allowEmptyTags"
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
  decls: 13,
  vars: 8,
  consts: [["role", "button", "aria-controls", "toggleLabelLink", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "mt-2", "mb-2", 3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], ["class", "form-control form-check form-switch", 4, "ngIf"], ["aria-label", ".form-select example", 1, "form-control", "form-select", 3, "ngModel", "ngModelChange", "change"], ["value", "-1"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "itag-container", 4, "ngIf"], [1, "form-control", "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input", 3, "change"], ["checkInput", ""], ["for", "flexSwitchCheckDefault", 1, "form-check-label"], [3, "ngValue"], [1, "itag-container"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col"], [1, "itag-tag", 3, "click"], [1, "close", 3, "click"], [1, "itag-tag", 3, "dblclick"]],
  template: function SelectformtagComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectformtagComponent_Template_div_click_1_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function SelectformtagComponent_Template_div_ngbCollapseChange_4_listener($event) {
        return ctx.isCollapsed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectformtagComponent_div_6_Template, 5, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectformtagComponent_Template_select_ngModelChange_7_listener($event) {
        return ctx.value = $event;
      })("change", function SelectformtagComponent_Template_select_change_7_listener($event) {
        return ctx.onOptionsSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Choose");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SelectformtagComponent_option_10_Template, 2, 1, "option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SelectformtagComponent_div_11_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SelectformtagComponent_div_12_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toggleLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
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
  styles: [".itag-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.itag-tag[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 6px;\n  border: 1px solid rgb(190, 185, 185);\n  border-radius: 5px;\n  line-height: 50px;\n  cursor: pointer;\n  word-break: break-all;\n  color: blue;\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: 0.55rem;\n  color: rgb(80, 78, 78);\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc2VsZWN0Zm9ybXRhZy9zZWxlY3Rmb3JtdGFnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUtBLFdBQUE7QUFISjtBQURJO0VBQ1Esb0JBQUE7RUFDSixzQkFBQTtBQUdSO0FBQUk7RUFDSSxpQkFBQTtBQUVSO0FBRFE7RUFDQSxVQUFBO0FBR1IiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRhZy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gfVxyXG4gIFxyXG4uaXRhZy10YWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzo2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLCAxODUsIDE4NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDo1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41NXJlbTtcclxuICAgICAgICBjb2xvcjogcmdiKDgwLCA3OCwgNzgpO1xyXG4gICAgICAgIH1cclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7275:
/*!************************************************************************!*\
  !*** ./src/app/components/common/textformtag/textformtag.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextformtagComponent": () => (/* binding */ TextformtagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);









function TextformtagComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "div", 7)(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TextformtagComponent_div_8_Template_span_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const tag_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.openDetails(tag_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TextformtagComponent_div_8_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const tag_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.removeTag(tag_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r2);
  }
}
class TextformtagComponent {
  constructor() {
    this.allowEmptyTags = false;
    this.onTagClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isCollapsed = true;
    this.userInput = '';
    this.tags = [];
    this.touched = false;
    this.disabled = false;
    this.onChange = tags => {};
    this.onTouched = () => {};
  }
  ngOnInit() {}
  addtoTags() {
    this.markAsTouched();
    if (this.userInput.length > 0 && this.tags?.indexOf(this.userInput) < 0) {
      let formatedInput = this.userInput.replace(/\w+/g, lodash__WEBPACK_IMPORTED_MODULE_0__.startCase);
      this.tags = [...this.tags, formatedInput];
      this.onChange(this.tags);
      this.userInput = "";
    }
    this.isCollapsed = true;
  }
  removeTag(value) {
    this.markAsTouched();
    this.tags = this.tags?.filter(s => s != value);
    this.onChange(this.tags);
  }
  openDetails(tag) {
    this.onTagClick.emit(tag);
  }
  writeValue(inputTags) {
    this.tags = inputTags;
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
TextformtagComponent.ɵfac = function TextformtagComponent_Factory(t) {
  return new (t || TextformtagComponent)();
};
TextformtagComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TextformtagComponent,
  selectors: [["app-textformtag"]],
  inputs: {
    toggleLabel: "toggleLabel",
    placeholderText: "placeholderText",
    allowEmptyTags: "allowEmptyTags"
  },
  outputs: {
    onTagClick: "onTagClick"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => TextformtagComponent)
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
    multi: true,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => TextformtagComponent)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 9,
  vars: 6,
  consts: [["role", "button", "aria-controls", "toggleLabelLink", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "mt-2", "mb-2", 3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], ["type", "text", "id", "nameInput", 1, "form-control", "itag-input", 3, "placeholder", "ngModel", "ngModelChange", "keydown.enter", "focusout"], [1, "itag-container"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col"], [1, "itag-tag", 3, "click"], [1, "close", 3, "click"]],
  template: function TextformtagComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TextformtagComponent_Template_div_click_1_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngbCollapseChange", function TextformtagComponent_Template_div_ngbCollapseChange_4_listener($event) {
        return ctx.isCollapsed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TextformtagComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.userInput = $event;
      })("keydown.enter", function TextformtagComponent_Template_input_keydown_enter_6_listener() {
        return ctx.addtoTags();
      })("focusout", function TextformtagComponent_Template_input_focusout_6_listener() {
        return ctx.addtoTags();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TextformtagComponent_div_8_Template, 7, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.toggleLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholderText);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapse],
  styles: [".itag-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.itag-tag[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 6px;\n  border: 1px solid rgb(190, 185, 185);\n  border-radius: 5px;\n  line-height: 50px;\n  cursor: pointer;\n  word-break: break-all;\n  color: blue;\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: 0.55rem;\n  color: rgb(80, 78, 78);\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.itag-tag[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vdGV4dGZvcm10YWcvdGV4dGZvcm10YWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBS0EsV0FBQTtBQUhGO0FBREU7RUFDQSxvQkFBQTtFQUNFLHNCQUFBO0FBR0o7QUFBRTtFQUNFLGlCQUFBO0FBRUo7QUFESTtFQUNFLFVBQUE7QUFHTiIsInNvdXJjZXNDb250ZW50IjpbIi5pdGFnLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6d3JhcDtcclxufVxyXG5cclxuLml0YWctdGFnIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzo2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MCwgMTg1LCAxODUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBsaW5lLWhlaWdodDo1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgLmNsb3NlIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAuNTVyZW07XHJcbiAgICBjb2xvcjogcmdiKDgwLCA3OCwgNzgpO1xyXG5cdH1cclxuICBjb2xvcjogYmx1ZTtcclxuICAuY2xvc2Uge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5987:
/*!************************************************************!*\
  !*** ./src/app/components/common/toast/toast.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  styles: [".toaster[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vdG9hc3Rlci90b2FzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyIudG9hc3RlciB7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1749:
/*!*********************************************!*\
  !*** ./src/app/components/componentBase.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 6248:
/*!***************************************************!*\
  !*** ./src/app/components/flow/flow.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Capture where, when and with whom planning to travel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Capture visiting places, transport, activities to do, food and stay");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3)(14, "div", 7)(15, "div", 5)(16, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Prepare");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 6)(19, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Track your bookings for leave, transport, stay, activities");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Track your bag items using checklist");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Track your preparation status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3)(26, "div", 8)(27, "div", 5)(28, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Travel On");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 6)(31, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "During travel, track your expenses against transport, food, shopping etc.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add interesting notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Shared expenses are tracked with report");
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTripComponent": () => (/* binding */ NewTripComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _common_inputformtag_inputformtag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/inputformtag/inputformtag.component */ 6403);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentBase */ 1749);
/* harmony import */ var src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/trip.action */ 8859);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);














const _c0 = ["dpTravel"];
function NewTripComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Please add places");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function NewTripComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function NewTripComponent_ng_template_13_Template_span_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const date_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.hoveredDate = date_r9);
    })("mouseleave", function NewTripComponent_ng_template_13_Template_span_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.hoveredDate = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r9 = ctx.$implicit;
    const focused_r10 = ctx.focused;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disable", ctx_r3.isDisabled(date_r9))("focused", focused_r10)("range", ctx_r3.isRange(date_r9))("faded", ctx_r3.isHovered(date_r9) || ctx_r3.isInside(date_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", date_r9.day, " ");
  }
}
function NewTripComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Please add people");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function NewTripComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewTripComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.saveTrip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NewTripComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewTripComponent_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.cancelChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NewTripComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewTripComponent_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.createTrip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r7.formValid);
  }
}
function NewTripComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewTripComponent_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.onNext());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("Next >");
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
  constructor(store, authService, fb, calendar, parserFormatter, toastService) {
    super(store, authService);
    this.fb = fb;
    this.calendar = calendar;
    this.parserFormatter = parserFormatter;
    this.toastService = toastService;
    this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.formValid = false;
    this.formDirty = false;
    // Datepicker
    this.hoveredDate = null;
    this.current = new Date();
    this.minDate = {
      year: this.current.getFullYear(),
      month: this.current.getMonth() + 1,
      day: this.current.getDate()
    };
    this.isDisabled = date => {
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
      this.reactiveForm = this.fb.group({
        places: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(places, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        people: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(people, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(startAt.getFullYear(), startAt.getMonth() + 1, startAt.getDate()), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(endAt.getFullYear(), endAt.getMonth() + 1, endAt.getDate()), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
      });
    } else {
      this.reactiveForm = this.fb.group({
        places: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl([], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        people: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl([], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.calendar.getToday(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.calendar.getNext(this.calendar.getToday(), 'd', 5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
      });
    }
    this.formSubscription = this.reactiveForm.valueChanges.subscribe(data => {
      this.setFormState();
    });
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
    } else if (this.reactiveForm.value.fromDate && !this.reactiveForm.value.toDate && date.after(this.reactiveForm.value.fromDate)) {
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
          start_at: this.parserFormatter.format(fromDate),
          end_at: this.parserFormatter.format(toDate),
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
        start_at: this.parserFormatter.format(fromDate),
        end_at: this.parserFormatter.format(toDate),
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
        this.toastService.showWarningToast("New trip created.", "Please continue capture other information in the Inprogress tab.");
        this.reactiveForm.markAsPristine();
        this.setFormState();
      } else {
        this.toastService.showWarningToast("Failed to Save", "Something went Wrong. Please report using feedback feature.");
        console.log(this.error$);
      }
    }
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
      fromDate: new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(startAt.getFullYear(), startAt.getMonth() + 1, startAt.getDate()),
      toDate: new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(endAt.getFullYear(), endAt.getMonth() + 1, endAt.getDate())
    });
  }
  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }
}
NewTripComponent.ɵfac = function NewTripComponent_Factory(t) {
  return new (t || NewTripComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDateParserFormatter), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService));
};
NewTripComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: NewTripComponent,
  selectors: [["app-new-trip"]],
  viewQuery: function NewTripComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.datepicker = _t.first);
    }
  },
  inputs: {
    trip: "trip"
  },
  outputs: {
    onNavigate: "onNavigate"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 26,
  vars: 15,
  consts: [[1, "container"], [1, "form-group", "pt-3", 3, "formGroup"], [1, "mb-3"], ["for", "placesInput", 1, "form-label"], ["id", "placesInput", "placeholderText", "Ex: Queenstown", "formControlName", "places"], ["class", "showValidation", 4, "ngIf"], ["for", "travelDatesInput", 1, "form-label"], ["id", "dpTravel", "outsideDays", "hidden", 1, "ngb-dp", 3, "displayMonths", "dayTemplate", "minDate", "markDisabled", "dateSelect"], ["dpTravel", ""], ["t", ""], ["for", "peopleInput", 1, "form-label"], ["id", "peopleInput", "placeholderText", "Ex: John or John's family", "formControlName", "people"], [1, "row", "mt-5"], [1, "col-sm", "text-center"], ["type", "button", "class", "btn btn-primary btn-sm me-3", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-sm ms-3", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "showValidation"], [1, "custom-day", 3, "mouseenter", "mouseleave"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "ms-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"]],
  template: function NewTripComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Travel places");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-inputformtag", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, NewTripComponent_div_6_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2)(8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Travel Start - End Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ngb-datepicker", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateSelect", function NewTripComponent_Template_ngb_datepicker_dateSelect_11_listener($event) {
        return ctx.onDateSelection($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, NewTripComponent_ng_template_13_Template, 2, 9, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 2)(16, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "People");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-inputformtag", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, NewTripComponent_div_19_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12)(21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, NewTripComponent_button_22_Template, 2, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, NewTripComponent_button_23_Template, 2, 0, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, NewTripComponent_button_24_Template, 2, 1, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, NewTripComponent_button_25_Template, 2, 1, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.reactiveForm.get("places").valid && ctx.reactiveForm.get("places").touched && ctx.reactiveForm.get("places").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayMonths", 1)("dayTemplate", _r2)("minDate", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](11, _c1, ctx.minDate.year, ctx.minDate.month, ctx.minDate.day))("markDisabled", ctx.isDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.reactiveForm.get("people").valid && ctx.reactiveForm.get("people").touched && ctx.reactiveForm.get("people").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.trip !== undefined && ctx.formValid && ctx.formDirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.trip !== undefined && ctx.formValid && ctx.formDirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.trip === undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.trip !== undefined && !ctx.formDirty);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDatepickerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDatepicker, _common_inputformtag_inputformtag_component__WEBPACK_IMPORTED_MODULE_0__.InputformtagComponent],
  styles: ["label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\napp-inputformtag.ng-invalid.ng-touched.ng-dirty[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border: red 1px solid;\n}\n\n.showValidation[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%]   .disable[_ngcontent-%COMP%] {\n  background-color: rgba(229, 233, 236, 0.5);\n  text-decoration: line-through;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.range[_ngcontent-%COMP%], .ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.disable[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  pointer-events: none;\n  text-decoration: line-through;\n  background-color: rgb(233, 233, 233);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uZXctdHJpcC9uZXctdHJpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0UsMENBQUE7RUFDQSw2QkFBQTtBQUNOO0FBRUU7RUFDRSx5QkFBQTtBQUFKO0FBRUU7O0VBRUUsa0NBQUE7RUFDQSxZQUFBO0FBQUo7QUFFRTtFQUNFLHdDQUFBO0FBQUo7QUFFRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5hcHAtaW5wdXRmb3JtdGFnLm5nLWludmFsaWQubmctdG91Y2hlZC5uZy1kaXJ0eSA+IGRpdiA+IGlucHV0IHtcclxuICAgIGJvcmRlcjogcmVkIDFweCBzb2xpZDtcclxufVxyXG5cclxuLnNob3dWYWxpZGF0aW9uIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubmdiLWRwIHtcclxuICAuY3VzdG9tLWRheSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICAuZGlzYWJsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMzMsIDIzNiwgMC41KTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkucmFuZ2UsXHJcbiAgLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkuZGlzYWJsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 661:
/*!*******************************************************************!*\
  !*** ./src/app/components/offcanvasbag/offcanvasbag.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13)(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffcanvasbagComponent_div_9_Template_button_click_7_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffcanvasbagComponent_ng_container_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 19);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 20);
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
  consts: [["tabindex", "-1", "id", "myOffcanvas", "aria-labelledby", "offcanvasLabel", 1, "offcanvas", "offcanvas-end", 3, "ngClass", "hidden"], [1, "offcanvas-header"], [1, "offcanvas-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "text-reset", 3, "click"], [1, "offcanvas-body"], ["type", "text", "placeholder", "Ex: Mobile Charger", "id", "bagitemInput", 1, "form-control", "itag-input", "mb-3", 3, "ngModel", "ngModelChange", "keydown.enter", "focusout"], [1, "container"], [1, "content"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-center", "mt-3"], [1, "col", "text-center"], [4, "ngIf"], [1, "row", "mb-2"], [1, "col"], [1, "form-check", "form-switch"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "change"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "ms-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "text-center", 3, "click"]],
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
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: auto;\n  overflow-x: hidden;\n}\n\n.offcanvas-end[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(100%);\n  max-width: 80%;\n  top: 2%; \n  bottom: 2%;\n}\n\n.offcanvas.show[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.showValidation[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.offcanvas-backdrop[_ngcontent-%COMP%] {\n  opacity: 0.5; \n  background-color: black; \n}\n\n.offcanvas[_ngcontent-%COMP%] {\n  border-color: rgb(21, 22, 22);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vZmZjYW52YXNiYWcvb2ZmY2FudmFzYmFnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUEsRUFBQSx5REFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHRTtFQUNFLHdCQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBLEVBQUEsNEJBQUE7RUFDQSx1QkFBQSxFQUFBLHVDQUFBO0FBQUo7O0FBRUU7RUFDRSw2QkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy9oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7IC8qIHN1YnRyYWN0IGZvb3RlciBoZWlnaHQgKi9cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4ub2ZmY2FudmFzLWVuZCB7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgdG9wOiAyJTsgLyogQWRkIHRoaXMgdG8gdmVydGljYWxseSBhbGlnbiB0aGUgb2ZmY2FudmFzIHRvIGNlbnRlciAqL1xyXG4gICAgYm90dG9tOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLm9mZmNhbnZhcy5zaG93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcblxyXG4gIC5zaG93VmFsaWRhdGlvbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgLm9mZmNhbnZhcy1iYWNrZHJvcCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7IC8qIHNldHMgdGhlIG9wYWNpdHkgdG8gNTAlICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgLyogc2V0cyB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBibGFjayAqL1xyXG4gIH1cclxuICAub2ZmY2FudmFzIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxLCAyMiwgMjIpO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6786:
/*!*****************************************************!*\
  !*** ./src/app/components/place/place.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceComponent": () => (/* binding */ PlaceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var src_app_models_transports_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/transports.const */ 7625);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentBase */ 1749);
/* harmony import */ var src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/trip.action */ 8859);
/* harmony import */ var _common_selectformtag_selectformtag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/selectformtag/selectformtag.component */ 507);
/* harmony import */ var _common_offcanvasdetails_offcanvasdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/offcanvasdetails/offcanvasdetails.component */ 1523);
/* harmony import */ var _common_textformtag_textformtag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/textformtag/textformtag.component */ 7275);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);















function PlaceComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function PlaceComponent_ng_template_9_Template_span_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const date_r8 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.hoveredDate = date_r8);
    })("mouseleave", function PlaceComponent_ng_template_9_Template_span_mouseleave_0_listener() {
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
function PlaceComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_19_Template_button_click_1_listener() {
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
function PlaceComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_20_Template_button_click_1_listener() {
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
function PlaceComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_21_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.saveTrip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_21_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.cancelChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function PlaceComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.saveTrip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_22_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.cancelChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function PlaceComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlaceComponent_ng_container_23_Template_button_click_1_listener() {
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
class PlaceComponent extends _componentBase__WEBPACK_IMPORTED_MODULE_1__.componentBase {
  constructor(fb, calendar, store, parserFormatter) {
    super(store);
    this.fb = fb;
    this.parserFormatter = parserFormatter;
    this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.formValid = false;
    this.formDirty = false;
    this.nextSlideExists = false;
    this.offCanvasData = {};
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
    this.transportOptions = src_app_models_transports_const__WEBPACK_IMPORTED_MODULE_0__.TransportOptions;
  }
  ngOnInit() {
    if (this.trip) {
      this.setupReactiveForm();
    }
    this.fromDateSubscription = this.reactiveForm.get('fromDate').valueChanges.subscribe(changes => {
      this.currentPlace = {
        ...this.currentPlace,
        start_at: this.parserFormatter.format(changes)
      };
      this.setFormState();
    });
    this.toDateSubscription = this.reactiveForm.get('toDate').valueChanges.subscribe(changes => {
      this.currentPlace = {
        ...this.currentPlace,
        end_at: this.parserFormatter.format(changes)
      };
      this.setFormState();
    });
    this.transportsSubscription = this.reactiveForm.get('transports').valueChanges.subscribe(changes => {
      const newitems = changes.filter(value => !this.currentPlace.transports?.find(obj => obj.name === value)) ?? [];
      const newTransports = newitems.map(s => {
        return {
          name: s
        };
      });
      const removeItems = this.currentPlace.transports?.filter(obj => changes.includes(obj.name)) ?? [];
      this.currentPlace = {
        ...this.currentPlace,
        transports: removeItems.concat(newTransports)
      };
      this.setFormState();
    });
    this.staysSubscription = this.reactiveForm.get('stays').valueChanges.subscribe(changes => {
      const newitems = changes.filter(value => !this.currentPlace.stays?.find(obj => obj.name === value)) ?? [];
      const newStays = newitems.map(s => {
        return {
          name: s
        };
      });
      const removeItems = this.currentPlace.stays?.filter(obj => changes.includes(obj.name)) ?? [];
      this.currentPlace = {
        ...this.currentPlace,
        stays: removeItems.concat(newStays)
      };
      this.setFormState();
    });
    this.activitiesSubscription = this.reactiveForm.get('activities').valueChanges.subscribe(changes => {
      const newitems = changes.filter(value => !this.currentPlace.activities?.find(obj => obj.name === value)) ?? [];
      const newActivities = newitems.map(s => {
        return {
          name: s
        };
      });
      const removeItems = this.currentPlace.activities?.filter(obj => changes.includes(obj.name)) ?? [];
      this.currentPlace = {
        ...this.currentPlace,
        activities: removeItems.concat(newActivities)
      };
      this.setFormState();
    });
  }
  setupReactiveForm(isReset = false) {
    this.currentPlace = this.trip.places[this.slideIndex];
    this.nextSlideExists = !!this.trip.places[this.slideIndex + 1];
    let tripStartAt = new Date(this.trip.start_at);
    let tripEndAt = new Date(this.trip.end_at);
    this.minDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(tripStartAt.getFullYear(), tripStartAt.getMonth() + 1, tripStartAt.getDate());
    this.maxDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(tripEndAt.getFullYear(), tripEndAt.getMonth() + 1, tripEndAt.getDate());
    const {
      start_at,
      end_at
    } = this.currentPlace;
    let startAt = start_at ? new Date(start_at) : tripStartAt;
    let endAt = end_at ? new Date(end_at) : tripEndAt;
    let transports = this.currentPlace.transports?.map(obj => obj.name) ?? [];
    let stays = this.currentPlace.stays?.map(obj => obj.name) ?? [];
    let activities = this.currentPlace.activities?.map(obj => obj.name) ?? [];
    if (isReset) {
      this.reactiveForm.reset({
        fromDate: new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(startAt.getFullYear(), startAt.getMonth() + 1, startAt.getDate()),
        toDate: new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(endAt.getFullYear(), endAt.getMonth() + 1, endAt.getDate()),
        transports,
        stays,
        activities
      });
    } else {
      this.reactiveForm = this.fb.group({
        fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(startAt.getFullYear(), startAt.getMonth() + 1, startAt.getDate())),
        toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDate(endAt.getFullYear(), endAt.getMonth() + 1, endAt.getDate())),
        transports: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(transports),
        stays: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(stays),
        activities: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(activities)
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
  ngOnDestroy() {
    if (this.fromDateSubscription) {
      this.fromDateSubscription.unsubscribe();
    }
    if (this.toDateSubscription) {
      this.toDateSubscription.unsubscribe();
    }
    if (this.transportsSubscription) {
      this.transportsSubscription.unsubscribe();
    }
    if (this.staysSubscription) {
      this.staysSubscription.unsubscribe();
    }
    if (this.activitiesSubscription) {
      this.activitiesSubscription.unsubscribe();
    }
  }
  tagClicked(property, tagName) {
    let tagData = {};
    tagData.type = property;
    switch (property) {
      case 'transport':
        tagData.tag = this.currentPlace.transports.find(s => s.name === tagName);
        break;
      case 'stay':
        tagData.tag = this.currentPlace.stays.find(s => s.name === tagName);
        break;
      case 'activity':
        tagData.tag = this.currentPlace.activities.find(s => s.name === tagName);
        break;
    }
    tagData.people = this.trip.people.map(s => {
      return {
        text: s.name,
        value: s.name
      };
    });
    this.offCanvasData = tagData;
    this.offcanvasdetailsComponent.showOffCanvas();
  }
  saveTagData(changes) {
    switch (changes.type) {
      case 'transport':
        const indexTransport = this.currentPlace.transports.findIndex(s => s.name === changes.tag.name);
        const changedTransports = {
          ...this.currentPlace.transports[indexTransport],
          comments: changes.tag.comments,
          expense: changes.tag.expense
        };
        const updatedTransports = [...this.currentPlace.transports.slice(0, indexTransport), changedTransports, ...this.currentPlace.transports.slice(indexTransport + 1)];
        this.currentPlace = {
          ...this.currentPlace,
          transports: updatedTransports
        };
        this.reactiveForm.get('transports').markAsDirty();
        break;
      case 'stay':
        const indexStay = this.currentPlace.stays.findIndex(s => s.name === changes.tag.name);
        const changedStays = {
          ...this.currentPlace.stays[indexStay],
          comments: changes.tag.comments,
          expense: changes.tag.expense
        };
        const updatedStays = [...this.currentPlace.stays.slice(0, indexStay), changedStays, ...this.currentPlace.stays.slice(indexStay + 1)];
        this.currentPlace = {
          ...this.currentPlace,
          stays: updatedStays
        };
        this.reactiveForm.get('stays').markAsDirty();
        break;
      case 'activity':
        const indexActivity = this.currentPlace.activities.findIndex(s => s.name === changes.tag.name);
        const changedActivities = {
          ...this.currentPlace.activities[indexActivity],
          comments: changes.tag.comments,
          expense: changes.tag.expense
        };
        const updatedActivities = [...this.currentPlace.activities.slice(0, indexActivity), changedActivities, ...this.currentPlace.activities.slice(indexActivity + 1)];
        this.currentPlace = {
          ...this.currentPlace,
          activities: updatedActivities
        };
        this.reactiveForm.get('activities').markAsDirty();
        break;
    }
    this.setFormState();
  }
  onNext() {
    this.onNavigate.emit(true);
  }
  onPrevious() {
    this.onNavigate.emit(false);
  }
  saveTrip() {
    if (this.reactiveForm.valid) {
      if (this.reactiveForm.dirty) {
        const {
          fromDate,
          toDate
        } = this.reactiveForm.value;
        // const newTransports = this.currentPlace.transports ? [...this.currentPlace.transports?.filter((item) => transports.some((newItem) => newItem === item.name)), 
        //   ...transports.filter((newItem) => !this.currentPlace.transports?.some((item) => item.name === newItem))] :
        //   transports;
        let place = {
          name: this.currentPlace.name,
          start_at: this.parserFormatter.format(fromDate),
          end_at: this.parserFormatter.format(toDate),
          transports: this.currentPlace.transports ?? null,
          stays: this.currentPlace.stays ?? null,
          activities: this.currentPlace.activities ?? null
        };
        this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__.updatePlace({
          place: {
            ...place
          }
        }));
        this.reactiveForm.markAsPristine();
        this.setFormState();
      }
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
    } else if (this.reactiveForm.value.fromDate && !this.reactiveForm.value.toDate && date.after(this.reactiveForm.value.fromDate)) {
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
}
PlaceComponent.ɵfac = function PlaceComponent_Factory(t) {
  return new (t || PlaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDateParserFormatter));
};
PlaceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PlaceComponent,
  selectors: [["app-place"]],
  viewQuery: function PlaceComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDatepicker, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_common_offcanvasdetails_offcanvasdetails_component__WEBPACK_IMPORTED_MODULE_4__.OffcanvasdetailsComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.datePicker = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.offcanvasdetailsComponent = _t.first);
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
  decls: 24,
  vars: 21,
  consts: [[1, "container"], [3, "data", "onSave"], [1, "form-group", 3, "formGroup"], [1, "mb-3"], ["for", "placeDatesInput", 1, "form-label"], ["outsideDays", "hidden", 1, "ngb-dp", 3, "id", "displayMonths", "dayTemplate", "minDate", "markDisabled", "dateSelect"], ["dpPlace{{slideIndex}}", ""], ["t", ""], ["toggleLabel", "Add Transport", "formControlName", "transports", 3, "allowEmptyTags", "items", "onTagClick"], ["toggleLabel", "Add Stays", "placeholderText", "Ex: Airbnb at XXX", "formControlName", "stays", 3, "allowEmptyTags", "onTagClick"], ["toggleLabel", "Add Activities", "placeholderText", "Ex: Waitomo Caves on 11th Sunday", "formControlName", "activities", 3, "allowEmptyTags", "onTagClick"], [1, "row", "justify-content-center", "mt-3"], [1, "col", "text-center"], [4, "ngIf"], [1, "custom-day", 3, "mouseenter", "mouseleave"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "me-3", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "ms-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "ms-3", 3, "disabled", "click"]],
  template: function PlaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "app-offcanvasdetails", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSave", function PlaceComponent_Template_app_offcanvasdetails_onSave_1_listener($event) {
        return ctx.saveTagData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 2)(3, "div", 3)(4, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ngb-datepicker", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateSelect", function PlaceComponent_Template_ngb_datepicker_dateSelect_7_listener($event) {
        return ctx.onDateSelection($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PlaceComponent_ng_template_9_Template, 2, 9, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 3)(12, "app-selectformtag", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTagClick", function PlaceComponent_Template_app_selectformtag_onTagClick_12_listener($event) {
        return ctx.tagClicked("transport", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 3)(14, "app-textformtag", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTagClick", function PlaceComponent_Template_app_textformtag_onTagClick_14_listener($event) {
        return ctx.tagClicked("stay", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 3)(16, "app-textformtag", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTagClick", function PlaceComponent_Template_app_textformtag_onTagClick_16_listener($event) {
        return ctx.tagClicked("activity", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 11)(18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, PlaceComponent_ng_container_19_Template, 3, 2, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, PlaceComponent_ng_container_20_Template, 3, 2, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, PlaceComponent_ng_container_21_Template, 5, 0, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, PlaceComponent_ng_container_22_Template, 5, 0, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, PlaceComponent_ng_container_23_Template, 3, 2, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.offCanvasData);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Start & End Dates at ", ctx.currentPlace.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "dpPlace", ctx.slideIndex, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayMonths", 1)("dayTemplate", _r1)("minDate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](17, _c0, ctx.minDate.year, ctx.minDate.month, ctx.minDate.day))("markDisabled", ctx.isDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("allowEmptyTags", true)("items", ctx.transportOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("allowEmptyTags", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("allowEmptyTags", true);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDatepickerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDatepicker, _common_textformtag_textformtag_component__WEBPACK_IMPORTED_MODULE_5__.TextformtagComponent, _common_selectformtag_selectformtag_component__WEBPACK_IMPORTED_MODULE_3__.SelectformtagComponent, _common_offcanvasdetails_offcanvasdetails_component__WEBPACK_IMPORTED_MODULE_4__.OffcanvasdetailsComponent],
  styles: [".ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%]   .disable[_ngcontent-%COMP%] {\n  background-color: rgba(229, 233, 236, 0.5);\n  text-decoration: line-through;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.range[_ngcontent-%COMP%], .ngb-dp[_ngcontent-%COMP%]   .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n.ngb-dp[_ngcontent-%COMP%]   .custom-day.disable[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  pointer-events: none;\n  text-decoration: line-through;\n  background-color: rgb(233, 233, 233);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wbGFjZS9wbGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7QUFDSTtFQUNFLDBDQUFBO0VBQ0EsNkJBQUE7QUFDTjtBQUVFO0VBQ0UseUJBQUE7QUFBSjtBQUVFOztFQUVFLGtDQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUU7RUFDRSx3Q0FBQTtBQUFKO0FBRUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIubmdiLWRwIHtcclxuICAuY3VzdG9tLWRheSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICAuZGlzYWJsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMzMsIDIzNiwgMC41KTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkucmFuZ2UsXHJcbiAgLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkuZGlzYWJsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 729:
/*!***********************************************************!*\
  !*** ./src/app/components/planning/planning.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    if (tripChanges && tripChanges.previousValue && tripChanges.currentValue && tripChanges.previousValue.places !== tripChanges.currentValue.places) {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrepareComponent": () => (/* binding */ PrepareComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _offcanvasbag_offcanvasbag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../offcanvasbag/offcanvasbag.component */ 661);
/* harmony import */ var src_app_models_preparelist_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/preparelist.const */ 3986);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentBase */ 1749);
/* harmony import */ var src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/trip.action */ 8859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);








function PrepareComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "div", 8)(2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PrepareComponent_div_1_Template_input_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onCheckedChange(item_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", item_r2.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.name);
  }
}
function PrepareComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrepareComponent_ng_container_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrepareComponent_ng_container_4_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.cancelChanges());
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
    this.prepareList = src_app_models_preparelist_const__WEBPACK_IMPORTED_MODULE_1__.PrepareList;
  }
  openBagCheckList() {
    this.offcanvasbagComponent.toggleOffcanvas();
  }
  ngOnInit() {
    if (this.trip && this.trip.prepareCheck) {
      this.prepareList?.forEach(obj1 => {
        const obj2 = this.trip.prepareCheck.find(obj2 => obj2.name === obj1.name);
        if (obj2) {
          obj1.checked = obj2.checked ?? false;
        }
      });
    }
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
    this.prepareList = this.trip.prepareCheck ?? [];
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
  decls: 10,
  vars: 3,
  consts: [[1, "container"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-center", "mt-3"], [1, "col", "text-center"], [4, "ngIf"], [1, "mb-3"], ["role", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [3, "trip"], [1, "form-check", "form-switch"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "change"], ["for", "flexSwitchChecLeave", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "ms-3", 3, "click"]],
  template: function PrepareComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PrepareComponent_div_1_Template, 5, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PrepareComponent_ng_container_4_Template, 5, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrepareComponent_Template_div_click_6_listener() {
        return ctx.openBagCheckList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Bag Checklist");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-offcanvasbag", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.prepareList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isChanged);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("trip", ctx.trip);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _offcanvasbag_offcanvasbag_component__WEBPACK_IMPORTED_MODULE_0__.OffcanvasbagComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5053:
/*!*************************************************************!*\
  !*** ./src/app/components/trip-tabs/trip-tabs.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  consts: [[1, "container", "mt-3", "mb-3"], ["ngbNav", "", 1, "nav-tabs", "justify-content-center", "nav-justified", 3, "activeId"], ["nav", "ngbNav"], [1, "col-lg-4", "text-center", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [3, "isPast"]],
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripdetailComponent": () => (/* binding */ TripdetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _planning_planning_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../planning/planning.component */ 729);
/* harmony import */ var _prepare_prepare_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prepare/prepare.component */ 1821);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentBase */ 1749);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_store_trip_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/trip.selectors */ 1363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);











function TripdetailComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Your Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TripdetailComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-planning", 9);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("trip", ctx_r2.trip);
  }
}
function TripdetailComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Preparation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TripdetailComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-prepare", 9);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("trip", ctx_r4.trip);
  }
}
function TripdetailComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Travel On");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TripdetailComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
  }
}
function TripdetailComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Summary and Expense Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TripdetailComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
  }
}
class TripdetailComponent extends _componentBase__WEBPACK_IMPORTED_MODULE_2__.componentBase {
  constructor(store) {
    super(store);
    this.activePanel = 'plan-panel';
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(src_app_store_trip_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCurrentSelectedTrip), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(data => {
      if (data) {
        this.trip = data;
      }
    })).subscribe();
  }
  ngOnInit() {}
}
TripdetailComponent.ɵfac = function TripdetailComponent_Factory(t) {
  return new (t || TripdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
};
TripdetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TripdetailComponent,
  selectors: [["app-tripdetail"]],
  inputs: {
    activePanel: "activePanel"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 16,
  vars: 6,
  consts: [[1, "container"], [3, "activeIds", "destroyOnHide", "closeOthers"], ["acc", "ngbAccordion"], ["id", "plan-panel"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["id", "preparation-panel", 3, "disabled"], ["id", "travelon-panel", 3, "disabled"], ["id", "summary-panel", 3, "disabled"], [3, "trip"]],
  template: function TripdetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "ngb-accordion", 1, 2)(4, "ngb-panel", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TripdetailComponent_ng_template_5_Template, 2, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TripdetailComponent_ng_template_6_Template, 1, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ngb-panel", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TripdetailComponent_ng_template_8_Template, 2, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TripdetailComponent_ng_template_9_Template, 1, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ngb-panel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TripdetailComponent_ng_template_11_Template, 2, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, TripdetailComponent_ng_template_12_Template, 1, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ngb-panel", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, TripdetailComponent_ng_template_14_Template, 2, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, TripdetailComponent_ng_template_15_Template, 1, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeIds", ctx.activePanel)("destroyOnHide", false)("closeOthers", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.trip);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.trip);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.trip);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPanelContent, _planning_planning_component__WEBPACK_IMPORTED_MODULE_0__.PlanningComponent, _prepare_prepare_component__WEBPACK_IMPORTED_MODULE_1__.PrepareComponent],
  styles: [".collapsible[_ngcontent-%COMP%] {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n}\n\n.accordion[_ngcontent-%COMP%] {\n  --bs-accordion-bg: rgb(255, 253, 253);\n}\n\n.collapse[_ngcontent-%COMP%]:not(.show) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmlwZGV0YWlsL3RyaXBkZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UscUNBQUE7QUFFRjs7QUEyQkU7RUFDRSxhQUFBO0FBeEJKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxhcHNpYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5hY2NvcmRpb24ge1xyXG4gIC0tYnMtYWNjb3JkaW9uLWJnOiByZ2IoMjU1LCAyNTMsIDI1Myk7XHJcbn1cclxuXHJcbi8vIC8qIEFkZCBhIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGJ1dHRvbiBpZiBpdCBpcyBjbGlja2VkIG9uIChhZGQgdGhlIC5hY3RpdmUgY2xhc3Mgd2l0aCBKUyksIGFuZCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIGl0IChob3ZlcikgKi9cclxuLy8gLmFjdGl2ZSwgLmNvbGxhcHNpYmxlOmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBTdHlsZSB0aGUgY29sbGFwc2libGUgY29udGVudC4gTm90ZTogaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuLy8gLmNvbnRlbnQge1xyXG4vLyAgIHBhZGRpbmc6IDAgMThweDtcclxuLy8gICBkaXNwbGF5OiBub25lO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuLy8gfVxyXG5cclxuLy8gLmNvbGxhcHNpYmxlOmFmdGVyIHtcclxuLy8gICBjb250ZW50OiAnXFwwMjc5NSc7IC8qIFVuaWNvZGUgY2hhcmFjdGVyIGZvciBcInBsdXNcIiBzaWduICgrKSAqL1xyXG4vLyAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5hY3RpdmU6YWZ0ZXIge1xyXG4vLyAgIGNvbnRlbnQ6IFwiXFwyNzk2XCI7IC8qIFVuaWNvZGUgY2hhcmFjdGVyIGZvciBcIm1pbnVzXCIgc2lnbiAoLSkgKi9cclxuLy8gfVxyXG5cclxuLmNvbGxhcHNlIHtcclxuICAmOm5vdCguc2hvdykge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8738:
/*!***********************************************************!*\
  !*** ./src/app/components/triplist/triplist.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TriplistComponent": () => (/* binding */ TriplistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _tripdetail_tripdetail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tripdetail/tripdetail.component */ 8251);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_store_trip_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/trip.selectors */ 1363);
/* harmony import */ var src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/trip.action */ 8859);
/* harmony import */ var _componentBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentBase */ 1749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);










const _c0 = ["modelControl"];
function TriplistComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TriplistComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.error$);
  }
}
function TriplistComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TriplistComponent_button_7_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const trip_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.showTripDetails({
        tripId: trip_r5.id
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div")(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const trip_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.getPlacesHeading(trip_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 3, trip_r5.start_at, "fullDate"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 6, trip_r5.end_at, "fullDate"), ")");
  }
}
function TriplistComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TriplistComponent_ng_template_15_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const modal_r8 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r8.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-tripdetail");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 16)(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TriplistComponent_ng_template_15_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const modal_r8 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r8.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.title);
  }
}
class TriplistComponent extends _componentBase__WEBPACK_IMPORTED_MODULE_3__.componentBase {
  constructor(store, ngbModelconfig, modalService) {
    super(store);
    this.ngbModelconfig = ngbModelconfig;
    this.modalService = modalService;
    this.isPast = false;
    this.trips$ = store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(src_app_store_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTrips));
    ngbModelconfig.backdrop = 'static';
    ngbModelconfig.keyboard = false;
  }
  ngOnInit() {
    if (!this.isPast) {
      this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__.getTrips());
    } else {
      //this.store.dispatch(tripActions.getPastTrips());
      this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__.getTrips());
    }
  }
  getPlacesHeading(trip) {
    return trip.places.map(s => s.name);
  }
  showTripDetails($event) {
    this.title = $event?.tripId ? "Edit Trip" : "New Trip";
    if ($event?.tripId) {
      this.store.dispatch(src_app_store_trip_action__WEBPACK_IMPORTED_MODULE_2__.selectTrip({
        tripId: $event.tripId
      }));
    }
    this.modalService.open(this.modelControl, {
      scrollable: true,
      size: 'xl'
    }).result.then(result => {
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
  return new (t || TriplistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal));
};
TriplistComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TriplistComponent,
  selectors: [["app-triplist"]],
  viewQuery: function TriplistComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modelControl = _t.first);
    }
  },
  inputs: {
    isPast: "isPast"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 17,
  vars: 9,
  consts: [[1, "container"], [1, "pt-3"], ["class", "text-center", 4, "ngIf"], [4, "ngIf"], [1, "list-group", "list-group-light", "ms-1", "me-1"], ["type", "button", "class", "btn list-group-item list-group-item-action d-flex justify-content-between align-items-center px-3 border-2 rounded-2 mt-1 mb-3 list-group-item-primary", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "list-group-item", "list-group-item-action", "px-3", "text-center", "justify-content-between", "align-items-center", "border-2", "rounded-3", "mb-3", "list-group-item-success", 3, "click"], [1, "fw-bold"], ["modelControl", ""], [1, "text-center"], ["src", "assets/loading.gif", "alt", "Loading..."], ["type", "button", 1, "btn", "list-group-item", "list-group-item-action", "d-flex", "justify-content-between", "align-items-center", "px-3", "border-2", "rounded-2", "mt-1", "mb-3", "list-group-item-primary", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"]],
  template: function TriplistComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TriplistComponent_div_2_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TriplistComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TriplistComponent_button_7_Template, 8, 9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TriplistComponent_Template_button_click_9_listener() {
        return ctx.showTripDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div")(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "New Trip");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, TriplistComponent_ng_template_15_Template, 9, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, ctx.isLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, ctx.error$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 7, ctx.trips$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _tripdetail_tripdetail_component__WEBPACK_IMPORTED_MODULE_0__.TripdetailComponent],
  styles: [".accordion-button.collapsed[_ngcontent-%COMP%] {\n  background: rgb(243, 245, 247);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmlwbGlzdC90cmlwbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3JkaW9uLWJ1dHRvbi5jb2xsYXBzZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MywgMjQ1LCAyNDcpXHJcbn0gICJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 4024:
/*!*****************************************************!*\
  !*** ./src/app/components/trips/trips.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripsComponent": () => (/* binding */ TripsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _flow_flow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flow/flow.component */ 6248);
/* harmony import */ var _trip_tabs_trip_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trip-tabs/trip-tabs.component */ 5053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class TripsComponent {}
TripsComponent.ɵfac = function TripsComponent_Factory(t) {
  return new (t || TripsComponent)();
};
TripsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TripsComponent,
  selectors: [["app-trips"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 0,
  template: function TripsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-flow")(1, "app-trip-tabs");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _flow_flow_component__WEBPACK_IMPORTED_MODULE_0__.FlowComponent, _trip_tabs_trip_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TripTabsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5356:
/*!********************************************!*\
  !*** ./src/app/models/event-types.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
})(EventTypes || (EventTypes = {}));

/***/ }),

/***/ 3986:
/*!*********************************************!*\
  !*** ./src/app/models/preparelist.const.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 7625:
/*!********************************************!*\
  !*** ./src/app/models/transports.const.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportOptions": () => (/* binding */ TransportOptions)
/* harmony export */ });
const TransportOptions = [{
  text: "Own Car",
  value: "Own Car"
}, {
  text: "Hiring",
  value: "Hiring"
}, {
  text: "Cab/Public",
  value: "Cab/Public"
}, {
  text: "Flight",
  value: "Flight"
}, {
  text: "Ferry",
  value: "Ferry"
}, {
  text: "Walking",
  value: "Walking"
}];

/***/ }),

/***/ 8063:
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
              _this2.toastService.showSuccessToast("Email verification sent!", `Check out your Mailbox to verify the mail, If you did not find the email, check the junk folder, Spam.`);
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

/***/ 7675:
/*!**************************************************!*\
  !*** ./src/app/services/localstorage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    return this.firestore.collection('trips', ref => ref.where('userId', '==', this.authService.user.uid).orderBy('start_at')).valueChanges({
      idField: 'id'
    });
  }
  getPastTrips() {
    const today = new Date();
    const dateString = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return this.firestore.collection('trips', ref => ref.where('userId', '==', this.authService.user.uid).where('end_at', '<', dateString).orderBy('end_at', 'desc')).valueChanges({
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTripSelection": () => (/* binding */ clearTripSelection),
/* harmony export */   "getFailureResponse": () => (/* binding */ getFailureResponse),
/* harmony export */   "getPastTrips": () => (/* binding */ getPastTrips),
/* harmony export */   "getTrips": () => (/* binding */ getTrips),
/* harmony export */   "getTripsSuccessResponse": () => (/* binding */ getTripsSuccessResponse),
/* harmony export */   "newTrip": () => (/* binding */ newTrip),
/* harmony export */   "newTripSuccessResponse": () => (/* binding */ newTripSuccessResponse),
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

/***/ }),

/***/ 4339:
/*!***************************************!*\
  !*** ./src/app/store/trip.effects.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripsEffects": () => (/* binding */ TripsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 538);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _trip_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip.action */ 8859);
/* harmony import */ var _trip_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip.selectors */ 1363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/trip.service */ 7446);









class TripsEffects {
  constructor(actions$, tripService, store) {
    this.actions$ = actions$;
    this.tripService = tripService;
    this.store = store;
    this.getTrips$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getTrips), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTripsChanged)), this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTrips))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([action, tripsChanged, trips]) => {
      // If tripsChanged is True then only API call needed, else can return the current trips
      if (tripsChanged === true) {
        return this.tripService.getTrips().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getTripsSuccessResponse({
          trips: response,
          tripsChanged: false
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
          error: error.message
        }))));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getTripsSuccessResponse({
          trips,
          tripsChanged
        }));
      }
    })));
    this.getPastTrips$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getPastTrips), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTripsChanged)), this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTrips))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([action, tripsChanged, trips]) => {
      // If tripsChanged is True then only API call needed, else can return the current trips
      if (tripsChanged === true) {
        return this.tripService.getPastTrips().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getTripsSuccessResponse({
          trips: response,
          tripsChanged: false
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
          error: error.message
        }))));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getTripsSuccessResponse({
          trips,
          tripsChanged
        }));
      }
    })));
    this.newTrip$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.newTrip), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(payload => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.tripService.addNewTrip(payload.trip)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.newTripSuccessResponse({
      trip: payload.trip,
      id: response.id
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
      error: error.message
    })))))));
    this.updateTrip$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTrip), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentSelectedTrip))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([action, trip]) => this.tripService.updateTrip(trip).then(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTripSuccessResponse()).catch(error => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
      error: error.message
    })))));
    this.updatePlace$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updatePlace), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentSelectedTrip))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([action, trip]) => this.tripService.updatePlace(trip).then(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTripSuccessResponse()).catch(error => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
      error: error.message
    })))));
    this.updateBag$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updateBag), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentSelectedTrip))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([action, trip]) => this.tripService.updateBag(trip).then(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTripSuccessResponse()).catch(error => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
      error: error.message
    })))));
    this.updatePrepareCheck$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.updatePrepareList), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_trip_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentSelectedTrip))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([action, trip]) => this.tripService.updatePrepareCheck(trip).then(response => _trip_action__WEBPACK_IMPORTED_MODULE_0__.updateTripSuccessResponse()).catch(error => _trip_action__WEBPACK_IMPORTED_MODULE_0__.getFailureResponse({
      error: error.message
    })))));
  }
}
TripsEffects.ɵfac = function TripsEffects_Factory(t) {
  return new (t || TripsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_trip_service__WEBPACK_IMPORTED_MODULE_2__.TripService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
};
TripsEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
  token: TripsEffects,
  factory: TripsEffects.ɵfac
});

/***/ }),

/***/ 8009:
/*!***************************************!*\
  !*** ./src/app/store/trip.reducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  tripsChanged: true
};
const tripReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_trip_action__WEBPACK_IMPORTED_MODULE_0__.getTrips, state => {
  return {
    ...state,
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6344), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.711fd81ee6d098ce.js.map
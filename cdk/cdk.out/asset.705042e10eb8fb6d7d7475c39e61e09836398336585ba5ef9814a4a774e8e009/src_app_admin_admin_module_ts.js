"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([
  ["src_app_admin_admin_module_ts"],
  {
    /***/ 3176:
      /*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AdminRoutingModule: () =>
            /* binding */ AdminRoutingModule,
          /* harmony export */
        });
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/router */ 124);
        /* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./orders/orders.component */ 63);
        /* harmony import */ var _manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./manage-products/manage-products.component */ 8677
          );
        /* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./edit-product/edit-product.component */ 1171
          );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/core */ 2560);

        const routes = [
          {
            path: "orders",
            component:
              _orders_orders_component__WEBPACK_IMPORTED_MODULE_0__.OrdersComponent,
          },
          {
            path: "products",
            component:
              _manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_1__.ManageProductsComponent,
          },
          {
            path: "products/new",
            component:
              _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_2__.EditProductComponent,
          },
          {
            path: "products/:productId",
            component:
              _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_2__.EditProductComponent,
          },
        ];
        class AdminRoutingModule {}
        AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
          return new (t || AdminRoutingModule)();
        };
        AdminRoutingModule.ɵmod =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__[
            "ɵɵdefineNgModule"
          ]({
            type: AdminRoutingModule,
          });
        AdminRoutingModule.ɵinj =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__[
            "ɵɵdefineInjector"
          ]({
            imports: [
              _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(
                routes
              ),
              _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            ],
          });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](
              AdminRoutingModule,
              {
                imports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
                ],
                exports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
                ],
              }
            );
        })();

        /***/
      },

    /***/ 7095:
      /*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AdminModule: () => /* binding */ AdminModule,
          /* harmony export */
        });
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! @angular/common */ 4666);
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(/*! @angular/forms */ 2508);
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! @angular/material/card */ 2156);
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! @angular/material/input */ 8562);
        /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! @angular/material/progress-spinner */ 6511);
        /* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./admin-routing.module */ 3176);
        /* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./orders/orders.component */ 63);
        /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! @angular/material/table */ 5288);
        /* harmony import */ var _orders_orders_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./orders/orders.service */ 3259);
        /* harmony import */ var _manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./manage-products/manage-products.component */ 8677
          );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(/*! @angular/material/button */ 4522);
        /* harmony import */ var _shared_file_picker_file_picker_module__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../shared/file-picker/file-picker.module */ 2145
          );
        /* harmony import */ var _manage_products_manage_products_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./manage-products/manage-products.service */ 9310
          );
        /* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./edit-product/edit-product.component */ 1171
          );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! @angular/core */ 2560);

        class AdminModule {}
        AdminModule.ɵfac = function AdminModule_Factory(t) {
          return new (t || AdminModule)();
        };
        AdminModule.ɵmod =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__[
            "ɵɵdefineNgModule"
          ]({
            type: AdminModule,
          });
        AdminModule.ɵinj =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__[
            "ɵɵdefineInjector"
          ]({
            providers: [
              _orders_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService,
              _manage_products_manage_products_service__WEBPACK_IMPORTED_MODULE_5__.ManageProductsService,
            ],
            imports: [
              _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
              _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
              _shared_file_picker_file_picker_module__WEBPACK_IMPORTED_MODULE_4__.FilePickerModule,
              _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
              _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
              _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
              _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule,
              _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            ],
          });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](
              AdminModule,
              {
                declarations: [
                  _orders_orders_component__WEBPACK_IMPORTED_MODULE_1__.OrdersComponent,
                  _manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_3__.ManageProductsComponent,
                  _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__.EditProductComponent,
                ],
                imports: [
                  _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
                  _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
                  _shared_file_picker_file_picker_module__WEBPACK_IMPORTED_MODULE_4__.FilePickerModule,
                  _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
                  _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
                  _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
                  _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
                ],
              }
            );
        })();

        /***/
      },

    /***/ 1171:
      /*!**************************************************************!*\
  !*** ./src/app/admin/edit-product/edit-product.component.ts ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ EditProductComponent: () =>
            /* binding */ EditProductComponent,
          /* harmony export */
        });
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @angular/forms */ 2508);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! rxjs */ 6317);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! rxjs */ 228);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! rxjs/operators */ 2313);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! rxjs/operators */ 8951);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/core */ 2560);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! @angular/router */ 124);
        /* harmony import */ var _core_notification_service__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../../core/notification.service */ 7319);
        /* harmony import */ var _products_products_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../../products/products.service */ 9855);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! @angular/common */ 4666);
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! @angular/material/card */ 2156);
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! @angular/material/input */ 8562);
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(/*! @angular/material/form-field */ 5074);
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! @angular/material/button */ 4522);
        /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(/*! @angular/material/progress-spinner */ 6511);

        function EditProductComponent_mat_card_0_mat_error_10_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              0,
              "mat-error"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](
              1,
              " Product title is required "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        }
        function EditProductComponent_mat_card_0_mat_error_16_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              0,
              "mat-error"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](
              1,
              " Product description is required "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        }
        function EditProductComponent_mat_card_0_mat_error_22_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              0,
              "mat-error"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](
              1,
              " Product price is required "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        }
        function EditProductComponent_mat_card_0_mat_error_28_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              0,
              "mat-error"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](
              1,
              " Product count is required "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        }
        function EditProductComponent_mat_card_0_Template(rf, ctx) {
          if (rf & 1) {
            const _r8 =
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              0,
              "mat-card"
            )(1, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              3,
              "mat-card-content"
            )(4, "form", 3)(5, "div", 4)(
              6,
              "mat-form-field",
              5
            )(7, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](
              9,
              "input",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](
              10,
              EditProductComponent_mat_card_0_mat_error_10_Template,
              2,
              0,
              "mat-error",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              11,
              "div",
              4
            )(
              12,
              "mat-form-field",
              5
            )(13, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](
              14,
              "Description"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](
              15,
              "textarea",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](
              16,
              EditProductComponent_mat_card_0_mat_error_16_Template,
              2,
              0,
              "mat-error",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              17,
              "div",
              9
            )(
              18,
              "mat-form-field",
              5
            )(19, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](
              20,
              "Price ($)"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](
              21,
              "input",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](
              22,
              EditProductComponent_mat_card_0_mat_error_22_Template,
              2,
              0,
              "mat-error",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              23,
              "div",
              9
            )(
              24,
              "mat-form-field",
              5
            )(25, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Count");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](
              27,
              "input",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](
              28,
              EditProductComponent_mat_card_0_mat_error_28_Template,
              2,
              0,
              "mat-error",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              29,
              "mat-card-actions"
            )(30, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](
              31,
              " cancel "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              32,
              "button",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"](
              "click",
              function EditProductComponent_mat_card_0_Template_button_click_32_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](
                  _r8
                );
                const ctx_r7 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
                return _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                  "ɵɵresetView"
                ](ctx_r7.editProduct());
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](
              33,
              " save product "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            const ctx_r0 =
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](
              " ",
              ctx_r0.productId ? "Edit product" : "Create new product",
              " "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"](
              "formGroup",
              ctx_r0.form
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"](
              "ngIf",
              ctx_r0.titleCtrl.touched && ctx_r0.titleCtrl.hasError("required")
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"](
              "ngIf",
              ctx_r0.descriptionCtrl.touched &&
                ctx_r0.descriptionCtrl.hasError("required")
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"](
              "ngIf",
              ctx_r0.priceCtrl.touched && ctx_r0.priceCtrl.hasError("required")
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"](
              "ngIf",
              ctx_r0.countCtrl.touched && ctx_r0.countCtrl.hasError("required")
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"](
              "disabled",
              ctx_r0.form.invalid || ctx_r0.requestInProgress
            );
          }
        }
        function EditProductComponent_ng_template_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](
              0,
              "div",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](
              1,
              "mat-spinner",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"](
              "diameter",
              40
            );
          }
        }
        class EditProductComponent {
          constructor(
            activatedRoute,
            fb,
            notificationService,
            productsService,
            router
          ) {
            this.activatedRoute = activatedRoute;
            this.fb = fb;
            this.notificationService = notificationService;
            this.productsService = productsService;
            this.router = router;
            this.productId = null;
            this.requestInProgress = false;
            this.loaded$ =
              new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
            this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
            this.form = this.fb.group({
              title: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
              ],
              description: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
              ],
              price: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
              ],
              count: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
              ],
            });
          }
          get countCtrl() {
            return this.form.get("count");
          }
          get descriptionCtrl() {
            return this.form.get("description");
          }
          get priceCtrl() {
            return this.form.get("price");
          }
          get titleCtrl() {
            return this.form.get("title");
          }
          ngOnInit() {
            const productId =
              this.activatedRoute.snapshot.paramMap.get("productId");
            if (!productId) {
              this.loaded$.next(true);
              return;
            }
            this.productsService
              .getProductById(productId)
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() =>
                  this.loaded$.next(true)
                ),
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(
                  this.onDestroy$
                )
              )
              .subscribe((product) => {
                if (product) {
                  this.form.patchValue(product);
                  this.productId = product.id;
                }
              });
          }
          ngOnDestroy() {
            this.onDestroy$.next();
            this.onDestroy$.complete();
          }
          editProduct() {
            const product = this.form.value;
            if (!product) {
              return;
            }
            const editProduct$ = this.productId
              ? this.productsService.editProduct(this.productId, product)
              : this.productsService.createNewProduct(product);
            this.requestInProgress = true;
            editProduct$.subscribe(
              () =>
                this.router.navigate(["../"], {
                  relativeTo: this.activatedRoute,
                }),
              (error) => {
                console.warn(error);
                this.requestInProgress = false;
                this.notificationService.showError(
                  `Failed to ${this.productId ? "edit" : "create"} product`
                );
              }
            );
          }
        }
        EditProductComponent.ɵfac = function EditProductComponent_Factory(t) {
          return new (t || EditProductComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](
              _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](
              _core_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](
              _products_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
            )
          );
        };
        EditProductComponent.ɵcmp =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__[
            "ɵɵdefineComponent"
          ]({
            type: EditProductComponent,
            selectors: [["app-edit-product"]],
            decls: 4,
            vars: 4,
            consts: [
              [4, "ngIf", "ngIfElse"],
              ["loaderTemplate", ""],
              ["mat-card-title", "", 1, "text-center", "pt-4"],
              [1, "row", 3, "formGroup"],
              [1, "col-12"],
              [1, "w-100"],
              ["matInput", "", "formControlName", "title"],
              [4, "ngIf"],
              ["matInput", "", "formControlName", "description"],
              [1, "col", "col-md-6"],
              ["type", "number", "matInput", "", "formControlName", "price"],
              ["type", "number", "matInput", "", "formControlName", "count"],
              [
                "mat-flat-button",
                "",
                "routerLink",
                "..",
                1,
                "text-uppercase",
                "mr-2",
              ],
              [
                "color",
                "primary",
                "mat-flat-button",
                "",
                1,
                "text-uppercase",
                3,
                "disabled",
                "click",
              ],
              [1, "py-5"],
              [1, "mx-auto", 3, "diameter"],
            ],
            template: function EditProductComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](
                  0,
                  EditProductComponent_mat_card_0_Template,
                  34,
                  7,
                  "mat-card",
                  0
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](
                  1,
                  "async"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](
                  2,
                  EditProductComponent_ng_template_2_Template,
                  2,
                  1,
                  "ng-template",
                  null,
                  1,
                  _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                    "ɵɵtemplateRefExtractor"
                  ]
                );
              }
              if (rf & 2) {
                const _r1 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"](
                  "ngIf",
                  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](
                    1,
                    2,
                    ctx.loaded$
                  )
                )("ngIfElse", _r1);
              }
            },
            dependencies: [
              _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink,
              _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf,
              _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard,
              _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions,
              _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent,
              _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle,
              _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput,
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField,
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel,
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError,
              _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton,
              _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner,
              _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"],
              _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor,
              _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor,
              _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus,
              _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup,
              _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective,
              _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName,
              _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe,
            ],
            styles: [
              "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */",
            ],
            changeDetection: 0,
          });

        /***/
      },

    /***/ 8677:
      /*!********************************************************************!*\
  !*** ./src/app/admin/manage-products/manage-products.component.ts ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ManageProductsComponent: () =>
            /* binding */ ManageProductsComponent,
          /* harmony export */
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/core */ 2560);
        /* harmony import */ var _products_products_service__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../../products/products.service */ 9855);
        /* harmony import */ var _manage_products_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./manage-products.service */ 9310);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/router */ 124);
        /* harmony import */ var _shared_file_picker_file_picker_component__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../shared/file-picker/file-picker.component */ 17
          );
        /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @angular/material/table */ 5288);
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @angular/material/button */ 4522);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! @angular/common */ 4666);

        function ManageProductsComponent_th_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
              0,
              "th",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        }
        function ManageProductsComponent_td_9_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
              0,
              "td",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const product_r12 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](
              " ",
              product_r12.title,
              " "
            );
          }
        }
        function ManageProductsComponent_th_11_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
              0,
              "th",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](
              1,
              "Description"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        }
        function ManageProductsComponent_td_12_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
              0,
              "td",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const product_r13 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](
              product_r13.description
            );
          }
        }
        function ManageProductsComponent_th_14_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
              0,
              "th",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        }
        function ManageProductsComponent_td_15_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
              0,
              "td",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const product_r14 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](
              " ",
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](
                2,
                1,
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](
                  3,
                  3,
                  product_r14.price,
                  "1.2-2"
                )
              ),
              " "
            );
          }
        }
        function ManageProductsComponent_th_17_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
              0,
              "th",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Count");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        }
        function ManageProductsComponent_td_18_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
              0,
              "td",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const product_r15 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](
              product_r15.count
            );
          }
        }
        function ManageProductsComponent_th_20_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
              0,
              "th",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        }
        function ManageProductsComponent_td_21_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
              0,
              "td",
              14
            )(1, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " manage ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
              3,
              "button",
              16
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " delete ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            const product_r16 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"](
              "routerLink",
              product_r16.id
            );
          }
        }
        function ManageProductsComponent_tr_22_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](
              0,
              "tr",
              17
            );
          }
        }
        function ManageProductsComponent_tr_23_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](
              0,
              "tr",
              18
            );
          }
        }
        class ManageProductsComponent {
          constructor(productsService, manageProductsService, cdr) {
            this.productsService = productsService;
            this.manageProductsService = manageProductsService;
            this.cdr = cdr;
            this.columns = ["from", "description", "price", "count", "action"];
            this.selectedFile = null;
          }
          ngOnInit() {
            this.products$ = this.productsService.getProducts();
          }
          onUploadCSV() {
            if (!this.selectedFile) {
              return;
            }
            this.manageProductsService
              .uploadProductsCSV(this.selectedFile)
              .subscribe(() => {
                this.selectedFile = null;
                this.cdr.markForCheck();
              });
          }
        }
        ManageProductsComponent.ɵfac = function ManageProductsComponent_Factory(
          t
        ) {
          return new (t || ManageProductsComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](
              _products_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](
              _manage_products_service__WEBPACK_IMPORTED_MODULE_1__.ManageProductsService
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
            )
          );
        };
        ManageProductsComponent.ɵcmp =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__[
            "ɵɵdefineComponent"
          ]({
            type: ManageProductsComponent,
            selectors: [["app-manage-products"]],
            decls: 24,
            vars: 4,
            consts: [
              [1, "d-flex"],
              [1, "mr-2", 3, "file", "fileChange", "uploadClick"],
              [
                "color",
                "primary",
                "mat-flat-button",
                "",
                "routerLink",
                "new",
                1,
                "text-uppercase",
              ],
              ["mat-table", "", 1, "w-100", 3, "dataSource"],
              ["matColumnDef", "from"],
              ["mat-header-cell", "", 4, "matHeaderCellDef"],
              ["mat-cell", "", 4, "matCellDef"],
              ["matColumnDef", "description"],
              ["matColumnDef", "price"],
              ["matColumnDef", "count"],
              ["matColumnDef", "action"],
              ["mat-header-row", "", 4, "matHeaderRowDef"],
              ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
              ["mat-header-cell", ""],
              ["mat-cell", ""],
              [
                "color",
                "primary",
                "mat-flat-button",
                "",
                1,
                "text-uppercase",
                "mr-2",
                3,
                "routerLink",
              ],
              ["color", "warn", "mat-flat-button", "", 1, "text-uppercase"],
              ["mat-header-row", ""],
              ["mat-row", ""],
            ],
            template: function ManageProductsComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
                  0,
                  "h1"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](
                  1,
                  "Manage products"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
                  2,
                  "div",
                  0
                )(3, "app-file-picker", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"](
                  "fileChange",
                  function ManageProductsComponent_Template_app_file_picker_fileChange_3_listener(
                    $event
                  ) {
                    return (ctx.selectedFile = $event);
                  }
                )(
                  "uploadClick",
                  function ManageProductsComponent_Template_app_file_picker_uploadClick_3_listener() {
                    return ctx.onUploadCSV();
                  }
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
                  4,
                  "button",
                  2
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](
                  5,
                  " create product "
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](
                  6,
                  "table",
                  3
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[
                  "ɵɵelementContainerStart"
                ](7, 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  8,
                  ManageProductsComponent_th_8_Template,
                  2,
                  0,
                  "th",
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  9,
                  ManageProductsComponent_td_9_Template,
                  2,
                  1,
                  "td",
                  6
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[
                  "ɵɵelementContainerEnd"
                ]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[
                  "ɵɵelementContainerStart"
                ](10, 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  11,
                  ManageProductsComponent_th_11_Template,
                  2,
                  0,
                  "th",
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  12,
                  ManageProductsComponent_td_12_Template,
                  2,
                  1,
                  "td",
                  6
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[
                  "ɵɵelementContainerEnd"
                ]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[
                  "ɵɵelementContainerStart"
                ](13, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  14,
                  ManageProductsComponent_th_14_Template,
                  2,
                  0,
                  "th",
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  15,
                  ManageProductsComponent_td_15_Template,
                  4,
                  6,
                  "td",
                  6
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[
                  "ɵɵelementContainerEnd"
                ]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[
                  "ɵɵelementContainerStart"
                ](16, 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  17,
                  ManageProductsComponent_th_17_Template,
                  2,
                  0,
                  "th",
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  18,
                  ManageProductsComponent_td_18_Template,
                  2,
                  1,
                  "td",
                  6
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[
                  "ɵɵelementContainerEnd"
                ]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[
                  "ɵɵelementContainerStart"
                ](19, 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  20,
                  ManageProductsComponent_th_20_Template,
                  2,
                  0,
                  "th",
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  21,
                  ManageProductsComponent_td_21_Template,
                  5,
                  1,
                  "td",
                  6
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[
                  "ɵɵelementContainerEnd"
                ]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  22,
                  ManageProductsComponent_tr_22_Template,
                  1,
                  0,
                  "tr",
                  11
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](
                  23,
                  ManageProductsComponent_tr_23_Template,
                  1,
                  0,
                  "tr",
                  12
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
              }
              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"](
                  "file",
                  ctx.selectedFile
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"](
                  "dataSource",
                  ctx.products$
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"](
                  "matHeaderRowDef",
                  ctx.columns
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"](
                  "matRowDefColumns",
                  ctx.columns
                );
              }
            },
            dependencies: [
              _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink,
              _shared_file_picker_file_picker_component__WEBPACK_IMPORTED_MODULE_2__.FilePickerComponent,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow,
              _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton,
              _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe,
              _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe,
            ],
            styles: [
              "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */",
            ],
          });

        /***/
      },

    /***/ 9310:
      /*!******************************************************************!*\
  !*** ./src/app/admin/manage-products/manage-products.service.ts ***!
  \******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ManageProductsService: () =>
            /* binding */ ManageProductsService,
          /* harmony export */
        });
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! rxjs */ 591);
        /* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../../core/api.service */ 9274);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! rxjs/operators */ 2673);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/core */ 2560);

        class ManageProductsService extends _core_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService {
          constructor(injector) {
            super(injector);
          }
          uploadProductsCSV(file) {
            if (!this.endpointEnabled("import")) {
              console.warn(
                'Endpoint "import" is disabled. To enable change your environment.ts config'
              );
              return rxjs__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
            }
            return this.getPreSignedUrl(file.name).pipe(
              (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(
                (url) =>
                  this.http.put(url, file, {
                    headers: {
                      // eslint-disable-next-line @typescript-eslint/naming-convention
                      "Content-Type": "text/csv",
                    },
                  })
              )
            );
          }
          getPreSignedUrl(fileName) {
            const url = this.getUrl("import", "import");
            return this.http.get(url, {
              params: {
                name: fileName,
              },
            });
          }
        }
        ManageProductsService.ɵfac = function ManageProductsService_Factory(t) {
          return new (t || ManageProductsService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector
            )
          );
        };
        ManageProductsService.ɵprov =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__[
            "ɵɵdefineInjectable"
          ]({
            token: ManageProductsService,
            factory: ManageProductsService.ɵfac,
          });

        /***/
      },

    /***/ 63:
      /*!**************************************************!*\
  !*** ./src/app/admin/orders/orders.component.ts ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ OrdersComponent: () =>
            /* binding */ OrdersComponent,
          /* harmony export */
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 2560);
        /* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./orders.service */ 3259);
        /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/material/table */ 5288);

        function OrdersComponent_th_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "th",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "From");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        }
        function OrdersComponent_td_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "td",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const order_r12 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](
              " ",
              order_r12.address.firstName,
              " ",
              order_r12.address.firstName,
              " "
            );
          }
        }
        function OrdersComponent_th_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "th",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Count");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        }
        function OrdersComponent_td_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "td",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const order_r13 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](
              order_r13.items.length
            );
          }
        }
        function OrdersComponent_th_10_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "th",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        }
        function OrdersComponent_td_11_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "td",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const order_r14 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](
              order_r14.address.address
            );
          }
        }
        function OrdersComponent_th_13_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "th",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        }
        function OrdersComponent_td_14_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "td",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const order_r15 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](
              order_r15.items.length
            );
          }
        }
        function OrdersComponent_th_16_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "th",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        }
        function OrdersComponent_td_17_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "td",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const order_r16 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](
              order_r16.items.length
            );
          }
        }
        function OrdersComponent_tr_18_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              0,
              "tr",
              12
            );
          }
        }
        function OrdersComponent_tr_19_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              0,
              "tr",
              13
            );
          }
        }
        class OrdersComponent {
          constructor(ordersService) {
            this.ordersService = ordersService;
            this.columns = ["from", "count", "address", "status", "action"];
          }
          ngOnInit() {
            this.orders$ = this.ordersService.getOrders();
          }
        }
        OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
          return new (t || OrdersComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService
            )
          );
        };
        OrdersComponent.ɵcmp =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineComponent"
          ]({
            type: OrdersComponent,
            selectors: [["app-orders"]],
            decls: 20,
            vars: 3,
            consts: [
              ["mat-table", "", 1, "w-100", 3, "dataSource"],
              ["matColumnDef", "from"],
              ["mat-header-cell", "", 4, "matHeaderCellDef"],
              ["mat-cell", "", 4, "matCellDef"],
              ["matColumnDef", "count"],
              ["matColumnDef", "address"],
              ["matColumnDef", "status"],
              ["matColumnDef", "action"],
              ["mat-header-row", "", 4, "matHeaderRowDef"],
              ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
              ["mat-header-cell", ""],
              ["mat-cell", ""],
              ["mat-header-row", ""],
              ["mat-row", ""],
            ],
            template: function OrdersComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                  0,
                  "h1"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
                  1,
                  "Manage orders"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                  2,
                  "table",
                  0
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerStart"
                ](3, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  4,
                  OrdersComponent_th_4_Template,
                  2,
                  0,
                  "th",
                  2
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  5,
                  OrdersComponent_td_5_Template,
                  2,
                  2,
                  "td",
                  3
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerEnd"
                ]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerStart"
                ](6, 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  7,
                  OrdersComponent_th_7_Template,
                  2,
                  0,
                  "th",
                  2
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  8,
                  OrdersComponent_td_8_Template,
                  2,
                  1,
                  "td",
                  3
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerEnd"
                ]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerStart"
                ](9, 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  10,
                  OrdersComponent_th_10_Template,
                  2,
                  0,
                  "th",
                  2
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  11,
                  OrdersComponent_td_11_Template,
                  2,
                  1,
                  "td",
                  3
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerEnd"
                ]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerStart"
                ](12, 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  13,
                  OrdersComponent_th_13_Template,
                  2,
                  0,
                  "th",
                  2
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  14,
                  OrdersComponent_td_14_Template,
                  2,
                  1,
                  "td",
                  3
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerEnd"
                ]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerStart"
                ](15, 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  16,
                  OrdersComponent_th_16_Template,
                  2,
                  0,
                  "th",
                  2
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  17,
                  OrdersComponent_td_17_Template,
                  2,
                  1,
                  "td",
                  3
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerEnd"
                ]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  18,
                  OrdersComponent_tr_18_Template,
                  1,
                  0,
                  "tr",
                  8
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  19,
                  OrdersComponent_tr_19_Template,
                  1,
                  0,
                  "tr",
                  9
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
              }
              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                  "dataSource",
                  ctx.orders$
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                  "matHeaderRowDef",
                  ctx.columns
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                  "matRowDefColumns",
                  ctx.columns
                );
              }
            },
            dependencies: [
              _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow,
            ],
            styles: [
              "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */",
            ],
          });

        /***/
      },

    /***/ 3259:
      /*!************************************************!*\
  !*** ./src/app/admin/orders/orders.service.ts ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ OrdersService: () => /* binding */ OrdersService,
          /* harmony export */
        });
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! rxjs */ 745);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 2560);

        class OrdersService {
          constructor() {}
          getOrders() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([]);
          }
        }
        OrdersService.ɵfac = function OrdersService_Factory(t) {
          return new (t || OrdersService)();
        };
        OrdersService.ɵprov =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineInjectable"
          ]({
            token: OrdersService,
            factory: OrdersService.ɵfac,
          });

        /***/
      },

    /***/ 17:
      /*!*************************************************************!*\
  !*** ./src/app/shared/file-picker/file-picker.component.ts ***!
  \*************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ FilePickerComponent: () =>
            /* binding */ FilePickerComponent,
          /* harmony export */
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 2560);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/common */ 4666);
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/material/button */ 4522);

        function FilePickerComponent_ng_container_3_Template(rf, ctx) {
          if (rf & 1) {
            const _r5 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "span",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "button",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function FilePickerComponent_ng_container_3_Template_button_click_3_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r5
                );
                const ctx_r4 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                return _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵresetView"
                ](ctx_r4.uploadClick.emit());
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Upload ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "button",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function FilePickerComponent_ng_container_3_Template_button_click_5_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r5
                );
                const ctx_r6 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                return _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵresetView"
                ](ctx_r6.removeFile());
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
          }
          if (rf & 2) {
            const ctx_r1 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              "Selected file: ",
              ctx_r1.file.name,
              ""
            );
          }
        }
        function FilePickerComponent_ng_template_4_Template(rf, ctx) {
          if (rf & 1) {
            const _r8 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              "Select file to upload"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "button",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function FilePickerComponent_ng_template_4_Template_button_click_2_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r8
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                const _r0 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
                return _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵresetView"
                ](_r0.click());
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              3,
              " Import Products CSV "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        class FilePickerComponent {
          constructor() {
            this.file = null;
            this.fileChange =
              new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
            this.uploadClick =
              new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          }
          selectFile(files) {
            if (!(files === null || files === void 0 ? void 0 : files.length)) {
              this.removeFile();
              return;
            }
            const file = files.item(0);
            if (!["text/csv", "application/vnd.ms-excel"].includes(file.type)) {
              this.removeFile();
              return;
            }
            this.fileChange.emit(file);
            this.file = file;
          }
          removeFile() {
            this.file = null;
            this.fileChange.emit(null);
          }
        }
        FilePickerComponent.ɵfac = function FilePickerComponent_Factory(t) {
          return new (t || FilePickerComponent)();
        };
        FilePickerComponent.ɵcmp =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineComponent"
          ]({
            type: FilePickerComponent,
            selectors: [["app-file-picker"]],
            inputs: {
              file: "file",
            },
            outputs: {
              fileChange: "fileChange",
              uploadClick: "uploadClick",
            },
            decls: 6,
            vars: 2,
            consts: [
              ["accept", "text/csv", "type", "file", 1, "d-none", 3, "change"],
              ["fileInput", ""],
              [1, "h5", "mb-0", "text-muted", "d-flex", "align-items-center"],
              [4, "ngIf", "ngIfElse"],
              ["selectFileTemplate", ""],
              [1, "mr-3"],
              [
                "color",
                "primary",
                "mat-flat-button",
                "",
                1,
                "mr-1",
                3,
                "click",
              ],
              ["color", "warn", "mat-flat-button", "", 3, "click"],
              ["color", "accent", "mat-flat-button", "", 3, "click"],
            ],
            template: function FilePickerComponent_Template(rf, ctx) {
              if (rf & 1) {
                const _r9 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                    "ɵɵgetCurrentView"
                  ]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  0,
                  "input",
                  0,
                  1
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                  "change",
                  function FilePickerComponent_Template_input_change_0_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                      _r9
                    );
                    const _r0 =
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](
                        1
                      );
                    return _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                      "ɵɵresetView"
                    ](ctx.selectFile(_r0.files));
                  }
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  2,
                  "div",
                  2
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                  3,
                  FilePickerComponent_ng_container_3_Template,
                  7,
                  1,
                  "ng-container",
                  3
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                  4,
                  FilePickerComponent_ng_template_4_Template,
                  4,
                  0,
                  "ng-template",
                  null,
                  4,
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                    "ɵɵtemplateRefExtractor"
                  ]
                );
              }
              if (rf & 2) {
                const _r2 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "ngIf",
                  ctx.file
                )("ngIfElse", _r2);
              }
            },
            dependencies: [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf,
              _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton,
            ],
            styles: [
              "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */",
            ],
          });

        /***/
      },

    /***/ 2145:
      /*!**********************************************************!*\
  !*** ./src/app/shared/file-picker/file-picker.module.ts ***!
  \**********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ FilePickerModule: () =>
            /* binding */ FilePickerModule,
          /* harmony export */
        });
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/common */ 4666);
        /* harmony import */ var _file_picker_component__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./file-picker.component */ 17);
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/material/button */ 4522);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 2560);

        class FilePickerModule {}
        FilePickerModule.ɵfac = function FilePickerModule_Factory(t) {
          return new (t || FilePickerModule)();
        };
        FilePickerModule.ɵmod =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineNgModule"
          ]({
            type: FilePickerModule,
          });
        FilePickerModule.ɵinj =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineInjector"
          ]({
            imports: [
              _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
              _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
            ],
          });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](
              FilePickerModule,
              {
                declarations: [
                  _file_picker_component__WEBPACK_IMPORTED_MODULE_0__.FilePickerComponent,
                ],
                imports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
                ],
                exports: [
                  _file_picker_component__WEBPACK_IMPORTED_MODULE_0__.FilePickerComponent,
                ],
              }
            );
        })();

        /***/
      },

    /***/ 9673:
      /*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/table.mjs ***!
  \******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ BaseCdkCell: () => /* binding */ BaseCdkCell,
          /* harmony export */ BaseRowDef: () => /* binding */ BaseRowDef,
          /* harmony export */ CDK_ROW_TEMPLATE: () =>
            /* binding */ CDK_ROW_TEMPLATE,
          /* harmony export */ CDK_TABLE: () => /* binding */ CDK_TABLE,
          /* harmony export */ CDK_TABLE_TEMPLATE: () =>
            /* binding */ CDK_TABLE_TEMPLATE,
          /* harmony export */ CdkCell: () => /* binding */ CdkCell,
          /* harmony export */ CdkCellDef: () => /* binding */ CdkCellDef,
          /* harmony export */ CdkCellOutlet: () => /* binding */ CdkCellOutlet,
          /* harmony export */ CdkColumnDef: () => /* binding */ CdkColumnDef,
          /* harmony export */ CdkFooterCell: () => /* binding */ CdkFooterCell,
          /* harmony export */ CdkFooterCellDef: () =>
            /* binding */ CdkFooterCellDef,
          /* harmony export */ CdkFooterRow: () => /* binding */ CdkFooterRow,
          /* harmony export */ CdkFooterRowDef: () =>
            /* binding */ CdkFooterRowDef,
          /* harmony export */ CdkHeaderCell: () => /* binding */ CdkHeaderCell,
          /* harmony export */ CdkHeaderCellDef: () =>
            /* binding */ CdkHeaderCellDef,
          /* harmony export */ CdkHeaderRow: () => /* binding */ CdkHeaderRow,
          /* harmony export */ CdkHeaderRowDef: () =>
            /* binding */ CdkHeaderRowDef,
          /* harmony export */ CdkNoDataRow: () => /* binding */ CdkNoDataRow,
          /* harmony export */ CdkRecycleRows: () =>
            /* binding */ CdkRecycleRows,
          /* harmony export */ CdkRow: () => /* binding */ CdkRow,
          /* harmony export */ CdkRowDef: () => /* binding */ CdkRowDef,
          /* harmony export */ CdkTable: () => /* binding */ CdkTable,
          /* harmony export */ CdkTableModule: () =>
            /* binding */ CdkTableModule,
          /* harmony export */ CdkTextColumn: () => /* binding */ CdkTextColumn,
          /* harmony export */ DataRowOutlet: () => /* binding */ DataRowOutlet,
          /* harmony export */ DataSource: () =>
            /* reexport safe */ _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.DataSource,
          /* harmony export */ FooterRowOutlet: () =>
            /* binding */ FooterRowOutlet,
          /* harmony export */ HeaderRowOutlet: () =>
            /* binding */ HeaderRowOutlet,
          /* harmony export */ NoDataRowOutlet: () =>
            /* binding */ NoDataRowOutlet,
          /* harmony export */ STICKY_DIRECTIONS: () =>
            /* binding */ STICKY_DIRECTIONS,
          /* harmony export */ STICKY_POSITIONING_LISTENER: () =>
            /* binding */ STICKY_POSITIONING_LISTENER,
          /* harmony export */ StickyStyler: () => /* binding */ StickyStyler,
          /* harmony export */ TEXT_COLUMN_OPTIONS: () =>
            /* binding */ TEXT_COLUMN_OPTIONS,
          /* harmony export */ _COALESCED_STYLE_SCHEDULER: () =>
            /* binding */ _COALESCED_STYLE_SCHEDULER,
          /* harmony export */ _CoalescedStyleScheduler: () =>
            /* binding */ _CoalescedStyleScheduler,
          /* harmony export */ _Schedule: () => /* binding */ _Schedule,
          /* harmony export */ mixinHasStickyInput: () =>
            /* binding */ mixinHasStickyInput,
          /* harmony export */
        });
        /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! @angular/cdk/bidi */ 2867);
        /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/cdk/coercion */ 8971);
        /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/cdk/collections */ 1755);
        /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(/*! @angular/cdk/platform */ 9107);
        /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! @angular/common */ 4666);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 2560);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! rxjs */ 228);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! rxjs */ 9346);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! rxjs */ 6317);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! rxjs */ 4437);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! rxjs */ 745);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! rxjs/operators */ 8951);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! rxjs/operators */ 9295);

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Mixin to provide a directive with a function that checks if the sticky input has been
         * changed since the last time the function was called. Essentially adds a dirty-check to the
         * sticky value.
         * @docs-private
         */
        const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
        const _c1 = ["caption", "colgroup, col"];
        function CdkTextColumn_th_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "th",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r0 =
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"](
              "text-align",
              ctx_r0.justify
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](
              " ",
              ctx_r0.headerText,
              " "
            );
          }
        }
        function CdkTextColumn_td_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "td",
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const data_r2 = ctx.$implicit;
            const ctx_r1 =
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"](
              "text-align",
              ctx_r1.justify
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](
              " ",
              ctx_r1.dataAccessor(data_r2, ctx_r1.name),
              " "
            );
          }
        }
        function mixinHasStickyInput(base) {
          return class extends base {
            /** Whether sticky positioning should be applied. */
            get sticky() {
              return this._sticky;
            }
            set sticky(v) {
              const prevValue = this._sticky;
              this._sticky = (0,
              _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(
                v
              );
              this._hasStickyChanged = prevValue !== this._sticky;
            }
            /** Whether the sticky value has changed since this was last called. */
            hasStickyChanged() {
              const hasStickyChanged = this._hasStickyChanged;
              this._hasStickyChanged = false;
              return hasStickyChanged;
            }
            /** Resets the dirty check for cases where the sticky state has been used without checking. */
            resetStickyChanged() {
              this._hasStickyChanged = false;
            }
            constructor(...args) {
              super(...args);
              this._sticky = false;
              /** Whether the sticky input has changed since it was last checked. */
              this._hasStickyChanged = false;
            }
          };
        }

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Used to provide a table to some of the sub-components without causing a circular dependency.
         * @docs-private
         */
        const CDK_TABLE =
          new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(
            "CDK_TABLE"
          );
        /** Injection token that can be used to specify the text column options. */
        const TEXT_COLUMN_OPTIONS =
          new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(
            "text-column-options"
          );

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Cell definition for a CDK table.
         * Captures the template of a column's data row cell as well as cell-specific properties.
         */
        class CdkCellDef {
          constructor(/** @docs-private */ template) {
            this.template = template;
          }
        }
        CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
          return new (t || CdkCellDef)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
            )
          );
        };
        CdkCellDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkCellDef,
            selectors: [["", "cdkCellDef", ""]],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkCellDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[cdkCellDef]",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
                  },
                ];
              },
              null
            );
        })();
        /**
         * Header cell definition for a CDK table.
         * Captures the template of a column's header cell and as well as cell-specific properties.
         */
        class CdkHeaderCellDef {
          constructor(/** @docs-private */ template) {
            this.template = template;
          }
        }
        CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
          return new (t || CdkHeaderCellDef)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
            )
          );
        };
        CdkHeaderCellDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkHeaderCellDef,
            selectors: [["", "cdkHeaderCellDef", ""]],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkHeaderCellDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[cdkHeaderCellDef]",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
                  },
                ];
              },
              null
            );
        })();
        /**
         * Footer cell definition for a CDK table.
         * Captures the template of a column's footer cell and as well as cell-specific properties.
         */
        class CdkFooterCellDef {
          constructor(/** @docs-private */ template) {
            this.template = template;
          }
        }
        CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
          return new (t || CdkFooterCellDef)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
            )
          );
        };
        CdkFooterCellDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkFooterCellDef,
            selectors: [["", "cdkFooterCellDef", ""]],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkFooterCellDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[cdkFooterCellDef]",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
                  },
                ];
              },
              null
            );
        })();
        // Boilerplate for applying mixins to CdkColumnDef.
        /** @docs-private */
        class CdkColumnDefBase {}
        const _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
        /**
         * Column definition for the CDK table.
         * Defines a set of cells available for a table column.
         */
        class CdkColumnDef extends _CdkColumnDefBase {
          /** Unique name for this column. */
          get name() {
            return this._name;
          }
          set name(name) {
            this._setNameInput(name);
          }
          /**
           * Whether this column should be sticky positioned on the end of the row. Should make sure
           * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
           * has been changed.
           */
          get stickyEnd() {
            return this._stickyEnd;
          }
          set stickyEnd(v) {
            const prevValue = this._stickyEnd;
            this._stickyEnd = (0,
            _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(
              v
            );
            this._hasStickyChanged = prevValue !== this._stickyEnd;
          }
          constructor(_table) {
            super();
            this._table = _table;
            this._stickyEnd = false;
          }
          /**
           * Overridable method that sets the css classes that will be added to every cell in this
           * column.
           * In the future, columnCssClassName will change from type string[] to string and this
           * will set a single string value.
           * @docs-private
           */
          _updateColumnCssClassName() {
            this._columnCssClassName = [
              `cdk-column-${this.cssClassFriendlyName}`,
            ];
          }
          /**
           * This has been extracted to a util because of TS 4 and VE.
           * View Engine doesn't support property rename inheritance.
           * TS 4.0 doesn't allow properties to override accessors or vice-versa.
           * @docs-private
           */
          _setNameInput(value) {
            // If the directive is set without a name (updated programmatically), then this setter will
            // trigger with an empty string and should not overwrite the programmatically set value.
            if (value) {
              this._name = value;
              this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, "-");
              this._updateColumnCssClassName();
            }
          }
        }
        CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
          return new (t || CdkColumnDef)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              CDK_TABLE,
              8
            )
          );
        };
        CdkColumnDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkColumnDef,
            selectors: [["", "cdkColumnDef", ""]],
            contentQueries: function CdkColumnDef_ContentQueries(
              rf,
              ctx,
              dirIndex
            ) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](
                  dirIndex,
                  CdkCellDef,
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](
                  dirIndex,
                  CdkHeaderCellDef,
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](
                  dirIndex,
                  CdkFooterCellDef,
                  5
                );
              }
              if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx.cell = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx.headerCell = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx.footerCell = _t.first);
              }
            },
            inputs: {
              sticky: "sticky",
              name: ["cdkColumnDef", "name"],
              stickyEnd: "stickyEnd",
            },
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
                {
                  provide: "MAT_SORT_HEADER_COLUMN_DEF",
                  useExisting: CdkColumnDef,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkColumnDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[cdkColumnDef]",
                      inputs: ["sticky"],
                      providers: [
                        {
                          provide: "MAT_SORT_HEADER_COLUMN_DEF",
                          useExisting: CdkColumnDef,
                        },
                      ],
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                        args: [CDK_TABLE],
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional,
                      },
                    ],
                  },
                ];
              },
              {
                name: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
                    args: ["cdkColumnDef"],
                  },
                ],
                stickyEnd: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
                    args: ["stickyEnd"],
                  },
                ],
                cell: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
                    args: [CdkCellDef],
                  },
                ],
                headerCell: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
                    args: [CdkHeaderCellDef],
                  },
                ],
                footerCell: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
                    args: [CdkFooterCellDef],
                  },
                ],
              }
            );
        })();
        /** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
        class BaseCdkCell {
          constructor(columnDef, elementRef) {
            elementRef.nativeElement.classList.add(
              ...columnDef._columnCssClassName
            );
          }
        }
        /** Header cell template container that adds the right classes and role. */
        class CdkHeaderCell extends BaseCdkCell {
          constructor(columnDef, elementRef) {
            super(columnDef, elementRef);
          }
        }
        CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
          return new (t || CdkHeaderCell)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              CdkColumnDef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
            )
          );
        };
        CdkHeaderCell.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkHeaderCell,
            selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
            hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkHeaderCell,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "cdk-header-cell, th[cdk-header-cell]",
                      host: {
                        class: "cdk-header-cell",
                        role: "columnheader",
                      },
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: CdkColumnDef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
                  },
                ];
              },
              null
            );
        })();
        /** Footer cell template container that adds the right classes and role. */
        class CdkFooterCell extends BaseCdkCell {
          constructor(columnDef, elementRef) {
            super(columnDef, elementRef);
            if (columnDef._table?._elementRef.nativeElement.nodeType === 1) {
              const tableRole =
                columnDef._table._elementRef.nativeElement.getAttribute("role");
              const role =
                tableRole === "grid" || tableRole === "treegrid"
                  ? "gridcell"
                  : "cell";
              elementRef.nativeElement.setAttribute("role", role);
            }
          }
        }
        CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
          return new (t || CdkFooterCell)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              CdkColumnDef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
            )
          );
        };
        CdkFooterCell.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkFooterCell,
            selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
            hostAttrs: [1, "cdk-footer-cell"],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkFooterCell,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "cdk-footer-cell, td[cdk-footer-cell]",
                      host: {
                        class: "cdk-footer-cell",
                      },
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: CdkColumnDef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
                  },
                ];
              },
              null
            );
        })();
        /** Cell template container that adds the right classes and role. */
        class CdkCell extends BaseCdkCell {
          constructor(columnDef, elementRef) {
            super(columnDef, elementRef);
            if (columnDef._table?._elementRef.nativeElement.nodeType === 1) {
              const tableRole =
                columnDef._table._elementRef.nativeElement.getAttribute("role");
              const role =
                tableRole === "grid" || tableRole === "treegrid"
                  ? "gridcell"
                  : "cell";
              elementRef.nativeElement.setAttribute("role", role);
            }
          }
        }
        CdkCell.ɵfac = function CdkCell_Factory(t) {
          return new (t || CdkCell)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              CdkColumnDef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
            )
          );
        };
        CdkCell.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkCell,
            selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
            hostAttrs: [1, "cdk-cell"],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkCell,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "cdk-cell, td[cdk-cell]",
                      host: {
                        class: "cdk-cell",
                      },
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: CdkColumnDef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
                  },
                ];
              },
              null
            );
        })();

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * @docs-private
         */
        class _Schedule {
          constructor() {
            this.tasks = [];
            this.endTasks = [];
          }
        }
        /** Injection token used to provide a coalesced style scheduler. */
        const _COALESCED_STYLE_SCHEDULER =
          new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(
            "_COALESCED_STYLE_SCHEDULER"
          );
        /**
         * Allows grouping up CSSDom mutations after the current execution context.
         * This can significantly improve performance when separate consecutive functions are
         * reading from the CSSDom and then mutating it.
         *
         * @docs-private
         */
        class _CoalescedStyleScheduler {
          constructor(_ngZone) {
            this._ngZone = _ngZone;
            this._currentSchedule = null;
            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          }
          /**
           * Schedules the specified task to run at the end of the current VM turn.
           */
          schedule(task) {
            this._createScheduleIfNeeded();
            this._currentSchedule.tasks.push(task);
          }
          /**
           * Schedules the specified task to run after other scheduled tasks at the end of the current
           * VM turn.
           */
          scheduleEnd(task) {
            this._createScheduleIfNeeded();
            this._currentSchedule.endTasks.push(task);
          }
          /** Prevent any further tasks from running. */
          ngOnDestroy() {
            this._destroyed.next();
            this._destroyed.complete();
          }
          _createScheduleIfNeeded() {
            if (this._currentSchedule) {
              return;
            }
            this._currentSchedule = new _Schedule();
            this._getScheduleObservable()
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(
                  this._destroyed
                )
              )
              .subscribe(() => {
                while (
                  this._currentSchedule.tasks.length ||
                  this._currentSchedule.endTasks.length
                ) {
                  const schedule = this._currentSchedule;
                  // Capture new tasks scheduled by the current set of tasks.
                  this._currentSchedule = new _Schedule();
                  for (const task of schedule.tasks) {
                    task();
                  }
                  for (const task of schedule.endTasks) {
                    task();
                  }
                }
                this._currentSchedule = null;
              });
          }
          _getScheduleObservable() {
            // Use onStable when in the context of an ongoing change detection cycle so that we
            // do not accidentally trigger additional cycles.
            return this._ngZone.isStable
              ? (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(
                  Promise.resolve(undefined)
                )
              : this._ngZone.onStable.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)
                );
          }
        }
        _CoalescedStyleScheduler.ɵfac =
          function _CoalescedStyleScheduler_Factory(t) {
            return new (t || _CoalescedStyleScheduler)(
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
                _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
              )
            );
          };
        _CoalescedStyleScheduler.ɵprov =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineInjectable"
          ]({
            token: _CoalescedStyleScheduler,
            factory: _CoalescedStyleScheduler.ɵfac,
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              _CoalescedStyleScheduler,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone,
                  },
                ];
              },
              null
            );
        })();

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * The row template that can be used by the mat-table. Should not be used outside of the
         * material library.
         */
        const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
        /**
         * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
         * for changes and notifying the table.
         */
        class BaseRowDef {
          constructor(/** @docs-private */ template, _differs) {
            this.template = template;
            this._differs = _differs;
          }
          ngOnChanges(changes) {
            // Create a new columns differ if one does not yet exist. Initialize it based on initial value
            // of the columns property or an empty array if none is provided.
            if (!this._columnsDiffer) {
              const columns =
                (changes["columns"] && changes["columns"].currentValue) || [];
              this._columnsDiffer = this._differs.find(columns).create();
              this._columnsDiffer.diff(columns);
            }
          }
          /**
           * Returns the difference between the current columns and the columns from the last diff, or null
           * if there is no difference.
           */
          getColumnsDiff() {
            return this._columnsDiffer.diff(this.columns);
          }
          /** Gets this row def's relevant cell template from the provided column def. */
          extractCellTemplate(column) {
            if (this instanceof CdkHeaderRowDef) {
              return column.headerCell.template;
            }
            if (this instanceof CdkFooterRowDef) {
              return column.footerCell.template;
            } else {
              return column.cell.template;
            }
          }
        }
        BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
          return new (t || BaseRowDef)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
            )
          );
        };
        BaseRowDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: BaseRowDef,
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵNgOnChangesFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              BaseRowDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers,
                  },
                ];
              },
              null
            );
        })();
        // Boilerplate for applying mixins to CdkHeaderRowDef.
        /** @docs-private */
        class CdkHeaderRowDefBase extends BaseRowDef {}
        const _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
        /**
         * Header row definition for the CDK table.
         * Captures the header row's template and other header properties such as the columns to display.
         */
        class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
          constructor(template, _differs, _table) {
            super(template, _differs);
            this._table = _table;
          }
          // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
          // Explicitly define it so that the method is called as part of the Angular lifecycle.
          ngOnChanges(changes) {
            super.ngOnChanges(changes);
          }
        }
        CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
          return new (t || CdkHeaderRowDef)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              CDK_TABLE,
              8
            )
          );
        };
        CdkHeaderRowDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkHeaderRowDef,
            selectors: [["", "cdkHeaderRowDef", ""]],
            inputs: {
              columns: ["cdkHeaderRowDef", "columns"],
              sticky: ["cdkHeaderRowDefSticky", "sticky"],
            },
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵInheritDefinitionFeature"
              ],
              _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵNgOnChangesFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkHeaderRowDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[cdkHeaderRowDef]",
                      inputs: [
                        "columns: cdkHeaderRowDef",
                        "sticky: cdkHeaderRowDefSticky",
                      ],
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers,
                  },
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                        args: [CDK_TABLE],
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional,
                      },
                    ],
                  },
                ];
              },
              null
            );
        })();
        // Boilerplate for applying mixins to CdkFooterRowDef.
        /** @docs-private */
        class CdkFooterRowDefBase extends BaseRowDef {}
        const _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
        /**
         * Footer row definition for the CDK table.
         * Captures the footer row's template and other footer properties such as the columns to display.
         */
        class CdkFooterRowDef extends _CdkFooterRowDefBase {
          constructor(template, _differs, _table) {
            super(template, _differs);
            this._table = _table;
          }
          // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
          // Explicitly define it so that the method is called as part of the Angular lifecycle.
          ngOnChanges(changes) {
            super.ngOnChanges(changes);
          }
        }
        CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
          return new (t || CdkFooterRowDef)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              CDK_TABLE,
              8
            )
          );
        };
        CdkFooterRowDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkFooterRowDef,
            selectors: [["", "cdkFooterRowDef", ""]],
            inputs: {
              columns: ["cdkFooterRowDef", "columns"],
              sticky: ["cdkFooterRowDefSticky", "sticky"],
            },
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵInheritDefinitionFeature"
              ],
              _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵNgOnChangesFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkFooterRowDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[cdkFooterRowDef]",
                      inputs: [
                        "columns: cdkFooterRowDef",
                        "sticky: cdkFooterRowDefSticky",
                      ],
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers,
                  },
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                        args: [CDK_TABLE],
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional,
                      },
                    ],
                  },
                ];
              },
              null
            );
        })();
        /**
         * Data row definition for the CDK table.
         * Captures the header row's template and other row properties such as the columns to display and
         * a when predicate that describes when this row should be used.
         */
        class CdkRowDef extends BaseRowDef {
          // TODO(andrewseguin): Add an input for providing a switch function to determine
          //   if this template should be used.
          constructor(template, _differs, _table) {
            super(template, _differs);
            this._table = _table;
          }
        }
        CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
          return new (t || CdkRowDef)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              CDK_TABLE,
              8
            )
          );
        };
        CdkRowDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkRowDef,
            selectors: [["", "cdkRowDef", ""]],
            inputs: {
              columns: ["cdkRowDefColumns", "columns"],
              when: ["cdkRowDefWhen", "when"],
            },
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkRowDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[cdkRowDef]",
                      inputs: [
                        "columns: cdkRowDefColumns",
                        "when: cdkRowDefWhen",
                      ],
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers,
                  },
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                        args: [CDK_TABLE],
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional,
                      },
                    ],
                  },
                ];
              },
              null
            );
        })();
        /**
         * Outlet for rendering cells inside of a row or header row.
         * @docs-private
         */
        class CdkCellOutlet {
          constructor(_viewContainer) {
            this._viewContainer = _viewContainer;
            CdkCellOutlet.mostRecentCellOutlet = this;
          }
          ngOnDestroy() {
            // If this was the last outlet being rendered in the view, remove the reference
            // from the static property after it has been destroyed to avoid leaking memory.
            if (CdkCellOutlet.mostRecentCellOutlet === this) {
              CdkCellOutlet.mostRecentCellOutlet = null;
            }
          }
        }
        /**
         * Static property containing the latest constructed instance of this class.
         * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
         * createEmbeddedView. After one of these components are created, this property will provide
         * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
         * construct the cells with the provided context.
         */
        CdkCellOutlet.mostRecentCellOutlet = null;
        CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
          return new (t || CdkCellOutlet)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
            )
          );
        };
        CdkCellOutlet.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkCellOutlet,
            selectors: [["", "cdkCellOutlet", ""]],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkCellOutlet,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[cdkCellOutlet]",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef,
                  },
                ];
              },
              null
            );
        })();
        /** Header template container that contains the cell outlet. Adds the right class and role. */
        class CdkHeaderRow {}
        CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
          return new (t || CdkHeaderRow)();
        };
        CdkHeaderRow.ɵcmp =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineComponent"
          ]({
            type: CdkHeaderRow,
            selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
            hostAttrs: ["role", "row", 1, "cdk-header-row"],
            decls: 1,
            vars: 0,
            consts: [["cdkCellOutlet", ""]],
            template: function CdkHeaderRow_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainer"
                ](0, 0);
              }
            },
            dependencies: [CdkCellOutlet],
            encapsulation: 2,
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkHeaderRow,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
                  args: [
                    {
                      selector: "cdk-header-row, tr[cdk-header-row]",
                      template: CDK_ROW_TEMPLATE,
                      host: {
                        class: "cdk-header-row",
                        role: "row",
                      },
                      // See note on CdkTable for explanation on why this uses the default change detection strategy.
                      // tslint:disable-next-line:validate-decorators
                      changeDetection:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__
                          .ChangeDetectionStrategy.Default,
                      encapsulation:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__
                          .ViewEncapsulation.None,
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /** Footer template container that contains the cell outlet. Adds the right class and role. */
        class CdkFooterRow {}
        CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
          return new (t || CdkFooterRow)();
        };
        CdkFooterRow.ɵcmp =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineComponent"
          ]({
            type: CdkFooterRow,
            selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
            hostAttrs: ["role", "row", 1, "cdk-footer-row"],
            decls: 1,
            vars: 0,
            consts: [["cdkCellOutlet", ""]],
            template: function CdkFooterRow_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainer"
                ](0, 0);
              }
            },
            dependencies: [CdkCellOutlet],
            encapsulation: 2,
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkFooterRow,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
                  args: [
                    {
                      selector: "cdk-footer-row, tr[cdk-footer-row]",
                      template: CDK_ROW_TEMPLATE,
                      host: {
                        class: "cdk-footer-row",
                        role: "row",
                      },
                      // See note on CdkTable for explanation on why this uses the default change detection strategy.
                      // tslint:disable-next-line:validate-decorators
                      changeDetection:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__
                          .ChangeDetectionStrategy.Default,
                      encapsulation:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__
                          .ViewEncapsulation.None,
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /** Data row template container that contains the cell outlet. Adds the right class and role. */
        class CdkRow {}
        CdkRow.ɵfac = function CdkRow_Factory(t) {
          return new (t || CdkRow)();
        };
        CdkRow.ɵcmp =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineComponent"
          ]({
            type: CdkRow,
            selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
            hostAttrs: ["role", "row", 1, "cdk-row"],
            decls: 1,
            vars: 0,
            consts: [["cdkCellOutlet", ""]],
            template: function CdkRow_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainer"
                ](0, 0);
              }
            },
            dependencies: [CdkCellOutlet],
            encapsulation: 2,
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkRow,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
                  args: [
                    {
                      selector: "cdk-row, tr[cdk-row]",
                      template: CDK_ROW_TEMPLATE,
                      host: {
                        class: "cdk-row",
                        role: "row",
                      },
                      // See note on CdkTable for explanation on why this uses the default change detection strategy.
                      // tslint:disable-next-line:validate-decorators
                      changeDetection:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__
                          .ChangeDetectionStrategy.Default,
                      encapsulation:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__
                          .ViewEncapsulation.None,
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /** Row that can be used to display a message when no data is shown in the table. */
        class CdkNoDataRow {
          constructor(templateRef) {
            this.templateRef = templateRef;
            this._contentClassName = "cdk-no-data-row";
          }
        }
        CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) {
          return new (t || CdkNoDataRow)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
            )
          );
        };
        CdkNoDataRow.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkNoDataRow,
            selectors: [["ng-template", "cdkNoDataRow", ""]],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkNoDataRow,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "ng-template[cdkNoDataRow]",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
                  },
                ];
              },
              null
            );
        })();

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * List of all possible directions that can be used for sticky positioning.
         * @docs-private
         */
        const STICKY_DIRECTIONS = ["top", "bottom", "left", "right"];
        /**
         * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
         * @docs-private
         */
        class StickyStyler {
          /**
           * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
           *     that uses the native `<table>` element.
           * @param _stickCellCss The CSS class that will be applied to every row/cell that has
           *     sticky positioning applied.
           * @param direction The directionality context of the table (ltr/rtl); affects column positioning
           *     by reversing left/right positions.
           * @param _isBrowser Whether the table is currently being rendered on the server or the client.
           * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
           *     using inline styles. If false, it is assumed that position: sticky is included in
           *     the component stylesheet for _stickCellCss.
           * @param _positionListener A listener that is notified of changes to sticky rows/columns
           *     and their dimensions.
           */
          constructor(
            _isNativeHtmlTable,
            _stickCellCss,
            direction,
            _coalescedStyleScheduler,
            _isBrowser = true,
            _needsPositionStickyOnElement = true,
            _positionListener
          ) {
            this._isNativeHtmlTable = _isNativeHtmlTable;
            this._stickCellCss = _stickCellCss;
            this.direction = direction;
            this._coalescedStyleScheduler = _coalescedStyleScheduler;
            this._isBrowser = _isBrowser;
            this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
            this._positionListener = _positionListener;
            this._cachedCellWidths = [];
            this._borderCellCss = {
              top: `${_stickCellCss}-border-elem-top`,
              bottom: `${_stickCellCss}-border-elem-bottom`,
              left: `${_stickCellCss}-border-elem-left`,
              right: `${_stickCellCss}-border-elem-right`,
            };
          }
          /**
           * Clears the sticky positioning styles from the row and its cells by resetting the `position`
           * style, setting the zIndex to 0, and unsetting each provided sticky direction.
           * @param rows The list of rows that should be cleared from sticking in the provided directions
           * @param stickyDirections The directions that should no longer be set as sticky on the rows.
           */
          clearStickyPositioning(rows, stickyDirections) {
            const elementsToClear = [];
            for (const row of rows) {
              // If the row isn't an element (e.g. if it's an `ng-container`),
              // it won't have inline styles or `children` so we skip it.
              if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
              }
              elementsToClear.push(row);
              for (let i = 0; i < row.children.length; i++) {
                elementsToClear.push(row.children[i]);
              }
            }
            // Coalesce with sticky row/column updates (and potentially other changes like column resize).
            this._coalescedStyleScheduler.schedule(() => {
              for (const element of elementsToClear) {
                this._removeStickyStyle(element, stickyDirections);
              }
            });
          }
          /**
           * Applies sticky left and right positions to the cells of each row according to the sticky
           * states of the rendered column definitions.
           * @param rows The rows that should have its set of cells stuck according to the sticky states.
           * @param stickyStartStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the start of the row.
           * @param stickyEndStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the end of the row.
           * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
           *     column cell. If `false` cached widths will be used instead.
           */
          updateStickyColumns(
            rows,
            stickyStartStates,
            stickyEndStates,
            recalculateCellWidths = true
          ) {
            if (
              !rows.length ||
              !this._isBrowser ||
              !(
                stickyStartStates.some((state) => state) ||
                stickyEndStates.some((state) => state)
              )
            ) {
              if (this._positionListener) {
                this._positionListener.stickyColumnsUpdated({
                  sizes: [],
                });
                this._positionListener.stickyEndColumnsUpdated({
                  sizes: [],
                });
              }
              return;
            }
            const firstRow = rows[0];
            const numCells = firstRow.children.length;
            const cellWidths = this._getCellWidths(
              firstRow,
              recalculateCellWidths
            );
            const startPositions = this._getStickyStartColumnPositions(
              cellWidths,
              stickyStartStates
            );
            const endPositions = this._getStickyEndColumnPositions(
              cellWidths,
              stickyEndStates
            );
            const lastStickyStart = stickyStartStates.lastIndexOf(true);
            const firstStickyEnd = stickyEndStates.indexOf(true);
            // Coalesce with sticky row updates (and potentially other changes like column resize).
            this._coalescedStyleScheduler.schedule(() => {
              const isRtl = this.direction === "rtl";
              const start = isRtl ? "right" : "left";
              const end = isRtl ? "left" : "right";
              for (const row of rows) {
                for (let i = 0; i < numCells; i++) {
                  const cell = row.children[i];
                  if (stickyStartStates[i]) {
                    this._addStickyStyle(
                      cell,
                      start,
                      startPositions[i],
                      i === lastStickyStart
                    );
                  }
                  if (stickyEndStates[i]) {
                    this._addStickyStyle(
                      cell,
                      end,
                      endPositions[i],
                      i === firstStickyEnd
                    );
                  }
                }
              }
              if (this._positionListener) {
                this._positionListener.stickyColumnsUpdated({
                  sizes:
                    lastStickyStart === -1
                      ? []
                      : cellWidths
                          .slice(0, lastStickyStart + 1)
                          .map((width, index) =>
                            stickyStartStates[index] ? width : null
                          ),
                });
                this._positionListener.stickyEndColumnsUpdated({
                  sizes:
                    firstStickyEnd === -1
                      ? []
                      : cellWidths
                          .slice(firstStickyEnd)
                          .map((width, index) =>
                            stickyEndStates[index + firstStickyEnd]
                              ? width
                              : null
                          )
                          .reverse(),
                });
              }
            });
          }
          /**
           * Applies sticky positioning to the row's cells if using the native table layout, and to the
           * row itself otherwise.
           * @param rowsToStick The list of rows that should be stuck according to their corresponding
           *     sticky state and to the provided top or bottom position.
           * @param stickyStates A list of boolean states where each state represents whether the row
           *     should be stuck in the particular top or bottom position.
           * @param position The position direction in which the row should be stuck if that row should be
           *     sticky.
           *
           */
          stickRows(rowsToStick, stickyStates, position) {
            // Since we can't measure the rows on the server, we can't stick the rows properly.
            if (!this._isBrowser) {
              return;
            }
            // If positioning the rows to the bottom, reverse their order when evaluating the sticky
            // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
            // sticky states need to be reversed as well.
            const rows =
              position === "bottom"
                ? rowsToStick.slice().reverse()
                : rowsToStick;
            const states =
              position === "bottom"
                ? stickyStates.slice().reverse()
                : stickyStates;
            // Measure row heights all at once before adding sticky styles to reduce layout thrashing.
            const stickyOffsets = [];
            const stickyCellHeights = [];
            const elementsToStick = [];
            for (
              let rowIndex = 0, stickyOffset = 0;
              rowIndex < rows.length;
              rowIndex++
            ) {
              if (!states[rowIndex]) {
                continue;
              }
              stickyOffsets[rowIndex] = stickyOffset;
              const row = rows[rowIndex];
              elementsToStick[rowIndex] = this._isNativeHtmlTable
                ? Array.from(row.children)
                : [row];
              const height = row.getBoundingClientRect().height;
              stickyOffset += height;
              stickyCellHeights[rowIndex] = height;
            }
            const borderedRowIndex = states.lastIndexOf(true);
            // Coalesce with other sticky row updates (top/bottom), sticky columns updates
            // (and potentially other changes like column resize).
            this._coalescedStyleScheduler.schedule(() => {
              for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                if (!states[rowIndex]) {
                  continue;
                }
                const offset = stickyOffsets[rowIndex];
                const isBorderedRowIndex = rowIndex === borderedRowIndex;
                for (const element of elementsToStick[rowIndex]) {
                  this._addStickyStyle(
                    element,
                    position,
                    offset,
                    isBorderedRowIndex
                  );
                }
              }
              if (position === "top") {
                this._positionListener?.stickyHeaderRowsUpdated({
                  sizes: stickyCellHeights,
                  offsets: stickyOffsets,
                  elements: elementsToStick,
                });
              } else {
                this._positionListener?.stickyFooterRowsUpdated({
                  sizes: stickyCellHeights,
                  offsets: stickyOffsets,
                  elements: elementsToStick,
                });
              }
            });
          }
          /**
           * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
           * footer rows is to apply sticky styling to the tfoot container. This should only be done if
           * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
           * the tfoot element.
           */
          updateStickyFooterContainer(tableElement, stickyStates) {
            if (!this._isNativeHtmlTable) {
              return;
            }
            const tfoot = tableElement.querySelector("tfoot");
            // Coalesce with other sticky updates (and potentially other changes like column resize).
            this._coalescedStyleScheduler.schedule(() => {
              if (stickyStates.some((state) => !state)) {
                this._removeStickyStyle(tfoot, ["bottom"]);
              } else {
                this._addStickyStyle(tfoot, "bottom", 0, false);
              }
            });
          }
          /**
           * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
           * the zIndex, removing each of the provided sticky directions, and removing the
           * sticky position if there are no more directions.
           */
          _removeStickyStyle(element, stickyDirections) {
            for (const dir of stickyDirections) {
              element.style[dir] = "";
              element.classList.remove(this._borderCellCss[dir]);
            }
            // If the element no longer has any more sticky directions, remove sticky positioning and
            // the sticky CSS class.
            // Short-circuit checking element.style[dir] for stickyDirections as they
            // were already removed above.
            const hasDirection = STICKY_DIRECTIONS.some(
              (dir) =>
                stickyDirections.indexOf(dir) === -1 && element.style[dir]
            );
            if (hasDirection) {
              element.style.zIndex = this._getCalculatedZIndex(element);
            } else {
              // When not hasDirection, _getCalculatedZIndex will always return ''.
              element.style.zIndex = "";
              if (this._needsPositionStickyOnElement) {
                element.style.position = "";
              }
              element.classList.remove(this._stickCellCss);
            }
          }
          /**
           * Adds the sticky styling to the element by adding the sticky style class, changing position
           * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
           * direction and value.
           */
          _addStickyStyle(element, dir, dirValue, isBorderElement) {
            element.classList.add(this._stickCellCss);
            if (isBorderElement) {
              element.classList.add(this._borderCellCss[dir]);
            }
            element.style[dir] = `${dirValue}px`;
            element.style.zIndex = this._getCalculatedZIndex(element);
            if (this._needsPositionStickyOnElement) {
              element.style.cssText +=
                "position: -webkit-sticky; position: sticky; ";
            }
          }
          /**
           * Calculate what the z-index should be for the element, depending on what directions (top,
           * bottom, left, right) have been set. It should be true that elements with a top direction
           * should have the highest index since these are elements like a table header. If any of those
           * elements are also sticky in another direction, then they should appear above other elements
           * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
           * (e.g. footer rows) should then be next in the ordering such that they are below the header
           * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
           * should minimally increment so that they are above non-sticky elements but below top and bottom
           * elements.
           */
          _getCalculatedZIndex(element) {
            const zIndexIncrements = {
              top: 100,
              bottom: 10,
              left: 1,
              right: 1,
            };
            let zIndex = 0;
            // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
            // loses the array generic type in the `for of`. But we *also* have to use `Array` because
            // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
            for (const dir of STICKY_DIRECTIONS) {
              if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
              }
            }
            return zIndex ? `${zIndex}` : "";
          }
          /** Gets the widths for each cell in the provided row. */
          _getCellWidths(row, recalculateCellWidths = true) {
            if (!recalculateCellWidths && this._cachedCellWidths.length) {
              return this._cachedCellWidths;
            }
            const cellWidths = [];
            const firstRowCells = row.children;
            for (let i = 0; i < firstRowCells.length; i++) {
              let cell = firstRowCells[i];
              cellWidths.push(cell.getBoundingClientRect().width);
            }
            this._cachedCellWidths = cellWidths;
            return cellWidths;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */
          _getStickyStartColumnPositions(widths, stickyStates) {
            const positions = [];
            let nextPosition = 0;
            for (let i = 0; i < widths.length; i++) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }
            return positions;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */
          _getStickyEndColumnPositions(widths, stickyStates) {
            const positions = [];
            let nextPosition = 0;
            for (let i = widths.length; i > 0; i--) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }
            return positions;
          }
        }

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Returns an error to be thrown when attempting to find an nonexistent column.
         * @param id Id whose lookup failed.
         * @docs-private
         */
        function getTableUnknownColumnError(id) {
          return Error(`Could not find column with id "${id}".`);
        }
        /**
         * Returns an error to be thrown when two column definitions have the same name.
         * @docs-private
         */
        function getTableDuplicateColumnNameError(name) {
          return Error(`Duplicate column definition name provided: "${name}".`);
        }
        /**
         * Returns an error to be thrown when there are multiple rows that are missing a when function.
         * @docs-private
         */
        function getTableMultipleDefaultRowDefsError() {
          return Error(
            `There can only be one default row without a when predicate function.`
          );
        }
        /**
         * Returns an error to be thrown when there are no matching row defs for a particular set of data.
         * @docs-private
         */
        function getTableMissingMatchingRowDefError(data) {
          return Error(
            `Could not find a matching row definition for the` +
              `provided row data: ${JSON.stringify(data)}`
          );
        }
        /**
         * Returns an error to be thrown when there is no row definitions present in the content.
         * @docs-private
         */
        function getTableMissingRowDefsError() {
          return Error(
            "Missing definitions for header, footer, and row; " +
              "cannot determine which columns should be rendered."
          );
        }
        /**
         * Returns an error to be thrown when the data source does not match the compatible types.
         * @docs-private
         */
        function getTableUnknownDataSourceError() {
          return Error(
            `Provided data source did not match an array, Observable, or DataSource`
          );
        }
        /**
         * Returns an error to be thrown when the text column cannot find a parent table to inject.
         * @docs-private
         */
        function getTableTextColumnMissingParentTableError() {
          return Error(
            `Text column could not find a parent table for registration.`
          );
        }
        /**
         * Returns an error to be thrown when a table text column doesn't have a name.
         * @docs-private
         */
        function getTableTextColumnMissingNameError() {
          return Error(`Table text column must have a name.`);
        }

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /** The injection token used to specify the StickyPositioningListener. */
        const STICKY_POSITIONING_LISTENER =
          new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(
            "CDK_SPL"
          );

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
         * tables that animate rows.
         */
        class CdkRecycleRows {}
        CdkRecycleRows.ɵfac = function CdkRecycleRows_Factory(t) {
          return new (t || CdkRecycleRows)();
        };
        CdkRecycleRows.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: CdkRecycleRows,
            selectors: [
              ["cdk-table", "recycleRows", ""],
              ["table", "cdk-table", "", "recycleRows", ""],
            ],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
                  useClass:
                    _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._RecycleViewRepeaterStrategy,
                },
              ]),
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkRecycleRows,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector:
                        "cdk-table[recycleRows], table[cdk-table][recycleRows]",
                      providers: [
                        {
                          provide:
                            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
                          useClass:
                            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._RecycleViewRepeaterStrategy,
                        },
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /**
         * Provides a handle for the table to grab the view container's ng-container to insert data rows.
         * @docs-private
         */
        class DataRowOutlet {
          constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
          }
        }
        DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
          return new (t || DataRowOutlet)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
            )
          );
        };
        DataRowOutlet.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: DataRowOutlet,
            selectors: [["", "rowOutlet", ""]],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              DataRowOutlet,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[rowOutlet]",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
                  },
                ];
              },
              null
            );
        })();
        /**
         * Provides a handle for the table to grab the view container's ng-container to insert the header.
         * @docs-private
         */
        class HeaderRowOutlet {
          constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
          }
        }
        HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
          return new (t || HeaderRowOutlet)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
            )
          );
        };
        HeaderRowOutlet.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: HeaderRowOutlet,
            selectors: [["", "headerRowOutlet", ""]],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              HeaderRowOutlet,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[headerRowOutlet]",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
                  },
                ];
              },
              null
            );
        })();
        /**
         * Provides a handle for the table to grab the view container's ng-container to insert the footer.
         * @docs-private
         */
        class FooterRowOutlet {
          constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
          }
        }
        FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
          return new (t || FooterRowOutlet)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
            )
          );
        };
        FooterRowOutlet.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: FooterRowOutlet,
            selectors: [["", "footerRowOutlet", ""]],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              FooterRowOutlet,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[footerRowOutlet]",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
                  },
                ];
              },
              null
            );
        })();
        /**
         * Provides a handle for the table to grab the view
         * container's ng-container to insert the no data row.
         * @docs-private
         */
        class NoDataRowOutlet {
          constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
          }
        }
        NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) {
          return new (t || NoDataRowOutlet)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
            )
          );
        };
        NoDataRowOutlet.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineDirective"
          ]({
            type: NoDataRowOutlet,
            selectors: [["", "noDataRowOutlet", ""]],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              NoDataRowOutlet,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
                  args: [
                    {
                      selector: "[noDataRowOutlet]",
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
                  },
                ];
              },
              null
            );
        })();
        /**
         * The table template that can be used by the mat-table. Should not be used outside of the
         * material library.
         * @docs-private
         */
        const CDK_TABLE_TEMPLATE =
          // Note that according to MDN, the `caption` element has to be projected as the **first**
          // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
          `
  <ng-content select="caption"></ng-content>
  <ng-content select="colgroup, col"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container noDataRowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
        /**
         * Class used to conveniently type the embedded view ref for rows with a context.
         * @docs-private
         */
        class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_1__.EmbeddedViewRef {}
        /**
         * A data table that can render a header row, data rows, and a footer row.
         * Uses the dataSource input to determine the data to be rendered. The data can be provided either
         * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
         * connect function that will return an Observable stream that emits the data array to render.
         */
        class CdkTable {
          /**
           * Tracking function that will be used to check the differences in data changes. Used similarly
           * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
           * relative to the function to know if a row should be added/removed/moved.
           * Accepts a function that takes two parameters, `index` and `item`.
           */
          get trackBy() {
            return this._trackByFn;
          }
          set trackBy(fn) {
            if (
              (typeof ngDevMode === "undefined" || ngDevMode) &&
              fn != null &&
              typeof fn !== "function"
            ) {
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(
                  fn
                )}.`
              );
            }
            this._trackByFn = fn;
          }
          /**
           * The table's source of data, which can be provided in three ways (in order of complexity):
           *   - Simple data array (each object represents one table row)
           *   - Stream that emits a data array each time the array changes
           *   - `DataSource` object that implements the connect/disconnect interface.
           *
           * If a data array is provided, the table must be notified when the array's objects are
           * added, removed, or moved. This can be done by calling the `renderRows()` function which will
           * render the diff since the last table render. If the data array reference is changed, the table
           * will automatically trigger an update to the rows.
           *
           * When providing an Observable stream, the table will trigger an update automatically when the
           * stream emits a new array of data.
           *
           * Finally, when providing a `DataSource` object, the table will use the Observable stream
           * provided by the connect function and trigger updates when that stream emits new data array
           * values. During the table's ngOnDestroy or when the data source is removed from the table, the
           * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
           * subscriptions registered during the connect process).
           */
          get dataSource() {
            return this._dataSource;
          }
          set dataSource(dataSource) {
            if (this._dataSource !== dataSource) {
              this._switchDataSource(dataSource);
            }
          }
          /**
           * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
           * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
           * dataobject will render the first row that evaluates its when predicate to true, in the order
           * defined in the table, or otherwise the default row which does not have a when predicate.
           */
          get multiTemplateDataRows() {
            return this._multiTemplateDataRows;
          }
          set multiTemplateDataRows(v) {
            this._multiTemplateDataRows = (0,
            _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(
              v
            );
            // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
            // this setter will be invoked before the row outlet has been defined hence the null check.
            if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
              this._forceRenderDataRows();
              this.updateStickyColumnStyles();
            }
          }
          /**
           * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
           * and optimize rendering sticky styles for native tables. No-op for flex tables.
           */
          get fixedLayout() {
            return this._fixedLayout;
          }
          set fixedLayout(v) {
            this._fixedLayout = (0,
            _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(
              v
            );
            // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.
            this._forceRecalculateCellWidths = true;
            this._stickyColumnStylesNeedReset = true;
          }
          constructor(
            _differs,
            _changeDetectorRef,
            _elementRef,
            role,
            _dir,
            _document,
            _platform,
            _viewRepeater,
            _coalescedStyleScheduler,
            _viewportRuler,
            /**
             * @deprecated `_stickyPositioningListener` parameter to become required.
             * @breaking-change 13.0.0
             */
            _stickyPositioningListener,
            /**
             * @deprecated `_ngZone` parameter to become required.
             * @breaking-change 14.0.0
             */
            _ngZone
          ) {
            this._differs = _differs;
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._dir = _dir;
            this._platform = _platform;
            this._viewRepeater = _viewRepeater;
            this._coalescedStyleScheduler = _coalescedStyleScheduler;
            this._viewportRuler = _viewportRuler;
            this._stickyPositioningListener = _stickyPositioningListener;
            this._ngZone = _ngZone;
            /** Subject that emits when the component has been destroyed. */
            this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
            /**
             * Map of all the user's defined columns (header, data, and footer cell template) identified by
             * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
             * any custom column definitions added to `_customColumnDefs`.
             */
            this._columnDefsByName = new Map();
            /**
             * Column definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * column definitions as *its* content child.
             */
            this._customColumnDefs = new Set();
            /**
             * Data row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * built-in data rows as *its* content child.
             */
            this._customRowDefs = new Set();
            /**
             * Header row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * built-in header rows as *its* content child.
             */
            this._customHeaderRowDefs = new Set();
            /**
             * Footer row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
             * built-in footer row as *its* content child.
             */
            this._customFooterRowDefs = new Set();
            /**
             * Whether the header row definition has been changed. Triggers an update to the header row after
             * content is checked. Initialized as true so that the table renders the initial set of rows.
             */
            this._headerRowDefChanged = true;
            /**
             * Whether the footer row definition has been changed. Triggers an update to the footer row after
             * content is checked. Initialized as true so that the table renders the initial set of rows.
             */
            this._footerRowDefChanged = true;
            /**
             * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
             * change.
             */
            this._stickyColumnStylesNeedReset = true;
            /**
             * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
             * `false`, cached values will be used instead. This is only applicable to tables with
             * {@link fixedLayout} enabled. For other tables, cell widths will always be recalculated.
             */
            this._forceRecalculateCellWidths = true;
            /**
             * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
             * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
             * the cached `RenderRow` objects when possible, the row identity is preserved when the data
             * and row template matches, which allows the `IterableDiffer` to check rows by reference
             * and understand which rows are added/moved/removed.
             *
             * Implemented as a map of maps where the first key is the `data: T` object and the second is the
             * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
             * contains an array of created pairs. The array is necessary to handle cases where the data
             * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
             * stored.
             */
            this._cachedRenderRowsMap = new Map();
            /**
             * CSS class added to any row or cell that has sticky positioning applied. May be overridden by
             * table subclasses.
             */
            this.stickyCssClass = "cdk-table-sticky";
            /**
             * Whether to manually add position: sticky to all sticky cell elements. Not needed if
             * the position is set in a selector associated with the value of stickyCssClass. May be
             * overridden by table subclasses
             */
            this.needsPositionStickyOnElement = true;
            /** Whether the no data row is currently showing anything. */
            this._isShowingNoDataRow = false;
            this._multiTemplateDataRows = false;
            this._fixedLayout = false;
            /**
             * Emits when the table completes rendering a set of data rows based on the latest data from the
             * data source, even if the set of rows is empty.
             */
            this.contentChanged =
              new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
            // TODO(andrewseguin): Remove max value as the end index
            //   and instead calculate the view on init and scroll.
            /**
             * Stream containing the latest information on what rows are being displayed on screen.
             * Can be used by the data source to as a heuristic of what data should be provided.
             *
             * @docs-private
             */
            this.viewChange =
              new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject({
                start: 0,
                end: Number.MAX_VALUE,
              });
            if (!role) {
              this._elementRef.nativeElement.setAttribute("role", "table");
            }
            this._document = _document;
            this._isNativeHtmlTable =
              this._elementRef.nativeElement.nodeName === "TABLE";
          }
          ngOnInit() {
            this._setupStickyStyler();
            if (this._isNativeHtmlTable) {
              this._applyNativeTableSections();
            }
            // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
            // the user has provided a custom trackBy, return the result of that function as evaluated
            // with the values of the `RenderRow`'s data and index.
            this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
              return this.trackBy
                ? this.trackBy(dataRow.dataIndex, dataRow.data)
                : dataRow;
            });
            this._viewportRuler
              .change()
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(
                  this._onDestroy
                )
              )
              .subscribe(() => {
                this._forceRecalculateCellWidths = true;
              });
          }
          ngAfterContentChecked() {
            // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
            this._cacheRowDefs();
            this._cacheColumnDefs();
            // Make sure that the user has at least added header, footer, or data row def.
            if (
              !this._headerRowDefs.length &&
              !this._footerRowDefs.length &&
              !this._rowDefs.length &&
              (typeof ngDevMode === "undefined" || ngDevMode)
            ) {
              throw getTableMissingRowDefsError();
            }
            // Render updates if the list of columns have been changed for the header, row, or footer defs.
            const columnsChanged = this._renderUpdatedColumns();
            const rowDefsChanged =
              columnsChanged ||
              this._headerRowDefChanged ||
              this._footerRowDefChanged;
            // Ensure sticky column styles are reset if set to `true` elsewhere.
            this._stickyColumnStylesNeedReset =
              this._stickyColumnStylesNeedReset || rowDefsChanged;
            this._forceRecalculateCellWidths = rowDefsChanged;
            // If the header row definition has been changed, trigger a render to the header row.
            if (this._headerRowDefChanged) {
              this._forceRenderHeaderRows();
              this._headerRowDefChanged = false;
            }
            // If the footer row definition has been changed, trigger a render to the footer row.
            if (this._footerRowDefChanged) {
              this._forceRenderFooterRows();
              this._footerRowDefChanged = false;
            }
            // If there is a data source and row definitions, connect to the data source unless a
            // connection has already been made.
            if (
              this.dataSource &&
              this._rowDefs.length > 0 &&
              !this._renderChangeSubscription
            ) {
              this._observeRenderChanges();
            } else if (this._stickyColumnStylesNeedReset) {
              // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
              // called when it row data arrives. Otherwise, we need to call it proactively.
              this.updateStickyColumnStyles();
            }
            this._checkStickyStates();
          }
          ngOnDestroy() {
            [
              this._rowOutlet.viewContainer,
              this._headerRowOutlet.viewContainer,
              this._footerRowOutlet.viewContainer,
              this._cachedRenderRowsMap,
              this._customColumnDefs,
              this._customRowDefs,
              this._customHeaderRowDefs,
              this._customFooterRowDefs,
              this._columnDefsByName,
            ].forEach((def) => {
              def.clear();
            });
            this._headerRowDefs = [];
            this._footerRowDefs = [];
            this._defaultRowDef = null;
            this._onDestroy.next();
            this._onDestroy.complete();
            if (
              (0,
              _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(
                this.dataSource
              )
            ) {
              this.dataSource.disconnect(this);
            }
          }
          /**
           * Renders rows based on the table's latest set of data, which was either provided directly as an
           * input or retrieved through an Observable stream (directly or from a DataSource).
           * Checks for differences in the data since the last diff to perform only the necessary
           * changes (add/remove/move rows).
           *
           * If the table's data source is a DataSource or Observable, this will be invoked automatically
           * each time the provided Observable stream emits a new data array. Otherwise if your data is
           * an array, this function will need to be called to render any changes.
           */
          renderRows() {
            this._renderRows = this._getAllRenderRows();
            const changes = this._dataDiffer.diff(this._renderRows);
            if (!changes) {
              this._updateNoDataRow();
              this.contentChanged.next();
              return;
            }
            const viewContainer = this._rowOutlet.viewContainer;
            this._viewRepeater.applyChanges(
              changes,
              viewContainer,
              (record, _adjustedPreviousIndex, currentIndex) =>
                this._getEmbeddedViewArgs(record.item, currentIndex),
              (record) => record.item.data,
              (change) => {
                if (
                  change.operation ===
                    1 /* _ViewRepeaterOperation.INSERTED */ &&
                  change.context
                ) {
                  this._renderCellTemplateForItem(
                    change.record.item.rowDef,
                    change.context
                  );
                }
              }
            );
            // Update the meta context of a row's context data (index, count, first, last, ...)
            this._updateRowIndexContext();
            // Update rows that did not get added/removed/moved but may have had their identity changed,
            // e.g. if trackBy matched data on some property but the actual data reference changed.
            changes.forEachIdentityChange((record) => {
              const rowView = viewContainer.get(record.currentIndex);
              rowView.context.$implicit = record.item.data;
            });
            this._updateNoDataRow();
            // Allow the new row data to render before measuring it.
            // @breaking-change 14.0.0 Remove undefined check once _ngZone is required.
            if (
              this._ngZone &&
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone.isInAngularZone()
            ) {
              this._ngZone.onStable
                .pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1),
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(
                    this._onDestroy
                  )
                )
                .subscribe(() => {
                  this.updateStickyColumnStyles();
                });
            } else {
              this.updateStickyColumnStyles();
            }
            this.contentChanged.next();
          }
          /** Adds a column definition that was not included as part of the content children. */
          addColumnDef(columnDef) {
            this._customColumnDefs.add(columnDef);
          }
          /** Removes a column definition that was not included as part of the content children. */
          removeColumnDef(columnDef) {
            this._customColumnDefs.delete(columnDef);
          }
          /** Adds a row definition that was not included as part of the content children. */
          addRowDef(rowDef) {
            this._customRowDefs.add(rowDef);
          }
          /** Removes a row definition that was not included as part of the content children. */
          removeRowDef(rowDef) {
            this._customRowDefs.delete(rowDef);
          }
          /** Adds a header row definition that was not included as part of the content children. */
          addHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs.add(headerRowDef);
            this._headerRowDefChanged = true;
          }
          /** Removes a header row definition that was not included as part of the content children. */
          removeHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs.delete(headerRowDef);
            this._headerRowDefChanged = true;
          }
          /** Adds a footer row definition that was not included as part of the content children. */
          addFooterRowDef(footerRowDef) {
            this._customFooterRowDefs.add(footerRowDef);
            this._footerRowDefChanged = true;
          }
          /** Removes a footer row definition that was not included as part of the content children. */
          removeFooterRowDef(footerRowDef) {
            this._customFooterRowDefs.delete(footerRowDef);
            this._footerRowDefChanged = true;
          }
          /** Sets a no data row definition that was not included as a part of the content children. */
          setNoDataRow(noDataRow) {
            this._customNoDataRow = noDataRow;
          }
          /**
           * Updates the header sticky styles. First resets all applied styles with respect to the cells
           * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
           * automatically called when the header row changes its displayed set of columns, or if its
           * sticky input changes. May be called manually for cases where the cell content changes outside
           * of these events.
           */
          updateStickyHeaderRowStyles() {
            const headerRows = this._getRenderedRows(this._headerRowOutlet);
            const tableElement = this._elementRef.nativeElement;
            // Hide the thead element if there are no header rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.
            const thead = tableElement.querySelector("thead");
            if (thead) {
              thead.style.display = headerRows.length ? "" : "none";
            }
            const stickyStates = this._headerRowDefs.map((def) => def.sticky);
            this._stickyStyler.clearStickyPositioning(headerRows, ["top"]);
            this._stickyStyler.stickRows(headerRows, stickyStates, "top");
            // Reset the dirty state of the sticky input change since it has been used.
            this._headerRowDefs.forEach((def) => def.resetStickyChanged());
          }
          /**
           * Updates the footer sticky styles. First resets all applied styles with respect to the cells
           * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
           * automatically called when the footer row changes its displayed set of columns, or if its
           * sticky input changes. May be called manually for cases where the cell content changes outside
           * of these events.
           */
          updateStickyFooterRowStyles() {
            const footerRows = this._getRenderedRows(this._footerRowOutlet);
            const tableElement = this._elementRef.nativeElement;
            // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.
            const tfoot = tableElement.querySelector("tfoot");
            if (tfoot) {
              tfoot.style.display = footerRows.length ? "" : "none";
            }
            const stickyStates = this._footerRowDefs.map((def) => def.sticky);
            this._stickyStyler.clearStickyPositioning(footerRows, ["bottom"]);
            this._stickyStyler.stickRows(footerRows, stickyStates, "bottom");
            this._stickyStyler.updateStickyFooterContainer(
              this._elementRef.nativeElement,
              stickyStates
            );
            // Reset the dirty state of the sticky input change since it has been used.
            this._footerRowDefs.forEach((def) => def.resetStickyChanged());
          }
          /**
           * Updates the column sticky styles. First resets all applied styles with respect to the cells
           * sticking to the left and right. Then sticky styles are added for the left and right according
           * to the column definitions for each cell in each row. This is automatically called when
           * the data source provides a new set of data or when a column definition changes its sticky
           * input. May be called manually for cases where the cell content changes outside of these events.
           */
          updateStickyColumnStyles() {
            const headerRows = this._getRenderedRows(this._headerRowOutlet);
            const dataRows = this._getRenderedRows(this._rowOutlet);
            const footerRows = this._getRenderedRows(this._footerRowOutlet);
            // For tables not using a fixed layout, the column widths may change when new rows are rendered.
            // In a table using a fixed layout, row content won't affect column width, so sticky styles
            // don't need to be cleared unless either the sticky column config changes or one of the row
            // defs change.
            if (
              (this._isNativeHtmlTable && !this._fixedLayout) ||
              this._stickyColumnStylesNeedReset
            ) {
              // Clear the left and right positioning from all columns in the table across all rows since
              // sticky columns span across all table sections (header, data, footer)
              this._stickyStyler.clearStickyPositioning(
                [...headerRows, ...dataRows, ...footerRows],
                ["left", "right"]
              );
              this._stickyColumnStylesNeedReset = false;
            }
            // Update the sticky styles for each header row depending on the def's sticky state
            headerRows.forEach((headerRow, i) => {
              this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
            });
            // Update the sticky styles for each data row depending on its def's sticky state
            this._rowDefs.forEach((rowDef) => {
              // Collect all the rows rendered with this row definition.
              const rows = [];
              for (let i = 0; i < dataRows.length; i++) {
                if (this._renderRows[i].rowDef === rowDef) {
                  rows.push(dataRows[i]);
                }
              }
              this._addStickyColumnStyles(rows, rowDef);
            });
            // Update the sticky styles for each footer row depending on the def's sticky state
            footerRows.forEach((footerRow, i) => {
              this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
            });
            // Reset the dirty state of the sticky input change since it has been used.
            Array.from(this._columnDefsByName.values()).forEach((def) =>
              def.resetStickyChanged()
            );
          }
          /**
           * Get the list of RenderRow objects to render according to the current list of data and defined
           * row definitions. If the previous list already contained a particular pair, it should be reused
           * so that the differ equates their references.
           */
          _getAllRenderRows() {
            const renderRows = [];
            // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
            // new cache while unused ones can be picked up by garbage collection.
            const prevCachedRenderRows = this._cachedRenderRowsMap;
            this._cachedRenderRowsMap = new Map();
            // For each data object, get the list of rows that should be rendered, represented by the
            // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
            for (let i = 0; i < this._data.length; i++) {
              let data = this._data[i];
              const renderRowsForData = this._getRenderRowsForData(
                data,
                i,
                prevCachedRenderRows.get(data)
              );
              if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
              }
              for (let j = 0; j < renderRowsForData.length; j++) {
                let renderRow = renderRowsForData[j];
                const cache = this._cachedRenderRowsMap.get(renderRow.data);
                if (cache.has(renderRow.rowDef)) {
                  cache.get(renderRow.rowDef).push(renderRow);
                } else {
                  cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
              }
            }
            return renderRows;
          }
          /**
           * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
           * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
           * `(T, CdkRowDef)` pair.
           */
          _getRenderRowsForData(data, dataIndex, cache) {
            const rowDefs = this._getRowDefs(data, dataIndex);
            return rowDefs.map((rowDef) => {
              const cachedRenderRows =
                cache && cache.has(rowDef) ? cache.get(rowDef) : [];
              if (cachedRenderRows.length) {
                const dataRow = cachedRenderRows.shift();
                dataRow.dataIndex = dataIndex;
                return dataRow;
              } else {
                return {
                  data,
                  rowDef,
                  dataIndex,
                };
              }
            });
          }
          /** Update the map containing the content's column definitions. */
          _cacheColumnDefs() {
            this._columnDefsByName.clear();
            const columnDefs = mergeArrayAndSet(
              this._getOwnDefs(this._contentColumnDefs),
              this._customColumnDefs
            );
            columnDefs.forEach((columnDef) => {
              if (
                this._columnDefsByName.has(columnDef.name) &&
                (typeof ngDevMode === "undefined" || ngDevMode)
              ) {
                throw getTableDuplicateColumnNameError(columnDef.name);
              }
              this._columnDefsByName.set(columnDef.name, columnDef);
            });
          }
          /** Update the list of all available row definitions that can be used. */
          _cacheRowDefs() {
            this._headerRowDefs = mergeArrayAndSet(
              this._getOwnDefs(this._contentHeaderRowDefs),
              this._customHeaderRowDefs
            );
            this._footerRowDefs = mergeArrayAndSet(
              this._getOwnDefs(this._contentFooterRowDefs),
              this._customFooterRowDefs
            );
            this._rowDefs = mergeArrayAndSet(
              this._getOwnDefs(this._contentRowDefs),
              this._customRowDefs
            );
            // After all row definitions are determined, find the row definition to be considered default.
            const defaultRowDefs = this._rowDefs.filter((def) => !def.when);
            if (
              !this.multiTemplateDataRows &&
              defaultRowDefs.length > 1 &&
              (typeof ngDevMode === "undefined" || ngDevMode)
            ) {
              throw getTableMultipleDefaultRowDefsError();
            }
            this._defaultRowDef = defaultRowDefs[0];
          }
          /**
           * Check if the header, data, or footer rows have changed what columns they want to display or
           * whether the sticky states have changed for the header or footer. If there is a diff, then
           * re-render that section.
           */
          _renderUpdatedColumns() {
            const columnsDiffReducer = (acc, def) =>
              acc || !!def.getColumnsDiff();
            // Force re-render data rows if the list of column definitions have changed.
            const dataColumnsChanged = this._rowDefs.reduce(
              columnsDiffReducer,
              false
            );
            if (dataColumnsChanged) {
              this._forceRenderDataRows();
            }
            // Force re-render header/footer rows if the list of column definitions have changed.
            const headerColumnsChanged = this._headerRowDefs.reduce(
              columnsDiffReducer,
              false
            );
            if (headerColumnsChanged) {
              this._forceRenderHeaderRows();
            }
            const footerColumnsChanged = this._footerRowDefs.reduce(
              columnsDiffReducer,
              false
            );
            if (footerColumnsChanged) {
              this._forceRenderFooterRows();
            }
            return (
              dataColumnsChanged || headerColumnsChanged || footerColumnsChanged
            );
          }
          /**
           * Switch to the provided data source by resetting the data and unsubscribing from the current
           * render change subscription if one exists. If the data source is null, interpret this by
           * clearing the row outlet. Otherwise start listening for new data.
           */
          _switchDataSource(dataSource) {
            this._data = [];
            if (
              (0,
              _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(
                this.dataSource
              )
            ) {
              this.dataSource.disconnect(this);
            }
            // Stop listening for data from the previous data source.
            if (this._renderChangeSubscription) {
              this._renderChangeSubscription.unsubscribe();
              this._renderChangeSubscription = null;
            }
            if (!dataSource) {
              if (this._dataDiffer) {
                this._dataDiffer.diff([]);
              }
              this._rowOutlet.viewContainer.clear();
            }
            this._dataSource = dataSource;
          }
          /** Set up a subscription for the data provided by the data source. */
          _observeRenderChanges() {
            // If no data source has been set, there is nothing to observe for changes.
            if (!this.dataSource) {
              return;
            }
            let dataStream;
            if (
              (0,
              _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(
                this.dataSource
              )
            ) {
              dataStream = this.dataSource.connect(this);
            } else if (
              (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.isObservable)(
                this.dataSource
              )
            ) {
              dataStream = this.dataSource;
            } else if (Array.isArray(this.dataSource)) {
              dataStream = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(
                this.dataSource
              );
            }
            if (
              dataStream === undefined &&
              (typeof ngDevMode === "undefined" || ngDevMode)
            ) {
              throw getTableUnknownDataSourceError();
            }
            this._renderChangeSubscription = dataStream
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(
                  this._onDestroy
                )
              )
              .subscribe((data) => {
                this._data = data || [];
                this.renderRows();
              });
          }
          /**
           * Clears any existing content in the header row outlet and creates a new embedded view
           * in the outlet using the header row definition.
           */
          _forceRenderHeaderRows() {
            // Clear the header row outlet if any content exists.
            if (this._headerRowOutlet.viewContainer.length > 0) {
              this._headerRowOutlet.viewContainer.clear();
            }
            this._headerRowDefs.forEach((def, i) =>
              this._renderRow(this._headerRowOutlet, def, i)
            );
            this.updateStickyHeaderRowStyles();
          }
          /**
           * Clears any existing content in the footer row outlet and creates a new embedded view
           * in the outlet using the footer row definition.
           */
          _forceRenderFooterRows() {
            // Clear the footer row outlet if any content exists.
            if (this._footerRowOutlet.viewContainer.length > 0) {
              this._footerRowOutlet.viewContainer.clear();
            }
            this._footerRowDefs.forEach((def, i) =>
              this._renderRow(this._footerRowOutlet, def, i)
            );
            this.updateStickyFooterRowStyles();
          }
          /** Adds the sticky column styles for the rows according to the columns' stick states. */
          _addStickyColumnStyles(rows, rowDef) {
            const columnDefs = Array.from(rowDef.columns || []).map(
              (columnName) => {
                const columnDef = this._columnDefsByName.get(columnName);
                if (
                  !columnDef &&
                  (typeof ngDevMode === "undefined" || ngDevMode)
                ) {
                  throw getTableUnknownColumnError(columnName);
                }
                return columnDef;
              }
            );
            const stickyStartStates = columnDefs.map(
              (columnDef) => columnDef.sticky
            );
            const stickyEndStates = columnDefs.map(
              (columnDef) => columnDef.stickyEnd
            );
            this._stickyStyler.updateStickyColumns(
              rows,
              stickyStartStates,
              stickyEndStates,
              !this._fixedLayout || this._forceRecalculateCellWidths
            );
          }
          /** Gets the list of rows that have been rendered in the row outlet. */
          _getRenderedRows(rowOutlet) {
            const renderedRows = [];
            for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
              const viewRef = rowOutlet.viewContainer.get(i);
              renderedRows.push(viewRef.rootNodes[0]);
            }
            return renderedRows;
          }
          /**
           * Get the matching row definitions that should be used for this row data. If there is only
           * one row definition, it is returned. Otherwise, find the row definitions that has a when
           * predicate that returns true with the data. If none return true, return the default row
           * definition.
           */
          _getRowDefs(data, dataIndex) {
            if (this._rowDefs.length == 1) {
              return [this._rowDefs[0]];
            }
            let rowDefs = [];
            if (this.multiTemplateDataRows) {
              rowDefs = this._rowDefs.filter(
                (def) => !def.when || def.when(dataIndex, data)
              );
            } else {
              let rowDef =
                this._rowDefs.find(
                  (def) => def.when && def.when(dataIndex, data)
                ) || this._defaultRowDef;
              if (rowDef) {
                rowDefs.push(rowDef);
              }
            }
            if (
              !rowDefs.length &&
              (typeof ngDevMode === "undefined" || ngDevMode)
            ) {
              throw getTableMissingMatchingRowDefError(data);
            }
            return rowDefs;
          }
          _getEmbeddedViewArgs(renderRow, index) {
            const rowDef = renderRow.rowDef;
            const context = {
              $implicit: renderRow.data,
            };
            return {
              templateRef: rowDef.template,
              context,
              index,
            };
          }
          /**
           * Creates a new row template in the outlet and fills it with the set of cell templates.
           * Optionally takes a context to provide to the row and cells, as well as an optional index
           * of where to place the new row template in the outlet.
           */
          _renderRow(outlet, rowDef, index, context = {}) {
            // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
            const view = outlet.viewContainer.createEmbeddedView(
              rowDef.template,
              context,
              index
            );
            this._renderCellTemplateForItem(rowDef, context);
            return view;
          }
          _renderCellTemplateForItem(rowDef, context) {
            for (let cellTemplate of this._getCellTemplates(rowDef)) {
              if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(
                  cellTemplate,
                  context
                );
              }
            }
            this._changeDetectorRef.markForCheck();
          }
          /**
           * Updates the index-related context for each row to reflect any changes in the index of the rows,
           * e.g. first/last/even/odd.
           */
          _updateRowIndexContext() {
            const viewContainer = this._rowOutlet.viewContainer;
            for (
              let renderIndex = 0, count = viewContainer.length;
              renderIndex < count;
              renderIndex++
            ) {
              const viewRef = viewContainer.get(renderIndex);
              const context = viewRef.context;
              context.count = count;
              context.first = renderIndex === 0;
              context.last = renderIndex === count - 1;
              context.even = renderIndex % 2 === 0;
              context.odd = !context.even;
              if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
              } else {
                context.index = this._renderRows[renderIndex].dataIndex;
              }
            }
          }
          /** Gets the column definitions for the provided row def. */
          _getCellTemplates(rowDef) {
            if (!rowDef || !rowDef.columns) {
              return [];
            }
            return Array.from(rowDef.columns, (columnId) => {
              const column = this._columnDefsByName.get(columnId);
              if (!column && (typeof ngDevMode === "undefined" || ngDevMode)) {
                throw getTableUnknownColumnError(columnId);
              }
              return rowDef.extractCellTemplate(column);
            });
          }
          /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
          _applyNativeTableSections() {
            const documentFragment = this._document.createDocumentFragment();
            const sections = [
              {
                tag: "thead",
                outlets: [this._headerRowOutlet],
              },
              {
                tag: "tbody",
                outlets: [this._rowOutlet, this._noDataRowOutlet],
              },
              {
                tag: "tfoot",
                outlets: [this._footerRowOutlet],
              },
            ];
            for (const section of sections) {
              const element = this._document.createElement(section.tag);
              element.setAttribute("role", "rowgroup");
              for (const outlet of section.outlets) {
                element.appendChild(outlet.elementRef.nativeElement);
              }
              documentFragment.appendChild(element);
            }
            // Use a DocumentFragment so we don't hit the DOM on each iteration.
            this._elementRef.nativeElement.appendChild(documentFragment);
          }
          /**
           * Forces a re-render of the data rows. Should be called in cases where there has been an input
           * change that affects the evaluation of which rows should be rendered, e.g. toggling
           * `multiTemplateDataRows` or adding/removing row definitions.
           */
          _forceRenderDataRows() {
            this._dataDiffer.diff([]);
            this._rowOutlet.viewContainer.clear();
            this.renderRows();
          }
          /**
           * Checks if there has been a change in sticky states since last check and applies the correct
           * sticky styles. Since checking resets the "dirty" state, this should only be performed once
           * during a change detection and after the inputs are settled (after content check).
           */
          _checkStickyStates() {
            const stickyCheckReducer = (acc, d) => {
              return acc || d.hasStickyChanged();
            };
            // Note that the check needs to occur for every definition since it notifies the definition
            // that it can reset its dirty state. Using another operator like `some` may short-circuit
            // remaining definitions and leave them in an unchecked state.
            if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
              this.updateStickyHeaderRowStyles();
            }
            if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
              this.updateStickyFooterRowStyles();
            }
            if (
              Array.from(this._columnDefsByName.values()).reduce(
                stickyCheckReducer,
                false
              )
            ) {
              this._stickyColumnStylesNeedReset = true;
              this.updateStickyColumnStyles();
            }
          }
          /**
           * Creates the sticky styler that will be used for sticky rows and columns. Listens
           * for directionality changes and provides the latest direction to the styler. Re-applies column
           * stickiness when directionality changes.
           */
          _setupStickyStyler() {
            const direction = this._dir ? this._dir.value : "ltr";
            this._stickyStyler = new StickyStyler(
              this._isNativeHtmlTable,
              this.stickyCssClass,
              direction,
              this._coalescedStyleScheduler,
              this._platform.isBrowser,
              this.needsPositionStickyOnElement,
              this._stickyPositioningListener
            );
            (this._dir
              ? this._dir.change
              : (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)()
            )
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(
                  this._onDestroy
                )
              )
              .subscribe((value) => {
                this._stickyStyler.direction = value;
                this.updateStickyColumnStyles();
              });
          }
          /** Filters definitions that belong to this table from a QueryList. */
          _getOwnDefs(items) {
            return items.filter((item) => !item._table || item._table === this);
          }
          /** Creates or removes the no data row, depending on whether any data is being shown. */
          _updateNoDataRow() {
            const noDataRow = this._customNoDataRow || this._noDataRow;
            if (!noDataRow) {
              return;
            }
            const shouldShow = this._rowOutlet.viewContainer.length === 0;
            if (shouldShow === this._isShowingNoDataRow) {
              return;
            }
            const container = this._noDataRowOutlet.viewContainer;
            if (shouldShow) {
              const view = container.createEmbeddedView(noDataRow.templateRef);
              const rootNode = view.rootNodes[0];
              // Only add the attributes if we have a single root node since it's hard
              // to figure out which one to add it to when there are multiple.
              if (
                view.rootNodes.length === 1 &&
                rootNode?.nodeType === this._document.ELEMENT_NODE
              ) {
                rootNode.setAttribute("role", "row");
                rootNode.classList.add(noDataRow._contentClassName);
              }
            } else {
              container.clear();
            }
            this._isShowingNoDataRow = shouldShow;
          }
        }
        CdkTable.ɵfac = function CdkTable_Factory(t) {
          return new (t || CdkTable)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"](
              "role"
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
              8
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.Platform
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _COALESCED_STYLE_SCHEDULER
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ViewportRuler
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              STICKY_POSITIONING_LISTENER,
              12
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone,
              8
            )
          );
        };
        CdkTable.ɵcmp =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineComponent"
          ]({
            type: CdkTable,
            selectors: [["cdk-table"], ["table", "cdk-table", ""]],
            contentQueries: function CdkTable_ContentQueries(
              rf,
              ctx,
              dirIndex
            ) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](
                  dirIndex,
                  CdkNoDataRow,
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](
                  dirIndex,
                  CdkColumnDef,
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](
                  dirIndex,
                  CdkRowDef,
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](
                  dirIndex,
                  CdkHeaderRowDef,
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](
                  dirIndex,
                  CdkFooterRowDef,
                  5
                );
              }
              if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx._noDataRow = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx._contentColumnDefs = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx._contentRowDefs = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx._contentHeaderRowDefs = _t);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx._contentFooterRowDefs = _t);
              }
            },
            viewQuery: function CdkTable_Query(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](
                  DataRowOutlet,
                  7
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](
                  HeaderRowOutlet,
                  7
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](
                  FooterRowOutlet,
                  7
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](
                  NoDataRowOutlet,
                  7
                );
              }
              if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx._rowOutlet = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx._headerRowOutlet = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx._footerRowOutlet = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx._noDataRowOutlet = _t.first);
              }
            },
            hostAttrs: [1, "cdk-table"],
            hostVars: 2,
            hostBindings: function CdkTable_HostBindings(rf, ctx) {
              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"](
                  "cdk-table-fixed-layout",
                  ctx.fixedLayout
                );
              }
            },
            inputs: {
              trackBy: "trackBy",
              dataSource: "dataSource",
              multiTemplateDataRows: "multiTemplateDataRows",
              fixedLayout: "fixedLayout",
            },
            outputs: {
              contentChanged: "contentChanged",
            },
            exportAs: ["cdkTable"],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
                {
                  provide: CDK_TABLE,
                  useExisting: CdkTable,
                },
                {
                  provide:
                    _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
                  useClass:
                    _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._DisposeViewRepeaterStrategy,
                },
                {
                  provide: _COALESCED_STYLE_SCHEDULER,
                  useClass: _CoalescedStyleScheduler,
                },
                // Prevent nested tables from seeing this table's StickyPositioningListener.
                {
                  provide: STICKY_POSITIONING_LISTENER,
                  useValue: null,
                },
              ]),
            ],
            ngContentSelectors: _c1,
            decls: 6,
            vars: 0,
            consts: [
              ["headerRowOutlet", ""],
              ["rowOutlet", ""],
              ["noDataRowOutlet", ""],
              ["footerRowOutlet", ""],
            ],
            template: function CdkTable_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](
                  _c0
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](
                  1,
                  1
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainer"
                ](2, 0)(3, 1)(4, 2)(5, 3);
              }
            },
            dependencies: [
              DataRowOutlet,
              HeaderRowOutlet,
              FooterRowOutlet,
              NoDataRowOutlet,
            ],
            styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
            encapsulation: 2,
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkTable,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
                  args: [
                    {
                      selector: "cdk-table, table[cdk-table]",
                      exportAs: "cdkTable",
                      template: CDK_TABLE_TEMPLATE,
                      host: {
                        class: "cdk-table",
                        "[class.cdk-table-fixed-layout]": "fixedLayout",
                      },
                      encapsulation:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__
                          .ViewEncapsulation.None,
                      changeDetection:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__
                          .ChangeDetectionStrategy.Default,
                      providers: [
                        {
                          provide: CDK_TABLE,
                          useExisting: CdkTable,
                        },
                        {
                          provide:
                            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
                          useClass:
                            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._DisposeViewRepeaterStrategy,
                        },
                        {
                          provide: _COALESCED_STYLE_SCHEDULER,
                          useClass: _CoalescedStyleScheduler,
                        },
                        // Prevent nested tables from seeing this table's StickyPositioningListener.
                        {
                          provide: STICKY_POSITIONING_LISTENER,
                          useValue: null,
                        },
                      ],
                      styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef,
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
                  },
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Attribute,
                        args: ["role"],
                      },
                    ],
                  },
                  {
                    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional,
                      },
                    ],
                  },
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                        args: [
                          _angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT,
                        ],
                      },
                    ],
                  },
                  {
                    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.Platform,
                  },
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                        args: [
                          _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
                        ],
                      },
                    ],
                  },
                  {
                    type: _CoalescedStyleScheduler,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                        args: [_COALESCED_STYLE_SCHEDULER],
                      },
                    ],
                  },
                  {
                    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ViewportRuler,
                  },
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional,
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf,
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                        args: [STICKY_POSITIONING_LISTENER],
                      },
                    ],
                  },
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional,
                      },
                    ],
                  },
                ];
              },
              {
                trackBy: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
                  },
                ],
                dataSource: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
                  },
                ],
                multiTemplateDataRows: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
                  },
                ],
                fixedLayout: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
                  },
                ],
                contentChanged: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
                  },
                ],
                _rowOutlet: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
                    args: [
                      DataRowOutlet,
                      {
                        static: true,
                      },
                    ],
                  },
                ],
                _headerRowOutlet: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
                    args: [
                      HeaderRowOutlet,
                      {
                        static: true,
                      },
                    ],
                  },
                ],
                _footerRowOutlet: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
                    args: [
                      FooterRowOutlet,
                      {
                        static: true,
                      },
                    ],
                  },
                ],
                _noDataRowOutlet: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
                    args: [
                      NoDataRowOutlet,
                      {
                        static: true,
                      },
                    ],
                  },
                ],
                _contentColumnDefs: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
                    args: [
                      CdkColumnDef,
                      {
                        descendants: true,
                      },
                    ],
                  },
                ],
                _contentRowDefs: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
                    args: [
                      CdkRowDef,
                      {
                        descendants: true,
                      },
                    ],
                  },
                ],
                _contentHeaderRowDefs: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
                    args: [
                      CdkHeaderRowDef,
                      {
                        descendants: true,
                      },
                    ],
                  },
                ],
                _contentFooterRowDefs: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
                    args: [
                      CdkFooterRowDef,
                      {
                        descendants: true,
                      },
                    ],
                  },
                ],
                _noDataRow: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
                    args: [CdkNoDataRow],
                  },
                ],
              }
            );
        })();
        /** Utility function that gets a merged list of the entries in an array and values of a Set. */
        function mergeArrayAndSet(array, set) {
          return array.concat(Array.from(set));
        }

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Column that simply shows text content for the header and row cells. Assumes that the table
         * is using the native table implementation (`<table>`).
         *
         * By default, the name of this column will be the header text and data property accessor.
         * The header text can be overridden with the `headerText` input. Cell values can be overridden with
         * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
         * input.
         */
        class CdkTextColumn {
          /** Column name that should be used to reference this column. */
          get name() {
            return this._name;
          }
          set name(name) {
            this._name = name;
            // With Ivy, inputs can be initialized before static query results are
            // available. In that case, we defer the synchronization until "ngOnInit" fires.
            this._syncColumnDefName();
          }
          constructor(
            // `CdkTextColumn` is always requiring a table, but we just assert it manually
            // for better error reporting.
            // tslint:disable-next-line: lightweight-tokens
            _table,
            _options
          ) {
            this._table = _table;
            this._options = _options;
            /** Alignment of the cell values. */
            this.justify = "start";
            this._options = _options || {};
          }
          ngOnInit() {
            this._syncColumnDefName();
            if (this.headerText === undefined) {
              this.headerText = this._createDefaultHeaderText();
            }
            if (!this.dataAccessor) {
              this.dataAccessor =
                this._options.defaultDataAccessor ||
                ((data, name) => data[name]);
            }
            if (this._table) {
              // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
              // since the columnDef will not pick up its content by the time the table finishes checking
              // its content and initializing the rows.
              this.columnDef.cell = this.cell;
              this.columnDef.headerCell = this.headerCell;
              this._table.addColumnDef(this.columnDef);
            } else if (typeof ngDevMode === "undefined" || ngDevMode) {
              throw getTableTextColumnMissingParentTableError();
            }
          }
          ngOnDestroy() {
            if (this._table) {
              this._table.removeColumnDef(this.columnDef);
            }
          }
          /**
           * Creates a default header text. Use the options' header text transformation function if one
           * has been provided. Otherwise simply capitalize the column name.
           */
          _createDefaultHeaderText() {
            const name = this.name;
            if (!name && (typeof ngDevMode === "undefined" || ngDevMode)) {
              throw getTableTextColumnMissingNameError();
            }
            if (this._options && this._options.defaultHeaderTextTransform) {
              return this._options.defaultHeaderTextTransform(name);
            }
            return name[0].toUpperCase() + name.slice(1);
          }
          /** Synchronizes the column definition name with the text column name. */
          _syncColumnDefName() {
            if (this.columnDef) {
              this.columnDef.name = this.name;
            }
          }
        }
        CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
          return new (t || CdkTextColumn)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              CdkTable,
              8
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              TEXT_COLUMN_OPTIONS,
              8
            )
          );
        };
        CdkTextColumn.ɵcmp =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineComponent"
          ]({
            type: CdkTextColumn,
            selectors: [["cdk-text-column"]],
            viewQuery: function CdkTextColumn_Query(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](
                  CdkColumnDef,
                  7
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](
                  CdkCellDef,
                  7
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](
                  CdkHeaderCellDef,
                  7
                );
              }
              if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx.columnDef = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx.cell = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](
                  (_t =
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]())
                ) && (ctx.headerCell = _t.first);
              }
            },
            inputs: {
              name: "name",
              headerText: "headerText",
              dataAccessor: "dataAccessor",
              justify: "justify",
            },
            decls: 3,
            vars: 0,
            consts: [
              ["cdkColumnDef", ""],
              ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"],
              ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"],
              ["cdk-header-cell", ""],
              ["cdk-cell", ""],
            ],
            template: function CdkTextColumn_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerStart"
                ](0, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  1,
                  CdkTextColumn_th_1_Template,
                  2,
                  3,
                  "th",
                  1
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                  2,
                  CdkTextColumn_td_2_Template,
                  2,
                  3,
                  "td",
                  2
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                  "ɵɵelementContainerEnd"
                ]();
              }
            },
            dependencies: [
              CdkCellDef,
              CdkHeaderCellDef,
              CdkColumnDef,
              CdkCell,
              CdkHeaderCell,
            ],
            encapsulation: 2,
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkTextColumn,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
                  args: [
                    {
                      selector: "cdk-text-column",
                      template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                      encapsulation:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__
                          .ViewEncapsulation.None,
                      // Change detection is intentionally not set to OnPush. This component's template will be provided
                      // to the table to be inserted into its view. This is problematic when change detection runs since
                      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                      // mean's the template in the table's view will not have the updated value (and in fact will cause
                      // an ExpressionChangedAfterItHasBeenCheckedError).
                      // tslint:disable-next-line:validate-decorators
                      changeDetection:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__
                          .ChangeDetectionStrategy.Default,
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: CdkTable,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional,
                      },
                    ],
                  },
                  {
                    type: undefined,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional,
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                        args: [TEXT_COLUMN_OPTIONS],
                      },
                    ],
                  },
                ];
              },
              {
                name: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
                  },
                ],
                headerText: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
                  },
                ],
                dataAccessor: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
                  },
                ],
                justify: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
                  },
                ],
                columnDef: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
                    args: [
                      CdkColumnDef,
                      {
                        static: true,
                      },
                    ],
                  },
                ],
                cell: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
                    args: [
                      CdkCellDef,
                      {
                        static: true,
                      },
                    ],
                  },
                ],
                headerCell: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
                    args: [
                      CdkHeaderCellDef,
                      {
                        static: true,
                      },
                    ],
                  },
                ],
              }
            );
        })();

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        const EXPORTED_DECLARATIONS = [
          CdkTable,
          CdkRowDef,
          CdkCellDef,
          CdkCellOutlet,
          CdkHeaderCellDef,
          CdkFooterCellDef,
          CdkColumnDef,
          CdkCell,
          CdkRow,
          CdkHeaderCell,
          CdkFooterCell,
          CdkHeaderRow,
          CdkHeaderRowDef,
          CdkFooterRow,
          CdkFooterRowDef,
          DataRowOutlet,
          HeaderRowOutlet,
          FooterRowOutlet,
          CdkTextColumn,
          CdkNoDataRow,
          CdkRecycleRows,
          NoDataRowOutlet,
        ];
        class CdkTableModule {}
        CdkTableModule.ɵfac = function CdkTableModule_Factory(t) {
          return new (t || CdkTableModule)();
        };
        CdkTableModule.ɵmod =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineNgModule"
          ]({
            type: CdkTableModule,
          });
        CdkTableModule.ɵinj =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineInjector"
          ]({
            imports: [
              _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ScrollingModule,
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
              CdkTableModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
                  args: [
                    {
                      exports: EXPORTED_DECLARATIONS,
                      declarations: EXPORTED_DECLARATIONS,
                      imports: [
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ScrollingModule,
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Generated bundle index. Do not edit.
         */

        /***/
      },

    /***/ 5288:
      /*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/table.mjs ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ MatCell: () => /* binding */ MatCell,
          /* harmony export */ MatCellDef: () => /* binding */ MatCellDef,
          /* harmony export */ MatColumnDef: () => /* binding */ MatColumnDef,
          /* harmony export */ MatFooterCell: () => /* binding */ MatFooterCell,
          /* harmony export */ MatFooterCellDef: () =>
            /* binding */ MatFooterCellDef,
          /* harmony export */ MatFooterRow: () => /* binding */ MatFooterRow,
          /* harmony export */ MatFooterRowDef: () =>
            /* binding */ MatFooterRowDef,
          /* harmony export */ MatHeaderCell: () => /* binding */ MatHeaderCell,
          /* harmony export */ MatHeaderCellDef: () =>
            /* binding */ MatHeaderCellDef,
          /* harmony export */ MatHeaderRow: () => /* binding */ MatHeaderRow,
          /* harmony export */ MatHeaderRowDef: () =>
            /* binding */ MatHeaderRowDef,
          /* harmony export */ MatNoDataRow: () => /* binding */ MatNoDataRow,
          /* harmony export */ MatRecycleRows: () =>
            /* binding */ MatRecycleRows,
          /* harmony export */ MatRow: () => /* binding */ MatRow,
          /* harmony export */ MatRowDef: () => /* binding */ MatRowDef,
          /* harmony export */ MatTable: () => /* binding */ MatTable,
          /* harmony export */ MatTableDataSource: () =>
            /* binding */ MatTableDataSource,
          /* harmony export */ MatTableModule: () =>
            /* binding */ MatTableModule,
          /* harmony export */ MatTextColumn: () => /* binding */ MatTextColumn,
          /* harmony export */ _MatTableDataSource: () =>
            /* binding */ _MatTableDataSource,
          /* harmony export */
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 2560);
        /* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/cdk/table */ 9673);
        /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/cdk/collections */ 1755);
        /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/material/core */ 9121);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! rxjs */ 6317);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! rxjs */ 228);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! rxjs */ 6646);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! rxjs */ 745);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! rxjs */ 6562);
        /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @angular/cdk/coercion */ 8971);
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! rxjs/operators */ 635);

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
         * tables that animate rows.
         */
        const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
        const _c1 = ["caption", "colgroup, col"];
        function MatTextColumn_th_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "th",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r0 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"](
              "text-align",
              ctx_r0.justify
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              " ",
              ctx_r0.headerText,
              " "
            );
          }
        }
        function MatTextColumn_td_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "td",
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const data_r2 = ctx.$implicit;
            const ctx_r1 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"](
              "text-align",
              ctx_r1.justify
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              " ",
              ctx_r1.dataAccessor(data_r2, ctx_r1.name),
              " "
            );
          }
        }
        class MatRecycleRows {}
        MatRecycleRows.ɵfac = function MatRecycleRows_Factory(t) {
          return new (t || MatRecycleRows)();
        };
        MatRecycleRows.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatRecycleRows,
            selectors: [
              ["mat-table", "recycleRows", ""],
              ["table", "mat-table", "", "recycleRows", ""],
            ],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
                  useClass:
                    _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy,
                },
              ]),
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatRecycleRows,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector:
                        "mat-table[recycleRows], table[mat-table][recycleRows]",
                      providers: [
                        {
                          provide:
                            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
                          useClass:
                            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy,
                        },
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        class MatTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable {
          constructor() {
            super(...arguments);
            /** Overrides the sticky CSS class set by the `CdkTable`. */
            this.stickyCssClass = "mat-mdc-table-sticky";
            /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
            this.needsPositionStickyOnElement = false;
          }
          ngOnInit() {
            super.ngOnInit();
            // After ngOnInit, the `CdkTable` has created and inserted the table sections (thead, tbody,
            // tfoot). MDC requires the `mdc-data-table__content` class to be added to the body. Note that
            // this only applies to native tables, because we don't wrap the content of flexbox-based ones.
            if (this._isNativeHtmlTable) {
              const tbody =
                this._elementRef.nativeElement.querySelector("tbody");
              tbody.classList.add("mdc-data-table__content");
            }
          }
        }
        MatTable.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatTable_BaseFactory;
          return function MatTable_Factory(t) {
            return (
              ɵMatTable_BaseFactory ||
              (ɵMatTable_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatTable))
            )(t || MatTable);
          };
        })();
        MatTable.ɵcmp =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineComponent"
          ]({
            type: MatTable,
            selectors: [["mat-table"], ["table", "mat-table", ""]],
            hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
            hostVars: 2,
            hostBindings: function MatTable_HostBindings(rf, ctx) {
              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"](
                  "mdc-table-fixed-layout",
                  ctx.fixedLayout
                );
              }
            },
            exportAs: ["matTable"],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable,
                  useExisting: MatTable,
                },
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE,
                  useExisting: MatTable,
                },
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._COALESCED_STYLE_SCHEDULER,
                  useClass:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._CoalescedStyleScheduler,
                },
                // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
                //  is only included in the build if used.
                {
                  provide:
                    _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
                  useClass:
                    _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy,
                },
                // Prevent nested tables from seeing this table's StickyPositioningListener.
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.STICKY_POSITIONING_LISTENER,
                  useValue: null,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
            ngContentSelectors: _c1,
            decls: 6,
            vars: 0,
            consts: [
              ["headerRowOutlet", ""],
              ["rowOutlet", ""],
              ["noDataRowOutlet", ""],
              ["footerRowOutlet", ""],
            ],
            template: function MatTable_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](
                  _c0
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](
                  1,
                  1
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵelementContainer"
                ](2, 0)(3, 1)(4, 2)(5, 3);
              }
            },
            dependencies: [
              _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.DataRowOutlet,
              _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.HeaderRowOutlet,
              _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.FooterRowOutlet,
              _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.NoDataRowOutlet,
            ],
            styles: [
              ".mdc-data-table{border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__pagination{box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table-sticky{position:sticky !important}.mat-mdc-table{table-layout:auto;white-space:normal}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table .mat-mdc-row:hover,.mat-mdc-table .mat-mdc-footer-row:hover{background-color:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}",
            ],
            encapsulation: 2,
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatTable,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
                  args: [
                    {
                      selector: "mat-table, table[mat-table]",
                      exportAs: "matTable",
                      template:
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE_TEMPLATE,
                      host: {
                        class: "mat-mdc-table mdc-data-table__table",
                        "[class.mdc-table-fixed-layout]": "fixedLayout",
                      },
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable,
                          useExisting: MatTable,
                        },
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE,
                          useExisting: MatTable,
                        },
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._COALESCED_STYLE_SCHEDULER,
                          useClass:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._CoalescedStyleScheduler,
                        },
                        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
                        //  is only included in the build if used.
                        {
                          provide:
                            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
                          useClass:
                            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy,
                        },
                        // Prevent nested tables from seeing this table's StickyPositioningListener.
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.STICKY_POSITIONING_LISTENER,
                          useValue: null,
                        },
                      ],
                      encapsulation:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ViewEncapsulation.None,
                      changeDetection:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ChangeDetectionStrategy.Default,
                      styles: [
                        ".mdc-data-table{border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__pagination{box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table-sticky{position:sticky !important}.mat-mdc-table{table-layout:auto;white-space:normal}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table .mat-mdc-row:hover,.mat-mdc-table .mat-mdc-footer-row:hover{background-color:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}",
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Cell definition for the mat-table.
         * Captures the template of a column's data row cell as well as cell-specific properties.
         */
        class MatCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef {}
        MatCellDef.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatCellDef_BaseFactory;
          return function MatCellDef_Factory(t) {
            return (
              ɵMatCellDef_BaseFactory ||
              (ɵMatCellDef_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatCellDef))
            )(t || MatCellDef);
          };
        })();
        MatCellDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatCellDef,
            selectors: [["", "matCellDef", ""]],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef,
                  useExisting: MatCellDef,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatCellDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "[matCellDef]",
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef,
                          useExisting: MatCellDef,
                        },
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /**
         * Header cell definition for the mat-table.
         * Captures the template of a column's header cell and as well as cell-specific properties.
         */
        class MatHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef {}
        MatHeaderCellDef.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatHeaderCellDef_BaseFactory;
          return function MatHeaderCellDef_Factory(t) {
            return (
              ɵMatHeaderCellDef_BaseFactory ||
              (ɵMatHeaderCellDef_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatHeaderCellDef))
            )(t || MatHeaderCellDef);
          };
        })();
        MatHeaderCellDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatHeaderCellDef,
            selectors: [["", "matHeaderCellDef", ""]],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef,
                  useExisting: MatHeaderCellDef,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatHeaderCellDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "[matHeaderCellDef]",
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef,
                          useExisting: MatHeaderCellDef,
                        },
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /**
         * Footer cell definition for the mat-table.
         * Captures the template of a column's footer cell and as well as cell-specific properties.
         */
        class MatFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef {}
        MatFooterCellDef.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatFooterCellDef_BaseFactory;
          return function MatFooterCellDef_Factory(t) {
            return (
              ɵMatFooterCellDef_BaseFactory ||
              (ɵMatFooterCellDef_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatFooterCellDef))
            )(t || MatFooterCellDef);
          };
        })();
        MatFooterCellDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatFooterCellDef,
            selectors: [["", "matFooterCellDef", ""]],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef,
                  useExisting: MatFooterCellDef,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatFooterCellDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "[matFooterCellDef]",
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef,
                          useExisting: MatFooterCellDef,
                        },
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /**
         * Column definition for the mat-table.
         * Defines a set of cells available for a table column.
         */
        class MatColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef {
          /** Unique name for this column. */
          get name() {
            return this._name;
          }
          set name(name) {
            this._setNameInput(name);
          }
          /**
           * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
           * In the future, this will only add "mat-column-" and columnCssClassName
           * will change from type string[] to string.
           * @docs-private
           */
          _updateColumnCssClassName() {
            super._updateColumnCssClassName();
            this._columnCssClassName.push(
              `mat-column-${this.cssClassFriendlyName}`
            );
          }
        }
        MatColumnDef.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatColumnDef_BaseFactory;
          return function MatColumnDef_Factory(t) {
            return (
              ɵMatColumnDef_BaseFactory ||
              (ɵMatColumnDef_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatColumnDef))
            )(t || MatColumnDef);
          };
        })();
        MatColumnDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatColumnDef,
            selectors: [["", "matColumnDef", ""]],
            inputs: {
              sticky: "sticky",
              name: ["matColumnDef", "name"],
            },
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef,
                  useExisting: MatColumnDef,
                },
                {
                  provide: "MAT_SORT_HEADER_COLUMN_DEF",
                  useExisting: MatColumnDef,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatColumnDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "[matColumnDef]",
                      inputs: ["sticky"],
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef,
                          useExisting: MatColumnDef,
                        },
                        {
                          provide: "MAT_SORT_HEADER_COLUMN_DEF",
                          useExisting: MatColumnDef,
                        },
                      ],
                    },
                  ],
                },
              ],
              null,
              {
                name: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                    args: ["matColumnDef"],
                  },
                ],
              }
            );
        })();
        /** Header cell template container that adds the right classes and role. */
        class MatHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCell {}
        MatHeaderCell.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatHeaderCell_BaseFactory;
          return function MatHeaderCell_Factory(t) {
            return (
              ɵMatHeaderCell_BaseFactory ||
              (ɵMatHeaderCell_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatHeaderCell))
            )(t || MatHeaderCell);
          };
        })();
        MatHeaderCell.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatHeaderCell,
            selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
            hostAttrs: [
              "role",
              "columnheader",
              1,
              "mat-mdc-header-cell",
              "mdc-data-table__header-cell",
            ],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatHeaderCell,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "mat-header-cell, th[mat-header-cell]",
                      host: {
                        class:
                          "mat-mdc-header-cell mdc-data-table__header-cell",
                        role: "columnheader",
                      },
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /** Footer cell template container that adds the right classes and role. */
        class MatFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCell {}
        MatFooterCell.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatFooterCell_BaseFactory;
          return function MatFooterCell_Factory(t) {
            return (
              ɵMatFooterCell_BaseFactory ||
              (ɵMatFooterCell_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatFooterCell))
            )(t || MatFooterCell);
          };
        })();
        MatFooterCell.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatFooterCell,
            selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
            hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatFooterCell,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "mat-footer-cell, td[mat-footer-cell]",
                      host: {
                        class: "mat-mdc-footer-cell mdc-data-table__cell",
                      },
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /** Cell template container that adds the right classes and role. */
        class MatCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCell {}
        MatCell.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatCell_BaseFactory;
          return function MatCell_Factory(t) {
            return (
              ɵMatCell_BaseFactory ||
              (ɵMatCell_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatCell))
            )(t || MatCell);
          };
        })();
        MatCell.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatCell,
            selectors: [["mat-cell"], ["td", "mat-cell", ""]],
            hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatCell,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "mat-cell, td[mat-cell]",
                      host: {
                        class: "mat-mdc-cell mdc-data-table__cell",
                      },
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Header row definition for the mat-table.
         * Captures the header row's template and other header properties such as the columns to display.
         */
        class MatHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef {}
        MatHeaderRowDef.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatHeaderRowDef_BaseFactory;
          return function MatHeaderRowDef_Factory(t) {
            return (
              ɵMatHeaderRowDef_BaseFactory ||
              (ɵMatHeaderRowDef_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatHeaderRowDef))
            )(t || MatHeaderRowDef);
          };
        })();
        MatHeaderRowDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatHeaderRowDef,
            selectors: [["", "matHeaderRowDef", ""]],
            inputs: {
              columns: ["matHeaderRowDef", "columns"],
              sticky: ["matHeaderRowDefSticky", "sticky"],
            },
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef,
                  useExisting: MatHeaderRowDef,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatHeaderRowDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "[matHeaderRowDef]",
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef,
                          useExisting: MatHeaderRowDef,
                        },
                      ],
                      inputs: [
                        "columns: matHeaderRowDef",
                        "sticky: matHeaderRowDefSticky",
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /**
         * Footer row definition for the mat-table.
         * Captures the footer row's template and other footer properties such as the columns to display.
         */
        class MatFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef {}
        MatFooterRowDef.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatFooterRowDef_BaseFactory;
          return function MatFooterRowDef_Factory(t) {
            return (
              ɵMatFooterRowDef_BaseFactory ||
              (ɵMatFooterRowDef_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatFooterRowDef))
            )(t || MatFooterRowDef);
          };
        })();
        MatFooterRowDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatFooterRowDef,
            selectors: [["", "matFooterRowDef", ""]],
            inputs: {
              columns: ["matFooterRowDef", "columns"],
              sticky: ["matFooterRowDefSticky", "sticky"],
            },
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef,
                  useExisting: MatFooterRowDef,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatFooterRowDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "[matFooterRowDef]",
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef,
                          useExisting: MatFooterRowDef,
                        },
                      ],
                      inputs: [
                        "columns: matFooterRowDef",
                        "sticky: matFooterRowDefSticky",
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /**
         * Data row definition for the mat-table.
         * Captures the data row's template and other properties such as the columns to display and
         * a when predicate that describes when this row should be used.
         */
        class MatRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef {}
        MatRowDef.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatRowDef_BaseFactory;
          return function MatRowDef_Factory(t) {
            return (
              ɵMatRowDef_BaseFactory ||
              (ɵMatRowDef_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatRowDef))
            )(t || MatRowDef);
          };
        })();
        MatRowDef.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatRowDef,
            selectors: [["", "matRowDef", ""]],
            inputs: {
              columns: ["matRowDefColumns", "columns"],
              when: ["matRowDefWhen", "when"],
            },
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef,
                  useExisting: MatRowDef,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatRowDef,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "[matRowDef]",
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef,
                          useExisting: MatRowDef,
                        },
                      ],
                      inputs: [
                        "columns: matRowDefColumns",
                        "when: matRowDefWhen",
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /** Footer template container that contains the cell outlet. Adds the right class and role. */
        class MatHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow {}
        MatHeaderRow.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatHeaderRow_BaseFactory;
          return function MatHeaderRow_Factory(t) {
            return (
              ɵMatHeaderRow_BaseFactory ||
              (ɵMatHeaderRow_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatHeaderRow))
            )(t || MatHeaderRow);
          };
        })();
        MatHeaderRow.ɵcmp =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineComponent"
          ]({
            type: MatHeaderRow,
            selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
            hostAttrs: [
              "role",
              "row",
              1,
              "mat-mdc-header-row",
              "mdc-data-table__header-row",
            ],
            exportAs: ["matHeaderRow"],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow,
                  useExisting: MatHeaderRow,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
            decls: 1,
            vars: 0,
            consts: [["cdkCellOutlet", ""]],
            template: function MatHeaderRow_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵelementContainer"
                ](0, 0);
              }
            },
            dependencies: [
              _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet,
            ],
            encapsulation: 2,
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatHeaderRow,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
                  args: [
                    {
                      selector: "mat-header-row, tr[mat-header-row]",
                      template:
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
                      host: {
                        class: "mat-mdc-header-row mdc-data-table__header-row",
                        role: "row",
                      },
                      // See note on CdkTable for explanation on why this uses the default change detection strategy.
                      // tslint:disable-next-line:validate-decorators
                      changeDetection:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ChangeDetectionStrategy.Default,
                      encapsulation:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ViewEncapsulation.None,
                      exportAs: "matHeaderRow",
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow,
                          useExisting: MatHeaderRow,
                        },
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /** Footer template container that contains the cell outlet. Adds the right class and role. */
        class MatFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow {}
        MatFooterRow.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatFooterRow_BaseFactory;
          return function MatFooterRow_Factory(t) {
            return (
              ɵMatFooterRow_BaseFactory ||
              (ɵMatFooterRow_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatFooterRow))
            )(t || MatFooterRow);
          };
        })();
        MatFooterRow.ɵcmp =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineComponent"
          ]({
            type: MatFooterRow,
            selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
            hostAttrs: [
              "role",
              "row",
              1,
              "mat-mdc-footer-row",
              "mdc-data-table__row",
            ],
            exportAs: ["matFooterRow"],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow,
                  useExisting: MatFooterRow,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
            decls: 1,
            vars: 0,
            consts: [["cdkCellOutlet", ""]],
            template: function MatFooterRow_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵelementContainer"
                ](0, 0);
              }
            },
            dependencies: [
              _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet,
            ],
            encapsulation: 2,
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatFooterRow,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
                  args: [
                    {
                      selector: "mat-footer-row, tr[mat-footer-row]",
                      template:
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
                      host: {
                        class: "mat-mdc-footer-row mdc-data-table__row",
                        role: "row",
                      },
                      // See note on CdkTable for explanation on why this uses the default change detection strategy.
                      // tslint:disable-next-line:validate-decorators
                      changeDetection:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ChangeDetectionStrategy.Default,
                      encapsulation:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ViewEncapsulation.None,
                      exportAs: "matFooterRow",
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow,
                          useExisting: MatFooterRow,
                        },
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /** Data row template container that contains the cell outlet. Adds the right class and role. */
        class MatRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow {}
        MatRow.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatRow_BaseFactory;
          return function MatRow_Factory(t) {
            return (
              ɵMatRow_BaseFactory ||
              (ɵMatRow_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatRow))
            )(t || MatRow);
          };
        })();
        MatRow.ɵcmp =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineComponent"
          ]({
            type: MatRow,
            selectors: [["mat-row"], ["tr", "mat-row", ""]],
            hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
            exportAs: ["matRow"],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow,
                  useExisting: MatRow,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
            decls: 1,
            vars: 0,
            consts: [["cdkCellOutlet", ""]],
            template: function MatRow_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵelementContainer"
                ](0, 0);
              }
            },
            dependencies: [
              _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet,
            ],
            encapsulation: 2,
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatRow,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
                  args: [
                    {
                      selector: "mat-row, tr[mat-row]",
                      template:
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
                      host: {
                        class: "mat-mdc-row mdc-data-table__row",
                        role: "row",
                      },
                      // See note on CdkTable for explanation on why this uses the default change detection strategy.
                      // tslint:disable-next-line:validate-decorators
                      changeDetection:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ChangeDetectionStrategy.Default,
                      encapsulation:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ViewEncapsulation.None,
                      exportAs: "matRow",
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow,
                          useExisting: MatRow,
                        },
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();
        /** Row that can be used to display a message when no data is shown in the table. */
        class MatNoDataRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow {
          constructor() {
            super(...arguments);
            this._contentClassName = "mat-mdc-no-data-row";
          }
        }
        MatNoDataRow.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatNoDataRow_BaseFactory;
          return function MatNoDataRow_Factory(t) {
            return (
              ɵMatNoDataRow_BaseFactory ||
              (ɵMatNoDataRow_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatNoDataRow))
            )(t || MatNoDataRow);
          };
        })();
        MatNoDataRow.ɵdir =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineDirective"
          ]({
            type: MatNoDataRow,
            selectors: [["ng-template", "matNoDataRow", ""]],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow,
                  useExisting: MatNoDataRow,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatNoDataRow,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
                  args: [
                    {
                      selector: "ng-template[matNoDataRow]",
                      providers: [
                        {
                          provide:
                            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow,
                          useExisting: MatNoDataRow,
                        },
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Column that simply shows text content for the header and row cells. Assumes that the table
         * is using the native table implementation (`<table>`).
         *
         * By default, the name of this column will be the header text and data property accessor.
         * The header text can be overridden with the `headerText` input. Cell values can be overridden with
         * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
         * input.
         */
        class MatTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTextColumn {}
        MatTextColumn.ɵfac = /* @__PURE__ */ (function () {
          let ɵMatTextColumn_BaseFactory;
          return function MatTextColumn_Factory(t) {
            return (
              ɵMatTextColumn_BaseFactory ||
              (ɵMatTextColumn_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatTextColumn))
            )(t || MatTextColumn);
          };
        })();
        MatTextColumn.ɵcmp =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineComponent"
          ]({
            type: MatTextColumn,
            selectors: [["mat-text-column"]],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵInheritDefinitionFeature"
              ],
            ],
            decls: 3,
            vars: 0,
            consts: [
              ["matColumnDef", ""],
              ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"],
              ["mat-cell", "", 3, "text-align", 4, "matCellDef"],
              ["mat-header-cell", ""],
              ["mat-cell", ""],
            ],
            template: function MatTextColumn_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵelementContainerStart"
                ](0, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                  1,
                  MatTextColumn_th_1_Template,
                  2,
                  3,
                  "th",
                  1
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                  2,
                  MatTextColumn_td_2_Template,
                  2,
                  3,
                  "td",
                  2
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵelementContainerEnd"
                ]();
              }
            },
            dependencies: [
              MatHeaderCellDef,
              MatColumnDef,
              MatCellDef,
              MatHeaderCell,
              MatCell,
            ],
            encapsulation: 2,
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatTextColumn,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
                  args: [
                    {
                      selector: "mat-text-column",
                      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                      encapsulation:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ViewEncapsulation.None,
                      // Change detection is intentionally not set to OnPush. This component's template will be provided
                      // to the table to be inserted into its view. This is problematic when change detection runs since
                      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                      // mean's the template in the table's view will not have the updated value (and in fact will cause
                      // an ExpressionChangedAfterItHasBeenCheckedError).
                      // tslint:disable-next-line:validate-decorators
                      changeDetection:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__
                          .ChangeDetectionStrategy.Default,
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        const EXPORTED_DECLARATIONS = [
          // Table
          MatTable,
          MatRecycleRows,
          // Template defs
          MatHeaderCellDef,
          MatHeaderRowDef,
          MatColumnDef,
          MatCellDef,
          MatRowDef,
          MatFooterCellDef,
          MatFooterRowDef,
          // Cell directives
          MatHeaderCell,
          MatCell,
          MatFooterCell,
          // Row directives
          MatHeaderRow,
          MatRow,
          MatFooterRow,
          MatNoDataRow,
          MatTextColumn,
        ];
        class MatTableModule {}
        MatTableModule.ɵfac = function MatTableModule_Factory(t) {
          return new (t || MatTableModule)();
        };
        MatTableModule.ɵmod =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineNgModule"
          ]({
            type: MatTableModule,
          });
        MatTableModule.ɵinj =
          /* @__PURE__ */ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineInjector"
          ]({
            imports: [
              _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
              _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTableModule,
              _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
            ],
          });
        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
              MatTableModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
                  args: [
                    {
                      imports: [
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTableModule,
                      ],
                      exports: [
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
                        EXPORTED_DECLARATIONS,
                      ],
                      declarations: EXPORTED_DECLARATIONS,
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
         * flaky browser support and the value not being defined in Closure's typings.
         */
        const MAX_SAFE_INTEGER = 9007199254740991;
        /** Shared base class with MDC-based implementation. */
        class _MatTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.DataSource {
          /** Array of data that should be rendered by the table, where each object represents one row. */
          get data() {
            return this._data.value;
          }
          set data(data) {
            data = Array.isArray(data) ? data : [];
            this._data.next(data);
            // Normally the `filteredData` is updated by the re-render
            // subscription, but that won't happen if it's inactive.
            if (!this._renderChangesSubscription) {
              this._filterData(data);
            }
          }
          /**
           * Filter term that should be used to filter out objects from the data array. To override how
           * data objects match to this filter string, provide a custom function for filterPredicate.
           */
          get filter() {
            return this._filter.value;
          }
          set filter(filter) {
            this._filter.next(filter);
            // Normally the `filteredData` is updated by the re-render
            // subscription, but that won't happen if it's inactive.
            if (!this._renderChangesSubscription) {
              this._filterData(this.data);
            }
          }
          /**
           * Instance of the MatSort directive used by the table to control its sorting. Sort changes
           * emitted by the MatSort will trigger an update to the table's rendered data.
           */
          get sort() {
            return this._sort;
          }
          set sort(sort) {
            this._sort = sort;
            this._updateChangeSubscription();
          }
          /**
           * Instance of the paginator component used by the table to control what page of the data is
           * displayed. Page changes emitted by the paginator will trigger an update to the
           * table's rendered data.
           *
           * Note that the data source uses the paginator's properties to calculate which page of data
           * should be displayed. If the paginator receives its properties as template inputs,
           * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
           * initialized before assigning it to this data source.
           */
          get paginator() {
            return this._paginator;
          }
          set paginator(paginator) {
            this._paginator = paginator;
            this._updateChangeSubscription();
          }
          constructor(initialData = []) {
            super();
            /** Stream emitting render data to the table (depends on ordered data changes). */
            this._renderData =
              new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
            /** Stream that emits when a new filter string is set on the data source. */
            this._filter =
              new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject("");
            /** Used to react to internal changes of the paginator that are made by the data source itself. */
            this._internalPageChanges =
              new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
            /**
             * Subscription to the changes that should trigger an update to the table's rendered rows, such
             * as filtering, sorting, pagination, or base data changes.
             */
            this._renderChangesSubscription = null;
            /**
             * Data accessor function that is used for accessing data properties for sorting through
             * the default sortData function.
             * This default function assumes that the sort header IDs (which defaults to the column name)
             * matches the data's properties (e.g. column Xyz represents data['Xyz']).
             * May be set to a custom function for different behavior.
             * @param data Data object that is being accessed.
             * @param sortHeaderId The name of the column that represents the data.
             */
            this.sortingDataAccessor = (data, sortHeaderId) => {
              const value = data[sortHeaderId];
              if (
                (0,
                _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__._isNumberValue)(
                  value
                )
              ) {
                const numberValue = Number(value);
                // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
                // leave them as strings. For more info: https://goo.gl/y5vbSg
                return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
              }
              return value;
            };
            /**
             * Gets a sorted copy of the data array based on the state of the MatSort. Called
             * after changes are made to the filtered data or when sort changes are emitted from MatSort.
             * By default, the function retrieves the active sort and its direction and compares data
             * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
             * of data ordering.
             * @param data The array of data that should be sorted.
             * @param sort The connected MatSort that holds the current sort state.
             */
            this.sortData = (data, sort) => {
              const active = sort.active;
              const direction = sort.direction;
              if (!active || direction == "") {
                return data;
              }
              return data.sort((a, b) => {
                let valueA = this.sortingDataAccessor(a, active);
                let valueB = this.sortingDataAccessor(b, active);
                // If there are data in the column that can be converted to a number,
                // it must be ensured that the rest of the data
                // is of the same type so as not to order incorrectly.
                const valueAType = typeof valueA;
                const valueBType = typeof valueB;
                if (valueAType !== valueBType) {
                  if (valueAType === "number") {
                    valueA += "";
                  }
                  if (valueBType === "number") {
                    valueB += "";
                  }
                }
                // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
                // one value exists while the other doesn't. In this case, existing value should come last.
                // This avoids inconsistent results when comparing values to undefined/null.
                // If neither value exists, return 0 (equal).
                let comparatorResult = 0;
                if (valueA != null && valueB != null) {
                  // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                  if (valueA > valueB) {
                    comparatorResult = 1;
                  } else if (valueA < valueB) {
                    comparatorResult = -1;
                  }
                } else if (valueA != null) {
                  comparatorResult = 1;
                } else if (valueB != null) {
                  comparatorResult = -1;
                }
                return comparatorResult * (direction == "asc" ? 1 : -1);
              });
            };
            /**
             * Checks if a data object matches the data source's filter string. By default, each data object
             * is converted to a string of its properties and returns true if the filter has
             * at least one occurrence in that string. By default, the filter string has its whitespace
             * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
             * filter matching.
             * @param data Data object used to check against the filter.
             * @param filter Filter string that has been set on the data source.
             * @returns Whether the filter matches against the data
             */
            this.filterPredicate = (data, filter) => {
              // Transform the data into a lowercase string of all property values.
              const dataStr = Object.keys(data)
                .reduce((currentTerm, key) => {
                  // Use an obscure Unicode character to delimit the words in the concatenated string.
                  // This avoids matches where the values of two columns combined will match the user's query
                  // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
                  // that has a very low chance of being typed in by somebody in a text field. This one in
                  // particular is "White up-pointing triangle with dot" from
                  // https://en.wikipedia.org/wiki/List_of_Unicode_characters
                  return currentTerm + data[key] + "◬";
                }, "")
                .toLowerCase();
              // Transform the filter by converting it to lowercase and removing whitespace.
              const transformedFilter = filter.trim().toLowerCase();
              return dataStr.indexOf(transformedFilter) != -1;
            };
            this._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(
              initialData
            );
            this._updateChangeSubscription();
          }
          /**
           * Subscribe to changes that should trigger an update to the table's rendered rows. When the
           * changes occur, process the current state of the filter, sort, and pagination along with
           * the provided base data and send it to the table for rendering.
           */
          _updateChangeSubscription() {
            // Sorting and/or pagination should be watched if sort and/or paginator are provided.
            // The events should emit whenever the component emits a change or initializes, or if no
            // component is provided, a stream with just a null event should be provided.
            // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
            // pipeline can progress to the next step. Note that the value from these streams are not used,
            // they purely act as a signal to progress in the pipeline.
            const sortChange = this._sort
              ? (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(
                  this._sort.sortChange,
                  this._sort.initialized
                )
              : (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
            const pageChange = this._paginator
              ? (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(
                  this._paginator.page,
                  this._internalPageChanges,
                  this._paginator.initialized
                )
              : (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
            const dataStream = this._data;
            // Watch for base data or filter changes to provide a filtered set of data.
            const filteredData = (0,
            rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([
              dataStream,
              this._filter,
            ]).pipe(
              (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) =>
                this._filterData(data)
              )
            );
            // Watch for filtered data or sort changes to provide an ordered set of data.
            const orderedData = (0,
            rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([
              filteredData,
              sortChange,
            ]).pipe(
              (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) =>
                this._orderData(data)
              )
            );
            // Watch for ordered data or page changes to provide a paged set of data.
            const paginatedData = (0,
            rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([
              orderedData,
              pageChange,
            ]).pipe(
              (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) =>
                this._pageData(data)
              )
            );
            // Watched for paged data changes and send the result to the table to render.
            this._renderChangesSubscription?.unsubscribe();
            this._renderChangesSubscription = paginatedData.subscribe((data) =>
              this._renderData.next(data)
            );
          }
          /**
           * Returns a filtered data array where each filter object contains the filter string within
           * the result of the filterTermAccessor function. If no filter is set, returns the data array
           * as provided.
           */
          _filterData(data) {
            // If there is a filter string, filter out data that does not contain it.
            // Each data object is converted to a string using the function defined by filterTermAccessor.
            // May be overridden for customization.
            this.filteredData =
              this.filter == null || this.filter === ""
                ? data
                : data.filter((obj) => this.filterPredicate(obj, this.filter));
            if (this.paginator) {
              this._updatePaginator(this.filteredData.length);
            }
            return this.filteredData;
          }
          /**
           * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
           * data array as provided. Uses the default data accessor for data lookup, unless a
           * sortDataAccessor function is defined.
           */
          _orderData(data) {
            // If there is no active sort or direction, return the data without trying to sort.
            if (!this.sort) {
              return data;
            }
            return this.sortData(data.slice(), this.sort);
          }
          /**
           * Returns a paged slice of the provided data array according to the provided paginator's page
           * index and length. If there is no paginator provided, returns the data array as provided.
           */
          _pageData(data) {
            if (!this.paginator) {
              return data;
            }
            const startIndex =
              this.paginator.pageIndex * this.paginator.pageSize;
            return data.slice(startIndex, startIndex + this.paginator.pageSize);
          }
          /**
           * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
           * index does not exceed the paginator's last page. Values are changed in a resolved promise to
           * guard against making property changes within a round of change detection.
           */
          _updatePaginator(filteredDataLength) {
            Promise.resolve().then(() => {
              const paginator = this.paginator;
              if (!paginator) {
                return;
              }
              paginator.length = filteredDataLength;
              // If the page index is set beyond the page, reduce it to the last page.
              if (paginator.pageIndex > 0) {
                const lastPageIndex =
                  Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                const newPageIndex = Math.min(
                  paginator.pageIndex,
                  lastPageIndex
                );
                if (newPageIndex !== paginator.pageIndex) {
                  paginator.pageIndex = newPageIndex;
                  // Since the paginator only emits after user-generated changes,
                  // we need our own stream so we know to should re-render the data.
                  this._internalPageChanges.next();
                }
              }
            });
          }
          /**
           * Used by the MatTable. Called when it connects to the data source.
           * @docs-private
           */
          connect() {
            if (!this._renderChangesSubscription) {
              this._updateChangeSubscription();
            }
            return this._renderData;
          }
          /**
           * Used by the MatTable. Called when it disconnects from the data source.
           * @docs-private
           */
          disconnect() {
            this._renderChangesSubscription?.unsubscribe();
            this._renderChangesSubscription = null;
          }
        }
        /**
         * Data source that accepts a client-side data array and includes native support of filtering,
         * sorting (using MatSort), and pagination (using MatPaginator).
         *
         * Allows for sort customization by overriding sortingDataAccessor, which defines how data
         * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
         * which defines how row data is converted to a string for filter matching.
         *
         * **Note:** This class is meant to be a simple data source to help you get started. As such
         * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
         * interactions. If your app needs to support more advanced use cases, consider implementing your
         * own `DataSource`.
         */
        class MatTableDataSource extends _MatTableDataSource {}

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Generated bundle index. Do not edit.
         */

        /***/
      },
  },
]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map

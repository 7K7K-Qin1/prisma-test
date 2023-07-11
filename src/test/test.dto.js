"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTestDto = void 0;
var class_validator_1 = require("class-validator");
var CreateTestDto = exports.CreateTestDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _transactionHash_decorators;
    var _transactionHash_initializers = [];
    var _tradeTime_decorators;
    var _tradeTime_initializers = [];
    var _TransferFrom_decorators;
    var _TransferFrom_initializers = [];
    var _TransferTo_decorators;
    var _TransferTo_initializers = [];
    var _TransferValue_decorators;
    var _TransferValue_initializers = [];
    return _a = /** @class */ (function () {
            function CreateTestDto() {
                this.transactionHash = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _transactionHash_initializers, void 0));
                this.tradeTime = __runInitializers(this, _tradeTime_initializers, void 0);
                this.TransferFrom = __runInitializers(this, _TransferFrom_initializers, void 0);
                this.TransferTo = __runInitializers(this, _TransferTo_initializers, void 0);
                this.TransferValue = __runInitializers(this, _TransferValue_initializers, void 0);
            }
            return CreateTestDto;
        }()),
        (function () {
            _transactionHash_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _tradeTime_decorators = [(0, class_validator_1.IsDateString)(), (0, class_validator_1.IsNotEmpty)()];
            _TransferFrom_decorators = [(0, class_validator_1.IsString)()];
            _TransferTo_decorators = [(0, class_validator_1.IsString)()];
            _TransferValue_decorators = [(0, class_validator_1.IsString)()];
            __esDecorate(null, null, _transactionHash_decorators, { kind: "field", name: "transactionHash", static: false, private: false, access: { has: function (obj) { return "transactionHash" in obj; }, get: function (obj) { return obj.transactionHash; }, set: function (obj, value) { obj.transactionHash = value; } } }, _transactionHash_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _tradeTime_decorators, { kind: "field", name: "tradeTime", static: false, private: false, access: { has: function (obj) { return "tradeTime" in obj; }, get: function (obj) { return obj.tradeTime; }, set: function (obj, value) { obj.tradeTime = value; } } }, _tradeTime_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _TransferFrom_decorators, { kind: "field", name: "TransferFrom", static: false, private: false, access: { has: function (obj) { return "TransferFrom" in obj; }, get: function (obj) { return obj.TransferFrom; }, set: function (obj, value) { obj.TransferFrom = value; } } }, _TransferFrom_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _TransferTo_decorators, { kind: "field", name: "TransferTo", static: false, private: false, access: { has: function (obj) { return "TransferTo" in obj; }, get: function (obj) { return obj.TransferTo; }, set: function (obj, value) { obj.TransferTo = value; } } }, _TransferTo_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _TransferValue_decorators, { kind: "field", name: "TransferValue", static: false, private: false, access: { has: function (obj) { return "TransferValue" in obj; }, get: function (obj) { return obj.TransferValue; }, set: function (obj, value) { obj.TransferValue = value; } } }, _TransferValue_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();

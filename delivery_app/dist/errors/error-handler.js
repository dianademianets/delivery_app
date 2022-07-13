"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(message, status = 400) {
        super(message);
        this.status = status;
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error-handler.js.map
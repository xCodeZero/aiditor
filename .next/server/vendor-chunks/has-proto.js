"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-proto";
exports.ids = ["vendor-chunks/has-proto"];
exports.modules = {

/***/ "(ssr)/./node_modules/has-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar test = {\n    __proto__: null,\n    foo: {}\n};\nvar $Object = Object;\n/** @type {import('.')} */ module.exports = function hasProto() {\n    // @ts-expect-error: TS errors on an inherited property for some reason\n    return ({\n        __proto__: test\n    }).foo === test.foo && !(test instanceof $Object);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzLXByb3RvL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsT0FBTztJQUNWQyxXQUFXO0lBQ1hDLEtBQUssQ0FBQztBQUNQO0FBRUEsSUFBSUMsVUFBVUM7QUFFZCx3QkFBd0IsR0FDeEJDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQztJQUN6Qix1RUFBdUU7SUFDdkUsT0FBTztRQUFFTixXQUFXRDtJQUFLLEdBQUVFLEdBQUcsS0FBS0YsS0FBS0UsR0FBRyxJQUN2QyxDQUFFRixDQUFBQSxnQkFBZ0JHLE9BQU07QUFDN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haWRpdG9yLy4vbm9kZV9tb2R1bGVzL2hhcy1wcm90by9pbmRleC5qcz82ZjAyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHRlc3QgPSB7XG5cdF9fcHJvdG9fXzogbnVsbCxcblx0Zm9vOiB7fVxufTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1Byb3RvKCkge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yOiBUUyBlcnJvcnMgb24gYW4gaW5oZXJpdGVkIHByb3BlcnR5IGZvciBzb21lIHJlYXNvblxuXHRyZXR1cm4geyBfX3Byb3RvX186IHRlc3QgfS5mb28gPT09IHRlc3QuZm9vXG5cdFx0JiYgISh0ZXN0IGluc3RhbmNlb2YgJE9iamVjdCk7XG59O1xuIl0sIm5hbWVzIjpbInRlc3QiLCJfX3Byb3RvX18iLCJmb28iLCIkT2JqZWN0IiwiT2JqZWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImhhc1Byb3RvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/has-proto/index.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/has-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar test = {\n    __proto__: null,\n    foo: {}\n};\nvar $Object = Object;\n/** @type {import('.')} */ module.exports = function hasProto() {\n    // @ts-expect-error: TS errors on an inherited property for some reason\n    return ({\n        __proto__: test\n    }).foo === test.foo && !(test instanceof $Object);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9oYXMtcHJvdG8vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxPQUFPO0lBQ1ZDLFdBQVc7SUFDWEMsS0FBSyxDQUFDO0FBQ1A7QUFFQSxJQUFJQyxVQUFVQztBQUVkLHdCQUF3QixHQUN4QkMsT0FBT0MsT0FBTyxHQUFHLFNBQVNDO0lBQ3pCLHVFQUF1RTtJQUN2RSxPQUFPO1FBQUVOLFdBQVdEO0lBQUssR0FBRUUsR0FBRyxLQUFLRixLQUFLRSxHQUFHLElBQ3ZDLENBQUVGLENBQUFBLGdCQUFnQkcsT0FBTTtBQUM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2FpZGl0b3IvLi9ub2RlX21vZHVsZXMvaGFzLXByb3RvL2luZGV4LmpzPzZmMDIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVzdCA9IHtcblx0X19wcm90b19fOiBudWxsLFxuXHRmb286IHt9XG59O1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzUHJvdG8oKSB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3I6IFRTIGVycm9ycyBvbiBhbiBpbmhlcml0ZWQgcHJvcGVydHkgZm9yIHNvbWUgcmVhc29uXG5cdHJldHVybiB7IF9fcHJvdG9fXzogdGVzdCB9LmZvbyA9PT0gdGVzdC5mb29cblx0XHQmJiAhKHRlc3QgaW5zdGFuY2VvZiAkT2JqZWN0KTtcbn07XG4iXSwibmFtZXMiOlsidGVzdCIsIl9fcHJvdG9fXyIsImZvbyIsIiRPYmplY3QiLCJPYmplY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiaGFzUHJvdG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/has-proto/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/has-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar test = {\n    __proto__: null,\n    foo: {}\n};\nvar $Object = Object;\n/** @type {import('.')} */ module.exports = function hasProto() {\n    // @ts-expect-error: TS errors on an inherited property for some reason\n    return ({\n        __proto__: test\n    }).foo === test.foo && !(test instanceof $Object);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzLXByb3RvL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsT0FBTztJQUNWQyxXQUFXO0lBQ1hDLEtBQUssQ0FBQztBQUNQO0FBRUEsSUFBSUMsVUFBVUM7QUFFZCx3QkFBd0IsR0FDeEJDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQztJQUN6Qix1RUFBdUU7SUFDdkUsT0FBTztRQUFFTixXQUFXRDtJQUFLLEdBQUVFLEdBQUcsS0FBS0YsS0FBS0UsR0FBRyxJQUN2QyxDQUFFRixDQUFBQSxnQkFBZ0JHLE9BQU07QUFDN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haWRpdG9yLy4vbm9kZV9tb2R1bGVzL2hhcy1wcm90by9pbmRleC5qcz82ZjAyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHRlc3QgPSB7XG5cdF9fcHJvdG9fXzogbnVsbCxcblx0Zm9vOiB7fVxufTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1Byb3RvKCkge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yOiBUUyBlcnJvcnMgb24gYW4gaW5oZXJpdGVkIHByb3BlcnR5IGZvciBzb21lIHJlYXNvblxuXHRyZXR1cm4geyBfX3Byb3RvX186IHRlc3QgfS5mb28gPT09IHRlc3QuZm9vXG5cdFx0JiYgISh0ZXN0IGluc3RhbmNlb2YgJE9iamVjdCk7XG59O1xuIl0sIm5hbWVzIjpbInRlc3QiLCJfX3Byb3RvX18iLCJmb28iLCIkT2JqZWN0IiwiT2JqZWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImhhc1Byb3RvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/has-proto/index.js\n");

/***/ })

};
;
"use strict";
// https://github.com/neknaj/cDom

function elm(type, prop, children) {
    var elm = document.createElement(type);
    var propKeys = Object.keys(prop);
    for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
        var key = propKeys_1[_i];
        if (key === "data") {
            for (var _a = 0, _b = Object.keys(prop[key]); _a < _b.length; _a++) {
                var k = _b[_a];
                elm.dataset[k] = prop[key][k];
            }
        }
        else {
            elm.setAttribute(key, prop[key]);
        }
    }
    for (var _c = 0, children_1 = children; _c < children_1.length; _c++) {
        var child = children_1[_c];
        elm.appendChild(child);
    }
    return elm;
}

function textelm(text) {
    return document.createTextNode(text);
}

Element.prototype.Clear = function () {
    this.innerHTML = "";
    return this;
};

Element.prototype.Add = function (child) {
    this.appendChild(child);
    return this;
};

Element.prototype.Replace = function (children) {
    this.replaceChildren(...children);
    return this;
};

Element.prototype.Listen = function (type, listener, options) {
    this.addEventListener(type, listener, options);
    return this;
};

Element.prototype.addProp = function (prop) {
    var propKeys = Object.keys(prop);
    for (var _i = 0, propKeys_2 = propKeys; _i < propKeys_2.length; _i++) {
        var key = propKeys_2[_i];
        if (key === "data") {
            for (var _a = 0, _b = Object.keys(prop[key]); _a < _b.length; _a++) {
                var k = _b[_a];
                this.dataset[k] = prop[key][k];
            }
        }
        else {
            this.setAttribute(key, prop[key]);
        }
    }
    return this;
};

Element.prototype.addClass = function (name) {
    this.classList.add(name);
    return this;
};

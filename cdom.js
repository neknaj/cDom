function elm(type,prop,children) {
    const elm = document.createElement(type);
    const propkey = Object.keys(prop);
    for (const key of propkey) {
        elm.setAttribute(key,prop[key]);
    }
    for (const child of children) {
        elm.appendChild(child);
    }
    return elm;
}
function textelm(text) {
    return document.createTextNode(text);
}
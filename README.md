# cDom
javascriptで簡単にDOMを生成するためのライブラリ

## サンプルコード
index.html
```html
<!DOCTYPE html>
<title>cDom Sample Page</title>
<meta charset="utf-8">
<script src="cdom.js"></script>
<body></body>
<script>

// DOMを生成する
const dom = elm("div",{width:100,height:30},[
    elm("h1",{},[textelm("cDom.js")]),
    elm("p",{},[
        elm("span",{},[textelm("vanilla-jsで簡単にDOMを作りたいので片手間に作ったライブラリです。")]),
        elm("span",{},[textelm("cDomはcreate-DOMの略です。")]),
    ]),
    elm("p",{},[
        textelm("このライブラリを使うことで、"),
        elm("code",{},[textelm("document.createElement()")]),
        textelm("と"),
        elm("code",{},[textelm("element.setAttribute()")]),
        textelm("と"),
        elm("code",{},[textelm("element.appendChild()")]),
        textelm("を書き続ける苦痛から解放されます。"),
    ]),
]);
// DOMを追加する
document.body.appendChild(dom);

</script>
```

## ライセンス
[MITライセンス](LICENSE) 又は [CC0](https://creativecommons.org/publicdomain/zero/1.0/)  
どちらででもご利用下さい  
<div>
    <h1>cDom.js</h1>
    <p><span>vanilla-jsで簡単にDOMを作りたいので片手間に作ったライブラリです。</span><span>cDomはcreate-DOMの略です。</span></p><p>このライブラリを使うことで、<code>document.createElement()</code>と<code>element.setAttribute()</code>と<code>element.appendChild()</code>を書き続ける苦痛から解放されます。</p>
</div>

## サンプルコード
index.html
```html
<!DOCTYPE html>
<title>cDom Sample Page</title>
<meta charset="utf-8">
<script src="cdom.js"></script>
<script>

function main() {
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
        elm("h2",{},[textelm("サンプルコード")]),
        elm("p",{},[
            elm("code",{},[elm("pre",{},[textelm(main.toString())])]),
        ]),
    ]);
    // DOMを追加する
    document.body.appendChild(dom);
}
window.onload = main;

</script>
```

## ライセンス
[MITライセンス](LICENSE) 又は [CC0](https://creativecommons.org/publicdomain/zero/1.0/)  
どちらででもご利用下さい  
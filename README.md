

## Welcome to GitHub Pages

- [Welcome to GitHub Pages](#welcome-to-github-pages)
  - [Markdown](#markdown)
  - [Jekyll Themes](#jekyll-themes)
  - [Support or Contact](#support-or-contact)

You can use the [editor on GitHub](https://github.com/Foreversun87/Foreversun87.github.io/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Foreversun87/Foreversun87.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

## Drupaldocu

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="generator" content="Asciidoctor 1.5.8">
<meta name="author" content="Patrick Schmidt">
<title>Drupal Tutorial</title>
<style>
/* Asciidoctor default stylesheet | MIT License | http://asciidoctor.org */
/* Remove comment around @import statement below when using as a custom stylesheet */
/*@import "https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic%7CNoto+Serif:400,400italic,700,700italic%7CDroid+Sans+Mono:400,700";*/
article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}
audio,canvas,video{display:inline-block}
audio:not([controls]){display:none;height:0}
[hidden],template{display:none}
script{display:none!important}
html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}
body{margin:0}
a{background:transparent}
a:focus{outline:thin dotted}
a:active,a:hover{outline:0}
h1{font-size:2em;margin:.67em 0}
abbr[title]{border-bottom:1px dotted}
b,strong{font-weight:bold}
dfn{font-style:italic}
hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}
mark{background:#ff0;color:#000}
code,kbd,pre,samp{font-family:monospace;font-size:1em}
pre{white-space:pre-wrap}
q{quotes:"\201C" "\201D" "\2018" "\2019"}
small{font-size:80%}
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sup{top:-.5em}
sub{bottom:-.25em}
img{border:0}
svg:not(:root){overflow:hidden}
figure{margin:0}
fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}
legend{border:0;padding:0}
button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}
button,input{line-height:normal}
button,select{text-transform:none}
button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}
button[disabled],html input[disabled]{cursor:default}
input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}
input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}
input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}
button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}
textarea{overflow:auto;vertical-align:top}
table{border-collapse:collapse;border-spacing:0}
*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}
html,body{font-size:100%}
body{background:#fff;color:rgba(0,0,0,.8);padding:0;margin:0;font-family:"Noto Serif","DejaVu Serif",serif;font-weight:400;font-style:normal;line-height:1;position:relative;cursor:auto}
a:hover{cursor:pointer}
img,object,embed{max-width:100%;height:auto}
object,embed{height:100%}
img{-ms-interpolation-mode:bicubic}
.left{float:left!important}
.right{float:right!important}
.text-left{text-align:left!important}
.text-right{text-align:right!important}
.text-center{text-align:center!important}
.text-justify{text-align:justify!important}
.hide{display:none}
body{-webkit-font-smoothing:antialiased}
img,object,svg{display:inline-block;vertical-align:middle}
textarea{height:auto;min-height:50px}
select{width:100%}
.center{margin-left:auto;margin-right:auto}
.spread{width:100%}
p.lead,.paragraph.lead>p,#preamble>.sectionbody>.paragraph:first-of-type p{font-size:1.21875em;line-height:1.6}
.subheader,.admonitionblock td.content>.title,.audioblock>.title,.exampleblock>.title,.imageblock>.title,.listingblock>.title,.literalblock>.title,.stemblock>.title,.openblock>.title,.paragraph>.title,.quoteblock>.title,table.tableblock>.title,.verseblock>.title,.videoblock>.title,.dlist>.title,.olist>.title,.ulist>.title,.qlist>.title,.hdlist>.title{line-height:1.45;color:#7a2518;font-weight:400;margin-top:0;margin-bottom:.25em}
div,dl,dt,dd,ul,ol,li,h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6,pre,form,p,blockquote,th,td{margin:0;padding:0;direction:ltr}
a{color:#2156a5;text-decoration:underline;line-height:inherit}
a:hover,a:focus{color:#1d4b8f}
a img{border:none}
p{font-family:inherit;font-weight:400;font-size:1em;line-height:1.6;margin-bottom:1.25em;text-rendering:optimizeLegibility}
p aside{font-size:.875em;line-height:1.35;font-style:italic}
h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{font-family:"Open Sans","DejaVu Sans",sans-serif;font-weight:300;font-style:normal;color:#313131;text-rendering:optimizeLegibility;margin-top:1em;margin-bottom:.5em;line-height:1.0125em}
h1 small,h2 small,h3 small,#toctitle small,.sidebarblock>.content>.title small,h4 small,h5 small,h6 small{font-size:60%;color:#363535;line-height:0}
h1{font-size:2.125em}
h2{font-size:1.6875em}
h3,#toctitle,.sidebarblock>.content>.title{font-size:1.375em}
h4,h5{font-size:1.125em}
h6{font-size:1em}
hr{border:solid #ddddd8;border-width:1px 0 0;clear:both;margin:1.25em 0 1.1875em;height:0}
em,i{font-style:italic;line-height:inherit}
strong,b{font-weight:bold;line-height:inherit}
small{font-size:60%;line-height:inherit}
code{font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;font-weight:400;color:rgba(0,0,0,.9)}
ul,ol,dl{font-size:1em;line-height:1.6;margin-bottom:1.25em;list-style-position:outside;font-family:inherit}
ul,ol,ul.no-bullet,ol.no-bullet{margin-left:1.5em}
ul li ul,ul li ol{margin-left:1.25em;margin-bottom:0;font-size:1em}
ul.square li ul,ul.circle li ul,ul.disc li ul{list-style:inherit}
ul.square{list-style-type:square}
ul.circle{list-style-type:circle}
ul.disc{list-style-type:disc}
ul.no-bullet{list-style:none}
ol li ul,ol li ol{margin-left:1.25em;margin-bottom:0}
dl dt{margin-bottom:.3125em;font-weight:bold}
dl dd{margin-bottom:1.25em}
abbr,acronym{text-transform:uppercase;font-size:90%;color:rgba(0,0,0,.8);border-bottom:1px dotted #ddd;cursor:help}
abbr{text-transform:none}
blockquote{margin:0 0 1.25em;padding:.5625em 1.25em 0 1.1875em;border-left:1px solid #ddd}
blockquote cite{display:block;font-size:.9375em;color:rgba(0,0,0,.6)}
blockquote cite:before{content:"\2014 \0020"}
blockquote cite a,blockquote cite a:visited{color:rgba(0,0,0,.6)}
blockquote,blockquote p{line-height:1.6;color:rgba(0,0,0,.85)}
@media only screen and (min-width:768px){h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{line-height:1.2}
h1{font-size:2.75em}
h2{font-size:2.3125em}
h3,#toctitle,.sidebarblock>.content>.title{font-size:1.6875em}
h4{font-size:1.4375em}}
table{background:#fff;margin-bottom:1.25em;border:solid 1px #dedede}
table thead,table tfoot{background:#f7f8f7;font-weight:bold}
table thead tr th,table thead tr td,table tfoot tr th,table tfoot tr td{padding:.5em .625em .625em;font-size:inherit;color:rgba(0,0,0,.8);text-align:left}
table tr th,table tr td{padding:.5625em .625em;font-size:inherit;color:rgba(0,0,0,.8)}
table tr.even,table tr.alt,table tr:nth-of-type(even){background:#f8f8f7}
table thead tr th,table tfoot tr th,table tbody tr td,table tr td,table tfoot tr td{display:table-cell;line-height:1.6}
body{tab-size:4}
h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{line-height:1.2;word-spacing:-.05em}
h1 strong,h2 strong,h3 strong,#toctitle strong,.sidebarblock>.content>.title strong,h4 strong,h5 strong,h6 strong{font-weight:400}
.clearfix:before,.clearfix:after,.float-group:before,.float-group:after{content:" ";display:table}
.clearfix:after,.float-group:after{clear:both}
*:not(pre)>code{font-size:.9375em;font-style:normal!important;letter-spacing:0;padding:.1em .5ex;word-spacing:-.15em;background-color:#f7f7f8;-webkit-border-radius:4px;border-radius:4px;line-height:1.45;text-rendering:optimizeSpeed}
pre,pre>code{line-height:1.45;color:rgba(0,0,0,.9);font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;font-weight:400;text-rendering:optimizeSpeed}
.keyseq{color:rgba(51,51,51,.8)}
kbd{font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;display:inline-block;color:rgba(0,0,0,.8);font-size:.65em;line-height:1.45;background-color:#f7f7f7;border:1px solid #ccc;-webkit-border-radius:3px;border-radius:3px;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.2),0 0 0 .1em white inset;box-shadow:0 1px 0 rgba(0,0,0,.2),0 0 0 .1em #fff inset;margin:0 .15em;padding:.2em .5em;vertical-align:middle;position:relative;top:-.1em;white-space:nowrap}
.keyseq kbd:first-child{margin-left:0}
.keyseq kbd:last-child{margin-right:0}
.menuseq,.menu{color:rgba(0,0,0,.8)}
b.button:before,b.button:after{position:relative;top:-1px;font-weight:400}
b.button:before{content:"[";padding:0 3px 0 2px}
b.button:after{content:"]";padding:0 2px 0 3px}
p a>code:hover{color:rgba(0,0,0,.9)}
#header,#content,#footnotes,#footer{width:100%;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;max-width:62.5em;*zoom:1;position:relative;padding-left:.9375em;padding-right:.9375em}
#header:before,#header:after,#content:before,#content:after,#footnotes:before,#footnotes:after,#footer:before,#footer:after{content:" ";display:table}
#header:after,#content:after,#footnotes:after,#footer:after{clear:both}
#content{margin-top:1.25em}
#content:before{content:none}
#header>h1:first-child{color:rgba(0,0,0,.85);margin-top:2.25rem;margin-bottom:0}
#header>h1:first-child+#toc{margin-top:8px;border-top:1px solid #ddddd8}
#header>h1:only-child,body.toc2 #header>h1:nth-last-child(2){border-bottom:1px solid #ddddd8;padding-bottom:8px}
#header .details{border-bottom:1px solid #ddddd8;line-height:1.45;padding-top:.25em;padding-bottom:.25em;padding-left:.25em;color:rgba(0,0,0,.6);display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-flow:row wrap;-webkit-flex-flow:row wrap;flex-flow:row wrap}
#header .details span:first-child{margin-left:-.125em}
#header .details span.email a{color:rgba(0,0,0,.85)}
#header .details br{display:none}
#header .details br+span:before{content:"\00a0\2013\00a0"}
#header .details br+span.author:before{content:"\00a0\22c5\00a0";color:rgba(0,0,0,.85)}
#header .details br+span#revremark:before{content:"\00a0|\00a0"}
#header #revnumber{text-transform:capitalize}
#header #revnumber:after{content:"\00a0"}
#content>h1:first-child:not([class]){color:rgba(0,0,0,.85);border-bottom:1px solid #ddddd8;padding-bottom:8px;margin-top:0;padding-top:1rem;margin-bottom:1.25rem}
#toc{border-bottom:1px solid #efefed;padding-bottom:.5em}
#toc>ul{margin-left:.125em}
#toc ul.sectlevel0>li>a{font-style:italic}
#toc ul.sectlevel0 ul.sectlevel1{margin:.5em 0}
#toc ul{font-family:"Open Sans","DejaVu Sans",sans-serif;list-style-type:none}
#toc li{line-height:1.3334;margin-top:.3334em}
#toc a{text-decoration:none}
#toc a:active{text-decoration:underline}
#toctitle{color:#7a2518;font-size:1.2em}
@media only screen and (min-width:768px){#toctitle{font-size:1.375em}
body.toc2{padding-left:15em;padding-right:0}
#toc.toc2{margin-top:0!important;background-color:#f8f8f7;position:fixed;width:15em;left:0;top:0;border-right:1px solid #efefed;border-top-width:0!important;border-bottom-width:0!important;z-index:1000;padding:1.25em 1em;height:100%;overflow:auto}
#toc.toc2 #toctitle{margin-top:0;margin-bottom:.8rem;font-size:1.2em}
#toc.toc2>ul{font-size:.9em;margin-bottom:0}
#toc.toc2 ul ul{margin-left:0;padding-left:1em}
#toc.toc2 ul.sectlevel0 ul.sectlevel1{padding-left:0;margin-top:.5em;margin-bottom:.5em}
body.toc2.toc-right{padding-left:0;padding-right:15em}
body.toc2.toc-right #toc.toc2{border-right-width:0;border-left:1px solid #efefed;left:auto;right:0}}
@media only screen and (min-width:1280px){body.toc2{padding-left:20em;padding-right:0}
#toc.toc2{width:20em}
#toc.toc2 #toctitle{font-size:1.375em}
#toc.toc2>ul{font-size:.95em}
#toc.toc2 ul ul{padding-left:1.25em}
body.toc2.toc-right{padding-left:0;padding-right:20em}}
#content #toc{border-style:solid;border-width:1px;border-color:#e0e0dc;margin-bottom:1.25em;padding:1.25em;background:#f8f8f7;-webkit-border-radius:4px;border-radius:4px}
#content #toc>:first-child{margin-top:0}
#content #toc>:last-child{margin-bottom:0}
#footer{max-width:100%;background-color:rgba(0,0,0,.8);padding:1.25em}
#footer-text{color:rgba(255,255,255,.8);line-height:1.44}
.sect1{padding-bottom:.625em}
@media only screen and (min-width:768px){.sect1{padding-bottom:1.25em}}
.sect1+.sect1{border-top:1px solid #efefed}
#content h1>a.anchor,h2>a.anchor,h3>a.anchor,#toctitle>a.anchor,.sidebarblock>.content>.title>a.anchor,h4>a.anchor,h5>a.anchor,h6>a.anchor{position:absolute;z-index:1001;width:1.5ex;margin-left:-1.5ex;display:block;text-decoration:none!important;visibility:hidden;text-align:center;font-weight:400}
#content h1>a.anchor:before,h2>a.anchor:before,h3>a.anchor:before,#toctitle>a.anchor:before,.sidebarblock>.content>.title>a.anchor:before,h4>a.anchor:before,h5>a.anchor:before,h6>a.anchor:before{content:"\00A7";font-size:.85em;display:block;padding-top:.1em}
#content h1:hover>a.anchor,#content h1>a.anchor:hover,h2:hover>a.anchor,h2>a.anchor:hover,h3:hover>a.anchor,#toctitle:hover>a.anchor,.sidebarblock>.content>.title:hover>a.anchor,h3>a.anchor:hover,#toctitle>a.anchor:hover,.sidebarblock>.content>.title>a.anchor:hover,h4:hover>a.anchor,h4>a.anchor:hover,h5:hover>a.anchor,h5>a.anchor:hover,h6:hover>a.anchor,h6>a.anchor:hover{visibility:visible}
#content h1>a.link,h2>a.link,h3>a.link,#toctitle>a.link,.sidebarblock>.content>.title>a.link,h4>a.link,h5>a.link,h6>a.link{color:#ba3925;text-decoration:none}
#content h1>a.link:hover,h2>a.link:hover,h3>a.link:hover,#toctitle>a.link:hover,.sidebarblock>.content>.title>a.link:hover,h4>a.link:hover,h5>a.link:hover,h6>a.link:hover{color:#a53221}
.audioblock,.imageblock,.literalblock,.listingblock,.stemblock,.videoblock{margin-bottom:1.25em}
.admonitionblock td.content>.title,.audioblock>.title,.exampleblock>.title,.imageblock>.title,.listingblock>.title,.literalblock>.title,.stemblock>.title,.openblock>.title,.paragraph>.title,.quoteblock>.title,table.tableblock>.title,.verseblock>.title,.videoblock>.title,.dlist>.title,.olist>.title,.ulist>.title,.qlist>.title,.hdlist>.title{text-rendering:optimizeLegibility;text-align:left;font-family:"Noto Serif","DejaVu Serif",serif;font-size:1rem;font-style:italic}
table.tableblock>caption.title{white-space:nowrap;overflow:visible;max-width:0}
.paragraph.lead>p,#preamble>.sectionbody>.paragraph:first-of-type p{color:rgba(0,0,0,.85)}
table.tableblock #preamble>.sectionbody>.paragraph:first-of-type p{font-size:inherit}
.admonitionblock>table{border-collapse:separate;border:0;background:none;width:100%}
.admonitionblock>table td.icon{text-align:center;width:80px}
.admonitionblock>table td.icon img{max-width:none}
.admonitionblock>table td.icon .title{font-weight:bold;font-family:"Open Sans","DejaVu Sans",sans-serif;text-transform:uppercase}
.admonitionblock>table td.content{padding-left:1.125em;padding-right:1.25em;border-left:1px solid #ddddd8;color:rgba(0,0,0,.6)}
.admonitionblock>table td.content>:last-child>:last-child{margin-bottom:0}
.exampleblock>.content{border-style:solid;border-width:1px;border-color:#e6e6e6;margin-bottom:1.25em;padding:1.25em;background:#fff;-webkit-border-radius:4px;border-radius:4px}
.exampleblock>.content>:first-child{margin-top:0}
.exampleblock>.content>:last-child{margin-bottom:0}
.sidebarblock{border-style:solid;border-width:1px;border-color:#e0e0dc;margin-bottom:1.25em;padding:1.25em;background:#f8f8f7;-webkit-border-radius:4px;border-radius:4px}
.sidebarblock>:first-child{margin-top:0}
.sidebarblock>:last-child{margin-bottom:0}
.sidebarblock>.content>.title{color:#7a2518;margin-top:0;text-align:center}
.exampleblock>.content>:last-child>:last-child,.exampleblock>.content .olist>ol>li:last-child>:last-child,.exampleblock>.content .ulist>ul>li:last-child>:last-child,.exampleblock>.content .qlist>ol>li:last-child>:last-child,.sidebarblock>.content>:last-child>:last-child,.sidebarblock>.content .olist>ol>li:last-child>:last-child,.sidebarblock>.content .ulist>ul>li:last-child>:last-child,.sidebarblock>.content .qlist>ol>li:last-child>:last-child{margin-bottom:0}
.literalblock pre,.listingblock pre:not(.highlight),.listingblock pre[class="highlight"],.listingblock pre[class^="highlight "],.listingblock pre.CodeRay,.listingblock pre.prettyprint{background:#f7f7f8}
.sidebarblock .literalblock pre,.sidebarblock .listingblock pre:not(.highlight),.sidebarblock .listingblock pre[class="highlight"],.sidebarblock .listingblock pre[class^="highlight "],.sidebarblock .listingblock pre.CodeRay,.sidebarblock .listingblock pre.prettyprint{background:#f2f1f1}
.literalblock pre,.literalblock pre[class],.listingblock pre,.listingblock pre[class]{-webkit-border-radius:4px;border-radius:4px;word-wrap:break-word;padding:1em;font-size:.8125em}
.literalblock pre.nowrap,.literalblock pre[class].nowrap,.listingblock pre.nowrap,.listingblock pre[class].nowrap{overflow-x:auto;white-space:pre;word-wrap:normal}
@media only screen and (min-width:768px){.literalblock pre,.literalblock pre[class],.listingblock pre,.listingblock pre[class]{font-size:.90625em}}
@media only screen and (min-width:1280px){.literalblock pre,.literalblock pre[class],.listingblock pre,.listingblock pre[class]{font-size:1em}}
.literalblock.output pre{color:#f7f7f8;background-color:rgba(0,0,0,.9)}
.listingblock pre.highlightjs{padding:0}
.listingblock pre.highlightjs>code{padding:1em;-webkit-border-radius:4px;border-radius:4px}
.listingblock pre.prettyprint{border-width:0}
.listingblock>.content{position:relative}
.listingblock code[data-lang]:before{display:none;content:attr(data-lang);position:absolute;font-size:.75em;top:.425rem;right:.5rem;line-height:1;text-transform:uppercase;color:#999}
.listingblock:hover code[data-lang]:before{display:block}
.listingblock.terminal pre .command:before{content:attr(data-prompt);padding-right:.5em;color:#999}
.listingblock.terminal pre .command:not([data-prompt]):before{content:"$"}
table.pyhltable{border-collapse:separate;border:0;margin-bottom:0;background:none}
table.pyhltable td{vertical-align:top;padding-top:0;padding-bottom:0;line-height:1.45}
table.pyhltable td.code{padding-left:.75em;padding-right:0}
pre.pygments .lineno,table.pyhltable td:not(.code){color:#999;padding-left:0;padding-right:.5em;border-right:1px solid #ddddd8}
pre.pygments .lineno{display:inline-block;margin-right:.25em}
table.pyhltable .linenodiv{background:none!important;padding-right:0!important}
.quoteblock{margin:0 1em 1.25em 1.5em;display:table}
.quoteblock>.title{margin-left:-1.5em;margin-bottom:.75em}
.quoteblock blockquote,.quoteblock blockquote p{color:rgba(0,0,0,.85);font-size:1.15rem;line-height:1.75;word-spacing:.1em;letter-spacing:0;font-style:italic;text-align:justify}
.quoteblock blockquote{margin:0;padding:0;border:0}
.quoteblock blockquote:before{content:"\201c";float:left;font-size:2.75em;font-weight:bold;line-height:.6em;margin-left:-.6em;color:#7a2518;text-shadow:0 1px 2px rgba(0,0,0,.1)}
.quoteblock blockquote>.paragraph:last-child p{margin-bottom:0}
.quoteblock .attribution{margin-top:.5em;margin-right:.5ex;text-align:right}
.quoteblock .quoteblock{margin-left:0;margin-right:0;padding:.5em 0;border-left:3px solid rgba(0,0,0,.6)}
.quoteblock .quoteblock blockquote{padding:0 0 0 .75em}
.quoteblock .quoteblock blockquote:before{display:none}
.verseblock{margin:0 1em 1.25em 1em}
.verseblock pre{font-family:"Open Sans","DejaVu Sans",sans;font-size:1.15rem;color:rgba(0,0,0,.85);font-weight:300;text-rendering:optimizeLegibility}
.verseblock pre strong{font-weight:400}
.verseblock .attribution{margin-top:1.25rem;margin-left:.5ex}
.quoteblock .attribution,.verseblock .attribution{font-size:.9375em;line-height:1.45;font-style:italic}
.quoteblock .attribution br,.verseblock .attribution br{display:none}
.quoteblock .attribution cite,.verseblock .attribution cite{display:block;letter-spacing:-.025em;color:rgba(0,0,0,.6)}
.quoteblock.abstract{margin:0 0 1.25em 0;display:block}
.quoteblock.abstract blockquote,.quoteblock.abstract blockquote p{text-align:left;word-spacing:0}
.quoteblock.abstract blockquote:before,.quoteblock.abstract blockquote p:first-of-type:before{display:none}
table.tableblock{max-width:100%;border-collapse:separate}
table.tableblock td>.paragraph:last-child p>p:last-child,table.tableblock th>p:last-child,table.tableblock td>p:last-child{margin-bottom:0}
table.tableblock,th.tableblock,td.tableblock{border:0 solid #dedede}
table.grid-all th.tableblock,table.grid-all td.tableblock{border-width:0 1px 1px 0}
table.grid-all tfoot>tr>th.tableblock,table.grid-all tfoot>tr>td.tableblock{border-width:1px 1px 0 0}
table.grid-cols th.tableblock,table.grid-cols td.tableblock{border-width:0 1px 0 0}
table.grid-all *>tr>.tableblock:last-child,table.grid-cols *>tr>.tableblock:last-child{border-right-width:0}
table.grid-rows th.tableblock,table.grid-rows td.tableblock{border-width:0 0 1px 0}
table.grid-all tbody>tr:last-child>th.tableblock,table.grid-all tbody>tr:last-child>td.tableblock,table.grid-all thead:last-child>tr>th.tableblock,table.grid-rows tbody>tr:last-child>th.tableblock,table.grid-rows tbody>tr:last-child>td.tableblock,table.grid-rows thead:last-child>tr>th.tableblock{border-bottom-width:0}
table.grid-rows tfoot>tr>th.tableblock,table.grid-rows tfoot>tr>td.tableblock{border-width:1px 0 0 0}
table.frame-all{border-width:1px}
table.frame-sides{border-width:0 1px}
table.frame-topbot{border-width:1px 0}
th.halign-left,td.halign-left{text-align:left}
th.halign-right,td.halign-right{text-align:right}
th.halign-center,td.halign-center{text-align:center}
th.valign-top,td.valign-top{vertical-align:top}
th.valign-bottom,td.valign-bottom{vertical-align:bottom}
th.valign-middle,td.valign-middle{vertical-align:middle}
table thead th,table tfoot th{font-weight:bold}
tbody tr th{display:table-cell;line-height:1.6;background:#f7f8f7}
tbody tr th,tbody tr th p,tfoot tr th,tfoot tr th p{color:rgba(0,0,0,.8);font-weight:bold}
p.tableblock>code:only-child{background:none;padding:0}
p.tableblock{font-size:1em}
td>div.verse{white-space:pre}
ol{margin-left:1.75em}
ul li ol{margin-left:1.5em}
dl dd{margin-left:1.125em}
dl dd:last-child,dl dd:last-child>:last-child{margin-bottom:0}
ol>li p,ul>li p,ul dd,ol dd,.olist .olist,.ulist .ulist,.ulist .olist,.olist .ulist{margin-bottom:.625em}
ul.unstyled,ol.unnumbered,ul.checklist,ul.none{list-style-type:none}
ul.unstyled,ol.unnumbered,ul.checklist{margin-left:.625em}
ul.checklist li>p:first-child>.fa-square-o:first-child,ul.checklist li>p:first-child>.fa-check-square-o:first-child{width:1em;font-size:.85em}
ul.checklist li>p:first-child>input[type="checkbox"]:first-child{width:1em;position:relative;top:1px}
ul.inline{margin:0 auto .625em auto;margin-left:-1.375em;margin-right:0;padding:0;list-style:none;overflow:hidden}
ul.inline>li{list-style:none;float:left;margin-left:1.375em;display:block}
ul.inline>li>*{display:block}
.unstyled dl dt{font-weight:400;font-style:normal}
ol.arabic{list-style-type:decimal}
ol.decimal{list-style-type:decimal-leading-zero}
ol.loweralpha{list-style-type:lower-alpha}
ol.upperalpha{list-style-type:upper-alpha}
ol.lowerroman{list-style-type:lower-roman}
ol.upperroman{list-style-type:upper-roman}
ol.lowergreek{list-style-type:lower-greek}
.hdlist>table,.colist>table{border:0;background:none}
.hdlist>table>tbody>tr,.colist>table>tbody>tr{background:none}
td.hdlist1,td.hdlist2{vertical-align:top;padding:0 .625em}
td.hdlist1{font-weight:bold;padding-bottom:1.25em}
.literalblock+.colist,.listingblock+.colist{margin-top:-.5em}
.colist>table tr>td:first-of-type{padding:0 .75em;line-height:1}
.colist>table tr>td:last-of-type{padding:.25em 0}
.thumb,.th{line-height:0;display:inline-block;border:solid 4px #fff;-webkit-box-shadow:0 0 0 1px #ddd;box-shadow:0 0 0 1px #ddd}
.imageblock.left,.imageblock[style*="float: left"]{margin:.25em .625em 1.25em 0}
.imageblock.right,.imageblock[style*="float: right"]{margin:.25em 0 1.25em .625em}
.imageblock>.title{margin-bottom:0}
.imageblock.thumb,.imageblock.th{border-width:6px}
.imageblock.thumb>.title,.imageblock.th>.title{padding:0 .125em}
.image.left,.image.right{margin-top:.25em;margin-bottom:.25em;display:inline-block;line-height:0}
.image.left{margin-right:.625em}
.image.right{margin-left:.625em}
a.image{text-decoration:none;display:inline-block}
a.image object{pointer-events:none}
sup.footnote,sup.footnoteref{font-size:.875em;position:static;vertical-align:super}
sup.footnote a,sup.footnoteref a{text-decoration:none}
sup.footnote a:active,sup.footnoteref a:active{text-decoration:underline}
#footnotes{padding-top:.75em;padding-bottom:.75em;margin-bottom:.625em}
#footnotes hr{width:20%;min-width:6.25em;margin:-.25em 0 .75em 0;border-width:1px 0 0 0}
#footnotes .footnote{padding:0 .375em 0 .225em;line-height:1.3334;font-size:.875em;margin-left:1.2em;text-indent:-1.05em;margin-bottom:.2em}
#footnotes .footnote a:first-of-type{font-weight:bold;text-decoration:none}
#footnotes .footnote:last-of-type{margin-bottom:0}
#content #footnotes{margin-top:-.625em;margin-bottom:0;padding:.75em 0}
.gist .file-data>table{border:0;background:#fff;width:100%;margin-bottom:0}
.gist .file-data>table td.line-data{width:99%}
div.unbreakable{page-break-inside:avoid}
.big{font-size:larger}
.small{font-size:smaller}
.underline{text-decoration:underline}
.overline{text-decoration:overline}
.line-through{text-decoration:line-through}
.aqua{color:#00bfbf}
.aqua-background{background-color:#00fafa}
.black{color:#000}
.black-background{background-color:#000}
.blue{color:#0000bf}
.blue-background{background-color:#0000fa}
.fuchsia{color:#bf00bf}
.fuchsia-background{background-color:#fa00fa}
.gray{color:#606060}
.gray-background{background-color:#7d7d7d}
.green{color:#006000}
.green-background{background-color:#007d00}
.lime{color:#00bf00}
.lime-background{background-color:#00fa00}
.maroon{color:#600000}
.maroon-background{background-color:#7d0000}
.navy{color:#000060}
.navy-background{background-color:#00007d}
.olive{color:#606000}
.olive-background{background-color:#7d7d00}
.purple{color:#600060}
.purple-background{background-color:#7d007d}
.red{color:#bf0000}
.red-background{background-color:#fa0000}
.silver{color:#909090}
.silver-background{background-color:#bcbcbc}
.teal{color:#006060}
.teal-background{background-color:#007d7d}
.white{color:#bfbfbf}
.white-background{background-color:#fafafa}
.yellow{color:#bfbf00}
.yellow-background{background-color:#fafa00}
span.icon>.fa{cursor:default}
.admonitionblock td.icon [class^="fa icon-"]{font-size:2.5em;text-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:default}
.admonitionblock td.icon .icon-note:before{content:"\f05a";color:#19407c}
.admonitionblock td.icon .icon-tip:before{content:"\f0eb";text-shadow:1px 1px 2px rgba(155,155,0,.8);color:#111}
.admonitionblock td.icon .icon-warning:before{content:"\f071";color:#bf6900}
.admonitionblock td.icon .icon-caution:before{content:"\f06d";color:#bf3400}
.admonitionblock td.icon .icon-important:before{content:"\f06a";color:#bf0000}
.conum[data-value]{display:inline-block;color:#fff!important;background-color:rgba(0,0,0,.8);-webkit-border-radius:100px;border-radius:100px;text-align:center;font-size:.75em;width:1.67em;height:1.67em;line-height:1.67em;font-family:"Open Sans","DejaVu Sans",sans-serif;font-style:normal;font-weight:bold}
.conum[data-value] *{color:#fff!important}
.conum[data-value]+b{display:none}
.conum[data-value]:after{content:attr(data-value)}
pre .conum[data-value]{position:relative;top:-.125em}
b.conum *{color:inherit!important}
.conum:not([data-value]):empty{display:none}
dt,th.tableblock,td.content,div.footnote{text-rendering:optimizeLegibility}
h1,h2,p,td.content,span.alt{letter-spacing:-.01em}
p strong,td.content strong,div.footnote strong{letter-spacing:-.005em}
p,blockquote,dt,td.content,span.alt{font-size:1.0625rem}
p{margin-bottom:1.25rem}
.sidebarblock p,.sidebarblock dt,.sidebarblock td.content,p.tableblock{font-size:1em}
.exampleblock>.content{background-color:#fffef7;border-color:#e0e0dc;-webkit-box-shadow:0 1px 4px #e0e0dc;box-shadow:0 1px 4px #e0e0dc}
.print-only{display:none!important}
@media print{@page{margin:1.25cm .75cm}
*{-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}
a{color:inherit!important;text-decoration:underline!important}
a.bare,a[href^="#"],a[href^="mailto:"]{text-decoration:none!important}
a[href^="http:"]:not(.bare):after,a[href^="https:"]:not(.bare):after{content:"(" attr(href) ")";display:inline-block;font-size:.875em;padding-left:.25em}
abbr[title]:after{content:" (" attr(title) ")"}
pre,blockquote,tr,img,object,svg{page-break-inside:avoid}
thead{display:table-header-group}
svg{max-width:100%}
p,blockquote,dt,td.content{font-size:1em;orphans:3;widows:3}
h2,h3,#toctitle,.sidebarblock>.content>.title{page-break-after:avoid}
#toc,.sidebarblock,.exampleblock>.content{background:none!important}
#toc{border-bottom:1px solid #ddddd8!important;padding-bottom:0!important}
.sect1{padding-bottom:0!important}
.sect1+.sect1{border:0!important}
#header>h1:first-child{margin-top:1.25rem}
body.book #header{text-align:center}
body.book #header>h1:first-child{border:0!important;margin:2.5em 0 1em 0}
body.book #header .details{border:0!important;display:block;padding:0!important}
body.book #header .details span:first-child{margin-left:0!important}
body.book #header .details br{display:block}
body.book #header .details br+span:before{content:none!important}
body.book #toc{border:0!important;text-align:left!important;padding:0!important;margin:0!important}
body.book #toc,body.book #preamble,body.book h1.sect0,body.book .sect1>h2{page-break-before:always}
.listingblock code[data-lang]:before{display:block}
#footer{background:none!important;padding:0 .9375em}
#footer-text{color:rgba(0,0,0,.6)!important;font-size:.9em}
.hide-on-print{display:none!important}
.print-only{display:block!important}
.hide-for-print{display:none!important}
.show-for-print{display:inherit!important}}
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body class="article toc2 toc-left">
<div id="header">
<h1>Drupal Tutorial</h1>
<div class="details">
<span id="author" class="author">Patrick Schmidt</span><br>
</div>
<div id="toc" class="toc2">
<div id="toctitle">Table of Contents</div>
<ul class="sectlevel1">
<li><a href="#_vorbereitungen">1. Vorbereitungen</a>
<ul class="sectlevel2">
<li><a href="#_acquia">1.1. Acquia</a></li>
<li><a href="#_drupal_rootverzeichnis">1.2. Drupal Rootverzeichnis</a></li>
<li><a href="#_gulp">1.3. Gulp</a></li>
</ul>
</li>
<li><a href="#_theming">2. Theming</a>
<ul class="sectlevel2">
<li><a href="#_php_als_backend">2.1. PHP als Backend</a></li>
</ul>
</li>
<li><a href="#_module">3. Module</a></li>
<li><a href="#_twig">4. Twig</a>
<ul class="sectlevel2">
<li><a href="#_attribute">4.1. Attribute</a></li>
<li><a href="#_hook_suggestion_beeinflussen">4.2. Hook-Suggestion beeinflussen</a></li>
</ul>
</li>
<li><a href="#_programmierung">5. Programmierung</a>
<ul class="sectlevel2">
<li><a href="#_modul">5.1. Modul</a></li>
<li><a href="#_form">5.2. Form</a></li>
<li><a href="#_ajax_form">5.3. Ajax-Form</a></li>
</ul>
</li>
</ul>
</div>
</div>
<div id="content">
<div id="preamble">
<div class="sectionbody">
<div class="paragraph">
<p><strong>Wichtige Adressen</strong>:</p>
</div>
<div class="exampleblock">
<div class="content">
<div class="paragraph">
<p><a href="https://api.drupal.org/api/drupal" class="bare">https://api.drupal.org/api/drupal</a> &#8658; Dokumentation</p>
</div>
<div class="paragraph">
<p><a href="https://simplytest.me/" class="bare">https://simplytest.me/</a> &#8658; Drupal-Sandbox</p>
</div>
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_vorbereitungen">1. Vorbereitungen</h2>
<div class="sectionbody">
<div class="sect2">
<h3 id="_acquia">1.1. Acquia</h3>
<div class="paragraph">
<p>Um Drupal zu Entwickeln gibt es die Möglichkeit ein Rundum-Sorglos-Paket in Form von Acquia zu installieren.
Diese Software stellt bereit:</p>
</div>
<div class="ulist">
<ul>
<li>
<p>Web-Server</p>
</li>
<li>
<p>PHPMyAdmin-Server</p>
</li>
<li>
<p>Drush-Console</p>
</li>
<li>
<p>Einfaches erstellen von Backups der Datenbank und Anwendung</p>
</li>
</ul>
</div>
<div class="admonitionblock note">
<table>
<tr>
<td class="icon">
<i class="fa icon-note" title="Note"></i>
</td>
<td class="content">
Download-Link <a href="https://dev.acquia.com/downloads">acquia</a>
</td>
</tr>
</table>
</div>
</div>
<div class="sect2">
<h3 id="_drupal_rootverzeichnis">1.2. Drupal Rootverzeichnis</h3>
<div class="paragraph">
<p>Um das debuggen der Hooks zu ermöglichen und um den Cache zu deaktivieren, ist folgende Datei in Drupal/sites zu ändern:</p>
</div>
<div class="videoblock">
<div class="content">
<video src="debugAktivieren.mp4" width="640" height="400" controls>
Your browser does not support the video tag.
</video>
</div>
</div>
<div class="paragraph">
<p><strong>Drupal/sites/development.services.yml</strong>:</p>
</div>
<div class="listingblock">
<div class="title">development.services.yml</div>
<div class="content">
<pre class="highlightjs highlight"><code class="language-yml hljs" data-lang="yml"># Local development services.
#
# To activate this feature, follow the instructions at the top of the
# 'example.settings.local.php' file, which sits next to this file.
parameters:
  http.response.debug_cacheability_headers: true
  twig.config:
    debug: true
    auto_reload: true
    cache: false
services:
  cache.backend.null:
    class: Drupal\Core\Cache\NullBackendFactory</code></pre>
</div>
</div>
<div class="admonitionblock note">
<table>
<tr>
<td class="icon">
<i class="fa icon-note" title="Note"></i>
</td>
<td class="content">
Ebenfalls empfehlen möchte ich hier <a href="https://www.drupal.org/project/devel">Devel-Debugging</a> welches eine umfassende Analyse von Drupal ermöglicht.
</td>
</tr>
</table>
</div>
<div class="paragraph">
<p><strong>Drupal/sites/example.settings.local.php</strong></p>
</div>
<div class="paragraph">
<p>Die Datei ins Verzeichnis Drupal/sites/default/ kopieren und umbenennen in settings.local.php</p>
</div>
</div>
<div class="sect2">
<h3 id="_gulp">1.3. Gulp</h3>
<div class="paragraph">
<p>Gulp ist ein Datei-Steaming-Dienst. Mit Gulp lässt sich die Arbeit mit CSS / JS / SASS deutlich vereinfachen:</p>
</div>
<div class="ulist">
<ul>
<li>
<p>Autoreload</p>
</li>
<li>
<p>Autokomplilieren der Dateien, sogar direkt in *.min</p>
</li>
<li>
<p>Kein externer Komplilierer nötig</p>
</li>
<li>
<p>Importieren von JS-Bibliotheken [ über (import jQuery from jQuery) nach Installation über z.B. npm]</p>
</li>
<li>
<p>Struktur von CSS und JS durch Maps</p>
</li>
</ul>
</div>
<div class="admonitionblock note">
<table>
<tr>
<td class="icon">
<i class="fa icon-note" title="Note"></i>
</td>
<td class="content">
Siehe hierzu <a href="http://blog2.dd:8083/node/318">Gulp</a>
</td>
</tr>
</table>
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_theming">2. Theming</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Das Theming ist ein Bereich, den ich erst jetzt richtig realisiere. Jedoch hängen hiermit auch die verwendeten Templates ab. Diese Mechanik muss bewusst sein, wenn man Drupal beherrschen möchte. Dieser Bereich wird zukünftig wohl einen hohen Stellenwert bei mir genießen.</p>
</div>
<div class="admonitionblock note">
<table>
<tr>
<td class="icon">
<i class="fa icon-note" title="Note"></i>
</td>
<td class="content">
<a href="https://www.drupal.org/docs/8/theming">Theming</a>
</td>
</tr>
</table>
</div>
<div class="sect2">
<h3 id="_php_als_backend">2.1. PHP als Backend</h3>
<div class="paragraph">
<p>Das BackEnd in Drupal ist in PHP geschrieben.</p>
</div>
<div class="admonitionblock note">
<table>
<tr>
<td class="icon">
<i class="fa icon-note" title="Note"></i>
</td>
<td class="content">
PHP-Tutorial <a href="http://blog2.dd:8083/node/313">PHP</a>
</td>
</tr>
</table>
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_module">3. Module</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Drupal biete ein reichhaltige Palette an weiterführenden Modulen die einfach in Drupal installiert und aktiviert werden können. Eine andere Möglichkeit besteht, eigene Module zu programmieren welche jedoch PHP-Kenntnisse vorraussetzt.</p>
</div>
<div class="admonitionblock note">
<table>
<tr>
<td class="icon">
<i class="fa icon-note" title="Note"></i>
</td>
<td class="content">
<a href="https://www.drupal.org/docs/8/modules">Module</a>
</td>
</tr>
</table>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_twig">4. Twig</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Twig ist ein PHP-Framework welches von Drupal verwendet wird. <a href="https://twig.symfony.com/">Twig</a></p>
</div>
<div class="sect2">
<h3 id="_attribute">4.1. Attribute</h3>
<div class="paragraph">
<p>Um zum Beispiel einem Div ein Attribut hinzuzufügen, sollte man dies nicht Hard-Codieren, sondern dem bestehenden Code anhängen. Der Source-Code gibt ein Beispiel.</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-twig hljs" data-lang="twig">&lt;div {{ attributes.addClass('content-info') }}&gt;</code></pre>
</div>
</div>
<div class="paragraph">
<p>Die Klasse 'content-info' wird den bestehenden Attributen angehängt.</p>
</div>
</div>
<div class="sect2">
<h3 id="_hook_suggestion_beeinflussen">4.2. Hook-Suggestion beeinflussen</h3>
<div class="paragraph">
<p>Um einen eigenen Hook definieren zu können, folgendes in projectName.theme hinzufügen.
Folgendes Beispiel wird zu page ein eigener hook: page__foreversun hinzugefügt.</p>
</div>
<div id="src-listing" class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-php hljs" data-lang="php">&lt;?php
/**
 * Fügt einen eigene Hook-Suggestion hinzu!
 */
function foreversun_theme_suggestions_alter(array &amp;$suggestions, array $variable, $hook){
    if($hook == 'page'){
        $suggestions[] = 'page__foreversun';
    }
}</code></pre>
</div>
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_programmierung">5. Programmierung</h2>
<div class="sectionbody">
<div class="paragraph">
<p>In Drupal kann bei Bedarf und Kenntnisstand alles selbst Programmiert werden. Die folgenden Beispiele habe ich von <a href="https://www.youtube.com/channel/UCn0rV2xX-qtbEbCFVSFveww">Drupal_up</a></p>
</div>
<div class="paragraph">
<p>Dies hier ist reine Backend-Anwendung und setzt PHP-Kenntnisse vorraus.</p>
</div>
<div class="paragraph">
<p>Gute Tutorials sind:</p>
</div>
<div class="ulist">
<ul>
<li>
<p><a href="https://www.youtube.com/user/watcAndLearnTuts/featured">watch&amp;learn</a></p>
</li>
<li>
<p><a href="https://www.youtube.com/channel/UCn0rV2xX-qtbEbCFVSFveww">Drupal_up</a></p>
</li>
<li>
<p><a href="https://www.youtube.com/user/webwashnet">webwash</a></p>
</li>
</ul>
</div>
<div class="sect2">
<h3 id="_modul">5.1. Modul</h3>
<div class="paragraph">
<p>In Extend wird das Modul aktiviert. Der Ordner für das custom-Modul wird in \Modules im Drupal-Verzeichnis angelegt und die aufgeführten Dateien dort erstellt und ergänzt.</p>
</div>
<div class="sect3">
<h4 id="_modul_abhängigkeiten_fehlerhaft">5.1.1. Modul-Abhängigkeiten fehlerhaft</h4>
<div class="paragraph">
<p>Das Modul hilft: <a href="https://www.drupal.org/project/module_missing_message_fixer" class="bare">https://www.drupal.org/project/module_missing_message_fixer</a></p>
</div>
</div>
<div class="sect3">
<h4 id="_testmodul_controller_info_yml">5.1.2. testModul_controller.info.yml</h4>
<div class="paragraph">
<p>In dieser Datei werden die Informationen für das Modul angegeben, welche in Drupal in Extend angezeigt werden.</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-yml hljs" data-lang="yml">name: testModul Controller with template
description: TestModul mit Controller und Template
type: module
core: 8.x</code></pre>
</div>
</div>
</div>
<div class="sect3">
<h4 id="_testmodul_controller_module">5.1.3. testModul_controller.module</h4>
<div class="paragraph">
<p>In dieser Datei wurde der hook_theme() implementiert, welcher bei der Ausgabe im HTML-Dokument ausgegeben wird.</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-php hljs" data-lang="php">&lt;?php
/**
 * Implementing hook_theme().
 */
function testModul_controller_theme($existing, $type, $theme, $path){
    return array(
        'article_list1' =&gt; array(
            'variables' =&gt; array('items' =&gt; array(), 'title' =&gt; '')
        )
    );
}</code></pre>
</div>
</div>
</div>
<div class="sect3">
<h4 id="_testmodul_controller_routing_yml">5.1.4. testModul_controller.routing.yml</h4>
<div class="paragraph">
<p>Hier werden Informationenstandards wie, wie das Modul erreicht werden kann, angegeben. Z.B. den Pfad, wo befindet sich der Controller, requirements etc.</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-yml hljs" data-lang="yml">testModul.article_list:
  path: '/testModul/articles'
  defaults:
    _controller: '\Drupal\testModul_controller\Controller\ArticleController::page'
    _title: 'Our custom Article list'
  requirements:
    _permission: 'access content'</code></pre>
</div>
</div>
</div>
<div class="sect3">
<h4 id="_testmodul_controllersrccontrollerarticlecontroller_php">5.1.5. testModul_controller/src/Controller/ArticleController.php</h4>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-php hljs" data-lang="php">&lt;?php

namespace Drupal\testModul_controller\Controller;

class ArticleController{

    //Rendering of our Controller
    public function page(){

        $items = array(
            array('content' =&gt; 'Article one'),
            array('content' =&gt; 'Article two'),
            array('content' =&gt; 'Article three'),
            array('content' =&gt; 'Article four'),
        );

        return array(
            '#theme' =&gt; 'article_list1',
            '#items' =&gt; $items,
            '#title' =&gt; 'Our article list1'
        );
    }
}</code></pre>
</div>
</div>
</div>
<div class="sect3">
<h4 id="_testmodul_controllerarticle_list_html_twig">5.1.6. testModul_controller/article-list.html.twig</h4>
<div class="paragraph">
<p>Hier wird die Liste ausgegeben und formatiert</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-twig hljs" data-lang="twig">&lt;h4&gt;{{ title }}&lt;/h4&gt;
&lt;ul&gt;
{% for article in items %}
&lt;li&gt;{{article.content}}&lt;/li&gt;
{% endfor %}
&lt;/ul&gt;</code></pre>
</div>
</div>
</div>
</div>
<div class="sect2">
<h3 id="_form">5.2. Form</h3>
<div class="paragraph">
<p>In Extend wird die Form aktiviert!</p>
</div>
<div class="sect3">
<h4 id="_testform_info_yml">5.2.1. testForm.info.yml</h4>
<div class="paragraph">
<p>In dieser Datei werden die Informationen für die Form angegeben, welche in Drupal in Extend angezeigt werden.</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-yml hljs" data-lang="yml">name: testForm
description: custom Form
type: module
core: 8.x</code></pre>
</div>
</div>
</div>
<div class="sect3">
<h4 id="_testform_routing_yml">5.2.2. testForm.routing.yml</h4>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-yml hljs" data-lang="yml">testForm.simple_form:
  path: 'simple-form'
  defaults:
    _form: '\Drupal\testForm\Form\SimpleForm'
    _title: 'Our cool form'
  requirements:
    _permission: 'access content'</code></pre>
</div>
</div>
</div>
<div class="sect3">
<h4 id="_testformsrcformsimpleform_php">5.2.3. testForm/src/Form/SimpleForm.php</h4>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-php hljs" data-lang="php">&lt;?php

namespace Drupal\testForm\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Our simple form class
 */
class SimpleForm extends FormBase{

    /**
     * {@inheritdoc}
     */
    public function getFormId(){
        return 'testForm';
    }

    /**
     * {@inheritdoc}
     * Festlegen des Aufbaues des Formulares
     */
    public function buildForm(array $form, FormStateInterface $form_state){
        //Feld 1
        $form['number_1'] = [
            '#type' =&gt; 'textfield',
            '#title' =&gt; $this-&gt;t('first number'),
        ];
        //Feld 2
        $form['number_2'] = [
            '#type' =&gt; 'textfield',
            '#title' =&gt; $this-&gt;t('second number'),
        ];
        //Button zum Berechnen des Ergebnisses
        $form['submit'] = [
            '#type' =&gt; 'submit',
            '#value' =&gt; $this-&gt;t('Calculate'),
        ];
        //Form wird zurück
        return $form;
    }

     /**
     * {@inheritdoc}
     */
    public function submitForm(array &amp;$form, FormStateInterface $form_state){
        //* Message Ausgabe des Ergebnisses in der Drupal Webseite,
        //* wenn der Block Messages aktiv ist!
        drupal_set_message($form_state-&gt;getValue('number_1') + $form_state-&gt;getValue('number_2'));
    }
}</code></pre>
</div>
</div>
</div>
<div class="sect3">
<h4 id="_form_validierung">5.2.4. Form-Validierung</h4>
<div class="paragraph">
<p>Mit der folgenden Funktion kann eine Validierungs-Logik implementiert werden:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-php hljs" data-lang="php">public function validateForm(array &amp;$form, FormStateInterface $form_state){
        if(strlen($form_state-&gt;getValue('name')) &lt; 3){
            $form_state-&gt;setErrorByName(
                'name',
                $this-&gt;t('your name should be longer than 3 letters in order for me say it')
            );
        }
    }</code></pre>
</div>
</div>
</div>
</div>
<div class="sect2">
<h3 id="_ajax_form">5.3. Ajax-Form</h3>
<div class="paragraph">
<p>Es besteht die Möglichkeit die customForm mit Ajax-Funktionalität zu erweitern.
Dazu fügen wir die unten genannten Änderungen einfach mit ein.</p>
</div>
<div class="sect3">
<h4 id="_testform_rounting_yml">5.3.1. testForm.rounting.yml</h4>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-yml hljs" data-lang="yml">testForm.simple_form:
  path: 'simple-form'
  defaults:
    _form: '\Drupal\testForm\Form\SimpleForm'
    _title: 'Our cool form'
  requirements:
    _permission: 'access content'

testForm.simple_ajax_form:
  path: 'simple-ajax-form'
  defaults:
    _form: '\Drupal\testForm\Form\SimpleAjaxForm'
    _title: 'Our cool Ajax form'
  requirements:
    _permission: 'access content'</code></pre>
</div>
</div>
</div>
<div class="sect3">
<h4 id="_testformsrcformsimpleajaxform_php">5.3.2. testForm/src/Form/SimpleAjaxForm.php</h4>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-php hljs" data-lang="php">&lt;?php

namespace Drupal\testForm\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\HtmlCommand;

/**
 * Our simple form class
 */
class SimpleAjaxForm extends FormBase{

    /**
     * {@inheritdoc}
     */
    public function getFormId(){
        return 'test_Ajax_Form';
    }

    /**
     * {@inheritdoc}
     * Festlegen des Aufbaues des Formulares
     */
    public function buildForm(array $form, FormStateInterface $form_state){

        $form['massage'] = [
            '#type' =&gt; 'markup',
            '#markup' =&gt; '&lt;div class="result_message"&gt;&lt;/div',

        ];


        $form['number_1'] = [
            '#type' =&gt; 'textfield',
            '#required' =&gt; true,
            '#title' =&gt; $this-&gt;t('first number'),
        ];

        $form['number_2'] = [
            '#type' =&gt; 'textfield',
            '#required' =&gt; true,
            '#title' =&gt; $this-&gt;t('second number'),
        ];

        $form['actions'] = [
            '#type' =&gt; 'button',
            '#value' =&gt; $this-&gt;t('Calculate'),
            '#class' =&gt; 'searchButton',
            '#ajax' =&gt; [
                //Greift auf die setMessage()-Methode zu
                'callback' =&gt; '::setMessage',
            ]
        ];

        return $form;
    }

     /**
     * {@inheritdoc}
     */
    public function submitForm(array &amp;$form, FormStateInterface $form_state){
        //Message Ausgabe in der Drupal Webseite

    }

    // Wird in $form['actions'] verwendet
    public function setMessage(array &amp;$form, FormStateInterface $form_state){
        $response = new AjaxResponse();


        $response-&gt;addCommand(
            //Was soll geändert werden?
            new HtmlCommand(
                //Welche Klasse soll verändert werden
                '.result_message',
                //Was soll verändert werden
                '&lt;div class = "my_top_message"&gt;' . $this-&gt;t('the result is @result', ['@result' =&gt; ($form_state-&gt;getValue('number_1') + $form_state-&gt;getValue('number_2'))]) . '&lt;/div&gt;'
            )
        );

        return $response;
    }
}</code></pre>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="footer">
<div id="footer-text">
Last updated 2019-03-08 18:49:21 +0100
</div>
</div>
<link rel="stylesheet" href="highlight/styles/github.min.css">
<script src="highlight/highlight.min.js"></script>
<script>hljs.initHighlighting()</script>
</body>
</html>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>


 * {
   box-sizing:  border-box;
 }

 html {
   margin: 0;
   padding: 0;
   font-family: Arial, 'Microsoft YaHei', 'Malgun Gothic', sans-serif;
 }

 body {
   margin: 0;
   padding: 0;
   height: 100%;
   line-height: 1.6;
   font-family: "SpoqaHanSans", "Helvetica Neue", "Apple SD Gothic Neo", "나눔바른고딕", "나눔고딕", "맑은 고딕", "돋움", "Dotum", sans-serif;
   color: #fff;
   background-color: #000;
   overflow: hidden;
 }

 span, object, div, iframe, p, blockquote, pre, a, abbr, address, big, cite, code, del, dfn, em, font, img, ins, q,
 s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, fieldset, form, label, legend, figure, figcaption, video, mark {
   margin: 0px;
   padding: 0px;
   font-weight: normal;
   font-style: normal;
 }

 main, nav, aside, article, header, section, footer, figure, div, iframe {
   display: block;
 }

 caption {
   line-height: 0;
   font-size: 0;
   text-indent: -1600px;
   color: transparent;
   vertical-align: top;
 }

 strong, b {
   font-weight: 600;
 }

 img {
   border: 0;
   vertical-align: top;
 }

 ol,ul,li {
   display: block;
   list-style: none;
   text-decoration: none;
   margin: 0;
   padding: 0;
 }

 dl, dt, dd {
   display: block;
   margin: 0;
   padding: 0;
   font-weight: normal;
 }

 h1, h2, h3, h4, h5, h6 {
   padding: 0;
   margin: 0;
   font-family: inherit;
   font-size: inherit;
   color: inherit;
 }

 table {
   width: 100%;
   table-layout: fixed;
 }

 blockquote, q {
   quotes: none;
 }

 a {
   color: inherit;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   text-decoration: none;
 }

 a:hover {
   color: inherit;
   text-decoration: none;
 }

 input, select, button {
   font-family: inherit;
   font-size: inherit;
   font-weight: normal;
   color: inherit;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   margin: 0;
   padding: 0;
 }

 input[type=text],
 input[type=password],
 input[type=search],
 input[type=email] {
   -webkit-appearance: none;
   -moz-appearance: none;
 }

 input[type=search]::-webkit-search-cancel-button {
   -webkit-appearance: textfield;
 }

 input[type=text]::-ms-clear ,
 input[type=search]::-ms-clear {
   display: none;
 }

 button {
   border: none;
   cursor: pointer;
   background-color: transparent;
   -webkit-appearance: none;
   -moz-appearance: none;
 }

 select:focus, input:focus {
   outline: none;
 }

 fieldset {
   border: none;
   display: block;
 }


 ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
   color: #b5b5b5;
 }

 :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color: #b5b5b5;
   opacity: 1;
 }

 ::-moz-placeholder { /* Mozilla Firefox 19+ */
   color: #b5b5b5;
   opacity: 1;
 }


 :-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: #b5b5b5;
 }

 ::-webkit-scrollbar {
   -webkit-appearance: none;
   width: 10px;
   height: 10px;
   background-color: transparent;
   border-radius: 10px;
 }

 ::-webkit-scrollbar-corner {
   background-color: transparent;
 }

 ::-webkit-scrollbar-thumb {
   background-color: #d0cfd4;
   border: 1px solid transparent;
   border-radius: 10px;
   background-clip: content-box;
 }
</style>

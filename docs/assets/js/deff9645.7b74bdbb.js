"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,f=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const l={},r="Widgets",o={unversionedId:"usage/widgets",id:"usage/widgets",title:"Widgets",description:"The uiSchema ui:widget property tells the form which UI widget should be used to render a field.",source:"@site/docs/usage/widgets.md",sourceDirName:"usage",slug:"/usage/widgets",permalink:"/react-jsonschema-form/docs/usage/widgets",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/usage/widgets.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Usage",permalink:"/react-jsonschema-form/docs/usage"},next:{title:"Themes",permalink:"/react-jsonschema-form/docs/usage/themes"}},p={},s=[{value:"For <code>boolean</code> fields",id:"for-boolean-fields",level:2},{value:"For <code>string</code> fields",id:"for-string-fields",level:2},{value:"String formats",id:"string-formats",level:3},{value:"For <code>number</code> and <code>integer</code> fields",id:"for-number-and-integer-fields",level:2},{value:"Hidden widgets",id:"hidden-widgets",level:2},{value:"File widgets",id:"file-widgets",level:2},{value:"Multiple files",id:"multiple-files",level:3},{value:"File widget input ref",id:"file-widget-input-ref",level:3},{value:"<code>accept</code> option",id:"accept-option",level:3}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"widgets"},"Widgets"),(0,i.kt)("p",null,"The uiSchema ",(0,i.kt)("inlineCode",{parentName:"p"},"ui:widget")," property tells the form which UI widget should be used to render a field. "),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { RJSFSchema, UiSchema } from "@rjsf/utils";\nimport validator from "@rjsf/validator-ajv8";\n\nconst schema: RJSFSchema = {\n  type: "object",\n  properties: {\n    done: {\n      type: "boolean"\n    }\n  }\n};\n\nconst uiSchema: UiSchema = {\n  done: {\n    "ui:widget": "radio" // could also be "select"\n  }\n};\n\nrender((\n  <Form schema={schema} uiSchema={uiSchema} validator={validator} />\n), document.getElementById("app"));\n')),(0,i.kt)("p",null,"Here's a list of supported alternative widgets for different JSON Schema data types:"),(0,i.kt)("h2",{id:"for-boolean-fields"},"For ",(0,i.kt)("inlineCode",{parentName:"h2"},"boolean")," fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radio"),": a radio button group with ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," as selectable values;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"select"),": a select box with ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," as options;"),(0,i.kt)("li",{parentName:"ul"},"by default, a checkbox is used")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: To set the labels for a boolean field, instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", your schema can use ",(0,i.kt)("inlineCode",{parentName:"p"},"oneOf")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," values for both true and false, where you can specify the custom label in the ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," field. You will also need to specify a widget in your ",(0,i.kt)("inlineCode",{parentName:"p"},"uiSchema"),". See the following example:")),(0,i.kt)("p",null,"schema: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "properties": {\n    "booleanWithCustomLabels": {\n      "type": "boolean",\n      "oneOf": [\n        {"const": true, "title": "Custom label for true"},\n        {"const": false, "title": "Custom label for false"}\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"uiSchema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  { \n    "booleanWithCustomLabels": {\n      "ui:widget": "radio" // or "select"\n    }\n  }\n')),(0,i.kt)("h2",{id:"for-string-fields"},"For ",(0,i.kt)("inlineCode",{parentName:"h2"},"string")," fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"textarea"),": a ",(0,i.kt)("inlineCode",{parentName:"li"},"textarea")," element is used;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password"),": an ",(0,i.kt)("inlineCode",{parentName:"li"},"input[type=password]")," element is used;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color"),": an ",(0,i.kt)("inlineCode",{parentName:"li"},"input[type=color]")," element is used;"),(0,i.kt)("li",{parentName:"ul"},"by default, a regular ",(0,i.kt)("inlineCode",{parentName:"li"},"input[type=text]")," element is used.")),(0,i.kt)("h3",{id:"string-formats"},"String formats"),(0,i.kt)("p",null,"The built-in string field also supports the JSON Schema ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," property, and will render an appropriate widget by default for the following string formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email"),": An ",(0,i.kt)("inlineCode",{parentName:"li"},"input[type=email]")," element is used;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uri"),": An ",(0,i.kt)("inlineCode",{parentName:"li"},"input[type=url]")," element is used;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data-url"),": By default, an ",(0,i.kt)("inlineCode",{parentName:"li"},"input[type=file]")," element is used; in case the string is part of an array, multiple files will be handled automatically (see ",(0,i.kt)("a",{parentName:"li",href:"#file-widgets"},"File widgets"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"date"),": By default, an ",(0,i.kt)("inlineCode",{parentName:"li"},"input[type=date]")," element is used;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"date-time"),": By default, an ",(0,i.kt)("inlineCode",{parentName:"li"},"input[type=datetime-local]")," element is used.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/xqu6Lcp.png",alt:null})),(0,i.kt)("p",null,"Please note that, even though they are standardized, ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime-local")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," input elements are not yet supported by Firefox and IE. If you plan on targeting these platforms, two alternative widgets are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alt-datetime"),": Six ",(0,i.kt)("inlineCode",{parentName:"li"},"select")," elements are used to select the year, the month, the day, the hour, the minute and the second;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alt-date"),": Three ",(0,i.kt)("inlineCode",{parentName:"li"},"select")," elements are used to select the year, month and the day.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Firefox 57 - 66"),": Firefox partially supporting ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," input types, but not ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime-local"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"month")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"week"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/VF5tY60.png",alt:null})),(0,i.kt)("p",null,"You can customize the list of years displayed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"year")," dropdown by providing a ",(0,i.kt)("inlineCode",{parentName:"p"},"yearsRange")," property to ",(0,i.kt)("inlineCode",{parentName:"p"},"ui:options")," in your uiSchema. Its also possible to remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"Now")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Clear")," buttons with the ",(0,i.kt)("inlineCode",{parentName:"p"},"hideNowButton")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"hideClearButton")," options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { RJSFSchema, UiSchema } from "@rjsf/utils";\nimport validator from "@rjsf/validator-ajv8";\n\nconst schema: RJSFSchema = {\n  type: "string"\n};\n\nconst uiSchema: UiSchema = {\n  "ui:widget": "alt-datetime",\n  "ui:options": {\n    yearsRange: [1980, 2030],\n    hideNowButton: true,\n    hideClearButton: true,\n  }\n};\n\nrender((\n  <Form schema={schema} uiSchema={uiSchema} validator={validator} />\n), document.getElementById("app"));\n')),(0,i.kt)("h2",{id:"for-number-and-integer-fields"},"For ",(0,i.kt)("inlineCode",{parentName:"h2"},"number")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"integer")," fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updown"),": an ",(0,i.kt)("inlineCode",{parentName:"li"},"input[type=number]")," updown selector;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"range"),": an ",(0,i.kt)("inlineCode",{parentName:"li"},"input[type=range]")," slider;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radio"),": a radio button group with enum values. This can only be used when ",(0,i.kt)("inlineCode",{parentName:"li"},"enum")," values are specified for this input."),(0,i.kt)("li",{parentName:"ul"},"By default, a regular ",(0,i.kt)("inlineCode",{parentName:"li"},"input[type=number]")," element is used.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If JSON Schema's ",(0,i.kt)("inlineCode",{parentName:"p"},"minimum"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"maximum")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"multipleOf")," values are defined, the ",(0,i.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"step")," input attributes values will take those values.")),(0,i.kt)("h2",{id:"hidden-widgets"},"Hidden widgets"),(0,i.kt)("p",null,"It's possible to use a hidden widget for a field by setting its ",(0,i.kt)("inlineCode",{parentName:"p"},"ui:widget")," uiSchema directive to ",(0,i.kt)("inlineCode",{parentName:"p"},"hidden"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { RJSFSchema, UiSchema } from "@rjsf/utils";\nimport validator from "@rjsf/validator-ajv8";\n\nconst schema: RJSFSchema = {\n  type: "object",\n  properties: {\n    foo: {type: "boolean"}\n  }\n};\n\nconst uiSchema: UiSchema = {\n  foo: {"ui:widget": "hidden"}\n};\n\nrender((\n  <Form schema={schema} uiSchema={uiSchema} validator={validator} />\n), document.getElementById("app"));\n')),(0,i.kt)("p",null,"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hiding widgets is only supported for ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"integer")," schema types;"),(0,i.kt)("li",{parentName:"ul"},"A hidden widget takes its value from the ",(0,i.kt)("inlineCode",{parentName:"li"},"formData")," prop.")),(0,i.kt)("h2",{id:"file-widgets"},"File widgets"),(0,i.kt)("p",null,"This library supports a limited form of ",(0,i.kt)("inlineCode",{parentName:"p"},"input[type=file]")," widgets, in the sense that it will propagate file contents to form data state as ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"},"data-url"),"s."),(0,i.kt)("p",null,"There are two ways to use file widgets."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"By declaring a ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," json schema type along a ",(0,i.kt)("inlineCode",{parentName:"li"},"data-url")," ",(0,i.kt)("a",{parentName:"li",href:"#string-formats"},"format"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { RJSFSchema } from "@rjsf/utils";\nimport validator from "@rjsf/validator-ajv8";\n\nconst schema: RJSFSchema = {\n  type: "string",\n  format: "data-url",\n};\n\nrender((\n  <Form schema={schema} validator={validator} />\n), document.getElementById("app"));\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"By specifying a ",(0,i.kt)("inlineCode",{parentName:"li"},"ui:widget")," field uiSchema directive as ",(0,i.kt)("inlineCode",{parentName:"li"},"file"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { RJSFSchema, UiSchema } from "@rjsf/utils";\n\nconst schema: RJSFSchema = {\n  type: "string",\n};\n\nconst uiSchema: UiSchema = {\n  "ui:widget": "file",\n};\n')),(0,i.kt)("h3",{id:"multiple-files"},"Multiple files"),(0,i.kt)("p",null,"Multiple files selectors are supported by defining an array of strings having ",(0,i.kt)("inlineCode",{parentName:"p"},"data-url")," as a format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { RJSFSchema } from "@rjsf/utils";\n\nconst schema: RJSFSchema = {\n  type: "array",\n  items: {\n    type: "string",\n    format: "data-url",\n  }\n};\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that storing large dataURIs into form state might slow rendering.")),(0,i.kt)("h3",{id:"file-widget-input-ref"},"File widget input ref"),(0,i.kt)("p",null,"The included ",(0,i.kt)("inlineCode",{parentName:"p"},"FileWidget")," exposes a reference to the ",(0,i.kt)("inlineCode",{parentName:"p"},'<input type="file" />')," element node as an ",(0,i.kt)("inlineCode",{parentName:"p"},"inputRef")," component property."),(0,i.kt)("p",null,"This allows you to programmatically trigger the browser's file selector, which can be used in a custom file widget."),(0,i.kt)("h3",{id:"accept-option"},(0,i.kt)("inlineCode",{parentName:"h3"},"accept")," option"),(0,i.kt)("p",null,"You can use the accept attribute to specify a filter for what file types the user can upload:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { RJSFSchema, UiSchema } from "@rjsf/utils";\n\nconst schema: RJSFSchema = {\n  type: "string",\n  format: "data-url"\n};\n\nconst uiSchema: UiSchema = {\n  "ui:options": { accept: ".pdf" }\n};\n')))}m.isMDXComponent=!0}}]);
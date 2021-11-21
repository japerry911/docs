(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{941:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("\n     MultipleCondition\n")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.models.conditions.types.MultipleCondition"')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Condition for a list of flow")])]),t._v(" "),s("p",[t._v("Trigger the first time all the flow are successfully executed during the "),s("code",[t._v("window")]),t._v(" duration")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("blockquote",[s("p",[t._v("A flow that is waiting for 2 flows that is successful in 1 days")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" multiple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("listen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.triggers.types.Flow\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" multiple\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.conditions.types.MultipleCondition\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("window")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" P1D\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("windowAdvance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" P0D\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.conditions.types.ExecutionStatusCondition\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("in")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SUCCESS\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flow-a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.conditions.types.ExecutionFlowCondition\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flowId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("multiplecondition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("a\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flow-b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.conditions.types.ExecutionFlowCondition\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flowId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("multiplecondition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("b\n")])])]),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("h3",{attrs:{id:"conditions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conditions"}},[t._v("#")]),t._v(" "),s("code",[t._v("conditions")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("object")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" ====")]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),s("blockquote",[s("p",[t._v("The list of conditions to wait for")])]),t._v(" "),s("p",[t._v("The key must be unique for a trigger since it will be use to store previous result.")]),t._v(" "),s("h3",{attrs:{id:"id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[t._v("#")]),t._v(" "),s("code",[t._v("id")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Validation regExp:")]),t._v(" "),s("code",[t._v("[a-zA-Z0-9_-]+")])]),t._v(" "),s("li",[s("strong",[t._v("Min length:")]),t._v(" "),s("code",[t._v("1")])])]),t._v(" "),s("blockquote",[s("p",[t._v("A unique id for the whole flow")])]),t._v(" "),s("h3",{attrs:{id:"window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[t._v("#")]),t._v(" "),s("code",[t._v("window")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Format:")]),t._v(" "),s("code",[t._v("duration")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The duration of the window")])]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_8601#Durations",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO_8601 Durations"),s("OutboundLink")],1),t._v(" for more information of available duration value."),s("br"),t._v("\nThe start of the window is always based on midnight except if you set windowAdvance parameter. Eg if you have a 10 minutes (PT10M) window, the first window will be 00:00 to 00:10 and a new window will be started each 10 minutes")]),t._v(" "),s("h3",{attrs:{id:"windowadvance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windowadvance"}},[t._v("#")]),t._v(" "),s("code",[t._v("windowAdvance")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Format:")]),t._v(" "),s("code",[t._v("duration")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The window advance duration")])]),t._v(" "),s("p",[t._v("Allow to specify the start hour of the window"),s("br"),t._v("\nEg: you want a window of 6 hours (window=PT6H). By default the check will be done between:"),s("br"),t._v("\n00:00 and 06:00 - 06:00 and 12:00 - 12:00 and 18:00 - 18:00 and 00:00 If you want to check the window between:"),s("br"),t._v("\n03:00 and 09:00 - 09:00 and 15:00 - 15:00 and 21:00 - 21:00 and 3:00You will have to shift the window of 3 hours by settings windowAdvance: PT3H")]),t._v(" "),s("h2",{attrs:{id:"definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),s("h3",{attrs:{id:"condition-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#condition-1"}},[t._v("#")]),t._v(" "),s("code",[t._v("Condition-1")])]),t._v(" "),s("h3",{attrs:{id:"condition-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#condition-2"}},[t._v("#")]),t._v(" "),s("code",[t._v("Condition-2")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
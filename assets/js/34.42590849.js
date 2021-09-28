(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{782:function(a,e,t){"use strict";t.r(e);var s=t(9),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"others-kestra-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#others-kestra-configuration"}},[a._v("#")]),a._v(" Others Kestra configuration")]),a._v(" "),t("h2",{attrs:{id:"url-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-configuration"}},[a._v("#")]),a._v(" Url configuration")]),a._v(" "),t("p",[a._v("Some notification service need to have an url configuration defined in order to add some link directly to the web ui. Use full uri here with a trailing "),t("code",[a._v("/")]),a._v(" (without ui or api).")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kestra")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//www.my"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("host.com/kestra/\n\n")])])]),t("h2",{attrs:{id:"plugins-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins-configuration"}},[a._v("#")]),a._v(" Plugins configuration")]),a._v(" "),t("p",[a._v("Configuration of maven repositories used for commande "),t("code",[a._v("plugins install")]),a._v("."),t("br"),a._v("\nDefault are necessary for kestra and plugins, but you can add your custom maven registries in order to download your own plugins with this command.")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kestra")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("plugins")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("repositories")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("central")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//repo.maven.apache.org/maven2/\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("jcenter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//jcenter.bintray.com/\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kestra")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//dl.bintray.com/kestra/maven\n\n")])])]),t("h2",{attrs:{id:"variables-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variables-configuration"}},[a._v("#")]),a._v(" Variables configuration")]),a._v(" "),t("h3",{attrs:{id:"kestra-variables-env-vars-prefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kestra-variables-env-vars-prefix"}},[a._v("#")]),a._v(" "),t("code",[a._v("kestra.variables.env-vars-prefix")])]),a._v(" "),t("p",[a._v("Kestra provide a way to use environment variables in your flow."),t("br"),a._v("\nBy default, we only get environment variables that start with "),t("code",[a._v("KESTRA_")]),a._v(".")]),a._v(" "),t("p",[a._v("These variables will be accessible on flow with "),t("code",{pre:!0},[a._v("{{ env.your_env }}")])]),a._v(" "),t("p",[a._v("For example env vars with name "),t("code",[a._v("KESTRA_MY_ENV")]),a._v(" will be usable with  "),t("code",{pre:!0},[a._v("{{ env.my_env }}")])]),a._v(" "),t("h3",{attrs:{id:"kestra-variables-globals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kestra-variables-globals"}},[a._v("#")]),a._v(" "),t("code",[a._v("kestra.variables.globals")])]),a._v(" "),t("p",[a._v("You can also provide from configuration files globals variables that will be accessible in all your flow."),t("br"),a._v("\nMostly it will be use for example to declare environnement on your instance, some global dataset, ...")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kestra")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("variables")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("globals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dev\n\n")])])]),t("p",[a._v("These variables will be accessible on flow with "),t("code",{pre:!0},[a._v("{{ globals.env }}")])]),a._v(" "),t("h3",{attrs:{id:"kestra-variables-disable-handlebars"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kestra-variables-disable-handlebars"}},[a._v("#")]),a._v(" "),t("code",[a._v("kestra.variables.disable-handlebars")])]),a._v(" "),t("p",[a._v("By default, "),t("a",{attrs:{href:"../../../developer-guide/variables/deprecated-handlebars"}},[a._v("deprecated handlebars")]),a._v(" is disabled, you can enable it with "),t("code",[a._v("true")]),a._v(" value.")]),a._v(" "),t("h3",{attrs:{id:"kestra-tasks-defaults"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kestra-tasks-defaults"}},[a._v("#")]),a._v(" "),t("code",[a._v("kestra.tasks.defaults")])]),a._v(" "),t("p",[a._v("You can also provide from configuration files tasks defaults that will be applied on each tasks on your cluster "),t("strong",[a._v("if not defined")]),a._v(" on flow or tasks."),t("br"),a._v("\nMostly it will allow you to be sure a value was defined at a default value for these tasks type.")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kestra")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tasks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("defaults")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" io.kestra.core.tasks.debugs.Echo\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("level")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ERROR\n")])])]),t("p",[a._v("These variables will be accessible on flow with "),t("code",{pre:!0},[a._v("{{ globals.env }}")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kestra")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tasks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("defaults")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" io.kestra.core.tasks.debugs.Echo\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("level")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ERROR\n")])])]),t("p",[a._v("These variables will be accessible on flow with "),t("code",{pre:!0},[a._v("{{ globals.env }}")])]),a._v(" "),t("h2",{attrs:{id:"metrics-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metrics-configuration"}},[a._v("#")]),a._v(" Metrics configuration")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("kestra.metrics.prefix")]),a._v(": Change the prefix for "),t("a",{attrs:{href:"../monitoring"}},[a._v("all metrics")]),a._v(" for Kestra(default: kestra)")])]),a._v(" "),t("h2",{attrs:{id:"servers-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servers-configuration"}},[a._v("#")]),a._v(" Servers configuration")]),a._v(" "),t("h3",{attrs:{id:"kestra-server-access-log-access-log-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kestra-server-access-log-access-log-configuration"}},[a._v("#")]),a._v(" "),t("code",[a._v("kestra.server.access-log")]),a._v(": Access Log configuration")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("kestra.server.access-log.enabled")]),a._v(": Enabled access log from webserver (default "),t("code",[a._v("true")]),a._v(")")]),a._v(" "),t("li",[t("code",[a._v("kestra.server.access-log.name")]),a._v(": Logger name (default "),t("code",[a._v("io.kestra.webserver.access")]),a._v(")")]),a._v(" "),t("li",[t("code",[a._v("kestra.server.access-log.format")]),a._v(": Access log format (default "),t("code",[a._v("[Date: {}] [Duration: {} ms] [Method: {}] [Url: {}] [Status: {}] [Length: {}] [Ip: {}] [Port: {}]")]),a._v(")")]),a._v(" "),t("li",[t("code",[a._v("kestra.server.access-log.filters")]),a._v(": list of regexp that will log, use "),t("code",[a._v(".*")]),a._v(" to enable all  (default "),t("code",[a._v('- ".*\\\\[Url: /api/.*"')]),a._v(")")])]),a._v(" "),t("p",[a._v("Here is the default values:")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kestra")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("access-log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" io.kestra.webserver.access\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"[Date: {}] [Duration: {} ms] [Method: {}] [Url: {}] [Status: {}] [Length: {}] [Ip: {}] [Port: {}]"')]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*\\\\[Url: /api/.*"')]),a._v("\n")])])]),t("h2",{attrs:{id:"jvm-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-configuration"}},[a._v("#")]),a._v(" JVM configuration")]),a._v(" "),t("p",[a._v("All JVM options can be passed as environment vars name "),t("code",[a._v("JAVA_OPTS")]),a._v(". You can use it to change all JVM options available like memory, encoding, ...")]),a._v(" "),t("p",[a._v("example:")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Duser.timezone=Europe/Paris"')]),a._v("\n")])])]),t("h3",{attrs:{id:"user-timezone-timezone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-timezone-timezone"}},[a._v("#")]),a._v(" "),t("code",[a._v("user.timezone")]),a._v(": Timezone")]),a._v(" "),t("p",[a._v("By default, Kestra will handle all date with your system timezone. You can change the timezone with JVM options."),t("br"),a._v("\nChanging the timezone will affect mostly :")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("scheduler")]),a._v(": by default, all schedule date is UTC, changing the java timezone will allow you to schedule flow in your timezone.")]),a._v(" "),t("li",[t("strong",[a._v("log")]),a._v(":  that will be displayed on your timezone.")])]),a._v(" "),t("h2",{attrs:{id:"anonymous-usage-report"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-usage-report"}},[a._v("#")]),a._v(" Anonymous usage report")]),a._v(" "),t("p",[a._v("Understanding how you use Kestra is very important to us: it helps us improve the solution in many different ways."),t("br"),a._v("\nFor this very reason, the "),t("code",[a._v("kestra.anonymous-usage-report.enabled")]),a._v(" option is mandatory: we want you to take time to consider whether or not you wish to share anonymous data with us so we can benefit from your experience and use cases.")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("kestra.anonymous-usage-report.enabled")]),a._v(": (default true)")]),a._v(" "),t("li",[t("code",[a._v("kestra.anonymous-usage-report.initial-delay")]),a._v(": (default 5m)")]),a._v(" "),t("li",[t("code",[a._v("kestra.anonymous-usage-report.fixed-delay")]),a._v(": (default 1h)")])]),a._v(" "),t("h3",{attrs:{id:"collected-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collected-data"}},[a._v("#")]),a._v(" Collected Data")]),a._v(" "),t("p",[a._v("The collected data can be found "),t("a",{attrs:{href:"https://github.com/kestra-io/kestra/tree/develop/core/src/main/java/io/kestra/core/models/collectors",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),t("OutboundLink")],1),a._v(", We collect only "),t("strong",[a._v("anonymous data")]),a._v(" that allow to understand how you used Kestra. Mostly the data collected are :")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("host data:")]),a._v(" cpu, ram, os, jvm and a fingerprint of the machine")]),a._v(" "),t("li",[t("strong",[a._v("plugins data:")]),a._v(" the list of plugins installed and the current version")]),a._v(" "),t("li",[t("strong",[a._v("flow data:")]),a._v(" the namespace count, flow count, the task type and the trigger type used.")]),a._v(" "),t("li",[t("strong",[a._v("execution data:")]),a._v(" the execution & taskruns count for last 2 days with count and duration grouped by status")]),a._v(" "),t("li",[t("strong",[a._v("common data:")]),a._v(" the server type, version, timezone, env, start time and url")])])])}),[],!1,null,null,null);e.default=r.exports}}]);
import{k as S}from"./index-0cb90ae2.js";S.__defineMacro("\\ce",function(o){return A(o.consumeArgs(1)[0],"ce")});S.__defineMacro("\\pu",function(o){return A(o.consumeArgs(1)[0],"pu")});S.__defineMacro("\\tripledash","{\\vphantom{-}\\raisebox{2.56mu}{$\\mkern2mu\\tiny\\text{-}\\mkern1mu\\text{-}\\mkern1mu\\text{-}\\mkern2mu$}}");var A=function(t,e){for(var a="",r=t.length&&t[t.length-1].loc.start,i=t.length-1;i>=0;i--)t[i].loc.start>r&&(a+=" ",r=t[i].loc.start),a+=t[i].text,r+=t[i].text.length;var c=p.go(n.go(a,e));return c},n={go:function(t,e){if(!t)return[];e===void 0&&(e="ce");var a="0",r={};r.parenthesisLevel=0,t=t.replace(/\n/g," "),t=t.replace(/[\u2212\u2013\u2014\u2010]/g,"-"),t=t.replace(/[\u2026]/g,"...");for(var i,c=10,s=[];;){i!==t?(c=10,i=t):c--;var _=n.stateMachines[e],u=_.transitions[a]||_.transitions["*"];t:for(var h=0;h<u.length;h++){var x=n.patterns.match_(u[h].pattern,t);if(x){for(var l=u[h].task,d=0;d<l.action_.length;d++){var g;if(_.actions[l.action_[d].type_])g=_.actions[l.action_[d].type_](r,x.match_,l.action_[d].option);else if(n.actions[l.action_[d].type_])g=n.actions[l.action_[d].type_](r,x.match_,l.action_[d].option);else throw["MhchemBugA","mhchem bug A. Please report. ("+l.action_[d].type_+")"];n.concatArray(s,g)}if(a=l.nextState||a,t.length>0){if(l.revisit||(t=x.remainder),!l.toContinue)break t}else return s}}if(c<=0)throw["MhchemBugU","mhchem bug U. Please report."]}},concatArray:function(t,e){if(e)if(Array.isArray(e))for(var a=0;a<e.length;a++)t.push(e[a]);else t.push(e)},patterns:{patterns:{empty:/^$/,else:/^./,else2:/^./,space:/^\s/,"space A":/^\s(?=[A-Z\\$])/,space$:/^\s$/,"a-z":/^[a-z]/,x:/^x/,x$:/^x$/,i$:/^i$/,letters:/^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,"\\greek":/^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,"one lowercase latin letter $":/^(?:([a-z])(?:$|[^a-zA-Z]))$/,"$one lowercase latin letter$ $":/^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,"one lowercase greek letter $":/^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,digits:/^[0-9]+/,"-9.,9":/^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,"-9.,9 no missing 0":/^[+\-]?[0-9]+(?:[.,][0-9]+)?/,"(-)(9.,9)(e)(99)":function(t){var e=t.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:([eE]|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/);return e&&e[0]?{match_:e.splice(1),remainder:t.substr(e[0].length)}:null},"(-)(9)^(-9)":function(t){var e=t.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/);return e&&e[0]?{match_:e.splice(1),remainder:t.substr(e[0].length)}:null},"state of aggregation $":function(t){var e=n.patterns.findObserveGroups(t,"",/^\([a-z]{1,3}(?=[\),])/,")","");if(e&&e.remainder.match(/^($|[\s,;\)\]\}])/))return e;var a=t.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);return a?{match_:a[0],remainder:t.substr(a[0].length)}:null},"_{(state of aggregation)}$":/^_\{(\([a-z]{1,3}\))\}/,"{[(":/^(?:\\\{|\[|\()/,")]}":/^(?:\)|\]|\\\})/,", ":/^[,;]\s*/,",":/^[,;]/,".":/^[.]/,". ":/^([.\u22C5\u00B7\u2022])\s*/,"...":/^\.\.\.(?=$|[^.])/,"* ":/^([*])\s*/,"^{(...)}":function(t){return n.patterns.findObserveGroups(t,"^{","","","}")},"^($...$)":function(t){return n.patterns.findObserveGroups(t,"^","$","$","")},"^a":/^\^([0-9]+|[^\\_])/,"^\\x{}{}":function(t){return n.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"^\\x{}":function(t){return n.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","")},"^\\x":/^\^(\\[a-zA-Z]+)\s*/,"^(-1)":/^\^(-?\d+)/,"'":/^'/,"_{(...)}":function(t){return n.patterns.findObserveGroups(t,"_{","","","}")},"_($...$)":function(t){return n.patterns.findObserveGroups(t,"_","$","$","")},_9:/^_([+\-]?[0-9]+|[^\\])/,"_\\x{}{}":function(t){return n.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"_\\x{}":function(t){return n.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","")},"_\\x":/^_(\\[a-zA-Z]+)\s*/,"^_":/^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,"{}":/^\{\}/,"{...}":function(t){return n.patterns.findObserveGroups(t,"","{","}","")},"{(...)}":function(t){return n.patterns.findObserveGroups(t,"{","","","}")},"$...$":function(t){return n.patterns.findObserveGroups(t,"","$","$","")},"${(...)}$":function(t){return n.patterns.findObserveGroups(t,"${","","","}$")},"$(...)$":function(t){return n.patterns.findObserveGroups(t,"$","","","$")},"=<>":/^[=<>]/,"#":/^[#\u2261]/,"+":/^\+/,"-$":/^-(?=[\s_},;\]/]|$|\([a-z]+\))/,"-9":/^-(?=[0-9])/,"- orbital overlap":/^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,"-":/^-/,"pm-operator":/^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,operator:/^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,arrowUpDown:/^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,"\\bond{(...)}":function(t){return n.patterns.findObserveGroups(t,"\\bond{","","","}")},"->":/^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,CMT:/^[CMT](?=\[)/,"[(...)]":function(t){return n.patterns.findObserveGroups(t,"[","","","]")},"1st-level escape":/^(&|\\\\|\\hline)\s*/,"\\,":/^(?:\\[,\ ;:])/,"\\x{}{}":function(t){return n.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"\\x{}":function(t){return n.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","")},"\\ca":/^\\ca(?:\s+|(?![a-zA-Z]))/,"\\x":/^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,orbital:/^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,others:/^[\/~|]/,"\\frac{(...)}":function(t){return n.patterns.findObserveGroups(t,"\\frac{","","","}","{","","","}")},"\\overset{(...)}":function(t){return n.patterns.findObserveGroups(t,"\\overset{","","","}","{","","","}")},"\\underset{(...)}":function(t){return n.patterns.findObserveGroups(t,"\\underset{","","","}","{","","","}")},"\\underbrace{(...)}":function(t){return n.patterns.findObserveGroups(t,"\\underbrace{","","","}_","{","","","}")},"\\color{(...)}0":function(t){return n.patterns.findObserveGroups(t,"\\color{","","","}")},"\\color{(...)}{(...)}1":function(t){return n.patterns.findObserveGroups(t,"\\color{","","","}","{","","","}")},"\\color(...){(...)}2":function(t){return n.patterns.findObserveGroups(t,"\\color","\\","",/^(?=\{)/,"{","","","}")},"\\ce{(...)}":function(t){return n.patterns.findObserveGroups(t,"\\ce{","","","}")},oxidation$:/^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,"d-oxidation$":/^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,"roman numeral":/^[IVX]+/,"1/2$":/^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,amount:function(t){var e;if(e=t.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/),e)return{match_:e[0],remainder:t.substr(e[0].length)};var a=n.patterns.findObserveGroups(t,"","$","$","");return a&&(e=a.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/),e)?{match_:e[0],remainder:t.substr(e[0].length)}:null},amount2:function(t){return this.amount(t)},"(KV letters),":/^(?:[A-Z][a-z]{0,2}|i)(?=,)/,formula$:function(t){if(t.match(/^\([a-z]+\)$/))return null;var e=t.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);return e?{match_:e[0],remainder:t.substr(e[0].length)}:null},uprightEntities:/^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,"/":/^\s*(\/)\s*/,"//":/^\s*(\/\/)\s*/,"*":/^\s*[*.]\s*/},findObserveGroups:function(t,e,a,r,i,c,s,_,u,h){var x=function(v,m){if(typeof m=="string")return v.indexOf(m)!==0?null:m;var y=v.match(m);return y?y[0]:null},l=function(v,m,y){for(var $=0;m<v.length;){var O=v.charAt(m),z=x(v.substr(m),y);if(z!==null&&$===0)return{endMatchBegin:m,endMatchEnd:m+z.length};if(O==="{")$++;else if(O==="}"){if($===0)throw["ExtraCloseMissingOpen","Extra close brace or missing open brace"];$--}m++}return $>0,null},d=x(t,e);if(d===null||(t=t.substr(d.length),d=x(t,a),d===null))return null;var g=l(t,d.length,r||i);if(g===null)return null;var f=t.substring(0,r?g.endMatchEnd:g.endMatchBegin);if(c||s){var q=this.findObserveGroups(t.substr(g.endMatchEnd),c,s,_,u);if(q===null)return null;var k=[f,q.match_];return{match_:h?k.join(""):k,remainder:q.remainder}}else return{match_:f,remainder:t.substr(g.endMatchEnd)}},match_:function(t,e){var a=n.patterns.patterns[t];if(a===void 0)throw["MhchemBugP","mhchem bug P. Please report. ("+t+")"];if(typeof a=="function")return n.patterns.patterns[t](e);var r=e.match(a);if(r){var i;return r[2]?i=[r[1],r[2]]:r[1]?i=r[1]:i=r[0],{match_:i,remainder:e.substr(r[0].length)}}return null}},actions:{"a=":function(t,e){t.a=(t.a||"")+e},"b=":function(t,e){t.b=(t.b||"")+e},"p=":function(t,e){t.p=(t.p||"")+e},"o=":function(t,e){t.o=(t.o||"")+e},"q=":function(t,e){t.q=(t.q||"")+e},"d=":function(t,e){t.d=(t.d||"")+e},"rm=":function(t,e){t.rm=(t.rm||"")+e},"text=":function(t,e){t.text_=(t.text_||"")+e},insert:function(t,e,a){return{type_:a}},"insert+p1":function(t,e,a){return{type_:a,p1:e}},"insert+p1+p2":function(t,e,a){return{type_:a,p1:e[0],p2:e[1]}},copy:function(t,e){return e},rm:function(t,e){return{type_:"rm",p1:e||""}},text:function(t,e){return n.go(e,"text")},"{text}":function(t,e){var a=["{"];return n.concatArray(a,n.go(e,"text")),a.push("}"),a},"tex-math":function(t,e){return n.go(e,"tex-math")},"tex-math tight":function(t,e){return n.go(e,"tex-math tight")},bond:function(t,e,a){return{type_:"bond",kind_:a||e}},"color0-output":function(t,e){return{type_:"color0",color:e[0]}},ce:function(t,e){return n.go(e)},"1/2":function(t,e){var a=[];e.match(/^[+\-]/)&&(a.push(e.substr(0,1)),e=e.substr(1));var r=e.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);return r[1]=r[1].replace(/\$/g,""),a.push({type_:"frac",p1:r[1],p2:r[2]}),r[3]&&(r[3]=r[3].replace(/\$/g,""),a.push({type_:"tex-math",p1:r[3]})),a},"9,9":function(t,e){return n.go(e,"9,9")}},createTransitions:function(t){var e,a,r,i,c={};for(e in t)for(a in t[e])for(r=a.split("|"),t[e][a].stateArray=r,i=0;i<r.length;i++)c[r[i]]=[];for(e in t)for(a in t[e])for(r=t[e][a].stateArray||[],i=0;i<r.length;i++){var s=t[e][a];if(s.action_){s.action_=[].concat(s.action_);for(var _=0;_<s.action_.length;_++)typeof s.action_[_]=="string"&&(s.action_[_]={type_:s.action_[_]})}else s.action_=[];for(var u=e.split("|"),h=0;h<u.length;h++)if(r[i]==="*")for(var x in c)c[x].push({pattern:u[h],task:s});else c[r[i]].push({pattern:u[h],task:s})}return c},stateMachines:{}};n.stateMachines={ce:{transitions:n.createTransitions({empty:{"*":{action_:"output"}},else:{"0|1|2":{action_:"beginsWithBond=false",revisit:!0,toContinue:!0}},oxidation$:{0:{action_:"oxidation-output"}},CMT:{r:{action_:"rdt=",nextState:"rt"},rd:{action_:"rqt=",nextState:"rdt"}},arrowUpDown:{"0|1|2|as":{action_:["sb=false","output","operator"],nextState:"1"}},uprightEntities:{"0|1|2":{action_:["o=","output"],nextState:"1"}},orbital:{"0|1|2|3":{action_:"o=",nextState:"o"}},"->":{"0|1|2|3":{action_:"r=",nextState:"r"},"a|as":{action_:["output","r="],nextState:"r"},"*":{action_:["output","r="],nextState:"r"}},"+":{o:{action_:"d= kv",nextState:"d"},"d|D":{action_:"d=",nextState:"d"},q:{action_:"d=",nextState:"qd"},"qd|qD":{action_:"d=",nextState:"qd"},dq:{action_:["output","d="],nextState:"d"},3:{action_:["sb=false","output","operator"],nextState:"0"}},amount:{"0|2":{action_:"a=",nextState:"a"}},"pm-operator":{"0|1|2|a|as":{action_:["sb=false","output",{type_:"operator",option:"\\pm"}],nextState:"0"}},operator:{"0|1|2|a|as":{action_:["sb=false","output","operator"],nextState:"0"}},"-$":{"o|q":{action_:["charge or bond","output"],nextState:"qd"},d:{action_:"d=",nextState:"d"},D:{action_:["output",{type_:"bond",option:"-"}],nextState:"3"},q:{action_:"d=",nextState:"qd"},qd:{action_:"d=",nextState:"qd"},"qD|dq":{action_:["output",{type_:"bond",option:"-"}],nextState:"3"}},"-9":{"3|o":{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"3"}},"- orbital overlap":{o:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"},d:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"}},"-":{"0|1|2":{action_:[{type_:"output",option:1},"beginsWithBond=true",{type_:"bond",option:"-"}],nextState:"3"},3:{action_:{type_:"bond",option:"-"}},a:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"},as:{action_:[{type_:"output",option:2},{type_:"bond",option:"-"}],nextState:"3"},b:{action_:"b="},o:{action_:{type_:"- after o/d",option:!1},nextState:"2"},q:{action_:{type_:"- after o/d",option:!1},nextState:"2"},"d|qd|dq":{action_:{type_:"- after o/d",option:!0},nextState:"2"},"D|qD|p":{action_:["output",{type_:"bond",option:"-"}],nextState:"3"}},amount2:{"1|3":{action_:"a=",nextState:"a"}},letters:{"0|1|2|3|a|as|b|p|bp|o":{action_:"o=",nextState:"o"},"q|dq":{action_:["output","o="],nextState:"o"},"d|D|qd|qD":{action_:"o after d",nextState:"o"}},digits:{o:{action_:"q=",nextState:"q"},"d|D":{action_:"q=",nextState:"dq"},q:{action_:["output","o="],nextState:"o"},a:{action_:"o=",nextState:"o"}},"space A":{"b|p|bp":{}},space:{a:{nextState:"as"},0:{action_:"sb=false"},"1|2":{action_:"sb=true"},"r|rt|rd|rdt|rdq":{action_:"output",nextState:"0"},"*":{action_:["output","sb=true"],nextState:"1"}},"1st-level escape":{"1|2":{action_:["output",{type_:"insert+p1",option:"1st-level escape"}]},"*":{action_:["output",{type_:"insert+p1",option:"1st-level escape"}],nextState:"0"}},"[(...)]":{"r|rt":{action_:"rd=",nextState:"rd"},"rd|rdt":{action_:"rq=",nextState:"rdq"}},"...":{"o|d|D|dq|qd|qD":{action_:["output",{type_:"bond",option:"..."}],nextState:"3"},"*":{action_:[{type_:"output",option:1},{type_:"insert",option:"ellipsis"}],nextState:"1"}},". |* ":{"*":{action_:["output",{type_:"insert",option:"addition compound"}],nextState:"1"}},"state of aggregation $":{"*":{action_:["output","state of aggregation"],nextState:"1"}},"{[(":{"a|as|o":{action_:["o=","output","parenthesisLevel++"],nextState:"2"},"0|1|2|3":{action_:["o=","output","parenthesisLevel++"],nextState:"2"},"*":{action_:["output","o=","output","parenthesisLevel++"],nextState:"2"}},")]}":{"0|1|2|3|b|p|bp|o":{action_:["o=","parenthesisLevel--"],nextState:"o"},"a|as|d|D|q|qd|qD|dq":{action_:["output","o=","parenthesisLevel--"],nextState:"o"}},", ":{"*":{action_:["output","comma"],nextState:"0"}},"^_":{"*":{}},"^{(...)}|^($...$)":{"0|1|2|as":{action_:"b=",nextState:"b"},p:{action_:"b=",nextState:"bp"},"3|o":{action_:"d= kv",nextState:"D"},q:{action_:"d=",nextState:"qD"},"d|D|qd|qD|dq":{action_:["output","d="],nextState:"D"}},"^a|^\\x{}{}|^\\x{}|^\\x|'":{"0|1|2|as":{action_:"b=",nextState:"b"},p:{action_:"b=",nextState:"bp"},"3|o":{action_:"d= kv",nextState:"d"},q:{action_:"d=",nextState:"qd"},"d|qd|D|qD":{action_:"d="},dq:{action_:["output","d="],nextState:"d"}},"_{(state of aggregation)}$":{"d|D|q|qd|qD|dq":{action_:["output","q="],nextState:"q"}},"_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x":{"0|1|2|as":{action_:"p=",nextState:"p"},b:{action_:"p=",nextState:"bp"},"3|o":{action_:"q=",nextState:"q"},"d|D":{action_:"q=",nextState:"dq"},"q|qd|qD|dq":{action_:["output","q="],nextState:"q"}},"=<>":{"0|1|2|3|a|as|o|q|d|D|qd|qD|dq":{action_:[{type_:"output",option:2},"bond"],nextState:"3"}},"#":{"0|1|2|3|a|as|o":{action_:[{type_:"output",option:2},{type_:"bond",option:"#"}],nextState:"3"}},"{}":{"*":{action_:{type_:"output",option:1},nextState:"1"}},"{...}":{"0|1|2|3|a|as|b|p|bp":{action_:"o=",nextState:"o"},"o|d|D|q|qd|qD|dq":{action_:["output","o="],nextState:"o"}},"$...$":{a:{action_:"a="},"0|1|2|3|as|b|p|bp|o":{action_:"o=",nextState:"o"},"as|o":{action_:"o="},"q|d|D|qd|qD|dq":{action_:["output","o="],nextState:"o"}},"\\bond{(...)}":{"*":{action_:[{type_:"output",option:2},"bond"],nextState:"3"}},"\\frac{(...)}":{"*":{action_:[{type_:"output",option:1},"frac-output"],nextState:"3"}},"\\overset{(...)}":{"*":{action_:[{type_:"output",option:2},"overset-output"],nextState:"3"}},"\\underset{(...)}":{"*":{action_:[{type_:"output",option:2},"underset-output"],nextState:"3"}},"\\underbrace{(...)}":{"*":{action_:[{type_:"output",option:2},"underbrace-output"],nextState:"3"}},"\\color{(...)}{(...)}1|\\color(...){(...)}2":{"*":{action_:[{type_:"output",option:2},"color-output"],nextState:"3"}},"\\color{(...)}0":{"*":{action_:[{type_:"output",option:2},"color0-output"]}},"\\ce{(...)}":{"*":{action_:[{type_:"output",option:2},"ce"],nextState:"3"}},"\\,":{"*":{action_:[{type_:"output",option:1},"copy"],nextState:"1"}},"\\x{}{}|\\x{}|\\x":{"0|1|2|3|a|as|b|p|bp|o|c0":{action_:["o=","output"],nextState:"3"},"*":{action_:["output","o=","output"],nextState:"3"}},others:{"*":{action_:[{type_:"output",option:1},"copy"],nextState:"3"}},else2:{a:{action_:"a to o",nextState:"o",revisit:!0},as:{action_:["output","sb=true"],nextState:"1",revisit:!0},"r|rt|rd|rdt|rdq":{action_:["output"],nextState:"0",revisit:!0},"*":{action_:["output","copy"],nextState:"3"}}}),actions:{"o after d":function(t,e){var a;if((t.d||"").match(/^[0-9]+$/)){var r=t.d;t.d=void 0,a=this.output(t),t.b=r}else a=this.output(t);return n.actions["o="](t,e),a},"d= kv":function(t,e){t.d=e,t.dType="kv"},"charge or bond":function(t,e){if(t.beginsWithBond){var a=[];return n.concatArray(a,this.output(t)),n.concatArray(a,n.actions.bond(t,e,"-")),a}else t.d=e},"- after o/d":function(t,e,a){var r=n.patterns.match_("orbital",t.o||""),i=n.patterns.match_("one lowercase greek letter $",t.o||""),c=n.patterns.match_("one lowercase latin letter $",t.o||""),s=n.patterns.match_("$one lowercase latin letter$ $",t.o||""),_=e==="-"&&(r&&r.remainder===""||i||c||s);_&&!t.a&&!t.b&&!t.p&&!t.d&&!t.q&&!r&&c&&(t.o="$"+t.o+"$");var u=[];return _?(n.concatArray(u,this.output(t)),u.push({type_:"hyphen"})):(r=n.patterns.match_("digits",t.d||""),a&&r&&r.remainder===""?(n.concatArray(u,n.actions["d="](t,e)),n.concatArray(u,this.output(t))):(n.concatArray(u,this.output(t)),n.concatArray(u,n.actions.bond(t,e,"-")))),u},"a to o":function(t){t.o=t.a,t.a=void 0},"sb=true":function(t){t.sb=!0},"sb=false":function(t){t.sb=!1},"beginsWithBond=true":function(t){t.beginsWithBond=!0},"beginsWithBond=false":function(t){t.beginsWithBond=!1},"parenthesisLevel++":function(t){t.parenthesisLevel++},"parenthesisLevel--":function(t){t.parenthesisLevel--},"state of aggregation":function(t,e){return{type_:"state of aggregation",p1:n.go(e,"o")}},comma:function(t,e){var a=e.replace(/\s*$/,""),r=a!==e;return r&&t.parenthesisLevel===0?{type_:"comma enumeration L",p1:a}:{type_:"comma enumeration M",p1:a}},output:function(t,e,a){var r;if(!t.r)r=[],!t.a&&!t.b&&!t.p&&!t.o&&!t.q&&!t.d&&!a||(t.sb&&r.push({type_:"entitySkip"}),!t.o&&!t.q&&!t.d&&!t.b&&!t.p&&a!==2?(t.o=t.a,t.a=void 0):!t.o&&!t.q&&!t.d&&(t.b||t.p)?(t.o=t.a,t.d=t.b,t.q=t.p,t.a=t.b=t.p=void 0):t.o&&t.dType==="kv"&&n.patterns.match_("d-oxidation$",t.d||"")?t.dType="oxidation":t.o&&t.dType==="kv"&&!t.q&&(t.dType=void 0),r.push({type_:"chemfive",a:n.go(t.a,"a"),b:n.go(t.b,"bd"),p:n.go(t.p,"pq"),o:n.go(t.o,"o"),q:n.go(t.q,"pq"),d:n.go(t.d,t.dType==="oxidation"?"oxidation":"bd"),dType:t.dType}));else{var i;t.rdt==="M"?i=n.go(t.rd,"tex-math"):t.rdt==="T"?i=[{type_:"text",p1:t.rd||""}]:i=n.go(t.rd);var c;t.rqt==="M"?c=n.go(t.rq,"tex-math"):t.rqt==="T"?c=[{type_:"text",p1:t.rq||""}]:c=n.go(t.rq),r={type_:"arrow",r:t.r,rd:i,rq:c}}for(var s in t)s!=="parenthesisLevel"&&s!=="beginsWithBond"&&delete t[s];return r},"oxidation-output":function(t,e){var a=["{"];return n.concatArray(a,n.go(e,"oxidation")),a.push("}"),a},"frac-output":function(t,e){return{type_:"frac-ce",p1:n.go(e[0]),p2:n.go(e[1])}},"overset-output":function(t,e){return{type_:"overset",p1:n.go(e[0]),p2:n.go(e[1])}},"underset-output":function(t,e){return{type_:"underset",p1:n.go(e[0]),p2:n.go(e[1])}},"underbrace-output":function(t,e){return{type_:"underbrace",p1:n.go(e[0]),p2:n.go(e[1])}},"color-output":function(t,e){return{type_:"color",color1:e[0],color2:n.go(e[1])}},"r=":function(t,e){t.r=e},"rdt=":function(t,e){t.rdt=e},"rd=":function(t,e){t.rd=e},"rqt=":function(t,e){t.rqt=e},"rq=":function(t,e){t.rq=e},operator:function(t,e,a){return{type_:"operator",kind_:a||e}}}},a:{transitions:n.createTransitions({empty:{"*":{}},"1/2$":{0:{action_:"1/2"}},else:{0:{nextState:"1",revisit:!0}},"$(...)$":{"*":{action_:"tex-math tight",nextState:"1"}},",":{"*":{action_:{type_:"insert",option:"commaDecimal"}}},else2:{"*":{action_:"copy"}}}),actions:{}},o:{transitions:n.createTransitions({empty:{"*":{}},"1/2$":{0:{action_:"1/2"}},else:{0:{nextState:"1",revisit:!0}},letters:{"*":{action_:"rm"}},"\\ca":{"*":{action_:{type_:"insert",option:"circa"}}},"\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},"${(...)}$|$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"{text}"}},else2:{"*":{action_:"copy"}}}),actions:{}},text:{transitions:n.createTransitions({empty:{"*":{action_:"output"}},"{...}":{"*":{action_:"text="}},"${(...)}$|$(...)$":{"*":{action_:"tex-math"}},"\\greek":{"*":{action_:["output","rm"]}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:["output","copy"]}},else:{"*":{action_:"text="}}}),actions:{output:function(t){if(t.text_){var e={type_:"text",p1:t.text_};for(var a in t)delete t[a];return e}}}},pq:{transitions:n.createTransitions({empty:{"*":{}},"state of aggregation $":{"*":{action_:"state of aggregation"}},i$:{0:{nextState:"!f",revisit:!0}},"(KV letters),":{0:{action_:"rm",nextState:"0"}},formula$:{0:{nextState:"f",revisit:!0}},"1/2$":{0:{action_:"1/2"}},else:{0:{nextState:"!f",revisit:!0}},"${(...)}$|$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"text"}},"a-z":{f:{action_:"tex-math"}},letters:{"*":{action_:"rm"}},"-9.,9":{"*":{action_:"9,9"}},",":{"*":{action_:{type_:"insert+p1",option:"comma enumeration S"}}},"\\color{(...)}{(...)}1|\\color(...){(...)}2":{"*":{action_:"color-output"}},"\\color{(...)}0":{"*":{action_:"color0-output"}},"\\ce{(...)}":{"*":{action_:"ce"}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},else2:{"*":{action_:"copy"}}}),actions:{"state of aggregation":function(t,e){return{type_:"state of aggregation subscript",p1:n.go(e,"o")}},"color-output":function(t,e){return{type_:"color",color1:e[0],color2:n.go(e[1],"pq")}}}},bd:{transitions:n.createTransitions({empty:{"*":{}},x$:{0:{nextState:"!f",revisit:!0}},formula$:{0:{nextState:"f",revisit:!0}},else:{0:{nextState:"!f",revisit:!0}},"-9.,9 no missing 0":{"*":{action_:"9,9"}},".":{"*":{action_:{type_:"insert",option:"electron dot"}}},"a-z":{f:{action_:"tex-math"}},x:{"*":{action_:{type_:"insert",option:"KV x"}}},letters:{"*":{action_:"rm"}},"'":{"*":{action_:{type_:"insert",option:"prime"}}},"${(...)}$|$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"text"}},"\\color{(...)}{(...)}1|\\color(...){(...)}2":{"*":{action_:"color-output"}},"\\color{(...)}0":{"*":{action_:"color0-output"}},"\\ce{(...)}":{"*":{action_:"ce"}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},else2:{"*":{action_:"copy"}}}),actions:{"color-output":function(t,e){return{type_:"color",color1:e[0],color2:n.go(e[1],"bd")}}}},oxidation:{transitions:n.createTransitions({empty:{"*":{}},"roman numeral":{"*":{action_:"roman-numeral"}},"${(...)}$|$(...)$":{"*":{action_:"tex-math"}},else:{"*":{action_:"copy"}}}),actions:{"roman-numeral":function(t,e){return{type_:"roman numeral",p1:e||""}}}},"tex-math":{transitions:n.createTransitions({empty:{"*":{action_:"output"}},"\\ce{(...)}":{"*":{action_:["output","ce"]}},"{...}|\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"o="}},else:{"*":{action_:"o="}}}),actions:{output:function(t){if(t.o){var e={type_:"tex-math",p1:t.o};for(var a in t)delete t[a];return e}}}},"tex-math tight":{transitions:n.createTransitions({empty:{"*":{action_:"output"}},"\\ce{(...)}":{"*":{action_:["output","ce"]}},"{...}|\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"o="}},"-|+":{"*":{action_:"tight operator"}},else:{"*":{action_:"o="}}}),actions:{"tight operator":function(t,e){t.o=(t.o||"")+"{"+e+"}"},output:function(t){if(t.o){var e={type_:"tex-math",p1:t.o};for(var a in t)delete t[a];return e}}}},"9,9":{transitions:n.createTransitions({empty:{"*":{}},",":{"*":{action_:"comma"}},else:{"*":{action_:"copy"}}}),actions:{comma:function(){return{type_:"commaDecimal"}}}},pu:{transitions:n.createTransitions({empty:{"*":{action_:"output"}},space$:{"*":{action_:["output","space"]}},"{[(|)]}":{"0|a":{action_:"copy"}},"(-)(9)^(-9)":{0:{action_:"number^",nextState:"a"}},"(-)(9.,9)(e)(99)":{0:{action_:"enumber",nextState:"a"}},space:{"0|a":{}},"pm-operator":{"0|a":{action_:{type_:"operator",option:"\\pm"},nextState:"0"}},operator:{"0|a":{action_:"copy",nextState:"0"}},"//":{d:{action_:"o=",nextState:"/"}},"/":{d:{action_:"o=",nextState:"/"}},"{...}|else":{"0|d":{action_:"d=",nextState:"d"},a:{action_:["space","d="],nextState:"d"},"/|q":{action_:"q=",nextState:"q"}}}),actions:{enumber:function(t,e){var a=[];return e[0]==="+-"||e[0]==="+/-"?a.push("\\pm "):e[0]&&a.push(e[0]),e[1]&&(n.concatArray(a,n.go(e[1],"pu-9,9")),e[2]&&(e[2].match(/[,.]/)?n.concatArray(a,n.go(e[2],"pu-9,9")):a.push(e[2])),e[3]=e[4]||e[3],e[3]&&(e[3]=e[3].trim(),e[3]==="e"||e[3].substr(0,1)==="*"?a.push({type_:"cdot"}):a.push({type_:"times"}))),e[3]&&a.push("10^{"+e[5]+"}"),a},"number^":function(t,e){var a=[];return e[0]==="+-"||e[0]==="+/-"?a.push("\\pm "):e[0]&&a.push(e[0]),n.concatArray(a,n.go(e[1],"pu-9,9")),a.push("^{"+e[2]+"}"),a},operator:function(t,e,a){return{type_:"operator",kind_:a||e}},space:function(){return{type_:"pu-space-1"}},output:function(t){var e,a=n.patterns.match_("{(...)}",t.d||"");a&&a.remainder===""&&(t.d=a.match_);var r=n.patterns.match_("{(...)}",t.q||"");if(r&&r.remainder===""&&(t.q=r.match_),t.d&&(t.d=t.d.replace(/\u00B0C|\^oC|\^{o}C/g,"{}^{\\circ}C"),t.d=t.d.replace(/\u00B0F|\^oF|\^{o}F/g,"{}^{\\circ}F")),t.q){t.q=t.q.replace(/\u00B0C|\^oC|\^{o}C/g,"{}^{\\circ}C"),t.q=t.q.replace(/\u00B0F|\^oF|\^{o}F/g,"{}^{\\circ}F");var i={d:n.go(t.d,"pu"),q:n.go(t.q,"pu")};t.o==="//"?e={type_:"pu-frac",p1:i.d,p2:i.q}:(e=i.d,i.d.length>1||i.q.length>1?e.push({type_:" / "}):e.push({type_:"/"}),n.concatArray(e,i.q))}else e=n.go(t.d,"pu-2");for(var c in t)delete t[c];return e}}},"pu-2":{transitions:n.createTransitions({empty:{"*":{action_:"output"}},"*":{"*":{action_:["output","cdot"],nextState:"0"}},"\\x":{"*":{action_:"rm="}},space:{"*":{action_:["output","space"],nextState:"0"}},"^{(...)}|^(-1)":{1:{action_:"^(-1)"}},"-9.,9":{0:{action_:"rm=",nextState:"0"},1:{action_:"^(-1)",nextState:"0"}},"{...}|else":{"*":{action_:"rm=",nextState:"1"}}}),actions:{cdot:function(){return{type_:"tight cdot"}},"^(-1)":function(t,e){t.rm+="^{"+e+"}"},space:function(){return{type_:"pu-space-2"}},output:function(t){var e=[];if(t.rm){var a=n.patterns.match_("{(...)}",t.rm||"");a&&a.remainder===""?e=n.go(a.match_,"pu"):e={type_:"rm",p1:t.rm}}for(var r in t)delete t[r];return e}}},"pu-9,9":{transitions:n.createTransitions({empty:{0:{action_:"output-0"},o:{action_:"output-o"}},",":{0:{action_:["output-0","comma"],nextState:"o"}},".":{0:{action_:["output-0","copy"],nextState:"o"}},else:{"*":{action_:"text="}}}),actions:{comma:function(){return{type_:"commaDecimal"}},"output-0":function(t){var e=[];if(t.text_=t.text_||"",t.text_.length>4){var a=t.text_.length%3;a===0&&(a=3);for(var r=t.text_.length-3;r>0;r-=3)e.push(t.text_.substr(r,3)),e.push({type_:"1000 separator"});e.push(t.text_.substr(0,a)),e.reverse()}else e.push(t.text_);for(var i in t)delete t[i];return e},"output-o":function(t){var e=[];if(t.text_=t.text_||"",t.text_.length>4){for(var a=t.text_.length-3,r=0;r<a;r+=3)e.push(t.text_.substr(r,3)),e.push({type_:"1000 separator"});e.push(t.text_.substr(r))}else e.push(t.text_);for(var i in t)delete t[i];return e}}}};var p={go:function(t,e){if(!t)return"";for(var a="",r=!1,i=0;i<t.length;i++){var c=t[i];typeof c=="string"?a+=c:(a+=p._go2(c),c.type_==="1st-level escape"&&(r=!0))}return!e&&!r&&a&&(a="{"+a+"}"),a},_goInner:function(t){return t&&p.go(t,!0)},_go2:function(t){var e;switch(t.type_){case"chemfive":e="";var a={a:p._goInner(t.a),b:p._goInner(t.b),p:p._goInner(t.p),o:p._goInner(t.o),q:p._goInner(t.q),d:p._goInner(t.d)};a.a&&(a.a.match(/^[+\-]/)&&(a.a="{"+a.a+"}"),e+=a.a+"\\,"),(a.b||a.p)&&(e+="{\\vphantom{X}}",e+="^{\\hphantom{"+(a.b||"")+"}}_{\\hphantom{"+(a.p||"")+"}}",e+="{\\vphantom{X}}",e+="^{\\smash[t]{\\vphantom{2}}\\mathllap{"+(a.b||"")+"}}",e+="_{\\vphantom{2}\\mathllap{\\smash[t]{"+(a.p||"")+"}}}"),a.o&&(a.o.match(/^[+\-]/)&&(a.o="{"+a.o+"}"),e+=a.o),t.dType==="kv"?((a.d||a.q)&&(e+="{\\vphantom{X}}"),a.d&&(e+="^{"+a.d+"}"),a.q&&(e+="_{\\smash[t]{"+a.q+"}}")):t.dType==="oxidation"?(a.d&&(e+="{\\vphantom{X}}",e+="^{"+a.d+"}"),a.q&&(e+="{\\vphantom{X}}",e+="_{\\smash[t]{"+a.q+"}}")):(a.q&&(e+="{\\vphantom{X}}",e+="_{\\smash[t]{"+a.q+"}}"),a.d&&(e+="{\\vphantom{X}}",e+="^{"+a.d+"}"));break;case"rm":e="\\mathrm{"+t.p1+"}";break;case"text":t.p1.match(/[\^_]/)?(t.p1=t.p1.replace(" ","~").replace("-","\\text{-}"),e="\\mathrm{"+t.p1+"}"):e="\\text{"+t.p1+"}";break;case"roman numeral":e="\\mathrm{"+t.p1+"}";break;case"state of aggregation":e="\\mskip2mu "+p._goInner(t.p1);break;case"state of aggregation subscript":e="\\mskip1mu "+p._goInner(t.p1);break;case"bond":if(e=p._getBond(t.kind_),!e)throw["MhchemErrorBond","mhchem Error. Unknown bond type ("+t.kind_+")"];break;case"frac":var r="\\frac{"+t.p1+"}{"+t.p2+"}";e="\\mathchoice{\\textstyle"+r+"}{"+r+"}{"+r+"}{"+r+"}";break;case"pu-frac":var i="\\frac{"+p._goInner(t.p1)+"}{"+p._goInner(t.p2)+"}";e="\\mathchoice{\\textstyle"+i+"}{"+i+"}{"+i+"}{"+i+"}";break;case"tex-math":e=t.p1+" ";break;case"frac-ce":e="\\frac{"+p._goInner(t.p1)+"}{"+p._goInner(t.p2)+"}";break;case"overset":e="\\overset{"+p._goInner(t.p1)+"}{"+p._goInner(t.p2)+"}";break;case"underset":e="\\underset{"+p._goInner(t.p1)+"}{"+p._goInner(t.p2)+"}";break;case"underbrace":e="\\underbrace{"+p._goInner(t.p1)+"}_{"+p._goInner(t.p2)+"}";break;case"color":e="{\\color{"+t.color1+"}{"+p._goInner(t.color2)+"}}";break;case"color0":e="\\color{"+t.color+"}";break;case"arrow":var c={rd:p._goInner(t.rd),rq:p._goInner(t.rq)},s="\\x"+p._getArrow(t.r);c.rq&&(s+="[{"+c.rq+"}]"),c.rd?s+="{"+c.rd+"}":s+="{}",e=s;break;case"operator":e=p._getOperator(t.kind_);break;case"1st-level escape":e=t.p1+" ";break;case"space":e=" ";break;case"entitySkip":e="~";break;case"pu-space-1":e="~";break;case"pu-space-2":e="\\mkern3mu ";break;case"1000 separator":e="\\mkern2mu ";break;case"commaDecimal":e="{,}";break;case"comma enumeration L":e="{"+t.p1+"}\\mkern6mu ";break;case"comma enumeration M":e="{"+t.p1+"}\\mkern3mu ";break;case"comma enumeration S":e="{"+t.p1+"}\\mkern1mu ";break;case"hyphen":e="\\text{-}";break;case"addition compound":e="\\,{\\cdot}\\,";break;case"electron dot":e="\\mkern1mu \\bullet\\mkern1mu ";break;case"KV x":e="{\\times}";break;case"prime":e="\\prime ";break;case"cdot":e="\\cdot ";break;case"tight cdot":e="\\mkern1mu{\\cdot}\\mkern1mu ";break;case"times":e="\\times ";break;case"circa":e="{\\sim}";break;case"^":e="uparrow";break;case"v":e="downarrow";break;case"ellipsis":e="\\ldots ";break;case"/":e="/";break;case" / ":e="\\,/\\,";break;default:throw["MhchemBugT","mhchem bug T. Please report."]}return e},_getArrow:function(t){switch(t){case"->":return"rightarrow";case"→":return"rightarrow";case"⟶":return"rightarrow";case"<-":return"leftarrow";case"<->":return"leftrightarrow";case"<-->":return"rightleftarrows";case"<=>":return"rightleftharpoons";case"⇌":return"rightleftharpoons";case"<=>>":return"rightequilibrium";case"<<=>":return"leftequilibrium";default:throw["MhchemBugT","mhchem bug T. Please report."]}},_getBond:function(t){switch(t){case"-":return"{-}";case"1":return"{-}";case"=":return"{=}";case"2":return"{=}";case"#":return"{\\equiv}";case"3":return"{\\equiv}";case"~":return"{\\tripledash}";case"~-":return"{\\mathrlap{\\raisebox{-.1em}{$-$}}\\raisebox{.1em}{$\\tripledash$}}";case"~=":return"{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$\\tripledash$}}-}";case"~--":return"{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$\\tripledash$}}-}";case"-~-":return"{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$-$}}\\tripledash}";case"...":return"{{\\cdot}{\\cdot}{\\cdot}}";case"....":return"{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";case"->":return"{\\rightarrow}";case"<-":return"{\\leftarrow}";case"<":return"{<}";case">":return"{>}";default:throw["MhchemBugT","mhchem bug T. Please report."]}},_getOperator:function(t){switch(t){case"+":return" {}+{} ";case"-":return" {}-{} ";case"=":return" {}={} ";case"<":return" {}<{} ";case">":return" {}>{} ";case"<<":return" {}\\ll{} ";case">>":return" {}\\gg{} ";case"\\pm":return" {}\\pm{} ";case"\\approx":return" {}\\approx{} ";case"$\\approx$":return" {}\\approx{} ";case"v":return" \\downarrow{} ";case"(v)":return" \\downarrow{} ";case"^":return" \\uparrow{} ";case"(^)":return" \\uparrow{} ";default:throw["MhchemBugT","mhchem bug T. Please report."]}}};

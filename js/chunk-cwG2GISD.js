import{A as t,C as _,Z as e,P as s}from"./chunk-CRGj88R_.js";function r(t){return Array.prototype.slice.call(arguments,1).forEach((function(_){_&&Object.keys(_).forEach((function(e){t[e]=_[e]}))})),t}function i(t){return Object.prototype.toString.call(t)}function c(t){return"[object Function]"===i(t)}function n(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const o={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};const h={"http:":{validate:function(t,_,e){const s=t.slice(_);return e.re.http||(e.re.http=new RegExp("^\\/\\/"+e.re.src_auth+e.re.src_host_port_strict+e.re.src_path,"i")),e.re.http.test(s)?s.match(e.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,_,e){const s=t.slice(_);return e.re.no_http||(e.re.no_http=new RegExp("^"+e.re.src_auth+"(?:localhost|(?:(?:"+e.re.src_domain+")\\.)+"+e.re.src_domain_root+")"+e.re.src_port+e.re.src_host_terminator+e.re.src_path,"i")),e.re.no_http.test(s)?_>=3&&":"===t[_-3]||_>=3&&"/"===t[_-3]?0:s.match(e.re.no_http)[0].length:0}},"mailto:":{validate:function(t,_,e){const s=t.slice(_);return e.re.mailto||(e.re.mailto=new RegExp("^"+e.re.src_email_name+"@"+e.re.src_host_strict,"i")),e.re.mailto.test(s)?s.match(e.re.mailto)[0].length:0}}},l="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function a(r){const o=r.re=function(r){const i={};r=r||{},i.src_Any=t.source,i.src_Cc=_.source,i.src_Z=e.source,i.src_P=s.source,i.src_ZPCc=[i.src_Z,i.src_P,i.src_Cc].join("|"),i.src_ZCc=[i.src_Z,i.src_Cc].join("|");const c="[><｜]";return i.src_pseudo_letter="(?:(?![><｜]|"+i.src_ZPCc+")"+i.src_Any+")",i.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",i.src_auth="(?:(?:(?!"+i.src_ZCc+"|[@/\\[\\]()]).)+@)?",i.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",i.src_host_terminator="(?=$|[><｜]|"+i.src_ZPCc+")(?!"+(r["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+i.src_ZPCc+"))",i.src_path="(?:[/?#](?:(?!"+i.src_ZCc+"|"+c+"|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!"+i.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+i.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+i.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+i.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+i.src_ZCc+"|[']).)+\\'|\\'(?="+i.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+i.src_ZCc+"|[.]|$)|"+(r["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+i.src_ZCc+"|$)|;(?!"+i.src_ZCc+"|$)|\\!+(?!"+i.src_ZCc+"|[!]|$)|\\?(?!"+i.src_ZCc+"|[?]|$))+|\\/)?",i.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',i.src_xn="xn--[a-z0-9\\-]{1,59}",i.src_domain_root="(?:"+i.src_xn+"|"+i.src_pseudo_letter+"{1,63})",i.src_domain="(?:"+i.src_xn+"|(?:"+i.src_pseudo_letter+")|(?:"+i.src_pseudo_letter+"(?:-|"+i.src_pseudo_letter+"){0,61}"+i.src_pseudo_letter+"))",i.src_host="(?:(?:(?:(?:"+i.src_domain+")\\.)*"+i.src_domain+"))",i.tpl_host_fuzzy="(?:"+i.src_ip4+"|(?:(?:(?:"+i.src_domain+")\\.)+(?:%TLDS%)))",i.tpl_host_no_ip_fuzzy="(?:(?:(?:"+i.src_domain+")\\.)+(?:%TLDS%))",i.src_host_strict=i.src_host+i.src_host_terminator,i.tpl_host_fuzzy_strict=i.tpl_host_fuzzy+i.src_host_terminator,i.src_host_port_strict=i.src_host+i.src_port+i.src_host_terminator,i.tpl_host_port_fuzzy_strict=i.tpl_host_fuzzy+i.src_port+i.src_host_terminator,i.tpl_host_port_no_ip_fuzzy_strict=i.tpl_host_no_ip_fuzzy+i.src_port+i.src_host_terminator,i.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+i.src_ZPCc+"|>|$))",i.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+i.src_ZCc+")("+i.src_email_name+"@"+i.tpl_host_fuzzy_strict+")",i.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+i.src_ZPCc+"))((?![$+<=>^`|｜])"+i.tpl_host_port_fuzzy_strict+i.src_path+")",i.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+i.src_ZPCc+"))((?![$+<=>^`|｜])"+i.tpl_host_port_no_ip_fuzzy_strict+i.src_path+")",i}(r.__opts__),h=r.__tlds__.slice();function l(t){return t.replace("%TLDS%",o.src_tlds)}r.onCompile(),r.__tlds_replaced__||h.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),h.push(o.src_xn),o.src_tlds=h.join("|"),o.email_fuzzy=RegExp(l(o.tpl_email_fuzzy),"i"),o.link_fuzzy=RegExp(l(o.tpl_link_fuzzy),"i"),o.link_no_ip_fuzzy=RegExp(l(o.tpl_link_no_ip_fuzzy),"i"),o.host_fuzzy_test=RegExp(l(o.tpl_host_fuzzy_test),"i");const a=[];function u(t,_){throw new Error('(LinkifyIt) Invalid schema "'+t+'": '+_)}r.__compiled__={},Object.keys(r.__schemas__).forEach((function(t){const _=r.__schemas__[t];if(null===_)return;const e={validate:null,link:null};if(r.__compiled__[t]=e,"[object Object]"===i(_))return!function(t){return"[object RegExp]"===i(t)}(_.validate)?c(_.validate)?e.validate=_.validate:u(t,_):e.validate=function(t){return function(_,e){const s=_.slice(e);return t.test(s)?s.match(t)[0].length:0}}(_.validate),void(c(_.normalize)?e.normalize=_.normalize:_.normalize?u(t,_):e.normalize=function(t,_){_.normalize(t)});!function(t){return"[object String]"===i(t)}(_)?u(t,_):a.push(t)})),a.forEach((function(t){r.__compiled__[r.__schemas__[t]]&&(r.__compiled__[t].validate=r.__compiled__[r.__schemas__[t]].validate,r.__compiled__[t].normalize=r.__compiled__[r.__schemas__[t]].normalize)})),r.__compiled__[""]={validate:null,normalize:function(t,_){_.normalize(t)}};const p=Object.keys(r.__compiled__).filter((function(t){return t.length>0&&r.__compiled__[t]})).map(n).join("|");r.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+o.src_ZPCc+"))("+p+")","i"),r.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+o.src_ZPCc+"))("+p+")","ig"),r.re.schema_at_start=RegExp("^"+r.re.schema_search.source,"i"),r.re.pretest=RegExp("("+r.re.schema_test.source+")|("+r.re.host_fuzzy_test.source+")|@","i"),function(t){t.__index__=-1,t.__text_cache__=""}(r)}function u(t,_){const e=t.__index__,s=t.__last_index__,r=t.__text_cache__.slice(e,s);this.schema=t.__schema__.toLowerCase(),this.index=e+_,this.lastIndex=s+_,this.raw=r,this.text=r,this.url=r}function p(t,_){const e=new u(t,_);return t.__compiled__[e.schema].normalize(e,t),e}function m(t,_){if(!(this instanceof m))return new m(t,_);var e;_||(e=t,Object.keys(e||{}).reduce((function(t,_){return t||o.hasOwnProperty(_)}),!1)&&(_=t,t={})),this.__opts__=r({},o,_),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=r({},h,t),this.__compiled__={},this.__tlds__=l,this.__tlds_replaced__=!1,this.re={},a(this)}m.prototype.add=function(t,_){return this.__schemas__[t]=_,a(this),this},m.prototype.set=function(t){return this.__opts__=r(this.__opts__,t),this},m.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let _,e,s,r,i,c,n,o,h;if(this.re.schema_test.test(t))for(n=this.re.schema_search,n.lastIndex=0;null!==(_=n.exec(t));)if(r=this.testSchemaAt(t,_[2],n.lastIndex),r){this.__schema__=_[2],this.__index__=_.index+_[1].length,this.__last_index__=_.index+_[0].length+r;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(o=t.search(this.re.host_fuzzy_test),o>=0&&(this.__index__<0||o<this.__index__)&&null!==(e=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(i=e.index+e[1].length,(this.__index__<0||i<this.__index__)&&(this.__schema__="",this.__index__=i,this.__last_index__=e.index+e[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(h=t.indexOf("@"),h>=0&&null!==(s=t.match(this.re.email_fuzzy))&&(i=s.index+s[1].length,c=s.index+s[0].length,(this.__index__<0||i<this.__index__||i===this.__index__&&c>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=i,this.__last_index__=c))),this.__index__>=0},m.prototype.pretest=function(t){return this.re.pretest.test(t)},m.prototype.testSchemaAt=function(t,_,e){return this.__compiled__[_.toLowerCase()]?this.__compiled__[_.toLowerCase()].validate(t,e,this):0},m.prototype.match=function(t){const _=[];let e=0;this.__index__>=0&&this.__text_cache__===t&&(_.push(p(this,e)),e=this.__last_index__);let s=e?t.slice(e):t;for(;this.test(s);)_.push(p(this,e)),s=s.slice(this.__last_index__),e+=this.__last_index__;return _.length?_:null},m.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const _=this.re.schema_at_start.exec(t);if(!_)return null;const e=this.testSchemaAt(t,_[2],_[0].length);return e?(this.__schema__=_[2],this.__index__=_.index+_[1].length,this.__last_index__=_.index+_[0].length+e,p(this,0)):null},m.prototype.tlds=function(t,_){return t=Array.isArray(t)?t:[t],_?(this.__tlds__=this.__tlds__.concat(t).sort().filter((function(t,_,e){return t!==e[_-1]})).reverse(),a(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,a(this),this)},m.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),"mailto:"!==t.schema||/^mailto:/i.test(t.url)||(t.url="mailto:"+t.url)},m.prototype.onCompile=function(){};export{m as L};

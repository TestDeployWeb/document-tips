import{C as f,D as y,ac as k,K as x,L as a,J as e,ad as E,_ as C,N as T,G as p,H as u,O as $}from"./index.890965bf.js";const A=(t,n)=>{const o=t.__vccOpts||t;for(const[d,s]of n)o[d]=s;return o},i={quote:/("(?:\\"|[^"])*")|('(?:\\'|[^'])*')/,comment:/(\/\/.*?(?:\n|$)|\/\*.*?\*\/)/,htmlTag:/(<([^>])*>)/,htmlentity:/(&amp;[a-zA-Z0-9#]+;)/,punctuation:/(!==?|(?:[[\](){}.:;,+\-?=!]|&lt;|&gt;)+|&&|\|\|)/,number:/(-?(?:\.\d+|\d+(?:\.\d+)?))/,boolean:/\b(true|false)\b/},b={shell:{quote:i.quote,comment:/(#.*?)(?:\n|$)/,keyword:/(?:^|\b)(npm|yarn|install|run)(?:\b|$)/,param:/( --(?:save|save-dev))(?:\s|$)/},xml:{doctype:/(&lt;\!DOCTYPE.*?&gt;)/,quote:i.quote,comment:/(&lt;!--.*?--&gt;)/,htmlentity:i.htmlentity,tag:/(&lt;\/?)([a-zA-Z\-:]+)(.*?)(\/?&gt;)/},html:{doctype:/(DOCTYPE)/,quote:i.quote,comment:/(&lt;!--.*?--&gt;)/,htmlentity:i.htmlentity,tag:/(&lt;\/?)([a-z]\w*)(.*?)(\/?&gt;)/},"html-vue":{doctype:/(DOCTYPE)/,quote:i.quote,comment:/(&lt;!--.*?--&gt;)/,htmlentity:i.htmlentity,tag:/(&lt;\/?)([a-zA-Z][\w\d-]*)((?:.|\s)*?)(\/?&gt;)/},pug:{text:/((?:^|\n)[ \t]*|^)\|([ \t]*)([^\n]+(?=\s*(?:\n|$)))/,text2:/([ \t]*)([.#\-\w\d]+(?:\([^)]*\))*)\.\n((?:\n+(?=\4[ \t]+)|(?=\4[ \t]+).+?(?:\n|$)*?)*)(?=\s*(?:\n|$))/,quote:i.quote,comment:/(^|\n)([ \t]*|^)(\/\/-[ \t]*(?:[^\n]*?(?:\n\10[ \t]+[^\n]*)+|[^\n]+(?=\n|$)))/,tag:/([a-zA-Z][\w\d-]*|)([.#][a-zA-Z][-.\w\d]*|)\b(?:\((.*?)\))?(\.?)([ \t]*)([^\n]+)?(?=\n|$)/,punctuation:/(!==?|(?:[#[\]().,+\-?=!|]|&lt;|&gt;)+)/},css:{quote:i.quote,comment:/(\/\*.*?\*\/)/,pseudo:/(:(?:hover|active|focus|visited|not|before|after|(?:first|last|nth)-child))/,"selector keyword vendor":/(@-(?:moz|o|webkit|ms)-(?=keyframes\s))/,"selector keyword":/((?:@(?:import|media|font-face|keyframes)|screen|print|and)(?=[\s({])|keyframes|\s(?:ul|ol|li|table|div|pre|p|a|img|br|hr|h[1-6]|em|strong|span|html|body|iframe|video|audio|input|button|form|label|fieldset|small|abbr|i|dd|dt)\b)(?=.*\{})/,variable:/(--[a-zA-Z0-9\-]+)/,selector:/((?:[.#-\w*+ >:,[\]="~\n]|&gt;)+)(?=\s*\{)/,"attribute keyword vendor":/(-(?:moz|o|webkit|ms)-(?=transform|transition|user-select|tap-highlight-color|animation|background-size|box-shadow))/,"attribute keyword":/\b(content|float|display|position|top|left|right|bottom|(?:(?:max|min)-)?width|(?:(?:max|min|line)-)?height|font(?:-(?:family|style|size|weight|variant|stretch))?|vertical-align|color|opacity|visibility|z-index|pointer-events|user-select|transform(?:-(?:origin|style|delay|duration|property|timing-function))?|transition(?:-(?:delay|duration))?|animation(?:-(?:name|delay|duration|direction|fill-mode))?|backface-visibility|backdrop-filter|background(?:-(?:color|position|image|repeat|size|attachment|origin|clip|blend-mode))?|(?:padding|margin|border)(?:-(?:top|left|right|bottom))?|border(?:-(?:radius|color|width|style|spacing))|white-space|text-(?:align|transform|decoration|shadow|indent)|overflow(?:-(?:x|y))?|(?:letter|word)-spacing|word-break|box-(?:sizing|shadow)|stroke(?:-(?:width|opacity|dasharray|dashoffset|linecap|linejoin))?|fill|speak|outline|user-select|cursor|flex(?:-(?:direction|flow|grow|shrink|basis|wrap))?|(?:justify|align)-(?:content|self|items))(?=\s*:)/,"value keyword vendor":/(-(?:moz|o|webkit|ms)-(?=linear-gradient))/,"value keyword":/\b(inherit|initial|normal|none|unset|auto|inline(?:-(?:block|flex))?|block|flex|absolute|relative|static|fixed|sticky|hidden|visible|top|left|right|bottom|center|middle|baseline|solid|dotted|dashed|line-through|(?:over|under)line|wavy|double|(?:pre-|no)?wrap|pre|break-word|(?:upper|lower)case|capitalize|italic|bold|attr\(.*?\)|linear|ease(?:-in)?(?:-out)?|all|infinite|cubic-bezier|(?:translate|rotate)(?:[X-Z]|3d)?|skew[XY]?|scale|(?:no-)?repeat|repeat(?:-x|-y)|contain|cover|url|(?:repeating-)?(?:linear|radial)-gradient|inset|pointer|(?:flex-)?(?:start|end)|space-(?:between|evenly|around)|stretch|revert|row(?:-reverse)?|column(?:-reverse)?)(?=\s*[,;}(]|\s+[\da-z!])/,"value keyword important":/( ?!important)/,number:i.number,color:/(transparent|#(?:[\da-fA-F]{6}|[\da-fA-F]{3})|rgba?\([\d., ]*\))/,htmlentity:/(&.*?;)/,punctuation:/([:,;{}@#()!]+|&lt;|&gt;)/,attribute:/([a-zA-Z-]+)(?=\s*:)/,unit:/(px|pt|cm|%|r?em|m?s|deg|vh|vw|vmin|vmax)(?=(?:\s*[;,{}})]|\s+[-\da-z#]))/},json:{quote:i.quote,comment:i.comment,number:i.number,boolean:i.boolean,punctuation:/([[\](){}:;,-]+)/},js:{quote:i.quote,comment:i.comment,number:/\b(\d+(?:\.\d+)?|null)\b/,boolean:i.boolean,this:/\b(this)(?=\W)/,keyword:/\b(new|getElementsBy(?:Tag|Class|)Name|getElementById|querySelector|querySelectorAll|arguments|if|else|do|return|case|default|(?:f|F)unction|typeof|instanceof|undefined|document|window|while|for|forEach|switch|in|break|continue|delete|length|var|let|const|export|import|as|require|from|Class|constructor|Number|Boolean|String|Array|Object|RegExp|Integer|Date|Promise|async|await|(?:clear|set)(?:Timeout|Interval)|parse(?:Int|Float)|Math(?=\.)|isNaN)(?=\W)/,punctuation:/(!==?|(?:[[\]!(){}:;,+\-%*/?=]|&lt;|&gt;)+|\.+(?![a-zA-Z])|&amp;&amp;|\|\|)/,variable:/(\.?[a-zA-Z_][\w\d]*)/,htmlentity:/(&.*?;)/,"external-var":/(\$|jQuery|JSON)(?=\W|$)/},php:{quote:i.quote,comment:i.comment,special:/(&lt;\?php|\?&gt;|__(?:DIR|FILE|LINE)__)/,punctuation:i.punctuation,number:i.number,boolean:i.boolean,variable:/(\$[\w\d_]+)/,keyword:/\b(define|echo|die|exit|print_r|var_dump|if|else|elseif|do|return|case|default|function|\$this|while|foreach|for|switch|in|break|continue|empty|isset|unset|parse_ini_file|session_(?:start|destroy|id)|header|json_(?:encode|decode)|error_log|(require|include)(:?_once)?|try|throw|new|Exception|catch|finally|preg_(?:match|replace)|list|strlen|substr|str_replace|array_(?:keys|values))(?=\W|$)/},sql:{quote:i.quote,comment:/((?:\-\-|#)\s.*?(?:\n|$)|\/\*.*?\*\/)/,punctuation:i.punctuation,number:/\b(\d+(?:\.\d+)?|null)\b/,boolean:i.boolean,keyword:/\b(\*|CREATE|DATABASE|TABLE|GRANT|ALL|PRIVILEGES|IDENTIFIED|FLUSH|ALTER|MODIFY|DROP|TRUNCATE|CONSTRAINT|ADD|(?:(?:PRIMARY|FOREIGN|UNIQUE) )?KEY|REFERENCES|AUTO_INCREMENT|COMMENT|DEFAULT|UNSIGNED|CHARSET|COLLATE|CHARACTER|ENGINE|SQL_MODE|USE|IF|NOT|NULL|EXISTS|SELECT|UPDATE|DELETE|INSERT(?: INTO)?|VALUES|SET|FROM|WHERE|(?:ORDER|GROUP) BY|LIMIT|(?:(?:LEFT|RIGHT|INNER|OUTER) |)JOIN|AS|ON|COUNT|CASE|TO|WHEN|BETWEEN|AND|OR|IN|LIKE|CONCAT|CURRENT_TIMESTAMP)(?=\W|$)/,"var-type":/\b((?:var)?char|(?:tiny|small|medium|big)?int|decimal|float|double|real|bit|boolean|date(?:time)?|time(?:stamp)?|year|(?:tiny|medium|long)?(?:text|blob)|enum)\b/}},N={xml:/(\s*)([a-zA-Z\d\-:]+)=("|')(.*?)\3/g,html:/(\s*)([a-zA-Z-]+)=("|')(.*?)\3/g,"html-vue":/(\s*)([@:#]?[a-zA-Z\d-]+)(?:(?:=("|')(.*?)\3)|)/g,pug:/(\s*|,)([@:#]?[a-zA-Z\d-]+)(?:(?:=("|')(.*?)\3)|)/g},q={shell:{quote:2},xml:{quote:2,tag:4},html:{quote:2,tag:4},"html-vue":{quote:2,tag:4},pug:{text:3,text2:3,quote:2,comment:3,tag:6},json:{quote:2},php:{quote:2},sql:{quote:2},css:{quote:2},js:{quote:2}},_=t=>t.map(n=>{if(!n.children||typeof n.children=="string")return n.children||"";if(Array.isArray(n.children))return _(n.children);if(n.children.default)return _(n.children.default())}).join(""),I={name:"sshpre",props:{language:{type:String,default:""},label:{type:[String,Boolean],default:!1},reactive:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},copyButton:{type:Boolean,default:!1}},data:()=>({knownLanguages:Object.keys(b),content:"",slotTexts:""}),methods:{htmlize(t){return t.replace(/&(lt|gt|amp);/g,(n,o)=>({lt:"<",gt:">",amp:"&"})[o])},unhtmlize(t){return t.replace(/[<>]/g,n=>({"<":"&lt;",">":"&gt;"})[n])},isColorDark(t){let n,o,d,s,l,c;if(n=t.match(/rgba?\((.*),\s*(.*),\s*(.*?)(?:,\s*([^)]*))\)/))d=parseInt(n[1])<=100,s=parseInt(n[2])<=100,l=parseInt(n[3])<=100,c=parseFloat(n[4])<.3;else if(o=t.match(/#([\da-f]{3}(?:[\da-f]{3})?)/)){const r=o[1].length===3;d=parseInt(o[1][0])<=9,s=parseInt(o[1][r?1:2])<=9,l=parseInt(o[1][r?2:4])<=9}return(d&&s&&l||d&&s&&!l||!d&&s&&l)&&!c},createRegexPattern(){let t="";const n=[];for(const o in b[this.language]){const d=q[this.language][o]||1;for(let s=0;s<d;s++)n.push(o);t+=(t?"|":"")+b[this.language][o].source}return[t,n]},syntaxHighlightHtmlTag(t){const n=(d,s,l,c,r)=>`${s}<span class="attribute">${l}</span>`+(r?'<span class="punctuation">=</span>':"")+(r?`<span class="quote">${c||""}${r||""}${c||""}</span>`:"");let o=(t[2]||"").replace(N[this.language],n);if(this.language==="pug"){const d=(t[1]||"").replace(/#[a-z\d-]+/g,s=>`<span class="id">${s}</span>`).replace(/\.[a-z\d-]+/g,s=>`<span class="class">${s}</span>`);return o&&(o='<span class="punctuation">(</span>'+o+'<span class="punctuation">)</span>'),`<span class="tag-name">${t[0]||""}</span>${d}${o}`+(t[3]?'<span class="punctuation">.</span>':"")+(t[4]||"")+(t[5]?`<span class="text">${t[5]}</span>`:"")}return`<span class="punctuation">${t[0]}</span><span class="tag-name">${t[1]}</span>`+o+`<span class="punctuation">${t[3]}</span>`},syntaxHighlightContent(t){if(!this.knownLanguages.includes(this.language))return t;const[n,o]=this.createRegexPattern();return this.unhtmlize(t).replace(new RegExp(n,"gs"),(d,...s)=>{s=s.slice(0,s.length-2);let l;const c=this.language==="pug";let r=s.find((h,m)=>h&&(l=o[m])&&h);if(l==="quote")r=this.unhtmlize(r);else if(l==="comment")if(c){const[h,m,g]=s.slice(o.indexOf("comment"));r=`${h}${m}${this.unhtmlize(g)}`}else r=this.unhtmlize(r);else{if(l==="text"&&c)return`${s[0]}<span class="punctuation">|</span>${s[1]}<span class="text">${s[2]}</span>`;if(l==="text2"&&c){const[,,,h,m,g]=s,w=this.syntaxHighlightContent(m);return`${h}${w}<span class="punctuation">.</span>
<span class="text">${g}</span>`}else{if(l==="tag"&&["xml","html","html-vue","pug"].includes(this.language))return this.syntaxHighlightHtmlTag(s.slice(o.indexOf("tag")));if(l==="variable"&&r[0]==="."&&this.language==="js")return`<span class="punctuation">.</span><span class="obj-attr">${r.substr(1)}</span>`}}let v="";return l==="color"&&this.language==="css"&&(v=` style="background-color: ${r};color: #${this.isColorDark(r)?"fff":"000"}"`),l&&`<span class="${l}"${v}>${r}</span>`||""})},checkSlots(){const t=this.$slots.default&&_(this.$slots.default())||"";this.slotTexts!==t&&(this.slotTexts=t,this.content=this.syntaxHighlightContent(this.slotTexts))},copyCode(t){t.target.insertAdjacentHTML("afterend",`<textarea id="clipboard-textarea">${this.$refs.code.innerText}</textarea>`);const n=document.getElementById("clipboard-textarea");n.select(),n.setSelectionRange(0,99999),document.execCommand("copy"),n.remove(),this.$emit("copied",this.$refs.code.innerText)}},mounted(){this.checkSlots()}},S=["data-type","data-label","reactive"],z=["innerHTML"];function R(t,n,o,d,s,l){return f(),y("div",{class:E(["ssh-pre",{"ssh-pre--dark":o.dark}]),"data-type":o.language,"data-label":o.label||null,reactive:o.reactive&&l.checkSlots()||null},[o.copyButton?(f(),y("button",{key:0,class:"ssh-pre__copy",onClick:n[0]||(n[0]=(...c)=>l.copyCode&&l.copyCode(...c))},[k(t.$slots,"copy-button",{},()=>[a("Copy")])])):x("",!0),a(),e("pre",{ref:"code",class:"ssh-pre__content",innerHTML:t.content},null,8,z)],10,S)}const D=A(I,[["render",R]]);const O=T({components:{SshPre:D},setup(){}}),L={class:"tw-p-4 tw-mx-auto"},j=e("header",null,[e("h2",{class:"tw-text-center tw-text-4xl tw-font-bold"},`
        H2 database document tips
      `)],-1),H={class:"tw-p-5"},B=e("h3",{class:"tw-text-lg tw-font-semibold"},`
          I. H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng H2 database trong Spring Boot
        `,-1),U={class:"content tw-px-2"},M={class:"path-one"},F=e("h4",{class:"tw-font-semibold"},"1. C\u1EA5u h\xECnh database",-1),Z={class:"description tw-px-3"},P=e("p",null,`
                M\u1EB7c \u0111\u1ECBnh Spring Boot s\u1EBD c\u1EA5u h\xECnh t\u1EF1 \u0111\u1ED9ng cho H2 ho\u1EA1t \u0111\u1ED9ng tr\xEAn
                memory v\u1EDBi username l\xE0 sa v\xE0 m\u1ED9t pa ssword r\u1ED7ng.
              `,-1),J=e("p",null,`
                Tuy nhi\xEAn ch\xFAng ta c\xF3 th\u1EC3 thay \u0111\u1ED5i c\xE1c c\u1EA5u h\xECnh m\u1EB7c \u0111\u1ECBnh n\xE0y
                b\u1EB1ng c\xE1ch th\xEAm c\xE1c thu\u1ED9c t\xEDnh sau v\xE0o file
                application.properties.
              `,-1),G=e("i",{class:"icon material-icons"},"material-icons content_copy",-1),W={class:"path-two"},Y=e("h4",{class:"tw-font-semibold"},"2. H2 \u2013 file-based storage",-1),V={class:"description tw-x-3"},K=e("p",null,`
                Nh\u01B0 \u0111\xE3 \u0111\u1EC1 c\u1EADp \u1EDF tr\xEAn th\xEC m\u1EB7c \u0111\u1ECBnh H2 s\u1EBD l\u01B0u d\u1EEF li\u1EC7u tr\xEAn memory,
                n\u1EBFu c\xE1c b\u1EA1n kh\xF4ng mu\u1ED1n d\u1EEF li\u1EC7u b\u1ECB m\u1EA5t sau m\u1ED7i l\u1EA7n kh\u1EDFi \u0111\u1ED9ng l\u1EA1i
                th\xEC ch\xFAng ta c\xF3 th\u1EC3 c\u1EA5u h\xECnh th\xF4ng qua thu\u1ED9c t\xEDnh
                spring.datasource.url.
              `,-1),Q=e("i",{class:"icon material-icons"},"material-icons content_copy",-1),X=e("p",null,`
                \u0110\u1EC3 t\u1EA1o table books trong H2 database, ch\xFAng ta c\xF3 th\u1EC3 s\u1EED d\u1EE5ng
                ch\u1EE9c n\u0103ng c\u1EE7a hibernate v\u1EDBi c\u1EA5u h\xECnh
                spring.jpa.hibernate.ddl-auto. V\u1EDBi c\u1EA5u h\xECnh n\xE0y Spring boot s\u1EBD
                t\u1EF1 \u0111\u1ED9ng ph\xE2n t\xEDch Book entity v\xE0 kh\u1EDFi t\u1EA1o table t\u01B0\u01A1ng \u1EE9ng trong
                database.
              `,-1),tt=e("i",{class:"icon material-icons"},"material-icons content_copy",-1),et=e("p",{class:"tw-font-semibold"},`
                L\u01B0u \xFD sau l\u1EA7n \u0111\u1EA7u kh\u1EDFi ch\u1EA1y, database \u0111\xE3 \u0111\u01B0\u1EE3c kh\u1EDFi t\u1EA1o th\xEC h\xE3y
                t\u1EAFt c\u1EA5u h\xECnh n\xE0y \u0111i nh\xE9. N\u1EBFu kh\xF4ng \u1EDF l\u1EA7n sau kh\u1EDFi ch\u1EA1y n\xF3 s\u1EBD t\u1EF1
                \u0111\u1ED9ng x\xF3a v\xE0 kh\u1EDFi t\u1EA1o database m\u1EDBi \u0111\u1ED3ng ngh\u0129a v\u1EDBi vi\u1EC7c d\u1EEF li\u1EC7u \u1EDF
                nh\u1EEFng l\u1EA7n tr\u01B0\u1EDBc c\u1EE7a b\u1EA1n s\u1EBD b\u1ECB bi\u1EBFn m\u1EA5t.
              `,-1),nt=e("p",null,[a(`
                M\u1ED9t c\xE1ch kh\xE1c c\xE1c b\u1EA1n c\xF3 th\u1EC3 \u0111\u1ECBnh ngh\u0129a c\xE1c file schema.sql v\xE0
                data.sql \u0111\u1EB7t trong src/main/resources/. Trong \u0111\xF3 schema.sql \u0111\u01B0\u1EE3c
                d\xF9ng \u0111\u1EC3 kh\u1EDFi t\u1EA1o c\u1EA5u tr\xFAc c\xE1c b\u1EA3ng, data.sql d\xF9ng \u0111\u1EC3 th\xEAm d\u1EEF
                li\u1EC7u. Spring Boot s\u1EBD t\u1EF1 \u0111\u1ED9ng t\xECm ki\u1EBFm v\xE0 th\u1EF1c thi ch\xFAng.`),e("br"),a(`
                Tuy nhi\xEAn \u0111\u1EC3 nh\u1EEFng file n\xE0y ch\u1EAFc ch\u1EAFn \u0111\u01B0\u1EE3c th\u1EF1c thi, ch\xFAng ta
                c\u1EA7n th\xEAm c\xE1c c\u1EA5u h\xECnh sau v\xE0o file application.propertites.
              `)],-1),at=e("i",{class:"icon material-icons"},"material-icons content_copy",-1),ot=e("p",{class:"tw-font-semibold"},`
                L\u01B0u \xFD sau l\u1EA7n \u0111\u1EA7u \u0111\u01B0\u1EE3c kh\u1EDFi ch\u1EA1y, c\xE1c b\u1EA1n ph\u1EA3i t\u1EAFt c\u1EA5u h\xECnh
                spring.datasource.initialization-mode=always n\u1EBFu kh\xF4ng th\xEC d\u1EEF
                li\u1EC7u c\u0169 c\u0169ng s\u1EBD b\u1ECB x\xF3a \u1EDF l\u1EA7n kh\u1EDFi ch\u1EA1y sau.
              `,-1),st={class:"path-three"},it=e("h4",{class:"tw-font-semibold"},"3. H2 Console",-1),lt={class:"description tw-px-3"},ct=e("p",null,[a(`
                \u0110\u1EC3 hi\u1EC3n th\u1ECB UI h2-database: (URL:
                `),e("span",{class:"tw-text-blue-500"},"http://localhost:8080/h2-console"),a(`)
              `)],-1),rt=e("i",{class:"icon material-icons"},"material-icons content_copy",-1),dt=e("p",null,`
                Ngo\xE0i ra c\u0169ng c\xF3 m\u1ED9t s\u1ED1 c\u1EA5u h\xECnh \u0111\u01B0\u01A1c khuy\xEAn n\xEAn s\u1EED d\u1EE5ng \u0111\u1EC3 t\u0103ng
                t\xEDnh b\u1EA3o m\u1EADt cho h2 database
              `,-1),ut=e("i",{class:"icon material-icons"},"material-icons content_copy",-1),ht=e("p",{class:"tw-font-semibold"},`
                Thu\u1ED9c t\xEDnh spring.h2.console.settings.trace=false \u0111\u1EC3 ng\u0103n ch\u1EB7n
                c\xE1c d\u1EA5u v\u1EBFt c\u1EE7a database xu\u1EA5t ra b\xEAn ngo\xE0i v\xE0
                spring.h2.console.settings.web-allow-other t\u1EAFt t\xEDnh n\u0103ng k\u1EBFt n\u1ED1i
                t\u1EEB xa \u0111\u1EBFn database.
              `,-1);function pt(t,n,o,d,s,l){const c=$("ssh-pre");return f(),y("div",L,[j,a(),e("main",H,[e("section",null,[B,a(),e("div",U,[e("div",M,[F,a(),e("div",Z,[P,a(),J,a(),p(c,{language:"js",label:"Javascript","copy-button":"",onCopied:t.onCopiedDoSomething},{"copy-button":u(()=>[G]),default:u(()=>[a(`
                spring.datasource.url=jdbc:h2:mem:bookdb;
                spring.datasource.driverClassName=org.h2.Driver
                spring.datasource.username=sa
                spring.datasource.password=password
                spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
              `)]),_:1},8,["onCopied"])])]),a(),e("div",W,[Y,a(),e("div",V,[K,a(),p(c,{language:"js",label:"Javascript","copy-button":"",onCopied:t.onCopiedDoSomething},{"copy-button":u(()=>[Q]),default:u(()=>[a(`
                spring.datasource.url = jdbc:h2:file:C:/data/sample
              `)]),_:1},8,["onCopied"]),a(),X,a(),p(c,{language:"js",label:"Javascript","copy-button":"",onCopied:t.onCopiedDoSomething},{"copy-button":u(()=>[tt]),default:u(()=>[a(`
                spring.jpa.hibernate.ddl-auto=create-drop
              `)]),_:1},8,["onCopied"]),a(),et,a(),nt,a(),p(c,{language:"js",label:"Javascript","copy-button":"",onCopied:t.onCopiedDoSomething},{"copy-button":u(()=>[at]),default:u(()=>[a(`
                spring.jpa.hibernate.ddl-auto=none
                spring.datasource.initialization-mode=always
              `)]),_:1},8,["onCopied"]),a(),ot])]),a(),e("div",st,[it,a(),e("div",lt,[ct,a(),p(c,{language:"js",label:"Javascript","copy-button":"",onCopied:t.onCopiedDoSomething},{"copy-button":u(()=>[rt]),default:u(()=>[a(`
                spring.h2.console.enabled=true
              `)]),_:1},8,["onCopied"]),a(),dt,a(),p(c,{language:"js",label:"Javascript","copy-button":"",onCopied:t.onCopiedDoSomething},{"copy-button":u(()=>[ut]),default:u(()=>[a(`
                spring.h2.console.path=/h2-console
                spring.h2.console.settings.trace=false
                spring.h2.console.settings.web-allow-others=false
              `)]),_:1},8,["onCopied"]),a(),ht])])])])])])}var gt=C(O,[["render",pt]]);export{gt as default};

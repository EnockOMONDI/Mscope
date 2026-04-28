(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,811583,(e,r,a)=>{!function(i){var t=r&&r.exports==a&&r,n=e.g;(n.global===n||n.window===n)&&(i=n);var o=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,s=/[\x01-\x7F]/g,l=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,u=/<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,c={"­":"shy","‌":"zwnj","‍":"zwj","‎":"lrm","⁣":"ic","⁢":"it","⁡":"af","‏":"rlm","​":"ZeroWidthSpace","⁠":"NoBreak","̑":"DownBreve","⃛":"tdot","⃜":"DotDot","	":"Tab","\n":"NewLine"," ":"puncsp"," ":"MediumSpace"," ":"thinsp"," ":"hairsp"," ":"emsp13"," ":"ensp"," ":"emsp14"," ":"emsp"," ":"numsp"," ":"nbsp","  ":"ThickSpace","‾":"oline",_:"lowbar","‐":"dash","–":"ndash","—":"mdash","―":"horbar",",":"comma",";":"semi","⁏":"bsemi",":":"colon","⩴":"Colone","!":"excl","¡":"iexcl","?":"quest","¿":"iquest",".":"period","‥":"nldr","…":"mldr","·":"middot","'":"apos","‘":"lsquo","’":"rsquo","‚":"sbquo","‹":"lsaquo","›":"rsaquo",'"':"quot","“":"ldquo","”":"rdquo","„":"bdquo","«":"laquo","»":"raquo","(":"lpar",")":"rpar","[":"lsqb","]":"rsqb","{":"lcub","}":"rcub","⌈":"lceil","⌉":"rceil","⌊":"lfloor","⌋":"rfloor","⦅":"lopar","⦆":"ropar","⦋":"lbrke","⦌":"rbrke","⦍":"lbrkslu","⦎":"rbrksld","⦏":"lbrksld","⦐":"rbrkslu","⦑":"langd","⦒":"rangd","⦓":"lparlt","⦔":"rpargt","⦕":"gtlPar","⦖":"ltrPar","⟦":"lobrk","⟧":"robrk","⟨":"lang","⟩":"rang","⟪":"Lang","⟫":"Rang","⟬":"loang","⟭":"roang","❲":"lbbrk","❳":"rbbrk","‖":"Vert","§":"sect","¶":"para","@":"commat","*":"ast","/":"sol",undefined:null,"&":"amp","#":"num","%":"percnt","‰":"permil","‱":"pertenk","†":"dagger","‡":"Dagger","•":"bull","⁃":"hybull","′":"prime","″":"Prime","‴":"tprime","⁗":"qprime","‵":"bprime","⁁":"caret","`":"grave","´":"acute","˜":"tilde","^":"Hat","¯":"macr","˘":"breve","˙":"dot","¨":"die","˚":"ring","˝":"dblac","¸":"cedil","˛":"ogon",ˆ:"circ",ˇ:"caron","°":"deg","©":"copy","®":"reg","℗":"copysr",℘:"wp","℞":"rx","℧":"mho","℩":"iiota","←":"larr","↚":"nlarr","→":"rarr","↛":"nrarr","↑":"uarr","↓":"darr","↔":"harr","↮":"nharr","↕":"varr","↖":"nwarr","↗":"nearr","↘":"searr","↙":"swarr","↝":"rarrw","↝̸":"nrarrw","↞":"Larr","↟":"Uarr","↠":"Rarr","↡":"Darr","↢":"larrtl","↣":"rarrtl","↤":"mapstoleft","↥":"mapstoup","↦":"map","↧":"mapstodown","↩":"larrhk","↪":"rarrhk","↫":"larrlp","↬":"rarrlp","↭":"harrw","↰":"lsh","↱":"rsh","↲":"ldsh","↳":"rdsh","↵":"crarr","↶":"cularr","↷":"curarr","↺":"olarr","↻":"orarr","↼":"lharu","↽":"lhard","↾":"uharr","↿":"uharl","⇀":"rharu","⇁":"rhard","⇂":"dharr","⇃":"dharl","⇄":"rlarr","⇅":"udarr","⇆":"lrarr","⇇":"llarr","⇈":"uuarr","⇉":"rrarr","⇊":"ddarr","⇋":"lrhar","⇌":"rlhar","⇐":"lArr","⇍":"nlArr","⇑":"uArr","⇒":"rArr","⇏":"nrArr","⇓":"dArr","⇔":"iff","⇎":"nhArr","⇕":"vArr","⇖":"nwArr","⇗":"neArr","⇘":"seArr","⇙":"swArr","⇚":"lAarr","⇛":"rAarr","⇝":"zigrarr","⇤":"larrb","⇥":"rarrb","⇵":"duarr","⇽":"loarr","⇾":"roarr","⇿":"hoarr","∀":"forall","∁":"comp","∂":"part","∂̸":"npart","∃":"exist","∄":"nexist","∅":"empty","∇":"Del","∈":"in","∉":"notin","∋":"ni","∌":"notni","϶":"bepsi","∏":"prod","∐":"coprod","∑":"sum","+":"plus","±":"pm","÷":"div","×":"times","<":"lt","≮":"nlt","<⃒":"nvlt","=":"equals","≠":"ne","=⃥":"bne","⩵":"Equal",">":"gt","≯":"ngt",">⃒":"nvgt","¬":"not","|":"vert","¦":"brvbar","−":"minus","∓":"mp","∔":"plusdo","⁄":"frasl","∖":"setmn","∗":"lowast","∘":"compfn","√":"Sqrt","∝":"prop","∞":"infin","∟":"angrt","∠":"ang","∠⃒":"nang","∡":"angmsd","∢":"angsph","∣":"mid","∤":"nmid","∥":"par","∦":"npar","∧":"and","∨":"or","∩":"cap","∩︀":"caps","∪":"cup","∪︀":"cups","∫":"int","∬":"Int","∭":"tint","⨌":"qint","∮":"oint","∯":"Conint","∰":"Cconint","∱":"cwint","∲":"cwconint","∳":"awconint","∴":"there4","∵":"becaus","∶":"ratio","∷":"Colon","∸":"minusd","∺":"mDDot","∻":"homtht","∼":"sim","≁":"nsim","∼⃒":"nvsim","∽":"bsim","∽̱":"race","∾":"ac","∾̳":"acE","∿":"acd","≀":"wr","≂":"esim","≂̸":"nesim","≃":"sime","≄":"nsime","≅":"cong","≇":"ncong","≆":"simne","≈":"ap","≉":"nap","≊":"ape","≋":"apid","≋̸":"napid","≌":"bcong","≍":"CupCap","≭":"NotCupCap","≍⃒":"nvap","≎":"bump","≎̸":"nbump","≏":"bumpe","≏̸":"nbumpe","≐":"doteq","≐̸":"nedot","≑":"eDot","≒":"efDot","≓":"erDot","≔":"colone","≕":"ecolon","≖":"ecir","≗":"cire","≙":"wedgeq","≚":"veeeq","≜":"trie","≟":"equest","≡":"equiv","≢":"nequiv","≡⃥":"bnequiv","≤":"le","≰":"nle","≤⃒":"nvle","≥":"ge","≱":"nge","≥⃒":"nvge","≦":"lE","≦̸":"nlE","≧":"gE","≧̸":"ngE","≨︀":"lvnE","≨":"lnE","≩":"gnE","≩︀":"gvnE","≪":"ll","≪̸":"nLtv","≪⃒":"nLt","≫":"gg","≫̸":"nGtv","≫⃒":"nGt","≬":"twixt","≲":"lsim","≴":"nlsim","≳":"gsim","≵":"ngsim","≶":"lg","≸":"ntlg","≷":"gl","≹":"ntgl","≺":"pr","⊀":"npr","≻":"sc","⊁":"nsc","≼":"prcue","⋠":"nprcue","≽":"sccue","⋡":"nsccue","≾":"prsim","≿":"scsim","≿̸":"NotSucceedsTilde","⊂":"sub","⊄":"nsub","⊂⃒":"vnsub","⊃":"sup","⊅":"nsup","⊃⃒":"vnsup","⊆":"sube","⊈":"nsube","⊇":"supe","⊉":"nsupe","⊊︀":"vsubne","⊊":"subne","⊋︀":"vsupne","⊋":"supne","⊍":"cupdot","⊎":"uplus","⊏":"sqsub","⊏̸":"NotSquareSubset","⊐":"sqsup","⊐̸":"NotSquareSuperset","⊑":"sqsube","⋢":"nsqsube","⊒":"sqsupe","⋣":"nsqsupe","⊓":"sqcap","⊓︀":"sqcaps","⊔":"sqcup","⊔︀":"sqcups","⊕":"oplus","⊖":"ominus","⊗":"otimes","⊘":"osol","⊙":"odot","⊚":"ocir","⊛":"oast","⊝":"odash","⊞":"plusb","⊟":"minusb","⊠":"timesb","⊡":"sdotb","⊢":"vdash","⊬":"nvdash","⊣":"dashv","⊤":"top","⊥":"bot","⊧":"models","⊨":"vDash","⊭":"nvDash","⊩":"Vdash","⊮":"nVdash","⊪":"Vvdash","⊫":"VDash","⊯":"nVDash","⊰":"prurel","⊲":"vltri","⋪":"nltri","⊳":"vrtri","⋫":"nrtri","⊴":"ltrie","⋬":"nltrie","⊴⃒":"nvltrie","⊵":"rtrie","⋭":"nrtrie","⊵⃒":"nvrtrie","⊶":"origof","⊷":"imof","⊸":"mumap","⊹":"hercon","⊺":"intcal","⊻":"veebar","⊽":"barvee","⊾":"angrtvb","⊿":"lrtri","⋀":"Wedge","⋁":"Vee","⋂":"xcap","⋃":"xcup","⋄":"diam","⋅":"sdot","⋆":"Star","⋇":"divonx","⋈":"bowtie","⋉":"ltimes","⋊":"rtimes","⋋":"lthree","⋌":"rthree","⋍":"bsime","⋎":"cuvee","⋏":"cuwed","⋐":"Sub","⋑":"Sup","⋒":"Cap","⋓":"Cup","⋔":"fork","⋕":"epar","⋖":"ltdot","⋗":"gtdot","⋘":"Ll","⋘̸":"nLl","⋙":"Gg","⋙̸":"nGg","⋚︀":"lesg","⋚":"leg","⋛":"gel","⋛︀":"gesl","⋞":"cuepr","⋟":"cuesc","⋦":"lnsim","⋧":"gnsim","⋨":"prnsim","⋩":"scnsim","⋮":"vellip","⋯":"ctdot","⋰":"utdot","⋱":"dtdot","⋲":"disin","⋳":"isinsv","⋴":"isins","⋵":"isindot","⋵̸":"notindot","⋶":"notinvc","⋷":"notinvb","⋹":"isinE","⋹̸":"notinE","⋺":"nisd","⋻":"xnis","⋼":"nis","⋽":"notnivc","⋾":"notnivb","⌅":"barwed","⌆":"Barwed","⌌":"drcrop","⌍":"dlcrop","⌎":"urcrop","⌏":"ulcrop","⌐":"bnot","⌒":"profline","⌓":"profsurf","⌕":"telrec","⌖":"target","⌜":"ulcorn","⌝":"urcorn","⌞":"dlcorn","⌟":"drcorn","⌢":"frown","⌣":"smile","⌭":"cylcty","⌮":"profalar","⌶":"topbot","⌽":"ovbar","⌿":"solbar","⍼":"angzarr","⎰":"lmoust","⎱":"rmoust","⎴":"tbrk","⎵":"bbrk","⎶":"bbrktbrk","⏜":"OverParenthesis","⏝":"UnderParenthesis","⏞":"OverBrace","⏟":"UnderBrace","⏢":"trpezium","⏧":"elinters","␣":"blank","─":"boxh","│":"boxv","┌":"boxdr","┐":"boxdl","└":"boxur","┘":"boxul","├":"boxvr","┤":"boxvl","┬":"boxhd","┴":"boxhu","┼":"boxvh","═":"boxH","║":"boxV","╒":"boxdR","╓":"boxDr","╔":"boxDR","╕":"boxdL","╖":"boxDl","╗":"boxDL","╘":"boxuR","╙":"boxUr","╚":"boxUR","╛":"boxuL","╜":"boxUl","╝":"boxUL","╞":"boxvR","╟":"boxVr","╠":"boxVR","╡":"boxvL","╢":"boxVl","╣":"boxVL","╤":"boxHd","╥":"boxhD","╦":"boxHD","╧":"boxHu","╨":"boxhU","╩":"boxHU","╪":"boxvH","╫":"boxVh","╬":"boxVH","▀":"uhblk","▄":"lhblk","█":"block","░":"blk14","▒":"blk12","▓":"blk34","□":"squ","▪":"squf","▫":"EmptyVerySmallSquare","▭":"rect","▮":"marker","▱":"fltns","△":"xutri","▴":"utrif","▵":"utri","▸":"rtrif","▹":"rtri","▽":"xdtri","▾":"dtrif","▿":"dtri","◂":"ltrif","◃":"ltri","◊":"loz","○":"cir","◬":"tridot","◯":"xcirc","◸":"ultri","◹":"urtri","◺":"lltri","◻":"EmptySmallSquare","◼":"FilledSmallSquare","★":"starf","☆":"star","☎":"phone","♀":"female","♂":"male","♠":"spades","♣":"clubs","♥":"hearts","♦":"diams","♪":"sung","✓":"check","✗":"cross","✠":"malt","✶":"sext","❘":"VerticalSeparator","⟈":"bsolhsub","⟉":"suphsol","⟵":"xlarr","⟶":"xrarr","⟷":"xharr","⟸":"xlArr","⟹":"xrArr","⟺":"xhArr","⟼":"xmap","⟿":"dzigrarr","⤂":"nvlArr","⤃":"nvrArr","⤄":"nvHarr","⤅":"Map","⤌":"lbarr","⤍":"rbarr","⤎":"lBarr","⤏":"rBarr","⤐":"RBarr","⤑":"DDotrahd","⤒":"UpArrowBar","⤓":"DownArrowBar","⤖":"Rarrtl","⤙":"latail","⤚":"ratail","⤛":"lAtail","⤜":"rAtail","⤝":"larrfs","⤞":"rarrfs","⤟":"larrbfs","⤠":"rarrbfs","⤣":"nwarhk","⤤":"nearhk","⤥":"searhk","⤦":"swarhk","⤧":"nwnear","⤨":"toea","⤩":"tosa","⤪":"swnwar","⤳":"rarrc","⤳̸":"nrarrc","⤵":"cudarrr","⤶":"ldca","⤷":"rdca","⤸":"cudarrl","⤹":"larrpl","⤼":"curarrm","⤽":"cularrp","⥅":"rarrpl","⥈":"harrcir","⥉":"Uarrocir","⥊":"lurdshar","⥋":"ldrushar","⥎":"LeftRightVector","⥏":"RightUpDownVector","⥐":"DownLeftRightVector","⥑":"LeftUpDownVector","⥒":"LeftVectorBar","⥓":"RightVectorBar","⥔":"RightUpVectorBar","⥕":"RightDownVectorBar","⥖":"DownLeftVectorBar","⥗":"DownRightVectorBar","⥘":"LeftUpVectorBar","⥙":"LeftDownVectorBar","⥚":"LeftTeeVector","⥛":"RightTeeVector","⥜":"RightUpTeeVector","⥝":"RightDownTeeVector","⥞":"DownLeftTeeVector","⥟":"DownRightTeeVector","⥠":"LeftUpTeeVector","⥡":"LeftDownTeeVector","⥢":"lHar","⥣":"uHar","⥤":"rHar","⥥":"dHar","⥦":"luruhar","⥧":"ldrdhar","⥨":"ruluhar","⥩":"rdldhar","⥪":"lharul","⥫":"llhard","⥬":"rharul","⥭":"lrhard","⥮":"udhar","⥯":"duhar","⥰":"RoundImplies","⥱":"erarr","⥲":"simrarr","⥳":"larrsim","⥴":"rarrsim","⥵":"rarrap","⥶":"ltlarr","⥸":"gtrarr","⥹":"subrarr","⥻":"suplarr","⥼":"lfisht","⥽":"rfisht","⥾":"ufisht","⥿":"dfisht","⦚":"vzigzag","⦜":"vangrt","⦝":"angrtvbd","⦤":"ange","⦥":"range","⦦":"dwangle","⦧":"uwangle","⦨":"angmsdaa","⦩":"angmsdab","⦪":"angmsdac","⦫":"angmsdad","⦬":"angmsdae","⦭":"angmsdaf","⦮":"angmsdag","⦯":"angmsdah","⦰":"bemptyv","⦱":"demptyv","⦲":"cemptyv","⦳":"raemptyv","⦴":"laemptyv","⦵":"ohbar","⦶":"omid","⦷":"opar","⦹":"operp","⦻":"olcross","⦼":"odsold","⦾":"olcir","⦿":"ofcir","⧀":"olt","⧁":"ogt","⧂":"cirscir","⧃":"cirE","⧄":"solb","⧅":"bsolb","⧉":"boxbox","⧍":"trisb","⧎":"rtriltri","⧏":"LeftTriangleBar","⧏̸":"NotLeftTriangleBar","⧐":"RightTriangleBar","⧐̸":"NotRightTriangleBar","⧜":"iinfin","⧝":"infintie","⧞":"nvinfin","⧣":"eparsl","⧤":"smeparsl","⧥":"eqvparsl","⧫":"lozf","⧴":"RuleDelayed","⧶":"dsol","⨀":"xodot","⨁":"xoplus","⨂":"xotime","⨄":"xuplus","⨆":"xsqcup","⨍":"fpartint","⨐":"cirfnint","⨑":"awint","⨒":"rppolint","⨓":"scpolint","⨔":"npolint","⨕":"pointint","⨖":"quatint","⨗":"intlarhk","⨢":"pluscir","⨣":"plusacir","⨤":"simplus","⨥":"plusdu","⨦":"plussim","⨧":"plustwo","⨩":"mcomma","⨪":"minusdu","⨭":"loplus","⨮":"roplus","⨯":"Cross","⨰":"timesd","⨱":"timesbar","⨳":"smashp","⨴":"lotimes","⨵":"rotimes","⨶":"otimesas","⨷":"Otimes","⨸":"odiv","⨹":"triplus","⨺":"triminus","⨻":"tritime","⨼":"iprod","⨿":"amalg","⩀":"capdot","⩂":"ncup","⩃":"ncap","⩄":"capand","⩅":"cupor","⩆":"cupcap","⩇":"capcup","⩈":"cupbrcap","⩉":"capbrcup","⩊":"cupcup","⩋":"capcap","⩌":"ccups","⩍":"ccaps","⩐":"ccupssm","⩓":"And","⩔":"Or","⩕":"andand","⩖":"oror","⩗":"orslope","⩘":"andslope","⩚":"andv","⩛":"orv","⩜":"andd","⩝":"ord","⩟":"wedbar","⩦":"sdote","⩪":"simdot","⩭":"congdot","⩭̸":"ncongdot","⩮":"easter","⩯":"apacir","⩰":"apE","⩰̸":"napE","⩱":"eplus","⩲":"pluse","⩳":"Esim","⩷":"eDDot","⩸":"equivDD","⩹":"ltcir","⩺":"gtcir","⩻":"ltquest","⩼":"gtquest","⩽":"les","⩽̸":"nles","⩾":"ges","⩾̸":"nges","⩿":"lesdot","⪀":"gesdot","⪁":"lesdoto","⪂":"gesdoto","⪃":"lesdotor","⪄":"gesdotol","⪅":"lap","⪆":"gap","⪇":"lne","⪈":"gne","⪉":"lnap","⪊":"gnap","⪋":"lEg","⪌":"gEl","⪍":"lsime","⪎":"gsime","⪏":"lsimg","⪐":"gsiml","⪑":"lgE","⪒":"glE","⪓":"lesges","⪔":"gesles","⪕":"els","⪖":"egs","⪗":"elsdot","⪘":"egsdot","⪙":"el","⪚":"eg","⪝":"siml","⪞":"simg","⪟":"simlE","⪠":"simgE","⪡":"LessLess","⪡̸":"NotNestedLessLess","⪢":"GreaterGreater","⪢̸":"NotNestedGreaterGreater","⪤":"glj","⪥":"gla","⪦":"ltcc","⪧":"gtcc","⪨":"lescc","⪩":"gescc","⪪":"smt","⪫":"lat","⪬":"smte","⪬︀":"smtes","⪭":"late","⪭︀":"lates","⪮":"bumpE","⪯":"pre","⪯̸":"npre","⪰":"sce","⪰̸":"nsce","⪳":"prE","⪴":"scE","⪵":"prnE","⪶":"scnE","⪷":"prap","⪸":"scap","⪹":"prnap","⪺":"scnap","⪻":"Pr","⪼":"Sc","⪽":"subdot","⪾":"supdot","⪿":"subplus","⫀":"supplus","⫁":"submult","⫂":"supmult","⫃":"subedot","⫄":"supedot","⫅":"subE","⫅̸":"nsubE","⫆":"supE","⫆̸":"nsupE","⫇":"subsim","⫈":"supsim","⫋︀":"vsubnE","⫋":"subnE","⫌︀":"vsupnE","⫌":"supnE","⫏":"csub","⫐":"csup","⫑":"csube","⫒":"csupe","⫓":"subsup","⫔":"supsub","⫕":"subsub","⫖":"supsup","⫗":"suphsub","⫘":"supdsub","⫙":"forkv","⫚":"topfork","⫛":"mlcp","⫤":"Dashv","⫦":"Vdashl","⫧":"Barv","⫨":"vBar","⫩":"vBarv","⫫":"Vbar","⫬":"Not","⫭":"bNot","⫮":"rnmid","⫯":"cirmid","⫰":"midcir","⫱":"topcir","⫲":"nhpar","⫳":"parsim","⫽":"parsl","⫽⃥":"nparsl","♭":"flat","♮":"natur","♯":"sharp","¤":"curren","¢":"cent",$:"dollar","£":"pound","¥":"yen","€":"euro","¹":"sup1","½":"half","⅓":"frac13","¼":"frac14","⅕":"frac15","⅙":"frac16","⅛":"frac18","²":"sup2","⅔":"frac23","⅖":"frac25","³":"sup3","¾":"frac34","⅗":"frac35","⅜":"frac38","⅘":"frac45","⅚":"frac56","⅝":"frac58","⅞":"frac78","\uD835\uDCB6":"ascr","\uD835\uDD52":"aopf","\uD835\uDD1E":"afr","\uD835\uDD38":"Aopf","\uD835\uDD04":"Afr","\uD835\uDC9C":"Ascr",ª:"ordf",á:"aacute",Á:"Aacute",à:"agrave",À:"Agrave",ă:"abreve",Ă:"Abreve",â:"acirc",Â:"Acirc",å:"aring",Å:"angst",ä:"auml",Ä:"Auml",ã:"atilde",Ã:"Atilde",ą:"aogon",Ą:"Aogon",ā:"amacr",Ā:"Amacr",æ:"aelig",Æ:"AElig","\uD835\uDCB7":"bscr","\uD835\uDD53":"bopf","\uD835\uDD1F":"bfr","\uD835\uDD39":"Bopf",ℬ:"Bscr","\uD835\uDD05":"Bfr","\uD835\uDD20":"cfr","\uD835\uDCB8":"cscr","\uD835\uDD54":"copf",ℭ:"Cfr","\uD835\uDC9E":"Cscr",ℂ:"Copf",ć:"cacute",Ć:"Cacute",ĉ:"ccirc",Ĉ:"Ccirc",č:"ccaron",Č:"Ccaron",ċ:"cdot",Ċ:"Cdot",ç:"ccedil",Ç:"Ccedil","℅":"incare","\uD835\uDD21":"dfr",ⅆ:"dd","\uD835\uDD55":"dopf","\uD835\uDCB9":"dscr","\uD835\uDC9F":"Dscr","\uD835\uDD07":"Dfr",ⅅ:"DD","\uD835\uDD3B":"Dopf",ď:"dcaron",Ď:"Dcaron",đ:"dstrok",Đ:"Dstrok",ð:"eth",Ð:"ETH",ⅇ:"ee",ℯ:"escr","\uD835\uDD22":"efr","\uD835\uDD56":"eopf",ℰ:"Escr","\uD835\uDD08":"Efr","\uD835\uDD3C":"Eopf",é:"eacute",É:"Eacute",è:"egrave",È:"Egrave",ê:"ecirc",Ê:"Ecirc",ě:"ecaron",Ě:"Ecaron",ë:"euml",Ë:"Euml",ė:"edot",Ė:"Edot",ę:"eogon",Ę:"Eogon",ē:"emacr",Ē:"Emacr","\uD835\uDD23":"ffr","\uD835\uDD57":"fopf","\uD835\uDCBB":"fscr","\uD835\uDD09":"Ffr","\uD835\uDD3D":"Fopf",ℱ:"Fscr",ﬀ:"fflig",ﬃ:"ffilig",ﬄ:"ffllig",ﬁ:"filig",fj:"fjlig",ﬂ:"fllig",ƒ:"fnof",ℊ:"gscr","\uD835\uDD58":"gopf","\uD835\uDD24":"gfr","\uD835\uDCA2":"Gscr","\uD835\uDD3E":"Gopf","\uD835\uDD0A":"Gfr",ǵ:"gacute",ğ:"gbreve",Ğ:"Gbreve",ĝ:"gcirc",Ĝ:"Gcirc",ġ:"gdot",Ġ:"Gdot",Ģ:"Gcedil","\uD835\uDD25":"hfr",ℎ:"planckh","\uD835\uDCBD":"hscr","\uD835\uDD59":"hopf",ℋ:"Hscr",ℌ:"Hfr",ℍ:"Hopf",ĥ:"hcirc",Ĥ:"Hcirc",ℏ:"hbar",ħ:"hstrok",Ħ:"Hstrok","\uD835\uDD5A":"iopf","\uD835\uDD26":"ifr","\uD835\uDCBE":"iscr",ⅈ:"ii","\uD835\uDD40":"Iopf",ℐ:"Iscr",ℑ:"Im",í:"iacute",Í:"Iacute",ì:"igrave",Ì:"Igrave",î:"icirc",Î:"Icirc",ï:"iuml",Ï:"Iuml",ĩ:"itilde",Ĩ:"Itilde",İ:"Idot",į:"iogon",Į:"Iogon",ī:"imacr",Ī:"Imacr",ĳ:"ijlig",Ĳ:"IJlig",ı:"imath","\uD835\uDCBF":"jscr","\uD835\uDD5B":"jopf","\uD835\uDD27":"jfr","\uD835\uDCA5":"Jscr","\uD835\uDD0D":"Jfr","\uD835\uDD41":"Jopf",ĵ:"jcirc",Ĵ:"Jcirc",ȷ:"jmath","\uD835\uDD5C":"kopf","\uD835\uDCC0":"kscr","\uD835\uDD28":"kfr","\uD835\uDCA6":"Kscr","\uD835\uDD42":"Kopf","\uD835\uDD0E":"Kfr",ķ:"kcedil",Ķ:"Kcedil","\uD835\uDD29":"lfr","\uD835\uDCC1":"lscr",ℓ:"ell","\uD835\uDD5D":"lopf",ℒ:"Lscr","\uD835\uDD0F":"Lfr","\uD835\uDD43":"Lopf",ĺ:"lacute",Ĺ:"Lacute",ľ:"lcaron",Ľ:"Lcaron",ļ:"lcedil",Ļ:"Lcedil",ł:"lstrok",Ł:"Lstrok",ŀ:"lmidot",Ŀ:"Lmidot","\uD835\uDD2A":"mfr","\uD835\uDD5E":"mopf","\uD835\uDCC2":"mscr","\uD835\uDD10":"Mfr","\uD835\uDD44":"Mopf",ℳ:"Mscr","\uD835\uDD2B":"nfr","\uD835\uDD5F":"nopf","\uD835\uDCC3":"nscr",ℕ:"Nopf","\uD835\uDCA9":"Nscr","\uD835\uDD11":"Nfr",ń:"nacute",Ń:"Nacute",ň:"ncaron",Ň:"Ncaron",ñ:"ntilde",Ñ:"Ntilde",ņ:"ncedil",Ņ:"Ncedil","№":"numero",ŋ:"eng",Ŋ:"ENG","\uD835\uDD60":"oopf","\uD835\uDD2C":"ofr",ℴ:"oscr","\uD835\uDCAA":"Oscr","\uD835\uDD12":"Ofr","\uD835\uDD46":"Oopf",º:"ordm",ó:"oacute",Ó:"Oacute",ò:"ograve",Ò:"Ograve",ô:"ocirc",Ô:"Ocirc",ö:"ouml",Ö:"Ouml",ő:"odblac",Ő:"Odblac",õ:"otilde",Õ:"Otilde",ø:"oslash",Ø:"Oslash",ō:"omacr",Ō:"Omacr",œ:"oelig",Œ:"OElig","\uD835\uDD2D":"pfr","\uD835\uDCC5":"pscr","\uD835\uDD61":"popf",ℙ:"Popf","\uD835\uDD13":"Pfr","\uD835\uDCAB":"Pscr","\uD835\uDD62":"qopf","\uD835\uDD2E":"qfr","\uD835\uDCC6":"qscr","\uD835\uDCAC":"Qscr","\uD835\uDD14":"Qfr",ℚ:"Qopf",ĸ:"kgreen","\uD835\uDD2F":"rfr","\uD835\uDD63":"ropf","\uD835\uDCC7":"rscr",ℛ:"Rscr",ℜ:"Re",ℝ:"Ropf",ŕ:"racute",Ŕ:"Racute",ř:"rcaron",Ř:"Rcaron",ŗ:"rcedil",Ŗ:"Rcedil","\uD835\uDD64":"sopf","\uD835\uDCC8":"sscr","\uD835\uDD30":"sfr","\uD835\uDD4A":"Sopf","\uD835\uDD16":"Sfr","\uD835\uDCAE":"Sscr","Ⓢ":"oS",ś:"sacute",Ś:"Sacute",ŝ:"scirc",Ŝ:"Scirc",š:"scaron",Š:"Scaron",ş:"scedil",Ş:"Scedil",ß:"szlig","\uD835\uDD31":"tfr","\uD835\uDCC9":"tscr","\uD835\uDD65":"topf","\uD835\uDCAF":"Tscr","\uD835\uDD17":"Tfr","\uD835\uDD4B":"Topf",ť:"tcaron",Ť:"Tcaron",ţ:"tcedil",Ţ:"Tcedil","™":"trade",ŧ:"tstrok",Ŧ:"Tstrok","\uD835\uDCCA":"uscr","\uD835\uDD66":"uopf","\uD835\uDD32":"ufr","\uD835\uDD4C":"Uopf","\uD835\uDD18":"Ufr","\uD835\uDCB0":"Uscr",ú:"uacute",Ú:"Uacute",ù:"ugrave",Ù:"Ugrave",ŭ:"ubreve",Ŭ:"Ubreve",û:"ucirc",Û:"Ucirc",ů:"uring",Ů:"Uring",ü:"uuml",Ü:"Uuml",ű:"udblac",Ű:"Udblac",ũ:"utilde",Ũ:"Utilde",ų:"uogon",Ų:"Uogon",ū:"umacr",Ū:"Umacr","\uD835\uDD33":"vfr","\uD835\uDD67":"vopf","\uD835\uDCCB":"vscr","\uD835\uDD19":"Vfr","\uD835\uDD4D":"Vopf","\uD835\uDCB1":"Vscr","\uD835\uDD68":"wopf","\uD835\uDCCC":"wscr","\uD835\uDD34":"wfr","\uD835\uDCB2":"Wscr","\uD835\uDD4E":"Wopf","\uD835\uDD1A":"Wfr",ŵ:"wcirc",Ŵ:"Wcirc","\uD835\uDD35":"xfr","\uD835\uDCCD":"xscr","\uD835\uDD69":"xopf","\uD835\uDD4F":"Xopf","\uD835\uDD1B":"Xfr","\uD835\uDCB3":"Xscr","\uD835\uDD36":"yfr","\uD835\uDCCE":"yscr","\uD835\uDD6A":"yopf","\uD835\uDCB4":"Yscr","\uD835\uDD1C":"Yfr","\uD835\uDD50":"Yopf",ý:"yacute",Ý:"Yacute",ŷ:"ycirc",Ŷ:"Ycirc",ÿ:"yuml",Ÿ:"Yuml","\uD835\uDCCF":"zscr","\uD835\uDD37":"zfr","\uD835\uDD6B":"zopf",ℨ:"Zfr",ℤ:"Zopf","\uD835\uDCB5":"Zscr",ź:"zacute",Ź:"Zacute",ž:"zcaron",Ž:"Zcaron",ż:"zdot",Ż:"Zdot",Ƶ:"imped",þ:"thorn",Þ:"THORN",ŉ:"napos",α:"alpha",Α:"Alpha",β:"beta",Β:"Beta",γ:"gamma",Γ:"Gamma",δ:"delta",Δ:"Delta",ε:"epsi",ϵ:"epsiv",Ε:"Epsilon",ϝ:"gammad",Ϝ:"Gammad",ζ:"zeta",Ζ:"Zeta",η:"eta",Η:"Eta",θ:"theta",ϑ:"thetav",Θ:"Theta",ι:"iota",Ι:"Iota",κ:"kappa",ϰ:"kappav",Κ:"Kappa",λ:"lambda",Λ:"Lambda",μ:"mu",µ:"micro",Μ:"Mu",ν:"nu",Ν:"Nu",ξ:"xi",Ξ:"Xi",ο:"omicron",Ο:"Omicron",π:"pi",ϖ:"piv",Π:"Pi",ρ:"rho",ϱ:"rhov",Ρ:"Rho",σ:"sigma",Σ:"Sigma",ς:"sigmaf",τ:"tau",Τ:"Tau",υ:"upsi",Υ:"Upsilon",ϒ:"Upsi",φ:"phi",ϕ:"phiv",Φ:"Phi",χ:"chi",Χ:"Chi",ψ:"psi",Ψ:"Psi",ω:"omega",Ω:"ohm",а:"acy",А:"Acy",б:"bcy",Б:"Bcy",в:"vcy",В:"Vcy",г:"gcy",Г:"Gcy",ѓ:"gjcy",Ѓ:"GJcy",д:"dcy",Д:"Dcy",ђ:"djcy",Ђ:"DJcy",е:"iecy",Е:"IEcy",ё:"iocy",Ё:"IOcy",є:"jukcy",Є:"Jukcy",ж:"zhcy",Ж:"ZHcy",з:"zcy",З:"Zcy",ѕ:"dscy",Ѕ:"DScy",и:"icy",И:"Icy",і:"iukcy",І:"Iukcy",ї:"yicy",Ї:"YIcy",й:"jcy",Й:"Jcy",ј:"jsercy",Ј:"Jsercy",к:"kcy",К:"Kcy",ќ:"kjcy",Ќ:"KJcy",л:"lcy",Л:"Lcy",љ:"ljcy",Љ:"LJcy",м:"mcy",М:"Mcy",н:"ncy",Н:"Ncy",њ:"njcy",Њ:"NJcy",о:"ocy",О:"Ocy",п:"pcy",П:"Pcy",р:"rcy",Р:"Rcy",с:"scy",С:"Scy",т:"tcy",Т:"Tcy",ћ:"tshcy",Ћ:"TSHcy",у:"ucy",У:"Ucy",ў:"ubrcy",Ў:"Ubrcy",ф:"fcy",Ф:"Fcy",х:"khcy",Х:"KHcy",ц:"tscy",Ц:"TScy",ч:"chcy",Ч:"CHcy",џ:"dzcy",Џ:"DZcy",ш:"shcy",Ш:"SHcy",щ:"shchcy",Щ:"SHCHcy",ъ:"hardcy",Ъ:"HARDcy",ы:"ycy",Ы:"Ycy",ь:"softcy",Ь:"SOFTcy",э:"ecy",Э:"Ecy",ю:"yucy",Ю:"YUcy",я:"yacy",Я:"YAcy",ℵ:"aleph",ℶ:"beth",ℷ:"gimel",ℸ:"daleth"},d=/["&'<>`]/g,p={'"':"&quot;","&":"&amp;","'":"&#x27;","<":"&lt;",">":"&gt;","`":"&#x60;"},h=/&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,g=/[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,f=/&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,m={aacute:"á",Aacute:"Á",abreve:"ă",Abreve:"Ă",ac:"∾",acd:"∿",acE:"∾̳",acirc:"â",Acirc:"Â",acute:"´",acy:"а",Acy:"А",aelig:"æ",AElig:"Æ",af:"⁡",afr:"\uD835\uDD1E",Afr:"\uD835\uDD04",agrave:"à",Agrave:"À",alefsym:"ℵ",aleph:"ℵ",alpha:"α",Alpha:"Α",amacr:"ā",Amacr:"Ā",amalg:"⨿",amp:"&",AMP:"&",and:"∧",And:"⩓",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",Aogon:"Ą",aopf:"\uD835\uDD52",Aopf:"\uD835\uDD38",ap:"≈",apacir:"⩯",ape:"≊",apE:"⩰",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",aring:"å",Aring:"Å",ascr:"\uD835\uDCB6",Ascr:"\uD835\uDC9C",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",Bcy:"Б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",beta:"β",Beta:"Β",beth:"ℶ",between:"≬",bfr:"\uD835\uDD1F",Bfr:"\uD835\uDD05",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bNot:"⫭",bopf:"\uD835\uDD53",Bopf:"\uD835\uDD39",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxhD:"╥",boxHd:"╤",boxHD:"╦",boxhu:"┴",boxhU:"╨",boxHu:"╧",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"\uD835\uDCB7",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpe:"≏",bumpE:"⪮",bumpeq:"≏",Bumpeq:"≎",cacute:"ć",Cacute:"Ć",cap:"∩",Cap:"⋒",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",ccaron:"č",Ccaron:"Č",ccedil:"ç",Ccedil:"Ç",ccirc:"ĉ",Ccirc:"Ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",Cdot:"Ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"\uD835\uDD20",Cfr:"ℭ",chcy:"ч",CHcy:"Ч",check:"✓",checkmark:"✓",chi:"χ",Chi:"Χ",cir:"○",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cire:"≗",cirE:"⧃",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",colone:"≔",Colone:"⩴",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"\uD835\uDD54",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",cscr:"\uD835\uDCB8",Cscr:"\uD835\uDC9E",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",Cup:"⋓",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",dArr:"⇓",Darr:"↡",dash:"‐",dashv:"⊣",Dashv:"⫤",dbkarow:"⤏",dblac:"˝",dcaron:"ď",Dcaron:"Ď",dcy:"д",Dcy:"Д",dd:"ⅆ",DD:"ⅅ",ddagger:"‡",ddarr:"⇊",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",delta:"δ",Delta:"Δ",demptyv:"⦱",dfisht:"⥿",dfr:"\uD835\uDD21",Dfr:"\uD835\uDD07",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",DJcy:"Ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"\uD835\uDD55",Dopf:"\uD835\uDD3B",dot:"˙",Dot:"¨",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",downarrow:"↓",Downarrow:"⇓",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"\uD835\uDCB9",Dscr:"\uD835\uDC9F",dscy:"ѕ",DScy:"Ѕ",dsol:"⧶",dstrok:"đ",Dstrok:"Đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",DZcy:"Џ",dzigrarr:"⟿",eacute:"é",Eacute:"É",easter:"⩮",ecaron:"ě",Ecaron:"Ě",ecir:"≖",ecirc:"ê",Ecirc:"Ê",ecolon:"≕",ecy:"э",Ecy:"Э",eDDot:"⩷",edot:"ė",eDot:"≑",Edot:"Ė",ee:"ⅇ",efDot:"≒",efr:"\uD835\uDD22",Efr:"\uD835\uDD08",eg:"⪚",egrave:"è",Egrave:"È",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",Emacr:"Ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp:" ",emsp13:" ",emsp14:" ",eng:"ŋ",ENG:"Ŋ",ensp:" ",eogon:"ę",Eogon:"Ę",eopf:"\uD835\uDD56",Eopf:"\uD835\uDD3C",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",Epsilon:"Ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",esim:"≂",Esim:"⩳",eta:"η",Eta:"Η",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",fcy:"ф",Fcy:"Ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"\uD835\uDD23",Ffr:"\uD835\uDD09",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"\uD835\uDD57",Fopf:"\uD835\uDD3D",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"\uD835\uDCBB",Fscr:"ℱ",gacute:"ǵ",gamma:"γ",Gamma:"Γ",gammad:"ϝ",Gammad:"Ϝ",gap:"⪆",gbreve:"ğ",Gbreve:"Ğ",Gcedil:"Ģ",gcirc:"ĝ",Gcirc:"Ĝ",gcy:"г",Gcy:"Г",gdot:"ġ",Gdot:"Ġ",ge:"≥",gE:"≧",gel:"⋛",gEl:"⪌",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"\uD835\uDD24",Gfr:"\uD835\uDD0A",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",GJcy:"Ѓ",gl:"≷",gla:"⪥",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"\uD835\uDD58",Gopf:"\uD835\uDD3E",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",gscr:"ℊ",Gscr:"\uD835\uDCA2",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",Gt:"≫",GT:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",HARDcy:"Ъ",harr:"↔",hArr:"⇔",harrcir:"⥈",harrw:"↭",Hat:"^",hbar:"ℏ",hcirc:"ĥ",Hcirc:"Ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"\uD835\uDD25",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"\uD835\uDD59",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"\uD835\uDCBD",Hscr:"ℋ",hslash:"ℏ",hstrok:"ħ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",iacute:"í",Iacute:"Í",ic:"⁣",icirc:"î",Icirc:"Î",icy:"и",Icy:"И",Idot:"İ",iecy:"е",IEcy:"Е",iexcl:"¡",iff:"⇔",ifr:"\uD835\uDD26",Ifr:"ℑ",igrave:"ì",Igrave:"Ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",IJlig:"Ĳ",Im:"ℑ",imacr:"ī",Imacr:"Ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",Implies:"⇒",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",Int:"∬",intcal:"⊺",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",iocy:"ё",IOcy:"Ё",iogon:"į",Iogon:"Į",iopf:"\uD835\uDD5A",Iopf:"\uD835\uDD40",iota:"ι",Iota:"Ι",iprod:"⨼",iquest:"¿",iscr:"\uD835\uDCBE",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",Itilde:"Ĩ",iukcy:"і",Iukcy:"І",iuml:"ï",Iuml:"Ï",jcirc:"ĵ",Jcirc:"Ĵ",jcy:"й",Jcy:"Й",jfr:"\uD835\uDD27",Jfr:"\uD835\uDD0D",jmath:"ȷ",jopf:"\uD835\uDD5B",Jopf:"\uD835\uDD41",jscr:"\uD835\uDCBF",Jscr:"\uD835\uDCA5",jsercy:"ј",Jsercy:"Ј",jukcy:"є",Jukcy:"Є",kappa:"κ",Kappa:"Κ",kappav:"ϰ",kcedil:"ķ",Kcedil:"Ķ",kcy:"к",Kcy:"К",kfr:"\uD835\uDD28",Kfr:"\uD835\uDD0E",kgreen:"ĸ",khcy:"х",KHcy:"Х",kjcy:"ќ",KJcy:"Ќ",kopf:"\uD835\uDD5C",Kopf:"\uD835\uDD42",kscr:"\uD835\uDCC0",Kscr:"\uD835\uDCA6",lAarr:"⇚",lacute:"ĺ",Lacute:"Ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",Lambda:"Λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larr:"←",lArr:"⇐",Larr:"↞",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",lAtail:"⤛",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",Lcaron:"Ľ",lcedil:"ļ",Lcedil:"Ļ",lceil:"⌈",lcub:"{",lcy:"л",Lcy:"Л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",leftarrow:"←",Leftarrow:"⇐",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",Leftrightarrow:"⇔",LeftRightArrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",leg:"⋚",lEg:"⪋",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"\uD835\uDD29",Lfr:"\uD835\uDD0F",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",LJcy:"Љ",ll:"≪",Ll:"⋘",llarr:"⇇",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",lmidot:"ŀ",Lmidot:"Ŀ",lmoust:"⎰",lmoustache:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",Longleftarrow:"⟸",LongLeftArrow:"⟵",longleftrightarrow:"⟷",Longleftrightarrow:"⟺",LongLeftRightArrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",Longrightarrow:"⟹",LongRightArrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"\uD835\uDD5D",Lopf:"\uD835\uDD43",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"\uD835\uDCC1",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",Lstrok:"Ł",lt:"<",Lt:"≪",LT:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",Map:"⤅",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",Mcy:"М",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",mfr:"\uD835\uDD2A",Mfr:"\uD835\uDD10",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"\uD835\uDD5E",Mopf:"\uD835\uDD44",mp:"∓",mscr:"\uD835\uDCC2",Mscr:"ℳ",mstpos:"∾",mu:"μ",Mu:"Μ",multimap:"⊸",mumap:"⊸",nabla:"∇",nacute:"ń",Nacute:"Ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",Ncaron:"Ň",ncedil:"ņ",Ncedil:"Ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",Ncy:"Н",ndash:"–",ne:"≠",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",nfr:"\uD835\uDD2B",Nfr:"\uD835\uDD11",nge:"≱",ngE:"≧̸",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",ngt:"≯",nGt:"≫⃒",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",NJcy:"Њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nle:"≰",nlE:"≦̸",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nlt:"≮",nLt:"≪⃒",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"\uD835\uDD5F",Nopf:"ℕ",not:"¬",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrarr:"↛",nrArr:"⇏",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"\uD835\uDCC3",Nscr:"\uD835\uDCA9",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsube:"⊈",nsubE:"⫅̸",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupe:"⊉",nsupE:"⫆̸",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"ñ",Ntilde:"Ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",Nu:"Ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",oacute:"ó",Oacute:"Ó",oast:"⊛",ocir:"⊚",ocirc:"ô",Ocirc:"Ô",ocy:"о",Ocy:"О",odash:"⊝",odblac:"ő",Odblac:"Ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",OElig:"Œ",ofcir:"⦿",ofr:"\uD835\uDD2C",Ofr:"\uD835\uDD12",ogon:"˛",ograve:"ò",Ograve:"Ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",Omacr:"Ō",omega:"ω",Omega:"Ω",omicron:"ο",Omicron:"Ο",omid:"⦶",ominus:"⊖",oopf:"\uD835\uDD60",Oopf:"\uD835\uDD46",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",or:"∨",Or:"⩔",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",oscr:"ℴ",Oscr:"\uD835\uDCAA",oslash:"ø",Oslash:"Ø",osol:"⊘",otilde:"õ",Otilde:"Õ",otimes:"⊗",Otimes:"⨷",otimesas:"⨶",ouml:"ö",Ouml:"Ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",pcy:"п",Pcy:"П",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"\uD835\uDD2D",Pfr:"\uD835\uDD13",phi:"φ",Phi:"Φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",Pi:"Π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"\uD835\uDD61",Popf:"ℙ",pound:"£",pr:"≺",Pr:"⪻",prap:"⪷",prcue:"≼",pre:"⪯",prE:"⪳",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportion:"∷",Proportional:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"\uD835\uDCC5",Pscr:"\uD835\uDCAB",psi:"ψ",Psi:"Ψ",puncsp:" ",qfr:"\uD835\uDD2E",Qfr:"\uD835\uDD14",qint:"⨌",qopf:"\uD835\uDD62",Qopf:"ℚ",qprime:"⁗",qscr:"\uD835\uDCC6",Qscr:"\uD835\uDCAC",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",racute:"ŕ",Racute:"Ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarr:"→",rArr:"⇒",Rarr:"↠",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",Rarrtl:"⤖",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",Rcaron:"Ř",rcedil:"ŗ",Rcedil:"Ŗ",rceil:"⌉",rcub:"}",rcy:"р",Rcy:"Р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",Re:"ℜ",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"\uD835\uDD2F",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",Rho:"Ρ",rhov:"ϱ",RightAngleBracket:"⟩",rightarrow:"→",Rightarrow:"⇒",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"\uD835\uDD63",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"\uD835\uDCC7",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",sacute:"ś",Sacute:"Ś",sbquo:"‚",sc:"≻",Sc:"⪼",scap:"⪸",scaron:"š",Scaron:"Š",sccue:"≽",sce:"⪰",scE:"⪴",scedil:"ş",Scedil:"Ş",scirc:"ŝ",Scirc:"Ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",Scy:"С",sdot:"⋅",sdotb:"⊡",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"\uD835\uDD30",Sfr:"\uD835\uDD16",sfrown:"⌢",sharp:"♯",shchcy:"щ",SHCHcy:"Щ",shcy:"ш",SHcy:"Ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",sigma:"σ",Sigma:"Σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",SOFTcy:"Ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"\uD835\uDD64",Sopf:"\uD835\uDD4A",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squf:"▪",srarr:"→",sscr:"\uD835\uDCC8",Sscr:"\uD835\uDCAE",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",Star:"⋆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",sube:"⊆",subE:"⫅",subedot:"⫃",submult:"⫁",subne:"⊊",subnE:"⫋",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup:"⊃",Sup:"⋑",sup1:"¹",sup2:"²",sup3:"³",supdot:"⪾",supdsub:"⫘",supe:"⊇",supE:"⫆",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supne:"⊋",supnE:"⫌",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"	",target:"⌖",tau:"τ",Tau:"Τ",tbrk:"⎴",tcaron:"ť",Tcaron:"Ť",tcedil:"ţ",Tcedil:"Ţ",tcy:"т",Tcy:"Т",tdot:"⃛",telrec:"⌕",tfr:"\uD835\uDD31",Tfr:"\uD835\uDD17",there4:"∴",therefore:"∴",Therefore:"∴",theta:"θ",Theta:"Θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",thinsp:" ",ThinSpace:" ",thkap:"≈",thksim:"∼",thorn:"þ",THORN:"Þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"\uD835\uDD65",Topf:"\uD835\uDD4B",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"\uD835\uDCC9",Tscr:"\uD835\uDCAF",tscy:"ц",TScy:"Ц",tshcy:"ћ",TSHcy:"Ћ",tstrok:"ŧ",Tstrok:"Ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uacute:"ú",Uacute:"Ú",uarr:"↑",uArr:"⇑",Uarr:"↟",Uarrocir:"⥉",ubrcy:"ў",Ubrcy:"Ў",ubreve:"ŭ",Ubreve:"Ŭ",ucirc:"û",Ucirc:"Û",ucy:"у",Ucy:"У",udarr:"⇅",udblac:"ű",Udblac:"Ű",udhar:"⥮",ufisht:"⥾",ufr:"\uD835\uDD32",Ufr:"\uD835\uDD18",ugrave:"ù",Ugrave:"Ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",Umacr:"Ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",uogon:"ų",Uogon:"Ų",uopf:"\uD835\uDD66",Uopf:"\uD835\uDD4C",uparrow:"↑",Uparrow:"⇑",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",updownarrow:"↕",Updownarrow:"⇕",UpDownArrow:"↕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",upsilon:"υ",Upsilon:"Υ",UpTee:"⊥",UpTeeArrow:"↥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",Uring:"Ů",urtri:"◹",uscr:"\uD835\uDCCA",Uscr:"\uD835\uDCB0",utdot:"⋰",utilde:"ũ",Utilde:"Ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"ü",Uuml:"Ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",vcy:"в",Vcy:"В",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",vee:"∨",Vee:"⋁",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",vfr:"\uD835\uDD33",Vfr:"\uD835\uDD19",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"\uD835\uDD67",Vopf:"\uD835\uDD4D",vprop:"∝",vrtri:"⊳",vscr:"\uD835\uDCCB",Vscr:"\uD835\uDCB1",vsubne:"⊊︀",vsubnE:"⫋︀",vsupne:"⊋︀",vsupnE:"⫌︀",Vvdash:"⊪",vzigzag:"⦚",wcirc:"ŵ",Wcirc:"Ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",wfr:"\uD835\uDD34",Wfr:"\uD835\uDD1A",wopf:"\uD835\uDD68",Wopf:"\uD835\uDD4E",wp:"℘",wr:"≀",wreath:"≀",wscr:"\uD835\uDCCC",Wscr:"\uD835\uDCB2",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"\uD835\uDD35",Xfr:"\uD835\uDD1B",xharr:"⟷",xhArr:"⟺",xi:"ξ",Xi:"Ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"\uD835\uDD69",Xopf:"\uD835\uDD4F",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",xscr:"\uD835\uDCCD",Xscr:"\uD835\uDCB3",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"ý",Yacute:"Ý",yacy:"я",YAcy:"Я",ycirc:"ŷ",Ycirc:"Ŷ",ycy:"ы",Ycy:"Ы",yen:"¥",yfr:"\uD835\uDD36",Yfr:"\uD835\uDD1C",yicy:"ї",YIcy:"Ї",yopf:"\uD835\uDD6A",Yopf:"\uD835\uDD50",yscr:"\uD835\uDCCE",Yscr:"\uD835\uDCB4",yucy:"ю",YUcy:"Ю",yuml:"ÿ",Yuml:"Ÿ",zacute:"ź",Zacute:"Ź",zcaron:"ž",Zcaron:"Ž",zcy:"з",Zcy:"З",zdot:"ż",Zdot:"Ż",zeetrf:"ℨ",ZeroWidthSpace:"​",zeta:"ζ",Zeta:"Ζ",zfr:"\uD835\uDD37",Zfr:"ℨ",zhcy:"ж",ZHcy:"Ж",zigrarr:"⇝",zopf:"\uD835\uDD6B",Zopf:"ℤ",zscr:"\uD835\uDCCF",Zscr:"\uD835\uDCB5",zwj:"‍",zwnj:"‌"},y={aacute:"á",Aacute:"Á",acirc:"â",Acirc:"Â",acute:"´",aelig:"æ",AElig:"Æ",agrave:"à",Agrave:"À",amp:"&",AMP:"&",aring:"å",Aring:"Å",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",brvbar:"¦",ccedil:"ç",Ccedil:"Ç",cedil:"¸",cent:"¢",copy:"©",COPY:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",Eacute:"É",ecirc:"ê",Ecirc:"Ê",egrave:"è",Egrave:"È",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",GT:">",iacute:"í",Iacute:"Í",icirc:"î",Icirc:"Î",iexcl:"¡",igrave:"ì",Igrave:"Ì",iquest:"¿",iuml:"ï",Iuml:"Ï",laquo:"«",lt:"<",LT:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",Ntilde:"Ñ",oacute:"ó",Oacute:"Ó",ocirc:"ô",Ocirc:"Ô",ograve:"ò",Ograve:"Ò",ordf:"ª",ordm:"º",oslash:"ø",Oslash:"Ø",otilde:"õ",Otilde:"Õ",ouml:"ö",Ouml:"Ö",para:"¶",plusmn:"±",pound:"£",quot:'"',QUOT:'"',raquo:"»",reg:"®",REG:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",THORN:"Þ",times:"×",uacute:"ú",Uacute:"Ú",ucirc:"û",Ucirc:"Û",ugrave:"ù",Ugrave:"Ù",uml:"¨",uuml:"ü",Uuml:"Ü",yacute:"ý",Yacute:"Ý",yen:"¥",yuml:"ÿ"},v={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},b=[1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65e3,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111],w=String.fromCharCode,D={}.hasOwnProperty,x=function(e,r){return D.call(e,r)},k=function(e,r){for(var a=-1,i=e.length;++a<i;)if(e[a]==r)return!0;return!1},C=function(e,r){if(!e)return r;var a,i={};for(a in r)i[a]=x(e,a)?e[a]:r[a];return i},E=function(e,r){var a="";return e>=55296&&e<=57343||e>1114111?(r&&S("character reference outside the permissible Unicode range"),"�"):x(v,e)?(r&&S("disallowed character reference"),v[e]):(r&&k(b,e)&&S("disallowed character reference"),e>65535&&(e-=65536,a+=w(e>>>10&1023|55296),e=56320|1023&e),a+=w(e))},T=function(e){return"&#x"+e.toString(16).toUpperCase()+";"},A=function(e){return"&#"+e+";"},S=function(e){throw Error("Parse error: "+e)},M=function(e,r){(r=C(r,M.options)).strict&&g.test(e)&&S("forbidden code point");var a=r.encodeEverything,i=r.useNamedReferences,t=r.allowUnsafeSymbols,n=r.decimal?A:T,p=function(e){return n(e.charCodeAt(0))};return a?(e=e.replace(s,function(e){return i&&x(c,e)?"&"+c[e]+";":p(e)}),i&&(e=e.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;").replace(/&#x66;&#x6A;/g,"&fjlig;")),i&&(e=e.replace(u,function(e){return"&"+c[e]+";"}))):i?(t||(e=e.replace(d,function(e){return"&"+c[e]+";"})),e=(e=e.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;")).replace(u,function(e){return"&"+c[e]+";"})):t||(e=e.replace(d,p)),e.replace(o,function(e){return n((e.charCodeAt(0)-55296)*1024+e.charCodeAt(1)-56320+65536)}).replace(l,p)};M.options={allowUnsafeSymbols:!1,encodeEverything:!1,strict:!1,useNamedReferences:!1,decimal:!1};var L=function(e,r){var a=(r=C(r,L.options)).strict;return a&&h.test(e)&&S("malformed character reference"),e.replace(f,function(e,i,t,n,o,s,l,u,c){var d,p;return i?m[p=i]:t?(p=t,n&&r.isAttributeValue)?(a&&"="==n&&S("`&` did not start a character reference"),e):(a&&S("named character reference was not terminated by a semicolon"),y[p]+(n||"")):o?(d=s,a&&!d&&S("character reference was not terminated by a semicolon"),E(parseInt(o,10),a)):l?(d=u,a&&!d&&S("character reference was not terminated by a semicolon"),E(parseInt(l,16),a)):(a&&S("named character reference was not terminated by a semicolon"),e)})};L.options={isAttributeValue:!1,strict:!1};var q={version:"1.2.0",encode:M,decode:L,escape:function(e){return e.replace(d,function(e){return p[e]})},unescape:L};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)e.r,void 0!==q&&e.v(q);else if(a&&!a.nodeType)if(t)t.exports=q;else for(var N in q)x(q,N)&&(a[N]=q[N]);else i.he=q}(e.e)},567946,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});let i=e.r(811583);a.default=class{constructor(e=null,r){this.parentNode=e,this.childNodes=[],Object.defineProperty(this,"range",{enumerable:!1,writable:!0,configurable:!0,value:null!=r?r:[-1,-1]})}remove(){if(this.parentNode){let e=this.parentNode.childNodes;this.parentNode.childNodes=e.filter(e=>this!==e),this.parentNode=null}return this}get innerText(){return this.rawText}get textContent(){return(0,i.decode)(this.rawText)}set textContent(e){this.rawText=(0,i.encode)(e)}}},650946,(e,r,a)=>{"use strict";var i,t;Object.defineProperty(a,"__esModule",{value:!0}),(t=i||(i={}))[t.ELEMENT_NODE=1]="ELEMENT_NODE",t[t.TEXT_NODE=3]="TEXT_NODE",t[t.COMMENT_NODE=8]="COMMENT_NODE",a.default=i},383976,(e,r,a)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});let t=i(e.r(567946)),n=i(e.r(650946));class o extends t.default{clone(){return new o(this.rawText,null,void 0,this.rawTagName)}constructor(e,r=null,a,i="!--"){super(r,a),this.rawText=e,this.rawTagName=i,this.nodeType=n.default.COMMENT_NODE}get text(){return this.rawText}toString(){return`<!--${this.rawText}-->`}}a.default=o},103644,e=>{"use strict";var r,a,i,t;e.s([],450953),e.i(450953),(i=r||(r={})).Attribute="attribute",i.Pseudo="pseudo",i.PseudoElement="pseudo-element",i.Tag="tag",i.Universal="universal",i.Adjacent="adjacent",i.Child="child",i.Descendant="descendant",i.Parent="parent",i.Sibling="sibling",i.ColumnCombinator="column-combinator";let n={Unknown:null,QuirksMode:"quirks",IgnoreCase:!0,CaseSensitive:!1};(t=a||(a={})).Any="any",t.Element="element",t.End="end",t.Equals="equals",t.Exists="exists",t.Hyphen="hyphen",t.Not="not",t.Start="start",e.s(["AttributeAction",()=>a,"IgnoreCaseMode",0,n,"SelectorType",()=>r],704958),e.i(704958);let o=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,s=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,l=new Map([[126,a.Element],[94,a.Start],[36,a.End],[42,a.Any],[33,a.Not],[124,a.Hyphen]]),u=new Set(["has","not","matches","is","where","host","host-context"]);function c(e){switch(e.type){case r.Adjacent:case r.Child:case r.Descendant:case r.Parent:case r.Sibling:case r.ColumnCombinator:return!0;default:return!1}}let d=new Set(["contains","icontains"]);function p(e,r,a){let i=parseInt(r,16)-65536;return i!=i||a?r:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)}function h(e){return e.replace(s,p)}function g(e){return 39===e||34===e}function f(e){return 32===e||9===e||10===e||12===e||13===e}function m(e){let i=[],t=function e(i,t,n){let s=[];function p(e){let r=t.slice(n+e).match(o);if(!r)throw Error(`Expected name, found ${t.slice(n)}`);let[a]=r;return n+=e+a.length,h(a)}function m(e){for(n+=e;n<t.length&&f(t.charCodeAt(n));)n++}function y(){let e=n+=1,r=1;for(;r>0&&n<t.length;n++)40!==t.charCodeAt(n)||v(n)?41===t.charCodeAt(n)&&!v(n)&&r--:r++;if(r)throw Error("Parenthesis not matched");return h(t.slice(e,n-1))}function v(e){let r=0;for(;92===t.charCodeAt(--e);)r++;return(1&r)==1}function b(){if(s.length>0&&c(s[s.length-1]))throw Error("Did not expect successive traversals.")}function w(e){if(s.length>0&&s[s.length-1].type===r.Descendant){s[s.length-1].type=e;return}b(),s.push({type:e})}function D(e,a){s.push({type:r.Attribute,name:e,action:a,value:p(1),namespace:null,ignoreCase:"quirks"})}function x(){if(s.length&&s[s.length-1].type===r.Descendant&&s.pop(),0===s.length)throw Error("Empty sub-selector");i.push(s)}if(m(0),t.length===n)return n;e:for(;n<t.length;){let i=t.charCodeAt(n);switch(i){case 32:case 9:case 10:case 12:case 13:(0===s.length||s[0].type!==r.Descendant)&&(b(),s.push({type:r.Descendant})),m(1);break;case 62:w(r.Child),m(1);break;case 60:w(r.Parent),m(1);break;case 126:w(r.Sibling),m(1);break;case 43:w(r.Adjacent),m(1);break;case 46:D("class",a.Element);break;case 35:D("id",a.Equals);break;case 91:{let e;m(1);let i=null;124===t.charCodeAt(n)?e=p(1):t.startsWith("*|",n)?(i="*",e=p(2)):(e=p(0),124===t.charCodeAt(n)&&61!==t.charCodeAt(n+1)&&(i=e,e=p(1))),m(0);let o=a.Exists,u=l.get(t.charCodeAt(n));if(u){if(o=u,61!==t.charCodeAt(n+1))throw Error("Expected `=`");m(2)}else 61===t.charCodeAt(n)&&(o=a.Equals,m(1));let c="",d=null;if("exists"!==o){if(g(t.charCodeAt(n))){let e=t.charCodeAt(n),r=n+1;for(;r<t.length&&(t.charCodeAt(r)!==e||v(r));)r+=1;if(t.charCodeAt(r)!==e)throw Error("Attribute value didn't end");c=h(t.slice(n+1,r)),n=r+1}else{let e=n;for(;n<t.length&&(!f(t.charCodeAt(n))&&93!==t.charCodeAt(n)||v(n));)n+=1;c=h(t.slice(e,n))}m(0);let e=32|t.charCodeAt(n);115===e?(d=!1,m(1)):105===e&&(d=!0,m(1))}if(93!==t.charCodeAt(n))throw Error("Attribute selector didn't terminate");n+=1;let y={type:r.Attribute,name:e,action:o,value:c,namespace:i,ignoreCase:d};s.push(y);break}case 58:{if(58===t.charCodeAt(n+1)){s.push({type:r.PseudoElement,name:p(2).toLowerCase(),data:40===t.charCodeAt(n)?y():null});continue}let a=p(1).toLowerCase(),i=null;if(40===t.charCodeAt(n))if(u.has(a)){if(g(t.charCodeAt(n+1)))throw Error(`Pseudo-selector ${a} cannot be quoted`);if(n=e(i=[],t,n+1),41!==t.charCodeAt(n))throw Error(`Missing closing parenthesis in :${a} (${t})`);n+=1}else{if(i=y(),d.has(a)){let e=i.charCodeAt(0);e===i.charCodeAt(i.length-1)&&g(e)&&(i=i.slice(1,-1))}i=h(i)}s.push({type:r.Pseudo,name:a,data:i});break}case 44:x(),s=[],m(1);break;default:{let e;if(t.startsWith("/*",n)){let e=t.indexOf("*/",n+2);if(e<0)throw Error("Comment was not terminated");n=e+2,0===s.length&&m(0);break}let a=null;if(42===i)n+=1,e="*";else if(124===i){if(e="",124===t.charCodeAt(n+1)){w(r.ColumnCombinator),m(2);break}}else if(o.test(t.slice(n)))e=p(0);else break e;124===t.charCodeAt(n)&&124!==t.charCodeAt(n+1)&&(a=e,42===t.charCodeAt(n+1)?(e="*",n+=2):e=p(1)),s.push("*"===e?{type:r.Universal,namespace:a}:{type:r.Tag,name:e,namespace:a})}}}return x(),n}(i,`${e}`,0);if(t<e.length)throw Error(`Unmatched selector: ${e.slice(t)}`);return i}let y=["\\",'"'],v=[...y,"(",")"],b=new Set(y.map(e=>e.charCodeAt(0))),w=new Set(v.map(e=>e.charCodeAt(0))),D=new Set([...v,"~","^","$","*","+","!","|",":","[","]"," ","."].map(e=>e.charCodeAt(0)));function x(e){return e.map(e=>e.map(k).join("")).join(", ")}function k(e,i,t){switch(e.type){case r.Child:return 0===i?"> ":" > ";case r.Parent:return 0===i?"< ":" < ";case r.Sibling:return 0===i?"~ ":" ~ ";case r.Adjacent:return 0===i?"+ ":" + ";case r.Descendant:return" ";case r.ColumnCombinator:return 0===i?"|| ":" || ";case r.Universal:return"*"===e.namespace&&i+1<t.length&&"name"in t[i+1]?"":`${E(e.namespace)}*`;case r.Tag:return C(e);case r.PseudoElement:return`::${T(e.name,D)}${null===e.data?"":`(${T(e.data,w)})`}`;case r.Pseudo:return`:${T(e.name,D)}${null===e.data?"":`(${"string"==typeof e.data?T(e.data,w):x(e.data)})`}`;case r.Attribute:{if("id"===e.name&&e.action===a.Equals&&"quirks"===e.ignoreCase&&!e.namespace)return`#${T(e.value,D)}`;if("class"===e.name&&e.action===a.Element&&"quirks"===e.ignoreCase&&!e.namespace)return`.${T(e.value,D)}`;let r=C(e);if(e.action===a.Exists)return`[${r}]`;return`[${r}${function(e){switch(e){case a.Equals:return"";case a.Element:return"~";case a.Start:return"^";case a.End:return"$";case a.Any:return"*";case a.Not:return"!";case a.Hyphen:return"|";case a.Exists:throw Error("Shouldn't be here")}}(e.action)}="${T(e.value,b)}"${null===e.ignoreCase?"":e.ignoreCase?" i":" s"}]`}}}function C(e){return`${E(e.namespace)}${T(e.name,D)}`}function E(e){return null!==e?`${"*"===e?"*":T(e,D)}|`:""}function T(e,r){let a=0,i="";for(let t=0;t<e.length;t++)r.has(e.charCodeAt(t))&&(i+=`${e.slice(a,t)}\\${e.charAt(t)}`,a=t+1);return i.length>0?i+e.slice(a):e}e.s(["AttributeAction",()=>a,"IgnoreCaseMode",0,n,"SelectorType",()=>r,"isTraversal",()=>c,"parse",()=>m,"stringify",()=>x],103644)},324586,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.parse=void 0;var i=new Set([9,10,12,13,32]);a.parse=function(e){if("even"===(e=e.trim().toLowerCase()))return[2,0];if("odd"===e)return[2,1];var r=0,a=0,t=o(),n=s();if(r<e.length&&"n"===e.charAt(r)&&(r++,a=t*(null!=n?n:1),l(),r<e.length?(t=o(),l(),n=s()):t=n=0),null===n||r<e.length)throw Error("n-th rule couldn't be parsed ('".concat(e,"')"));return[a,t*n];function o(){return"-"===e.charAt(r)?(r++,-1):("+"===e.charAt(r)&&r++,1)}function s(){for(var a=r,i=0;r<e.length&&e.charCodeAt(r)>=48&&57>=e.charCodeAt(r);)i=10*i+(e.charCodeAt(r)-48),r++;return r===a?null:i}function l(){for(;r<e.length&&i.has(e.charCodeAt(r));)r++}}},553751,(e,r,a)=>{r.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}},732652,(e,r,a)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.generate=a.compile=void 0;var t=i(e.r(553751));a.compile=function(e){var r=e[0],a=e[1]-1;if(a<0&&r<=0)return t.default.falseFunc;if(-1===r)return function(e){return e<=a};if(0===r)return function(e){return e===a};if(1===r)return a<0?t.default.trueFunc:function(e){return e>=a};var i=Math.abs(r),n=(a%i+i)%i;return r>1?function(e){return e>=a&&e%i===n}:function(e){return e<=a&&e%i===n}},a.generate=function(e){var r=e[0],a=e[1]-1,i=0;if(r<0){var t=-r,n=(a%t+t)%t;return function(){var e=n+t*i++;return e>a?null:e}}return 0===r?a<0?function(){return null}:function(){return 0==i++?a:null}:(a<0&&(a+=r*Math.ceil(-a/r)),function(){return r*i+++a})}},959487,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.sequence=a.generate=a.compile=a.parse=void 0;var i=e.r(324586);Object.defineProperty(a,"parse",{enumerable:!0,get:function(){return i.parse}});var t=e.r(732652);Object.defineProperty(a,"compile",{enumerable:!0,get:function(){return t.compile}}),Object.defineProperty(a,"generate",{enumerable:!0,get:function(){return t.generate}}),a.default=function(e){return(0,t.compile)((0,i.parse)(e))},a.sequence=function(e){return(0,t.generate)((0,i.parse)(e))}},460518,(e,r,a)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.filters=void 0;var t=i(e.r(959487)),n=i(e.r(553751));function o(e,r){return function(a){var i=r.getParent(a);return null!=i&&r.isTag(i)&&e(a)}}function s(e){return function(r,a,i){var t=i.adapter[e];return"function"!=typeof t?n.default.falseFunc:function(e){return t(e)&&r(e)}}}a.filters={contains:function(e,r,a){var i=a.adapter;return function(a){return e(a)&&i.getText(a).includes(r)}},icontains:function(e,r,a){var i=a.adapter,t=r.toLowerCase();return function(r){return e(r)&&i.getText(r).toLowerCase().includes(t)}},"nth-child":function(e,r,a){var i=a.adapter,s=a.equals,l=(0,t.default)(r);return l===n.default.falseFunc?n.default.falseFunc:l===n.default.trueFunc?o(e,i):function(r){for(var a=i.getSiblings(r),t=0,n=0;n<a.length&&!s(r,a[n]);n++)i.isTag(a[n])&&t++;return l(t)&&e(r)}},"nth-last-child":function(e,r,a){var i=a.adapter,s=a.equals,l=(0,t.default)(r);return l===n.default.falseFunc?n.default.falseFunc:l===n.default.trueFunc?o(e,i):function(r){for(var a=i.getSiblings(r),t=0,n=a.length-1;n>=0&&!s(r,a[n]);n--)i.isTag(a[n])&&t++;return l(t)&&e(r)}},"nth-of-type":function(e,r,a){var i=a.adapter,s=a.equals,l=(0,t.default)(r);return l===n.default.falseFunc?n.default.falseFunc:l===n.default.trueFunc?o(e,i):function(r){for(var a=i.getSiblings(r),t=0,n=0;n<a.length;n++){var o=a[n];if(s(r,o))break;i.isTag(o)&&i.getName(o)===i.getName(r)&&t++}return l(t)&&e(r)}},"nth-last-of-type":function(e,r,a){var i=a.adapter,s=a.equals,l=(0,t.default)(r);return l===n.default.falseFunc?n.default.falseFunc:l===n.default.trueFunc?o(e,i):function(r){for(var a=i.getSiblings(r),t=0,n=a.length-1;n>=0;n--){var o=a[n];if(s(r,o))break;i.isTag(o)&&i.getName(o)===i.getName(r)&&t++}return l(t)&&e(r)}},root:function(e,r,a){var i=a.adapter;return function(r){var a=i.getParent(r);return(null==a||!i.isTag(a))&&e(r)}},scope:function(e,r,i,t){var n=i.equals;return t&&0!==t.length?1===t.length?function(r){return n(t[0],r)&&e(r)}:function(r){return t.includes(r)&&e(r)}:a.filters.root(e,r,i)},hover:s("isHovered"),visited:s("isVisited"),active:s("isActive")}},168115,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.verifyPseudoArgs=a.pseudos=void 0,a.pseudos={empty:function(e,r){var a=r.adapter;return!a.getChildren(e).some(function(e){return a.isTag(e)||""!==a.getText(e)})},"first-child":function(e,r){var a=r.adapter,i=r.equals;if(a.prevElementSibling)return null==a.prevElementSibling(e);var t=a.getSiblings(e).find(function(e){return a.isTag(e)});return null!=t&&i(e,t)},"last-child":function(e,r){for(var a=r.adapter,i=r.equals,t=a.getSiblings(e),n=t.length-1;n>=0;n--){if(i(e,t[n]))return!0;if(a.isTag(t[n]))break}return!1},"first-of-type":function(e,r){for(var a=r.adapter,i=r.equals,t=a.getSiblings(e),n=a.getName(e),o=0;o<t.length;o++){var s=t[o];if(i(e,s))return!0;if(a.isTag(s)&&a.getName(s)===n)break}return!1},"last-of-type":function(e,r){for(var a=r.adapter,i=r.equals,t=a.getSiblings(e),n=a.getName(e),o=t.length-1;o>=0;o--){var s=t[o];if(i(e,s))return!0;if(a.isTag(s)&&a.getName(s)===n)break}return!1},"only-of-type":function(e,r){var a=r.adapter,i=r.equals,t=a.getName(e);return a.getSiblings(e).every(function(r){return i(e,r)||!a.isTag(r)||a.getName(r)!==t})},"only-child":function(e,r){var a=r.adapter,i=r.equals;return a.getSiblings(e).every(function(r){return i(e,r)||!a.isTag(r)})}},a.verifyPseudoArgs=function(e,r,a,i){if(null===a){if(e.length>i)throw Error("Pseudo-class :".concat(r," requires an argument"))}else if(e.length===i)throw Error("Pseudo-class :".concat(r," doesn't have any arguments"))}},991662,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.aliases=void 0,a.aliases={"any-link":":is(a, area, link)[href]",link:":any-link:not(:visited)",disabled:":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",enabled:":not(:disabled)",checked:":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",required:":is(input, select, textarea)[required]",optional:":is(input, select, textarea):not([required])",selected:"option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",checkbox:"[type=checkbox]",file:"[type=file]",password:"[type=password]",radio:"[type=radio]",reset:"[type=reset]",image:"[type=image]",submit:"[type=submit]",parent:":not(:empty)",header:":is(h1, h2, h3, h4, h5, h6)",button:":is(button, input[type=button])",input:":is(input, textarea, select, button)",text:"input:is(:not([type!='']), [type=text])"}},83680,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.isTraversal=void 0;var i=e.r(103644),t=new Map([[i.SelectorType.Universal,50],[i.SelectorType.Tag,30],[i.SelectorType.Attribute,1],[i.SelectorType.Pseudo,0]]);a.isTraversal=function(e){return!t.has(e.type)};var n=new Map([[i.AttributeAction.Exists,10],[i.AttributeAction.Equals,8],[i.AttributeAction.Not,7],[i.AttributeAction.Start,6],[i.AttributeAction.End,6],[i.AttributeAction.Any,5]]);function o(e){var r,a,s=null!=(r=t.get(e.type))?r:-1;return e.type===i.SelectorType.Attribute?(s=null!=(a=n.get(e.action))?a:4,e.action===i.AttributeAction.Equals&&"id"===e.name&&(s=9),e.ignoreCase&&(s>>=1)):e.type===i.SelectorType.Pseudo&&(e.data?"has"===e.name||"contains"===e.name?s=0:Array.isArray(e.data)?(s=Math.min.apply(Math,e.data.map(function(e){return Math.min.apply(Math,e.map(o))})))<0&&(s=0):s=2:s=3),s}a.default=function(e){for(var r=e.map(o),a=1;a<e.length;a++){var i=r[a];if(!(i<0))for(var t=a-1;t>=0&&i<r[t];t--){var n=e[t+1];e[t+1]=e[t],e[t]=n,r[t+1]=r[t],r[t]=i}}}},31761,(e,r,a)=>{"use strict";var i=e.e&&e.e.__spreadArray||function(e,r,a){if(a||2==arguments.length)for(var i,t=0,n=r.length;t<n;t++)!i&&t in r||(i||(i=Array.prototype.slice.call(r,0,t)),i[t]=r[t]);return e.concat(i||Array.prototype.slice.call(r))},t=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.subselects=a.getNextSiblings=a.ensureIsTag=a.PLACEHOLDER_ELEMENT=void 0;var n=t(e.r(553751)),o=e.r(83680);function s(e,r){return e===n.default.falseFunc?n.default.falseFunc:function(a){return r.isTag(a)&&e(a)}}function l(e,r){var a=r.getSiblings(e);if(a.length<=1)return[];var i=a.indexOf(e);return i<0||i===a.length-1?[]:a.slice(i+1).filter(r.isTag)}function u(e){return{xmlMode:!!e.xmlMode,lowerCaseAttributeNames:!!e.lowerCaseAttributeNames,lowerCaseTags:!!e.lowerCaseTags,quirksMode:!!e.quirksMode,cacheResults:!!e.cacheResults,pseudos:e.pseudos,adapter:e.adapter,equals:e.equals}}a.PLACEHOLDER_ELEMENT={},a.ensureIsTag=s,a.getNextSiblings=l;var c=function(e,r,a,i,t){var o=t(r,u(a),i);return o===n.default.trueFunc?e:o===n.default.falseFunc?n.default.falseFunc:function(r){return o(r)&&e(r)}};a.subselects={is:c,matches:c,where:c,not:function(e,r,a,i,t){var o=t(r,u(a),i);return o===n.default.falseFunc?e:o===n.default.trueFunc?n.default.falseFunc:function(r){return!o(r)&&e(r)}},has:function(e,r,t,c,d){var p=t.adapter,h=u(t);h.relativeSelector=!0;var g=r.some(function(e){return e.some(o.isTraversal)})?[a.PLACEHOLDER_ELEMENT]:void 0,f=d(r,h,g);if(f===n.default.falseFunc)return n.default.falseFunc;var m=s(f,p);if(g&&f!==n.default.trueFunc){var y=f.shouldTestNextSiblings,v=void 0!==y&&y;return function(r){if(!e(r))return!1;g[0]=r;var a=p.getChildren(r),t=v?i(i([],a,!0),l(r,p),!0):a;return p.existsOne(m,t)}}return function(r){return e(r)&&p.existsOne(m,p.getChildren(r))}}}},943625,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.compilePseudoSelector=a.aliases=a.pseudos=a.filters=void 0;var i=e.r(103644),t=e.r(460518);Object.defineProperty(a,"filters",{enumerable:!0,get:function(){return t.filters}});var n=e.r(168115);Object.defineProperty(a,"pseudos",{enumerable:!0,get:function(){return n.pseudos}});var o=e.r(991662);Object.defineProperty(a,"aliases",{enumerable:!0,get:function(){return o.aliases}});var s=e.r(31761);a.compilePseudoSelector=function(e,r,a,l,u){var c,d=r.name,p=r.data;if(Array.isArray(p)){if(!(d in s.subselects))throw Error("Unknown pseudo-class :".concat(d,"(").concat(p,")"));return s.subselects[d](e,p,a,l,u)}var h=null==(c=a.pseudos)?void 0:c[d],g="string"==typeof h?h:o.aliases[d];if("string"==typeof g){if(null!=p)throw Error("Pseudo ".concat(d," doesn't have any arguments"));var f=(0,i.parse)(g);return s.subselects.is(e,f,a,l,u)}if("function"==typeof h)return(0,n.verifyPseudoArgs)(h,d,p,1),function(r){return h(r,p)&&e(r)};if(d in t.filters)return t.filters[d](e,p,a,l);if(d in n.pseudos){var m=n.pseudos[d];return(0,n.verifyPseudoArgs)(m,d,p,2),function(r){return m(r,a,p)&&e(r)}}throw Error("Unknown pseudo-class :".concat(d))}},117831,(e,r,a)=>{"use strict";var i,t;Object.defineProperty(a,"__esModule",{value:!0}),a.Doctype=a.CDATA=a.Tag=a.Style=a.Script=a.Comment=a.Directive=a.Text=a.Root=a.isTag=a.ElementType=void 0,(t=i=a.ElementType||(a.ElementType={})).Root="root",t.Text="text",t.Directive="directive",t.Comment="comment",t.Script="script",t.Style="style",t.Tag="tag",t.CDATA="cdata",t.Doctype="doctype",a.isTag=function(e){return e.type===i.Tag||e.type===i.Script||e.type===i.Style},a.Root=i.Root,a.Text=i.Text,a.Directive=i.Directive,a.Comment=i.Comment,a.Script=i.Script,a.Style=i.Style,a.Tag=i.Tag,a.CDATA=i.CDATA,a.Doctype=i.Doctype},111304,(e,r,a)=>{"use strict";var i,t=e.e&&e.e.__extends||(i=function(e,r){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])})(e,r)},function(e,r){if("function"!=typeof r&&null!==r)throw TypeError("Class extends value "+String(r)+" is not a constructor or null");function a(){this.constructor=e}i(e,r),e.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}),n=e.e&&e.e.__assign||function(){return(n=Object.assign||function(e){for(var r,a=1,i=arguments.length;a<i;a++)for(var t in r=arguments[a])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e}).apply(this,arguments)};Object.defineProperty(a,"__esModule",{value:!0}),a.cloneNode=a.hasChildren=a.isDocument=a.isDirective=a.isComment=a.isText=a.isCDATA=a.isTag=a.Element=a.Document=a.CDATA=a.NodeWithChildren=a.ProcessingInstruction=a.Comment=a.Text=a.DataNode=a.Node=void 0;var o=e.r(117831),s=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),x(this,e)},e}();a.Node=s;var l=function(e){function r(r){var a=e.call(this)||this;return a.data=r,a}return t(r,e),Object.defineProperty(r.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),r}(s);a.DataNode=l;var u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type=o.ElementType.Text,r}return t(r,e),Object.defineProperty(r.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),r}(l);a.Text=u;var c=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type=o.ElementType.Comment,r}return t(r,e),Object.defineProperty(r.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),r}(l);a.Comment=c;var d=function(e){function r(r,a){var i=e.call(this,a)||this;return i.name=r,i.type=o.ElementType.Directive,i}return t(r,e),Object.defineProperty(r.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),r}(l);a.ProcessingInstruction=d;var p=function(e){function r(r){var a=e.call(this)||this;return a.children=r,a}return t(r,e),Object.defineProperty(r.prototype,"firstChild",{get:function(){var e;return null!=(e=this.children[0])?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),r}(s);a.NodeWithChildren=p;var h=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type=o.ElementType.CDATA,r}return t(r,e),Object.defineProperty(r.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),r}(p);a.CDATA=h;var g=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type=o.ElementType.Root,r}return t(r,e),Object.defineProperty(r.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),r}(p);a.Document=g;var f=function(e){function r(r,a,i,t){void 0===i&&(i=[]),void 0===t&&(t="script"===r?o.ElementType.Script:"style"===r?o.ElementType.Style:o.ElementType.Tag);var n=e.call(this,i)||this;return n.name=r,n.attribs=a,n.type=t,n}return t(r,e),Object.defineProperty(r.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"attributes",{get:function(){var e=this;return Object.keys(this.attribs).map(function(r){var a,i;return{name:r,value:e.attribs[r],namespace:null==(a=e["x-attribsNamespace"])?void 0:a[r],prefix:null==(i=e["x-attribsPrefix"])?void 0:i[r]}})},enumerable:!1,configurable:!0}),r}(p);function m(e){return(0,o.isTag)(e)}function y(e){return e.type===o.ElementType.CDATA}function v(e){return e.type===o.ElementType.Text}function b(e){return e.type===o.ElementType.Comment}function w(e){return e.type===o.ElementType.Directive}function D(e){return e.type===o.ElementType.Root}function x(e,r){if(void 0===r&&(r=!1),v(e))a=new u(e.data);else if(b(e))a=new c(e.data);else if(m(e)){var a,i=r?k(e.children):[],t=new f(e.name,n({},e.attribs),i);i.forEach(function(e){return e.parent=t}),null!=e.namespace&&(t.namespace=e.namespace),e["x-attribsNamespace"]&&(t["x-attribsNamespace"]=n({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(t["x-attribsPrefix"]=n({},e["x-attribsPrefix"])),a=t}else if(y(e)){var i=r?k(e.children):[],o=new h(i);i.forEach(function(e){return e.parent=o}),a=o}else if(D(e)){var i=r?k(e.children):[],s=new g(i);i.forEach(function(e){return e.parent=s}),e["x-mode"]&&(s["x-mode"]=e["x-mode"]),a=s}else if(w(e)){var l=new d(e.name,e.data);null!=e["x-name"]&&(l["x-name"]=e["x-name"],l["x-publicId"]=e["x-publicId"],l["x-systemId"]=e["x-systemId"]),a=l}else throw Error("Not implemented yet: ".concat(e.type));return a.startIndex=e.startIndex,a.endIndex=e.endIndex,null!=e.sourceCodeLocation&&(a.sourceCodeLocation=e.sourceCodeLocation),a}function k(e){for(var r=e.map(function(e){return x(e,!0)}),a=1;a<r.length;a++)r[a].prev=r[a-1],r[a-1].next=r[a];return r}a.Element=f,a.isTag=m,a.isCDATA=y,a.isText=v,a.isComment=b,a.isDirective=w,a.isDocument=D,a.hasChildren=function(e){return Object.prototype.hasOwnProperty.call(e,"children")},a.cloneNode=x},792599,(e,r,a)=>{"use strict";var i=e.e&&e.e.__createBinding||(Object.create?function(e,r,a,i){void 0===i&&(i=a);var t=Object.getOwnPropertyDescriptor(r,a);(!t||("get"in t?!r.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return r[a]}}),Object.defineProperty(e,i,t)}:function(e,r,a,i){void 0===i&&(i=a),e[i]=r[a]}),t=e.e&&e.e.__exportStar||function(e,r){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(r,a)||i(r,e,a)};Object.defineProperty(a,"__esModule",{value:!0}),a.DomHandler=void 0;var n=e.r(117831),o=e.r(111304);t(e.r(111304),a);var s={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},l=function(){function e(e,r,a){this.dom=[],this.root=new o.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"==typeof r&&(a=r,r=s),"object"==typeof e&&(r=e,e=void 0),this.callback=null!=e?e:null,this.options=null!=r?r:s,this.elementCB=null!=a?a:null}return e.prototype.onparserinit=function(e){this.parser=e},e.prototype.onreset=function(){this.dom=[],this.root=new o.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},e.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},e.prototype.onerror=function(e){this.handleCallback(e)},e.prototype.onclosetag=function(){this.lastNode=null;var e=this.tagStack.pop();this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(e)},e.prototype.onopentag=function(e,r){var a=this.options.xmlMode?n.ElementType.Tag:void 0,i=new o.Element(e,r,void 0,a);this.addNode(i),this.tagStack.push(i)},e.prototype.ontext=function(e){var r=this.lastNode;if(r&&r.type===n.ElementType.Text)r.data+=e,this.options.withEndIndices&&(r.endIndex=this.parser.endIndex);else{var a=new o.Text(e);this.addNode(a),this.lastNode=a}},e.prototype.oncomment=function(e){if(this.lastNode&&this.lastNode.type===n.ElementType.Comment){this.lastNode.data+=e;return}var r=new o.Comment(e);this.addNode(r),this.lastNode=r},e.prototype.oncommentend=function(){this.lastNode=null},e.prototype.oncdatastart=function(){var e=new o.Text(""),r=new o.CDATA([e]);this.addNode(r),e.parent=r,this.lastNode=e},e.prototype.oncdataend=function(){this.lastNode=null},e.prototype.onprocessinginstruction=function(e,r){var a=new o.ProcessingInstruction(e,r);this.addNode(a)},e.prototype.handleCallback=function(e){if("function"==typeof this.callback)this.callback(e,this.dom);else if(e)throw e},e.prototype.addNode=function(e){var r=this.tagStack[this.tagStack.length-1],a=r.children[r.children.length-1];this.options.withStartIndices&&(e.startIndex=this.parser.startIndex),this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),r.children.push(e),a&&(e.prev=a,a.next=e),e.parent=r,this.lastNode=null},e}();a.DomHandler=l,a.default=l},325325,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.escapeText=a.escapeAttribute=a.escapeUTF8=a.escape=a.encodeXML=a.getCodePoint=a.xmlReplacer=void 0,a.xmlReplacer=/["&'<>$\x80-\uFFFF]/g;var i=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]]);function t(e){for(var r,t="",n=0;null!==(r=a.xmlReplacer.exec(e));){var o=r.index,s=e.charCodeAt(o),l=i.get(s);void 0!==l?(t+=e.substring(n,o)+l,n=o+1):(t+="".concat(e.substring(n,o),"&#x").concat((0,a.getCodePoint)(e,o).toString(16),";"),n=a.xmlReplacer.lastIndex+=Number((64512&s)==55296))}return t+e.substr(n)}function n(e,r){return function(a){for(var i,t=0,n="";i=e.exec(a);)t!==i.index&&(n+=a.substring(t,i.index)),n+=r.get(i[0].charCodeAt(0)),t=i.index+1;return n+a.substring(t)}}a.getCodePoint=null!=String.prototype.codePointAt?function(e,r){return e.codePointAt(r)}:function(e,r){return(64512&e.charCodeAt(r))==55296?(e.charCodeAt(r)-55296)*1024+e.charCodeAt(r+1)-56320+65536:e.charCodeAt(r)},a.encodeXML=t,a.escape=t,a.escapeUTF8=n(/[&<>'"]/g,i),a.escapeAttribute=n(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]])),a.escapeText=n(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]]))},662973,(e,r,a)=>{"use strict";function i(e){for(var r=1;r<e.length;r++)e[r][0]+=e[r-1][0]+1;return e}Object.defineProperty(a,"__esModule",{value:!0}),a.default=new Map(i([[9,"&Tab;"],[0,"&NewLine;"],[22,"&excl;"],[0,"&quot;"],[0,"&num;"],[0,"&dollar;"],[0,"&percnt;"],[0,"&amp;"],[0,"&apos;"],[0,"&lpar;"],[0,"&rpar;"],[0,"&ast;"],[0,"&plus;"],[0,"&comma;"],[1,"&period;"],[0,"&sol;"],[10,"&colon;"],[0,"&semi;"],[0,{v:"&lt;",n:8402,o:"&nvlt;"}],[0,{v:"&equals;",n:8421,o:"&bne;"}],[0,{v:"&gt;",n:8402,o:"&nvgt;"}],[0,"&quest;"],[0,"&commat;"],[26,"&lbrack;"],[0,"&bsol;"],[0,"&rbrack;"],[0,"&Hat;"],[0,"&lowbar;"],[0,"&DiacriticalGrave;"],[5,{n:106,o:"&fjlig;"}],[20,"&lbrace;"],[0,"&verbar;"],[0,"&rbrace;"],[34,"&nbsp;"],[0,"&iexcl;"],[0,"&cent;"],[0,"&pound;"],[0,"&curren;"],[0,"&yen;"],[0,"&brvbar;"],[0,"&sect;"],[0,"&die;"],[0,"&copy;"],[0,"&ordf;"],[0,"&laquo;"],[0,"&not;"],[0,"&shy;"],[0,"&circledR;"],[0,"&macr;"],[0,"&deg;"],[0,"&PlusMinus;"],[0,"&sup2;"],[0,"&sup3;"],[0,"&acute;"],[0,"&micro;"],[0,"&para;"],[0,"&centerdot;"],[0,"&cedil;"],[0,"&sup1;"],[0,"&ordm;"],[0,"&raquo;"],[0,"&frac14;"],[0,"&frac12;"],[0,"&frac34;"],[0,"&iquest;"],[0,"&Agrave;"],[0,"&Aacute;"],[0,"&Acirc;"],[0,"&Atilde;"],[0,"&Auml;"],[0,"&angst;"],[0,"&AElig;"],[0,"&Ccedil;"],[0,"&Egrave;"],[0,"&Eacute;"],[0,"&Ecirc;"],[0,"&Euml;"],[0,"&Igrave;"],[0,"&Iacute;"],[0,"&Icirc;"],[0,"&Iuml;"],[0,"&ETH;"],[0,"&Ntilde;"],[0,"&Ograve;"],[0,"&Oacute;"],[0,"&Ocirc;"],[0,"&Otilde;"],[0,"&Ouml;"],[0,"&times;"],[0,"&Oslash;"],[0,"&Ugrave;"],[0,"&Uacute;"],[0,"&Ucirc;"],[0,"&Uuml;"],[0,"&Yacute;"],[0,"&THORN;"],[0,"&szlig;"],[0,"&agrave;"],[0,"&aacute;"],[0,"&acirc;"],[0,"&atilde;"],[0,"&auml;"],[0,"&aring;"],[0,"&aelig;"],[0,"&ccedil;"],[0,"&egrave;"],[0,"&eacute;"],[0,"&ecirc;"],[0,"&euml;"],[0,"&igrave;"],[0,"&iacute;"],[0,"&icirc;"],[0,"&iuml;"],[0,"&eth;"],[0,"&ntilde;"],[0,"&ograve;"],[0,"&oacute;"],[0,"&ocirc;"],[0,"&otilde;"],[0,"&ouml;"],[0,"&div;"],[0,"&oslash;"],[0,"&ugrave;"],[0,"&uacute;"],[0,"&ucirc;"],[0,"&uuml;"],[0,"&yacute;"],[0,"&thorn;"],[0,"&yuml;"],[0,"&Amacr;"],[0,"&amacr;"],[0,"&Abreve;"],[0,"&abreve;"],[0,"&Aogon;"],[0,"&aogon;"],[0,"&Cacute;"],[0,"&cacute;"],[0,"&Ccirc;"],[0,"&ccirc;"],[0,"&Cdot;"],[0,"&cdot;"],[0,"&Ccaron;"],[0,"&ccaron;"],[0,"&Dcaron;"],[0,"&dcaron;"],[0,"&Dstrok;"],[0,"&dstrok;"],[0,"&Emacr;"],[0,"&emacr;"],[2,"&Edot;"],[0,"&edot;"],[0,"&Eogon;"],[0,"&eogon;"],[0,"&Ecaron;"],[0,"&ecaron;"],[0,"&Gcirc;"],[0,"&gcirc;"],[0,"&Gbreve;"],[0,"&gbreve;"],[0,"&Gdot;"],[0,"&gdot;"],[0,"&Gcedil;"],[1,"&Hcirc;"],[0,"&hcirc;"],[0,"&Hstrok;"],[0,"&hstrok;"],[0,"&Itilde;"],[0,"&itilde;"],[0,"&Imacr;"],[0,"&imacr;"],[2,"&Iogon;"],[0,"&iogon;"],[0,"&Idot;"],[0,"&imath;"],[0,"&IJlig;"],[0,"&ijlig;"],[0,"&Jcirc;"],[0,"&jcirc;"],[0,"&Kcedil;"],[0,"&kcedil;"],[0,"&kgreen;"],[0,"&Lacute;"],[0,"&lacute;"],[0,"&Lcedil;"],[0,"&lcedil;"],[0,"&Lcaron;"],[0,"&lcaron;"],[0,"&Lmidot;"],[0,"&lmidot;"],[0,"&Lstrok;"],[0,"&lstrok;"],[0,"&Nacute;"],[0,"&nacute;"],[0,"&Ncedil;"],[0,"&ncedil;"],[0,"&Ncaron;"],[0,"&ncaron;"],[0,"&napos;"],[0,"&ENG;"],[0,"&eng;"],[0,"&Omacr;"],[0,"&omacr;"],[2,"&Odblac;"],[0,"&odblac;"],[0,"&OElig;"],[0,"&oelig;"],[0,"&Racute;"],[0,"&racute;"],[0,"&Rcedil;"],[0,"&rcedil;"],[0,"&Rcaron;"],[0,"&rcaron;"],[0,"&Sacute;"],[0,"&sacute;"],[0,"&Scirc;"],[0,"&scirc;"],[0,"&Scedil;"],[0,"&scedil;"],[0,"&Scaron;"],[0,"&scaron;"],[0,"&Tcedil;"],[0,"&tcedil;"],[0,"&Tcaron;"],[0,"&tcaron;"],[0,"&Tstrok;"],[0,"&tstrok;"],[0,"&Utilde;"],[0,"&utilde;"],[0,"&Umacr;"],[0,"&umacr;"],[0,"&Ubreve;"],[0,"&ubreve;"],[0,"&Uring;"],[0,"&uring;"],[0,"&Udblac;"],[0,"&udblac;"],[0,"&Uogon;"],[0,"&uogon;"],[0,"&Wcirc;"],[0,"&wcirc;"],[0,"&Ycirc;"],[0,"&ycirc;"],[0,"&Yuml;"],[0,"&Zacute;"],[0,"&zacute;"],[0,"&Zdot;"],[0,"&zdot;"],[0,"&Zcaron;"],[0,"&zcaron;"],[19,"&fnof;"],[34,"&imped;"],[63,"&gacute;"],[65,"&jmath;"],[142,"&circ;"],[0,"&caron;"],[16,"&breve;"],[0,"&DiacriticalDot;"],[0,"&ring;"],[0,"&ogon;"],[0,"&DiacriticalTilde;"],[0,"&dblac;"],[51,"&DownBreve;"],[127,"&Alpha;"],[0,"&Beta;"],[0,"&Gamma;"],[0,"&Delta;"],[0,"&Epsilon;"],[0,"&Zeta;"],[0,"&Eta;"],[0,"&Theta;"],[0,"&Iota;"],[0,"&Kappa;"],[0,"&Lambda;"],[0,"&Mu;"],[0,"&Nu;"],[0,"&Xi;"],[0,"&Omicron;"],[0,"&Pi;"],[0,"&Rho;"],[1,"&Sigma;"],[0,"&Tau;"],[0,"&Upsilon;"],[0,"&Phi;"],[0,"&Chi;"],[0,"&Psi;"],[0,"&ohm;"],[7,"&alpha;"],[0,"&beta;"],[0,"&gamma;"],[0,"&delta;"],[0,"&epsi;"],[0,"&zeta;"],[0,"&eta;"],[0,"&theta;"],[0,"&iota;"],[0,"&kappa;"],[0,"&lambda;"],[0,"&mu;"],[0,"&nu;"],[0,"&xi;"],[0,"&omicron;"],[0,"&pi;"],[0,"&rho;"],[0,"&sigmaf;"],[0,"&sigma;"],[0,"&tau;"],[0,"&upsi;"],[0,"&phi;"],[0,"&chi;"],[0,"&psi;"],[0,"&omega;"],[7,"&thetasym;"],[0,"&Upsi;"],[2,"&phiv;"],[0,"&piv;"],[5,"&Gammad;"],[0,"&digamma;"],[18,"&kappav;"],[0,"&rhov;"],[3,"&epsiv;"],[0,"&backepsilon;"],[10,"&IOcy;"],[0,"&DJcy;"],[0,"&GJcy;"],[0,"&Jukcy;"],[0,"&DScy;"],[0,"&Iukcy;"],[0,"&YIcy;"],[0,"&Jsercy;"],[0,"&LJcy;"],[0,"&NJcy;"],[0,"&TSHcy;"],[0,"&KJcy;"],[1,"&Ubrcy;"],[0,"&DZcy;"],[0,"&Acy;"],[0,"&Bcy;"],[0,"&Vcy;"],[0,"&Gcy;"],[0,"&Dcy;"],[0,"&IEcy;"],[0,"&ZHcy;"],[0,"&Zcy;"],[0,"&Icy;"],[0,"&Jcy;"],[0,"&Kcy;"],[0,"&Lcy;"],[0,"&Mcy;"],[0,"&Ncy;"],[0,"&Ocy;"],[0,"&Pcy;"],[0,"&Rcy;"],[0,"&Scy;"],[0,"&Tcy;"],[0,"&Ucy;"],[0,"&Fcy;"],[0,"&KHcy;"],[0,"&TScy;"],[0,"&CHcy;"],[0,"&SHcy;"],[0,"&SHCHcy;"],[0,"&HARDcy;"],[0,"&Ycy;"],[0,"&SOFTcy;"],[0,"&Ecy;"],[0,"&YUcy;"],[0,"&YAcy;"],[0,"&acy;"],[0,"&bcy;"],[0,"&vcy;"],[0,"&gcy;"],[0,"&dcy;"],[0,"&iecy;"],[0,"&zhcy;"],[0,"&zcy;"],[0,"&icy;"],[0,"&jcy;"],[0,"&kcy;"],[0,"&lcy;"],[0,"&mcy;"],[0,"&ncy;"],[0,"&ocy;"],[0,"&pcy;"],[0,"&rcy;"],[0,"&scy;"],[0,"&tcy;"],[0,"&ucy;"],[0,"&fcy;"],[0,"&khcy;"],[0,"&tscy;"],[0,"&chcy;"],[0,"&shcy;"],[0,"&shchcy;"],[0,"&hardcy;"],[0,"&ycy;"],[0,"&softcy;"],[0,"&ecy;"],[0,"&yucy;"],[0,"&yacy;"],[1,"&iocy;"],[0,"&djcy;"],[0,"&gjcy;"],[0,"&jukcy;"],[0,"&dscy;"],[0,"&iukcy;"],[0,"&yicy;"],[0,"&jsercy;"],[0,"&ljcy;"],[0,"&njcy;"],[0,"&tshcy;"],[0,"&kjcy;"],[1,"&ubrcy;"],[0,"&dzcy;"],[7074,"&ensp;"],[0,"&emsp;"],[0,"&emsp13;"],[0,"&emsp14;"],[1,"&numsp;"],[0,"&puncsp;"],[0,"&ThinSpace;"],[0,"&hairsp;"],[0,"&NegativeMediumSpace;"],[0,"&zwnj;"],[0,"&zwj;"],[0,"&lrm;"],[0,"&rlm;"],[0,"&dash;"],[2,"&ndash;"],[0,"&mdash;"],[0,"&horbar;"],[0,"&Verbar;"],[1,"&lsquo;"],[0,"&CloseCurlyQuote;"],[0,"&lsquor;"],[1,"&ldquo;"],[0,"&CloseCurlyDoubleQuote;"],[0,"&bdquo;"],[1,"&dagger;"],[0,"&Dagger;"],[0,"&bull;"],[2,"&nldr;"],[0,"&hellip;"],[9,"&permil;"],[0,"&pertenk;"],[0,"&prime;"],[0,"&Prime;"],[0,"&tprime;"],[0,"&backprime;"],[3,"&lsaquo;"],[0,"&rsaquo;"],[3,"&oline;"],[2,"&caret;"],[1,"&hybull;"],[0,"&frasl;"],[10,"&bsemi;"],[7,"&qprime;"],[7,{v:"&MediumSpace;",n:8202,o:"&ThickSpace;"}],[0,"&NoBreak;"],[0,"&af;"],[0,"&InvisibleTimes;"],[0,"&ic;"],[72,"&euro;"],[46,"&tdot;"],[0,"&DotDot;"],[37,"&complexes;"],[2,"&incare;"],[4,"&gscr;"],[0,"&hamilt;"],[0,"&Hfr;"],[0,"&Hopf;"],[0,"&planckh;"],[0,"&hbar;"],[0,"&imagline;"],[0,"&Ifr;"],[0,"&lagran;"],[0,"&ell;"],[1,"&naturals;"],[0,"&numero;"],[0,"&copysr;"],[0,"&weierp;"],[0,"&Popf;"],[0,"&Qopf;"],[0,"&realine;"],[0,"&real;"],[0,"&reals;"],[0,"&rx;"],[3,"&trade;"],[1,"&integers;"],[2,"&mho;"],[0,"&zeetrf;"],[0,"&iiota;"],[2,"&bernou;"],[0,"&Cayleys;"],[1,"&escr;"],[0,"&Escr;"],[0,"&Fouriertrf;"],[1,"&Mellintrf;"],[0,"&order;"],[0,"&alefsym;"],[0,"&beth;"],[0,"&gimel;"],[0,"&daleth;"],[12,"&CapitalDifferentialD;"],[0,"&dd;"],[0,"&ee;"],[0,"&ii;"],[10,"&frac13;"],[0,"&frac23;"],[0,"&frac15;"],[0,"&frac25;"],[0,"&frac35;"],[0,"&frac45;"],[0,"&frac16;"],[0,"&frac56;"],[0,"&frac18;"],[0,"&frac38;"],[0,"&frac58;"],[0,"&frac78;"],[49,"&larr;"],[0,"&ShortUpArrow;"],[0,"&rarr;"],[0,"&darr;"],[0,"&harr;"],[0,"&updownarrow;"],[0,"&nwarr;"],[0,"&nearr;"],[0,"&LowerRightArrow;"],[0,"&LowerLeftArrow;"],[0,"&nlarr;"],[0,"&nrarr;"],[1,{v:"&rarrw;",n:824,o:"&nrarrw;"}],[0,"&Larr;"],[0,"&Uarr;"],[0,"&Rarr;"],[0,"&Darr;"],[0,"&larrtl;"],[0,"&rarrtl;"],[0,"&LeftTeeArrow;"],[0,"&mapstoup;"],[0,"&map;"],[0,"&DownTeeArrow;"],[1,"&hookleftarrow;"],[0,"&hookrightarrow;"],[0,"&larrlp;"],[0,"&looparrowright;"],[0,"&harrw;"],[0,"&nharr;"],[1,"&lsh;"],[0,"&rsh;"],[0,"&ldsh;"],[0,"&rdsh;"],[1,"&crarr;"],[0,"&cularr;"],[0,"&curarr;"],[2,"&circlearrowleft;"],[0,"&circlearrowright;"],[0,"&leftharpoonup;"],[0,"&DownLeftVector;"],[0,"&RightUpVector;"],[0,"&LeftUpVector;"],[0,"&rharu;"],[0,"&DownRightVector;"],[0,"&dharr;"],[0,"&dharl;"],[0,"&RightArrowLeftArrow;"],[0,"&udarr;"],[0,"&LeftArrowRightArrow;"],[0,"&leftleftarrows;"],[0,"&upuparrows;"],[0,"&rightrightarrows;"],[0,"&ddarr;"],[0,"&leftrightharpoons;"],[0,"&Equilibrium;"],[0,"&nlArr;"],[0,"&nhArr;"],[0,"&nrArr;"],[0,"&DoubleLeftArrow;"],[0,"&DoubleUpArrow;"],[0,"&DoubleRightArrow;"],[0,"&dArr;"],[0,"&DoubleLeftRightArrow;"],[0,"&DoubleUpDownArrow;"],[0,"&nwArr;"],[0,"&neArr;"],[0,"&seArr;"],[0,"&swArr;"],[0,"&lAarr;"],[0,"&rAarr;"],[1,"&zigrarr;"],[6,"&larrb;"],[0,"&rarrb;"],[15,"&DownArrowUpArrow;"],[7,"&loarr;"],[0,"&roarr;"],[0,"&hoarr;"],[0,"&forall;"],[0,"&comp;"],[0,{v:"&part;",n:824,o:"&npart;"}],[0,"&exist;"],[0,"&nexist;"],[0,"&empty;"],[1,"&Del;"],[0,"&Element;"],[0,"&NotElement;"],[1,"&ni;"],[0,"&notni;"],[2,"&prod;"],[0,"&coprod;"],[0,"&sum;"],[0,"&minus;"],[0,"&MinusPlus;"],[0,"&dotplus;"],[1,"&Backslash;"],[0,"&lowast;"],[0,"&compfn;"],[1,"&radic;"],[2,"&prop;"],[0,"&infin;"],[0,"&angrt;"],[0,{v:"&ang;",n:8402,o:"&nang;"}],[0,"&angmsd;"],[0,"&angsph;"],[0,"&mid;"],[0,"&nmid;"],[0,"&DoubleVerticalBar;"],[0,"&NotDoubleVerticalBar;"],[0,"&and;"],[0,"&or;"],[0,{v:"&cap;",n:65024,o:"&caps;"}],[0,{v:"&cup;",n:65024,o:"&cups;"}],[0,"&int;"],[0,"&Int;"],[0,"&iiint;"],[0,"&conint;"],[0,"&Conint;"],[0,"&Cconint;"],[0,"&cwint;"],[0,"&ClockwiseContourIntegral;"],[0,"&awconint;"],[0,"&there4;"],[0,"&becaus;"],[0,"&ratio;"],[0,"&Colon;"],[0,"&dotminus;"],[1,"&mDDot;"],[0,"&homtht;"],[0,{v:"&sim;",n:8402,o:"&nvsim;"}],[0,{v:"&backsim;",n:817,o:"&race;"}],[0,{v:"&ac;",n:819,o:"&acE;"}],[0,"&acd;"],[0,"&VerticalTilde;"],[0,"&NotTilde;"],[0,{v:"&eqsim;",n:824,o:"&nesim;"}],[0,"&sime;"],[0,"&NotTildeEqual;"],[0,"&cong;"],[0,"&simne;"],[0,"&ncong;"],[0,"&ap;"],[0,"&nap;"],[0,"&ape;"],[0,{v:"&apid;",n:824,o:"&napid;"}],[0,"&backcong;"],[0,{v:"&asympeq;",n:8402,o:"&nvap;"}],[0,{v:"&bump;",n:824,o:"&nbump;"}],[0,{v:"&bumpe;",n:824,o:"&nbumpe;"}],[0,{v:"&doteq;",n:824,o:"&nedot;"}],[0,"&doteqdot;"],[0,"&efDot;"],[0,"&erDot;"],[0,"&Assign;"],[0,"&ecolon;"],[0,"&ecir;"],[0,"&circeq;"],[1,"&wedgeq;"],[0,"&veeeq;"],[1,"&triangleq;"],[2,"&equest;"],[0,"&ne;"],[0,{v:"&Congruent;",n:8421,o:"&bnequiv;"}],[0,"&nequiv;"],[1,{v:"&le;",n:8402,o:"&nvle;"}],[0,{v:"&ge;",n:8402,o:"&nvge;"}],[0,{v:"&lE;",n:824,o:"&nlE;"}],[0,{v:"&gE;",n:824,o:"&ngE;"}],[0,{v:"&lnE;",n:65024,o:"&lvertneqq;"}],[0,{v:"&gnE;",n:65024,o:"&gvertneqq;"}],[0,{v:"&ll;",n:new Map(i([[824,"&nLtv;"],[7577,"&nLt;"]]))}],[0,{v:"&gg;",n:new Map(i([[824,"&nGtv;"],[7577,"&nGt;"]]))}],[0,"&between;"],[0,"&NotCupCap;"],[0,"&nless;"],[0,"&ngt;"],[0,"&nle;"],[0,"&nge;"],[0,"&lesssim;"],[0,"&GreaterTilde;"],[0,"&nlsim;"],[0,"&ngsim;"],[0,"&LessGreater;"],[0,"&gl;"],[0,"&NotLessGreater;"],[0,"&NotGreaterLess;"],[0,"&pr;"],[0,"&sc;"],[0,"&prcue;"],[0,"&sccue;"],[0,"&PrecedesTilde;"],[0,{v:"&scsim;",n:824,o:"&NotSucceedsTilde;"}],[0,"&NotPrecedes;"],[0,"&NotSucceeds;"],[0,{v:"&sub;",n:8402,o:"&NotSubset;"}],[0,{v:"&sup;",n:8402,o:"&NotSuperset;"}],[0,"&nsub;"],[0,"&nsup;"],[0,"&sube;"],[0,"&supe;"],[0,"&NotSubsetEqual;"],[0,"&NotSupersetEqual;"],[0,{v:"&subne;",n:65024,o:"&varsubsetneq;"}],[0,{v:"&supne;",n:65024,o:"&varsupsetneq;"}],[1,"&cupdot;"],[0,"&UnionPlus;"],[0,{v:"&sqsub;",n:824,o:"&NotSquareSubset;"}],[0,{v:"&sqsup;",n:824,o:"&NotSquareSuperset;"}],[0,"&sqsube;"],[0,"&sqsupe;"],[0,{v:"&sqcap;",n:65024,o:"&sqcaps;"}],[0,{v:"&sqcup;",n:65024,o:"&sqcups;"}],[0,"&CirclePlus;"],[0,"&CircleMinus;"],[0,"&CircleTimes;"],[0,"&osol;"],[0,"&CircleDot;"],[0,"&circledcirc;"],[0,"&circledast;"],[1,"&circleddash;"],[0,"&boxplus;"],[0,"&boxminus;"],[0,"&boxtimes;"],[0,"&dotsquare;"],[0,"&RightTee;"],[0,"&dashv;"],[0,"&DownTee;"],[0,"&bot;"],[1,"&models;"],[0,"&DoubleRightTee;"],[0,"&Vdash;"],[0,"&Vvdash;"],[0,"&VDash;"],[0,"&nvdash;"],[0,"&nvDash;"],[0,"&nVdash;"],[0,"&nVDash;"],[0,"&prurel;"],[1,"&LeftTriangle;"],[0,"&RightTriangle;"],[0,{v:"&LeftTriangleEqual;",n:8402,o:"&nvltrie;"}],[0,{v:"&RightTriangleEqual;",n:8402,o:"&nvrtrie;"}],[0,"&origof;"],[0,"&imof;"],[0,"&multimap;"],[0,"&hercon;"],[0,"&intcal;"],[0,"&veebar;"],[1,"&barvee;"],[0,"&angrtvb;"],[0,"&lrtri;"],[0,"&bigwedge;"],[0,"&bigvee;"],[0,"&bigcap;"],[0,"&bigcup;"],[0,"&diam;"],[0,"&sdot;"],[0,"&sstarf;"],[0,"&divideontimes;"],[0,"&bowtie;"],[0,"&ltimes;"],[0,"&rtimes;"],[0,"&leftthreetimes;"],[0,"&rightthreetimes;"],[0,"&backsimeq;"],[0,"&curlyvee;"],[0,"&curlywedge;"],[0,"&Sub;"],[0,"&Sup;"],[0,"&Cap;"],[0,"&Cup;"],[0,"&fork;"],[0,"&epar;"],[0,"&lessdot;"],[0,"&gtdot;"],[0,{v:"&Ll;",n:824,o:"&nLl;"}],[0,{v:"&Gg;",n:824,o:"&nGg;"}],[0,{v:"&leg;",n:65024,o:"&lesg;"}],[0,{v:"&gel;",n:65024,o:"&gesl;"}],[2,"&cuepr;"],[0,"&cuesc;"],[0,"&NotPrecedesSlantEqual;"],[0,"&NotSucceedsSlantEqual;"],[0,"&NotSquareSubsetEqual;"],[0,"&NotSquareSupersetEqual;"],[2,"&lnsim;"],[0,"&gnsim;"],[0,"&precnsim;"],[0,"&scnsim;"],[0,"&nltri;"],[0,"&NotRightTriangle;"],[0,"&nltrie;"],[0,"&NotRightTriangleEqual;"],[0,"&vellip;"],[0,"&ctdot;"],[0,"&utdot;"],[0,"&dtdot;"],[0,"&disin;"],[0,"&isinsv;"],[0,"&isins;"],[0,{v:"&isindot;",n:824,o:"&notindot;"}],[0,"&notinvc;"],[0,"&notinvb;"],[1,{v:"&isinE;",n:824,o:"&notinE;"}],[0,"&nisd;"],[0,"&xnis;"],[0,"&nis;"],[0,"&notnivc;"],[0,"&notnivb;"],[6,"&barwed;"],[0,"&Barwed;"],[1,"&lceil;"],[0,"&rceil;"],[0,"&LeftFloor;"],[0,"&rfloor;"],[0,"&drcrop;"],[0,"&dlcrop;"],[0,"&urcrop;"],[0,"&ulcrop;"],[0,"&bnot;"],[1,"&profline;"],[0,"&profsurf;"],[1,"&telrec;"],[0,"&target;"],[5,"&ulcorn;"],[0,"&urcorn;"],[0,"&dlcorn;"],[0,"&drcorn;"],[2,"&frown;"],[0,"&smile;"],[9,"&cylcty;"],[0,"&profalar;"],[7,"&topbot;"],[6,"&ovbar;"],[1,"&solbar;"],[60,"&angzarr;"],[51,"&lmoustache;"],[0,"&rmoustache;"],[2,"&OverBracket;"],[0,"&bbrk;"],[0,"&bbrktbrk;"],[37,"&OverParenthesis;"],[0,"&UnderParenthesis;"],[0,"&OverBrace;"],[0,"&UnderBrace;"],[2,"&trpezium;"],[4,"&elinters;"],[59,"&blank;"],[164,"&circledS;"],[55,"&boxh;"],[1,"&boxv;"],[9,"&boxdr;"],[3,"&boxdl;"],[3,"&boxur;"],[3,"&boxul;"],[3,"&boxvr;"],[7,"&boxvl;"],[7,"&boxhd;"],[7,"&boxhu;"],[7,"&boxvh;"],[19,"&boxH;"],[0,"&boxV;"],[0,"&boxdR;"],[0,"&boxDr;"],[0,"&boxDR;"],[0,"&boxdL;"],[0,"&boxDl;"],[0,"&boxDL;"],[0,"&boxuR;"],[0,"&boxUr;"],[0,"&boxUR;"],[0,"&boxuL;"],[0,"&boxUl;"],[0,"&boxUL;"],[0,"&boxvR;"],[0,"&boxVr;"],[0,"&boxVR;"],[0,"&boxvL;"],[0,"&boxVl;"],[0,"&boxVL;"],[0,"&boxHd;"],[0,"&boxhD;"],[0,"&boxHD;"],[0,"&boxHu;"],[0,"&boxhU;"],[0,"&boxHU;"],[0,"&boxvH;"],[0,"&boxVh;"],[0,"&boxVH;"],[19,"&uhblk;"],[3,"&lhblk;"],[3,"&block;"],[8,"&blk14;"],[0,"&blk12;"],[0,"&blk34;"],[13,"&square;"],[8,"&blacksquare;"],[0,"&EmptyVerySmallSquare;"],[1,"&rect;"],[0,"&marker;"],[2,"&fltns;"],[1,"&bigtriangleup;"],[0,"&blacktriangle;"],[0,"&triangle;"],[2,"&blacktriangleright;"],[0,"&rtri;"],[3,"&bigtriangledown;"],[0,"&blacktriangledown;"],[0,"&dtri;"],[2,"&blacktriangleleft;"],[0,"&ltri;"],[6,"&loz;"],[0,"&cir;"],[32,"&tridot;"],[2,"&bigcirc;"],[8,"&ultri;"],[0,"&urtri;"],[0,"&lltri;"],[0,"&EmptySmallSquare;"],[0,"&FilledSmallSquare;"],[8,"&bigstar;"],[0,"&star;"],[7,"&phone;"],[49,"&female;"],[1,"&male;"],[29,"&spades;"],[2,"&clubs;"],[1,"&hearts;"],[0,"&diamondsuit;"],[3,"&sung;"],[2,"&flat;"],[0,"&natural;"],[0,"&sharp;"],[163,"&check;"],[3,"&cross;"],[8,"&malt;"],[21,"&sext;"],[33,"&VerticalSeparator;"],[25,"&lbbrk;"],[0,"&rbbrk;"],[84,"&bsolhsub;"],[0,"&suphsol;"],[28,"&LeftDoubleBracket;"],[0,"&RightDoubleBracket;"],[0,"&lang;"],[0,"&rang;"],[0,"&Lang;"],[0,"&Rang;"],[0,"&loang;"],[0,"&roang;"],[7,"&longleftarrow;"],[0,"&longrightarrow;"],[0,"&longleftrightarrow;"],[0,"&DoubleLongLeftArrow;"],[0,"&DoubleLongRightArrow;"],[0,"&DoubleLongLeftRightArrow;"],[1,"&longmapsto;"],[2,"&dzigrarr;"],[258,"&nvlArr;"],[0,"&nvrArr;"],[0,"&nvHarr;"],[0,"&Map;"],[6,"&lbarr;"],[0,"&bkarow;"],[0,"&lBarr;"],[0,"&dbkarow;"],[0,"&drbkarow;"],[0,"&DDotrahd;"],[0,"&UpArrowBar;"],[0,"&DownArrowBar;"],[2,"&Rarrtl;"],[2,"&latail;"],[0,"&ratail;"],[0,"&lAtail;"],[0,"&rAtail;"],[0,"&larrfs;"],[0,"&rarrfs;"],[0,"&larrbfs;"],[0,"&rarrbfs;"],[2,"&nwarhk;"],[0,"&nearhk;"],[0,"&hksearow;"],[0,"&hkswarow;"],[0,"&nwnear;"],[0,"&nesear;"],[0,"&seswar;"],[0,"&swnwar;"],[8,{v:"&rarrc;",n:824,o:"&nrarrc;"}],[1,"&cudarrr;"],[0,"&ldca;"],[0,"&rdca;"],[0,"&cudarrl;"],[0,"&larrpl;"],[2,"&curarrm;"],[0,"&cularrp;"],[7,"&rarrpl;"],[2,"&harrcir;"],[0,"&Uarrocir;"],[0,"&lurdshar;"],[0,"&ldrushar;"],[2,"&LeftRightVector;"],[0,"&RightUpDownVector;"],[0,"&DownLeftRightVector;"],[0,"&LeftUpDownVector;"],[0,"&LeftVectorBar;"],[0,"&RightVectorBar;"],[0,"&RightUpVectorBar;"],[0,"&RightDownVectorBar;"],[0,"&DownLeftVectorBar;"],[0,"&DownRightVectorBar;"],[0,"&LeftUpVectorBar;"],[0,"&LeftDownVectorBar;"],[0,"&LeftTeeVector;"],[0,"&RightTeeVector;"],[0,"&RightUpTeeVector;"],[0,"&RightDownTeeVector;"],[0,"&DownLeftTeeVector;"],[0,"&DownRightTeeVector;"],[0,"&LeftUpTeeVector;"],[0,"&LeftDownTeeVector;"],[0,"&lHar;"],[0,"&uHar;"],[0,"&rHar;"],[0,"&dHar;"],[0,"&luruhar;"],[0,"&ldrdhar;"],[0,"&ruluhar;"],[0,"&rdldhar;"],[0,"&lharul;"],[0,"&llhard;"],[0,"&rharul;"],[0,"&lrhard;"],[0,"&udhar;"],[0,"&duhar;"],[0,"&RoundImplies;"],[0,"&erarr;"],[0,"&simrarr;"],[0,"&larrsim;"],[0,"&rarrsim;"],[0,"&rarrap;"],[0,"&ltlarr;"],[1,"&gtrarr;"],[0,"&subrarr;"],[1,"&suplarr;"],[0,"&lfisht;"],[0,"&rfisht;"],[0,"&ufisht;"],[0,"&dfisht;"],[5,"&lopar;"],[0,"&ropar;"],[4,"&lbrke;"],[0,"&rbrke;"],[0,"&lbrkslu;"],[0,"&rbrksld;"],[0,"&lbrksld;"],[0,"&rbrkslu;"],[0,"&langd;"],[0,"&rangd;"],[0,"&lparlt;"],[0,"&rpargt;"],[0,"&gtlPar;"],[0,"&ltrPar;"],[3,"&vzigzag;"],[1,"&vangrt;"],[0,"&angrtvbd;"],[6,"&ange;"],[0,"&range;"],[0,"&dwangle;"],[0,"&uwangle;"],[0,"&angmsdaa;"],[0,"&angmsdab;"],[0,"&angmsdac;"],[0,"&angmsdad;"],[0,"&angmsdae;"],[0,"&angmsdaf;"],[0,"&angmsdag;"],[0,"&angmsdah;"],[0,"&bemptyv;"],[0,"&demptyv;"],[0,"&cemptyv;"],[0,"&raemptyv;"],[0,"&laemptyv;"],[0,"&ohbar;"],[0,"&omid;"],[0,"&opar;"],[1,"&operp;"],[1,"&olcross;"],[0,"&odsold;"],[1,"&olcir;"],[0,"&ofcir;"],[0,"&olt;"],[0,"&ogt;"],[0,"&cirscir;"],[0,"&cirE;"],[0,"&solb;"],[0,"&bsolb;"],[3,"&boxbox;"],[3,"&trisb;"],[0,"&rtriltri;"],[0,{v:"&LeftTriangleBar;",n:824,o:"&NotLeftTriangleBar;"}],[0,{v:"&RightTriangleBar;",n:824,o:"&NotRightTriangleBar;"}],[11,"&iinfin;"],[0,"&infintie;"],[0,"&nvinfin;"],[4,"&eparsl;"],[0,"&smeparsl;"],[0,"&eqvparsl;"],[5,"&blacklozenge;"],[8,"&RuleDelayed;"],[1,"&dsol;"],[9,"&bigodot;"],[0,"&bigoplus;"],[0,"&bigotimes;"],[1,"&biguplus;"],[1,"&bigsqcup;"],[5,"&iiiint;"],[0,"&fpartint;"],[2,"&cirfnint;"],[0,"&awint;"],[0,"&rppolint;"],[0,"&scpolint;"],[0,"&npolint;"],[0,"&pointint;"],[0,"&quatint;"],[0,"&intlarhk;"],[10,"&pluscir;"],[0,"&plusacir;"],[0,"&simplus;"],[0,"&plusdu;"],[0,"&plussim;"],[0,"&plustwo;"],[1,"&mcomma;"],[0,"&minusdu;"],[2,"&loplus;"],[0,"&roplus;"],[0,"&Cross;"],[0,"&timesd;"],[0,"&timesbar;"],[1,"&smashp;"],[0,"&lotimes;"],[0,"&rotimes;"],[0,"&otimesas;"],[0,"&Otimes;"],[0,"&odiv;"],[0,"&triplus;"],[0,"&triminus;"],[0,"&tritime;"],[0,"&intprod;"],[2,"&amalg;"],[0,"&capdot;"],[1,"&ncup;"],[0,"&ncap;"],[0,"&capand;"],[0,"&cupor;"],[0,"&cupcap;"],[0,"&capcup;"],[0,"&cupbrcap;"],[0,"&capbrcup;"],[0,"&cupcup;"],[0,"&capcap;"],[0,"&ccups;"],[0,"&ccaps;"],[2,"&ccupssm;"],[2,"&And;"],[0,"&Or;"],[0,"&andand;"],[0,"&oror;"],[0,"&orslope;"],[0,"&andslope;"],[1,"&andv;"],[0,"&orv;"],[0,"&andd;"],[0,"&ord;"],[1,"&wedbar;"],[6,"&sdote;"],[3,"&simdot;"],[2,{v:"&congdot;",n:824,o:"&ncongdot;"}],[0,"&easter;"],[0,"&apacir;"],[0,{v:"&apE;",n:824,o:"&napE;"}],[0,"&eplus;"],[0,"&pluse;"],[0,"&Esim;"],[0,"&Colone;"],[0,"&Equal;"],[1,"&ddotseq;"],[0,"&equivDD;"],[0,"&ltcir;"],[0,"&gtcir;"],[0,"&ltquest;"],[0,"&gtquest;"],[0,{v:"&leqslant;",n:824,o:"&nleqslant;"}],[0,{v:"&geqslant;",n:824,o:"&ngeqslant;"}],[0,"&lesdot;"],[0,"&gesdot;"],[0,"&lesdoto;"],[0,"&gesdoto;"],[0,"&lesdotor;"],[0,"&gesdotol;"],[0,"&lap;"],[0,"&gap;"],[0,"&lne;"],[0,"&gne;"],[0,"&lnap;"],[0,"&gnap;"],[0,"&lEg;"],[0,"&gEl;"],[0,"&lsime;"],[0,"&gsime;"],[0,"&lsimg;"],[0,"&gsiml;"],[0,"&lgE;"],[0,"&glE;"],[0,"&lesges;"],[0,"&gesles;"],[0,"&els;"],[0,"&egs;"],[0,"&elsdot;"],[0,"&egsdot;"],[0,"&el;"],[0,"&eg;"],[2,"&siml;"],[0,"&simg;"],[0,"&simlE;"],[0,"&simgE;"],[0,{v:"&LessLess;",n:824,o:"&NotNestedLessLess;"}],[0,{v:"&GreaterGreater;",n:824,o:"&NotNestedGreaterGreater;"}],[1,"&glj;"],[0,"&gla;"],[0,"&ltcc;"],[0,"&gtcc;"],[0,"&lescc;"],[0,"&gescc;"],[0,"&smt;"],[0,"&lat;"],[0,{v:"&smte;",n:65024,o:"&smtes;"}],[0,{v:"&late;",n:65024,o:"&lates;"}],[0,"&bumpE;"],[0,{v:"&PrecedesEqual;",n:824,o:"&NotPrecedesEqual;"}],[0,{v:"&sce;",n:824,o:"&NotSucceedsEqual;"}],[2,"&prE;"],[0,"&scE;"],[0,"&precneqq;"],[0,"&scnE;"],[0,"&prap;"],[0,"&scap;"],[0,"&precnapprox;"],[0,"&scnap;"],[0,"&Pr;"],[0,"&Sc;"],[0,"&subdot;"],[0,"&supdot;"],[0,"&subplus;"],[0,"&supplus;"],[0,"&submult;"],[0,"&supmult;"],[0,"&subedot;"],[0,"&supedot;"],[0,{v:"&subE;",n:824,o:"&nsubE;"}],[0,{v:"&supE;",n:824,o:"&nsupE;"}],[0,"&subsim;"],[0,"&supsim;"],[2,{v:"&subnE;",n:65024,o:"&varsubsetneqq;"}],[0,{v:"&supnE;",n:65024,o:"&varsupsetneqq;"}],[2,"&csub;"],[0,"&csup;"],[0,"&csube;"],[0,"&csupe;"],[0,"&subsup;"],[0,"&supsub;"],[0,"&subsub;"],[0,"&supsup;"],[0,"&suphsub;"],[0,"&supdsub;"],[0,"&forkv;"],[0,"&topfork;"],[0,"&mlcp;"],[8,"&Dashv;"],[1,"&Vdashl;"],[0,"&Barv;"],[0,"&vBar;"],[0,"&vBarv;"],[1,"&Vbar;"],[0,"&Not;"],[0,"&bNot;"],[0,"&rnmid;"],[0,"&cirmid;"],[0,"&midcir;"],[0,"&topcir;"],[0,"&nhpar;"],[0,"&parsim;"],[9,{v:"&parsl;",n:8421,o:"&nparsl;"}],[44343,{n:new Map(i([[56476,"&Ascr;"],[1,"&Cscr;"],[0,"&Dscr;"],[2,"&Gscr;"],[2,"&Jscr;"],[0,"&Kscr;"],[2,"&Nscr;"],[0,"&Oscr;"],[0,"&Pscr;"],[0,"&Qscr;"],[1,"&Sscr;"],[0,"&Tscr;"],[0,"&Uscr;"],[0,"&Vscr;"],[0,"&Wscr;"],[0,"&Xscr;"],[0,"&Yscr;"],[0,"&Zscr;"],[0,"&ascr;"],[0,"&bscr;"],[0,"&cscr;"],[0,"&dscr;"],[1,"&fscr;"],[1,"&hscr;"],[0,"&iscr;"],[0,"&jscr;"],[0,"&kscr;"],[0,"&lscr;"],[0,"&mscr;"],[0,"&nscr;"],[1,"&pscr;"],[0,"&qscr;"],[0,"&rscr;"],[0,"&sscr;"],[0,"&tscr;"],[0,"&uscr;"],[0,"&vscr;"],[0,"&wscr;"],[0,"&xscr;"],[0,"&yscr;"],[0,"&zscr;"],[52,"&Afr;"],[0,"&Bfr;"],[1,"&Dfr;"],[0,"&Efr;"],[0,"&Ffr;"],[0,"&Gfr;"],[2,"&Jfr;"],[0,"&Kfr;"],[0,"&Lfr;"],[0,"&Mfr;"],[0,"&Nfr;"],[0,"&Ofr;"],[0,"&Pfr;"],[0,"&Qfr;"],[1,"&Sfr;"],[0,"&Tfr;"],[0,"&Ufr;"],[0,"&Vfr;"],[0,"&Wfr;"],[0,"&Xfr;"],[0,"&Yfr;"],[1,"&afr;"],[0,"&bfr;"],[0,"&cfr;"],[0,"&dfr;"],[0,"&efr;"],[0,"&ffr;"],[0,"&gfr;"],[0,"&hfr;"],[0,"&ifr;"],[0,"&jfr;"],[0,"&kfr;"],[0,"&lfr;"],[0,"&mfr;"],[0,"&nfr;"],[0,"&ofr;"],[0,"&pfr;"],[0,"&qfr;"],[0,"&rfr;"],[0,"&sfr;"],[0,"&tfr;"],[0,"&ufr;"],[0,"&vfr;"],[0,"&wfr;"],[0,"&xfr;"],[0,"&yfr;"],[0,"&zfr;"],[0,"&Aopf;"],[0,"&Bopf;"],[1,"&Dopf;"],[0,"&Eopf;"],[0,"&Fopf;"],[0,"&Gopf;"],[1,"&Iopf;"],[0,"&Jopf;"],[0,"&Kopf;"],[0,"&Lopf;"],[0,"&Mopf;"],[1,"&Oopf;"],[3,"&Sopf;"],[0,"&Topf;"],[0,"&Uopf;"],[0,"&Vopf;"],[0,"&Wopf;"],[0,"&Xopf;"],[0,"&Yopf;"],[1,"&aopf;"],[0,"&bopf;"],[0,"&copf;"],[0,"&dopf;"],[0,"&eopf;"],[0,"&fopf;"],[0,"&gopf;"],[0,"&hopf;"],[0,"&iopf;"],[0,"&jopf;"],[0,"&kopf;"],[0,"&lopf;"],[0,"&mopf;"],[0,"&nopf;"],[0,"&oopf;"],[0,"&popf;"],[0,"&qopf;"],[0,"&ropf;"],[0,"&sopf;"],[0,"&topf;"],[0,"&uopf;"],[0,"&vopf;"],[0,"&wopf;"],[0,"&xopf;"],[0,"&yopf;"],[0,"&zopf;"]]))}],[8906,"&fflig;"],[0,"&filig;"],[0,"&fllig;"],[0,"&ffilig;"],[0,"&ffllig;"]]))},24266,(e,r,a)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.encodeNonAsciiHTML=a.encodeHTML=void 0;var t=i(e.r(662973)),n=e.r(325325),o=/[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;function s(e,r){for(var a,i="",o=0;null!==(a=e.exec(r));){var s=a.index;i+=r.substring(o,s);var l=r.charCodeAt(s),u=t.default.get(l);if("object"==typeof u){if(s+1<r.length){var c=r.charCodeAt(s+1),d="number"==typeof u.n?u.n===c?u.o:void 0:u.n.get(c);if(void 0!==d){i+=d,o=e.lastIndex+=1;continue}}u=u.v}if(void 0!==u)i+=u,o=s+1;else{var p=(0,n.getCodePoint)(r,s);i+="&#x".concat(p.toString(16),";"),o=e.lastIndex+=Number(p!==l)}}return i+r.substr(o)}a.encodeHTML=function(e){return s(o,e)},a.encodeNonAsciiHTML=function(e){return s(n.xmlReplacer,e)}},910713,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀\ud835\udd04rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀\ud835\udd38plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀\ud835\udc9cign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀\ud835\udd05pf;쀀\ud835\udd39eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀\ud835\udc9epĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀\ud835\udd07Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀\ud835\udd3bƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀\ud835\udc9frok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀\ud835\udd08rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀\ud835\udd3csilon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀\ud835\udd09lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀\ud835\udd3dAll;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀\ud835\udd0a;拙pf;쀀\ud835\udd3eeater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀\ud835\udca2;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀\ud835\udd40a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀\ud835\udd0dpf;쀀\ud835\udd41ǣ߇\0ߌr;쀀\ud835\udca5rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀\ud835\udd0epf;쀀\ud835\udd42cr;쀀\ud835\udca6րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀\ud835\udd0fĀ;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀\ud835\udd43erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀\ud835\udd10nusPlus;戓pf;쀀\ud835\udd44cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀\ud835\udd11ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀\ud835\udca9ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀\ud835\udd12rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀\ud835\udd46enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀\ud835\udcaaash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀\ud835\udd13i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀\ud835\udcab;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀\ud835\udd14pf;愚cr;쀀\ud835\udcac؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀\ud835\udd16ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀\ud835\udd4aɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀\ud835\udcaear;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀\ud835\udd17Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀\ud835\udd4bipleDot;惛Āctዖዛr;쀀\ud835\udcafrok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀\ud835\udd18rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀\ud835\udd4cЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀\ud835\udcb0ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀\ud835\udd19pf;쀀\ud835\udd4dcr;쀀\ud835\udcb1dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀\ud835\udd1apf;쀀\ud835\udd4ecr;쀀\ud835\udcb2Ȁfiosᓋᓐᓒᓘr;쀀\ud835\udd1b;䎞pf;쀀\ud835\udd4fcr;쀀\ud835\udcb3ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀\ud835\udd1cpf;쀀\ud835\udd50cr;쀀\ud835\udcb4ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀\ud835\udcb5௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀\ud835\udd1erave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀\ud835\udd52΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀\ud835\udcb6;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀\ud835\udd1fg΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀\ud835\udd53Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀\ud835\udcb7mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀\ud835\udd20ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀\ud835\udd54oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀\ud835\udcb8Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀\ud835\udd21arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀\ud835\udd55ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀\ud835\udcb9;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀\ud835\udd22ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀\ud835\udd56ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀\ud835\udd23lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀\ud835\udd57ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀\ud835\udcbbࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀\ud835\udd24Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀\ud835\udd58Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀\ud835\udd25sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀\ud835\udd59bar;怕ƀclt≯≴≸r;쀀\ud835\udcbdasè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀\ud835\udd26rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀\ud835\udd5aa;䎹uest耻¿䂿Āci⎊⎏r;쀀\ud835\udcbenʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀\ud835\udd27ath;䈷pf;쀀\ud835\udd5bǣ⏬\0⏱r;쀀\ud835\udcbfrcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀\ud835\udd28reen;䄸cy;䑅cy;䑜pf;쀀\ud835\udd5ccr;쀀\ud835\udcc0஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀\ud835\udd29Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀\ud835\udd5dus;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀\ud835\udcc1mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀\ud835\udd2ao;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀\ud835\udd5eĀct⣸⣽r;쀀\ud835\udcc2pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀\ud835\udd2bȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀\ud835\udd5f膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀\ud835\udcc3ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀\ud835\udd2cͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀\ud835\udd60ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀\ud835\udd2dƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀\ud835\udd61nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀\ud835\udcc5;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀\ud835\udd2epf;쀀\ud835\udd62rime;恗cr;쀀\ud835\udcc6ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀\ud835\udd2fĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀\ud835\udd63us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀\ud835\udcc7Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀\ud835\udd30Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀\ud835\udd64aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀\ud835\udcc8tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀\ud835\udd31Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀\ud835\udd65rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀\ud835\udcc9;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀\ud835\udd32rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀\ud835\udd66̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀\ud835\udccaƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀\ud835\udd33tré㦮suĀbp㧯㧱»ജ»൙pf;쀀\ud835\udd67roð໻tré㦴Ācu㨆㨋r;쀀\ud835\udccbĀbp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀\ud835\udd34pf;쀀\ud835\udd68Ā;eᑹ㩦atèᑹcr;쀀\ud835\udcccૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀\ud835\udd35ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀\ud835\udd69imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀\ud835\udccdĀpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀\ud835\udd36cy;䑗pf;쀀\ud835\udd6acr;쀀\ud835\udcceĀcm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀\ud835\udd37cy;䐶grarr;懝pf;쀀\ud835\udd6bcr;쀀\ud835\udccfĀjn㮅㮇;怍j;怌'.split("").map(function(e){return e.charCodeAt(0)}))},160436,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=new Uint16Array("Ȁaglq	\x15\x18\x1bɭ\x0f\0\0\x12p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e){return e.charCodeAt(0)}))},906812,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.replaceCodePoint=a.fromCodePoint=void 0;var i,t=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function n(e){var r;return e>=55296&&e<=57343||e>1114111?65533:null!=(r=t.get(e))?r:e}a.fromCodePoint=null!=(i=String.fromCodePoint)?i:function(e){var r="";return e>65535&&(e-=65536,r+=String.fromCharCode(e>>>10&1023|55296),e=56320|1023&e),r+=String.fromCharCode(e)},a.replaceCodePoint=n,a.default=function(e){return(0,a.fromCodePoint)(n(e))}},521076,(e,r,a)=>{"use strict";var i,t,n,o,s,l,u,c,d=e.e&&e.e.__createBinding||(Object.create?function(e,r,a,i){void 0===i&&(i=a);var t=Object.getOwnPropertyDescriptor(r,a);(!t||("get"in t?!r.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return r[a]}}),Object.defineProperty(e,i,t)}:function(e,r,a,i){void 0===i&&(i=a),e[i]=r[a]}),p=e.e&&e.e.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),h=e.e&&e.e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&d(r,e,a);return p(r,e),r},g=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.decodeXML=a.decodeHTMLStrict=a.decodeHTMLAttribute=a.decodeHTML=a.determineBranch=a.EntityDecoder=a.DecodingMode=a.BinTrieFlags=a.fromCodePoint=a.replaceCodePoint=a.decodeCodePoint=a.xmlDecodeTree=a.htmlDecodeTree=void 0;var f=g(e.r(910713));a.htmlDecodeTree=f.default;var m=g(e.r(160436));a.xmlDecodeTree=m.default;var y=h(e.r(906812));a.decodeCodePoint=y.default;var v=e.r(906812);function b(e){return e>=s.ZERO&&e<=s.NINE}Object.defineProperty(a,"replaceCodePoint",{enumerable:!0,get:function(){return v.replaceCodePoint}}),Object.defineProperty(a,"fromCodePoint",{enumerable:!0,get:function(){return v.fromCodePoint}}),(i=s||(s={}))[i.NUM=35]="NUM",i[i.SEMI=59]="SEMI",i[i.EQUALS=61]="EQUALS",i[i.ZERO=48]="ZERO",i[i.NINE=57]="NINE",i[i.LOWER_A=97]="LOWER_A",i[i.LOWER_F=102]="LOWER_F",i[i.LOWER_X=120]="LOWER_X",i[i.LOWER_Z=122]="LOWER_Z",i[i.UPPER_A=65]="UPPER_A",i[i.UPPER_F=70]="UPPER_F",i[i.UPPER_Z=90]="UPPER_Z",(t=l=a.BinTrieFlags||(a.BinTrieFlags={}))[t.VALUE_LENGTH=49152]="VALUE_LENGTH",t[t.BRANCH_LENGTH=16256]="BRANCH_LENGTH",t[t.JUMP_TABLE=127]="JUMP_TABLE",(n=u||(u={}))[n.EntityStart=0]="EntityStart",n[n.NumericStart=1]="NumericStart",n[n.NumericDecimal=2]="NumericDecimal",n[n.NumericHex=3]="NumericHex",n[n.NamedEntity=4]="NamedEntity",(o=c=a.DecodingMode||(a.DecodingMode={}))[o.Legacy=0]="Legacy",o[o.Strict=1]="Strict",o[o.Attribute=2]="Attribute";var w=function(){function e(e,r,a){this.decodeTree=e,this.emitCodePoint=r,this.errors=a,this.state=u.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=c.Strict}return e.prototype.startEntity=function(e){this.decodeMode=e,this.state=u.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1},e.prototype.write=function(e,r){switch(this.state){case u.EntityStart:if(e.charCodeAt(r)===s.NUM)return this.state=u.NumericStart,this.consumed+=1,this.stateNumericStart(e,r+1);return this.state=u.NamedEntity,this.stateNamedEntity(e,r);case u.NumericStart:return this.stateNumericStart(e,r);case u.NumericDecimal:return this.stateNumericDecimal(e,r);case u.NumericHex:return this.stateNumericHex(e,r);case u.NamedEntity:return this.stateNamedEntity(e,r)}},e.prototype.stateNumericStart=function(e,r){return r>=e.length?-1:(32|e.charCodeAt(r))===s.LOWER_X?(this.state=u.NumericHex,this.consumed+=1,this.stateNumericHex(e,r+1)):(this.state=u.NumericDecimal,this.stateNumericDecimal(e,r))},e.prototype.addToNumericResult=function(e,r,a,i){if(r!==a){var t=a-r;this.result=this.result*Math.pow(i,t)+parseInt(e.substr(r,t),i),this.consumed+=t}},e.prototype.stateNumericHex=function(e,r){for(var a=r;r<e.length;){var i,t=e.charCodeAt(r);if(!b(t)&&(!((i=t)>=s.UPPER_A)||!(i<=s.UPPER_F))&&(!(i>=s.LOWER_A)||!(i<=s.LOWER_F)))return this.addToNumericResult(e,a,r,16),this.emitNumericEntity(t,3);r+=1}return this.addToNumericResult(e,a,r,16),-1},e.prototype.stateNumericDecimal=function(e,r){for(var a=r;r<e.length;){var i=e.charCodeAt(r);if(!b(i))return this.addToNumericResult(e,a,r,10),this.emitNumericEntity(i,2);r+=1}return this.addToNumericResult(e,a,r,10),-1},e.prototype.emitNumericEntity=function(e,r){var a;if(this.consumed<=r)return null==(a=this.errors)||a.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===s.SEMI)this.consumed+=1;else if(this.decodeMode===c.Strict)return 0;return this.emitCodePoint((0,y.replaceCodePoint)(this.result),this.consumed),this.errors&&(e!==s.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed},e.prototype.stateNamedEntity=function(e,r){for(var a=this.decodeTree,i=a[this.treeIndex],t=(i&l.VALUE_LENGTH)>>14;r<e.length;r++,this.excess++){var n=e.charCodeAt(r);if(this.treeIndex=x(a,i,this.treeIndex+Math.max(1,t),n),this.treeIndex<0)return 0===this.result||this.decodeMode===c.Attribute&&(0===t||function(e){var r;return e===s.EQUALS||(r=e)>=s.UPPER_A&&r<=s.UPPER_Z||r>=s.LOWER_A&&r<=s.LOWER_Z||b(r)}(n))?0:this.emitNotTerminatedNamedEntity();if(0!=(t=((i=a[this.treeIndex])&l.VALUE_LENGTH)>>14)){if(n===s.SEMI)return this.emitNamedEntityData(this.treeIndex,t,this.consumed+this.excess);this.decodeMode!==c.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return -1},e.prototype.emitNotTerminatedNamedEntity=function(){var e,r=this.result,a=(this.decodeTree[r]&l.VALUE_LENGTH)>>14;return this.emitNamedEntityData(r,a,this.consumed),null==(e=this.errors)||e.missingSemicolonAfterCharacterReference(),this.consumed},e.prototype.emitNamedEntityData=function(e,r,a){var i=this.decodeTree;return this.emitCodePoint(1===r?i[e]&~l.VALUE_LENGTH:i[e+1],a),3===r&&this.emitCodePoint(i[e+2],a),a},e.prototype.end=function(){var e;switch(this.state){case u.NamedEntity:return 0!==this.result&&(this.decodeMode!==c.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case u.NumericDecimal:return this.emitNumericEntity(0,2);case u.NumericHex:return this.emitNumericEntity(0,3);case u.NumericStart:return null==(e=this.errors)||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case u.EntityStart:return 0}},e}();function D(e){var r="",a=new w(e,function(e){return r+=(0,y.fromCodePoint)(e)});return function(e,i){for(var t=0,n=0;(n=e.indexOf("&",n))>=0;){r+=e.slice(t,n),a.startEntity(i);var o=a.write(e,n+1);if(o<0){t=n+a.end();break}t=n+o,n=0===o?t+1:t}var s=r+e.slice(t);return r="",s}}function x(e,r,a,i){var t=(r&l.BRANCH_LENGTH)>>7,n=r&l.JUMP_TABLE;if(0===t)return 0!==n&&i===n?a:-1;if(n){var o=i-n;return o<0||o>=t?-1:e[a+o]-1}for(var s=a,u=s+t-1;s<=u;){var c=s+u>>>1,d=e[c];if(d<i)s=c+1;else{if(!(d>i))return e[c+t];u=c-1}}return -1}a.EntityDecoder=w,a.determineBranch=x;var k=D(f.default),C=D(m.default);a.decodeHTML=function(e,r){return void 0===r&&(r=c.Legacy),k(e,r)},a.decodeHTMLAttribute=function(e){return k(e,c.Attribute)},a.decodeHTMLStrict=function(e){return k(e,c.Strict)},a.decodeXML=function(e){return C(e,c.Strict)}},807721,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.decodeXMLStrict=a.decodeHTML5Strict=a.decodeHTML4Strict=a.decodeHTML5=a.decodeHTML4=a.decodeHTMLAttribute=a.decodeHTMLStrict=a.decodeHTML=a.decodeXML=a.DecodingMode=a.EntityDecoder=a.encodeHTML5=a.encodeHTML4=a.encodeNonAsciiHTML=a.encodeHTML=a.escapeText=a.escapeAttribute=a.escapeUTF8=a.escape=a.encodeXML=a.encode=a.decodeStrict=a.decode=a.EncodingMode=a.EntityLevel=void 0;var i,t,n,o,s=e.r(521076),l=e.r(24266),u=e.r(325325);function c(e,r){if(void 0===r&&(r=n.XML),("number"==typeof r?r:r.level)===n.HTML){var a="object"==typeof r?r.mode:void 0;return(0,s.decodeHTML)(e,a)}return(0,s.decodeXML)(e)}(i=n=a.EntityLevel||(a.EntityLevel={}))[i.XML=0]="XML",i[i.HTML=1]="HTML",(t=o=a.EncodingMode||(a.EncodingMode={}))[t.UTF8=0]="UTF8",t[t.ASCII=1]="ASCII",t[t.Extensive=2]="Extensive",t[t.Attribute=3]="Attribute",t[t.Text=4]="Text",a.decode=c,a.decodeStrict=function(e,r){void 0===r&&(r=n.XML);var a="number"==typeof r?{level:r}:r;return null!=a.mode||(a.mode=s.DecodingMode.Strict),c(e,a)},a.encode=function(e,r){void 0===r&&(r=n.XML);var a="number"==typeof r?{level:r}:r;return a.mode===o.UTF8?(0,u.escapeUTF8)(e):a.mode===o.Attribute?(0,u.escapeAttribute)(e):a.mode===o.Text?(0,u.escapeText)(e):a.level===n.HTML?a.mode===o.ASCII?(0,l.encodeNonAsciiHTML)(e):(0,l.encodeHTML)(e):(0,u.encodeXML)(e)};var d=e.r(325325);Object.defineProperty(a,"encodeXML",{enumerable:!0,get:function(){return d.encodeXML}}),Object.defineProperty(a,"escape",{enumerable:!0,get:function(){return d.escape}}),Object.defineProperty(a,"escapeUTF8",{enumerable:!0,get:function(){return d.escapeUTF8}}),Object.defineProperty(a,"escapeAttribute",{enumerable:!0,get:function(){return d.escapeAttribute}}),Object.defineProperty(a,"escapeText",{enumerable:!0,get:function(){return d.escapeText}});var p=e.r(24266);Object.defineProperty(a,"encodeHTML",{enumerable:!0,get:function(){return p.encodeHTML}}),Object.defineProperty(a,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return p.encodeNonAsciiHTML}}),Object.defineProperty(a,"encodeHTML4",{enumerable:!0,get:function(){return p.encodeHTML}}),Object.defineProperty(a,"encodeHTML5",{enumerable:!0,get:function(){return p.encodeHTML}});var h=e.r(521076);Object.defineProperty(a,"EntityDecoder",{enumerable:!0,get:function(){return h.EntityDecoder}}),Object.defineProperty(a,"DecodingMode",{enumerable:!0,get:function(){return h.DecodingMode}}),Object.defineProperty(a,"decodeXML",{enumerable:!0,get:function(){return h.decodeXML}}),Object.defineProperty(a,"decodeHTML",{enumerable:!0,get:function(){return h.decodeHTML}}),Object.defineProperty(a,"decodeHTMLStrict",{enumerable:!0,get:function(){return h.decodeHTMLStrict}}),Object.defineProperty(a,"decodeHTMLAttribute",{enumerable:!0,get:function(){return h.decodeHTMLAttribute}}),Object.defineProperty(a,"decodeHTML4",{enumerable:!0,get:function(){return h.decodeHTML}}),Object.defineProperty(a,"decodeHTML5",{enumerable:!0,get:function(){return h.decodeHTML}}),Object.defineProperty(a,"decodeHTML4Strict",{enumerable:!0,get:function(){return h.decodeHTMLStrict}}),Object.defineProperty(a,"decodeHTML5Strict",{enumerable:!0,get:function(){return h.decodeHTMLStrict}}),Object.defineProperty(a,"decodeXMLStrict",{enumerable:!0,get:function(){return h.decodeXML}})},466410,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.attributeNames=a.elementNames=void 0,a.elementNames=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(function(e){return[e.toLowerCase(),e]})),a.attributeNames=new Map(["definitionURL","attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(function(e){return[e.toLowerCase(),e]}))},969241,(e,r,a)=>{"use strict";var i=e.e&&e.e.__assign||function(){return(i=Object.assign||function(e){for(var r,a=1,i=arguments.length;a<i;a++)for(var t in r=arguments[a])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e}).apply(this,arguments)},t=e.e&&e.e.__createBinding||(Object.create?function(e,r,a,i){void 0===i&&(i=a);var t=Object.getOwnPropertyDescriptor(r,a);(!t||("get"in t?!r.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return r[a]}}),Object.defineProperty(e,i,t)}:function(e,r,a,i){void 0===i&&(i=a),e[i]=r[a]}),n=e.e&&e.e.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),o=e.e&&e.e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&t(r,e,a);return n(r,e),r};Object.defineProperty(a,"__esModule",{value:!0}),a.render=void 0;var s=o(e.r(117831)),l=e.r(807721),u=e.r(466410),c=new Set(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]);function d(e){return e.replace(/"/g,"&quot;")}var p=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]);function h(e,r){void 0===r&&(r={});for(var a=("length"in e)?e:[e],t="",n=0;n<a.length;n++)t+=function(e,r){var a,t,n;switch(e.type){case s.Root:return h(e.children,r);case s.Doctype:case s.Directive:return a=e,"<".concat(a.data,">");case s.Comment:return t=e,"<!--".concat(t.data,"-->");case s.CDATA:return n=e,"<![CDATA[".concat(n.children[0].data,"]]>");case s.Script:case s.Style:case s.Tag:return function(e,r){"foreign"===r.xmlMode&&(e.name=null!=(a=u.elementNames.get(e.name))?a:e.name,e.parent&&g.has(e.parent.name)&&(r=i(i({},r),{xmlMode:!1}))),!r.xmlMode&&f.has(e.name)&&(r=i(i({},r),{xmlMode:"foreign"}));var a,t="<".concat(e.name),n=function(e,r){if(e){var a,i=(null!=(a=r.encodeEntities)?a:r.decodeEntities)===!1?d:r.xmlMode||"utf8"!==r.encodeEntities?l.encodeXML:l.escapeAttribute;return Object.keys(e).map(function(a){var t,n,o=null!=(t=e[a])?t:"";return("foreign"===r.xmlMode&&(a=null!=(n=u.attributeNames.get(a))?n:a),r.emptyAttrs||r.xmlMode||""!==o)?"".concat(a,'="').concat(i(o),'"'):a}).join(" ")}}(e.attribs,r);return n&&(t+=" ".concat(n)),0===e.children.length&&(r.xmlMode?!1!==r.selfClosingTags:r.selfClosingTags&&p.has(e.name))?(r.xmlMode||(t+=" "),t+="/>"):(t+=">",e.children.length>0&&(t+=h(e.children,r)),(r.xmlMode||!p.has(e.name))&&(t+="</".concat(e.name,">"))),t}(e,r);case s.Text:return function(e,r){var a,i=e.data||"";return(null!=(a=r.encodeEntities)?a:r.decodeEntities)===!1||!r.xmlMode&&e.parent&&c.has(e.parent.name)||(i=r.xmlMode||"utf8"!==r.encodeEntities?(0,l.encodeXML)(i):(0,l.escapeText)(i)),i}(e,r)}}(a[n],r);return t}a.render=h,a.default=h;var g=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),f=new Set(["svg","math"])},886709,(e,r,a)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.getOuterHTML=s,a.getInnerHTML=function(e,r){return(0,t.hasChildren)(e)?e.children.map(function(e){return s(e,r)}).join(""):""},a.getText=function e(r){return Array.isArray(r)?r.map(e).join(""):(0,t.isTag)(r)?"br"===r.name?"\n":e(r.children):(0,t.isCDATA)(r)?e(r.children):(0,t.isText)(r)?r.data:""},a.textContent=function e(r){return Array.isArray(r)?r.map(e).join(""):(0,t.hasChildren)(r)&&!(0,t.isComment)(r)?e(r.children):(0,t.isText)(r)?r.data:""},a.innerText=function e(r){return Array.isArray(r)?r.map(e).join(""):(0,t.hasChildren)(r)&&(r.type===o.ElementType.Tag||(0,t.isCDATA)(r))?e(r.children):(0,t.isText)(r)?r.data:""};var t=e.r(792599),n=i(e.r(969241)),o=e.r(117831);function s(e,r){return(0,n.default)(e,r)}},651850,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getChildren=t,a.getParent=n,a.getSiblings=function(e){var r=n(e);if(null!=r)return t(r);for(var a=[e],i=e.prev,o=e.next;null!=i;)a.unshift(i),i=i.prev;for(;null!=o;)a.push(o),o=o.next;return a},a.getAttributeValue=function(e,r){var a;return null==(a=e.attribs)?void 0:a[r]},a.hasAttrib=function(e,r){return null!=e.attribs&&Object.prototype.hasOwnProperty.call(e.attribs,r)&&null!=e.attribs[r]},a.getName=function(e){return e.name},a.nextElementSibling=function(e){for(var r=e.next;null!==r&&!(0,i.isTag)(r);)r=r.next;return r},a.prevElementSibling=function(e){for(var r=e.prev;null!==r&&!(0,i.isTag)(r);)r=r.prev;return r};var i=e.r(792599);function t(e){return(0,i.hasChildren)(e)?e.children:[]}function n(e){return e.parent||null}},945830,(e,r,a)=>{"use strict";function i(e){if(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.parent){var r=e.parent.children,a=r.lastIndexOf(e);a>=0&&r.splice(a,1)}e.next=null,e.prev=null,e.parent=null}Object.defineProperty(a,"__esModule",{value:!0}),a.removeElement=i,a.replaceElement=function(e,r){var a=r.prev=e.prev;a&&(a.next=r);var i=r.next=e.next;i&&(i.prev=r);var t=r.parent=e.parent;if(t){var n=t.children;n[n.lastIndexOf(e)]=r,e.parent=null}},a.appendChild=function(e,r){if(i(r),r.next=null,r.parent=e,e.children.push(r)>1){var a=e.children[e.children.length-2];a.next=r,r.prev=a}else r.prev=null},a.append=function(e,r){i(r);var a=e.parent,t=e.next;if(r.next=t,r.prev=e,e.next=r,r.parent=a,t){if(t.prev=r,a){var n=a.children;n.splice(n.lastIndexOf(t),0,r)}}else a&&a.children.push(r)},a.prependChild=function(e,r){if(i(r),r.parent=e,r.prev=null,1!==e.children.unshift(r)){var a=e.children[1];a.prev=r,r.next=a}else r.next=null},a.prepend=function(e,r){i(r);var a=e.parent;if(a){var t=a.children;t.splice(t.indexOf(e),0,r)}e.prev&&(e.prev.next=r),r.parent=a,r.prev=e.prev,r.next=e,e.prev=r}},455303,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.filter=function(e,r,a,i){return void 0===a&&(a=!0),void 0===i&&(i=1/0),t(e,Array.isArray(r)?r:[r],a,i)},a.find=t,a.findOneChild=function(e,r){return r.find(e)},a.findOne=function e(r,a,t){void 0===t&&(t=!0);for(var n=Array.isArray(a)?a:[a],o=0;o<n.length;o++){var s=n[o];if((0,i.isTag)(s)&&r(s))return s;if(t&&(0,i.hasChildren)(s)&&s.children.length>0){var l=e(r,s.children,!0);if(l)return l}}return null},a.existsOne=function e(r,a){return(Array.isArray(a)?a:[a]).some(function(a){return(0,i.isTag)(a)&&r(a)||(0,i.hasChildren)(a)&&e(r,a.children)})},a.findAll=function(e,r){for(var a=[],t=[Array.isArray(r)?r:[r]],n=[0];;){if(n[0]>=t[0].length){if(1===t.length)return a;t.shift(),n.shift();continue}var o=t[0][n[0]++];(0,i.isTag)(o)&&e(o)&&a.push(o),(0,i.hasChildren)(o)&&o.children.length>0&&(n.unshift(0),t.unshift(o.children))}};var i=e.r(792599);function t(e,r,a,t){for(var n=[],o=[Array.isArray(r)?r:[r]],s=[0];;){if(s[0]>=o[0].length){if(1===s.length)return n;o.shift(),s.shift();continue}var l=o[0][s[0]++];if(e(l)&&(n.push(l),--t<=0))return n;a&&(0,i.hasChildren)(l)&&l.children.length>0&&(s.unshift(0),o.unshift(l.children))}}},725024,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.testElement=function(e,r){var a=l(e);return!a||a(r)},a.getElements=function(e,r,a,i){void 0===i&&(i=1/0);var n=l(e);return n?(0,t.filter)(n,r,a,i):[]},a.getElementById=function(e,r,a){return void 0===a&&(a=!0),Array.isArray(r)||(r=[r]),(0,t.findOne)(o("id",e),r,a)},a.getElementsByTagName=function(e,r,a,i){return void 0===a&&(a=!0),void 0===i&&(i=1/0),(0,t.filter)(n.tag_name(e),r,a,i)},a.getElementsByClassName=function(e,r,a,i){return void 0===a&&(a=!0),void 0===i&&(i=1/0),(0,t.filter)(o("class",e),r,a,i)},a.getElementsByTagType=function(e,r,a,i){return void 0===a&&(a=!0),void 0===i&&(i=1/0),(0,t.filter)(n.tag_type(e),r,a,i)};var i=e.r(792599),t=e.r(455303),n={tag_name:function(e){return"function"==typeof e?function(r){return(0,i.isTag)(r)&&e(r.name)}:"*"===e?i.isTag:function(r){return(0,i.isTag)(r)&&r.name===e}},tag_type:function(e){return"function"==typeof e?function(r){return e(r.type)}:function(r){return r.type===e}},tag_contains:function(e){return"function"==typeof e?function(r){return(0,i.isText)(r)&&e(r.data)}:function(r){return(0,i.isText)(r)&&r.data===e}}};function o(e,r){return"function"==typeof r?function(a){return(0,i.isTag)(a)&&r(a.attribs[e])}:function(a){return(0,i.isTag)(a)&&a.attribs[e]===r}}function s(e,r){return function(a){return e(a)||r(a)}}function l(e){var r=Object.keys(e).map(function(r){var a=e[r];return Object.prototype.hasOwnProperty.call(n,r)?n[r](a):o(r,a)});return 0===r.length?null:r.reduce(s)}},844287,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.DocumentPosition=void 0,a.removeSubsets=function(e){for(var r=e.length;--r>=0;){var a=e[r];if(r>0&&e.lastIndexOf(a,r-1)>=0){e.splice(r,1);continue}for(var i=a.parent;i;i=i.parent)if(e.includes(i)){e.splice(r,1);break}}return e},a.compareDocumentPosition=o,a.uniqueSort=function(e){return(e=e.filter(function(e,r,a){return!a.includes(e,r+1)})).sort(function(e,r){var a=o(e,r);return a&t.PRECEDING?-1:a&t.FOLLOWING?1:0}),e};var i,t,n=e.r(792599);function o(e,r){var a=[],i=[];if(e===r)return 0;for(var o=(0,n.hasChildren)(e)?e:e.parent;o;)a.unshift(o),o=o.parent;for(o=(0,n.hasChildren)(r)?r:r.parent;o;)i.unshift(o),o=o.parent;for(var s=Math.min(a.length,i.length),l=0;l<s&&a[l]===i[l];)l++;if(0===l)return t.DISCONNECTED;var u=a[l-1],c=u.children,d=a[l],p=i[l];return c.indexOf(d)>c.indexOf(p)?u===r?t.FOLLOWING|t.CONTAINED_BY:t.FOLLOWING:u===e?t.PRECEDING|t.CONTAINS:t.PRECEDING}(i=t||(a.DocumentPosition=t={}))[i.DISCONNECTED=1]="DISCONNECTED",i[i.PRECEDING=2]="PRECEDING",i[i.FOLLOWING=4]="FOLLOWING",i[i.CONTAINS=8]="CONTAINS",i[i.CONTAINED_BY=16]="CONTAINED_BY"},243309,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getFeed=function(e){var r,a,i,n,o,p,h,g,f,m,y,v=l(d,e);return v?"feed"===v.name?(a=v.children,i={type:"atom",items:(0,t.getElementsByTagName)("entry",a).map(function(e){var r,a=e.children,i={media:s(a)};c(i,"id","id",a),c(i,"title","title",a);var t=null==(r=l("link",a))?void 0:r.attribs.href;t&&(i.link=t);var n=u("summary",a)||u("content",a);n&&(i.description=n);var o=u("updated",a);return o&&(i.pubDate=new Date(o)),i})},c(i,"id","id",a),c(i,"title","title",a),(n=null==(r=l("link",a))?void 0:r.attribs.href)&&(i.link=n),c(i,"description","subtitle",a),(o=u("updated",a))&&(i.updated=new Date(o)),c(i,"author","email",a,!0),i):(f=null!=(g=null==(h=l("channel",(p=v).children))?void 0:h.children)?g:[],m={type:p.name.substr(0,3),id:"",items:(0,t.getElementsByTagName)("item",p.children).map(function(e){var r=e.children,a={media:s(r)};c(a,"id","guid",r),c(a,"title","title",r),c(a,"link","link",r),c(a,"description","description",r);var i=u("pubDate",r)||u("dc:date",r);return i&&(a.pubDate=new Date(i)),a})},c(m,"title","title",f),c(m,"link","link",f),c(m,"description","description",f),(y=u("lastBuildDate",f))&&(m.updated=new Date(y)),c(m,"author","managingEditor",f,!0),m):null};var i=e.r(886709),t=e.r(725024),n=["url","type","lang"],o=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"];function s(e){return(0,t.getElementsByTagName)("media:content",e).map(function(e){for(var r=e.attribs,a={medium:r.medium,isDefault:!!r.isDefault},i=0;i<n.length;i++){var t=n[i];r[t]&&(a[t]=r[t])}for(var s=0;s<o.length;s++){var t=o[s];r[t]&&(a[t]=parseInt(r[t],10))}return r.expression&&(a.expression=r.expression),a})}function l(e,r){return(0,t.getElementsByTagName)(e,r,!0,1)[0]}function u(e,r,a){return void 0===a&&(a=!1),(0,i.textContent)((0,t.getElementsByTagName)(e,r,a,1)).trim()}function c(e,r,a,i,t){void 0===t&&(t=!1);var n=u(a,i,t);n&&(e[r]=n)}function d(e){return"rss"===e||"feed"===e||"rdf:RDF"===e}},535968,(e,r,a)=>{"use strict";var i=e.e&&e.e.__createBinding||(Object.create?function(e,r,a,i){void 0===i&&(i=a);var t=Object.getOwnPropertyDescriptor(r,a);(!t||("get"in t?!r.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return r[a]}}),Object.defineProperty(e,i,t)}:function(e,r,a,i){void 0===i&&(i=a),e[i]=r[a]}),t=e.e&&e.e.__exportStar||function(e,r){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(r,a)||i(r,e,a)};Object.defineProperty(a,"__esModule",{value:!0}),a.hasChildren=a.isDocument=a.isComment=a.isText=a.isCDATA=a.isTag=void 0,t(e.r(886709),a),t(e.r(651850),a),t(e.r(945830),a),t(e.r(455303),a),t(e.r(725024),a),t(e.r(844287),a),t(e.r(243309),a);var n=e.r(792599);Object.defineProperty(a,"isTag",{enumerable:!0,get:function(){return n.isTag}}),Object.defineProperty(a,"isCDATA",{enumerable:!0,get:function(){return n.isCDATA}}),Object.defineProperty(a,"isText",{enumerable:!0,get:function(){return n.isText}}),Object.defineProperty(a,"isComment",{enumerable:!0,get:function(){return n.isComment}}),Object.defineProperty(a,"isDocument",{enumerable:!0,get:function(){return n.isDocument}}),Object.defineProperty(a,"hasChildren",{enumerable:!0,get:function(){return n.hasChildren}})},851396,(e,r,a)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.attributeRules=void 0;var t=i(e.r(553751)),n=/[-[\]{}()*+?.,\\^$|#\s]/g;function o(e){return e.replace(n,"\\$&")}var s=new Set(["accept","accept-charset","align","alink","axis","bgcolor","charset","checked","clear","codetype","color","compact","declare","defer","dir","direction","disabled","enctype","face","frame","hreflang","http-equiv","lang","language","link","media","method","multiple","nohref","noresize","noshade","nowrap","readonly","rel","rev","rules","scope","scrolling","selected","shape","target","text","type","valign","valuetype","vlink"]);function l(e,r){return"boolean"==typeof e.ignoreCase?e.ignoreCase:"quirks"===e.ignoreCase?!!r.quirksMode:!r.xmlMode&&s.has(e.name)}a.attributeRules={equals:function(e,r,a){var i=a.adapter,t=r.name,n=r.value;return l(r,a)?(n=n.toLowerCase(),function(r){var a=i.getAttributeValue(r,t);return null!=a&&a.length===n.length&&a.toLowerCase()===n&&e(r)}):function(r){return i.getAttributeValue(r,t)===n&&e(r)}},hyphen:function(e,r,a){var i=a.adapter,t=r.name,n=r.value,o=n.length;return l(r,a)?(n=n.toLowerCase(),function(r){var a=i.getAttributeValue(r,t);return null!=a&&(a.length===o||"-"===a.charAt(o))&&a.substr(0,o).toLowerCase()===n&&e(r)}):function(r){var a=i.getAttributeValue(r,t);return null!=a&&(a.length===o||"-"===a.charAt(o))&&a.substr(0,o)===n&&e(r)}},element:function(e,r,a){var i=a.adapter,n=r.name,s=r.value;if(/\s/.test(s))return t.default.falseFunc;var u=new RegExp("(?:^|\\s)".concat(o(s),"(?:$|\\s)"),l(r,a)?"i":"");return function(r){var a=i.getAttributeValue(r,n);return null!=a&&a.length>=s.length&&u.test(a)&&e(r)}},exists:function(e,r,a){var i=r.name,t=a.adapter;return function(r){return t.hasAttrib(r,i)&&e(r)}},start:function(e,r,a){var i=a.adapter,n=r.name,o=r.value,s=o.length;return 0===s?t.default.falseFunc:l(r,a)?(o=o.toLowerCase(),function(r){var a=i.getAttributeValue(r,n);return null!=a&&a.length>=s&&a.substr(0,s).toLowerCase()===o&&e(r)}):function(r){var a;return!!(null==(a=i.getAttributeValue(r,n))?void 0:a.startsWith(o))&&e(r)}},end:function(e,r,a){var i=a.adapter,n=r.name,o=r.value,s=-o.length;return 0===s?t.default.falseFunc:l(r,a)?(o=o.toLowerCase(),function(r){var a;return(null==(a=i.getAttributeValue(r,n))?void 0:a.substr(s).toLowerCase())===o&&e(r)}):function(r){var a;return!!(null==(a=i.getAttributeValue(r,n))?void 0:a.endsWith(o))&&e(r)}},any:function(e,r,a){var i=a.adapter,n=r.name,s=r.value;if(""===s)return t.default.falseFunc;if(l(r,a)){var u=RegExp(o(s),"i");return function(r){var a=i.getAttributeValue(r,n);return null!=a&&a.length>=s.length&&u.test(a)&&e(r)}}return function(r){var a;return!!(null==(a=i.getAttributeValue(r,n))?void 0:a.includes(s))&&e(r)}},not:function(e,r,a){var i=a.adapter,t=r.name,n=r.value;return""===n?function(r){return!!i.getAttributeValue(r,t)&&e(r)}:l(r,a)?(n=n.toLowerCase(),function(r){var a=i.getAttributeValue(r,t);return(null==a||a.length!==n.length||a.toLowerCase()!==n)&&e(r)}):function(r){return i.getAttributeValue(r,t)!==n&&e(r)}}}},357933,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.compileGeneralSelector=void 0;var i=e.r(851396),t=e.r(943625),n=e.r(103644);function o(e,r){var a=r.getParent(e);return a&&r.isTag(a)?a:null}a.compileGeneralSelector=function(e,r,a,s,l){var u=a.adapter,c=a.equals;switch(r.type){case n.SelectorType.PseudoElement:throw Error("Pseudo-elements are not supported by css-select");case n.SelectorType.ColumnCombinator:throw Error("Column combinators are not yet supported by css-select");case n.SelectorType.Attribute:if(null!=r.namespace)throw Error("Namespaced attributes are not yet supported by css-select");return(!a.xmlMode||a.lowerCaseAttributeNames)&&(r.name=r.name.toLowerCase()),i.attributeRules[r.action](e,r,a);case n.SelectorType.Pseudo:return(0,t.compilePseudoSelector)(e,r,a,s,l);case n.SelectorType.Tag:if(null!=r.namespace)throw Error("Namespaced tag names are not yet supported by css-select");var d=r.name;return(!a.xmlMode||a.lowerCaseTags)&&(d=d.toLowerCase()),function(r){return u.getName(r)===d&&e(r)};case n.SelectorType.Descendant:if(!1===a.cacheResults||"undefined"==typeof WeakSet)return function(r){for(var a=r;a=o(a,u);)if(e(a))return!0;return!1};var p=new WeakSet;return function(r){for(var a=r;a=o(a,u);)if(!p.has(a)){if(u.isTag(a)&&e(a))return!0;p.add(a)}return!1};case"_flexibleDescendant":return function(r){var a=r;do if(e(a))return!0;while(a=o(a,u))return!1};case n.SelectorType.Parent:return function(r){return u.getChildren(r).some(function(r){return u.isTag(r)&&e(r)})};case n.SelectorType.Child:return function(r){var a=u.getParent(r);return null!=a&&u.isTag(a)&&e(a)};case n.SelectorType.Sibling:return function(r){for(var a=u.getSiblings(r),i=0;i<a.length;i++){var t=a[i];if(c(r,t))break;if(u.isTag(t)&&e(t))return!0}return!1};case n.SelectorType.Adjacent:if(u.prevElementSibling)return function(r){var a=u.prevElementSibling(r);return null!=a&&e(a)};return function(r){for(var a,i=u.getSiblings(r),t=0;t<i.length;t++){var n=i[t];if(c(r,n))break;u.isTag(n)&&(a=n)}return!!a&&e(a)};case n.SelectorType.Universal:if(null!=r.namespace&&"*"!==r.namespace)throw Error("Namespaced universal selectors are not yet supported by css-select");return e}}},100334,(e,r,a)=>{"use strict";var i=e.e&&e.e.__createBinding||(Object.create?function(e,r,a,i){void 0===i&&(i=a);var t=Object.getOwnPropertyDescriptor(r,a);(!t||("get"in t?!r.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return r[a]}}),Object.defineProperty(e,i,t)}:function(e,r,a,i){void 0===i&&(i=a),e[i]=r[a]}),t=e.e&&e.e.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),n=e.e&&e.e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&i(r,e,a);return t(r,e),r},o=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.compileToken=a.compileUnsafe=a.compile=void 0;var s=e.r(103644),l=o(e.r(553751)),u=n(e.r(83680)),c=e.r(357933),d=e.r(31761);function p(e,r,a){return y("string"==typeof e?(0,s.parse)(e):e,r,a)}function h(e){return e.type===s.SelectorType.Pseudo&&("scope"===e.name||Array.isArray(e.data)&&e.data.some(function(e){return e.some(h)}))}a.compile=function(e,r,a){var i=p(e,r,a);return(0,d.ensureIsTag)(i,r.adapter)},a.compileUnsafe=p;var g={type:s.SelectorType.Descendant},f={type:"_flexibleDescendant"},m={type:s.SelectorType.Pseudo,name:"scope",data:null};function y(e,r,a){e.forEach(u.default);var i,t=Array.isArray(a=null!=(i=r.context)?i:a),n=a&&(Array.isArray(a)?a:[a]);if(!1!==r.relativeSelector)for(var o=r.adapter,p=!!(null==n?void 0:n.every(function(e){var r=o.isTag(e)&&o.getParent(e);return e===d.PLACEHOLDER_ELEMENT||r&&o.isTag(r)})),b=0;b<e.length;b++){var w=e[b];if(w.length>0&&(0,u.isTraversal)(w[0])&&w[0].type!==s.SelectorType.Descendant);else{if(!p||w.some(h))continue;w.unshift(g)}w.unshift(m)}else if(e.some(function(e){return e.length>0&&(0,u.isTraversal)(e[0])}))throw Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");var D=!1,x=e.map(function(e){if(e.length>=2){var a,i,o,u,d=e[0],p=e[1];d.type!==s.SelectorType.Pseudo||"scope"!==d.name||(t&&p.type===s.SelectorType.Descendant?e[1]=f:(p.type===s.SelectorType.Adjacent||p.type===s.SelectorType.Sibling)&&(D=!0))}return a=e,i=r,o=n,a.reduce(function(e,r){return e===l.default.falseFunc?l.default.falseFunc:(0,c.compileGeneralSelector)(e,r,i,o,y)},null!=(u=i.rootFunc)?u:l.default.trueFunc)}).reduce(v,l.default.falseFunc);return x.shouldTestNextSiblings=D,x}function v(e,r){return r===l.default.falseFunc||e===l.default.trueFunc?e:e===l.default.falseFunc||r===l.default.trueFunc?r:function(a){return e(a)||r(a)}}a.compileToken=y},578732,(e,r,a)=>{"use strict";var i=e.e&&e.e.__createBinding||(Object.create?function(e,r,a,i){void 0===i&&(i=a);var t=Object.getOwnPropertyDescriptor(r,a);(!t||("get"in t?!r.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return r[a]}}),Object.defineProperty(e,i,t)}:function(e,r,a,i){void 0===i&&(i=a),e[i]=r[a]}),t=e.e&&e.e.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),n=e.e&&e.e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&i(r,e,a);return t(r,e),r},o=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.aliases=a.pseudos=a.filters=a.is=a.selectOne=a.selectAll=a.prepareContext=a._compileToken=a._compileUnsafe=a.compile=void 0;var s=n(e.r(535968)),l=o(e.r(553751)),u=e.r(100334),c=e.r(31761),d=function(e,r){return e===r},p={adapter:s,equals:d};function h(e){var r,a,i=null!=e?e:p;return null!=i.adapter||(i.adapter=s),null!=i.equals||(i.equals=null!=(a=null==(r=i.adapter)?void 0:r.equals)?a:d),i}function g(e){return function(r,a,i){return e(r,h(a),i)}}function f(e){return function(r,a,i){var t=h(i);"function"!=typeof r&&(r=(0,u.compileUnsafe)(r,t,a));var n=m(a,t.adapter,r.shouldTestNextSiblings);return e(r,n,t)}}function m(e,r,a){return void 0===a&&(a=!1),a&&(e=function(e,r){for(var a=Array.isArray(e)?e.slice(0):[e],i=a.length,t=0;t<i;t++){var n=(0,c.getNextSiblings)(a[t],r);a.push.apply(a,n)}return a}(e,r)),Array.isArray(e)?r.removeSubsets(e):r.getChildren(e)}a.compile=g(u.compile),a._compileUnsafe=g(u.compileUnsafe),a._compileToken=g(u.compileToken),a.prepareContext=m,a.selectAll=f(function(e,r,a){return e!==l.default.falseFunc&&r&&0!==r.length?a.adapter.findAll(e,r):[]}),a.selectOne=f(function(e,r,a){return e!==l.default.falseFunc&&r&&0!==r.length?a.adapter.findOne(e,r):null}),a.is=function(e,r,a){var i=h(a);return("function"==typeof r?r:(0,u.compile)(r,i))(e)},a.default=a.selectAll;var y=e.r(943625);Object.defineProperty(a,"filters",{enumerable:!0,get:function(){return y.filters}}),Object.defineProperty(a,"pseudos",{enumerable:!0,get:function(){return y.pseudos}}),Object.defineProperty(a,"aliases",{enumerable:!0,get:function(){return y.aliases}})},517346,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e[e.length-1]}},714710,(e,r,a)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});let t=i(e.r(650946));function n(e){return e&&e.nodeType===t.default.ELEMENT_NODE}function o(e,r){return n(e)?e.getAttribute(r):void 0}function s(e){return e&&e.childNodes}function l(e){return e?e.parentNode:null}a.default={isTag:n,getAttributeValue:o,getName:function(e){return(e&&e.rawTagName||"").toLowerCase()},getChildren:s,getParent:l,getText:function(e){return e.text},removeSubsets:function(e){let r,a,i,t=e.length;for(;--t>-1;){for(r=a=e[t],e[t]=null,i=!0;a;){if(e.indexOf(a)>-1){i=!1,e.splice(t,1);break}a=l(a)}i&&(e[t]=r)}return e},existsOne:function e(r,a){return a.some(a=>!!n(a)&&(r(a)||e(r,s(a))))},getSiblings:function(e){let r=l(e);return r?s(r):[]},hasAttrib:function(e,r){return void 0!==o(e,r)},findOne:function e(r,a){let i=null;for(let t=0,n=null==a?void 0:a.length;t<n&&!i;t++){let n=a[t];if(r(n))i=n;else{let a=s(n);a&&a.length>0&&(i=e(r,a))}}return i},findAll:function e(r,a){let i=[];for(let t=0,o=a.length;t<o;t++){if(!n(a[t]))continue;r(a[t])&&i.push(a[t]);let o=s(a[t]);o&&(i=i.concat(e(r,o)))}return i}}},812699,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=class{constructor(e=!1,r){this.addClosingSlash=e,Array.isArray(r)?this.voidTags=r.reduce((e,r)=>e.add(r.toLowerCase()).add(r.toUpperCase()).add(r),new Set):this.voidTags=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].reduce((e,r)=>e.add(r.toLowerCase()).add(r.toUpperCase()).add(r),new Set)}formatNode(e,r,a){let i=this.addClosingSlash,t=i&&r&&!r.endsWith(" ")?" ":"",n=i?`${t}/`:"";return this.isVoidElement(e.toLowerCase())?`<${e}${r}${n}>`:`<${e}${r}>${a}</${e}>`}isVoidElement(e){return this.voidTags.has(e)}}},274792,(e,r,a)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});let t=e.r(811583),n=i(e.r(567946)),o=i(e.r(650946));class s extends n.default{clone(){return new s(this._rawText,null)}constructor(e,r=null,a){super(r,a),this.nodeType=o.default.TEXT_NODE,this.rawTagName="",this._rawText=e}get rawText(){return this._rawText}set rawText(e){this._rawText=e,this._trimmedRawText=void 0,this._trimmedText=void 0}get trimmedRawText(){return void 0!==this._trimmedRawText||(this._trimmedRawText=l(this.rawText)),this._trimmedRawText}get trimmedText(){return void 0!==this._trimmedText||(this._trimmedText=l(this.text)),this._trimmedText}get text(){return(0,t.decode)(this.rawText)}get isWhitespace(){return/^(\s|&nbsp;)*$/.test(this.rawText)}toString(){return this.rawText}}function l(e){let r,a,i=0;for(;i>=0&&i<e.length;)/\S/.test(e[i])&&(void 0===r?(r=i,i=e.length):(a=i,i=void 0)),void 0===r?i++:i--;void 0===r&&(r=0),void 0===a&&(a=e.length-1);let t=r>0&&/[^\S\r\n]/.test(e[r-1]),n=a<e.length-1&&/[^\S\r\n]/.test(e[a+1]);return(t?" ":"")+e.slice(r,a+1)+(n?" ":"")}a.default=s},374979,(e,r,a)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.parse=a.base_parse=void 0;let t=e.r(578732),n=i(e.r(811583)),o=i(e.r(517346)),s=i(e.r(714710)),l=i(e.r(812699)),u=i(e.r(383976)),c=i(e.r(567946)),d=i(e.r(274792)),p=i(e.r(650946));function h(e){return JSON.parse(JSON.stringify(n.default.decode(e)))}let g=new Set;!function(...e){let r=e=>{for(let r=0;r<e.length;r++){let a=e[r];g.add(a),g.add(a.toUpperCase())}};for(let a of e)r(a)}(["h1","h2","h3","h4","h5","h6","header","hgroup"],["details","dialog","dd","div","dt"],["fieldset","figcaption","figure","footer","form"],["table","td","tr"],["address","article","aside","blockquote","br","hr","li","main","nav","ol","p","pre","section","ul"]);class f{_validate(e){if(/\s/.test(e))throw Error(`DOMException in DOMTokenList.add: The token '${e}' contains HTML space characters, which are not valid in tokens.`)}constructor(e=[],r=()=>null){this._set=new Set(e),this._afterUpdate=r}add(e){this._validate(e),this._set.add(e),this._afterUpdate(this)}replace(e,r){this._validate(r),this._set.delete(e),this._set.add(r),this._afterUpdate(this)}remove(e){this._set.delete(e)&&this._afterUpdate(this)}toggle(e){this._validate(e),this._set.has(e)?this._set.delete(e):this._set.add(e),this._afterUpdate(this)}contains(e){return this._set.has(e)}get length(){return this._set.size}values(){return this._set.values()}get value(){return Array.from(this._set.values())}toString(){return Array.from(this._set.values()).join(" ")}}class m extends c.default{quoteAttribute(e){return null==e?"null":JSON.stringify(e.replace(/"/g,"&quot;")).replace(/\\t/g,"	").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\/g,"")}constructor(e,r,a="",i=null,t,n=new l.default,o={}){if(super(i,t),this.rawAttrs=a,this.voidTag=n,this.nodeType=p.default.ELEMENT_NODE,this.rawTagName=e,this.rawAttrs=a||"",this._id=r.id||"",this.childNodes=[],this._parseOptions=o,this.classList=new f(r.class?r.class.split(/\s+/):[],e=>this.setAttribute("class",e.toString())),r.id&&!a&&(this.rawAttrs=`id="${r.id}"`),r.class&&!a){const e=`class="${this.classList.toString()}"`;this.rawAttrs?this.rawAttrs+=` ${e}`:this.rawAttrs=e}}removeChild(e){return this.childNodes=this.childNodes.filter(r=>r!==e),this}exchangeChild(e,r){let a=this.childNodes;return this.childNodes=a.map(a=>a===e?r:a),this}get tagName(){return this.rawTagName?this.rawTagName.toUpperCase():this.rawTagName}set tagName(e){this.rawTagName=e.toLowerCase()}get localName(){return this.rawTagName.toLowerCase()}get isVoidElement(){return this.voidTag.isVoidElement(this.localName)}get id(){return this._id}set id(e){this.setAttribute("id",e)}get rawText(){return/^br$/i.test(this.rawTagName)?"\n":this.childNodes.reduce((e,r)=>e+=r.rawText,"")}get textContent(){return h(this.rawText)}set textContent(e){let r=[new d.default(e,this)];this.childNodes=r}get text(){return h(this.rawText)}get structuredText(){let e=[],r=[e];return!function a(i){if(i.nodeType===p.default.ELEMENT_NODE)g.has(i.rawTagName)?(e.length>0&&r.push(e=[]),i.childNodes.forEach(a),e.length>0&&r.push(e=[])):i.childNodes.forEach(a);else if(i.nodeType===p.default.TEXT_NODE)if(i.isWhitespace)e.prependWhitespace=!0;else{let r=i.trimmedText;e.prependWhitespace&&(r=` ${r}`,e.prependWhitespace=!1),e.push(r)}}(this),r.map(e=>e.join("").replace(/\s{2,}/g," ")).join("\n").replace(/\s+$/,"")}toString(){let e=this.rawTagName;if(e){let r=this.rawAttrs?` ${this.rawAttrs}`:"";return this.voidTag.formatNode(e,r,this.innerHTML)}return this.innerHTML}get innerHTML(){return this.childNodes.map(e=>e.toString()).join("")}set innerHTML(e){let r=C(e,this._parseOptions),a=r.childNodes.length?r.childNodes:[new d.default(e,this)];T(a,this),T(this.childNodes,null),this.childNodes=a}set_content(e,r={}){if(e instanceof c.default)e=[e];else if("string"==typeof e){r=Object.assign(Object.assign({},this._parseOptions),r);let a=C(e,r);e=a.childNodes.length?a.childNodes:[new d.default(a.innerHTML,this)]}return T(this.childNodes,null),T(e,this),this.childNodes=e,this}replaceWith(...e){let r=this.parentNode,a=e.map(e=>{if(e instanceof c.default)return[e];if("string"==typeof e){let r=C(e,this._parseOptions);return r.childNodes.length?r.childNodes:[new d.default(e,this)]}return[]}).flat(),i=r.childNodes.findIndex(e=>e===this);return T([this],null),r.childNodes=[...r.childNodes.slice(0,i),...T(a,r),...r.childNodes.slice(i+1)],this}get outerHTML(){return this.toString()}trimRight(e){for(let r=0;r<this.childNodes.length;r++){let a=this.childNodes[r];if(a.nodeType===p.default.ELEMENT_NODE)a.trimRight(e);else{let i=a.rawText.search(e);i>-1&&(a.rawText=a.rawText.substr(0,i),this.childNodes.length=r+1)}}return this}get structure(){let e=[],r=0;function a(a){e.push("  ".repeat(r)+a)}return!function e(i){let t=i._id?`#${i._id}`:"",n=i.classList.length?`.${i.classList.value.join(".")}`:"";a(`${i.rawTagName}${t}${n}`),r++,i.childNodes.forEach(r=>{r.nodeType===p.default.ELEMENT_NODE?e(r):r.nodeType!==p.default.TEXT_NODE||r.isWhitespace||a("#text")}),r--}(this),e.join("\n")}removeWhitespace(){let e=0;this.childNodes.forEach(r=>{if(r.nodeType===p.default.TEXT_NODE){if(r.isWhitespace)return;r.rawText=r.trimmedRawText}else r.nodeType===p.default.ELEMENT_NODE&&r.removeWhitespace();this.childNodes[e++]=r}),this.childNodes.length=e;let r=Object.keys(this.rawAttributes).map(e=>{let r=this.rawAttributes[e];return`${e}=${JSON.stringify(r)}`}).join(" ");return this.rawAttrs=r,delete this._rawAttrs,this}querySelectorAll(e){return(0,t.selectAll)(e,this,{xmlMode:!0,adapter:s.default})}querySelector(e){return(0,t.selectOne)(e,this,{xmlMode:!0,adapter:s.default})}matches(e){return(0,t.is)(this,e,{xmlMode:!0,adapter:s.default})}getElementsByTagName(e){let r=e.toUpperCase(),a=[],i=[],t=this,n=0;for(;void 0!==n;){let o;do o=t.childNodes[n++];while(n<t.childNodes.length&&void 0===o)if(void 0===o){t=t.parentNode,n=i.pop();continue}o.nodeType===p.default.ELEMENT_NODE&&(("*"===e||o.tagName===r)&&a.push(o),o.childNodes.length>0&&(i.push(n),t=o,n=0))}return a}getElementById(e){let r=[],a=this,i=0;for(;void 0!==i;){let t;do t=a.childNodes[i++];while(i<a.childNodes.length&&void 0===t)if(void 0===t){a=a.parentNode,i=r.pop();continue}if(t.nodeType===p.default.ELEMENT_NODE){if(t._id===e)return t;t.childNodes.length>0&&(r.push(i),a=t,i=0)}}return null}closest(e){let r=new Map,a=this,i=null;for(;a;)r.set(a,i),i=a,a=a.parentNode;for(a=this;a;){let i=(0,t.selectOne)(e,a,{xmlMode:!0,adapter:Object.assign(Object.assign({},s.default),{getChildren(e){let a=r.get(e);return a&&[a]},getSiblings:e=>[e],findOne:function e(a,i){let t=null;for(let n=0,o=i.length;n<o&&!t;n++){let o=i[n];if(a(o))t=o;else{let i=r.get(o);i&&(t=e(a,[i]))}}return t},findAll:()=>[]})});if(i)return i;a=a.parentNode}return null}appendChild(e){return this.append(e),e}get attrs(){if(this._attrs)return this._attrs;this._attrs={};let e=this.rawAttributes;for(let r in e){let a=e[r]||"";this._attrs[r.toLowerCase()]=h(a)}return this._attrs}get attributes(){let e={},r=this.rawAttributes;for(let a in r){let i=r[a]||"";e[a]=h(i)}return e}get rawAttributes(){if(this._rawAttrs)return this._rawAttrs;let e={};if(this.rawAttrs){let r,a=/([a-zA-Z()[\]#@$.?:][a-zA-Z0-9-._:()[\]#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g;for(;r=a.exec(this.rawAttrs);){let a=r[1],i=r[2]||null;i&&("'"===i[0]||'"'===i[0])&&(i=i.slice(1,i.length-1)),e[a]=e[a]||i}}return this._rawAttrs=e,e}removeAttribute(e){let r=this.rawAttributes;return delete r[e],this._attrs&&delete this._attrs[e],this.rawAttrs=Object.keys(r).map(e=>{let a=this.quoteAttribute(r[e]);return"null"===a||'""'===a?e:`${e}=${a}`}).join(" "),"id"===e&&(this._id=""),this}hasAttribute(e){return e.toLowerCase()in this.attrs}getAttribute(e){return this.attrs[e.toLowerCase()]}setAttribute(e,r){if(arguments.length<2)throw Error("Failed to execute 'setAttribute' on 'Element'");let a=e.toLowerCase(),i=this.rawAttributes;for(let r in i)if(r.toLowerCase()===a){e=r;break}return i[e]=String(r),this._attrs&&(this._attrs[a]=h(i[e])),this.rawAttrs=Object.keys(i).map(e=>{let r=this.quoteAttribute(i[e]);return"null"===r||'""'===r?e:`${e}=${r}`}).join(" "),"id"===e&&(this._id=r),this}setAttributes(e){return this._attrs&&delete this._attrs,this._rawAttrs&&delete this._rawAttrs,this.rawAttrs=Object.keys(e).map(r=>{let a=e[r];return"null"===a||'""'===a?r:`${r}=${this.quoteAttribute(String(a))}`}).join(" "),"id"in e&&(this._id=e.id),this}insertAdjacentHTML(e,r){if(arguments.length<2)throw Error("2 arguments required");let a=C(r,this._parseOptions);if("afterend"===e)this.after(...a.childNodes);else if("afterbegin"===e)this.prepend(...a.childNodes);else if("beforeend"===e)this.append(...a.childNodes);else if("beforebegin"===e)this.before(...a.childNodes);else throw Error(`The value provided ('${e}') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'`);return this}prepend(...e){let r=E(e);T(r,this),this.childNodes.unshift(...r)}append(...e){let r=E(e);T(r,this),this.childNodes.push(...r)}before(...e){let r=E(e),a=this.parentNode.childNodes;T(r,this.parentNode),a.splice(a.indexOf(this),0,...r)}after(...e){let r=E(e),a=this.parentNode.childNodes;T(r,this.parentNode),a.splice(a.indexOf(this)+1,0,...r)}get nextSibling(){if(this.parentNode){let e=this.parentNode.childNodes,r=0;for(;r<e.length;)if(this===e[r++])return e[r]||null;return null}}get nextElementSibling(){if(this.parentNode){let e=this.parentNode.childNodes,r=0,a=!1;for(;r<e.length;){let i=e[r++];if(a){if(i instanceof m)return i||null}else this===i&&(a=!0)}return null}}get previousSibling(){if(this.parentNode){let e=this.parentNode.childNodes,r=e.length;for(;r>0;)if(this===e[--r])return e[r-1]||null;return null}}get previousElementSibling(){if(this.parentNode){let e=this.parentNode.childNodes,r=e.length,a=!1;for(;r>0;){let i=e[--r];if(a){if(i instanceof m)return i||null}else this===i&&(a=!0)}return null}}get children(){let e=[];for(let r of this.childNodes)r instanceof m&&e.push(r);return e}get firstChild(){return this.childNodes[0]}get firstElementChild(){return this.children[0]}get lastChild(){return(0,o.default)(this.childNodes)}get lastElementChild(){return this.children[this.children.length-1]}get childElementCount(){return this.children.length}get classNames(){return this.classList.toString()}clone(){return C(this.toString(),this._parseOptions).firstChild}}a.default=m;let y=/<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z@\xB7\xC0-\xD6\xD8-\xF6\u00F8-\u03A1\u03A3-\u03D9\u03DB-\u03EF\u03F7-\u03FF\u0400-\u04FF\u0500-\u052F\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E00-\u1E9B\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2126\u212A-\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA78E\uA790-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64-\uAB65\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A\x37F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/gu,v=/(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi,b={li:{li:!0,LI:!0},LI:{li:!0,LI:!0},p:{p:!0,div:!0,P:!0,DIV:!0},P:{p:!0,div:!0,P:!0,DIV:!0},b:{div:!0,DIV:!0},B:{div:!0,DIV:!0},td:{td:!0,th:!0,TD:!0,TH:!0},TD:{td:!0,th:!0,TD:!0,TH:!0},th:{td:!0,th:!0,TD:!0,TH:!0},TH:{td:!0,th:!0,TD:!0,TH:!0},h1:{h1:!0,H1:!0},H1:{h1:!0,H1:!0},h2:{h2:!0,H2:!0},H2:{h2:!0,H2:!0},h3:{h3:!0,H3:!0},H3:{h3:!0,H3:!0},h4:{h4:!0,H4:!0},H4:{h4:!0,H4:!0},h5:{h5:!0,H5:!0},H5:{h5:!0,H5:!0},h6:{h6:!0,H6:!0},H6:{h6:!0,H6:!0}},w={li:{ul:!0,ol:!0,UL:!0,OL:!0},LI:{ul:!0,ol:!0,UL:!0,OL:!0},a:{div:!0,DIV:!0},A:{div:!0,DIV:!0},b:{div:!0,DIV:!0},B:{div:!0,DIV:!0},i:{div:!0,DIV:!0},I:{div:!0,DIV:!0},p:{div:!0,DIV:!0},P:{div:!0,DIV:!0},td:{tr:!0,table:!0,TR:!0,TABLE:!0},TD:{tr:!0,table:!0,TR:!0,TABLE:!0},th:{tr:!0,table:!0,TR:!0,TABLE:!0},TH:{tr:!0,table:!0,TR:!0,TABLE:!0}},D={p:{a:!0,audio:!0,del:!0,ins:!0,map:!0,noscript:!0,video:!0}},x="documentfragmentcontainer";function k(e,r={}){var a,i;let t,n,s=new l.default(null==(a=null==r?void 0:r.voidTag)?void 0:a.closingSlash,null==(i=null==r?void 0:r.voidTag)?void 0:i.tags),c=r.blockTextElements||{script:!0,noscript:!0,style:!0,pre:!0},p=Object.keys(c),h=p.map(e=>RegExp(`^${e}$`,"i")),g=p.filter(e=>!!c[e]).map(e=>RegExp(`^${e}$`,"i")),f=(e,r)=>[e-q,r-q],C=new m(null,{},"",null,[0,e.length],s,r),E=C,T=[C],A=-1,{lowerCaseTagName:S,fixNestedATags:M}=r,L=(e=`<${x}>${e}</${x}>`).length-(x.length+2),q=x.length+2;for(;t=y.exec(e);){let{0:a,1:i,2:l,3:c,4:p}=t,k=a.length,C=y.lastIndex-k,q=y.lastIndex;if(A>-1&&A+k<q){let r=e.substring(A,C);E.appendChild(new d.default(r,E,f(A,C)))}if(A=y.lastIndex,l!==x){if("!"===a[1]){if(r.comment){let r=e.substring(C+4,q-3);E.appendChild(new u.default(r,E,f(C,q)))}continue}if(S&&(l=l.toLowerCase()),!i){let a={};for(let e;e=v.exec(c);){let{1:r,2:i}=e,t="'"===i[0]||'"'===i[0];a[r.toLowerCase()]=t?i.slice(1,i.length-1):i}let t=E.rawTagName;!p&&!r.preserveTagNesting&&b[t]&&b[t][l]&&(T.pop(),E=(0,o.default)(T)),M&&("a"===l||"A"===l)&&(void 0!==n&&(T.splice(n),E=(0,o.default)(T)),n=T.length);let u=y.lastIndex,w=u-k;if(E=E.appendChild(new m(l,a,c.slice(1),null,f(w,u),s,r)),T.push(E),function(e){return h.some(r=>r.test(e))}(l)){let r=`</${l}>`,a=S?e.toLocaleLowerCase().indexOf(r,y.lastIndex):e.indexOf(r,y.lastIndex),t=-1===a?L:a;if(function(e){return g.some(r=>r.test(e))}(l)){let r=e.substring(u,t);r.length>0&&/\S/.test(r)&&E.appendChild(new d.default(r,E,f(u,t)))}-1===a?A=y.lastIndex=e.length+1:(A=y.lastIndex=a+r.length,i="/")}}if(i||p||s.isVoidElement(l))for(;;){if(null!=n&&("a"===l||"A"===l)&&(n=void 0),E.rawTagName===l){E.range[1]=f(-1,Math.max(A,q))[1],T.pop(),E=(0,o.default)(T);break}{let e=E.tagName;if(w[e]&&w[e][l]){T.pop(),E=(0,o.default)(T);continue}let a=E.rawTagName?E.rawTagName.toLowerCase():"";if(D[a]){let e=l.toLowerCase();if(T.length>1){let r=T[T.length-2];if(r&&r.rawTagName&&r.rawTagName.toLowerCase()===e&&!D[a][e]){E.range[1]=f(-1,Math.max(A,q))[1],T.pop(),E=(0,o.default)(T);continue}}}if(!0===r.closeAllByClosing){let e;for(e=T.length-2;e>=0&&T[e].rawTagName!==l;e--);if(e>=0){for(;T.length>e;)E.range[1]=f(-1,Math.max(A,q))[1],T.pop(),E=(0,o.default)(T);continue}}break}}}}return T}function C(e,r={}){let a=k(e,r),[i]=a;for(;a.length>1;){let e=a.pop(),i=(0,o.default)(a);e.parentNode&&e.parentNode.parentNode&&(e.parentNode===i&&e.tagName===i.tagName?!0!==r.parseNoneClosedTags&&(i.removeChild(e),e.childNodes.forEach(e=>{i.parentNode.appendChild(e)}),a.pop()):!0!==r.parseNoneClosedTags&&(i.removeChild(e),e.childNodes.forEach(e=>{i.appendChild(e)})))}return i}function E(e){return e.map(e=>"string"==typeof e?new d.default(e):(e.remove(),e))}function T(e,r){return e.map(e=>(e.parentNode=r,e))}a.base_parse=k,a.parse=C},617445,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e.r(374979);Object.defineProperty(a,"default",{enumerable:!0,get:function(){return i.parse}})},500193,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});let i=e.r(374979);a.default=function(e,r={}){return 1===(0,i.base_parse)(e,r).length}},796760,(e,r,a)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.NodeType=a.TextNode=a.Node=a.valid=a.CommentNode=a.HTMLElement=a.parse=void 0;let t=i(e.r(383976));a.CommentNode=t.default;let n=i(e.r(374979));a.HTMLElement=n.default;let o=i(e.r(567946));a.Node=o.default;let s=i(e.r(274792));a.TextNode=s.default;let l=i(e.r(650946));a.NodeType=l.default;let u=i(e.r(617445)),c=i(e.r(500193));function d(e,r={}){return(0,u.default)(e,r)}a.valid=c.default,a.default=d,a.parse=d,d.parse=u.default,d.HTMLElement=n.default,d.CommentNode=t.default,d.valid=c.default,d.Node=o.default,d.TextNode=s.default,d.NodeType=l.default},302256,e=>{"use strict";var r=e.i(796760);let a=[{id:1,title:"Nairobi to Ol Pejeta Day Trip: Big Five Safari & Last Northern White Rhinos",slug:"nairobi-ol-pejeta-day-trip-big-five-safari-northern-white-rhinos",excerpt:"Ol Pejeta is a private park well known for wildlife not found in most parks within our country. Experience the thrill of spotting the big five, visit the last northern white rhinos on Earth, and explore the Sweetwaters chimpanzee sanctuary on this unforgettable day safari from Nairobi.",content:`
    <h1>Nairobi to Ol Pejeta Park Day Trip</h1>
    
    <p><strong>Duration:</strong> Full Day Safari</p>
    <p><strong>Departure:</strong> Nairobi</p>
    <p><strong>Best For:</strong> Nature lovers, families, couples, close friends, and tourists on short stays</p>
    
    <p>Ol Pejeta is a private park well known for wildlife not found in most of the parks within our country. This full-day safari offers an intimate wildlife experience with some of Africa's rarest species, including the last two northern white rhinos on Earth.</p>
    
    <h2>Safari Highlights</h2>
    <ul>
      <li>Experience the thrill of spotting the big five on a game drive in Ol Pejeta</li>
      <li>Visit the Sweetwaters chimpanzee sanctuary</li>
      <li>Enjoy a delicious lunch at Morani's restaurant</li>
      <li>See the last two female northern White Rhinos on Earth at the Rhino sanctuary (extra fee applies)</li>
      <li>Visit the Morani blind black rhino at no fee</li>
    </ul>
    
    <h2>Full Safari Description</h2>
    
    <p>Plan on a full day trip/safari to Ol Pejeta Park from Nairobi. Begin your adventure with a pickup from your hotel in Nairobi. Drive north through lush highlands of Mt. Kenya, where the local community grows coffee and tea. You will enjoy stunning views of Mt. Kenya on a clear day.</p>
    
    <h3>Morning Game Drive</h3>
    <p>We have an experienced guide who will offer thrilling game drive across diverse landscapes. He will help you to spot and to identify wildlife including rhinos, elephants, the northern corridor giraffes (reticulated), the northern corridor (Gr\xe9vy's) zebra, warthogs, the rest of the big five and more.</p>
    
    <p>If you're lucky, you may see elusive leopards or cheetahs stalking prey across the open plains. Ol Pejeta is also home to a healthy population of wild dogs and more than 350 bird species.</p>
    
    <h3>Sweetwaters Chimpanzee Sanctuary</h3>
    <p>Head to Sweetwaters chimpanzee sanctuary, the only place in Kenya where you can see rescued chimpanzees. After a walk along a raised boardwalk observing these intelligent primates and learning about their stories, you leave for lunch.</p>
    
    <h3>Lunch at Morani's Restaurant</h3>
    <p>Enjoy a delicious lunch at Morani's restaurant, located inside the park. They serve local and international dishes while overlooking the scenic plains. Alternatively, you can opt for a picnic lunch in a shaded, secure area within the park—perfect for guys who want to maximize game viewing time.</p>
    
    <h3>Afternoon Game Drive & Endangered Species Enclosure</h3>
    <p>After lunch, embark on your afternoon game drive. Visit the endangered species enclosure, home to the last living northern white rhinos on Earth known as Njin and Fatu at an extra cost. They are under 24 hours surveillance, with armed guards. This area also shelters endangered Gr\xe9vy's zebra, Somalia ostrich and Jackson's hartebeest.</p>
    
    <h3>Return to Nairobi</h3>
    <p>As the sun begins to go down to horizons, it's time to say goodbye to the park and begin the scenic drive back to Nairobi, passing by tea and coffee plantations along the way.</p>
    
    <h2>Who Should Book This Safari?</h2>
    <p>The day is so nice for nature lovers of all kinds. Families, couples, close friends and tourists who are on short stays.</p>
    
    <h2>Safari Package Includes</h2>
    <ul>
      <li>Transport in Land Cruiser 4x4 with a pop-up roof at USD 450</li>
      <li>Hotel pickup and drop-off in Nairobi</li>
      <li>Experienced safari guide</li>
      <li>Game drives in Ol Pejeta Conservancy</li>
      <li>Visit to Sweetwaters Chimpanzee Sanctuary</li>
      <li>Lunch at Morani's restaurant or picnic lunch option</li>
      <li>Visit to the Morani blind black rhino (no extra fee)</li>
    </ul>
    
    <h2>Additional Costs</h2>
    <ul>
      <li>Ol Pejeta Conservancy entrance fees</li>
      <li>Visit to the last two northern white rhinos (Njin and Fatu) - extra fee applies</li>
      <li>Personal expenses and gratuities</li>
      <li>Travel insurance</li>
    </ul>
    
    <h2>What to Bring</h2>
    <ul>
      <li>Camera with zoom lens for wildlife photography</li>
      <li>Binoculars for better wildlife viewing</li>
      <li>Sunscreen and sunglasses</li>
      <li>Hat for sun protection</li>
      <li>Comfortable clothing in neutral colors</li>
      <li>Light jacket for early morning coolness</li>
      <li>Water bottle</li>
    </ul>
    
    <h2>Why Choose Ol Pejeta Conservancy?</h2>
    <p>Ol Pejeta is one of Kenya's most innovative conservancies, combining wildlife conservation with community development. It's the only place in Kenya where you can see chimpanzees, and it's home to the last two northern white rhinos on Earth—making this safari a truly once-in-a-lifetime experience.</p>
    
    <p>The conservancy's commitment to endangered species protection, combined with its stunning landscapes and diverse wildlife, makes it an essential stop for anyone serious about wildlife conservation and authentic safari experiences.</p>
    
    <h2>Book Your Ol Pejeta Day Safari</h2>
    <p>Contact Come Travel Kenya Limited today to reserve your spot on this unforgettable day safari from Nairobi. Whether you're a first-time safari-goer or a seasoned wildlife enthusiast, Ol Pejeta offers an intimate and meaningful wildlife experience that will leave you with memories to last a lifetime.</p>
    
    <p><strong>Experience the magic of Ol Pejeta—where conservation meets adventure.</strong></p>
  `,featuredImage:"/blog/ol-pejeta-northern-white-rhino-safari.png",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"inbound-safaris",tags:["ol-pejeta-conservancy","day-safari-nairobi","northern-white-rhinos","chimpanzee-sanctuary","big-five-safari","wildlife-conservation","kenya-day-trips","endangered-species"],publishedAt:"2025-12-27",readTime:8,featured:!1,seo:{metaTitle:"Ol Pejeta Day Safari from Nairobi | Northern White Rhinos & Big Five",metaDescription:"Full-day safari to Ol Pejeta Conservancy from Nairobi. See the last northern white rhinos on Earth, visit chimpanzee sanctuary, spot big five. Perfect day trip for nature lovers and families.",keywords:["Ol Pejeta day safari","Nairobi day trip safari","northern white rhinos Kenya","chimpanzee sanctuary Kenya","big five safari Nairobi","Ol Pejeta Conservancy","Kenya wildlife day trip","endangered species safari","Mount Kenya safari","family safari Kenya"]}},{id:2,title:"Family Camping — Sagana Rapids",slug:"family-camping-sagana-rapids-2-nights",excerpt:"A family riverside camping retreat at Sagana Water Rapids, offering nature walks, bonfire evenings, and peaceful nights under the stars—complete with gear and meals.",content:`
    <h1>Family Camping — Sagana Rapids</h1>
    
    <p><strong>Duration:</strong> 2 Nights, 3 Days</p>
    <p><strong>Location:</strong> Sagana Water Rapids</p>
    <p><strong>Best For:</strong> Families with children, nature lovers, couples, small groups seeking an outdoor retreat</p>
    
    <p>Your family of five settles into their riverside campsite at Sagana Water Rapids, where the air is warm and earthy and the steady murmur of the river drifts through the trees. This camping experience offers a perfect blend of adventure and relaxation, designed to create lasting family memories in a safe, natural setting.</p>
    
    <h2>Camping Highlights</h2>
    <ul>
      <li>Riverside camping on soft, grassy ground beneath tall leafy canopies</li>
      <li>Safe nature paths for children to explore, pick river stones, and watch birds and butterflies</li>
      <li>Evening bonfires for storytelling and stargazing</li>
      <li>All camping gear and meals included</li>
      <li>Peaceful nights with the sounds of crickets and the river whispering nearby</li>
    </ul>
    
    <h2>Full Camping Experience Description</h2>
    
    <p>Your family camping adventure begins upon arrival at the scenic Sagana Water Rapids campsite. You’ll be guided to your spacious riverside pitch where your tents are already set up on soft, grassy ground shaded by tall, leafy trees that filter beautiful patterns of sunlight throughout the day.</p>
    
    <h3>Nature Exploration & Family Activities</h3>
    <p>Your three little girls can wander along safe, well-marked nature paths, collecting smooth river stones, chasing butterflies, and watching colorful birds hop among the branches. The area is family-friendly and encourages gentle exploration in a secure natural environment.</p>
    
    <h3>Evening Magic</h3>
    <p>As evening approaches, golden light glows against the water and your camp’s crackling bonfire becomes the heart of your family gathering. Share stories, roast snacks, and gaze up at the first shy stars appearing in the darkening sky. The warmth of the fire draws everyone close, creating intimate family moments against a backdrop of natural beauty.</p>
    
    <h3>Nighttime Serenity</h3>
    <p>When night settles, the air becomes cool and fragrant with the scent of earth and vegetation. Crickets sing their nightly chorus while the river provides a constant, soothing whisper in the background. This peaceful, enchanting outdoor retreat feels both adventurous and comforting—perfect for families wanting to disconnect and reconnect with nature and each other.</p>
    
    <h2>Who Should Book This Camping Experience?</h2>
    <p>Perfect for families with children of all ages, nature-loving couples, and small friend groups looking for a guided yet relaxed outdoor experience. The package is especially designed for families of up to 5 members (2 adults + 3 children).</p>
    
    <h2>Camping Package Includes</h2>
    <ul>
      <li><strong>Package Rate:</strong> Starting from <strong>$450 nights</strong></li>
      <li>Riverside campsite nights</li>
      <li>All camping gear (tents, sleeping mats, etc.)</li>
      <li>All meals during your stay</li>
      <li>Bonfire setup with firewood</li>
      <li>Access to safe nature walking paths</li>
      <li>Basic camping orientation and safety briefing</li>
    </ul>
    
    <h2>Additional Information</h2>
    <ul>
      <li>Transport: On own arrangements</li>
      <li>Children activities: Nature exploration, stone collecting, bird watching</li>
      <li>Recommended ages: Suitable for children 4 years and above</li>
      <li>Campsite facilities: Basic washrooms and fresh water points available</li>
    </ul>
    
    <h2>What to Bring</h2>
    <ul>
      <li>Warm clothing for cool evenings</li>
      <li>Comfortable walking shoes</li>
      <li>Personal toiletries</li>
      <li>Flashlights or headlamps</li>
      <li>Insect repellent</li>
      <li>Reusable water bottles</li>
      <li>Camera to capture memories</li>
      <li>Any special snacks for children</li>
    </ul>
    
    <h2>Why Choose Sagana Rapids Camping?</h2>
    <p>Sagana Water Rapids offers one of the most accessible yet immersive family camping experiences in Kenya. The combination of river sounds, safe exploration areas, and inclusive packages makes it ideal for first-time campers and seasoned outdoor enthusiasts alike. The all-inclusive nature means you can focus on family time rather than logistics.</p>
    
    <p>The campsite’s location provides a perfect balance—feeling remote and natural while being safely managed and family-oriented. It’s an opportunity to introduce children to the wonders of outdoor living without compromising on comfort or safety.</p>
    
    <h2>Book Your Family Camping Retreat</h2>
    <p>Contact Come Travel Kenya Limited today to reserve your family’s riverside camping experience at Sagana Water Rapids. Create unforgettable memories around the campfire, explore nature together, and enjoy peaceful nights under the Kenyan stars.</p>
    
    <p><strong>Experience the magic of family camping—where adventure meets comfort in nature’s embrace.</strong></p>
  `,featuredImage:"/itineraries/tours/family-camping-sagana-rapids.png",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"tembea-kenya",tags:["family-camping","sagana-rapids","riverside-camping","kenya-camping","family-adventures","nature-retreat","bonfire-camping","outdoor-family-activities"],publishedAt:"2026-01-06",readTime:7,featured:!1,seo:{metaTitle:"Family Camping at Sagana Rapids Kenya | 2-Night Riverside Retreat",metaDescription:"All-inclusive 2-night camping experience for families at Sagana Water Rapids. Includes gear, meals, bonfires & nature walks. Perfect family outdoor adventure in Kenya.",keywords:["family camping Kenya","Sagana Rapids camping","riverside camping Kenya","family outdoor activities","Kenya camping packages","all-inclusive camping","bonfire camping Sagana","nature retreat families","camping with children Kenya","Sagana Water Rapids"]}},{id:3,title:"Family Maasai Mara Safari",slug:"family-masai-mara-safari-4-days",excerpt:"An unforgettable 4-day safari in the Masai Mara, featuring private game drives, cultural immersion with the Maasai community, and exclusive family accommodation at Zebra Plains Camp.",content:`
    <h1>Family Maasai Mara Safari</h1>
    
    <p><strong>Duration:</strong> 4 Days, 3 Nights</p>
    <p><strong>Location:</strong> Masai Mara National Reserve</p>
    <p><strong>Best For:</strong> Families with children, wildlife enthusiasts, cultural explorers, first-time safari goers</p>
    
    <p>Your family embarks on a breathtaking journey to the world-famous Masai Mara, a vast savannah teeming with iconic African wildlife. From the comfort of your private 4x4 Landcruiser, you'll witness the Big Five, experience the rich culture of the Maasai people, and create lifelong memories under the vast Kenyan sky.</p>
    
    <h2>Safari Highlights</h2>
    <ul>
      <li>Multiple game drives in a private 4x4 Landcruiser with pop-up roof for optimal viewing</li>
      <li>Exclusive family accommodation in a dedicated Family Tent at Zebra Plains Mara Camp</li>
      <li>Cultural visit to The Maa Trust for authentic interaction and community empowerment activities</li>
      <li>Special children's activities including Bow & Arrow lessons and beadwork with Maasai mentors</li>
      <li>Full board meals with stunning views of the Mara plains</li>
    </ul>
    
    <h2>Detailed Safari Itinerary</h2>
    
    <h3>Day 1: Nairobi to Masai Mara</h3>
    <p>Your adventure begins with a scenic 5-hour drive from Nairobi, descending into the Great Rift Valley. You'll arrive at Zebra Plains Mara Camp in time for lunch. Settle into your Family Tent before heading out for your first thrilling afternoon game drive at 15:30, searching for lions, elephants, and other members of the Big Five. Return to camp for dinner and overnight, listening to the sounds of the African night.</p>
    
    <h3>Day 2 & 3: Full Days in the Masai Mara</h3>
    <p>After breakfast, embark on a morning game drive when wildlife is most active. In the afternoon, enjoy a unique cultural experience at The Maa Trust. This community conservancy focuses on empowering Maasai families through wildlife conservation. Your family can interact with women's beadwork groups, men creating leather products, and perhaps local children during study sessions. The afternoon concludes with another game drive en route back to camp. Evenings are spent sharing stories of the day's sightings under a blanket of stars.</p>
    
    <h3>Children's Safari Activities</h3>
    <p>Your children (ages 6, 9, and 11) will be fully immersed in Maasai culture through guided Bow & Arrow lessons and beadwork sessions. Under the guidance of Maasai instructors, they'll learn traditional skills and create bracelets or other souvenirs to treasure as memories of their Kenyan adventure.</p>
    
    <h3>Day 4: Masai Mara to Nairobi</h3>
    <p>Enjoy a final breakfast at the camp before departing at 10:00 with packed lunches. Bid farewell to the Mara team and begin your return journey to Nairobi, arriving at your hotel by approximately 16:00.</p>
    
    <h2>Who Should Book This Safari?</h2>
    <p>Perfect for families seeking an authentic African safari experience with comfortable accommodations, educational cultural interactions, and wildlife viewing tailored for all ages. The private vehicle ensures flexibility for bathroom breaks, snack stops, and catering to children's interests.</p>
    
    <h2>Safari Package Includes</h2>
    <ul>
      <li><strong>Package Rate:</strong> $9,500 (2 adults + 3 children aged 6, 9 & 11)</li>
      <li>3 nights accommodation in a Family Tent at Zebra Plains Mara Camp</li>
      <li>All meals as indicated (Breakfast, Lunch, Dinner)</li>
      <li>Private 4x4 Landcruiser with pop-up roof and English-speaking driver/guide</li>
      <li>All park entry and conservation fees</li>
      <li>Cultural visit to The Maa Trust</li>
      <li>Children's activities: Bow & Arrow and beadwork sessions</li>
      <li>Game drives as per itinerary</li>
    </ul>
    
    <h2>Additional Information</h2>
    <ul>
      <li>Transport: Included from Nairobi hotel and return</li>
      <li>Drinks: To be settled directly by clients at the camp</li>
      <li>Children activities: Culturally immersive and supervised</li>
      <li>Recommended ages: Suitable for children 5 years and above</li>
      <li>Accommodation type: Permanent luxury tented camp with en-suite facilities</li>
    </ul>
    
    <h2>What to Bring</h2>
    <ul>
      <li>Neutral-colored clothing for game drives (khaki, green, brown)</li>
      <li>Warm layers for cool mornings and evenings</li>
      <li>Binoculars and cameras with extra batteries</li>
      <li>Sun protection (hat, sunscreen, sunglasses)</li>
      <li>Comfortable closed walking shoes</li>
      <li>Personal toiletries and medications</li>
      <li>Reusable water bottle</li>
      <li>Small backpack for daily essentials</li>
    </ul>
    
    <h2>Why Choose This Masai Mara Safari?</h2>
    <p>This safari combines the thrill of wildlife viewing with meaningful cultural exchange. The exclusive use of a private vehicle allows your family to set the pace, spend extra time with favorite animals, and ensure comfort for children. Zebra Plains Camp offers the perfect balance of authentic safari atmosphere and family-friendly amenities. The visit to The Maa Trust ensures your tourism directly benefits local conservation and community development.</p>
    
    <p>The itinerary is carefully crafted to avoid overly long driving days while maximizing wildlife viewing opportunities during optimal times. The children's activities are both entertaining and educational, creating a truly immersive African experience for the whole family.</p>
    
    <h2>Book Your Safari Adventure</h2>
    <p>Contact Come Travel Kenya Limited today to secure your family's place on this unforgettable Masai Mara adventure. Witness the majesty of African wildlife, connect with ancient cultures, and create memories that will last a lifetime.</p>
    
    <p><strong>Experience the magic of Africa—where wildlife roams free and family adventures become legends.</strong></p>
  `,featuredImage:"/itineraries/safaris/family-masai-mara-safari.png",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"inbound-safaris",tags:["family-safari","masai-mara","kenya-safari","family-adventures","cultural-immersion","wildlife-safari","private-game-drives","children-safari","luxury-camping","big-five"],publishedAt:"2026-01-13",readTime:8,featured:!0,seo:{metaTitle:"Family Safari in Masai Mara Kenya | 4-Day Private Guided Adventure",metaDescription:"All-inclusive 4-day safari in Masai Mara with private vehicle, cultural visits, children's activities & luxury tented camp. Perfect family wildlife adventure in Kenya.",keywords:["family safari Kenya","Masai Mara safari","private safari Kenya","family wildlife adventure","Kenya safari packages","children safari activities","Maasai cultural experience","Zebra Plains Camp","big five safari","all-inclusive safari Kenya"]}},{id:4,title:"Budget Family Safari — Maasai Mara",slug:"budget-family-safari-masai-mara-3-nights",excerpt:"An affordable 3-night safari adventure in Kenya's iconic Masai Mara, offering private game drives, authentic Maasai cultural experiences, and comfortable family accommodation at Zebra Plains Camp.",content:`
    <h1>Budget Family Safari — Maasai Mara</h1>
    
    <p><strong>Duration:</strong> 3 Nights, 4 Days</p>
    <p><strong>Location:</strong> Masai Mara National Reserve</p>
    <p><strong>Best For:</strong> Budget-conscious families, first-time safari visitors, families with young children (ages 3+), wildlife enthusiasts seeking value</p>
    
    <p>Experience the magic of Africa's most famous wildlife reserve without compromising on adventure or comfort. This carefully crafted 3-night budget-friendly safari delivers authentic Masai Mara experiences—private game drives, cultural immersion, and unforgettable wildlife encounters—all at exceptional value for your family of five.</p>
    
    <h2>Budget Safari Highlights</h2>
    <ul>
      <li>Private 4x4 Landcruiser with pop-up roof for exclusive family game viewing</li>
      <li>Family Tent accommodation at Zebra Plains Mara Camp with panoramic savannah views</li>
      <li>Authentic Maasai cultural experience at The Maa Trust community conservancy</li>
      <li>Hands-on children's activities: Bow & Arrow lessons and Maasai beadwork workshops</li>
      <li>Full board meals included, maximizing your safari budget</li>
      <li>All park and conservation fees covered</li>
    </ul>
    
    <h2>Detailed Safari Itinerary</h2>
    
    <h3>Day 1: Nairobi to Masai Mara</h3>
    <p>Your family adventure begins with a scenic 5-hour drive from Nairobi through the breathtaking Great Rift Valley. Arrive at Zebra Plains Mara Camp in time for lunch and settle into your spacious Family Tent. At 15:30, embark on your first thrilling afternoon game drive in your private vehicle, searching for the Big Five as the golden light bathes the savannah. Return to camp for dinner under the African stars.</p>
    
    <h3>Day 2 & 3: Game Drives & Cultural Immersion</h3>
    <p>Enjoy morning and afternoon game drives across two full days in the Mara, maximizing wildlife sightings during peak activity times. One afternoon features a special visit to The Maa Trust, where your family interacts directly with Maasai community members. Learn about conservation efforts, watch women create intricate beadwork, observe leather craftsmanship, and witness community-led education initiatives. Return to camp each evening with en-route game viewing.</p>
    
    <h3>Family-Friendly Focus</h3>
    <p>Zebra Plains Camp welcomes families with children as young as 3 years. The camp offers flexible dining, interconnecting tent options, and child-friendly amenities. Your children will enjoy supervised Maasai cultural activities designed specifically for young safari-goers.</p>
    
    <h3>Day 4: Masai Mara to Nairobi</h3>
    <p>After a final camp breakfast, depart at 10:00 with packed lunch boxes. Bid farewell to the Mara team and begin your return journey to Nairobi, arriving at your hotel by approximately 16:00 with memories to last a lifetime.</p>
    
    <h2>Who Should Book This Budget Safari?</h2>
    <p>Ideal for families seeking an authentic African safari experience at exceptional value. Perfect for first-time visitors to Kenya, families with younger children (ages 3-11), and travelers who want premium experiences—private vehicle, cultural access, quality accommodation—without premium pricing.</p>
    
    <h2>Safari Package Includes</h2>
    <ul>
      <li><strong>Package Rate:</strong> $1,400 </li>
      <li>3 nights accommodation in a Family Tent at Zebra Plains Mara Camp</li>
      <li>All meals as indicated (Breakfast, Lunch, Dinner daily)</li>
      <li>Private 4x4 Landcruiser with pop-up roof and English-speaking driver/guide</li>
      <li>All park entry and conservation fees for Masai Mara</li>
      <li>Cultural visit to The Maa Trust community conservancy</li>
      <li>Children's activities: Bow & Arrow and beadwork workshops</li>
      <li>Multiple game drives as per itinerary</li>
      <li>Transport from Nairobi hotel and return</li>
    </ul>
    
    <h2>Accommodation: Zebra Plains Mara Camp</h2>
    <p>An intimate tented camp located in prime wildlife corridors near the Mara and Talek Rivers. The camp offers spacious ensuite tents with private verandas, solar-powered operations, and commitment to sustainable tourism. Family tents provide comfort and convenience while maintaining authentic safari ambiance.</p>
    
    <h2>Additional Information</h2>
    <ul>
      <li>Transport: Included in package (Nairobi-Masai Mara-Nairobi)</li>
      <li>Drinks: Payable directly at camp</li>
      <li>Child age range: Suitable for children 3 years and above</li>
      <li>Group type: Private safari</li>
      <li>Physical level: Easy; suitable for all ages</li>
      <li>Season: Optimal for October-November 2025 travel</li>
    </ul>
    
    <h2>What Makes This a "Budget" Safari?</h2>
    <p>This package offers exceptional value by:</p>
    <ul>
      <li>Focusing on 3 nights instead of longer stays while covering key experiences</li>
      <li>Including all major costs upfront (accommodation, meals, transport, fees, activities)</li>
      <li>Using quality but reasonably priced accommodations</li>
      <li>Providing private vehicle transport without per-person surcharges</li>
      <li>Including cultural experiences that often cost extra with other operators</li>
      <li>Offering child rates for ages 3-11 (many safaris charge adult rates for children over 6)</li>
    </ul>
    
    <h2>What to Pack</h2>
    <ul>
      <li>Neutral-colored clothing for game drives</li>
      <li>Light layers for warm days and cooler evenings</li>
      <li>Comfortable walking shoes</li>
      <li>Sun protection (hat, sunscreen, sunglasses)</li>
      <li>Binoculars and camera</li>
      <li>Small daypack for game drives</li>
      <li>Personal medications and toiletries</li>
      <li>Entertainment for children during drive times</li>
    </ul>
    
    <h2>Why This Safari Offers Exceptional Value</h2>
    <p>Unlike many budget safaris that use shared vehicles or basic accommodations, this package maintains quality throughout while controlling costs. You get a private vehicle exclusively for your family, comfortable family-sized accommodation in a well-located camp, meaningful cultural access, and all major expenses included. The itinerary maximizes your time and budget by focusing on the essential Masai Mara experiences every family wants.</p>
    
    <p>The cultural component at The Maa Trust adds unique value—your tourism dollars directly support community conservation and empowerment while giving your family authentic interactions rarely available on standard safaris.</p>
    
    <h2>Book Your Affordable Family Adventure</h2>
    <p>Contact Come Travel Kenya Limited to secure this exceptional value safari. Experience the wonder of the Masai Mara, connect with Maasai culture, and create unforgettable family memories—all at a price that makes your African dream achievable.</p>
    
    <p><strong>Witness the circle of life on the African savannah without stretching your budget.</strong></p>
  `,featuredImage:"/itineraries/safaris/budget-family-masai-mara-safari.png",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"inbound-safaris",tags:["budget-safari","family-safari","masai-mara","affordable-safari","kenya-budget-travel","family-adventures","cultural-immersion","value-safari","children-safari","private-game-drives"],publishedAt:"2026-01-13",readTime:7,featured:!1,seo:{metaTitle:"3-Night Budget Family Safari, Masai Mara | Private Vehicle & Full Board",metaDescription:"Affordable 3-night family safari in Masai Mara. Private 4x4, Maasai cultural visit, full board & park fees included. Book your Kenya family safari with Come Travel Kenya.",keywords:["budget safari Kenya","affordable Masai Mara safari","family safari on budget","Kenya budget wildlife tour","cheap safari Africa","value safari Masai Mara","children safari affordable","Masai Mara budget package","family travel Kenya budget","private safari affordable"]}},{id:5,title:"Ultimate Kenya Adventure — Safari & Beach",slug:"ultimate-kenya-adventure-safari-beach-13-days",excerpt:"A comprehensive 13-day Kenyan odyssey combining Nairobi culture, wildlife safaris in Mutara and Masai Mara conservancies, and tropical relaxation on Diani Beach—all with private transfers and internal flights.",content:`
    <h1>Ultimate Kenya Adventure — Safari & Beach</h1>
    
    <p><strong>Duration:</strong> 13 Days, 12 Nights</p>
    <p><strong>Destinations:</strong> Nairobi → Mutara Conservancy → Masai Mara → Diani Beach</p>
    <p><strong>Best For:</strong> Small groups of friends, couples traveling together, multi-generational families, travelers seeking a complete Kenyan experience combining culture, wildlife, and beach relaxation</p>
    
    <p>Embark on the ultimate Kenyan adventure that seamlessly blends urban culture, premier wildlife viewing, and coastal paradise. This meticulously planned 13-day journey takes four adults from Nairobi's cultural highlights to the wildlife-rich conservancies of Laikipia, the iconic plains of the Masai Mara, and finally to the pristine white sands of Diani Beach for well-earned relaxation.</p>
    
    <h2>Adventure Highlights</h2>
    <ul>
      <li>VIP airport arrival with meet-and-assist service at Jomo Kenyatta International Airport</li>
      <li>Nairobi cultural day including David Sheldrick Wildlife Trust, Karen Blixen Museum, and Giraffe Centre</li>
      <li>Private game drives in Mutara Conservancy with bush walking safari experience</li>
      <li>Full day exploring Ol Pejeta Conservancy, home to the last two northern white rhinos</li>
      <li>Scenic light aircraft flights between destinations (Nanyuki-Mara-Diani)</li>
      <li>Three full days in Masai Mara with shared game drives and cultural visit to The Maa Trust</li>
      <li>Five nights at Diani Reef Resort & Spa with half-board meals</li>
      <li>Coastal activities including snorkeling at Wasini Island and sunset dhow sailing</li>
    </ul>
    
    <h2>Detailed Itinerary</h2>
    
    <h3>Days 1-2: Nairobi Cultural Immersion</h3>
    <p>Arrive to VIP treatment at Jomo Kenyatta International Airport with meet-and-assist service. Transfer to Tamarind Tree Hotel for your first two nights. Day two features a curated Nairobi excursion: watch orphaned elephants at David Sheldrick Wildlife Trust, step into history at Karen Blixen Museum, enjoy lunch at Tamarind Brasserie, and hand-feed Rothschild's giraffes at the Giraffe Centre.</p>
    
    <h3>Days 3-4: Mutara & Ol Pejeta Conservancies</h3>
    <p>Journey to Nanyuki through scenic highlands with an Equator line photo stop. Settle into Jambo Mutara Camp for two nights. Enjoy afternoon game drives in Mutara Conservancy and a full day exploring Ol Pejeta Conservancy—home to the Big Five, rare northern white rhinos, and Kenya's only chimpanzee sanctuary. Experience an intimate bush walking safari to connect with the landscape.</p>
    
    <h3>Days 5-7: Masai Mara Majesty</h3>
    <p>Fly from Nanyuki to the world-renowned Masai Mara. Three nights at Zebra Plains Camp with daily game drives in shared open-sided vehicles. Visit The Maa Trust for authentic cultural interaction with Maasai community members focused on conservation and women's empowerment. Optional hot air balloon ride available for breathtaking aerial views.</p>
    
    <h3>Days 8-12: Diani Beach Paradise</h3>
    <p>Fly from the Mara to Kenya's stunning south coast for five nights at Diani Reef Resort & Spa. Enjoy half-board meals with days filled with optional activities: snorkeling in the coral gardens of Wasini Island, sunset dhow sailing on the Kongo River, Swahili cultural immersion, or simply relaxing on 10km of pristine white sand beach.</p>
    
    <h3>Day 13: Departure</h3>
    <p>After a final breakfast, transfer to Mombasa Airport for your onward journey, carrying memories of an epic Kenyan adventure.</p>
    
    <h2>Accommodation Overview</h2>
    <p><strong>Tamarind Tree Hotel (Nairobi):</strong> Contemporary comfort with easy airport access, perfect for urban exploration.</p>
    <p><strong>Jambo Mutara Camp (Laikipia):</strong> Intimate tented camp offering stunning savannah views and personalized service.</p>
    <p><strong>Zebra Plains Camp (Masai Mara):</strong> Well-located tented camp near wildlife corridors with comfortable ensuite tents.</p>
    <p><strong>Diani Reef Resort & Spa (Diani):</strong> Beachfront resort with multiple pools, spa facilities, and direct beach access.</p>
    
    <h2>Package Includes</h2>
    <ul>
      <li><strong>Package Rate:</strong> $5,495 per person sharing</li>
      <li>12 nights accommodation as specified in itinerary</li>
      <li>Meals: 12 breakfasts, 6 lunches, 8 dinners as indicated</li>
      <li>Private ground transportation Nairobi-Nanyuki with English-speaking driver/guide</li>
      <li>Private game drives in Mutara/Ol Pejeta conservancies</li>
      <li>Shared game drives in Masai Mara (open-sided vehicles)</li>
      <li>All airport transfers (Nairobi, Nanyuki, Mara, Diani, Mombasa)</li>
      <li>Scheduled light aircraft flights: Nanyuki-Mara-Diani</li>
      <li>All park and conservation fees for Mutara, Ol Pejeta, and Masai Mara</li>
      <li>Guided bush walk in Mutara Conservancy</li>
      <li>Snorkeling excursion at Wasini Island</li>
      <li>Sunset dhow sailing at Kongo River, Diani</li>
      <li>Nairobi excursions: David Sheldrick Wildlife Trust, Karen Blixen Museum, Giraffe Centre</li>
      <li>Cultural visit to The Maa Trust in Masai Mara</li>
      <li>VIP meet-and-assist service at Jomo Kenyatta International Airport</li>
    </ul>
    
    <h2>Important Travel Notes</h2>
    <ul>
      <li><strong>Luggage:</strong> Strict 15kg per person limit on internal flights; soft-sided bags strongly recommended</li>
      <li><strong>Group Size:</strong> Designed sharing double rooms/tents</li>
      <li><strong>Transport Mix:</strong> Private vehicle for conservancy safaris, shared vehicle for Masai Mara game drives</li>
      <li><strong>Meal Plans:</strong> Vary by location (bed & breakfast in Nairobi, full board on safari, half board in Diani)</li>
      <li><strong>Seasonality:</strong> Optimal late November-early December for wildlife viewing and coastal weather</li>
    </ul>
    
    <h2>Optional Activities (Additional Cost)</h2>
    <ul>
      <li>Hot Air Balloon Ride in Masai Mara: $450 per person</li>
      <li>Village Visit in Masai Mara: $40 per person</li>
      <li>Swahili Cultural Immersion in Diani: $35 per person</li>
      <li>Night Game Drive in Mutara Conservancy: $65 per person</li>
    </ul>
    
    <h2>Exclusions</h2>
    <ul>
      <li>International flights and visas</li>
      <li>Tips, porterage, and travel insurance</li>
      <li>Personal expenses (phone, laundry, etc.)</li>
      <li>Drinks at all accommodations</li>
      <li>Meals not specified in itinerary</li>
      <li>Optional activities listed above</li>
    </ul>
    
    <h2>Why This is the Ultimate Kenya Experience</h2>
    <p>This itinerary represents the perfect balance of Kenya's diverse offerings. You experience four distinct regions: urban Nairobi, the Laikipia conservancies (offering more intimate wildlife encounters), the iconic Masai Mara (for classic safari landscapes), and the Indian Ocean coast (for tropical relaxation). The inclusion of internal flights maximizes your time at each destination while providing breathtaking aerial views of Kenya's varied landscapes.</p>
    
    <p>The combination of private and shared transport offers both personalized attention during conservancy visits and the social experience of group game drives in the Mara. The progression from active safari days to beach relaxation follows a natural rhythm that many travelers appreciate.</p>
    
    <h2>Booking Information</h2>
    <p>This 13-day adventure is available for departure on November 25, 2025. Due to the comprehensive nature of this itinerary and limited camp/resort capacities, early booking is strongly recommended. Contact Come Travel Kenya Limited to secure your group's place on this unforgettable Kenyan odyssey.</p>
    
    <p><strong>From orphaned elephants to rare rhinos, from Mara sunsets to Diani tides—experience Kenya in all its magnificent diversity.</strong></p>
  `,featuredImage:"/itineraries/tours/ultimate-kenya-adventure-safari-beach.png",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"inbound-safaris",tags:["kenya-adventure","safari-beach-combo","multi-destination-kenya","group-travel-kenya","luxury-safari","diani-beach","masai-mara","ol-pejeta","cultural-safari","flying-safari"],publishedAt:"2026-01-13",readTime:9,featured:!0,seo:{metaTitle:"13-Day Kenya Safari & Beach Adventure | Ultimate Group Tour Package",metaDescription:"Complete 13-day Kenyan experience combining Nairobi culture, Mutara/Ol Pejeta/Masai Mara safaris, and Diani Beach relaxation with internal flights.",keywords:["Kenya safari beach combo","ultimate Kenya adventure","group safari Kenya","Masai Mara and Diani package","luxury Kenya tour","multi-destination Kenya","Ol Pejeta conservancy safari","flying safari Kenya","beach and safari package","Kenya group travel package"]}},{id:6,title:"Kenya Luxury Safari Holiday — Family",slug:"kenya-luxury-safari-holiday-family-11-days",excerpt:"An exclusive 11-day luxury safari through Kenya's premier destinations—Nairobi, Lewa Conservancy, Masai Mara, and Diani Beach—featuring private accommodations, gourmet dining, and bespoke wildlife experiences.",content:`
    <h1>Kenya Luxury Safari Holiday — Family</h1>
    
    <p><strong>Duration:</strong> 11 Days, 10 Nights</p>
    <p><strong>Destinations:</strong> Nairobi → Lewa Conservancy → Masai Mara → Diani Beach → Nairobi</p>
    <p><strong>Best For:</strong> Discerning families, multi-generational travelers, special occasion celebrations, luxury seekers wanting privacy and personalized service</p>
    
    <p>Experience Kenya at its most exquisite on this 11-day luxury safari holiday designed exclusively for a family of six. From private conservancy encounters in Lewa to the iconic plains of the Masai Mara, and concluding with barefoot luxury on Diani Beach, this journey represents the pinnacle of safari travel with carefully curated accommodations, gourmet dining, and exclusive experiences at every turn.</p>
    
    <h2>Luxury Experience Highlights</h2>
    <ul>
      <li>Private family accommodations: 1 Double + 1 Triple at each luxury property</li>
      <li>Exclusive access to Lewa Conservancy, Africa's premier rhino sanctuary</li>
      <li>Private butler service and exclusive 4x4 vehicle use at Royal Zebra River Lodge in the Mara</li>
      <li>Complimentary spa treatments including 45-minute Swedish massage per guest</li>
      <li>All-inclusive beverages at safari camps (selected premium drinks included)</li>
      <li>Seamless light aircraft transfers between destinations with meet-and-greet service</li>
      <li>Private beachfront retreat at Kinondo Kwetu with personalized coastal experiences</li>
      <li>Cultural immersion including tea farm visit, giraffe feeding, and Maasai village interaction</li>
    </ul>
    
    <h2>Detailed Itinerary</h2>
    
    <h3>Days 1-2: Nairobi Arrival & Cultural Elegance</h3>
    <p>Arrive to personalized meet-and-assist service at Jomo Kenyatta International Airport. Transfer to Emara Ole Sereni Hotel with panoramic city views. Day two features an exclusive cultural experience: visit Kiambethu Tea Farm in the Tigoni Highlands for tea processing insights and lunch, followed by an up-close encounter with endangered Rothschild giraffes at the Giraffe Centre.</p>
    
    <h3>Days 3-4: Lewa Conservancy - Rhino Sanctuary</h3>
    <p>Fly to Lewa Wildlife Conservancy, Africa's most successful rhino conservation story. Stay at Elewana Lewa Safari Camp in private family tents. Experience private scheduled game drives across pristine plains home to both black and white rhinos, Grevy's zebra, and lions. Enjoy guided walking safaris, sundowners, and learn about community conservation projects that make Lewa a model for sustainable tourism.</p>
    
    <h3>Days 5-7: Masai Mara Royal Treatment</h3>
    <p>Fly to the legendary Masai Mara and transfer to the exclusive Royal Zebra River Lodge. Your family enjoys private butler service, exclusive use of a 4x4 safari vehicle, and luxury suites with river views. Morning and afternoon game drives reveal the Big Five in their natural habitat. Included experiences: bush breakfast, walking safari, Maasai cultural visit, sundowners, and complimentary Swedish massages. Optional hot air balloon safari available for aerial views of the migration corridors.</p>
    
    <h3>Days 8-10: Diani Beach Coastal Retreat</h3>
    <p>Fly to Kenya's stunning south coast for three nights at Kinondo Kwetu, a private beachfront estate. This all-inclusive retreat offers barefoot luxury with spacious villas, personalized service, and direct beach access. Days can include yoga sessions, horseback riding along the shore, kite surfing, or exploring Swahili coastal culture. Evenings feature gourmet dining with fresh seafood and tropical ingredients.</p>
    
    <h3>Day 11: Departure with Fond Farewell</h3>
    <p>After a final tropical breakfast, fly back to Nairobi with a special farewell dinner at Fogo Gaucho before your international departure, completing an extraordinary family luxury holiday.</p>
    
    <h2>Luxury Accommodation Portfolio</h2>
    
    <h3>Emara Ole Sereni (Nairobi)</h3>
    <p>Contemporary urban oasis with panoramic views of Nairobi National Park, offering sophisticated comfort and convenient airport access.</p>
    
    <h3>Elewana Lewa Safari Camp (Lewa Conservancy)</h3>
    <p>Authentic tented luxury on 65,000 acres of private wilderness. Features cozy log fires, veranda-equipped tents, and privileged access to one of Africa's most celebrated conservation success stories.</p>
    
    <h3>Royal Zebra River Lodge (Masai Mara)</h3>
    <p>Ultra-exclusive lodge with just eight glass-front suites on the Talek River. Offers private butlers, exclusive vehicle use, spa treatments, and wildlife viewing from private balconies.</p>
    
    <h3>Kinondo Kwetu (Diani)</h3>
    <p>Private beachfront estate blending Swahili architecture with contemporary luxury. All-inclusive gourmet dining, personalized activities, and complete privacy on one of Africa's most beautiful beaches.</p>
    
    <h2>Package Includes</h2>
    <ul>
      <li><strong>Package Rate:</strong> $29,950 for a family of 6 (2 adults + 4 children aged 17, 14, 4 years, and 2 months)</li>
      <li>10 nights luxury accommodation in private family configurations (1 Double + 1 Triple throughout)</li>
      <li>All meals as specified: 10 breakfasts, 8 lunches, 8 dinners</li>
      <li>All scheduled light aircraft flights: Nairobi/Lewa/Mara/Diani/Nairobi</li>
      <li>Private transfers with meet-and-greet service at all airports/airstrips</li>
      <li>All park entry and conservation fees for Lewa Conservancy and Masai Mara</li>
      <li>Exclusive game drives: private scheduled in Lewa, exclusive vehicle in Mara</li>
      <li>Cultural experiences: Kiambethu Tea Farm visit, Giraffe Centre, Maasai village visit</li>
      <li>Premium beverages at safari camps (selected alcoholic and non-alcoholic)</li>
      <li>Complimentary activities: walking safaris, bush meals, sundowners, spa treatments</li>
      <li>Private butler service at Royal Zebra River Lodge</li>
      <li>Laundry services at all safari properties</li>
    </ul>
    
    <h2>Optional Premium Experience</h2>
    <p><strong>Hot Air Balloon Safari over Masai Mara:</strong> $480 per person. Sunrise flight with champagne bush breakfast—an unforgettable aerial perspective of the Mara ecosystem.</p>
    
    <h2>Family-Specific Features</h2>
    <ul>
      <li>Accommodation perfectly configured for family of 6 (2 adults + 4 children across varying ages)</li>
      <li>Children of all ages welcome with special attention to infant needs (2-month-old accommodated)</li>
      <li>Flexible meal times and child-friendly dining options</li>
      <li>Age-appropriate activities from wildlife education to beach play</li>
      <li>Private vehicle throughout ensures family privacy and flexible scheduling</li>
      <li>Safety-first approach with experienced guides familiar with family needs</li>
    </ul>
    
    <h2>Travel Practicalities</h2>
    <ul>
      <li><strong>Luggage:</strong> 15kg soft-sided bags per person for light aircraft transfers</li>
      <li><strong>Season:</strong> Optimal December travel with excellent wildlife viewing and coastal conditions</li>
      <li><strong>Health:</strong> Malaria precautions recommended for safari regions</li>
      <li><strong>Accessibility:</strong> Luxury properties feature comfortable paths and facilities suitable for all ages</li>
      <li><strong>Connectivity:</strong> Limited WiFi in wilderness areas, available at beach property</li>
    </ul>
    
    <h2>What Defines This Luxury Experience</h2>
    <p>This itinerary transcends standard safari offerings through meticulous attention to privacy, personalization, and exclusive access. Your family doesn't just visit Kenya—you experience it through privileged lenses: private conservancy access in Lewa, exclusive vehicle and butler service in the Mara, and a completely private beach estate in Diani.</p>
    
    <p>The all-inclusive nature extends beyond meals to premium beverages, spa treatments, cultural experiences, and specialized activities. Each property has been selected not just for its luxury amenities but for its unique character and commitment to personalized service for families.</p>
    
    <p>The seamless logistics—with light aircraft transfers eliminating long drives—maximize your time enjoying experiences rather than in transit. This is a holiday where every detail has been considered, from the configuration of your accommodations to the timing of activities suitable for children across a wide age range.</p>
    
    <h2>Booking This Exclusive Family Journey</h2>
    <p>This 11-day luxury safari holiday represents the ultimate family experience in Kenya. With limited capacity at exclusive properties like Royal Zebra River Lodge (only 8 suites) and Kinondo Kwetu (private estate), advance booking is essential. Contact Come Travel Kenya Limited to design and secure your family's place on this extraordinary journey.</p>
    
    <p><strong>From rhino encounters to riverfront luxury, from bush breakfasts to beachside bliss—create family legends on Kenya's most exclusive safari circuit.</strong></p>
  `,featuredImage:"/itineraries/tours/luxury-family-safari-kenya-11-days.png",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"inbound-safaris",tags:["luxury-safari","family-luxury-travel","kenya-luxury-holiday","private-conservancy","exclusive-safari","multigenerational-travel","lewaconservancy","royal-zebra-lodge","kinondo-kwetu","all-inclusive-safari"],publishedAt:"2026-01-13",readTime:10,featured:!0,seo:{metaTitle:"Luxury Safari Kenya | 11-Day Exclusive Holiday",metaDescription:"Ultimate 11-day luxury safari through Nairobi, Lewa Conservancy, Masai Mara & Diani Beach. Private accommodations, butler service, exclusive game drives & beachfront retreat for family of 6.",keywords:["luxury safari Kenya","exclusive Kenya holiday","private conservancy safari","Lewa Conservancy luxury","Royal Zebra River Lodge","Kinondo Kwetu Diani","all-inclusive safari","private butler safari","multigenerational luxury travel","premium Kenya safari package"]}},{id:7,title:"Luxury Safari & Beach Retreat — Couples",slug:"luxury-safari-beach-retreat-couples-12-days",excerpt:"An intimate 12-day luxury escape for two through Kenya's premier destinations—Nairobi, Lewa Conservancy, Masai Mara, and Diani Beach—featuring exclusive accommodations, gourmet dining, and personalized wildlife encounters.",content:`
    <h1>Luxury Safari & Beach Retreat — Couples</h1>
    
    <p><strong>Duration:</strong> 12 Days, 11 Nights</p>
    <p><strong>Destinations:</strong> Nairobi → Lewa Conservancy → Masai Mara → Diani Beach</p>
    <p><strong>Best For:</strong> Couples, honeymooners, anniversary celebrations, solo travelers with a companion, luxury seekers desiring intimate experiences</p>
    
    <p>Embark on an exclusive 12-day journey designed for two, blending Kenya's most iconic wildlife experiences with ultimate coastal relaxation. From intimate encounters in private conservancies to romantic beachfront moments, this luxury itinerary offers seamless transitions between wilderness and paradise, all while enjoying the renowned Elewana Collection accommodations and personalized service at every turn.</p>
    
    <h2>Luxury Experience Highlights</h2>
    <ul>
      <li>Exclusive accommodations throughout the Elewana Collection properties</li>
      <li>Intimate access to Lewa Conservancy, Africa's premier rhino sanctuary</li>
      <li>Prime riverfront location in Masai Mara at Elewana Sand River Camp on the migration route</li>
      <li>Private beachfront retreat at Kinondo Kwetu with personalized service</li>
      <li>Comprehensive cultural day in Nairobi including elephant orphanage and giraffe center</li>
      <li>Seamless light aircraft transfers eliminating long road journeys</li>
      <li>Optional hot air balloon safari over the Masai Mara at sunrise</li>
      <li>Marine adventure with dolphin watching and snorkeling at Wasini Island</li>
    </ul>
    
    <h2>Detailed Itinerary</h2>
    
    <h3>Days 1-2: Nairobi Arrival & Cultural Introduction</h3>
    <p>Arrive at Jomo Kenyatta International Airport to a warm welcome and transfer to Park Inn by Radisson. After settling in, enjoy a full day exploring Nairobi's highlights: visit the David Sheldrick Wildlife Trust to meet orphaned baby elephants, hand-feed Rothschild's giraffes at the Giraffe Centre, and step back in time at the Karen Blixen Museum, followed by lunch at a curated local restaurant.</p>
    
    <h3>Days 3-4: Lewa Conservancy - Rhino Haven</h3>
    <p>Fly to the celebrated Lewa Wildlife Conservancy, staying at Elewana Lewa Safari Camp. This private conservancy offers some of Africa's most successful rhino conservation alongside Grevy's zebra, elephants, and lions. Enjoy shared game drives across pristine plains, learn about community-led conservation, and savor sundowners with breathtaking views of Mount Kenya.</p>
    
    <h3>Days 5-7: Masai Mara Riverfront Luxury</h3>
    <p>Journey to the legendary Masai Mara, checking into the elegant Elewana Sand River Camp. Situated directly on the Sand River along the Great Migration route, this 1920s-inspired camp offers an authentic safari experience with modern luxury. Enjoy shared morning and afternoon game drives across the iconic Mara plains, with optional sunrise hot air balloon safari followed by champagne bush breakfast.</p>
    
    <h3>Days 8-11: Diani Beach Paradise</h3>
    <p>Fly to Kenya's stunning south coast for four nights at Kinondo Kwetu, a private beachfront estate. Experience barefoot luxury with personalized service, gourmet dining, and direct beach access. One day features a marine excursion to Wasini Island for dolphin watching, snorkeling in coral gardens, and fresh seafood lunch. Remaining days offer complete relaxation or optional activities like beach horseback riding, yoga, or Swahili cultural visits.</p>
    
    <h3>Day 12: Departure</h3>
    <p>After a final tropical breakfast, transfer to Ukunda Airstrip for your flight to Nairobi, connecting with your onward international journey, carrying memories of an extraordinary Kenyan escape.</p>
    
    <h2>Luxury Accommodation Portfolio</h2>
    
    <h3>Park Inn by Radisson Nairobi Westlands</h3>
    <p>Modern comfort in Nairobi's vibrant Westlands district, offering convenient access to the city's cultural attractions with contemporary amenities.</p>
    
    <h3>Elewana Lewa Safari Camp</h3>
    <p>Authentic tented luxury on 65,000 acres of private conservancy. Features large tented suites with verandas, cozy log fires, and exclusive access to one of Africa's most celebrated conservation success stories.</p>
    
    <h3>Elewana Sand River Camp</h3>
    <p>1920s-inspired luxury tented camp situated directly on the Sand River in the Masai Mara National Reserve. Offers prime migration viewing, elegant tented accommodations, and an atmosphere of classic safari romance.</p>
    
    <h3>Kinondo Kwetu, Diani</h3>
    <p>Exclusive beachfront estate blending Swahili architecture with contemporary luxury. All-inclusive gourmet dining, personalized service, and complete privacy on one of Africa's most beautiful beaches.</p>
    
    <h2>Package Includes</h2>
    <ul>
      <li><strong>Package Rate:</strong> $18,600 adults ($9,300 per person sharing)</li>
      <li>11 nights luxury accommodation in double rooms/tents throughout</li>
      <li>All meals as specified: 11 breakfasts, 10 lunches, 10 dinners</li>
      <li>All scheduled light aircraft flights: Nairobi/Lewa/Mara/Diani/Nairobi</li>
      <li>Private transfers with meet-and-greet service at all airports/airstrips</li>
      <li>All park entry and conservation fees for Lewa Conservancy and Masai Mara</li>
      <li>Shared game drives in both Lewa Conservancy and Masai Mara</li>
      <li>Nairobi cultural experience: David Sheldrick Wildlife Trust, Giraffe Centre, Karen Blixen Museum with lunch</li>
      <li>Wasini Island day excursion including dolphin watching, snorkeling, and seafood lunch</li>
      <li>All beverages at Kinondo Kwetu (selected premium drinks included)</li>
    </ul>
    
    <h2>Optional Premium Experience</h2>
    <p><strong>Hot Air Balloon Safari over Masai Mara:</strong> $480 per person. Sunrise flight with champagne bush breakfast—an unforgettable aerial perspective of the Mara plains and wildlife.</p>
    
    <h2>Exclusions</h2>
    <ul>
      <li>International flights and visas</li>
      <li>Tips, porterage, and travel insurance</li>
      <li>Personal expenses (phone, laundry, souvenirs, etc.)</li>
      <li>Drinks at Nairobi hotel and safari camps (included at Kinondo Kwetu)</li>
      <li>Optional activities not specified in itinerary</li>
    </ul>
    
    <h2>Couples & Romance Features</h2>
    <ul>
      <li>Intimate accommodations perfect for couples throughout the journey</li>
      <li>Private settings at each property offering romance and seclusion</li>
      <li>Sundowner experiences in both conservancy locations</li>
      <li>Beachfront dining and private moments at Kinondo Kwetu</li>
      <li>Flexible scheduling allowing for personal pace and preferences</li>
      <li>Photographic opportunities at every destination for lasting memories</li>
    </ul>
    
    <h2>Travel Practicalities</h2>
    <ul>
      <li><strong>Travel Period:</strong> January to March 2026 (ideal for wildlife viewing and beach weather)</li>
      <li><strong>Luggage:</strong> 15kg soft-sided bags per person recommended for light aircraft transfers</li>
      <li><strong>Health:</strong> Malaria precautions recommended for safari regions</li>
      <li><strong>Connectivity:</strong> Limited WiFi in wilderness areas, available at beach property</li>
      <li><strong>Physical Level:</strong> Easy to moderate; suitable for all fitness levels</li>
    </ul>
    
    <h2>Why This Luxury Itinerary Stands Out</h2>
    <p>This journey represents the perfect balance between authentic safari experiences and uncompromising luxury. By combining the exclusive Elewana Collection properties—each known for their distinctive character and exceptional service—with seamless light aircraft transfers, you maximize experience time while minimizing transit fatigue.</p>
    
    <p>The progression from cultural immersion in Nairobi to private conservancy access in Lewa, iconic Mara landscapes, and finally tropical beach relaxation creates a narrative journey that satisfies both adventure and relaxation desires. The inclusion of a marine excursion at Wasini Island adds a unique dimension rarely combined with traditional safari itineraries.</p>
    
    <p>Designed specifically for two travelers, every element—from accommodation configurations to activity timing—prioritizes intimacy, privacy, and personalized attention that larger group tours cannot provide.</p>
    
    <h2>Booking This Intimate Escape</h2>
    <p>This 12-day luxury safari and beach retreat offers limited availability due to the exclusive nature of the properties involved, particularly during the prime January-March 2026 travel period. Contact Come Travel Kenya Limited to secure this intimate Kenyan escape and begin planning your extraordinary journey for two.</p>
    
    <p><strong>From rhino encounters under Mount Kenya to riverfront sundowners in the Mara, from coral gardens to coconut palms—craft your shared story across Kenya's most breathtaking landscapes.</strong></p>
  `,featuredImage:"/itineraries/tours/luxury-couples-safari-beach-12-days.jpg",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"inbound-safaris",tags:["luxury-couples-safari","kenya-honeymoon","elewana-collection","private-conservancy","beach-retreat","romantic-safari","masai-mara-luxury","lewaconservancy","kinondo-kwetu","wasini-island"],publishedAt:"2026-01-13",readTime:9,featured:!0,seo:{metaTitle:"Luxury Safari & Beach Retreat for Couples | 12-Day Kenya Romantic Holiday",metaDescription:"Exclusive 12-day luxury escape for two through Nairobi, Lewa Conservancy, Masai Mara & Diani Beach. Intimate accommodations, gourmet dining, private conservancy access & marine adventures.",keywords:["luxury couples safari Kenya","Kenya honeymoon package","romantic safari Africa","Elewana Collection safari","private conservancy experience","Masai Mara luxury camp","Diani Beach retreat","wasini island excursion","all-inclusive beach safari","intimate Kenya holiday"]}},{id:8,title:"Lamu Cultural Festival Immersion",slug:"lamu-cultural-festival-immersion-5-days",excerpt:"A captivating 5-day cultural immersion during Lamu's annual Swahili festival, featuring traditional celebrations, ancient architecture, and boutique luxury at the iconic Peponi Hotel on Kenya's enchanting coast.",content:`
    <h1>Lamu Cultural Festival Immersion</h1>
    
    <p><strong>Duration:</strong> 5 Days, 4 Nights</p>
    <p><strong>Location:</strong> Lamu Archipelago, Kenya</p>
    <p><strong>Best For:</strong> Cultural enthusiasts, photographers, couples seeking authentic experiences, travelers interested in Swahili heritage, festival lovers</p>
    
    <p>Immerse yourself in the living history of Swahili culture during Lamu's annual Cultural Festival, a vibrant celebration of traditions preserved for centuries. Stay at the legendary Peponi Hotel, where timeless elegance meets authentic island charm, as you experience donkey races, dhow sailing, Swahili poetry, and traditional weddings in this UNESCO World Heritage site.</p>
    
    <h2>Cultural Experience Highlights</h2>
    <ul>
      <li>Exclusive access to Lamu Cultural Festival events and activities</li>
      <li>Stay at the iconic Peponi Hotel, a landmark of Lamu hospitality</li>
      <li>Experience traditional Swahili celebrations in an authentic setting</li>
      <li>Witness donkey races—Lamu's unique alternative to horse racing</li>
      <li>Enjoy dhow sailing in the archipelago's turquoise waters</li>
      <li>Sample authentic Swahili cuisine during festival celebrations</li>
      <li>Explore Lamu Old Town's preserved 14th-century architecture</li>
      <li>Participate in henna painting and traditional poetry sessions</li>
    </ul>
    
    <h2>Detailed Itinerary</h2>
    
    <h3>Day 1: Arrival in Lamu</h3>
    <p>Fly from Nairobi to Lamu in the afternoon, arriving as the golden light bathes the archipelago. Transfer to the legendary Peponi Hotel, your base for this cultural immersion. Settle into your room with its blend of Swahili design and boutique comfort, then enjoy your first evening in Lamu with the sounds of the Indian Ocean and distant festival preparations.</p>
    
    <h3>Days 2-4: Lamu Cultural Festival Immersion</h3>
    <p>Three full days to experience the Lamu Cultural Festival, where the island comes alive with centuries-old traditions. Each day brings different celebrations: witness thrilling donkey races through the narrow stone streets, admire beautifully decorated dhows sailing in competition, listen to traditional Swahili poetry recitals, and observe intricate henna painting demonstrations. The festival culminates with a traditional Swahili wedding ceremony, offering a unique glimpse into local customs. Between events, explore Lamu Old Town's maze-like streets, visit the Lamu Museum, or simply relax at Peponi's terrace overlooking the harbor.</p>
    
    <h3>Day 5: Departure</h3>
    <p>Enjoy a final breakfast overlooking the Lamu channel before transferring to the airport for your flight back to Nairobi, carrying memories of authentic Swahili culture and festival celebrations.</p>
    
    <h2>About Lamu Cultural Festival</h2>
    <p>The Lamu Cultural Festival is an annual celebration held every November that brings the island's Swahili heritage to vibrant life. As a UNESCO World Heritage site, Lamu provides the perfect authentic backdrop for traditions preserved for over 700 years. The festival showcases the beliefs, arts, and daily practices that define Swahili culture, from traditional boat building to Swahili cuisine, making it one of Kenya's most authentic cultural experiences.</p>
    
    <h2>Accommodation: Peponi Hotel Lamu</h2>
    <p>An iconic boutique hotel that has welcomed travelers to Lamu for decades. Peponi combines Swahili architectural elegance with understated luxury, featuring spacious rooms with four-poster beds, traditional Lamu furniture, and private terraces. The hotel's legendary terrace restaurant offers panoramic views of the harbor, perfect for watching festival activities while enjoying fresh seafood and tropical cocktails.</p>
    
    <h2>Package Includes</h2>
    <ul>
      <li><strong>Package Rate:</strong> Starting from $1,260 per person sharing ($1,660 single supplement)</li>
      <li>4 nights accommodation at Peponi Hotel Lamu</li>
      <li>Daily breakfast at the hotel</li>
      <li>Scheduled roundtrip flights: Nairobi/Lamu/Nairobi</li>
      <li>Airport transfers in Lamu</li>
      <li>Access to all Lamu Cultural Festival events and activities</li>
      <li>Opportunity to participate in festival cultural demonstrations</li>
    </ul>
    
    <h2>Festival Activities & Experiences</h2>
    <ul>
      <li><strong>Donkey Races:</strong> Lamu's unique traditional sport through the historic streets</li>
      <li><strong>Dhow Sailing Competitions:</strong> Traditional wooden sailboats in full regalia</li>
      <li><strong>Swahili Poetry (Utenzi):</strong> Traditional recitals in ancient courtyards</li>
      <li><strong>Henna Painting:</strong> Intricate traditional body art demonstrations</li>
      <li><strong>Traditional Wedding:</strong> Authentic Swahili wedding ceremony</li>
      <li><strong>Swahili Cuisine Sampling:</strong> Opportunity to taste traditional dishes</li>
      <li><strong>Cultural Performances:</strong> Music, dance, and storytelling sessions</li>
      <li><strong>Architecture Tours:</strong> Guided walks through Lamu Old Town</li>
    </ul>
    
    <h2>Exclusions</h2>
    <ul>
      <li>International flights and visas</li>
      <li>Lunches and dinners (available at hotel and local restaurants)</li>
      <li>Tips, porterage, and travel insurance</li>
      <li>Personal expenses (shopping, additional activities, etc.)</li>
      <li>Drinks at the hotel</li>
      <li>Optional guided tours beyond festival activities</li>
    </ul>
    
    <h2>Travel Practicalities</h2>
    <ul>
      <li><strong>Travel Dates:</strong> November 2025 (specific festival dates annually)</li>
      <li><strong>Luggage:</strong> 15kg soft-sided bags per person for light aircraft transfers</li>
      <li><strong>Dress Code:</strong> Respectful, modest clothing recommended for cultural sensitivity</li>
      <li><strong>Currency:</strong> Kenyan Shillings; some establishments accept USD</li>
      <li><strong>Connectivity:</strong> Limited mobile reception; embrace the digital detox</li>
      <li><strong>Physical Level:</strong> Moderate walking on uneven stone streets</li>
    </ul>
    
    <h2>Why Lamu Festival is Unique</h2>
    <p>Unlike commercialized festivals, Lamu Cultural Festival offers authentic immersion in living traditions. As a UNESCO World Heritage site, Lamu maintains its architectural and cultural integrity, providing a genuine backdrop for celebrations. The festival isn't staged for tourists—it's the community's own celebration of their heritage, inviting visitors to participate respectfully.</p>
    
    <p>The combination of boutique accommodation at Peponi Hotel with festival access creates the perfect balance of comfort and authenticity. You're not just observing from the sidelines; you're welcomed into the celebrations while having a luxurious retreat to return to each evening.</p>
    
    <h2>Cultural Sensitivity & Participation</h2>
    <p>This experience emphasizes respectful cultural exchange. Participants are encouraged to:</p>
    <ul>
      <li>Dress modestly, covering shoulders and knees</li>
      <li>Ask permission before photographing individuals</li>
      <li>Participate in activities when invited by locals</li>
      <li>Learn basic Swahili greetings (Jambo, Asante)</li>
      <li>Respect religious and cultural practices</li>
      <li>Support local artisans by purchasing authentic crafts</li>
    </ul>
    
    <h2>Booking This Cultural Immersion</h2>
    <p>The Lamu Cultural Festival occurs only once annually in November, with limited accommodation availability at premium properties like Peponi Hotel. Early booking is essential to secure your place at this exclusive cultural experience. Contact Come Travel Kenya Limited to reserve your spot at Kenya's most authentic cultural celebration.</p>
    
    <p><strong>Step back in time to a world of carved doors and coral stone, where donkeys outnumber cars and dhows still rule the waves—experience living Swahili heritage at its most vibrant.</strong></p>
  `,featuredImage:"/itineraries/safaris/lamu-cultural-festival-peponi-hotel.jpg",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"tembea-kenya",tags:["lamu-festival","swahili-culture","cultural-immersion","peponi-hotel","unesco-world-heritage","kenya-cultural-tour","traditional-festival","dhow-sailing","donkey-races","island-culture"],publishedAt:"2026-01-13",readTime:6,featured:!1,seo:{metaTitle:"Lamu Cultural Festival Experience | 5-Day Swahili Immersion at Peponi Hotel",metaDescription:"Immerse in Lamu's annual Cultural Festival with 4 nights at Peponi Hotel. Experience donkey races, dhow sailing, Swahili poetry & traditional weddings in this UNESCO World Heritage site.",keywords:["Lamu Cultural Festival","Swahili culture immersion","Peponi Hotel Lamu","UNESCO World Heritage Kenya","traditional Swahili festival","Lamu donkey races","dhow sailing Lamu","cultural tour Kenya","authentic Kenya experience","Lamu archipelago travel"]}},{id:9,title:"Maasai Mara Express Safari",slug:"masai-mara-express-safari-3-days",excerpt:"A quick yet comprehensive 3-day escape to the Masai Mara featuring scenic flights, shared game drives, and comfortable accommodation at Zebra Plains Camp—perfect for travelers with limited time.",content:`
    <h1>Maasai Mara Express Safari</h1>
    
    <p><strong>Duration:</strong> 3 Days, 2 Nights</p>
    <p><strong>Location:</strong> Masai Mara National Reserve</p>
    <p><strong>Best For:</strong> Time-constrained travelers, business visitors extending their trip, weekend adventurers, first-time safari goers, solo travelers joining group activities</p>
    
    <p>Experience the magic of Africa's most famous wildlife reserve in just three days with this efficient yet comprehensive safari package. Featuring convenient flights from Nairobi directly into the heart of the Mara, shared game drives with experienced guides, and comfortable accommodation at Zebra Plains Camp, this express safari delivers maximum wildlife viewing with minimal transit time.</p>
    
    <h2>Safari Highlights</h2>
    <ul>
      <li>Scenic light aircraft flights directly into the Masai Mara ecosystem</li>
      <li>Shared game drives in specialized 4x4 Landcruisers with pop-up roofs</li>
      <li>Accommodation at well-located Zebra Plains Camp near wildlife corridors</li>
      <li>All-inclusive meals and selected beverages during your stay</li>
      <li>Complimentary laundry service (excluding undergarments)</li>
      <li>All park fees and conservation charges included</li>
      <li>Experienced English-speaking driver/guides</li>
    </ul>
    
    <h2>Detailed Itinerary</h2>
    
    <h3>Day 1: Nairobi to Masai Mara</h3>
    <p>Begin your adventure with a morning transfer to Wilson Airport for your scenic flight to the Masai Mara. Watch as urban landscapes transform into vast savannah plains during the one-hour flight. Upon landing at Ol Kiombo Airstrip, meet your guide and transfer to Zebra Plains Camp for check-in and lunch. At 15:00, embark on your first afternoon game drive, searching for the Big Five as the golden light bathes the Mara plains. Return to camp for dinner and overnight, listening to the sounds of the African night.</p>
    
    <h3>Day 2: Full Day in the Masai Mara</h3>
    <p>After breakfast, set out for a full day of game viewing across the iconic Mara landscape. Your experienced guide will take you to prime wildlife viewing areas, searching for lions, leopards, cheetahs, elephants, buffalo, and the abundant plains game. Enjoy a packed lunch at a scenic spot within the reserve before continuing your exploration. As the sun begins to set, return to camp with en-route wildlife viewing, followed by dinner and another night under the African stars.</p>
    
    <h3>Day 3: Final Game Viewing & Return to Nairobi</h3>
    <p>Enjoy a final breakfast at camp before checking out at 10:00. Transfer to Ol Kiombo Airstrip for your return flight to Nairobi, arriving at Wilson Airport by 12:20. Continue with your onward travel arrangements, carrying memories of an authentic Masai Mara safari experience.</p>
    
    <h2>Accommodation: Zebra Plains Camp</h2>
    <p>Zebra Plains Camp offers comfortable tented accommodation in the heart of the Masai Mara National Reserve. The camp features ensuite tents with modern amenities, a central dining area, and panoramic views of the surrounding savannah. Its strategic location near the Talek River provides excellent wildlife viewing opportunities right from camp.</p>
    
    <h2>Package Includes</h2>
    <ul>
      <li><strong>Package Rate:</strong> Starting from $1,325 per person sharing ($1,395 single supplement)</li>
      <li>2 nights accommodation at Zebra Plains Camp</li>
      <li>All meals as specified: 2 breakfasts, 2 lunches, 2 dinners</li>
      <li>Roundtrip scheduled flights: Nairobi/Masai Mara/Nairobi</li>
      <li>Shared game drives in 4x4 Landcruisers with pop-up roofs</li>
      <li>Services of experienced English-speaking driver/guides</li>
      <li>All Masai Mara National Reserve park entry and conservation fees</li>
      <li>Selected in-house alcoholic and non-alcoholic beverages</li>
      <li>Complimentary laundry service (excluding undergarments)</li>
      <li>All airport/airstrip transfers as per itinerary</li>
    </ul>
    
    <h2>Wildlife Viewing Expectations</h2>
    <p>The Masai Mara is renowned for its exceptional wildlife density and diversity. During your visit, you can expect to see:</p>
    <ul>
      <li>The Big Five (lion, leopard, elephant, buffalo, rhino)</li>
      <li>Large prides of lions (often 15+ individuals)</li>
      <li>Cheetahs and leopards in their natural habitat</li>
      <li>Hippos and crocodiles in the Mara River</li>
      <li>Massive herds of elephants</li>
      <li>Thousands of wildebeest and zebras (seasonal migration)</li>
      <li>Over 450 bird species including numerous raptors</li>
    </ul>
    
    <h2>Travel Practicalities</h2>
    <ul>
      <li><strong>Travel Period:</strong> February 2026 (excellent wildlife viewing with fewer crowds)</li>
      <li><strong>Luggage:</strong> Strict 15kg per person limit on flights; soft-sided bags essential</li>
      <li><strong>Group Size:</strong> Shared game drives with maximum 6-7 passengers per vehicle</li>
      <li><strong>Meal Plan:</strong> Full board inclusive at camp</li>
      <li><strong>Physical Level:</strong> Easy; suitable for all ages and fitness levels</li>
      <li><strong>Connectivity:</strong> Limited mobile network; embrace the digital detox</li>
    </ul>
    
    <h2>Exclusions</h2>
    <ul>
      <li>International flights and visas</li>
      <li>Tips and gratuities for guides and camp staff</li>
      <li>Travel insurance</li>
      <li>Personal expenses (souvenirs, phone calls, etc.)</li>
      <li>Premium alcoholic beverages beyond house selection</li>
      <li>Optional activities not specified in itinerary</li>
    </ul>
    
    <h2>Why This Express Safari Works</h2>
    <p>This itinerary maximizes your wildlife viewing time while minimizing transit through strategic use of flights. Unlike road-based safaris that require 5-6 hours driving each way, you fly directly into the heart of the Mara ecosystem, giving you more time for game drives and relaxation.</p>
    
    <p>The shared vehicle format offers social interaction with fellow travelers while keeping costs reasonable. Zebra Plains Camp provides comfortable accommodations without the premium price tag of luxury lodges, making this an accessible yet authentic Mara experience.</p>
    
    <p>Perfect for business travelers extending their Nairobi trip, visitors with limited vacation time, or those wanting to sample the safari experience before committing to longer wilderness adventures.</p>
    
    <h2>Booking Information</h2>
    <p>This 3-day express safari operates with scheduled flights and shared game drives, making advance booking essential to secure spaces. February 2026 offers excellent wildlife viewing with good weather conditions. Contact Come Travel Kenya Limited to reserve your place on this efficient Masai Mara adventure.</p>
    
    <p><strong>From Nairobi to the Mara and back in just three days—experience the essence of African safari without the extended time commitment.</strong></p>
  `,featuredImage:"/itineraries/safaris/masai-mara-express-safari-3-days.png",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"inbound-safaris",tags:["express-safari","masai-mara-quick-trip","flying-safari","short-safari-kenya","weekend-safari","shared-game-drives","zebra-plains-camp","budget-safari","time-efficient-safari","nairobi-getaway"],publishedAt:"2026-01-13",readTime:5,featured:!1,seo:{metaTitle:"3-Day Masai Mara Express Safari | Quick Kenya Wildlife Getaway with Flights",metaDescription:"Efficient 3-day Masai Mara safari with flights from Nairobi, shared game drives, and Zebra Plains Camp accommodation. Perfect for time-constrained travelers wanting authentic wildlife experiences.",keywords:["Masai Mara express safari","3-day Kenya safari","quick safari from Nairobi","flying safari Masai Mara","weekend safari Kenya","short wildlife trip","budget Masai Mara package","shared game drives","time-efficient safari","Zebra Plains Camp"]}},{id:10,title:"Kenya Discovery — Safari & Beach",slug:"kenya-discovery-safari-beach-13-days-4-adults",excerpt:"A comprehensive 13-day Kenyan adventure combining Nairobi culture, wildlife safaris in Mutara and Masai Mara conservancies, and tropical relaxation on Diani Beach—all with private transfers and internal flights for a group of four.",content:`
    <h1>Kenya Discovery — Safari & Beach</h1>
    
    <p><strong>Duration:</strong> 13 Days, 12 Nights</p>
    <p><strong>Destinations:</strong> Nairobi → Mutara Conservancy → Masai Mara → Diani Beach</p>
    <p><strong>Best For:</strong> Groups of friends, couples traveling together, small families, travelers seeking a complete Kenyan experience combining culture, wildlife, and beach relaxation</p>
    
    <p>Experience the full spectrum of Kenya's wonders on this meticulously planned 13-day journey designed for four adults. From Nairobi's urban culture to the wildlife-rich conservancies of Laikipia, the iconic plains of the Masai Mara, and finally the pristine white sands of Diani Beach, this itinerary offers the perfect balance of adventure, cultural immersion, and relaxation.</p>
    
    <h2>Adventure Highlights</h2>
    <ul>
      <li>VIP airport arrival with meet-and-assist service at Jomo Kenyatta International Airport</li>
      <li>Nairobi cultural day including David Sheldrick Wildlife Trust, Karen Blixen Museum, and Giraffe Centre</li>
      <li>Private game drives in Mutara Conservancy with bush walking safari experience</li>
      <li>Full day exploring Ol Pejeta Conservancy, home to the last two northern white rhinos</li>
      <li>Scenic light aircraft flight from Nanyuki to Masai Mara</li>
      <li>Three full days in Masai Mara with shared game drives and cultural visit to The Maa Trust</li>
      <li>Flight from Masai Mara to Diani for five nights of beach relaxation</li>
      <li>Coastal activities including snorkeling at Wasini Island and sunset dhow sailing</li>
    </ul>
    
    <h2>Detailed Itinerary</h2>
    
    <h3>Days 1-2: Nairobi Cultural Introduction</h3>
    <p>Arrive to VIP treatment at Jomo Kenyatta International Airport with personalized meet-and-assist service. Transfer to Tamarind Tree Hotel for your first two nights. Day two features a curated Nairobi excursion: watch orphaned elephants at David Sheldrick Wildlife Trust, step into history at Karen Blixen Museum, enjoy lunch at Tamarind Brasserie, and hand-feed Rothschild's giraffes at the Giraffe Centre.</p>
    
    <h3>Days 3-4: Mutara & Ol Pejeta Conservancies</h3>
    <p>Journey to Nanyuki through scenic highlands with an Equator line photo stop. Settle into Jambo Mutara Camp for two nights. Enjoy afternoon game drives in Mutara Conservancy and a full day exploring Ol Pejeta Conservancy—home to the Big Five, rare northern white rhinos, and Kenya's only chimpanzee sanctuary. Experience an intimate bush walking safari to connect with the landscape.</p>
    
    <h3>Days 5-7: Masai Mara Wildlife Spectacle</h3>
    <p>Fly from Nanyuki to the world-renowned Masai Mara. Three nights at Zebra Plains Camp with daily game drives in shared open-sided vehicles. Visit The Maa Trust for authentic cultural interaction with Maasai community members focused on conservation and women's empowerment. Optional hot air balloon ride available for breathtaking aerial views.</p>
    
    <h3>Days 8-12: Diani Beach Paradise</h3>
    <p>Fly from the Mara to Kenya's stunning south coast for five nights at Diani Reef Resort & Spa. Enjoy half-board meals with days filled with included activities: snorkeling in the coral gardens of Wasini Island and sunset dhow sailing on the Kongo River. Additional days offer optional Swahili cultural immersion or simply relaxing on 10km of pristine white sand beach.</p>
    
    <h3>Day 13: Departure</h3>
    <p>After a final breakfast, transfer to Mombasa Airport for your onward journey, carrying memories of an epic Kenyan adventure.</p>
    
    <h2>Accommodation Overview</h2>
    <p><strong>Tamarind Tree Hotel (Nairobi):</strong> Contemporary comfort with easy airport access, perfect for urban exploration before your safari.</p>
    <p><strong>Jambo Mutara Camp (Laikipia):</strong> Intimate tented camp offering stunning savannah views and personalized service in the heart of wildlife country.</p>
    <p><strong>Zebra Plains Camp (Masai Mara):</strong> Well-located tented camp near wildlife corridors with comfortable ensuite tents and shared game drive vehicles.</p>
    <p><strong>Diani Reef Resort & Spa (Diani):</strong> Beachfront resort with multiple pools, spa facilities, direct beach access, and half-board meal plan.</p>
    
    <h2>Package Includes</h2>
    <ul>
      <li><strong>Package Rate:</strong> $19,968 ($4,992 per person sharing)</li>
      <li>12 nights accommodation in double rooms/tents throughout</li>
      <li>Meals: 12 breakfasts, 6 lunches, 8 dinners as specified in itinerary</li>
      <li>Private ground transportation Nairobi to Nanyuki with English-speaking driver/guide</li>
      <li>Private game drives in Mutara/Ol Pejeta conservancies</li>
      <li>Shared game drives in Masai Mara (open-sided vehicles)</li>
      <li>All airport transfers (Nairobi, Nanyuki, Mara, Diani, Mombasa)</li>
      <li>Scheduled light aircraft flights: Nanyuki to Masai Mara, Masai Mara to Diani</li>
      <li>All park and conservation fees for Mutara, Ol Pejeta, and Masai Mara</li>
      <li>Guided bush walk in Mutara Conservancy</li>
      <li>Snorkeling excursion at Wasini Island with equipment</li>
      <li>Sunset dhow sailing at Kongo River, Diani</li>
      <li>Nairobi excursions: David Sheldrick Wildlife Trust, Karen Blixen Museum, Giraffe Centre with lunch</li>
      <li>Cultural visit to The Maa Trust in Masai Mara</li>
      <li>VIP meet-and-assist service at Jomo Kenyatta International Airport arrival</li>
    </ul>
    
    <h2>Optional Activities (Additional Cost)</h2>
    <ul>
      <li>Hot Air Balloon Ride in Masai Mara: $450 per person</li>
      <li>Village Visit in Masai Mara: $40 per person</li>
      <li>Swahili Cultural Immersion in Diani: $35 per person</li>
      <li>Night Game Drive in Mutara Conservancy: $65 per person</li>
    </ul>
    
    <h2>Travel Notes & Logistics</h2>
    <ul>
      <li><strong>Group Size:</strong> Designed traveling together</li>
      <li><strong>Transport Mix:</strong> Private vehicle for conservancy safaris, shared vehicle for Masai Mara game drives</li>
      <li><strong>Luggage:</strong> Strict 15kg per person limit on internal flights; soft-sided bags strongly recommended</li>
      <li><strong>Meal Plans:</strong> Bed & breakfast in Nairobi, full board on safari, half board in Diani</li>
      <li><strong>Season:</strong> Late November to early December for optimal wildlife viewing and coastal weather</li>
      <li><strong>Physical Level:</strong> Easy to moderate; suitable for most fitness levels</li>
    </ul>
    
    <h2>Exclusions</h2>
    <ul>
      <li>International flights and visas</li>
      <li>Tips, porterage, and travel insurance</li>
      <li>Personal expenses (phone, laundry, souvenirs, etc.)</li>
      <li>Drinks at all accommodations (payable directly)</li>
      <li>Meals not specified in itinerary (dinners in Nairobi, lunches in Diani)</li>
      <li>Optional activities listed above</li>
    </ul>
    
    <h2>Why This Comprehensive Itinerary Works</h2>
    <p>This journey represents the perfect introduction to Kenya's diverse offerings for a group of four. You experience four distinct regions: urban Nairobi, the Laikipia conservancies (offering intimate wildlife encounters), the iconic Masai Mara (for classic safari landscapes), and the Indian Ocean coast (for tropical relaxation). The inclusion of internal flights between key destinations maximizes your experience time while providing breathtaking aerial views.</p>
    
    <p>The combination of private and shared transport offers both personalized attention during conservancy visits and the social experience of group game drives in the Mara. The progression from active safari days to beach relaxation follows a natural rhythm that allows for both adventure and recovery time.</p>
    
    <p>Designed specifically for four adults traveling together, the accommodations, transport, and activities are perfectly scaled for a small group experience while maintaining cost-effectiveness through shared arrangements where appropriate.</p>
    
    <h2>Booking Information</h2>
    <p>This 13-day discovery safari operates with specific departure dates and limited camp/resort capacities. Due to the comprehensive nature of this itinerary and the popularity of the November-December travel period, early booking is strongly recommended. Contact Come Travel Kenya Limited to secure your group's place on this unforgettable Kenyan journey.</p>
    
    <p><strong>From orphaned elephants to rare rhinos, from Mara sunsets to Diani tides—experience Kenya's wonders with your chosen travel companions.</strong></p>
  `,featuredImage:"/itineraries/safaris/kenya-discovery-safari-beach-13-days.png",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"inbound-safaris",tags:["kenya-complete-tour","safari-beach-combo","group-travel-kenya","mutara-conservancy","ol-pejeta","masai-mara","diani-beach","shared-safari","cultural-safari","multi-destination-kenya"],publishedAt:"2026-01-13",readTime:8,featured:!0,seo:{metaTitle:"13-Day Kenya Safari & Beach Tour | Complete Discovery Package",metaDescription:"Comprehensive 13-day Kenyan adventure combining Nairobi culture, Mutara/Ol Pejeta/Masai Mara safaris, and Diani Beach relaxation with internal flights.",keywords:["Kenya group safari","safari and beach package","Mutara Conservancy safari","Ol Pejeta rhinos","Masai Mara group tour","Diani Beach vacation","Kenya discovery tour","shared game drives","cultural safari Kenya","complete Kenya experience"]}},{id:11,title:"Kenyan Coast Honeymoon",slug:"kenyan-coast-honeymoon-options-3-nights",excerpt:"Two distinct 3-night honeymoon experiences on Kenya's coast—luxury beachfront romance at Pride Inn Paradise in Shanzu Mombasa, or authentic value at Silver Rock Beach Hotel in Malindi—both offering half-board meals and airport transfers.",content:`
    <h1>Kenyan Coast Honeymoon</h1>
    
    <p><strong>Duration:</strong> 3 Nights, 4 Days</p>
    <p><strong>Destinations:</strong> Shanzu Mombasa <strong>OR</strong> Malindi</p>
    <p><strong>Best For:</strong> Newlyweds, anniversary celebrations, romantic getaways, couples seeking beach relaxation with different budget and style preferences</p>
    
    <p>Celebrate your love with a romantic escape to Kenya's stunning coast. Choose between two distinct honeymoon experiences: the luxury beachfront ambiance of Pride Inn Paradise in Shanzu Mombasa, or the authentic charm and exceptional value of Silver Rock Beach Hotel in historic Malindi. Both options provide the perfect tropical backdrop for your romantic celebration with included meals and seamless transfers.</p>
    
    <h2>Option 1: Luxury Honeymoon at Pride Inn Paradise Beach Resort, Shanzu Mombasa</h2>
    
    <p><strong>Total Package: KES 112,500 adults (approx. $865 USD)</strong></p>
    
    <h3>Experience Highlights</h3>
    <ul>
      <li>Luxury beachfront accommodation with panoramic Indian Ocean views</li>
      <li>Modern amenities and sophisticated romantic ambiance</li>
      <li>Half-board meal plan (dinner & breakfast) featuring gourmet dining</li>
      <li>Prime location in Shanzu, north of Mombasa with easy access to attractions</li>
      <li>Personalized service with honeymoon attention to detail</li>
      <li>Complimentary airport transfers (KES 15,000 value)</li>
    </ul>
    
    <h3>Accommodation: Pride Inn Paradise Beach Resort</h3>
    <p>An upscale beachfront property offering contemporary luxury with traditional Kenyan hospitality. The resort features beautifully appointed rooms with ocean views, multiple dining options, swimming pools, spa facilities, and direct access to pristine beaches. Perfect for couples seeking modern comforts and sophisticated romance.</p>
    
    <h3>Package Includes</h3>
    <ul>
      <li>3 nights accommodation in a double room</li>
      <li>Half-board meal plan: dinner & breakfast daily</li>
      <li>Return airport transfers (Mombasa Airport to resort and back)</li>
      <li>Romantic setting with honeymoon atmosphere</li>
      <li>Access to resort facilities including pools and beach</li>
    </ul>
    
    <h2>Option 2: Value Honeymoon at Silver Rock Beach Hotel, Malindi</h2>
    
    <p><strong>Total Package: KES 52,000 adults (approx. $400 USD)</strong></p>
    
    <h3>Experience Highlights</h3>
    <ul>
      <li>Exceptional value without compromising on romance</li>
      <li>Authentic coastal charm in historic Malindi</li>
      <li>Half-board meal plan (dinner & breakfast) with local flavors</li>
      <li>Traditional Swahili architecture and relaxed atmosphere</li>
      <li>Proximity to Malindi's cultural attractions and marine park</li>
      <li>Complimentary airport transfers (KES 25,000 value)</li>
    </ul>
    
    <h3>Accommodation: Silver Rock Beach Hotel</h3>
    <p>A charming beachfront property offering authentic Kenyan coastal experience with excellent value. The hotel features comfortable rooms with traditional decor, a restaurant serving fresh seafood and local cuisine, and direct beach access. Ideal for couples seeking romantic simplicity and cultural immersion.</p>
    
    <h3>Package Includes</h3>
    <ul>
      <li>3 nights accommodation in a double room</li>
      <li>Half-board meal plan: dinner & breakfast daily</li>
      <li>Return airport transfers (Malindi Airport to hotel and back)</li>
      <li>Authentic coastal experience with romantic charm</li>
      <li>Access to hotel facilities and pristine Malindi beaches</li>
    </ul>
    
    <h2>Comparison: Pride Inn Paradise vs Silver Rock Beach</h2>
    
    <table>
      <tr>
        <th>Feature</th>
        <th>Pride Inn Paradise (Shanzu)</th>
        <th>Silver Rock Beach (Malindi)</th>
      </tr>
      <tr>
        <td><strong>Price for 2</strong></td>
        <td>KES 112,500 (approx. $865)</td>
        <td>KES 52,000 (approx. $400)</td>
      </tr>
      <tr>
        <td><strong>Style</strong></td>
        <td>Modern luxury, sophisticated</td>
        <td>Authentic charm, traditional</td>
      </tr>
      <tr>
        <td><strong>Location</strong></td>
        <td>Shanzu, north of Mombasa</td>
        <td>Malindi, historic coastal town</td>
      </tr>
      <tr>
        <td><strong>Meals</strong></td>
        <td>Half-board (dinner & breakfast)</td>
        <td>Half-board (dinner & breakfast)</td>
      </tr>
      <tr>
        <td><strong>Transfers</strong></td>
        <td>KES 15,000 included</td>
        <td>KES 25,000 included</td>
      </tr>
      <tr>
        <td><strong>Atmosphere</strong></td>
        <td>Upscale, romantic, contemporary</td>
        <td>Relaxed, cultural, authentic</td>
      </tr>
      <tr>
        <td><strong>Best For</strong></td>
        <td>Luxury-seeking couples, modern amenities</td>
        <td>Value-conscious couples, cultural immersion</td>
      </tr>
    </table>
    
    <h2>Destination Comparison</h2>
    
    <h3>Shanzu, Mombasa</h3>
    <p>Located north of Mombasa city, Shanzu offers a perfect blend of beach relaxation and accessibility to attractions. The area features beautiful beaches, upscale resorts, and proximity to Mombasa's historical sites, shopping, and dining options. Ideal for couples wanting beach time with occasional exploration opportunities.</p>
    
    <h3>Malindi</h3>
    <p>A historic Swahili settlement with Portuguese influences, Malindi offers cultural depth alongside beautiful beaches. The town features the Malindi Marine National Park, Gede Ruins, Vasco da Gama Pillar, and a more relaxed pace than Mombasa. Perfect for couples interested in history, culture, and authentic coastal life.</p>
    
    <h2>Package Inclusions (Both Options)</h2>
    <ul>
      <li>3 nights accommodation in a double room</li>
      <li>Half-board meal plan (dinner & breakfast daily)</li>
      <li>Return airport transfers from nearest airport</li>
      <li>Romantic honeymoon setting</li>
      <li>Access to beach and property facilities</li>
    </ul>
    
    <h2>Exclusions (Both Options)</h2>
    <ul>
      <li>Flights or transport to Mombasa/Malindi airports</li>
      <li>Lunches, drinks, and additional meals</li>
      <li>Tips, porterage, and travel insurance</li>
      <li>Personal expenses and optional activities</li>
      <li>Visa fees if applicable</li>
    </ul>
    
    <h2>Travel Practicalities</h2>
    <ul>
      <li><strong>Travel Dates:</strong> Valid for stays from December 2-5, 2025</li>
      <li><strong>Booking:</strong> Advance reservation required for honeymoon recognition</li>
      <li><strong>Transport:</strong> Flights to Mombasa/Malindi arranged separately</li>
      <li><strong>Currency:</strong> Prices in Kenyan Shillings; USD approximations for reference</li>
      <li><strong>Special Requests:</strong> Honeymoon decorations/special touches available upon request</li>
    </ul>
    
    <h2>Making Your Choice</h2>
    
    <p><strong>Choose Pride Inn Paradise if:</strong> You seek modern luxury, sophisticated amenities, gourmet dining, and prefer being closer to Mombasa's attractions and nightlife. The higher price reflects the upscale facilities and contemporary beach resort experience.</p>
    
    <p><strong>Choose Silver Rock Beach Hotel if:</strong> You value authenticity over luxury, prefer cultural immersion, want exceptional value, and enjoy the historical atmosphere of Malindi. The lower price doesn't mean less romance—just a different style of coastal experience.</p>
    
    <h2>Booking Your Honeymoon</h2>
    <p>Both honeymoon packages offer excellent value within their respective categories. Early booking is recommended, especially for December dates which are popular for weddings and honeymoons in Kenya. Contact Come Travel Kenya Limited to discuss which option best suits your preferences, budget, and honeymoon vision.</p>
    
    <p><strong>Whether you choose luxury sophistication or authentic charm, begin your married life with Kenyan coastal romance, turquoise waters, and endless beaches.</strong></p>
  `,featuredImage:"/itineraries/tours/kenyan-coast-honeymoon-options.png",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"tembea-kenya",tags:["honeymoon-kenya","beach-honeymoon","mombasa-romance","malindi-beach","coastal-getaway","romantic-escape","kenya-beach-resort","budget-honeymoon","luxury-honeymoon","couples-travel"],publishedAt:"2026-01-13",readTime:7,featured:!0,seo:{metaTitle:"Kenyan Coast Honeymoon Options | 3-Night Beach Romance in Mombasa or Malindi",metaDescription:"Two 3-night honeymoon packages on Kenya's coast: luxury at Pride Inn Paradise Shanzu or value at Silver Rock Beach Malindi. Both include half-board meals & transfers for romantic beach escape.",keywords:["Kenya honeymoon package","Mombasa honeymoon","Malindi beach resort","coastal romance Kenya","beach honeymoon Africa","Pride Inn Paradise Shanzu","Silver Rock Beach Malindi","budget honeymoon Kenya","luxury beach resort","couples getaway Kenya"]}},{id:12,title:"One-Day Leadership & Resilience Adventure at Sagana Rapids",slug:"leadership-resilience-adventure-sagana-rapids",excerpt:"A transformative one-day experiential learning program at Sagana Rapids combining white-water rafting, obstacle courses, and mindset workshops to develop leadership, teamwork, and resilience skills.",content:`
    <h1>One-Day Leadership & Resilience Adventure at Sagana Rapids</h1>
    
    <p><strong>Duration:</strong> 1 Day (8:00 AM - 5:00 PM)</p>
    <p><strong>Location:</strong> Sagana Rapids Camp</p>
    <p><strong>Best For:</strong> Corporate teams, student groups, leadership development programs, team-building retreats, organizations focusing on resilience and adaptive leadership</p>
    
    <p>Transform your team's approach to challenges through this immersive one-day adventure program at Sagana Rapids. Combining thrilling white-water rafting with experiential learning activities, this program pushes participants beyond their comfort zones while building essential leadership, communication, and resilience skills in a powerful natural setting.</p>
    
    <h2>Program Philosophy: "Go with the Flow — Discover Your Strength in the Rapids"</h2>
    <p>This program uses the metaphor of river navigation to teach valuable leadership lessons. Just as rafters must read currents, coordinate movements, and adapt to changing conditions, effective teams must communicate clearly, trust each other, and remain resilient amidst challenges.</p>
    
    <h2>Program Flow & Learning Journey</h2>
    
    <h3>8:00 AM - 8:45 AM: Arrival & Icebreaker</h3>
    <p>Participants arrive at Sagana Rapids Camp for welcome briefing, safety protocols, and energizer games designed to build psychological safety and excitement for the day ahead.</p>
    <p><strong>Learning Focus:</strong> Building excitement and psychological safety</p>
    
    <h3>8:45 AM - 9:15 AM: Mindset Kickoff</h3>
    <p>Group reflection session exploring "What does resilience mean to me?" followed by a short talk on fear, growth, and adaptability—setting the emotional foundation for the day's challenges.</p>
    <p><strong>Learning Focus:</strong> Introducing emotional resilience concepts</p>
    
    <h3>9:15 AM - 11:00 AM: White-Water Rafting Challenge</h3>
    <p>Teams navigate the dynamic Sagana River, requiring constant coordination, clear communication, and adaptive decision-making under pressure. This real-time challenge tests teamwork in unpredictable conditions.</p>
    <p><strong>Learning Focus:</strong> Real-time test of teamwork under pressure</p>
    
    <h3>11:00 AM - 11:30 AM: Snack & Reflection Break</h3>
    <p>Nourishment break combined with facilitated discussion circle where participants process emotions, share insights, and connect river experiences to workplace challenges.</p>
    <p><strong>Learning Focus:</strong> Processing emotions and insights</p>
    
    <h3>11:30 AM - 1:00 PM: Obstacle & Trust Course</h3>
    <p>Rotating team challenges including mud pits, balance beams, and other physical obstacles. Each activity emphasizes trust development, clear communication, and perseverance through discomfort.</p>
    <p><strong>Learning Focus:</strong> Building trust and courage in supportive environment</p>
    
    <h3>1:00 PM - 2:00 PM: Lunch & Relaxation</h3>
    <p>Outdoor picnic lunch by the river provides natural restoration time and organic social connection, allowing lessons to integrate before afternoon sessions.</p>
    <p><strong>Learning Focus:</strong> Restoration and bonding</p>
    
    <h3>2:00 PM - 3:00 PM: Mindset Mastery Workshop</h3>
    <p>Guided group session under natural canopy exploring emotional regulation, reframing setbacks, and maintaining mental fitness under stress. Practical tools for workplace application.</p>
    <p><strong>Learning Focus:</strong> Emotional regulation & mental fitness</p>
    
    <h3>3:00 PM - 4:15 PM: Team Leadership Challenge</h3>
    <p>Final creative challenge: teams build a "Raft of Resilience" using limited materials to cross a water course, testing creativity, collaboration, and applied leadership principles.</p>
    <p><strong>Learning Focus:</strong> Creativity, collaboration, and applied leadership</p>
    
    <h3>4:15 PM - 4:45 PM: Closing Circle</h3>
    <p>Reflective session exploring "What did I learn about myself as a leader?" with journaling and gratitude rituals to integrate experiences and insights.</p>
    <p><strong>Learning Focus:</strong> Integration and closure</p>
    
    <h3>4:45 PM - 5:00 PM: Departure</h3>
    <p>Program wrap-up, group photo session, and farewell, ensuring participants leave energized and connected with practical takeaways.</p>
    
    <h2>Core Learning Objectives</h2>
    <ul>
      <li>Develop adaptive leadership skills in uncertain environments</li>
      <li>Enhance team communication and coordination under pressure</li>
      <li>Build personal and team resilience through challenge</li>
      <li>Foster psychological safety and trust within teams</li>
      <li>Practice emotional regulation and mindset management</li>
      <li>Apply creative problem-solving in resource-constrained situations</li>
      <li>Connect experiential learning to workplace applications</li>
    </ul>
    
    <h2>Program Includes</h2>
    <ul>
      <li>Full-day facilitated program with experienced leadership coaches</li>
      <li>White-water rafting equipment and certified river guides</li>
      <li>Obstacle course access and safety supervision</li>
      <li>Morning snack and picnic lunch by the river</li>
      <li>All program materials including reflection journals</li>
      <li>Professional photography of key moments</li>
      <li>Certificate of participation and resilience achievement</li>
      <li>Venue facilities at Sagana Rapids Camp</li>
    </ul>
    
    <h2>Safety & Logistics</h2>
    <ul>
      <li><strong>Group Size:</strong> 10-40 participants (optimal 15-25 for facilitation)</li>
      <li><strong>Safety:</strong> Certified rafting guides, first aid trained facilitators, comprehensive safety briefing</li>
      <li><strong>Physical Requirements:</strong> Moderate fitness level; accommodations available for different abilities</li>
      <li><strong>What to Bring:</strong> Swimwear, change of clothes, towel, sunscreen, water shoes, personal medications</li>
      <li><strong>Facilitators:</strong> Blend of outdoor adventure specialists and leadership development coaches</li>
    </ul>
    
    <h2>Customization Options</h2>
    <p>This program can be tailored to specific organizational needs:</p>
    <ul>
      <li><strong>Corporate Teams:</strong> Focus on workplace application, conflict resolution, innovation</li>
      <li><strong>Educational Groups:</strong> Emphasize peer leadership, communication skills, personal growth</li>
      <li><strong>Non-Profit Organizations:</strong> Highlight collaboration, resourcefulness, community building</li>
      <li><strong>Duration Variations:</strong> Half-day, 2-day intensive, or multi-phase programs available</li>
      <li><strong>Theme Integration:</strong> Can align with specific organizational values or initiatives</li>
    </ul>
    
    <h2>Why Experiential Learning at Sagana Works</h2>
    <p>The river environment provides powerful metaphors for organizational life: navigating uncertainty, reading subtle cues, coordinating effort, and adapting to change. Unlike classroom training, this immersive experience creates visceral memories that reinforce learning and build stronger team bonds through shared accomplishment.</p>
    
    <p>Research shows experiential learning leads to higher retention (up to 75% compared to 5% for lectures) and more profound behavioral change. The combination of physical challenge, emotional processing, and practical application creates transformative outcomes that traditional training cannot match.</p>
    
    <h2>Post-Program Support</h2>
    <ul>
      <li>Digital photo gallery of the experience</li>
      <li>Follow-up reflection guide for team debriefs</li>
      <li>Optional coaching sessions for leadership application</li>
      <li>Measurement tools to assess growth and impact</li>
      <li>Recommendations for sustaining learning in workplace</li>
    </ul>
    
    <h2>Booking Your Leadership Adventure</h2>
    <p>This program requires advance booking to coordinate facilitators, equipment, and venue logistics. Ideal for quarterly team retreats, leadership development initiatives, or organizational transformation kick-offs. Contact Come Travel Kenya Limited to design a customized experience that meets your team's specific development goals.</p>
    
    <p><strong>Move from theoretical leadership to lived experience—where every rapid conquered becomes a metaphor for workplace challenges overcome.</strong></p>
  `,featuredImage:"/itineraries/mice/leadership-resilience-sagana-rapids.png",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"mice",subcategory:"incentive-travel",tags:["leadership-development","team-building","experiential-learning","corporate-retreat","resilience-training","white-water-rafting","adventure-learning","kenya-team-events","outdoor-training","organizational-development"],publishedAt:"2026-01-13",readTime:8,featured:!0,seo:{metaTitle:"Leadership & Resilience Adventure at Sagana Rapids | Kenya Team Building",metaDescription:"Transformative one-day experiential learning program combining white-water rafting, obstacle courses, and mindset workshops to develop leadership, teamwork, and resilience skills for corporate teams.",keywords:["leadership development Kenya","team building adventure","corporate retreat Sagana","experiential learning program","resilience training Kenya","white water rafting team building","outdoor leadership training","Kenya corporate events","adventure learning program","organizational development Kenya"]}},{id:13,title:"Leadership in the Wild - Corporate Resilience Training",slug:"leadership-in-the-wild",excerpt:"High-performance corporate resilience and leadership retreats across Kenya's most demanding environments. Executive programs combining physical challenge, mental toughness, and strategic thinking with seamless MICE delivery.",content:`
    <h1>Leadership in the Wild</h1>
    <h2>Corporate Resilience & Executive Leadership Experiences in Kenya's Most Demanding Environments</h2>
    
    <p><strong>Program Type:</strong> Corporate Resilience Training & Leadership Development</p>
    <p><strong>Destinations:</strong> Multiple circuits across Kenya</p>
    <p><strong>Best For:</strong> Executive teams, sales teams, board retreats, high-potential leaders, organizations navigating transformation</p>
    
    <p>At Come Travel Kenya, we design high-performance leadership and resilience experiences that move beyond conventional team building. Leadership is forged under pressure, clarity, and challenge. Kenya's landscapes provide precisely that — environments where teams reset, leaders sharpen decision-making, and organisations build the resilience required to perform in complex, fast-changing markets.</p>
    
    <p>Our Leadership in the Wild programs use Kenya's geography as a strategic tool — pairing demanding natural terrains with professional facilitation, secure logistics, and executive-level comfort.</p>
    
    <h2>Why Leadership in the Wild</h2>
    <p>Standard team building creates moments but corporate resilience creates advantage. Different organisational challenges require different environments. Whether your team needs physical grit, mental clarity, strategic isolation, or renewed unity, we design leadership experiences that align terrain, psychology, and organisational outcomes.</p>
    
    <p>Each program is tailored to your objectives — leadership development, change management, crisis preparedness, alignment, or renewal.</p>
    
    <h2>Our Leadership Circuits</h2>
    
    <h3>1. High-Altitude Circuit – Grit & Mental Toughness</h3>
    <p><strong>Locations:</strong> Iten, Nanyuki, Mount Kenya</p>
    <p>Kenya's highlands are globally known as the Home of Champions. Here, endurance, discipline, and focus are non-negotiable.</p>
    
    <h4>The Experience</h4>
    <ul>
      <li>High-altitude conditioning and breathwork sessions</li>
      <li>Guided endurance training with elite coaches</li>
      <li>Mindset workshops focused on sustained performance under pressure</li>
      <li>Stamina and breath control development</li>
    </ul>
    
    <p><strong>Ideal for:</strong> Sales teams, high-potential leaders, and organisations navigating rapid growth or transformation.</p>
    
    <h3>2. Wild North Circuit – Strategic Isolation & Survival Intelligence</h3>
    <p><strong>Locations:</strong> Samburu, Meru, Laikipia Conservancies</p>
    <p>In the North, clarity comes from isolation. Resources are finite. Focus is absolute.</p>
    
    <h4>The Experience</h4>
    <ul>
      <li>Strategy and leadership workshops inspired by conservation intelligence</li>
      <li>Wildlife tracking exercises translating to market foresight</li>
      <li>Security simulations and crisis management scenarios</li>
      <li>Environmental awareness applied to business strategy</li>
    </ul>
    
    <p><strong>Ideal for:</strong> Board retreats, crisis leadership training, executive strategy resets.</p>
    
    <h3>3. Coastal Circuit – Adaptability & Flow</h3>
    <p><strong>Locations:</strong> Diani, Watamu, Kilifi</p>
    <p>The ocean teaches adaptability, rhythm, and communication.</p>
    
    <h4>The Experience</h4>
    <ul>
      <li>Water-based leadership challenges and navigation exercises</li>
      <li>Collaborative problem-solving in dynamic environments</li>
      <li>Trust-building through coordinated activities</li>
      <li>Cross-functional communication strengthening</li>
    </ul>
    
    <p><strong>Ideal for:</strong> Cross-functional teams, innovation units, and organisations improving collaboration.</p>
    
    <h3>4. Lake Victoria Circuit – Collaboration & Emerging-Market Leadership</h3>
    <p><strong>Locations:</strong> Kisumu, Rusinga Island, Mfangano Island</p>
    <p>A leadership environment rooted in scale, interdependence, and sustainability.</p>
    
    <h4>The Experience</h4>
    <ul>
      <li>Team navigation exercises on lake waters</li>
      <li>Island-based leadership challenges</li>
      <li>Community-linked programs reflecting emerging market realities</li>
      <li>Blue Economy sustainability focus</li>
    </ul>
    
    <p><strong>Ideal for:</strong> Regional teams, sustainability-focused organisations, development and impact-driven institutions.</p>
    
    <h3>5. Ancestral Frontier – Legacy & Strategic Ownership</h3>
    <p><strong>Locations:</strong> Lake Turkana (Eliye Springs, Central Island, Koobi Fora)</p>
    <p>The Cradle of Mankind offers unparalleled strategic isolation.</p>
    
    <h4>The Experience</h4>
    <ul>
      <li>Ultra-high-level leadership immersion</li>
      <li>Long-term vision development exercises</li>
      <li>Extreme ownership and decision-making under scarcity</li>
      <li>Raw, powerful environment for deep strategic thinking</li>
    </ul>
    
    <p><strong>Ideal for:</strong> Global boards, venture capital partners, ultra-high-net-worth investors, visionary founders.</p>
    
    <h3>6. Great Rift Adventure – Unity & Rapid Decision-Making</h3>
    <p><strong>Locations:</strong> Naivasha (Hell's Gate), Sagana (Tana River)</p>
    <p>High-intensity environments that demand trust and speed.</p>
    
    <h4>The Experience</h4>
    <ul>
      <li>White-water rafting and gorge trekking</li>
      <li>Technical challenges as live metaphors for risk management</li>
      <li>Pressure leadership scenarios</li>
      <li>Team synchronisation exercises</li>
    </ul>
    
    <p><strong>Ideal for:</strong> New departments, project teams under deadlines, organisations rebuilding trust and momentum.</p>
    
    <h2>How We Deliver</h2>
    
    <h3>Executive Retreats</h3>
    <p>Secure luxury villas, private conservancies, and boutique camps offering privacy for sensitive leadership discussions.</p>
    
    <h3>Incentive Excellence</h3>
    <p>Elite reward programs combining performance training, recovery, wellness, and exceptional hospitality.</p>
    
    <h3>Seamless Logistics</h3>
    <p>From high-clearance 4x4 fleets and private charters to discreet on-ground coordination — we remove friction so leaders focus on growth.</p>
    
    <h2>Why Choose CTK for Leadership Programs</h2>
    <ul>
      <li>Expert facilitators, performance coaches & cultural specialists</li>
      <li>Secure logistics in remote and sensitive locations</li>
      <li>Mobile power & satellite connectivity for uninterrupted operations</li>
      <li>Single-point accountability for complex programs</li>
      <li>Experience delivering high-stakes executive travel</li>
    </ul>
    
    <p><strong>We are not trainers. We are the environment architects behind transformational leadership work.</strong></p>
    
    <h2>Plan a Leadership Intervention</h2>
    <p>Which terrain does your leadership team need right now? Contact us to request an Executive Blueprint tailored to your organization's specific challenges and objectives.</p>
  `,featuredImage:"/itineraries/mice/leadership-in-the-wild.png",author:{name:"Lilian Nafula",role:"Tours & Travels Specialist",avatar:"/team/lilian.png"},category:"mice",subcategory:"events-exhibitions",tags:["corporate-resilience","leadership-training","executive-retreats","team-building-kenya","high-performance-training","crisis-leadership","strategic-thinking","corporate-offsites","executive-development","kenya-mice"],publishedAt:"2026-01-15",readTime:10,featured:!0,seo:{metaTitle:"Leadership in the Wild | Corporate Resilience & Executive Retreats in Kenya",metaDescription:"High-performance corporate resilience and leadership retreats across Kenya. Executive programs combining demanding environments with seamless MICE delivery.",keywords:["corporate resilience training","Kenya leadership retreats","executive team building","leadership offsites Kenya","MICE Kenya","high-altitude training","strategic leadership","board retreats Kenya","crisis management training","corporate transformation"]}},{id:14,title:"Champions in Motion - Sports & Performance MICE",slug:"champions-in-motion",excerpt:"Elite sports, performance, and wellness-focused MICE in Kenya. Athlete-first logistics, global event execution, and high-performance travel in Kenya's world-renowned training environments.",content:`
    <h1>Champions in Motion</h1>
    <h2>Elite Sports, Performance, and Wellness Experiences in Kenya's High-Performance Environments</h2>
    
    <p><strong>Program Type:</strong> Sports MICE & Performance Travel</p>
    <p><strong>Destinations:</strong> Multiple high-performance circuits across Kenya</p>
    <p><strong>Best For:</strong> International sports federations, professional teams, corporate performance teams, elite athletes, sports brands</p>
    
    <p>Champions in Motion is our specialist MICE niche for organisations that operate in high-performance, high-pressure environments — where execution, timing, and logistics directly impact results and value performance excellence, physical resilience, and mental clarity.</p>
    
    <p>Kenya is globally recognised for athletic excellence, endurance, and competitive discipline. We translate this legacy into sports-led MICE, performance retreats, and elite event logistics, designed for corporates, professional teams, federations, and global sports brands.</p>
    
    <p><strong>This is not mass sports tourism. It is precision-designed performance travel.</strong></p>
    
    <h2>Why Champions in Motion</h2>
    <p>In today's competitive environments, performance is no longer just technical — it is physical, mental, and emotional. These programs are designed to:</p>
    
    <ul>
      <li>Improve stamina and focus</li>
      <li>Strengthen team discipline and accountability</li>
      <li>Integrate recovery, wellness, and longevity</li>
      <li>Align physical challenge with leadership mindset</li>
    </ul>
    
    <p>Each program balances intensity and restoration, ensuring measurable outcomes without burnout.</p>
    
    <h2>Sports MICE: Performance & Global Event Excellence</h2>
    <p>We provide end-to-end operational management for international sporting events and performance-driven organisations — ensuring athletes, teams, and stakeholders operate in environments built for success.</p>
    
    <h3>The Experience</h3>
    <p>From global competitions to elite training camps, we manage the complex infrastructure behind world-class sport:</p>
    
    <ul>
      <li>Athlete-first accommodation & secure rooming</li>
      <li>Specialised nutritional and recovery logistics</li>
      <li>High-performance transport and movement planning</li>
      <li>Media centres, broadcast coordination & VIP hospitality villages</li>
      <li>Accreditation, protocol, and delegation handling</li>
    </ul>
    
    <p>Whether coordinating the intricate movements of the Safari Rally Kenya or hosting elite athletic delegations in Eldoret, we ensure performance stays centre stage — while we manage the arena.</p>
    
    <h2>Our Performance Circuits</h2>
    
    <h3>1. High-Altitude Performance Circuit</h3>
    <p><strong>Locations:</strong> Iten, Nanyuki, Mount Kenya region</p>
    <p>Train where the world's greatest endurance athletes are made.</p>
    
    <h4>The Experience</h4>
    <ul>
      <li>Guided altitude exposure and acclimatization</li>
      <li>Endurance conditioning with elite trainers</li>
      <li>Breathwork and recovery sessions</li>
      <li>Sports science partner support</li>
      <li>Wellness specialist guidance</li>
    </ul>
    
    <p><strong>Ideal for:</strong> Corporate leadership teams, elite athletes, endurance clubs, and high-performance departments.</p>
    
    <h3>2. Executive Wellness & Recovery Retreats</h3>
    <p><strong>Locations:</strong> Laikipia, Maasai Mara, Mount Kenya conservancies</p>
    <p>Performance requires recovery.</p>
    
    <h4>The Experience</h4>
    <ul>
      <li>Low-impact movement programs</li>
      <li>Guided wellness programs</li>
      <li>Nutrition-led experiences</li>
      <li>Nature-based recovery in private conservancies</li>
      <li>Luxury safari settings with wellness focus</li>
    </ul>
    
    <p><strong>Ideal for:</strong> C-suite leaders, founders, board members, and senior executives.</p>
    
    <h3>3. Corporate Sports & Performance Challenges</h3>
    <p><strong>Locations:</strong> Naivasha, Sagana, Rift Valley</p>
    <p>Purpose-built challenges that test endurance, coordination, and trust.</p>
    
    <h4>The Experience</h4>
    <ul>
      <li>Structured team challenges inspired by elite training</li>
      <li>Rafting, cycling, and trail challenges</li>
      <li>Problem-solving under controlled physical stress</li>
      <li>Performance metrics and team assessment</li>
    </ul>
    
    <p><strong>Ideal for:</strong> Sales teams, regional teams, and performance-driven departments.</p>
    
    <h3>4. Elite Training Camps & Sports Delegations</h3>
    <p><strong>Locations:</strong> Iten, Eldoret, Nairobi, Coast</p>
    <p>Kenya as a global training destination.</p>
    
    <h4>The Experience</h4>
    <ul>
      <li>End-to-end logistics for international teams</li>
      <li>Accommodation and training venue coordination</li>
      <li>Recovery facilities management</li>
      <li>Transport and specialist coordination</li>
      <li>Nutritional support services</li>
    </ul>
    
    <p><strong>Ideal for:</strong> Professional teams, federations, sports institutions, and academies.</p>
    
    <h2>Champions in Motion Program Streams</h2>
    
    <h3>1. International Sports Events & Federations</h3>
    <p>Operational delivery for global competitions, qualifiers, and championships — managing athletes, officials, media, sponsors, and spectators with precision.</p>
    
    <h3>2. Elite Training Camps & Sports Delegations</h3>
    <p>High-altitude training, recovery-led camps, and international team programs supported by Kenya's proven performance environments.</p>
    
    <h3>3. Corporate Performance & Wellness Retreats</h3>
    <p>Executive and leadership programs that apply elite sports principles — endurance, recovery, focus, and discipline — to corporate teams.</p>
    
    <h3>4. Sponsorship & Sports Marketing Activations</h3>
    <p>On-ground logistics and hospitality for global sponsors, brand partners, and sports marketing agencies.</p>
    
    <h2>Why Organisations Choose CTK for Sports MICE</h2>
    <ul>
      <li>Proven experience in complex, high-pressure environments</li>
      <li>Strong relationships with venues, federations, and local authorities</li>
      <li>Athlete-centric logistics and movement planning</li>
      <li>Secure transport, protocol, and delegation services</li>
      <li>Single-point accountability for large-scale operations</li>
    </ul>
    
    <p><strong>We understand that in sport, details decide outcomes.</strong></p>
    
    <h2>Who Champions in Motion Is Designed For</h2>
    <ul>
      <li>International Sports Federations</li>
      <li>Professional and semi-professional teams</li>
      <li>Global sports brands & sponsors</li>
      <li>Sports marketing and events agencies</li>
      <li>Corporates focused on performance & wellness</li>
    </ul>
    
    <p>Programs are bespoke, operationally rigorous, and outcome-driven.</p>
    
    <h2>Plan a Champions in Motion Program</h2>
    <p>Planning a sporting event, elite training camp, or performance-driven retreat in Kenya? Contact us to design your Champions in Motion experience.</p>
  `,featuredImage:"/itineraries/mice/champions-in-motion.jpg",author:{name:"Lilian Nafula",role:"Tours & Travels Specialist",avatar:"/team/lilian.png"},category:"mice",subcategory:"conferences",tags:["sports-mice-kenya","international-sports-events","athlete-logistics","high-altitude-training","performance-travel","corporate-wellness","elite-training-camps","sports-federations","endurance-training","kenya-athletics"],publishedAt:"2026-01-16",readTime:9,featured:!0,seo:{metaTitle:"Champions in Motion | Sports & Performance MICE in Kenya",metaDescription:"Elite sports, performance, and wellness-focused MICE in Kenya. Athlete-first logistics, global event execution, and high-performance travel by a trusted DMC.",keywords:["sports MICE Kenya","international sports events Kenya","athlete logistics Africa","high altitude training Kenya","performance travel Kenya","elite training camps","sports federations Kenya","corporate wellness retreats","endurance training","Kenya athletics"]}},{id:15,title:"Conference + Experience",slug:"conference-experience",excerpt:"Professional conferences and summits in Kenya, enhanced with safari, culture, and destination experiences. Where conferences go beyond the boardroom.",content:`
    <h1>Conference + Experience</h1>
    <h2>Meetings and Conferences Enhanced by Safari, Culture, and Place</h2>
    
    <p><strong>Program Type:</strong> Conference Management & Destination Events</p>
    <p><strong>Destinations:</strong> Multiple conference venues across Kenya</p>
    <p><strong>Best For:</strong> Corporate conferences, professional associations, NGO summits, international event planners, regional gatherings</p>
    
    <p>Conference + Experience is our approach to designing conferences and summits that deliver strong business outcomes while creating memorable, destination-led experiences.</p>
    
    <p>We believe conferences should not end when the sessions close. By integrating Kenya's landscapes, culture, and leisure offerings, we transform traditional meetings into engaging, energising, and high-impact events.</p>
    
    <h2>Why Conference + Experience</h2>
    <p>Many conferences struggle with:</p>
    
    <ul>
      <li>Delegate fatigue</li>
      <li>Low engagement beyond sessions</li>
      <li>Limited networking outcomes</li>
      <li>Forgettable destinations</li>
    </ul>
    
    <p>Kenya offers a powerful alternative. By combining professional conference management with curated experiences, organisations achieve:</p>
    
    <ul>
      <li>Higher delegate participation</li>
      <li>Stronger networking and relationship-building</li>
      <li>Better attendance and retention</li>
      <li>A conference that people remember — and talk about</li>
    </ul>
    
    <h2>Our Conference + Experience Model</h2>
    <p>We manage conferences end-to-end, while layering in experiences that align with your objectives.</p>
    
    <h3>Professional Conference Delivery</h3>
    <ul>
      <li>Venue sourcing & contracting</li>
      <li>Conference room setup & AV coordination</li>
      <li>Delegate registration & logistics</li>
      <li>Accommodation & group rooming</li>
      <li>Airport transfers & on-ground coordination</li>
    </ul>
    
    <h3>The Experience Layer</h3>
    <ul>
      <li>Welcome receptions & cultural evenings</li>
      <li>Safari extensions (before or after the conference)</li>
      <li>Coastal networking retreats</li>
      <li>Team-building or leadership add-ons</li>
      <li>Curated city, conservation, or community experiences</li>
    </ul>
    
    <p>Every experience is optional, intentional, and aligned — never distracting from the core agenda.</p>
    
    <h2>Ideal Conference Formats</h2>
    
    <h3>City-Based Conferences with Extensions</h3>
    <p>Host your main conference in Nairobi, then offer:</p>
    <ul>
      <li>Safari add-ons in Maasai Mara or Amboseli</li>
      <li>Leadership or wellness retreats in Naivasha or Laikipia</li>
      <li>Cultural and conservation experiences</li>
    </ul>
    
    <h3>Resort & Destination Conferences</h3>
    <p>Conduct meetings in:</p>
    <ul>
      <li>Coastal resorts (Diani, Watamu, Kilifi)</li>
      <li>Safari lodges with meeting facilities</li>
      <li>Private conservancies for exclusive gatherings</li>
    </ul>
    
    <h3>Association & Regional Summits</h3>
    <p>Multi-country delegates, complex logistics, and layered programming — delivered through one experienced DMC partner.</p>
    
    <h2>Conference Venues in Kenya</h2>
    
    <h3>Nairobi Conference Venues</h3>
    <ul>
      <li>Modern hotels with large ballrooms (500-2000 capacity)</li>
      <li>Tech-ready spaces with high-speed connectivity</li>
      <li>Central locations near international airport</li>
      <li>Multiple accommodation options at various price points</li>
    </ul>
    
    <h3>Coastal Conference Venues</h3>
    <ul>
      <li>Beach resorts with meeting facilities</li>
      <li>Relaxed atmosphere combining business and leisure</li>
      <li>Indoor and outdoor event spaces</li>
      <li>Team-building and water activities</li>
    </ul>
    
    <h3>Safari Lodge Conference Venues</h3>
    <ul>
      <li>Unique wilderness settings</li>
      <li>Boutique meeting spaces for smaller groups</li>
      <li>Game drives and safari experiences</li>
      <li>Private and exclusive environments</li>
    </ul>
    
    <h2>Sample Conference Packages</h2>
    
    <h3>3-Day City Conference Package</h3>
    <ul>
      <li>2 nights Nairobi accommodation</li>
      <li>Full conference room setup with AV</li>
      <li>Tea breaks, lunches, and gala dinner</li>
      <li>Airport transfers for all delegates</li>
      <li>Optional: 2-day safari extension</li>
    </ul>
    
    <h3>5-Day Destination Conference</h3>
    <ul>
      <li>3 nights coastal resort</li>
      <li>Conference facilities with ocean views</li>
      <li>All meals and beverages</li>
      <li>Welcome reception and closing dinner</li>
      <li>Team-building activities included</li>
      <li>Optional cultural excursions</li>
    </ul>
    
    <h2>Who This Is Designed For</h2>
    <ul>
      <li>Corporates & multinational organisations</li>
      <li>Professional associations & federations</li>
      <li>NGOs & development organisations</li>
      <li>Government & institutional conferences</li>
      <li>International event planners & DMC partners</li>
    </ul>
    
    <p>From 20-delegate strategy meetings to 2,000+ person conferences, our approach scales with precision.</p>
    
    <h2>Why CTK for Conferences in Kenya</h2>
    <ul>
      <li>Kenya-based Destination Management Company</li>
      <li>Strong relationships with hotels, venues, and suppliers</li>
      <li>Experience handling complex group movements</li>
      <li>Reliable logistics and on-ground teams</li>
      <li>Ability to seamlessly integrate leisure and business</li>
    </ul>
    
    <p><strong>We ensure your conference runs professionally — and leaves a lasting impression.</strong></p>
    
    <h2>Plan a Conference in Kenya</h2>
    <p>Looking to host a conference that delivers more than presentations? Contact us to design your Conference + Experience program.</p>
  `,featuredImage:"/itineraries/mice/conference-experience.jpg",author:{name:"Lilian Nafula",role:"Tours & Travels Specialist",avatar:"/team/lilian.png"},category:"mice",subcategory:"meetings",tags:["conference-management-kenya","MICE-kenya","destination-conferences","corporate-conferences-nairobi","conference-safari-packages","professional-associations","regional-summits","event-planning-kenya","business-events","conference-venues"],publishedAt:"2026-01-17",readTime:8,featured:!0,seo:{metaTitle:"Conference + Experience | Meetings & Events in Kenya | Come Travel Kenya",metaDescription:"Professional conferences and summits in Kenya, enhanced with safari, culture, and destination experiences. Delivered by a trusted Destination Management Company.",keywords:["conference management Kenya","MICE Kenya","destination conferences Kenya","corporate conferences Nairobi","conference safari packages","professional associations","business events Kenya","event planning","summit management","Kenya DMC"]}},{id:16,title:"Impact & Purpose MICE",slug:"impact-purpose-mice",excerpt:"Purpose-driven MICE and business travel in Kenya. CSR, ESG, and community-integrated conferences, incentive-travel, and retreats that align performance with responsibility.",content:`
    <h1>Impact & Purpose MICE</h1>
    <h2>Purpose-Driven Meetings, Incentive-travel, and Business Travel Designed with Integrity</h2>
    
    <p><strong>Program Type:</strong> Impact-Driven MICE & ESG Business Travel</p>
    <p><strong>Destinations:</strong> Community conservancies, social enterprises, and sustainable destinations across Kenya</p>
    <p><strong>Best For:</strong> Corporates with ESG commitments, NGOs, foundations, multinationals, associations with social mandates</p>
    
    <p>Impact & Purpose MICE is our specialised approach to designing business events and travel programs that align performance with responsibility. Today's organisations are expected to deliver results — and demonstrate values. Kenya offers a rare opportunity to integrate strategy, learning, community engagement, and conservation into meaningful MICE programs that leave a positive footprint.</p>
    
    <p><strong>We design programs where purpose is embedded, not staged.</strong></p>
    
    <h2>Why Impact & Purpose MICE</h2>
    <p>Purpose-driven business travel is no longer optional. Organisations increasingly seek:</p>
    
    <ul>
      <li>ESG-aligned experiences</li>
      <li>Authentic community engagement</li>
      <li>Measurable social and environmental impact</li>
      <li>Meaningful incentive-travel beyond luxury</li>
    </ul>
    
    <p>Kenya's communities, conservation landscapes, and social enterprises provide powerful settings for responsible, high-impact MICE programs that inspire teams while contributing positively.</p>
    
    <h2>Our Impact & Purpose Approach</h2>
    <p>Every Impact & Purpose program is built around three principles:</p>
    
    <h3>Authenticity</h3>
    <p>Real communities, real conservation partners, real engagement — not performative CSR.</p>
    
    <h3>Alignment</h3>
    <p>Experiences are aligned to organisational values, ESG goals, and learning outcomes.</p>
    
    <h3>Professional Delivery</h3>
    <p>Impact does not replace professionalism. All programs are delivered with full MICE-level logistics, comfort, and coordination.</p>
    
    <h2>Types of Impact & Purpose Programs</h2>
    
    <h3>CSR-Integrated Conferences & Retreats</h3>
    <p>Conferences and leadership retreats that include structured community or conservation engagement as part of the agenda.</p>
    
    <h3>ESG & Sustainability Incentive-travel</h3>
    <p>Incentive programs designed around conservation, climate action, education, or community development — without compromising comfort or quality.</p>
    
    <h3>NGO & Development Sector Meetings</h3>
    <p>Regional meetings, donor summits, and field-based programs for NGOs and development organisations operating in Kenya and East Africa.</p>
    
    <h3>Corporate Volunteering & Learning Journeys</h3>
    <p>Short, well-designed engagement experiences that focus on skills transfer, knowledge exchange, or targeted support — not disruption.</p>
    
    <h2>Impact Environments Across Kenya</h2>
    <p>We curate purpose-driven experiences across Kenya's diverse regions, including:</p>
    
    <ul>
      <li>Community conservancies and wildlife protection initiatives</li>
      <li>Cultural heritage and indigenous knowledge programs</li>
      <li>Rural innovation and social enterprise hubs</li>
      <li>Conservation-linked safari regions</li>
      <li>Coastal and lake-based sustainability initiatives</li>
    </ul>
    
    <p>Each location is carefully selected to ensure ethical engagement, safety, and long-term benefit.</p>
    
    <h2>Sample Impact & Purpose Programs</h2>
    
    <h3>Conservation Leadership Retreat</h3>
    <p><strong>Duration:</strong> 3-5 days</p>
    <p><strong>Location:</strong> Laikipia Conservancy</p>
    
    <ul>
      <li>Executive accommodation in eco-lodges</li>
      <li>Leadership workshops with conservation context</li>
      <li>Wildlife tracking and anti-poaching insights</li>
      <li>Community visit and knowledge exchange</li>
      <li>Carbon-offset travel included</li>
    </ul>
    
    <h3>Community Development Incentive</h3>
    <p><strong>Duration:</strong> 4-6 days</p>
    <p><strong>Location:</strong> Maasai Mara Community Conservancy</p>
    
    <ul>
      <li>Luxury tented camp accommodation</li>
      <li>Game drives and safari experiences</li>
      <li>Community school visit and project support</li>
      <li>Cultural exchange with Maasai communities</li>
      <li>Skills workshop or resource contribution</li>
    </ul>
    
    <h3>Coastal Sustainability Summit</h3>
    <p><strong>Duration:</strong> 3-4 days</p>
    <p><strong>Location:</strong> Watamu Marine Conservation Area</p>
    
    <ul>
      <li>Beach resort conference facilities</li>
      <li>Marine conservation presentations</li>
      <li>Coral restoration project visit</li>
      <li>Beach clean-up and ocean awareness activities</li>
      <li>Sustainable seafood dining experiences</li>
    </ul>
    
    <h2>ESG Impact Metrics</h2>
    <p>We provide transparent reporting on program impact including:</p>
    
    <ul>
      <li>Community benefit distribution</li>
      <li>Conservation contributions</li>
      <li>Carbon footprint calculations</li>
      <li>Local employment created</li>
      <li>Skills transfer outcomes</li>
    </ul>
    
    <h2>Who This Is Designed For</h2>
    <ul>
      <li>Corporates with ESG and sustainability commitments</li>
      <li>NGOs, foundations, and development agencies</li>
      <li>Multinationals hosting regional impact forums</li>
      <li>Associations and institutions with social mandates</li>
      <li>Leadership teams seeking purpose-driven alignment</li>
    </ul>
    
    <p>Programs range from half-day integrations to multi-day immersive journeys.</p>
    
    <h2>Why CTK for Impact & Purpose MICE</h2>
    <ul>
      <li>Deep local knowledge and vetted partners</li>
      <li>Ethical, community-first engagement frameworks</li>
      <li>Strong logistics and risk management</li>
      <li>Ability to balance impact with executive comfort</li>
      <li>Transparent planning and delivery</li>
    </ul>
    
    <p><strong>We ensure that impact initiatives are meaningful, respectful, and professionally executed.</strong></p>
    
    <h2>Design a Purpose-Driven MICE Program</h2>
    <p>Looking to align your next meeting, incentive, or retreat with purpose? Contact us to design an Impact & Purpose experience that delivers both business outcomes and positive change.</p>
  `,featuredImage:"/itineraries/mice/impact-purpose-mice.png",author:{name:"Lilian Nafula",role:"Tours & Travels Specialist",avatar:"/team/lilian.png"},category:"mice",subcategory:"meetings",tags:["impact-mice-kenya","CSR-travel-kenya","ESG-business-travel","NGO-conferences-kenya","purpose-driven-incentive-travel","community-engagement","conservation-retreats","sustainable-MICE","responsible-tourism","corporate-social-responsibility"],publishedAt:"2026-01-18",readTime:9,featured:!0,seo:{metaTitle:"Impact & Purpose MICE | ESG & CSR Business Travel in Kenya",metaDescription:"Purpose-driven MICE and business travel in Kenya. CSR, ESG, and community-integrated conferences, incentive-travel, and retreats delivered by a trusted DMC.",keywords:["impact MICE Kenya","CSR travel Kenya","ESG business travel","NGO conferences Kenya","purpose-driven incentive-travel","sustainable tourism","community engagement","conservation travel","responsible MICE","corporate social responsibility"]}},{id:17,title:"Silicon Savannah - Tech MICE & Bleisure",slug:"silicon-savannah",excerpt:"Kenya's specialist DMC for tech MICE and Bleisure. Supporting founders, venture capitalists, and corporate teams across Nairobi, Konza, the Coast, and remote innovation hubs.",content:`
    <h1>Silicon Savannah</h1>
    <h2>Innovation, Investment, and Tech-Driven MICE Experiences in Kenya</h2>
    
    <p><strong>Program Type:</strong> Tech MICE & Bleisure (Business + Leisure)</p>
    <p><strong>Destinations:</strong> Nairobi, Konza Technopolis, Coast, Rift Valley, remote tech-ready locations</p>
    <p><strong>Best For:</strong> Venture capitalists, founders, startup teams, tech corporates, innovation hubs, accelerators</p>
    
    <p>At Come Travel Kenya, we deliver Silicon Savannah experiences — purpose-built MICE and business travel programs designed for the global tech ecosystem.</p>
    
    <p>From boardrooms in Nairobi to satellite-connected retreats in the Rift Valley and along the Coast, we bridge high-stakes business with high-impact environments, enabling founders, investors, and corporate teams to work, connect, and reset — seamlessly.</p>
    
    <h2>Kenya's Tech Ecosystem, Managed End-to-End</h2>
    <p>Nairobi is the heartbeat of African innovation. It hosts regional headquarters, venture capital firms, accelerators, and fast-scaling startups — all within a city that can transition from deal-making to wildlife, coastlines, and conservation landscapes in hours.</p>
    
    <p>We understand that tech leaders don't just need accommodation. They need performance environments. Our Silicon Savannah programs are built around Bleisure (Business + Leisure) — ensuring a frictionless transition between meetings, strategy sessions, ecosystem engagement, and restorative escapes.</p>
    
    <p>Our operations extend beyond Nairobi to:</p>
    <ul>
      <li>Konza Technopolis</li>
      <li>The Coast (Mombasa, Watamu, Kilifi)</li>
      <li>The Rift Valley & Nyanza</li>
      <li>Remote, secure retreat locations across Kenya</li>
    </ul>
    
    <h2>Silicon Savannah MICE Solutions</h2>
    <p>We deliver the full MICE spectrum through a tech-focused lens:</p>
    
    <h3>Meetings & Boardrooms</h3>
    <p>Curated executive meeting spaces in Nairobi, Westlands, Upper Hill, and Konza — with reliable connectivity, premium AV, and discreet environments for confidential discussions.</p>
    
    <h3>Incentive & Bleisure Retreats</h3>
    <p>Reward teams and partners with "code-free" retreats — from luxury safari camps to private coastal villas — supported by mobile power and satellite internet where required.</p>
    
    <h3>Conferences & Tech Summits</h3>
    <p>End-to-end management for innovation summits, expos, and ecosystem gatherings, including venue sourcing, delegate logistics, and international guest handling.</p>
    
    <h3>Product Launches & Demo Days</h3>
    <p>From fintech launches to startup pitch events, we manage branding, logistics, VIP protocol, and on-ground execution.</p>
    
    <h2>Why Global Tech Organisations Choose CTK</h2>
    
    <h3>Connected Logistics</h3>
    <p>Executive vehicles equipped with Wi-Fi, charging ports, and professional chauffeurs who understand productive, discreet travel.</p>
    
    <h3>Protocol & Security</h3>
    <p>VIP airport meet-and-greet, fast-track visa support, secure transfers, and privacy-focused movement for high-profile guests.</p>
    
    <h3>The "4-Hour Safari" Advantage</h3>
    <p>A uniquely Kenyan edge — moving from a Nairobi boardroom to a wildlife experience within the same day.</p>
    
    <h3>Remote Work Infrastructure</h3>
    <p>Mobile power, satellite connectivity, and redundancy planning for deep-work retreats in remote locations.</p>
    
    <h2>Tech-Ready Venues in Kenya</h2>
    
    <h3>Nairobi "Power Hubs"</h3>
    <p><strong>Recommended for:</strong> Conferences, pitch events, and networking</p>
    
    <ul>
      <li><strong>GTC & Pan Pacific (Westlands):</strong> Ultra-modern, high-speed fiber, walkable to VC offices</li>
      <li><strong>Radisson Blu (Upper Hill):</strong> Secure, massive capacity, diplomatic-tech summits</li>
      <li><strong>Sankara (Autograph Collection):</strong> Design-forward, perfect for intimate pitch dinners</li>
      <li><strong>Ikigai & Nairobi Garage:</strong> Creative spaces for demo days and startup mixers</li>
    </ul>
    
    <h3>Remote-Office Retreats</h3>
    <p><strong>Recommended for:</strong> Deep work, strategy sessions, quarterly planning</p>
    
    <ul>
      <li><strong>Angama Mara:</strong> Starlink-equipped, Rift Valley views, design sprints in the bush</li>
      <li><strong>Fairmont Mount Kenya:</strong> High-altitude clarity for leadership planning</li>
      <li><strong>Vipingo Ridge (Kilifi):</strong> Private airstrip, high-security founder retreats</li>
    </ul>
    
    <h2>The Silicon Savannah "Frictionless" Checklist</h2>
    <p>Before booking your Kenya mission, ensure your partner handles these 5 pillars:</p>
    
    <ol>
      <li><strong>Low-Latency Connectivity:</strong> Dedicated fiber or Starlink backup</li>
      <li><strong>Executive Logistics:</strong> Vehicles with 4G/5G Wi-Fi for mobile productivity</li>
      <li><strong>Protocol Fast-Track:</strong> JKIA airport clearance in under 15 minutes</li>
      <li><strong>Security Integration:</strong> Green Zone venues with 24/7 protection</li>
      <li><strong>Power Redundancy:</strong> Instant-on generators for zero-interrupt sessions</li>
    </ol>
    
    <h2>Who Silicon Savannah Is Designed For</h2>
    <ul>
      <li>Venture Capitalists & Private Equity firms</li>
      <li>Founders & startup leadership teams</li>
      <li>Multinational tech companies & regional HQs</li>
      <li>Innovation hubs & accelerators</li>
      <li>Development & impact organisations funding technology</li>
    </ul>
    
    <p>Whether you are conducting due diligence, hosting a regional summit, or designing a founder retreat, we operate as your ground partner in Kenya.</p>
    
    <h2>Sample Silicon Savannah Programs</h2>
    
    <h3>VC Due Diligence Mission (3-5 days)</h3>
    <ul>
      <li>VIP airport fast-track and secure transfers</li>
      <li>Executive hotel in Westlands with fiber connectivity</li>
      <li>Private boardrooms for confidential meetings</li>
      <li>Startup ecosystem tours (iHub, Nairobi Garage)</li>
      <li>Optional 1-day Maasai Mara safari experience</li>
    </ul>
    
    <h3>Founder Deep-Work Retreat (5-7 days)</h3>
    <ul>
      <li>Remote luxury lodge with Starlink connectivity</li>
      <li>Facilitated strategy sessions and planning workshops</li>
      <li>Morning game drives for mental reset</li>
      <li>Evening team dinners under African skies</li>
      <li>Mobile office infrastructure throughout</li>
    </ul>
    
    <h3>Tech Summit Execution (2-4 days)</h3>
    <ul>
      <li>Full conference venue management</li>
      <li>Delegate registration and accreditation</li>
      <li>AV, stage, and broadcast coordination</li>
      <li>VIP protocol for speakers and sponsors</li>
      <li>Networking events and demo day logistics</li>
    </ul>
    
    <h2>Download: Silicon Savannah Site-Selection Guide</h2>
    <p>A curated guide to Kenya's most tech-ready venues, secure hotels, and innovation hubs — designed for investors, corporates, and conference planners.</p>
    
    <h2>Target Markets for Silicon Savannah</h2>
    
    <h3>Tier 1: Global Capital Hubs</h3>
    <ul>
      <li><strong>United States:</strong> San Francisco/Silicon Valley, New York City, Austin, Boston</li>
      <li><strong>United Kingdom:</strong> London</li>
      <li><strong>United Arab Emirates:</strong> Dubai, Abu Dhabi</li>
      <li><strong>European Union:</strong> Berlin, Paris, Stockholm</li>
    </ul>
    
    <h3>Tier 2: African Tech Corridors</h3>
    <ul>
      <li><strong>Nigeria:</strong> Lagos</li>
      <li><strong>South Africa:</strong> Cape Town, Johannesburg</li>
      <li><strong>Egypt:</strong> Cairo</li>
    </ul>
    
    <h3>Tier 3: Specialized Markets</h3>
    <ul>
      <li><strong>Israel:</strong> Tel Aviv (Agritech, Cybersecurity)</li>
      <li><strong>India:</strong> Bangalore, Mumbai (Tech giants viewing Nairobi as African gateway)</li>
    </ul>
    
    <h2>Plan Your Silicon Savannah Experience</h2>
    <p><strong>Don't just visit the Silicon Savannah. Own it.</strong></p>
    
    <p>Contact us for a custom site-selection audit or B2B proposal for your next venture capital mission, tech summit, or founder retreat in Kenya.</p>
  `,featuredImage:"/itineraries/mice/silicon-savannah.jpg",author:{name:"Lilian Nafula",role:"Tours & Travels Specialist",avatar:"/team/lilian.png"},category:"mice",subcategory:"incentive-travel",tags:["silicon-savannah-kenya","tech-MICE-kenya","venture-capital-travel","bleisure-kenya","konza-technopolis","tech-retreats-kenya","startup-ecosystem","founder-retreats","innovation-hubs","nairobi-tech"],publishedAt:"2026-01-19",readTime:11,featured:!0,seo:{metaTitle:"Silicon Savannah & Tech Bleisure in Kenya | Come Travel Kenya",metaDescription:"Kenya's specialist DMC for tech MICE and Bleisure. We support founders, venture capitalists, and corporate teams across Nairobi, Konza, the Coast, and remote innovation hubs.",keywords:["Silicon Savannah Kenya","tech MICE Kenya","venture capital travel Nairobi","Bleisure Kenya","Konza Technopolis logistics","tech retreats Kenya","startup ecosystem","founder missions","tech-ready venues","innovation travel"]}},{id:18,title:"Maasai Mara Road Safari",slug:"masai-mara-road-safari-3-days-8-adults",excerpt:"An affordable 3-day road safari to the Masai Mara for a group of 8 adults, featuring private game drives, comfortable lodge accommodation at Mara Sopa, and scenic drives through the Great Rift Valley.",content:`
    <h1>Maasai Mara Road Safari</h1>
    
    <p><strong>Duration:</strong> 3 Days, 2 Nights</p>
    <p><strong>Location:</strong> Masai Mara National Reserve</p>
    <p><strong>Group Size:</strong> 8 Adults (2 triple rooms + 2 single rooms)</p>
    <p><strong>Best For:</strong> Groups of friends, extended families, corporate teams, budget-conscious travelers, first-time safari visitors wanting an authentic Mara experience</p>
    
    <p>Experience the magic of Africa's most famous wildlife reserve with this efficient 3-day road safari designed specifically for a group of eight adults. Journey through the breathtaking Great Rift Valley to the iconic Masai Mara, where private game drives, comfortable lodge accommodation, and the thrill of wilderness await your group adventure.</p>
    
    <h2>Safari Highlights</h2>
    <ul>
      <li>Private 4x4 Landcruiser with pop-up roof exclusively for your group of 8</li>
      <li>Comfortable accommodation at Mara Sopa Lodge with scenic views</li>
      <li>Full board meals throughout your safari stay</li>
      <li>Private game drives with dedicated English-speaking driver/guide</li>
      <li>Scenic drive through the Great Rift Valley with photo stops</li>
      <li>Flexible game viewing schedule tailored to your group's interests</li>
      <li>All park entry and conservation fees included</li>
    </ul>
    
    <h2>Detailed Itinerary</h2>
    
    <h3>Day 1: Nairobi to Masai Mara</h3>
    <p>Your group adventure begins with an early morning pick-up from your Nairobi residence. After a briefing from your driver/guide, embark on the scenic 5-hour drive to the Masai Mara, descending into the Great Rift Valley with photo stops at viewpoints. Arrive at Mara Sopa Lodge in time for lunch and check into your rooms (2 triple rooms + 2 singles). At 15:30, head out for your first afternoon game drive in your private vehicle, searching for the Big Five as you familiarize yourselves with the iconic Mara landscape. Return to the lodge for dinner and overnight, sharing stories of your first wildlife sightings.</p>
    
    <h3>Day 2: Full Day Masai Mara Exploration</h3>
    <p>After breakfast, embark on a full day of game viewing across the vast Mara plains. Your private vehicle allows for flexible scheduling—pause for extended wildlife viewing, adjust routes based on animal movements, and enjoy a packed lunch at a scenic spot within the reserve. Search for lions, leopards, cheetahs, elephants, buffalo, and the abundant plains game that make the Mara world-famous. Return to the lodge in the evening for dinner and relaxation, comparing photographs and highlights from the day.</p>
    
    <h3>Day 3: Final Game Viewing & Return to Nairobi</h3>
    <p>Enjoy a final breakfast at the lodge before checking out at 10:00. Begin your return journey to Nairobi, with possible en-route wildlife viewing as you exit the reserve. Arrive back in Nairobi by approximately 16:00, where you'll be dropped at your residence or the airport with memories of an unforgettable group safari experience.</p>
    
    <h2>Accommodation: Mara Sopa Lodge</h2>
    <p>Perched on the slopes of the Oloolaimutia Valley, Mara Sopa Lodge offers comfortable accommodation with traditional African design elements. The lodge features spacious rooms with private balconies overlooking the reserve, a swimming pool, restaurant, and bar area. Your group will occupy 2 triple rooms and 2 single rooms, providing comfortable lodging after days of wildlife viewing.</p>
    
    <h2>Package Includes</h2>
    <ul>
      <li><strong>Package Rate:</strong> Starting from $690 per person sharing in triple room ($825 single supplement)</li>
      <li>2 nights accommodation at Mara Sopa Lodge (2 triple + 2 single rooms)</li>
      <li>All meals: 2 breakfasts, 2 lunches, 2 dinners</li>
      <li>Private 4x4 Landcruiser with pop-up roof exclusively for your group</li>
      <li>Services of experienced English-speaking driver/guide throughout</li>
      <li>All Masai Mara National Reserve park entry and conservation fees</li>
      <li>Private game drives as per itinerary</li>
      <li>All road transfers: Nairobi to Masai Mara and return</li>
      <li>Bottled drinking water in vehicle during game drives</li>
    </ul>
    
    <h2>Group-Specific Features</h2>
    <ul>
      <li>Exclusive Safari vehicle</li>
      <li>Accommodation configured for group dynamics (triple and single rooms)</li>
      <li>Flexible game drive scheduling based on group preferences</li>
      <li>Social dining experiences at the lodge</li>
      <li>Shared experiences that build group cohesion and memories</li>
      <li>Cost-effective pricing through group sharing arrangements</li>
    </ul>
    
    <h2>Wildlife Viewing Expectations</h2>
    <p>March offers excellent wildlife viewing in the Masai Mara with:</p>
    <ul>
      <li>High predator activity with lions, leopards, and cheetahs frequently seen</li>
      <li>Large herds of elephants and buffalo</li>
      <li>Resident populations of wildebeest and zebra (migration typically July-October)</li>
      <li>Over 450 bird species including numerous raptors and seasonal migrants</li>
      <li>Excellent photographic opportunities with green landscapes after rains</li>
      <li>Less crowded than peak season months</li>
    </ul>
    
    <h2>Travel Practicalities</h2>
    <ul>
      <li><strong>Travel Period:</strong> March 2026 (shoulder season with good conditions)</li>
      <li><strong>Road Conditions:</strong> Mix of paved and unpaved roads; 4x4 vehicle essential</li>
      <li><strong>Driving Time:</strong> Approximately 5 hours each way with stops</li>
      <li><strong>Meal Plan:</strong> Full board at lodge (all meals included)</li>
      <li><strong>Physical Level:</strong> Easy; suitable for all ages and fitness levels</li>
      <li><strong>Group Coordination:</strong> Single payment and planning for entire group</li>
    </ul>
    
    <h2>Exclusions</h2>
    <ul>
      <li>International flights and visas</li>
      <li>Tips and gratuities for driver/guide and lodge staff</li>
      <li>Travel insurance</li>
      <li>Drinks at the lodge (payable directly)</li>
      <li>Personal expenses and souvenirs</li>
      <li>Optional activities not specified in itinerary</li>
    </ul>
    
    <h2>Why This Group Safari Works</h2>
    <p>This itinerary offers exceptional value for groups of eight by maximizing shared resources. The private vehicle dedicated to your group provides flexibility and privacy that shared vehicles cannot match. Road transfer (rather than flights) keeps costs reasonable while offering the scenic experience of driving through the Great Rift Valley—an attraction in itself.</p>
    
    <p>Mara Sopa Lodge provides comfortable, reliable accommodation at a price point that makes extended group travel feasible. The combination of private game drives and group accommodation creates the perfect balance of shared experiences and comfortable logistics for friends or colleagues traveling together.</p>
    
    <p>Perfect for milestone celebrations, team-building retreats, or simply groups of friends wanting to experience the African wilderness together without the complexity of coordinating multiple individual bookings.</p>
    
    <h2>Booking Information</h2>
    <p>This group safari requires advance booking to secure appropriate vehicle and room configurations for eight adults. March 2026 offers excellent value with good wildlife viewing conditions. Contact Come Travel Kenya Limited to coordinate booking for your entire group and begin planning your shared Masai Mara adventure.</p>
    
    <p><strong>Share the thrill of lion sightings, the wonder of vast herds, and the magic of African sunsets with your closest friends or colleagues on this unforgettable group safari.</strong></p>
  `,featuredImage:"/itineraries/safaris/masai-mara-group-road-safari-3-days.jpg",author:{name:"Margaret Wangechi",role:"Tours & Safaris Specialist",avatar:"/team/wangechi.jpg"},category:"tours-safaris",subcategory:"tembea-kenya",tags:["group-safari","masai-mara-road-trip","friends-safari","budget-safari-kenya","corporate-retreat-safari","family-reunion-trip","private-game-drives","mara-sopa-lodge","8-person-safari","great-rift-valley-drive"],publishedAt:"2026-01-13",readTime:7,featured:!1,seo:{metaTitle:"Masai Mara Group Safari | 3-Day Road Trip with Private Game Drives",metaDescription:"Affordable 3-day road safari to Masai Mara featuring private vehicle, Mara Sopa Lodge accommodation, and exclusive game drives. Perfect for groups of friends or colleagues.",keywords:["group safari Kenya","Masai Mara friends trip","8 person safari package","road safari from Nairobi","private game drives group","budget group travel Kenya","corporate safari retreat","Mara Sopa Lodge group","Great Rift Valley drive","affordable group adventure"]}},{id:19,title:"Wildlife & Conservancy Safaris",slug:"wildlife-conservancy-safaris-kenya",excerpt:"Low-density wildlife encounters in Kenya's most protected and privately managed landscapes — designed for travelers who value space, silence, and substance over crowded game-drive circuits.",content:`
      <h1>Wildlife & Conservancy Safaris</h1>
      <h2>Low-density wildlife encounters in Kenya's most protected and privately managed landscapes.</h2>

      <p>Our wildlife safaris are designed for travelers who value space, silence, and substance. Instead of crowded game-drive circuits, we focus on private and community conservancies where wildlife viewing is more intimate, rules are more flexible, and tourism directly supports conservation and local livelihoods.</p>
      <p>These are safaris for travelers who want to be present — not rush from sighting to sighting.</p>

      <h2>Why Conservancy-Led Safaris</h2>
      <p>Private and community conservancies offer a fundamentally different safari experience from public parks.</p>
      <p>What makes them special:</p>
      <ul>
        <li>Fewer vehicles and lower guest density</li>
        <li>Flexible game-viewing (off-road driving where permitted)</li>
        <li>Walking safaris and night drives</li>
        <li>Deeper conservation and community engagement</li>
        <li>Highly trained guides with time to interpret behavior and ecology</li>
      </ul>
      <p>The result is wildlife encounters that feel unhurried, immersive, and personal.</p>

      <h2>Our Wildlife Safari Style</h2>
      <p>Our Wildlife & Conservancy Safaris are built around quality rather than quantity. Expect:</p>
      <ul>
        <li>Longer stays in fewer locations</li>
        <li>Expert guiding and interpretation</li>
        <li>Private or exclusive-use vehicles</li>
        <li>Carefully selected camps and lodges</li>
        <li>Time for reflection, photography, and learning</li>
      </ul>
      <p>Whether you are seeing wildlife for the first time or returning to Kenya for a deeper experience, we design safaris that allow you to slow down and truly observe.</p>

      <h2>Key Conservancy Regions We Work With</h2>

      <h3>Laikipia & Northern Kenya Conservancies</h3>
      <p>A mosaic of private and community lands known for varied wildlife, dramatic landscapes, and strong conservation models.</p>
      <p><strong>Ideal for:</strong> Walking safaris • Conservation-led travel • Photography • Repeat visitors</p>

      <h3>Private Mara Conservancies</h3>
      <p>Bordering the Maasai Mara ecosystem but operating independently, these conservancies offer exclusive access and fewer vehicles.</p>
      <p><strong>Ideal for:</strong> High-quality wildlife viewing • Night drives • Honeymoons • Fly-in safaris</p>

      <h3>Rift Valley & Central Kenya Conservancies</h3>
      <p>Less-visited landscapes combining wildlife, birdlife, and scenic beauty.</p>
      <p><strong>Ideal for:</strong> Quiet wildlife experiences • Combined lake and safari journeys • Slow travel</p>

      <h2>Wildlife Experiences You Can Enjoy</h2>
      <p>Depending on location and season, experiences may include:</p>
      <ul>
        <li>Game drives in low-density wildlife areas</li>
        <li>Walking safaris with armed, expert guides</li>
        <li>Night game drives and nocturnal wildlife viewing</li>
        <li>Conservation activities and ranger interactions</li>
        <li>Cultural engagement with local communities</li>
        <li>Fly-in safaris and scenic flights</li>
        <li>Bush breakfasts, sundowners, and starlit dinners</li>
      </ul>
      <p>Each itinerary is designed around time, space, and intention.</p>

      <h2>Who These Safaris Are Ideal For</h2>
      <ul>
        <li>First-time visitors seeking quality over crowds</li>
        <li>Repeat Kenya travelers looking for depth</li>
        <li>Wildlife photographers and nature enthusiasts</li>
        <li>Couples and honeymooners</li>
        <li>Families wanting educational, meaningful safaris</li>
        <li>Travel advisors seeking premium, responsible safari options</li>
      </ul>
      <p>Safaris can be designed for individual travelers, couples, families, or private groups.</p>

      <h2>How We Design Your Safari</h2>
      <p>Every Wildlife & Conservancy Safari is:</p>
      <ul>
        <li>Tailored to your interests, pace, and comfort level</li>
        <li>Responsibly delivered with conservation and community at the core</li>
        <li>Professionally managed from arrival to departure</li>
        <li>Flexible, allowing time to adapt to wildlife movement and guest preferences</li>
      </ul>
      <p>We handle accommodation, transport, guiding, and on-ground coordination — so you can focus on the experience itself.</p>

      <h2>Why Come Travel Kenya</h2>
      <ul>
        <li>Deep relationships with conservancies and lodges</li>
        <li>Strong conservation and community ethics</li>
        <li>Experienced safari designers and guides</li>
        <li>Reliable logistics and on-ground support</li>
        <li>Ability to combine wildlife with cultural, lake, mountain, or coastal experiences</li>
      </ul>
      <p>We believe the best safaris are those that leave places better than they found them.</p>
    `,featuredImage:"/itineraries/safaris/wildlife-conservancy-safaris-kenya.jpg",author:{name:"Lilian Nafula",role:"Tours & Travels Specialist",avatar:"/team/lilian.png"},category:"tours-safaris",subcategory:"inbound-safaris",tags:["wildlife-safaris-kenya","private-conservancy-safaris","low-density-safaris","walking-safaris-kenya","conservation-safaris","laikipia-conservancies","private-mara-conservancies","night-drives-kenya","fly-in-safaris-kenya","responsible-travel-kenya"],publishedAt:"2026-01-01",readTime:6,featured:!0,seo:{metaTitle:"Wildlife & Conservancy Safaris in Kenya | Private, Low-Density Experiences",metaDescription:"Discover wildlife and conservancy safaris in Kenya focused on private lands, low-density game viewing, walking safaris, and conservation-led experiences.",keywords:["wildlife safaris Kenya","private conservancy safaris Kenya","low density safaris Kenya","walking safaris Kenya","conservation safaris Kenya"]}},{id:20,title:"Seed to Soul Journeys",slug:"seed-to-soul-agri-tourism-farm-to-fork-kenya",excerpt:"Immersive agri-tourism experiences in Kenya — tracing the full lifecycle of world-renowned agricultural products through tea, coffee, floriculture, and farm-to-fork dining.",content:`
      <h1>Seed to Soul Journeys</h1>
      <h2>Agri-Tourism & Farm-to-Fork Experiences in Kenya</h2>

      <p>Seed to Soul Journeys invite you to experience Kenya through what it grows, produces, and shares. These journeys move beyond the farm gate — tracing the full lifecycle of Kenya's world-renowned agricultural products while connecting travelers to the people, traditions, and landscapes behind them. From misty tea highlands and historic coffee estates to precision flower farms and open-air plantation dining, this is agriculture as culture, story, and lived experience.</p>

      <h2>Why Seed to Soul Journeys</h2>
      <p>Food is memory. Agriculture is identity.</p>
      <p>Kenya's agricultural landscapes shape livelihoods, cuisines, economies, and daily life — yet they are rarely explored in depth by travelers. Seed to Soul Journeys are designed for those who want to understand where things come from, how they are made, and who makes them.</p>
      <p>These experiences are slow, thoughtful, and sensory — combining learning, taste, conversation, and place.</p>

      <h2>What You Can Experience</h2>
      <p>Each Seed to Soul journey is tailored, but may include:</p>

      <h3>Tea Landscapes of the Highlands</h3>
      <p>Walk through the rolling tea fields of Kericho and surrounding highlands, learning about cultivation, processing, and the social fabric of tea-growing communities.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Guided plantation walks</li>
        <li>Visits to tea factories</li>
        <li>Tastings and blending sessions</li>
        <li>Conversations with growers and managers</li>
      </ul>

      <h3>Coffee Estates & Heritage Farms</h3>
      <p>Explore Kenya's historic coffee estates in Kiambu and Central Kenya — from cultivation to roasting and cupping.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Estate walks and harvesting insights</li>
        <li>Private coffee cupping masterclasses</li>
        <li>Small-batch roasting demonstrations</li>
        <li>Estate-hosted lunches and storytelling</li>
      </ul>

      <h3>Floriculture & Precision Farming</h3>
      <p>Discover the science and scale behind Kenya's globally respected flower industry in Naivasha and the Rift Valley.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Guided greenhouse visits</li>
        <li>Sustainability and water-management discussions</li>
        <li>Insight into global supply chains</li>
        <li>Meetings with growers and agronomists</li>
      </ul>

      <h3>Farm-to-Fork Dining</h3>
      <p>Taste Kenya where it is grown. Experiences may include:</p>
      <ul>
        <li>Plantation dining experiences</li>
        <li>Chef-led farm-to-table meals</li>
        <li>Seasonal menus using local produce</li>
        <li>Pairings with local beverages and stories</li>
      </ul>

      <h2>Who These Journeys Are Designed For</h2>
      <p>Seed to Soul Journeys are ideal for:</p>
      <ul>
        <li>Culinary and food-focused travelers</li>
        <li>Sustainability-minded guests</li>
        <li>Educational and interest-based groups</li>
        <li>Families seeking learning-rich travel</li>
        <li>Corporate teams looking for intellectual "green retreats"</li>
        <li>Travel advisors seeking distinctive agri-tourism experiences in Kenya</li>
      </ul>
      <p>Journeys can be designed for individual travelers, couples, families, or private groups.</p>

      <h2>How We Design Your Journey</h2>
      <p>Every Seed to Soul experience is:</p>
      <ul>
        <li>Custom-designed around interests, timing, and pace</li>
        <li>Privately guided or hosted where appropriate</li>
        <li>Ethically curated with respect for communities and environments</li>
        <li>Professionally managed with seamless logistics and on-ground support</li>
      </ul>
      <p>We work with trusted farms, estates, cooperatives, and producers to ensure experiences are authentic, responsible, and mutually beneficial.</p>

      <h2>Where Seed to Soul Fits in Your Kenya Journey</h2>
      <p>Seed to Soul Journeys combine beautifully with Wildlife & Conservancy Safaris, Cultural & Heritage Journeys, Blue & Emerald Escapes (lakes and islands), and romantic and slow-paced itineraries. They can be standalone experiences or woven into longer journeys across Kenya.</p>

      <h2>Why Come Travel Kenya</h2>
      <ul>
        <li>Deep local knowledge of Kenya's agricultural regions</li>
        <li>Trusted relationships with estates and producers</li>
        <li>Experience designing learning-rich travel</li>
        <li>Ethical, community-aware approach</li>
        <li>Reliable destination management and logistics</li>
      </ul>
      <p>We believe the most memorable journeys are those that engage the mind as much as the senses.</p>
    `,featuredImage:"/itineraries/safaris/seed-to-soul-agri-tourism-kenya.jpg",author:{name:"Lilian Nafula",role:"Tours & Travels Specialist",avatar:"/team/lilian.png"},category:"tours-safaris",subcategory:"agri-tourism",tags:["agri-tourism-kenya","farm-to-fork-kenya","coffee-tours-kenya","tea-plantation-tours-kenya","tours-safaris-kenya","kericho-tea-highlands","coffee-estates-kenya","floriculture-kenya","farm-to-table-dining","sustainable-travel-kenya"],publishedAt:"2026-01-01",readTime:6,featured:!0,seo:{metaTitle:"Seed to Soul Journeys | Agri-Tourism & Farm-to-Fork Experiences in Kenya",metaDescription:"Discover Seed to Soul Journeys in Kenya — immersive agri-tourism, tea, coffee, floriculture, and farm-to-fork travel experiences beyond the classic safari.",keywords:["agri tourism Kenya","farm to fork Kenya","coffee tours Kenya","tea plantation tours Kenya","experiential travel Kenya"]}},{id:21,title:"Cultural & Heritage Journeys",slug:"cultural-heritage-journeys-kenya",excerpt:"Authentic encounters with Kenya's people, traditions, and living heritage — immersive cultural journeys built on trust, respect, and genuine community engagement.",content:`
      <h1>Cultural & Heritage Journeys</h1>
      <h2>Authentic encounters with Kenya's people, traditions, and living heritage.</h2>

      <p>Cultural & Heritage Journeys are designed for travelers who want to understand Kenya through its people. Kenya is not a single story — it is a tapestry of communities, languages, histories, and ways of life shaped by landscape, trade, migration, and resilience. Our journeys move beyond surface-level performances to offer genuine, hosted encounters rooted in trust, respect, and context.</p>
      <p>These experiences are immersive, educational, and thoughtfully paced — allowing culture to be experienced, not consumed.</p>

      <h2>Our Philosophy: Culture, Not Performance</h2>
      <p>True cultural travel is built on relationships, not spectacles. We work with community hosts, cultural custodians, historians, and local guides to ensure that each experience:</p>
      <ul>
        <li>Is respectful and non-intrusive</li>
        <li>Reflects living, evolving cultures</li>
        <li>Supports local livelihoods</li>
        <li>Prioritises learning, exchange, and dignity</li>
      </ul>
      <p>This is not about "seeing traditions." It is about listening, sharing, and understanding.</p>

      <h2>What You Can Experience</h2>
      <p>Each Cultural & Heritage Journey is tailored, but may include:</p>

      <h3>Community-Hosted Experiences</h3>
      <p>Spend time with communities in their own environments — learning about daily life, values, and social structures through conversation, shared activities, and storytelling.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Community conservancy visits</li>
        <li>Guided village walks</li>
        <li>Shared meals and food preparation</li>
        <li>Craft, music, and oral history sessions</li>
      </ul>

      <h3>Indigenous Knowledge & Living Traditions</h3>
      <p>Engage with traditional knowledge systems that have guided communities for generations — from environmental stewardship and pastoral life to navigation, ritual, and identity. Experiences are facilitated with sensitivity and consent, focusing on learning rather than observation.</p>

      <h3>Swahili Coast & Maritime Heritage</h3>
      <p>Explore the Swahili civilisation along Kenya's coast — shaped by centuries of trade, migration, and cultural exchange.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Lamu Old Town and surrounding islands</li>
        <li>Swahili architecture and urban heritage</li>
        <li>Maritime history and storytelling</li>
        <li>Cuisine, poetry, and coastal rhythms</li>
      </ul>

      <h3>Markets, Craft & Everyday Culture</h3>
      <p>Culture lives in everyday spaces. Experiences may include:</p>
      <ul>
        <li>Local markets and trading centres</li>
        <li>Craft workshops and artisan studios</li>
        <li>Music, dance, and contemporary cultural expressions</li>
        <li>Conversations with makers and community leaders</li>
      </ul>

      <h2>Who These Journeys Are Designed For</h2>
      <p>Cultural & Heritage Journeys are ideal for:</p>
      <ul>
        <li>Culturally curious travelers</li>
        <li>Families seeking educational travel</li>
        <li>Repeat Kenya visitors wanting deeper engagement</li>
        <li>Academics, institutions, and special-interest groups</li>
        <li>Travelers who value meaning over spectacle</li>
        <li>Travel advisors seeking authentic, ethical cultural experiences</li>
      </ul>
      <p>Journeys can be designed for individual travelers, couples, families, or private groups.</p>

      <h2>How We Design Cultural Journeys</h2>
      <p>Every Cultural & Heritage Journey is:</p>
      <ul>
        <li>Custom-designed around interests and sensitivities</li>
        <li>Privately guided or hosted by knowledgeable local experts</li>
        <li>Ethically curated with community consent and benefit</li>
        <li>Professionally managed with seamless logistics and support</li>
      </ul>
      <p>We prioritise time, trust, and context — ensuring that cultural encounters feel natural, respectful, and enriching.</p>

      <h2>Where Cultural Journeys Fit in Kenya Travel</h2>
      <p>Cultural & Heritage Journeys combine beautifully with Wildlife & Conservancy Safaris, Seed to Soul Journeys, Blue & Emerald Escapes, and romantic and slow-paced itineraries. They add depth, meaning, and perspective to any Kenya journey.</p>

      <h2>Why Come Travel Kenya</h2>
      <ul>
        <li>Deep relationships with communities and cultural custodians</li>
        <li>Strong ethical framework for cultural engagement</li>
        <li>Experienced cultural guides and storytellers</li>
        <li>Kenya-based destination management expertise</li>
        <li>Reliable planning and on-ground coordination</li>
      </ul>
      <p>We believe culture is best experienced through humility, curiosity, and care.</p>
    `,featuredImage:"/itineraries/safaris/cultural-heritage-journeys-kenya.jpg",author:{name:"Lilian Nafula",role:"Tours & Travels Specialist",avatar:"/team/lilian.png"},category:"tours-safaris",subcategory:"cultural-heritage",tags:["cultural-tourism-kenya","heritage-travel-kenya","community-experiences-kenya","swahili-culture-kenya","tours-safaris-kenya","lamu-old-town","indigenous-knowledge-kenya","community-conservancy-visits","ethical-cultural-travel","swahili-coast-heritage"],publishedAt:"2026-01-01",readTime:6,featured:!0,seo:{metaTitle:"Cultural & Heritage Journeys in Kenya | Authentic Community Experiences",metaDescription:"Discover cultural and heritage journeys in Kenya focused on authentic community engagement, living traditions, Swahili heritage, and meaningful cultural travel.",keywords:["cultural tourism Kenya","heritage travel Kenya","community experiences Kenya","Swahili culture Kenya","experiential travel Kenya"]}},{id:22,title:"Blue & Emerald Escapes",slug:"blue-emerald-escapes-lakes-islands-kenya",excerpt:"Lakes, islands, and water-based journeys through Kenya's most tranquil landscapes — slow, nature-led escapes across Rift Valley lakes, Lake Victoria islands, and life-rich wetlands.",content:`
      <h1>Blue & Emerald Escapes</h1>
      <h2>Lakes, islands, and water-based journeys through Kenya's most tranquil landscapes.</h2>

      <p>Blue & Emerald Escapes are designed for travelers drawn to water, stillness, and life-rich ecosystems. These journeys explore Kenya's lakes, islands, wetlands, and freshwater corridors — places where biodiversity thrives, time slows down, and experiences unfold gently. From Rift Valley lakes to the islands of Lake Victoria, this is a softer, greener, and deeply restorative way to experience the country.</p>

      <h2>Why Blue & Emerald Escapes</h2>
      <p>Kenya's identity is often told through savannahs — but its water landscapes hold equally powerful stories. Lakes and islands are places of:</p>
      <ul>
        <li>Biodiversity and birdlife</li>
        <li>Reflection and rhythm</li>
        <li>Prehistory and human settlement</li>
        <li>Trade, fishing, and living cultures</li>
      </ul>
      <p>Blue & Emerald Escapes are ideal for travelers seeking quiet discovery, photography, nature immersion, and a sense of space away from busy circuits.</p>

      <h2>What You Can Experience</h2>
      <p>Each Blue & Emerald journey is custom-designed, but may include:</p>

      <h3>Rift Valley Lakes System</h3>
      <p>Kenya's Great Rift Valley is home to a remarkable network of lakes, each with its own ecology, colour, wildlife, and cultural significance. Our Blue & Emerald Escapes explore these lakes as interconnected landscapes, rather than isolated stops.</p>
      <p>Experiences may include journeys around:</p>
      <ul>
        <li><strong>Lake Naivasha</strong> – freshwater calm, walking safaris, and kayaking</li>
        <li><strong>Lake Nakuru</strong> – flamingos, birdlife, and conservation storytelling</li>
        <li><strong>Lake Elementaita</strong> – quiet shores and Rift Valley vistas</li>
        <li><strong>Lake Baringo</strong> – birding, cultural encounters, and desert–lake contrast</li>
        <li><strong>Lake Bogoria</strong> – geysers, hot springs, and dramatic escarpments</li>
        <li><strong>Lake Magadi</strong> – soda lake landscapes and geological extremes</li>
        <li><strong>Lake Turkana (The Jade Sea)</strong> – remote beauty, anthropology, and early human history</li>
      </ul>
      <p>Rather than rushing from lake to lake, we design slow, well-paced routes that allow time for interpretation, nature walks, photography, and cultural context — revealing the Rift Valley as one of Africa's most diverse and meaningful landscapes.</p>

      <h3>Lake Victoria & Island Life</h3>
      <p>Discover Kenya's freshwater island landscapes and fishing cultures on Africa's largest lake.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Island stays on Rusinga or Mfangano</li>
        <li>Visits to paleontological and archaeological sites</li>
        <li>Traditional fishing and lake-life storytelling</li>
        <li>Boat journeys and shoreline exploration</li>
      </ul>

      <h3>Birding & Biodiversity Safaris</h3>
      <p>Kenya's lakes and wetlands are among Africa's richest birding destinations.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Guided bird-watching with specialists</li>
        <li>Photography-led itineraries</li>
        <li>Seasonal species tracking, including rare sightings</li>
        <li>Wetland conservation engagement</li>
      </ul>

      <h3>Prehistory, Water & Human Origins</h3>
      <p>Some of Kenya's most important early human sites lie along lake shores.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Visits to fossil and archaeological sites</li>
        <li>Interpretation of early human settlement</li>
        <li>Conversations with local historians and guides</li>
        <li>Contextual storytelling that connects land, water, and humanity</li>
      </ul>

      <h2>Who These Journeys Are Designed For</h2>
      <p>Blue & Emerald Escapes are ideal for:</p>
      <ul>
        <li>Nature lovers and slow travelers</li>
        <li>Bird-watchers and photographers</li>
        <li>Couples seeking calm and intimacy</li>
        <li>Families interested in learning-rich travel</li>
        <li>Repeat Kenya visitors looking beyond savannahs</li>
        <li>Travel advisors seeking quieter, niche experiences</li>
      </ul>
      <p>Journeys can be designed for individual travelers, couples, families, or private groups.</p>

      <h2>How We Design Your Escape</h2>
      <p>Every Blue & Emerald Escape is:</p>
      <ul>
        <li>Tailored to interests, pace, and season</li>
        <li>Privately guided or hosted where appropriate</li>
        <li>Low-impact and responsible, respecting fragile ecosystems</li>
        <li>Professionally managed with seamless logistics</li>
      </ul>
      <p>We prioritize time, light, and natural rhythm — allowing travelers to observe, breathe, and connect.</p>

      <h2>Where Blue & Emerald Escapes Fit in Kenya Travel</h2>
      <p>These journeys pair beautifully with Wildlife & Conservancy Safaris, Cultural & Heritage Journeys, Seed to Soul Journeys, and romantic and honeymoon itineraries. They can also stand alone as restorative, slow-travel experiences.</p>

      <h2>Why Come Travel Kenya</h2>
      <ul>
        <li>Deep knowledge of Kenya's lake and wetland regions</li>
        <li>Trusted relationships with local guides and communities</li>
        <li>Experience designing nature-led, low-impact journeys</li>
        <li>Ethical, conservation-aware approach</li>
        <li>Reliable destination management and support</li>
      </ul>
      <p>We believe some of the most powerful journeys happen on the water, not the road.</p>
    `,featuredImage:"/itineraries/safaris/blue-emerald-escapes-lakes-islands-kenya.jpg",author:{name:"Lilian Nafula",role:"Tours & Travels Specialist",avatar:"/team/lilian.png"},category:"tours-safaris",subcategory:"inboud-safaris",tags:["lake-safaris-kenya","lake-naivasha-kayaking","lake-victoria-islands-kenya","bird-watching-kenya-lakes","tours-safaris-kenya","rift-valley-lakes","lake-turkana","slow-travel-kenya","birding-kenya","rusinga-mfangano-islands"],publishedAt:"2026-01-01",readTime:7,featured:!0,seo:{metaTitle:"Blue & Emerald Escapes | Lakes & Island Journeys in Kenya",metaDescription:"Discover Kenya's lakes and island escapes — slow, nature-led journeys focused on birdlife, water ecosystems, islands, and reflective travel experiences.",keywords:["lake safaris Kenya","Lake Naivasha kayaking","Lake Victoria islands Kenya","bird watching Kenya lakes","experiential travel Kenya"]}},{id:23,title:"Altitude & Adrenaline",slug:"altitude-adrenaline-mountain-active-travel-kenya",excerpt:"Mountain escapes and high-energy journeys across Kenya's most dramatic landscapes — designed for travelers energized by movement, challenge, and changing perspectives.",content:`
      <h1>Altitude & Adrenaline</h1>
      <h2>Mountain escapes and high-energy journeys across Kenya's most dramatic landscapes.</h2>

      <p>Altitude & Adrenaline journeys are designed for travelers who are energized by movement, challenge, and changing perspectives. Kenya's highlands, mountains, escarpments, and river corridors offer extraordinary settings for active travel — places where altitude sharpens the senses, landscapes inspire clarity, and physical effort deepens connection to place.</p>
      <p>These experiences balance adventure with comfort, combining active days with warm hospitality, scenic lodges, and thoughtful pacing.</p>

      <h2>Why Altitude & Adrenaline</h2>
      <p>Elevation changes how we see the world — and ourselves. Kenya's varied terrain allows travelers to:</p>
      <ul>
        <li>Challenge their bodies safely</li>
        <li>Experience high-altitude clarity and focus</li>
        <li>Engage with landscapes beyond the savannah</li>
        <li>Combine activity with recovery and rest</li>
      </ul>
      <p>Altitude & Adrenaline journeys are ideal for travelers who want to feel Kenya, not just observe it.</p>

      <h2>What You Can Experience</h2>
      <p>Each Altitude & Adrenaline journey is custom-designed, but may include:</p>

      <h3>Mount Kenya & Central Highlands</h3>
      <p>Experience Kenya's iconic mountain landscapes through scenic hikes, alpine retreats, and highland exploration.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Guided hikes and nature walks</li>
        <li>Moorland and forest exploration</li>
        <li>Trout fishing in mountain streams</li>
        <li>Scenic flights and aerial views</li>
        <li>Lodge-based wellness and recovery</li>
      </ul>

      <h3>High-Altitude Training Landscapes</h3>
      <p>Kenya's highlands are globally recognised for endurance and performance.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Visits to high-altitude regions such as Iten and Nanyuki</li>
        <li>Guided running, walking, or fitness sessions (non-competitive)</li>
        <li>Insight into altitude adaptation and endurance culture</li>
        <li>Recovery-focused schedules and nutrition</li>
      </ul>

      <h3>Escarpments, Gorges & Active Parks</h3>
      <p>Explore dramatic Rift Valley escarpments and adventure-friendly parks.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Hiking and cycling in Hell's Gate</li>
        <li>Gorge walks and rock formations</li>
        <li>Active exploration paired with wildlife and scenery</li>
        <li>Short, high-impact adventure days</li>
      </ul>

      <h3>Northern & Volcanic Landscapes</h3>
      <p>For travelers seeking dramatic terrain and remote beauty.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Volcanic landscapes and lava fields</li>
        <li>Desert–mountain contrasts</li>
        <li>Scenic overland journeys and fly-in access</li>
        <li>Cultural and environmental interpretation</li>
      </ul>

      <h2>Who These Journeys Are Designed For</h2>
      <p>Altitude & Adrenaline journeys are ideal for:</p>
      <ul>
        <li>Active and adventurous travelers</li>
        <li>Fitness-focused guests</li>
        <li>Couples seeking dynamic experiences</li>
        <li>Groups of friends</li>
        <li>Repeat Kenya visitors wanting variety</li>
        <li>Travel advisors seeking active, well-managed itineraries</li>
      </ul>
      <p>Journeys are designed for different fitness levels, with safety, pacing, and comfort always prioritised.</p>

      <h2>How We Design Active Journeys</h2>
      <p>Every Altitude & Adrenaline journey is:</p>
      <ul>
        <li>Tailored to ability, interests, and pace</li>
        <li>Guided by experienced professionals</li>
        <li>Balanced with rest, scenery, and recovery</li>
        <li>Professionally managed with reliable logistics and support</li>
      </ul>
      <p>We focus on meaningful challenges, not extremes — ensuring travelers return energised, not exhausted.</p>

      <h2>Where Altitude & Adrenaline Fits in Kenya Travel</h2>
      <p>These journeys combine beautifully with Wildlife & Conservancy Safaris, Blue & Emerald Escapes, Cultural & Heritage Journeys, and romantic and slow-paced itineraries. They add energy, contrast, and a sense of accomplishment to a Kenya journey.</p>

      <h2>Why Come Travel Kenya</h2>
      <ul>
        <li>Deep knowledge of Kenya's highland and mountain regions</li>
        <li>Trusted guides and activity partners</li>
        <li>Strong safety and logistics planning</li>
        <li>Experience balancing adventure with comfort</li>
        <li>Kenya-based destination management expertise</li>
      </ul>
      <p>We believe the most powerful journeys often involve movement, effort, and perspective.</p>
    `,featuredImage:"/itineraries/safaris/altitude-adrenaline-mountain-travel-kenya.jpg",author:{name:"Lilian Nafula",role:"Tours & Travels Specialist",avatar:"/team/lilian.png"},category:"tours-safaris",subcategory:"inbound-safaris",tags:["adventure-travel-kenya","mount-kenya-experiences","high-altitude-travel-kenya","active-safaris-kenya","tours-safaris-kenya","hells-gate-hiking","iten-nanyuki-running","volcanic-landscapes-kenya","hiking-kenya","wellness-travel-kenya"],publishedAt:"2026-01-01",readTime:6,featured:!0,seo:{metaTitle:"Altitude & Adrenaline | Mountain & Active Travel Experiences in Kenya",metaDescription:"Discover Kenya's altitude and adrenaline experiences — mountain escapes, highland adventures, and active journeys designed for energy, clarity, and connection.",keywords:["adventure travel Kenya","Mount Kenya experiences","high altitude travel Kenya","active safaris Kenya","experiential travel Kenya"]}},{id:24,title:"Romantic & Honeymoon Travel",slug:"romantic-honeymoon-travel-kenya",excerpt:"Intimate journeys designed for love, celebration, and once-in-a-lifetime moments in Kenya — private safaris, secluded beaches, and beautifully paced experiences shaped around connection.",content:`
      <h1>Romantic & Honeymoon Travel</h1>
      <h2>Intimate journeys designed for love, celebration, and once-in-a-lifetime moments in Kenya.</h2>

      <p>Romantic & Honeymoon Travel is about time, privacy, and intention. Whether you are celebrating a honeymoon, anniversary, proposal, or simply time together, we design journeys that feel deeply personal, beautifully paced, and emotionally resonant. These are not rushed itineraries or standard "romantic packages" — they are carefully curated experiences shaped around connection, place, and memory.</p>
      <p>Kenya offers extraordinary settings for romance: quiet conservancies, dramatic landscapes, water-edged escapes, and secluded retreats where the world feels far away.</p>

      <h2>Why Kenya for Romance</h2>
      <p>Few destinations offer the diversity, intimacy, and sense of wonder that Kenya does. Here, romance unfolds through:</p>
      <ul>
        <li>Vast landscapes and quiet moments</li>
        <li>Private wildlife encounters</li>
        <li>Slow days shaped by light and nature</li>
        <li>Thoughtful hospitality and personal service</li>
        <li>Experiences that feel earned, not staged</li>
      </ul>
      <p>Romantic journeys in Kenya are not about excess — they are about presence, privacy, and shared meaning.</p>

      <h2>Romantic Experiences We Curate</h2>
      <p>Every Romantic & Honeymoon journey is bespoke, but may include:</p>

      <h3>Private Wildlife & Conservancy Safaris</h3>
      <p>Experience wildlife together in low-density, intimate settings.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Private game drives</li>
        <li>Exclusive-use camps or secluded lodges</li>
        <li>Bush breakfasts and sunset sundowners</li>
        <li>Walking safaris and quiet moments in nature</li>
      </ul>

      <h3>Secluded Beach & Water Escapes</h3>
      <p>Slow down along Kenya's coast or lakeside landscapes.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Boutique beach resorts or private villas</li>
        <li>Island stays and quiet shores</li>
        <li>Sailing, snorkeling, or dhow cruises</li>
        <li>Time for rest, reflection, and reconnection</li>
      </ul>

      <h3>Romantic Gestures & Celebrations</h3>
      <p>We design moments that feel natural, meaningful, and memorable. These may include:</p>
      <ul>
        <li>Private bush dinners or beach dinners</li>
        <li>Sunrise or sunset experiences</li>
        <li>Anniversary or honeymoon surprises</li>
        <li>Thoughtful details arranged with care</li>
      </ul>

      <h3>Active & Scenic Journeys for Couples</h3>
      <p>For couples who connect through movement and exploration.</p>
      <p>Experiences may include:</p>
      <ul>
        <li>Scenic hikes and mountain retreats</li>
        <li>Lakes, islands, and slow adventure</li>
        <li>Wildlife and culture woven together</li>
        <li>Balanced itineraries with space to pause</li>
      </ul>

      <h2>Who These Journeys Are Designed For</h2>
      <p>Romantic & Honeymoon Travel is ideal for:</p>
      <ul>
        <li>Honeymooners</li>
        <li>Couples celebrating anniversaries or milestones</li>
        <li>Proposal and pre-wedding journeys</li>
        <li>Couples seeking privacy and depth</li>
        <li>Travelers who value experience over spectacle</li>
      </ul>
      <p>Journeys are designed for different comfort levels, from understated luxury to refined adventure.</p>

      <h2>How We Design Romantic Journeys</h2>
      <p>Every romantic journey is:</p>
      <ul>
        <li>Fully personalised around your story and pace</li>
        <li>Privately guided or hosted where appropriate</li>
        <li>Thoughtfully timed, allowing space for connection</li>
        <li>Professionally managed, so you can relax fully</li>
      </ul>
      <p>We focus on the small details — because those are what make memories last.</p>

      <h2>Where Romantic Travel Fits in Kenya</h2>
      <p>Romantic & Honeymoon journeys combine beautifully with Wildlife & Conservancy Safaris, Blue & Emerald Escapes, Seed to Soul Journeys, Cultural & Heritage Journeys, and Altitude & Adrenaline (for adventurous couples). They can also stand alone as pure, slow, romantic escapes.</p>

      <h2>Why Come Travel Kenya</h2>
      <ul>
        <li>Deep knowledge of Kenya's most intimate settings</li>
        <li>Access to secluded lodges, camps, and experiences</li>
        <li>Experience designing once-in-a-lifetime journeys</li>
        <li>Thoughtful, discreet service</li>
        <li>Reliable destination management and support</li>
      </ul>
      <p>We believe romance is best expressed through time, care, and shared experience.</p>
    `,featuredImage:"/itineraries/safaris/romantic-honeymoon-travel-kenya.jpg",author:{name:"Lilian Nafula",role:"Tours & Travels Specialist",avatar:"/team/lilian.png"},category:"tours-safaris",subcategory:"inbound-safaris",tags:["honeymoon-safari-kenya","romantic-travel-kenya","couples-safari-kenya","luxury-honeymoon-kenya","romantic-safaris-africa","private-game-drives-couples","secluded-lodges-kenya","beach-escape-kenya","anniversary-travel-kenya","bush-dinner-kenya"],publishedAt:"2026-01-01",readTime:5,featured:!0,seo:{metaTitle:"Romantic & Honeymoon Travel in Kenya | Bespoke Journeys for Couples",metaDescription:"Discover romantic and honeymoon travel in Kenya — private safaris, secluded beaches, intimate lodges, and beautifully paced journeys designed for connection.",keywords:["honeymoon safari Kenya","romantic travel Kenya","couples safari Kenya","luxury honeymoon Kenya","romantic safaris Africa"]}}];function i(e){let a=[];return(0,r.default)(e).querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(e=>{a.push({level:e.tagName.toLowerCase(),text:e.textContent,id:e.getAttribute("id")||""})}),a}function t(e){let a=(0,r.default)(e);return a.querySelectorAll("h2, h3").forEach((e,r)=>{if(!e.getAttribute("id")){let a=e.textContent.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");e.setAttribute("id",a||`heading-${r}`)}}),a.toString()}e.s(["addIdsToHeadings",()=>t,"extractHeadings",()=>i,"getAllItineraries",0,()=>a.sort((e,r)=>new Date(r.publishedAt)-new Date(e.publishedAt)),"getItinerariesByCategory",0,e=>a.filter(r=>r.category===e||r.subcategory===e).sort((e,r)=>new Date(r.publishedAt)-new Date(e.publishedAt)),"itinerariesCategories",0,{"tours-safaris":{id:"tours-safaris",name:"Tours & Safaris",slug:"tours-safaris",description:"Wildlife adventures, safaris, and travel experiences",color:"from-orange-600 to-orange-400"},mice:{id:"mice",name:"MICE",slug:"mice",description:"Meetings, Incentive-travel, Conferences & Events",color:"from-green-950 to-green-900"},"ground-transport-logistics":{id:"ground-transport-logistics",name:"Transport & Logistics",slug:"ground-transport-logistics",description:"Travel logistics and vehicle services",color:"from-blue-500 to-cyan-500"},"immigration-services":{id:"immigration-services",name:"Immigration Services",slug:"immigration-services",description:"Visa, permits, and travel documentation",color:"from-orange-500 to-red-500"},"flight-logistics":{id:"flight-logistics",name:"Ticket Reservations",slug:"flight-logistics",description:"Flight bookings and travel tickets",color:"from-indigo-500 to-purple-500"},news:{id:"news",name:"News & Updates",slug:"news",description:"Latest from Come Travel Kenya",color:"from-lime-500 to-green-500"}}])}]);
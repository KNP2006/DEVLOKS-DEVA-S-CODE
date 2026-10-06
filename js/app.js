const R=(h,i=0)=>`<div class="rv" style="--i:${i}">${h}</div>`;
const C=(a,x='')=>`<div class="grid">${a.map(([t,d],i)=>`<div class="c rv ${x}" style="--i:${i}"><h3>${t}</h3>${d?`<p>${d}</p>`:''}</div>`).join('')}</div>`;
const F=(a,id='')=>`<div class="flow rv" ${id?`id="${id}"`:''}>${a.map(x=>`<b>${x}</b>`).join('<i>→</i>')}</div>`;
const PL={'WHAT IS DEVA’S CODE?':['Think of it as an AI assistant that doesn’t just chat — it plans a job, uses tools and finishes it for you.','👆 Tap any box for details'],
'THE PROBLEM':['Today you juggle many separate AI tools, each tied to one company and one job. That is slow and limiting.','👆 Press Unify, then tap any box'],
'OUR SOLUTION & VISION':['DEVA’S CODE puts everything in one place. You give a goal; the agent works through the steps below.'],
'KEY FEATURES':['The eight building blocks that make the agent useful.','👆 Tap any box for details'],
'MULTI-MODEL ARCHITECTURE':['An “AI model” is the brain behind the answers. Here you can swap brains freely instead of being tied to one.','👆 Pick a model'],
'AGENT ARCHITECTURE':['How the pieces fit: clients talk to a server, the server hands work to the Agent Core, which uses models, tools and memory.','👆 Tap a block'],
'UNIVERSAL FILE INTELLIGENCE':['Give it your files — it reads them, remembers them and answers questions about them.','👆 Pick a file type'],
'TOOLS, PLUGINS & SKILLS':['Tools are what the agent can do, plugins add new abilities, skills teach it how to do a job well.','👆 Tap any box for details'],
'WEB + TERMINAL':['Same agent, two ways to use it: a friendly website or a developer command line.','👆 Tap any box for details'],
'BROWSER & AUTOMATION':['The agent can use a browser like a person: search, open pages, copy facts and write the report.'],
'SECURITY & CONTROL':['An agent that can act needs rules. You decide what it may read, change, run or send outside.','👆 Tap a state to change it'],
'DEVELOPMENT ROADMAP':['The build plan, one step at a time. The line fills as you scroll.','👆 Tap a phase for details'],
'FUTURE VISION':['The long-term goal: a full workspace where AI agents do real work alongside you.','👆 Tap any box for details']};
const H=(k,t)=>{const p=PL[k]||[];return `<div class="hd rv"><span class="num"></span><span class="kick">${k}</span></div><h2 class="rv">${t}</h2>${p[0]?`<p class="plain rv"><b>IN SIMPLE WORDS</b>${p[0]}</p>`:''}${p[1]?`<div class="hint rv">${p[1]}</div>`:''}`};
const MODELS={Claude:['OpenRouter','Anthropic'],GPT:['OpenRouter','OpenAI'],DeepSeek:['OpenRouter','DeepSeek API'],Gemini:['Direct API','Google'],Qwen:['Local','Ollama'],Llama:['Local','Self-hosted']};
const ARCH={'Web Client':'Browser UI for students, researchers and business users.','CLI Client':'Terminal UI for developers, DevOps and power users.','API Server':'One gateway that both clients talk to.','Agent Core':'Understands goals, plans, calls tools, verifies results. One core powers everything.','Models':'AI APIs and local models behind a single model layer.','Tools':'Browser, Terminal, Files, Git, Plugins, MCP.','Memory':'Sessions, projects and knowledge.'};
const FILES={Documents:'PDF • DOCX • TXT • Markdown',Data:'XLSX • CSV • JSON • XML • SQL',Code:'JS • TS • Python • Java • C/C++ • Go • Rust',Media:'Images • Audio • Video — future support'};
const PERMS=['READ','MODIFY','EXECUTE','EXTERNAL ACTION'],ST=['ALLOWED','ASK USER','DENIED'];
const RM=[['Agent Core + CLI + OpenRouter'],['Multi-provider system'],['Web interface'],['File intelligence'],['Browser automation'],['Skills'],['Plugins'],['MCP'],['Application integrations'],['Multi-agent system'],['Advanced model routing + self-hosting']];
const RM_=matchMedia('(prefers-reduced-motion:reduce)').matches;
const SH=(n,u,body)=>`<figure class="shot rv" data-n="${n}"><div class="tb"><i></i><i></i><i></i><u>${u}</u></div><div class="bd">${body}</div><figcaption>Illustrative mockup · drop <code>shots/${n}.png</code> next to index.html to show a real screenshot</figcaption></figure>`;
const SHW=SH('web','deva.devlok.app',`<div class="wb"><aside>Sessions<br>Projects<br>Knowledge<br>Plugins</aside><div><div class="bub me">Analyze sales.xlsx and draft a summary</div><div class="bub"><span class="ok">✓</span> Parsed 3 sheets<br><span class="ok">✓</span> Extracted key metrics<br><span class="k">◔</span> Writing summary…</div><div class="sk" style="width:90%"></div><div class="sk" style="width:65%"></div></div></div>`);
const SHT=SH('cli','terminal — deva',`<div class="k">$ deva "refactor auth module and run tests"</div><div class="d">› understanding goal</div><div class="d">› git: reading 14 files</div><div>⚠ permission: <span style="color:var(--warn)">EXECUTE npm test</span> — allow? [y/N]</div><div class="ok">✓ 42 tests passed</div><div class="k">▍</div>`);
const SHB=SH('browser','🔒 research session · 6 tabs',`<div><span class="ok">✓</span> Search the web</div><div><span class="ok">✓</span> Open 6 sources</div><div><span class="k">◔</span> Extract tables &amp; quotes</div><div class="d">○ Compare · Analyze · Generate report</div><div class="th"><div></div><div></div><div></div></div>`);
const SHF=SH('files','file intelligence',`<div class="fr"><em>PDF</em> report.pdf <span class="d">· parsed · indexed</span></div><div class="fr"><em>XLSX</em> sales.xlsx <span class="d">· 3 sheets</span></div><div class="fr"><em>PY</em> main.py <span class="d">· 214 lines</span></div><div class="fr"><em>SQL</em> schema.sql <span class="d">· 9 tables</span></div><div class="k" style="margin-top:8px">› ask anything about these files…</div>`);
const S=[
['hero',`<div class="kick rv">OPEN-SOURCE UNIVERSAL AI AGENT PLATFORM</div><h1 class="rv" style="--i:1">DEVLOK’S<br><span class="gt">DEVA’S CODE</span></h1><p class="big rv" style="--i:2">One Agent. Every Model. Every Tool.</p>${R('<div class="term" id="term"></div>',3)}<p class="plain rv" style="--i:4;margin-top:22px"><b>IN SIMPLE WORDS</b>An AI agent platform where one agent can use any AI model and any tool to actually finish your work. Scroll ↓, use the dock, and tap boxes to explore.</p><p class="mut rv" style="--i:5;margin-top:14px">Presented by DEVLOK</p>`],
['what',H('WHAT IS DEVA’S CODE?','Not just an AI chatbot.')+R('<p>An open-source AI agent platform designed to:</p>')+C([['🎯 Understand goals'],['🗺 Plan tasks'],['🛠 Use tools'],['📁 Work with files'],['🌐 Browse the web'],['⌨ Execute commands'],['🔗 Connect apps'],['🤖 Use different models'],['⚙ Automate workflows']])+R('<p class="big">One platform. Multiple AI capabilities.</p>')],
['problem',H('THE PROBLEM','Current AI tools are <span class="gt">fragmented.</span>')+R('<p>Users need different tools for:</p>')+`<div class="tags rv" id="tags"><div class="hub">⬢ DEVA’S CODE — one place for all of it</div>${['Coding','Research','File Analysis','Browser Automation','AI Models','App Integrations','Automation'].map(x=>`<span style="--x:${(Math.random()*120-60|0)}px;--y:${(Math.random()*60-10|0)}px;--r:${(Math.random()*10-5|0)}deg">${x}</span>`).join('')}</div>`+R('<div class="chips"><button class="chip" id="uni">✦ Unify with DEVA’S CODE</button></div>')+C([['🔒 Vendor lock-in','Stuck with one AI company.'],['🎛 Limited model choice','Can’t pick the best brain for each job.'],['🧩 Separate tools per task','A different app for every job.'],['🔧 Limited customization','Hard to adapt to your workflow.'],['🔌 Difficult integrations','Connecting your apps is painful.'],['🛑 Limited control over agent actions','Unclear what the AI is allowed to do.']])],
['solution',H('OUR SOLUTION & VISION','Introducing <span class="gt">DEVA’S CODE</span>')+R('<p>One open platform: AI Models · Agent Intelligence · Tools · Files · Browser · Plugins · Skills · Applications · Automation — all connected through one Agent Core.</p>')+R('<p class="big">“One Agent. Every Model. Every Tool.” The user simply provides a goal.</p>')+F(['USER','DEVA’S CODE','UNDERSTAND','PLAN','USE TOOLS','EXECUTE','VERIFY','RESULT'],'vf')],
['features',H('KEY FEATURES','Core Features')+C([['🧠 AI Agent','Understands goals and performs multi-step tasks.'],['🤖 Multi-Model','Supports multiple AI providers and models.'],['💻 Web + Terminal','One Agent Core with two interfaces.'],['📁 File Intelligence','Analyze documents, spreadsheets, images and code.'],['🌐 Web Browsing','Search, research and browser automation.'],['🔌 Plugins','Extend the platform with new capabilities.'],['🧩 Skills','Specialized knowledge and workflows.'],['🔗 Integrations','Connect external apps and services.']])],
['models',H('MULTI-MODEL ARCHITECTURE','Freedom of <span class="gt">model choice</span>')+R('<p>Prioritizes OpenRouter while supporting direct APIs and local models. Pick a model:</p>')+`<div class="chips rv" id="mc">${Object.keys(MODELS).map((m,i)=>`<button class="chip${i?'':' on'}">${m}</button>`).join('')}</div><div class="out rv" id="mo"></div>`+R('<p class="big">Goal: no mandatory AI vendor lock-in.</p>')],
['arch',H('AGENT ARCHITECTURE','One Agent Core powers everything.')+R('<p class="mut">Tap a block to explore.</p>')+`<div class="arch" id="ar">${['Web Client','CLI Client','API Server'].map((n,i)=>`<div class="c node rv ${i==2?'full':''}" style="--i:${i}"><h3>${n}</h3></div>`).join('')}<div class="c node full rv on"><h3>Agent Core</h3></div>${['Models','Tools','Memory'].map(n=>`<div class="c node rv"><h3>${n}</h3></div>`).join('')}</div><div class="info rv" id="ai">${ARCH['Agent Core']}</div>`],
['files',H('UNIVERSAL FILE INTELLIGENCE','Upload. Analyze. Understand.')+`<div class="chips rv" id="fc">${Object.keys(FILES).map((m,i)=>`<button class="chip${i?'':' on'}">${m}</button>`).join('')}</div><div class="info rv" id="fo">${FILES.Documents}</div>`+F(['UPLOAD','DETECT','PARSE','EXTRACT','INDEX','RETRIEVE','ANALYZE'],'ff')+`<div class="shots">${SHF}</div>`],
['ext',H('TOOLS, PLUGINS & SKILLS','Make the agent <span class="gt">extensible.</span>')+C([['🛠 Tools','Terminal • Files • Browser • Git • Search • Code execution'],['🔌 Plugins','GitHub Plugin → Search Repository, Create Issue, Create Pull Request'],['🧩 Skills','React • Cybersecurity • Research • PDF Analysis']])],
['iface',H('WEB + TERMINAL','One Agent. Two interfaces.')+C([['🌐 Web Interface','Students • Researchers • Business users • General users'],['⌨ Terminal Interface','Developers • DevOps • Power users • Automation']])+R('<p class="big">Both use the same Agent Core.</p>')+`<div class="shots">${SHW}${SHT}</div>`],
['browser',H('BROWSER & AUTOMATION','From answering to <span class="gt">acting.</span>')+R('<p>Search websites · Navigate · Click · Type · Extract · Screenshots · Automate workflows</p><p class="mut" style="margin-top:8px">“Research the latest information from multiple sources and prepare a report.”</p>')+F(['Search','Open Sources','Extract','Compare','Analyze','Generate Report'],'bf')+`<div class="shots">${SHB}</div>`],
['security',H('SECURITY & CONTROL','Powerful agents need <span class="gt">strong controls.</span>')+R('<p>Tap a state to cycle Allowed → Ask → Denied for each operation.</p>')+PERMS.map((p,i)=>`<div class="perm c rv" style="--i:${i}"><b>${p}</b><button class="st" data-v="${i==3?1:0}">${ST[i==3?1:0]}</button></div>`).join('')+R('<p class="mut" style="margin-top:14px">Workspace isolation · Sandboxing · API key protection · Audit logs · Secure file handling</p>')],
['roadmap',H('DEVELOPMENT ROADMAP','From Agent to <span class="gt">Platform</span>')+`<div class="tl" id="tl"><div class="fill" id="fill"></div>${RM.map(([t],i)=>`<div class="c ph rv" style="--i:${i%3}"><b>PHASE ${i+1}</b>${t}</div>`).join('')}</div>`],
['future',H('FUTURE VISION','From AI Assistant → <span class="gt">AI Operating Environment</span>')+C([['CODING','→ Files'],['RESEARCH','→ Browser'],['AUTOMATION','→ Apps']])+F(['AI AGENTS','DIGITAL WORKSPACE'])+R('<p class="big">An open ecosystem where Models + Agents + Tools + Skills + Plugins + Applications work together under user control.</p>')],
['end',`<h1 class="rv">One Agent.<br>Every Model.<br><span class="gt">Every Tool.</span></h1><p class="big rv" style="--i:1;font-weight:700">Open. Extensible. Intelligent.</p><p class="mut rv" style="--i:2;margin-top:22px">Built by DEVLOK<br>The goal is not to build another chatbot. The goal is to build an open environment where AI can actually work.</p><div class="chips rv" style="--i:3"><button class="chip" id="top" type="button">↑ Back to start</button></div>`]];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$('#deck').innerHTML=S.map(([id,h])=>`<section class="s" id="${id}">${h}</section>`).join('');
const secs=$$('.s'),items=$$('[data-dock-item]');
/* reveal + active dock */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');cur=secs.indexOf(e.target);mark();['vf','ff','bf'].forEach(id=>{const f=e.target.querySelector('#'+id);if(f)seq(f)})}}),{threshold:.35});
secs.forEach(s=>io.observe(s));let cur=0;
function mark(){let a=0;items.forEach((b,i)=>{if(secs.findIndex(s=>s.id==b.dataset.t)<=cur)a=i});items.forEach((b,i)=>b.setAttribute('aria-pressed',i==a));$('#tp').textContent=(secs[cur].querySelector('.kick')||{textContent:'THE END'}).textContent;$('#cnt').textContent=String(cur+1).padStart(2,'0')+' / '+secs.length}
items.forEach(b=>b.onclick=()=>document.getElementById(b.dataset.t).scrollIntoView({behavior:'smooth'}));
addEventListener('keydown',e=>{if(e.key=='ArrowRight'||e.key=='ArrowLeft'){secs[Math.max(0,Math.min(secs.length-1,cur+(e.key=='ArrowRight'?1:-1)))].scrollIntoView({behavior:'smooth'})}});
addEventListener('scroll',()=>{const h=document.documentElement;$('#bar').style.width=scrollY/(h.scrollHeight-innerHeight)*100+'%';const t=$('#tl'),r=t.getBoundingClientRect();$('#fill').style.height=Math.max(0,Math.min(r.height,innerHeight*.6-r.top))+'px'},{passive:true});
/* flow highlight sequence */
function seq(f){const b=[...f.querySelectorAll('b')];b.forEach(x=>x.classList.remove('hot'));b.forEach((x,i)=>setTimeout(()=>x.classList.add('hot'),i*260))}
/* spotlight cards */
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.c');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});
/* widgets */
$('#uni').onclick=e=>{const u=$('#tags').classList.toggle('u');e.target.textContent=u?'↺ Fragment again':'✦ Unify with DEVA’S CODE'};
function pick(box,fn){$(box).onclick=e=>{const b=e.target.closest('.chip');if(!b)return;$$(box+' .chip').forEach(x=>x.classList.toggle('on',x==b));fn(b.textContent)}}
const mo=m=>$('#mo').textContent=`› route: DEVA’S CODE → ${MODELS[m][0]} → ${MODELS[m][1]} (${m})`;mo('Claude');pick('#mc',mo);
pick('#fc',m=>$('#fo').textContent=FILES[m]);
$('#ar').onclick=e=>{const n=e.target.closest('.node');if(!n)return;$$('.node').forEach(x=>x.classList.toggle('on',x==n));$('#ai').textContent=ARCH[n.textContent.trim()]};
$$('.st').forEach(b=>b.onclick=()=>{const v=(+b.dataset.v+1)%3;b.dataset.v=v;b.textContent=ST[v]});
/* hero terminal */
const T=[['k','$ deva "research EV trends and write a report"'],['d','› understanding goal…'],['d','› planning 4 steps'],['d','› browser: opening 6 sources'],['d','› files: extracting tables'],['ok','✓ verified · report.md ready']];
(function run(){const t=$('#term');t.innerHTML='';T.forEach(([c,s],i)=>setTimeout(()=>t.insertAdjacentHTML('beforeend',`<div class="${c}">${s}</div>`),i*900));setTimeout(run,T.length*900+3000)})();
/* animated top dock: proximity spring (port of AnimatedTopDock sable) */
const O={proximity:122,spring:.19,damping:.7,widthGrowth:17,heightGrowth:16,drop:3.5};
if(matchMedia('(prefers-reduced-motion:reduce)').matches)O.widthGrowth=O.heightGrowth=O.drop=0;
const st=items.map(()=>({s:0,v:0}));let px=null,py=null,raf=0;
function tick(){let live=false;items.forEach((b,i)=>{const r=b.getBoundingClientRect(),o=st[i];let t=0;if(px!==null)t=Math.pow(Math.max(0,1-Math.hypot(px-(r.left+r.width/2),py-(r.top+r.height/2))/O.proximity),2);o.v=(o.v+(t-o.s)*O.spring)*O.damping;o.s+=o.v;if(Math.abs(o.v)>.0005||Math.abs(o.s-t)>.002)live=true;b.style.setProperty('--w',o.s*O.widthGrowth+'px');b.style.setProperty('--h',o.s*O.heightGrowth+'px');b.style.setProperty('--d',o.s*O.drop+'px');b.style.setProperty('--s',o.s)});raf=live||px!==null?requestAnimationFrame(tick):0}
const dk=$('#dock');dk.addEventListener('pointermove',e=>{px=e.clientX;py=e.clientY;if(!raf)raf=requestAnimationFrame(tick)});dk.addEventListener('pointerleave',()=>{px=null;if(!raf)raf=requestAnimationFrame(tick)});
/* network background */
let PC='255,180,84';const setPC=()=>{PC=getComputedStyle(document.documentElement).getPropertyValue('--pc').trim()||PC};setPC();
(function(){const c=$('#bg'),x=c.getContext('2d');let w,h,P=[],m={x:-999,y:-999};const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight;P=Array.from({length:Math.min(70,w*h/18000|0)},()=>({x:Math.random()*w,y:Math.random()*h,vx:Math.random()-.5,vy:Math.random()-.5}))};rs();addEventListener('resize',rs);addEventListener('pointermove',e=>{m.x=e.clientX;m.y=e.clientY});
(function f(){x.clearRect(0,0,w,h);P.forEach((p,i)=>{p.x=(p.x+p.vx*.4+w)%w;p.y=(p.y+p.vy*.4+h)%h;const dm=Math.hypot(p.x-m.x,p.y-m.y);if(dm<140){p.x+=(p.x-m.x)/dm*1.2;p.y+=(p.y-m.y)/dm*1.2}x.fillStyle='rgba('+PC+',.55)';x.fillRect(p.x,p.y,2,2);for(let j=i+1;j<P.length;j++){const q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){x.strokeStyle=`rgba(${PC},${(1-d/120)*.16})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});if(!RM_)requestAnimationFrame(f)})()})();

/* glass detail cards */
const D={
'Understand goals':'The agent turns a plain-language goal into a clear objective before acting.|Reads your request, files and context together|Asks for clarification only when it truly needs it|Defines what "done" looks like so the result can be verified',
'Plan tasks':'Big goals are broken into ordered, checkable steps.|Builds a step-by-step plan before execution|Chooses which tools and models each step needs|Adjusts the plan when a step fails or new info appears',
'Use tools':'The agent can act, not just answer, through a set of built-in tools.|Terminal, files, browser, Git, search and code execution|Every tool call passes through the permission system|Extendable with plugins and MCP',
'Work with files':'Upload documents, data and code and the agent can read and reason over them.|PDF, DOCX, spreadsheets, JSON, SQL and source code|Content is parsed, indexed and retrieved when relevant|Images, audio and video planned for later',
'Browse the web':'Research current information instead of relying on stale knowledge.|Search, open and compare multiple sources|Extract the key facts and take screenshots|Summarize findings into a report',
'Execute commands':'Run real commands in a controlled environment to build, test and automate.|Runs inside a sandboxed workspace|Risky commands need your approval|Outputs are read back to verify the result',
'Connect apps':'Link the agent to the apps and services you already use.|Delivered through plugins and integrations|Example: a GitHub plugin that searches repos and opens issues and pull requests|Access is granted per app, under your control',
'Use different models':'Pick the best model for each job without changing tools.|OpenRouter first, plus direct APIs and local models|Switch between Claude, GPT, DeepSeek, Qwen, Llama and others|Avoids dependence on a single vendor',
'Automate workflows':'Repeatable multi-step jobs can run with minimal supervision.|Chains search, extraction, analysis and report generation|Combines tools, skills and integrations|Keeps a verification step before returning results',
'Vendor lock-in':'Depending on one AI provider limits your freedom.|Pricing, limits and policy changes become your problem|Switching later means rebuilding your workflow|DEVA’S CODE keeps the model layer swappable',
'Limited model choice':'Most tools give you one or two models, even when others fit the task better.|Different models are better at code, reasoning or speed|You can’t easily compare or mix them|A unified model layer fixes this',
'Separate tools per task':'Coding, research, file analysis and automation usually live in different apps.|Constant context switching|Work and data get duplicated across tools|One Agent Core handles all of it',
'Limited customization':'Closed tools rarely let you change how the agent behaves.|Hard to add specialised knowledge|Little control over workflows|Open source plus skills and plugins make it adaptable',
'Difficult integrations':'Connecting an AI tool to your real apps is often painful or unsupported.|Custom glue code for every service|Fragile and hard to maintain|Plugins and MCP standardise this',
'Limited control over agent actions':'When an agent can act, you need to decide what it may do.|Unclear what the agent will run or change|Hard to audit what happened|Permissions, sandboxing and audit logs give you control',
'AI Agent':'The brain of the platform, built to complete multi-step tasks.|Understand → plan → use tools → execute → verify|One Agent Core powers both web and terminal|Works across models and tools',
'Multi-Model':'Support for many providers and models behind one interface.|OpenRouter as the primary route|Direct APIs such as OpenAI, Google, Anthropic and DeepSeek|Local models such as Qwen and Llama',
'Web + Terminal':'Two interfaces, one agent.|Web for students, researchers and business users|CLI for developers, DevOps and power users|Same Agent Core, so behaviour stays consistent',
'File Intelligence':'Upload, detect, parse, extract, index, retrieve, analyze.|Documents, data and code supported|Media (images, audio, video) planned|Retrieval keeps large files usable',
'Web Browsing':'Search, research and browser automation in one feature.|Navigate, click and type on pages|Extract information and take screenshots|Compare sources before reporting',
'Plugins':'Add new capabilities without changing the core.|Example: a GitHub plugin with Search Repository, Create Issue and Create Pull Request|Installed per user or workspace|Subject to the permission system',
'Skills':'Skills teach the agent specialised workflows and knowledge.|Examples: React, Cybersecurity, Research, PDF Analysis|Loaded when a task needs them|Easy to write and share',
'Integrations':'Connect external applications and services to the agent.|Planned for Phase 9, building on plugins and MCP|Lets the agent work where your data lives|Each connection is permissioned',
'Tools':'The agent’s hands.|Terminal, Files, Browser, Git, Search, Code execution|Called by the Agent Core as needed|Gated by Read, Modify, Execute and External Action permissions',
'Web Interface':'A friendly browser UI for people who don’t live in a terminal.|Students, researchers, business users, general users|Same capabilities as the CLI|Planned for Phase 3',
'Terminal Interface':'A fast, scriptable interface for technical users.|Developers, DevOps, power users|Great for automation and pipelines|Ships first, in Phase 1',
'CODING':'Write, edit and test code with the agent.|Works with files, Git and the terminal|Skills like React or Cybersecurity add domain knowledge',
'RESEARCH':'Gather and synthesize information from many sources.|Uses the browser and file analysis|Produces comparable, source-backed reports',
'AUTOMATION':'Hand repetitive work to AI agents.|Connects to apps through plugins and integrations|Runs multi-step workflows with verification',
'Phase 1':'Agent Core + CLI + OpenRouter|The foundation: the core loop, a terminal interface and model access through OpenRouter',
'Phase 2':'Multi-provider system|Add direct provider APIs and local models beside OpenRouter',
'Phase 3':'Web interface|A browser client on top of the same Agent Core',
'Phase 4':'File intelligence|Upload, parse, index and retrieve documents, data and code',
'Phase 5':'Browser automation|Search, navigate, click, type and extract from websites',
'Phase 6':'Skills|Specialised knowledge and workflows the agent can load',
'Phase 7':'Plugins|Installable capabilities such as a GitHub plugin',
'Phase 8':'MCP|Standard protocol support for connecting external tools',
'Phase 9':'Application integrations|Connect the agent to external apps and services',
'Phase 10':'Multi-agent system|Several agents collaborating on larger goals',
'Phase 11':'Advanced model routing + self-hosting|Smarter model selection and the option to run everything yourself'};
const md=$('#md');
function openD(c){const ph=c.classList.contains('ph');let k,t,sub;if(ph){k=c.querySelector('b').textContent.replace('PHASE ','Phase ');t=c.childNodes[1].textContent;sub=c.querySelector('b').textContent}else{t=c.querySelector('h3').textContent.replace(/^[^A-Za-z]+/,'');k=t;sub='DETAILS'}
const d=(D[k]||'').split('|'),short=!ph&&c.querySelector('p')?c.querySelector('p').textContent:'';
$('#ms').textContent=sub;$('#mt').textContent=t;$('#mp').textContent=ph?d[0]===t?d[1]:d[0]:(d[0]||short);$('#ml').innerHTML=(ph?d.slice(2):d.slice(1)).map(x=>`<li>${x}</li>`).join('');
if(ph)$('#mp').textContent=d[1]||'';md.classList.add('open')}
const CS='.c:not(.node):not(.perm)',ok=c=>c.querySelector('h3')||c.classList.contains('ph');
$$(CS).forEach(c=>{if(ok(c)){c.tabIndex=0;c.setAttribute('role','button')}});
let CL=[],ci=0,lf=null;
function show(i){ci=(i+CL.length)%CL.length;openD(CL[ci]);$('#mc2').textContent=`${ci+1} / ${CL.length}`}
function closeD(){md.classList.remove('open');document.body.style.overflow='';lf&&lf.focus()}
document.addEventListener('click',e=>{const c=e.target.closest(CS);if(!c||md.classList.contains('open')||!ok(c))return;lf=c;CL=[...c.closest('section').querySelectorAll(CS)].filter(ok);document.body.style.overflow='hidden';show(CL.indexOf(c));$('.x').focus()});
md.addEventListener('click',e=>{if(e.target==md||e.target.closest('.x'))closeD()});
$('#pv').onclick=()=>show(ci-1);$('#nx').onclick=()=>show(ci+1);
addEventListener('keydown',e=>{if(md.classList.contains('open')){if(e.key=='Escape')closeD();else if(e.key=='ArrowRight')show(ci+1);else if(e.key=='ArrowLeft')show(ci-1);else return;e.preventDefault();e.stopImmediatePropagation()}else if((e.key=='Enter'||e.key==' ')&&e.target.matches&&e.target.matches('.c[role=button]')){e.preventDefault();e.target.click()}},true);
/* real screenshots override mockups when present */
$$('.shot[data-n]').forEach(f=>{const im=new Image();im.alt=f.dataset.n+' screenshot';im.onload=()=>{f.querySelector('.bd').replaceWith(im);f.querySelector('figcaption').remove()};im.src='shots/'+f.dataset.n+'.png'});

const tt=$('#tt'),cd=()=>document.documentElement.dataset.theme=='dark';
const setT=t=>{document.documentElement.dataset.theme=t;try{localStorage.setItem('deva-theme',t)}catch(e){}tt.textContent=t=='dark'?'☀':'☾';tt.setAttribute('aria-label',t=='dark'?'Switch to light theme':'Switch to dark theme');setPC()};
tt.onclick=()=>setT(cd()?'light':'dark');setT(document.documentElement.dataset.theme);
const bt=$('#top');if(bt)bt.onclick=()=>{$('#hero').scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>{if(scrollY>4)scrollTo(0,0)},900)};
mark();

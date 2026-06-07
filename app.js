// FlashCards 4U v61 app logic
// vocab loaded externally
var LC={A1:"#00d084",A2:"#00c9c9",B1:"#4d9fff",B2:"#b87fff",C1:"#ff8c00",C2:"#ff3b5c",GR:"#9b59b6",PRV:"#e67e22",AWL:"#27ae60",MED:"#e74c3c",BIZ:"#2980b9",TECH:"#8e44ad",HOM:"#e91e8c",BOD:"#00bcd4",FOD:"#8bc34a",NAT:"#4caf50",TRN:"#ff9800",HLT:"#f44336",EMO:"#9c27b0",CLO:"#ff5722",EDU:"#3f51b5",VRB:"#009688",ADJ:"#673ab7",ADV:"#607d8b",SPT:"#ff6b35",SCI:"#5c6bc0",ART:"#ab47bc",ENV:"#26a69a",WRK:"#42a5f5",TRV:"#26c6da",DIG:"#7e57c2",WEA:"#66bb6a",FPR:"#ef5350",LAW:"#8d6e63",PSY:"#ff7043",COL:"#00897b",PV:"#1e88e5",IDM:"#e53935"};
var LE={A1:"🌱",A2:"🌿",B1:"🌳",B2:"🦅",C1:"🔥",C2:"🏆",GR:"📝",PRV:"💬",AWL:"🎓",MED:"🏥",BIZ:"💼",TECH:"💻",HOM:"🏠",BOD:"🫀",FOD:"🍎",NAT:"🌍",TRN:"🚗",HLT:"💊",EMO:"❤️",CLO:"👕",EDU:"📚",VRB:"⚡",ADJ:"🎨",ADV:"💨",SPT:"⚽",SCI:"🔬",ART:"🎭",ENV:"🌿",WRK:"💼",TRV:"✈️",DIG:"📱",WEA:"☀️",FPR:"🍳",LAW:"⚖️",PSY:"🧠",COL:"🔗",PV:"🔀",IDM:"💡"};
var LF={A1:"مبتدی",A2:"مقدماتی",B1:"متوسط",B2:"فوق متوسط",C1:"پیشرفته",C2:"تسلط کامل",GR:"گرامر",PRV:"ضرب‌المثل",AWL:"دانشگاهی",MED:"پزشکی",BIZ:"تجاری",TECH:"فناوری",HOM:"وسایل خانه",BOD:"اعضای بدن",FOD:"غذا و نوشیدنی",NAT:"طبیعت",TRN:"حمل‌ونقل",HLT:"سلامت",EMO:"احساسات",CLO:"پوشاک",EDU:"تحصیل",VRB:"افعال",ADJ:"صفت‌ها",ADV:"قیدها",SPT:"ورزش",SCI:"علوم",ART:"هنر و فرهنگ",ENV:"محیط زیست",WRK:"کار و شغل",TRV:"سفر",DIG:"دیجیتال",WEA:"آب‌وهوا",FPR:"آشپزی",LAW:"حقوق",PSY:"روانشناسی",COL:"کالوکیشن",PV:"افعال ترکیبی",IDM:"اصطلاح"};
var LEVELS=["A1","A2","B1","B2","C1","C2"];
var SPECIALS=["PHR","GR","PRV","AWL","MED","BIZ","TECH","HOM","BOD","FOD","NAT","TRN","HLT","EMO","CLO","EDU","SPT","SCI","ART","ENV","WRK","TRV","DIG","WEA","FPR","LAW","PSY","COL","PV","IDM"];var GRAMCATS=["VRB","ADJ","ADV"];
var XPM=[0,5,15,30];
var DAYS=["ش","ی","د","س","چ","پ","ج"];
var QUOTES=[
  "🌟 <b>هر روز یک قدم</b> — یادگیری زبان یک ماراتن است، نه دوی سرعت. تداوم کلید موفقیت است.",
  "🚀 <b>۱۵ دقیقه در روز</b> کافیست تا در یک سال بیش از ۵۰۰۰ کارت یاد بگیری.",
  "🧠 <b>علم ثابت کرده</b> که تکرار فاصله‌دار (SRS) سریع‌ترین روش یادگیری کارت است.",
  "💪 <b>هر کارتی که یاد می‌گیری</b> درهای جدیدی از فرصت‌های شغلی و علمی باز می‌شود.",
  "🌍 <b>زبان انگلیسی</b> زبان ۱.۵ میلیارد نفر است — سرمایه‌گذاری در آن همیشه ارزشمند است.",
  "✨ <b>مغز انسان</b> در حین خواب کارت‌ها جدید را تثبیت می‌کند — شب مطالعه کن، صبح بهتر به یاد خواهی داشت.",
  "🎯 <b>فقط صادقانه ارزیابی کن</b> — هوش مصنوعی این اپ بهترین زمان مرور را برایت تعیین می‌کند.",
  "⚡ <b>FlashCards 4U</b> از الگوریتم SM-2 استفاده می‌کند — همان روشی که Anki از آن بهره می‌برد.",
  "🏆 <b>زبان‌آموزان موفق</b> یک ویژگی مشترک دارند: هر روز، حتی ۵ دقیقه، مطالعه می‌کنند.",
  "💡 <b>تحقیقات نشان می‌دهد</b> یادگیری کارت در قالب مثال و جمله، ماندگاری آن را ۴ برابر افزایش می‌دهد.",
  "📖 <b>Nelson Mandela</b> گفت: اگر با زبانی که می‌فهمد با کسی صحبت کنی، به ذهنش می‌رسد. اگر به زبان خودش صحبت کنی، به قلبش.",
  "🔥 <b>هر اشتباهی که می‌کنی</b> یعنی داری یاد می‌گیری — مغز از خطا بهتر یاد می‌گیرد تا از تکرار صحیح.",
  "🌈 <b>دو زبانه بودن</b> مغز را از آلزایمر محافظت می‌کند و توانایی تمرکز را تا ۲ برابر افزایش می‌دهد.",
  "⏰ <b>بهترین وقت برای یادگیری</b> الان است. دومین بهترین وقت هم الان است — فقط شروع کن!",
  "💎 <b>Warren Buffett</b> می‌گوید: سرمایه‌گذاری روی خودت بهترین سرمایه‌گذاری است — زبان بیاموز.",
  "🎵 <b>موسیقی به زبان</b> خودت گوش بده — مغز کارت‌ها را از طریق موسیقی ۵ برابر سریع‌تر حفظ می‌کند.",
  "🏃 <b>کسی که با اشتیاق یاد می‌گیرد</b> هرگز احساس خستگی نمی‌کند — یادگیری را به عادت تبدیل کن.",
  "🌙 <b>قبل از خواب</b> ۱۰ کارت مرور کن — مغز در خواب آن‌ها را در حافظه بلندمدت ذخیره می‌کند.",
  "🎯 <b>تفاوت بین کسی که می‌داند</b> و کسی که نمی‌داند فقط در تکرار است — هر روز تکرار کن.",
  "🚀 <b>زبان انگلیسی</b> در دنیای دیجیتال زبان شماره یک است — هر کارت یاد گرفته یک قدم به جلو است.",
];
var BADGES=[
  {id:"b1",ico:"🎯",lbl:"اولین قدم",ok:function(g,p){return g.totalXP>=1;}},
  {id:"b2",ico:"🔥",lbl:"۳ روز",ok:function(g,p){return g.streak>=3;}},
  {id:"b3",ico:"⚡",lbl:"یک هفته",ok:function(g,p){return g.streak>=7;}},
  {id:"b4",ico:"🌟",lbl:"یک ماه",ok:function(g,p){return g.streak>=30;}},
  {id:"b5",ico:"📚",lbl:"۵۰ کارت",ok:function(g,p){return Object.values(p).filter(function(x){return x.reviews>0;}).length>=50;}},
  {id:"b6",ico:"📖",lbl:"۱۰۰ کارت",ok:function(g,p){return Object.values(p).filter(function(x){return x.reviews>0;}).length>=100;}},
  {id:"b7",ico:"🎓",lbl:"۵۰۰ کارت",ok:function(g,p){return Object.values(p).filter(function(x){return x.reviews>0;}).length>=500;}},
  {id:"b8",ico:"🏆",lbl:"۱۰ تسلط",ok:function(g,p){return Object.values(p).filter(function(x){return (x.mastery||0)>=70;}).length>=10;}},
  {id:"b9",ico:"💎",lbl:"۵۰ تسلط",ok:function(g,p){return Object.values(p).filter(function(x){return (x.mastery||0)>=70;}).length>=50;}},
  {id:"b10",ico:"⭐",lbl:"۵۰۰ XP",ok:function(g,p){return g.totalXP>=500;}},
  {id:"b11",ico:"👑",lbl:"۱۰۰۰ XP",ok:function(g,p){return g.totalXP>=1000;}},
];
var AVS=["🧑","👩","👨","👧","👦","👩‍🎓","👨‍🎓","👩‍💻","👨‍💻","👨‍🏫"];

// STATE
var users={},uid=null,sq=[],cur=null,flipped=false;
var wf="all",voices=[],sRev=0,sMas=0,sXP=0;
var cfg={dailyNew:20,autoSpeak:"front",speakRate:"normal",accent:"us",examMode:false,showSyn:true,order:"due",fontSize:1.08};
var isLight=false;
var selAv="🧑";
var navStack=[], appHistoryReady=false, appBackExiting=false;


// Quiz state
var qWords=[],qIdx=0,qScore=0,qCorrect=0,qWrong=0,qDone=false;

function gu(){return users[uid];}
function gp(){return (gu()&&gu().progress)||{};}
function gg(){return (gu()&&gu().game)||{};}

// TOAST
function toast(msg,dur){
  var t=document.getElementById("toast");
  t.textContent=msg;t.style.display="block";
  setTimeout(function(){t.classList.add("show");},10);
  clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove("show");setTimeout(function(){t.style.display="none";},220);},dur||2200);
}

function showHelpTip(title,body){
  var box=document.getElementById("help-tip");
  if(!box)return;
  document.getElementById("help-tip-title").textContent=title||"راهنما";
  document.getElementById("help-tip-body").textContent=body||"";
  box.classList.add("show");
  clearTimeout(box._t);
  box._t=setTimeout(function(){box.classList.remove("show");},5200);
}
function setupIconHelp(){
  document.addEventListener("click",function(e){
    var el=e.target.closest&&e.target.closest("[data-help-title]");
    if(!el)return;
    showHelpTip(el.getAttribute("data-help-title"),el.getAttribute("data-help-body"));
  });
}
function applyFontScale(){
  var s=cfg.fontSize||1.08;
  if(s<1)s=1;
  if(s>1.6)s=1.6;
  cfg.fontSize=s;
  document.documentElement.style.fontSize=(16*s)+"px";
  document.documentElement.style.setProperty("--ui-scale",s);
}

// SAVE
function save(){
  try{localStorage.setItem("fc4u_u",JSON.stringify(users));}catch(e){}
  try{localStorage.setItem("fc4u_cfg",JSON.stringify(cfg));}catch(e){}
  try{localStorage.setItem("fc4u_thm",isLight?"light":"dark");}catch(e){}
  if(uid)localStorage.setItem("fc4u_uid",uid);
}

// SHOW SCREEN
function activeScreen(){
  var el=document.querySelector(".scr.on");
  return el ? el.id : "";
}
function syncBrowserState(id,replace){
  try{
    var st={fc4u:true,scr:id};
    if(replace||!appHistoryReady){history.replaceState(st,"","#"+id);appHistoryReady=true;}
    else history.pushState(st,"","#"+id);
  }catch(e){}
}
function showScr(id){
  var all=document.querySelectorAll(".scr");
  for(var i=0;i<all.length;i++)all[i].classList.remove("on");
  var el=document.getElementById(id);
  if(el){el.classList.add("on");el.scrollTop=0;}
  if(id==="login"){buildAvatars();}
}

// GOTO TAB
function gotoTab(id,opts){
  opts=opts||{};
  var from=activeScreen();
  if(from&&from!==id&&!opts.skipStack)navStack.push(from);
  showScr(id);
  if(!opts.skipBrowser)syncBrowserState(id,!!opts.replace);
  // Remove active from all nav buttons
  document.querySelectorAll("#bnav .bnt").forEach(function(b){b.classList.remove("on");});
  var btn=document.getElementById("btn_"+id);
  if(btn)btn.classList.add("on");
  // Update indicator
  updateNind(id);
  if(id==="stats")renderStats();
  if(id==="words")renderWL();
  if(id==="profile")renderProfile();
  if(id==="lvls")updateLvlCounts();
  if(id==="welcome")updateWelcome();
  if(id==="quiz")showQuizSetup();
  if(id==="mycards"){initMycards();}
  if(id==="login"){renderLogin();document.getElementById("bnav").style.display="none";}
  else if(uid){document.getElementById("bnav").style.display="flex";}
}

function setupBackNavigation(){
  syncBrowserState(activeScreen()||"login",true);
  window.addEventListener("popstate",function(){
    if(appBackExiting)return;
    var active=activeScreen();
    if(navStack.length){
      var prev=navStack.pop();
      gotoTab(prev,{skipStack:true,skipBrowser:true});
      syncBrowserState(prev,true);
      return;
    }
    if(uid&&users[uid]&&active!=="welcome"){
      gotoTab("welcome",{skipStack:true,replace:true});
      return;
    }
    appBackExiting=true;
    history.back();
  });
}

function updateNind(id){
  requestAnimationFrame(function(){
    var btns=Array.from(document.querySelectorAll("#bnav .bnt"));
    if(!btns.length)return;
    var ind=document.getElementById("nind");
    var nb=document.getElementById("bnav");
    var nbRect=nb.getBoundingClientRect();
    var activeBtn=document.getElementById("btn_"+id);
    if(!activeBtn)activeBtn=btns[0];
    var idx=btns.indexOf(activeBtn);
    if(idx<0)idx=0;
    var w=nbRect.width/btns.length;
    ind.style.width=w+"px";
    ind.style.left=(idx*w)+"px";
  });
}

// BUILD AVATARS
function buildAvatars(){
  var row=document.getElementById("avr");row.innerHTML="";
  AVS.forEach(function(a,i){
    var btn=document.createElement("button");
    btn.className="av-btn"+(i===0?" sel":"");
    btn.textContent=a;
    btn.addEventListener("click",function(){
      selAv=a;
      document.querySelectorAll(".av-btn").forEach(function(b){b.classList.remove("sel");});
      btn.classList.add("sel");
    });
    row.appendChild(btn);
  });
}

// BUILD FILTERS
function buildFilters(){
  var row=document.getElementById("frow");row.innerHTML="";
  var filters=[
    {f:"all",lbl:"همه",col:""},
    {f:"A1",lbl:"A1",col:"var(--A1)"},{f:"A2",lbl:"A2",col:"var(--A2)"},
    {f:"B1",lbl:"B1",col:"var(--B1)"},{f:"B2",lbl:"B2",col:"var(--B2)"},
    {f:"C1",lbl:"C1",col:"var(--C1)"},{f:"C2",lbl:"C2",col:"var(--C2)"},
    {f:"VRB",lbl:"⚡افعال",col:"var(--VRB)"},
    {f:"ADJ",lbl:"🎨صفت",col:"var(--ADJ)"},
    {f:"ADV",lbl:"💨قید",col:"var(--ADV)"},
    {f:"idiom",lbl:"اصطلاح",col:"var(--pu)"},
    {f:"GR",lbl:"📝گرامر",col:"var(--GR)"},
    {f:"PRV",lbl:"💬ضرب‌المثل",col:"var(--PRV)"},
    {f:"AWL",lbl:"🎓دانشگاهی",col:"var(--AWL)"},
    {f:"MED",lbl:"🏥پزشکی",col:"var(--MED)"},
    {f:"BIZ",lbl:"💼تجاری",col:"var(--BIZ)"},
    {f:"TECH",lbl:"💻فناوری",col:"var(--TECH)"},
    {f:"HOM",lbl:"🏠خانه",col:"var(--HOM)"},
    {f:"BOD",lbl:"🫀بدن",col:"var(--BOD)"},
    {f:"FOD",lbl:"🍎غذا",col:"var(--FOD)"},
    {f:"NAT",lbl:"🌍طبیعت",col:"var(--NAT)"},
    {f:"TRN",lbl:"🚗حمل‌ونقل",col:"var(--TRN)"},
    {f:"HLT",lbl:"💊سلامت",col:"var(--HLT)"},
    {f:"EMO",lbl:"❤️احساس",col:"var(--EMO)"},
    {f:"CLO",lbl:"👕پوشاک",col:"var(--CLO)"},
    {f:"EDU",lbl:"📚تحصیل",col:"var(--EDU)"},
    {f:"SPT",lbl:"⚽ورزش",col:"var(--SPT)"},
    {f:"SCI",lbl:"🔬علوم",col:"var(--SCI)"},
    {f:"ART",lbl:"🎭هنر",col:"var(--ART)"},
    {f:"ENV",lbl:"🌿محیط",col:"var(--ENV)"},
    {f:"WRK",lbl:"💼شغل",col:"var(--WRK)"},
    {f:"TRV",lbl:"✈️سفر",col:"var(--TRV)"},
    {f:"DIG",lbl:"📱دیجیتال",col:"var(--DIG)"},
    {f:"WEA",lbl:"☀️آب‌وهوا",col:"var(--WEA)"},
    {f:"FPR",lbl:"🍳آشپزی",col:"var(--FPR)"},
    {f:"LAW",lbl:"⚖️حقوق",col:"var(--LAW)"},
    {f:"PSY",lbl:"🧠روانشناسی",col:"var(--PSY)"},
    {f:"COL",lbl:"🔗کالوکیشن",col:"var(--COL)"},
    {f:"PV",lbl:"🔀افعال ترکیبی",col:"var(--PV)"},
    {f:"IDM",lbl:"💡اصطلاح",col:"var(--IDM)"},
    {f:"PHR",lbl:"💬جملات روزمره",col:"var(--PHR)"},
  ];
  filters.forEach(function(fi){
    var btn=document.createElement("button");
    btn.className="fchip"+(fi.f==="all"?" on":"");
    btn.textContent=fi.lbl;
    if(fi.col){btn.style.color=fi.col;btn.style.borderColor=fi.col;}
    btn.addEventListener("click",function(){
      wf=fi.f;
      document.querySelectorAll(".fchip").forEach(function(b){b.classList.remove("on");});
      btn.classList.add("on");renderWL();
    });
    row.appendChild(btn);
  });
}

// BUILD FONT SIZE BUTTONS
function buildFSBtns(){
  var row=document.getElementById("fsrow");row.innerHTML="";
  [{v:1,lbl:"A"},{v:1.15,lbl:"A+"},{v:1.35,lbl:"A++"},{v:1.55,lbl:"A+++"}].forEach(function(s){
    var btn=document.createElement("button");
    btn.className="fsbtn"+(s.v===cfg.fontSize?" on":"");
    btn.textContent=s.lbl;
    btn.addEventListener("click",function(){
      cfg.fontSize=s.v;
      applyFontScale();
      document.querySelectorAll(".fsbtn").forEach(function(b){b.classList.remove("on");});
      btn.classList.add("on");save();toast("اندازه فونت تغییر کرد ✓");
    });
    row.appendChild(btn);
  });
}

// BUILD SEGMENTS
function buildSegs(){
  [["seg-order","order"],["seg-speak","autoSpeak"],["seg-rate","speakRate"],["seg-accent","accent"],["qlvl-seg","__qlvl"],["qnum-seg","__qnum"]].forEach(function(pair){
    var seg=document.getElementById(pair[0]);if(!seg)return;
    var btns=seg.querySelectorAll(".sgo");
    btns.forEach(function(btn){
      btn.addEventListener("click",function(){
        var v=btn.getAttribute("data-v");
        if(pair[1]==="__qlvl")qLevel=v;
        else if(pair[1]==="__qnum")qTotal=parseInt(v);
        else cfg[pair[1]]=v;
        btns.forEach(function(b){b.classList.remove("on");});
        btn.classList.add("on");
        if(pair[1]!=="__qlvl"&&pair[1]!=="__qnum")save();
      });
    });
  });
}

// BUILD LEVEL BUTTONS
function buildLvlBtns(){
  var allLvls=["ALL"].concat(LEVELS).concat(SPECIALS).concat(GRAMCATS);
  allLvls.forEach(function(lv){
    var el=document.getElementById("lv_"+lv);
    if(el)el.addEventListener("click",function(){selectLevel(lv);});
    var qb=document.getElementById("qbtn_"+lv);
    if(qb)qb.addEventListener("click",function(e){e.stopPropagation();startQuizFor(lv);});
  });
}

// INIT
function init(){
  try{users=JSON.parse(localStorage.getItem("fc4u_u")||"{}");}catch(e){users={};}
  try{var s=JSON.parse(localStorage.getItem("fc4u_cfg")||"{}");cfg=Object.assign({},cfg,s);}catch(e){}
  try{isLight=localStorage.getItem("fc4u_thm")==="light";if(isLight)document.body.classList.add("light");}catch(e){}
  uid=localStorage.getItem("fc4u_uid")||null;
  applyFontScale();
  applyThemeBtn();
  buildAvatars();buildFilters();buildFSBtns();buildSegs();buildLvlBtns();
  setupTTS();

  // All event listeners
  document.getElementById("login-btn").addEventListener("click",createUser);
  document.getElementById("uinp").addEventListener("keydown",function(e){if(e.key==="Enter")createUser();});
  document.getElementById("start-btn").addEventListener("click",function(){buildQ();gotoTab("study");});
  document.getElementById("showbtn").addEventListener("click",flipCard);
  document.getElementById("card").addEventListener("click",flipCard);
  document.getElementById("fabtn").addEventListener("click",function(e){e.stopPropagation();speak();});
  document.getElementById("abbtn").addEventListener("click",function(e){e.stopPropagation();speak();});
  document.getElementById("r0").addEventListener("click",function(){rate(0);});
  document.getElementById("r1").addEventListener("click",function(){rate(1);});
  document.getElementById("r2").addEventListener("click",function(){rate(2);});
  document.getElementById("r3").addEventListener("click",function(){rate(3);});
  document.getElementById("r4").addEventListener("click",function(){rate(4);});
  document.getElementById("more-btn").addEventListener("click",forceMore);
  document.getElementById("lvlbtn").addEventListener("click",function(){gotoTab("lvls");});
  var nh=document.getElementById("nav-home");if(nh)nh.addEventListener("click",function(){gotoTab("welcome");});
  var sqb=document.getElementById("settings-quick-btn");
  if(sqb)sqb.addEventListener("click",function(){gotoTab("settings");});
  var thb=document.getElementById("thmbtn");if(thb)thb.addEventListener("click",toggleTheme);
  document.getElementById("btn_welcome").addEventListener("click",function(){gotoTab("welcome");});
  document.getElementById("btn_study").addEventListener("click",function(){gotoTab("study");});
  document.getElementById("btn_quiz").addEventListener("click",function(){gotoTab("quiz");});
  document.getElementById("btn_stats").addEventListener("click",function(){gotoTab("stats");});
  var bw=document.getElementById("btn_words");
  if(bw)bw.addEventListener("click",function(){gotoTab("words");});
  document.getElementById("add-user-btn").addEventListener("click",function(){gotoTab("login");});
  document.getElementById("reset-btn").addEventListener("click",resetUser);
  document.getElementById("dn-m").addEventListener("click",function(){cfg.dailyNew=Math.max(5,(cfg.dailyNew||20)-5);document.getElementById("dn-val").textContent=cfg.dailyNew;save();});
  document.getElementById("dn-p").addEventListener("click",function(){cfg.dailyNew=Math.min(50,(cfg.dailyNew||20)+5);document.getElementById("dn-val").textContent=cfg.dailyNew;save();});
  document.getElementById("tog-exam").addEventListener("click",function(){togCfg("examMode",this);});
  document.getElementById("tog-syn").addEventListener("click",function(){togCfg("showSyn",this);});
  document.getElementById("tog-thm").addEventListener("click",toggleTheme);
  var peb=document.getElementById("profile-export-btn");if(peb)peb.addEventListener("click",exportProfile);
  var pif=document.getElementById("profile-import-file");if(pif)pif.addEventListener("change",function(){importProfile(this);});
  document.getElementById("wsrch").addEventListener("input",renderWL);
  // Dashboard quick buttons
  var db=document.getElementById("dash-lvl-btn");if(db)db.addEventListener("click",function(){gotoTab("lvls");});
  var dq=document.getElementById("dash-quiz-btn");if(dq)dq.addEventListener("click",function(){gotoTab("quiz");});
  var dw=document.getElementById("dash-words-btn");if(dw)dw.addEventListener("click",function(){gotoTab("words");});
  var ds=document.getElementById("dash-stats-btn");if(ds)ds.addEventListener("click",function(){gotoTab("stats");});
  var dsg=document.getElementById("dash-settings-btn");if(dsg)dsg.addEventListener("click",function(){gotoTab("settings");});
  // Welcome user bar buttons
  var wlSwitch=document.getElementById("wl-switch-btn");
  if(wlSwitch)wlSwitch.addEventListener("click",function(){gotoTab("login");});
  var wlLvl=document.getElementById("wl-lvl-btn");
  if(wlLvl)wlLvl.addEventListener("click",function(){gotoTab("lvls");});
  applySegsUI();
  // Quiz result buttons  
  var qrr=document.getElementById("qr-retry");if(qrr)qrr.addEventListener("click",showQuizSetup);
  var qrs_el=document.getElementById("qr-study");if(qrs_el)qrs_el.addEventListener("click",function(){gotoTab("study");});
  // My Cards nav button
  var bmc=document.getElementById("btn_mycards");if(bmc)bmc.addEventListener("click",function(){gotoTab("mycards");});
  // Quiz setup
  setupQuizButtons();
  setupBackNavigation();
  setupIconHelp();

  if(uid&&users[uid])afterLogin();
  else{renderLogin();showScr("login");syncBrowserState("login",true);buildAvatars();document.getElementById("bnav").style.display="none";}
}

// THEME
function toggleTheme(){
  isLight=!isLight;document.body.classList.toggle("light",isLight);
  localStorage.setItem("fc4u_thm",isLight?"light":"dark");applyThemeBtn();
}
function applyThemeBtn(){
  var th=document.getElementById("thmbtn");if(th)th.textContent=isLight?"☀️":"🌙";
  var t=document.getElementById("tog-thm");
  if(t){t.classList.toggle("on",isLight);t.classList.toggle("off",!isLight);}
}

// TOGGLE
function togCfg(k,btn){cfg[k]=!cfg[k];btn.classList.toggle("on",cfg[k]);btn.classList.toggle("off",!cfg[k]);save();}

function applySegsUI(){
  var m={
    "seg-order":cfg.order,"seg-speak":cfg.autoSpeak,
    "seg-rate":cfg.speakRate,"seg-accent":cfg.accent
  };
  Object.keys(m).forEach(function(id){
    var seg=document.getElementById(id);if(!seg)return;
    seg.querySelectorAll(".sgo").forEach(function(b){
      b.classList.toggle("on",b.getAttribute("data-v")===m[id]);
    });
  });
  var dn=document.getElementById("dn-val");if(dn)dn.textContent=cfg.dailyNew;
  ["tog-exam","tog-syn"].forEach(function(id){
    var el=document.getElementById(id);if(!el)return;
    var k=id==="tog-exam"?"examMode":"showSyn";
    el.classList.toggle("on",cfg[k]);el.classList.toggle("off",!cfg[k]);
  });
}

// USERS
function renderLogin(){
  var ul=document.getElementById("ul"),sec=document.getElementById("ulsec");
  var keys=Object.keys(users);
  if(!keys.length){sec.style.display="none";return;}
  sec.style.display="block";ul.innerHTML="";
  keys.forEach(function(k){
    var u=users[k];
    var rev=Object.values(u.progress||{}).filter(function(x){return x.reviews>0;}).length;
    var d=document.createElement("div");d.className="ui";
    var av=document.createElement("div");av.className="uav";av.textContent=u.avatar;
    var nm=document.createElement("div");nm.className="unm";nm.textContent=u.name;
    var inf=document.createElement("div");inf.className="uinf";
    inf.textContent=rev+" کارت · "+(u.game&&u.game.streak||0)+"🔥"+(u.email?" · "+u.email:"");
    var del=document.createElement("button");del.className="udel-btn";del.textContent="✕";
    del.addEventListener("click",function(e){e.stopPropagation();delU(k);});
    d.appendChild(av);d.appendChild(nm);d.appendChild(inf);d.appendChild(del);
    d.addEventListener("click",function(){loginAs(k);});
    ul.appendChild(d);
  });
}
function createUser(){
  var name=(document.getElementById("uinp").value||"").replace(/^\s+|\s+$/g,"");
  if(!name){toast("نامت رو وارد کن! ✍️");return;}
  // Check existing user by name
  var existingKey=null;
  Object.keys(users).forEach(function(k){
    if(users[k].name===name) existingKey=k;
  });
  if(existingKey){loginAs(existingKey);return;}
  var k="u"+Date.now();
  users[k]={name:name,avatar:selAv,level:"A1",progress:{},game:{streak:0,lastStudy:"",totalXP:0,history:{}},joinDate:new Date().toLocaleDateString("fa-IR")};
  loginAs(k);
}

function loginAs(k){uid=k;save();afterLogin();}
function delU(k){
  if(!confirm("حذف "+users[k].name+"?"))return;
  delete users[k];save();renderLogin();
  if(uid===k){uid=null;localStorage.removeItem("fc4u_uid");}
}
function afterLogin(){
  document.body.classList.remove("pre-login");
  if(!uid||!users[uid]){renderLogin();showScr("login");document.getElementById("bnav").style.display="none";document.body.classList.add("pre-login");return;}
  updateStreak();updateNav();updateLvlCounts();updateWelcome();
  // After login → show level picker first (first time), else welcome
  var u=gu();
  if(!u.levelSet){
    gotoTab("lvls",{skipStack:true,replace:true});document.getElementById("bnav").style.display="flex";
    toast("سطح خود را انتخاب کنید 👇");
  } else {
    gotoTab("welcome",{skipStack:true,replace:true});document.getElementById("bnav").style.display="flex";
  }
  document.querySelectorAll("#bnav .bnt").forEach(function(b){b.classList.remove("on");});
  var wb=document.getElementById("btn_welcome");if(wb)wb.classList.add("on");
  setTimeout(function(){updateNind("welcome");},100);
}

// STREAK
function updateStreak(){
  var u=gu();if(!u)return;var g=u.game;
  var today=new Date().toDateString();
  if(g.lastStudy!==today){
    var yest=new Date(Date.now()-86400000).toDateString();
    g.streak=(g.lastStudy===yest)?(g.streak||0)+1:1;g.lastStudy=today;
  }
  save();updateNav();
}
function updateNav(){
  // Ensure nav is visible after login
  document.body.classList.remove("pre-login");
  var bn=document.getElementById("bnav");
  if(bn&&uid&&users[uid])bn.style.display="flex";
  var g=gg();
  [["snav",g.streak||0],["xnav",g.totalXP||0],["str-big",g.streak||0]].forEach(function(p){var e=document.getElementById(p[0]);if(e)e.textContent=p[1];});
  var xb=document.getElementById("xp-big");if(xb)xb.textContent=(g.totalXP||0)+"⭐";
}

// LEVELS
function updateLvlCounts(){
  var prog=gp();
  var allLvls=["ALL"].concat(LEVELS).concat(SPECIALS).concat(GRAMCATS);
  allLvls.forEach(function(lv){
    var words=lv==="ALL"?VOCAB:VOCAB.filter(function(w){return w.level===lv;});
    var el=document.getElementById("cnt_"+lv);if(!el)return;
    var m=words.filter(function(w){return (prog[w.id]&&prog[w.id].mastery||0)>=70;}).length;
    el.innerHTML=words.length+" کارت<br><span style='color:"+(LC[lv]||"var(--gr)")+"'>"+Math.round(words.length?m/words.length*100:0)+"٪</span>";
  });
  updateLvlBtn();
}
function updateLvlBtn(){
  var u=gu();var lv=(u&&u.level)||"A1";var b=document.getElementById("lvlbtn");if(!b)return;
  var col=LC[lv]||"#4d9fff";
  b.textContent=(lv==="ALL"?"همه":lv)+" ▾";b.style.color=col;b.style.borderColor=col;
}
function selectLevel(lv){
  if(!gu())return;
  gu().level=lv;gu().levelSet=true;save();
  updateLvlBtn();updateLvlCounts();
  buildQ();gotoTab("study");
  toast("سطح "+(lv==="ALL"?"همه":(LF[lv]||lv))+" انتخاب شد ✓");
}

// WELCOME
function updateWelcome(){
  var u=gu();if(!u)return;
  var g=u.game||{},prog=u.progress||{};
  document.getElementById("wav").textContent=u.avatar;
  var h=new Date().getHours();
  var gr=h<12?"صبح بخیر ☀️":h<18?"عصر بخیر 🌤️":"شب بخیر 🌙";
  document.getElementById("wnm").textContent=gr+" "+u.name;
  var lv=u.level||"A1";
  document.getElementById("wlv").textContent="سطح "+lv+" · "+(LF[lv]||"همه");
  document.getElementById("wstr").textContent=(g.streak||0)+"🔥";
  document.getElementById("wxp").textContent=(g.totalXP||0)+"⭐";
  var total=VOCAB.length,mastered=Object.values(prog).filter(function(x){return (x.mastery||0)>=70;}).length;
  document.getElementById("wmas").textContent=Math.round(mastered/total*100)+"%";
  var due=VOCAB.filter(function(w){var p=prog[w.id];return p&&p.reviews>0&&!p.skipReview&&p.nextReview<=Date.now()&&(p.mastery||0)<70;}).length;
  var newC=VOCAB.filter(function(w){return !prog[w.id]||!prog[w.id].reviews;}).length;
  document.getElementById("wgreet").innerHTML=gr+" <b>"+u.name+"</b>! 👋<br>امروز: <b style='color:var(--gd)'>"+due+"</b> مرور + <b style='color:var(--ac2)'>"+Math.min(newC,cfg.dailyNew)+"</b> جدید";
  var bgsEl=document.getElementById("wbgs");
  if(bgsEl){
    var earned=BADGES.filter(function(b){try{return b.ok(g,prog);}catch(e){return false;}});
    bgsEl.innerHTML=earned.slice(-4).map(function(b){return "<span class='wbg'>"+b.ico+" "+b.lbl+"</span>";}).join("");
  }
  // Update user bar
  var ub=document.getElementById("wl-user-bar");
  if(ub){
    ub.style.display="block";
    var uav=document.getElementById("wl-uav");if(uav)uav.textContent=u.avatar;
    var unm=document.getElementById("wl-uname");if(unm)unm.textContent=u.name;
    var ulv=document.getElementById("wl-ulv");if(ulv)ulv.textContent="سطح "+lv+" · "+(LF[lv]||"همه");
    var lvb=document.getElementById("wl-lvl-btn");
    if(lvb){
      var col=LC[lv]||"#4d9fff";
      lvb.style.color=col;lvb.style.borderColor=col;
      lvb.textContent=(LE[lv]||"")+" "+lv+" ↓";
    }
  }
  // Random quote - changes every visit
  var qEl=document.getElementById("motiv-text");
  if(qEl)qEl.innerHTML=QUOTES[Math.floor(Math.random()*QUOTES.length)];
}

// SRS
function gpw(id){
  var p=gu()&&gu().progress;if(!p)return{interval:0,ef:2.5,nextReview:0,mastery:0,reviews:0};
  if(!p[id])p[id]={interval:0,ef:2.5,nextReview:0,mastery:0,reviews:0};return p[id];
}
function rate(q){
  if(!cur||!gu())return;
  var p=gpw(cur.id);var wasNM=(p.mastery||0)<70;p.reviews++;
  if(q===4){
    p.interval=36500;
    p.ef=Math.max(2.8,p.ef||2.5);
    p.mastery=100;
    p.mastered=true;
    p.skipReview=true;
  }
  else if(q===0){p.interval=1;p.mastery=Math.max(0,(p.mastery||0)-20);p.mastered=false;p.skipReview=false;}
  else{
    p.interval=p.interval<1?[0,1,4,6][q]:p.interval<2?[0,3,6,8][q]:Math.round(p.interval*(p.ef||2.5));
    p.ef=Math.max(1.3,(p.ef||2.5)+0.1-(3-q)*(0.08+(3-q)*0.02));
    p.mastery=Math.min(100,(p.mastery||0)+[0,5,15,25][q]);
    p.mastered=(p.mastery||0)>=100;
    p.skipReview=false;
  }
  p.nextReview=Date.now()+p.interval*86400000;
  var xg=q===4?40:XPM[q];gu().game.totalXP=(gu().game.totalXP||0)+xg;sXP+=xg;sRev++;
  if(wasNM&&(p.mastery||0)>=70){sMas++;if(Math.random()<.6)doConfetti();}
  var today=new Date().toDateString();
  if(!gu().game.history)gu().game.history={};
  gu().game.history[today]=(gu().game.history[today]||0)+1;
  updateStreak();save();showXP(xg,q);animNext();
}
function showXP(xp,q){
  if(!xp)return;var el=document.createElement("div");el.className="xpp";
  var cols=["","#ff8c00","#00d084","#ffd700","#4d9fff"];
  el.style.cssText="color:"+(cols[q]||"#ffd700")+";left:"+(Math.random()*60+20)+"%;top:"+(Math.random()*30+30)+"%";
  el.textContent="+"+xp+" XP";document.body.appendChild(el);setTimeout(function(){el.remove();},850);
}
function doConfetti(){
  var cols=["#4d9fff","#b87fff","#00d084","#ff8c00","#ff3b5c","#ffd700"];
  for(var i=0;i<18;i++)(function(i){setTimeout(function(){
    var el=document.createElement("div");el.className="conf";
    el.style.cssText="left:"+Math.random()*100+"%;top:0;background:"+cols[Math.floor(Math.random()*cols.length)]+";animation-delay:"+Math.random()*.5+"s;transform:rotate("+Math.random()*360+"deg)";
    document.body.appendChild(el);setTimeout(function(){el.remove();},2000);
  },i*50);})(i);
}

// QUEUE
function getWords(){var u=gu();var lv=(u&&u.level)||"A1";return lv==="ALL"?VOCAB:VOCAB.filter(function(w){return w.level===lv;});}
function buildQ(){
  var words=getWords(),now=Date.now(),prog=gp();
  var due=words.filter(function(w){var p=prog[w.id];return p&&p.reviews>0&&!p.skipReview&&p.nextReview<=now&&(p.mastery||0)<70;});
  var newW=words.filter(function(w){var p=prog[w.id];return !p||p.reviews===0;});
  function shuf(a){return a.slice().sort(function(){return Math.random()-.5;});}
  if(cfg.order==="mastery")due.sort(function(a,b){return (prog[a.id]&&prog[a.id].mastery||0)-(prog[b.id]&&prog[b.id].mastery||0);});
  if(cfg.order==="random")due=shuf(due);
  sq=due.concat(shuf(newW).slice(0,Math.max(0,cfg.dailyNew-due.length)));
  sRev=0;sMas=0;sXP=0;showNext();
}
function forceMore(){var words=getWords(),prog=gp();sq=words.filter(function(w){var p=prog[w.id];return !p||(!p.skipReview&&(p.mastery||0)<70);}).sort(function(){return Math.random()-.5;}).slice(0,20);showNext();}
function showNext(){
  var fc=document.getElementById("fc"),nw=document.getElementById("nowords");
  var sb=document.getElementById("showbtn"),rr=document.getElementById("rrow");
  if(!sq.length){
    fc.style.display="none";nw.style.display="flex";sb.style.display="none";rr.style.display="none";
    document.getElementById("dn-rev").textContent=sRev;
    document.getElementById("dn-mas").textContent=sMas;
    document.getElementById("dn-xp").textContent=sXP;return;
  }
  fc.style.display="block";nw.style.display="none";sb.style.display="block";rr.style.display="none";
  cur=sq[0];flipped=false;document.getElementById("card").classList.remove("flipped");
  renderCard();
  var tot=sq.length+sRev;
  document.getElementById("spf").style.width=(tot>0?Math.round(sRev/tot*100):0)+"%";
  document.getElementById("qcnt").textContent=sq.length+" کارت";
  setTimeout(speak,350);
}
function renderCard(){
  if(!cur)return;
  var w=cur,lv=w.level,col=LC[lv]||"#4d9fff";
  var p=gpw(w.id),m=p.mastery||0;
  document.getElementById("frib").style.background="linear-gradient(90deg,"+col+","+col+"66)";
  document.getElementById("brib").style.background="linear-gradient(90deg,"+col+","+col+"66)";
  var bd=document.getElementById("wlvl");bd.textContent=(LE[lv]||"")+" "+lv;bd.style.color=col;bd.style.borderColor=col;bd.style.background=col+"18";
  document.getElementById("wpos").textContent=w.pos;
  document.getElementById("wmain").textContent=w.word;
  document.getElementById("wpron").textContent=w.ipa;
  var wt=document.getElementById("wtype");
  var sp=["idiom","collocation","phrasal verb","proverb","grammar"];
  if(sp.indexOf(w.pos)>=0){wt.style.display="inline-block";wt.textContent=w.pos;}else wt.style.display="none";
  var ring=document.getElementById("mring");ring.style.strokeDashoffset=125.7*(1-m/100);ring.style.stroke=col;
  document.getElementById("mpct").textContent=m+"%";
  document.getElementById("bwt").textContent=w.word;document.getElementById("bpr").textContent=w.ipa;
  document.getElementById("fat").textContent=w.fa;document.getElementById("ent").textContent=w.def;
  // Example sentences with speaker buttons
  ["ex1","ex2"].forEach(function(id,i){
    var el=document.getElementById(id);el.innerHTML="";
    var txt=i===0?w.ex1:w.ex2;if(!txt)return;
    el.style.display="flex";el.style.alignItems="flex-start";el.style.gap="6px";
    var spk=document.createElement("button");spk.className="abtn";
    spk.style.cssText="padding:2px 7px;font-size:10px;flex-shrink:0";spk.textContent="🔊";
    (function(t){spk.addEventListener("click",function(e){e.stopPropagation();speakW(t);});})(txt);
    var span=document.createElement("span");span.className="ex-txt";span.textContent=txt;
    el.appendChild(spk);el.appendChild(span);
  });
  var stags=document.getElementById("stags"),synsec=document.getElementById("synsec");
  stags.innerHTML="";
  if((w.syn&&w.syn.trim())||(w.ant&&w.ant.trim())){
    synsec.style.display="block";
    if(w.syn)w.syn.split(",").forEach(function(s){var t=document.createElement("span");t.className="syn-t";t.textContent=s.trim();t.addEventListener("click",function(){speakW(s.trim());});stags.appendChild(t);});
    if(w.ant)w.ant.split(",").forEach(function(s){var t=document.createElement("span");t.className="ant-t";t.textContent=s.trim();stags.appendChild(t);});
  }else synsec.style.display="none";
  var wfsec=document.getElementById("wfsec"),wftags=document.getElementById("wftags");
  var root=w.word.toLowerCase().replace(/ing$|ed$|er$|ly$|ion$|tion$|ness$|ful$|less$/,"");
  var fam=root.length>3?VOCAB.filter(function(x){return x.id!==w.id&&x.word.toLowerCase()!==w.word.toLowerCase()&&x.word.toLowerCase().indexOf(root)===0;}).slice(0,4):[];
  if(fam.length){wfsec.style.display="block";wftags.innerHTML="";fam.forEach(function(fw){var t=document.createElement("div");t.className="wf-t";t.textContent=fw.word+" ("+fw.pos+")";t.addEventListener("click",function(){speakW(fw.word);});wftags.appendChild(t);});}
  else wfsec.style.display="none";
}
function flipCard(){
  if(!cur)return;flipped=!flipped;
  document.getElementById("card").classList.toggle("flipped",flipped);
  document.getElementById("showbtn").style.display=flipped?"none":"block";
  document.getElementById("rrow").style.display=flipped?"flex":"none";
  // Speak definition on back
  if(flipped&&cur){
    setTimeout(function(){
      if(!window.speechSynthesis)return;
      speechSynthesis.cancel();
      var u=new SpeechSynthesisUtterance(cur.def);
      u.lang="en-US";u.rate=getR();var v=getV();if(v)u.voice=v;
      speechSynthesis.speak(u);
    },400);
  }
}
function animNext(){
  var c=document.getElementById("card");
  c.style.transition="all .18s";c.style.opacity="0";c.style.transform="translateX(-22px) scale(.96)";
  setTimeout(function(){c.style.transition="";c.style.opacity="";c.style.transform="";flipped=false;document.getElementById("rrow").style.display="none";sq.shift();showNext();},185);
}

// TTS
function setupTTS(){if(!window.speechSynthesis)return;var l=function(){voices=speechSynthesis.getVoices();};l();speechSynthesis.onvoiceschanged=l;}
function getV(){if(cfg.accent==="uk")return voices.filter(function(v){return v.lang==="en-GB";})[0]||voices.filter(function(v){return v.lang.indexOf("en")===0;})[0]||null;return voices.filter(function(v){return v.lang==="en-US";})[0]||voices.filter(function(v){return v.lang.indexOf("en")===0&&v.name.toLowerCase().indexOf("us")>=0;})[0]||voices.filter(function(v){return v.lang.indexOf("en")===0;})[0]||null;}
function getR(){return{slow:.7,normal:.85,fast:1.1}[cfg.speakRate]||.85;}
function speak(){if(cur)speakW(cur.word);}
function speakW(word){
  if(!window.speechSynthesis)return;speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(word);u.lang=cfg.accent==="uk"?"en-GB":"en-US";u.rate=getR();
  var v=getV();if(v)u.voice=v;
  var btn=document.getElementById("fabtn");if(btn){btn.classList.add("playing");u.onend=function(){btn.classList.remove("playing");};}
  speechSynthesis.speak(u);
}

// ===== QUIZ =====
function showQuizSetup(){
  document.getElementById("quiz-setup").style.display="block";
  document.getElementById("quiz-play").style.display="none";
  if(document.getElementById("quiz-result"))
    document.getElementById("quiz-result").style.display="none";
  if(document.getElementById("quiz-match"))
    document.getElementById("quiz-match").style.display="none";
  if(document.getElementById("quiz-spell"))
    document.getElementById("quiz-spell").style.display="none";
  setupQuizButtons();
}

// ============================================================
// QUIZ SETUP JS
// ============================================================
var qLevel="ALL", qTotal=10, qMode="mc";

var QL_CATS = [
  {v:"ALL", lbl:"همه", col:"var(--ac)"},
  {v:"A1", lbl:"🌱 A1", col:"var(--A1)"},
  {v:"A2", lbl:"🌿 A2", col:"var(--A2)"},
  {v:"B1", lbl:"🌳 B1", col:"var(--B1)"},
  {v:"B2", lbl:"🦅 B2", col:"var(--B2)"},
  {v:"C1", lbl:"🔥 C1", col:"var(--C1)"},
  {v:"C2", lbl:"🏆 C2", col:"var(--C2)"},
  {v:"PHR", lbl:"💬 Phrases", col:"var(--PHR)"},
  {v:"GR", lbl:"📝 Grammar", col:"var(--GR)"},
  {v:"VRB", lbl:"⚡ Verbs", col:"var(--VRB)"},
  {v:"ADJ", lbl:"🎨 Adjectives", col:"var(--ADJ)"},
  {v:"ADV", lbl:"💨 Adverbs", col:"var(--ADV)"},
  {v:"PRV", lbl:"💬 Proverbs", col:"var(--PRV)"},
  {v:"AWL", lbl:"🎓 Academic", col:"var(--AWL)"},
  {v:"IDM", lbl:"💡 Idioms", col:"var(--IDM)"},
  {v:"PV",  lbl:"🔀 Phrasal V.", col:"var(--PV)"},
  {v:"COL", lbl:"🔗 Collocations", col:"var(--COL)"},
  {v:"NAT", lbl:"🌍 Nationalities", col:"var(--NAT)"},
  {v:"MED", lbl:"🏥 Medical", col:"var(--MED)"},
  {v:"BIZ", lbl:"💼 Business", col:"var(--BIZ)"},
  {v:"TECH",lbl:"💻 Technology", col:"var(--TECH)"},
  {v:"HOM", lbl:"🏠 Home", col:"var(--HOM)"},
  {v:"BOD", lbl:"🫀 Body", col:"var(--BOD)"},
  {v:"FOD", lbl:"🍎 Food", col:"var(--FOD)"},
  {v:"TRN", lbl:"🚗 Transport", col:"var(--TRN)"},
  {v:"HLT", lbl:"💊 Health", col:"var(--HLT)"},
  {v:"EMO", lbl:"❤️ Emotion", col:"var(--EMO)"},
  {v:"CLO", lbl:"👕 Clothing", col:"var(--CLO)"},
  {v:"EDU", lbl:"📚 Education", col:"var(--EDU)"},
  {v:"SPT", lbl:"⚽ Sports", col:"var(--SPT)"},
  {v:"SCI", lbl:"🔬 Science", col:"var(--SCI)"},
  {v:"ART", lbl:"🎭 Arts", col:"var(--ART)"},
  {v:"ENV", lbl:"🌿 Environment", col:"var(--ENV)"},
  {v:"WRK", lbl:"💼 Work", col:"var(--WRK)"},
  {v:"TRV", lbl:"✈️ Travel", col:"var(--TRV)"},
  {v:"DIG", lbl:"📱 Digital", col:"var(--DIG)"},
  {v:"WEA", lbl:"☀️ Weather", col:"var(--WEA)"},
  {v:"FPR", lbl:"🍳 Cooking", col:"var(--FPR)"},
  {v:"LAW", lbl:"⚖️ Law", col:"var(--LAW)"},
  {v:"PSY", lbl:"🧠 Psychology", col:"var(--PSY)"}
];

// Mode labels/badges
var QMODE_INFO = {
  mc:     {badge:"🎯",  label:"چهار گزینه‌ای"},
  rev:    {badge:"🔄",  label:"کارت برعکس"},
  listen: {badge:"🎧",  label:"شنیداری"},
  match:  {badge:"🔗",  label:"تطبیق"},
  spell:  {badge:"✍️",  label:"دیکته"},
  syn:    {badge:"🟰",  label:"مترادف"},
  ant:    {badge:"↔️",  label:"متضاد"},
  blank:  {badge:"🧩",  label:"جای خالی"}
};

function selQMode(btn, mode){
  qMode = mode;
  document.querySelectorAll(".qmode-btn").forEach(function(b){
    b.style.borderColor = "var(--bd2)";
    b.style.background = "none";
    b.classList.remove("on");
  });
  btn.style.borderColor = "var(--ac)";
  btn.style.background = "rgba(0,208,132,.12)";
  btn.classList.add("on");
}

function selQL(lv){
  qLevel = lv;
  document.querySelectorAll(".ql-btn").forEach(function(b){
    var v = b.getAttribute("data-v");
    b.style.fontWeight = v===lv ? "900" : "700";
    b.style.color = v===lv ? "#fff" : b._col;
    b.style.background = v===lv ? b._col : "none";
  });
}

function setupQuizButtons(){
  var wrap = document.getElementById("ql-wrap");
  if(!wrap) return;
  wrap.innerHTML = "";
  // Remove duplicate entries
  var seen = {}, cats = [];
  QL_CATS.forEach(function(c){ if(!seen[c.v]){seen[c.v]=1;cats.push(c);} });
  cats.forEach(function(cat){
    var b = document.createElement("button");
    b.className = "ql-btn";
    b.setAttribute("data-v", cat.v);
    b.textContent = cat.lbl;
    b._col = cat.col;
    var isOn = cat.v === qLevel;
    b.style.cssText = "padding:8px 13px;border-radius:20px;border:2px solid "+cat.col+
      ";background:"+(isOn?cat.col:"none")+";color:"+(isOn?"#fff":cat.col)+
      ";font-size:12px;font-weight:"+(isOn?"900":"700")+
      ";cursor:pointer;font-family:inherit;transition:all .2s";
    b.onclick = function(){ selQL(cat.v); };
    wrap.appendChild(b);
  });
  // Count buttons
  document.querySelectorAll(".qnum-btn").forEach(function(b){
    b.onclick = function(){
      document.querySelectorAll(".qnum-btn").forEach(function(x){
        x.style.borderColor="var(--bd2)";x.style.background="none";x.style.color="var(--t2)";
      });
      b.style.borderColor="var(--ac)";b.style.background="var(--ac)";b.style.color="#fff";
      qTotal = parseInt(b.getAttribute("data-n"));
    };
  });
  // Start button
  var sb = document.getElementById("start-quiz-btn");
  if(sb) sb.onclick = function(){ startQuiz(); };
}

function startQuizFor(lv){
  qLevel = lv;
  qMode = "mc";
  // Reset mode buttons
  document.querySelectorAll(".qmode-btn").forEach(function(b,i){
    b.style.borderColor = i===0 ? "var(--ac)" : "var(--bd2)";
    b.style.background = i===0 ? "rgba(0,208,132,.12)" : "none";
    b.classList.toggle("on", i===0);
  });
  showScr("quiz");
  document.querySelectorAll(".bnt").forEach(function(b){b.classList.remove("on");});
  document.getElementById("btn_quiz").classList.add("on");
  updateNind("quiz");
  startQuiz();
}

function startQuiz(){
  var pool = qLevel==="ALL" ? VOCAB : VOCAB.filter(function(w){return w.level===qLevel;});
  if(qMode==="syn")pool=pool.filter(function(w){return w.syn&&String(w.syn).trim();});
  if(qMode==="ant")pool=pool.filter(function(w){return w.ant&&String(w.ant).trim();});
  if(pool.length < 2){ alert("کارت کافی در این بخش وجود ندارد"); return; }
  qWords = pool.slice().sort(function(){return Math.random()-.5;}).slice(0, Math.min(qTotal,pool.length));
  qIdx = 0; qScore = 0; qCorrect = 0; qWrong = 0;
  // Record quiz mode stats
  if(gu()){
    if(!gu().quizStats) gu().quizStats = {};
    if(!gu().quizStats[qMode]) gu().quizStats[qMode] = {played:0,correct:0};
    gu().quizStats[qMode].played += qWords.length;
    save();
  }
  // Hide all panels
  ["quiz-setup","quiz-play","quiz-result","quiz-match","quiz-spell"].forEach(function(id){
    var el=document.getElementById(id);
    if(el) el.style.display="none";
  });
  if(qMode === "match"){
    startMatchQuiz();
  } else if(qMode === "spell"){
    startSpellQuiz();
  } else {
    document.getElementById("quiz-play").style.display = "block";
    // Set badge
    var info = QMODE_INFO[qMode]||QMODE_INFO.mc;
    document.getElementById("qmode-badge").textContent = info.badge+" "+info.label;
    showQ();
  }
}

function getPool4Choices(w){
  var same = VOCAB.filter(function(x){return x.id!==w.id && x.level===w.level && x.fa!==w.fa;});
  if(same.length < 3) same = VOCAB.filter(function(x){return x.id!==w.id && x.fa!==w.fa;});
  return same.sort(function(){return Math.random()-.5;}).slice(0,3);
}

function showQ(){
  if(qIdx >= qWords.length){ showQResult(); return; }
  var w = qWords[qIdx];
  document.getElementById("qnum").textContent = qIdx+1;
  document.getElementById("qtot").textContent = qWords.length;
  document.getElementById("qsc").textContent = qScore;
  document.getElementById("qprog").style.width = (qIdx/qWords.length*100)+"%";
  document.getElementById("qfb").style.display = "none";
  document.getElementById("qnext").style.display = "none";
  document.getElementById("qchoices").innerHTML = "";
  document.getElementById("qdef-hint").style.display = "none";

  var wrongs = getPool4Choices(w);

  if(qMode === "mc"){
    // Show word, choose meaning
    document.getElementById("q-mc-area").style.display = "block";
    document.getElementById("q-listen-area").style.display = "none";
    document.getElementById("q-prompt-label").textContent = "معنی فارسی این کارت چیست؟";
    document.getElementById("qword").textContent = w.word;
    document.getElementById("qword").style.direction = "ltr";
    document.getElementById("qipa").textContent = w.ipa || "";
    setTimeout(function(){speakW(w.word);},300);
    buildChoices(w, wrongs, "fa"); // choices show fa
  } else if(qMode === "rev"){
    // Show meaning, choose word
    document.getElementById("q-mc-area").style.display = "block";
    document.getElementById("q-listen-area").style.display = "none";
    document.getElementById("q-prompt-label").textContent = "کلمه انگلیسی این معنی چیست؟";
    document.getElementById("qword").textContent = w.fa;
    document.getElementById("qword").style.direction = "rtl";
    document.getElementById("qipa").textContent = "";
    document.getElementById("qdef-hint").textContent = w.def || "";
    document.getElementById("qdef-hint").style.display = "block";
    buildChoices(w, wrongs, "word"); // choices show words
  } else if(qMode === "listen"){
    // Play audio, choose meaning
    document.getElementById("q-mc-area").style.display = "none";
    document.getElementById("q-listen-area").style.display = "block";
    setTimeout(function(){speakW(w.word);},400);
    buildChoices(w, wrongs, "fa");
  } else if(qMode === "syn"){
    document.getElementById("q-mc-area").style.display = "block";
    document.getElementById("q-listen-area").style.display = "none";
    document.getElementById("q-prompt-label").textContent = "مترادف یا نزدیک‌ترین معنی کدام است؟";
    document.getElementById("qword").textContent = w.word;
    document.getElementById("qword").style.direction = "ltr";
    document.getElementById("qipa").textContent = w.ipa || "";
    document.getElementById("qdef-hint").textContent = w.def || "";
    document.getElementById("qdef-hint").style.display = "block";
    buildChoices(w, getFieldChoices(w,"syn"), "syn");
  } else if(qMode === "ant"){
    document.getElementById("q-mc-area").style.display = "block";
    document.getElementById("q-listen-area").style.display = "none";
    document.getElementById("q-prompt-label").textContent = "متضاد این کلمه کدام است؟";
    document.getElementById("qword").textContent = w.word;
    document.getElementById("qword").style.direction = "ltr";
    document.getElementById("qipa").textContent = w.ipa || "";
    document.getElementById("qdef-hint").textContent = w.fa || "";
    document.getElementById("qdef-hint").style.display = "block";
    buildChoices(w, getFieldChoices(w,"ant"), "ant");
  } else if(qMode === "blank"){
    document.getElementById("q-mc-area").style.display = "block";
    document.getElementById("q-listen-area").style.display = "none";
    document.getElementById("q-prompt-label").textContent = "جای خالی جمله را کامل کن";
    var ex=(w.ex1||w.ex2||"").replace(new RegExp("\\\\b"+w.word.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")+"\\\\b","i"),"_____");
    document.getElementById("qword").textContent = ex || w.fa;
    document.getElementById("qword").style.direction = "ltr";
    document.getElementById("qipa").textContent = "";
    document.getElementById("qdef-hint").textContent = w.fa || "";
    document.getElementById("qdef-hint").style.display = "block";
    buildChoices(w, wrongs, "word");
  }
}

function getFieldChoices(w, field){
  var pool=VOCAB.filter(function(x){return x.id!==w.id&&x[field]&&String(x[field]).trim()&&x[field]!==w[field];});
  return pool.sort(function(){return Math.random()-.5;}).slice(0,3);
}

function buildChoices(w, wrongs, field){
  wrongs=(wrongs||[]).filter(function(x){return x&&x[field]&&String(x[field]).trim();});
  if(wrongs.length<3)wrongs=getFieldChoices(w,field);
  var choices = [w].concat(wrongs.slice(0,3)).sort(function(){return Math.random()-.5;});
  var div = document.getElementById("qchoices");
  choices.forEach(function(c){
    var b = document.createElement("button");
    b.style.cssText = "width:100%;padding:13px 16px;border-radius:12px;border:2px solid var(--bd2);background:var(--bg2);color:var(--t1);font-size:"+(field==="word"?"16px":"14px")+";font-weight:700;cursor:pointer;font-family:inherit;direction:"+(field==="word"?"ltr":"rtl")+";text-align:"+(field==="word"?"center":"right")+";transition:all .2s";
    b.textContent = c[field];
    b.onclick = function(){
      // Disable all
      div.querySelectorAll("button").forEach(function(x){x.disabled=true;});
      var correct = c.id === w.id;
      if(correct){
        b.style.background="var(--gr)";b.style.borderColor="var(--gr)";b.style.color="#fff";
        qScore += 10; qCorrect++;
        if(gu() && gu().quizStats && gu().quizStats[qMode]) gu().quizStats[qMode].correct++;
        showFb("✅ آفرین! "+w.word+" = "+w.fa, "var(--gr)");
        // SRS update
        if(gu()){
          var p=gp();
          if(!p[w.id])p[w.id]={n:0,ef:2.5,due:new Date().toISOString().slice(0,10),streak:0,lastRev:""};
          p[w.id].streak=(p[w.id].streak||0)+1;
          p[w.id].lastRev=new Date().toISOString().slice(0,10);
          save();
        }
      } else {
        b.style.background="var(--rd)";b.style.borderColor="var(--rd)";b.style.color="#fff";
        qWrong++;
        // Highlight correct
        div.querySelectorAll("button").forEach(function(x){
          if(x.textContent===w[field==="word"?"word":"fa"]||x.textContent===w[field]){
            x.style.background="var(--gr)";x.style.borderColor="var(--gr)";x.style.color="#fff";
          }
        });
        showFb("❌ اشتباه! "+w.word+" = "+w.fa, "var(--rd)");
      }
      save();
      document.getElementById("qnext").style.display="block";
    };
    div.appendChild(b);
  });
}

function showFb(msg, col){
  var fb = document.getElementById("qfb");
  fb.textContent = msg;
  fb.style.background = col+"22";
  fb.style.borderLeft = "4px solid "+col;
  fb.style.color = col;
  fb.style.display = "block";
}

// ===== MATCHING QUIZ =====
var matchSelected = null, matchPairs = [], matchDone = 0, matchScore = 0;

function startMatchQuiz(){
  var count = Math.min(6, qWords.length); // 6 pairs max for matching
  qWords = qWords.slice(0,count);
  matchSelected = null; matchDone = 0; matchScore = 0;
  document.getElementById("quiz-match").style.display = "block";
  document.getElementById("match-fb").style.display = "none";
  document.getElementById("match-sc").textContent = "0";
  buildMatchBoard();
}

function buildMatchBoard(){
  var board = document.getElementById("match-board");
  board.innerHTML = "";
  // Left column: words (shuffled), right column: meanings (shuffled)
  var words = qWords.slice().sort(function(){return Math.random()-.5;});
  var means = qWords.slice().sort(function(){return Math.random()-.5;});
  var maxRows = Math.max(words.length, means.length);
  // Create cards
  var leftCards = [], rightCards = [];
  words.forEach(function(w,i){
    var d = document.createElement("div");
    d.style.cssText = "padding:10px 8px;border-radius:10px;border:2px solid var(--bd2);background:var(--bg2);color:var(--t1);font-size:14px;font-weight:700;cursor:pointer;text-align:center;direction:ltr;min-height:44px;display:flex;align-items:center;justify-content:center;transition:all .2s;word-break:break-word";
    d.textContent = w.word;
    d.dataset.id = w.id;
    d.dataset.side = "word";
    d.onclick = function(){ matchTap(d); };
    leftCards.push(d);
  });
  means.forEach(function(w,i){
    var d = document.createElement("div");
    d.style.cssText = "padding:10px 8px;border-radius:10px;border:2px solid var(--bd2);background:var(--bg2);color:var(--t1);font-size:12px;font-weight:700;cursor:pointer;text-align:center;direction:rtl;min-height:44px;display:flex;align-items:center;justify-content:center;transition:all .2s;word-break:break-word";
    d.textContent = w.fa;
    d.dataset.id = w.id;
    d.dataset.side = "fa";
    d.onclick = function(){ matchTap(d); };
    rightCards.push(d);
  });
  // Interleave into grid (left, right, left, right...)
  for(var i=0;i<maxRows;i++){
    if(leftCards[i]) board.appendChild(leftCards[i]);
    if(rightCards[i]) board.appendChild(rightCards[i]);
  }
}

function matchTap(d){
  if(d.dataset.matched === "1") return;
  if(!matchSelected){
    matchSelected = d;
    d.style.borderColor = "var(--ac)";
    d.style.background = "rgba(0,208,132,.15)";
    return;
  }
  if(d === matchSelected){
    d.style.borderColor = "var(--bd2)";
    d.style.background = "var(--bg2)";
    matchSelected = null;
    return;
  }
  // Check if different sides
  var a = matchSelected, b = d;
  // Reset first selection style
  a.style.borderColor = "var(--bd2)";
  a.style.background = "var(--bg2)";
  matchSelected = null;
  if(a.dataset.side === b.dataset.side){
    // Same side - just select new one
    b.style.borderColor = "var(--ac)";
    b.style.background = "rgba(0,208,132,.15)";
    matchSelected = b;
    return;
  }
  if(a.dataset.id === b.dataset.id){
    // MATCH!
    [a,b].forEach(function(el){
      el.style.background="var(--gr)";el.style.borderColor="var(--gr)";
      el.style.color="#fff";el.style.cursor="default";el.dataset.matched="1";
      el.onclick=null;
    });
    matchDone++; matchScore+=10;
    document.getElementById("match-sc").textContent = matchScore;
    if(gu() && gu().quizStats){
      if(!gu().quizStats.match) gu().quizStats.match={played:0,correct:0};
      gu().quizStats.match.correct++;save();
    }
    if(matchDone >= qWords.length){
      qScore=matchScore; qCorrect=matchDone; qWrong=0;
      setTimeout(function(){
        document.getElementById("quiz-match").style.display="none";
        showQResult();
      }, 600);
    }
  } else {
    // WRONG - flash red briefly
    [a,b].forEach(function(el){
      el.style.background="rgba(255,59,92,.2)";el.style.borderColor="var(--rd)";
    });
    qWrong++;
    setTimeout(function(){
      [a,b].forEach(function(el){
        if(el.dataset.matched!=="1"){
          el.style.background="var(--bg2)";el.style.borderColor="var(--bd2)";
        }
      });
    }, 600);
  }
}

// ===== SPELLING QUIZ =====
var spScore=0, spCorrect=0, spWrong=0;

function startSpellQuiz(){
  spScore=0; spCorrect=0; spWrong=0; qIdx=0;
  document.getElementById("quiz-spell").style.display="block";
  document.getElementById("sp-next").style.display="none";
  showSpell();
}

function showSpell(){
  if(qIdx>=qWords.length){
    qScore=spScore; qCorrect=spCorrect; qWrong=spWrong;
    document.getElementById("quiz-spell").style.display="none";
    showQResult(); return;
  }
  var w=qWords[qIdx];
  document.getElementById("sp-num").textContent=qIdx+1;
  document.getElementById("sp-tot").textContent=qWords.length;
  document.getElementById("sp-sc").textContent=spScore;
  document.getElementById("sp-prog").style.width=(qIdx/qWords.length*100)+"%";
  document.getElementById("sp-fa").textContent=w.fa;
  document.getElementById("sp-def").textContent=w.def||"";
  document.getElementById("sp-inp").value="";
  document.getElementById("sp-inp").style.borderColor="var(--bd2)";
  document.getElementById("sp-fb").style.display="none";
  document.getElementById("sp-next").style.display="none";
  document.getElementById("sp-inp").focus();
  // Enter key submits
  document.getElementById("sp-inp").onkeydown=function(e){if(e.key==="Enter")checkSpell();};
}

function checkSpell(){
  if(qIdx>=qWords.length) return;
  var w=qWords[qIdx];
  var inp=document.getElementById("sp-inp").value.trim().toLowerCase();
  var correct=w.word.toLowerCase();
  var fb=document.getElementById("sp-fb");
  var inpEl=document.getElementById("sp-inp");
  if(inp===correct){
    inpEl.style.borderColor="var(--gr)";
    fb.textContent="✅ آفرین! صحیح است!";
    fb.style.background="rgba(0,200,100,.15)";fb.style.color="var(--gr)";
    fb.style.display="block";
    spScore+=10; spCorrect++;
    if(gu()&&gu().quizStats){if(!gu().quizStats.spell)gu().quizStats.spell={played:0,correct:0};gu().quizStats.spell.correct++;save();}
  } else {
    // Check close (within 1-2 typos)
    var dist=levenshtein(inp,correct);
    inpEl.style.borderColor="var(--rd)";
    fb.textContent="❌ اشتباه! پاسخ: "+w.word+" (تو نوشتی: "+inp+")";
    fb.style.background="rgba(255,59,92,.1)";fb.style.color="var(--rd)";
    fb.style.display="block";
    spWrong++;
    if(dist<=1 && inp.length>1){
      fb.textContent="⚠️ نزدیک بود! "+w.word+" (تو: "+inp+")";
      fb.style.color="var(--gd)";fb.style.background="rgba(255,200,0,.1)";
      spScore+=5;
    }
  }
  document.getElementById("sp-next").style.display="block";
  document.getElementById("sp-inp").onkeydown=null;
}

function spNext(){
  qIdx++;
  showSpell();
}

function levenshtein(a,b){
  var m=a.length,n=b.length,d=[];
  for(var i=0;i<=m;i++){d[i]=[i];}
  for(var j=0;j<=n;j++){d[0][j]=j;}
  for(var j=1;j<=n;j++){for(var i=1;i<=m;i++){
    d[i][j]=a[i-1]===b[j-1]?d[i-1][j-1]:1+Math.min(d[i-1][j],d[i][j-1],d[i-1][j-1]);
  }}
  return d[m][n];
}

function showQResult(){
  ["quiz-play","quiz-match","quiz-spell"].forEach(function(id){
    var el=document.getElementById(id);if(el)el.style.display="none";
  });
  document.getElementById("quiz-result").style.display="block";
  var pct=qWords.length>0?Math.round(qCorrect/qWords.length*100):0;
  var emoji=pct>=90?"🏆":pct>=70?"🌟":pct>=50?"👍":"💪";
  var title=pct>=90?"عالی بود!":pct>=70?"خوب بود!":pct>=50?"بد نبود!":"تمرین کن!";
  document.getElementById("qr-ico").textContent=emoji;
  document.getElementById("qr-ttl").textContent=title;
  document.getElementById("qr-sc").textContent=qScore+" امتیاز";
  var info=QMODE_INFO[qMode]||QMODE_INFO.mc;
  document.getElementById("qr-mode-badge").textContent=info.badge+" "+info.label;
  var grid=document.getElementById("qr-grid");
  grid.innerHTML=[
    {l:"درست",v:qCorrect,c:"var(--gr)"},
    {l:"اشتباه",v:qWrong,c:"var(--rd)"},
    {l:"دقت",v:pct+"%",c:"var(--ac2)"}
  ].map(function(s){
    return "<div style='background:var(--bg3);border:1px solid var(--bd);border-radius:var(--rs);padding:9px;text-align:center'><div style='font-size:20px;font-weight:900;color:"+s.c+"'>"+s.v+"</div><div style='font-size:9px;color:var(--t3);direction:rtl;margin-top:2px'>"+s.l+"</div></div>";
  }).join("");
  if(gu()){gu().game.totalXP=(gu().game.totalXP||0)+qScore;save();updateNav();}
}


// STATS
function renderStats(){
  var prog=gp(),all=VOCAB,total=all.length;
  var mastered=all.filter(function(w){return (prog[w.id]&&prog[w.id].mastery||0)>=70;}).length;
  var learning=all.filter(function(w){var p=prog[w.id];return p&&p.reviews>0&&(p.mastery||0)<70;}).length;
  var newW=all.filter(function(w){return !prog[w.id]||!prog[w.id].reviews;}).length;
  var canvas=document.getElementById("donut");
  if(canvas){
    var ctx=canvas.getContext("2d");
    ctx.clearRect(0,0,96,96);
    var data=[mastered,learning,newW];
    var colors=["#00d084","#ff8c00","#4d9fff"];
    var start=-Math.PI/2;
    var hasData=total>0;
    if(!hasData){
      // Empty state - grey circle
      ctx.beginPath();ctx.arc(48,48,42,0,Math.PI*2);ctx.fillStyle="#1e2f48";ctx.fill();
    } else {
      data.forEach(function(val,i){
        var sl=(val/total)*Math.PI*2;
        if(sl<0.001)sl=0.001;
        ctx.beginPath();ctx.moveTo(48,48);ctx.arc(48,48,42,start,start+sl);ctx.closePath();
        ctx.fillStyle=colors[i];ctx.fill();start+=sl;
      });
    }
    // Hole
    ctx.beginPath();ctx.arc(48,48,28,0,Math.PI*2);
    ctx.fillStyle=isLight?"#ffffff":"#0b1628";ctx.fill();
    // Text
    ctx.fillStyle=isLight?"#0a1628":"#f0f6ff";
    ctx.font="bold 11px sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";
    ctx.fillText(hasData?Math.round(mastered/total*100)+"%":"0%",48,48);
  }
  document.getElementById("dl-m").textContent=mastered;document.getElementById("dl-l").textContent=learning;document.getElementById("dl-n").textContent=newW;
  var history=(gu()&&gu().game&&gu().game.history)||{};
  var wc=document.getElementById("wchart");
  if(wc){
    wc.innerHTML="";
    wc.style.cssText="display:flex;gap:4px;align-items:flex-end;height:70px;margin-top:8px;width:100%";
    var vals=[];for(var ii=6;ii>=0;ii--){var dd=new Date(Date.now()-ii*86400000);vals.push(history[dd.toDateString()]||0);}
    var maxV=Math.max.apply(null,vals.concat([1]));
    vals.forEach(function(val,vi){
      var d2=new Date(Date.now()-(6-vi)*86400000);
      var pct=Math.max(Math.round(val/maxV*100),6);
      var wrap=document.createElement("div");
      wrap.style.cssText="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px";
      var bar=document.createElement("div");
      bar.style.cssText="width:100%;height:"+pct+"%;min-height:5px;background:"+(vi===6?"linear-gradient(180deg,var(--ac2),var(--ac))":"var(--bd3)")+";border-radius:3px 3px 0 0;transition:height .4s";
      var cnt=document.createElement("span");cnt.style.cssText="font-size:7px;color:var(--t3);font-weight:700";cnt.textContent=val||"";
      var lbl=document.createElement("span");lbl.style.cssText="font-size:7px;color:var(--t3)";lbl.textContent=DAYS[d2.getDay()];
      wrap.appendChild(cnt);wrap.appendChild(bar);wrap.appendChild(lbl);
      wc.appendChild(wrap);
    });
  }
  var lvrows=document.getElementById("lvrows");
  if(lvrows){
    lvrows.innerHTML="";
    var allLvKeys=LEVELS.concat(SPECIALS).concat(GRAMCATS);
    allLvKeys.forEach(function(lv){
      var wds=all.filter(function(w){return w.level===lv;});
      if(!wds.length)return;
      var m=wds.filter(function(w){return (prog[w.id]&&prog[w.id].mastery||0)>=70;}).length;
      var pct=wds.length?Math.round(m/wds.length*100):0;
      var col=LC[lv]||"#4d9fff";
      var d=document.createElement("div");d.className="lvrow";
      d.innerHTML="<span class='lvbdg' style='color:"+col+";border-color:"+col+"'>"+(LE[lv]||"")+" "+lv+"</span>"+
        "<div class='lvi'>"+(LF[lv]||lv)+"<div class='lvb'><div class='lvbf' style='width:"+pct+"%;background:"+col+"'></div></div></div>"+
        "<div class='lvp'>"+m+"/"+wds.length+"<br>"+pct+"%</div>";
      lvrows.appendChild(d);
    });
  }
  var studied=all.filter(function(w){return prog[w.id]&&prog[w.id].reviews>0;});
  var sorted=studied.slice().sort(function(a,b){return (prog[b.id]&&prog[b.id].mastery||0)-(prog[a.id]&&prog[a.id].mastery||0);});
  [{el:"best-w",words:sorted.slice(0,5)},{el:"worst-w",words:sorted.slice().reverse().slice(0,5)}].forEach(function(obj){
    var c=document.getElementById(obj.el);if(!c)return;c.innerHTML="";
    if(!obj.words.length){c.innerHTML="<div style='font-size:10px;color:var(--t3);text-align:center;padding:9px;direction:rtl'>هنوز مطالعه نشده</div>";return;}
    obj.words.forEach(function(w){var m=prog[w.id]&&prog[w.id].mastery||0;var col=m>=70?"var(--gr)":m>=40?"var(--or)":"var(--rd)";var d=document.createElement("div");d.className="wrdi";d.innerHTML="<span class='wrdw'>"+w.word+"</span><span class='wrdp' style='color:"+col+";border-color:"+col+"'>"+m+"%</span>";c.appendChild(d);});
  });
  document.getElementById("td-time").textContent=Math.round(((gu()&&gu().game&&gu().game.history&&gu().game.history[new Date().toDateString()])||0)*.5)+"m";
  document.getElementById("mas-pred").textContent=Math.ceil(all.filter(function(w){return (prog[w.id]&&prog[w.id].mastery||0)<70;}).length/Math.max(cfg.dailyNew,1));
  updateNav();
}

// PROFILE
function renderProfile(){
  var u=gu();if(!u)return;var g=u.game||{},prog=u.progress||{};
  document.getElementById("pav").textContent=u.avatar;document.getElementById("pnm").textContent=u.name;
  document.getElementById("psi").textContent="عضو از "+u.joinDate+" · "+Object.values(prog).filter(function(x){return x.reviews>0;}).length+" کارت";
  var pb=document.getElementById("pbdgs");
  if(pb){pb.innerHTML="";BADGES.forEach(function(b){var ok=b.ok(g,prog);var d=document.createElement("div");d.className="bdgi"+(ok?" ok":"");d.innerHTML="<span class='bdgic' style='filter:"+(ok?"none":"grayscale(1) opacity(.3)")+"'>"+b.ico+"</span><span class='bdgl'>"+b.lbl+"</span>";pb.appendChild(d);});}
  var hl=document.getElementById("his-list");
  if(hl){var hist=g.history||{};var maxV=Math.max.apply(null,Object.values(hist).concat([1]));hl.innerHTML="";for(var i=0;i<7;i++){var d=new Date(Date.now()-i*86400000);var val=hist[d.toDateString()]||0;var fa=d.toLocaleDateString("fa-IR",{month:"short",day:"numeric"});var div=document.createElement("div");div.className="hisi";div.innerHTML="<span class='hisd'>"+fa+"</span><div class='hisb'><div class='hisf' style='width:"+Math.round(val/maxV*100)+"%'></div></div><span class='hisn'>"+val+"</span>";hl.appendChild(div);}}
  var pul=document.getElementById("pul");
  if(pul){pul.innerHTML="";Object.keys(users).forEach(function(k){var usr=users[k];var rev=Object.values(usr.progress||{}).filter(function(x){return x.reviews>0;}).length;var d=document.createElement("div");d.className="ui";if(k===uid)d.style.borderColor="var(--ac2)";var av=document.createElement("div");av.className="uav";av.textContent=usr.avatar;var nm=document.createElement("div");nm.className="unm";nm.textContent=usr.name+(k===uid?" ✓":"");var inf=document.createElement("div");inf.className="uinf";inf.textContent=rev+" کارت";var del=document.createElement("button");del.className="udel-btn";del.textContent="✕";(function(k2){del.addEventListener("click",function(e){e.stopPropagation();delU(k2);});})(k);d.appendChild(av);d.appendChild(nm);d.appendChild(inf);d.appendChild(del);if(k!==uid){(function(k2){d.addEventListener("click",function(){loginAs(k2);});})(k);}pul.appendChild(d);});}
}

// WORDS
function renderWL(){
  var q=(document.getElementById("wsrch").value||"").toLowerCase();
  var prog=gp();
  var words=VOCAB;
  var allCats=["GR","PRV","AWL","MED","BIZ","TECH","HOM","BOD","FOD","NAT","TRN","HLT","EMO","CLO","EDU","VRB","ADJ","ADV","SPT","SCI","ART","ENV","WRK","TRV","DIG","WEA","FPR","LAW","PSY","COL","PV","IDM","PHR"];
  if(wf==="idiom")words=words.filter(function(w){return w.pos==="idiom";});
  else if(allCats.indexOf(wf)>=0)words=words.filter(function(w){return w.level===wf;});
  else if(wf!=="all")words=words.filter(function(w){return w.level===wf;});
  if(q)words=words.filter(function(w){return w.word.toLowerCase().indexOf(q)>=0||w.fa.indexOf(q)>=0;});
  var wltot=document.getElementById("wltot");
  if(wltot)wltot.textContent=words.length;
  var list=document.getElementById("wl");
  if(!list)return;

  // PAGINATION: 20 per page
  var PAGE_SIZE=20;
  var curPage=0;
  var totalPages=Math.max(1,Math.ceil(words.length/PAGE_SIZE));

  function buildPager(){
    var old=document.getElementById("wl-pager");
    if(old)old.remove();
    if(totalPages<=1)return;
    var pager=document.createElement("div");
    pager.id="wl-pager";
    pager.style.cssText="display:flex;align-items:center;justify-content:space-between;padding:8px 0;gap:8px;direction:rtl;margin-top:8px";
    var prev=document.createElement("button");
    prev.style.cssText="flex:1;padding:10px;border-radius:var(--rs);border:1px solid var(--bd2);background:var(--bg3);color:var(--t2);font-size:13px;cursor:pointer;font-family:inherit";
    prev.textContent="◀ قبلی";
    prev.disabled=curPage===0;
    prev.style.opacity=curPage===0?"0.3":"1";
    prev.addEventListener("click",function(){if(curPage>0){renderPage(curPage-1);document.getElementById("words").scrollTop=0;}});
    var info=document.createElement("div");
    info.style.cssText="text-align:center;font-size:12px;color:var(--t3);min-width:80px;direction:rtl";
    info.textContent="صفحه "+(curPage+1)+" از "+totalPages;
    var next=document.createElement("button");
    next.style.cssText="flex:1;padding:10px;border-radius:var(--rs);border:1px solid var(--bd2);background:var(--bg3);color:var(--t2);font-size:13px;cursor:pointer;font-family:inherit";
    next.textContent="بعدی ▶";
    next.disabled=curPage>=totalPages-1;
    next.style.opacity=curPage>=totalPages-1?"0.3":"1";
    next.addEventListener("click",function(){if(curPage<totalPages-1){renderPage(curPage+1);document.getElementById("words").scrollTop=0;}});
    pager.appendChild(next);pager.appendChild(info);pager.appendChild(prev);
    list.appendChild(pager);
  }

  function renderPage(pg){
    curPage=pg;
    list.innerHTML="";
    var batch=words.slice(pg*PAGE_SIZE,(pg+1)*PAGE_SIZE);
    batch.forEach(function(w){
      var p=prog[w.id],m=(p&&p.mastery)||0;
      var col=m>=70?"var(--gr)":(p&&p.reviews>0?"var(--or)":"var(--ac2)");
      var lcol=LC[w.level]||"var(--t3)";
      var spc=["idiom","collocation","phrasal verb","proverb","grammar","phrase"].indexOf(w.pos)>=0;
      var d=document.createElement("div");d.className="wi";
      d.innerHTML="<div class='wdot' style='background:"+col+";color:"+col+"'></div>"+
        "<div style='flex:1'><div class='ww'>"+w.word+(spc?"<span class='stag'>"+w.pos+"</span>":"")+
        "</div><div class='wf2'>"+w.fa+"</div></div>"+
        "<div style='display:flex;align-items:center;gap:5px'>"+
        "<div class='wbd' style='color:"+lcol+";border-color:"+lcol+"'>"+w.level+"</div>"+
        "<div class='wm'>"+m+"%</div></div>";
      (function(ww){d.addEventListener("click",function(){cur=ww;speakW(ww.word);toast("🔊 "+ww.word+" — "+ww.fa);});})(w);
      list.appendChild(d);
    });
    buildPager();
  }
  renderPage(0);
}

function resetUser(){if(!gu())return;if(!confirm("پیشرفت "+gu().name+" پاک بشه?"))return;gu().progress={};gu().game={streak:0,lastStudy:"",totalXP:0,history:{}};save();updateNav();toast("پاک شد ✓");}

function exportProfile(){
  var backup={
    app:"FlashCards 4U",
    version:61,
    exportedAt:new Date().toISOString(),
    uid:uid,
    users:users,
    cfg:cfg,
    theme:isLight?"light":"dark",
    myCards:loadMyCards()
  };
  var text=(window.FC4UStorage&&FC4UStorage.exportProfile)?FC4UStorage.exportProfile(backup):JSON.stringify(backup,null,2);
  var blob=new Blob([text],{type:"application/json;charset=utf-8"});
  var url=URL.createObjectURL(blob);
  var a=document.createElement("a");
  a.href=url;
  a.download="flashcards4u_profile_v61_"+new Date().toISOString().slice(0,10)+".json";
  a.click();
  URL.revokeObjectURL(url);
  toast("بکاپ کامل پروفایل ساخته شد ✅");
}

function importProfile(input){
  var file=input.files&&input.files[0];if(!file)return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var data=(window.FC4UStorage&&FC4UStorage.parseProfile)?FC4UStorage.parseProfile(e.target.result):JSON.parse(e.target.result);
      if(!data.users||typeof data.users!=="object")throw new Error("بخش users در فایل پیدا نشد");
      if(!confirm("بکاپ وارد شود؟ اطلاعات فعلی این مرورگر جایگزین می‌شود."))return;
      users=data.users||{};
      cfg=Object.assign({},cfg,data.cfg||{});
      uid=data.uid||Object.keys(users)[0]||null;
      isLight=data.theme==="light";
      localStorage.setItem("fc4u_u",JSON.stringify(users));
      localStorage.setItem("fc4u_cfg",JSON.stringify(cfg));
      localStorage.setItem("fc4u_thm",isLight?"light":"dark");
      if(uid)localStorage.setItem("fc4u_uid",uid);else localStorage.removeItem("fc4u_uid");
      if(Array.isArray(data.myCards))localStorage.setItem("fc4u_mycards",JSON.stringify(data.myCards));
      document.body.classList.toggle("light",isLight);
      applyThemeBtn();applyFontScale();renderLogin();updateAll();buildQ();
      toast("بکاپ پروفایل وارد شد ✅");
    }catch(err){toast("خطای ورود بکاپ: "+err.message,4000);}
    input.value="";
  };
  reader.readAsText(file);
}

// SWIPE
var tx=0,sw2=false;
document.getElementById("card").addEventListener("touchstart",function(e){tx=e.touches[0].clientX;sw2=false;},{passive:true});
document.getElementById("card").addEventListener("touchmove",function(e){if(!flipped)return;var dx=e.touches[0].clientX-tx;if(Math.abs(dx)>10){sw2=true;var c=document.getElementById("card");c.style.transition="none";c.style.transform="rotateY(180deg) translateX("+(-(dx*.3))+"px) rotate("+(dx*.02)+"deg)";}},{passive:true});
document.getElementById("card").addEventListener("touchend",function(e){var c=document.getElementById("card");c.style.transition="";if(!flipped||!sw2){c.style.transform=flipped?"rotateY(180deg)":"";return;}var dx=e.changedTouches[0].clientX-tx;if(dx>80){c.style.transform="rotateY(180deg) translateX(120px)";setTimeout(function(){rate(3);},150);}else if(dx<-80){c.style.transform="rotateY(180deg) translateX(-120px)";setTimeout(function(){rate(0);},150);}else c.style.transform="rotateY(180deg)";},{passive:true});

function registerServiceWorker(){
  if(!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("sw.js").catch(function(err){
    console.warn("FlashCards 4U service worker registration failed:", err);
  });
}
window.addEventListener("load",function(){init();registerServiceWorker();});
// Backup: ensure bnav shows if already logged in
document.addEventListener("DOMContentLoaded",function(){
  setTimeout(function(){
    try{
      var u=localStorage.getItem("fc4u_uid");
      var us=JSON.parse(localStorage.getItem("fc4u_u")||"{}");
      if(u&&us[u]){
        document.body.classList.remove("pre-login");
        var bn=document.getElementById("bnav");
        if(bn)bn.style.display="flex";
      }
    }catch(e){}
  },50);
});
window.addEventListener("orientationchange",function(){
  setTimeout(function(){
    var active=document.querySelector(".scr.on");
    if(active)active.style.minHeight=window.innerHeight+"px";
  },300);
});
window.addEventListener("resize",function(){
  var active=document.querySelector(".scr.on");
  if(active){
    active.style.height="";
  }
});

// ============================================================
// ADMIN PANEL - User database export
// Access: type "admin" in browser console: showAdminPanel()
// Or URL: ?admin=1
// ============================================================
function auditVocabulary(){
  var seen={},duplicates=[],missing=[],levels={};
  VOCAB.forEach(function(w,i){
    levels[w.level]=(levels[w.level]||0)+1;
    if(seen[w.id])duplicates.push({id:w.id,word:w.word,index:i});
    seen[w.id]=true;
    ["id","word","fa","def","ex1","ex2","pos","level"].forEach(function(k){
      if(!w[k]||String(w[k]).trim()==="")missing.push({id:w.id,word:w.word,field:k,index:i});
    });
  });
  return {total:VOCAB.length,duplicates:duplicates,missing:missing,levels:levels};
}

function showAdminPanel(){
  var usersArr=Object.keys(users).map(function(k){
    var u=users[k];
    var prog=u.progress||{};
    var reviewed=Object.values(prog).filter(function(p){return p.reviews>0;}).length;
    var mastered=Object.values(prog).filter(function(p){return (p.mastery||0)>=70;}).length;
    return {
      id:k,
      name:u.name,
      email:u.email||"—",
      avatar:u.avatar,
      level:u.level||"A1",
      joinDate:u.joinDate||"—",
      streak:u.game&&u.game.streak||0,
      totalXP:u.game&&u.game.totalXP||0,
      reviewed:reviewed,
      mastered:mastered,
      device:(u.device||"نامشخص").substring(0,50)
    };
  });
  
  // Build admin panel HTML
  var panel=document.createElement("div");
  panel.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.95);"+
    "z-index:99999;overflow-y:auto;padding:20px;font-family:monospace;color:#fff;direction:ltr";
  
  var title=document.createElement("h2");
  title.textContent="FlashCards 4U — Admin Panel";
  title.style.cssText="color:#00d084;margin-bottom:16px;font-size:18px";
  panel.appendChild(title);
  
  var stats=document.createElement("p");
  stats.style.cssText="color:#4d9fff;margin-bottom:16px;font-size:13px";
  stats.textContent="Total users: "+usersArr.length+" | Generated: "+new Date().toLocaleString();
  panel.appendChild(stats);

  var audit=auditVocabulary();
  var auditBox=document.createElement("pre");
  auditBox.style.cssText="background:#071528;border:1px solid #1e2f48;border-radius:10px;padding:12px;color:#a8c4e0;font-size:12px;white-space:pre-wrap;margin-bottom:16px";
  auditBox.textContent=[
    "Vocabulary audit",
    "Total cards: "+audit.total,
    "Duplicate IDs: "+audit.duplicates.length,
    "Missing required fields: "+audit.missing.length,
    "Levels: "+JSON.stringify(audit.levels)
  ].join("\n");
  panel.appendChild(auditBox);
  
  // Table
  var tbl=document.createElement("table");
  tbl.style.cssText="width:100%;border-collapse:collapse;font-size:11px";
  
  var headers=["#","نام","ایمیل","سطح","تاریخ ثبت","XP","Streak","مرور","تسلط","دستگاه"];
  var hr=document.createElement("tr");
  headers.forEach(function(h){
    var th=document.createElement("th");
    th.textContent=h;
    th.style.cssText="padding:8px;background:#1a2a3a;text-align:left;border:1px solid #333;color:#4d9fff";
    hr.appendChild(th);
  });
  tbl.appendChild(hr);
  
  usersArr.forEach(function(u,i){
    var tr=document.createElement("tr");
    tr.style.background=i%2===0?"#0d1a2a":"#111e2e";
    [i+1,u.name,u.email,u.level,u.joinDate,u.totalXP,u.streak,u.reviewed,u.mastered,u.device].forEach(function(val){
      var td=document.createElement("td");
      td.textContent=val;
      td.style.cssText="padding:7px 8px;border:1px solid #222;direction:rtl;white-space:nowrap";
      tr.appendChild(td);
    });
    tbl.appendChild(tr);
  });
  panel.appendChild(tbl);
  
  // Export CSV button
  var csvBtn=document.createElement("button");
  csvBtn.textContent="📥 Export CSV";
  csvBtn.style.cssText="margin-top:16px;padding:10px 20px;background:#00d084;color:#000;"+
    "border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:700;margin-left:10px";
  csvBtn.addEventListener("click",function(){
    var csv=["id,name,email,level,joinDate,XP,streak,reviewed,mastered"];
    usersArr.forEach(function(u){
      csv.push([u.id,'"'+u.name+'"',u.email,u.level,u.joinDate,u.totalXP,u.streak,u.reviewed,u.mastered].join(","));
    });
    var blob=new Blob([csv.join("\n")],{type:"text/csv;charset=utf-8;"});
    var url=URL.createObjectURL(blob);
    var a=document.createElement("a");
    a.href=url;a.download="flashcards4u_users_"+new Date().toISOString().slice(0,10)+".csv";
    a.click();URL.revokeObjectURL(url);
  });
  panel.appendChild(csvBtn);
  
  // JSON export
  var jsonBtn=document.createElement("button");
  jsonBtn.textContent="📋 Copy JSON";
  jsonBtn.style.cssText="margin-top:16px;padding:10px 20px;background:#4d9fff;color:#000;"+
    "border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:700";
  jsonBtn.addEventListener("click",function(){
    navigator.clipboard&&navigator.clipboard.writeText(JSON.stringify(usersArr,null,2));
    jsonBtn.textContent="✅ Copied!";
    setTimeout(function(){jsonBtn.textContent="📋 Copy JSON";},2000);
  });
  panel.appendChild(jsonBtn);

  var auditBtn=document.createElement("button");
  auditBtn.textContent="🧪 Export Vocabulary Audit";
  auditBtn.style.cssText="margin-top:16px;padding:10px 20px;background:#ffd700;color:#000;"+
    "border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:700;margin-left:10px";
  auditBtn.addEventListener("click",function(){
    var blob=new Blob([JSON.stringify(auditVocabulary(),null,2)],{type:"application/json;charset=utf-8"});
    var url=URL.createObjectURL(blob);
    var a=document.createElement("a");
    a.href=url;a.download="flashcards4u_vocab_audit_"+new Date().toISOString().slice(0,10)+".json";
    a.click();URL.revokeObjectURL(url);
  });
  panel.appendChild(auditBtn);
  
  // Close button
  var closeBtn=document.createElement("button");
  closeBtn.textContent="✕ بستن";
  closeBtn.style.cssText="position:fixed;top:15px;right:15px;padding:8px 16px;"+
    "background:#ff3b5c;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:700;z-index:100000";
  closeBtn.addEventListener("click",function(){document.body.removeChild(panel);});
  panel.appendChild(closeBtn);
  
  document.body.appendChild(panel);
}

// URL trigger: ?admin=1
if(window.location.search.indexOf("admin=1")>=0){
  window.addEventListener("load",function(){setTimeout(showAdminPanel,1000);});
}
// Keyboard shortcut: Ctrl+Shift+A (desktop only)
document.addEventListener("keydown",function(e){
  if(e.ctrlKey&&e.shiftKey&&e.key==="A"){showAdminPanel();}
});

// ============================================================
// MY CARDS - Custom flashcard system
// ============================================================
var MC_KEY = "fc4u_mycards";
var mc_editing = null; // id of card being edited

function loadMyCards(){
  try { return JSON.parse(localStorage.getItem(MC_KEY)||"[]"); }
  catch(e){ return []; }
}
function saveMyCards(cards){
  localStorage.setItem(MC_KEY, JSON.stringify(cards));
}
function mcUID(){
  return "mc_"+Date.now()+"_"+Math.random().toString(36).slice(2,7);
}

function mcTab(tab){
  ["list","add","io"].forEach(function(t){
    document.getElementById("mc-panel-"+t).style.display = t===tab ? "block" : "none";
    var btn = document.getElementById("mc-tab-"+t);
    btn.style.color = t===tab ? "var(--ac)" : "var(--t3)";
    btn.style.fontWeight = t===tab ? "800" : "700";
    btn.style.borderBottomColor = t===tab ? "var(--ac)" : "transparent";
  });
  if(tab==="list") renderMyCards();
  if(tab==="add" && !mc_editing) clearMcForm();
}

function renderMyCards(){
  var cards = loadMyCards();
  var q = (document.getElementById("mc-search").value||"").toLowerCase().trim();
  if(q) cards = cards.filter(function(c){
    return (c.word||"").toLowerCase().indexOf(q)>=0 ||
           (c.fa||"").indexOf(q)>=0 ||
           (c.tag||"").toLowerCase().indexOf(q)>=0;
  });

  var countEl = document.getElementById("mc-count");
  var allCards = loadMyCards();
  if(countEl) countEl.textContent = allCards.length + " کارت";

  var list = document.getElementById("mc-list");
  var empty = document.getElementById("mc-empty");
  list.innerHTML = "";

  if(allCards.length === 0){
    empty.style.display = "block";
    list.style.display = "none";
    return;
  }
  empty.style.display = "none";
  list.style.display = "block";

  if(cards.length === 0 && q){
    list.innerHTML = "<div style='text-align:center;padding:24px;color:var(--t3);font-size:13px;direction:rtl'>نتیجه‌ای پیدا نشد</div>";
    return;
  }

  cards.slice().reverse().forEach(function(c){
    var d = document.createElement("div");
    d.style.cssText = "display:flex;align-items:center;gap:10px;padding:12px;background:var(--bg2);border-radius:12px;margin-bottom:8px;border:1px solid var(--bd);position:relative";

    var tagColor = c.tag ? "var(--ac2)" : "var(--bd2)";
    d.innerHTML =
      "<div style='flex:1;min-width:0'>" +
        "<div style='display:flex;align-items:center;gap:6px;flex-wrap:wrap'>" +
          "<span style='font-size:15px;font-weight:800;color:var(--t1);direction:ltr'>" + (c.word||"") + "</span>" +
          (c.pos ? "<span style='font-size:10px;color:var(--t3);border:1px solid var(--bd2);border-radius:99px;padding:1px 6px'>"+c.pos+"</span>" : "") +
          (c.tag ? "<span style='font-size:10px;color:var(--ac2);border:1px solid var(--ac2);border-radius:99px;padding:1px 6px'>"+c.tag+"</span>" : "") +
        "</div>" +
        "<div style='font-size:13px;color:var(--t2);direction:rtl;margin-top:3px'>" + (c.fa||"") + "</div>" +
        (c.ipa ? "<div style='font-size:10px;color:var(--t3);direction:ltr;font-family:monospace;margin-top:2px'>" + c.ipa + "</div>" : "") +
      "</div>" +
      "<div style='display:flex;flex-direction:column;gap:6px;flex-shrink:0'>" +
        "<button style='padding:6px 10px;border-radius:8px;border:1px solid var(--ac2);background:none;color:var(--ac2);font-size:11px;font-weight:700;cursor:pointer;font-family:inherit' onclick=\"mcEdit('"+c.id+"')\">✏️</button>" +
        "<button style='padding:6px 10px;border-radius:8px;border:1px solid var(--rd);background:none;color:var(--rd);font-size:11px;font-weight:700;cursor:pointer;font-family:inherit' onclick=\"mcDelete('"+c.id+"')\">🗑️</button>" +
      "</div>";
    list.appendChild(d);
  });
}

function clearMcForm(){
  mc_editing = null;
  ["word","ipa","fa","def","ex1","ex2","syn","ant","tag"].forEach(function(f){
    document.getElementById("mc-f-"+f).value = "";
  });
  document.getElementById("mc-f-pos").value = "adjective";
  document.getElementById("mc-form-title").textContent = "➕ کارت جدید";
  document.getElementById("mc-save-btn").textContent = "💾 ذخیره کارت";
  document.getElementById("mc-form-err").style.display = "none";
  document.getElementById("mc-edit-id").value = "";
}

function mcEdit(id){
  var cards = loadMyCards();
  var c = cards.find(function(x){return x.id===id;});
  if(!c) return;
  mc_editing = id;
  ["word","ipa","fa","def","ex1","ex2","syn","ant","tag"].forEach(function(f){
    document.getElementById("mc-f-"+f).value = c[f]||"";
  });
  document.getElementById("mc-f-pos").value = c.pos || "adjective";
  document.getElementById("mc-form-title").textContent = "✏️ ویرایش: " + c.word;
  document.getElementById("mc-save-btn").textContent = "✅ بروزرسانی";
  document.getElementById("mc-form-err").style.display = "none";
  document.getElementById("mc-edit-id").value = id;
  mcTab("add");
  document.getElementById("mc-f-word").focus();
}

function mcDelete(id){
  var cards = loadMyCards();
  var c = cards.find(function(x){return x.id===id;});
  if(!c) return;
  if(!confirm("کارت \""+c.word+"\" حذف شود؟")) return;
  cards = cards.filter(function(x){return x.id!==id;});
  saveMyCards(cards);
  renderMyCards();
}

function saveMyCrd(){
  var word = document.getElementById("mc-f-word").value.trim();
  var fa   = document.getElementById("mc-f-fa").value.trim();
  var errEl = document.getElementById("mc-form-err");

  if(!word || !fa){
    errEl.textContent = "⚠️ کلمه انگلیسی و معنی فارسی اجباری هستند";
    errEl.style.display = "block";
    return;
  }
  errEl.style.display = "none";

  var cards = loadMyCards();
  var editId = document.getElementById("mc-edit-id").value;

  var card = {
    id:   editId || mcUID(),
    word: word,
    ipa:  document.getElementById("mc-f-ipa").value.trim(),
    fa:   fa,
    def:  document.getElementById("mc-f-def").value.trim(),
    ex1:  document.getElementById("mc-f-ex1").value.trim(),
    ex2:  document.getElementById("mc-f-ex2").value.trim(),
    pos:  document.getElementById("mc-f-pos").value,
    syn:  document.getElementById("mc-f-syn").value.trim(),
    ant:  document.getElementById("mc-f-ant").value.trim(),
    tag:  document.getElementById("mc-f-tag").value.trim(),
    level:"MY",
    created: editId ? (cards.find(function(x){return x.id===editId;})||{}).created||new Date().toISOString() : new Date().toISOString()
  };

  if(editId){
    cards = cards.map(function(x){ return x.id===editId ? card : x; });
    toast("✅ کارت بروزرسانی شد");
  } else {
    cards.push(card);
    toast("✅ کارت ذخیره شد! "+word+" = "+fa);
  }

  saveMyCards(cards);
  clearMcForm();
  mcTab("list");
}

// ===== EXPORT =====
function exportMyCards(fmt){
  var cards = loadMyCards();
  if(!cards.length){
    toast("❌ هیچ کارتی برای خروجی وجود ندارد");
    return;
  }
  var el = document.getElementById("mc-export-info");

  if(fmt==="json"){
    // Clean export (remove internal id if user wants clean format)
    var out = cards.map(function(c){
      return {
        word:c.word, ipa:c.ipa||"", fa:c.fa, def:c.def||"",
        ex1:c.ex1||"", ex2:c.ex2||"", pos:c.pos||"noun",
        syn:c.syn||"", ant:c.ant||"", tag:c.tag||""
      };
    });
    var blob = new Blob([JSON.stringify(out, null, 2)], {type:"application/json;charset=utf-8;"});
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href=url; a.download="my_flashcards_"+new Date().toISOString().slice(0,10)+".json";
    a.click(); URL.revokeObjectURL(url);
    if(el) el.textContent = cards.length+" کارت دانلود شد ✅";
  } else {
    // CSV
    var rows = ["word,ipa,fa,def,ex1,ex2,pos,syn,ant,tag"];
    cards.forEach(function(c){
      rows.push([
        '"'+(c.word||"")+'"', '"'+(c.ipa||"")+'"', '"'+(c.fa||"")+'"',
        '"'+(c.def||"")+'"', '"'+(c.ex1||"")+'"', '"'+(c.ex2||"")+'"',
        '"'+(c.pos||"")+'"', '"'+(c.syn||"")+'"', '"'+(c.ant||"")+'"',
        '"'+(c.tag||"")+'"'
      ].join(","));
    });
    var blob = new Blob(["﻿"+rows.join("\n")], {type:"text/csv;charset=utf-8;"});
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href=url; a.download="my_flashcards_"+new Date().toISOString().slice(0,10)+".csv";
    a.click(); URL.revokeObjectURL(url);
    if(el) el.textContent = cards.length+" کارت CSV دانلود شد ✅";
  }
}

// ===== IMPORT =====
function importMyCards(input){
  var file = input.files[0];
  if(!file) return;
  var result = document.getElementById("mc-import-result");
  var reader = new FileReader();
  reader.onload = function(e){
    try{
      var imported = JSON.parse(e.target.result);
      if(!Array.isArray(imported)) throw new Error("فرمت نادرست");
      var valid = imported.filter(function(c){ return c.word && c.fa; });
      if(!valid.length) throw new Error("هیچ کارت معتبری پیدا نشد");

      var existing = loadMyCards();
      var existingWords = existing.map(function(c){return c.word.toLowerCase();});
      var added=0, skipped=0;
      valid.forEach(function(c){
        if(existingWords.indexOf((c.word||"").toLowerCase())>=0){
          skipped++;
        } else {
          existing.push({
            id: mcUID(),
            word:c.word||"", ipa:c.ipa||"", fa:c.fa||"",
            def:c.def||"", ex1:c.ex1||"", ex2:c.ex2||"",
            pos:c.pos||"noun", syn:c.syn||"", ant:c.ant||"",
            tag:c.tag||"", level:"MY",
            created: new Date().toISOString()
          });
          added++;
        }
      });
      saveMyCards(existing);

      result.textContent = "✅ "+added+" کارت اضافه شد" + (skipped?" ("+skipped+" تکراری نادیده گرفته شد)":"");
      result.style.background = "rgba(0,208,132,.15)";
      result.style.color = "var(--gr)";
      result.style.display = "block";
      renderMyCards();
      input.value = "";
    } catch(err){
      result.textContent = "❌ خطا: " + err.message;
      result.style.background = "rgba(255,59,92,.1)";
      result.style.color = "var(--rd)";
      result.style.display = "block";
    }
  };
  reader.readAsText(file);
}

// ===== STUDY from My Cards =====
function startMyCardsStudy(){
  var cards = loadMyCards();
  if(!cards.length){ toast("❌ هیچ کارتی وجود ندارد"); return; }
  // Convert to VOCAB-compatible format and inject temporarily
  var q = (document.getElementById("mc-search").value||"").toLowerCase().trim();
  var pool = q ? cards.filter(function(c){
    return (c.word||"").toLowerCase().indexOf(q)>=0 || (c.fa||"").indexOf(q)>=0 || (c.tag||"").indexOf(q)>=0;
  }) : cards;
  if(!pool.length){ toast("❌ کارتی پیدا نشد"); return; }

  // Temporarily set study queue to my cards
  sq = pool.slice().sort(function(){return Math.random()-.5;});
  cur = sq[0]; flipped = false;
  gotoTab("study");
  document.getElementById("card").classList.remove("flipped");
  renderCard();
  setTimeout(speak, 350);
  toast("📖 مطالعه "+pool.length+" کارت شخصی");
}

// ===== QUIZ from My Cards =====
function startMyCardsQuiz(mode){
  var cards = loadMyCards();
  if(cards.length < 2){ toast("❌ برای آزمون حداقل ۲ کارت لازم است"); return; }
  var q = (document.getElementById("mc-search").value||"").toLowerCase().trim();
  var pool = q ? cards.filter(function(c){
    return (c.word||"").toLowerCase().indexOf(q)>=0 || (c.fa||"").indexOf(q)>=0;
  }) : cards;
  if(pool.length < 2){ toast("❌ حداقل ۲ کارت برای آزمون لازم است"); return; }

  // Build quiz using my cards pool
  qWords = pool.slice().sort(function(){return Math.random()-.5;}).slice(0, Math.min(qTotal||10, pool.length));
  qIdx=0; qScore=0; qCorrect=0; qWrong=0; qMode="mc";

  // For choices, use my cards as wrong answers pool
  window._myCardPool = pool; // temp reference

  gotoTab("quiz");
  ["quiz-setup","quiz-play","quiz-result","quiz-match","quiz-spell"].forEach(function(id){
    var el=document.getElementById(id); if(el) el.style.display="none";
  });
  document.getElementById("quiz-play").style.display = "block";
  document.getElementById("qmode-badge").textContent = "⭐ کارت‌های من";

  // Override getPool4Choices to use my cards
  window._mcQuizMode = true;
  showQ();
  toast("🎯 آزمون از "+qWords.length+" کارت شخصی");
}

// Override getPool4Choices when in my cards quiz mode
var _origGetPool4Choices = null;

// Init mycards screen on tab switch
function initMycards(){
  mcTab("list");
  renderMyCards();
}


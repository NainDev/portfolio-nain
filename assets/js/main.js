/* Portofolio Nain — isi bagian CONFIG di bawah dengan kontak dan tautanmu. Kolom yang kosong otomatis disembunyikan. */
const CONFIG={
  nama:"Nain Nadika",
  foto:"",                 /* mis. "assets/img/foto.jpg" untuk mengganti huruf N di bagian Tentang */
  wa:"",                   /* nomor WhatsApp format 62, mis. "6281234567890" */
  email:"",                /* alamat email yang ingin ditampilkan */
  formEndpoint:"",         /* alamat layanan formulir pihak ketiga (mis. Formspree: https://formspree.io/f/xxxx) */
  sosial:{github:"",instagram:"",tiktok:"",youtube:""}
};

const PROJECTS=[
 {id:"kasirin",nama:"kasir-in",kat:"Web App",unggulan:true,url:"https://appkasirin.my.id",
  ringkas:"Aplikasi kasir (POS) berbasis web untuk warung dan agen. Scan barcode, kelola stok, pantau laba, dan tetap jalan saat internet putus.",
  gambar:["kasirin-dashboard.jpg","kasirin-kasir.jpg","kasirin-cekharga.jpg","kasirin-login.jpg"],
  fitur:["Scan barcode lewat kamera atau pemindai USB","Offline-first: transaksi tersinkron saat koneksi kembali","Stok, stock opname, dan peringatan stok menipis","Harga grosir, satuan lain, dan promo otomatis","Member dan poin, QRIS, transfer, e-wallet","Struk printer Bluetooth, laporan laba, dan dashboard owner"],
  tek:["HTML","CSS","JavaScript","Firebase Auth","Realtime DB","PWA","Bootstrap","Vercel"]},
 {id:"nawaku",nama:"Nawaku",kat:"Platform",url:"https://nainpedia.com",
  ringkas:"Platform baca digital yang mendokumentasikan sejarah, budaya, dan kuliner Kota Cirebon, disusun per kawasan agar mudah ditelusuri.",
  gambar:["nawaku.svg"],
  fitur:["Artikel dikelompokkan per kawasan","Panel admin terhubung ke GitHub lewat Contents API","Daftar isi dengan penanda posisi baca dan progres baca","Halaman pendukung: Tentang Kami, Tim Redaksi, Kebijakan Privasi"],
  tek:["HTML","CSS","JavaScript","GitHub API","Poppins","Playfair Display"]},
 {id:"aksara",nama:"Aksara",kat:"Platform",
  ringkas:"Platform menulis dan membaca cerita bergaya Wattpad. Penulis menerbitkan bab, pembaca mengikuti secara realtime.",
  gambar:["aksara.svg"],
  fitur:["Empat halaman: masuk, dashboard, editor, dan pembaca","Pembaruan realtime lewat listener database","URL berbasis slug untuk tiap cerita","Bab disimpan di jalur terpisah agar data aman saat diperbarui"],
  tek:["HTML","JavaScript","Firebase Auth","Realtime DB"]},
 {id:"aturnow",nama:"Aturnow",kat:"Tools",
  ringkas:"Aplikasi keuangan pribadi: catat pemasukan dan pengeluaran, lihat rekap bulanan, lalu minta analisis dari AI.",
  gambar:["aturnow.svg"],
  fitur:["Pencatatan transaksi harian","Rekap bulanan dengan grafik","Analisis keuangan memakai Gemini AI","Ikon SVG dan tampilan responsif"],
  tek:["JavaScript","Firebase Realtime DB","Chart.js","Gemini API"]},
 {id:"nawa",nama:"Nawa",kat:"Web App",
  ringkas:"Situs layanan pertumbuhan media sosial dengan pilihan paket yang jelas, memakai bahasa desain yang sama dengan Aturnow.",
  gambar:["nawa.svg"],
  fitur:["Katalog layanan dan paket","Halaman pesan yang ringkas","Desain konsisten dengan produk lain"],
  tek:["HTML","CSS","JavaScript"]},
 {id:"sekolah",nama:"Sistem Sekolah",kat:"Web App",
  ringkas:"Dashboard untuk siswa, guru, dan admin: absensi QR dengan lokasi, izin dan sakit dengan bukti gambar, nilai, pemberitahuan, dan sanksi.",
  gambar:["sekolah.svg"],
  fitur:["Absensi QR yang mencatat lokasi","Izin dan sakit dengan unggah bukti, lalu disetujui guru","Guru mengelola kelas, nilai, dan pemberitahuan sendiri","Dashboard terpisah untuk siswa, guru, dan admin"],
  tek:["HTML","JavaScript","Login Google","JSON database","Catbox API"]},
 {id:"affiliate",nama:"Web Affiliate",kat:"Platform",
  ringkas:"Etalase produk campuran semua kategori dengan akun publik untuk menyimpan favorit, plus dashboard admin untuk mengelola produk dan pengguna.",
  gambar:["affiliate.svg"],
  fitur:["Katalog produk lintas kategori","Akun pengguna dengan daftar favorit","Dashboard admin: produk, kategori, pengguna","HTML statis dengan data JSON, tanpa server"],
  tek:["HTML","CSS","JavaScript","JSON"]},
 {id:"vault",nama:"Vault Akun",kat:"Tools",
  ringkas:"Penyimpan akun media sosial pribadi dalam satu dashboard sederhana. Setiap perubahan tersimpan otomatis dan terenkripsi.",
  gambar:["vault.svg"],
  fitur:["Simpan username, email, dan kata sandi per akun","Kata sandi terenkripsi","Sinkron otomatis lewat GitHub Contents API","Login dengan username yang bisa diatur"],
  tek:["JavaScript","GitHub API","Enkripsi"]}
];

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,fine=matchMedia("(hover:hover) and (pointer:fine)").matches;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ic=n=>`<svg class="i"><use href="#${n}"/></svg>`;
const img=f=>"assets/img/"+f;

/* tahun */
$("#th").textContent=new Date().getFullYear();

/* tema */
const root=document.documentElement;
try{const t=localStorage.getItem("tema");if(t)root.dataset.theme=t}catch{}
const temaIkon=()=>{const d=root.dataset.theme?root.dataset.theme=="dark":matchMedia("(prefers-color-scheme: dark)").matches;$("#tema").innerHTML=ic(d?"sun":"moon")};
$("#tema").onclick=()=>{const d=root.dataset.theme?root.dataset.theme=="dark":matchMedia("(prefers-color-scheme: dark)").matches,n=d?"light":"dark";root.dataset.theme=n;try{localStorage.setItem("tema",n)}catch{}temaIkon()};
temaIkon();

/* foto profil */
if(CONFIG.foto)$("#avin").innerHTML=`<img src="${esc(CONFIG.foto)}" alt="${esc(CONFIG.nama)}">`;

/* navbar: bayangan, progres, menu aktif */
const hdr=$("#top"),prog=$("#prog"),links=$$("#links a"),ink=$("#ink"),secs=links.map(a=>$(a.getAttribute("href")));
function inkTo(a){if(!a)return ink.style.width="0";ink.style.left=a.offsetLeft+"px";ink.style.width=a.offsetWidth+"px"}
function onScroll(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
 hdr.classList.toggle("sc",y>24);prog.style.transform=`scaleX(${h>0?y/h:0})`;
 let cur=null;secs.forEach((s,i)=>{if(s&&s.getBoundingClientRect().top<innerHeight*.4)cur=links[i]});
 if(cur!==onScroll.c){onScroll.c=cur;links.forEach(a=>a.classList.toggle("on",a===cur));inkTo(cur||links[0])}}
addEventListener("scroll",onScroll,{passive:true});addEventListener("resize",()=>inkTo($("#links a.on")||links[0]));
(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(()=>{onScroll();inkTo($("#links a.on")||links[0])});
const mn=$("#mn"),bg=$("#bg");
bg.onclick=()=>{const o=mn.classList.toggle("open");bg.setAttribute("aria-expanded",o);bg.innerHTML=ic(o?"close":"menu")};
mn.onclick=e=>{if(e.target.closest("a")){mn.classList.remove("open");bg.setAttribute("aria-expanded","false");bg.innerHTML=ic("menu")}};

/* teks berganti di hero */
const kata=["aplikasi kasir","platform baca","alat keuangan","sistem sekolah","web yang hidup"];
(()=>{const el=$("#rot");if(reduce)return;let i=0,j=kata[0].length,del=true;
 (function tick(){const w=kata[i];if(del){j--;el.textContent=w.slice(0,j);if(j<=0){del=false;i=(i+1)%kata.length;return setTimeout(tick,260)}return setTimeout(tick,38)}
  j++;el.textContent=kata[i].slice(0,j);if(j>=kata[i].length){del=true;return setTimeout(tick,1900)}setTimeout(tick,75)})();
 setTimeout(()=>{},0)})();
/* mulai dari kata pertama yang sudah lengkap, lalu dihapus perlahan */
/* kartu kode di hero: diketik */
(()=>{const el=$("#kode");if(!el)return;const baris=[
 [["k","const "],["","nain = {"]],
 [["","  peran: ["],["s","'developer'"],["",", "],["s","'kreator'"],["","],"]],
 [["","  fokus: ["],["s","'web'"],["",", "],["s","'konten'"],["","],"]],
 [["","  kota: "],["s","'Indonesia'"],["",","]],
 [["","  siap: "],["p","true"]],
 [["","};"]]];
 const html=baris.map(r=>r.map(([c,t])=>c?`<span class="${c}">${esc(t)}</span>`:esc(t)).join("")).join("\n");
 if(reduce){el.innerHTML=html;return}
 const plain=baris.map(r=>r.map(x=>x[1]).join("")).join("\n");let n=0;
 // ketik per karakter, lalu tampilkan versi berwarna di akhir
 (function t(){n+=2;el.textContent=plain.slice(0,n);if(n<plain.length)setTimeout(t,28);else el.innerHTML=html})();
})();

/* penghitung angka */
function hitung(el){const to=+el.dataset.n,suf=el.dataset.s||"";if(reduce){el.textContent=to+suf;return}
 const t0=performance.now(),d=1400;(function f(t){const p=Math.min(1,(t-t0)/d),e=1-Math.pow(1-p,3);el.textContent=Math.round(to*e)+(p>=1?suf:"");if(p<1)requestAnimationFrame(f)})(t0)}
const tekSet=new Set(PROJECTS.flatMap(p=>p.tek));
$$("[data-n]")[0].dataset.n=PROJECTS.length;
setTimeout(()=>$$(".stats [data-n]").forEach(hitung),500);

/* marquee teknologi */
(()=>{const l=["HTML","CSS","JavaScript","Firebase","Realtime Database","PWA","Bootstrap","Chart.js","GitHub API","Gemini AI","Vercel","SVG","Responsive","Offline-first"];
 $("#marq").innerHTML=[...l,...l].map(x=>`<span>${x}</span>`).join("")})();

/* tampil saat di-scroll (dengan jeda berurutan) */
(()=>{const els=$$(".rv");
 const grup=new Map();els.forEach(e=>{const p=e.parentElement;if(!grup.has(p))grup.set(p,[]);grup.get(p).push(e)});
 grup.forEach(a=>a.forEach((e,i)=>e.style.setProperty("--d",Math.min(i,6)*.08+"s")));
 if(!("IntersectionObserver" in window)||reduce)return els.forEach(e=>e.classList.add("in"));
 const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});
 els.forEach(e=>o.observe(e));window.__rvObs=o})();

/* garis proses terisi saat terlihat */
(()=>{const s=$("#steps"),f=$("#lnf");if(!s||!f)return;if(!("IntersectionObserver" in window)||reduce){f.style.width="100%";return}
 new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){f.style.width="100%";o.disconnect()}}),{threshold:.3}).observe(s)})();

/* efek miring 3D (hanya layar dengan mouse) */
if(fine&&!reduce){
 const attach=el=>{el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height,m=el.id=="win"?7:5;
   el.style.transform=`perspective(900px) rotateX(${(.5-y)*m}deg) rotateY(${(x-.5)*m*1.4}deg) translateZ(0)`;el.style.setProperty("--mx",x*100+"%");el.style.setProperty("--my",y*100+"%")});
  el.addEventListener("pointerleave",()=>{el.style.transform=""})};
 $$(".tilt").forEach(attach);window.__tilt=attach;
 /* chip melayang mengikuti mouse */
 const hv=$("#hv");if(hv)hv.addEventListener("pointermove",e=>{const r=hv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  $$("#hv [data-par]").forEach(c=>{const k=+c.dataset.par;c.style.translate=`${x*k}px ${y*k}px`})});
 if(hv)hv.addEventListener("pointerleave",()=>$$("#hv [data-par]").forEach(c=>c.style.translate=""));
 /* cahaya kursor */
 const g=$("#glow");let gx=0,gy=0,tx=0,ty=0;document.body.classList.add("has-glow");
 addEventListener("pointermove",e=>{tx=e.clientX;ty=e.clientY},{passive:true});
 (function lerp(){gx+=(tx-gx)*.12;gy+=(ty-gy)*.12;g.style.transform=`translate(${gx}px,${gy}px)`;requestAnimationFrame(lerp)})();
 /* tombol magnet */
 $$("[data-mag]").forEach(b=>{b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;b.style.transform=`translate(${x*.18}px,${y*.28}px)`});
  b.addEventListener("pointerleave",()=>b.style.transform="")})}

/* partikel latar hero */
(()=>{const cv=$("#fx");if(!cv||reduce)return;const x=cv.getContext("2d");let W,H,P=[],raf;
 const size=()=>{const r=cv.getBoundingClientRect(),d=Math.min(2,devicePixelRatio||1);W=cv.width=r.width*d;H=cv.height=r.height*d;x.setTransform(1,0,0,1,0,0);const n=Math.round(Math.min(46,r.width/26));
  P=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,r:(Math.random()*2+1)*d,vx:(Math.random()-.5)*.25*d,vy:(Math.random()-.5)*.25*d}))};
 size();addEventListener("resize",size);
 const col=()=>getComputedStyle(root).getPropertyValue("--pr").trim()||"#2f80ed";
 (function draw(){const c=col();x.clearRect(0,0,W,H);
  for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fillStyle=c;x.globalAlpha=.5;x.fill()}
  const L=Math.min(W,H)*.2;for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const dx=P[i].x-P[j].x,dy=P[i].y-P[j].y,d=Math.hypot(dx,dy);if(d<L){x.globalAlpha=(1-d/L)*.28;x.strokeStyle=c;x.lineWidth=1;x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.stroke()}}
  x.globalAlpha=1;raf=requestAnimationFrame(draw)})();
 document.addEventListener("visibilitychange",()=>{if(document.hidden)cancelAnimationFrame(raf)})})();

/* ===== project ===== */
const katList=["Semua",...new Set(PROJECTS.map(p=>p.kat))];
let katAktif="Semua";
function tombolLink(p,kelas){return p.url?`<a class="btn ${kelas||"pr"}" href="${esc(p.url)}" target="_blank" rel="noopener">Kunjungi${ic("out")}</a>`:""}
function renderFeat(){const p=PROJECTS.find(x=>x.unggulan);if(!p)return;
 $("#feat").innerHTML=`<div class="feat-t"><span class="pill">Project unggulan · ${esc(p.kat)}</span><h3>${esc(p.nama)}</h3><p>${esc(p.ringkas)}</p>
  <ul class="tg">${p.tek.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>
  <div class="feat-a"><button class="btn pr" type="button" data-open="${p.id}">Lihat detail${ic("arrow")}</button>${tombolLink(p,"")}</div></div>
  <div class="feat-v"><div class="s s1"><img src="${img(p.gambar[1])}" alt="Halaman kasir ${esc(p.nama)}" loading="lazy" width="1400" height="840"></div><div class="s s2"><img src="${img(p.gambar[0])}" alt="Dashboard ${esc(p.nama)}" loading="lazy" width="1400" height="840"></div></div>`}
function renderFilter(){$("#flt").innerHTML=katList.map(k=>`<button class="fb${k==katAktif?" on":""}" type="button" role="tab" aria-selected="${k==katAktif}" data-k="${esc(k)}">${esc(k)}<em>${k=="Semua"?PROJECTS.length:PROJECTS.filter(p=>p.kat==k).length}</em></button>`).join("")}
function renderGrid(){const L=PROJECTS.filter(p=>katAktif=="Semua"||p.kat==katAktif);
 $("#pg").innerHTML=L.map((p,i)=>`<article class="cd pc tilt" style="animation-delay:${i*.06}s" data-open="${p.id}" tabindex="0" role="button" aria-label="Buka detail ${esc(p.nama)}">
  <div class="pc-i"><img src="${img(p.gambar[0])}" alt="Tampilan ${esc(p.nama)}" loading="lazy" width="1200" height="750"><span class="pill">${esc(p.kat)}</span></div>
  <div class="pc-b"><h3>${esc(p.nama)}</h3><p>${esc(p.ringkas)}</p><div class="pc-f"><ul class="tg">${p.tek.map(t=>`<li>${esc(t)}</li>`).join("")}</ul><span class="go">${ic("arrow")}</span></div></div></article>`).join("");
 if(window.__tilt)$$("#pg .tilt").forEach(window.__tilt)}
$("#flt").onclick=e=>{const b=e.target.closest("[data-k]");if(!b)return;katAktif=b.dataset.k;renderFilter();renderGrid()};
renderFeat();renderFilter();renderGrid();

/* modal detail */
let fokusAwal=null;
function bukaProject(id){const p=PROJECTS.find(x=>x.id==id);if(!p)return;fokusAwal=document.activeElement;
 $("#mc").textContent=p.kat;$("#mt").textContent=p.nama;$("#mp").textContent=p.ringkas;
 $("#mf").innerHTML=p.fitur.map(f=>`<li>${ic("check")}<span>${esc(f)}</span></li>`).join("");
 $("#mtg").innerHTML=p.tek.map(t=>`<li>${esc(t)}</li>`).join("");
 $("#ma").innerHTML=tombolLink(p)+`<button class="btn" type="button" data-tutup>Tutup</button>`;
 const mi=$("#mi"),set=i=>{mi.src=img(p.gambar[i]);mi.alt=`${p.nama}, gambar ${i+1}`;$$("#mth button").forEach((b,j)=>b.classList.toggle("on",j==i))};
 $("#mth").innerHTML=p.gambar.length>1?p.gambar.map((g,i)=>`<button type="button" data-g="${i}" aria-label="Gambar ${i+1}"><img src="${img(g)}" alt="" loading="lazy"></button>`).join(""):"";
 $("#mth").onclick=e=>{const b=e.target.closest("[data-g]");if(b)set(+b.dataset.g)};
 set(0);$("#ov").hidden=false;document.body.style.overflow="hidden";setTimeout(()=>$("#mx").focus(),30)}
function tutupProject(){$("#ov").hidden=true;document.body.style.overflow="";fokusAwal&&fokusAwal.focus&&fokusAwal.focus()}
document.addEventListener("click",e=>{const o=e.target.closest("[data-open]");if(o&&!e.target.closest("a"))return bukaProject(o.dataset.open);
 if(e.target.closest("#mx,[data-tutup]")||e.target===$("#ov"))tutupProject()});
document.addEventListener("keydown",e=>{if(e.key=="Escape"&&!$("#ov").hidden)tutupProject();
 if((e.key=="Enter"||e.key==" ")&&e.target.matches&&e.target.matches(".pc")){e.preventDefault();bukaProject(e.target.dataset.open)}});

/* ===== kontak ===== */
(()=>{const ways=[];
 if(CONFIG.wa)ways.push(`<li><a href="https://wa.me/${esc(CONFIG.wa)}" target="_blank" rel="noopener"><span class="ic">${ic("whatsapp")}</span><div>WhatsApp<small>Balasan paling cepat</small></div></a></li>`);
 if(CONFIG.email)ways.push(`<li><a href="mailto:${esc(CONFIG.email)}"><span class="ic">${ic("mail")}</span><div>Email<small>${esc(CONFIG.email)}</small></div></a></li>`);
 if(!ways.length)ways.push(`<li><div><span class="ic">${ic("send")}</span><span>Tulis pesanmu lewat formulir<small>Saya balas ke kontak yang kamu isi</small></span></div></li>`);
 $("#ways").innerHTML=ways.join("");
 const nm={github:"GitHub",instagram:"Instagram",tiktok:"TikTok",youtube:"YouTube"};
 $("#soc").innerHTML=Object.entries(CONFIG.sosial).filter(([,u])=>u).map(([k,u])=>`<a href="${esc(u)}" target="_blank" rel="noopener" aria-label="${nm[k]}">${ic(k)}</a>`).join("");
 const f=$("#cf"),msg=$("#cm"),say=(t,err)=>{msg.textContent=t;msg.className="note"+(err?" err":"")};
 f.addEventListener("submit",async e=>{e.preventDefault();say("");let ok=true;
  ["cn","cc","cp"].forEach(id=>{const el=$("#"+id),bad=!el.value.trim();el.classList.toggle("bad",bad);if(bad)ok=false});
  if(!ok)return say("Lengkapi semua kolom dulu.",true);
  const d={nama:$("#cn").value.trim(),kontak:$("#cc").value.trim(),pesan:$("#cp").value.trim()},b=$("#cs");
  if(CONFIG.formEndpoint){b.disabled=true;b.querySelector("span").textContent="Mengirim…";
   try{const r=await fetch(CONFIG.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)});if(!r.ok)throw 0;f.reset();say("Terkirim. Terima kasih, saya balas secepatnya.")}
   catch{say("Pesan belum terkirim. Coba lagi sebentar atau hubungi lewat kontak di samping.",true)}
   b.disabled=false;b.querySelector("span").textContent="Kirim pesan";return}
  if(CONFIG.wa){const t=`Halo ${CONFIG.nama.split(" ")[0]}, saya ${d.nama} (${d.kontak}).\n\n${d.pesan}`;window.open(`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(t)}`,"_blank","noopener");say("Membuka WhatsApp dengan pesanmu…");return}
  say("Formulir belum tersambung. Isi formEndpoint atau wa di bagian CONFIG pada main.js.",true)});
 f.addEventListener("input",e=>e.target.classList.remove("bad"))})();

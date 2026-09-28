/* ═══════════════════════════════════════════════════════
   AHMAD ABU ABDOU — PORTFOLIO ENGINE
   i18n (EN/AR) · theme · Lenis smooth scroll · GSAP
   tatreez stitch generator · custom cursor · marquee
   ═══════════════════════════════════════════════════════ */

"use strict";

/* ── 1. TRANSLATIONS ─────────────────────────────────── */
const I18N = {
  en: {
    "loader": "Stitching the story…",
    "logo": "Ahmad<span class=\"logo-accent\">.</span>",
    "nav.story": "Story",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "hero.eyebrow": "UX/UI Designer — Gaza, Palestine",
    "hero.tagline": "A designer based in Gaza, crafting intuitive, story-driven digital experiences — leading UX/UI at Open Screenplay to make screenwriting more inclusive, collaborative, and empowering for storytellers around the world.",
    "hero.cta1": "See my work",
    "hero.cta2": "Read my story",
    "hero.caption": "Among the olive trees 🫒",
    "hero.scroll": "scroll",
    "story.kicker": "The Story",
    "story.title": "Five chapters, one thread.",
    "ch1.title": "Where I Come From",
    "ch1.quote": "Resilience isn’t a trait — it’s a way of life.",
    "ch1.text": "I was born and raised in Gaza, a place where resilience is woven into everyday life. After losing my father at the age of ten, I grew up quickly — the only brother to two sisters, raised by a mother who became my anchor and inspiration: loving, endlessly resourceful — my entire world. Her strength taught me what it means to show up every day, to adapt, and to care deeply. That foundation shaped who I am — not just as a person, but as a designer.",
    "ch2.title": "Discovering Design",
    "ch2.text": "Although I pursued software engineering in college, design had already found a quiet place in my life. I spent hours in school playing with graphic design — creating posters, banners, and digital visuals, not for grades but for fun. The more I explored, the more I realized I was drawn to how digital experiences make people feel — how design can simplify the complex and guide people with clarity and warmth.",
    "ch2.quote": "Design, to me, was never just visual — it was emotional.",
    "ch3.title": "My First Steps",
    "ch3.quote": "No roadmap. No portfolio. Just grit, passion, and late nights.",
    "ch3.text": "My journey began in software engineering, but design was always the silent pulse beneath the code. Driven by a desire to build products that feel intuitive and kind, I transitioned into design immediately after graduation — a freelancing bootcamp and a single client, a restaurant in Ramallah — then quickly expanded to international projects, including a dental platform in the UAE. That momentum led me to Apex for IT Solutions, where I served as the sole designer across all web and mobile platforms, leading end-to-end design for a range of clients. It became the defining chapter that proved one thing: with enough grit, passion can be forged into a professional craft.",
    "ch4.title": "Finding My Place",
    "ch4.text": "In 2021, I joined Open Screenplay — a platform dedicated to democratizing the craft of screenwriting. It was an immediate alignment of mission and craft. What began with a single redesign evolved into a multi-year journey of architecting the platform’s entire UX/UI ecosystem. I led the transition to a unified design system, refined the core script editor for better creative flow, and launched a cinematic showcase for the M Film Lab. My role wasn’t just about building interfaces; it was about creating the digital infrastructure that lets writers bridge the gap between a blank page and a produced reality. At Open Screenplay, I learned that the best designs don’t just look good — they empower voices to be heard.",
    "ch4.quote": "Each project is a story — one that starts with empathy and ends in clarity.",
    "ch5.title": "What Drives Me",
    "ch5.quote": "I design for people — and the stories they carry.",
    "ch5.text": "For me, design is an act of resilience. Coming from Gaza, I have seen firsthand that storytelling is more than a creative outlet — it is a necessity, and access to it is a right. I don’t just build interfaces; I create pathways for voices that might otherwise go unheard. Design is how I support my family, how I connect with a global community, and how I turn the complexity of logic into the simplicity of human connection. I am a lifelong student of this discipline — still building, still learning, and still deeply in love with the work of opening doors for others.",
    "ch5.final": "Design is not just my craft — it is my response to the world.",
    "work.kicker": "Selected Work",
    "work.title": "Projects that carry stories.",
    "work.sub": "From a first client in Ramallah to five years leading design for storytellers worldwide.",
    "work.visit": "Visit site ↗",
    "p1.tag": "Lead UX/UI Designer · 2021 — Present",
    "p1.desc": "Democratizing screenwriting — architecting the platform’s entire UX/UI ecosystem, from a unified design system to the core script editor and the M Film Lab showcase.",
    "p2.tag": "First Client · Ramallah",
    "p2.desc": "Healthy meal plans, hand-crafted and tailored to your goals — where it all began.",
    "p3.tag": "Mobile App · UAE",
    "p3.desc": "A dental platform connecting patients and dentists across the UAE — booking made human.",
    "p4.tag": "Mobile App · Qatar",
    "p4.name": "Alsada Tribe",
    "p4.desc": "A community and charity app for a Qatari tribe — heritage, designed with care.",
    "p5.tag": "Apex for IT Solutions",
    "p5.desc": "Sole designer across all web and mobile platforms — end-to-end, from brief to launch.",
    "contact.kicker": "Contact",
    "contact.title": "Let’s write the next story together.",
    "contact.email": "ahmad.a.k.abuabdou@gmail.com",
    "contact.cv": "Download CV ↗",
    "footer.line": "Designed & built with resilience in Gaza, Palestine 🍉",
    "footer.copy": "© 2026 Ahmad Abu Abdou — أحمد أبو عبده",
    "cursor.view": "View",
    "marquee": ["Storytelling", "UX Design", "Resilience", "Gaza 🇵🇸", "Empathy", "Clarity", "Open Screenplay"]
  },
  ar: {
    "loader": "نخيط الحكاية…",
    "logo": "أحمد<span class=\"logo-accent\">.</span>",
    "nav.story": "الحكاية",
    "nav.work": "الأعمال",
    "nav.contact": "تواصل",
    "hero.eyebrow": "مصمّم تجربة وواجهة مستخدم — غزة، فلسطين",
    "hero.tagline": "مصمّم من غزة، أصنع تجارب رقمية بديهية تحكي قصصاً — أقود تصميم تجربة وواجهة المستخدم في Open Screenplay لجعل كتابة السيناريو أكثر شمولاً وتعاوناً وتمكيناً لصنّاع القصص حول العالم.",
    "hero.cta1": "شاهد أعمالي",
    "hero.cta2": "اقرأ حكايتي",
    "hero.caption": "بين أشجار الزيتون 🫒",
    "hero.scroll": "مرّر",
    "story.kicker": "الحكاية",
    "story.title": "خمسة فصول، خيطٌ واحد.",
    "ch1.title": "من أين أتيت",
    "ch1.quote": "الصمود ليس صفة — بل أسلوب حياة.",
    "ch1.text": "وُلدت وترعرعت في غزة، حيث يتغلغل الصمود في تفاصيل الحياة اليومية. بعد فقدان والدي وأنا في العاشرة، كبرتُ باكراً — الأخ الوحيد لشقيقتين، ربّتني أمٌّ أصبحت مرساتي ومصدر إلهامي: محبّة، دائمة التدبير — كانت عالمي كله. قوّتها علّمتني معنى أن أحضر كل يوم، أن أتأقلم، وأن أهتمّ بعمق. ذلك الأساس صنع ما أنا عليه — ليس كإنسان فحسب، بل كمصمّم.",
    "ch2.title": "اكتشاف التصميم",
    "ch2.text": "رغم أنني درست هندسة البرمجيات في الجامعة، كان التصميم قد وجد مكاناً هادئاً في حياتي. قضيت ساعات في المدرسة أعبث بالتصميم الجرافيكي — أصنع الملصقات واللافتات والمرئيات الرقمية، لا من أجل الدرجات بل من أجل المتعة. وكلما استكشفت أكثر، أدركت أن ما يجذبني هو شعور الناس تجاه التجارب الرقمية — كيف يبسّط التصميمُ المعقّدَ ويرشد الناس بوضوحٍ ودفء.",
    "ch2.quote": "التصميم بالنسبة لي لم يكن بصرياً فحسب — بل كان وجدانياً.",
    "ch3.title": "خطواتي الأولى",
    "ch3.quote": "لا خارطة طريق. لا أعمال سابقة. فقط عزيمة وشغف وسهر.",
    "ch3.text": "بدأت رحلتي في هندسة البرمجيات، لكن التصميم كان النبض الصامت تحت الشيفرة دائماً. ومدفوعاً برغبة في بناء منتجات بديهية ولطيفة، انتقلت إلى التصميم فور تخرجي — معسكر للعمل الحر وعميل واحد: مطعم في رام الله — ثم توسّعت سريعاً نحو مشاريع دولية، منها منصة لطب الأسنان في الإمارات. قادني هذا الزخم إلى Apex لحلول تكنولوجيا المعلومات، حيث عملت مصمّماً وحيداً عبر جميع منصات الويب والجوال، قائداً للتصميم من البداية إلى النهاية لعملاء متنوعين. أصبحت تلك المرحلة الفصل الحاسم الذي أثبت شيئاً واحداً: مع كفايةٍ من العزيمة، يُصاغ الشغف حرفةً احترافية.",
    "ch4.title": "حيث أنتمي",
    "ch4.text": "في عام 2021، انضممت إلى Open Screenplay — منصة مكرّسة لإتاحة حرفة كتابة السيناريو للجميع. كان توافقاً فورياً بين الرسالة والحرفة. ما بدأ بإعادة تصميمٍ واحدة تطوّر إلى رحلة سنوات في هندسة منظومة تجربة المستخدم كاملة للمنصة. قدتُ الانتقال إلى نظام تصميم موحّد، وحسّنت محرّر السيناريو الأساسي لتدفّق إبداعي أفضل، وأطلقت عرضاً سينمائياً لـ M Film Lab. لم يكن دوري مجرد بناء واجهات؛ بل بناء البنية الرقمية التي تتيح للكتّاب عبور المسافة بين صفحة بيضاء وواقعٍ مُنتَج. في Open Screenplay تعلّمت أن أفضل التصاميم لا تبدو جميلة فحسب — بل تُسمِع الأصوات.",
    "ch4.quote": "كل مشروع قصة — تبدأ بالتعاطف وتنتهي بالوضوح.",
    "ch5.title": "ما يحرّكني",
    "ch5.quote": "أصمّم للناس — وللقصص التي يحملونها.",
    "ch5.text": "بالنسبة لي، التصميم فعلُ صمود. قادماً من غزة، رأيت بأمّ عيني أن سرد القصص أكثر من متنفّس إبداعي — إنه ضرورة، والوصول إليه حقّ. أنا لا أبني واجهات فحسب؛ بل أصنع مسارات لأصوات قد لا تُسمع لولا ذلك. التصميم هو وسيلتي لإعالة عائلتي، وللتواصل مع مجتمع عالمي، ولتحويل تعقيد المنطق إلى بساطة التواصل الإنساني. أنا تلميذ دائم لهذا التخصّص — ما زلت أبني، وما زلت أتعلم، وما زلت عاشقاً بعمق لعمل فتح الأبواب للآخرين.",
    "ch5.final": "التصميم ليس حرفتي فحسب — بل هو ردّي على العالم.",
    "work.kicker": "أعمال مختارة",
    "work.title": "مشاريع تحمل قصصاً.",
    "work.sub": "من أول عميل في رام الله إلى خمس سنوات من قيادة التصميم لصنّاع القصص حول العالم.",
    "work.visit": "زيارة الموقع ↗",
    "p1.tag": "قائد تصميم UX/UI · 2021 — الآن",
    "p1.desc": "إتاحة كتابة السيناريو للجميع — هندسة منظومة تجربة المستخدم كاملة للمنصة، من نظام التصميم الموحّد إلى محرّر السيناريو الأساسي وعرض M Film Lab.",
    "p2.tag": "أول عميل · رام الله",
    "p2.desc": "وجبات صحية مصنوعة بعناية ومصمّمة حسب أهدافك — من هنا بدأ كل شيء.",
    "p3.tag": "تطبيق جوال · الإمارات",
    "p3.desc": "منصة لطب الأسنان تربط المرضى بالأطباء في الإمارات — حجزٌ بروح إنسانية.",
    "p4.tag": "تطبيق جوال · قطر",
    "p4.name": "قبيلة آل سادة",
    "p4.desc": "تطبيق مجتمعي وخيري لقبيلة قطرية — تراثٌ مُصمَّم بعناية.",
    "p5.tag": "Apex لحلول تكنولوجيا المعلومات",
    "p5.desc": "المصمّم الوحيد عبر جميع منصات الويب والجوال — من الفكرة إلى الإطلاق.",
    "contact.kicker": "تواصل",
    "contact.title": "لنكتب القصة القادمة معاً.",
    "contact.email": "ahmad.a.k.abuabdou@gmail.com",
    "contact.cv": "تحميل السيرة الذاتية ↗",
    "footer.line": "صُمّم وبُني بصمود في غزة، فلسطين 🍉",
    "footer.copy": "© 2026 أحمد أبو عبده — Ahmad Abu Abdou",
    "cursor.view": "عرض",
    "marquee": ["سرد القصص", "تجربة المستخدم", "الصمود", "غزة 🇵🇸", "التعاطف", "الوضوح", "Open Screenplay"]
  }
};

let LANG = localStorage.getItem("abdou-lang") || "en";
let THEME = localStorage.getItem("abdou-theme") || "dark";

/* ── 2. APPLY LANGUAGE / THEME ───────────────────────── */
function applyLang(lang, animate = false) {
  LANG = lang;
  localStorage.setItem("abdou-lang", lang);
  const dict = I18N[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dataset.lang = lang;
  document.getElementById("langToggle").textContent = lang === "ar" ? "EN" : "ع";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] === undefined) return;
    const swap = () => { el.innerHTML = dict[key]; };
    if (animate && window.gsap) {
      gsap.to(el, {
        opacity: 0, y: 6, duration: 0.18, ease: "power2.in",
        onComplete() {
          swap();
          gsap.to(el, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
        }
      });
    } else swap();
  });

  buildMarquee();
  document.title = lang === "ar"
    ? "أحمد أبو عبده — مصمّم UX/UI · غزة، فلسطين"
    : "Ahmad Abu Abdou — UX/UI Designer · Gaza, Palestine";
}

function applyTheme(theme) {
  THEME = theme;
  localStorage.setItem("abdou-theme", theme);
  document.documentElement.dataset.theme = theme;
}

/* ── 3. MARQUEE ──────────────────────────────────────── */
function buildMarquee() {
  const track = document.getElementById("marqueeTrack");
  if (!track) return;
  const words = I18N[LANG].marquee;
  const chunk = () =>
    `<div class="marquee-chunk">` +
    words.map((w, i) => `<span class="${i % 2 ? "m-outline" : ""}">${w}</span><span class="mx">✕</span>`).join("") +
    `</div>`;
  track.innerHTML = chunk() + chunk() + chunk();
}

/* ── 4. TATREEZ STITCH GENERATOR ─────────────────────── */
/* A band of cross-stitch X motifs + diamonds, drawn on scroll */
function buildTatreezBand(container) {
  const w = container.clientWidth || 800;
  const h = 46;
  const step = 44;
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

  const make = (d, color, width) => {
    const p = document.createElementNS(ns, "path");
    p.setAttribute("d", d);
    p.setAttribute("fill", "none");
    p.style.stroke = color; // CSS var works via style, not attribute
    p.setAttribute("stroke-width", width);
    p.setAttribute("stroke-linecap", "round");
    p.setAttribute("pathLength", "1");
    p.style.strokeDasharray = "1";
    p.style.strokeDashoffset = "1";
    svg.appendChild(p);
    return p;
  };

  const red = "var(--red)";
  const olive = "var(--olive)";
  const cy = h / 2;

  for (let x = step / 2; x < w; x += step) {
    // central X stitch
    make(`M ${x - 7} ${cy - 7} L ${x + 7} ${cy + 7} M ${x + 7} ${cy - 7} L ${x - 7} ${cy + 7}`, red, 2.4);
    // flanking small diamonds
    const dx = x + step / 2;
    if (dx < w) {
      make(`M ${dx} ${cy - 8} L ${dx + 8} ${cy} L ${dx} ${cy + 8} L ${dx - 8} ${cy} Z`, olive, 1.6);
    }
    // tiny cross dots above & below
    make(`M ${x} ${cy - 16} L ${x} ${cy - 10} M ${x - 3} ${cy - 13} L ${x + 3} ${cy - 13}`, olive, 1.4);
    make(`M ${x} ${cy + 10} L ${x} ${cy + 16} M ${x - 3} ${cy + 13} L ${x + 3} ${cy + 13}`, olive, 1.4);
  }

  container.innerHTML = "";
  container.appendChild(svg);
}

function buildAllBands() {
  document.querySelectorAll("[data-band]").forEach(buildTatreezBand);
}

/* Hero frame stitch border */
function buildFrameStitches() {
  const frame = document.querySelector(".frame-stitches");
  if (!frame) return;
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");

  const rect = document.createElementNS(ns, "rect");
  rect.setAttribute("x", "1"); rect.setAttribute("y", "1");
  rect.setAttribute("width", "98"); rect.setAttribute("height", "98");
  rect.setAttribute("rx", "18");
  rect.setAttribute("fill", "none");
  rect.style.stroke = "var(--red)";
  rect.setAttribute("stroke-width", "0.5");
  rect.setAttribute("vector-effect", "non-scaling-stroke");
  rect.style.strokeDasharray = "6 6";
  svg.appendChild(rect);
  frame.appendChild(svg);
}

/* ── 5. BOOT ─────────────────────────────────────────── */
window.addEventListener("DOMContentLoaded", () => {
  applyTheme(THEME);
  applyLang(LANG, false);
  buildAllBands();
  buildFrameStitches();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof gsap !== "undefined";

  /* ── Toggles ── */
  document.getElementById("langToggle").addEventListener("click", () => {
    applyLang(LANG === "en" ? "ar" : "en", true);
  });
  document.getElementById("themeToggle").addEventListener("click", () => {
    applyTheme(THEME === "dark" ? "light" : "dark");
  });

  if (!hasGSAP || reduceMotion) {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("revealed"));
    hideLoader();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ── Lenis smooth scroll ── */
  let lenis = null;
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // anchor links through lenis
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const target = document.querySelector(a.getAttribute("href"));
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -20 }); }
      });
    });
  }

  /* ── Loader exit ── */
  hideLoader(true);

  /* ── Hero name char split ── */
  document.querySelectorAll(".hero-name .split").forEach((el) => {
    const text = el.textContent;
    el.innerHTML = text.split("").map((c) =>
      `<span class="char" style="display:inline-block">${c === " " ? "&nbsp;" : c}</span>`).join("");
  });
  gsap.from(".hero-name .char", {
    yPercent: 110, rotate: 4, duration: 1, ease: "power4.out",
    stagger: 0.035, delay: 0.9
  });
  gsap.from(".name-ar", { opacity: 0, y: 24, duration: 1, ease: "power3.out", delay: 1.5 });

  /* ── Generic reveals ── */
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" }
      });
  });

  /* ── Tatreez bands: stitch themselves on scroll ── */
  gsap.utils.toArray("[data-band]").forEach((band) => {
    const paths = band.querySelectorAll("path");
    gsap.to(paths, {
      strokeDashoffset: 0,
      ease: "none",
      stagger: 0.04,
      scrollTrigger: {
        trigger: band,
        start: "top 92%",
        end: "top 45%",
        scrub: 1
      }
    });
  });

  /* ── Parallax images ── */
  gsap.utils.toArray("[data-parallax]").forEach((img) => {
    const speed = parseFloat(img.dataset.parallax) || 0.1;
    gsap.to(img, {
      yPercent: speed * 100 * -1,
      ease: "none",
      scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true }
    });
  });

  /* ── Chapter numbers drift ── */
  gsap.utils.toArray(".chapter-num span").forEach((num) => {
    gsap.fromTo(num, { yPercent: 40, opacity: 0.15 }, {
      yPercent: -10, opacity: 1, ease: "none",
      scrollTrigger: { trigger: num, start: "top bottom", end: "bottom top", scrub: true }
    });
  });

  /* ── Marquee loop (RTL-aware direction) ── */
  const track = document.getElementById("marqueeTrack");
  const dir = () => (document.documentElement.dir === "rtl" ? 1 : -1);
  let marqueeTween = gsap.to(track, {
    xPercent: dir() * -33.333,
    ease: "none", duration: 22, repeat: -1
  });
  document.getElementById("langToggle").addEventListener("click", () => {
    marqueeTween.kill();
    gsap.set(track, { xPercent: 0 });
    marqueeTween = gsap.to(track, { xPercent: dir() * -33.333, ease: "none", duration: 22, repeat: -1 });
  });

  /* ── Scroll thread progress ── */
  const fill = document.querySelector(".thread-fill");
  const needle = document.querySelector(".thread-needle");
  const threadSvg = document.querySelector(".thread-svg");
  const setThread = (p) => {
    const len = threadSvg.clientHeight;
    fill.style.strokeDasharray = `${len * p} 99999`;
    needle.setAttribute("cy", String(len * p));
  };
  setThread(0);
  ScrollTrigger.create({
    start: 0, end: () => document.documentElement.scrollHeight - innerHeight,
    onUpdate: (self) => setThread(self.progress)
  });

  /* ── Custom cursor ── */
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  const label = document.querySelector(".cursor-label");
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });
    const dx = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2" });
    const dy = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2" });
    const rx = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
    const ry = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });
    window.addEventListener("mousemove", (e) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); });

    const hoverables = "a, button, .ctrl-btn";
    document.addEventListener("mouseover", (e) => {
      const view = e.target.closest("[data-cursor]");
      const hov = e.target.closest(hoverables);
      ring.classList.toggle("is-view", !!view);
      ring.classList.toggle("is-hover", !!hov && !view);
      if (view) label.textContent = I18N[LANG]["cursor.view"];
    });
  }

  /* ── Magnetic buttons ── */
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      gsap.to(el, {
        x: (e.clientX - r.left - r.width / 2) * 0.3,
        y: (e.clientY - r.top - r.height / 2) * 0.3,
        duration: 0.4, ease: "power3.out"
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    });
  });

  /* ── Rebuild bands on resize (debounced) ── */
  let rt;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(() => { buildAllBands(); ScrollTrigger.refresh(); }, 250);
  });
});

function hideLoader(animated = false) {
  const loader = document.querySelector(".loader");
  if (!loader) return;
  if (animated && window.gsap) {
    gsap.to(loader, {
      opacity: 0, duration: 0.7, delay: 0.6, ease: "power2.inOut",
      onComplete: () => loader.remove()
    });
  } else loader.remove();
}

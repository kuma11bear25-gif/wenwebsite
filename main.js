(function () {
  "use strict";
  var CONFIG = window.WENSDAY_CONFIG || {};

  // ---- 翻訳（繁體中文）----
  // 日本語は HTML に直接書かれている文言を使います。
  var zh = {
    "nav.services": "服務項目", "nav.about": "關於我", "nav.media": "部落格・YouTube", "nav.contact": "聯絡我們",
    "hero.eyebrow": "中文 × 日文 × 台灣 × 日本",
    "hero.lead": "用語言，連結日本與台灣。<br>提供中文・日文課程、口譯服務，並向台灣朋友分享日本的魅力。",
    "hero.cta": "聯絡・諮詢", "hero.more": "查看服務項目",
    "services.title": "服務項目",
    "services.teach.title": "中文・日文教學",
    "services.teach.body": "為日本朋友教授中文（繁體字・台灣華語／普通話），為華語圈朋友教授日文。從初學到進階，旅遊、商務、檢定（HSK・TOCFL・JLPT）皆可，依照您的目標量身打造一對一課程。",
    "services.teach.t1": "線上／面授", "services.teach.t2": "個人・企業", "services.teach.t3": "提供體驗課程",
    "services.interp.title": "中日口譯",
    "services.interp.body": "承接商務洽談、會議、展覽、參訪、觀光陪同等中日口譯服務。重視文化差異，力求傳達真正的意思。也歡迎洽詢筆譯服務。",
    "services.interp.t1": "商務口譯", "services.interp.t2": "陪同口譯", "services.interp.t3": "線上口譯",
    "services.media.title": "給台灣朋友的日本介紹",
    "services.media.body": "透過部落格與 YouTube，用中文向台灣朋友介紹日本的景點、美食、文化與生活。也歡迎企業、地方政府洽談宣傳與業配合作。",
    "services.media.t1": "部落格", "services.media.t2": "YouTube", "services.media.t3": "宣傳・業配合作",
    "about.title": "關於我",
    "about.body1": "大家好，我是 Wensday。我運用中文與日文兩種語言，協助連結人與人、日本與台灣。",
    "about.body2": "語言課程中重視「用得上的語言」，口譯時重視「連心意都能傳達的語言」。在部落格與 YouTube 上，為台灣朋友帶來還不為人知的日本魅力。",
    "about.note": "※ 請在此補充經歷與證照等資訊。",
    "media.title": "部落格・YouTube", "media.lead": "用中文向台灣朋友分享日本的「喜歡」。",
    "media.blog.title": "Wensday 部落格", "media.blog.body": "日本旅遊行程、在地美食、季節活動等介紹（準備中）",
    "media.yt.title": "Wensday 頻道", "media.yt.body": "日本街頭散步、文化體驗、日文迷你課程影片（準備中）",
    "contact.title": "聯絡我們",
    "contact.lead": "課程、口譯、宣傳合作的委託或任何問題，歡迎隨時聯絡。通常會在 2 個工作天內回覆。",
    "contact.name": "姓名", "contact.email": "電子郵件", "contact.type": "洽詢項目", "contact.message": "洽詢內容", "contact.required": "必填",
    "contact.type.placeholder": "請選擇", "contact.type.lessonZh": "中文課程", "contact.type.lessonJa": "日文課程",
    "contact.type.interp": "口譯・筆譯委託", "contact.type.media": "部落格・YouTube（宣傳・業配合作）", "contact.type.other": "其他",
    "contact.message.ph": "請填寫希望的日期時間、地點、內容等",
    "contact.submit": "送出",
    "footer.blog": "部落格"
  };
  var msgs = {
    ja: { invalid: "未入力・または形式が正しくない項目があります。", sending: "送信中…", ok: "送信しました。お問い合わせありがとうございます！", err: "送信に失敗しました。時間をおいて再度お試しください。", mail: "メールアプリを開きました。内容を確認して送信してください。" },
    zh: { invalid: "有未填寫或格式不正確的欄位。", sending: "傳送中…", ok: "已送出，感謝您的來信！", err: "傳送失敗，請稍後再試。", mail: "已開啟郵件程式，請確認內容後寄出。" }
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var phNodes = document.querySelectorAll("[data-i18n-placeholder]");
  var ja = {};
  nodes.forEach(function (n) { ja[n.dataset.i18n] = n.innerHTML; });
  phNodes.forEach(function (n) { ja["ph:" + n.dataset.i18nPlaceholder] = n.placeholder; });
  var jaTitle = document.title;
  var current = "ja";

  function setLang(lang) {
    current = lang === "zh" ? "zh" : "ja";
    document.documentElement.lang = current === "zh" ? "zh-Hant" : "ja";
    nodes.forEach(function (n) {
      var k = n.dataset.i18n;
      n.innerHTML = current === "zh" ? (zh[k] || ja[k]) : ja[k];
    });
    phNodes.forEach(function (n) {
      var k = n.dataset.i18nPlaceholder;
      n.placeholder = current === "zh" ? (zh[k] || ja["ph:" + k]) : ja["ph:" + k];
    });
    document.title = current === "zh" ? "Wensday｜中文・日文課程 / 口譯" : jaTitle;
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === current));
    });
    try { localStorage.setItem("wensday-lang", current); } catch (e) {}
  }

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });
  var saved = null;
  try { saved = localStorage.getItem("wensday-lang"); } catch (e) {}
  var param = new URLSearchParams(location.search).get("lang");
  var initial = param || saved || (/^zh/i.test(navigator.language || "") ? "zh" : "ja");
  if (initial === "zh") setLang("zh");

  // ---- モバイルメニュー ----
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); });
  });

  // ---- SNSリンク ----
  var links = CONFIG.links || {};
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var url = links[a.dataset.link];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
    else if (a.closest(".footer-links")) { a.style.display = "none"; }
    else { a.removeAttribute("href"); a.style.cursor = "default"; }
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // ---- お問い合わせフォーム ----
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  function show(text, cls) { status.textContent = text; status.className = "form-status " + (cls || ""); }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;
    form.querySelectorAll("[required]").forEach(function (el) {
      var ok = el.value.trim() !== "" && (el.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()));
      el.closest(".field").classList.toggle("invalid", !ok);
      if (!ok) valid = false;
    });
    if (!valid) { show(msgs[current].invalid, "err"); return; }
    if (form._gotcha.value) return; // spam bot

    var typeLabel = form.type.options[form.type.selectedIndex].text;
    var data = { name: form.name.value.trim(), email: form.email.value.trim(), type: typeLabel, message: form.message.value.trim(), language: current };

    if (CONFIG.formEndpoint) {
      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true; show(msgs[current].sending);
      fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(Object.assign({ _subject: "[Wensday] " + typeLabel + " - " + data.name }, data))
      }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        form.reset(); show(msgs[current].ok, "ok");
      }).catch(function () { show(msgs[current].err, "err"); })
        .finally(function () { btn.disabled = false; });
    } else {
      var subject = "[Wensday] " + typeLabel + " - " + data.name;
      var body = "Name: " + data.name + "\nEmail: " + data.email + "\nType: " + typeLabel + "\n\n" + data.message;
      location.href = "mailto:" + (CONFIG.contactEmail || "") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      show(msgs[current].mail, "ok");
    }
  });
})();

/* =========================================================
   陌清.NET · 页面交互
   - 菜单展开 / 收起
   - 详情面板（了解陌清 / 舞萌 / 尼康 / 其他 / 友情链接）
   - 背景视频启停
   文案都集中在 CONTENT 里，改完刷新即可
   ========================================================= */

(function () {
  "use strict";

  var ARROW =
    '<svg class="link__arrow" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M8 16L16 8M9 8h7v7" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var CONTENT = {
    about: function () {
      return (
        '<p class="sheet__kicker">01 / 了解陌清</p>' +
        '<h2 id="sheetTitle">陌清<span class="sep">·</span>一只猫猫</h2>' +
        '<p class="sheet__lead">你好，我是陌清。一只白色的猫猫，喜欢拍照、打音游，也喜欢认识新朋友。</p>' +
        '<dl class="kv">' +
        "<dt>名字</dt><dd>陌清 · MOQING</dd>" +
        "<dt>生日</dt><dd>9 月（欢迎举牌）</dd>" +
        "<dt>常驻</dt><dd>北京，偶尔天津</dd>" +
        "<dt>身份</dt><dd>学生 · 业余摄影</dd>" +
        "<dt>相机</dt><dd>尼康 D500</dd>" +
        "<dt>音游</dt><dd>舞萌 DX</dd>" +
        "</dl>"
      );
    },

    more: function () {
      return (
        '<p class="sheet__kicker">MORE / 了解更多</p>' +
        '<h2 id="sheetTitle">了解更多</h2>' +
        '<p class="sheet__lead">这里陌清，是一只蓝黄白猫娘，性格偏外向。</p>' +
        '<ul class="list">' +
        "<li>爱好主要是打音游特别是舞萌，打宝可梦集换式卡牌，拍拍照等等（我几乎不玩手机游戏呜呜）</li>" +
        "<li>最喜欢蓝色！</li>" +
        "<li>目前喜欢听的音乐类型是游戏原声带和芯片音乐，以及中文流行乐。</li>" +
        "<li>窗口背景是我哦</li>" +
        "<li>主要在中文 TikTok 和 bilibili</li>" +
        "</ul>"
      );
    },

    furry: function () {
      return (
        '<p class="sheet__kicker">05 / 了解 Furry</p>' +
        '<h2 id="sheetTitle">Furry<span class="sep">·</span>兽人爱好者</h2>' +
        '<p class="sheet__lead">Furry（兽圈、兽人爱好者）指喜欢拟人化动物角色的一群人。有人只画图、写设定，有人做兽装、跑兽展，也有人只是单纯喜欢毛茸茸的形象。</p>' +
        '<p class="sheet__h3">几个常听到的词</p>' +
        '<ul class="list">' +
        "<li>兽设（fursona）：自己在圈里的形象，名字、毛色、性格都可以自己定，换一套装也能换个名字</li>" +
        "<li>兽装（fursuit）：把兽设做成能穿上身的玩偶服，一套做得好的要等好几个月</li>" +
        "<li>兽聚 / 兽展：线下见面会，有合影、巡游、摊位，也有专门的兽展酒店</li>" +
        "<li>约稿：圈里大部分图都是约出来的，先问清价格、修改次数和能不能商用</li>" +
        "</ul>" +
        '<p class="sheet__h3">我在圈里的样子</p>' +
        '<p class="sheet__lead">我的兽设是一只蓝黄白的猫娘，就是右上角那个头像，也是「了解更多」窗口的背景。平时看画、存图、偶尔约稿，逛漫展时会特意去兽装摊位转一圈。</p>' +
        '<p class="sheet__h3">想入圈的话</p>' +
        '<ul class="list">' +
        "<li>先从看图和写设定开始，别一上头就砸钱做兽装</li>" +
        "<li>约稿前把价格、修改次数、能不能二创问清楚，尊重画师</li>" +
        "<li>线下活动注意边界：拍别人前先问，别去拽兽装的头和尾巴</li>" +
        "<li>圈里年龄跨度很大，未成年人保护好自己，别单独赴约</li>" +
        "</ul>" +
        '<p class="sheet__note">兽圈不大，但挺好玩，慢慢来就好。</p>'
      );
    },

    maimai: function () {
      return (
        '<p class="sheet__kicker">02 / 了解舞萌</p>' +
        '<h2 id="sheetTitle">舞萌 DX<span class="sep">·</span>音乐洗衣机</h2>' +
        '<p class="sheet__lead">舞萌 DX（maimai DX）是 SEGA 的街机音乐游戏。因为机身是一块巨大的圆环屏，玩家习惯管它叫“音乐洗衣机”。</p>' +
        '<ul class="list">' +
        "<li>判定：音符沿圆环落下，靠双手在圆环上拍击和滑动</li>" +
        "<li>谱面：从入门到 15 级，越往上越吃读谱、体力和手速</li>" +
        "<li>模式：常见的是一台机器两个人一起打，也有单人练习</li>" +
        "<li>圈子：机厅出勤、DX Rating、录手元，都是日常话题</li>" +
        "</ul>" +
        '<p class="sheet__h3">我在玩</p>' +
        '<p class="sheet__lead">它是我最喜欢的游戏。理由很简单：歌好听，还能一边出汗一边听歌。平时会去机厅出勤，遇到喜欢的曲子就多刷几遍。</p>' +
        '<p class="sheet__h3">给刚入坑的朋友</p>' +
        '<ul class="list">' +
        "<li>先把判定圈的位置记熟，别一上来就追高难度</li>" +
        "<li>手腕别锁死，多用小臂带着走</li>" +
        "<li>挑几首自己喜欢的歌反复打，比乱刷有用</li>" +
        "</ul>"
      );
    },

    nikon: function () {
      return (
        '<p class="sheet__kicker">03 / 了解尼康</p>' +
        '<h2 id="sheetTitle">尼康 D500<span class="sep">·</span>拍鸟主力</h2>' +
        '<p class="sheet__lead">我现在的相机是尼康 D500 —— 一台 APS-C 画幅的旗舰单反，买它基本就是为了拍鸟。</p>' +
        '<div class="facts">' +
        '<div class="fact"><span class="fact__k">画幅</span><b class="fact__v">APS-C（DX）</b></div>' +
        '<div class="fact"><span class="fact__k">像素</span><b class="fact__v">2088 万</b></div>' +
        '<div class="fact"><span class="fact__k">对焦</span><b class="fact__v">153 点 · 3D 追踪</b></div>' +
        '<div class="fact"><span class="fact__k">连拍</span><b class="fact__v">约 10 张/秒</b></div>' +
        '<div class="fact"><span class="fact__k">视频</span><b class="fact__v">4K 30p</b></div>' +
        '<div class="fact"><span class="fact__k">发布</span><b class="fact__v">2016 年</b></div>' +
        "</div>" +
        '<p class="sheet__h3">为什么是 D500</p>' +
        '<p class="sheet__lead">拍鸟最要紧的两件事：够长的焦距，和咬得住的追焦。APS-C 有 1.5 倍等效焦距，同样的镜头能拍得更远；153 点对焦（Multi-CAM 20K）加上 3D 追踪，飞版也更容易咬住。</p>' +
        '<p class="sheet__h3">常用设置</p>' +
        '<ul class="list">' +
        "<li>飞鸟：AF-C + 3D 追踪，快门 1/1000s 以上</li>" +
        "<li>静鸟：单点 AF，先对眼睛再构图</li>" +
        "<li>光线差：适当抬高 ISO，用快门优先保住速度</li>" +
        "<li>连拍：高速连拍，回来再慢慢挑片</li>" +
        "</ul>" +
        '<p class="sheet__lead">除了拍鸟，也会带它去漫展拍人像，那时候就换成 35mm / 50mm 定焦。</p>'
      );
    },

    other: function () {
      return (
        '<p class="sheet__kicker">06 / 其他</p>' +
        '<h2 id="sheetTitle">其他</h2>' +
        '<p class="sheet__empty">这里还没有东西</p>'
      );
    },

    cyberpunk: function () {
      return (
        '<p class="sheet__kicker">04 / 了解赛博朋克 2077</p>' +
        '<h2 id="sheetTitle">赛博朋克 2077<span class="sep">·</span>夜之城</h2>' +
        '<p class="sheet__lead">CD PROJEKT RED 的开放世界 RPG，2020 年 12 月 10 日上线。世界观来自 1988 年的桌游《Cyberpunk 2020》，舞台是一座叫夜之城（Night City）的巨型都市。</p>' +
        '<div class="facts">' +
        '<div class="fact"><span class="fact__k">类型</span><b class="fact__v">开放世界 RPG</b></div>' +
        '<div class="fact"><span class="fact__k">发售</span><b class="fact__v">2020.12.10</b></div>' +
        '<div class="fact"><span class="fact__k">舞台</span><b class="fact__v">夜之城</b></div>' +
        '<div class="fact"><span class="fact__k">资料片</span><b class="fact__v">往日之影</b></div>' +
        '<div class="fact"><span class="fact__k">动画</span><b class="fact__v">边缘行者</b></div>' +
        '<div class="fact"><span class="fact__k">平台</span><b class="fact__v">PC · PS5 · XSX</b></div>' +
        "</div>" +
        '<p class="sheet__h3">它在讲什么</p>' +
        '<p class="sheet__lead">你扮演雇佣兵 V，接了一单看似普通的活，结果被卷进夜之城上层的争夺里。开场能从流浪者、街头小子、公司员工三条出身里挑一条，后面怎么打全看自己：枪械硬刚、潜行冷刀、远程黑进摄像头和义体，都能走通。</p>' +
        '<p class="sheet__h3">我喜欢的地方</p>' +
        '<ul class="list">' +
        "<li>夜之城的密度：走两条街就能撞见三段人生，广告牌、雨夜的霓虹、街角的枪声都在讲故事</li>" +
        "<li>义体与改造：把自己拆开换成半机械，是这个世界观里最日常、也最可怕的事</li>" +
        "<li>氛围：合成器浪潮配乐加赛博建筑，戴耳机玩完全值回票价</li>" +
        "</ul>" +
        '<p class="sheet__h3">版本走过的一段路</p>' +
        '<ul class="list">' +
        "<li>2020 首发口碑两极，旧世代主机版问题太多，一度从商店下架</li>" +
        "<li>2022 年动画《边缘行者》上线，把游戏又拉回来一波人气</li>" +
        "<li>2023 年 2.0 更新重做技能树和警察系统，《往日之影》资料片上线，才算真正补齐</li>" +
        "</ul>" +
        '<p class="sheet__note">想入坑的话，直接上 2.0 + 往日之影，PC 端体验最稳。</p>'
      );
    },

    links: function () {
      return (
        '<p class="sheet__kicker">LINKS</p>' +
        '<h2 id="sheetTitle">友情链接</h2>' +
        '<p class="sheet__lead">几个常去的地方，顺手记一下。</p>' +
        '<div class="links">' +
        '<a class="link" href="https://maimai.sega.jp/" target="_blank" rel="noopener noreferrer">' +
        '<span><span class="link__name">舞萌 DX 官网</span><span class="link__desc">SEGA 官方站点 · 新曲与活动情报</span></span>' +
        ARROW +
        "</a>" +
        '<a class="link" href="https://www.nikon.com.cn/" target="_blank" rel="noopener noreferrer">' +
        '<span><span class="link__name">尼康（中国）</span><span class="link__desc">机身、镜头与官方资讯</span></span>' +
        ARROW +
        "</a>" +
        '<a class="link" href="https://www.cyberpunk.net/us/zh-cn/" target="_blank" rel="noopener noreferrer">' +
        '<span><span class="link__name">《赛博朋克 2077》官网</span><span class="link__desc">CD PROJEKT RED 官方站 · 游戏与动画情报</span></span>' +
        ARROW +
        "</a>" +
        '<a class="link" href="https://github.com/" target="_blank" rel="noopener noreferrer">' +
        '<span><span class="link__name">GitHub</span><span class="link__desc">本站就放在这里</span></span>' +
        ARROW +
        "</a>" +
        "</div>" +
        '<p class="sheet__note">链接顺序和内容都可以按自己的喜好换，换成朋友的站点也没问题。</p>'
      );
    }
  };

  /* ---------- 元素 ---------- */
  var menuWrap = document.querySelector(".menu");
  var menuBtn = document.getElementById("menuBtn");
  var menuPanel = document.getElementById("menuPanel");
  var sheet = document.getElementById("sheet");
  var sheetBody = document.getElementById("sheetBody");
  var sheetPanel = sheet ? sheet.querySelector(".sheet__panel") : null;
  var closeBtn = sheet ? sheet.querySelector(".sheet__close") : null;
  var lastFocus = null;

  function syncSheetFade() {
    if (!sheetPanel || !sheetBody) return;
    var rest = sheetBody.scrollHeight - sheetBody.clientHeight - sheetBody.scrollTop;
    sheetPanel.classList.toggle("has-more", rest > 10);
  }

  if (sheetBody) {
    sheetBody.addEventListener("scroll", syncSheetFade, { passive: true });
    window.addEventListener("resize", syncSheetFade);
  }

  /* ---------- 菜单 ---------- */
  function setMenu(open) {
    if (!menuBtn || !menuPanel) return;
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuPanel.classList.toggle("is-open", open);
    menuPanel.setAttribute("aria-hidden", open ? "false" : "true");
  }

  if (menuBtn) {
    setMenu(false);
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
  }

  document.addEventListener("click", function (e) {
    if (!menuWrap || !menuPanel) return;
    if (menuPanel.classList.contains("is-open") && !menuWrap.contains(e.target)) {
      setMenu(false);
    }
  });

  /* ---------- 详情面板 ---------- */
  function openSheet(key) {
    if (!sheet || !CONTENT[key]) return;
    lastFocus = document.activeElement;
    sheetBody.innerHTML = CONTENT[key]();
    if (sheetPanel) sheetPanel.classList.toggle("has-art", key === "more");
    sheet.hidden = false;
    sheetBody.scrollTop = 0;
    requestAnimationFrame(function () {
      sheet.classList.add("is-open");
      syncSheetFade();
    });
    document.body.style.overflow = "hidden";
    if (sheetPanel) sheetPanel.focus({ preventScroll: true });
  }

  function closeSheet() {
    if (!sheet || sheet.hidden) return;
    sheet.classList.remove("is-open");
    document.body.style.overflow = "";
    window.setTimeout(function () {
      if (sheet && !sheet.classList.contains("is-open")) {
        sheet.hidden = true;
        sheetBody.innerHTML = "";
      }
    }, 480);
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus({ preventScroll: true });
    }
  }

  document.addEventListener("click", function (e) {
    var trigger = e.target.closest ? e.target.closest("[data-sheet]") : null;
    if (trigger) {
      setMenu(false);
      openSheet(trigger.getAttribute("data-sheet"));
      return;
    }
    if (e.target.closest && e.target.closest("[data-close]")) {
      closeSheet();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (sheet && !sheet.hidden) {
      closeSheet();
      return;
    }
    if (menuBtn && menuBtn.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menuBtn.focus({ preventScroll: true });
    }
  });

  /* ---------- 菜单里的音乐 ---------- */
  var audio = document.getElementById("playerAudio");
  var player = document.getElementById("player");
  var musicBtn = document.getElementById("musicBtn");

  function syncMusicUI(playing) {
    if (!player || !musicBtn) return;
    player.classList.toggle("is-playing", playing);
    musicBtn.setAttribute("aria-pressed", playing ? "true" : "false");
    musicBtn.setAttribute("aria-label", playing ? "暂停音乐" : "播放音乐");
  }

  function playMusic() {
    if (!audio) return;
    var p = audio.play();
    if (p && typeof p.catch === "function") {
      p.catch(function () {
        /* 被浏览器拦下时先按暂停显示，等第一次点击再补上 */
        syncMusicUI(false);
      });
    }
  }

  var disarmGesture = function () {};

  if (audio) {
    audio.volume = 0.7;
    audio.addEventListener("play", function () { syncMusicUI(true); });
    audio.addEventListener("pause", function () { syncMusicUI(false); });
    audio.addEventListener("error", function () { syncMusicUI(false); });

    syncMusicUI(false);
    playMusic();

    /* 自动播放被拦时，第一次交互（点菜单、点页面）就开始播 */
    var startOnGesture = function (e) {
      if (e && e.target && e.target.closest && e.target.closest(".player")) return;
      disarmGesture();
      if (audio.paused) playMusic();
    };
    disarmGesture = function () {
      document.removeEventListener("pointerdown", startOnGesture, true);
      document.removeEventListener("keydown", startOnGesture, true);
    };
    document.addEventListener("pointerdown", startOnGesture, true);
    document.addEventListener("keydown", startOnGesture, true);
  }

  if (musicBtn && audio) {
    musicBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      disarmGesture();
      if (audio.paused) {
        playMusic();
      } else {
        audio.pause();
      }
    });
  }

  /* ---------- 背景视频 ---------- */
  var video = document.querySelector(".bg__video");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (video) {
    var markLive = function () {
      video.classList.add("is-live");
    };

    if (video.readyState >= 2) markLive();
    video.addEventListener("loadeddata", markLive);
    video.addEventListener("playing", markLive);

    if (!reduceMotion) {
      var attempt = video.play();
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(function () {
          /* 自动播放被拦截时，海报图会留在背景上 */
        });
      }

      document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
          video.pause();
        } else {
          var p = video.play();
          if (p && typeof p.catch === "function") p.catch(function () {});
        }
      });
    }
  }
})();

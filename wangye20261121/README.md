# 陌清 · 陌清.NET

个人主页静态站。纯 HTML / CSS / 原生 JS，没有构建步骤，直接丢进 GitHub Pages 就能跑。

- 全屏动态背景（舞萌风格动画，已压缩到 5MB 左右）
- 左侧简介卡片 + 右上角头像 + 右侧「了解更多 / 友情链接」按钮
- 顶部「菜单」按钮展开竖向面板，六个条目打开对应的详情面板（「其他」排在最后）
- 菜单里带一个迷你音乐播放器（歌名 / 封面 / 播放暂停），默认自动播放
- 「了解更多」窗口用插画当背景，文字压在左侧白底上，窄屏则插画在上、文字在下
- 每块内容都有入场动画，跟随系统的「减少动态效果」设置自动降级

## 目录结构

```
.
├── index.html              页面结构
├── assets
│   ├── bg
│   │   ├── bg.mp4          动态背景（1280×720，80 秒循环）
│   │   └── bg-poster.jpg   视频封面，视频没加载出来时顶上
│   ├── css
│   │   └── style.css       全部样式与动画
│   ├── fonts
│   │   ├── wenkai-regular.woff2  霞鹜文楷子集（约 100KB）
│   │   └── OFL.txt               字体授权（SIL Open Font License）
│   ├── img
│   │   ├── logo.png        顶部图标（已裁掉多余透明边）
│   │   ├── avatar.jpg      简介区右上角头像
│   │   ├── music-cover.jpg 菜单里那首歌的专辑封面
│   │   └── sheet-bg.jpg    「了解更多」窗口的插画背景
│   └── js
│       └── main.js         菜单、详情面板、音乐、背景视频
├── .nojekyll               让 GitHub Pages 原样发布 assets 目录
└── README.md
```

## 本地预览

直接双击 `index.html` 就能看。视频背景需要浏览器允许自动播放（静音状态下一般没问题）。

想用本地服务器更接近线上效果：

```bash
python -m http.server 8000
# 然后打开 http://localhost:8000
```

## 部署到 GitHub Pages

### 方式一：网页操作（最省事）

1. 在 GitHub 新建一个仓库，比如 `moqing-site`。
2. 把本目录里的所有文件（不是整个文件夹，是里面的内容）拖进仓库根目录，提交。
3. 进入仓库 **Settings → Pages**。
4. **Source** 选 `Deploy from a branch`，**Branch** 选 `main`、目录选 `/ (root)`，保存。
5. 等 1 分钟左右，页面会发布在：

```
https://<你的用户名>.github.io/moqing-site/
```

### 方式二：命令行

```bash
git init
git add -A
git commit -m "init: 陌清个人主页"
git branch -M main
git remote add origin https://github.com/<你的用户名>/moqing-site.git
git push -u origin main
```

推送后同样去 **Settings → Pages** 打开，选 `main` 分支根目录。

### 绑定自己的域名（可选）

1. 仓库根目录新建一个名为 `CNAME` 的文件（无扩展名），内容只写一行域名，例如 `moqing.net`。
2. 在域名服务商处添加解析：
   - `A` 记录指向 GitHub Pages 的四个 IP：`185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`
   - `CNAME` 记录把 `www` 指向 `<用户名>.github.io`
3. 回到 **Settings → Pages**，填上自定义域名并勾选强制 HTTPS。

## 想改内容，改这几个地方

| 要改的东西 | 位置 |
| --- | --- |
| 简介文字 | `index.html` 里 `.intro` 那几行 `<p>` |
| 菜单四项 | `index.html` 里 `.menu__panel`，以及 `main.js` 里 `CONTENT` 的对应键 |
| 详情面板文案 | `assets/js/main.js` 的 `CONTENT` 对象（about / more / maimai / nikon / cyberpunk / furry / other / links） |
| 「了解更多」的插画背景 | 换掉 `assets/img/sheet-bg.jpg` 即可（保持文件名，宽高比接近 3:2 最好看） |
| 友情链接 | `CONTENT.links()` 里的 `<a class="link">`，换成自己的地址、站名、描述 |
| 菜单里的音乐 | `index.html` 的 `<audio id="playerAudio">` 换 src；歌名 / 歌手改 `.player__meta`，封面换 `assets/img/music-cover.jpg` |
| 头像 / Logo | 替换 `assets/img/avatar.jpg`、`assets/img/logo.png`（保持文件名即可） |
| 背景视频 | 替换 `assets/bg/bg.mp4`，同时更新 `bg-poster.jpg` 封面 |
| 主色调 | `style.css` 顶部 `:root` 里的 `--pink`、`--cyan`、`--ink` |

改完刷新页面就生效，不需要重新构建。

## 说明

- 字体：霞鹜文楷（LXGW WenKai），SIL Open Font License，可免费用于个人站点；这里用 fonttools 按页面实际用到的字做了子集化，只有约 140KB。加粗字重由浏览器合成，不再额外加载第二个字体文件。
- 音乐：菜单里那首是网易云的《ツムギボシ》（大国奏音 / Timao），站点用网易云的外链地址在线播放，不把音频文件放进仓库；想换成自己的歌，按上面的对照表改 src 即可。
- 自动播放：浏览器默认会拦掉有声自动播放，所以打开页面时会先尝试一次，被拦下后在你第一次点击（点菜单、点页面任意处）时自动接上；之后就能用菜单里的按钮暂停 / 继续。
- 视频：源文件 1920×1080 / 11.7MB，转码为 1280×720 / 约 5MB，去掉了音轨，加了 faststart，方便边下边播。
- 如果访客开启了「减少动态效果」，入场动画会关闭，背景视频也不再自动播放，只留封面图。
- 本站在 GitHub Pages 上是纯静态托管，没有后端，联系方式和留言需要自己接第三方服务。

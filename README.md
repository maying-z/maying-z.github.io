# 美荧的个人品牌网站

一页式静态网站，原生 HTML/CSS/JS，零依赖、零构建。

## 文件结构

```
meiying-site/
├── index.html      # 页面
├── styles.css      # 样式
├── script.js       # 滚动渐现动效
└── README.md       # 本说明
```

## 本地预览

方式一（最简单）：双击 `index.html`，用浏览器直接打开。

方式二（推荐，接近线上效果）：在本文件夹下启动一个本地服务器，任选其一——

- 有 Python：`python -m http.server 8000`，然后浏览器打开 http://localhost:8000
- 有 Node：`npx serve .`，按提示打开链接
- 用 VS Code：装 Live Server 插件，右键 index.html → Open with Live Server

手机预览：电脑和手机连同一个 Wi-Fi，用方式二启动后，手机浏览器访问 `http://<电脑IP>:8000`（电脑 IP 用 `ipconfig` 查）。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `meiying-site`（Public）。
2. 在本文件夹下执行：

```bash
git init
git add .
git commit -m "个人品牌网站 v1"
git branch -M main
git remote add origin https://github.com/<你的用户名>/meiying-site.git
git push -u origin main
```

3. 打开仓库页面 → Settings → Pages → Source 选 `main` 分支、目录选 `/ (root)` → Save。
4. 等 1-2 分钟，访问 `https://<你的用户名>.github.io/meiying-site/` 即可。

> 提示：如果仓库名直接用 `<你的用户名>.github.io`，网站会发布在根域名下，地址更短。

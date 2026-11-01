# 个人主页的发布和更新

- 网站：https://wuge-cx.github.io/
- 代码仓库：https://github.com/wuge-cx/wuge-cx.github.io
- 发布记录：https://github.com/wuge-cx/wuge-cx.github.io/actions
- 本地项目：`E:\Web\astro-theme-pure`

网站由 GitHub Pages 托管，不需要一直开着本地电脑。

## 更新内容

中英文内容共用 `src/data/profile.ts`。首页样式在
`src/components/profile/ProfileHome.astro`，各板块样式在
`src/components/profile/ProfilePage.astro`。

项目概览与详情共用 `src/data/profile.ts` 中的 `projects` 数据。
`slug` 决定详情页地址，中英文页面自动生成；详情排版在
`src/components/profile/ProjectDetail.astro`。

`internships` 和 `publications` 为空时不生成页面，也不显示导航入口。
填入对应的真实经历后，下一次构建会自动恢复栏目。

简历下载文件为 `public/files/xi-chen-resume-zh.pdf`，是原中文简历的无照片副本。
更新简历时替换这个文件。英文页会明确标注下载的是中文 PDF。
个人图标和分享封面的源文件分别在 `public/favicon/favicon.svg` 与
`src/assets/branding/share-card.svg`；修改后运行 `web.cmd scripts/generate-branding.mjs` 重新生成各尺寸图片。

模板示例博客、文档、友链、条款、RSS 和搜索页面已从发布路由中移除。
网站仅构建个人页面，地址统一带末尾斜杠，与 GitHub Pages 一致。

在项目目录运行 `web.cmd dev` 可以先在本地预览；运行
`web.cmd run build` 可以检查是否可以正常构建。

确认修改后，提交需要发布的文件，再推送：

```powershell
git add <需要发布的文件>
git commit -m "Update personal website"
git push origin main
```

推送到 `main` 分支会自动触发 GitHub Actions。发布成功后，公网网站会更新；
如果构建失败，可在仓库的 Actions 页面查看原因，已发布的版本会继续服务。

`origin` 指向个人主页仓库，`upstream` 指向原始 Astro Theme Pure 模板。
照片目录 `src/assets/profile/` 仅保留在本地，不参与提交和发布。

基于 [Astro Theme Pure](https://github.com/cworld1/astro-theme-pure)，保留原项目许可证。

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

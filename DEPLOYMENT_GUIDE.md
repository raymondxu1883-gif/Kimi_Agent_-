# GitHub 部署指南

## 当前状态
- ✅ Git 仓库已初始化
- ✅ .gitignore 文件已创建
- ✅ GitHub Actions 自动部署工作流已配置
- ✅ 远程仓库已连接到 https://github.com/raymondxu1883-gif/Kimi_Agent_-.git
- ⏳ 需要手动完成 Git 提交和推送

## 手动完成步骤

### 1. 提交代码到本地 Git 仓库
在项目目录下执行以下命令：
```bash
git commit -m "Initial commit: Wedding signage website"
```

### 2. 推送代码到 GitHub
```bash
git push -u origin master
```

### 3. 启用 GitHub Pages
1. 访问您的 GitHub 仓库：https://github.com/raymondxu1883-gif/Kimi_Agent_-
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Build and deployment" 部分，选择 "Source" 为 "GitHub Actions"
5. 保存设置

### 4. 等待自动部署
- 代码推送到 GitHub 后，GitHub Actions 会自动运行
- 构建过程大约需要 2-3 分钟
- 部署完成后，您可以在仓库的 "Actions" 标签中查看部署状态
- 部署成功后，您的网站将在以下地址可用：
  - https://raymondxu1883-gif.github.io/Kimi_Agent_-/

## 自动部署说明
一旦完成以上步骤，以后每次您修改代码并推送到 GitHub 时：
1. GitHub Actions 会自动检测到推送
2. 自动运行构建命令
3. 自动部署到 GitHub Pages
4. 无需手动干预

## 修改网站后的工作流程
1. 在本地修改代码
2. 提交更改：`git add . && git commit -m "描述您的更改"`
3. 推送到 GitHub：`git push`
4. 等待自动部署完成（约 2-3 分钟）
5. 刷新网站查看更改

## 技术支持
如果遇到问题，请检查：
- GitHub Actions 的运行日志（在仓库的 "Actions" 标签中）
- 确保分支名称是 "master"（不是 "main"）
- 确保 GitHub Pages 设置正确（Source 选择 GitHub Actions）

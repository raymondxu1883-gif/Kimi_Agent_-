# 网站项目交接指南

## 📋 项目信息

**项目名称：** 欧美婚礼标识网站
**GitHub 仓库：** https://github.com/raymondxu1883-gif/Kimi_Agent_-
**在线网站：** https://raymondxu1883-gif.github.io/Kimi_Agent_-/

## 🔧 技术栈

- **前端框架：** React 19.2.0
- **开发语言：** TypeScript
- **构建工具：** Vite 7.3.0
- **样式框架：** Tailwind CSS 3.4.19
- **UI 组件：** Radix UI + shadcn/ui
- **部署平台：** GitHub Pages
- **自动部署：** GitHub Actions

## 📂 项目结构

```
app/
├── src/
│   ├── components/ui/      # UI 组件库
│   ├── sections/          # 页面区块
│   │   ├── Hero.tsx       # 首页横幅
│   │   ├── Products.tsx    # 产品展示
│   │   ├── Gallery.tsx     # 案例画廊
│   │   ├── Testimonials.tsx # 客户评价
│   │   ├── Process.tsx     # 制作流程
│   │   ├── Contact.tsx     # 联系表单
│   │   ├── Navigation.tsx  # 导航栏
│   │   └── Footer.tsx     # 页脚
│   ├── App.tsx            # 主应用
│   ├── main.tsx           # 入口文件
│   └── index.css          # 全局样式
├── public/
│   └── images/            # 图片资源
├── .github/
│   └── workflows/
│       └── deploy.yml      # 自动部署配置
├── package.json            # 项目依赖
├── vite.config.ts         # Vite 配置
└── tailwind.config.js     # Tailwind 配置
```

## 🚀 工作流程

### 开发流程

1. **修改代码**
   - 直接编辑 `src/` 目录下的文件
   - 图片放在 `public/images/` 目录

2. **本地测试**
   ```bash
   npm run dev
   ```
   - 访问 http://localhost:5173 预览

3. **构建项目**
   ```bash
   npm run build
   ```
   - 构建产物在 `dist/` 目录

4. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "描述修改内容"
   git push
   ```

5. **自动部署**
   - GitHub Actions 自动检测到推送
   - 自动运行构建
   - 自动部署到 GitHub Pages
   - 约 2-3 分钟后网站更新

### 重要命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 代码检查
npm run lint

# 推送到 GitHub
git add .
git commit -m "描述"
git push
```

## 🔑 GitHub 仓库权限设置

### 添加协作者（Collaborator）

1. 访问仓库设置：https://github.com/raymondxu1883-gif/Kimi_Agent_-/settings/access
2. 点击 "Collaborators and teams"
3. 点击 "Add people"
4. 输入对方的 GitHub 用户名
5. 选择权限级别：
   - **Read**：只能查看代码
   - **Triage**：可以管理 Issues
   - **Write**：可以推送代码（推荐）
   - **Maintain**：可以管理仓库
   - **Admin**：完全控制权限
6. 点击 "Add collaborator"
7. 对方会收到邀请邮件，接受后即可访问

### 或者使用 Personal Access Token

如果对方需要通过 API 访问：

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 选择权限：
   - ✅ repo（完整仓库访问权限）
   - ✅ workflow（GitHub Actions 权限）
4. 生成 token 并复制
5. 将 token 提供给对方（注意保密）

## 📧 表单功能

### Formspree 配置

**表单 URL：** https://formspree.io/f/mojnblvg

**工作原理：**
- 用户填写联系表单
- 数据通过 POST 请求发送到 Formspree
- Formspree 将邮件发送到注册邮箱
- 可在 https://formspree.io/dashboard 查看所有提交

**修改表单：**
- 编辑文件：`src/sections/Contact.tsx`
- 修改 handleSubmit 函数中的 Formspree URL

## 🎨 样式配置

### 颜色变量

在 `src/index.css` 中定义了自定义颜色：

```css
--color-gold: #D4AF37;
--color-gold-light: #E8C547;
--color-gold-dark: #B8941F;
--color-ivory: #FFFEF7;
```

### 字体

- **衬线字体：** Playfair Display（标题）
- **手写字体：** Great Vibes（装饰文字）
- **无衬线字体：** Inter（正文）

## 📝 重要注意事项

### 图片路径

- ✅ **正确：** `./images/filename.jpg`（相对路径）
- ❌ **错误：** `/images/filename.jpg`（绝对路径）

### Git 分支

- **主分支：** `master`
- **GitHub Actions 监听：** `master` 分支的推送

### 部署配置

- **部署源：** GitHub Actions
- **构建输出：** `dist/` 目录
- **工作流文件：** `.github/workflows/deploy.yml`

## 🐛 常见问题

### 构建失败

1. 检查 GitHub Actions 日志
2. 确认所有依赖已安装
3. 检查 TypeScript 类型错误

### 图片不显示

1. 确认使用相对路径 `./images/`
2. 确认图片文件存在于 `public/images/`
3. 重新构建项目

### 表单不工作

1. 检查 Formspree URL 是否正确
2. 检查网络连接
3. 查看 Formspree 控制台是否有错误

## 📞 联系信息

**原开发者：** raymondxu1883
**GitHub：** https://github.com/raymondxu1883-gif
**项目仓库：** https://github.com/raymondxu1883-gif/Kimi_Agent_-

## ✅ 交接检查清单

- [ ] 添加对方为 GitHub Collaborator
- [ ] 对方成功访问仓库
- [ ] 对方克隆仓库到本地
- [ ] 对方成功运行 `npm install`
- [ ] 对方成功运行 `npm run dev`
- [ ] 对方成功构建项目 `npm run build`
- [ ] 对方成功推送代码 `git push`
- [ ] 确认 GitHub Actions 自动部署正常
- [ ] 确认网站正常更新
- [ ] 交接 Formspree 账号信息（如需要）

---

**交接日期：** ___________
**交接人：** ___________
**接收人：** ___________
**备注：** ___________

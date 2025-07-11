#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "🚀 开始构建和部署..."

# 生成静态文件
echo "📦 构建项目..."
npm run build

# 进入生成的文件夹
cd build

# 自定义域名已在 static/CNAME 中配置，会自动复制到 build 目录
echo "🌐 检查 CNAME 文件..."
if [ -f "CNAME" ]; then
    echo "✅ CNAME 文件存在: $(cat CNAME)"
else
    echo "⚠️  CNAME 文件不存在，将创建..."
    echo 'wooyee.cc' > CNAME
fi

echo "📝 初始化 Git 仓库..."
git init
git config user.name "GitHub Actions"
git config user.email "actions@github.com"
git add -A
git commit -m "🚀 Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# 部署到 GitHub Pages (gh-pages 分支)
echo "🚀 部署到 GitHub Pages..."
if [ -n "$access_token" ]; then
    # 使用 access_token (适用于 Travis CI 或其他 CI)
    git push -f https://${access_token}@github.com/miusing/blog.git master:gh-pages
elif [ -n "$GITHUB_TOKEN" ]; then
    # 使用 GITHUB_TOKEN (适用于 GitHub Actions)
    git push -f https://${GITHUB_TOKEN}@github.com/miusing/blog.git master:gh-pages
else
    # 使用 SSH (本地部署)
    git push -f git@github.com:miusing/blog.git master:gh-pages
fi

echo "✅ 部署完成！"
echo "🌐 网站地址: https://wooyee.cc"

cd -
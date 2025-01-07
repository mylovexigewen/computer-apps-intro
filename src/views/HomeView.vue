<template>
  <div class="home">
    <header class="header">
      <h1>实用电脑应用推荐</h1>
      <p class="subtitle">精选优质软件，提升工作效率</p>
    </header>

    <main class="content">
      <section v-for="category in categories" :key="category.title" class="category">
        <h2>{{ category.title }}</h2>
        <div class="apps-grid">
          <div v-for="app in category.apps" :key="app.name" class="app-card">
            <img :src="app.icon" :alt="app.name" class="app-icon">
            <h3>{{ app.name }}</h3>
            <p class="app-desc">{{ app.description }}</p>
            <div class="app-features">
              <span v-for="feature in app.features" :key="feature" class="feature-tag">
                {{ feature }}
              </span>
            </div>
            <a :href="app.downloadLink" target="_blank" class="download-btn">
              下载链接
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>© 2024 电脑应用推荐. 所有推荐均基于个人使用体验。</p>
    </footer>
  </div>
</template>

<script setup>
const categories = [
  {
    title: "办公效率",
    apps: [
      {
        name: "Microsoft Office",
        icon: "/icons/office.png",
        description: "最流行的办公软件套件，包含Word、Excel、PowerPoint等应用",
        features: ["文档处理", "表格计算", "演示制作"],
        downloadLink: "https://www.microsoft.com/microsoft-365"
      },
      {
        name: "WPS Office",
        icon: "/icons/wps.png",
        description: "免费的办公软件套装，兼容Microsoft Office格式",
        features: ["免费", "轻量级", "云同步"],
        downloadLink: "https://www.wps.cn/"
      }
    ]
  },
  {
    title: "系统工具",
    apps: [
      {
        name: "CCleaner",
        icon: "/icons/ccleaner.png",
        description: "系统清理和优化工具，帮助提升电脑运行速度",
        features: ["系统清理", "注册表修复", "启动项管理"],
        downloadLink: "https://www.ccleaner.com/"
      },
      {
        name: "7-Zip",
        icon: "/icons/7zip.png",
        description: "高效的文件压缩工具，支持多种压缩格式",
        features: ["免费开源", "高压缩率", "多格式支持"],
        downloadLink: "https://www.7-zip.org/"
      }
    ]
  },
  {
    title: "多媒体工具",
    apps: [
      {
        name: "VLC播放器",
        icon: "/icons/vlc.png",
        description: "强大的多媒体播放器，支持几乎所有视频格式",
        features: ["格式全面", "开源免费", "功能强大"],
        downloadLink: "https://www.videolan.org/"
      },
      {
        name: "GIMP",
        icon: "/icons/gimp.png",
        description: "免费的图像处理软件，是Photoshop的开源替代品",
        features: ["图像编辑", "开源免费", "插件支持"],
        downloadLink: "https://www.gimp.org/"
      }
    ]
  }
]
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  padding: 40px 0;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border-radius: 10px;
  margin-bottom: 40px;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.category {
  margin-bottom: 40px;
}

.category h2 {
  color: #333;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.app-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.app-card:hover {
  transform: translateY(-5px);
}

.app-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 15px;
}

.app-desc {
  color: #666;
  margin: 10px 0;
}

.app-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
}

.feature-tag {
  background: #f3f4f6;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #4b5563;
}

.download-btn {
  display: inline-block;
  background: #4f46e5;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.download-btn:hover {
  background: #4338ca;
}

.footer {
  text-align: center;
  padding: 20px;
  color: #666;
  border-top: 1px solid #e5e7eb;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .apps-grid {
    grid-template-columns: 1fr;
  }
}
</style> 
<script setup>
import { ref } from 'vue'
import { 
  HomeFilled, 
  Document, 
  Setting, 
  Fold, 
  Expand, 
  ArrowDown 
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <el-menu
        :collapse="isCollapse"
        default-active="/"
        class="el-menu-vertical"
        background-color="#545c64"
        text-color="#fff"
        router
      >
        <el-menu-item index="/">
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="/data">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>数据管理</span>
          </template>
          <el-menu-item index="/data-list">数据列表</el-menu-item>
          <el-menu-item index="/data-analysis">数据分析</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/settings">
          <el-icon><Setting /></el-icon>
          <span>系统设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 顶部导航 -->
      <el-header>
        <div class="header-left">
          <el-button type="primary" @click="handleCollapse">
            <el-icon><Fold v-if="!isCollapse" /><Expand v-else /></el-icon>
          </el-button>
          <h2>管理系统</h2>
        </div>
        <div class="header-right">
          <el-dropdown>
            <span class="el-dropdown-link">
              管理员
              <el-icon><ArrowDown /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <!-- 主要内容区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container {
  height: 100vh;
  min-width: 1000px;
}

.el-aside {
  background-color: #545c64;
  transition: width 0.3s ease-in-out;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}

.el-menu-vertical {
  height: 100%;
  border-right: none;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}

.el-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-left h2 {
  margin: 0;
  font-size: 18px;
  color: #1a1a1a;
}

.header-right {
  cursor: pointer;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #606266;
}

.el-main {
  background-color: #f0f2f5;
  padding: 0;
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 15px 20px;
}

.statistics .el-row {
  margin: 0;
  padding: 20px;
}

.statistics .el-card {
  text-align: center;
  transition: all 0.3s;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
}

.statistics .el-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.statistics h3 {
  margin: 0;
  color: #606266;
  font-size: 16px;
  font-weight: normal;
}

.statistics .number {
  font-size: 28px;
  font-weight: bold;
  color: #409EFF;
  margin-top: 16px;
}

@media screen and (max-width: 1400px) {
  .statistics .el-col {
    width: 50%;
  }
}

@media screen and (max-width: 768px) {
  .statistics .el-col {
    width: 100%;
  }
}

.el-menu-vertical .el-menu-item,
.el-menu-vertical .el-sub-menu__title {
  transition: all 0.3s ease;
}

.el-menu-vertical .el-menu-item:hover,
.el-menu-vertical .el-sub-menu__title:hover {
  background-color: #434a50 !important;
}
</style>

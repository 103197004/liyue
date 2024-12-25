<template>
  <div class="home">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>数据概览</span>
          <el-button type="primary">刷新</el-button>
        </div>
      </template>
      <div class="statistics">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-card shadow="hover">
              <h3>总访问量</h3>
              <div class="number">1,234</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
              <h3>今日访问</h3>
              <div class="number">123</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
              <h3>总用户数</h3>
              <div class="number">456</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
              <h3>新增用户</h3>
              <div class="number">78</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script setup>
// 如果需要任何脚本逻辑，可以在这里添加
</script>

<style scoped>
.home {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistics .el-card {
  text-align: center;
  transition: all 0.3s;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
</style> 
<template>
  <div class="data-analysis">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>数据分析</span>
          <el-button type="primary">导出数据</el-button>
        </div>
      </template>
      
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="hover">
            <template #header>
              <div class="chart-header">访问趋势</div>
            </template>
            <div class="chart-placeholder">
              图表区域（访问趋势）
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover">
            <template #header>
              <div class="chart-header">用户分布</div>
            </template>
            <div class="chart-placeholder">
              图表区域（用户分布）
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="24">
          <el-card shadow="hover">
            <template #header>
              <div class="chart-header">数据统计</div>
            </template>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期" width="180" />
              <el-table-column prop="visits" label="访问量" width="180" />
              <el-table-column prop="users" label="用户数" width="180" />
              <el-table-column prop="rate" label="转化率" />
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2024-03-20',
    visits: 1234,
    users: 456,
    rate: '23%'
  },
  {
    date: '2024-03-19',
    visits: 1123,
    users: 445,
    rate: '21%'
  },
  {
    date: '2024-03-18',
    visits: 1045,
    users: 438,
    rate: '19%'
  }
])
</script>

<style scoped>
.data-analysis {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chart-header {
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.chart-placeholder {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  color: #909399;
  font-size: 14px;
}

:deep(.el-card__header) {
  padding: 15px 20px;
}

:deep(.el-card) {
  margin-bottom: 20px;
}
</style> 
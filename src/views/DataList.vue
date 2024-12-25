<template>
  <div class="data-list">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>数据列表</span>
          <div class="header-operations">
            <el-input
              v-model="searchKeyword"
              placeholder="请输入搜索关键词"
              style="width: 200px; margin-right: 16px"
            />
            <el-button type="primary">
              <el-icon><Plus /></el-icon>新增
            </el-button>
          </div>
        </div>
      </template>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="名称" width="180" />
        <el-table-column prop="date" label="创建日期" width="180" />
        <el-table-column prop="status" label="状态">
          <template #default="{ row }">
            <el-tag :type="row.status === '已启用' ? 'success' : 'info'">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="250">
          <template #default="{ row }">
            <el-button link type="primary" @click="handleView(row)">
              <el-icon><View /></el-icon>
              查看
            </el-button>
            <el-button link type="primary">
              <el-icon><Edit /></el-icon>
              编辑
            </el-button>
            <el-button link type="danger">
              <el-icon><Delete /></el-icon>
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100"
          :page-size="10"
        />
      </div>
    </el-card>

    <!-- 查看详情对话框 -->
    <el-dialog
      v-model="dialogVisible"
      title="文档内容"
      width="800px"
    >
      <el-skeleton :rows="10" animated v-if="loading" />
      
      <div v-else class="markdown-content" v-html="markdownContent"></div>
      
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus, View, Edit, Delete } from '@element-plus/icons-vue'
import { marked } from 'marked'

const searchKeyword = ref('')
const dialogVisible = ref(false)
const currentRow = ref({})
const markdownContent = ref('')
const loading = ref(false)

const tableData = ref([
  {
    id: 1,
    name: '测试数据1',
    date: '2024-03-20',
    status: '已启用'
  },
  {
    id: 2,
    name: '测试数据2',
    date: '2024-03-19',
    status: '未启用'
  }
])

const handleView = async (row) => {
  dialogVisible.value = true
  loading.value = true
  
  try {
    const response = await fetch('/src/assets/my.md')
    const text = await response.text()
    
    markdownContent.value = marked(text)
  } catch (error) {
    console.error('加载文档失败:', error)
    ElMessage.error('文档加载失败')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.data-list {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-operations {
  display: flex;
  align-items: center;
}

.pagination-container {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.detail-item {
  margin-bottom: 15px;
  line-height: 20px;
}

.detail-item .label {
  display: inline-block;
  width: 80px;
  color: #606266;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}

.markdown-content {
  padding: 20px;
  line-height: 1.6;
  font-size: 14px;
}

.markdown-content :deep(h1) {
  font-size: 24px;
  margin-bottom: 16px;
}

.markdown-content :deep(h2) {
  font-size: 20px;
  margin: 24px 0 16px;
}

.markdown-content :deep(p) {
  margin: 16px 0;
}

.markdown-content :deep(code) {
  background-color: #f5f7fa;
  padding: 2px 4px;
  border-radius: 4px;
  color: #e6a23c;
}

.markdown-content :deep(pre) {
  background-color: #f5f7fa;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  padding-left: 20px;
  margin: 16px 0;
}

.markdown-content :deep(li) {
  margin: 8px 0;
}
</style> 
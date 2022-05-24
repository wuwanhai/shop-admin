<template>
  <el-pagination
      :currentPage="props.page"
      :page-size="props.limit"
      :page-sizes="[5, 10, 15, 20]"
      small="small"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="props.listCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  page: {
    type:Number,
    default:1
  },
  limit: {
    type:Number,
    default:10
  },
  listCount: {
    type:Number,
    default:0
  },
  loadList: {
    type: Function,
    default: () => {

    }
  }


})

const emit = defineEmits(['update:page','update:limit'])

const handleSizeChange = (size: number) => {
  emit('update:limit',size )
  emit('update:page',1 )
  props.loadList()
}
const handleCurrentChange = (page: number) => {
  emit('update:page',page )
  props.loadList()
}
</script>

<style scoped>

</style>

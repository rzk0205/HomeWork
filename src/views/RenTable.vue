<template>
  <div>
    <Rtable :column="column" checkbox index>
      <template v-slot:operation>
        <Rbutton type="danger" @click="handleDelete(slot.data)">删除</Rbutton>
      </template>
    </Rtable>
  </div>
</template>
<script>
export default {
  name: 'RenTable',
  data() {
    return {
      column: [
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'sex' },
        { label: '创建时间', prop: 'date' },
        { label: '地址', prop: 'address' },
        {
          label: 'URL地址',
          type: 'function',
          prop: 'date',
          callback: (data) => {
            return `<a href="https://www.baidu.com">${data.name}</a>`
          }
        },
        {
          label: '操作',
          type: 'slot',
          slot_name: 'operation',
          prop: 'operation'
        }
      ]
    }
  },
  components: {
    Rtable: () => import('../components/table'),
    Rbutton: () => import('../components/button')
  },
  created() {},
  methods: {
    handleDelete(row) {
      console.log(row)
    }
  }
}
</script>
<style lang="scss" scoped></style>

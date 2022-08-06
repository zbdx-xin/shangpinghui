<template>
  <div class="pagination">
    <button :disabled="pageNo===1"  @click="sendPageNo(pageNo-1)">上一页</button>
    <button v-show="startAndEnd.start  > 1"  @click="sendPageNo(1)" :class="{active:pageNo===1}">1</button>
    <button v-show="startAndEnd.start > 2">···</button>
    <button
      v-for="(page, index) in startAndEnd.end"
      :key="index"
      v-show="page >= startAndEnd.start"
      @click="sendPageNo(page)"
      :class="{active:pageNo===page}"
    >
      {{ page }}
    </button>

    <button v-show="startAndEnd.end < endPage - 1">···</button>
    <button v-show="startAndEnd.end < endPage"  @click="sendPageNo(endPage)" :class="{active:pageNo===endPage}">{{ endPage }}</button>
    <button  @click="sendPageNo(pageNo+1)" :disabled="pageNo===endPage">下一页</button>
    <button style="margin-left: 30px">共 {{ total }} 条</button>
    <!-- <h1>{{ startAndEnd }}</h1> -->
  </div>
</template>

<script>
export default {
  name: "Page",
  props: ["pageNo", "pageSize", "continue", "total"],
  computed: {
    //结束页
    endPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startAndEnd() {
      //连续页 开始结束
      let start = 0,
        end = 0;  
      if (this.continue > this.endPage) {
        //不正常
        start = 1;
        end = this.endPage;
      } else {
        start = this.pageNo - Math.floor(this.continue / 2);
        end = this.pageNo + Math.floor(this.continue / 2);
        //不正常的
        if (start <1) {
          start = 1;
          end = this.continue;
        }
        if (end > this.endPage) {
          start = this.endPage - this.continue + 1; 
          end = this.endPage;
        }
      }
      return { start, end };
    },
  },
  methods: {
    sendPageNo(page) {
      this.$emit("getPageNo",page);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active{
  background-color: red;
}
</style>
<template>
  <div class="warnlist-wrap main-warp">
    <commonInput 
    :searchFrom="searchFrom" 
    @search="search"
    @del="del"
    @add="add"
    :from="'productList'"
    ></commonInput>
    <!-- 表格 -->
    <commonTable 
    :tableData="tableData" 
    :count="count" 
    :columnData="columnData"
    :options="options"
    @edit="edit"
    @currentChange="currentChange"
    @sizeChange="sizeChange"
    @select="select"
    @del="del"
    ></commonTable>
  </div>
</template>

<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>
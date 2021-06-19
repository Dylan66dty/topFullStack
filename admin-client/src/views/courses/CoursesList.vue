<template>
  <div>
    <h3>课程列表</h3>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { getCourseList } from '@/api/course.ts';
@Component({})
export default class CoursesList extends Vue {
  // 这里定义属性和方法
  data = {};

  // ajax
  async fetch() {
    const res = await getCourseList();
    console.log(res);
  }

  created() {
    this.fetch();
  }
}
</script>

<style>
</style>
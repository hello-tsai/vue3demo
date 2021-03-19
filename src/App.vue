<template>
  <div class="container">
    <GlobalHeader :user="userTestData"></GlobalHeader>
    <ColumnList :list="testData"></ColumnList>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'

const userTestData: UserProps = {
  isLogin: true,
  name: '张三',
  id: 233,
}

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test专栏',
    description: '这里是test1专栏，有一段非常有意思的简介，可以更新以西哦',
  },
  {
    id: 2,
    title: 'test专栏',
    description: '这里是test2专栏，有一段非常有意思的简介，可以更新以西哦',
    avatar: '#',
  },
  {
    id: 3,
    title: 'test专栏',
    description: '这里是test2专栏，有一段非常有意思的简介，可以更新以西哦',
    avatar: '#',
  },
  {
    id: 4,
    title: 'test专栏',
    description: '这里是test2专栏，有一段非常有意思的简介，可以更新以西哦',
    avatar: '#',
  },
  {
    id: 5,
    title: 'test专栏',
    description: '这里是test2专栏，有一段非常有意思的简介，可以更新以西哦',
    avatar: '#',
  },
  {
    id: 6,
    title: 'test专栏',
    description: '这里是test2专栏，有一段非常有意思的简介，可以更新以西哦',
    avatar: '#',
  },
  {
    id: 7,
    title: 'test专栏',
    description: '这里是test2专栏，有一段非常有意思的简介，可以更新以西哦',
    avatar: '#',
  },
  {
    id: 8,
    title: 'test专栏',
    description: '这里是test2专栏，有一段非常有意思的简介，可以更新以西哦',
    avatar: '#',
  },
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
  },
  setup() {
    return {
      testData,
      userTestData,
    }
  },
})
</script>

<style>

</style>

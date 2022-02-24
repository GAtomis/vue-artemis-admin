<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-17 16:01:05
 * @LastEditTime: 2022-02-21 14:42:29
 * @LastEditors: Gavin
-->
<template>
  <section class="strap">
    <a-card
      v-for="({ title, cover, des, tags = [], tagColor }, index) of toolList"
      :key="index"
      hoverable
    >
      <template #cover>
        <img alt="example" :src="cover" />
      </template>
      <a-card-meta :title="title">
        <template #description>
          <p>{{ des }}</p>
          <p>
            <a-tag
              v-for="(tag, tagNum) of tags"
              :key="tagNum"
              style="margin-bottom: 8px"
              :color="tagColor"
            >
              {{ tag }}
            </a-tag>
          </p>
        </template>
      </a-card-meta>
    </a-card>
    <!-- <input type="color" name="" id=""> -->
  </section>
</template>
<script lang="ts" setup>
  import { getToolList } from '@/api/dashboard/index'
  import { onMounted } from 'vue'

  interface Tool {
    title: string
    des: string
    cover: string
    tagColor: string
    tags?: Array<string>
  }
  const toolList: Tool[] = [
    // {
    //   title: "React",
    //   cover: 'https://www.tslang.cn/assets/images/examples/react.png',
    //   des: "如果create-react-app有一个包含TypeScript的选项，这将会使你得到：React + TypeScript的完美起点",
    //   tags: ["React", "Redux", "Webpack"],
    //   tagColor: "#61DAFB"
    // },
    // {
    //   title: "Angular",
    //   cover: 'https://www.tslang.cn/assets/images/examples/angular.png',
    //   des: "Angular团队建议在所有的Angular项目中使用TypeScript。查看教程开始使用。",
    //   tags: ["Angular", "Protractor", "Karma", "Webpack"],
    //   tagColor: "#DF2E31"
    // },
    {
      title: 'Vue.js',
      cover: 'https://www.tslang.cn/assets/images/examples/vue.png',
      des: '查看这个使用Vue.js和TypeScript的TodoMVC应用。',
      tags: ['Vue.js', 'Nuxt.js', 'Webpack'],
      tagColor: '#41B883',
    },
    // {
    //   title: "Wechat",
    //   cover: 'https://www.tslang.cn/assets/images/examples/wechat.png',
    //   des: "从此入门指南开始使用TypeScript构建微信小程序。立刻尝试！",
    //   tags: ["WeChat", "Node.js", "Express"],
    //   tagColor: "#9cc24b"
    // },
    // {
    //   title: "Express",
    //   cover: 'https://www.tslang.cn/assets/images/examples/node.png',
    //   des: "查看这个使用Express + MongoDB + TypeScript的新手项目，以了解为什么说TypeScript和Node.js是完美的组合。",
    //   tags: ["Node.js", "Express", "Webpack"],
    //   tagColor: "#9cc24b"
    // },
  ]

  onMounted(async () => {
    const data = await getToolList()
    console.log(data)
  })
  //expects props options
  /*const props = defineProps({
foo: String
})*/
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss">
  .strap {
    display: flex;
    & > * {
      margin-right: 10px;
    }
  }
</style>

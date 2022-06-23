<template>
  <div class="container">

    <nav>
      <MenuOutlined :style="{ fontSize: '20px' }" class="left-menu" />


      <div class="right-menu">
        <a-badge dot>
          <BellOutlined :style="{ fontSize: '20px' }" />
        </a-badge>
        <h1 id='name' style="fontSize: 14px; line-height: 22px;">Sarah Green</h1>
        <a-avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" />
      </div>
    </nav>
  

    <div class="mobileHeader" style="margin-bottom:0% ;">
      <h1>Hello Sarah!</h1>
      <p>Here you can find your projects and dashboards.</p>
    </div>


  </div>
</template>

<script>
import { BellOutlined } from '@ant-design/icons-vue';
import { MenuOutlined } from '@ant-design/icons-vue'



export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  components: {
    BellOutlined,
    MenuOutlined,
  },
};
</script>


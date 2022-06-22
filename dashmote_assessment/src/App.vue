<template>
  <div>
    <Header>
    </Header>
    <MobileCard></MobileCard>
    <DesktopCard></DesktopCard>

  </div>
</template>

<script>
import MobileCard from './components/MobileCard.vue'
import DesktopCard from './components/DesktopCard.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    MobileCard,
    DesktopCard,
},
  methods: {
  }
}
</script>


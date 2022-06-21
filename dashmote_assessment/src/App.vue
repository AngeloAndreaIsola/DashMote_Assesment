<template>
  <div>
    <DashboardOverview>
    </DashboardOverview>
    <MobileCard></MobileCard>
    <DesktopCard></DesktopCard>

  </div>
</template>

<script>
import DashboardOverview from './components/DashboardOverview.vue'
import MobileCard from './components/MobileCard.vue'
import DesktopCard from './components/DesktopCard.vue'

export default {
  name: 'App',
  components: {
    DashboardOverview,
    MobileCard,
    DesktopCard,
  },
  methods: {
  }
}
</script>


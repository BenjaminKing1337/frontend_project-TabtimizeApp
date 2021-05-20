import Vue from 'vue'
import VueRouter from 'vue-router'
import Frontpage from '../views/Frontpage.vue'
import LinkOpportunities from '../views/MainFeatures/LinkOpportunities.vue'
import Cardview from '../views/MainFeatures/Cardview.vue'
import CompiledLists from '../views/MainFeatures/CompiledLists.vue'
import RelevanceComparison from '../views/MainFeatures/RelevanceComparison.vue'
import DomainsAndPages from '../views/Setup/DomainsAndPages.vue'
import BillingAndUsage from '../views/Setup/BillingAndUsage.vue'
import MyProfile from '../views/Extras/MyProfile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Frontpage',
    component: Frontpage
  },
  {
    path: '/MainFeatures/LinkOpportunities',
    name: 'LinkOpportunities',
    component: LinkOpportunities
  },
  {
    path: '/MainFeatures/Cardview',
    name: 'Cardview',
    component: Cardview
  },
  {
    path: '/MainFeatures/CompiledLists',
    name: 'CompiledLists',
    component: CompiledLists
  },
  {
    path: '/MainFeatures/RelevanceComparison',
    name: 'RelevanceComparison',
    component: RelevanceComparison
  },
  {
    path: '/Setup/DomainsAndPages',
    name: 'DomainsAndPages',
    component: DomainsAndPages
  },
  {
    path: '/Setup/BillingAndUsage',
    name: 'BillingAndUsage',
    component: BillingAndUsage
  },
  {
    path: '/Extras/MyProfile',
    name: 'MyProfile',
    component: MyProfile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

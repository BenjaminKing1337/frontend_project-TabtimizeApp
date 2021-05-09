import Vue from 'vue'
import VueRouter from 'vue-router'
import Frontpage from '../views/Frontpage.vue'
import LinkOpportunities from '../views/MainFeatures/LinkOpportunities.vue'
import Lists from '../views/MainFeatures/Lists.vue'
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
    path: '/MainFeatures/Lists',
    name: 'Lists',
    component: Lists
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

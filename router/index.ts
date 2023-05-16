import { createRouter, createWebHistory } from 'vue-router';// @ts-ignore

import LandingView from '../views/LandingView.vue';// @ts-ignore

import ArticalesView from '../views/ArticalesView.vue';// @ts-ignore

import FeaturesView from '../views/FeaturesView.vue';// @ts-ignore

import GalleryView from '../views/GalleryView.vue';// @ts-ignore

import HowItView from '../views/HowItView.vue';// @ts-ignore

import LatestView from '../views/LatestView.vue';// @ts-ignore

import PricingView from '../views/PricingView.vue';// @ts-ignore

import RequestView from '../views/RequestView.vue';// @ts-ignore

import ServicesView from '../views/ServicesView.vue';// @ts-ignore

import SkillsView from '../views/SkillsView.vue';// @ts-ignore

import StatsView from '../views/StatsView.vue';// @ts-ignore

import TastimonialsView from '../views/TastimonialsView.vue';// @ts-ignore

import TeamView from '../views/TeamView.vue';// @ts-ignore

import TopVideosView from '../views/TopVideosView.vue';// @ts-ignore
import NotFound from '../views/NotFoundView.vue';// @ts-ignore



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: "/landing",
      redirect: { name: "landing" },
    },
    {
      path: '/articales',
      name: 'articales',
      component: ArticalesView
    },
    {
      path: '/features',
      name: 'features',
      component: FeaturesView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/how',
      name: 'how',
      component: HowItView
    },
    {
      path: '/latest',
      name: 'latest',
      component: LatestView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/request',
      name: 'request',
      component: RequestView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsView
    },
    {
      path: '/tastimonials',
      name: 'tastimonials',
      component: TastimonialsView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/videos',
      name: 'videos',
      component: TopVideosView
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound
    },
  ]
})

export default router

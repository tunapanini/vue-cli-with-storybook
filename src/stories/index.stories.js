/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import HelloWorld from '../components/HelloWorld.vue'

export default {
  component: HelloWorld,
  title: 'HelloWorld'
}

export const withHaHaText = () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="HaHa"></HelloWorld>',
  methods: { action: action('clicked') }
})

export const withSomeEmoji = () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="😀 😎 👍 💯"></HelloWorld>'
})

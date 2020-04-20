import HelloWorld from '@/components/HelloWorld.vue';

export default {
  component: HelloWorld,
  title: 'HelloWorld',
};

export const withHaHaText = () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="HaHa"></HelloWorld>',
});

export const withSomeEmoji = () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="😀 😎 👍 💯"></HelloWorld>',
});

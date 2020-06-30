<template>
  <div class="keyboard">
    <key
      v-for="({ value, label, title, color, gridStyle }, index) in keys"
      :key="index"
      :value="value"
      :label="label"
      :title="title"
      :color="color"
      :gridStyle="gridStyle"
      @key-pressed="onKeyPressed"
    />
  </div>
</template>

<script>
import Key from './Key'

export default {
  name: 'Keyboard',

  components: {
    Key
  },

  data () {
    return {
      keys: [
        {
          value: '1',
          label: '1',
          color: '#FF7042'
        },
        {
          value: '2',
          label: '2',
          color: '#FF7042'
        },
        {
          value: '3',
          label: '3',
          color: '#FF7042'
        },
        {
          value: 'erase',
          label: '\u2190',
          title: 'Стереть',
          color: '#7A7A7A'
        },
        {
          value: '4',
          label: '4',
          color: '#FF7042'
        },
        {
          value: '5',
          label: '5',
          color: '#FF7042'
        },
        {
          value: '6',
          label: '6',
          color: '#FF7042'
        },
        {
          value: 'clear',
          label: 'C',
          title: 'Очистить',
          color: '#7A7A7A'
        },
        {
          value: '7',
          label: '7',
          color: '#FF7042'
        },
        {
          value: '8',
          label: '8',
          color: '#FF7042'
        },
        {
          value: '9',
          label: '9',
          color: '#FF7042'
        },
        {
          value: 'next',
          label: '?',
          title: 'Пропустить',
          color: '#7A7A7A'
        },
        {
          value: '0',
          label: '0',
          color: '#FF7042',
          gridStyle: 'grid-column: 1 / 4;'
        },
        {
          value: 'check',
          label: '=',
          title: 'Ответить',
          color: '#7A7A7A'
        }
      ]
    }
  },

  methods: {
    onKeyPressed (value) {
      this.$emit('key-pressed', value)
    }
  }
}
</script>

<style scoped>
.keyboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}
</style>

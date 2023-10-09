<template>
  <div class="hello">
    <b-form-input 
      v-model="text" 
      placeholder="Enter your name" 
      class="w-50 mx-auto mt-3"
    >
    </b-form-input>
    <b-button 
      class="mt-3"
      @click="handleClick()"
    >
      Button
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    handleClick () {
      console.log(this.text)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

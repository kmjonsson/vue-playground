<template>
    <div>
    <h1 @click="klick()">{{ msg }}</h1>  
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 1
    }
  },
  methods: {
    klick: function() {
	this.msg++;
	this.$emit('klicked',this.msg);
    }
  }
}
</script>

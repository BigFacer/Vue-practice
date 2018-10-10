<template>

  <div>
    <p>{{$route.params.newsId}}</p>
    <p>{{$route.params.newsTitle}}</p>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

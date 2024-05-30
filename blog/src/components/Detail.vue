<template>
   
    <div>
        <h4>상세페이지</h4>
        <h5>{{블로그글s[$route.params.id].title}}</h5>
        <p>{{블로그글s[$route.params.id].content}}</p>
        <p></p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        props:{
            블로그글s: Array,
        }
    }
</script>

<style lang="scss" scoped>

</style>
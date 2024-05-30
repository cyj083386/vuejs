<template>
    <div v-for="(a) in 블로그글s" :key="a" >
        <h5 @click="$router.push('/detail/'+a.number)">{{a.title}}</h5>
        <!-- <router-link :to="`detail/${a.number}`"><h5>{{a.title}}</h5></router-link> -->
        <p>{{a.date}}</p>
    </div>
    <!-- <div>{{ 블로그글s }}</div> -->
</template>

<script>
    export default {
        name: 'List',
        props:{
            블로그글s: Array,
        },
    }
</script>

<style lang="scss" scoped>

</style>
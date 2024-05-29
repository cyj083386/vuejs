<template>
  <div class="start" :class="{ end : true}">
      <ModalWindow @closeModal="모달창열렸니 = false" 
    :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>

  <div class="menu">
    <a v-for="a in menu" :key="a">{{a}}</a>
  </div>
  <DisCount/> 
  <ItemCard @openModal="모달창열렸니 = true; 누른거 = $event" :원룸="원룸들[i]" v-for="(a,i) in 원룸들" :key="a"/>


  <!-- <ItemCard @openModal="모달창열렸니 = true; 누른거 = $event" :원룸="원룸들[i]" v-for="(a,i) in 원룸들" :key="a"/> -->
  
  <!-- <div v-for="(a, i) in 원룸들" :key="i">
    <img :src="a.image" class = "room-img">
    <h4 @click="모달창열렸니 = true; 누른거 = i ">{{ a.title }}</h4>
    <p>{{ a.price }} 원</p>
  </div> -->
  <!-- <div v-for="(a, i) in products" :key="i">
    <img :src="require(`@/assets/images${i}.jpg`)" class = "room-img">
    <h4 :style="스타일" @click="모달창열렸니 =  true">{{ a }}</h4>
    <p>{{ price1 }} 만원</p>
    
  </div> -->
  <!-- <div>
    <h4 :style="스타일">{{ products[0] }} 원룸</h4>
    <p>{{ price1 }} 만원</p>
    <button @click="increase">허위매물신고</button> <span>신고수 : {{report}}</span>
  </div>
  <div>
    <h4>{{ products[1] }} 원룸</h4>
    <p>{{ price2 }} 만원</p>
  </div> -->
</template>

<script>
import data from './components/oneroom.js';
import ItemCard from './components/ItemCard.vue';
import DisCount from './components/DisCount.vue';

import ModalWindow from './components/ModalWindow.vue';

export default {
  name: 'App',
  data(){
    return{
      누른거 : 0,
      원룸들 : data,
      모달창열렸니: false,
      menu : ['home','shop','about'],
      report : [0, 0, 0],
      price1 : 60,
      price2 : 70,
      스타일 : 'color : blue',
      products  : ['역삼동 아파트', '천호동 아파트', '마포구 아파트'],
    }
  },
  methods : {
    increase(i){
      this.report[i]++
    }
  },

  components: {
    DisCount : DisCount,
    ModalWindow : ModalWindow,
    ItemCard: ItemCard,
  }
}
</script>

<style>
/* .start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
} */

body {
  margin: 0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>

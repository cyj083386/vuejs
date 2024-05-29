<template>
  <div class="black-bg" v-if="모달창열렸니">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" style="width: 100%" />
      <DisCount />
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <input v-model.number="month" />
      <form @submit="checkForm" action="https://vuejs.org/" method="post">
        <p>
          <label for="name">Name</label>
          <input id="name" v-model="name" type="text" name="name" />
        </p>

        <p>
          <label for="age">Age</label>
          <input id="age" v-model="age" type="number" name="age" min="0" />
        </p>

        <p>
          <label for="movie">Favorite Movie</label>
          <select id="movie" v-model="movie" name="movie">
            <option>Star Wars</option>
            <option>Vanilla Sky</option>
            <option>Atomic Blonde</option>
          </select>
        </p>

        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
      <p>{{ month }}개월 선택함 : {{ 원룸들[누른거].price * month }}</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';
// import SimpleVueValidation from 'simple-vue-validator';

// Vue.use(SimpleVueValidation);
import DisCount from "./DisCount.vue";

export default {
  name: "ModalWindow",
  data() {
    return {
      month: 1,
    };
  },
  // watch : {
  //   month(a){
  //     if(typeof(a) != 'number'){
  //      alert('숫자를 입력하세요');
  //      this.month = 1;
  //     }
  //     // if(isNaN(a) == true){
  //     //   alert('숫자를 입력하세요');
  //     //   this.month = 1;
  //     // }
  //     else if(a >= 13){
  //       alert('13이상 입력하지 마세요')
  //     }
  //   },
  // },
  beforeUpdate() {
    if (typeof this.month != "number") {
      alert("숫자를 입력하세요");
      this.month = 1;
    }
    // if(isNaN(a) == true){
    //   alert('숫자를 입력하세요');
    //   this.month = 1;
    // }
    else if (this.month >= 13) {
      alert("13이상 입력하지 마세요");
      this.month = 12;
    }
  },
  components: {
    DisCount: DisCount,
  },
  props: {
    원룸들: Array,
    누른거: Number,
    모달창열렸니: Boolean,
  },
};
</script>

<style></style>

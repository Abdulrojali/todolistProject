<script>
import axios from 'axios'
import {ref} from 'vue'
export default{
  data(){
    return{
      data:ref('')
    }
  },
  methods:{
    async fetchDataTodo(){
      await axios.get("http://localhost:3000/todolist")
      .then((res)=>this.data=res.data)
      .catch((err)=>console.log(err))
    },
    viewData(id){
      this.$router.push(`/view/${id}`)
    },
    async deleteData(id){
      const deleteDataId=await axios.delete('http://localhost:3000/todolist/'+id)
      if(deleteDataId){
        alert('sukses delete data')
        window.location.reload()
      }
      else{
        alert('gagal delete data!!')
        window.location.reload()
      }
    },
    newData(){
      this.$router.push('/newData')
    }
  },
  mounted(){
    this.fetchDataTodo()
  }
  
}
</script>

<template>
  <div class="container">
    <h1 class="judul">data list</h1>
    <i class="fa-solid fa-plus" @click="newData"></i>
    <div class="content">
      <tr class="col">
        <td><h2>nama todo </h2></td>
        <td><h2>menu todo </h2></td>
      </tr>
      <tr class="col" v-for="(datas,index) in data" :key="index">
        <td><b>{{datas.nameTodo}}</b></td>
        <td>
          <tr class="btn">
            <td><i id="blue" class="fa-solid fa-pen-to-square" @click="viewData(datas._id)"></i></td>
            <td>  <i id="red" class="fa-solid fa-delete-left" @click="deleteData(datas._id)"></i></td>
          </tr>
        </td>
      </tr>
    </div>
  </div>
</template>
<style scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.container{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
}
.content{
  margin-top: 25px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.col{
  width:100%;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}
.btn{
  margin-top: 20px;
  display: flex;
  gap: 15px;
}
i{
  font-size: 1em;

}
i:hover{
  opacity: .8;
}
h2,h1{
  text-transform: capitalize;
}
#blue{
  color: blue;
}
#red{
  color: red;
}
b{
  font-weight: 400;
}
</style> 

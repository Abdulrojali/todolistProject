<script>
import axios from 'axios'
import {ref} from 'vue'
export default{
    data(){
        return{
            datas:ref('')
        }
    },
    methods:{
        back(){
            this.$router.push('/')
        },
        async detailData(){
            await axios.get(`http://localhost:3000/todolist/`+this.$route.params.id)
            .then((res)=>this.datas=res.data)
            .catch((err)=>console.log(err))
        },
        editPage(id){
            this.$router.push(`/edit/${id}`)
        }
        ,
        back(){
            this.$router.push('/')
        }
    },
    mounted(){
        this.detailData()
    }
}
</script>

<template>
    <div class="container">
        <h1 class="judul">detail data</h1>
       <div class="content">
        <h3>nama todo :{{ datas.nameTodo }}</h3>
        <h5>date todo :{{ datas.dateTodo }}</h5>
        <p>status :{{ datas.status }}</p>
        <div class="btn">
            <button @click="editPage(datas._id)">edit</button>
            <button @click="back">back</button>
        </div>
        <i class="fa-solid fa-left-long" @click="back"></i>
       </div>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
}
h1,h3{
    text-transform: capitalize;
}
.content{
    width: 25%;
    border-radius: 5px;
    padding: 20px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
}
.btn{
    margin-top: 20px;
    width: 50%;
    display: flex;
    justify-content:center;
    gap: 15px;
    align-items: center;
}
button{
    padding: 6px 8px;
    border-radius: 5px;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
}
button:hover{
    opacity: .8;
}
i{
    position: absolute;
    top: 30px;
    left: 20px;
    font-size: 2em;
}
</style>
<script>
import {ref} from 'vue'
import axios from 'axios'
export default{
    data(){
        return{
         data:ref({
            nameTodo:null,
            dateTodo:null,
           status:null
         })
        }
    },
    methods:{
       async submitData(){
            if(this.data.nameTodo==='' || this.data.dateTodo==='' || this.data.status===''){
                alert('tolong isi inputan!!')
                window.location.reload()
            }
            else{
                try{
                    await axios.put('http://localhost:3000/todolist/'+this.$route.params.id,this.data)
                    .then((res)=>console.log(res.data))
                    .catch((err)=>console.log(err))
                    this.$router.push('/')
                }
                catch(err){
                    throw new Error(err)
                }
            }
        },
        cancel(){
            window.location.reload()
        },
        back(){
            this.$router.push('/view/'+this.$route.params.id)
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="content">
            <h3 class="judul">edit Data</h3>
            <div class="form">
                <div class="col">
                    <label for="">nameTodo</label>
                    <input type="text" v-model="data.nameTodo">
                </div>
                <div class="col">
                    <label for="">dateTodo</label>
                    <input type="date" v-model="data.dateTodo">
                </div>
                <div class="col">
                    <label for="">status</label>
                    <input type="text" v-model="data.status">
                </div>
                <div class="btn">
                    <button @click="submitData">submit</button>
                    <button @click="cancel">cancel</button>
                </div>
                <i class="fa-solid fa-left-long" @click="back"></i>
            </div>
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
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.form{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.col{
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
input{
    width:100%;
    padding: 6px 8px;
}
h3{
    font-size: 2em;
    text-transform: capitalize;
    margin-bottom: 20px;
}
i{
    position: absolute;
    top: 30px;
    left: 20px;
    font-size: 2em;
}
.btn{
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content:space-around;
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
</style>
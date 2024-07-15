<script>
export default{
    data(){
        return{
            buttons:[
            { id: 'northareaBtn', text: '北部地區',backgroundColor:'#39AB4B' },
            { id: 'midareaBtn', text: '中部地區' ,backgroundColor:'#C6E058'},
            { id: 'southareaBtn', text: '南部地區',backgroundColor:'#C6E058' },
            { id: 'eastareaBtn', text: '東部地區',backgroundColor:'#C6E058' }
        ]
        }
    },
    methods:{
        handleButtonClick(clickedButton){
            this.buttons.forEach(btn =>{
                btn.backgroundColor ='#C6E058'
            })
            clickedButton.backgroundColor = '#39AB4B'
            this.$emit('area-change',clickedButton.text)
            }
        
        }
    }

</script>

<template>
    <button v-for="button in buttons" :key="button.id" @click="handleButtonClick(button)"
    :style="{'background-color': button.backgroundColor}">
        {{button.text}}
    </button>
</template>

<style scoped lang="scss">
            button{
                height: 80%;
                width: 20%;
                display: block;
                background-color: rgba(198, 224, 88, 1);
                color: white;
                border: none;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                font-size: 40px;
                z-index: 1;
            }
</style>
<script>
import { RouterLink } from 'vue-router'
export default {
    components: {
        RouterLink
    },
    data(){
        return{
            breadCrumList:[]
        }
    },
    mounted () { this.updateList() },
    watch: { '$route' () { this.updateList() } },
    methods: {
        routeTo (index) {
            if (this.breadCrumList[index].link) this.$router.push(this.breadCrumList[index].link)
        },
        updateList () { this.breadCrumList = this.$route.meta.breadCrum }
        }
    
}
</script>

<template>
    <div class="breadCrum">
        <ul>
            <li
            v-for="(breadCrum, index) in breadCrumList"
            :key="index"
            @click="routeTo(index)"
            :class="{'linked': !!breadCrum.link}">
            {{ breadCrum.name }}
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.breadCrum {
    border-bottom:2px solid #39AB4B;
    width: 100dvw;
    ul{
        display: flex;
        list-style: none;
        // font-size: font(1);
        margin-left: 20px;
    }
    li{
        cursor: pointer;
        color: #39AB4B;
        font-size: 20px;
        margin-left: 15px;
    }
    li:not(:last-child):after{
        content: ">>";
        margin-left: 10px;
    }
}
</style>
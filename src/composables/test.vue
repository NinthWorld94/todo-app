<template>
  
</template>

<script>
import useInitFomData from'./useFormdata'
export default {
    data(){
        return {
            formdata:{}
        }
    },
    mounted(){
        const {getformdata,setformdata} = useInitFomData()
        this.formdata=getformdata
        setformdata(1,2,3)
    }
}
</script>

<style>

</style>
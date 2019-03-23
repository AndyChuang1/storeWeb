<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 content">
                <NuxtChild :key="$route.params.types" />
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'products',
    layout:'product-content',
    data(){
        return{

        }
    },
    components:{

    },
}
</script>
<style lang="scss" scoped>

</style>


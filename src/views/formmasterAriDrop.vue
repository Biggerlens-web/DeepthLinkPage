<template>
    <div>

    </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    let timeout: any = null
    onMounted(() => {

        const fullPath: string = route.fullPath
        const query: string = fullPath.split('?')[1]
        const appStoreLink: string = `http://192.168.31.12:8081?params=${query}`
        timeout = setTimeout(() => {
            window.location.href = appStoreLink
        }, 2000)
    })
</script>

<style lang="scss" scoped></style>
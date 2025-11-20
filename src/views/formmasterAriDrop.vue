<template>
    <div>
        <deeplinkView />
    </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import deeplinkView from '../components/deeplinkView.vue'
    const route = useRoute()
    let timeout: any = null
    onMounted(() => {
        const screenWidth = window.innerWidth
        let platform: string = ''
        if (screenWidth > 768) {
            platform = 'pc'
        } else {
            platform = 'mobile'
        }
        console.log('platform', platform);
        const fullPath: string = route.fullPath
        const query: string = fullPath.split('?')[1]
        const appStoreLink: string = `http://website-test.biggerlens.com/?params=${query}&platform=${platform}`
        timeout = setTimeout(() => {
            window.location.href = appStoreLink
        }, 2000)
    })
</script>

<style lang="scss" scoped></style>
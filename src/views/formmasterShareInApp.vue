<template>
    <div class="main">
        <deeplinkView />
    </div>
</template>

<script lang="ts" setup>
    import deeplinkView from '../components/deeplinkView.vue'

    import { onMounted } from 'vue';
    let timeout: any = null
    const appStoreLink = `https://apps.apple.com/cn/app/%E8%A1%A8%E6%A0%BC-xlsx%E5%88%B6%E4%BD%9C%E5%8A%9E%E5%85%AC%E8%BD%AF%E4%BB%B6/id1518721142?platform=iphone`;
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {

            if (timeout !== null) {
                clearTimeout(timeout)
                timeout = null
            }
        }
    })
    onMounted(() => {


        timeout = setTimeout(() => {
            window.location.href = appStoreLink
        }, 2000)

    })

</script>

<style lang="scss" scoped>
    .main {
        display: flex;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
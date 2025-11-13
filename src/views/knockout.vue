<template>
    <div class="middlePage">
        <img :src="logo" alt="">
    </div>
</template>

<script lang="ts" setup>

    import logo from '@/assets/moblieLogo.png'
    import { onMounted } from 'vue';
    let timeout: any = null
    const appStoreLink = `https://apps.apple.com/cn/app/proknockout%E6%8A%A0%E5%9B%BEp%E5%9B%BE%E4%BF%AE%E5%9B%BE%E7%A5%9E%E5%99%A8-%E4%B8%93%E4%B8%9A%E6%99%BA%E8%83%BD%E8%AF%81%E4%BB%B6%E7%85%A7%E5%88%B6%E4%BD%9C/id944665061?platform=iphone`;
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
    .middlePage {
        img {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>
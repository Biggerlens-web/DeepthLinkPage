<template>
    <div>

    </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    let timeout: any = null
    const appStoreLink = `https://apps.apple.com/cn/app/photo-retouch-%E6%B6%88%E9%99%A4%E7%AC%94%E5%8F%8Ap%E5%9B%BE%E4%BF%AE%E5%9B%BE%E8%BD%AF%E4%BB%B6-%E7%A5%9E%E5%A5%87%E6%A9%A1%E7%9A%AE%E6%93%A6/id1230394683?platform=iphone`;
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

<style lang="scss" scoped></style>
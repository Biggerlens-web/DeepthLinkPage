<template>
    <div>

        <!-- <iframe src="/public/fallback.html" frameborder="0"></iframe> -->
    </div>
</template>

<script setup lang="ts">
    function tryOpenApp() {
        const universalLink = "https://config.ios.biggerlens.com/ppt/fallback";
        const fallbackLink = "https://imyppt.com.cn";

        // 如果当前页面已经是 universalLink，直接跳转备用网站（避免重复请求）
        if (window.location.href === universalLink) {
            window.location.href = fallbackLink;
            return;
        }


    }

    tryOpenApp()
</script>

<style lang="scss" scoped></style>
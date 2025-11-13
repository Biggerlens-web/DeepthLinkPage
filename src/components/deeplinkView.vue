<template>
    <div class="CrossBox">
        <div class="cloumnLine">
            <div class="cloumnItem" v-for="i in 5" :key="i"></div>
        </div>
        <div class="rowLine">
            <div class="rowItem" v-for="i in 10" :key="i"></div>
        </div>
        <img :src="logo" alt="logo" />
    </div>
</template>

<script setup lang="ts">
    import logo from '@/assets/矩形@2x.png'
</script>

<style lang="scss" scoped>
    .CrossBox {
        width: 31.7rem;
        height: 31.4rem;
        position: relative;

        .cloumnLine {
            width: calc(100% - 4rem - 3.9rem);
            display: flex;
            justify-content: space-between;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            height: 31.4rem;

            .cloumnItem {
                width: 0.1rem;
                height: 31.4rem;
                background: linear-gradient(rgba(249, 249, 249, 0) 0%, #f5f5f5 14%, #f5f5f5 81%, rgba(241, 241, 241, 0) 100%);
            }
        }

        .rowLine {
            width: 31.7rem;
            height: calc(100% - 8rem);

            position: absolute;
            top: 50%;
            transform: translateY(-50%);

            .rowItem {
                &:not(:last-child) {
                    margin-bottom: 2.5rem;
                }

                height: 0.1rem;
                width: 31.4rem;
                background: linear-gradient(rgba(249, 249, 249, 0) 0%, #f5f5f5 14%, #f5f5f5 81%, rgba(241, 241, 241, 0) 100%);
            }
        }

        img {
            position: absolute;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            top: 50%;
        }
    }
</style>

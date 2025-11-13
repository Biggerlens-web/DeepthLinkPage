<template>
    <div class="view">
        <img class="bgImg" src="../assets/DeepBg.png" alt="">
        <div class="logobox">
            <img src="../assets/logo.png" alt="">
            <div>
                <p class="appName">

                    {{ appInfo?.trackName }}
                </p>
                <p>
                    {{ isEN ? 'Elevate Creativity into a Stunning Slide Show' : '创意秒变高级幻灯片剧场' }}
                </p>
            </div>
        </div>
        <div class="downloadBtn" @click="download">
            {{ isEN ? 'Install iOS' : '免费安装iOS版' }}
        </div>
        <ul class="infoList">
            <li>
                <span>
                    {{ isEN ? 'Release Date:' : '发版时间:' }}

                </span>
                <span>
                    {{ formattedDate }}
                </span>
            </li>
            <li>
                <span>
                    {{ isEN ? 'Developer:' : '开发者:' }}
                </span>
                <span>
                    {{ appInfo?.artistName }}
                </span>
            </li>
            <li>
                <span>
                    {{ isEN ? 'Version:' : '应用版本:' }}
                </span>
                <span>
                    {{ appInfo?.version }}
                </span>
                |
                <span>
                    {{ isEN ? 'App Name:' : '应用名称:' }}
                </span>
                <span>
                    {{ appInfo?.trackName }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import service from '@/request';
    import getIsEn from '../ultils/languageJudge';
    import { onMounted, ref } from 'vue'
    import dayjs from 'dayjs';
    const isEN = ref(false)
    const appInfo = ref()
    const formattedDate = ref()

    const download = () => {
        const url = isEN.value ? 'https://apps.apple.com/us/app/ppt%E5%88%B6%E4%BD%9C/id6450978042?platform=iphone' : 'https://apps.apple.com/cn/app/ppt%E5%88%B6%E4%BD%9C/id6450978042?platform=iphone'
        window.location.href = url
    }
    const getAppInfoios = async () => {

        try {

            const res = await service.get('/api/itunes', {
                params: {
                    country: 'us',
                    id: '6450978042',
                    lang: isEN.value ? 'en' : 'zh_cn'
                }
            })
            console.log('获取成功', res.data.results[0]);
            appInfo.value = res.data.results[0]
            formattedDate.value = dayjs(appInfo.value.currentVersionReleaseDate).format('YYYY-MM-DD');
            const appStoreLink = 'https://apps.apple.com/cn/app/ppt%E5%88%B6%E4%BD%9C/id6450978042?platform=iphone';

            if (appInfo.value) {
                window.location.href = appStoreLink
            }

        }
        catch (err) {
            console.log('获取失败', err);
        }


    };
    onMounted(() => {
        isEN.value = getIsEn()
        getAppInfoios()
    })
</script>

<style lang="scss" scoped>
    @media screen and (max-width: 768px) {
        .view {
            width: 100%;
            box-sizing: border-box;
            position: relative;
            padding-top: 51.1rem;

            .bgImg {
                width: 100%;
                height: 53rem;
                position: absolute;
                left: 0;
                top: 0;
                z-index: -1;
            }

            .logobox {
                display: flex;
                align-items: center;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 5.6rem;
                column-gap: 1.2rem;

                img {
                    width: 4.8rem;
                    height: 4.8rem;
                }

                div {
                    height: 4.8rem;
                    width: max-content;


                    p {
                        &:first-of-type {

                            font-family: AaHouDiHei, AaHouDiHei;
                            font-weight: 400;
                            font-size: 2rem;
                            color: #FFFFFF;
                            line-height: 2.3rem;
                            margin-bottom: 0.6rem;
                        }

                        &:last-of-type {
                            font-family: PingFang SC, PingFang SC;
                            font-weight: 400;
                            font-size: 1.2rem;
                            color: #FFFFFF;
                            line-height: 1.4rem;
                        }
                    }
                }
            }

            .downloadBtn {
                width: 21rem;
                height: 6rem;
                line-height: 6rem;
                text-align: center;
                border-radius: 10rem;
                font-family: PingFang SC, PingFang SC;
                font-weight: 500;
                font-size: 1.8rem;
                color: #FFFFFF;
                background: url('../assets/Rectangle 3@2x.png') no-repeat center;
                margin: 0 auto;




            }

            .infoList {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 2.4rem;
                column-gap: .5rem;

                li {
                    font-family: PingFang SC, PingFang SC;
                    font-weight: 400;
                    font-size: 12px;
                    color: #999999;
                }
            }
        }
    }


</style>
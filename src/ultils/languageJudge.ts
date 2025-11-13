const locationhost = window.location.host
const getIsEn = () => {
    const isEN = locationhost.includes('config.ios.en.biggerlens.com')
    console.log('locationhost', locationhost)
    return isEN
}
export default getIsEn

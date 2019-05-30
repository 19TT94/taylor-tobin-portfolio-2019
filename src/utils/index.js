module.exports = {
    /**
     * @function isMobileDevice
     * check for mobile device based on window orientation
     *
     * @returns boolean for mobile device
     */
    isMobileDevice() {
        return (typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1)
    },

    /**
     * @function isMobileSize
     * check if current screen width indicates mobile device
     *
     * @returns boolean mobile screens
     */
    isMobileSize() {
        return window.matchMedia('(max-width: 767px)').matches
    }
}

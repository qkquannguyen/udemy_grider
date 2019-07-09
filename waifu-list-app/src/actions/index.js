// --- NOTE: Action Creator
export const selectWaifu = waifu => {
    // --- NOTE: Will return an action
    return {
        type: 'WAIFU_SELECTED',
        payload: waifu
    }
}

import { combineReducers } from 'redux'

import dif_002 from '../waifus/waifu002.png'
import fgo_alter_okita from '../waifus/waifuAlterOkita.png'
import danmachi_aiz from '../waifus/waifuAis.jpg'
import tqq_nino from '../waifus/waifuNino.jpg'
import fgo_okita from '../waifus/waifuOkita.jpg'

const waifusReducer = () => {
    return [
        {
            name: '002',
            anime: 'Darling in FRANXX',
            img: dif_002
        },
        {
            name: 'Aiz Wallenstein',
            anime: 'Is It Wrong To Pick Up Girls In A Dungeon',
            img: danmachi_aiz
        },
        {
            name: 'Nino Nakano',
            anime: 'The Quintessential Quintuplets',
            img: tqq_nino
        },
        {
            name: 'Okita Souji',
            anime: 'Fate / Grand Order',
            img: fgo_okita
        },
        {
            name: 'Okita Souji Alter',
            anime: 'Fate / Grand Order',
            img: fgo_alter_okita
        }
    ]
}

const selectedWaifuReducer = (selectedWaifu = null, action) => {
    if (action.type === 'WAIFU_SELECTED') {
        return action.payload
    }

    return selectedWaifu
}

export default combineReducers({
    waifus: waifusReducer,
    selectedWaifu: selectedWaifuReducer
})
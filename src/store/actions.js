import { DAT_GHE,HUY_GHE } from "./constants";

 const actDatGhe = (ghe) => {
    return {
        type: DAT_GHE,
        ghe,
    }
}

const actHuyGhe = (soGhe) => {
    return {
        type : HUY_GHE,
        soGhe : soGhe
    }
} 

export {actDatGhe, actHuyGhe};
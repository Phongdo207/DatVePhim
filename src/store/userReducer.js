import { DAT_GHE,HUY_GHE } from "./constants";

const initialState = {
    danhSachGheDangDat: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAT_GHE:{
            let danhSachGheDangDatClone = [...state.danhSachGheDangDat];
            const index = danhSachGheDangDatClone.findIndex((gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                danhSachGheDangDatClone.splice(index, 1);
            }else{
                danhSachGheDangDatClone.push(action.ghe)
            }
            state.danhSachGheDangDat = danhSachGheDangDatClone;
            return { ...state }
        }

        case HUY_GHE :{
            let danhSachGheDangDatClone = [...state.danhSachGheDangDat];
            const index = danhSachGheDangDatClone.findIndex((gheDangDat) => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) {
                danhSachGheDangDatClone.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatClone;
            return { ...state }
        }

        default: return { ...state }
    }
}

export default userReducer;
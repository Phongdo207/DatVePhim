import React, { Component, Fragment } from 'react'
import { actDatGhe } from '../store/actions';
import {connect} from "react-redux";


 class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe,index) => {
            let gheDuocChon = '';
            let disabled = false;
            if(ghe.daDat){
                gheDuocChon = "gheDuocChon";
                disabled = true;
            }

            // chọn ghế
            let infoGheDangDat = '';
            let indexgheDangDat = this.props.danhSachGheDangDat.findIndex((gheDangDat) => gheDangDat.soGhe === ghe.soGhe);
            if(indexgheDangDat !== -1){
                infoGheDangDat = 'gheDangChon';
            }

            return <button onClick={() => {
                this.props.datGhe(ghe)
            }} disabled = {disabled} className={`ghe ${gheDuocChon} ${infoGheDangDat}`} key={index}>
                {ghe.soGhe} 
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang,index) => {
            return <button className='rowNumber'>{hang.soGhe}</button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-3'>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        }else{
            return <div style={{fontSize: "25px"}}>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }


    render() {
        return (
            <Fragment className='text-left text-white text-center'>
                {this.renderHangGhe()}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat : state.userReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe : (ghe) => {
            dispatch(actDatGhe(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
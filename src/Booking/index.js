import React, { Component, Fragment } from 'react';
import './BaiTapBookingTicket.css';
import InfoBooking from './infoBooking';
import data from "./danhSachGhe.json"
import HangGhe from './hangGhe';
// import {connect} from "react-redux";

export default class Booking extends Component {

  renderHangGhe = () => {
    return data.map((hangGhe, index) => {
      return <Fragment key={index}>
        <HangGhe hangGhe={hangGhe} soHangGhe = {index} />
      </Fragment>
    })
  }



  render() {
    return (
      <div className='bookingMovie' style={{ position: "fixed", width: "100%", height: "100%", backgroundImage: "url('./image/bgmovie.jpg')", backgroundSize: "cover" }}>
        <div style={{ position: "fixed", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.6)" }}>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-8 text-warning text-center'>
                <span style={{ fontSize: "50px" }}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</span>  
                <div style={{ fontSize: "25px", marginTop: "25px", color: "white" }}>Màn hình</div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                  <div className='screen'></div>

                </div>
                {this.renderHangGhe()}
              </div>
              <div className='col-4'>
                <div className='text-center' style={{ fontSize: "50px", color: "white", marginTop: "50px" }}>DANH SÁCH GHẾ BẠN CHỌN</div>
                <InfoBooking />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

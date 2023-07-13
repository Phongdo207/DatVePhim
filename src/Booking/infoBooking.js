import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actHuyGhe } from '../store/actions';

class InfoBooking extends Component {

    handlTongTien = () => {
        return this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat) => {
            return tongTien += gheDangDat.gia;
        },0);
    }
    render() {
        const { huyGhe } = this.props;
        return (
            <div>
                <div className='mt-5 text-white' style={{ fontSize: "20px" }}>
                    <button className='gheDuocChon'></button>
                    <span >Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button>
                    <span>Ghế đang đặt</span>
                    <br />
                    <button className='ghe ml-0'></button>
                    <span>Ghế chưa đặt</span>
                </div>

                <div className='mt-5'>
                    <table className="table" border="2">
                        <thead>
                            <tr style={{ color: "white", fontSize: "20px" }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Huỷ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index} className='text-warning'>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia}</td>
                                    <td><button onClick={() => { huyGhe(gheDangDat.soGhe) }} className='btn btn-danger'>Huỷ</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='text-light'>
                                <td>Tổng tiền</td>
                                <td>{this.handlTongTien()}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.userReducer.danhSachGheDangDat,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (soGhe) => {
            dispatch(actHuyGhe(soGhe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoBooking);
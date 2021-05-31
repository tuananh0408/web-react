import React from 'react'
import './Navbar.css'
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import DonutSmallOutlinedIcon from '@material-ui/icons/DonutSmallOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import SignalCellularAltOutlinedIcon from '@material-ui/icons/SignalCellularAltOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import EmojiTransportationOutlinedIcon from '@material-ui/icons/EmojiTransportationOutlined';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import MoneyOutlinedIcon from '@material-ui/icons/MoneyOutlined';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-top">
                <div className="navbar-icon">
                   <AppsOutlinedIcon />
                </div>
                <div className="navbar-logo">
                    <img src="../img/logo.svg" className="logo-img"></img>
                </div>
            </div>
            <div className="navbar-menu">
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <DonutSmallOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Tổng quan</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <MoneyOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Tiền mặt</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <AttachMoneyOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Tiền gửi </p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <CardTravelOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Mua hàng</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <ShoppingCartOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Bán hàng</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <AssignmentIndOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Quản lí hóa đơn</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <LocationCityOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Kho</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <RestaurantMenuOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Công cụ dụng cụ</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <EmojiTransportationOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Tài sản cố định</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <AccountBalanceOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Thuế</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <LoyaltyOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Gía thành</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <AssignmentOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Tổng hợp</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <MonetizationOnOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Ngân sách</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <SignalCellularAltOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Báo cáo</p>
                   </div>
               </div>
               <div className="navbar-item">
                   <div className="navbar-icons">
                       <TrendingUpOutlinedIcon />
                   </div>
                   <div className="navbar-texts">
                       <p>Phân tích tài chính</p>
                   </div>
               </div>
            </div>
        </div>

    )
}

export default Navbar

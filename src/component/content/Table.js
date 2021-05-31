import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './Table.css'

const columns = [
  { field: 'id', headerName: 'Mã nhân viên', width: 170 },
  { field: 'Tên_nhân_viên', headerName: 'Tên Nhân Viên', width: 180 },
  { field: 'giới_tính', headerName: 'Giới Tính', width: 140 },
  { field: 'ngày_sinh', headerName: 'Ngày sinh', width: 140 },
  { field: 'số_cmnd', headerName: 'Số CMND', width: 140 },
  { field: 'chức_danh', headerName: 'Chức danh', width: 140 },
  { field: 'Tên_đơn_vị', headerName: 'Tên Đơn Vị', width: 140 },
  { field: 'Số_tài khoản', headerName: 'Số Tài Khoản', width: 140 },
  { field: 'Tên_ngân_hàng', headerName: 'Tên ngân hàng', width: 130 },
  { field: 'chi_nhánh_Ck_ngân_hàng', headerName: 'chi nhánh Ck ngân hàng', width: 180 },
  { field: 'chức_năng', headerName: 'chức năng', width: 130 },
  
];

const rows = [
  { id: 1, Tên_nhân_viên: 'Nguyễn Văn Liệt', giới_tính: 'nNam', ngày_sinh: '31/12/1999',số_cmnd: '001200046752',chức_danh: 'công nhân',Tên_đơn_vị: 'vận hành tại hà nội',chức_năng:'sửa ' },
  { id: 2, Tên_nhân_viên: 'Lưu Thủy Bình', giới_tính: 'Nam', ngày_sinh: '31/12/1999',số_cmnd: '',chức_danh: 'công nhân',Tên_đơn_vị: 'LR Tủ',chức_năng:'sửa ' },
  { id: 3, Tên_nhân_viên: 'Nguyễn Văn Vũ', giới_tính: 'Nam', ngày_sinh: '31/12/1999',số_cmnd: '001200046752',chức_danh: '',Tên_đơn_vị: 'vận hành tại hà nội',chức_năng:'sửa ' },
  { id: 4, Tên_nhân_viên: 'Đinh Văn Long', giới_tính: 'Nam', ngày_sinh: '31/12/1999',số_cmnd: '',chức_danh: '',Tên_đơn_vị: 'LR Tủ',chức_năng:'sửa ' },
  { id: 5, Tên_nhân_viên: 'Trương Việt Cân', giới_tính: 'Nam', ngày_sinh: '31/12/1999',số_cmnd: '001200046752',chức_danh: 'trưởng ca',Tên_đơn_vị: '',chức_năng:'sửa ' },
  { id: 6, Tên_nhân_viên: 'Nguyễn Thị Thanh Hồng', giới_tính: 'Nũ', ngày_sinh: '31/12/1999',số_cmnd: '',chức_danh: 'công nhân',Tên_đơn_vị: 'vận hành tại hà nội',chức_năng:'sửa ' },
  { id: 7, Tên_nhân_viên: 'Huỳnh Thị Lén', giới_tính: 'Nữ', ngày_sinh: '31/12/1999',số_cmnd: '',chức_danh: '',Tên_đơn_vị: 'LR Tủ' ,chức_năng:'sửa '},
  { id: 8, Tên_nhân_viên: 'Nguyễn Thị Sang', giới_tính: 'Nữ', ngày_sinh: '31/12/1999',số_cmnd: '',chức_danh: 'trưởng ca',Tên_đơn_vị: 'LR Tủ' ,chức_năng:'sửa '},
  { id: 10, Tên_nhân_viên: 'Kiên saquane', giới_tính: 'Nam', ngày_sinh: '31/12/1999',số_cmnd: '',chức_danh: 'công nhân',Tên_đơn_vị: 'LR Tủ' ,chức_năng:'sửa '},
  { id: 11, Tên_nhân_viên: 'Phan Thị Thu Hải', giới_tính: 'Nữ', ngày_sinh: '31/12/1999',số_cmnd: '001200046752',chức_danh: '',Tên_đơn_vị: '',chức_năng:'sửa ' },
  { id: 12, Tên_nhân_viên: 'Phan Thị Thu Hải', giới_tính: 'Nữ', ngày_sinh: '31/12/1999',số_cmnd: '001200046752',chức_danh: 'công nhân',Tên_đơn_vị: 'vận hành tại hà nội' ,chức_năng:'sửa '},
  { id: 13, Tên_nhân_viên: 'Trần Thái Cường', giới_tính: 'Nam', ngày_sinh: '31/12/1999',số_cmnd: '',chức_danh: '',Tên_đơn_vị: '',chức_năng:'sửa ' },
  { id: 14, Tên_nhân_viên: 'Ngô Quang Khanh', giới_tính: 'Nam', ngày_sinh: '31/12/1999',số_cmnd: '',chức_danh: 'trưởng ca',Tên_đơn_vị: 'LR Tủ' ,chức_năng:'sửa '},
  { id: 17, Tên_nhân_viên: 'Trần Thị Phương Linh', giới_tính: 'Nữ', ngày_sinh: '31/12/1999',số_cmnd: '',chức_danh: '',Tên_đơn_vị: 'vận hành tại hà nội' ,chức_năng:'sửa '},
  { id: 18, Tên_nhân_viên: 'Lâm Thị Thu Thảo', giới_tính: 'Nữ', ngày_sinh: '31/12/1999',số_cmnd: '',chức_danh: '',Tên_đơn_vị: '' ,chức_năng:'sửa '},
  { id: 19, Tên_nhân_viên: 'THạch Thị Mỹ Liên', giới_tính: 'Nữ', ngày_sinh: '31/12/1999',số_cmnd: '001200046752',chức_danh: 'công nhân',Tên_đơn_vị: 'vận hành tại hà nội',chức_năng:'sửa ' },
  { id: 20, Tên_nhân_viên: 'Nguyễ Thị Ngọc Phúc', giới_tính: 'Nữ', ngày_sinh: '31/12/1999',số_cmnd: '',chức_danh: 'trưởng ca',Tên_đơn_vị: '',chức_năng:'sửa ' },
  { id: 21, Tên_nhân_viên: 'Nguyễn Thị Hồng Ân', giới_tính: 'Nữ', ngày_sinh: '31/12/1999',số_cmnd: '001200046752',chức_danh: '',Tên_đơn_vị: 'vận hành tại hà nội' ,chức_năng:'sửa '},
  
];

export default function DataTable() {
  return (
    <div className="table">
      <DataGrid rows={rows} columns={columns} pageSize={11} checkboxSelection />
    </div>
  );
}

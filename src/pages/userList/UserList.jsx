import "./userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline,  EditOutlined} from "@mui/icons-material";
import { userRows } from "../../dummyData";
import {Link} from "react-router-dom";
//import { useState } from "react";

export default function userList() {
    
    // const ItemList = () => {
    //     const [data, setData] = useState([userRows]);
    // }
    // const [data, setData] = useState(userRows)
    
    //deleting record
    
    //handle delete
    const handleDelete = (id) => {
        //setData(userRows.filter((item) =>item.id !== id));
    }

    // const handleDelete = (id) => {
    //     userRows.filter((item) =>item.id !== id);
    // }
    //user grid table setup
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 250, renderCell: (params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        } },
        {
          field: 'email',
          headerName: 'Email',
          width: 300,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 200, 
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <EditOutlined className="userListEdit"/>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
          },
      ];
      
      

    return (
        <div className="userList">
            <DataGrid
            rows={userRows} //pass data instead of userRows
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>
    )
}

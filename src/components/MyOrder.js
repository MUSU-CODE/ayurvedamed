import React, { useEffect, useState } from 'react'
import OrderService from '../services/OrderService';
export default function MyOrder() {
  const [orders,setOrders]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    if(!auth) 
      return navigate("/signin",{replace:true});
    OrderService.getAllOrder(auth.userId).then(res=>setOrders(res.data)).catch(e=>alert(e));
  },[orders])
  return (
    <div className="container">
      <h2 className="text-center"> My Order </h2>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Id </th>
          <th> Order Date </th>
          <th> Dispatch Date </th>
          <th> Total Cost </th>
          <th> Medicine Ids </th>
        </thead>
        <tbody>
          {orders.map((v)=><tr key={v.orderId}>
            <td>{v.orderId}</td>
            <td>{v.orderDate}</td>
            <td>{v.dispatchDate}</td>
            <td>{v.totalCost}</td>
            <td>{v.medicineList[0].medicineId}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

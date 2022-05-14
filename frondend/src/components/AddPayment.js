import React, { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';

export default function AddPayment(){

  

    const [patient_id, setPatientID] = useState("");
    const [patient_name, setName] = useState("");
    const [patient_nic, setNic] = useState("");
    const [p_num, setNo] = useState("");
    const [amount, setAmount] = useState("");
    const [pay_method, setMethod] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    

    function sendData(e){
      e.preventDefault();
      

      const newPayment ={
        patient_id,
        patient_name,
        patient_nic,
        p_num,
        amount,
        pay_method,
        date,
        time
      }

      
       axios.post("http://localhost:8070/payment/add",newPayment).then(()=>{
        swal({

          title: "Success",
  
          text: "Payment Delete Successfully!",
  
          icon: "success",
  
          button: "OK"
  
        });

       }).catch((err)=>{
          alert(err)
       })
       window.location.href="/"; /*window.location.replace('/');*/

    }
    

    return(
      
      <div>

      <div className="fun">

      {/*<span>Payment Management</span>*/}

      </div>
      
       
       <div className="add_pay">
         
           <form onSubmit={sendData}> 
           <center><h1>ADD PAYMENT</h1></center>

              <div className="kl-0">
                  <label for="patient_id" className="form-label">Bill ID</label>
                  <input type="text" className="form-control" id="patient_id" placeholder="Enter Bill ID" required
                  onChange={(e)=>{
                    setPatientID(e.target.value);
                  }}/>
              </div>
              
              <div className="kl-1">
                  <label for="patient_name" className="form-label">Customer Name</label>
                  <input type="text" className="form-control" id="patient_name" placeholder="Enter Customer Name" required
                  onChange={(e)=>{
                    setName(e.target.value);
                  }}/>
              </div>

              <div className="kl-2">
                  <label for="patient_nic" className="form-label">Customer NIC</label>
                  <input type="text" className="form-control" id="patient_nic" oninvalid="this.setCustomValidity('Please Enter Your NIC')" placeholder="Enter Customer NIC" maxLength="10" pattern="[0-9]{9}[v]{1}" required
                  onChange={(e)=>{
                    setNic(e.target.value);
                  }}/>
              </div>

              <div className="kl-3">
                  <label for="p_num" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="p_num" oninvalid="this.setCustomValidity('Please Enter Your Number')" placeholder="Enter Phone Number" maxLength="10" pattern="[0-9]{3}[0-9]{7}" required
                  onChange={(e)=>{
                    setNo(e.target.value);
                  }}/>
              </div>

              <div className="kl-4">
                  <label for="amount" className="form-label">Amount (Rs :)</label>
                  <input type="text" className="form-control"  oninvalid="this.setCustomValidity('Please Enter Amount')"id="amount" placeholder="Enter Amount" required
                  onChange={(e)=>{
                    setAmount(e.target.value);
                  }}/>
              </div>

              <div className="kl-5">
                  <label for="pay_method" className="form-label">Payment Method</label>
                  <input type="text" className="form-control" id="pay_method"  oninvalid="this.setCustomValidity('Please Enter Method')" placeholder="Enter Payment Method" required
                  onChange={(e)=>{
                    setMethod(e.target.value);
                  }}/>
              </div>

              <div className="kl-6">
                  <label for="date" className="form-label">Date</label>
                  <input type="text" className="form-control" id="date" placeholder="Enter Date" required
                  onChange={(e)=>{
                    setDate(e.target.value);
                  }}/>
              </div>

              <div className="kl-7">
                  <label for="time" className="form-label">Time</label>
                  <input type="text" className="form-control" id="time" placeholder="Enter Time" required
                  onChange={(e)=>{
                    setTime(e.target.value);
                  }}/>
              </div>
              <br></br>
                  <button type="submit" className="btn0 btn-primary">Add Payment</button><br></br>
           </form>          
           <button type="submit" className="btn1 btn-primary">Cancel</button>
           
       </div>
      
       </div> 
      
  )

}
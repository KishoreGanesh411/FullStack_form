// import React,{useState,useEffect }from "react";
// // import Table from "./Table";
// import "./Form.css"
// import { JSON } from "express";

// // geting the value
// const getDatafromLS=()=>{
// const data=localStorage.getItem('forms');
// if (data){
//   return JSON.parse(data);
// }
// else{
//   return[]
// }
// }

// const Form = ()=>  {
//   // main Arry Object sTATE
//   const [forms, setforms] = useState([getDatafromLS()]);
//   // input Fields

//   const[Name,setFullName]=useState('');
//   const[email,setEmail]=useState('');
//   const [Phone,setPhone] = useState('');
//   const [website, setWebsite] = useState('');
//   const [contactName, setContactName] = useState('');

//   const [contactPhone, setContactPhone] = useState('');

//   const [contactEmail, setContactEmail] = useState('');
//   const[notes, setNotes] = useState('');
//   const [type, setType] = useState('');;
//   const [category, setCategory] = useState('');

//   const [commissionPercentage, setCommissionPercentage] = useState('');
//   const [date, setDate] = useState('');
//   // const [paymentOptions, setPaymentOptions] = useState('');
  
//   // from submit
//   const handleAddFormSubmit=(e)=>{
//     e.preventDefault();
    
//     // creeating an objet
//     let formm={ 
//       Name,
//       email,
//       Phone,
//       website,
//       contactName,
//       contactEmail,
//       contactPhone,
//       notes,
//       type,
//       category,
//       commissionPercentage,
//       date,
//       // paymentOptions,  
//     }
//     setforms([...forms,formm]);
//     setFullName('');
//     setEmail('');
//     setPhone('');
//     setWebsite('');
//     setContactName('');
//     setContactEmail('');
//     setContactPhone('');
//     setNotes('');
//     setType('');
//     setCategory('');
//     setCommissionPercentage('');
//     setDate('');
//   }
//   // Save Local Storage
//   useEffect(()=>{
//     localStorage.setItem('forms',JSON.stringify(forms));
//       },[forms])

//     return (
//       <form className="Business Form container-sm">
//         <div className="mx-auto col-lg-6"></div>


//         <div className=" card-header shadow p-3 mb-5 bg-body-tertiary rounded bi bi-body-text text-aling-center col-sm-5 card mx-auto col-10 col-md-5 col-lg-6  ">

//           <h1>New Business</h1>


//           <div className="col-lg-6 container-lg  "
//           onSubmit={handleAddFormSubmit}>


//             <div>
//               <label for="Name">FullName</label>
//               <input type="Name" className="form-control" id="Name" name="Name" required 
//               onChange={(e)=>setFullName(e.target.value)} value={Name}/>
//             </div>

//             <div>
//               <label for="email">Email</label>
//               <input type="email" className="form-control" id="email" name="email" required 
//               onChange={(e)=>setEmail(e.target.value)} value={email}/>
//             </div>

//             <div>
//               <label for="phone">Phone</label>
//               <input type="tel" className="form-control" id="phone" name="phone" max={10} required 
//               onChange={(e)=>setPhone(e.target.value)} value={Phone}/>
//             </div>

//             <div>
//               <label for="website">Website</label>
//               <input type="text" className="form-control" id="website" name="website" required 
//               onChange={(e)=>setWebsite(e.target.value)} value={website}/>
//             </div>

//             <div>
//               <label for="contactName">ContactName</label>
//               <input type="text" className="form-control" id="contactName" name="contactName" required 
//               onChange={(e)=>setContactName(e.target.value)} value={contactName}/>
//             </div>


//             <div>
//               <label for="contactPhone">ContactPhone</label>
//               <input type="tel" className="form-control" id="contactPhone" name="contactPhone" required
//               onChange={(e)=>setContactPhone(e.target.value)} value={contactPhone}/>
//             </div>

//             <div>
//               <label for="contactEmail">ContactEmail</label>
//               <input type="email" className="form-control" id="contactEmail" name="contactEmail" required 
//               onChange={(e)=>setContactEmail(e.target.value)} value={contactEmail}/>
//             </div>

//             <div className="col-md-">
//               <label for="notes">Notes</label>
//               <textarea className="form-control" name="notes"
//               onChange={(e)=>setNotes(e.target.value)} value={notes}></textarea>
//             </div>

//             <div >

//               <label for="type">Type</label>
//               <select id="type" name="type" class="form-select" aria-label="Default select example">
//                 <option selected>select Your's</option>
//                 <option value="Enterprise">Enterprise</option>
//                 <option value="Entrepreneure">Entrepreneur</option>
//                 onChange={(e)=>setType(e.target.value)} value={type}
//               </select>

//             </div>

//             <div>
//               <label for="category">Category</label>
//               <select class="form-select" id="category" name="category" ria-label="Default select example">
//                 <option selected>Open this select menu</option>
//                 <option value="Electronics">Electronics</option>
//                 <option value="Digital">Digital</option>
//                 <option value="TexTile">TexTile</option>
//                 onChange={(e)=>setCategory(e.target.value)} value={category}
//               </select>

//             </div>



//             <div>
//               <label for="commissionPercentage">CommissionPercentage</label>
//               <input type="number" className="form-control" id="commissionPercentage" name="commissionPercentage" min="0" max="100" required 
//               onChange={(e)=>setCommissionPercentage(e.target.value)} value={commissionPercentage}/>
//             </div>


//             <div>
//               <label>Date</label>
//               <input className="form-control" type="date" id="date" 
//               onChange={(e)=>setDate(e.target.value)} value={date}/>
//             </div>


//             <div>
//               <label for="logo">Logo</label>
//               <input className="form-control" type="file" id="logo" name="logo" />
//             </div>

//             <div class="form-check">
//               <label for="critical">CriticalAccount</label>
//               <input type="checkbox" id="critical" name="critical" />
          
//             </div>

//             <div >
//               <label classNam for="paymentOptions">PaymentOptions</label>
//               <input type="checkbox" id="paymentOptions" name="paymentOptions" value="creditCard" />Credit Card
//               <input type="checkbox" id="paymentOptions" name="paymentOptions" value="bankTransfer" />Bank Transfer
//               <input type="checkbox" id="paymentOptions" name="paymentOptions" value="Cash on Delievery" />Cash on Delievery
//               {/* onChange={(e)=>setPaymentOptions(e.target.value)} value={paymentOptions} */}
//             </div>

//             <div className="bdarktn btn-">
//               <button type="Submit">Submit</button>  <button type="Reset">Reaset</button>
//             </div>

//             <div className="viw-container">
//             {forms.length < 1 &&<div>No Form Data are add yet</div>}
//           </div>

//           </div>
//           </div>
         


//         {/* <Table /> */}
//       </form>
//     )
//   }
  


// export default Form

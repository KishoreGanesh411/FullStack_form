import React,{useState}from "react";
import "./Form.css"
// import { colors } from "@material-ui/core";
import Table from "./Table"
import  Axios  from "axios";



const Form = ({onSubmit})=>  {

  const [formData, setFormData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
  
    const {
      Name,
      email,
      phone,
      website,
      contactName,
      contactPhone,
      contactEmail,
      notes,
      type,
      category,
      commissionPercentage,
      date,
      // paymentOptions,
    } = event.target;
  
    // Create a new object with the form data
    const newData = {
      Name: Name.value,
      email: email.value,
      phone: phone.value,
      website: website.value,
      contactName: contactName.value,
      contactPhone: contactPhone.value,
      contactEmail: contactEmail.value,
      notes: notes.value,
      type: type.value,
      category: category.value,
      commissionPercentage: commissionPercentage.value,
      date: date.value,
      // paymentOptions: {
      //   creditCard: paymentOptions[0].checked,
      //   bankTransfer: paymentOptions[1].checked,
      //   cashOnDelivery: paymentOptions[2].checked,
      // },
    };
  
    // Update the formData state with the new form data
    setFormData([...formData, newData]);


  //   var formData = ({first_name:firstname,last_name:lastname,user_name:username, email:email,password:password});

  //   request.post({url:'http://localhost:8081/register', JSON: formData}, function(err, connection, body) {
  
  // exports.Register = function(req, res) {
  //     res.header("Access-Control-Allow-Origin", "*");
  //     console.log("Request data " +JSON.stringify(req));

    Axios.post('http://localhost:8000//form',{Name,email,phone,website,contactName})
    .then((res)=>console.log(res))
    .catch(err => console.log(err)) 
 
 
 
  };


  
  
    return (
      



<body>

<div classNam="container-fluid bg-dark text-white py-3">
<header class="text-center text-white">
  <h1 className="display-10">  welcome To New Business

  </h1>
</header>
</div>


        <section className=" rounded  container my-4 bg-dark w-50 text-light p-20 border border-4"  
        onSubmit={handleSubmit} >

           
           

           <form class="row g-3 " >
           <div class="col-md-5">
            <label for="Name">FullName</label>
              <input type="Name" className="form-control" id="Name" name="Name" required />
            </div>

            <div className="col-md-5">
              <label for="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" required/>
            </div>

            <div className="col-md-3">
              <label for="phone">Phone</label>
              <input type="tel" className="form-control" id="phone" name="phone" max={10} required/>
            </div>

            <div className="col-md-5">
              <label for="website">Website</label>
              <input type="text" className="form-control" id="website" name="website" required 
              />
            </div>

            <div className="col-md-5">
              <label for="contactName">ContactName</label>
              <input type="text" className="form-control" id="contactName" name="contactName" required 
              />
            </div>


            <div className="col-md-5">
              <label for="contactPhone">ContactPhone</label>
              <input type="tel" className="form-control" id="contactPhone" name="contactPhone" reqinstauired
              />
            </div>

            <div className="col-md-4">
              <label for="contactEmail">ContactEmail</label>
              <input type="email" className="form-control" id="contactEmail" name="contactEmail" required 
             />
            </div>




            <div className="col-md-5" >
              <label for="type">Type</label>
              <select id="type" name="type" class="form-select" aria-label="Default select example">
                <option selected>select Your's</option>
                <option value="Enterprise">Enterprise</option>
                <option value="Entrepreneure">Entrepreneur</option>
                
              </select>

            </div>

            <div className="col-md-3 btn btn-secondary dropdown-toggle">
              <label for="category">Category</label>
              <select class="form-select" id="category" name="category" ria-label="Default select example">
                <option selected>Open</option>
                <option value="Electronics">Electronics</option>
                <option value="Digital">Digital</option>
                <option value="TexTile">TexTile</option>
                
              </select>

            </div>



            <div className="col-md-2">
              <label for="commissionPercentage">Commission %</label>
              <input type="number" className="form-control" id="commissionPercentage" name="commissionPercentage" min="0" max="100" required 
              />
            </div>


            <div className="col-md-3">
              <label>Date</label>
              <input className="form-control" type="date" id="date" 
             />
            </div>


            <div className="col-md-5">
              <label for="logo">Logo</label>
              <input className="form-control" type="file" id="logo" name="logo" />
            </div>

            <div class="form-check">
              <label for="critical">CriticalAccount</label>
              <input type="checkbox" id="critical" name="critical" />
          
            </div>

            <div className="col-rw-3 form-check ">
              <label classNam for="paymentOptions">   PaymentOptions  </label>
              <input type="radio" id="paymentOptions" name="paymentOptions[0]" value="creditCard" />  Credit Card
              <input type="radio" id="paymentOptions" name="paymentOptions[1]" value="bankTransfer" />Bank Transfer
              <input type="radio" id="paymentOptions" name="paymentOptions[]" value="Cash on Delievery" />Cash on Delievery
            </div>



            <div className="col-md-">
              <label for="notes">Notes</label>
              <textarea className="form-control" name="notes"
              ></textarea>
            </div>


            

  <div class="text-center"> 
    <button type="submit" class="btn btn-primary">Submit</button>  <button type="reset" class="btn btn-primary">reset</button>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>

            
            

          </form>
           
</section>

 <div>
       <Table formData={formData} />
       </div>
       

          </body>
       
      
    )
  }
  


export default Form



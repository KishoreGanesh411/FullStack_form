// import"./Form.css"
import React from "react";
// import "./Form.css"

const Table = ({formData}) => {


        return(
			<React.Fragment>
<div className="mx-auto d-flex justify-content-center rounded" >
<table class="table table-striped table table-bordered table table-hover table-dark ">
<thead>
   	<tr>
	   <th>S.no</th>
   		<th>Name</th>
   		<th>Email</th>
   		<th>Phone</th> 	
   		<th>Website</th>
   		<th>Contact Name</th>
   		<th>Contact Email</th>
   		<th>Contact Phone</th>
   		<th>Notes</th>
   		<th>Type</th>
        <th>Category</th>
        <th>Percentage</th>
        <th>Date</th>
        <th>Payment Option</th>    
   	</tr>
   	</thead>
	<tbody>
	{formData.map((data, index) => (
            <tr key={index}>
				<td> </td>
              <td>{data.Name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
			  <td>{data.website}</td>
			  <td>{data.contactName}</td>
			  <td>{data.contactEmail}</td>
			  <td>{data.contactPhone}</td>
			  <td>{data.notes}</td>
			  <td>{data.type}</td>
			  <td>{data.category}</td>
			  <td>{data.commissionPercentage}</td>
			  <td>{data.date}</td>
			  <td>{data.paymentOptions}</td>
		
                <button>Delete</button>

			  </tr>
	)
	)
}
	
	
	</tbody>

</table>
</div>
</React.Fragment>
        )
    }
export default Table;



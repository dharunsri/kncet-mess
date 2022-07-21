import './AllDetails.css';
import { useNavigate } from 'react-router-dom';
function loadDoc() {
    var xhr = new XMLHttpRequest();
        
    // What to do when response is ready  
    xhr.onreadystatechange = () => {
        
             
               //alert( xhr.responseText);
            
        
    }
    xhr.open('GET', "http://localhost/data.php");
    
    // Send the request
    xhr.send();
   
  }
loadDoc();
const data = [
    {mail_id: "test@gmail.com", password:"12345", ordered_date: "20 JAN, 2022", veg_token: 1, non_veg_token: 3, total_tokens: 4, amount: 270}
]

function AllDetails() {
    const navigate = useNavigate();
    const qrPage = () => {
        navigate  ('/mess-token-qr');
    }

    return(
        <div className="details">
            <table>
                <tr>
                    <th>Mail ID</th>
                    <th>Password</th>
                    <th>Ordered Date</th>
                    <th>Veg Token</th>
                    <th>Non-Veg Token</th>
                    <th>Total Tokens</th>
                    <th>Amount Paid</th>
                </tr>
                {data.map((val,key) => {
                    return(
                        <tr key={key}>
                            <td>{val.mail_id}</td>
                            <td>{val.password}</td>
                            <td>{val.ordered_date}</td>
                            <td>{val.veg_token}</td>
                            <td>{val.non_veg_token}</td>
                            <td>{val.total_tokens}</td>
                            <td>{val.amount}</td>
                        </tr>
                    )
                })}
            </table>

            <button onClick={qrPage}>GO</button>

        </div>
    )
}

export default AllDetails;
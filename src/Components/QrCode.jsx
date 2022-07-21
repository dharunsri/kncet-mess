import React,{useState} from "react";
import { Fab, TextareaAutosize} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {QrReader} from "react-qr-reader";
var temp="";
function generateDate(num){
    console.log(num);
    var someDate = new Date();
    var numberOfDaysToAdd = num;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    result = new Date(result);

    var dd = String(result.getDate());
    var yyyy = result.getFullYear();
    var month = result.toLocaleString('en-us', { month: 'long' });
    var today = dd +" "+ month + "," + yyyy; 
    return today;
}
var amt = window.location.search.substring(1).split("|");

function check(s){

    var formData = new FormData(); 
    formData.append("id1",s);
    formData.append("date",generateDate(0))
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function() {
        //alert(xmlHttp.responseText);
    }
    xmlHttp.open("POST", "http://127.0.0.1:5000/admin",true); 
     xmlHttp.send(formData); 
  
}
    
const handleScan = () => {
    window.location.replace("http://localhost/data.php");
}

function QrCode() {

    const [data, setData] = useState('No result');


    const handleError = err => {
        console.error(err)
    }

    return (
        <div>
            <Link to={handleScan} onClick={handleScan}>
                <Fab style={{marginRight:10}} color="primary" >
                    <ArrowBack/>
                </Fab>
            </Link>

            <span>Scan your token Qr Code Here</span>

            <center>
                <div style={{marginTop:30}}>
                    <QrReader 
                        onResult={(result, error) => {
                            if(!!result){
                               var some=result?.text;
                                setData(some.split("|")[2]+"-VEG   "+some.split("|")[3]+"- NON-VEG   ");
                                if(some!=temp){
                                check(some);
                                temp=some;
                            }

                                
                            }
                            if(!!error){
                                console.info(error);
                            }
                        }}
                    />
                </div>
            </center>

            <TextareaAutosize 
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax = {4}
                defaultValue = {data}
                value = {data}
            />

        </div>
    );
}

export default QrCode;
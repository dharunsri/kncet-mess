import React,{useState} from "react";
import { Fab, TextareaAutosize} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {QrReader} from "react-qr-reader";
var temp="";
function check(s){

    var formData = new FormData(); 
    formData.append("id1",s);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200)
        {
            alert(xmlHttp.responseText);
        }
    }
    xmlHttp.open("post", "http://127.0.0.1:5000/admin"); 
    xmlHttp.send(formData); 
}

function QrCode() {

    const [data, setData] = useState('No result');
    
    const handleScan = (data1) => {
        if(data1){
            setData(data1)
        }
    }

    const handleError = err => {
        console.error(err)
    }

    return (
        <div>
            <Link to="/all-details">
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
                                setData(some);
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
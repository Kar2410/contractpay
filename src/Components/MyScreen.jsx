import React from 'react';
function MyScreeen(props) {


    const selectedDate= new Date(props.date).toDateString();
    return (
        <>

            <li className="clearfix">
                <div className="message-data align-right">
                    <span className=""><span>Contract End Date -</span> {selectedDate} </span>  &nbsp;
                    &nbsp;
                    <span className="message-data-name">Olia</span>
                    <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">
                   {props.paymsg}
                   <br></br>
                   <br></br>
                   <samp style={{fontSize:'40px'}}>₹ <span> {props.rupeeNew} </span></samp>
                </div>
            </li>
            


        </>
    )

}
export default MyScreeen;
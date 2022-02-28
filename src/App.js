import React, { useState } from "react";
import "./index.css";
import FriendScreen from "./Components/FriendScreen";
import MyScreeen from "./Components/MyScreen";

function App() {
  const [msg, setmsg] = useState("");
  const [newMsg, setnewMsg] = useState([]);
  const [amount, setamount] = useState("");
  const [Newamount, setNewamount] = useState([]);
  const [initialDate, setinitialDate] = useState("");
  const [dateArray, setdateArray] = useState([]);
  const [FriendBlance, setFriendBlance] = useState(0);
  const [MyBalance, setMyBalance] = useState(0);

  function Inputmsg(inputdata) {
    setmsg(inputdata.target.value);
  }

  function Inputamount(amountdata) {
    setamount(amountdata.target.value);
  }

  function inputdate(datedata) {
    setinitialDate(datedata.target.value);
  }

  function submit() {
    setnewMsg((olddata) => {
      return [...olddata, msg];
    });
    setmsg("");

    setNewamount((amount_olddata) => {
      return [...amount_olddata, amount];
    });

    setamount("");
    setFriendBlance(Number(FriendBlance) + Number(amount));
    setMyBalance(Number(MyBalance) + Number(amount));

    setdateArray((date_oldata) => {
      return [...date_oldata, initialDate];
    });
    setinitialDate("");
  }

  if (new Date(initialDate).getTime() <= new Date().getTime()) {
    alert("Please select valid contract date..!!");
    setinitialDate("");
  }

function DeletePayment(id){
      setnewMsg((olddata)=>{
        return olddata.filter((arrEle,index)=>{
          return index !==id;
        })
      })
}

  return (
    <>
      <div className="container clearfix">
        <div className="chat" style={{ marginLeft: "600px" }}>
          <div className="chat-header clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
              alt="avatar"
            />

            <div className="chat-about">
              <div className="chat-with">
                Friend's Wallet &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Balance
                Amount :
              </div>

              <div
                className="chat-with"
                style={{
                  marginLeft: "280px",
                  marginTop: "-19px",
                  fontSize: "28px",
                }}
              >
                {" "}
                ₹ {FriendBlance}
              </div>
              <div className="chat-num-messages"></div>
            </div>
            <i className="fa fa-star"></i>
          </div>

          <div className="chat-history">
            <ul>
              {newMsg.map((val, index) => {
                const rupee = Newamount[index];
                const finalDate = dateArray[index];
                return (
                  <FriendScreen
                    date={finalDate}
                    paymsg={val}
                    key={index}
                    id={index}
                    rupeeNew={rupee}
                    passFun={DeletePayment}
                  ></FriendScreen>
                );
              })}
            </ul>
          </div>

          <div className="chat-message clearfix">
            <input
              type="date"
              placeholder="date-month-year"
              value={initialDate}
              onChange={inputdate}
            />
            <textarea
              name="message-to-send"
              placeholder="Type your message"
              rows="3"
            ></textarea>
            <textarea
              type="number"
              style={{ marginLeft: "10px" }}
              name="message-to-send"
              placeholder="Enter the amount"
              rows="3"
            ></textarea>
            <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i className="fa fa-file-image-o"></i>
            <button>Send</button>
          </div>
        </div>

        <div className="chat" style={{ marginTop: "-661.5px" }}>
          <div className="chat-header clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
              alt="avatar"
            />

            <div className="chat-about">
              <div className="chat-with">
                My Wallet &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Balance Amount :
              </div>

              <div
                className="chat-with"
                style={{
                  marginLeft: "280px",
                  marginTop: "-19px",
                  fontSize: "28px",
                }}
              >
                {" "}
                ₹ {MyBalance}
              </div>

              <div className="chat-num-messages"></div>
            </div>
            <i className="fa fa-star"></i>
          </div>

          <div className="chat-history">
            <ul>
              {newMsg.map((val, index) => {
                const rupee = Newamount[index];
                const finalDate = dateArray[index];

                return (
                  <MyScreeen
                    date={finalDate}
                    paymsg={val}
                    key={index}
                    id={index}
                    rupeeNew={rupee}
                    passFun={DeletePayment}
                  ></MyScreeen>
                );
              })}
            </ul>
          </div>

          <div className="chat-message clearfix">
            <input
              type="date"
              placeholder="date-month-year"
              value={initialDate}
              onChange={inputdate}
            />
            <textarea
              name="message-to-send"
              placeholder="Type your message"
              rows="3"
              value={msg}
              onChange={Inputmsg}
            ></textarea>
            <textarea
              type="number"
              style={{ marginLeft: "10px" }}
              name="message-to-send"
              placeholder="Enter the amount"
              rows="3"
              value={amount}
              onChange={Inputamount}
            ></textarea>
            <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i className="fa fa-file-image-o"></i>
            <button onClick={submit}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

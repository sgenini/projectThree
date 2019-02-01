import axios from "axios";

export default {
  //Singup New User
  createUser: function(userdata) {
    return axios.post("/user/signup", userdata);
  },
  //Login User
  loginUser: function(userdata) {
    return axios.post("/user/login", userdata);
  },
  //Sign Out Logged in User
  signOutUser: function(){
    return axios.get("/user/logout")
  },
  //Get Single Stock Data
  singleStock: function(symbol){
    return axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/batch?types=quote,news,chart&range=1m&last=10`)
  },
  alphaVantageCall: function(){
    return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=SK4M0EMARF3A00VS`)
  },
};

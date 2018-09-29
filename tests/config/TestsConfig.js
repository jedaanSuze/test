var config = require('../../server/config/environment/index.js');
var env = config.env;

var TestsConfig = class {
   constructor(){
     this.prod_instance = "";
     this.dev_instance = "";
     this.local_instance = "instance=YJkMU_NDvJKz7d5Olfq1XEaRZE8qifDH5bKeiQ8DWWQ.eyJpbnN0YW5jZUlkIjoiYjA4OTgyZWMtNTk1ZS00MTQ4LWIyMmItMGE5MjQ0OWZlYzVlIiwiYXBwRGVmSWQiOiIxNTE1OWNiNC1lMDY0LTJkZTktMjdiNy1lNDY2YzczOWE2ZmMiLCJzaWduRGF0ZSI6IjIwMTgtMDQtMjNUMTI6MTQ6MTEuNjc4WiIsInVpZCI6ImExYTI0OGQ4LWExY2UtNDU3Ni1hZDIwLTAwMGUzNmNlZWE2OCIsInBlcm1pc3Npb25zIjoiT1dORVIiLCJpcEFuZFBvcnQiOiIzMS4xNjguNTIuMTk0LzU4MDEzIiwidmVuZG9yUHJvZHVjdElkIjpudWxsLCJkZW1vTW9kZSI6ZmFsc2UsInNpdGVPd25lcklkIjoiYTFhMjQ4ZDgtYTFjZS00NTc2LWFkMjAtMDAwZTM2Y2VlYTY4Iiwic2l0ZU1lbWJlcklkIjoiYTFhMjQ4ZDgtYTFjZS00NTc2LWFkMjAtMDAwZTM2Y2VlYTY4In0&compId=comp-123456&isSite=false";
     this.invalidInstance = "instance=demoSomething.eyJpbnN0YW5jZUlkIjoiYjA4OTgyZWMtNTk1ZS00MTQ4LWIyMmItMGE5MjQ0OWZlYzVlIiwiYXBwRGVmSWQiOiIxNTE1OWNiNC1lMDY0LTJkZTktMjdiNy1lNDY2YzczOWE2ZmMiLCJzaWduRGF0ZSI6IjIwMTgtMDQtMjNUMTI6MTQ6MTEuNjc4WiIsInVpZCI6ImExYTI0OGQ4LWExY2UtNDU3Ni1hZDIwLTAwMGUzNmNlZWE2OCIsInBlcm1pc3Npb25zIjoiT1dORVIiLCJpcEFuZFBvcnQiOiIzMS4xNjguNTIuMTk0LzU4MDEzIiwidmVuZG9yUHJvZHVjdElkIjpudWxsLCJkZW1vTW9kZSI6ZmFsc2UsInNpdGVPd25lcklkIjoiYTFhMjQ4ZDgtYTFjZS00NTc2LWFkMjAtMDAwZTM2Y2VlYTY4Iiwic2l0ZU1lbWJlcklkIjoiYTFhMjQ4ZDgtYTFjZS00NTc2LWFkMjAtMDAwZTM2Y2VlYTY4In0&compId=comp-123456&isSite=false";

     switch (env){
      case "local":
        this.instance = this.local_instance;
        this.hostName = "http://localhost:9001";
        break;
      case "development":
        this.instance =  this.dev_instance;
        this.hostName = "https://dev.appspot.com";
        break;
      case "production":
        this.instance = this.prod_instance;
        this.hostName = "https://prod.appspot.com";
        break;
    }
  }
  getHostName() {
    return this.hostName;
  }
  getInstance() {
    return this.instance;
  }
  getInvalidInstance(){
    return this.invalidInstance;
  }
};


module.exports = TestsConfig;



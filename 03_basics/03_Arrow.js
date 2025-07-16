const user = {
  userName: "shubham@12",
  price: 99,
  welcomeMessage : function() {
    console.log(`${this.userName} , Welcome to the application`);
    console.log(this);
    
  }
};

user.welcomeMessage()
user.userName = "shubham@123"
user.welcomeMessage()
console.log(this);

function chai1() {
    console.log(this);
}
chai1();

function chai2() {
    useName: "shubham@123",
    console.log(this);  
}
chai2();

function chai3() {
    userName: "shubham@123",
    console.log(this.userName);
}
chai3();


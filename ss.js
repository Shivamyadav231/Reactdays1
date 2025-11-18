const user={
    username:"shivam",
    price:999,

    welcomeMessage:function(){
        console.log(`$(this.username), welcome to cepialabs`)
    }

}
user.welcomeMessage
function chai (){
    console.log(this)
}
chai()
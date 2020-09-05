 function dis(val){ 
    document.getElementById("result").value+=val 
}          
function clr(){
    document.getElementById("result").value="";
}
function add(){
    document.getElementById("result").value+=' + ';
}
function minus(){
    document.getElementById("result").value+=' - ';
}
function multi(){
    document.getElementById("result").value+=' * ';
}
function division(){
    document.getElementById("result").value+=' / ';
}
function abso(){
    document.getElementById("result").value+='abs ';
}
function perc(){
    document.getElementById("result").value+=' % ';
}
function sqroot(){
    document.getElementById("result").value+='sqrt ';
}
function addi(a,b){
    return a+b;
}
function subt(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divisi(a,b){
    return a/b;
}
function perce(a,b){
    return (a/100)*b;
}
function absol(a){
    return Math.abs(a);
}
function root(a,b){
    return Math.sqrt(a);
}
function solve(){
    x=document.getElementById("result").value;
    z=x.split(" ");	
    if(z[0]=='abs'){
	z[1]=z[2]+z[3];
        res= absol(parseInt(z[1]));
    }
    else if(z[0]=='sqrt')
	res= root(parseInt(z[1]));
    else if(z.length==3){
        switch (z[1]){
            case '+':
                res= addi(parseInt(z[0]),parseInt(z[2]));
                break;
            case '-':
                res= subt(parseInt(z[0]),parseInt(z[2]));
                break;
            case '*':
                res= multiply(parseInt(z[0]),parseInt(z[2]));
                break;
            case '/':
                res= divisi(parseInt(z[0]),parseInt(z[2]));
                break;
            case '%':
                res= perce(parseInt(z[0]),parseInt(z[2]));
                break;
            default:
                res= 'ERROR';
        }
    }
    else
        res= 'ERROR';
    
    if(res=='ERROR')
    document.getElementById("result").value= res;
    else if(parseInt(res)==res)
        document.getElementById("result").value= parseInt(res);
    else
        document.getElementById("result").value= res.toFixed(3);
}
function name() {
  var n1 = document.forms["form"]["name"].value;
  var n = n1.charCodeAt(0);
  if (n1 == "") { 
        alert("Cannot take a number as starting letter in name");
    return "false";
  }
  if( n <='57' && n >='48') {
      alert("Cannot take a number as starting letter in name");
      return "false";
  }
  else{  
    return "true";
  }
}
function num() {

  var n1 = document.getElementById("num").value;

  if (isNaN(n1) || n1 < 1 || n1.length != 10) {
    alert("Has to be 10 digits, and no alphabets are allowed");
    return "false";
  } else {
    return "true";
  }
}
function email(){
    var emailid=document.form.email.value;
    atpos = emailid.indexOf("@");
    dotpos = emailid.lastIndexOf(".");
    if((atpos<1)||(dotpos-atpos<2)){
        alert("Has to have a ‘’@’ and “.” in the email url that is given as input.");
        document.form.email.focus();
        return false;
    }
    return true;
}
function result(){
    var result2=this.num();
    var result1=this.email();
    var result3=this.name();
    if(result1==true&&result2==true&&result3==true){
        document.getElementById("demo").innerHTML = " mentioned details are correct ";
    }
    else{
        document.getElementById("demo").innerHTML = " mentioned details are wrong ";
    }

}

function f(){
    var inpt=document.getElementById('palin').value;
   array = inpt.split("");
  let oput = array.reverse().join("");
  if (inpt == oput) {
    r=true;
  } else {
    alert("Entered string is not a palindrome");
    r=false;
  }
  if(r==true){
  document.getElementById("pal").innerHTML="Entered string is palindrome";
}
else{
 document.getElementById("pal").innerHTML="Entered string is not a palindrome";

}
}
function f1(){
  var string1=document.getElementById('ana1').value;
  var string2=document.getElementById('ana2').value;
  var string1=string1.split(" ").join('');
  var string1 = string1.split('');
  var string1 = string1.sort();
  var string1= string1.join('');
  var string2=string2.split('');
  var string2=string2.sort();
  var string2=string2.join('');
 var l2=string2.length;
  var l1=string1.length;
  var l1=parseInt(l1);
  var l2=parseInt(l2);
  var c=0;

  if(l1!=l2){
    return false;
  }
  else{
  for(let i=0;i<l1;i++){
    if(string1.charAt(i)==string2.charAt(i)){
      c=c+1;
    }
  }
  if(c==l1){
     rr=true;
  }
  else{
     rr=false;
  }
}
  if(rr==true){
    document.getElementById('ana').innerHTML="Entered string is a Anagram ";
  }
  else{
    document.getElementById('ana').innerHTML="Entered string is not a Anagram ";``
  }
}

function myfun() {
  var a=Math.floor(Math.random() * 1000);
  var b=Math.floor(Math.random() * 1000);

  document.getElementById("a").value = Math.floor(Math.random() * 1000);
  document.getElementById("b").value = Math.floor(Math.random() * 1000);
  var map1=new Map();
  map1.set("0","Human");
  map1.set("1","Cockroach");
  map1.set("2","NuclearBomb");

  var i=parseInt(a)%3;
  var j=parseInt(b)%3;

  if(i==j){
    return 1;
  }
  else if(i==1&&j==0||i==0&&j==1){
    return 2;
  }
  else if(i==1&&j==2||i==2&&j==1){
    return 3;
  }
  else if(i==0&&j==2||i==2&&j==0){
    return 4;
  }
}
function who(){
  var p=this.myfun();
  if(p==1){
    document.getElementById("res").innerHTML="TIE";
  }
  if(p==2){
    document.getElementById("res").innerHTML="HUMAN SURVIVES";
  }
  if(p==3){
    document.getElementById("res").innerHTML="COCKROACH SURVIVES";
  }
  if(p==4){
    document.getElementById("res").innerHTML="HUMAN DIES";
  }
}
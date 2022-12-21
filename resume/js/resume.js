function resume(){
    let firstname;
    firstname=document.getElementById("firstname").Value;
    console.log(firstname);
    let middlename;
    middlename=document.getElementById("middlename").value;
    console.log(middlename);
    let lastname;
    lastname=document.getElementById("lastname").value;
    console.log(lastname);
    document.getElementById("name").innerHTML.html=firstname+middlename+lastname;
}

function send() {
    no1 = document.getElementById("input1").value;
    no2 = document.getElementById("input2").value;

    localStorage.setItem("Number1" ,no1 );
    localStorage.setItem("Number2" ,no2);

    document.getElementById("Question").innerHTML = no1 + " + ";
    document.getElementById("Question").innerHTML = no2;
}
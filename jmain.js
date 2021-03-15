function onLoad_123() {
    var x = localStorage.getItem("Player 1");
    var y = localStorage.getItem("Player 2");
    
    var u = 0;
    var v = 0;
    
    document.getElementById("score1").innerHTML = u;
    document.getElementById("score2").innerHTML = v;
    
    document.getElementById("player1").innerHTML = x + " : ";
    document.getElementById("player2").innerHTML = y + " : ";
    
    document.getElementById("question_turn").innerHTML = "Question Turn - " + x;
    document.getElementById("answer_turn").innerHTML = "Answer Turn - " + y;
    
}


function send() {
    var w = document.getElementById("Number1").value;
    var q = document.getElementById("Number2").value;
    var multiplied_number = parseInt(w) * parseInt(q);

    localStorage.setItem("Number 1" , w);
    localStorage.setItem("Number 2" , q);
    localStorage.setItem("Multiplied number" , multiplied_number);

    var z = localStorage.getItem("Number 1");
    var c = localStorage.getItem("Number 2");
    var d = localStorage.getItem("Multiplied number");
    console.log(z);
    console.log(c);
    console.log(d);

    var question123 = "<h4> Q. " + z + " X " + c + "</h4> <br>"; 
    var input = "Answer. <input type = 'number' id = 'input_answer12345' placeholder = 'Enter the answer here' <br><br><br>";
    var button12345 = "<button type = 'submit' class = 'btn btn-primary' onclick = 'check_15()'>Check</button>"
    var output_123 = question123 + input + button12345;
    document.getElementById("output").innerHTML = output_123;

    document.getElementById("Number1").innerHTML = "";
    document.getElementById("Number2").innerHTML = "";
}

function ev(){
    // clear result text
    var res = document.getElementById('results')
    res.innerHTML = "Results:".bold();

    var currTime = document.getElementById("ctime").value;
    currTime = currTime.split(":");
    var currTimeConverted = parseInt(currTime[0]) * 60 + parseInt(currTime[1]);
    var symptomTime = document.getElementById("stime").value;
    symptomTime = symptomTime.split(":");
    var symptomTimeConverted = parseInt(symptomTime[0]) * 60 + parseInt(symptomTime[1]);
    
    // var currDate = document.getElementById("cdate").value;
    // currDate = currDate.split("-");
    // currMonth = currDate[1];
    // currDay = currDate[2];
    // var symptomDate = document.getElementById("sdate").value;
    // symptomDate = symptomDate.split("-");
    // symptomMonth = symptomDate[1];
    // symptomDay = symptomDate[2];
    // one day difference
    // if ((currDay - symptomDay == 1) && (currMonth == symptomMonth)){
    //     if (diffTime < 270){
    //         var para = document.createElement("p");
    //         var node = document.createTextNode("Patient can be eligible for tPA.");
    //         para.appendChild(node);
    //         var res = document.getElementById('results')
    //         res.appendChild(para)
    //     }
    // }
    // // same day
    // if ((currDay - symptomDay == 0) && (currMonth == symptomMonth)){
    //     if (diffTime < 270){
    //         var para = document.createElement("p");
    //         var node = document.createTextNode("Patient can be eligible for tPA.");
    //         para.appendChild(node);
    //         var res = document.getElementById('results')
    //         res.appendChild(para)
    //     }
    // }

    var diffTime = currTimeConverted - symptomTimeConverted;
    if (diffTime < 270){
        var para = document.createElement("p");
        var node = document.createTextNode("Patient can be eligible for tPA.");
        para.appendChild(node);
        var res = document.getElementById('results');
        res.appendChild(para);
    }

    var eye = document.getElementById("eye-response").value;
    var verbal = document.getElementById("verbal-response").value;
    var motorized = document.getElementById("motorized-response").value;
    var GSC_score = parseInt(eye,10) + parseInt(verbal,10) + parseInt(motorized,10);
    if (GSC_score < 8){
        var para = document.createElement("p");
        var node = document.createTextNode("Airway must be assessed and intervention in process should be considered.");
        para.appendChild(node);
        var res = document.getElementById('results');
        res.appendChild(para);
    }

    var blood_sugar_value = document.getElementById("bloodsugar").value;
    blood_sugar_value = parseFloat(blood_sugar_value);
    if (blood_sugar_value < 3.5){
        var para = document.createElement("p");
        var node = document.createTextNode("Treat the patient urgently and reassess for stroke once blood sugar is above 3.5 mmol/l.");
        para.appendChild(node);
        var res = document.getElementById('results');
        res.appendChild(para);
    }

    var r1value = document.querySelector('input[name="r1"]:checked').value;
    var r2value = document.querySelector('input[name="r2"]:checked').value;
    var r3value = document.querySelector('input[name="r3"]:checked').value;
    var r4value = document.querySelector('input[name="r4"]:checked').value;
    var r5value = document.querySelector('input[name="r5"]:checked').value;
    var r6value = document.querySelector('input[name="r6"]:checked').value;
    var r7value = document.querySelector('input[name="r7"]:checked').value;
    stroke_assessment_value = parseInt(r1value,10) + parseInt(r2value,10) + parseInt(r3value,10) + parseInt(r4value,10) + parseInt(r5value,10) + parseInt(r6value,10) + parseInt(r7value,10);
    if (stroke_assessment_value > 0 && diffTime < 3){
        var para = document.createElement("p");
        var node = document.createTextNode("Activate stroke code and contact acute stroke team immediately for urgent CT and potential transfer.");
        para.appendChild(node);
        var res = document.getElementById('results');
        res.appendChild(para);
    }
    if (stroke_assessment_value > 0 && diffTime > 3){
        var para = document.createElement("p");
        var node = document.createTextNode("Stroke very likely.");
        para.appendChild(node);
        var res = document.getElementById('results');
        res.appendChild(para);
    }
    if (stroke_assessment_value <= 0){
        var para = document.createElement("p");
        var node = document.createTextNode("Low possibility of stroke but not completely excluded. Patient should be discussed with a stroke team.");
        para.appendChild(node);
        var res = document.getElementById('results');
        res.appendChild(para);
    }
}
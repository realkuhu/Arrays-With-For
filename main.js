var original_array = [];

function submit()
{
    var display_student_array=[];

    for (var j = 1; j<=4;j++) {
        var name= document.getElementById("name_of_the_student_"+j).value;
        original_array.push(name);
    }

    var array_length = original_array.length;


    for (var k = 0; k<array_length; k++){
        display_student_array.push("<h4>Name - " + original_array[k] + "</h4>");
    }

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
     var remove_commas= display_student_array.join(" ");
     document.getElementById("display_name_without_commas").innerHTML=remove_commas;

     document.getElementById("submit_button").style.display="none";
     document.getElementById("sort_button").style.display="inline-block";
}


function sorting(){
    original_array.sort();
    var new_array= [];
    var array_length = original_array.length;
    for (var k = 0; k<array_length; k++){
        new_array.push("<h4>Name - " + original_array[k] + "</h4>");
    }
    var remove_commas= new_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
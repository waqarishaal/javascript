// var studentdetail =[
//     ["waqar",32,"male","inter"],
//     ["Azrin",26,"female","inter"],
//     ["Sumiya",32,"female","matric"],
//     ["horain",16,"female","9th"],
//     ["hussain",29,"male","B.com"],
//     ["naeem ",34,"male","teacher"],
//     ["Akbar",34,"male","teacher"],
//     ["Sajjad ali",32,"male","teacher"],
//     ["sagheer",36,"male","teacher"], 
// ];
// for (var a = 0; a < 6; a++){
//     for(var b = 0; b < 4; b++){
//         document.write(studentdetail[a][b]+ " ");
//     }
//     document.write("<br>");
// }





var studentdetail =[
    ["waqar",32,"male","inter","id num",76550],
    ["Azrin",26,"female","inter","id num"],
    ["Sumiya",32,"female","matric","id num"],
    ["horain",16,"female","9th","id num"],
    ["hussain",29,"male","B.com","id num"],
    ["naeem ",34,"male","teacher","id num"],
    ["Akbar",34,"male","teacher","id num"],
    ["Sajjad ali",32,"male","teacher","id num"],
    ["sagheer",36,"male","teacher","id num"],
    ["sagheer",36,"male","teacher","id num"] 
];
document.write (studentdetail.length);
document.write("<table border = '1px' cellspacing='0'>");
 for (var a = 0; a <studentdetail.length; a++){
    document.write("<tr>");

    for(var b=0; b <6; b++){ 
        document.write( "<td>" + studentdetail[a][b] +"</td>");

    
    }
  document.write ("</tr>");
 }
 document.write("</table>")
       
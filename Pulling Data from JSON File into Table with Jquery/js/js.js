$("#pull").click(function(){
 
    $.getJSON("js/names.json",function (data){
            data.forEach(function(subject,index){

                let line=$("<tr>") 
                let cell1=$("<td>").text(index)
                let cell2=$("<td>").text(subject.Number)
                let cell3=$("<td>").text(subject.Name)

                line.append(cell1) 
                line.append(cell2) 
                line.append(cell3)

                $("#list").append(line) 
        })
    })
})
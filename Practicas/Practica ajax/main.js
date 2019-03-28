function loaddata(data){
    $.get(
        "https://jsonplaceholder.typicode.com/comments?postId=1",
        function (datas){
            var aux= datas;
        }
    );

    var result = aux.filter(a => a.id == data);
    alert(result);
}
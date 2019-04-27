function loaddata(data){
    $.get(
        "https://jsonplaceholder.typicode.com/comments?postId="+ data,
        function (datas){
            var aux= datas;
            for (i in aux)
                document.getElementById("info").insertAdjacentHTML("afterend" , "Nombre: " + aux[i].name + "<br> Email: " + aux[i].email + "<br> <br>");
        }
    );
}

function moneychange(data, type){
    var EuroDollar= 1.14;
    var EuroLira = 6.21;
    var EuroBolivar = 3746.04;

    if(type == "EuroDollar"){
        document.getElementById("moneyvalue").innerHTML = Math.round((data * EuroDollar) *100) /100;
    }

    if(type == "DollarEuro"){
        document.getElementById("moneyvalue").innerHTML = Math.round((data / EuroDollar) *100) /100;
    }

    if(type == "EuroLira"){
        document.getElementById("moneyvalue").innerHTML = Math.round((data * EuroLira) *100) /100;
    }

    if(type == "LiraEuro"){
        document.getElementById("moneyvalue").innerHTML = Math.round((data / EuroLira) *100) /100;
    }

    if(type == "EuroBolivar"){
        document.getElementById("moneyvalue").innerHTML = Math.round((data * EuroBolivar) *100) /100;
    }

    if(type == "BolivarEuro"){
        document.getElementById("moneyvalue").innerHTML = Math.round((data / EuroBolivar) *100) /100;
    }
}

function price(products){
    var aux = JSON.parse(products);
    var price = 0.0;
    var subtotal = 0.0;

    for(i in aux){
        price += parseFloat(aux[i].price);
    }

    subtotal = parseFloat(price) + (parseFloat(price) * 0.7);
    document.getElementById("totalprice").innerHTML = subtotal;
}

function info(){
    var total = 0;

    total += document.getElementsByTagName("p").length;
    total += document.getElementsByTagName("ul").length;
    total += document.getElementsByTagName("a").length;
    total += document.getElementsByTagName("link").length;

    document.getElementById("totalelements").innerHTML = total;
}

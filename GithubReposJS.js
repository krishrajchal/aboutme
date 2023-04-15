$.getJSON("https://api.github.com/users/krishrajchal/repos", function(data){
    $.each(data, function(key, val){
        var text = "<tr><th><a href=" + val.html_url +">" + val.name +"</a></th></tr>";
        $("table").append(text);
    })
})
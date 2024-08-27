$(document).ready(function(){
    const endpoint = `https://api.github.com/users/joaomorita`

    fetch(endpoint).then(function(res){
        return res.json();
    })
    .then(function(json){
        $('#name').text(json.name);
        $('#username').text('@' + json.login);
        $('#photo').attr('src', `${json.avatar_url}`);
        $('#followers').text(json.followers);
        $('#following').text(json.following);
        $('#repos').text(json.public_repos);
        $('.profile-link').attr('href', `${json.html_url}`)
    })
})
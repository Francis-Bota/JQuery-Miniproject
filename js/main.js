$(document).ready(function (){
    $('#button-create-item').on('click',function(){
        let name = $('#input-create-item').val();
        $('#input-create-item').val('');

        let html = '';
        html += '<div class="item">'
        html +=  '<div class="name">' + name + '</div>'
        html +=  '<img src="assets/beach.jpg"></img>'
        html +=  '<div class="description">Wallpaper</div>'
        html +=  '<div class="price">$49.99</div>'
        html += ' <button>Add to Cart</button>'
        html += '</div>'

        $('#container').prepend(html);
    });


});

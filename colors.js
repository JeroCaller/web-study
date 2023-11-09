var DarkMode = {
    body_tag : document.querySelector('body'),
    a_array : [],
    button_value : 'Dark mode',
    setColor : function(bcolor, tcolor){
        this.body_tag.style.background = bcolor;
        this.body_tag.style.color = tcolor;
    }, 
    setLinksColor : function(color){
        var i = 0;
        while(i < this.a_array.length){
            this.a_array[i].style.color = color;
            i = i + 1;
        }
    },
    changeColor : function(this_){
        this.a_array = document.querySelectorAll('a');
        if(this_.value === 'Dark mode'){
            this.setColor('black', 'white');
            this.setLinksColor('brown');
            this_.value = 'Bright mode';
            this.button_value = this_.value;
        } else {
            this.setColor('white', 'black');
            this.setLinksColor('black');
            this_.value = 'Dark mode';
            this.button_value = this_.value;
        }
    }
}

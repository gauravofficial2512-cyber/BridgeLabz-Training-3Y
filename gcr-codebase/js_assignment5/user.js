let user = {
    name : "gaurav",
    showname:function(){
        console.log(this.name);
    }
}
user.showname();
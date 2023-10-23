//console.log("Load UriImg.js")

class UriImg{
constructor(){
//console.log("UriImg constructor")
this.width=0
this.height=0
this.countpoins=0
this.sizedata=0

}
print(){
var s="<table class='tableUriImg'>"
s=s+"<tr><td>width<td>"+this.width
s=s+"<tr><td>height<td>"+this.height
s=s+"<tr><td>countpoins<td>"+this.countpoins
s=s+"<tr><td>sizedata<td>"+this.sizedata
s=s+"</table>";
//        uimg.width=img.width
//        uimg.height=img.height

return s
}

calc(){
this.countpoins=this.width*this.height
this.sizedata=this.countpoins*4

}


}
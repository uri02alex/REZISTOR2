class UriPoint{

constructor(){
 this.nom=0
 this.x=0
 this.y=0
 this.r=0
 this.g=0
 this.b=0 
 this.namecolor=''
 this.num=0
 this.colormin=0
 this.colormax=0
 this.ras=[]
 this.H=0
 this.S=0
 this.V=0
 this.kod=0
 this.accuracy=""
}

print(){
                  var s=""
                  s=s+"<div class='sablon'>"
                  s=s+"<div  style='background: rgb("
                  +this.r
                  +","+this.g
                  +","+this.b
                  +");'>"
                  +"x:"+this.x+" "
                  +"y:"+this.y+" "
                  +this.nom+" "+this.r+" "+this.g+" "+this.b+"</div>";
                  s=s+" "+this.namecolor
                  s=s+"</div>"
                  s=s+"</div>"
                  return s
                  }


print2(){
                           var title="r="+this.r
                           +" g="+this.g
                           +" b="+this.b
                           +" H="+this.H
                           +" S="+this.S
                           +" V="+this.V

                           var s=""
                           s=s+"<div class='sablon' title='"+title+ "'>"
                           s=s+"<div class='sablonrectcolor' style='background: rgb("
                           +this.r
                           +","+this.g
                           +","+this.b
                           +")'></div>"
                           //<span class='tri'>
                           //+"x:"+this.x+" "
                           //+"y:"+this.y+" "
                           //+this.nom
                           //+" "+this.r
                           //+" "+this.g
                           //+" "+this.b
                           //+"</div>"
                           +"<span class='red   tri'>"  +this.r+"</span>"
                           +"<span class='green tri'>"+this.g+"</span>"
                           +"<span class='blue  tri'>"+this.b+"</span>"
                           //+"<span class='blue  tri'> "+this.b+"</span>"
                           //+"<span class='black tri'> <span class='mal'></span>" +this.H+" </span>"
                           //+"<span class='black tri'> <span class='mal'></span>" +this.S+" </span>"
                           //+"<span class='black tri'> <span class='mal'></span>" +this.V+" </span>"

                           +"<span class='red   tri'>" +this.H+" </span>"
                           +"<span class='black tri'>" +this.S+" </span>"
                           +"<span class='black tri'>" +this.V+" </span>"

                           +"<span class='red   '  >"+this.namecolor+" </span>"
                           +"<span class='blue   '  >"+this.kod+" </span>"

                           //+" "+this.namecolor
                           +"</div>"
                           return s
                      }


printsbl(){
                          var s=""
                          s=s+"<div  style='background: rgb("+this.r+","+this.g+","+this.b+");width: 170px;'>"
                          //+"x:"+this.x+" "
                          //+"y:"+this.y+" "
                          //+this.nom
                          +" "+this.r+" "+this.g+" "+this.b+"</div>";
                          return s
                          }
                          // r,g,b


                          //calcHSV(){
                          //}

setcolor(r,g,b){
                         this.r=r
                         this.g=g
                         this.b=b 
                         var ar=rgb2hsv (this.r, this.g, this.b) 
                         this.H=Math.round(ar.h)
                         this.S=Math.round(ar.s)
                         this.V=Math.round(ar.v)
                         //console.log(" setcolor ",ar)
                         //console.log(" setcolor H:",this.H)
                         this.detectcolor()
                   }

setsablon(r,g,b,kod,name){
                        //this.r=r
                        //this.g=g
                        //this.b=b 
                        this.setcolor(r,g,b)
                        //this.num=num
                        this.kod=kod
                        this.namecolor=name

                   }

setxy(x,y){
                          this.x=x
                          this.y=y
                          this.calcHSV()
                     }


rastfrom(p){
                          var ras=0
                          ras=Math.sqrt(r+g+b)
                          return ras
                      }


qq(d){
     return d*d
}

retnamecolor(color){
    var s=color
    switch(color) {
      case 0:  s="черный"    ;    break;
      case 1:  s="коричневый";    break
      case 2:  s="красный"   ;    break
      case 3:  s="оранжевый" ;    break
      case 4:  s="желтый"    ;    break
      case 5:  s="зеленый"   ;    break
      case 6:  s="голубой"   ;    break
      case 7:  s="фиолетовый";    break
      case 8:  s="серый"     ;    break
      case 9:  s="белый"     ;    break
     }
    return s
}

mastab(color){
    var rr=0
    if (color==255){rr=this.colormax}
    if (color==0  ){rr=this.colormin}
    return rr
}

calras(r,g,b,nom,name){
    var ras=0
    var rr=this.mastab(r)
    var gg=this.mastab(g)
    var bb=this.mastab(b)
    console.log("=========")
    console.log("min max=",this.colormax," ",this.colormin)

    console.log("p      =",this.r," ",this.g," ",this.b," nom=",nom)
    console.log("rgb    =",r," ",g," ",b," nom=",nom)
    console.log("rrggbb =",rr," ",gg," ",bb," nom=",nom," name=",name)
    var rr2=rr-this.r
    var gg2=gg-this.g
    var bb2=bb-this.b
    console.log("rr2 =",rr2," ",gg2," ",bb2)

    var r2=rr*rr
    var g2=gg*gg
    var b2=bb*bb
    console.log("r2 =",r2," ",g2," ",b2)

    //var gg=(this.g-p.g)*(this.g-p.g)
    //var bb=(this.b-p.b)*(this.b-p.b)

    ras=Math.sqrt(r2+g2+b2)
    return ras
}


printras(){
var с=this.ras.length
console.log("this,ras.length",c);
for (var i=1;i<c;i++)
console.log(i," ",this.ras[i]," ",this.retnamecolor(i))
}



calcallras(){
this.ras[1]=this.calras(255,255,  255,"1","коричневый");//
this.ras[2]=this.calras(255,  0,    0,"2","красный 1 0 0");//
this.ras[3]=this.calras(255,255,  255,"3","оранжевый");//
this.ras[4]=this.calras(255,255,  255,"4","желтый");//
this.ras[5]=this.calras(  0,255,    0,"5","зеленый");//
this.ras[6]=this.calras(  0,  0,  255,"6","голубой");//
this.ras[7]=this.calras(255,  255,255,"7","фиолетовый");//
this.ras[8]=this.calras(255,  255,255,"8","серый");//
this.ras[9]=this.calras(255,  255,255,"9","белый");//

//console.log("this.ras[0]",this.ras[0])
/*
addsablon(255, 255,  0 ,"3","оранжевый")
addsablon(255, 204,  0 ,"4","желтый")
addsablon(  0, 255,  0 ,"5","зеленый")
addsablon(  0,   0,255 ,"6","голубой")
addsablon(255,   0,255 ,"7","фиолетовый")
addsablon(212, 160,44  ,"/10","золотой")
addsablon(179, 179,179 ,"/100","серебряной")

*/
}


calc(){
 this.colormin=999
 if (this.colormin>this.r){this.colormin=this.r}
 if (this.colormin>this.g){this.colormin=this.g}
 if (this.colormin>this.b){this.colormin=this.b}


 this.colormax=0
 if (this.colormax<this.r){this.colormax=this.r}
 if (this.colormax<this.g){this.colormax=this.g}
 if (this.colormax<this.b){this.colormax=this.b}
 this.calcallras()
}


calcTon(){
}


calcHSV(){
}

setkodr(kod,namecolor){
this.kod=kod
this.namecolor=namecolor
}


detectcolor(){
//console.log("detectcolor this.H",this.H)
this.namecolor=''
//ченрый
var cmax=Math.max(this.r,this.g,this.b)
//console.log("this.H",this.H," ",typeof(this.H));
//console.log(this.H>275)
if (cmax<30){this.setkodr(0,'Черный');return}
//серый
var cmin=Math.min(this.r,this.g,this.b)
if ((cmax-cmin)<15){this.setkodr(8,'Серый');return}

if (this.H>349) {this.setkodr(2 ,'Красный');return; }
if (this.H>280) {this.setkodr(7 ,'Фиолетовый');return;}
if (this.H>150) {this.setkodr(6 ,'Голуюой');return;}
if (this.H>70)  {this.setkodr(5 ,'Зеленый');return;}
if (this.H>41)  {this.setkodr(4 ,'Желтый');return;}
if (this.H>38)  {this.setkodr(2 ,'Оранжевый');return;}
if (this.H>30)  {this.setkodr(10,'Золотой');return;}
if (this.H>18)  {this.setkodr(1 ,'Коричневый');return;}
if (this.H>0)   {this.setkodr(2 ,'Красный');return;}
this.namecolor='NON'

/*
if ((this.H>90  )&(this.H<180)){this.namecolor='green';return}
if ((this.H>=180)&(this.H<300)){this.namecolor='blue';return}
if ((this.H>=0)&(this.H<=90)){this.namecolor='red';return}
if ((this.H>=300)&(this.H<=360)){this.namecolor='red';return}
*/
//коричневый  brown


//if ((this.H>90)&(this.H<150)){this.namecolor='green';return}

//console.log("detectcolor green")

}






















}
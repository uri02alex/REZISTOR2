//Цвета маркировки резисторов
let sbl=new UriArray()

function addsablon(r,g,b,kod,name){
        var p=new UriPoint()
        p.setsablon(r,g,b,kod,name)
        sbl.push(p)
}

function makesablons(){
       addsablon(  0,   0,  0  ,"0"," черный")
       addsablon(165,  42, 42  ,"1"," коричневый")
       addsablon(255,   0,  0  ,"2"," красный")
       addsablon(162,  96, 29  ,"2"," красный оран")
       addsablon(255, 165,  0  ,"3"," оранжевый")
       addsablon(255, 255,  0  ,"4"," желтый")
       addsablon(  0, 255,  0  ,"5"," зеленый")
       addsablon(  0,   0,255  ,"6"," голубой")
       addsablon(255,   0,255  ,"7"," фиолетовый")
       addsablon(128, 128,128  ,"8"," серый")
       addsablon(255, 255,255  ,"9"," белый")
       addsablon(212, 160,44  ,"10"," золотой")
       addsablon(179, 179,179 ,"11"," серебряной")
}

function sabolnprint2(){
       c=sbl.length
       s=""
       s=s+"<div class='sabolns'> "
       for (i=0;i<c;i++){
        s=s+sbl[i].print2()
        }
        s=s+"</div>"
       return s
}


function sabolnprint(){
     c=sbl.length
     s=""
     s=s+"<div class='sabolns'> "
     for (i=0;i<c;i++){
      s=s+"<div class='saboln' style='display: block ruby;' onclick='clicksablon("+sbl[i].kod+")'>"
      s=s+sbl[i].printsbl()
      s=s+"<div>"+sbl[i].kod+"</div>"
      s=s+"<div>"+sbl[i].namecolor+"</div>"
      s=s+"</div>"
      }
      s=s+"</div>"
     return s
}

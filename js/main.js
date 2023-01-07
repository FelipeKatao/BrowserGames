import Oct8 from '../Oct8/Oct8.js'

let element = new Oct8("nave",90,40,10,10,"sse","square1",true)
let Nave = document.getElementById("nave")
element.ModifyProps(Nave,["red"],[element.PropsElement.backgroundColor,"red"])
element.ModifyProps(Nave,10,[element.PropsElement.Rotate])
//element.ModifyProps(Nave,"URL(../img/nave.png)",element.PropsElement.BackgroundImage)
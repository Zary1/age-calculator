const dia=document.querySelector("#dia")
const ano=document.querySelector("#ano")
const mes=document.querySelector("#mes")

const botoa=document.querySelector("#botao")
const data= new Date()

const createYearaOptions=(s)=>{
 
   switch(s){
  
   case("janeiro"):
   return 1;
  

   case("fevereiro"):
   return 2;
    
   case("marco"):
   return 3;

  
   case("abril"):
  return 4
  
   case("maio"):
  return 5
  
   case("junho"):
  return 6
  
   case("julho"):
  return 7
  
  
   case("agosto"):
  return 8
  
  
   case("setembro"):
  return 9
  
   case("outubro"):
  return 10
  
   case("novembro"):
  return 11
  
   case("dezembro"):
  return 12
  
   default:      
  
   return null

  
}


   }

const Ano = () => {
  
  for(var years=2023;years>=1990;years--){
    let opctionYear=document.createElement("Option")
    opctionYear.value=years
    opctionYear.text=years
    ano.appendChild(opctionYear)

  }
};
const calcularAno=(selectedMonth)=>{

 const s_month=data.getMonth()+1
 let selectValue= createYearaOptions(selectedMonth)
 var anoValue =ano.value
let meses=s_month-selectValue

if(meses<0  || meses==0 ) {
  
  const ano =data.getFullYear()-1
  
  let newYear=Math.abs(ano-anoValue)

  meses=12+meses
    
 document.querySelector("#res_mes").innerHTML=`
 <p class="res">${meses}<span> Month </span></p>
 <p class="res">${newYear} <span> Years </span></p>
 
 
 `
 document.querySelector("#erro").innerHTML=""
 
}


 if(meses>0){

  const ano =data.getFullYear()
  let s_newYear=ano-anoValue
  let mese=meses
  
  document.querySelector("#res_mes").innerHTML=`
  <p class="res">${mese}<span> Month</span></p>
 <p class="res">${s_newYear} <span> Years </span></p>
 
 
 `
 document.querySelector("#erro").innerHTML=""
 
}
 if(selectValue>s_month && anoValue==2023){
  document.querySelector("#erro").innerHTML=`
  <p class=" u erro">Not born yet!</p>

 `
 document.querySelector("#res_mes").innerHTML=""
 document.querySelector("#res_dia").innerHTML=""
 

}
if(selectValue==s_month && anoValue==2023){
  document.querySelector("#erro").innerHTML=`
  <p class="u sucesso">Welcome to the world!</p>

 `
 document.querySelector("#res_mes").innerHTML=""
 document.querySelector("#res_dia").innerHTML=""
 

}
else{
  console.log('ola');
}

}

const createDayOpctionS=()=>{
  for(var dias=1;dias<=31;dias++){
    let opctionDia=document.createElement("Option")
    opctionDia.value=dias
    opctionDia.text=dias
    dia.appendChild(opctionDia)

  }
}
const calcularDay=(se)=>{ 
  
 const mesActual=data.getMonth()+1
 const anoActual=data.getFullYear()
 const diaActual=data.getDate()

  var anoValue =ano.value
  var diaValue =dia.value
  let selectV= createYearaOptions(se)
  let today=new Date(anoActual,mesActual,diaActual)
  let feliz=new Date(anoValue,selectV,diaValue)
  
  const diferencaTempo = Math.abs(today.getTime() - feliz.getTime()); // diferença em milissegundos
  const dias = Math.ceil(diferencaTempo / (1000 * 3600 * 24)); // 
  console.log(dias);
  document.querySelector("#res_dia").innerHTML=`
  <p class="res">${dias} <span> Days </span></p>
`
document.querySelector("#erro").innerHTML=""
 
}

botoa.addEventListener("click",()=>{
  calcularDay()
  const selectedMont = mes.value;
  calcularAno(selectedMont)
  Ano()
  
  document.querySelector("#res_dia").classList.add("a")
  document.querySelector("#res_mes").classList.add("a")
  document.querySelector("#res_ano").classList.add("a")
})



window.onload=()=>{
  createDayOpctionS()
  createYearaOptions()

  Ano()
}


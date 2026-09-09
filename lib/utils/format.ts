export const eur=(n:number)=>new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n)
export const beach=(km:number)=>km<1?`${Math.round(km*1000)} m zum Strand`:`${km.toLocaleString('de-DE',{maximumFractionDigits:1})} km zum Strand`

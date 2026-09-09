export const readList=(key:string):string[]=>{if(typeof window==='undefined')return [];try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return []}}
export const writeList=(key:string,value:string[])=>{try{localStorage.setItem(key,JSON.stringify(value));window.dispatchEvent(new Event('storage'))}catch{}}

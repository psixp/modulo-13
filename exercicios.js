// Parte I

let a = 10 + 15
let b = "10" + 2
let c = "10" * 2
let d = "10" / 3 
let e = "10" % 3
let f = 10 + true
let g = 10 == "10"
let h = 10 === "10"
let i = 10 < 11
let j = 10 > 12
let k = 10 <= 10.1
let l = 10 > 9.99
let m = 10 != "dez"
let n = 10 + true
let o = "dez " + true
let p = 10 + false
let q = 10 * false
let r = true + true
//let s = 10 ++ 
//let t = 10 -- 
let u = 1 & 1
let v = 1 & 0
let x = 0 & 0
let w = 1 & 0
let y = 0 / 1
let z = 5 + 5 == 10
let ab = "5" + "5" == 10
let ac = "5" * 2 > 9
let ad = (10 + 10) * 2
let ae = 10 + 10 * 2

console.log(`a) 10 + 15 = ${a} ${typeof(a)}`)
console.log(`b) "10" + 2 = ${b} ${typeof(b)}`)
console.log(`c) "10" * 2 = ${c} ${typeof(c)}`)
console.log(`d) "10" / 3 = ${d.toFixed(2)} ${typeof(d)}`)
console.log(`e) "10" % 3 = ${e} ${typeof(e)}`)
console.log(`f) 10 + true = ${f} ${typeof(f)}`)
console.log(`g) 10 == "10" = ${g} ${typeof(g)}`)
console.log(`h) 10 === "10" = ${h} ${typeof(h)}`)
console.log(`i) 10 < 11 = ${i} ${typeof(i)}`)
console.log(`j) 10 > 12 = ${j} ${typeof(j)}`)
console.log(`k) 10 <= 10.1 = ${k} ${typeof(k)}`)
console.log(`l) 10 > 9.99 = ${l} ${typeof(l)}`)
console.log(`m) 10 != "dez" = ${m} ${typeof(m)}`)
console.log(`n) 10 + true = ${n} ${typeof(n)}`)
console.log(`o) "dez" + true = ${o} ${typeof(o)}`)
console.log(`p) 10 + false = ${p} ${typeof(p)}`)
console.log(`q) 10 * false = ${q} ${typeof(q)}`)
console.log(`r) true + true = ${r} ${typeof(r)}`)
console.log(`s) 10++ = 11 number`)
console.log(`t) 10-- = 9 number`)
console.log(`u) 1 & 1 = ${u} ${typeof(u)}`)
console.log(`v) 1 & 0 = ${v} ${typeof(v)}`)
console.log(`x) 0 & 0 = ${x} ${typeof(x)}`)
console.log(`w) 0 & 1 = ${w} ${typeof(w)}`)
console.log(`y) 0 / 1 = ${y} ${typeof(y)}`)
console.log(`z) 5 + 5 == 10 = ${z} ${typeof(z)}`)
console.log(`ab) "5" + "5" == 10 = ${ab} ${typeof(ab)}`)
console.log(`ac) "5" * 2 > 9 = ${ac} ${typeof(ac)}`)
console.log(`ad) (10 + 10) * 2 = ${ad} ${typeof(ad)}`)
console.log(`ae) 10 + 10 * 2 = ${ae} ${typeof(ae)}`)


// Parte II

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;


/* 
a) branco == “branco”
b) branco == cinza
c) carro === branco
d) var cavalo = carro == “preto” ? “cinza” : “marron”;
e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
de 3.000? Demonstre a operação.
f) Somando as variáveis de cores é formada uma string de quantos caracteres? 
*/

console.log(`a) branco == “branco” = ${branco == "branco"}`)
console.log(`b) branco == cinza = ${branco == cinza}`)
console.log(`c) carro === branco = ${carro === branco}`)
var cavalo = carro
console.log(`d) var cavalo = carro == “preto” ? “cinza” : “marron”; = ${carro == "preto" ? "cinza" : "marron"}`)
console.log(`f) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
de 3.000? Demonstre a operação. = serão necessárias ${prestacao / 3000} pretenções.`)
console.log(`f) Somando as variáveis de cores é formada uma string de quantos caracteres? ${"brancopretocinza".length}`)
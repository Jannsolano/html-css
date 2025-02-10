let a = 5, b = 4, c = 8
let Delta = Math.pow(b, 2)-(4 * a * c)
    console.log("O valor de Delta é:", Delta)
if (Delta > 0) {
let x1 = (-b + Math.sqrt(Delta) / (2*a))
let x2 = (-b - Math.sqrt(Delta) / (2*a))
    console.log(x1, x2)    
} else {
    console.log("Delta negativo")
}
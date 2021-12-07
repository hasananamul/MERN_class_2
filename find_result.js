let result = prompt('Enter your marks');
if(result <= 32){
console.log('তুমি ডাব্বা মারছ! এখন রিস্কা চালাও ......!!!')
}
else if(result <= 39){
    console.log('তুমি D grade পেয়েছ ......!!!')
}
else if(result <= 49){
    console.log('তুমি C grade পেয়েছ ......!!!')
}
else if(result <= 59){
    console.log('তুমি B grade পেয়েছ ......!!!')
}
else if(result <= 69){
    console.log('তুমি A- পেয়েছ ......!!!')
}
else if(result <= 79){
    console.log('তুমি A grade পেয়েছ ......!!!')
}
else if(result <= 89){
    console.log('তুমি A+ পেয়েছ, মিস্টি খায়াও ......!!!')
}
else if(result <= 100){
    console.log('তুমি Golden A+ পেয়েছ, ডাবল মিস্টি খায়াও......!!!')
}
else{
    console.log('মাথা থিক আছেতো ......! ১০০ এর বেসি মার্ক কেমনে পাও...।')
}
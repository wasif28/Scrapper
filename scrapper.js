const getDraws= require('./drawRequest')

//All urls to visit and scrap

const url_current_draws='http://savings.gov.pk/'
const url_40000_premium='http://savings.gov.pk/rs-40000-premium-bonds-draws/'
const url_40000='http://savings.gov.pk/rs-40000-draws/'
const url_25000='http://savings.gov.pk/rs-25000-draws/'
const url_15000='http://savings.gov.pk/rs-15000-draws/'
const url_7500='http://savings.gov.pk/rs-7500-draws/'
const url_1500='http://savings.gov.pk/rs-1500-draws/'
const url_750='http://savings.gov.pk/rs-750-draws/'
const url_200='http://savings.gov.pk/rs-200-draws/'
const url_100='http://savings.gov.pk/rs-100-draws/'

//Variables used to store '.txt' based files as an object according to their price denomination

// var bonds_current_draws
// var bonds_40000_premium
// var bonds_40000
// var bonds_25000
// var bonds_15000
// var bonds_7500
// var bonds_1500
// var bonds_750
// var bonds_200
// var bonds_100

//Draws For Bond Lottery Current

getDraws(url_current_draws, (error , bonds_current_draws) =>{
    if(error){
        console.log('Error occured getting draws')
    }
    else{
    console.log(bonds_current_draws)
    }
})

//Draws For Bond Lottery RS. 100

getDraws(url_100, (error , bonds_100) =>{
    if(error){
        console.log('Error occured getting draws')
    }
    else{
    console.log(bonds_100)
    }
})

//Draws For Bond Lottery RS. 200

getDraws(url_200, (error , bonds_200) =>{
    if(error){
        console.log('Error occured getting draws')
    }
    else{
    console.log(bonds_200)
    }
})

//Draws For Bond Lottery RS. 750

getDraws(url_750, (error , bonds_750) =>{
    if(error){
        console.log('Error occured getting draws')
    }
    else{
    console.log(bonds_750)
    }
})

//Draws For Bond Lottery RS. 1500

getDraws(url_1500, (error , bonds_1500) =>{
    if(error){
        console.log('Error occured getting draws')
    }
    else{
    console.log(bonds_1500)
    }
})

//Draws For Bond Lottery RS. 7500

getDraws(url_7500, (error , bonds_7500) =>{
    if(error){
        console.log('Error occured getting draws')
    }
    else{
    console.log(bonds_7500)
    }
})

//Draws For Bond Lottery RS. 15000

getDraws(url_15000, (error , bonds_15000) =>{
    if(error){
        console.log('Error occured getting draws')
    }
    else{
    console.log(bonds_15000)
    }
})

//Draws For Bond Lottery RS. 25000

getDraws(url_25000, (error , bonds_25000) =>{
    if(error){
        console.log('Error occured getting draws')
    }
    else{
    console.log(bonds_25000)
    }
})

//Draws For Bond Lottery RS. 40000

getDraws(url_40000, (error , bonds_40000) =>{
    if(error){
        console.log('Error occured getting draws')
    }
    else{
    console.log(bonds_40000)
    }
})

//Draws For Bond Lottery RS. 40000 PREMIUM

getDraws(url_40000_premium, (error , bonds_40000_premium) =>{
    if(error){
        console.log('Error occured getting draws')
    }
    else{
    console.log(bonds_40000_premium)
    }
})

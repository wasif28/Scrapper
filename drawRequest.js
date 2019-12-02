const request= require('request')
const getUrls= require('get-urls')
const urlPattern=require('url-pattern')

//Generating requests of HTTP to scrap required data

const getDraws= (url,callback) =>{

    request({url: url, json: true}, (error, response) => {

        if(error){
            callback('Unable to connect to services',undefined)
        }
        else{
            var temp=JSON.stringify(response)
            var links= Array.from(getUrls(temp))
            //console.log(links)
            
            var pattern= new urlPattern('*\.txt')      
            var txtPattern= []
            for(i=0 ; i<links.length ; i++){
                if(pattern.match(links[i])){
                    txtPattern.push(links[i])
                }
            }
            //console.log(txtPattern)
            callback(undefined,txtPattern)
        }   
    }
    )
}

module.exports= getDraws

const GET_Countries_API='https://restcountries.com/v3.1'


export  const fetchCountries=async()=>{
    try{
        let response= await fetch(`${GET_Countries_API}/all`)
        const countries= await response.json()
        return countries
    }
    catch(error){
        console.log(error)
        return;
    }
}

export const searchCountries=async(input)=>{
    try{
        let response= await fetch(`${GET_Countries_API}/name/${input}?fullText=true`)
        const data=await response.json()
        return data;
    }
    catch(error){
        console.log(error)
        return;
    }
}
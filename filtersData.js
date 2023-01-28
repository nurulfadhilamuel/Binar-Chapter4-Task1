const err = require('./errorHandler.js') 
const datas = (datas, ins)=>{
    if(ins == 1){
        const filtered = datas.filter(data =>{
            if(data.age < 30  && data.favoriteFruit == "banana")
                return data;})
        const jumlah = {
            "succes": "succes",
            "jumlah": filtered.length,
            "data" : filtered
            }
        return (!filtered.length)? err() :  JSON.stringify(jumlah) 
    }else if(ins ==2){
        const filtered = datas.filter(data => {
            if((data.gender == "female" || data.company == "FSW4") && data.age > 30)
                return data;
        })
        const jumlah = {
            "jumlah": filtered.length,
            "data" : filtered
        }
        return (!filtered.length)? err() :  JSON.stringify(jumlah) 
    }else if(ins == 3){
        const filtered = datas.filter(data => {
            if(data.eyeColor == "blue" &&(data.age >= 35 && data.age <= 40) && data.favoriteFruit == "apple")
                return data;
            })
                const jumlah = {
                    "jumlah": filtered.length,
                    "data" : filtered
                }
                return (!filtered.length)? err() :  JSON.stringify(jumlah) 
    }else if(ins == 4){
        const filtered = datas.filter(data => {
            if((data.company == "Intel" || data.company == "Pelangi")&& data.eyeColor == "green" )
                return data;})
                const jumlah = {
                    "jumlah": filtered.length,
                    "data" : filtered
                }
                return (!filtered.length)? err() :  JSON.stringify(jumlah) 
    }else if(ins == 5){
        const filtered = datas.filter(data => {
            const TglStr = data.registered
            const splTgl = TglStr.split("-")
            const tahun = parseInt(splTgl[0])
            if(tahun < 2016 && data.isActive == true)
                return data;})
            const jumlah = {
                    "jumlah": filtered.length,
                    "data" : filtered
            }
            return (!filtered.length)? err() : JSON.stringify(jumlah) 
    }else{
        return err()
    }
}

module.exports = datas

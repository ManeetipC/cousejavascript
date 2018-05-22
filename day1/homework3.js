let peopleSalary = [{"id":1001,"firstname":"Luke","lastname":"Skywalker","company":"Walt Disney","salary":40000},{"id":1002,"firstname":"Tony","lastname":"Stark","company":"Marvel","salary":1000000},{"id":1003,"firstname":"Somchai","lastname":"Jaidee","company":"Love2work","salary":20000},{"id":1004,"firstname":"Monkey D","lastname":"Luffee","company":"One Piece","salary":900000}]

for(i=0; i<peopleSalary.length; i++){
    for(ab in peopleSalary[i]){
        if(ab == "company"){
            delete peopleSalary[i][ab]
        }
        if(ab == "salary"){
            var arraySalary =[]
            var nowSalary = peopleSalary[i][ab]
            var persentSalary = nowSalary * (10/100)

            for(l=0; l<3; l++){
                if(l == 0){
                    arraySalary.push(nowSalary)
                }
                else{
                    
                    arraySalary.push(nowSalary += nowSalary*(10/100))
                }
            }
            peopleSalary[i][ab] = arraySalary
            //console.log(arraySalary)
        }
    }
}
console.log(peopleSalary)
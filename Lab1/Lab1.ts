type student ={
    studentId: number
    studentName: string
    studentAge : number
}
const Classed : student[]=[]
for(var i=1; i <= 10;i++){
    Classed.push({
        studentId: i,
        studentName: "student thứ "+i,
        studentAge : i
    })
    
}
console.log(Classed)


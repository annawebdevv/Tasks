
class Cars {
    constructor(mark, year, mileage){
        this.mark = mark;
        this.year = year;
        this.mileage = mileage;
    }
    getMark(){
        console.log("Mark:" + this.mark)
    }
    static carName = "Some Car";
    static distanceForYears(distance, years){
        return ( "mileage for" + " " +  years + " "+ "years"  + " " +  "was" + " " + distance)
    }
}

const mini = new Cars("Mini", "2018", "20000")
mini.color = "yellow"
// console.log(Cars.distanceForYears("1000", "3"))
// mini.getMark()

class Cabriolet extends Cars {
    constructor(mark, color) {
        super(mark);
        this.color = color;
    }
    getMark(){
        super.getMark();
        console.log("type: Cabriolet")
    }
    
}
 const miniCooper = new Cabriolet("Mini", "red")
 miniCooper.getMark()
 console.log(miniCooper.color) 
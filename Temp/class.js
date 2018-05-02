let student = function(name, age){
    this.name = name
    this.age = age

    this.getName = function(){
        console.log(this.name);
    }

    this.getAge = function(){
        console.log(this.age);
    }

    this.setName = function(name){
        this.name = name
    }

    this.setAge = function(age){
        this.age = age
    }
}


ob = new student('Danish', 18)
ob.getAge()
ob.getName()

ob.setAge(17)
ob.setName('Jamal')

ob.getAge()
ob.getName()
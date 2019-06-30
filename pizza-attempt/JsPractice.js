var name = 'Alice';

var myObject = {
    name: 'Bob',
    update: (function(){
        var thatName = this.name;
        console.log(thatName);

        this.name = 'Peter';
        console.log(this.name);  // window的name 是peter update: function

        return function() {
            var name = this.name;
            console.log(name); // window的name是peter ////myobject的name是bob
            this.name = 'Jack';
            console.log(this.name);//window的name 是jack
        }
    })(),
}

var fn = myObject.update;
fn();
console.log(name);
myObject.update();
console.log(myObject.name);
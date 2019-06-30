var name = 'Alice';

var myObject = {
    name: 'Bob',
    update: function() {
            var name = this.name;
            console.log(name);
            this.name = 'Jack';
            console.log(this.name);
        }
}

var fn = myObject.update;
console.log(this);
fn();
console.log(name);
// myObject.update();
// console.log(name);
// console(myObject.name);
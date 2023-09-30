//TOSTRING VALUEOF

let user = {name: "Іван", money: 1000};

alert(user); // [object Object]
alert(user.valueOf() === user); // true

user.toString = function toString() {
    return `{name: "${this.name}"}`;
}

user.valueOf = function valueOf() {
    return this.money;
}

alert(user); // toString -> {name: "Іван"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500


let user2 = {
    name: "Іван",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

alert(user2); // hint: string -> {name: "Іван"}
alert(+user2); // hint: number -> 1000
alert(user2 + 500); // hint: default -> 1500
function greeter(person: { name: string }) {
    console.log(person.name);
}
// 基础类型 number boolean string {}
greeter({ name: 'zsy' });

// function greeter(person) {
//     console.log('hello ' + person);
// }

// greeter('world');

const receivesAFunction = (fun) => fun()

const returnsANamedFunction = () => function fun() { console.log(`Hello Sanad`) }

const returnsAnAnonymousFunction = () => function () { console.log(`This is an Anonymous Function`) }
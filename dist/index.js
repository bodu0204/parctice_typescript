const formstudent = (age) => ({
    name: "someone",
    grade: age,
});
const f = formstudent;
const fv = formstudent;
const h = f(20);
fv(20);
console.log(h);
export {};

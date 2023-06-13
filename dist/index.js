const data = `
uhyo,26,1
Jhon Smith,17,0
Mary Sue,14,1
`;
const users = [];
const lines = data.match(/([^\n].*)\n/g);
if (lines !== null) {
    for (const line of lines) {
        const elms = line.match(/([^,]*),([0-9]*),([01])\n/);
        if (elms !== null) {
            const a_user = {
                name: elms[1],
                age: Number(elms[2]),
                premiumUser: Boolean(Number(elms[3])),
            };
            users.push(a_user);
        }
    }
}
for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name}(${user.age}) is Premium User`);
    }
    else {
        console.log(`${user.name}(${user.age}) is not Premium User`);
    }
}
export {};

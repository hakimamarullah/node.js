function* generatesNames() {
    yield "Hakim";
    yield "Amarullah";
    yield "Nisdar";
    yield "Fazilla";
}

const names = generatesNames();

for (const name of names) {
    console.log(name)
}
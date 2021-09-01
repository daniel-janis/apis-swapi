const body = document.querySelector(`body`);

const getResidents = document.querySelector(`button`);


const logClick = () => {
    console.log(`Button Clicked`)
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((res) => {
        const { residents } = res.data.results[0]

        residents.forEach((resident => {
            axios.get(resident)
            .then((res) => {
                console.log(res.data)
               const person= document.createElement(`h2`)
                person.textContent = `${res.data.name}`
                body.appendChild(person)
            })
            .catch((err) => console.log(err))
        }))
    })
    .catch((err) => console.log(err))
};


getResidents.addEventListener(`click`, logClick);
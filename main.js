const getResidents = document.querySelector(`button`);


const logClick = () => {
    console.log(`Button Clicked`)
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((res) => {
        const { residents } = res.data
        console.log(residents)
        res.data.forEach((residents => {
            axios.get(res)
            .then((res) => {
               const resident= document.createElement(`h2`)
                resident.textContent = `"${res}"`
                document.appendChild(resident)
            })
            .catch((err) = () => console.log(err))
        }))
    })
    .catch((err) = () => console.log(err))
};


getResidents.addEventListener(`click`, logClick);
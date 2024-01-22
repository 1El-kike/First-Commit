let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior')
const btnSiguiente = document.getElementById('btnSiguiente')



btnSiguiente.addEventListener('click', () => {
    if (pagina < 1000) {
        pagina += 1;
        getfilme();

    }
})
btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina -= 1;
        getfilme();

    }
})

const getfilme = async () => {

    try {

        const promesa = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f397458aaaf92f659df45279ff3196bf&language=es-ES&page=${pagina}`)

        if (promesa.status == 200) {

            const data = await promesa.json()
            console.log(data)

            let peliculas = '';
            data.results.forEach(element => {
                peliculas += `
                    <div class ="pelicula">
                    <img class="poster" src = "https://image.tmdb.org/t/p/w500/${element.poster_path}">
                    </img>
                <h3 class = "titulo">${element.title}</h3>
                </div>
                `


            });

            document.getElementById('contenedor').innerHTML = peliculas;


        } else {
            console.log("error")
        }
    } catch (error) {
        console.log(error)
    }


}
/*  */

getfilme(); 
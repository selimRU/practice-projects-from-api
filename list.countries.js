const loading = document.getElementById('loading').style.display = 'none';
const allCounries = async () => {
    const url = 'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php';
    const res = await fetch(url)
    const data = await res.json()
    displayCountries(data);
}
allCounries()
const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countris-section');
    const allCountries = countries.leagues
    // console.log(allCountries);
    allCountries.forEach(country => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl py-10 text-center">
           <div class="card-body items-center text-center">
               <h2 class="card-title">${country.strLeague}</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div class="card-actions">
                 <button onclick="detlCounries('${country.idLeague}')" class="btn btn-primary">Details</button>
               </div>
           </div>
        </div>
        `
        countriesContainer.appendChild(div)
        const loading = document.getElementById('loading').style.display = 'block';
        loading.innerHTML = '';
    });
}
const detlCounries = async (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php?search=${id}`;
    const res = await fetch(url)
    const data = await res.json()
    countriesDetails(data.leagues[0])
}

const countriesDetails = (country) => {
    const detailsContainer = document.getElementById('details');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl py-10 text-center">
           <div class="card-body items-center text-center">
               <h2 class="card-title">${country.strLeague}</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
           </div>
        </div>
    `
    detailsContainer.appendChild(div)
}

const loaderMeal = () => {
    const inputBox = document.getElementById('input')
    const text = inputBox.value;
    if (text === '') {
        alert('Write something')
        return;
    } else {
        inputBox.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeal(data.meals))
    }
}


const displayMeal = (datas) => {
    const mealContainer = document.getElementById('result-data')
    mealContainer.innerHTML = '';
    if (datas.length == 0) {
        alert('not found');
    } else {
        for (const single of datas) {
            // console.log(single);
            const mealDiv = document.createElement('div');
            mealDiv.classList.add('col')
            mealDiv.innerHTML = `
               <div onclick="searchMeal(${single.idMeal})" class="card h-100">
                 <img class="w-80" src="${single.strMealThumb}" class="card-img-top" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">${single.strMeal}</h5>
                   <p class="card-text">${single.strInstructions.slice(0, 200)}</p>
                 </div>
               </div>
        `
            mealContainer.appendChild(mealDiv)
        };
    }


}
const searchMeal = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))

}
searchMeal()
const displayMealDetails = (data) => {
    const searchResult = document.getElementById('serch')
    searchResult.innerHTML = '';
    const div = document.createElement('div')
    div.innerHTML = `
         <div class="card w-25">
           <img class="w-100" src="${data.strMealThumb}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${data.strMeal}</h5>
             <p class="card-text">${data.strInstructions.slice(0, 150)}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
`
    searchResult.appendChild(div)

}
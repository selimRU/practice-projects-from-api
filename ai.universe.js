const allTools = async () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data);
    displayTools(data);
}
allTools()
const displayTools = (datas) => {
    const toolsContainer = document.getElementById('countris-section');
    const allTools = datas.data.tools.slice(0, 8)
    console.log(allTools);
    allTools.forEach(tool => {
        const div = document.createElement('div')
        let number = 1
        div.innerHTML = `
        <div class="card w-[400px] h-[600px] bg-base-100 shadow-xl py-10">
           <div class="card-body ">
               <div class="w-[230px]">
                  <img src="${tool.image || 'No image found'}" alt="Shoes" class="rounded-xl w-full" />
               </div>
               <h2 class="text-start text-3xl">Features:</h2>
                <ol class="text-start">
                  ${tool.features.map(feature => `<li>${number++}. ${feature}</li>`).join('\n')}
                </ol>
               
               <p class="text-start">${tool.description?.slice(0, 50) || 'no description available'}</p>
               <h2 class="text-start text-xl font-semibold">${tool.name}</h2>
               <p class="text-start"><i class="fa-regular fa-calendar-days"></i> ${tool?.published_in}</p>
               <div class="card-actions">
                 <button onclick="loadDetails('${tool.id}')" class="btn btn-primary">Details</button>
               </div>
        `
        toolsContainer.appendChild(div)
    });
}
const loadDetails = async (id) => {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    dataDetails(data);
}

const dataDetails = (data) => {
    show_details.showModal()
    let number = 1
    const detailsContainer = document.getElementById('details');
    detailsContainer.innerHTML = '';
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    div1.innerHTML = `
       <div class=" w-[120%] border bottom-1 border-red-300  ">
             <div>
                 <p class="font-semibold my-2">${data.data.description}</p>
                 <div class=" my-5">
                   <p class=" text-sm">${data.data.pricing.map(price => `<span class=" shadow-md mx-2 py-3 px-3 bg-slate-100">${price.price}</span>`)}</p>
                 </div>
                 </div>
                     <p>${data.data.integrations.map(integretion => `<li class=" text-sm">${integretion}</li>`)}</p>
                 </div>
             </div>
       </div>
    
    `
    detailsContainer.appendChild(div1)
    div2.innerHTML = `
      <div class="w-[50%] border border-gray-600 " >
           <img class="w-[80%] py-[68px] mx-auto" src="${data.data.image_link[0]}" alt="Shoes" class="rounded-xl" />
       </div>
    `
    detailsContainer.appendChild(div2)
}


const loadPhone = (text,isShowAll) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${text}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayPhone((data.data), isShowAll))
   
}
const displayPhone = (phones, isShowAll) => {
  const showAll = document.getElementById('show all');
  if (phones.length > 12 && !isShowAll) {
    showAll.classList.remove('hidden')
  } else {
    showAll.classList.add('hidden')
  }
 if (!isShowAll) {
  phones = phones.slice(0, 12)
 }
    
 
  const phoneContainer = document.getElementById('result-data')
  phoneContainer.innerHTML = '';
  for (const phone of phones) {
    // console.log(phone);
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col')
    phoneDiv.innerHTML = `
               <div class="card h-100 text-center">
                 <div class="w-full shadow-lg rounded-md py-5">
                   <img src="${phone.image}" class="card-img-top w-[50%] mx-auto" alt="...">
                 </div>
                 <div class="card-body">
                   <h5 class="text-center">${phone.phone_name}</h5>
                   <p class="card-text">${phone.brand}</p>
                   <button class=" btn btn-outline-info" onclick="detailsPhone('${phone.slug}')">Phone Details</button>
                 </div>
               </div>
        `
    phoneContainer.appendChild(phoneDiv)
  };

  loading(false)
}
const searchHandle = (isShowAll) => {
  loading(true)
  const inputBox = document.getElementById('input')
  const text = inputBox.value;
  loadPhone(text,isShowAll)
  
}

const loading = (isLoading) => {
  const loadingBtn = document.getElementById('loading')
  if (isLoading) {
    loadingBtn.classList.remove('hidden')
  }
  else {
    loadingBtn.classList.add('hidden')
  }
}

const showAll = (isShowAll) => {
  searchHandle(true)
}


const detailsPhone = (id) => {
  my_modal_1.showModal()
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data))

}
const displayPhoneDetails = (phone) => {
  console.log(phone);
  const searchResult = document.getElementById('phone_details')
  searchResult.innerHTML = '';
  const div = document.createElement('div')
  div.innerHTML = `
           <img class="w-[40%] mx-auto mb-2" src="${phone.data.image}" alt="...">
           <div>
             <h5 class=" text-2xl text-center">${phone.data.name}</h5>
             <h5 class=" text-2xl text-center">${phone.data.brand}</h5>
             <p class="card-text">${''}</p>
           </div>
        `
  searchResult.appendChild(div)

}
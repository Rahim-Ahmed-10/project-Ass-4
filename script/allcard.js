
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');

const allBtn = document.getElementById('all-filter-btn');
const interviewBtn = document.getElementById('interview-filter-btn');
const rejectedBtn = document.getElementById('rejected-filter-btn');
const deleteButton = document.querySelectorAll ('.delete-btn');


const allCardSection = document.getElementById('allcards');
const mainContainer = document.querySelector('main');
const filteredSection =document.getElementById('filtered-section');

//calculate

function calculateCount() {
    totalCount.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

// Toggle

function toggleStyle(id) {

    allBtn.classList.remove('bg-blue-300');
    interviewBtn.classList.remove('bg-blue-300');
    rejectedBtn.classList.remove('bg-blue-300');

    allBtn.classList.add('bg-gray-300');
    interviewBtn.classList.add('bg-gray-300');
    rejectedBtn.classList.add('bg-gray-300');
    // console.log(id);

    const selected = document.getElementById(id);
    currentStatus = id;
    //  console.log(selected);
    selected.classList.remove('bg-gray-300');
    selected.classList.add('bg-blue-300')

    if(id == 'interview-filter-btn' ){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden')
        renderThriving();
    }else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
        
    } else if (id == 'rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejectThriving();
    }

    
}

// main container

mainContainer.addEventListener('click', function (event) { 

    if(event.target.classList.contains('interview-btn')){

    const parentNode = event.target.parentNode.parentNode;
    const mobile = parentNode.querySelector('.mobile').innerText;
    const react = parentNode.querySelector('.react').innerText;
    const remote = parentNode.querySelector('.remote').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const build = parentNode.querySelector('.build').innerText;
 
        parentNode.querySelector('.status').innerText = 'Interview'; 

    const cardInfo ={
        mobile,
        react,
        remote,
        status :'Interview',
        build
    }
    const plantExist = interviewList.find(item => item.mobile == cardInfo.mobile);
   
    if(!plantExist){
        interviewList.push(cardInfo);
      
    }
    rejectedList = rejectedList.filter(item=> item.mobile != cardInfo.mobile)

    if(currentStatus == 'rejected-filter-btn'){
        renderRejectThriving();
     }
     calculateCount(); 
    
    } 
    else if(event.target.classList.contains('rejected-btn')){

    const parentNode = event.target.parentNode.parentNode;
    const mobile = parentNode.querySelector('.mobile').innerText;
    const react = parentNode.querySelector('.react').innerText;
    const remote = parentNode.querySelector('.remote').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const build = parentNode.querySelector('.build').innerText;
 
        parentNode.querySelector('.status').innerText = 'Rejected'; 

    const cardInfo ={
        mobile,
        react,
        remote,
        status :'Rejected',
        build
    }
    const plantExist = rejectedList.find(item => item.mobile == cardInfo.mobile);
   
    if(!plantExist){
        rejectedList.push(cardInfo);
        
    }
    interviewList = interviewList.filter(item=> item.mobile != cardInfo.mobile)
     if(currentStatus == 'interview-filter-btn'){
        renderThriving();
     }
    calculateCount();
    }    
})

// New file add ar jonno

function renderThriving(){
    filteredSection.innerHTML = '';

    for(let thrive of interviewList){
        
        let div = document.createElement('div');
        div.className = 'flex justify-between p-6 bg-white';
        div.innerHTML = `<div>
                <img src="./jobs.png" alt="">
            </div>`
        div.innerHTML =`<div class="space-y-4">
                <h2 class="mobile text-xl">${thrive.mobile}</h2>
                <p class="react">React Native Developer</p>
                <p class="remote">Remote • Full-time • $130,000 - $175,000</p>

                <button class="status bg-green-200 px-4 py-2">${thrive.status} </button>
                <p class ="build">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                <div class="flex gap-3">
                    <button class="interview-btn text-green-500 border border-1px-sold-green py-2 px-4 rounded-xl cursor-pointer">interview</button>
                    <button class="rejected-btn text-red-500 border border-1px-sold-red py-2 px-4 rounded-xl cursor-pointer">Rejected</button>
                </div>
            </div>
           
        `
        filteredSection.appendChild(div)
    }
}

function renderRejectThriving(){
    filteredSection.innerHTML = '';

    for(let reject of rejectedList){
        console.log(reject);
        let div = document.createElement('div');
        div.className = 'flex justify-between p-6 bg-white';
        div.innerHTML =`<div class="space-y-4">
                <h2 class="mobile text-xl">${reject.mobile}</h2>
                <p class="react">React Native Developer</p>
                <p class="remote">Remote • Full-time • $130,000 - $175,000</p>

                <button class="status bg-red-200 px-4 py-2">${reject.status} </button>
                <p class ="build">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                <div class="flex gap-3">
                    <button class="interview-btn text-green-500 border border-1px-sold-green py-2 px-4 rounded-xl cursor-pointer">interview</button>
                    <button class="rejected-btn text-red-500 border border-1px-sold-red py-2 px-4 rounded-xl cursor-pointer">Rejected</button>
                </div>
            </div>
        `
        filteredSection.appendChild(div)
    }
}

// Delete All File
deleteButton.forEach(button =>{
    button.addEventListener('click',function(){
        this.closest('.job-card').remove();
        calculateCount();
    })
})

// Bg-image-add-style


const interviewAllBtn = document.getElementById('interview-btn');
const rejectedAllBtn = document.getElementById('rejected-btn');
interviewAllBtn.addEventListener('click',() =>{
    interviewAllBtn.classList.add('bg-green-200');
    rejectedAllBtn.classList.remove('bg-red-200')
});

rejectedAllBtn.addEventListener('click',() =>{
    rejectedAllBtn.classList.add('bg-red-200');
    interviewAllBtn.classList.remove('bg-green-200')
});


const jobsContainer = document.getElementById('jobs-container');
function addJobCard (jobDate){
    if(document.getElementById('no-jobs-img')){
        jobsContainer.innerHTML= '';
        jobsContainer.classList.remove('items-center', 'justify-center');
        jobsContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-3' , 'gap-3')
    }

    const cardHTML = `
    <div class= "bg-white p-5 shadow-mb rounded-lg">
    <h3>${jobDate.title}</h3>
    </div>
    `;

    jobsContainer.insertAdjacentHTML('beforeend', cardHTML)
}
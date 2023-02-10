const el=document.querySelector(".text-animate");

function showElements() {
    const elinner =el.innerHTML.trim().split("");
    el.innerHTML=elinner.reduce((acc,curr)=> {
        curr =curr.replace(' ','&nbsp;');
        return `${acc}<span class="chra">${curr}</span>`;
    },"");
};




const observer =new IntersectionObserver(showElements);
observer.observe(el);





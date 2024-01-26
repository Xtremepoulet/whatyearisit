
fetch('whatyearisit-l2puhkprk-yanis-projects-a4beb062.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year;
    })


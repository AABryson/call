
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementsByTagName('form');
    const div= document.getElementsByTagName('div');
    const url = document.getElementById('url');
    const tptxt = document.getElementById('tptxt');
    const bottxt = document.getElementById('bottxt');
  
  document.addEventListener('submit', function(event){
    event.preventDefault()
   
    const urlval = url.value;
    console.log(urlval);

    const tptxtval = tptxt.value;
    console.log(tptxtval)

    const bottxtval = bottxt.value;
    console.log(bottxtval);

    let div = document.querySelector('div')
    console.log(div)
    
    const image = document.createElement('img')
    image.src = urlval

    div.append(image)
   
    const h2o = document.createElement('h2');
    h2o.classList.add('first')
   
    h2o.textContent = tptxtval;
    console.log(h2o)
    
    div.append(h2o);

    let h3o = document.createElement('h2');
    h3o.classList.add('second')
    h3o.textContent = bottxtval;
    console.log(h3o)

    div.append(h3o)

    url.value = '';
    tptxt.value = '';
    bottxt.value = '';
  })
  document.addEventListener('click', function(event){
    console.log(event);
    const tar = event.target('img')
    if(tar === 'img') {
      tar.remove()
    }


  })
})

//document.addEventListener('click', function(event){
    //event.preventDefault();
    //if(event.target.tagName === 'IMG') {
     //   alert('stop that')
   // }
    //} else if {
        

   // }
//})







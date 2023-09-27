
document.addEventListener('DOMContentLoaded', function() {
    
  
    
  function forappend(val1, val2, val3) {
    //select div to append to
    const div = document.createElement('div')
    //a.b. set size of container in html for image
    const mn = document.querySelector('main');
    mn.append(div)
    const image = document.createElement('img')
    image.src = val1;
    div.append(image);
   

    //set css properties for this container for the text or just add text to div
    
    const b1 = document.createElement('b');
    b1.classList.add('b1')
    b1.textContent = val2;
    div.append(b1);
    

    const b2 = document.createElement('b');
    b2.classList.add('b2')
    b2.textContent = val3;
    div.append(b2)

   
    

    //reset
    url.value = '';
    tptxt.value = '';
    bottxt.value = '';
  }

  document.addEventListener('submit', function(event){
    event.preventDefault()
    //select elements
    const url = document.querySelector('#url');
    const tptxt = document.querySelector('#tptxt');
    const bottxt = document.querySelector('#bottxt');
   
    //assign input values
    const urlval = url.value;
    console.log(urlval);

    const tptxtval = tptxt.value;
    console.log(tptxtval)

    const bottxtval = bottxt.value;
    console.log(bottxtval);

    //call function to append
    forappend(urlval, tptxtval, bottxtval)
  
  })
  
  document.addEventListener('click', function(event) {
    const eventtarget = event.target.tagName.toLowerCase();
    console.log(event);
    if (eventtarget === 'img') {
      event.target.parentElement.remove();
    } else {

    }
  })

})  
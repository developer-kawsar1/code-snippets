




fetch('/search/search.json')
.then(res=>res.json())
.then(data=>{
  console.log(data);
  
  console.log(data);
  
  for(single of data){
    const div = document.createElement('div');
    div.classList.add('my-component')
    div.innerHTML = `
        <nav>
        <div class="nav nav-tabs" id="nav-tab-${single.id}" role="tablist">
          <button class="nav-link active" id="nav-home-tab-${single.id}" data-bs-toggle="tab" data-bs-target="#nav-home-${single.id}" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Output</button>
          <button class="nav-link" id="nav-profile-tab-${single.id}" data-bs-toggle="tab" data-bs-target="#nav-profile-${single.id}" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Html</button>
          <button class="nav-link" id="nav-contact-tab-${single.id}" data-bs-toggle="tab" data-bs-target="#nav-contact-${single.id}" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Css</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent-${single.id}">
        <div class="tab-pane p-2  fade show active" id="nav-home-${single.id}" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
           ${single.html}
        </div>
        <div class="tab-pane fade" id="nav-profile-${single.id}" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
           
           <textarea name="" id="textarea-${single.id}" cols="30" rows="10">
             ${single.html}
            
           </textarea>
           <button class="btn btn-danger" data-clipboard-action="cut" data-clipboard-target="#textarea-${single.id}">
               Cut to clipboard
           </button>
            
        </div>
        <div class="tab-pane fade" id="nav-contact-${single.id}" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
           <textarea name="" id="textarea-css-${single.id}" cols="30" rows="10">
              ${single.css}
                  
            </textarea>
               <button class="btn btn-danger" data-clipboard-action="cut" data-clipboard-target="#textarea-css-${single.id}">
                           Cut to clipboard
               </button>
        </div>
      </div>
      
      `
      document.body.appendChild(div);
  }
  
  
  
  
})


var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);

  e.clearSelection();
});

clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});

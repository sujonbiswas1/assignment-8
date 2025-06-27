
const addTask = document.getElementById('addTask');
addTask.addEventListener('click',(e)=>{
     e.preventDefault();

     const inputBox = document.getElementById('inputBox');
     const text = inputBox.value.trim();
     if(text==''){
          alert('please enter your text')
          return;
     }

     const li = document.createElement('li');
     const span = document.createElement('span');
     span.innerText = text;
     

     const button = document.createElement('button');
     button.innerText = '✅';
     button.classList.add('markStyle')
     button.onclick = function(){
          if(span.style.textDecoration =='line-through'){
               span.style.textDecoration = 'none'
               span.style.color ='black'
               button.innerText = '✅'
               
          }
          else{
               span.style.textDecoration = 'line-through'
               button.innerText = '🔁'
               span.style.color = 'red'

          }
     }

     const editBtn = document.createElement('button')
     editBtn.innerText = '✏️';
     editBtn.classList.add('editStyle')
     let inputField;
     let editing=false;

     editBtn.onclick = function(){
              if(!editing){
              inputField = document.createElement('input');
              inputField.type= "text"
              inputField.classList.add('inputStyle')
              inputField.value = span.innerText;
              li.insertBefore(inputField,span);
              li.removeChild(span)
              editBtn.innerText = '📝'
              editing=true;

          }
          else{
              const input1 = inputField.value.trim()
               if(input1 !==''){
                    span.innerText =inputField.value;
                    li.insertBefore(span,inputField)
                    li.removeChild(inputField);
                    editBtn.innerText = '✏️';
                    editing=false;
               }
          }
         
     }

     const deleteBtn = document.createElement('button');
     deleteBtn.classList.add('deleteStyle')
     deleteBtn.innerText = '🗑';
     deleteBtn.onclick = function(){
          li.remove()
     }

     li.appendChild(span)
     li.appendChild(button)
     li.appendChild(editBtn)
     li.appendChild(deleteBtn)
     const itemContent = document.getElementById('item-content');
     itemContent.appendChild(li)
     inputBox.value = ''
});


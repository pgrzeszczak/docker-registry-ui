function component(): HTMLElement {
   var element: HTMLElement = document.createElement('div');

   element.innerHTML = "Hello world!!!";

   return element;
 }

 document.body.appendChild(component());

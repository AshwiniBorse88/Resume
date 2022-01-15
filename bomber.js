function addGrid(){
     const appElement=document.getElementById('app');
for(let i=0;i<=9;i++){
      const row=document.createElement('div');
     for(let j=0;j<9;j++){
          const column=display='inline-block';
          column.style.width='60px';
          column.style.height='60px';
          column.style.border='1px solid black';
          column.style.textAlign ='center';
          column.style.verticalAlign='middle';
          row.appElement(column);

          
          
          
     }
      appElement.appendChild('div');
      
 }
}
addGrid();
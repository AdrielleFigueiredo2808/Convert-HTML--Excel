document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const dataNascimento = document.getElementById('dataNascimento').value;
  const cidade = document.getElementById('cidade').value;

  const tbody = document.querySelector('#pessoasTable tbody');
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${nome}</td>
     <td>${idade} anos</td>
    <td>${dataNascimento}</td>
    <td>${cidade}</td>
   
  
  `;

  tbody.appendChild(tr);

  // Clear the form
  document.getElementById('cadastroForm').reset();
});

document.getElementById('btnExport').addEventListener('click', function() {
  const table = document.getElementById('pessoasTable');
  let html = table.outerHTML;
  
  let link = document.createElement('a');
  link.href = 'data:application/vnd.ms-excel;base64,' + base64Encode(html);
  link.download = 'pessoas.xls';
  link.click();
});

function base64Encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}


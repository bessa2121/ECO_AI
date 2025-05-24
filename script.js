//   const enderecoInput = document.getElementById('input-endereco');
//   const materiaisInput = document.getElementById('input-materiais');
//   const enderecoDisplay = document.getElementById('endereco');
//   const materiaisDisplay = document.getElementById('materiais');
//   const botao = document.querySelector('.button');

//   // Atualiza a visualização sempre que o cliente altera os campos
//   function atualizarVisualizacao() {
//     const endereco = enderecoInput.value.trim() || "Endereço não informado";
//     const materiais = materiaisInput.value.trim() || "Nenhum material selecionado";

//     enderecoDisplay.textContent = endereco;
//     materiaisDisplay.textContent = materiais;
//   }

//   enderecoInput.addEventListener('input', atualizarVisualizacao);
//   materiaisInput.addEventListener('input', atualizarVisualizacao);

//   // Quando iniciar coleta
//   botao.addEventListener('click', () => {
//     const endereco = enderecoInput.value.trim();
//     const materiais = materiaisInput.value.trim();

//     if (!endereco || !materiais) {
//       alert("Preencha o endereço e os materiais antes de iniciar a coleta.");
//       return;
//     }

//     // Armazenar no localStorage (simulação de backend)
//     const coleta = {
//       endereco,
//       materiais,
//       dataHora: new Date().toLocaleString()
//     };

//     localStorage.setItem('ultimaColeta', JSON.stringify(coleta));

//     alert("Coleta iniciada com sucesso!\nEndereço: " + endereco + "\nMateriais: " + materiais);
//   });
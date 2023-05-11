  // Essa função é para estilizar o Alert, utilizamos uma biblioteca chamada SweetAlert para isso
    function mostrar() {
      swal({
        title: "Você tem Certeza?",
        text: "Você esta prestes a acessar o conteúdo do curso, agora clique em OK para ser redirecionado para a página do Conteúdo!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        className: "meu-titulo" // classe adicionada ao título
      })
        .then((willDelete) => {
          if (willDelete) {
            swal("Vamos Nessa!", "Você será redirecinado para o Conteúdo de Estudo!", "success");
            setTimeout(function () {
              // Aqui devemos colocar o caminho que leva até a pagina do Quiz
              window.location = href = "index_conteudo_de_estudo.html";
            }, 3000);
          } else {
            swal("Ainda tem dúvidas, clique em OK para continuar nesta tela!");
          }
        });
    }

    // Essa função é para estilizar o Alert, utilizamos uma biblioteca chamada SweetAlert para isso
    function acessar() {
      swal({
        title: "Você tem Certeza?",
        text: "Só clique no botão Concluído após ler todo o conteúdo, ou clique em OK para ser redirecionado para o Quiz!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        className: "meu-titulo" // classe adicionada ao título
      })
        .then((willDelete) => {
          if (willDelete) {
            swal("Bom Trabalho", "Você será redirecinado para o Quiz!", "success");
            setTimeout(function () {
              // Aqui devemos colocar o caminho que leva até a pagina do Quiz
              window.location = href = "Quiz.html";
            }, 3000);
          } else {
            swal("Termine de ler o conteúdo e clique novamente em Confirmar para acessar o Quiz");
          }
        });
    }
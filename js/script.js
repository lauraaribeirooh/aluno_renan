var conceito = "";

   conceito = prompt('Digite a nota do aluno em formato de letra variando de A a F');

switch (conceito.toLowerCase()){
  case "a":
    alert("Exelente");
    break;
  case "b":
    alert("Ótimo");
    break;
  case "c":
    alert("Bom");
    break;
    case "d":
    alert("Regular");
    break;
    case "e":
    alert("Ruim");
    break;
    case "f":
    alert("Nos vemos no ano que vem");
    break;
    

    default:
        alert("Nota Invalida, esta letra não é respectiva a nenhum conceito")
    
}
let tarefas = [
  "Estudar HTML",
  "Estudar CSS",
  "Praticar JavaScript",
  "Estudar Laravel",
  "Revisar conteúdo"
];


console.log("Lista de Tarefas Inicial");
console.log([...tarefas]);


tarefas.splice(3, 1);                            
tarefas.splice(1, 1, "Estudar Tailwind CSS");   
tarefas.splice(2, 0, "Fazer exercícios de JS");  

console.log(" Lista de Tarefas Atualizada!");
console.log([...tarefas]);
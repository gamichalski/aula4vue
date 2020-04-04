new Vue({
  el: "#app",
  data() {
    return {
      title: "Lista de atividades",
      item: "",
      tasks: [{
        description: "Ler conteúdo vue",
        done: false,
        isEditing: false
      }, {
        description: "Finalizar desafios vue",
        isEditing: false
      }]
    }
  },
  methods: {
    insertNewTask(description) {
      this.tasks.push({ description, done: false, isEditing: false })
      this.item = ""
    },
    changeStatusTask(task) {
      task.done = !task.done
    },
    setEditingMode(task) {
      task.newDescription = task.description;
      task.isEditing = true
    },
    cancelEditingMode(task) {
      delete task.newDescription;
      task.isEditing = false
    },
    saveEditing(task) {
      task.description = task.newDescription
      delete task.newDescription;
      task.isEditing = false
    },
  }
})
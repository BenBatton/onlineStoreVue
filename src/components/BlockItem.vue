<template>
  <div class="table">
    <!-- <h2>Todo App</h2>
    <router-link to="/">Home</router-link>
    <hr />-->

    <AddTodo @add-todo="addTodo" />

    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>

    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";
export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
    };
  },

  mounted() {
    // fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    fetch(
      "https://raw.githubusercontent.com/BenBatton/online-store-api/master/catalogTest.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },

  //   watch: {
  //     filter(value) {
  //       console.log(value);
  //     },
  //   },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "completed") {
        return this.todos.filter((t) => t.completed);
      }
      if (this.filter === "not-completed") {
        return this.todos.filter((t) => !t.completed);
      }
    },
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
};
</script>

<style lang="sass" scoped>
.table
  width: 800px
  background-color: blue
</style>

<template>
  <div class="ui container">
    <input v-model="filterBy" placeholder="Filter By Last Name">
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th @click="sortBy = 'firstName'">First Name</th>
          <th @click="sortBy = 'lastName'">Last Name</th>
          <th @click="sortBy = 'email'">Email</th>
          <th @click="sortBy = 'phone'">Phone</th>
          <th @click="sortBy = 'department'">Department</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in sortedEmployees" :key="index">
          <td>
            <img :src="employee.photoUrl" class="ui mini rounded image" />
          </td>
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.phone }}</td>
          <td>{{ employee.department }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="6">{{sortedEmployees.length}} employees</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'StaffDirectory',
    data() {
      return {
        filterBy: "",
        sortBy: 'department',
        employees: [
          // omitted for brevity
        ]
      }
    },
    computed: {
      sortedEmployees() {
        return this.employees.filter(
          employee => employee.lastName.includes(this.filterBy)
        ).sort(
          (a, b) => a[this.sortBy].localeCompare(b[this.sortBy])
        );
      }
    }
  }
</script>

<style>
  h1.ui.center.header {
    margin-top: 3em;
  }

  .ui.table th:not(:first-child):hover {
    cursor: pointer;
  }

  input {
    padding: 3px;
  }
</style>

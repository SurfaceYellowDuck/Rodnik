<template>
  <div class="abonements">
    <nav>
      <router-link to="/abonements">Абонементы</router-link>
      |
      <router-link to="/clients">Клиенты</router-link>
      |
      <router-link to="/activities">Занятия</router-link>
    </nav>
    <table>
      <thead>
      <tr>
        <th>Номер</th>
        <th>Имя клиента</th>
        <th>Фамилия клиента</th>
        <th>Наименование абонемента</th>
        <th>Количество занятий</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td><router-link to="/abonement_info">1</router-link></td>
        <td><router-link to="/client">Алексей</router-link></td>
        <td>Оболонский</td>
        <td>Большой</td>
        <td>16</td>
      </tr>
      </tbody>
    </table>
    <form action="add_abonement">
      <button class="btn add-action">Продать абонемент</button>
    </form>
  </div>
</template>
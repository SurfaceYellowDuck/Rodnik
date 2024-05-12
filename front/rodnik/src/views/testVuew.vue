<template>
  <div v-for="session in sessions" :key="session.id">
    <v-dropdown>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">Тренер</v-btn>
      </template>

      <v-list>
        <v-list-item v-for="trainer in trainers[session.id]" :key="trainer">
          <v-list-item-title @click="selectTrainer(session, trainer)">{{ trainer }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-dropdown>

    <div v-if="selectedTrainers[session.id]">
      Выбранный тренер: {{ selectedTrainers[session.id] }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      sessions: [
        { id: 1, name: 'Сессия 1' },
        { id: 2, name: 'Сессия 2' },
        { id: 3, name: 'Сессия 3' },
      ],
      trainers: {
        1: ['Тренер 1', 'Тренер 2'],
        2: ['Тренер 3', 'Тренер 4'],
        3: ['Тренер 5', 'Тренер 6'],
      },
      selectedTrainers: {},
    };
  },
  methods: {
    selectTrainer(session, trainer) {
      this.selectedTrainers[session.id] = trainer;
    },
  },
};
</script>
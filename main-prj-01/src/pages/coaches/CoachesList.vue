<template>
  <section>
    <coach-filter @change-filter='setFilters'></coach-filter>
  </section>
  <section>
    <base-card>
      <div class='controls'>
        <base-button mode='outline'>Refresh</base-button>
        <base-button v-if='!isCoach' link to='/register'>Register as a couch</base-button>
      </div>
      <ul v-if='hasCouches'>
        <coach-item v-for='coach in filteredCoaches' :key='coach.id'
                    :id='coach.id'
                    :first-name='coach.firstName'
                    :last-name='coach.lastName'
                    :areas='coach.areas'
                    :rate='coach.hourlyRate'

        ></coach-item>
      </ul>
      <h3 v-else>No coaches found!</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '@/components/coaches/CoachItem';
import BaseCard from '@/components/ui/BaseCard';
import CoachFilter from '@/components/coaches/CoachFilter';

export default {
  name: 'CoachesList',
  components: { CoachFilter, BaseCard, CoachItem },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];

      return coaches.filter(coaches => {
        if (this.activeFilters.frontend && coaches.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coaches.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coaches.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCouches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    }
  }

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

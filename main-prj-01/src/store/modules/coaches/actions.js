import axios from 'axios';

export default {

  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };
    const response = await axios.put(`https://learning-vue-d6595-default-rtdb.firebaseio.com/coaches/${userId}.json`, JSON.stringify(coachData));

    if (!response) {
      context.commit('registerCoach', coachData);
    }


  }
};

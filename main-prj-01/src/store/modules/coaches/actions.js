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

    if (response.status === 200) {
      context.commit('registerCoach', {
        ...coachData,
        id: userId
      });
    } else {
      //
    }


  },
  async loadCoaches(context) {

    const response = await axios.get(`https://learning-vue-d6595-default-rtdb.firebaseio.com/coaches.json`);

    try {
      const responseData = response.data;
      if (response.status >= 300 && response.status < 200) {
        throw new Error('Could not retriever data!');
      }

      const coaches = [];
      for (const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas
        };
        coaches.push(coach);
      }

      context.commit('setCoaches', coaches);

    } catch (error) {
      //
      // console.error(error)
    }

  }
};

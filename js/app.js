const API_URL = 'https://workspace-methed.vercel.app';
const LOCATION_URL = '/api/locations';

const getData = async (url, cbSuccess, cbError) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    cbSuccess(data);
  } catch (err) {
    cbError(err);
  }
};

const init = () => {
  const citySelect = document.querySelector('#city');

  const choices = new Choices(citySelect, {
    itemSelectText: '',
  });

  getData(
    `${API_URL}${LOCATION_URL}`,
    (data) => {
      const locations = data.map((location) => ({
        value: location,
      }));
      choices.setChoices(locations, 'value', 'label', true);
    },
    (err) => {
      console.log(err);
    }
  );
};

init();

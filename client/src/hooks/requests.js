const API_URL = 'v1';

// Load planets and return as JSON.
async function httpGetPlanets() {
  const respone = await fetch(`${API_URL}/planets`);
  return await respone.json();
}
// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const respone = await fetch(`${API_URL}/launches`);
  const fetchedLaunch = await respone.json();
  return fetchedLaunch.sort(function (a, b) {
    return a.flightNumber - b.flightNumber;
  });
}
// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(launch),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}
// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: 'delete',
    });
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };

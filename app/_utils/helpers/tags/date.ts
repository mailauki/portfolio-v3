/* eslint-disable no-console */
export async function getDate() {
  const url = "https://github.com/mailauki/tic-tac-toe-angular/commits/main/";
  // const url = "https://pokeapi.co/api/v2/pokemon/ditto";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response;

    console.log(json);
  } catch (error) {
    console.error(error);
  }
}

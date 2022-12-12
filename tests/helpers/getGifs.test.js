import { getGifs } from "../../src/helpers/getGifs";

describe("Tests en el componente getGifs", () => {
  test("Debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch");
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      // Se espera que el objeto tenga las siguientes propiedades y que sean del tipo indicado
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});

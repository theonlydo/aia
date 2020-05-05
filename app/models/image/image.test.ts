import { ImageModel, Image } from "./image"

test("can be created", () => {
  const instance: Image = ImageModel.create({})

  expect(instance).toBeTruthy()
})
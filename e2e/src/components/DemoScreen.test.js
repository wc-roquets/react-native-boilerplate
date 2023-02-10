/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should have demo react native', async () => {
    await expect(element(by.id('demo-component'))).toBeVisible();
  });
});

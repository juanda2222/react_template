import React from 'react';
import { getDumbData } from "./index"
test('Parse getMenuInfo response algorithm test test', async () => {

  const menuInfo = await getDumbData("somestring")
  console.log("Menu info loaded: ", menuInfo)
  expect(menuInfo.length).toBe(3);
  
});

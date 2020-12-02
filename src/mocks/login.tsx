import Mock from "mockjs";
export const login = Mock.mock(`user/login`, (data: any) => {
  return true;
});

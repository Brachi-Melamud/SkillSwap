class Config {
  public port = 3000;
  public mysqlHost = "localhost";
  public mysqlUser = "root";
  public mysqlPassword = "123456789";
  public mysqlDatabase = "skillSwap";
}

const config = new Config();
export default config;
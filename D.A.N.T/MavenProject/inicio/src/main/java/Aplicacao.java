import static spark.Spark.*;

import Estruturas.DAOStruct.*;

import Service.UserService;

public class Aplicacao {
   
   public static void main(String[] args) throws Exception {
      UserService user = new UserService();
      path("/HomePage", () -> {
         post("/login", (req, res) -> {
            int response = user.auth(req,res);
            return response;
         });
      });
   }
}

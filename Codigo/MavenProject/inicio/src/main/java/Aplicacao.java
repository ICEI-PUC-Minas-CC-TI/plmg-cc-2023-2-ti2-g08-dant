import static spark.Spark.*;

import Service.UserService;

import com.google.gson.*;

public class Aplicacao {
   
   public static void main(String[] args) throws Exception {
      UserService user = new UserService();
      port(4000);
      path("/Index", () -> {
         get("/login", (req, res) -> {
            int response = user.auth(req,res);
            return response;  
         });
         post("/registro", (req, res) -> {
            boolean response = user.registro(req, res);
            return response;
         });
      });
      
      path("/HomePage", () -> {
         
      });
   }
}

import static spark.Spark.*;

import Service.*;

import Estruturas.Objetos.Game;

public class Aplicacao {

   public static void main(String[] args) throws Exception {
      UserService user = new UserService();
      GamesService game = new GamesService();
      

      port(4567);
      path("/Index", () -> {
         get("/login", (req, res) -> user.auth(req, res));
         post("/registro", (req, res) -> {
            boolean response = user.registro(req, res);
            return response;
         });
      });

      path("/HomePage", () -> {
         get("/", (req, res) -> game.getGames());
      });
   }
}

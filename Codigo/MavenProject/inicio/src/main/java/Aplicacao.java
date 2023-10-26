import static spark.Spark.*;

import Service.*;


import com.google.gson.*;

import Estruturas.Objetos.Game;


public class Aplicacao {

   public static void main(String[] args) throws Exception {
      UserService user = new UserService();
      GamesService game = new GamesService();
      

      port(4567);
      path("/Index", () -> {
         post("/login", (req, res) -> {
            int response = user.auth(req, res);
            return response;
         });
         post("/registro", (req, res) -> {
            boolean response = user.registro(req, res);
            return response;
         });
      });

      path("/HomePage", () -> {
         post("/", (req, res) -> {
            Game [] response = game.getGames();
            return response;
         });
      });
   }
}

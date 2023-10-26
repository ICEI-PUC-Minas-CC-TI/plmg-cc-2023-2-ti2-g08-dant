import static spark.Spark.*;
import Service.*;
import com.google.gson.*;
import Estruturas.Objetos.Game;

public class Aplicacao {
    public static void main(String[] args) throws Exception {
        UserService user = new UserService();
        GamesService game = new GamesService();

        // Habilitar o suporte a CORS (Cross-Origin Resource Sharing)
        options("/*", (request, response) -> {
            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*"); // Permitir todas as origens (modifique conforme necessário)
        });

        path("/Index", () -> {
            get("/login", (req, res) -> user.auth(req,res));
            post("/registro", (req, res) -> {
                boolean response = user.registro(req, res);
                return response;
            });
        });

        path("/HomePage", () -> {
            get("/", (req, res) -> game.getGames());
        });

        // /HomePage/
    }
}
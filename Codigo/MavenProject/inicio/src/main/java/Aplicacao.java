import static spark.Spark.*;
import Service.*;
import Estruturas.*;

public class Aplicacao {
    public static void main(String[] args) throws Exception {
        UserService user = new UserService();
        GamesService game = new GamesService();
        ForumService forum = new ForumService();

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
            response.header("Access-Control-Allow-Origin", "*"); // Permitir todas as origens (modifique conforme
                                                                 // necessário)
        });

        path("/Index", () -> {
            // autentica o usuario
            get("/login", (req, res) -> user.auth(req, res));
            // registra o usuario
            post("/registro", (req, res) -> {
                boolean response = user.registro(req, res);
                return response;
            });
        });

        path("/HomePage", () -> {
            get("/", (req, res) -> game.getGames());
        });

        path("/UserPage", () -> {
            // pega usuario por id
            get("/user", (req, res) -> user.getUserById(req, res));
            // deleta usuario por id
            delete("/delete", (req, res) -> user.deleteUserById(req, res));
            // muda informações de um usuario
            put("/update", (req, res) -> user.update(req, res));
        });

        path("/ForumPage", () -> {
            // pega forum por id
            get("", (req, res) -> forum.getForumById(req, res));
            // cadastra forum
            post("/new", (req, res) -> {
                boolean response = forum.newForum(req, res);
                return response;
            });
            //Delete Forum
            delete("/delete", (req, res) -> forum.deleteForum(req, res));
        });
    }
}
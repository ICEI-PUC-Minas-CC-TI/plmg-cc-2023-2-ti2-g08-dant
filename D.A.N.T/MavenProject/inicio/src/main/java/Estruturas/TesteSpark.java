package Estruturas;

import static spark.Spark.*;

import Service.UserService;

import com.google.gson.Gson;

import Estruturas.DAOStruct.UserDAO;

public class TesteSpark {
    public static void main(String[] args) {
        UserService service = new UserService();
        path("/teste", () -> {
            get("/hello", (req, res) -> "Sexo infinito");
            post("/", (request, response) -> {
                String user = request.queryParams("user");
                System.out.println(user);
                String senha = request.queryParams("senha");
                System.out.println(senha);
                int res = service.auth(request, response);
                return res;
            });
        });
    }
}
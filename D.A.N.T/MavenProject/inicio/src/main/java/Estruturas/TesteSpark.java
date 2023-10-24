package Estruturas;

import static spark.Spark.*;

import com.google.gson.Gson;

import Estruturas.DAOStruct.UserDAO;

public class TesteSpark {
    public static void main(String[] args) {
        UserDAO teste = new UserDAO();
        path("/teste", () ->{
            get("/hello", (req, res) -> "Sexo infinito");
            post("/", (request, response) -> {
                String user = request.queryParams("user");
                System.out.println(user);
                String senha = request.queryParams("senha");
                System.out.println(senha);
                teste.authentication(user,senha);   
                return 0;
            });
        });
    }
}
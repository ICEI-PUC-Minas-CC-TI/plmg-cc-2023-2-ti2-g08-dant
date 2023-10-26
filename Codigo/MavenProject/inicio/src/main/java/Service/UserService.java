package Service;

import Estruturas.Tools.Converter;
import spark.Request;
import spark.Response;
import spark.Spark.*;


import com.google.gson.Gson;

import Estruturas.DAOStruct.UserDAO;

public class UserService {
    UserDAO user = new UserDAO();
    Converter conv = new Converter();

    public Boolean registro (Request req, Response res){
        String nome = req.queryParams("nome");
        String email = req.queryParams("email");
        String senha = req.queryParams("senha");
        String dataNasc = req.queryParams("nasc");

        senha = conv.CriptografarMd5(senha);

        try {
            user.inserirUsuario(nome, senha, email, dataNasc);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public int auth (Request req, Response res) throws Exception{
        String email = req.queryParams("email");
        String senha = req.queryParams("senha");

        senha = Converter.CriptografarMd5(senha);
        int id = user.authentication(email, senha);

        if (id ==  0) {
            return 0;
            //retorna 0 se o usuario não for encontrado no BD
        }
        else{
            return id;
            //retorna o ID do usuario caso o mesmo for encontrado
        }
    }
}

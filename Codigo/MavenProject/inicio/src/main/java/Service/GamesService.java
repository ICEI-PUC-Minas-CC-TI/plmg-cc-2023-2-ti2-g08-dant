package Service;

import Estruturas.DAOStruct.GameDAO;

import Estruturas.Objetos.Game;

import spark.Request;
import spark.Response;

import java.util.LinkedList;

import com.google.gson.Gson;

public class GamesService {
    GameDAO game = new GameDAO();
    Gson gson = new Gson();

    public String getGames() throws Exception {

        LinkedList<Game> gamearr = new LinkedList<>();

        gamearr = game.GetAllGames();

        return gson.toJson(gamearr);
    }
}

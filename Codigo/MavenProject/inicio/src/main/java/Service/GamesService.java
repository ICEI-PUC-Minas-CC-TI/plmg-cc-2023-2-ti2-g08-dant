package Service;

import Estruturas.DAOStruct.GameDAO;

import Estruturas.Objetos.Game;

import java.util.LinkedList;

import com.google.gson.Gson;

public class GamesService {
    public String getGames() throws Exception{
        Gson gson = new Gson();

        GameDAO game = new GameDAO();

        LinkedList<Game> gamearr = new LinkedList<>();

        gamearr = game.GetAllGames();

        return gson.toJson(gamearr);
    }
}

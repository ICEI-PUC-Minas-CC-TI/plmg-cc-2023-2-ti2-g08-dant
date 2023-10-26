package Service;

import com.google.gson.*;

import Estruturas.DAOStruct.GameDAO;

import Estruturas.Objetos.Game;

import java.util.concurrent.ThreadLocalRandom;

import java.util.ArrayList;
import java.util.LinkedList;

public class GamesService {
    public Game[] getGames() throws Exception{
        Gson gson = new Gson();
        GameDAO game = new GameDAO();
        String json = "";

        LinkedList<Game> gamearr = new LinkedList<>();

        gamearr = game.GetAllGames();

        Game[] allGames = (Game[]) gamearr.toArray();

        return allGames;
    }
}

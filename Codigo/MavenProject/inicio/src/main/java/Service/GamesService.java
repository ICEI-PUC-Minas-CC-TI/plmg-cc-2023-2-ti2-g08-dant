package Service;

import com.google.gson.*;

import Estruturas.DAOStruct.GameDAO;

import Estruturas.Objetos.Game;

import java.util.concurrent.ThreadLocalRandom;

import java.util.ArrayList;

public class GamesService {
    public Gson carrossel (){
        Gson gson = new Gson();
        GameDAO game = new GameDAO();

        ArrayList <Game> arr = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            int randomID = ThreadLocalRandom.current().nextInt(10, 3901);
            arr.add(game.getGameByID(randomID));
        }
        gson.toJson(arr);
        return gson;
    }
}

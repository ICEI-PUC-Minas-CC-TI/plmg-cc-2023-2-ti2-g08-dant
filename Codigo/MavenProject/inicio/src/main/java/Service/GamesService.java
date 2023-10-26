package Service;

import com.google.gson.*;

import Estruturas.DAOStruct.GameDAO;

import Estruturas.Objetos.Game;

import java.util.concurrent.ThreadLocalRandom;

import java.util.ArrayList;

public class GamesService {
    public Game[] carrossel (){
        Gson gson = new Gson();
        GameDAO game = new GameDAO();
        String json = "";

        Game[] gamearr = new Game [5];

        for (int i = 10, j = 0; i < 60; i+=10, j++) {
            gamearr[j] = (game.getGameByID(i));
        }

        return gamearr;
    }
}

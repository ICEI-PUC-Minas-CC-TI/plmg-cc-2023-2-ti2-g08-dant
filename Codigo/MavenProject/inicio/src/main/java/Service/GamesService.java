package Service;


import Estruturas.DAOStruct.GameDAO;

import Estruturas.Objetos.Game;

import java.util.LinkedList;

public class GamesService {
    public Game[] getGames() throws Exception{
        GameDAO game = new GameDAO();

        LinkedList<Game> gamearr = new LinkedList<>();

        gamearr = game.GetAllGames();

        Game[] allGames = (Game[]) gamearr.toArray();

        return allGames;
    }
}

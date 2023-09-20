import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.util.LinkedList;
import java.io.*;
import java.net.*;

public class Main {

   public static void main(String[] args) throws Exception {

      GameDAO gamedao = new GameDAO();

      LinkedList<Game> gameList = gamedao.GetAllGames();

      System.out.println("todos os jogos:\n\n");
      // tratar exceção null pointed no for each

      gameList.forEach(gamedata -> {
         gamedata.setJson(GetGameJson.GetGameJsonData(gamedata.getAppid()));
         System.out.println(gamedata.getJson());
         
         gamedao.InsertJson(gamedata.getAppid(), gamedata.getJson());


      });

      gamedao.closeConnection();

   }

}

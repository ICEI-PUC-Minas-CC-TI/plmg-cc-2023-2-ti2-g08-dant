/*import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;

import java.io.*;
import java.net.*;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;*/

import java.util.LinkedList;
import Estruturas.Objetos.*;
import Estruturas.DAOStruct.*;

public class Main {
   
   public static void main(String[] args) throws Exception {
/* 
     
      GameDAO gamedao = new GameDAO();
      
      LinkedList<Game> gameList = gamedao.GetAllGames();

      System.out.println("todos os jogos:\n\n");
      // tratar exceção null pointed no for each

      gameList.forEach(gamedata -> {
         gamedata.setJson(GetGameJson.GetGameJsonData(gamedata.getAppid()));
         System.out.println(gamedata.getJson());
         
         gamedao.InsertJson(gamedata.getAppid(), gamedata.getJson());


      }); */

      UserDAO userdao = new UserDAO();
      //print os usuarios
      for(User e : userdao.getAllUsers()){
         System.out.println(e.getEmail() + " " + e.getSenha() + " \n");
      }
      System.out.println( "AUTENTICANDO...\n" + userdao.authentication("gaok@gmail.com","Kamado2022"));
   }

}

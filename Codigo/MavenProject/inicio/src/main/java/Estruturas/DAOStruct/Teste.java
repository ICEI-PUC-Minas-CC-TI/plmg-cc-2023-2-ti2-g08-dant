package Estruturas.DAOStruct;
import java.sql.PreparedStatement;
import Estruturas.DAOStruct.GameDAO;
import Estruturas.Objetos.Forum;
import Estruturas.Objetos.Game;
import java.util.LinkedList;
import Estruturas.Objetos.Post;
import java.sql.ResultSet;
import java.sql.SQLException;
public class Teste {
    public static void delete(){
        DAO dao = new DAO();
        String sql = "DELETE FROM games";
        try (PreparedStatement preparedStatement = dao.conexao.prepareStatement(sql)) {
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao deletar jogo", e);
        }
    }
    public static void main(String[] args)throws Exception {
      GameDAO jogodao = new GameDAO();
        LinkedList<Game> allgames = jogodao.GetAllGames();
 
        for(Game g : (LinkedList<Game>)allgames){
       
        }
      
        //deletar todos os games
        delete();
        inserirGame(allgames);


       
    }

    public static void inserirGame(LinkedList<Game> games){
        int appid = 1;
        for(Game g : games){
            GameDAO gameDAO = new GameDAO();
            gameDAO.insertGame(appid, g.getNome(), g.getJson());
            appid++;
            System.out.println("Inserido" + g.getNome());
        }
        
     
    }
}

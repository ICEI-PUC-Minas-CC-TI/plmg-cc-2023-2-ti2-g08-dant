import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;

public class GameDAO { 
    


    private Connection conexao;

    public GameDAO() {
        conectar();
    }

    public boolean conectar() {
            String driverName = "org.postgresql.Driver";                    
            String serverName = "localhost";
            String mydatabase = "DANT";
            int porta = 5432;
            String url = "jdbc:postgresql://" + serverName + ":" + porta +"/" + mydatabase;
            String username = "gaok1";
            String password = "2004";
            boolean status = false;
    
            try {
                Class.forName(driverName);
                conexao = DriverManager.getConnection(url, username, password);
                status = (conexao == null);
                System.out.println("Conexão efetuada com o postgres!\n\n");
            } catch (ClassNotFoundException e) { 
                System.err.println("Conexão NÃO efetuada com o postgres -- Driver não encontrado -- " + e.getMessage());
            } catch (SQLException e) {
                System.err.println("Conexão NÃO efetuada com o postgres -- " + e.getMessage());
            }
    
            return status;
        }

    public void insertGame(int appid, String name,String json) {
        String sql = "INSERT INTO games (appid, nome,json) VALUES (?, ?,?)";
        try (PreparedStatement preparedStatement = conexao.prepareStatement(sql)) {
            preparedStatement.setInt(1, appid);
            preparedStatement.setString(2, name);
            preparedStatement.setString(3, json);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao inserir jogo", e);
        }
    }


      public void removegameByID(int appid) {
        String sql = "DELETE FROM games WHERE appid = ?";
        try (PreparedStatement preparedStatement = conexao.prepareStatement(sql)) {
            preparedStatement.setInt(1, appid);
           
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao deletar jogo", e);
        }
    }

    public Game getGameByID(int appid) {
        Game game = null;
        String sql = "SELECT * FROM games WHERE appid = ?";
    
        try (PreparedStatement preparedStatement = conexao.prepareStatement(sql)) {

            preparedStatement.setInt(1, appid);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    game = new Game();
                    game.setAppid(resultSet.getInt("appid"));
                    game.setNome(resultSet.getString("nome"));
                    game.setNome(resultSet.getString("json"));
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao buscar o jogo por appid", e);
        }
    
        return game;
    }
    

    


    public LinkedList<Game> GetAllGames()throws Exception{
        LinkedList<Game> games = new LinkedList<Game>();
        
        String sql = "SELECT * FROM games where appid > 200 ORDER BY appid;";

        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        ResultSet resultSet = preparedStatement.executeQuery();
         while (resultSet.next()) {
                   games.add( new Game(resultSet.getInt("appid"), resultSet.getString("nome"),resultSet.getString("json")));
                   
                }
        return games;

    }


    public void InsertJson(int appid,String json){
        String sql = "UPDATE games SET json = ? WHERE appid = ?";
        try (PreparedStatement preparedStatement = conexao.prepareStatement(sql)) {
            //checar se game existe por appid
            preparedStatement.setString(1, json);
            preparedStatement.setInt(2, appid);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao inserir json", e);
        }
    }


    public void closeConnection() {
        if (conexao != null) {
            try {
                conexao.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}

    


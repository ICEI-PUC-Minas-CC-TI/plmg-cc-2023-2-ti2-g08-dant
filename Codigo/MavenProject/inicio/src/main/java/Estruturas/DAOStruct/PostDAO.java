package Estruturas.DAOStruct;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import Estruturas.Objetos.Post;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PostDAO extends DAO {

    public PostDAO() {
        super();
    }

    // as colunas em post se chamam id,postagem,forumID,UserID,categoria

    public boolean InserirPostagem(String postagem, int forumID, int UserID, int categoria) {
        String sql = "INSERT INTO posts (postagem,forumID,UserID,categoria) VALUES (?,?,?,?)";
        try {
            PreparedStatement preparedStatement = conexao.prepareStatement(sql);
            
            preparedStatement.setString(1, postagem);
            preparedStatement.setInt(2, forumID);
            preparedStatement.setInt(3, UserID);
            preparedStatement.setInt(4, categoria);
            preparedStatement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }

    }

    public boolean DeletePostById(int id) // id do post
    {
        String sql = "DELETE FROM posts WHERE id = ?";
        try {
            PreparedStatement preparedStatement = conexao.prepareStatement(sql);
            preparedStatement.setInt(1, id);
            preparedStatement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public Post getPostByID(int id) {
        Post post = null;
        String sql = "SELECT * FROM posts WHERE id = ?";
        try {
            PreparedStatement preparedStatement = conexao.prepareStatement(sql);
            preparedStatement.setInt(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                int idPost = resultSet.getInt("id");
                String postagem = resultSet.getString("postagem");
                int forumID = resultSet.getInt("forumID");
                int UserID = resultSet.getInt("UserID");
                int categoria = resultSet.getInt("categoria");
                post = new Post(idPost, postagem, forumID, UserID, categoria);
                return post;
            } else {
                return null;
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public LinkedList<Post> GetPostsBy(int forumIdP, int userIDP, int categoriaP) {
        LinkedList<Post> posts = new LinkedList<Post>();

        // Defina a consulta SQL base
        String sql = "SELECT * FROM posts WHERE 1=1"; // 1=1 é uma condição verdadeira, então não afeta a consulta
                                                      // possibilita usar ands e ors
        // Construa a consulta dinamicamente com base nos parâmetros fornecidos
        if (forumIdP > 0) {
            sql += " AND ForumID = " + forumIdP;
        }

        if (userIDP > 0) {
            sql += " AND UsuarioID = " + userIDP;
        }

        if (categoriaP > 0) {
            sql += " AND categoria = " + categoriaP;
        }

        try {
            PreparedStatement preparedStatement = conexao.prepareStatement(sql);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int idPost = resultSet.getInt("id");
                String postagem = resultSet.getString("postagem");
                int forumID = resultSet.getInt("ForumID");
                int UserID = resultSet.getInt("UsuarioID");
                int categoria = resultSet.getInt("categoria");
                Post post = new Post(idPost, postagem, forumID, UserID, categoria);
                posts.add(post);
            }

        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }

        return posts;
    }

    public LinkedList<Post> DeletePostsBy(int forumIdP, int userIDP, int categoriaP) {
        LinkedList<Post> posts = new LinkedList<Post>();

        // Defina a consulta SQL base
        String sql = "DELETE FROM posts WHERE 1=1"; // 1=1 é uma condição verdadeira, então não afeta a consulta
                                                    // possibilita usar ands e ors


        // Construa a consulta dinamicamente com base nos parâmetros fornecidos
        if (forumIdP > 0) {
            sql += " AND ForumID = " + forumIdP;
        }

        if (userIDP > 0) {
            sql += " AND UsuarioID = " + userIDP;
        }

        if (categoriaP > 0) {
            sql += " AND categoria = " + categoriaP;
        }

        try {
            PreparedStatement preparedStatement = conexao.prepareStatement(sql);
            preparedStatement.executeQuery();

        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }

        return posts;
    }

}

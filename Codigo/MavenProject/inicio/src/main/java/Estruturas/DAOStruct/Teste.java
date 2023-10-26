package Estruturas.DAOStruct;
import java.sql.PreparedStatement;
import Estruturas.DAOStruct.GameDAO;
import Estruturas.Objetos.Forum;
import Estruturas.Objetos.Game;
import java.util.LinkedList;
import Estruturas.Objetos.Post;
public class Teste {
  
    public static void main(String[] args) {
        
        // inserir posts em foruns
        PostDAO postdao = new PostDAO();
      
        Post posta = postdao.getPostByID(2);
        System.out.println(posta.getPostagem());
        /* 
       LinkedList<Post> post = postdao.GetPostsBy(1,2,1); // forum id, user id, categoria
        System.out.println(post.getFirst().getPostagem());
        post.pop();

          post = postdao.GetPostsBy(0,2,0); // forum id, user id, categoria
        System.out.println(post.getFirst().getPostagem());
        post.pop();

          post = postdao.GetPostsBy(0,0,1); // forum id, user id, categoria
        System.out.println(post.getFirst().getPostagem());
        post.pop();

          post = postdao.GetPostsBy(1,0,0); // forum id, user id, categoria
        System.out.println(post.getFirst().getPostagem());
        post.pop();
         */

    }
}

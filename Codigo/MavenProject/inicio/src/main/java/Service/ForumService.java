package Service;

import spark.Request;
import spark.Response;
import Estruturas.DAOStruct.ForumDAO;
import Estruturas.Objetos.Forum;

public class ForumService {
    ForumDAO forum = new ForumDAO();

    public Forum getForumById(Request req, Response res) throws Exception {
        int id = Integer.parseInt(req.queryParams("id"));

        return forum.getForumByGameID(id);
    }
}

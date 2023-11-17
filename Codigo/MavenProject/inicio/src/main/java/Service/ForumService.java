package Service;

import spark.Request;
import spark.Response;

import com.google.gson.Gson;

import Estruturas.DAOStruct.ForumDAO;
import Estruturas.Objetos.Forum;

public class ForumService {
    ForumDAO forum = new ForumDAO();
    Gson gson = new Gson();

    public String getForumById(Request req, Response res) throws Exception {
        int id = Integer.parseInt(req.queryParams("id"));

        return gson.toJson(forum.getForumByGameID(id));
    }

    public Boolean newForum(Request req, Response res) {
        Boolean resp = false;
        int gameId = Integer.parseInt(req.queryParams("gameID"));
        String nome = req.queryParams("gameName");

        resp = forum.insertForum(gameId, nome);
        return resp;
    }

    public Boolean deleteForum(Request req, Response res) {
        Boolean resp = false;
        int id = Integer.parseInt(req.queryParams("id"));
        resp = forum.removeForumByID(id);
        return resp;
    }
}

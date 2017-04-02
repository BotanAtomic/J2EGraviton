package web.graviton.servlet.function;

import web.graviton.core.Account;
import web.graviton.mysql.MysqlConnector;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Botan on 31/03/2017. 19:12
 */
public class CreateAccountFunction extends HttpServlet {


    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse responseData) throws ServletException, IOException {
        String username = request.getParameter("user");
        String password = request.getParameter("password");
        String question = request.getParameter("question");
        String response = request.getParameter("response");
        String email = request.getParameter("email");

        boolean created = false;

        if (!password.isEmpty() && !username.isEmpty())
            created = MysqlConnector.instance.createAccount(username, password, question, response, email);

        if(created)
            request.getSession().setAttribute("account", new Account(username, password, question, response, email));

        PrintWriter out = responseData.getWriter();
        responseData.setContentType("text/html");
        out.write(String.valueOf(created));

    }

}

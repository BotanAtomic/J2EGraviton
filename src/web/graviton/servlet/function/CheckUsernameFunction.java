package web.graviton.servlet.function;

import web.graviton.mysql.MysqlConnector;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Botan on 30/03/2017. 20:07
 */
public class CheckUsernameFunction extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        System.err.println("Username = " + username);
        response.setContentType("text/html");

        String value = String.valueOf(MysqlConnector.instance.checkUsername(username));
        response.getWriter().write(value);
        System.out.println("Send -> " + value);
    }


}

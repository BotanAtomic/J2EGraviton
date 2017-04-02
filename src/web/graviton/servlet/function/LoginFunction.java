package web.graviton.servlet.function;

import web.graviton.core.Account;
import web.graviton.mysql.MysqlConnector;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Botan on 30/03/2017. 20:07
 */
public class LoginFunction extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("user");
        String password = request.getParameter("password");
        boolean remember = Boolean.parseBoolean(request.getParameter("remember"));

        String result = "success";

        if (!MysqlConnector.instance.checkUsername(username)) {
            Account account = MysqlConnector.instance.loadAccount(username, password);
            if (account == null)
                result = "password";
            else {
                if (remember) {
                    Cookie cookie = new Cookie("account", account.getUsername());
                    cookie.setMaxAge(1728000 + request.getCookies().length); // 20 days
                    response.addCookie(new Cookie("account", account.getUsername()));
                }
                request.getSession().setAttribute("account", account);
            }
        } else
            result = "identifiant";


        response.setContentType("text/html");
        response.getWriter().write(result);
        System.out.println("Send -> " + result);
    }


}

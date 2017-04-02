package web.graviton.servlet.pages;

import web.graviton.common.HtmlGenerator;
import web.graviton.common.Utils;
import web.graviton.core.Account;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Botan on 29/03/2017. 21:33
 */
public class MainServlet extends HttpServlet {
    private final static String NAME = "Acceuil";

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getSession().getAttribute("logout") != null && ((boolean) request.getSession().getAttribute("logout"))) {
            Utils.clearCookie(request, response);
            request.getSession().invalidate();
            request.logout();
            request.getSession().setAttribute("logout", false);
        }


        Account account = Utils.loadAccount(request);

        request.setAttribute("head", HtmlGenerator.generateHead(NAME));
        request.setAttribute("subFooter", HtmlGenerator.generateSubFooter());
        request.setAttribute("footer", HtmlGenerator.generateFooter());
        request.setAttribute("javaScriptContent", HtmlGenerator.generateJavaScriptContent());
        request.setAttribute("news", HtmlGenerator.generateNews());
        request.setAttribute("headerData", HtmlGenerator.generateHeader((byte) 0, account != null));
        request.setAttribute("top", HtmlGenerator.generateTop(account));
        request.setAttribute("breadCrumbs", HtmlGenerator.generateBreadCrumbs(NAME));


        this.getServletContext().getRequestDispatcher("/WEB-INF/index.jsp").forward(request, response);
    }



}

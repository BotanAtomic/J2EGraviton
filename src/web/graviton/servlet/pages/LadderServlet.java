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
public class LadderServlet extends HttpServlet {
    private final static String NAME = "Classement";

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Account account = Utils.loadAccount(request);

        request.setAttribute("head", HtmlGenerator.generateHead(NAME));
        request.setAttribute("subFooter", HtmlGenerator.generateSubFooter());
        request.setAttribute("footer", HtmlGenerator.generateFooter());
        request.setAttribute("javaScriptContent", HtmlGenerator.generateJavaScriptContent());
        request.setAttribute("headerData", HtmlGenerator.generateHeader((byte) 1, account != null));
        request.setAttribute("top", HtmlGenerator.generateTop(account));
        request.setAttribute("breadCrumbs", HtmlGenerator.generateBreadCrumbs(NAME));

        this.getServletContext().getRequestDispatcher("/WEB-INF/ladders.jsp").forward(request, response);
    }

}

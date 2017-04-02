package web.graviton.common;

import web.graviton.core.Account;
import web.graviton.mysql.MysqlConnector;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicReference;

/**
 * Created by Botan on 01/04/2017. 23:11
 */
public class Utils {

    private static String getCookieValue(HttpServletRequest request, String name) {
        if (request.getCookies() == null)
            return "";

        AtomicReference<Cookie> currentCookie = new AtomicReference<>();
        Arrays.stream(request.getCookies()).filter(Objects::nonNull).
                filter(cookie -> cookie.getName().equals(name)).forEach(cookie -> {
            if (currentCookie.get() == null)
                currentCookie.set(cookie);
            else if (currentCookie.get().getMaxAge() < cookie.getMaxAge() && cookie.getSecure())
                currentCookie.set(cookie);

        });
        return currentCookie.get() == null ? "" : currentCookie.get().getValue();
    }


    public static Account loadAccount(HttpServletRequest request) {
        Account account = (Account) request.getSession().getAttribute("account");

        if (account == null) {
            String username = getCookieValue(request, "account");

            System.err.println("Cookie username = " + username);

            if (username != null && !username.isEmpty()) {
                account = MysqlConnector.instance.loadAccount(username);
                System.err.println("Connected by Cookie");
            }

        } else
            System.err.println("Connected by Session attributes");

        return account;
    }

    public static void clearCookie(HttpServletRequest request, HttpServletResponse response) {
        if (request.getCookies() == null)
            return;

        for (Cookie cookie : request.getCookies()) {
            cookie.setValue("");
            cookie.setPath("/");
            cookie.setMaxAge(0);
            response.addCookie(cookie);
        }

        Arrays.stream(request.getCookies()).filter(Objects::nonNull).forEach(cookie -> {
            System.err.println("Deleting cookie named " + cookie.getName());
            cookie.setValue("");
            cookie.setPath("/");
            cookie.setMaxAge(0);
            response.addCookie(cookie);
            System.err.println("Cookie delete");
        });
    }

}

package web.graviton.core;

import java.io.Serializable;

/**
 * Created by Botan on 01/04/2017. 18:05
 */

public class Account implements Serializable {
    private final String username, question, response;
    private String password, email;

    public Account(String username, String password, String question, String response, String email) {
        this.username = username;
        this.password = password;
        this.question = question;
        this.response = response;
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public String getQuestion() {
        return question;
    }

    public String getResponse() {
        return response;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }
}

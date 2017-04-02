package web.graviton.mysql;

import com.mysql.cj.jdbc.Driver;
import web.graviton.core.Account;

import java.sql.*;

/**
 * Created by Botan on 31/03/2017. 20:59
 */
public class MysqlConnector {
    public static MysqlConnector instance;

    static {
        instance = new MysqlConnector();
    }

    private Connection connection;

    public MysqlConnector() {
        try {
            new Driver();
            this.connection = DriverManager.getConnection("jdbc:mysql://localhost/login?user=root&serverTimezone=UTC");
            System.out.println("Successfully connected to database");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public boolean checkUsername(String username) {
        try {
            ResultSet resultSet = connection.createStatement().executeQuery("SELECT * from accounts where name='" + username + "';");
            return (resultSet == null || !resultSet.next() || resultSet.wasNull());
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public Account loadAccount(String username, String password) {
        try {
            Account account = null;
            ResultSet resultSet = connection.createStatement().executeQuery("SELECT * from accounts where name='" + username + "' AND password='" + password + "';");
            if(resultSet.next())
                account = new Account(resultSet.getString("name"), resultSet.getString("password"), resultSet.getString("question"), resultSet.getString("answer"), resultSet.getString("email"));
            return account;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public Account loadAccount(String username) {
        try {
            Account account = null;
            ResultSet resultSet = connection.createStatement().executeQuery("SELECT * from accounts where name='" + username + "';");
            if(resultSet.next())
                account = new Account(resultSet.getString("name"), resultSet.getString("password"), resultSet.getString("question"), resultSet.getString("answer"), resultSet.getString("email"));
            return account;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public boolean createAccount(String username, String password, String question, String response, String email) {
        if (checkUsername(username)) {
            try {
                String query = " insert into accounts (name, password, question, answer, email) values (?, ?, ?, ?, ?)";

                PreparedStatement preparedStmt = connection.prepareStatement(query);
                preparedStmt.setString(1, username);
                preparedStmt.setString(2, password);
                preparedStmt.setString(3, question);
                preparedStmt.setString(4, response);
                preparedStmt.setString(5, email);

                preparedStmt.execute();

            } catch (SQLException e) {
                e.printStackTrace();
            }
            return true;
        } else {
            return false;
        }
    }

}

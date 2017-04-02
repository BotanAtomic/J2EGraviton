<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>

<html lang="en">

<meta http-equiv="content-type" content="text/html;charset=UTF-8">

${head}

<body ng-app="ngArkalys" ng-cloak="">
<div ng-controller="loadingController"></div>

${top}

${headerData}

${breadCrumbs}

<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
            <form class="reg-page" action="JavaScript:subscribe()">
                <div class="reg-header">
                    <h2>Formulaire d'inscription</h2>
                </div>


                <p id="data_response"></p>

                <div id="identifiantLabel" class="input-group margin-bottom-20">
                    <span class="input-group-addon"><i class="fa fa-user fa-fw"></i></span>
                    <input id="identifiant" onkeyup="checkIdentifiant()" name="user" type="text" placeholder="Identifiant" class="form-control">
                </div>

                <div id="passwordLabel" class="input-group margin-bottom-20">
                    <span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
                    <input id="password" onkeyup="checkPasswords()" name="password" type="password"
                           placeholder="Mot de passe" class="form-control"
                           required="required" ng-model="formData.password" autocomplete="off">
                </div>


                <div id="passwordConfirmLabel" class="input-group margin-bottom-20">
                    <span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
                    <input id="confirm_password" onkeyup="checkPasswords()" name="confirm_password" type="password"
                           placeholder="Confirmation du mot de passe"
                           class="form-control" required="required" ng-model="formData.password2" autocomplete="off">
                </div>

                <hr>
                <div class="input-group margin-bottom-20">
                    <span class="input-group-addon"><i class="fa fa-user fa-fw"></i></span>
                    <input id="question" name="question" type="text" placeholder="Question secrète" class="form-control"
                           required="required" ng-model="formData.question">
                </div>

                <div class="input-group margin-bottom-20">
                    <span class="input-group-addon"><i class="fa fa-user fa-fw"></i></span>
                    <input id="response" name="response" type="text" placeholder="Réponse secrète" class="form-control"
                           required="required" ng-model="formData.response">
                </div>

                <hr>

                <div class="input-group margin-bottom-20" ng-class="{ 'has-error' : errorEmail }">
                    <span class="input-group-addon"><i class="fa fa-envelope fa-fw"></i></span>
                    <input id="email" name="email" type="email" placeholder="Adresse email" class="form-control"
                           required="required"
                           ng-model="formData.email">
                </div>

                <hr>

                <div class="row">
                    <div class="col-md-6">
                        <i><p>En vous inscrivant, vous acceptez nos <a style="color : red;" href="cgv.jsp">C.G.V</a> &
                            <a style="color : red;" href="cgu.jsp">C.G.U</a></p></i>
                    </div>
                    <div class="col-md-6">
                        <button id="submitButton" class="btn btn-u pull-right" type="submit">S'inscrire</button>
                    </div>
                </div>

            </form>
        </div>
    </div><!--/row-->
</div>

${news}

${subFooter}

${footer}

${javaScriptContent}
<script>

    function checkPasswords() {
        var password = $("#password").val();
        var confirmedPassword = $("#confirm_password").val();

        var passwordLabel = $("#passwordLabel");
        var passwordConfirmLabel = $("#passwordConfirmLabel");

        if (password == confirmedPassword && password.length >= 4) {
            passwordLabel.addClass("has-success");
            passwordLabel.removeClass("has-error");

            passwordConfirmLabel.addClass("has-success");
            passwordConfirmLabel.removeClass("has-error");
        } else {

            passwordLabel.addClass("has-error");
            passwordLabel.removeClass("has-success");

            passwordConfirmLabel.addClass("has-error");
            passwordConfirmLabel.removeClass("has-success");
        }
    }

    function checkIdentifiant() {
        var text = $("#identifiant").val();

        if (text.length < 4)
            $("#identifiantLabel").addClass("has-error");
        else
            checkUsername(text);
    }

    function subscribe() {
        setNotification(true, "Traitement des informations en cours", true);
        $("#submitButton").prop("disabled", true);

        var username = $("#identifiant").val();
        var password = $("#password").val();
        var confirmedPassword = $("#confirm_password").val();
        var question = $("#question").val();
        var response = $("#response").val();
        var email = $("#email").val();

        request("..\\checkUsername?username=" + username, function parse(responseData) {
            if (responseData == "true") {
                if (password == confirmedPassword) {
                    post("..\\createAccount/", buildPersonalData(username, password, question, response, email), function (secondResponseData) {
                        if (secondResponseData == "true") {
                            setNotification(true, "Votre compte à été créer avec succès, redirection en cours...", true);
                            setTimeout(function () {
                                window.location.href = '..\\home\\';
                            }, 3000);
                        } else {
                            setNotification(false, secondResponseData, false);
                            $("#submitButton").prop("disabled", false);
                        }
                    });
                } else {
                    $("#password").addClass("has-error");
                    $("#confirm_password").addClass("has-error");
                    setNotification(false, "Les mots de passes ne correspondent pas", false);
                    $("#submitButton").prop("disabled", false);
                }
            } else {
                setNotification(false, "Nom d'utilisateur indisponible", false);
                $("#submitButton").prop("disabled", false);
            }
        });

    }

    function buildPersonalData(user, password, question, response, email) {
        return "user=" + user + "&password=" + password + "&question=" + question + "&response=" + response + "&email=" + email;
    }

    function setNotification(value, message, loader) {
        var dataResponse = $("#data_response");
        dataResponse.removeClass(!value ? "alert alert-success" : "alert alert-danger");
        dataResponse.addClass(value ? "alert alert-success" : "alert alert-danger");
        dataResponse.text(message + "   ");
        if (loader)
            dataResponse.append('<img style="float:right;" id="loader" src="../assets/img/loader.gif" width="6%" height="6%"/>');

    }

    function checkUsername(username) {
        var identifiantLabel = $("#identifiantLabel");
        request("..\\checkUsername?username=" + username, function parse(response) {
            if (response == "true") {
                identifiantLabel.removeClass("has-error");
                identifiantLabel.addClass("has-success");
            } else {
                identifiantLabel.removeClass("has-success");
                identifiantLabel.addClass("has-error");
            }
        });
    }

</script>

</body>

</html>
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
            <form class="reg-page" action="JavaScript:login()">
                <div class="reg-header">
                    <h2>Connexion</h2>
                </div>


                <p id="response_data"></p>

                <div id="identifiantLabel" class="input-group margin-bottom-20">
                    <span class="input-group-addon"><i class="fa fa-user fa-fw"></i></span>
                    <input id="identifiant" name="user" type="text" placeholder="Identifiant" class="form-control">
                </div>

                <div id="passwordLabel" class="input-group margin-bottom-20">
                    <span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
                    <input id="password" name="password" type="password" placeholder="Mot de passe" class="form-control" required="required" ng-model="formData.password" autocomplete="off">
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label class="checkbox"><input id="remember" type="checkbox">Se souvenir de moi</label>
                    </div>
                    <div class="col-md-6">
                        <button id="submitButton" class="btn btn-u pull-right" type="submit">S'inscrire</button>
                    </div>
                </div>

                <hr>

                <label><a href="../forget/">Mot de passe oublié ?</a></label>

            </form>
        </div>
    </div><!--/row-->
</div>

${news}

${subFooter}

${footer}

${javaScriptContent}

<script>
    function login() {
        $("#submitButton").prop("disabled", true);
        var username = $("#identifiant").val();
        var password = $("#password").val();
        var remember = $("#remember").prop("checked");

        request("..\\connect?user=" + username + " &password=" + password+ "&remember=" + remember, function (data) {
            if (data == "success") {
                setNotification(true, "Connexion effectué avec succès");
                setTimeout(function () {
                    window.location.href = '..\\home\\';
                }, 2000);
            } else if (data == "password") {
                errorPassword();
                setNotification(false, "Mot de passe incorrect");
                $("#submitButton").prop("disabled", false);
            } else if (data == "identifiant") {
                errorUsername();
                setNotification(false, "Nom d'utilisateur incorrect");
                $("#submitButton").prop("disabled", false);
            }
        });
    }

    function errorUsername() {
        $("#identifiantLabel").addClass("has-error");
    }

    function errorPassword() {
        $("#passwordLabel").addClass("has-error");
    }

    function setNotification(value, message) {
        var dataResponse = $("#response_data");
        dataResponse.removeClass(!value ? "alert alert-success" : "alert alert-danger");
        dataResponse.addClass(value ? "alert alert-success" : "alert alert-danger");
        dataResponse.text(message);
    }

</script>

</body>

</html>
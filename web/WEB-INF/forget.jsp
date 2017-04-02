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

<div class="container" ng-controller="loginController">
    <div class="row">
        <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
            <form class="reg-page" ng-submit="processForm()">
                <div class="reg-header">
                    <h2>Connexion</h2>
                </div>


                <p>Votre mot de passe vous sera directement envoyé par courrier</p>
                <p class="alert alert-success">Votre mot de passe à été envoyé à l'adresse email que vous avez
                    utilisée</p>

                <div class="input-group margin-bottom-20" ng-class="{ 'has-error' : errorEmail }">
                    <span class="input-group-addon"><i class="fa fa-user fa-fw"></i></span>
                    <input name="email" type="user" placeholder="Identifiant" class="form-control" required="required"
                           ng-model="formData.user">
                </div>

                <div class="row">
                    <div class="col-md-6">

                    </div>
                    <div class="col-md-6">
                        <button id="submitButton" class="btn btn-u pull-right" type="submit">Confirmer</button>
                    </div>
                </div>

                <hr>
                <p><i>L'envoi peut prendre un certain temps, si au bout de 10 minutes vous n'avez toujours rien reçu,
                    contactez le support</i></p>


            </form>
        </div>
    </div><!--/row-->
</div>

${news}

${subFooter}

${footer}

${javaScriptContent}

</body>

</html>
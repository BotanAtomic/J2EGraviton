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

<div class="sub_container">
    <form id="contact" action="" method="post">
        <h3>Contacter le support</h3>
        <h4>Veuillez décrire très précisement votre problème, les images sous forme d'URL sont autorisés.</h4>
        <fieldset>
            <input placeholder="Nom & Prénom" type="text" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
            <input placeholder="Adresse mail" type="email" tabindex="2" required>
        </fieldset>
        <fieldset>
            <input placeholder="Sujet" type="text" tabindex="3" required>
        </fieldset>
        <fieldset>
            <textarea placeholder="Message" tabindex="4" required></textarea>
        </fieldset>
        <fieldset>
            <button name="submit" type="submit" id="contact-submit">Envoyer</button>
        </fieldset>
    </form>
</div>

${news}

${subFooter}

${footer}

${javaScriptContent}

</body>

</html>
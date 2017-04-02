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
    <div class="row-fluid">
        <div class="well">
            <blockquote><h4>Téléchargement et installation de l'Uplauncher</h4></blockquote>

            <span translate="Après avoir créer un compte <a style = 'color : red;' href='register.jsp'>ici</a>, pour accéder au serveur, il
            vous faudra télécharger l'installateur du jeu. </br>
            Pour ce faire nous avons développé un launcher qui va se charger de télécharger et d'assurer la mise à jour
            des fichiers de votre installation.">
            </span>
            <br>
            </br>
            <b><span translate="Choisissez la version adaptée a votre système d'exploitation"></span></b>
            <br>
            </br>
            <a href="Arkalys-Uplauncher.zip">
                <button type="button" class="btn btn-3d btn-tertiary mr-xs mb-sm btn-lg"><i class="fa fa-windows"></i>
                    Cliquez ici pour telecharger la version Windows
                </button>
            </a>
            <br>
            </br>
            <a href="Arkalys-Uplauncher.zip">
                <button type="button" class="btn btn-3d btn-tertiary mr-xs mb-sm btn-lg"><i class="fa fa-linux"></i>
                    Cliquez ici pour telecharger la version Linux
                </button>
            </a>
            <br>
            </br>
            <a href="Arkalys-Uplauncher.zip">
                <button type="button" class="btn btn-3d btn-tertiary mr-xs mb-sm btn-lg"><i class="fa fa-apple"></i>
                    Cliquez ici pour telecharger la version Mac
                </button>
            </a>

        </div>
    </div><!--/row-fluid-->
</div>

${news}

${subFooter}

${footer}

${javaScriptContent}

</body>

</html>
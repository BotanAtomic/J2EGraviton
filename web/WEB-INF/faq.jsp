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
        <div class="panel-group acc-v1 margin-bottom-40" id="accordion">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseOne">
                            Comment rejoindre le serveur ?
                        </a>
                    </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse">
                    <div class="panel-body">
                        Pour nous rejoindre, il vous suffit de suivre les étapes de <a class="btn btn-xs btn-primary"
                                                                                       href="joinus.jsp">Nous
                        Rejoindre</a>.
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseTwo">
                            Comment accéder à la Boutique en jeu?
                        </a>
                    </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse">
                    <div class="panel-body">
                        <p>Vous devez taper la commande ".tp shop" dans la zone de chat en jeu.<br>
                            Pour connaître toutes les commandes, tapez ".tp".</p>

                        Vos jetons sont donc affichés dans votre inventaire à tout moment.
                        Pour les actualiser en cas d'achat il faut vous déconnecter, reconnecter.<br>
                        <b>Remarque :</b> Les jetons sont liés à votre compte de jeu et non à votre compte web.
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseThree">
                            Comment obtenir des jetons ?
                        </a>
                    </h4>
                </div>
                <div id="collapseThree" class="panel-collapse collapse">
                    <div class="panel-body">
                        <p>Tout d’abord, connectez vous sur notre site et rendez-vous dans votre gestionnaire de compte.<br>
                            Vous devez choisir le compte de jeu sur lequel créditer les jetons.</p>
                        <u>Pour obtenir des jetons vous disposez de 2 moyens :</u>
                        <br>
                        <ul>
                            <li>En votant pour Arkalys sur RPG-Paradize toutes les 3 heures, <a
                                    class="btn btn-xs btn-primary" href="vote.html">Cliquez ici</a>.
                            </li>
                            <li>En utilisant les différents moyens de paiements proposés dans la boutique, <a
                                    class="btn btn-xs btn-primary" href="shop.html">Cliquez ici</a>.
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseFour">
                            Quels sont les moyens de paiement disponible ?
                        </a>
                    </h4>
                </div>
                <div id="collapseFour" class="panel-collapse collapse">
                    <div class="panel-body">
                        Nous vous proposons différents moyens de paiements comme:
                        <ul>
                            <li>Appel téléphonique</li>
                            <li>SMS</li>
                            <li>Carte néosurf</li>
                            <li>Paypal</li>
                            <li>Carte Bancaire</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseFive">
                            Je rencontre des problèmes au lancement de mon jeu
                        </a>
                    </h4>
                </div>
                <div id="collapseFive" class="panel-collapse collapse">
                    <div class="panel-body">
                        <u>Par exemple :</u>
                        <ul>
                            <li>Le launcher ne veut pas s'exécuter ou effectuer les mises à jour</li>
                            <li>Le chargement est bloqué à 50% ou 63%</li>
                        </ul>
                        Dans ce cas, effectuer entièrement le: <a class="btn btn-xs btn-primary"
                                                                  href="http://community.arkalys.com/topic/18-problèmes-généraux-liés-au-lancement/">Tutoriel
                        suivant.</a><br>
                        Si le problème persiste, n’hésitez pas à demander de l’aide sur le <a
                            class="btn btn-xs btn-primary" href="http://community.arkalys.com/">Forum</a>
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseSix">
                            Je ne peux pas connecter un de mes personnages
                        </a>
                    </h4>
                </div>
                <div id="collapseSix" class="panel-collapse collapse">
                    <div class="panel-body">
                        <p>Si vous pouvez connecter <b>certains personnages et pas d’autres</b>, et que au chargement le
                            sablier tourne jusque 100% et puis vous déconnecte, il s’agit d’un problème isolé sur le
                            personnage.</p>
                        Dans ce cas, veuillez ouvrir un <a class="btn btn-xs btn-primary" href="support.html">ticket
                        support</a> en mentionnant le nom du personnage en question.
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseSeven">
                            Je rencontre des problèmes visuels après la connexion
                        </a>
                    </h4>
                </div>
                <div id="collapseSeven" class="panel-collapse collapse">
                    <div class="panel-body">
                        <u>Par exemple :</u>
                        <ul>
                            <li>Écran noir</li>
                            <li>Je n’ai pas le nom des PNJ</li>
                            <li>Mon jeu est bloqué</li>
                            <li>Autre..</li>
                        </ul>
                        Dans ce cas, effectuer entièrement le <a class="btn btn-xs btn-primary"
                                                                 href="http://community.arkalys.com/topic/18-problèmes-généraux-liés-au-lancement/">Tutoriel
                        suivant.</a><br>
                        Si le problème persiste, n’hésitez pas à demander de l’aide sur le <a
                            class="btn btn-xs btn-primary" href="http://community.arkalys.com/">Forum.</a>
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseEight">
                            J’ai acheté des jetons et il m’indique que le code est invalide
                        </a>
                    </h4>
                </div>
                <div id="collapseEight" class="panel-collapse collapse">
                    <div class="panel-body">
                        <p><b>Vérifier d’abord d’avoir correctement entré le code reçu.</b></p>
                        <u>Si le code a été obtenu par Appel ou SMS :</u>
                        <p>Veuillez ouvrir un ticket support en mentionnant le code en question, votre numéro de
                            téléphone et la date et l’heure de l’achat. (Pour les SMS, un screenshot du message
                            également).</p>
                        <u>Si c’est un code Neosurf :</u>
                        <p>Lorsque vous achetez une carte Neosurf, vous recevez un code. Ce code ne <b>peut pas être
                            entré directement sur notre boutique.</b>
                            Il doit d’abord être validé par notre partenaire, qui vous donnera un nouveau code (à entrer
                            sur notre site).
                            Cette procédure est expliqué lors de l’achat.</p>

                        <u>Si le problème persiste</u>, veuillez ouvrir un <a class="btn btn-xs btn-primary"
                                                                              href="support.html">ticket support</a> en
                        mentionnant le code de la carte néosurf, le code reçu par notre partenaire et une photo de la
                        carte néosurf.
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseNine">
                            Je n’ai pas reçu mes jetons sur mon personnage après un achat sur le site
                        </a>
                    </h4>
                </div>
                <div id="collapseNine" class="panel-collapse collapse">
                    <div class="panel-body">
                        <p><b>Vous ne recevez pas les jetons sur votre personnage, mais directement sous forme de
                            parchemins dans votre banque.</b></p>
                        <ul>
                            <li>Si vous n’avez rien dans votre banque, faites une déconnexion, reconnexion.</li>
                            <li>Si vous n’avez rien dans l’heure qui suit l’achat, vérifier que celui-ci a bien été
                                validé par le site (dans votre gestionnaire de comptes, mes achats).
                            </li>
                        </ul>
                        Ensuite seulement, veuillez ouvrir un <a class="btn btn-xs btn-primary" href="support.html">ticket
                        support</a>
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseTen">
                            J’ai un problème ou une question et seul un membre de l’équipe peut m’aider
                        </a>
                    </h4>
                </div>
                <div id="collapseTen" class="panel-collapse collapse">
                    <div class="panel-body">
                        <u>Par exemple :</u>
                        <ul>
                            <li>J’ai oublié une adresse e-mail</li>
                            <li>Je souhaite déposer plainte</li>
                            <li>Je souhaite faire une réclamation</li>
                            <li>Je souhaite proposer une amélioration</li>
                        </ul>
                        Vous devez ouvrir un <a class="btn btn-xs btn-primary" href="support.html">ticket support</a>.
                        <b>Il est interdit de le faire via le Forum.</b>
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseEleven">
                            Le support ne me répond pas, c’est normal ?
                        </a>
                    </h4>
                </div>
                <div id="collapseEleven" class="panel-collapse collapse">
                    <div class="panel-body">
                        Selon votre demande et la disponibilité de l'équipe, le temps de traitement peut varier entre
                        plusieurs heures et plusieurs jours.<br>
                        Nous vous demandons de <b>ne pas recréer de ticket, ni de répondre à celui déjà créé.</b><br>
                        Cela aura pour effet de vous remettre en bas de la liste d’attente et donc allonger le temps de
                        réponse.
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseTwelve">
                            Comment fournir une image de preuve au support ?
                        </a>
                    </h4>
                </div>
                <div id="collapseTwelve" class="panel-collapse collapse">
                    <div class="panel-body">
                        Veuillez suivre le <a class="btn btn-xs btn-primary"
                                              href="http://community.arkalys.com/topic/11-comment-faire-des-partages-décran/">Tutoriel
                        suivant.</a><br>
                        Vous pouvez ensuite copier le lien obtenu, directement sur la zone de texte du ticket.
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion"
                           href="#collapseThirteen">
                            Je suis sur MAC et mon jeu rencontre des dysfonctionnements
                        </a>
                    </h4>
                </div>
                <div id="collapseThirteen" class="panel-collapse collapse" style="height: auto;">
                    <div class="panel-body">
                        <p><b>Remarque :</b> Notre launcher MAC étant en bêta test, nous ne pouvons garantir son
                            fonctionnement optimal.
                            Pour profiter pleinement d’ARKALYS, il vous est recommandé d’utiliser Windows.</p>
                        <ul>
                            <li>Tout d’abord, vous pouvez jeter un oeil au: <a class="btn btn-xs btn-primary"
                                                                               href="http://community.arkalys.com/topic/88-arkalys-pour-mac/">Sujet
                                suivant.</a></li>
                            <li>Ensuite, vérifiez que lors de l’installation vous avez glissé ARKALYS dans le dossier
                                applications de votre MAC.
                            </li>
                            <li>Si le problème persiste, vous pouvez effectuer certaines étapes du: <a
                                    class="btn btn-xs btn-primary"
                                    href="http://community.arkalys.com/topic/18-problèmes-généraux-liés-au-lancement/">Tutoriel
                                windows.
                            </a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

${news}

${subFooter}

${footer}

${javaScriptContent}

</body>

</html>
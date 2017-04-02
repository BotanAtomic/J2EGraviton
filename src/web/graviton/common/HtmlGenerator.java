package web.graviton.common;

import web.graviton.core.Account;

/**
 * Created by Botan on 29/03/2017. 21:50
 */
public class HtmlGenerator {

    private static String subFooter;

    public static String generateFooter() {
        return "<footer id=\"footer\">\n" +
                "\t<div class=\"footer-top wow fadeInUp\" data-wow-duration=\"1000ms\" data-wow-delay=\"300ms\">\n" +
                "\t\t<div class=\"container text-center\">\n" +
                "\t\t\t<center>\n" +
                "\t\t\t\t</p>\n" +
                "\t\t\t\t<a href=\"index.html\"><img class=\"img-responsive\" src=\"..\\assets\\img\\logo.png\" alt=\"\"></a>\n" +
                "\t\t\t\t<p/>\n" +
                "\t\t\t\t<p style=\"color : black;\"> &copy; 2016 Graviton. Tout droits reservés. </p>\n" +
                "\t\t\t</center>\n" +
                "\t\t</div>\n" +
                "\t</div>\n" +
                "</footer>";
    }

    public static String generateSubFooter() {
        return (subFooter != null && !subFooter.isEmpty()) ? subFooter : "<div class=\"footer\">\n" +
                "    <div class=\"container\">\n" +
                "        <div class=\"row-fluid\">\n" +
                "            <div class=\"col-md-4 md-margin-bottom-40\">\n" +
                "                <div class=\"headline\"><h2>Le staff</h2></div>\n" +
                "                <p class=\"margin-bottom-25 md-margin-bottom-40\">\n" +
                "                    Administrateurs\n" +
                "                    <br>\n" +
                "                    <span class=\"btn btn-u btn-primary\" tooltip-placement=\"top\"\n" +
                "                          tooltip=\"Administrateur - Développeur - Gestionnaire IT\">Orochi</span>\n" +
                "                    <span class=\"btn btn-u btn-primary\" tooltip-placement=\"top\" tooltip=\"Administrateur - Développeur\">Botan</span>\n" +
                "                    <span class=\"btn btn-u btn-primary\" tooltip-placement=\"top\" tooltip=\"Community Manager\">Botan</span>\n" +
                "                    <br>\n" +
                "                    <br>\n" +
                "                    Moderateur\n" +
                "                    <br>\n" +
                "                    <span class=\"btn btn-u btn-primary\" tooltip-placement=\"top\" tooltip=\"Responsable Jeu\">Botan</span>\n" +
                "                    <span class=\"btn btn-u btn-primary\" tooltip-placement=\"top\" tooltip=\"Maître de Jeu\">Botan</span>\n" +
                "                    <span class=\"btn btn-u btn-primary\" tooltip-placement=\"top\" tooltip=\"Maître de Jeu\">Botan</span>\n" +
                "                </p>\n" +
                "            </div>\n" +
                "\n" +
                "\n" +
                "            <div class=\"col-md-6\">\n" +
                "                <div class=\"headline\"><h3>Contactez-nous</h3></div>\n" +
                "                <p>Une question sans réponse ? </br>En savoir plus sur nos services ?</br> Prenez soin de consulter auparavant la FAQ : les réponses que vous cherchez y figurent peut-être déjà !</p>\n" +
                "                <p><i class=\"fa fa-envelope\"></i> <a href=\"support.html\">SUPPORT</a></p>\n" +
                "                <p><i class=\"fa fa-lightbulb-o\"></i> <a href=\"..\\cvg\\\">C.G.V</a></p>\n" +
                "                <p><i class=\"fa fa-comment\"></i> <a href=\"..\\cgu\\\">C.G.U</a></p>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</div>";
    }

    public static String generateJavaScriptContent() {
        return "<script type=\"text/javascript\" src=\"..\\assets\\plugins\\bootstrap\\js\\bootstrap.min.js\"></script>\n" +
                "<script type=\"text/javascript\" src=\"..\\assets\\plugins\\hover-dropdown.min.js\"></script>\n" +
                "<script type=\"text/javascript\" src=\"..\\assets\\plugins\\back-to-top.js\"></script>\n" +
                "<script type=\"text/javascript\" src=\"..\\assets\\plugins\\flexslider\\jquery.flexslider-min.js\"></script>\n" +
                "<script type=\"text/javascript\" src=\"..\\assets\\plugins\\parallax-slider\\js\\modernizr.js\"></script>\n" +
                "<script type=\"text/javascript\" src=\"..\\assets\\plugins\\horizontal-parallax\\js\\sequence.jquery-min.js\"></script>\n" +
                "<script type=\"text/javascript\" src=\"..\\assets\\plugins\\horizontal-parallax\\js\\horizontal-parallax.js\"></script>\n" +
                "<script type=\"text/javascript\" src=\"..\\assets\\plugins\\bxslider\\jquery.bxslider.js\"></script>\n" +
                "<script type=\"text/javascript\" src=\"..\\assets\\js\\app.js\"></script>\n" +
                "<script type=\"text/javascript\" src=\"..\\assets\\js\\pages\\index.js\"></script>\n" +
                "<script type=\"text/javascript\">\n" +
                "    jQuery(document).ready(function () {\n" +
                "        App.init();\n" +
                "        App.initSliders();\n" +
                "    });\n" +
                "</script>\n" +
                "<script type=\"text/javascript\" src=\"https://www.arkalys.com/..\\assets/plugins/respond.js\"></script>";
    }

    public static String generateNews() {
        return "<div class=\"container\">\n" +
                "    <div class=\"row-fluid\">\n" +
                "        <div class=\"well\">\n" +
                "            <blockquote><h4>Exemple titre de news</h4></blockquote>\n" +
                "\n" +
                "            <span>Voilà tout ce que peut contenir une news.. Pourquoi pas y mettre plus tard des images etc ?</span>\n" +
                "            <a href=\"Arkalys-Uplauncher.zip\">\n" +
                "                <button type=\"button\" class=\"btn btn-3d btn-tertiary mr-xs mb-sm btn-lg\"><i class=\"fa fa-download\"></i>\n" +
                "                    Cliquez ici pour telecharger Uplauncher(.exe)\n" +
                "                </button>\n" +
                "            </a>\n" +
                "        </div>\n" +
                "        <div class=\"well\">\n" +
                "            <blockquote><h4>Exemple titre de news</h4></blockquote>\n" +
                "\n" +
                "            <span>Voilà tout ce que peut contenir une news.. Pourquoi pas y mettre plus tard des images etc ?</span>\n" +
                "        </div>\n" +
                "        <div class=\"well\">\n" +
                "            <blockquote><h4>Exemple titre de news</h4></blockquote>\n" +
                "\n" +
                "            <span>Voilà tout ce que peut contenir une news.. Pourquoi pas y mettre plus tard des images etc ?</span>\n" +
                "        </div>\n" +
                "        <div class=\"well\">\n" +
                "            <blockquote><h4>Exemple titre de news</h4></blockquote>\n" +
                "\n" +
                "            <span>Voilà tout ce que peut contenir une news.. Pourquoi pas y mettre plus tard des images etc ?</span>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</div>";
    }

    public static String generateHead(String name) {
        return "<head>\n" +
                "    <title>Graviton | " + name + "</title>\n" +
                "\n" +
                "    <!-- Meta -->\n" +
                "    <meta charset=\"utf-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "\n" +
                "\n" +
                "    <!-- CSS Global Compulsory-->\n" +
                "    <link rel=\"stylesheet\" href=\"..\\assets\\plugins\\bootstrap\\css\\bootstrap.css\">\n" +
                "    <link rel=\"stylesheet\" type=\"text/css\" href=\"..\\assets\\css\\style.css\" media=\"all\">\n" +
                "    <link rel=\"stylesheet\" type=\"text/css\" href=\"..\\assets\\css\\headers\\header1.css\" media=\"all\">\n" +
                "    <link rel=\"shortcut icon\" href=\"..\\assets\\img\\favicon.ico\">\n" +
                "\n" +
                "    <!-- CSS Implementing Plugins -->\n" +
                "    <link rel=\"stylesheet prefetch\" href=\"..\\assets\\plugins\\font-awesome\\css\\font-awesome.min.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"..\\assets\\plugins\\flexslider\\flexslider.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"..\\assets\\plugins\\bxslider\\jquery.bxslider.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"..\\assets\\plugins\\horizontal-parallax\\css\\horizontal-parallax.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"..\\assets\\plugins\\nouislider\\jquery.nouislider.min.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"..\\assets\\plugins\\loading-bar\\loading-bar.min.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"..\\assets\\js\\ngModules\\ng-table\\ng-table.min.css\">\n" +
                "\n" +
                "    <!-- CSS Theme -->\n" +
                "    <link rel=\"stylesheet\" type=\"text/css\" href=\"..\\assets\\css\\themes\\default.css\" media=\"all\">\n" +
                "    <link rel=\"stylesheet\" href=\"..\\assets\\css\\themes\\headers\\header1-blue.css\" id=\"style_color-header-1\">\n" +
                "    <link rel=\"stylesheet\" type=\"text/css\" href=\"..\\assets\\css\\pages\\page_404_error.css\" media=\"all\">\n" +
                "    <link rel=\"stylesheet\" type=\"text/css\" href=\"..\\assets\\css\\pages\\page_log_reg_v1.css\" media=\"all\">\n" +
                "\n" +
                "\n" +
                "    <!-- Javascript -->\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\js\\angular.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\js\\angular-sanitize.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\js\\ngModules\\nouislider.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\js\\ngModules\\ui-bootstrap-0.10.0.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\js\\ngModules\\angular-translate.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\js\\ngModules\\angular-translate-loader-static-files.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\js\\ngModules\\textAngular.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\js\\ngModules\\angularjs-gravatardirective.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\js\\ngModules\\ng-table\\ng-table.min.js\"></script>\n" +
                "    <script src=\"..\\siddii.github.io\\angular-feeds\\app\\angular-feeds\\angular-feeds.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\plugins\\jquery-1.10.2.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\plugins\\jquery-migrate-1.2.1.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\plugins\\nouislider\\jquery.nouislider.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\plugins\\loading-bar\\loading-bar.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\plugins\\hideseek\\jquery.hideseek.min.js\"></script>\n" +
                "    <script type=\"text/javascript\" src=\"..\\assets\\js\\graviton.js\"></script>\n" +
                "</head>";
    }


    public static String generateHeader(byte index, boolean connected) {
        String header = "<div class=\"header\">\n" +
                "    <div class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"navbarController\">\n" +
                "        <div class=\"container\">\n" +
                "            <div class=\"navbar-header\">\n" +
                "                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n" +
                "                        data-target=\".navbar-responsive-collapse\">\n" +
                "                    <span class=\"sr-only\">Barre de navigation</span>\n" +
                "                    <i class=\"fa fa-bars fa-lg\"></i>\n" +
                "                </button>\n" +
                "                <a class=\"navbar-brand\" href=\"index-1.htm\">\n" +
                "                    <img id=\"logo-header\" src=\"..\\assets\\img\\logo.png\" alt=\"Logo\">\n" +
                "                </a>\n" +
                "            </div>\n" +
                "\n" +
                "            <div class=\"collapse navbar-collapse navbar-responsive-collapse\">\n" +
                "                <ul class=\"nav navbar-nav navbar-right\">\n" +
                "                    <li " + (index == 0 ? " class='active'" : "") + ">\n" +
                "                        <a href=\"..\\home\\\">\n" +
                "                            Acceuil\n" +
                "                        </a>\n" +
                "                    </li>\n";

        if (connected) {
            header += "<li class=\"dropdown\">\n" +
                    "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Profil</a>\n" +
                    "<ul class=\"dropdown-menu\">\n" +
                    "<li><a href=\"/site/users/account\"><i class=\"fa fa-user\"></i> Mon compte</a></li>\n" +
                    "<li><a href=\"/site/users/logout\"><i class=\"fa fa-sign-out\"></i> Déconnexion</a></li>\n" +
                    "</ul>\n" +
                    "</li>";
        }
        header += "                    <li " + (index == 1 ? " class='active'" : "") + ">\n" +
                "                        <a href=\"..\\ladder\\\">\n" +
                "                            Classements\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                    <li " + (index == 2 ? " class='active'" : "") + ">\n" +
                "                        <a href=\"..\\join\\\">\n" +
                "                            Nous rejoindre\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                    <li " + (index == 3 ? " class='active'" : "") + ">\n" +
                "                        <a href=\"..\\faq\\\">\n" +
                "                            FAQ\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                    <li " + (index == 4 ? " class='active'" : "") + ">\n" +
                "                        <a href=\"..\\support\\\">\n" +
                "                            Support\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                    <li " + (index == 5 ? " class='active'" : "") + ">\n" +
                "                        <a href=\"http://www.rpg-paradize.com/?page=vote&amp;vote=42689\">\n" +
                "                            Vote\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                </ul>\n" +
                "\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</div>";

        return header;
    }

    public static String generateTop(Account account) {
        String top =
                "<div class=\"top\">\n" +
                        "    <div class=\"container\">\n" +
                        "        <ul class=\"loginbar pull-right\">\n" +
                        "            <li ng-controller=\"langController\">\n" +
                        "                <i style='color : green;' class=\"fa fa-globe\"></i>\n" +
                        "                <a>Serveurs</a>\n" +
                        "                <ul class=\"lenguages\">\n" +
                        "                    <li active=\"true\">\n" +
                        "                        <a href=\"#\" ng-click=\"changeLanguage('fr')\">\n" +
                        "                            Many\n" +
                        "                            <i class=\"fa fa-check\"></i>\n" +
                        "                        </a>\n" +
                        "                    </li>\n" +
                        "                    <li active=\"true\">\n" +
                        "                        <a href=\"#\" ng-click=\"changeLanguage('en')\">\n" +
                        "                            Brumaire\n" +
                        "                            <i class=\"fa fa-check\"></i>\n" +
                        "                        </a>\n" +
                        "                    </li>\n" +
                        "                    <li active=\"true\">\n" +
                        "                        <a href=\"#\" ng-click=\"changeLanguage('es')\">\n" +
                        "                            Djaul\n" +
                        "                            <i class=\"fa fa-check\"></i>\n" +
                        "                        </a>\n" +
                        "                    </li>\n" +
                        "                    <li active=\"true\">\n" +
                        "                        <a href=\"#\" ng-click=\"changeLanguage('pt')\">\n" +
                        "                            Agride\n" +
                        "                            <i class=\"fa fa-check\"></i>\n" +
                        "                        </a>\n" +
                        "                    </li>\n" +
                        "                </ul>\n" +
                        "            </li>\n";
        if (account == null) {
            top += "            <li class=\"devider\"></li>\n" +
                    "            <li>\n" +
                    "                <i class=\"fa fa-sign-in\"></i>\n" +
                    "                <a href=\"..\\login\\\">Connexion</a>\n" +
                    "            </li>\n" +
                    "            <li class=\"devider\"></li>\n" +
                    "            <li>\n" +
                    "                <i class=\"fa fa-book\"></i>\n" +
                    "                <a href=\"..\\register\\\">Inscription</a>\n" +
                    "            </li>\n" +
                    "        </ul>\n" +
                    "    </div>\n" +
                    "</div>";
        } else {
            top += "            <li class=\"devider\"></li>\n" +
                    "            <li>\n" +
                    "                <a>Bienvenue <b><i>" + account.getUsername() + "</i></b></a>\n" +
                    "            </li>\n" +
                    "            <li class=\"devider\"></li>\n" +
                    "            <li>\n" +
                    "                <a href=\"..\\logout\\\">Deconnexion\n" +
                    "                <i class=\"fa fa-sign-in\"></i></a>\n" +
                    "            </li>\n" +
                    "        </ul>\n" +
                    "    </div>\n" +
                    "</div>";
        }

        return top;
    }

    public static String generateBreadCrumbs(String name) {
        return "<div class=\"breadcrumbs margin-bottom-40\">\n" +
                "    <div class=\"container\">\n" +
                "        <h1 class=\"pull-left\">" + name + "</h1>\n" +
                "        <ul class=\"pull-right breadcrumb\">\n" +
                "            <li><a href=\"..\\home\">Acceuil</a></li>\n" +
                "            <li class=\"active\">" + name + "</li>\n" +
                "        </ul>\n" +
                "    </div>\n" +
                "</div>";
    }


}

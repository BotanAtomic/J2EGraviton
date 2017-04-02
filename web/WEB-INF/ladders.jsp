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
        <ul class="nav nav-tabs tabs">
            <li class="active">
                <a href="#pvmLadder" data-toggle="tab">Classement PvM</a>
            </li>
            <li>
                <a href="#pvpLadder" data-toggle="tab">Classement Kolizéum</a>
            </li>
            <li>
                <a href="#guildsLadder" data-toggle="tab">Classement des Guildes</a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane active" id="pvmLadder">
                <h2>Classement PvM (Serveur)</h2>

                <div class="table-responsive">
                    <table class="table table-condensed table-bordered table-hover">
                        <thead>
                        <tr>
                            <th class="col-sm-1">#</th>
                            <th class="col-sm-6">Personnage</th>
                            <th class="col-sm-1">Classe</th>
                            <th class="col-sm-1">Niveau</th>
                            <th class="col-sm-2">Experience</th>
                        </tr>
                        </thead>
                        <tbody>
                        <%
                            for (int i = 1; i <= 50; i++) {
                                out.println("<tr>");
                                out.println("<td>" + i + "</td>");
                                out.println("<td>Name...</td>");
                                out.println("<td><img src=\"../assets/img/gfx/10.png\"/></td>");
                                out.println("<td>" + i * 4 + "</td>");
                                out.println("<td>500</td>");
                                out.println("</tr>");
                            }
                        %>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="tab-pane" id="pvpLadder">
                <h2>Classement Kolizéum (Serveur)</h2>

                <div class="table-responsive">
                    <table class="table table-condensed table-bordered table-hover">
                        <thead>
                        <tr>
                            <th class="col-sm-1">#</th>
                            <th class="col-sm-4">Personnage</th>
                            <th class="col-sm-1">Victoire</th>
                            <th class="col-sm-2">Defaite</th>
                            <th class="col-sm-2">Cote</th>
                        </tr>
                        </thead>

                        <tbody>
                        <%
                            for (int i = 1; i <= 50; i++) {
                                out.println("<tr>");
                                out.println("<td>" + i + "</td>");
                                out.println("<td>Name...</td>");
                                out.println("<td>" + i * 12 + "</td>");
                                out.println("<td>" + i * 2 + "</td>");
                                out.println("<td>500</td>");
                                out.println("</tr>");
                            }
                        %>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="tab-pane" id="guildsLadder">
                <h2>Classement des Guildes (Serveur)</h2>

                <div class="table-responsive">
                    <table class="table table-condensed table-bordered table-hover">
                        <thead>
                        <tr>
                            <th class="col-sm-1">#</th>
                            <th class="col-sm-7">Nom de la guilde</th>
                            <th class="col-sm-2">Niveau</th>
                            <th class="col-sm-2">Experience</th>
                        </tr>
                        </thead>
                        <tbody>
                        <%
                            for (int i = 1; i <= 50; i++) {
                                out.println("<tr>");
                                out.println("<td>" + i + "</td>");
                                out.println("<td>Guilde de ouf</td>");
                                out.println("<td>" + i * 4 + "</td>");
                                out.println("<td>5065460</td>");
                                out.println("</tr>");
                            }
                        %>
                        </tbody>
                    </table>
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
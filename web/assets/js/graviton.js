var ngArkalys = angular.module('ngArkalys', ['ngSanitize', 'nouislider', 'ui.bootstrap', 'pascalprecht.translate', 'textAngular', 'chieffancypants.loadingBar', 'angularjs-gravatardirective', 'ngTable', 'feeds']);
var headerLoaded = false;

ngArkalys.config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '/assets/i18n/locale-',
        suffix: '.json'
    });

    //$translateProvider.preferredLanguage('fr');
    $translateProvider.fallbackLanguage('fr');
    $translateProvider.determinePreferredLanguage();
});

ngArkalys.directive("compileHtml", function ($parse, $sce, $compile) {
    return {
        restrict: "A",
        link: function (scope, element, attributes) {

            var expression = $sce.parseAsHtml(attributes.compileHtml);

            var getResult = function () {
                return expression(scope);
            };

            scope.$watch(getResult, function (newValue) {
                var linker = $compile(newValue);
                element.append(linker(scope));
            });
        }
    }
});

function themeController($scope, $http, $location, $translate) {
    $scope.changeTheme = function (key) {
        $http({
            method: 'POST',
            url: '/ajax/setTheme',
            data: $.param({'theme': key}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    };
}


function langController($scope, $http, $location, $translate) {
    $scope.useLang = 'fr';

    $http({
        method: 'POST',
        url: '/ajax/getLanguage',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .success(function (data) {
            if (data != '') {
                $translate.use(data);
                $scope.useLang = data;
            }
            else {
                $translate.use('fr');
                $scope.useLang = 'fr';
            }
        });

    $scope.changeLanguage = function (key) {
        if ($translate.proposedLanguage() != key) {
            $translate.use(key);
            $scope.useLang = key;

            $http({
                method: 'POST',
                url: '/ajax/setLanguage',
                data: $.param({'lang': key}),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
        }
    };
}

function uptimeController($scope, $http) {
    $scope.charsCount = 0;

    $http({
        method: 'POST',
        url: '/ajax/getWorldState',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .success(function (data) {
            $scope.charsCount = data;
        });
}

function navbarController($scope, $http, $location, $translate) {
    $scope.isFound = false;

    $scope.isActive = function (viewLocation) {
        if (window.location.pathname.indexOf(viewLocation) != -1) {
            $scope.isFound = true;
            return true;
        }

        return false;
    };
}

function loadingController($scope, $http, $timeout, $translate) {
    $http({
        method: 'POST',
        url: '/ajax/getTheme',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .success(function (data) {
            if (data != null) {
                function applyChange() {
                    jQuery('.theme-' + data).click();
                };

                $timeout(applyChange, 1);
            }
        });
}

function loginController($scope, $http, $timeout, $translate) {
    $scope.formData = {};
    $("#submitButton").prop('disabled', false);

    $scope.processForm = function () {
        $scope.errorEmail = '';
        $scope.errorPassword = '';
        $("#submitButton").prop('disabled', true);

        $http({
            method: 'POST',
            url: '/login/verifyLogin',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0') {
                    $scope.errorEmail = data.errors.email;
                    $scope.errorPassword = data.errors.password;

                    $("#submitButton").prop('disabled', false);
                } else {
                    $translate('PAGE.LOGIN.WAITSIGNIN').then(function (translation) {
                        $scope.message = translation;
                    }, function (translationId) {
                        $scope.message = translationId;
                    });

                    function signIn() {
                        location = $scope.referer;
                    };

                    $timeout(signIn, 2000);
                }
            });
    };
}

function forgetController($scope, $http, $timeout, $translate) {
    $scope.formData = {};
    $("#submitButton").prop('disabled', false);

    $scope.processForm = function () {
        $("#submitButton").prop('disabled', true);

        $scope.formData.recaptcha_response_field = $("#g-recaptcha-response").val();

        $scope.errorEmail = '';
        $scope.errorCaptcha = '';

        $http({
            method: 'POST',
            url: '/login/verifyForget',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                //Recaptcha.reload();

                if (data != '0') {
                    $scope.errorEmail = data.errors.email;
                    $scope.errorCaptcha = data.errors.captcha;

                    $("#submitButton").prop('disabled', false);
                } else {
                    $translate('PAGE.FORGET.SENDMAIL').then(function (translation) {
                        $scope.message = translation;
                    }, function (translationId) {
                        $scope.message = translationId;
                    });

                    function signIn() {
                        location = '/login';
                    };

                    $timeout(signIn, 2000);
                }
            });
    };
}

function registerController($scope, $http, $timeout, $translate) {
    $scope.formData = {};
    $("#submitButton").prop('disabled', false);

    $scope.processForm = function () {
        $("#submitButton").prop('disabled', true);

        $scope.formData.recaptcha_response_field = $("#g-recaptcha-response").val();

        $scope.errorFirstname = '';
        $scope.errorLastname = '';
        $scope.errorEmail = '';
        $scope.errorPassword = '';
        $scope.errorPasswordConfirm = '';
        $scope.errorCaptcha = '';

        $http({
            method: 'POST',
            url: '/register/verifyRegister',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                //Recaptcha.reload();

                if (data != '0') {
                    $scope.errorFirstname = data.errors.firstname;
                    $scope.errorLastname = data.errors.lastname;
                    $scope.errorEmail = data.errors.email;
                    $scope.errorPassword = data.errors.password;
                    $scope.errorPasswordConfirm = data.errors.password_confirm;
                    $scope.errorCaptcha = data.errors.captcha;

                    $("#submitButton").prop('disabled', false);
                } else {
                    $translate('PAGE.REGISTER.THANKYOU').then(function (translation) {
                        $scope.message = translation;
                    }, function (translationId) {
                        $scope.message = translationId;
                    });

                    function signIn() {
                        location = '/profile';
                    };

                    $timeout(signIn, 2000);
                }
            });
    };
}

function modAccountController($scope, $http, $timeout, $translate) {
    $scope.formData = {};
    $("#submitButton").prop('disabled', false);

    $scope.processForm = function () {
        $("#submitButton").prop('disabled', true);

        $scope.message = '';
        $scope.unconfirmedEmail = '';
        $scope.errorFirstname = '';
        $scope.errorLastname = '';
        $scope.errorEmail = '';

        $http({
            method: 'POST',
            url: '/profile/modAccount',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0' && data != '1') {
                    $scope.errorFirstname = data.errors.firstname;
                    $scope.errorLastname = data.errors.lastname;
                    $scope.errorEmail = data.errors.email;
                } else if (data == 0) {
                    $translate('PAGE.PROFILE.PROFILE_EDIT.CONFIRM_MSG').then(function (translation) {
                        $scope.message = translation;
                    }, function (translationId) {
                        $scope.message = translationId;
                    });
                } else if (data == 1) {
                    $translate('PAGE.PROFILE.PROFILE_EDIT.CONFIRM_EMAIL_MSG').then(function (translation) {
                        $scope.message = translation;
                    }, function (translationId) {
                        $scope.message = translationId;
                    });

                    $scope.unconfirmedEmail = $scope.formData.email;
                }

                $("#submitButton").prop('disabled', false);
            });
    };
}

function modPassController($scope, $http, $timeout, $translate) {
    $scope.formData = {};

    $scope.processForm = function () {
        $scope.message = '';
        $scope.errorOldPassword = '';
        $scope.errorPassword = '';
        $scope.errorPasswordConfirm = '';

        $http({
            method: 'POST',
            url: '/profile/modPassword',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0') {
                    $scope.errorOldPassword = data.errors.old_password;
                    $scope.errorPassword = data.errors.password;
                    $scope.errorPasswordConfirm = data.errors.password_confirm;
                } else {
                    $scope.formData = {};

                    $translate('PAGE.PROFILE.CHANGEPASS.CONFIRM_MSG').then(function (translation) {
                        $scope.message = translation;
                    }, function (translationId) {
                        $scope.message = translationId;
                    });
                }
            });
    };
}

function gameController($scope, $http, $timeout, $translate) {
    $http({
        method: 'POST',
        url: '/profile/getGameAcct',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .success(function (data) {
            if (data.acct1)
                $scope.gameAcct1 = data.acct1;

            if (data.acct2)
                $scope.gameAcct2 = data.acct2;

            if (data.acct3)
                $scope.gameAcct3 = data.acct3;

            if (data.acct4)
                $scope.gameAcct4 = data.acct4;

            $scope.actualGameAcct = $scope.gameAcct1;
        });

    $scope.formData = {};

    $scope.processPassForm = function () {
        $scope.message = '';
        $scope.errorPassword = '';
        $scope.errorPasswordConfirm = '';

        $scope.formData.Id = $scope.actualGameAcct.id;

        $http({
            method: 'POST',
            url: '/profile/modGamePassword',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0') {
                    $scope.errorPassword = data.errors.password;
                    $scope.errorPasswordConfirm = data.errors.password_confirm;
                } else {
                    $scope.formData = {};

                    $translate('PAGE.PROFILE.ACCTMANAGER.CONFIRM_MSG').then(function (translation) {
                        $scope.message = translation;
                    }, function (translationId) {
                        $scope.message = translationId;
                    });
                }
            });
    };

    $scope.processAcctForm = function () {
        $scope.acctMessage = '';
        $scope.errorAcctUsername = '';
        $scope.errorAcctNickname = '';
        $scope.errorAcctPassword = '';
        $scope.errorAcctPasswordConfirm = '';

        $http({
            method: 'POST',
            url: '/profile/registerNewAcct',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0') {
                    $scope.errorAcctUsername = data.errors.username;
                    $scope.errorAcctNickname = data.errors.nickname;
                    $scope.errorAcctPassword = data.errors.password;
                    $scope.errorAcctPasswordConfirm = data.errors.password_confirm;
                } else {
                    $scope.formData = {};

                    $translate('PAGE.PROFILE.ACCTMANAGER.CREATION_MSG').then(function (translation) {
                        $scope.acctMessage = translation;
                    }, function (translationId) {
                        $scope.acctMessage = translationId;
                    });

                    function refreshProfile() {
                        location = '/profile';
                    };

                    $timeout(refreshProfile, 2000);
                }
            });
    };
}

function shopController($scope, $http, $sce) {

    $scope.formData = {};
    $scope.postData = {};
    $scope.paypalData = {};

    $scope.countries = [];

    $scope.paliers = [
        {
            PId: '',
            Solution: '',
            CountryId: 0,
            Title: 'Moyen de paiement indisponible pour ce pays',
            Text: 'Moyen de paiement indisponible pour ce pays'
        }
    ];

    //$scope.message = "Paiement validé avec succès, nos petits Bworks ont expédiés vos 0 jetons directement <b>dans votre banque !</b>";

    $http({
        method: 'POST',
        url: '/profile/getGameAcct',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .success(function (data) {
            $scope.gameAccts = data;
        });

    $http({
        method: 'POST',
        url: '/profile/getProfile',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .success(function (data) {
            $scope.Profile = data;
        });

    function getFirstPalier(countryId) {
        var len = $scope.paliers.length;
        for (var i = 0; i < len; i++) {
            if ($scope.paliers[i].CountryId == countryId)
                return $scope.paliers[i];
        }

        return null;
    }

    function in_array(array, id) {
        for (var i = 0; i < array.length; i++) {
            if (angular.equals(array[i].id, id)) {
                return true;
            }
        }

        return false;
    }

    $scope.selectCountry = function () {
        var palier = getFirstPalier($scope.formData.selectCountry.id);
        $scope.formData.selectPalier = palier != null ? palier : $scope.paliers[0];
    }

    $scope.selectNeosurf = function () {
        var palier = getFirstPalier(99);
        $scope.formData.selectPalier = palier != null ? palier : $scope.paliers[0];
    }

    $scope.selectPaypal = function () {
        var palier = getFirstPalier(999);
        $scope.formData.selectPalier = palier != null ? palier : $scope.paliers[0];
    }

    $scope.selectCreditCard = function () {
        var palier = getFirstPalier(9999);
        $scope.formData.selectPalier = palier != null ? palier : $scope.paliers[0];
    }

    $http({
        method: 'GET',
        url: '/shop/getRates',
        headers: {'Content-Type': 'application/json'}
    })
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (!in_array($scope.countries, value.country.id))
                    $scope.countries.push(value.country);

                var smsText = "Envoi: <b>" + value.keyword + "</b> au <b>" + value.shortcode + "</b><span class='legal_graphic'>" + value.legal_graphic.shortcode + "</span><br>" + value.mention;
                smsText += "<br><br>" + value.legal_graphic.footer;

                var phoneText = "Téléphonez au: <b>" + value.phone + "</b> - " + value.mention;

                var neosurfText = "Neosurf est une carte prépayée en vente chez votre buraliste qui vous permet d'acheter sur Internet de manière simple, sécurisée et anonyme.<br>";
                neosurfText += "Pour trouvez un point de vente veuillez vous référé à <a class='btn btn-u btn-u-small' href='http://www.neosurf.info/public/fr/presentation.php?pageID=3' target='_blank'>cette CARTE</a><br><br>";
                neosurfText += "Il est aussi possible d'acheter une carte Neosurf en ligne <a class='btn btn-u btn-u-small' href='http://www.myneosurf.com/acheter/code-neosurf-en-ligne.html' target='_blank'>ICI</a><hr>";
                neosurfText += "<a class='btn btn-u btn-u-small' href='" + value.link + '&email=' + $scope.Profile.Email + "' target='_blank'>Cliquez ICI</a> pour procéder au paiement et obtenir vos codes. Il vous suffira ensuite de les saisir ci-dessous:";

                var paypalLink = "https://buy.dedipass.com/v1/paypal?key=48237cb9506ec58510ec69640ee5b54e&rate=";
                var paypalText = "<a class='btn btn-u btn-u-small' href='" + paypalLink + value.rate + '&email=' + $scope.Profile.Email + "' target='_blank'>Cliquez ICI</a> pour procéder au paiement et obtenir vos codes. Il vous suffira ensuite de les saisir ci-dessous:";

                var creditCardText = "<a class='btn btn-u btn-u-small' href='" + value.link + '&email=' + $scope.Profile.Email + "' target='_blank'>Cliquez ICI</a> pour procéder au paiement et obtenir vos codes. Il vous suffira ensuite de les saisir ci-dessous:";

                var palier = {
                    PId: value.rate,
                    Solution: value.solution,
                    CountryId: value.country.id,
                    Title: value.solution + ' - ' + value.user_earns + ' ' + value.virtual_currency_name + '(' + value.user_price + ' ' + value.user_currency + ')',
                    Text: (value.solution == 'SMS' ? smsText : phoneText)
                };

                switch (value.solution) {
                    case 'Neosurf':
                        palier.CountryId = 99;
                        palier.Text = neosurfText;
                        break;
                    case 'Paypal':
                        palier.CountryId = 999;
                        palier.Text = paypalText;
                        break;
                    case 'Carte bancaire':
                        palier.CountryId = 9999;
                        palier.Text = creditCardText;
                        break;
                }

                $scope.paliers.push(palier);
            });

            $scope.formData.selectCountry = $scope.countries[1];
            $scope.selectCountry();
        });

    $("#submitButton").prop('disabled', false);
    $scope.paypalData.amount = 10;

    $scope.codeSubmit = function () {
        $scope.message = '';
        $scope.errorCode = '';
        $scope.errorAccount = '';

        if ($scope.formData.selectAccount != null) {
            if ($scope.formData.codeText) {
                $("#submitButton").prop('disabled', true);
                $("#submitButton").html("Validation en cours, merci de patienter...");

                $scope.postData.CODE = $scope.formData.codeText;
                $scope.postData.PId = $scope.formData.selectPalier.PId;
                $scope.postData.acctId = $scope.formData.selectAccount;

                $http({
                    method: 'POST',
                    url: '/shop/verifyCode',
                    data: $.param($scope.postData),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                    .success(function (data) {
                        $scope.formData.codeText = '';
                        $("#submitButton").prop('disabled', false);
                        $("#submitButton").html("Valider");

                        if (data.errors != null) {
                            $scope.errorCode = data.errors.code;
                        } else {
                            if (data == "")
                                $scope.errorCode = "Un problème est survenu lors de la validation du code, merci de rafraîchir la page et réessayer dans quelques instants.";
                            else
                                $scope.message = "Paiement validé avec succès, nos petits Bworks ont expédiés vos " + data + " jetons directement dans votre banque !";
                        }
                    });
            }
        }
        else {
            $scope.errorAccount = 'Vous devez sélectionner un compte de jeu !';
        }
    };

    $scope.neosurfSubmit = function () {
        $scope.errorMessage = '';

        if ($scope.formData.selectAccount != null) {
            $scope.paypalData.acctId = $scope.formData.selectAccount;

            $http({
                method: 'POST',
                url: '/shop/verifyPaypal',
                data: $.param($scope.paypalData),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (data) {
                    $("#submitButton").prop('disabled', false);

                    if (data != '0') {
                        if (data.errors != null)
                            $scope.errorMessage = data.errors.paypal;
                        else
                            location = data;
                    } else {
                        $scope.message = data.success.paypal;
                    }
                });
        }
        else {
            $scope.errorMessage = 'Vous devez sélectionner un compte de jeu !';
        }
    };

    $scope.paypalSubmit = function () {
        $scope.errorMessage = '';

        if ($scope.formData.selectAccount != null) {
            $scope.paypalData.acctId = $scope.formData.selectAccount;

            $http({
                method: 'POST',
                url: '/shop/verifyPaypal',
                data: $.param($scope.paypalData),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (data) {
                    $("#submitButton").prop('disabled', false);

                    if (data != '0') {
                        if (data.errors != null)
                            $scope.errorMessage = data.errors.paypal;
                        else
                            location = data;
                    } else {
                        $scope.message = data.success.paypal;
                    }
                });
        }
        else {
            $scope.errorMessage = 'Vous devez sélectionner un compte de jeu !';
        }
    };
}

function voteController($scope, $http, $timeout, $translate) {
    $http({
        method: 'POST',
        url: '/profile/getGameAcct',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .success(function (data) {
            if (data.acct1)
                $scope.gameAcct1 = data.acct1;

            if (data.acct2)
                $scope.gameAcct2 = data.acct2;

            if (data.acct3)
                $scope.gameAcct3 = data.acct3;

            if (data.acct4)
                $scope.gameAcct4 = data.acct4;

            $scope.actualGameAcct = $scope.gameAcct1;
        });

    $scope.formData = {};
    $scope.viewInput = false;
    $("#submitButton").prop('disabled', false);
    $("#submitLink").prop('disabled', false);

    $scope.processForm = function () {
        if ($scope.viewInput) {
            $("#submitButton").prop('disabled', true);

            $scope.formData.acctId = $scope.actualGameAcct.id;
            $scope.formData.recaptcha_response_field = $("#g-recaptcha-response").val();

            $scope.errorInputOut = '';

            $http({
                method: 'POST',
                url: '/vote/verifyVote',
                data: $.param($scope.formData),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (data) {
                    //Recaptcha.reload();
                    $scope.formData = {};

                    if (data != '0') {
                        $scope.errorInputOut = data.errors.inputOut;

                        $("#submitButton").prop('disabled', false);
                    } else {
                        $translate('PAGE.VOTE.SUCCESS_MSG').then(function (translation) {
                            $scope.message = translation;
                        }, function (translationId) {
                            $scope.message = translationId;
                        });
                    }
                });
        }
        else {
            $("#submitLink").prop('disabled', true);
            $translate('PAGE.VOTE.WAITING_MSG').then(function (translation) {
                $("#submitLink").html(translation);
            }, function (translationId) {
                $("#submitLink").html(translationId);
            });

            function refreshVote() {
                $scope.viewInput = true;
                $("#submitLink").prop('disabled', false);
            };

            $timeout(refreshVote, 20000);
        }
    };
}

function supportController($scope, $http, $timeout) {
    $scope.formData = {};
    $("#submitButton").prop('disabled', false);

    $scope.categories = [
        {Id: 0, name: 'Sélectionnez une catégorie...'},
        {Id: 1, name: 'Signaler un bug ou proposer des suggestions pour le jeu'},
        {Id: 2, name: 'Impossible de se connecter !'},
        {Id: 3, name: 'Gestion de compte'},
        {Id: 4, name: 'Achat ou Paiement'},
        {Id: 5, name: 'Problème en jeu'},
        {Id: 6, name: 'Plaintes envers un joueur'},
        {Id: 7, name: 'Problème technique, d\'ordinateur ou de connexion'}
    ];

    $scope.categoriesInfos = [
        '',
        '',
        'Veuillez consulter notre Forum afin de vérifier que le serveur n\'est pas Hors Ligne pour une quelconque raison.',
        'Nous ne faisons pas de suppression ni de restauration de compte et nous n\'intervenons plus en cas de hack ou de perte.',
        'Si vous n\'avez pas reçu vos jetons, merci de vérifier votre banque en jeu. Déconnectez et reconnectez-vous pour vérifier quelques minutes après.',
        'Veuillez d\'abord effectuer entièrement le tutoriel suivant: http://forum.arkalys.com/topic/7/tuto-probl%C3%A8mes-g%C3%A9n%C3%A9raux-li%C3%A9s-au-lancement',
        'Assurez-vous d\'avoir une preuve (screenshot) afin de déposer plainte.',
        'Veuillez d\'abord effectuer entièrement le tutoriel suivant: http://forum.arkalys.com/topic/7/tuto-probl%C3%A8mes-g%C3%A9n%C3%A9raux-li%C3%A9s-au-lancement'
    ];

    $scope.ticketCategory = $scope.categories[0];

    $scope.processForm = function () {
        if ($scope.ticketCategory.Id != 0) {
            $("#submitButton").prop('disabled', true);
            $scope.message = '';
            $scope.errorCategory = '';
            $scope.errorSubject = '';
            $scope.errorTicket = '';

            $scope.formData.categoryId = $scope.ticketCategory.Id;

            $http({
                method: 'POST',
                url: '/support/verifyTicket',
                data: $.param($scope.formData),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (data) {
                    if (data.errors != null) {
                        $scope.errorCategory = data.errors.category;
                        $scope.errorSubject = data.errors.subject;
                        $scope.errorTicket = data.errors.content;

                        $("#submitButton").prop('disabled', false);
                    } else {
                        $scope.formData = {};
                        $scope.message = "Votre ticket a été soumis avec succès !";

                        function refreshTicket() {
                            location = '/support/ticket/' + data;
                        };

                        $timeout(refreshTicket, 2000);
                    }
                });
        } else {
            $scope.errorCategory = "Vous devez sélectionner une catégorie !";
        }
    };
}

function ticketController($scope, $http, $timeout) {
    $scope.email = '';

    $scope.formData = {};

    $("#submitButton").prop('disabled', false);
    $("#toggleButton").prop('disabled', false);

    $scope.processForm = function () {
        $("#submitButton").prop('disabled', true);
        $scope.message = '';
        $scope.errorReply = '';
        $scope.errorToggle = '';

        $http({
            method: 'POST',
            url: '/support/verifyReply',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0') {
                    $scope.errorReply = data.errors.reply;

                    $("#submitButton").prop('disabled', false);
                } else {
                    $scope.formData = {};
                    $scope.message = "Votre réponse a été soumise avec succès !";

                    function refreshTicket() {
                        location.reload();
                    };

                    $timeout(refreshTicket, 2000);
                }
            });
    };

    $scope.openTicket = function () {
        $("#toggleButton").prop('disabled', true);
        $scope.message = '';
        $scope.errorReply = '';
        $scope.errorToggle = '';

        $http({
            method: 'POST',
            url: '/support/openTicket',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0') {
                    $scope.errorToggle = data.errors.toggle;

                    $("#toggleButton").prop('disabled', false);
                } else {
                    $scope.formData = {};
                    $scope.message = "Le ticket a été réouvert avec succès !";

                    function refreshTicket() {
                        location.reload();
                    };

                    $timeout(refreshTicket, 2000);
                }
            });
    };

    $scope.closeTicket = function () {
        $("#toggleButton").prop('disabled', true);
        $scope.message = '';
        $scope.errorReply = '';
        $scope.errorToggle = '';

        $http({
            method: 'POST',
            url: '/support/closeTicket',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0') {
                    $scope.errorToggle = data.errors.toggle;

                    $("#toggleButton").prop('disabled', false);
                } else {
                    $scope.formData = {};
                    $scope.message = "Le ticket a été fermé avec succès !";

                    function refreshTicket() {
                        location.reload();
                    };

                    $timeout(refreshTicket, 2000);
                }
            });
    };
}

function ticketAdminController($scope, $http, $timeout) {
    $scope.email = '';

    $scope.formData = {};
    $("#submitButton").prop('disabled', false);
    $("#toggleButton").prop('disabled', false);
    $("#reassignButton").prop('disabled', false);

    $scope.processForm = function () {
        $("#submitButton").prop('disabled', true);
        $scope.message = '';
        $scope.errorReply = '';
        $scope.errorToggle = '';

        $http({
            method: 'POST',
            url: '/admin/verifyTicketReply',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0') {
                    $scope.errorReply = data.errors.reply;

                    $("#submitButton").prop('disabled', false);
                } else {
                    $scope.formData = {};
                    $scope.message = "Votre réponse a été soumise avec succès !";

                    function refreshTicket() {
                        location.reload();
                    };

                    $timeout(refreshTicket, 2000);
                }
            });
    };

    $scope.openTicket = function () {
        $("#toggleButton").prop('disabled', true);
        $scope.message = '';
        $scope.errorReply = '';
        $scope.errorToggle = '';

        $http({
            method: 'POST',
            url: '/admin/openTicket',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0') {
                    $scope.errorToggle = data.errors.toggle;

                    $("#toggleButton").prop('disabled', false);
                } else {
                    $scope.formData = {};
                    $scope.message = "Le ticket a été réouvert avec succès !";

                    function refreshTicket() {
                        location.reload();
                    };

                    $timeout(refreshTicket, 2000);
                }
            });
    };

    $scope.closeTicket = function () {
        $("#toggleButton").prop('disabled', true);
        $scope.message = '';
        $scope.errorReply = '';
        $scope.errorToggle = '';

        $http({
            method: 'POST',
            url: '/admin/closeTicket',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0') {
                    $scope.errorToggle = data.errors.toggle;

                    $("#toggleButton").prop('disabled', false);
                } else {
                    $scope.formData = {};
                    $scope.message = "Le ticket a été fermé avec succès !";

                    function refreshTicket() {
                        location.reload();
                    };

                    $timeout(refreshTicket, 2000);
                }
            });
    };

    $scope.submitAndCloseTicket = function () {
        $("#submitButton").prop('disabled', true);
        $scope.message = '';
        $scope.errorReply = '';
        $scope.errorToggle = '';

        $http({
            method: 'POST',
            url: '/admin/verifyTicketReply',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                if (data != '0') {
                    $scope.errorReply = data.errors.reply;

                    $("#submitButton").prop('disabled', false);
                } else {
                    $scope.closeTicket();
                }
            });
    };
}

function adminController($scope, $compile, $filter, $http, ngTableParams) {
    function applyTableFiltre($defer, data, params) {
        var filteredData = params.filter() ?
            $filter('filter')(data, params.filter()) :
            data;

        var orderedData = params.sorting() ?
            $filter('orderBy')(filteredData, params.orderBy()) :
            filteredData;

        params.total(orderedData.length); // set total for recalc pagination

        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
    }

    function applyTableFiltreCount($defer, data, params, total) {
        var filteredData = params.filter() ?
            $filter('filter')(data, params.filter()) :
            data;

        var orderedData = params.sorting() ?
            $filter('orderBy')(filteredData, params.orderBy()) :
            filteredData;

        params.total(total); // set total for recalc pagination

        $defer.resolve(orderedData);
    }

    $scope.openTicketTableData = null;
    $scope.openTicketTableParams = new ngTableParams({
        page: 1,            // show first page
        count: 25,           // count per page
        sorting: {
            LastActivity: 'asc'     // initial sorting
        }
    }, {
        total: 0, // length of data
        getData: function ($defer, params) {
            if ($scope.openTicketTableData == null) {
                $http({
                    method: 'GET',
                    url: '/admin/getTickets/1',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                    .success(function (data) {
                        $scope.openTicketTableData = data;
                        applyTableFiltre($defer, $scope.openTicketTableData, params);
                    });
            } else {
                applyTableFiltre($defer, $scope.openTicketTableData, params);
            }
        }
    });

    $scope.closeTicketTableData = null;
    $scope.loadCloseTicketTable = function () {
        $scope.closeTicketTableParams = new ngTableParams({
            page: 1,            // show first page
            count: 25,           // count per page
            sorting: {
                Date: 'desc'     // initial sorting
            }
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
                if ($scope.closeTicketTableData == null) {
                    $http({
                        method: 'GET',
                        url: '/admin/getTickets/2',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.closeTicketTableData = data;
                            applyTableFiltre($defer, $scope.closeTicketTableData, params);
                        });
                } else {
                    applyTableFiltre($defer, $scope.closeTicketTableData, params);
                }
            }
        });
    };

    $scope.myTicketTableData = null;
    $scope.loadMyTicketTable = function () {
        $scope.myTicketTableParams = new ngTableParams({
            page: 1,            // show first page
            count: 25,           // count per page
            sorting: {
                LastActivity: 'asc'     // initial sorting
            }
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
                if ($scope.myTicketTableData == null) {
                    $http({
                        method: 'GET',
                        url: '/admin/getTickets/3',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.myTicketTableData = data;
                            applyTableFiltre($defer, $scope.myTicketTableData, params);
                        });
                } else {
                    applyTableFiltre($defer, $scope.myTicketTableData, params);
                }
            }
        });
    };

    $scope.banlistTableData = null;
    $scope.loadBanlistTable = function () {
        $scope.banlistTableParams = new ngTableParams({
            page: 1,            // show first page
            count: 25,           // count per page
            sorting: {
                EndDate: 'asc'     // initial sorting
            }
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
                if ($scope.banlistTableData == null) {
                    $http({
                        method: 'GET',
                        url: '/admin/getBanlist',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            $scope.banlistTableData = data;
                            applyTableFiltre($defer, $scope.banlistTableData, params);
                        });
                } else {
                    applyTableFiltre($defer, $scope.banlistTableData, params);
                }
            }
        });
    };

    $scope.loadTransactionTable = function () {
        $scope.transactionTableParams = new ngTableParams({
            page: 1,            // show first page
            count: 25,           // count per page
            sorting: {
                Date: 'desc'     // initial sorting
            }
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
                $http({
                    method: 'POST',
                    url: '/admin/getTransactions',
                    data: $.param(params.url()),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                    .success(function (data) {
                        applyTableFiltreCount($defer, data.list, params, data.total);
                    });
            }
        });
    };
}

function loggerController($scope, $compile, $filter, $http, ngTableParams) {
    function applyTableFiltre($defer, data, params) {
        var filteredData = params.filter() ?
            $filter('filter')(data, params.filter()) :
            data;

        var orderedData = params.sorting() ?
            $filter('orderBy')(filteredData, params.orderBy()) :
            filteredData;

        params.total(orderedData.length); // set total for recalc pagination

        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
    }

    function applyTableFiltreCount($defer, data, params, total) {
        var filteredData = params.filter() ?
            $filter('filter')(data, params.filter()) :
            data;

        var orderedData = params.sorting() ?
            $filter('orderBy')(filteredData, params.orderBy()) :
            filteredData;

        params.total(total); // set total for recalc pagination

        $defer.resolve(orderedData);
    }

    $scope.loadConnectionsTable = function () {
        $scope.connectionsTableParams = new ngTableParams({
            page: 1,            // show first page
            count: 25,           // count per page
            sorting: {
                Date: 'desc'     // initial sorting
            }
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
                $http({
                    method: 'POST',
                    url: '/logger/getConnections',
                    data: $.param(params.url()),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                    .success(function (data) {
                        applyTableFiltreCount($defer, data.list, params, data.total);
                    });
            }
        });
    };

    $scope.loadNpcShopBuyTable = function () {
        $scope.npcShopBuyTableParams = new ngTableParams({
            page: 1,            // show first page
            count: 25,           // count per page
            sorting: {
                Date: 'desc'     // initial sorting
            }
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
                $http({
                    method: 'POST',
                    url: '/logger/getNpcShopBuy',
                    data: $.param(params.url()),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                    .success(function (data) {
                        applyTableFiltreCount($defer, data.list, params, data.total);
                    });
            }
        });
    };

    $scope.loadNpcTradeTable = function () {
        $scope.npcTradeTableParams = new ngTableParams({
            page: 1,            // show first page
            count: 25,           // count per page
            sorting: {
                Date: 'desc'     // initial sorting
            }
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
                $http({
                    method: 'POST',
                    url: '/logger/getNpcTrade',
                    data: $.param(params.url()),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                    .success(function (data) {
                        applyTableFiltreCount($defer, data.list, params, data.total);
                    });
            }
        });
    };

    $scope.loadPlayerTradeTable = function () {
        $scope.playerTradeTableParams = new ngTableParams({
            page: 1,            // show first page
            count: 25,           // count per page
            sorting: {
                Date: 'desc'     // initial sorting
            }
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
                $http({
                    method: 'POST',
                    url: '/logger/getPlayerTrade',
                    data: $.param(params.url()),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                    .success(function (data) {
                        applyTableFiltreCount($defer, data.list, params, data.total);
                    });
            }
        });
    };

    $scope.loadCommandsTable = function () {
        $scope.commandsTableParams = new ngTableParams({
            page: 1,            // show first page
            count: 25,           // count per page
            sorting: {
                Date: 'desc'     // initial sorting
            }
        }, {
            total: 0, // length of data
            getData: function ($defer, params) {
                $http({
                    method: 'POST',
                    url: '/logger/getCommands',
                    data: $.param(params.url()),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                    .success(function (data) {
                        applyTableFiltreCount($defer, data.list, params, data.total);
                    });
            }
        });
    };

    $scope.loadCommandsTable();
}

function request(url, functionData) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function (event) {
        if (request.readyState === XMLHttpRequest.DONE)
            functionData(request.responseText);
    };

    request.open('GET', url, true);
    request.send(null);

}


function post(url, formData, action) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200)
            action(request.responseText);
    };

    request.open('POST', url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(formData);
}

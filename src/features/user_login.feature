Feature: Inicio de Sesión

@user_login
Scenario: Inicio de sesión exitoso
    Given El usuario ingresa a la página de OrangeHRM
    When Ingreso mis credenciales username "Admin" y password "admin123"
    Then el usuario ingresa satisfactoriamente.

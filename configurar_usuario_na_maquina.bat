echo OFF

echo --- Retirando Usuario GitHUB ----

git config --global --unset-all user.mail
git config --global --unset-all user.name

echo --- Configurando Usuario GitHUB ----

git config --global user.name "Tatiana Ribeiro"
git config --global user.email tatianaribeiro790@gmail.com
echo --- Mostrando a configuração atual do Github no computador
git config --list
echo --- Fim ---
echo --- Joao Lindo  Saudades ---

pause
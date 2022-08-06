# Baufest-Tennis
<p>Personal Project developed during the course imparted by Buafest, this is a modified and better version of said project (modified in my free time and while studying) project wich consisted in some key aspects, like:</p>
<h2>Front End</h2>
<ol>
  <li>Webpack and babel configuration</li>
  <li>Pages in grid form (Home, notFound, player, court, match, trainer and about pages.)</li>
  <li>Navbar to navigate to all the pages</li>
  <li>Bottons to create, add (by modal form), delete (by modal confimation) and consulting more information or actions (like calculate ranking in case of players).</li>
</ol>
<h2>Back End</h2>
<ol>
  <li>spring initializr (spring-boot-starter-data-jpa, spring-boot-starter-jdbc, postgresql, h2, spring-boot-starter-web and spring-boot-starter-test) </li>
  <li>Entyties, Repository, Controller, DTO, Mapper and Services</li>
  <li>CRUD - DAO</li>
  <li>Validate some required info (like player id while adding a player, player not been already in db, etc.)</li>
  <li>Calculate ranking of players based on matches played (win or lose)</li>
  <li>While creating a match, validate that the players exist and the court is not been in use in a range of hours</li>
</ol>

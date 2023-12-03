--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists recipes;
DROP TABLE if exists category;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE `category`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   `name` VARCHAR(255) NOT NULL
);


CREATE TABLE `recipes`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `category` VARCHAR(255) NOT NULL
);
CREATE TABLE `users`(
	`id` INT NOT NULL AUTO_INCREMENT, 
	`username` VARCHAR(255) NOT NULL, 
	`password` VARCHAR(255) NOT NULL, 
	PRIMARY KEY (id)
);

INSERT INTO recipes (name, link, description, category)
VALUES
    ('Crab Cakes', 
    'https://www.yummymummykitchen.com/2021/03/lions-mane-mushroom-recipes-crab-cakes.html#mv-creation-558-jtr',
    'These vegan crab cakes made with mushrooms are even tastier than the original. They are crispy on the outside and tender and meaty on the inside. ',
    'vegan'),
    ('Pupusas de Frijol con Queso',    
    'https://twodollareats.com/recipe/pupusas-de-frijol-con-queso/',
    'Pupusas are the national food of one of my favorite places on earth, El Salvador. On every street corner, I heard the distinct pat-pat-pat of the women making the pupusas and just thinking of it brings me back! As it is basically illegal in El Salvador to eat these with a fork, be prepared to eat with your hands and get a little messy!',
    'vegetarian');



--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists recipes;
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
    `link` TINYINT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `category_id` INT NOT NULL
);


ALTER TABLE 
    `recipes` ADD CONSTRAINT `recipes_category_id_foreign` FOREIGN KEY(`category id`) REFERENCES `category`(`id`);

INSERT INTO category (name)
VALUES  
    ('vegan'),
    ('vegetarian')

INSERT INTO recipes (name, link, description, category_id)
VALUES
    (`Lion's Mane Mushroom Crab Cakes`, 
    https://www.yummymummykitchen.com/2021/03/lions-mane-mushroom-recipes-crab-cakes.html#mv-creation-558-jtr,
    `These vegan crab cakes made with mushrooms are even tastier than the original. They are crispy on the outside and tender and meaty on the inside. `,
    1),
    (`Pupusas de Frijol con Queso`,
    https://twodollareats.com/recipe/pupusas-de-frijol-con-queso/,
    `Pupusas are the national food of one of my favorite places on earth, El Salvador. On every street corner, I heard the distinct pat-pat-pat of the women making the pupusas and just thinking of it brings me back! As it is basically illegal in El Salvador to eat these with a fork, be prepared to eat with your hands and get a little messy!`,
    2)



USE movies_db;

INSERT INTO movies (movie_name)
VALUES ("Braveheart"),
       ("Patriot"),
       ("We Were Soldiers"),
       ("Black Hawk Down"),
       ("Saving Ryan's Private");

INSERT INTO reviews (movie_id, review)
VALUES 
        (1, "Great"),
        (2, "Okay"),
        (3, "Awesome"),
        (4, "It Sucked!"),
        (5, "Not worth watching in theater");

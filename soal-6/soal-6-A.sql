SELECT Name.id, Name.name, Work.name AS work, Category.salary AS salary FROM Name INNER JOIN Work ON Name.id_work = Work.id INNER JOIN Category on Name.id_salary = Category.id
const EntitySchema = require ('typeorm').EntitySchema;

class Post {
    constructor(id, title) {
        this.id = id;
        this.name = name
    }
}

const CategoryEntity = new EntitySchema ({
    name: "Category",
    targer: "Category",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        }
    }
})

module.exports = { CategoryEntity } 